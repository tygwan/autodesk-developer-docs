---
document_type: "api-group-index"
product: "Autodesk Forma"
surface: "forma-apis"
group: "Assets"
protocol: "REST"
language: "en"
generated: "true"
---

# Assets

[Forma APIs index](../../INDEX.md)

## Overview

- **Product:** Autodesk Forma
- **Surface:** Forma APIs
- **Protocol:** REST
- **Capabilities:** Manage project assets, statuses, categories, custom attributes, and attachments.
- **Common path:** `/construction/assets`

## Endpoints

| Method | Path | Authentication | Scopes | Description |
| --- | --- | --- | --- | --- |
| `GET` | `/construction/assets/v1/error-codes` | no security required | - | [Retrieves a list of all error codes returned by the Assets API](./endpoints/assets-error-codes-GET.md) |
| `GET` | `/construction/assets/v1/error-codes/{errorCodeName}` | no security required | - | [Retrieves details about an error code by name](./endpoints/assets-error-codes-error-code-name-GET.md) |
| `GET` | `/construction/assets/v1/projects/{projectId}/asset-statuses` | user context required | data:read | [Searches for and returns all specified asset statuses](./endpoints/assets-asset-statuses-GET.md) |
| `POST` | `/construction/assets/v1/projects/{projectId}/asset-statuses` | user context required | data:write data:create | [Creates a new asset status](./endpoints/assets-asset-statuses-POST.md) |
| `POST` | `/construction/assets/v1/projects/{projectId}/asset-statuses:batch-get` | user context required | data:read | [Returns a specified set of statuses](./endpoints/assets-asset-statuses-batch-get-POST.md) |
| `GET` | `/construction/assets/v1/projects/{projectId}/categories` | user context required | data:read | [Searches for and returns all specified categories](./endpoints/assets-categories-GET.md) |
| `POST` | `/construction/assets/v1/projects/{projectId}/categories` | user context required | data:write data:create | [Creates a new category](./endpoints/assets-categories-POST.md) |
| `POST` | `/construction/assets/v1/projects/{projectId}/categories:batch-get` | user context required | data:read | [Returns a specified set of categories](./endpoints/assets-categories-batch-get-POST.md) |
| `GET` | `/construction/assets/v1/projects/{projectId}/categories/{categoryId}/custom-attributes` | user context required | data:read | [Returns the custom attribute assignments for a specified category](./endpoints/assets-categories-category-id-custom-attributes-GET.md) |
| `PUT` | `/construction/assets/v1/projects/{projectId}/categories/{categoryId}/custom-attributes/{customAttributeId}` | user context required | data:write | [Assigns an Asset custom attribute to a category](./endpoints/assets-categories-category-id-custom-attributes-custom-attribute-id-PUT.md) |
| `PUT` | `/construction/assets/v1/projects/{projectId}/categories/{categoryId}/status-step-set/{statusStepSetId}` | user context required | data:write | [Assigns a status set to a category](./endpoints/assets-categories-category-id-status-step-set-status-step-set-id-PUT.md) |
| `POST` | `/construction/assets/v1/projects/{projectId}/category-status-step-sets/status-step-sets:batch-get` | user context required | data:read | [Returns status set assignments associated with a specified set of categories](./endpoints/assets-category-status-step-sets-status-step-sets-batch-get-POST.md) |
| `GET` | `/construction/assets/v1/projects/{projectId}/custom-attributes` | user context required | data:read | [Searches for and returns all specified custom attributes](./endpoints/assets-custom-attributes-GET.md) |
| `POST` | `/construction/assets/v1/projects/{projectId}/custom-attributes` | user context required | data:write data:create | [Creates a new Asset custom attribute](./endpoints/assets-custom-attributes-POST.md) |
| `POST` | `/construction/assets/v1/projects/{projectId}/custom-attributes:batch-get` | user context required | data:read | [Returns a specified set of custom attributes](./endpoints/assets-custom-attributes-batch-get-POST.md) |
| `PATCH` | `/construction/assets/v1/projects/{projectId}/custom-attributes/{customAttributeId}` | user context required | data:write | [Updates an Asset custom attribute](./endpoints/assets-custom-attributes-custom-attribute-id-PATCH.md) |
| `GET` | `/construction/assets/v1/projects/{projectId}/status-step-sets` | user context required | data:read | [Searches for and returns all specified status sets](./endpoints/assets-status-step-sets-GET.md) |
| `POST` | `/construction/assets/v1/projects/{projectId}/status-step-sets` | user context required | data:write data:create | [Creates a new status set](./endpoints/assets-status-step-sets-POST.md) |
| `POST` | `/construction/assets/v1/projects/{projectId}/status-step-sets:batch-get` | user context required | data:read | [Returns a specified set of status sets](./endpoints/assets-status-step-sets-batch-get-POST.md) |
| `GET` | `/construction/assets/v2/projects/{projectId}/assets` | user context required | data:read | [Searches for and returns all specified assets within a project visible to the authenticated user](./endpoints/assets-assets-v2-GET.md) |
| `POST` | `/construction/assets/v2/projects/{projectId}/assets:batch-create` | user context required | data:write data:create | [Creates a set of new assets](./endpoints/assets-assets-batch-create-POST-v2.md) |
| `POST` | `/construction/assets/v2/projects/{projectId}/assets:batch-delete` | user context required | data:write | [Deletes one or more assets](./endpoints/assets-assets-batch-delete-v2-POST.md) |
| `POST` | `/construction/assets/v2/projects/{projectId}/assets:batch-get` | user context required | data:read | [Returns a specified set of assets](./endpoints/assets-assets-batch-get-v2-POST.md) |
| `PATCH` | `/construction/assets/v2/projects/{projectId}/assets:batch-patch` | user context required | data:write data:create | [Updates a set of one or more assets](./endpoints/assets-assets-batch-patch-PATCH-v2.md) |

## Machine-readable specification

- [OpenAPI 3.1](./openapi.yaml)
