---
document_type: "api-group-index"
product: "Autodesk Forma"
surface: "forma-site-design"
group: "terrain"
protocol: "REST"
language: "en"
generated: "true"
---

# terrain

[Forma Site Design API & SDK index](../../INDEX.md)

## Overview

- **Product:** Autodesk Forma
- **Surface:** Forma Site Design API & SDK
- **Protocol:** REST
- **Capabilities:** Create terrain resources and download terrain geometry.
- **Common path:** `/forma/terrain/v1alpha/terrains`

## Endpoints

| Method | Path | Authentication | Scopes | Description |
| --- | --- | --- | --- | --- |
| `POST` | `/forma/terrain/v1alpha/terrains` | user context optional | data:read data:write | [This endpoint is used to create a new terrain and generate a link for uploading a gzipped terrain GLB file](./endpoints/terrain-createterrain-POST.md) |
| `PATCH` | `/forma/terrain/v1alpha/terrains/{elementId}/revisions/{revision}` | user context optional | data:read data:write | [This endpoint is used to mark a specific terrain as uploaded by providing the terrain’s elementId and revision](./endpoints/terrain-markterrainasuploaded-PATCH.md) |
| `GET` | `/forma/terrain/v1alpha/terrains/{elementId}/revisions/{revision}/download` | user context optional | data:read data:write | [This endpoint is used to download a specific terrain GLB file by providing the terrain’s elementId and revision](./endpoints/terrain-downloadterrainglb-GET.md) |

## Machine-readable specification

- [OpenAPI 3.1](./openapi.yaml)
