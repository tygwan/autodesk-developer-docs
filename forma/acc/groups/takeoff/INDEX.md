---
document_type: "api-group-index"
product: "Autodesk Forma"
surface: "forma-apis"
group: "Takeoff"
protocol: "REST"
language: "en"
generated: "true"
---

# Takeoff

[Forma APIs index](../../INDEX.md)

## Overview

- **Product:** Autodesk Forma
- **Surface:** Forma APIs
- **Protocol:** REST
- **Capabilities:** Access takeoff packages, classifications, and extracted inventory data.
- **Common path:** `/construction/takeoff/v1/projects/{projectId}`

## Endpoints

| Method | Path | Authentication | Scopes | Description |
| --- | --- | --- | --- | --- |
| `GET` | `/construction/takeoff/v1/projects/{projectId}/assigned-structures` | user context required | data:read | [Retrieves the classification structures (trees) that have been assigned to a Takeoff project](./endpoints/takeoff-projects-project_id-assigned-structures-GET.md) |
| `POST` | `/construction/takeoff/v1/projects/{projectId}/assigned-structures:batch-add` | user context required | data:write | [Assigns one or more classification structures (trees) to a Takeoff project](./endpoints/takeoff-projects-project_id-assigned-structuresbatch-add-POST.md) |
| `DELETE` | `/construction/takeoff/v1/projects/{projectId}/assigned-structures/{structureId}` | user context required | data:write | [Unassigns a classification structure (tree) from a Takeoff project](./endpoints/takeoff-projects-project_id-assigned-structures-structure_id-DELETE.md) |
| `GET` | `/construction/takeoff/v1/projects/{projectId}/classification-systems` | user context required | data:read | [Classification Systems](./endpoints/takeoff-projects-project_id-classification-systems-GET.md) |
| `POST` | `/construction/takeoff/v1/projects/{projectId}/classification-systems` | user context required | data:write | [Classification Systems](./endpoints/takeoff-projects-project_id-classification-systems-POST.md) |
| `DELETE` | `/construction/takeoff/v1/projects/{projectId}/classification-systems/{systemId}` | user context required | data:write | [Classification Systems](./endpoints/takeoff-projects-project_id-classification-systems-system_id-DELETE.md) |
| `GET` | `/construction/takeoff/v1/projects/{projectId}/classification-systems/{systemId}` | user context required | data:read | [Classification Systems](./endpoints/takeoff-projects-project_id-classification-systems-system_id-GET.md) |
| `GET` | `/construction/takeoff/v1/projects/{projectId}/classification-systems/{systemId}/classifications` | user context required | data:read | [Classification Systems](./endpoints/takeoff-projects-project_id-classification-systems-system_id-classifications-GET.md) |
| `POST` | `/construction/takeoff/v1/projects/{projectId}/classification-systems/{systemId}/classifications:import` | user context required | data:write | [Classification Systems](./endpoints/takeoff-projects-project_id-classification-systems-system_id-classificationsimport-POST.md) |
| `GET` | `/construction/takeoff/v1/projects/{projectId}/content-views` | user context required | data:read | [Retrieves the content views for a project](./endpoints/takeoff-projects-project_id-content-views-GET.md) |
| `GET` | `/construction/takeoff/v1/projects/{projectId}/packages` | user context required | data:read | [Retrieves the takeoff packages for a project](./endpoints/takeoff-projects-project_id-packages-GET.md) |
| `POST` | `/construction/takeoff/v1/projects/{projectId}/packages` | user context required | data:write | [Creates a takeoff package for a project](./endpoints/takeoff-projects-project_id-packages-POST.md) |
| `GET` | `/construction/takeoff/v1/projects/{projectId}/packages/{packageId}` | user context required | data:read | [Retrieves a specified takeoff package](./endpoints/takeoff-projects-project_id-packages-package_id-GET.md) |
| `PATCH` | `/construction/takeoff/v1/projects/{projectId}/packages/{packageId}` | user context required | data:write | [Updates the name of a takeoff package for a project](./endpoints/takeoff-projects-project_id-packages-package_id-PATCH.md) |
| `GET` | `/construction/takeoff/v1/projects/{projectId}/packages/{packageId}/takeoff-items` | user context required | data:read | [Retrieves the takeoff items for a package](./endpoints/takeoff-projects-project_id-packages-package_id-takeoff-items-GET.md) |
| `GET` | `/construction/takeoff/v1/projects/{projectId}/packages/{packageId}/takeoff-items/{takeoffItemId}` | user context required | data:read | [Retrieves a specified takeoff item for a package](./endpoints/takeoff-projects-project_id-packages-package_id-takeoff-items-takeoff_item_id-GET.md) |
| `GET` | `/construction/takeoff/v1/projects/{projectId}/packages/{packageId}/takeoff-types` | user context required | data:read | [Retrieves the takeoff types for a package](./endpoints/takeoff-projects-project_id-packages-package_id-takeoff-types-GET.md) |
| `GET` | `/construction/takeoff/v1/projects/{projectId}/packages/{packageId}/takeoff-types/{takeoffTypeId}` | user context required | data:read | [Retrieves a specified takeoff type for a package](./endpoints/takeoff-projects-project_id-packages-package_id-takeoff-types-takeoff_type_id-GET.md) |
| `GET` | `/construction/takeoff/v1/projects/{projectId}/settings` | user context required | data:read | [Retrieves the measurement system settings for a project](./endpoints/takeoff-projects-project_id-settings-GET.md) |
| `PATCH` | `/construction/takeoff/v1/projects/{projectId}/settings` | user context required | data:write | [Updates the measurement system settings for a project](./endpoints/takeoff-projects-project_id-settings-PATCH.md) |

## Machine-readable specification

- [OpenAPI 3.1](./openapi.yaml)
