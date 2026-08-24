---
document_type: "api-group-index"
product: "Autodesk Forma"
surface: "forma-apis"
group: "Classifications (beta)"
protocol: "REST"
language: "en"
generated: "true"
---

# Classifications (beta)

[Forma APIs index](../../INDEX.md)

## Overview

- **Product:** Autodesk Forma
- **Surface:** Forma APIs
- **Protocol:** REST
- **Capabilities:** Manage project classification trees and nodes.
- **Common path:** `/construction/classifications/v1/projects/{projectId}`

## Endpoints

| Method | Path | Authentication | Scopes | Description |
| --- | --- | --- | --- | --- |
| `GET` | `/construction/classifications/v1/projects/{projectId}/trees` | user context required | data:read | [Retrieves a list of classification trees in a project, sorted by creation date from newest to oldest](./endpoints/classifications-trees-GET.md) |
| `POST` | `/construction/classifications/v1/projects/{projectId}/trees:import` | user context required | data:write | [Trees](./endpoints/classifications-treesimport-POST.md) |
| `GET` | `/construction/classifications/v1/projects/{projectId}/trees/{treeId}` | user context required | data:read | [Retrieves the metadata for a specific classification tree, without its nodes](./endpoints/classifications-trees-treeId-GET.md) |
| `PATCH` | `/construction/classifications/v1/projects/{projectId}/trees/{treeId}` | user context required | data:write | [Updates a tree’s name or description](./endpoints/classifications-trees-treeId-PATCH.md) |
| `POST` | `/construction/classifications/v1/projects/{projectId}/trees/{treeId}:reimport` | user context required | data:write | [Trees](./endpoints/classifications-trees-treeId-reimport-POST.md) |
| `GET` | `/construction/classifications/v1/projects/{projectId}/trees/{treeId}/versions/tip/nodes` | user context required | data:read | [Retrieves the nodes from the latest version (tip version) of a classification tree](./endpoints/classifications-trees-treeId-versions-tip-nodes-GET.md) |

## Machine-readable specification

- [OpenAPI 3.1](./openapi.yaml)
