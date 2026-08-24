---
document_type: "api-group-index"
product: "Autodesk Forma"
surface: "forma-site-design"
group: "sun-analysis"
protocol: "REST"
language: "en"
generated: "true"
---

# sun-analysis

[Forma Site Design API & SDK index](../../INDEX.md)

## Overview

- **Product:** Autodesk Forma
- **Surface:** Forma Site Design API & SDK
- **Protocol:** REST
- **Capabilities:** Trigger sun analyses and retrieve their results.
- **Common path:** `/forma/sun-analysis/v1alpha/analyses`

## Endpoints

| Method | Path | Authentication | Scopes | Description |
| --- | --- | --- | --- | --- |
| `GET` | `/forma/sun-analysis/v1alpha/analyses/{analysisId}` | user context required | data:read | [Get the metadata of an analysis](./endpoints/sun-analysis-getanalysis-GET.md) |
| `POST` | `/forma/sun-analysis/v1alpha/analyses/trigger` | user context required | data:read data:write | [Trigger a sun analysis for a proposal or element on a given date](./endpoints/sun-analysis-triggersunanalysis-POST.md) |

## Machine-readable specification

- [OpenAPI 3.1](./openapi.yaml)
