---
document_type: "api-group-index"
product: "Autodesk Forma"
surface: "forma-apis"
group: "Model Coordination"
protocol: "REST"
language: "en"
generated: "true"
---

# Model Coordination

[Forma APIs index](../../INDEX.md)

## Overview

- **Product:** Autodesk Forma
- **Surface:** Forma APIs
- **Protocol:** REST
- **Capabilities:** Work with model sets, versions, clash tests, and clash results.
- **Common path:** `/bim360`

## Endpoints

| Method | Path | Authentication | Scopes | Description |
| --- | --- | --- | --- | --- |
| `POST` | `/bim360/clash/v3/containers/{containerId}/clashes/assigned/viewcontext` | user context required | data:read | [GET clashes/assigned/viewcontext](./endpoints/mc-clash-service-v3-get-assigned-clash-group-view-context-POST.md) |
| `GET` | `/bim360/clash/v3/containers/{containerId}/clashes/jobs/{jobId}` | user context required | data:read | [Retrieves information about a given clash job](./endpoints/mc-clash-service-v3-get-clash-group-job-GET.md) |
| `POST` | `/bim360/clash/v3/containers/{containerId}/modelsets/{modelSetId}/clashes:reopen` | user context required | data:write | [Re-opens a batch of existing closed clash groups](./endpoints/mc-clash-service-v3-reopen-closed-clash-group-batch-POST.md) |
| `GET` | `/bim360/clash/v3/containers/{containerId}/modelsets/{modelSetId}/clashes/assigned` | user context required | data:read | [Retrieves a list of assigned clash groups in a given model set which match the provided search parameters](./endpoints/mc-clash-service-v3-search-container-issue-clash-groups-GET.md) |
| `GET` | `/bim360/clash/v3/containers/{containerId}/modelsets/{modelSetId}/clashes/closed` | user context required | data:read | [Retrieves a list of closed clash groups in a given model set which match the provided search parameters](./endpoints/mc-clash-service-v3-search-container-model-set-closed-clash-groups-GET.md) |
| `GET` | `/bim360/clash/v3/containers/{containerId}/modelsets/{modelSetId}/clashes/grouped` | user context required | data:read | [Retrieves a list of clashes associated with assigned or closed clash groups in a given model set](./endpoints/mc-clash-service-v3-get-grouped-clashes-GET.md) |
| `POST` | `/bim360/clash/v3/containers/{containerId}/modelsets/{modelSetId}/screenshots` | user context required | data:create data:write | [Uploads a screenshot, associating it with a given model set](./endpoints/mc-clash-service-v3-add-screen-shot-POST.md) |
| `GET` | `/bim360/clash/v3/containers/{containerId}/modelsets/{modelSetId}/screenshots/{screenShotId}` | user context required | data:read | [Retrieves a specific screenshot based on the screenshot ID](./endpoints/mc-clash-service-v3-get-screen-shot-GET.md) |
| `GET` | `/bim360/clash/v3/containers/{containerId}/modelsets/{modelSetId}/tests` | user context required | data:read | [Retrieves a list of summaries for all clash tests that have been executed for a given model set](./endpoints/mc-clash-service-v3-get-model-set-clash-tests-GET.md) |
| `GET` | `/bim360/clash/v3/containers/{containerId}/modelsets/{modelSetId}/versions/{version}/tests` | user context required | data:read | [Retrieves a list of summaries for all clash tests that have been executed for a given model set version](./endpoints/mc-clash-service-v3-get-model-set-version-clash-tests-GET.md) |
| `GET` | `/bim360/clash/v3/containers/{containerId}/tests/{testId}` | user context required | data:read | [Retrieves a requested clash test based on the clash test ID](./endpoints/mc-clash-service-v3-get-clash-test-GET.md) |
| `POST` | `/bim360/clash/v3/containers/{containerId}/tests/{testId}/clashes:assign` | user context required | data:create data:write | [Creates a batch of new assigned clash groups for the given clash test](./endpoints/mc-clash-service-v3-add-assigned-clash-group-batch-POST.md) |
| `POST` | `/bim360/clash/v3/containers/{containerId}/tests/{testId}/clashes:close` | user context required | data:create data:write | [Adds a batch of new closed clash groups to the given clash test](./endpoints/mc-clash-service-v3-add-closed-clash-group-batch-POST.md) |
| `GET` | `/bim360/clash/v3/containers/{containerId}/tests/{testId}/clashes/assigned` | user context required | data:read | [Retrieves the state of all assigned clash groups in a particular model set, relative to a specified clash test](./endpoints/mc-clash-service-v3-get-clash-test-assigned-clash-group-intersection-GET.md) |
| `POST` | `/bim360/clash/v3/containers/{containerId}/tests/{testId}/clashes/assigned` | user context required | data:read | [Retrieves the state of the specified assigned clash groups, relative to a specified clash test](./endpoints/mc-clash-service-v3-get-assigned-clash-group-batch-POST.md) |
| `GET` | `/bim360/clash/v3/containers/{containerId}/tests/{testId}/clashes/closed` | user context required | data:read | [Retrieves the state of all closed clash groups in a particular model set, relative to a specified clash test](./endpoints/mc-clash-service-v3-get-clash-test-closed-clash-group-intersection-GET.md) |
| `POST` | `/bim360/clash/v3/containers/{containerId}/tests/{testId}/clashes/closed` | user context required | data:read | [Retrieves the state of the specified closed clash groups, relative to a specified clash test](./endpoints/mc-clash-service-v3-get-closed-clash-group-data-batch-POST.md) |
| `GET` | `/bim360/clash/v3/containers/{containerId}/tests/{testId}/resources` | user context required | data:read | [Retrieves information about a given clash test result resources](./endpoints/mc-clash-service-v3-get-clash-test-resources-GET.md) |
| `POST` | `/bim360/modelset/v3/containers/{containerId}/issues/viewcontext` | user context required | data:read | [Model Set](./endpoints/mc-modelset-service-v3-get-model-set-issue-view-context-POST.rst.md) |
| `GET` | `/bim360/modelset/v3/containers/{containerId}/jobs/{jobId}` | user context required | data:read | [Retrieves information about a given container job](./endpoints/mc-modelset-service-v3-get-container-job-by-container-GET.md) |
| `GET` | `/bim360/modelset/v3/containers/{containerId}/modelsets` | user context required | data:read | [Retrieves a list of model sets in a given container that match the provided search parameters](./endpoints/mc-modelset-service-v3-get-model-sets-GET.md) |
| `POST` | `/bim360/modelset/v3/containers/{containerId}/modelsets` | user context required | data:create data:write | [Model Set](./endpoints/mc-modelset-service-v3-create-model-set-POST.md) |
| `GET` | `/bim360/modelset/v3/containers/{containerId}/modelsets/{modelSetId}` | user context required | data:read | [Retrieves a requested model set based on the model set ID](./endpoints/mc-modelset-service-v3-get-model-set-GET.md) |
| `PATCH` | `/bim360/modelset/v3/containers/{containerId}/modelsets/{modelSetId}` | user context required | data:write | [Updates a given model set name and/or description](./endpoints/mc-modelset-service-v3-patch-model-set-name-description-PATCH.md) |
| `POST` | `/bim360/modelset/v3/containers/{containerId}/modelsets/{modelSetId}/issues` | user context required | data:create data:write | [Adds a model set visual inspection issue, represented as a BIM 360 issue](./endpoints/mc-modelset-service-v3-add-model-set-issue-POST.md) |
| `GET` | `/bim360/modelset/v3/containers/{containerId}/modelsets/{modelSetId}/jobs/{jobId}` | user context required | data:read | [Retrieves information about a given model set job](./endpoints/mc-modelset-service-v3-get-model-set-job-GET.md) |
| `POST` | `/bim360/modelset/v3/containers/{containerId}/modelsets/{modelSetId}/screenshots` | user context required | data:create data:write | [Uploads a screenshot, associating it with a given model set](./endpoints/mc-modelset-service-v3-add-screen-shot-POST.md) |
| `GET` | `/bim360/modelset/v3/containers/{containerId}/modelsets/{modelSetId}/screenshots/{screenShotId}` | user context required | data:read | [Retrieves a specific screenshot based on the screenshot ID](./endpoints/mc-modelset-service-v3-get-screen-shot-GET.md) |
| `GET` | `/bim360/modelset/v3/containers/{containerId}/modelsets/{modelSetId}/versions` | user context required | data:read | [Retrieves a list of versions of a given model set](./endpoints/mc-modelset-service-v3-get-model-set-versions-GET.md) |
| `POST` | `/bim360/modelset/v3/containers/{containerId}/modelsets/{modelSetId}/versions` | user context required | data:create data:write | [Creates a new version of a given model set](./endpoints/mc-modelset-service-v3-create-model-set-version-POST.md) |
| `PATCH` | `/bim360/modelset/v3/containers/{containerId}/modelsets/{modelSetId}/versions:disable` | user context required | data:write | [Disables automatic version creation for a given model set](./endpoints/mc-modelset-service-v3-disable-model-set-versions-PATCH.md) |
| `PATCH` | `/bim360/modelset/v3/containers/{containerId}/modelsets/{modelSetId}/versions:enable` | user context required | data:write | [Enables automatic version creation for a given model set](./endpoints/mc-modelset-service-v3-enable-model-set-versions-PATCH.md) |
| `GET` | `/bim360/modelset/v3/containers/{containerId}/modelsets/{modelSetId}/versions/{version}` | user context required | data:read | [Retrieves a specific version of a given model set based on the model set ID and version number](./endpoints/mc-modelset-service-v3-get-model-set-version-GET.md) |
| `GET` | `/bim360/modelset/v3/containers/{containerId}/modelsets/{modelSetId}/versions/{version}/views` | user context required | data:read | [Retrieves a list of all model set views in a given model set as they exist in a specific model set version](./endpoints/mc-modelset-service-v3-get-model-set-view-versions-GET.md) |
| `GET` | `/bim360/modelset/v3/containers/{containerId}/modelsets/{modelSetId}/versions/{version}/views/{viewId}` | user context required | data:read | [Retrieves a model set view as it exists in a specific model set version](./endpoints/mc-modelset-service-v3-get-model-set-view-version-GET.md) |
| `GET` | `/bim360/modelset/v3/containers/{containerId}/modelsets/{modelSetId}/versions/latest` | user context required | data:read | [Retrieves the latest version of a given model set based on the model set ID](./endpoints/mc-modelset-service-v3-get-model-set-version-latest-GET.md) |
| `GET` | `/bim360/modelset/v3/containers/{containerId}/modelsets/{modelSetId}/views` | user context required | data:read | [Retrieves a list of model set views in a given model set that match the provided search parameters](./endpoints/mc-modelset-service-v3-get-model-set-views-GET.md) |
| `POST` | `/bim360/modelset/v3/containers/{containerId}/modelsets/{modelSetId}/views` | user context required | data:create data:write | [Creates a view for a given model set](./endpoints/mc-modelset-service-v3-create-model-set-view-POST.md) |
| `POST` | `/bim360/modelset/v3/containers/{containerId}/modelsets/{modelSetId}/views:lineages` | user context required | data:read | [Retrieves a list of model set views in a given model set that contain the provided set of document lineage URNs](./endpoints/mc-modelset-service-v3-search-model-set-view-lineages-POST.md) |
| `DELETE` | `/bim360/modelset/v3/containers/{containerId}/modelsets/{modelSetId}/views/{viewId}` | user context required | data:write | [Deletes a specific model set view based on the view ID](./endpoints/mc-modelset-service-v3-delete-model-set-view-DELETE.md) |
| `GET` | `/bim360/modelset/v3/containers/{containerId}/modelsets/{modelSetId}/views/{viewId}` | user context required | data:read | [Retrieves a specific model set view based on the view ID](./endpoints/mc-modelset-service-v3-get-model-set-view-GET.md) |
| `PATCH` | `/bim360/modelset/v3/containers/{containerId}/modelsets/{modelSetId}/views/{viewId}` | user context required | data:write | [Updates a specific model set view](./endpoints/mc-modelset-service-v3-update-model-set-view-PATCH.md) |
| `GET` | `/bim360/modelset/v3/containers/{containerId}/modelsets/{modelSetId}/views/{viewId}/jobs/{jobId}` | user context required | data:read | [Retrieves information about a given model set view job](./endpoints/mc-modelset-service-v3-get-model-set-view-job-GET.md) |

## Machine-readable specification

- [OpenAPI 3.1](./openapi.yaml)
