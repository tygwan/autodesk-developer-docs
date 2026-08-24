---
document_type: "api-group-index"
product: "Autodesk Forma"
surface: "forma-apis"
group: "Photos"
protocol: "REST"
language: "en"
generated: "true"
---

# Photos

[Forma APIs index](../../INDEX.md)

## Overview

- **Product:** Autodesk Forma
- **Surface:** Forma APIs
- **Protocol:** REST
- **Capabilities:** Access and manage construction photos.
- **Common path:** `/construction/photos/v1/projects/{projectId}`

## Endpoints

| Method | Path | Authentication | Scopes | Description |
| --- | --- | --- | --- | --- |
| `POST` | `/construction/photos/v1/projects/{projectId}/photos:filter` | user context required | data:read | [Searches for and returns all specified media (photo or video) within a project visible to the authenticated user](./endpoints/photos-getfilteredphotos-POST.md) |
| `GET` | `/construction/photos/v1/projects/{projectId}/photos/{photoId}` | user context required | data:read | [Return a single media (photo or video)](./endpoints/photos-getphoto-GET.md) |

## Machine-readable specification

- [OpenAPI 3.1](./openapi.yaml)
