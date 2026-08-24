---
document_type: "api-sdk-index"
product: "Authentication API"
surface: "authentication-v2"
protocol: "REST with TypeScript and .NET SDKs"
api_version: "v2"
language: "en"
generated: "true"
---

# Authentication API v2

[Product index](../INDEX.md) · [Product overview](../README.md) · [Repository catalog](../../README.md)

## Overview

OAuth 2.0 authentication documentation for app registration, access and ID tokens, scopes, token lifecycle, and official SDK clients.

- **Primary protocol:** REST with TypeScript and .NET SDKs
- **Documentation version:** `v2`
- **Official source:** [Autodesk documentation](https://aps.autodesk.com/en/docs/oauth/v2)

## Start here

- [Overview](./developers_guide/overview.md) — Understand the authentication model and terminology.
- [Choose an application type](./developers_guide/App-types/INDEX.md) — Route to server, traditional web, native, mobile, or single-page application guidance.
- [REST endpoints](./reference/http/INDEX.md) — Inspect authorization, token, introspection, revocation, logout, and key endpoints.

## Capability map

| Capability | What the captured documentation covers | Start here |
| --- | --- | --- |
| Register an application | Create an APS application and obtain the credentials used by authentication flows. | [Open documentation](./tutorials/create-app.md) |
| Server-to-server access | Obtain two-legged access tokens for machine-to-machine applications. | [Open documentation](./tutorials/get-2-legged-token.md) |
| User-delegated access | Use three-legged authorization-code flows for applications acting on behalf of users. | [Open documentation](./tutorials/get-3-legged-token.md) |
| Native and single-page applications | Use Authorization Code with PKCE where a client secret cannot be kept safely. | [Open documentation](./tutorials/get-3-legged-token-pkce/INDEX.md) |
| Identity and scopes | Request ID tokens, choose OAuth scopes, and understand access boundaries. | [Open documentation](./developers_guide/scopes.md) |
| Token lifecycle | Authorize, issue, inspect, revoke, and terminate tokens and sessions. | [Open documentation](./reference/http/INDEX.md) |
| Official SDK clients | Use the captured TypeScript and .NET authentication SDK references. | [Open documentation](./reference/typescript-sdk/INDEX.md) |

## Documentation sections

| Section | Documents | Documentation |
| --- | ---: | --- |
| Developer's Guide | 12 | [Open index](./developers_guide/INDEX.md) |
| Reference Guide | 44 | [Open index](./reference/INDEX.md) |
| How-to Guide | 7 | [Open index](./tutorials/INDEX.md) |

## API and SDK reference

| Interface | Documents | Documentation |
| --- | ---: | --- |
| .NET SDK | 19 | [Open index](./reference/dot-net-sdk/INDEX.md) |
| REST API | 8 | [Open index](./reference/http/INDEX.md) |
| TypeScript SDK | 17 | [Open index](./reference/typescript-sdk/INDEX.md) |

## Related captured documentation

These routes are generated from links and explicit API/SDK names found in captured source pages; they are navigation hints, not an authored integration workflow.

| Documentation | References in this surface | Example source page |
| --- | ---: | --- |
| [Model Derivative API](../../model-derivative/README.md) | 2 source pages / 3 references | [Open evidence](./developers_guide/scopes.md) |
| [Viewer SDK](../../viewer/README.md) | 1 source page / 1 reference | [Open evidence](./developers_guide/scopes.md) |

## Provenance

- [Build metadata](./_meta/build.json)
- [Coverage report](./_meta/coverage.json)
- [Page manifest](./_meta/manifest.json)
- [Stable page IDs](./_meta/pages.json)
- **Source build:** `cloud-platform-id-pubdocs-master-756267`
- **Coverage status:** `complete`

Captured documentation values are preserved as published. Use Git history to inspect snapshot changes.
