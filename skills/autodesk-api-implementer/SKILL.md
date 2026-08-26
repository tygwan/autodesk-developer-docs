---
name: autodesk-api-implementer
description: Use automatically for implementation, planning, review, or troubleshooting involving Autodesk developer APIs or SDKs, including APS or Forge, Viewer, Data Management, Model Derivative, OSS, OAuth, Forma, and AEC Data Model. Ground code and API decisions in the bundled or user-supplied documentation archive. Excludes archive maintenance and end-user CAD product help.
---

# Autodesk API Implementer

Ground Autodesk integration decisions and code in the local archive while loading the least documentation needed.

## Locate the archive

Resolve one absolute archive root before opening documentation:

1. Use an archive path supplied by the user. Validate that it contains `CATALOG.json`; if it does not, report the invalid path instead of silently switching sources.
2. Otherwise find the nearest workspace directory containing `CATALOG.json`.
3. Otherwise derive the bundled plugin root from this `SKILL.md` location by walking upward until a directory contains `CATALOG.json` and at least one plugin manifest: `.codex-plugin/plugin.json` or `.claude-plugin/plugin.json`.

Do not confuse the skill directory with the archive or scan unrelated directories. If no valid archive is available, request its path instead of substituting remembered API details.

Treat captured documentation as read-only. It is a versioned snapshot, not proof of current service availability.

## Establish the route

Inspect the request and, when present, the target project's dependency files and existing authentication code before asking questions. Determine only the facts that change the implementation:

- desired operation and source system or resource;
- runtime, language, and browser-versus-server placement;
- app-only versus Autodesk-user access;
- read-only versus state-changing behavior.

Infer these from the project when safe and state material assumptions. Ask when a missing choice would change the OAuth flow, data boundary, or API surface.

Parse `CATALOG.json` to select the product, surface, version, protocol or SDK language, and runtime. Preserve a user-selected interface and an established project dependency unless the archive proves it cannot perform the operation. Never assume an SDK wraps a REST operation: verify the matching SDK symbol or use the documented REST operation explicitly.

## Retrieve evidence efficiently

Follow the archive hierarchy only as far as needed:

`CATALOG.json` -> product README -> product INDEX -> surface or category INDEX -> leaf document

1. Use README and INDEX files for routing, not endpoint or symbol facts.
2. After `CATALOG.json` selects a surface path, constrain every file listing and text search to that resolved surface directory. Never run `rg --files` against the archive root after a surface is selected. Search another surface only after identifying a concrete cross-surface dependency.
3. Open only the relevant leaf sections around matches. Avoid loading large tutorials or complete references when one section answers the question.
4. Expand to another surface only when an input, output, authentication dependency, or runtime boundary requires it.
5. Stop searching when every consequential implementation claim has leaf-level support or is explicitly marked as an inference or coverage gap.

Do not treat `RELATED.md` as an integration recipe. It contains source-backed navigation hints only.

## Maintain accuracy

- Keep product, surface, version, protocol or SDK language, and runtime attached to each finding.
- Verify exact methods, paths, SDK symbols, request fields, headers, scopes, identifier transformations, region rules, pagination, and asynchronous completion behavior in leaf documents.
- Do not merge values across REST, TypeScript, .NET, GraphQL, Viewer, or Embedded SDK surfaces.
- Preserve documented contradictions and report them; do not silently normalize captured values.
- Cite local leaf paths, with line numbers when practical. Use `_meta` only when provenance or snapshot freshness matters.
- For a request about latest behavior, status, pricing, entitlement, or availability, verify against the current official Autodesk source and distinguish it from the local snapshot.

## Load conditional guidance

Read only the references triggered by the routed task, and read each selected reference completely:

- OAuth, tokens, scopes, or user/app identity: [authentication.md](references/authentication.md)
- Two or more non-authentication product surfaces, or any identifier hand-off between surfaces: [platform-workflows.md](references/platform-workflows.md)
- Browser Viewer SDK code or troubleshooting: [viewer.md](references/viewer.md)
- Forma REST, AEC Data Model GraphQL, Site Design, or Embedded View SDK: [forma.md](references/forma.md)

## Implement and verify

For code changes, match the existing project style and dependency versions, make the smallest coherent change, and verify it with relevant build, type, lint, or focused tests. Treat captured tokens, signed URLs, IDs, URNs, and sample values as placeholders. Keep client secrets and refresh tokens out of browser code, source control, logs, and responses.

Do not exercise a live APS integration unless the user requested it and the credentials and target resource are in scope. Obtain authorization immediately before any live state-changing operation.

When diagnosing, separate documentation mismatch, code defect, authentication or scope failure, entitlement or permission failure, data or identifier mismatch, region mismatch, and transient service failure. Do not change code unless requested.

Return the implementation or answer first. Concisely identify the selected surface/version, required authentication and scopes, leaf evidence, and any inference or missing coverage; omit headings that add no information.
