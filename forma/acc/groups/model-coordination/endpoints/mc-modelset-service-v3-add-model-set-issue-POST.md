---
operation_id: mc-modelset-service-v3-add-model-set-issue-POST
method: POST
path: /bim360/modelset/v3/containers/{containerId}/modelsets/{modelSetId}/issues
group: "Model Coordination"
auth_context: user context required
scopes: [data:create, data:write]
surface: http
verification: docs-only
---

# Adds a model set visual inspection issue, represented as a BIM 360 issue

```http
POST https://developer.api.autodesk.com/bim360/modelset/v3/containers/:containerId/modelsets/:modelSetId/issues
```

| | |
| --- | --- |
| **인증 컨텍스트** | user context required |
| **필요 스코프** | `data:create`, `data:write` |
| **데이터 포맷** | JSON |
| **그룹** | Model Coordination |

Adds a model set visual inspection issue, represented as a BIM 360 issue.

## 요청

### URI 파라미터

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `containerId` | string: UUID |  | The GUID that uniquely identifies the container. |
| `modelSetId` | string: UUID |  | The GUID that uniquely identifies the model set. |

### 헤더

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `Authorization` | string | **필수** | Must be Bearer <token>, where <token> is obtained via a three-legged OAuth flow. |
| `Content-Type` | string | **필수** | Must be application/json |
| `region` | string |  | The region to which your request should be routed. If not set, the request is routed automatically but may incur a small latency increase. For the full list of supported regions, see the Regions page. The API continues to support x-ads-region for backward compatibility. |

### 요청 본문

- `title` — `string` **(필수)**  
    The title of the new issue. Min length: 1. Max length: 4200.
- `description` — `string`  
    The description of the new issue. Max length: 10000.
- `assignedTo` — `string`  
    The user, role or company that the new issue is assigned to.
- `assignedToType` — `enum: string`  
    Specifies the type that the assignedTo parameter refers to. Possible values: User, Role, Company.
- `dueDate` — `datetime: ISO 8601`  
    The date and time that the new issue is due.
- `locationId` — `string: UUID`  
    The location ID associated with the new issue.
- `locationDescription` — `string`  
    The description of the location associated with the new issue.
- `owner` — `string`  
    The user who owns the new issue.
- `status` — `enum: string`  
    The status of the new issue. Possible values: Open, Draft, Pending, InProgress, Completed, InReview, NotApproved, InDispute, Closed.
- `pushpin` — `object` **(필수)**  
    An issue push pin object that describes a visual marker to place an issue on the 3D model.
  - `location` — `object` **(필수)**  
      A vector describing where in 3D space the pushpin is located.
    - `x` — `float` **(필수)**  
        The X component of the 3D vector.
    - `y` — `float` **(필수)**  
        The Y component of the 3D vector.
    - `z` — `float` **(필수)**  
        The Z component of the 3D vector.
  - `objectId` — `int` **(필수)**  
      The ID of the object in the viewer with which to link this issue.
  - `externalId` — `string`  
      The external ID (for example, derived from the Revit ID) of the object in the viewer with which to link this issue.
  - `attributesVersion` — `int`  
      The version of the data described in the viewer state property.
  - `type` — `enum: string`  
      The type of pushpin. Possible values: TwoDVectorPushpin.
  - `viewerState` — `object`  
      An object describing the current state of the viewer, such as the camera position.
- `issueTypeId` — `string: UUID` **(필수)**  
    The issue type ID associated with the new issue.
- `issueSubTypeId` — `string: UUID` **(필수)**  
    The issue sub-type ID associated with the new issue.
- `rootCauseId` — `string: UUID`  
    The root cause ID associated with the new issue.
- `customAttributes` — `array: object`  
    The list of attributes to associate with the new issue. Max items: 64.
  - `id` — `string: UUID`  
      The ID of the custom attribute, as defined in the project settings.
  - `value` — `string`  
      The value of the custom attribute.
- `screenShots` — `array: string: UUID`  
    The unique identifiers of screenshots associated with the new issue. Max items: 5.
- `watchers` — `array: string`  
    The Autodesk IDs of the members assigned as a watcher for the issue. Max items: 1000.
- `gpsCoordinates` — `object`  
    GPS coordinates that represent the geolocation of the issue.
  - `latitude` — `number`  
      The latitude value of the coordinates.
  - `longitude` — `number`  
      The longitude value of the coordinates.
- `startDate` — `datetime: ISO 8601`  
    The start date of the issue.
- `documentVersionUrn` — `string` **(필수)**  
    A document or seed file version URN with which to associate the issue. Min length: 1. Max length: 256.
- `viewableName` — `string`  
    The name of the viewable in the Model Derivative manifest to track along the seed file lineage. This setting is ignored if the lineageUrn is the URN of a BIM 360 Docs Plans folder document. Min length: 1. Max length: 430.
- `viewContext` — `array: object` **(필수)**  
    Provides context for when this issue is viewed. Max items: 1000.
  - `urn` — `string` **(필수)**  
      A document or seed file version URN with which to associate the issue. Min length: 1. Max length: 256.
  - `viewableName` — `string`  
      The name of the viewable in the Model Derivative manifest for the supplied version URN. Min length: 1. Max length: 430.

## 응답

| 코드 | 의미 | 설명 |
| --- | --- | --- |
| `202` | Accepted | The model set job associated with this request |
| `400` | Bad Request | The parameters of the requested operation are invalid. |
| `401` | Unauthorized | The provided bearer token is not valid. |
| `403` | Forbidden | The user or service represented by the bearer token does not have permission to perform this operation. |
| `404` | Not Found | The requested resource could not be found. |
| `415` | Unsupported Media Type | The Content-Type header must be application/json. |
| `429` | Too Many Requests | Rate limit exceeded. Wait some time before retrying. The Retry-After header might provide the amount of the time to wait. |
| `500` | Internal Server Error | An unknown error occurred on the server. |

### 응답 본문 (202)

- `jobId` — `string: UUID`  
    The GUID that uniquely identifies the job.
- `modelSetId` — `string: UUID`  
    The GUID that uniquely identifies the model set associated with the job.
- `resource` — `string`  
    The resource associated with the job.
- `createdIssueIds` — `array: string: UUID`  
    If this job tracks the creation of model set inspection issues, the IDs of the created issues.
- `status` — `enum: string`  
    The current job status. Possible values: Failed, Running, Succeeded, Archived.
- `errors` — `array: object`  
    Any errors the job encountered. Min items: 1.
  - `type` — `string`  
      The error code.
  - `title` — `string`  
      A short title for the error.
  - `detail` — `string`  
      A more detailed, human readable description of the error, assuming that this message is not localized and is therefore EN-US. UI consumers can use the error.type value to provide a localized version of this error for presentation.
  - `errors` — `array: object`  
      A set of specific validation errors that need to be fixed.
    - `field` — `string`  
        The field which failed validation.
    - `title` — `string`  
        A short title for the error.
    - `detail` — `string`  
        A more detailed, human readable description of the error, assuming that this message is not localized and is therefore EN-US. UI consumers can use the error.type value to provide a localized version of this error for presentation.
    - `type` — `string`  
        The error code.
- `job` — `object`  
    A job.
  - `operation` — `string`  
      The operation associated with the job.
  - `seed` — `object`  
      The JSON payload which seeded the job.

### 응답 본문 (400)

- `type` — `string`  
    The error code.
- `title` — `string`  
    A short title for the error.
- `detail` — `string`  
    A more detailed, human readable description of the error, assuming that this message is not localized and is therefore EN-US. UI consumers can use the error.type value to provide a localized version of this error for presentation.
- `errors` — `array: object`  
    A set of specific validation errors that need to be fixed.
  - `field` — `string`  
      The field which failed validation.
  - `title` — `string`  
      A short title for the error.
  - `detail` — `string`  
      A more detailed, human readable description of the error, assuming that this message is not localized and is therefore EN-US. UI consumers can use the error.type value to provide a localized version of this error for presentation.
  - `type` — `string`  
      The error code.

## Example

```
curl -v 'https://developer.api.autodesk.com/bim360/modelset/v3/containers/f0f4f36a-ac64-687f-b132-8efe04b22454/modelsets/00fb28a5-e8a4-2755-562a-7c2f0fc87911/issues' \
     -X POST \
     -H 'Authorization: Bearer <token>' \
     -H 'Content-Type: application/json' \
     -d '[
           {
             "title": "Mechanical Return Air 1 and 6 other objects",
             "description": "Reroute Mechanical Return Air 1 along corridor",
             "assignedTo": "PD23PXGV8V3V",
             "assignedToType": "User",
             "locationDescription": "South wall",
             "owner": "PD23PXGV8V3V",
             "pushpin": {
               "location": {
                 "x": 426.77023,
                 "y": 176.68831,
                 "z": 682.2887
               },
               "objectId": 22,
               "externalId": "52b4d5f1-3419-46de-8c54-5a36c0d3c7fd-000303a0",
               "attributesVersion": "1",
               "type": "TwoDVectorPushpin"
             },
             "issueTypeId": "9f2b9b56-1e62-76c1-75ab-c6f15a53599d",
             "issueSubTypeId": "7bc10cee-441e-82c3-5c19-1d28c1a5b167",
             "gpsCoordinates": {
               "latitude": 40,
               "longitude": 186
             },
             "documentVersionUrn": "urn:adsk.wipprod:fs.file:vf.jvMF7mrHR7OwG_DToKsJUA?version=1",
             "viewableName": "Level 1",
             "viewContext": [
               {
                 "urn": "urn:adsk.wipprod:fs.file:vf.jvMF7mrHR7OwG_DToKsJUA?version=1",
                 "viewableName": "Level 1"
               }
             ]
           }
         ]'
```

```
{
  "jobId": "49244371-ee08-9afa-01f8-26fcd8ecb03d",
  "modelSetId": "00fb28a5-e8a4-2755-562a-7c2f0fc87911",
  "status": "Succeeded",
  "job": {
    "operation": "OperationName",
    "seed": {}
  }
}
```

```
{
  "type": "BadInput",
  "title": "One or more input values in the request were bad",
  "detail": "The following parameters are invalid: containerId",
  "errors": [
    {
      "field": "containerId",
      "title": "Invalid parameter",
      "detail": "The value 'testing' is not valid.",
      "type": "BadInput"
    }
  ]
}
```

## 같은 그룹의 다른 엔드포인트

- `POST /bim360/clash/v3/containers/{containerId}/tests/{testId}/clashes:assign` — [Creates a batch of new assigned clash groups for the given clash test](./mc-clash-service-v3-add-assigned-clash-group-batch-POST.md)
- `POST /bim360/clash/v3/containers/{containerId}/tests/{testId}/clashes:close` — [Adds a batch of new closed clash groups to the given clash test](./mc-clash-service-v3-add-closed-clash-group-batch-POST.md)
- `POST /bim360/clash/v3/containers/{containerId}/modelsets/{modelSetId}/screenshots` — [Uploads a screenshot, associating it with a given model set](./mc-clash-service-v3-add-screen-shot-POST.md)
- `POST /bim360/clash/v3/containers/{containerId}/tests/{testId}/clashes/assigned` — [Retrieves the state of the specified assigned clash groups, relative to a specified clash test](./mc-clash-service-v3-get-assigned-clash-group-batch-POST.md)
- `POST /bim360/clash/v3/containers/{containerId}/clashes/assigned/viewcontext` — [GET clashes/assigned/viewcontext](./mc-clash-service-v3-get-assigned-clash-group-view-context-POST.md)
- `GET /bim360/clash/v3/containers/{containerId}/clashes/jobs/{jobId}` — [Retrieves information about a given clash job](./mc-clash-service-v3-get-clash-group-job-GET.md)
- `GET /bim360/clash/v3/containers/{containerId}/tests/{testId}/clashes/assigned` — [Retrieves the state of all assigned clash groups in a particular model set, relative to a specified clash test](./mc-clash-service-v3-get-clash-test-assigned-clash-group-intersection-GET.md)
- `GET /bim360/clash/v3/containers/{containerId}/tests/{testId}/clashes/closed` — [Retrieves the state of all closed clash groups in a particular model set, relative to a specified clash test](./mc-clash-service-v3-get-clash-test-closed-clash-group-intersection-GET.md)
- `GET /bim360/clash/v3/containers/{containerId}/tests/{testId}` — [Retrieves a requested clash test based on the clash test ID](./mc-clash-service-v3-get-clash-test-GET.md)
- `GET /bim360/clash/v3/containers/{containerId}/tests/{testId}/resources` — [Retrieves information about a given clash test result resources](./mc-clash-service-v3-get-clash-test-resources-GET.md)
- `POST /bim360/clash/v3/containers/{containerId}/tests/{testId}/clashes/closed` — [Retrieves the state of the specified closed clash groups, relative to a specified clash test](./mc-clash-service-v3-get-closed-clash-group-data-batch-POST.md)
- `GET /bim360/clash/v3/containers/{containerId}/modelsets/{modelSetId}/clashes/grouped` — [Retrieves a list of clashes associated with assigned or closed clash groups in a given model set](./mc-clash-service-v3-get-grouped-clashes-GET.md)
- `GET /bim360/clash/v3/containers/{containerId}/modelsets/{modelSetId}/tests` — [Retrieves a list of summaries for all clash tests that have been executed for a given model set](./mc-clash-service-v3-get-model-set-clash-tests-GET.md)
- `GET /bim360/clash/v3/containers/{containerId}/modelsets/{modelSetId}/versions/{version}/tests` — [Retrieves a list of summaries for all clash tests that have been executed for a given model set version](./mc-clash-service-v3-get-model-set-version-clash-tests-GET.md)
- `GET /bim360/clash/v3/containers/{containerId}/modelsets/{modelSetId}/screenshots/{screenShotId}` — [Retrieves a specific screenshot based on the screenshot ID](./mc-clash-service-v3-get-screen-shot-GET.md)
- `POST /bim360/clash/v3/containers/{containerId}/modelsets/{modelSetId}/clashes:reopen` — [Re-opens a batch of existing closed clash groups](./mc-clash-service-v3-reopen-closed-clash-group-batch-POST.md)
- `GET /bim360/clash/v3/containers/{containerId}/modelsets/{modelSetId}/clashes/assigned` — [Retrieves a list of assigned clash groups in a given model set which match the provided search parameters](./mc-clash-service-v3-search-container-issue-clash-groups-GET.md)
- `GET /bim360/clash/v3/containers/{containerId}/modelsets/{modelSetId}/clashes/closed` — [Retrieves a list of closed clash groups in a given model set which match the provided search parameters](./mc-clash-service-v3-search-container-model-set-closed-clash-groups-GET.md)
- `POST /bim360/modelset/v3/containers/{containerId}/modelsets/{modelSetId}/screenshots` — [Uploads a screenshot, associating it with a given model set](./mc-modelset-service-v3-add-screen-shot-POST.md)
- `POST /bim360/modelset/v3/containers/{containerId}/modelsets` — [Model Set](./mc-modelset-service-v3-create-model-set-POST.md)
- `POST /bim360/modelset/v3/containers/{containerId}/modelsets/{modelSetId}/versions` — [Creates a new version of a given model set](./mc-modelset-service-v3-create-model-set-version-POST.md)
- `POST /bim360/modelset/v3/containers/{containerId}/modelsets/{modelSetId}/views` — [Creates a view for a given model set](./mc-modelset-service-v3-create-model-set-view-POST.md)
- `DELETE /bim360/modelset/v3/containers/{containerId}/modelsets/{modelSetId}/views/{viewId}` — [Deletes a specific model set view based on the view ID](./mc-modelset-service-v3-delete-model-set-view-DELETE.md)
- `PATCH /bim360/modelset/v3/containers/{containerId}/modelsets/{modelSetId}/versions:disable` — [Disables automatic version creation for a given model set](./mc-modelset-service-v3-disable-model-set-versions-PATCH.md)
- `PATCH /bim360/modelset/v3/containers/{containerId}/modelsets/{modelSetId}/versions:enable` — [Enables automatic version creation for a given model set](./mc-modelset-service-v3-enable-model-set-versions-PATCH.md)
- `GET /bim360/modelset/v3/containers/{containerId}/jobs/{jobId}` — [Retrieves information about a given container job](./mc-modelset-service-v3-get-container-job-by-container-GET.md)
- `GET /bim360/modelset/v3/containers/{containerId}/modelsets/{modelSetId}` — [Retrieves a requested model set based on the model set ID](./mc-modelset-service-v3-get-model-set-GET.md)
- `POST /bim360/modelset/v3/containers/{containerId}/issues/viewcontext` — [Model Set](./mc-modelset-service-v3-get-model-set-issue-view-context-POST.rst.md)
- `GET /bim360/modelset/v3/containers/{containerId}/modelsets/{modelSetId}/jobs/{jobId}` — [Retrieves information about a given model set job](./mc-modelset-service-v3-get-model-set-job-GET.md)
- `GET /bim360/modelset/v3/containers/{containerId}/modelsets/{modelSetId}/versions/{version}` — [Retrieves a specific version of a given model set based on the model set ID and version number](./mc-modelset-service-v3-get-model-set-version-GET.md)
- `GET /bim360/modelset/v3/containers/{containerId}/modelsets/{modelSetId}/versions/latest` — [Retrieves the latest version of a given model set based on the model set ID](./mc-modelset-service-v3-get-model-set-version-latest-GET.md)
- `GET /bim360/modelset/v3/containers/{containerId}/modelsets/{modelSetId}/versions` — [Retrieves a list of versions of a given model set](./mc-modelset-service-v3-get-model-set-versions-GET.md)
- `GET /bim360/modelset/v3/containers/{containerId}/modelsets/{modelSetId}/views/{viewId}` — [Retrieves a specific model set view based on the view ID](./mc-modelset-service-v3-get-model-set-view-GET.md)
- `GET /bim360/modelset/v3/containers/{containerId}/modelsets/{modelSetId}/views/{viewId}/jobs/{jobId}` — [Retrieves information about a given model set view job](./mc-modelset-service-v3-get-model-set-view-job-GET.md)
- `GET /bim360/modelset/v3/containers/{containerId}/modelsets/{modelSetId}/versions/{version}/views/{viewId}` — [Retrieves a model set view as it exists in a specific model set version](./mc-modelset-service-v3-get-model-set-view-version-GET.md)
- `GET /bim360/modelset/v3/containers/{containerId}/modelsets/{modelSetId}/versions/{version}/views` — [Retrieves a list of all model set views in a given model set as they exist in a specific model set version](./mc-modelset-service-v3-get-model-set-view-versions-GET.md)
- `GET /bim360/modelset/v3/containers/{containerId}/modelsets/{modelSetId}/views` — [Retrieves a list of model set views in a given model set that match the provided search parameters](./mc-modelset-service-v3-get-model-set-views-GET.md)
- `GET /bim360/modelset/v3/containers/{containerId}/modelsets` — [Retrieves a list of model sets in a given container that match the provided search parameters](./mc-modelset-service-v3-get-model-sets-GET.md)
- `GET /bim360/modelset/v3/containers/{containerId}/modelsets/{modelSetId}/screenshots/{screenShotId}` — [Retrieves a specific screenshot based on the screenshot ID](./mc-modelset-service-v3-get-screen-shot-GET.md)
- `PATCH /bim360/modelset/v3/containers/{containerId}/modelsets/{modelSetId}` — [Updates a given model set name and/or description](./mc-modelset-service-v3-patch-model-set-name-description-PATCH.md)
- `POST /bim360/modelset/v3/containers/{containerId}/modelsets/{modelSetId}/views:lineages` — [Retrieves a list of model set views in a given model set that contain the provided set of document lineage URNs](./mc-modelset-service-v3-search-model-set-view-lineages-POST.md)
- `PATCH /bim360/modelset/v3/containers/{containerId}/modelsets/{modelSetId}/views/{viewId}` — [Updates a specific model set view](./mc-modelset-service-v3-update-model-set-view-PATCH.md)

---
원본 문서: https://aps.autodesk.com/en/docs/acc/v1/reference/http/mc-modelset-service-v3-add-model-set-issue-POST
