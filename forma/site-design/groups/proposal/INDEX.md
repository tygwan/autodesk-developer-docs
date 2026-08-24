---
document_type: "api-group-index"
product: "Autodesk Forma"
surface: "forma-site-design"
group: "proposal"
protocol: "REST"
language: "en"
generated: "true"
---

# proposal

[Forma Site Design API & SDK index](../../INDEX.md)

## Overview

- **Product:** Autodesk Forma
- **Surface:** Forma Site Design API & SDK
- **Protocol:** REST
- **Capabilities:** Create, retrieve, update, and list proposal revisions.
- **Common path:** `/forma/proposal/v1alpha/proposals`

## Endpoints

| Method | Path | Authentication | Scopes | Description |
| --- | --- | --- | --- | --- |
| `GET` | `/forma/proposal/v1alpha/proposals` | user context required | data:read | [List proposals](./endpoints/proposal-listproposals-GET.md) |
| `POST` | `/forma/proposal/v1alpha/proposals` | user context required | data:read data:write | [Create a proposal](./endpoints/proposal-createproposal-POST.md) |
| `GET` | `/forma/proposal/v1alpha/proposals/{proposalId}/revisions` | user context required | data:read | [List revisions for a proposal](./endpoints/proposal-listrevisions-GET.md) |
| `PUT` | `/forma/proposal/v1alpha/proposals/{proposalId}/revisions/{revision}` | user context required | data:read data:write | [Update a proposal](./endpoints/proposal-putproposal-PUT.md) |

## Machine-readable specification

- [OpenAPI 3.1](./openapi.yaml)
