---
title: "AutoSpecs Rate Limits"
url_path: overview/rate-limits/autospecs-rate-limits
surface: guide
---
# Forma: AutoSpecs API Rate Limits

AutoSpecs APIs observes a set of rate limits to ensure that all clients get sufficient service, and that runaway applications don’t consume excessive resources. You’ll find general information about rate limits in [APS Rate Limits and Quotas](https://aps.autodesk.com/en/docs/acc/v1/overview/rate-limits/forge-rate-limits).

Each endpoint of the AutoSpecs API has its own independent rate limit. All these rate limits apply per application (specified by client ID).

| Endpoints | Limit (requests/minute) | Scope |
| --- | --- | --- |
| [GET /projects/{projectId}/metadata](https://aps.autodesk.com/en/docs/acc/v1/reference/http/autospecs-getprojectmetadata-GET/) | 1000 | Per application (specified by client ID) |
| [GET /projects/{projectId}/version/{versionId}/smartregister](https://aps.autodesk.com/en/docs/acc/v1/reference/http/autospecs-getversionsmartregister-GET/) | 1000 | Per application (specified by client ID) |
| [GET /projects/{projectId}/version/{versionId}/submittalsSummary](https://aps.autodesk.com/en/docs/acc/v1/reference/http/autospecs-getversionsummary-GET/) | 1000 | Per application (specified by client ID) |
| [GET /projects/{projectId}/version/{versionId}/requirements](https://aps.autodesk.com/en/docs/acc/v1/reference/http/autospecs-getversionrequirements-GET/) | 1000 | Per application (specified by client ID) |

## Violation Notification

If an application makes an API request that exceeds these rate limits, the service returns an HTTP 429 error (described in detail in [APS Rate Limits and Quotas](https://aps.autodesk.com/en/docs/acc/v1/overview/rate-limits/forge-rate-limits)).

## Changing Limits

[APS Rate Limits and Quotas](https://aps.autodesk.com/en/docs/acc/v1/overview/rate-limits/forge-rate-limits) describes how to request rate limit changes for APS APIs.

---
원본 문서: https://aps.autodesk.com/en/docs/acc/v1/overview/rate-limits/autospecs-rate-limits
