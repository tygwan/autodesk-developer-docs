---
document_type: "api-group-index"
product: "Autodesk Forma"
surface: "forma-apis"
group: "Data Connector"
protocol: "REST"
language: "en"
generated: "true"
---

# Data Connector

[Forma APIs index](../../INDEX.md)

## Overview

- **Product:** Autodesk Forma
- **Surface:** Forma APIs
- **Protocol:** REST
- **Capabilities:** Create and retrieve project data extracts and data requests.
- **Common path:** `/data-connector/v1/accounts/{accountId}`

## Endpoints

| Method | Path | Authentication | Scopes | Description |
| --- | --- | --- | --- | --- |
| `GET` | `/data-connector/v1/accounts/{accountId}/jobs` | user context required | data:read | [Returns an array of Data Connector jobs spawned by requests from the authenticated user](./endpoints/data-connector-jobs-GET.md) |
| `DELETE` | `/data-connector/v1/accounts/{accountId}/jobs/{jobId}` | user context required | data:write | [Cancels the specified running job spawned by a data request created by the authenticated user](./endpoints/data-connector-jobs-jobId-DELETE.md) |
| `GET` | `/data-connector/v1/accounts/{accountId}/jobs/{jobId}` | user context required | data:write | [Returns information about a specified job that was spawned by a data request created by the authenticated user](./endpoints/data-connector-jobs-jobId-GET.md) |
| `GET` | `/data-connector/v1/accounts/{accountId}/jobs/{jobId}/data-listing` | user context required | data:read | [Returns an array of information about the files contained within the data extract created by a specified job](./endpoints/data-connector-jobs-jobId-data-listing-GET.md) |
| `GET` | `/data-connector/v1/accounts/{accountId}/jobs/{jobId}/data/{name}` | user context required | data:read | [Returns a signed URL that you can contact to retrieve a single specified file from a specified job’s data extract](./endpoints/data-connector-jobs-jobId-data-name-GET.md) |
| `GET` | `/data-connector/v1/accounts/{accountId}/requests` | user context required | data:read | [Returns an array of data requests that the authenticated user has created in the specified hub](./endpoints/data-connector-requests-GET.md) |
| `POST` | `/data-connector/v1/accounts/{accountId}/requests` | user context required | data:create | [Creates a data request for an authenticated user](./endpoints/data-connector-requests-POST.md) |
| `DELETE` | `/data-connector/v1/accounts/{accountId}/requests/{requestId}` | user context required | data:write | [Deletes the specified data request created earlier by the authenticated user](./endpoints/data-connector-requests-requestId-DELETE.md) |
| `GET` | `/data-connector/v1/accounts/{accountId}/requests/{requestId}` | user context required | data:read | [Returns information about a specified data request created earlier by the authenticated user](./endpoints/data-connector-requests-requestId-GET.md) |
| `PATCH` | `/data-connector/v1/accounts/{accountId}/requests/{requestId}` | user context required | data:write | [Updates the attributes of an existing data request created earlier by the authenticated user](./endpoints/data-connector-requests-requestId-PATCH.md) |
| `GET` | `/data-connector/v1/accounts/{accountId}/requests/{requestId}/jobs` | user context required | data:read | [Returns an array of data connector jobs associated with a request that was created by the authenticated user](./endpoints/data-connector-requests-requestId-jobs-GET.md) |

## Machine-readable specification

- [OpenAPI 3.1](./openapi.yaml)
