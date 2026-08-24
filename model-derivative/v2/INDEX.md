---
document_type: "api-sdk-index"
product: "Model Derivative API"
surface: "model-derivative-v2"
protocol: "REST with TypeScript and .NET SDKs"
api_version: "v2"
language: "en"
generated: "true"
---

# Model Derivative API v2

[Product index](../INDEX.md) · [Product overview](../README.md) · [Repository catalog](../../README.md)

## Overview

Model translation and derivative documentation for online viewing, manifests, metadata, properties, geometry, thumbnails, references, and supported formats.

- **Primary protocol:** REST with TypeScript and .NET SDKs
- **Documentation version:** `v2`
- **Official source:** [Autodesk documentation](https://aps.autodesk.com/en/docs/model-derivative/v2)

## Start here

- [Overview](./developers_guide/overview.md) — Understand the model-derivative service and outputs.
- [Prepare models for Viewer](./developers_guide/basics/preperation.md) — Follow Autodesk guidance for online viewing preparation.
- [REST endpoints](./reference/http/INDEX.md) — Browse translation, manifest, metadata, derivative, and thumbnail endpoints.

## Capability map

| Capability | What the captured documentation covers | Start here |
| --- | --- | --- |
| Translate design files | Submit translation jobs and choose output formats for supported source files. | [Open documentation](./developers_guide/basics/translation.md) |
| Prepare models for online viewing | Create viewable derivatives consumed by browser-based viewing workflows. | [Open documentation](./developers_guide/basics/preperation.md) |
| Inspect manifests and status | Retrieve or delete manifests and inspect derivative output status. | [Open documentation](./reference/http/INDEX.md) |
| Extract metadata and properties | List model metadata, object trees, and property data, including property queries. | [Open documentation](./developers_guide/basics/metadata_extraction.md) |
| Extract geometry and derivatives | Download derivative resources and follow geometry-extraction examples. | [Open documentation](./developers_guide/basics/geometry_extraction.md) |
| Generate thumbnails | Request thumbnail derivatives for translated designs. | [Open documentation](./developers_guide/basics/thumbnail_generation.md) |
| Resolve external references | Declare and translate source files that contain linked or referenced files. | [Open documentation](./tutorials/translate-source-file-containing-xref/INDEX.md) |
| Official SDK clients | Use the captured TypeScript and .NET model-derivative SDK references. | [Open documentation](./reference/INDEX.md) |

## Documentation sections

| Section | Documents | Documentation |
| --- | ---: | --- |
| Change History | 3 | [Open index](./change_history/INDEX.md) |
| Code Samples | 2 | [Open index](./code_samples/INDEX.md) |
| Developer's Guide | 14 | [Open index](./developers_guide/INDEX.md) |
| Reference Guide | 221 | [Open index](./reference/INDEX.md) |
| How-to Guide | 36 | [Open index](./tutorials/INDEX.md) |

## API and SDK reference

| Interface | Documents | Documentation |
| --- | ---: | --- |
| .NET SDK | 103 | [Open index](./reference/dot-net-sdk/INDEX.md) |
| REST API | 14 | [Open index](./reference/http/INDEX.md) |
| TypeScript SDK | 104 | [Open index](./reference/typescript-sdk/INDEX.md) |

## Related captured documentation

These routes are generated from links and explicit API/SDK names found in captured source pages; they are navigation hints, not an authored integration workflow.

| Documentation | References in this surface | Example source page |
| --- | ---: | --- |
| [Authentication API](../../authentication/README.md) | 20 source pages / 47 references | [Open evidence](./tutorials/xtract-metadata/task1-authenticate.md) |
| [Data Management API](../../data-management/README.md) | 14 source pages / 42 references | [Open evidence](./tutorials/xtract-metadata/task2-upload_source_file_to_oss.md) |
| [Viewer SDK](../../viewer/README.md) | 12 source pages / 31 references | [Open evidence](./developers_guide/basics/preperation.md) |

## Provenance

- [Build metadata](./_meta/build.json)
- [Coverage report](./_meta/coverage.json)
- [Page manifest](./_meta/manifest.json)
- [Stable page IDs](./_meta/pages.json)
- **Source build:** `A360-platform-viewing-docs-master-766554`
- **Coverage status:** `complete`

Captured documentation values are preserved as published. Use Git history to inspect snapshot changes.
