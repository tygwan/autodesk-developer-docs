---
title: "Relationships Rate Limits"
url_path: overview/rate-limits/relationships-rate-limits
surface: guide
---
# Forma: Relationships API Rate Limits

The Forma Relationships API observes a rate limit and a set of quotas to ensure that all clients get sufficient service and that runaway applications don’t consume excessive resources. For information about rate limits and quotas in general, see [APS Rate Limits and Quotas](https://aps.autodesk.com/en/docs/acc/v1/overview/rate-limits/).

## Rate Limit

This rate limit determines the number of requests the Relationships API can accept per APS user account (specified in a 3-legged token). Note that this rate is not a service guarantee. In the uncommon case where total service use is too high across all clients, the accepted request rate may drop until traffic subsides.

| Endpoints | Limit (requests per minute) | Scope |
| --- | --- | --- |
| All endpoints combined | 120 | Per APS user account |

## Violation Notification

If an application makes a Relationships API request that exceeds the rate limit, the Relationships service returns an HTTP 429 error (described in detail in [APS Rate Limits and Quotas](https://aps.autodesk.com/en/docs/acc/v1/overview/rate-limits/)).

## Changing Limits

[APS Rate Limits and Quotas](https://aps.autodesk.com/en/docs/acc/v1/overview/rate-limits/) describes how to request rate limit changes for APS APIs.

---
원본 문서: https://aps.autodesk.com/en/docs/acc/v1/overview/rate-limits/relationships-rate-limits
