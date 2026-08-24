---
title: "Data Connector Rate Limits"
url_path: overview/rate-limits/data-connector-rate-limits
surface: guide
---
# Data Connector API Rate Limit and Quota

The ACC/BIM 360 Data Connector service observes a rate limit and a quota to ensure that all clients get sufficient service and that runaway applications do not consume excessive resources. For information about rate limits and quotas in general, see [APS Rate Limits and Quotas](https://aps.autodesk.com/en/docs/bim360/v1/overview/rate-limits/forge-rate-limits/).

## Rate Limit

This rate limit determines the number of requests the Data Connector service can accept per APS user account/hub (specified in a 3-legged token). Note that this rate is not a service guarantee. In the uncommon case where total service use is too high across all clients, the accepted request rate might drop until traffic subsides.

| Endpoints | Limit (requests/minute) | Scope |
| --- | --- | --- |
| All Data Connector API endpoints combined | 60 | Per application as specified by client ID |

### Rate Limiting for Requests and Jobs

Data Connector requests and the jobs they spawn are rate limited with the following restrictions:
- Account/Hub Limit: A maximum of 24 jobs can be created in a 24-hour period for any single account/hub.
- User Limit: Each individual user can also create up to 24 jobs in a 24-hour period.

#### Scope

The 24-hour job creation limits are measured per account/hub and per user, and are independent of the request rate limit (60 requests/minute). Additionally, the rate limit is measured across the entire set of API endpoints combined for each individual application. This means that if an application exceeds more than 60 requests per minute across multiple Data Connector API endpoints, the requests will be limited.

#### Violation Notification

If an application makes a Data Connector API request that exceeds the rate limit, the Data Connector service returns an `HTTP 429` error (described in detail in [APS Rate Limits and Quotas](https://aps.autodesk.com/en/docs/bim360/v1/overview/rate-limits/forge-rate-limits/)).

## Quota

The Data Connector quota limits the number of active data requests that can exist when using the Data Connector service.

| Resource | Limit | Scope |
| --- | --- | --- |
| Active data requests | 200 | Per account/hub per user |

Active data requests are any `ONE_TIME` data requests that haven’t yet spawned a job and all scheduled interval data requests that have jobs yet to spawn. Inactive data requests such as executed `ONE_TIME` data requests and scheduled interval data requests that are set to inactive or that are past their scheduled time window aren’t counted as active data requests.

### Scope

The scope of the quota is per APS account/hub per APS user (specified in a 3-legged token). If a user has access to multiple accounts/hubs, the user may have up to 200 active data requests in each of those accounts/hubs.

### Notification

If a request to an endpoint attempts to create a data request that exceeds the quota, the Data Connector service returns an `HTTP 400` error code, “Bad request.”

---
원본 문서: https://aps.autodesk.com/en/docs/acc/v1/overview/rate-limits/data-connector-rate-limits
