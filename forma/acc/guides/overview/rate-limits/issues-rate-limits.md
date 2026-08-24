---
title: "Issues Rate Limits"
url_path: overview/rate-limits/issues-rate-limits
surface: guide
---
# Forma: Issues API Rate Limits

The Forma Issues service observes a set of rate limits to ensure that all clients get sufficient service and that runaway applications don’t consume excessive resources. You’ll find general information about rate limits in [APS Rate Limits and Quotas](https://aps.autodesk.com/en/docs/acc/v1/overview/rate-limits/forge-rate-limits).

Note that these rates are not service guarantees. In the uncommon case where total service use is too high across all clients, accepted request rates may drop until traffic subsides.

## Endpoint Versions

Issues API rate limits apply across all of the Issues API endpoints, but limits are measured independently depending on the version number of the endpoint.

## Version 1 Endpoint Rate Limits

| Endpoints | Limit (requests/minute) | Scope |
| --- | --- | --- |
| All endpoints combined | 500 | Per user hub (**Note:** Rate limiting is based on the user’s ID specified for 3-legged authentication.) |

### Scope

Rate limits are based on the traffic produced by the end user of an application. The application can make up to 500 requests-per-minute for a single user hub as measured across all endpoints. Note that if other applications make requests for the same user hub during that time, they can bump the request total for the user hub above 500. If the application makes requests for multiple users, the request total can go beyond the 500 requests-per-minute limit, but only if other applications don’t use the same user hubs and bump the limit above 500 requests-per-minute.

## Violation Notification

If an application makes an Issues API request that exceeds this rate limit, the Forma Issues service returns an HTTP 429 error (described in detail in [APS Rate Limits and Quotas](https://aps.autodesk.com/en/docs/acc/v1/overview/rate-limits/forge-rate-limits)).

## Changing Limits

[APS Rate Limits and Quotas](https://aps.autodesk.com/en/docs/acc/v1/overview/rate-limits/forge-rate-limits) describes how to request rate limit changes for APS APIs.

---
원본 문서: https://aps.autodesk.com/en/docs/acc/v1/overview/rate-limits/issues-rate-limits
