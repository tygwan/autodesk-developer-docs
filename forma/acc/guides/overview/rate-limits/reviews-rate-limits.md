---
title: "Reviews Rate Limits"
url_path: overview/rate-limits/reviews-rate-limits
surface: guide
---
# Forma: Reviews API Rate Limits

The Forma Reviews API observes a set of rate limits to ensure that all clients get sufficient service and that runaway applications don’t consume excessive resources. You’ll find general information about rate limits in [APS Rate Limits and Quotas](https://aps.autodesk.com/en/docs/acc/v1/overview/rate-limits/forge-rate-limits).

Each endpoint of the Reviews API has its own independent rate limit. Both of these rate limits apply per application (specified by client ID):

## Rate Limit

This rate limit applies per application (specified by client ID) and is measured across all Reviews API endpoints combined:

| Endpoints | Limit (requests/minute) | Scope |
| --- | --- | --- |
| All GET endpoints combined | 200 | Per application (client ID) |
| All POST endpoints combined | 100 | Per application (client ID) |

Note that this rate is not a service guarantee. In the uncommon case where total service use is too high across all clients, the accepted request rate may drop until traffic subsides.

## Violation Notification

If an application makes a Reviews API request that exceeds this rate limit, the Reviews service returns an HTTP 429 error (described in detail in [APS Rate Limits and Quotas](https://aps.autodesk.com/en/docs/acc/v1/overview/rate-limits/forge-rate-limits)).

## Changing Limits

[APS Rate Limits and Quotas](https://aps.autodesk.com/en/docs/acc/v1/overview/rate-limits/forge-rate-limits) describes how to request rate limit changes for APS APIs.

---
원본 문서: https://aps.autodesk.com/en/docs/acc/v1/overview/rate-limits/reviews-rate-limits
