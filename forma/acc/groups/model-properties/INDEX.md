---
document_type: "api-group-index"
product: "Autodesk Forma"
surface: "forma-apis"
group: "Model Properties"
protocol: "REST"
language: "en"
generated: "true"
---

# Model Properties

[Forma APIs index](../../INDEX.md)

## Overview

- **Product:** Autodesk Forma
- **Surface:** Forma APIs
- **Protocol:** REST
- **Capabilities:** Query indexed model properties and compare model versions.
- **Common path:** `/construction/index/v2/projects/{projectId}`

## Endpoints

| Method | Path | Authentication | Scopes | Description |
| --- | --- | --- | --- | --- |
| `POST` | `/construction/index/v2/projects/{projectId}/diffs:batch-status` | user context required | data:read | [Retrieve the job status for several jobs in a single request](./endpoints/index-v2-diff-jobs-batch-status-post.md) |
| `GET` | `/construction/index/v2/projects/{projectId}/diffs/{diffId}` | user context required | data:read | [Retrieve the diff status for the given diff ID](./endpoints/index-v2-diff-status-get.md) |
| `GET` | `/construction/index/v2/projects/{projectId}/diffs/{diffId}/fields` | user context required | data:read | [Retrieve a specific fields dictionary associated with a diff index](./endpoints/index-v2-diff-fields-get.md) |
| `GET` | `/construction/index/v2/projects/{projectId}/diffs/{diffId}/manifest` | user context required | data:read | [Retrieve a specific manifest associated with a diff index](./endpoints/index-v2-diff-manifest-get.md) |
| `GET` | `/construction/index/v2/projects/{projectId}/diffs/{diffId}/properties` | user context required | data:read | [Retrieve the specific properties of the given diff](./endpoints/index-v2-diff-properties-get.md) |
| `POST` | `/construction/index/v2/projects/{projectId}/diffs/{diffId}/queries` | user context required | data:read | [Applies the given query to the given properties index](./endpoints/index-v2-diff-query-post.md) |
| `GET` | `/construction/index/v2/projects/{projectId}/diffs/{diffId}/queries/{queryId}` | user context required | data:read | [Depending on the state different properties might be present or missing](./endpoints/index-v2-diff-query-job-status-get.md) |
| `GET` | `/construction/index/v2/projects/{projectId}/diffs/{diffId}/queries/{queryId}/properties` | user context required | data:read | [Retrieve the query specific properties of the given diff](./endpoints/index-v2-diff-query-properties-get.md) |
| `POST` | `/construction/index/v2/projects/{projectId}/indexes:batch-status` | user context required | data:read | [Retrieve the job status for several jobs in a single request](./endpoints/index-v2-index-jobs-batch-status-post.md) |
| `GET` | `/construction/index/v2/projects/{projectId}/indexes/{indexId}` | user context required | data:read | [Retrieve the indexing status for the given index ID](./endpoints/index-v2-index-status-get.md) |
| `GET` | `/construction/index/v2/projects/{projectId}/indexes/{indexId}/fields` | user context required | data:read | [Retrieve a specific fields dictionary associated with a properties index](./endpoints/index-v2-index-fields-get.md) |
| `GET` | `/construction/index/v2/projects/{projectId}/indexes/{indexId}/manifest` | user context required | data:read | [Retrieve a specific manifest associated with a properties index](./endpoints/index-v2-index-manifest-get.md) |
| `GET` | `/construction/index/v2/projects/{projectId}/indexes/{indexId}/properties` | user context required | data:read | [Retrieve the specific properties index](./endpoints/index-v2-index-properties-get.md) |
| `POST` | `/construction/index/v2/projects/{projectId}/indexes/{indexId}/queries` | user context required | data:read | [Applies the given query on the given properties index](./endpoints/index-v2-index-query-post.md) |
| `GET` | `/construction/index/v2/projects/{projectId}/indexes/{indexId}/queries/{queryId}` | user context required | data:read | [Depending on the state different properties might be present or missing](./endpoints/index-v2-index-query-job-status-get.md) |
| `GET` | `/construction/index/v2/projects/{projectId}/indexes/{indexId}/queries/{queryId}/properties` | user context required | data:read | [Retrieve the query specific properties index](./endpoints/index-v2-index-query-properties-get.md) |

## Machine-readable specification

- [OpenAPI 3.1](./openapi.yaml)
