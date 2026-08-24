---
document_type: "api-group-index"
product: "Autodesk Forma"
surface: "forma-apis"
group: "RFIs"
protocol: "REST"
language: "en"
generated: "true"
---

# RFIs

[Forma APIs index](../../INDEX.md)

## Overview

- **Product:** Autodesk Forma
- **Surface:** Forma APIs
- **Protocol:** REST
- **Capabilities:** Create, retrieve, transition, respond to, and attach files to RFIs.
- **Common path:** `/construction/rfis/v3/projects/{projectId}`

## Endpoints

| Method | Path | Authentication | Scopes | Description |
| --- | --- | --- | --- | --- |
| `GET` | `/construction/rfis/v3/projects/{projectId}/attributes` | user context required | data:read | [Retrieves all custom attribute definitions for a project](./endpoints/rfis-attributes-GET.md) |
| `POST` | `/construction/rfis/v3/projects/{projectId}/attributes` | user context required | data:write data:create | [Creates a custom attribute definition for a project](./endpoints/rfis-attributes-POST.md) |
| `PATCH` | `/construction/rfis/v3/projects/{projectId}/attributes/{attributeId}` | user context required | data:write data:create | [Updates an existing custom attribute definition for a project](./endpoints/rfis-custom-attributes-attributeId-PATCH.md) |
| `GET` | `/construction/rfis/v3/projects/{projectId}/rfi-types` | user context required | data:read | [Retrieves the list of RFI types configured for the specified project](./endpoints/rfis-RFI-types-GET.md) |
| `POST` | `/construction/rfis/v3/projects/{projectId}/rfis` | user context required | data:write data:create | [Adds an RFI (request for information) to a project](./endpoints/rfis-rfis-POST.md) |
| `GET` | `/construction/rfis/v3/projects/{projectId}/rfis/{rfiId}` | user context required | data:read | [Retrieves detailed information about a specific RFI (Request for Information) in Forma](./endpoints/rfis-rfis-id-GET.md) |
| `PATCH` | `/construction/rfis/v3/projects/{projectId}/rfis/{rfiId}` | user context required | data:write | [Updates an RFI](./endpoints/rfis-rfis-id-PATCH.md) |
| `GET` | `/construction/rfis/v3/projects/{projectId}/rfis/{rfiId}/attachments` | user context required | data:read | [Retrieves a list of attachments for a specific RFI](./endpoints/rfis-rfis-id-attachments-GET.md) |
| `GET` | `/construction/rfis/v3/projects/{projectId}/rfis/{rfiId}/comments` | user context required | data:read | [Retrieves a list of comments associated with a specific RFI](./endpoints/rfis-rfis-rfiId-comments-GET.md) |
| `POST` | `/construction/rfis/v3/projects/{projectId}/rfis/{rfiId}/comments` | user context required | data:write data:create | [Adds a comment to an RFI](./endpoints/rfis-rfis-rfiId-comments-POST.md) |
| `POST` | `/construction/rfis/v3/projects/{projectId}/rfis/{rfiId}/responses` | user context required | data:write data:create | [Creates a response to the specified RFI](./endpoints/rfis-rfis-id-responses-POST.md) |
| `PATCH` | `/construction/rfis/v3/projects/{projectId}/rfis/{rfiId}/responses/{responseId}` | user context required | data:write data:create | [Updates an existing RFI response](./endpoints/rfis-rfis-id-responses-responseId-PATCH.md) |
| `GET` | `/construction/rfis/v3/projects/{projectId}/rfis/custom-identifier` | user context required | data:read | [Returns the current and next available RFI custom identifier for the project](./endpoints/rfis-custom-identifier-GET.md) |
| `POST` | `/construction/rfis/v3/projects/{projectId}/search:rfis` | user context required | data:read | [RFIs](./endpoints/rfis-rfi-search-POST.md) |
| `GET` | `/construction/rfis/v3/projects/{projectId}/users/me` | user context required | data:read | [Retrieves information about the current user in the context of the specified project](./endpoints/rfis-users-me-GET.md) |
| `GET` | `/construction/rfis/v3/projects/{projectId}/workflow` | user context required | data:read | [Workflows](./endpoints/rfis-workflow-GET.md) |

## Machine-readable specification

- [OpenAPI 3.1](./openapi.yaml)
