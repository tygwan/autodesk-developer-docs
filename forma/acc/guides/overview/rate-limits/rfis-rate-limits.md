---
title: "RFIs Rate Limits"
url_path: overview/rate-limits/rfis-rate-limits
surface: guide
---
# Forma: RFIs API Rate Limits

The RFIs API for Forma follows standard rate limits to ensure service reliability and fair usage across all applications. For general guidance, see [APS Rate Limits and Quotas](https://aps.autodesk.com/en/docs/acc/v1/overview/rate-limits/forge-rate-limits).

## Rate Limits

| Endpoint Group | Limit (requests/minute) | Scope |
| --- | --- | --- |
| All RFIs API endpoints (combined) | 100 | Per API key (APS application ID) |

Note that these limits are not service guarantees. In periods of high demand, effective request rates may be lower to maintain platform stability.

## Violation Handling

If your application exceeds these limits, the RFIs API returns an HTTP `429 Too Many Requests` response. For details about this error and how to handle it, see [APS Rate Limits and Quotas](https://aps.autodesk.com/en/docs/acc/v1/overview/rate-limits/forge-rate-limits).

## Requesting a Limit Increase

You can request a rate limit increase by following the process described in [APS Rate Limits and Quotas](https://aps.autodesk.com/en/docs/acc/v1/overview/rate-limits/forge-rate-limits).

---
원본 문서: https://aps.autodesk.com/en/docs/acc/v1/overview/rate-limits/rfis-rate-limits
