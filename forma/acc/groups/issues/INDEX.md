---
document_type: "api-group-index"
product: "Autodesk Forma"
surface: "forma-apis"
group: "Issues"
protocol: "REST"
language: "en"
generated: "true"
---

# Issues

[Forma APIs index](../../INDEX.md)

## Overview

- **Product:** Autodesk Forma
- **Surface:** Forma APIs
- **Protocol:** REST
- **Capabilities:** Create, retrieve, update, comment on, and attach files to project issues.
- **Common path:** `/construction/issues/v1/projects/{projectId}`

## Endpoints

| Method | Path | Authentication | Scopes | Description |
| --- | --- | --- | --- | --- |
| `POST` | `/construction/issues/v1/projects/{projectId}/attachments` | user context required | data:write | [Adds attachments to an existing issue](./endpoints/issues-attachments-POST.md) |
| `GET` | `/construction/issues/v1/projects/{projectId}/attachments/{issueId}/items` | user context required | data:read | [Retrieves all attachments for a specific issue in a project](./endpoints/issues-attachments-issueId-items-GET.md) |
| `DELETE` | `/construction/issues/v1/projects/{projectId}/attachments/{issueId}/items/{attachmentId}` | user context required | data:write | [Deletes a specific attachment from an issue in a project](./endpoints/issues-items-attachmentId-DELETE.md) |
| `GET` | `/construction/issues/v1/projects/{projectId}/issue-attribute-definitions` | user context required | data:read | [Issue Attribute Definitions](./endpoints/issues-issue-attribute-definitions-GET.md) |
| `GET` | `/construction/issues/v1/projects/{projectId}/issue-attribute-mappings` | user context required | data:read | [Issue Attribute Mappings](./endpoints/issues-issue-attribute-mappings-GET.md) |
| `GET` | `/construction/issues/v1/projects/{projectId}/issue-root-cause-categories` | user context required | data:read | [Retrieves a list of supported root cause categories and root causes that you can allocate to an issue](./endpoints/issues-issue-root-cause-categories-GET.md) |
| `GET` | `/construction/issues/v1/projects/{projectId}/issue-types` | user context required | data:read | [Retrieves a project’s categories and types](./endpoints/issues-issue-types-GET.md) |
| `GET` | `/construction/issues/v1/projects/{projectId}/issues` | user context required | data:read | [Issues](./endpoints/issues-issues-GET.md) |
| `POST` | `/construction/issues/v1/projects/{projectId}/issues` | user context required | data:write | [Adds an issue to a project](./endpoints/issues-issues-POST.md) |
| `GET` | `/construction/issues/v1/projects/{projectId}/issues/{issueId}` | user context required | data:read | [Retrieves detailed information about a single issue](./endpoints/issues-issues-issueId-GET.md) |
| `PATCH` | `/construction/issues/v1/projects/{projectId}/issues/{issueId}` | user context required | data:read data:write | [Updates an issue](./endpoints/issues-issues-issueId-PATCH.md) |
| `GET` | `/construction/issues/v1/projects/{projectId}/issues/{issueId}/comments` | user context required | data:read | [Get all the comments for a specific issue](./endpoints/issues-comments-GET.md) |
| `POST` | `/construction/issues/v1/projects/{projectId}/issues/{issueId}/comments` | user context required | data:write | [Creates a new comment under a specific issue](./endpoints/issues-comments-POST.md) |
| `GET` | `/construction/issues/v1/projects/{projectId}/users/me` | user context required | data:read | [Returns the current user permissions](./endpoints/issues-users-me-GET.md) |

## Machine-readable specification

- [OpenAPI 3.1](./openapi.yaml)
