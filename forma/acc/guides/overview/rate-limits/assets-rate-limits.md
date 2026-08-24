---
title: "Assets Rate Limits"
url_path: overview/rate-limits/assets-rate-limits
surface: guide
---
# Forma: Assets API Rate Limits

The Forma Assets API observes a set of rate limits to ensure that all clients get sufficient service and that runaway applications don’t consume excessive resources. You’ll find general information about rate limits in [APS Rate Limits and Quotas](https://aps.autodesk.com/en/docs/acc/v1/overview/rate-limits/forge-rate-limits).

## Rate Limits

The Asset service applies three different rate limits to Asset API requests. In general:
- All endpoints that read data (such as [GET v2/projects/:projectId/assets](https://aps.autodesk.com/en/docs/acc/v1/reference/http/assets-assets-v2-GET)) are limited to 1000 requests per minute.
- All endpoints that create, update, or delete data (such as [POST v1/projects/:projectId/categories](https://aps.autodesk.com/en/docs/acc/v1/reference/http/assets-categories-POST) or [PATCH v1/projects/:projectId/custom-attributes/:customAttributeId](https://aps.autodesk.com/en/docs/acc/v1/reference/http/assets-custom-attributes-custom-attribute-id-PATCH)) are limited to 100 requests per minute.
- All endpoints that work with relationships (such as [POST v1/projects/:projectId/assets/:assetId/relationships](https://aps.autodesk.com/en/docs/acc/v1/reference/http/assets-assets-asset-id-relationships-POST)) are limited to 50 requests per minute.

These rate limits determine the number of requests the Assets service can accept per user account (specified in a 3-legged token).

Note that this rate is not a service guarantee. In the uncommon case where total service use is too high across all clients, the accepted request rate might drop until traffic subsides.

### Data-Reading Endpoints

This rate limit applies to all endpoints that read data.

| Endpoints | Limit (requests/minute) | Scope |
| --- | --- | --- |
| This rate limit applies to these endpoints combined:

[POST v2/projects/:projectId/assets:batch-get](https://aps.autodesk.com/en/docs/acc/v1/reference/http/assets-assets-batch-get-v2-POST)
[GET v2/projects/:projectId/assets](https://aps.autodesk.com/en/docs/acc/v1/reference/http/assets-assets-v2-GET)
[POST v1/projects/:projectId/categories:batch-get](https://aps.autodesk.com/en/docs/acc/v1/reference/http/assets-categories-batch-get-POST)
[GET v1/projects/:projectId/categories](https://aps.autodesk.com/en/docs/acc/v1/reference/http/assets-categories-GET)
[POST v1/projects/:projectId/status-step-sets:batch-get](https://aps.autodesk.com/en/docs/acc/v1/reference/http/assets-status-step-sets-batch-get-POST)
[GET v1/projects/:projectId/status-step-sets](https://aps.autodesk.com/en/docs/acc/v1/reference/http/assets-status-step-sets-GET)
[POST v1/projects/:projectId/category-status-step-sets/status-step-sets:batch-get](https://aps.autodesk.com/en/docs/acc/v1/reference/http/assets-category-status-step-sets-status-step-sets-batch-get-POST)
[POST v1/projects/:projectId/asset-statuses:batch-get](https://aps.autodesk.com/en/docs/acc/v1/reference/http/assets-asset-statuses-batch-get-POST)
[GET v1/projects/:projectId/asset-statuses](https://aps.autodesk.com/en/docs/acc/v1/reference/http/assets-asset-statuses-GET)
[POST v1/projects/:projectId/custom-attributes:batch-get](https://aps.autodesk.com/en/docs/acc/v1/reference/http/assets-custom-attributes-batch-get-POST)
[GET v1/projects/:projectId/custom-attributes](https://aps.autodesk.com/en/docs/acc/v1/reference/http/assets-custom-attributes-GET)
[GET v1/projects/:projectId/categories/:categoryId/custom-attributes](https://aps.autodesk.com/en/docs/acc/v1/reference/http/assets-categories-category-id-custom-attributes-GET) | 1000 | Per user account |

### Data-Modification Endpoints

This rate limit applies to all endpoints that modify (create, update, or delete) data.

| Endpoints | Limit (requests/minute) | Scope |
| --- | --- | --- |
| This rate limit applies to these endpoints combined:

[POST v2/projects/:projectId/assets:batch-create](https://aps.autodesk.com/en/docs/acc/v1/reference/http/assets-assets-batch-create-POST-v2)
[PATCH v2/projects/:projectId/assets:batch-patch](https://aps.autodesk.com/en/docs/acc/v1/reference/http/assets-assets-batch-patch-PATCH-v2)
[POST v2/projects/:projectId/assets:batch-delete](https://aps.autodesk.com/en/docs/acc/v1/reference/http/assets-assets-batch-delete-v2-POST)
[POST v1/projects/:projectId/categories](https://aps.autodesk.com/en/docs/acc/v1/reference/http/assets-categories-POST)
[POST v1/projects/:projectId/status-step-sets](https://aps.autodesk.com/en/docs/acc/v1/reference/http/assets-status-step-sets-POST)
[PUT v1/projects/:projectId/categories/:categoryId/status-step-set/:statusStepSetId](https://aps.autodesk.com/en/docs/acc/v1/reference/http/assets-categories-category-id-status-step-set-status-step-set-id-PUT)
[POST v1/projects/:projectId/asset-statuses](https://aps.autodesk.com/en/docs/acc/v1/reference/http/assets-asset-statuses-POST)
[POST v1/projects/:projectId/custom-attributes](https://aps.autodesk.com/en/docs/acc/v1/reference/http/assets-custom-attributes-POST)
[PATCH v1/projects/:projectId/custom-attributes/:customAttributeId](https://aps.autodesk.com/en/docs/acc/v1/reference/http/assets-custom-attributes-custom-attribute-id-PATCH)
[PUT v1/projects/:projectId/categories/:categoryId/custom-attributes/:customAttributeId](https://aps.autodesk.com/en/docs/acc/v1/reference/http/assets-categories-category-id-custom-attributes-custom-attribute-id-PUT) | 100 | Per user account |

### Relationship Endpoints

This rate limit applies to all endpoints that modify (add or delete) relationships.

| Endpoints | Limit (requests/minute) | Scope |
| --- | --- | --- |
| This rate limit applies to these endpoints combined:

[POST v1/projects/:projectId/assets/:assetId/relationships](https://aps.autodesk.com/en/docs/acc/v1/reference/http/assets-assets-asset-id-relationships-POST)
[POST v1/projects/:projectId/categories/:categoryId/relationships](https://aps.autodesk.com/en/docs/acc/v1/reference/http/assets-categories-category-id-relationships-POST)
[POST v1/projects/:projectId/relationships:delete](https://aps.autodesk.com/en/docs/acc/v1/reference/http/assets-relationships-delete-POST) | 50 | Per user account |

## Scope

Each rate limit is measured across the entire combined set of that rate limit’s API endpoints for each user account. As an example, if during one minute one application makes 600 requests of [GET v2/projects/:projectId/assets](https://aps.autodesk.com/en/docs/acc/v1/reference/http/assets-assets-v2-GET) under user account X, and a second application makes 500 requests of [POST v1/projects/:projectId/categories:batch-get](https://aps.autodesk.com/en/docs/acc/v1/reference/http/assets-categories-batch-get-POST) under the same user account X, their combined rate is 1100 requests per minute, which exceeds the data-reading endpoint rate limit.

## Violation Notification

If an application makes an Assets API request that exceeds this rate limit, the Assets service returns an HTTP 429 error (described in detail in [APS Rate Limits and Quotas](https://aps.autodesk.com/en/docs/acc/v1/overview/rate-limits/forge-rate-limits)).

## Changing Limits

[APS Rate Limits and Quotas](https://aps.autodesk.com/en/docs/acc/v1/overview/rate-limits/forge-rate-limits) describes how to request rate limit changes for APS APIs.

---
원본 문서: https://aps.autodesk.com/en/docs/acc/v1/overview/rate-limits/assets-rate-limits
