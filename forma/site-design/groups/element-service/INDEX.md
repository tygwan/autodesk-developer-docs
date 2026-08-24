---
document_type: "api-group-index"
product: "Autodesk Forma"
surface: "forma-site-design"
group: "element-service"
protocol: "REST"
language: "en"
generated: "true"
---

# element-service

[Forma Site Design API & SDK index](../../INDEX.md)

## Overview

- **Product:** Autodesk Forma
- **Surface:** Forma Site Design API & SDK
- **Protocol:** REST
- **Capabilities:** Retrieve Forma elements and binary element blobs.
- **Common path:** `/forma/element-service/v1alpha`

## Endpoints

| Method | Path | Authentication | Scopes | Description |
| --- | --- | --- | --- | --- |
| `POST` | `/forma/element-service/v1alpha/blobs-batch` | user context required | data:read | [This operation can be used to retrieve multiple blobs at once, which helps reducing the number of API calls needed](./endpoints/element-getblobsbatch-POST.md) |
| `GET` | `/forma/element-service/v1alpha/blobs/{blobId}` | user context required | data:read | [Get blob](./endpoints/element-getblob-GET.md) |
| `POST` | `/forma/element-service/v1alpha/elements-batch` | user context required | data:read | [Retrieve multiple elements](./endpoints/element-getelementsbatch-POST.md) |
| `GET` | `/forma/element-service/v1alpha/elements/{urn}` | user context required | data:read | [Get element by urn](./endpoints/element-getelement-GET.md) |

## Machine-readable specification

- [OpenAPI 3.1](./openapi.yaml)
