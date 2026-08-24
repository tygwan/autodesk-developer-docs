---
document_type: "api-group-index"
product: "Autodesk Forma"
surface: "forma-apis"
group: "Relationships"
protocol: "REST"
language: "en"
generated: "true"
---

# Relationships

[Forma APIs index](../../INDEX.md)

## Overview

- **Product:** Autodesk Forma
- **Surface:** Forma APIs
- **Protocol:** REST
- **Capabilities:** Create and query relationships between project resources.
- **Common path:** `/bim360/relationship/v2`

## Endpoints

| Method | Path | Authentication | Scopes | Description |
| --- | --- | --- | --- | --- |
| `PUT` | `/bim360/relationship/v2/containers/{containerId}/relationships` | user context required | data:create data:write | [Creates a relationship between two entities (for example, asset and document)](./endpoints/relationship-service-v2-add-relationships-PUT.md) |
| `POST` | `/bim360/relationship/v2/containers/{containerId}/relationships:batch` | user context required | data:read | [Retrieves a list of one or more relationships by passing an array of relationship IDs](./endpoints/relationship-service-v2-get-relationships-batch-POST.md) |
| `POST` | `/bim360/relationship/v2/containers/{containerId}/relationships:delete` | user context required | data:write | [Deletes one or more relationships by passing an array of relationship UUIDs](./endpoints/relationship-service-v2-delete-relationships-POST.md) |
| `POST` | `/bim360/relationship/v2/containers/{containerId}/relationships:intersect` | user context required | data:read | [Retrieves a list of relationships that contain the specified relationship entities](./endpoints/relationship-service-v2-intersect-relationships-POST.md) |
| `GET` | `/bim360/relationship/v2/containers/{containerId}/relationships:search` | user context required | data:read | [Retrieves a list of relationships that match the provided search parameters](./endpoints/relationship-service-v2-search-relationships-GET.md) |
| `POST` | `/bim360/relationship/v2/containers/{containerId}/relationships:sync` | user context required | data:read | [Synchronise relationships using the (optional) synchronization token passed by the caller](./endpoints/relationship-service-v2-relationships-sync-POST.md) |
| `POST` | `/bim360/relationship/v2/containers/{containerId}/relationships:syncStatus` | user context required | data:read | [Retrieves the relationship synchronization status for the caller as one or more synchronization tokens](./endpoints/relationship-service-v2-relationships-sync-status-POST.md) |
| `GET` | `/bim360/relationship/v2/containers/{containerId}/relationships/{relationshipId}` | user context required | data:read | [Retrieves a requested relationship based on the relationship’s ID](./endpoints/relationship-service-v2-get-relationship-by-id-GET.md) |
| `GET` | `/bim360/relationship/v2/utility/relationships:writable` | user context required | data:read | [GET utility/relationships:writable](./endpoints/relationship-service-v2-get-writable-relationship-domains-GET.md) |

## Machine-readable specification

- [OpenAPI 3.1](./openapi.yaml)
