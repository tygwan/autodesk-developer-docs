---
document_type: "api-group-index"
product: "Autodesk Forma"
surface: "forma-site-design"
group: "integrate"
protocol: "REST"
language: "en"
generated: "true"
---

# integrate

[Forma Site Design API & SDK index](../../INDEX.md)

## Overview

- **Product:** Autodesk Forma
- **Surface:** Forma Site Design API & SDK
- **Protocol:** REST
- **Capabilities:** Integrate external geometry and element data with Forma.
- **Common path:** `/forma/integrate`

## Endpoints

| Method | Path | Authentication | Scopes | Description |
| --- | --- | --- | --- | --- |
| `POST` | `/forma/integrate/v1alpha/elements` | user context optional | data:read data:write | [Create an element with geometry](./endpoints/integrate-createelementhierarchy-POST.md) |
| `POST` | `/forma/integrate/v1alpha/elements/{elementId}` | user context optional | data:read data:write | [Creates a new element with a new revision under the specified element ID](./endpoints/integrate-updateelementwithoutrevision-POST.md) |
| `GET` | `/forma/integrate/v1alpha/upload-link` | user context optional | data:read data:write | [Useful for submitting element trees with more than 6MB of data](./endpoints/integrate-getuploadlink-GET.md) |
| `POST` | `/forma/integrate/v2alpha/elements` | user context required | data:read data:write | [To store a representation you need to first upload it to S3 by using the upload link endpoint](./endpoints/integrate-createelementv2-POST.md) |
| `POST` | `/forma/integrate/v2alpha/elements/{elementUrn}/update` | user context required | data:read data:write | [Create a new element based on the existing element](./endpoints/integrate-updateelementv2-POST.md) |
| `POST` | `/forma/integrate/v2alpha/elements/batch-ingest` | user context required | data:read data:write | [The desired element URNs can optionally be specified](./endpoints/integrate-batchingestelementsv2-POST.md) |

## Machine-readable specification

- [OpenAPI 3.1](./openapi.yaml)
