---
title: "Data Management Rate Limits"
url_path: developers_guide/rate-limiting/dm-rate-limits
product: "Data Management API"
surface: "data-management-v2"
protocol: "Documentation"
document_kind: "guide"
api_version: "v2"
section: "developers_guide"
category: "rate-limiting"
---
# Data Management Rate Limits

The Data Management services observe a set of rate limits for service clients to ensure that all clients get sufficient service and that runaway applications don’t consume excessive resources. [APS Rate Limits and Quotas](https://aps.autodesk.com/en/docs/data/v2/developers_guide/rate-limiting/forge-rate-limits) describes rate limits in general.

The Data Management services define rate limits differently as described below.

## Project and Data Service Rate Limits

The Project and Data services (whose endpoints are listed in the REST API Reference under “Data Management” and “Commands”) define rate limits for each endpoint.

### Endpoint Rate Limits

These rate limits apply to each of the Data Management API’s endpoints. Note that these rates are not service guarantees. In the uncommon case where total service use is too high across all clients, accepted request rates may drop until traffic subsides.

#### Hub Endpoints

| Method | Endpoint | Limit (requests/minute) |
| --- | --- | --- |
| GET | /hubs | 50 |
| GET | /hubs/{hub_id} | 50 |

#### Project Endpoints

| Method | Endpoint | Limit (requests/minute) |
| --- | --- | --- |
| GET | /hubs/{hub_id}/projects | 50 |
| GET | /hubs/{hub_id}/projects/{project_id} | 50 |
| GET | /hubs/{hub_id}/projects/{project_id}/hub | 50 |
| GET | /hubs/{hub_id}/projects/{project_id}/topFolders | 300 |
| GET | /projects/{project_id}/downloads/{download_id} | 300 |
| GET | /projects/{project_id}/jobs/{job_id} | 300 |
| POST | /projects/{project_id}/downloads | 50 |
| POST | /projects/{project_id}/storage | 300 |

#### Folder Endpoints

| Method | Endpoint | Limit (requests/minute) |
| --- | --- | --- |
| GET | /projects/{project_id}/folders/{folder_id} | 300 |
| GET | /projects/{project_id}/folders/{folder_id}/contents | 300 |
| GET | /projects/{project_id}/folders/{folder_id}/parent | 50 |
| GET | /projects/{project_id}/folders/{folder_id}/refs | 50 |
| GET | /projects/{project_id}/folders/{folder_id}/relationships/links | 50 |
| GET | /projects/{project_id}/folders/{folder_id}/relationships/refs | 50 |
| GET | /projects/{project_id}/folders/{folder_id}/search | 300 |
| POST | /projects/{project_id}/folders | 50 |
| POST | /projects/{project_id}/folders/{folder_id}/relationships/refs | 50 |
| PATCH | /projects/{project_id}/folders/{folder_id} | 50 |

#### Item Endpoints

| Method | Endpoint | Limit (requests/minute) |
| --- | --- | --- |
| GET | /projects/{project_id}/items/{item_id} | 300 |
| GET | /projects/{project_id}/items/{item_id}/parent | 50 |
| GET | /projects/{project_id}/items/{item_id}/refs | 300 |
| GET | /projects/{project_id}/items/{item_id}/relationships/refs | 50 |
| GET | /projects/{project_id}/items/{item_id}/relationships/links | 50 |
| GET | /projects/{project_id}/items/{item_id}/tip | 50 |
| GET | /projects/{project_id}/items/{item_id}/versions | 800 |
| POST | /projects/{project_id}/items | 50 |
| POST | /projects/{project_id}/items/{item_id}/relationships/refs | 50 |
| PATCH | /projects/{project_id}/items/{item_id} | 50 |

#### Version Endpoints

| Method | Endpoint | Limit (requests/minute) |
| --- | --- | --- |
| GET | /projects/{project_id}/versions/{version_id} | 300 |
| GET | /projects/{project_id}/versions/{version_id}/downloadFormats | 50 |
| GET | /projects/{project_id}/versions/{version_id}/downloads | 50 |
| GET | /projects/{project_id}/versions/{version_id}/item | 50 |
| GET | /projects/{project_id}/versions/{version_id}/refs | 50 |
| GET | /projects/{project_id}/versions/{version_id}/relationships/links | 50 |
| GET | /projects/{project_id}/versions/{version_id}/relationships/refs | 50 |
| POST | /projects/{project_id}/versions | 300 |
| POST | /projects/{project_id}/versions/{version_id}/relationships/refs | 50 |
| POST | /projects/{project_id}/versions/{version_id}/relationships/links | 50 |
| PATCH | /projects/{project_id}/versions/{version_id} | 50 |
| PATCH | /projects/{project_id}/versions/{version_id}/relationships/links/{link_id} | 50 |

#### Command Endpoint

| Method | Endpoint | Limit (requests/minute) |
| --- | --- | --- |
| POST | /projects/{project_id}/commands | 300 |

### Scope

The Project and Data services set a separate rate limit for each application (specified by client ID) per API endpoint. For example, an application can’t exceed the specified limit of 300 requests per minute when calling the API endpoint `GET  /projects/{project_id}/folders/{folder_id}`. The application can, however, exceed 300 combined requests per minute if those requests go to separate endpoints and requests to each endpoint don’t violate each endpoint’s specified rate limit. For example, an application could make 320 requests per minute if 290 requests go to `GET  /projects/{project_id}/folders/{folder_id}` (limit 300) and 30 go to `GET  /projects/{project_id}/folders/{folder_id}/parent` (limit 50).

### Violation Notification

If an application exceeds an endpoint’s rate limit, the Data Management service returns an `HTTP 429` error (described in detail in [APS Rate Limits and Quotas](https://aps.autodesk.com/en/docs/data/v2/developers_guide/rate-limiting/forge-rate-limits) ).

## OSS Rate Limit

The Object Storage service (whose endpoints are listed in the REST API Reference under “OSS”) defines an overall rate limit.

### Overall Rate Limit

OSS’s overall rate limit is 1000 requests per minute. Note that this rate is not a service guarantee. In the uncommon case where total service use is too high across all clients, the accepted request rate may drop until traffic subsides.

### Scope

The Object Storage service sets an overall request rate limit for each application (specified by client ID) that applies to all OSS endpoints together. For example, if during one minute an application makes 300 requests to `POST buckets`, 500 to `GET buckets`, and 300 to `DELETE buckets/{bucketKey}`, the application’s overall request rate is 1100 rpm, which would exceed an OSS rate limit of 1000 rpm.

### Violation Notification

If an application exceeds the OSS rate limit, OSS returns an `HTTP 429` error (described in detail in APS Rate Limits and Quotas).

## Changing Limits

[APS Rate Limits and Quotas](https://aps.autodesk.com/en/docs/data/v2/developers_guide/rate-limiting/forge-rate-limits) describes how to request rate limit changes for APIs.

---
원본 문서: https://aps.autodesk.com/en/docs/data/v2/developers_guide/rate-limiting/dm-rate-limits
