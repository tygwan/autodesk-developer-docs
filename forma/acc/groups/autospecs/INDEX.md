---
document_type: "api-group-index"
product: "Autodesk Forma"
surface: "forma-apis"
group: "AutoSpecs"
protocol: "REST"
language: "en"
generated: "true"
---

# AutoSpecs

[Forma APIs index](../../INDEX.md)

## Overview

- **Product:** Autodesk Forma
- **Surface:** Forma APIs
- **Protocol:** REST
- **Capabilities:** Retrieve AutoSpecs smart-register data for construction specifications.
- **Common path:** `/construction/autospecs/v1/projects/{projectId}`

## Endpoints

| Method | Path | Authentication | Scopes | Description |
| --- | --- | --- | --- | --- |
| `GET` | `/construction/autospecs/v1/projects/{projectId}/metadata` | user context required | data:read | [project metadata](./endpoints/autospecs-getprojectmetadata-GET.md) |
| `GET` | `/construction/autospecs/v1/projects/{projectId}/version/{versionId}/requirements` | user context required | data:read | [Retrieves the number of submittals for the submittal groups in each submittal section](./endpoints/autospecs-getversionrequirements-GET.md) |
| `GET` | `/construction/autospecs/v1/projects/{projectId}/version/{versionId}/smartregister` | user context required | data:read | [Retrieves the submittal logs (Smart Register) that are part of the specification PDFs that were imported into AutoSpecs](./endpoints/autospecs-getversionsmartregister-GET.md) |
| `GET` | `/construction/autospecs/v1/projects/{projectId}/version/{versionId}/submittalsSummary` | user context required | data:read | [Retrieves the number of submittals for each submittal group and each submittal type](./endpoints/autospecs-getversionsummary-GET.md) |

## Machine-readable specification

- [OpenAPI 3.1](./openapi.yaml)
