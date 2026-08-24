---
document_type: "api-group-index"
product: "Autodesk Forma"
surface: "forma-apis"
group: "Transmittals"
protocol: "REST"
language: "en"
generated: "true"
---

# Transmittals

[Forma APIs index](../../INDEX.md)

## Overview

- **Product:** Autodesk Forma
- **Surface:** Forma APIs
- **Protocol:** REST
- **Capabilities:** Create and retrieve project transmittals and their contents.
- **Common path:** `/construction/transmittals/v1/projects/{projectId}/transmittals`

## Endpoints

| Method | Path | Authentication | Scopes | Description |
| --- | --- | --- | --- | --- |
| `GET` | `/construction/transmittals/v1/projects/{projectId}/transmittals` | user context optional | data:read | [Retrieves all transmittals created in the specified project](./endpoints/transmittals-listtransmittals-GET.md) |
| `GET` | `/construction/transmittals/v1/projects/{projectId}/transmittals/{transmittalId}` | user context optional | data:read | [Retrieves a transmittal by ID within the specified project](./endpoints/transmittals-gettransmittal-GET.md) |
| `GET` | `/construction/transmittals/v1/projects/{projectId}/transmittals/{transmittalId}/documents` | user context optional | data:read | [Retrieves the documents that were included in a specific transmittal](./endpoints/transmittals-listtransmittaldocuments-GET.md) |
| `GET` | `/construction/transmittals/v1/projects/{projectId}/transmittals/{transmittalId}/folders` | user context optional | data:read | [Retrieves all folders associated with the documents included in a specific transmittal](./endpoints/transmittals-listtransmittalfolders-GET.md) |
| `GET` | `/construction/transmittals/v1/projects/{projectId}/transmittals/{transmittalId}/recipients` | user context optional | data:read | [Retrieves all recipients of a specific transmittal, including project members and external members](./endpoints/transmittals-listtransmittalrecipients-GET.md) |

## Machine-readable specification

- [OpenAPI 3.1](./openapi.yaml)
