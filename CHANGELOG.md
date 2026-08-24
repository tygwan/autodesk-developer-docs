# Change tracking

This repository tracks documentation snapshots, not a synthesized Autodesk release history. Upstream statements remain in the captured Autodesk change-log pages; Git records every other source and generated-file difference.

## Current source baseline

| Surface | Source identity | Source date |
| --- | --- | --- |
| Authentication API v2 | `cloud-platform-id-pubdocs-master-756267` · manifest SHA-256 `cdaf010fb4e43a5badb77c786ee9c619f6176ab6195a52db4710e6b13f0b5053` | Manifest modified 2026-08-12 |
| Data Management API v2 | `forge-dm-forge-dm-pubdocs-master-725577` · manifest SHA-256 `19e3d67aaee250f778ca0ea70b766d049e24d100803a6430187301aa41981823` | Manifest modified 2026-07-14 |
| Model Derivative API v2 | `A360-platform-viewing-docs-master-766554` · manifest SHA-256 `cc75648c4bb013b785f088f418837bdd8d3671fbe09d13c54effa954da6bd75d` | Manifest modified 2026-08-21 |
| Viewer SDK v7 | `A360-firefly.js-docs-master-764104` · manifest SHA-256 `a37ae1f21338871232e049492e7d8e209b7378a32b88b0dc48f124c88de2c3b7` | Manifest modified 2026-08-19 |
| Forma APIs | `acs-acs-api-documentation-main-748600` · manifest SHA-256 `7098a3b736b4a62428327b9de9bcb0e0e8ebd75541ef217d9d71aed6a2457794` | Manifest modified 2026-08-04 |
| Forma Site Design | `forma-forma-documentation-main-617165` · manifest SHA-256 `790bcb8155d5b2db676b9f0e21e6a728163319b0b641c1e8ba6adfc924e73436` | Manifest modified 2026-03-02 |
| AEC Data Model API | `forge-aim-graphql-docs-main-695451` · manifest SHA-256 `f5ff989f8c76f33fe61513cd62726be89befdb33c950f9b8c4492a0e3d4a9ada` | Manifest modified 2026-06-11 |
| Embedded View SDK | `forma-embedded-view-sdk@0.93.0` | Package published 2026-04-07 |

These are source-provided dates, not collection timestamps.

## Documentation milestones

| Date | Change |
| --- | --- |
| 2026-08-20 | `feat: expand Forma documentation archive` |
| 2026-08-20 | `docs: add Autodesk API catalog` |
| 2026-08-20 | `merge: update Autodesk API archive` |
| 2026-08-20 | `docs: improve archive navigation` |
| 2026-08-20 | `docs: add Viewer archive and unify navigation` |
| 2026-08-20 | `docs: publish official sources only` |
| 2026-08-24 | `docs: add foundational APS API archives` |
| 2026-08-24 | `docs: improve README catalog and AI guidance` |
| 2026-08-24 | `docs: separate archived and source-only catalog entries` |

## Three tracking layers

1. Autodesk-published change logs remain in their captured pages: [Forma services](./forma/CHANGELOG.md), [Data Management](./data-management/v2/change_history/INDEX.md), [Model Derivative](./model-derivative/v2/change_history/INDEX.md), and [Viewer](./viewer/v7/INDEX.md#change-history).
2. Git commits and diffs show changes to every endpoint, GraphQL reference, guide, OpenAPI document, and SDK namespace, including surfaces without an upstream change log.
3. The [machine-readable catalog](./CATALOG.json) locates per-surface build metadata, manifests, stable page IDs, and page hashes that anchor each snapshot.

Examples:

```bash
git log --follow -- forma/acc/groups/issues/endpoints/issues-issues-GET.md
git diff <base>..<head> -- forma/acc/groups/issues/endpoints/issues-issues-GET.md
git diff <base>..<head> -- forma/site-design/sdk/
git diff <base>..<head> -- forma/aec-data-model/reference/mutations/
git diff <base>..<head> -- forma/acc/_meta/manifest.json
git diff <base>..<head> -- authentication/v2/_meta/manifest.json
git diff <base>..<head> -- data-management/v2/reference/http/
git diff <base>..<head> -- model-derivative/v2/developers_guide/
git diff <base>..<head> -- viewer/v7/reference/
```

## Snapshot acceptance

A documentation snapshot should be committed only after:

- every cataloged surface includes its required provenance and navigation files;
- every published page has a stable local path and all local Markdown links resolve;
- declared document coverage remains complete;
- API and SDK values have not been editorially corrected or normalized;
- the repository contains documentation and provenance records only.

Keeping one upstream snapshot per commit makes operation-level and service-level history reviewable.
