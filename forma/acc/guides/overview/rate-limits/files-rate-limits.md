---
title: "Files Rate Limits"
url_path: overview/rate-limits/files-rate-limits
surface: guide
---
# Forma: Files API Rate Limits

The Forma Files API observes a set of rate limits to ensure that all clients get sufficient service and that runaway applications don’t consume excessive resources. You’ll find general information about rate limits in [APS Rate Limits and Quotas](https://aps.autodesk.com/en/docs/acc/v1/overview/rate-limits/forge-rate-limits).

Each endpoint of the Files API has its own independent rate limit. Both of these rate limits apply per application (specified by client ID):

| Endpoints | Limit (requests/minute) | Scope |
| --- | --- | --- |
| [POST /projects/{project_id}/exports](https://aps.autodesk.com/en/docs/acc/v1/reference/http/v1-files-export-pdf-files-POST) | 100 | Per application (specified by client ID) |
| [GET /projects/{project_id}/exports/{export_id}](https://aps.autodesk.com/en/docs/acc/v1/reference/http/v1-files-export-status-and-result-GET) | 200 | Per application (specified by client ID) |
| [GET /projects/{project_id}/published-versions/{version_id}/linked-files](https://aps.autodesk.com/en/docs/acc/v1/reference/http/rcm-linked-files-GET) | 200 | Per application (specified by client ID) |
| [GET /projects/{project_id}/packages](https://aps.autodesk.com/en/docs/acc/v1/reference/http/packages-list-packages-GET) | 200 | Per application (specified by client ID) |
| [GET /projects/{project_id}/packages/{package_id}/resources](https://aps.autodesk.com/en/docs/acc/v1/reference/http/packages-list-package-resources-GET) | 200 | Per application (specified by client ID) |
| [GET /projects/{project_id}/custom-attribute-definitions](https://aps.autodesk.com/en/docs/acc/v1/reference/http/customattributes-custom-attribute-definitions-GET) | 2000 | Per application (specified by client ID) |
| [GET /projects/{project_id}/custom-attribute-definitions/{customAttributeDefinitionId}/items](https://aps.autodesk.com/en/docs/acc/v1/reference/http/customattributes-items-GET) | 2000 | Per application (specified by client ID) |

## Violation Notification

If an application makes a Files API request that exceeds these rate limits, the Files service returns an HTTP 429 error (described in detail in [APS Rate Limits and Quotas](https://aps.autodesk.com/en/docs/acc/v1/overview/rate-limits/forge-rate-limits)).

## Changing Limits

[APS Rate Limits and Quotas](https://aps.autodesk.com/en/docs/acc/v1/overview/rate-limits/forge-rate-limits) describes how to request rate limit changes for APS APIs.

---
원본 문서: https://aps.autodesk.com/en/docs/acc/v1/overview/rate-limits/files-rate-limits
