---
title: "Model Coordination Changelog"
url_path: change_history/model_coordination_changelog
surface: guide
---
# Model Coordination Changelog

## Added region Header Support: 2026-05-20

The APIs now support the `region` request header.

The APIs continue to support `x-ads-region` for backward compatibility.

## Updated Maximum Size of definition Array for Model Set Views (v3): 2025-11-17

The maximum number of items supported in the `definition` array for a model set view is 50.

The documentation previously incorrectly stated a maximum of 1000 items. The documentation has been updated to reflect the supported limit.

As a result, workflows cannot contain more than 50 models per view.

The following endpoint is affected:
- [POST /v3/containers/:containerId/modelsets/:modelSetId/views](https://aps.autodesk.com/en/docs/bim360/v1/reference/http/create-model-set-view-POST/)

## Added Fields to Create Model Set Issue (v3): 2024-04-03

The following new fields are now supported for creating a model set issue in [POST modelsets/:modelSetId/issues](https://aps.autodesk.com/en/docs/bim360/v1/reference/http/mc-modelset-service-v3/add-model-set-issue-POST/)
:
- `status`: Enum expanded from `[Open, Draft]` to `[Open, Draft, Pending, InProgress, Complete, InReview, NotApproved, InDispute, Closed]`.
- `watchers` (array of UUIDs, nullable): The Autodesk IDs of the members assigned as watchers for the issue.
- `startDate` (date-time, nullable): The start date of the issue.
- `gpsCoordinates` (latitude and longitude, nullable): The geographic coordinates of the issue.

## Added showIncludedFolders Query Parameter to Model Set (v3): 2024-02-29

The `showIncludedFolders` query parameter was added to [GET modelsets/:modelSetId](https://aps.autodesk.com/en/docs/bim360/v1/reference/http/get-model-set-GET/). It controls whether the included folders array is populated in the response.

## Added contentFilters Support to Model Set (v3): 2024-02-19

The `contentFilters` field was added to the following endpoints:
- [POST modelsets](https://aps.autodesk.com/en/docs/acc/v1/reference/http/mc-modelset-service-v3-create-model-set-POST/)
- [GET modelsets/:modelSetId](https://aps.autodesk.com/en/docs/acc/v1/reference/http/mc-modelset-service-v3-get-model-sets-GET/)

## Removed screenshotId Field from Model Set Views (v3): 2024-02-13

The `screenshotId` field has been removed from the following endpoints:
- [POST modelsets/:modelSetId/views](https://aps.autodesk.com/en/docs/acc/v1/reference/http/mc-modelset-service-v3-create-model-set-view-POST/)
- [GET modelsets/:modelSetId/views](https://aps.autodesk.com/en/docs/acc/v1/reference/http/mc-modelset-service-v3-get-model-set-views-GET/)
- [GET modelsets/:modelSetId/views/:viewId](https://aps.autodesk.com/en/docs/acc/v1/reference/http/mc-modelset-service-v3-get-model-set-view-GET/)
- [PATCH modelsets/:modelSetId/views/:viewId](https://aps.autodesk.com/en/docs/acc/v1/reference/http/mc-modelset-service-v3-update-model-set-view-PATCH/)

This field was not supported in the product, and not used by any consumers. It will be removed from the underlying API on June 3, 2024.

## Removed Model Set Indexing (v1) Endpoints: 2022-08-15

We have removed the Model Set Indexing (v1) endpoints. You need to use the new [Model Properties API](https://aps.autodesk.com/en/docs/bim360/v1/reference/http/index-v2-index-manifest-get/)

## Deprecated Model Set Views POST modelsets/:modelSetId/views:lineages endpoint: 2022-08-24

The following Model Set Views endpoint is deprecated:
- [POST modelsets/:modelSetId/views:lineages](https://aps.autodesk.com/en/docs/bim360/v1/reference/http/mc-modelset-service-v3-search-model-set-view-lineages-POST/)

We will continue supporting this endpoint until February 24, 2023.

We recommend migrating to the GET modelsets/:modelSetId/views endpoint and filtering the response by lineages:
- [GET modelsets/:modelSetId/views](https://aps.autodesk.com/en/docs/bim360/v1/reference/http/mc-modelset-service-v3-get-model-set-views-GET/)

## Removal of Model Set Indexing (v1) Endpoints: 2023-03-21

The following Model Set Indexing endpoints are now removed:
- [GET modelsets/:modelSetId/versions/:version/manifest](https://aps.autodesk.com/en/docs/bim360/v1/reference/http/mc-index-service-v1-query-model-set-version-index-manifest-GET/)
- [GET modelsets/:modelSetId/versions/:version/fields](https://aps.autodesk.com/en/docs/bim360/v1/reference/http/mc-index-service-v1-query-model-set-version-index-fields-GET/)
- [POST modelsets/:modelSetId/versions/:version/indexes:query](https://aps.autodesk.com/en/docs/bim360/v1/reference/http/mc-index-service-v1-query-model-set-version-index-POST/)
- [GET modelsets/:modelSetId/jobs/:jobId](https://aps.autodesk.com/en/docs/bim360/v1/reference/http/mc-index-service-v1-get-model-set-job-GET/)

We recommend migrating to the new generic Model Properties API:
- [GET indexes/:indexId/manifest](https://aps.autodesk.com/en/docs/bim360/v1/reference/http/index-v2-index-manifest-get/)
- [GET indexes/:indexId/fields](https://aps.autodesk.com/en/docs/bim360/v1/reference/http/index-v2-index-fields-get/)
- [POST indexes/:indexId/queries](https://aps.autodesk.com/en/docs/bim360/v1/reference/http/index-v2-index-query-post/)
- [GET indexes/:indexId](https://aps.autodesk.com/en/docs/bim360/v1/reference/http/index-v2-index-status-get/)

---
원본 문서: https://aps.autodesk.com/en/docs/acc/v1/change_history/model_coordination_changelog
