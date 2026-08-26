# Autodesk API skill test deployment

This branch exposes two repository-scoped skills for pre-distribution evaluation:

- `autodesk-api-implementer` activates implicitly for Autodesk developer API and SDK work.
- `report` is explicit-only. Select `/report` in the desktop app or use `$report` in CLI or IDE.

## Run the evaluation

1. Check out `main-test` and start a new Codex chat from this repository root.
2. Run the natural-language prompts in `.agents/evals/autodesk-api-implementer/activation-cases.jsonl`. Do not name the expected skill in the prompt.
3. Run every prompt in `.agents/evals/autodesk-api-implementer/cases.jsonl` three times with the same model and reasoning effort.
4. Score completed runs with `.agents/evals/autodesk-api-implementer/rubric.md`.
5. Save Codex JSONL traces as `.autodesk-api-eval/traces/<case-id>.run-<n>.jsonl` and grades beside them as `<case-id>.run-<n>.grade.json`.
6. Invoke `/report` or `$report` after the artifacts are saved.

The report writes timestamped JSON and Markdown under `.autodesk-api-eval/reports`. Raw prompts, final answers, command output, and grade notes are excluded from generated reports and must not be pasted into the chat. The entire `.autodesk-api-eval` directory is ignored by Git.

Do not merge this branch into `main` or publish the final plugin until the release gate in the rubric passes.
