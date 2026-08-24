---
title: "Classifications Rate Limits (beta)"
url_path: overview/rate-limits/classifications-rate-limits
surface: guide
---
# Forma: Classifications API Rate Limits

The Forma Classifications API observes a set of rate limits to ensure that all clients get sufficient service and that runaway applications don’t consume excessive resources. You’ll find general information about rate limits in [APS Rate Limits and Quotas](https://aps.autodesk.com/en/docs/acc/v1/overview/rate-limits/forge-rate-limits/).

## Defaults

If an endpoint is not explicitly listed below, it uses the default rate limit:
- clientId: 500 requests/minute

Additionally, the gateway applies a global spike-arrest (burst control) limit:
- spike-arrest: 12,000 requests/minute

## Endpoint Rate Limits

Each Classifications API endpoint has its own independent rate limit. Requests to one endpoint do not count against the rate limit of another endpoint.

The following table describes the rate limits for Classifications API endpoints.

| Endpoints | Limit (req/min) | Scope |
| --- | --- | --- |
| `GET /projects/{project_id}/trees` | 150 | Per application (clientId) |
| `POST /projects/{project_id}/trees:import` | 4 | Per application (clientId) |
| `POST /projects/{project_id}/trees/{tree_id}:reimport` | 6 | Per application (clientId) |
| `GET /projects/{project_id}/trees/{tree_id}` | 150 | Per application (clientId) |
| `PATCH /projects/{project_id}/trees/{tree_id}` | 20 | Per application (clientId) |
| `GET /projects/{project_id}/trees/{tree_id}/versions/tip/nodes` | 100 | Per application (clientId) |

## Violation Notification

If an application makes an API request that exceeds a rate limit, the Classifications API returns an HTTP 429 error (described in detail in [APS Rate Limits and Quotas](https://aps.autodesk.com/en/docs/acc/v1/overview/rate-limits/forge-rate-limits/)).

## Changing Limits

[APS Rate Limits and Quotas](https://aps.autodesk.com/en/docs/acc/v1/overview/rate-limits/forge-rate-limits/) describes how to request rate limit changes for APS APIs.

---
원본 문서: https://aps.autodesk.com/en/docs/acc/v1/overview/rate-limits/classifications-rate-limits
