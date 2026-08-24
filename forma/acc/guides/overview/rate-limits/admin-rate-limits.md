---
title: "Admin Rate Limits"
url_path: overview/rate-limits/admin-rate-limits
surface: guide
---
# Forma: Hub Admin API Rate Limits

The Forma Hub Admin API observes a set of rate limits to ensure that all clients get sufficient service and that runaway applications don’t consume excessive resources. You’ll find general information about rate limits in [APS Rate Limits and Quotas](https://aps.autodesk.com/en/docs/bim360/v1/overview/rate-limits/forge-rate-limits).

These rate limits apply across all Hub Admin endpoints, although they’re separately set for each requesting application (specified by the client ID). Note that these rates are not service guarantees. In the uncommon case where total service use is too high across all clients, accepted request rates may drop until traffic subsides.

## Endpoint Groups

Different rate limits apply to the different types of hub admin endpoints. Hub Admin endpoints with `construction/admin` in the base URL have a limit of 600 requests per minute, and forward-compatible BIM 360 endpoints with `hq` in the base URL have a limit of 100 requests per minute.

### Rate Limits for Endpoints with `construction/admin` in the Base URL

The follwing table describes the rate limits for endpoints with `construction/admin` in the base URL:

| Endpoints | Limit (requests/minute) | Scope |
| --- | --- | --- |
| All GET endpoints with `construction/admin` in the base URL | 600 | Per application (client ID) across all `construction/admin` GET endpoints |
| All POST/PATCH/DELETE/PUT endpoints with `construction/admin` in the base URL | 100 | Per application (client ID) across all `construction/admin` POST/PATCH/DELETE/PUT endpoints |

### Rate Limits for Endpoints with `hq` in the Base URL

The following table describes the rate limits for endpoints with `hq` in the base URL:

| Endpoints | Limit (requests/minute) | Scope |
| --- | --- | --- |
| All endpoints with `hq` in the base URL | 100 | Per application (client ID) across all `hq` endpoints |

## Scope

The Hub Admin API measures requests to each endpoint group independently of the others, and measures requests per application as specified by the client ID.

For example:
- An application might make 305 requests per minute of one `construction/admin` endpoint and 300 rpm of a second `construction/admin` endpoint within the same minute. The application’s measured request rate would be 605 rpm, which violates the `construction/admin` rate limit.
- The same application might make 599 requests per minute of an `construction/admin` endpoint and 99 rpm of an `hq` endpoint within the same minute, and be within rate limits because the two endpoint groups are measured independently.

## Violation Notification

If an application exceeds an endpoint group’s rate limit, the Hub Admin API returns an HTTP 429 error (described in detail in [APS Rate Limits and Quotas](https://aps.autodesk.com/en/docs/bim360/v1/overview/rate-limits/forge-rate-limits)).

## Changing Limits

[APS Rate Limits and Quotas](https://aps.autodesk.com/en/docs/bim360/v1/overview/rate-limits/forge-rate-limits) describes how to request rate limit changes for APS APIs.

---
원본 문서: https://aps.autodesk.com/en/docs/acc/v1/overview/rate-limits/admin-rate-limits
