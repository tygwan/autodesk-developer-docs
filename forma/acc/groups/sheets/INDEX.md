---
document_type: "api-group-index"
product: "Autodesk Forma"
surface: "forma-apis"
group: "Sheets"
protocol: "REST"
language: "en"
generated: "true"
---

# Sheets

[Forma APIs index](../../INDEX.md)

## Overview

- **Product:** Autodesk Forma
- **Surface:** Forma APIs
- **Protocol:** REST
- **Capabilities:** Upload, retrieve, and export project sheets.
- **Common path:** `/construction/sheets/v1/projects/{projectId}`

## Endpoints

| Method | Path | Authentication | Scopes | Description |
| --- | --- | --- | --- | --- |
| `GET` | `/construction/sheets/v1/projects/{projectId}/collections` | user context optional | data:read | [Retrieves information about all the collections in a project](./endpoints/sheets-collections-GET.md) |
| `GET` | `/construction/sheets/v1/projects/{projectId}/collections/{collectionId}` | user context optional | data:read | [Retrieves a specific collection by its unique ID](./endpoints/sheets-collections-collectionId-GET.md) |
| `POST` | `/construction/sheets/v1/projects/{projectId}/exports` | user context optional | data:write | [Exports up to 1000 sheets from the from the Sheets tool in Forma Build into a new downloadble PDF file](./endpoints/sheets-exports-POST.md) |
| `GET` | `/construction/sheets/v1/projects/{projectId}/exports/{exportId}` | user context optional | data:read | [Exports](./endpoints/sheets-exports-exportId-GET.md) |
| `GET` | `/construction/sheets/v1/projects/{projectId}/sheets` | user context optional | data:read | [Retrieves information about the sheets in a project](./endpoints/sheets-sheets-GET.md) |
| `POST` | `/construction/sheets/v1/projects/{projectId}/sheets:batch-delete` | user context optional | data:write | [Deletes a list of sheets](./endpoints/sheets-sheetsbatch-delete-POST.md) |
| `POST` | `/construction/sheets/v1/projects/{projectId}/sheets:batch-get` | user context optional | data:read | [Retrieves a list of sheets by IDs](./endpoints/sheets-sheetsbatch-get-POST.md) |
| `POST` | `/construction/sheets/v1/projects/{projectId}/sheets:batch-restore` | user context optional | data:write | [Restores deleted sheets](./endpoints/sheets-sheetsbatch-restore-POST.md) |
| `POST` | `/construction/sheets/v1/projects/{projectId}/sheets:batch-update` | user context optional | data:write | [Updates a list of sheets](./endpoints/sheets-sheetsbatch-update-POST.md) |
| `POST` | `/construction/sheets/v1/projects/{projectId}/storage` | user context optional | data:write | [Creates a storage location in the Object Storage Service (OSS) for you to upload the file to](./endpoints/sheets-storage-POST.md) |
| `GET` | `/construction/sheets/v1/projects/{projectId}/uploads` | user context optional | data:read | [Checks the processing status of all the uploaded files in the project](./endpoints/sheets-uploads-GET.md) |
| `POST` | `/construction/sheets/v1/projects/{projectId}/uploads` | user context optional | data:write | [Creates an Forma upload object](./endpoints/sheets-uploads-POST.md) |
| `GET` | `/construction/sheets/v1/projects/{projectId}/uploads/{uploadId}` | user context optional | data:read | [Checks the processing status of a specific uploaded file](./endpoints/sheets-uploads-uploadId-GET.md) |
| `GET` | `/construction/sheets/v1/projects/{projectId}/uploads/{uploadId}/review-sheets` | user context optional | data:read | [Retrieves a list of review sheets](./endpoints/sheets-review-sheets-GET.md) |
| `PATCH` | `/construction/sheets/v1/projects/{projectId}/uploads/{uploadId}/review-sheets` | user context optional | data:write | [Updates review sheets](./endpoints/sheets-review-sheets-PATCH.md) |
| `POST` | `/construction/sheets/v1/projects/{projectId}/uploads/{uploadId}/review-sheets:publish` | user context optional | data:write | [Publishes uploaded review sheets](./endpoints/sheets-review-sheetspublish-POST.md) |
| `POST` | `/construction/sheets/v1/projects/{projectId}/uploads/{uploadId}/thumbnails:batch-get` | user context optional | data:read | [Retrieves a list of thumbnails for the specified review sheets](./endpoints/sheets-thumbnailsbatch-get-POST.md) |
| `GET` | `/construction/sheets/v1/projects/{projectId}/version-sets` | user context optional | data:read | [Retrieves a list of version sets](./endpoints/sheets-version-sets-GET.md) |
| `POST` | `/construction/sheets/v1/projects/{projectId}/version-sets` | user context optional | data:write | [Creates a version set](./endpoints/sheets-version-sets-POST.md) |
| `POST` | `/construction/sheets/v1/projects/{projectId}/version-sets:batch-delete` | user context optional | data:write | [Deletes a list of version sets](./endpoints/sheets-version-setsbatch-delete-POST.md) |
| `POST` | `/construction/sheets/v1/projects/{projectId}/version-sets:batch-get` | user context optional | data:read | [Retrieves a list of version sets](./endpoints/sheets-version-setsbatch-get-POST.md) |
| `PATCH` | `/construction/sheets/v1/projects/{projectId}/version-sets/{versionSetId}` | user context optional | data:write | [Updates a version set](./endpoints/sheets-version-sets-versionSetId-PATCH.md) |

## Machine-readable specification

- [OpenAPI 3.1](./openapi.yaml)
