---
document_type: "api-group-index"
product: "Autodesk Forma"
surface: "forma-apis"
group: "Locations"
protocol: "REST"
language: "en"
generated: "true"
---

# Locations

[Forma APIs index](../../INDEX.md)

## Overview

- **Product:** Autodesk Forma
- **Surface:** Forma APIs
- **Protocol:** REST
- **Capabilities:** Create and manage hierarchical project location trees.
- **Common path:** `/construction/locations/v2/projects/{projectId}/trees/{treeId}/nodes`

## Endpoints

| Method | Path | Authentication | Scopes | Description |
| --- | --- | --- | --- | --- |
| `GET` | `/construction/locations/v2/projects/{projectId}/trees/{treeId}/nodes` | user context required | data:read | [Retrieves an array of nodes (locations) from the specified locations tree (LBS)](./endpoints/locations-nodes-GET.md) |
| `POST` | `/construction/locations/v2/projects/{projectId}/trees/{treeId}/nodes` | user context required | data:write | [Creates a node in the specified locations tree](./endpoints/locations-nodes-POST.md) |
| `DELETE` | `/construction/locations/v2/projects/{projectId}/trees/{treeId}/nodes/{nodeId}` | user context required | data:write | [Deletes the specified node from the specified locations tree](./endpoints/locations-nodesnodeid-DELETE.md) |
| `PATCH` | `/construction/locations/v2/projects/{projectId}/trees/{treeId}/nodes/{nodeId}` | user context required | data:write | [Updates the name or barcode of the specified node of the specified locations tree](./endpoints/locations-nodesnodeid-PATCH.md) |

## Machine-readable specification

- [OpenAPI 3.1](./openapi.yaml)
