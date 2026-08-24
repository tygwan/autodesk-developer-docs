---
title: "Sheets Rate Limits"
url_path: overview/rate-limits/sheets-rate-limits
surface: guide
---
# Forma: Sheets API Rate Limits

The Forma Sheets API observes a set of rate limits to ensure that all clients get sufficient service and that runaway applications don’t consume excessive resources. You’ll find general information about rate limits in [APS Rate Limits and Quotas](https://aps.autodesk.com/en/docs/acc/v1/overview/rate-limits/forge-rate-limits).

This rate limit applies per application (specified by client ID), and it is measured independently for each endpoint:

| Endpoints | Limit (requests/minute) | Scope |
| --- | --- | --- |
| All Sheets API endpoints | 100 | Per application (specified by client ID) |

## Changing Limits

[APS Rate Limits and Quotas](https://aps.autodesk.com/en/docs/acc/v1/overview/rate-limits/forge-rate-limits) describes how to request rate limit changes for APS APIs.

---
원본 문서: https://aps.autodesk.com/en/docs/acc/v1/overview/rate-limits/sheets-rate-limits
