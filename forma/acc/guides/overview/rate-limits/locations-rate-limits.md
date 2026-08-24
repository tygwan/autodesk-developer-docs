---
title: "Locations Rate Limits"
url_path: overview/rate-limits/locations-rate-limits
surface: guide
---
# Forma: Locations API Rate Limits

The Forma Locations API observes a set of rate limits to ensure that all clients get sufficient service and that runaway applications don’t consume excessive resources. You’ll find general information about rate limits in [APS Rate Limits and Quotas](https://aps.autodesk.com/en/docs/acc/v1/overview/rate-limits/forge-rate-limits).

## Rate Limits

| Endpoints | Limit (requests/minute) | Scope |
| --- | --- | --- |
| All Locations API endpoints combined | 600 | Per API key (APS application ID) |
| All Locations API endpoints combined | 200 | Per user account |

Note that these rates are not service guarantees. In the uncommon case where total service use is too high across all clients, accepted request rates may drop until traffic subsides.

## Violation Notification

If an application makes a Locations API request that exceeds this rate limit, the Locations service returns an HTTP 429 error (described in detail in [APS Rate Limits and Quotas](https://aps.autodesk.com/en/docs/acc/v1/overview/rate-limits/forge-rate-limits)).

## Changing Limits

[APS Rate Limits and Quotas](https://aps.autodesk.com/en/docs/acc/v1/overview/rate-limits/forge-rate-limits) describes how to request rate limit changes for APS APIs.

---
원본 문서: https://aps.autodesk.com/en/docs/acc/v1/overview/rate-limits/locations-rate-limits
