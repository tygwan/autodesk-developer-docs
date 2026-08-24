---
document_type: "archive-directory-index"
product: "Model Derivative API"
surface: "model-derivative-v2"
protocol: "REST with TypeScript and .NET SDKs"
language: "en"
generated: "true"
---

# REST API Reference

[Model Derivative API v2 index](../../INDEX.md) · [Parent index](../INDEX.md)

## Overview

- [REST API Reference](../http.md)

## Documents

| Kind | Name | API detail | Documentation |
| --- | --- | --- | --- |
| endpoint | DELETE Delete Manifest | `DELETE /modelderivative/v2/designdata/{urn}/manifest` | [Open document](./urn-manifest-DELETE.md) |
| endpoint | GET Download Derivative (Deprecated) | `GET /modelderivative/v2/designdata/{urn}/manifest/{derivativeUrn}` | [Open document](./urn-manifest-derivativeurn-GET.md) |
| endpoint | GET Fetch All Properties | `GET /modelderivative/v2/designdata/{urn}/metadata/{modelGuid}/properties` | [Open document](./urn-metadata-guid-properties-GET.md) |
| endpoint | GET Fetch Derivative Download URL | `GET /modelderivative/v2/designdata/{urn}/manifest/{derivativeUrn}/signedcookies` | [Open document](./urn-manifest-derivativeUrn-signedcookies-GET.md) |
| endpoint | GET Fetch Manifest | `GET /modelderivative/v2/designdata/{urn}/manifest` | [Open document](./urn-manifest-GET.md) |
| endpoint | GET Fetch Object Tree | `GET /modelderivative/v2/designdata/{urn}/metadata/{modelGuid}` | [Open document](./urn-metadata-guid-GET.md) |
| endpoint | GET Fetch Thumbnail | `GET /modelderivative/v2/designdata/{urn}/thumbnail` | [Open document](./urn-thumbnail-GET.md) |
| endpoint | GET List Model Views | `GET /modelderivative/v2/designdata/{urn}/metadata` | [Open document](./urn-metadata-GET.md) |
| endpoint | GET List Supported Formats | `GET /modelderivative/v2/designdata/formats` | [Open document](./formats-GET.md) |
| endpoint | HEAD Check Derivative Details | `HEAD /modelderivative/v2/designdata/{urn}/manifest/{derivativeUrn}` | [Open document](./urn-manifest-derivativeurn-HEAD.md) |
| endpoint | POST Create Translation Job | `POST /modelderivative/v2/designdata/job` | [Open document](./job-POST.md) |
| endpoint | POST Fetch Specific Properties | `POST /modelderivative/v2/designdata/{urn}/metadata/{modelGuid}/properties:query` | [Open document](./urn-metadata-guid-properties-query-POST.md) |
| endpoint | POST Specify References | `POST /modelderivative/v2/designdata/{urn}/references` | [Open document](./urn-references-POST.md) |

Captured documentation values are preserved as published.
