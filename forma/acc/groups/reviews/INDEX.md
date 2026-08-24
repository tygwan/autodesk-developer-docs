---
document_type: "api-group-index"
product: "Autodesk Forma"
surface: "forma-apis"
group: "Reviews"
protocol: "REST"
language: "en"
generated: "true"
---

# Reviews

[Forma APIs index](../../INDEX.md)

## Overview

- **Product:** Autodesk Forma
- **Surface:** Forma APIs
- **Protocol:** REST
- **Capabilities:** Create reviews, approval workflows, and inspect review resources.
- **Common path:** `/construction/reviews/v1/projects/{projectId}`

## Endpoints

| Method | Path | Authentication | Scopes | Description |
| --- | --- | --- | --- | --- |
| `GET` | `/construction/reviews/v1/projects/{projectId}/reviews` | user context optional | data:read | [Retrieves the list of reviews created in the specified project](./endpoints/reviews-reviews-GET.md) |
| `POST` | `/construction/reviews/v1/projects/{projectId}/reviews` | user context optional | data:write | [Creates a new review in the specified project using an existing approval workflow](./endpoints/reviews-createreview-POST.md) |
| `GET` | `/construction/reviews/v1/projects/{projectId}/reviews/{reviewId}` | user context optional | data:read | [Retrieves a specific review in the specified project by review ID](./endpoints/reviews-getreview-GET.md) |
| `GET` | `/construction/reviews/v1/projects/{projectId}/reviews/{reviewId}/progress` | user context optional | data:read | [Retrieves the progress of a specific review in the specified project](./endpoints/reviews-getreviewprogress-GET.md) |
| `GET` | `/construction/reviews/v1/projects/{projectId}/reviews/{reviewId}/versions` | user context optional | data:read | [Retrieves the file versions included in the latest round of the specified review](./endpoints/reviews-getreviewversions-GET.md) |
| `GET` | `/construction/reviews/v1/projects/{projectId}/reviews/{reviewId}/workflow` | user context optional | data:read | [Retrieves the approval workflow associated with a specific review](./endpoints/reviews-getreviewworkflow-GET.md) |
| `GET` | `/construction/reviews/v1/projects/{projectId}/versions/{versionId}/approval-statuses` | user context optional | data:read | [Retrieves the full approval records and review references of a specific file version](./endpoints/reviews-getversionapprovalstatuses-GET.md) |
| `GET` | `/construction/reviews/v1/projects/{projectId}/workflows` | user context optional | data:read | [Retrieves all approval workflows used for file reviews in a given project](./endpoints/reviews-workflows-GET.md) |
| `POST` | `/construction/reviews/v1/projects/{projectId}/workflows` | user context optional | data:write | [Creates a new approval workflow in the specified project](./endpoints/reviews-createworkflow-POST.md) |
| `GET` | `/construction/reviews/v1/projects/{projectId}/workflows/{workflowId}` | user context optional | data:read | [Retrieves a specific approval workflow in the project by workflow ID](./endpoints/reviews-getworkflow-GET.md) |

## Machine-readable specification

- [OpenAPI 3.1](./openapi.yaml)
