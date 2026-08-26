import { createHash } from "node:crypto";
import { mkdir, readFile, readdir, rename, stat, writeFile } from "node:fs/promises";
import path from "node:path";

function parseArgs(argv) {
  const values = {};
  for (let index = 0; index < argv.length; index += 1) {
    const key = argv[index];
    if (!key.startsWith("--") || index + 1 >= argv.length) {
      throw new Error("INVALID_ARGUMENTS");
    }
    values[key.slice(2)] = argv[index + 1];
    index += 1;
  }
  return values;
}

async function collectJsonl(target, excludedRoot) {
  const resolved = path.resolve(target);
  const info = await stat(resolved);
  if (info.isFile()) {
    return resolved.toLowerCase().endsWith(".jsonl") ? [resolved] : [];
  }

  const files = [];
  for (const entry of await readdir(resolved, { withFileTypes: true })) {
    const child = path.join(resolved, entry.name);
    if (excludedRoot && path.resolve(child) === excludedRoot) continue;
    if (entry.isDirectory()) files.push(...await collectJsonl(child, excludedRoot));
    else if (entry.isFile() && entry.name.toLowerCase().endsWith(".jsonl")) files.push(child);
  }
  return files.sort((left, right) => left.localeCompare(right));
}

function numberField(value, ...names) {
  for (const name of names) {
    if (Number.isFinite(value?.[name])) return Number(value[name]);
  }
  return 0;
}

function addUsage(total, usage) {
  if (!usage || typeof usage !== "object") return;
  const input = numberField(usage, "input_tokens", "inputTokens");
  const cached = numberField(
    usage,
    "cached_input_tokens",
    "cachedInputTokens",
  ) || numberField(usage.input_tokens_details, "cached_tokens");
  const output = numberField(usage, "output_tokens", "outputTokens");
  const all = numberField(usage, "total_tokens", "totalTokens") || input + output;
  total.input_tokens += input;
  total.cached_input_tokens += cached;
  total.output_tokens += output;
  total.total_tokens += all;
}

function textValue(value) {
  if (typeof value === "string") return value;
  if (Array.isArray(value)) return value.join(" ");
  return value == null ? "" : JSON.stringify(value);
}

function isRootWideScan(command) {
  const normalized = command.replaceAll("\\", "/").toLowerCase();
  if (!/\brg(?:\.exe)?\s+--files\b/.test(normalized)) return false;
  const namesArchiveRoot = /\$archive(?:root)?\b|autodesk-developer-docs(?:[\s'"|;)]|$)/.test(normalized);
  const namesSurface = /\/(?:authentication|data-management|model-derivative|viewer|forma|aec-data-model)(?:\/|[\s'"]|$)/.test(normalized)
    || /\$(?:surface|surfacepath|surfaceroot)\b/.test(normalized);
  return namesArchiveRoot && !namesSurface;
}

function median(values) {
  if (values.length === 0) return null;
  const sorted = [...values].sort((left, right) => left - right);
  const middle = Math.floor(sorted.length / 2);
  return sorted.length % 2 ? sorted[middle] : (sorted[middle - 1] + sorted[middle]) / 2;
}

async function readGrade(tracePath) {
  const gradePath = tracePath.replace(/\.jsonl$/i, ".grade.json");
  try {
    const gradeText = (await readFile(gradePath, "utf8")).replace(/^\uFEFF/, "");
    const value = JSON.parse(gradeText);
    return {
      case_id: typeof value.case_id === "string" ? value.case_id : null,
      score: Number.isFinite(value.score) ? Number(value.score) : null,
      hard_failure: typeof value.hard_failure === "boolean" ? value.hard_failure : null,
      accuracy_pass: typeof value.accuracy_pass === "boolean" ? value.accuracy_pass : null,
    };
  } catch (error) {
    if (error?.code === "ENOENT") return null;
    throw new Error("INVALID_GRADE_SIDECAR");
  }
}

async function inspectTrace(tracePath, inputRoot) {
  const raw = await readFile(tracePath, "utf8");
  const lines = raw.split(/\r?\n/).filter((line) => line.trim());
  const usage = { input_tokens: 0, cached_input_tokens: 0, output_tokens: 0, total_tokens: 0 };
  const commands = [];
  let invalid_lines = 0;
  let command_output_chars = 0;

  for (const line of lines) {
    let event;
    try {
      event = JSON.parse(line.replace(/^\uFEFF/, ""));
    } catch {
      invalid_lines += 1;
      continue;
    }
    addUsage(usage, event.usage ?? event.response?.usage);
    const item = event.item;
    if (event.type === "item.completed" && item?.type === "command_execution") {
      const command = textValue(item.command);
      commands.push(command);
      command_output_chars += textValue(item.aggregated_output ?? item.output).length;
    }
  }

  const commandText = commands.join("\n").replaceAll("\\", "/");
  const references = [...new Set(
    [...commandText.matchAll(/references\/(authentication|platform-workflows|viewer|forma)\.md/gi)]
      .map((match) => `${match[1].toLowerCase()}.md`),
  )].sort();
  const grade = await readGrade(tracePath);
  const basename = path.basename(tracePath, path.extname(tracePath));

  return {
    case_id: grade?.case_id ?? basename.replace(/(?:[.-]run[.-]?\d+)$/i, ""),
    trace: path.relative(inputRoot, tracePath).replaceAll("\\", "/"),
    trace_sha256: createHash("sha256").update(raw).digest("hex"),
    trace_bytes: Buffer.byteLength(raw),
    valid_events: lines.length - invalid_lines,
    invalid_lines,
    usage,
    command_calls: commands.length,
    command_output_chars,
    root_wide_scan_count: commands.filter(isRootWideScan).length,
    implementer_loaded: /skills\/autodesk-api-implementer\/skill\.md/i.test(commandText),
    loaded_references: references,
    grade,
  };
}

function renderMarkdown(report) {
  const suite = report.suite;
  const efficiency = report.efficiency;
  const rows = report.runs.map((run) => {
    const score = run.grade?.score ?? "ungraded";
    const hard = run.grade?.hard_failure == null ? "ungraded" : String(run.grade.hard_failure);
    return `| ${run.case_id} | ${score} | ${hard} | ${run.usage.total_tokens} | ${run.root_wide_scan_count} | ${run.loaded_references.join(", ") || "-"} |`;
  });
  return [
    "# Autodesk API Implementer evaluation",
    "",
    `Generated: ${report.generated_at}`,
    "",
    "Raw prompts and final answers are intentionally excluded.",
    "",
    "## Suite",
    "",
    `- Traces: ${suite.traces}`,
    `- Graded: ${suite.graded}`,
    `- Ungraded: ${suite.ungraded}`,
    `- Hard failures: ${suite.hard_failures}`,
    `- Accuracy passes: ${suite.accuracy_passes}`,
    `- Average score: ${suite.average_score ?? "ungraded"}`,
    `- Release gate: ${suite.release_gate}`,
    "",
    "## Efficiency",
    "",
    `- Total tokens: ${efficiency.total_tokens}`,
    `- Median tokens per trace: ${efficiency.median_total_tokens ?? "unavailable"}`,
    `- Command calls: ${efficiency.command_calls}`,
    `- Command output characters: ${efficiency.command_output_chars}`,
    `- Root-wide scans: ${efficiency.root_wide_scan_count}`,
    "",
    "## Runs",
    "",
    "| Case | Score | Hard failure | Total tokens | Root scans | Skill references |",
    "| --- | ---: | --- | ---: | ---: | --- |",
    ...rows,
    "",
  ].join("\n");
}

async function writeAtomic(target, content) {
  const temporary = `${target}.tmp`;
  await writeFile(temporary, content, { encoding: "utf8", flag: "wx" });
  await rename(temporary, target);
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const input = path.resolve(args.input ?? ".autodesk-api-eval/traces");
  const output = path.resolve(args.output ?? ".autodesk-api-eval/reports");
  const traces = await collectJsonl(input, output);
  if (traces.length === 0) throw new Error("NO_JSONL_TRACES");

  const runs = [];
  for (const trace of traces) runs.push(await inspectTrace(trace, input));
  const grades = runs.map((run) => run.grade).filter(Boolean);
  const scored = grades.filter((grade) => grade.score != null);
  const hardFailures = grades.filter((grade) => grade.hard_failure === true).length;
  const accuracyPasses = grades.filter((grade) => grade.accuracy_pass === true).length;
  const averageScore = scored.length
    ? scored.reduce((sum, grade) => sum + grade.score, 0) / scored.length
    : null;
  const allGraded = grades.length === runs.length
    && scored.length === runs.length
    && grades.every((grade) => grade.hard_failure != null && grade.accuracy_pass != null);
  const releaseGate = allGraded
    && hardFailures === 0
    && accuracyPasses === runs.length
    && scored.every((grade) => grade.score >= 12)
    && averageScore >= 13.5
    && runs.every((run) => run.root_wide_scan_count === 0)
    ? "pass"
    : "not-passed";

  const total = (field) => runs.reduce((sum, run) => sum + run[field], 0);
  const usageTotal = (field) => runs.reduce((sum, run) => sum + run.usage[field], 0);
  const report = {
    schema_version: "1.0",
    generated_at: new Date().toISOString(),
    privacy: {
      raw_prompts_embedded: false,
      final_answers_embedded: false,
      source_traces_modified: false,
    },
    suite: {
      traces: runs.length,
      graded: grades.length,
      ungraded: runs.length - grades.length,
      hard_failures: hardFailures,
      accuracy_passes: accuracyPasses,
      average_score: averageScore,
      release_gate: releaseGate,
    },
    efficiency: {
      input_tokens: usageTotal("input_tokens"),
      cached_input_tokens: usageTotal("cached_input_tokens"),
      output_tokens: usageTotal("output_tokens"),
      total_tokens: usageTotal("total_tokens"),
      median_total_tokens: median(runs.map((run) => run.usage.total_tokens)),
      command_calls: total("command_calls"),
      command_output_chars: total("command_output_chars"),
      root_wide_scan_count: total("root_wide_scan_count"),
    },
    runs,
  };

  await mkdir(output, { recursive: true });
  const stamp = report.generated_at.replace(/[-:.]/g, "");
  await writeAtomic(path.join(output, `report-${stamp}.json`), `${JSON.stringify(report, null, 2)}\n`);
  await writeAtomic(path.join(output, `report-${stamp}.md`), `${renderMarkdown(report)}\n`);
  process.stdout.write("REPORT_CREATED\n");
}

main().catch((error) => {
  process.stderr.write(`${error?.message || "REPORT_FAILED"}\n`);
  process.exitCode = 1;
});
