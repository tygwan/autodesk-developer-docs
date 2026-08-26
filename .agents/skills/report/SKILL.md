---
name: report
description: Create a private file-only evaluation report from saved Autodesk API Implementer test traces and grade sidecars. Use only when explicitly invoked for this test workflow; do not handle ordinary project, status, test-summary, or development reporting.
---

# Private Evaluation Report

Generate an Autodesk API Implementer evaluation report without exposing test records in the conversation.

## Inputs and output

Use paths supplied with the invocation. Otherwise use:

- input traces: `.autodesk-api-eval/traces`
- output reports: `.autodesk-api-eval/reports`

Each trace is Codex JSONL. An optional grade sidecar uses the same basename with `.grade.json` and may contain `case_id`, `score`, `hard_failure`, and `accuracy_pass`. Missing grades remain explicitly ungraded.

## Generate privately

Run `node scripts/generate-report.mjs` from this skill directory with `--input` and `--output`. The script writes timestamped JSON and Markdown reports, excludes raw prompts and final answers, and does not modify source traces.

Do not paste, quote, summarize, or enumerate trace contents, answers, grades, scores, token counts, routes, failures, or report contents in commentary or the final response. Do not upload the artifacts or use network tools. Treat the input and report directories as private local data.

On success, reply only: `비공개 보고서 파일을 생성했습니다.` Do not include the path unless the user separately asks where files are stored. On failure, state only the error category and the minimum corrective action; do not reveal a record while diagnosing.
