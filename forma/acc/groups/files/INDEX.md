---
document_type: "api-group-index"
product: "Autodesk Forma"
surface: "forma-apis"
group: "Files"
protocol: "REST"
language: "en"
generated: "true"
---

# Files

[Forma APIs index](../../INDEX.md)

## Overview

- **Product:** Autodesk Forma
- **Surface:** Forma APIs
- **Protocol:** REST
- **Capabilities:** Upload, download, export, and manage project files and folders.
- **Common path:** `-`

## Endpoints

| Method | Path | Authentication | Scopes | Description |
| --- | --- | --- | --- | --- |
| `GET` | `/bim360/docs/v1/projects/{project_id}/folders/{folder_id}/custom-attribute-definitions` | user context optional | data:read | [Custom Attributes (beta)](./endpoints/document-management-custom-attribute-definitions-GET.md) |
| `POST` | `/bim360/docs/v1/projects/{project_id}/folders/{folder_id}/custom-attribute-definitions` | user context optional | data:write | [Adds a custom attribute to a folder](./endpoints/document-management-custom-attribute-definitions-POST.md) |
| `GET` | `/bim360/docs/v1/projects/{project_id}/folders/{folder_id}/permissions` | user context optional | data:read | [Permissions](./endpoints/document-management-projects-project_id-folders-folder_id-permissions-GET.md) |
| `POST` | `/bim360/docs/v1/projects/{project_id}/folders/{folder_id}/permissions:batch-create` | user context optional | data:write | [Assign permissions to multiple users, roles, and companies for a BIM 360 Document Management folder](./endpoints/document-management-projects-project_id-folders-folder_id-permissionsbatch-create-POST.md) |
| `POST` | `/bim360/docs/v1/projects/{project_id}/folders/{folder_id}/permissions:batch-delete` | user context optional | data:write | [Deletes all the permissions assigned to specified users, roles, and companies](./endpoints/document-management-projects-project_id-folders-folder_id-permissionsbatch-delete-POST.md) |
| `POST` | `/bim360/docs/v1/projects/{project_id}/folders/{folder_id}/permissions:batch-update` | user context optional | data:write | [Updates the permissions assigned to multiple users, roles, and companies for a folder](./endpoints/document-management-projects-project_id-folders-folder_id-permissionsbatch-update-POST.md) |
| `POST` | `/bim360/docs/v1/projects/{project_id}/versions:batch-get` | user context optional | data:read | [Retrieves a list of custom attribute values for multiple BIM 360 Document Management documents](./endpoints/document-management-versionsbatch-get-POST.md) |
| `POST` | `/bim360/docs/v1/projects/{project_id}/versions/{version_id}/custom-attributes:batch-update` | user context optional | data:write | [Assigns values to custom attributes for multiple documents](./endpoints/document-management-custom-attributesbatch-update-POST.md) |
| `GET` | `/bim360/docs/v1/projects/{projectId}/naming-standards/{id}` | user context optional | data:read | [Retrieves the file naming standard for a project](./endpoints/document-management-naming-standards-id-GET.md) |
| `GET` | `/construction/files/v1/projects/{projectId}/custom-attribute-definitions` | user context optional | data:read | [Retrieves a list of custom attribute definitions for a Forma project](./endpoints/customattributes-custom-attribute-definitions-GET.md) |
| `GET` | `/construction/files/v1/projects/{projectId}/custom-attribute-definitions/{customAttributeDefinitionId}/items` | user context optional | data:read | [Retrieves the selectable options for a large drop-down list (largeList) custom attribute definition](./endpoints/customattributes-items-GET.md) |
| `POST` | `/construction/files/v1/projects/{projectId}/exports` | user context optional | data:write | [Exports one or more individual PDFs, or 2D views and sheets (from DWG or RVT files) as PDFs from the Forma files module](./endpoints/v1-files-export-pdf-files-POST.md) |
| `GET` | `/construction/files/v1/projects/{projectId}/exports/{exportId}` | user context optional | data:read | [Retrieves the status of an export job](./endpoints/v1-files-export-status-and-result-GET.md) |
| `GET` | `/construction/packages/v1/projects/{projectId}/packages` | user context optional | data:read | [Retrieves a list of all packages within a specified Forma project](./endpoints/packages-list-packages-GET.md) |
| `GET` | `/construction/packages/v1/projects/{projectId}/packages/{packageId}/resources` | user context optional | data:read | [Retrieves a list of file versions (“resources”) within a specified package](./endpoints/packages-list-package-resources-GET.md) |
| `GET` | `/construction/rcm/v1/projects/{projectId}/published-versions/{versionId}/linked-files` | user context required | data:read | [Linked Files](./endpoints/rcm-linked-files-GET.md) |

## Machine-readable specification

- [OpenAPI 3.1](./openapi.yaml)
