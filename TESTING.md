# Autodesk API plugin test deployment

This branch exposes the production-shaped `autodesk-developer-docs` plugin and one repository-scoped evaluation helper:

- The installed plugin provides `autodesk-api-implementer`, which activates implicitly for Autodesk developer API and SDK work.
- `.agents/skills/report` is test-only and explicit-only. Select `/report` in the desktop app or use `$report` in CLI or IDE.
- The production plugin manifest points only to `skills/`; `report` is not part of that package.

## Install the test branch

Use an isolated Codex profile when practical so an existing production install cannot shadow this branch.

```text
codex plugin marketplace add tygwan/autodesk-developer-docs --ref main-test
codex plugin add autodesk-developer-docs@autodesk-developer-docs
```

Start a new Codex chat from this repository root after installation. To smoke-test Claude Code against the same production skill source, run `claude --plugin-dir .` from the checkout and start a new session.

## Run the evaluation

1. Check out `main-test`, install the plugin as above, and start a new Codex chat from this repository root.
2. Run the natural-language prompts in `tests/evals/autodesk-api-implementer/activation-cases.jsonl`. Do not name the expected skill in the prompt.
3. Run every prompt in `tests/evals/autodesk-api-implementer/cases.jsonl` three times with the same model and reasoning effort.
4. Score completed runs with `tests/evals/autodesk-api-implementer/rubric.md`.
5. Save Codex JSONL traces as `.autodesk-api-eval/traces/<case-id>.run-<n>.jsonl` and grades beside them as `<case-id>.run-<n>.grade.json`.
6. Invoke `/report` or `$report` after the artifacts are saved.

The report writes timestamped JSON and Markdown under `.autodesk-api-eval/reports`. Raw prompts, final answers, command output, and grade notes are excluded from generated reports and must not be pasted into the chat. The entire `.autodesk-api-eval` directory is ignored by Git.

Do not merge this branch into `main` or publish the final plugin until the release gate in the rubric passes. Before production promotion, remove the repository-scoped `report` skill while retaining reusable evaluation definitions under `tests/evals`.
