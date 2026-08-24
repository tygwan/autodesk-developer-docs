---
document_type: "api-group-index"
product: "Autodesk Forma"
surface: "forma-apis"
group: "Submittals"
protocol: "REST"
language: "en"
generated: "true"
---

# Submittals

[Forma APIs index](../../INDEX.md)

## Overview

- **Product:** Autodesk Forma
- **Surface:** Forma APIs
- **Protocol:** REST
- **Capabilities:** Create and manage submittal items, attachments, settings, and transitions.
- **Common path:** `/construction/submittals/v2/projects/{projectId}`

## Endpoints

| Method | Path | Authentication | Scopes | Description |
| --- | --- | --- | --- | --- |
| `GET` | `/construction/submittals/v2/projects/{projectId}/async-jobs/{asyncJobId}` | user context required | data:read | [Retrieves the current status and result of an asynchronous job](./endpoints/submittals-async-jobs-asyncJobId-GET.md) |
| `GET` | `/construction/submittals/v2/projects/{projectId}/item-types` | user context required | data:read | [Retrieves all submittal itme types for the specified project](./endpoints/submittals-item-types-GET.md) |
| `GET` | `/construction/submittals/v2/projects/{projectId}/item-types/{id}` | user context required | data:read | [Retrieve the information about a single submittal type](./endpoints/submittals-item-types-id-GET.md) |
| `GET` | `/construction/submittals/v2/projects/{projectId}/items` | user context required | data:read | [Retrieves information about all the submittal items in a project that the user has permission to view](./endpoints/submittals-items-GET.md) |
| `POST` | `/construction/submittals/v2/projects/{projectId}/items` | user context required | data:write | [Creates a new submittal item in the specified project](./endpoints/submittals-items-POST.md) |
| `GET` | `/construction/submittals/v2/projects/{projectId}/items:next-custom-identifier` | user context required | data:read | [Retrieves the next available custom identifier for a submittal item in a project](./endpoints/submittals-itemsnext-custom-identifier-GET.md) |
| `POST` | `/construction/submittals/v2/projects/{projectId}/items:validate-custom-identifier` | user context required | data:read | [Validates a custom identifier for a submittal item in a project](./endpoints/submittals-itemsvalidate-custom-identifier-POST.md) |
| `POST` | `/construction/submittals/v2/projects/{projectId}/items/:itemId:transition` | user context required | data:write | [Items](./endpoints/submittals-items-itemIdtransition-POST.md) |
| `GET` | `/construction/submittals/v2/projects/{projectId}/items/{itemId}` | user context required | data:read | [Retrieve information about a single submittal item that the user has permission to view](./endpoints/submittals-items-itemId-GET.md) |
| `PATCH` | `/construction/submittals/v2/projects/{projectId}/items/{itemId}` | user context required | data:write | [Updates specific attributes of an existing submittal item](./endpoints/submittals-items-itemId-PATCH.md) |
| `GET` | `/construction/submittals/v2/projects/{projectId}/items/{itemId}/attachments` | user context required | data:read | [Retrieve information about attachments associated with a specified item](./endpoints/submittals-items-itemId-attachments-GET.md) |
| `POST` | `/construction/submittals/v2/projects/{projectId}/items/{itemId}/attachments` | user context required | data:write | [Adds an attachment to a submittal item within a project](./endpoints/submittals-attachments-POST.md) |
| `PATCH` | `/construction/submittals/v2/projects/{projectId}/items/{itemId}/attachments/{attachmentId}` | user context required | data:write | [Updates the upload status of an attachment associated with a submittal item](./endpoints/submittals-attachments-attachmentId-PATCH.md) |
| `GET` | `/construction/submittals/v2/projects/{projectId}/items/{itemId}/revisions` | user context required | data:read | [Items](./endpoints/submittals-revisions-GET.md) |
| `GET` | `/construction/submittals/v2/projects/{projectId}/items/{itemId}/steps` | user context required | data:read | [Retrieves a list of review steps associated with a specific submittal item](./endpoints/submittals-steps-GET.md) |
| `GET` | `/construction/submittals/v2/projects/{projectId}/items/{itemId}/steps/{stepId}` | user context required | data:read | [Retrieves information about a single review step associated with a submittal item](./endpoints/submittals-steps-stepId-GET.md) |
| `GET` | `/construction/submittals/v2/projects/{projectId}/items/{itemId}/steps/{stepId}/tasks` | user context required | data:read | [Retrieves a list of tasks associated with a specific review step of a submittal item in a project](./endpoints/submittals-tasks-GET.md) |
| `POST` | `/construction/submittals/v2/projects/{projectId}/items/{itemId}/steps/{stepId}/tasks/:taskId:close` | user context required | data:write | [Closes a task by adding a required review response, marking it as complete within the submittal review workflow](./endpoints/submittals-tasks-taskIdclose-POST.md) |
| `GET` | `/construction/submittals/v2/projects/{projectId}/items/{itemId}/steps/{stepId}/tasks/{taskId}` | user context required | data:read | [Retrieves details of a specific task associated with a review step in a submittal item](./endpoints/submittals-tasks-taskId-GET.md) |
| `GET` | `/construction/submittals/v2/projects/{projectId}/metadata` | user context required | data:read | [Retrieves project metadata and static values needed for creating submittal items and translating retrieved data](./endpoints/submittals-metadata-GET.md) |
| `GET` | `/construction/submittals/v2/projects/{projectId}/packages` | user context required | data:read | [Retrieve all the packages for the specified project](./endpoints/submittals-packages-GET.md) |
| `GET` | `/construction/submittals/v2/projects/{projectId}/packages/{id}` | user context required | data:read | [Retrieve details about a single package](./endpoints/submittals-packages-id-GET.md) |
| `GET` | `/construction/submittals/v2/projects/{projectId}/responses` | user context required | data:read | [Retrieves all the responses for the specified project](./endpoints/submittals-responses-GET.md) |
| `GET` | `/construction/submittals/v2/projects/{projectId}/responses/{id}` | user context required | data:read | [Retrieve details about a single submittal response for the specified project, see the Help documentation](./endpoints/submittals-responses-id-GET.md) |
| `POST` | `/construction/submittals/v2/projects/{projectId}/settings/custom-identifier:change-sequence-type` | user context required | data:write | [Changes the custom identifier sequence type for the project](./endpoints/submittals-custom-identifierchange-sequence-type-POST.md) |
| `GET` | `/construction/submittals/v2/projects/{projectId}/settings/mappings` | user context required | data:read | [Retrieves users, roles, and companies assigned the manager role in the current project](./endpoints/submittals-mappings-GET.md) |
| `POST` | `/construction/submittals/v2/projects/{projectId}/settings/mappings` | user context required | data:write | [Creates an admin mapping, assigning a user, role, or company as a Submittal Manager in the project](./endpoints/submittals-mappings-POST.md) |
| `DELETE` | `/construction/submittals/v2/projects/{projectId}/settings/mappings/{mappingId}` | user context required | data:write | [Deletes an admin mapping from the project](./endpoints/submittals-mappings-mappingId-DELETE.md) |
| `GET` | `/construction/submittals/v2/projects/{projectId}/specs` | user context required | data:read | [Retrieve all the spec sections for the specified project](./endpoints/submittals-specs-GET.md) |
| `POST` | `/construction/submittals/v2/projects/{projectId}/specs` | user context required | data:write | [Creates a spec section to organize and categorize submittals](./endpoints/submittals-specs-POST.md) |
| `GET` | `/construction/submittals/v2/projects/{projectId}/specs/{id}` | user context required | data:read | [Retrieve the details about a single spec section](./endpoints/submittals-specs-id-GET.md) |
| `GET` | `/construction/submittals/v2/projects/{projectId}/templates` | user context required | data:read | [Retrieves a list of review templates available for a project](./endpoints/submittals-templates-GET.md) |
| `GET` | `/construction/submittals/v2/projects/{projectId}/users/me` | user context required | data:read | [Retrieves the Autodesk ID, assigned roles, and permitted actions for the current user within a specified project](./endpoints/submittals-users-me-GET.md) |

## Machine-readable specification

- [OpenAPI 3.1](./openapi.yaml)
