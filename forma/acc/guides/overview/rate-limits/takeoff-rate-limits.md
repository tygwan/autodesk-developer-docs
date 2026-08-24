---
title: "Takeoff Rate Limits"
url_path: overview/rate-limits/takeoff-rate-limits
surface: guide
---
# Forma: Takeoff API Rate Limits

The Forma Takeoff API observes a set of rate limits to ensure that all clients get sufficient service and that runaway applications don’t consume excessive resources. You’ll find general information about rate limits in [APS Rate Limits and Quotas](https://aps.autodesk.com/en/docs/acc/v1/overview/rate-limits/forge-rate-limits).

## Rate Limits

The Takeoff service applies two different rate limits to Takeoff API requests. In general:
- All endpoints that read data (such as [GET v1/projects/:projectId/packages](https://aps.autodesk.com/en/docs/acc/v1/reference/http/takeoff-projects-project_id-packages-GET)) are limited to 300 requests per minute.
- All endpoints that create, update, or delete data (such as [POST v1/projects/:projectId/packages](https://aps.autodesk.com/en/docs/acc/v1/reference/http/takeoff-projects-project_id-packages-POST) are limited to 50 requests per minute.

These rate limits determine the number of requests the Takeoff service can accept per user account (specified in a 3-legged token).

Note that this rate is not a service guarantee. In the uncommon case where total service use is too high across all clients, the accepted request rate might drop until traffic subsides.

### Data-Reading Endpoints

This rate limit applies to all endpoints that read data.

| Endpoints | Limit (requests/minute) | Scope |
| --- | --- | --- |
| This rate limit applies to these endpoints combined:

[GET v1/projects/:projectId/classification-systems](https://aps.autodesk.com/en/docs/acc/v1/reference/http/takeoff-projects-project_id-classification-systems-GET)
[GET v1/projects/:projectId/classification-systems/:systemId](https://aps.autodesk.com/en/docs/acc/v1/reference/http/takeoff-projects-project_id-classification-systems-system_id-GET)
[GET v1/projects/:projectId/classification-systems/:systemId/classifications](https://aps.autodesk.com/en/docs/acc/v1/reference/http/takeoff-projects-project_id-classification-systems-system_id-classifications-GET)
[GET v1/projects/:projectId/content-views](https://aps.autodesk.com/en/docs/acc/v1/reference/http/takeoff-projects-project_id-content-views-GET)
[GET v1/projects/:projectId/packages](https://aps.autodesk.com/en/docs/acc/v1/reference/http/takeoff-projects-project_id-packages-GET)
[GET v1/projects/:projectId/packages/:packageId](https://aps.autodesk.com/en/docs/acc/v1/reference/http/takeoff-projects-project_id-packages-package_id-GET)
[GET v1/projects/:projectId/packages/:packageId/takeoff-items](https://aps.autodesk.com/en/docs/acc/v1/reference/http/takeoff-projects-project_id-packages-package_id-takeoff-items-GET)
[GET v1/projects/:projectId/packages/:packageId/takeoff-items/:takeoffItemId](https://aps.autodesk.com/en/docs/acc/v1/reference/http/takeoff-projects-project_id-packages-package_id-takeoff-items-takeoff_item_id-GET)
[GET v1/projects/:projectId/packages/:packageId/takeoff-types](https://aps.autodesk.com/en/docs/acc/v1/reference/http/takeoff-projects-project_id-packages-package_id-takeoff-types-GET)
[GET v1/projects/:projectId/packages/:packageId/takeoff-types/:takeoffTypeId](https://aps.autodesk.com/en/docs/acc/v1/reference/http/takeoff-projects-project_id-packages-package_id-takeoff-types-takeoff_type_id-GET)
[GET v1/projects/:projectId/settings](https://aps.autodesk.com/en/docs/acc/v1/reference/http/takeoff-projects-project_id-settings-GET) | 300 | Per user account |

### Data-Modification Endpoints

This rate limit applies to all endpoints that modify (create, update, or delete) data.

| Endpoints | Limit (requests/minute) | Scope |
| --- | --- | --- |
| This rate limit applies to these endpoints combined:

[POST v1/projects/:projectId/classification-systems](https://aps.autodesk.com/en/docs/acc/v1/reference/http/takeoff-projects-project_id-classification-systems-POST)
[DELETE v1/projects/:projectId/classification-systems/:systemId](https://aps.autodesk.com/en/docs/acc/v1/reference/http/takeoff-projects-project_id-classification-systems-system_id-DELETE)
[POST v1/projects/:projectId/classification-systems/:systemId/classifications:import](https://aps.autodesk.com/en/docs/acc/v1/reference/http/takeoff-projects-project_id-classification-systems-system_id-classificationsimport-POST)
[PATCH v1/projects/:projectId/packages/:packageId](https://aps.autodesk.com/en/docs/acc/v1/reference/http/takeoff-projects-project_id-packages-package_id-PATCH)
[POST v1/projects/:projectId/packages](https://aps.autodesk.com/en/docs/acc/v1/reference/http/takeoff-projects-project_id-packages-POST)
[PATCH v1/projects/:projectId/settings](https://aps.autodesk.com/en/docs/acc/v1/reference/http/takeoff-projects-project_id-settings-PATCH) | 50 | Per user account |

## Scope

Each rate limit is measured across the entire combined set of that rate limit’s API endpoints for each user account. As an example, if during one minute one application makes 300 requests of [GET v1/projects/:projectId/packages/:packageId/takeoff-items](https://aps.autodesk.com/en/docs/acc/v1/reference/http/takeoff-projects-project_id-packages-package_id-takeoff-items-GET) under user account X, and a second application makes 100 requests of [GET v1/projects/:projectId/packages/:packageId/takeoff-types](https://aps.autodesk.com/en/docs/acc/v1/reference/http/takeoff-projects-project_id-packages-package_id-takeoff-types-GET) under the same user account X, their combined rate is 400 requests per minute, which exceeds the data-reading endpoint rate limit.

## Violation Notification

If an application makes a Takeoff API request that exceeds this rate limit, the Takeoff service returns an HTTP 429 error (described in detail in [APS Rate Limits and Quotas](https://aps.autodesk.com/en/docs/acc/v1/overview/rate-limits/forge-rate-limits)).

## Changing Limits

[APS Rate Limits and Quotas](https://aps.autodesk.com/en/docs/acc/v1/overview/rate-limits/forge-rate-limits) describes how to request rate limit changes for APS APIs.

---
원본 문서: https://aps.autodesk.com/en/docs/acc/v1/overview/rate-limits/takeoff-rate-limits
