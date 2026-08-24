---
title: "Submittals Rate Limits"
url_path: overview/rate-limits/submittals-rate-limits
surface: guide
---
# Forma: Submittals API Rate Limits

The Forma Submittals API observes a set of rate limits to ensure that all clients get sufficient service and that runaway applications don’t consume excessive resources. You’ll find general information about rate limits in [APS Rate Limits and Quotas](https://aps.autodesk.com/en/docs/acc/v1/overview/rate-limits/forge-rate-limits).

## Rate Limits

| Endpoints | Limit (requests/minute) | Scope |
| --- | --- | --- |
| All Submittals API endpoints combined | 600 | Per API key (APS application ID) |
| Submittals API endpoints combined | 600 | Per user account |

Note that these rates are not service guarantees. In the uncommon case where total service use is too high across all clients, accepted request rates may drop until traffic subsides.

## Violation Notification

If an application makes a Submittals API request that exceeds this rate limit, the Submittals service returns an HTTP 429 error (described in detail in [APS Rate Limits and Quotas](https://aps.autodesk.com/en/docs/acc/v1/overview/rate-limits/forge-rate-limits)).

## Changing Limits

[APS Rate Limits and Quotas](https://aps.autodesk.com/en/docs/acc/v1/overview/rate-limits/forge-rate-limits) describes how to request rate limit changes for APS APIs.

---
원본 문서: https://aps.autodesk.com/en/docs/acc/v1/overview/rate-limits/submittals-rate-limits
