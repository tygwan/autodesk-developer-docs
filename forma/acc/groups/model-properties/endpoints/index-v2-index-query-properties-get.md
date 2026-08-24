---
operation_id: index-v2-index-query-properties-get
method: GET
path: /construction/index/v2/projects/{projectId}/indexes/{indexId}/queries/{queryId}/properties
group: "Model Properties"
auth_context: user context required
scopes: [data:read]
surface: http
verification: docs-only
---

# Retrieve the query specific properties index

```http
GET https://developer.api.autodesk.com/construction/index/v2/projects/:projectId/indexes/:indexId/queries/:queryId/properties
```

| | |
| --- | --- |
| **인증 컨텍스트** | user context required |
| **필요 스코프** | `data:read` |
| **데이터 포맷** | json.gz |
| **그룹** | Model Properties |

Retrieve the query specific properties index. Since the properties index, once created, is immutable, the response will set a long expiration HTTP header for efficient client side caching.

## 요청

### URI 파라미터

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `projectId` | string: UUID |  | The project ID. |
| `indexId` | string |  | The index ID. |
| `queryId` | string |  | The query ID. |

### 헤더

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `Authorization` | string | **필수** | Must be Bearer <token>, where <token> is obtained via a three-legged OAuth flow. |
| `x-ads-region` | enum: string |  | The region to which your request should be routed. If not set, the request is routed automatically but may incur a small latency increase. Possible values: US, EMEA. For the full list of supported regions, see the Regions page. |

## 응답

| 코드 | 의미 | 설명 |
| --- | --- | --- |
| `200` | OK | The response is provided in the [line-delimited JSON streaming format (LDJSON)](https://de.wikipedia.org/wiki/JSON_streaming) with the properties of one object per line. |
| `303` | Redirect Method | The response is provided in the [line-delimited JSON streaming format (LDJSON)](https://de.wikipedia.org/wiki/JSON_streaming) with the properties of one object per line. |
| `401` | Unauthorized | Response in case of an error. |
| `403` | Forbidden | The user or service represented by the bearer token does not have permission to perform this operation. |
| `429` | Too Many Requests | Rate limit exceeded. Wait some time before retrying. The Retry-After header might provide the amount of the time to wait. |
| `500` | Internal Server Error | An unknown error occurred on the server. |

### 응답 본문 (200)

- `lmvId` — `int`  
    Object database id from the original seed file property database (_objects_id.id).
- `dbId` — `string`  
    Property database id (the property database the object originated from).
- `props` — `object`  
    Property database property keyed values.
- `propsHash` — `string`  
    Hash used to determine whether object properties have changed between different versions.
- `propsIgnored` — `object`  
    Property database property values that are not considered for property change tracking.
- `geomHash` — `string`  
    Hash used to determine whether the object geometry has changed between different versions.
- `bboxMin` — `object`  
    minimum [x, y, z]-coords of the 3D-bbox.
- `bboxMax` — `object`  
    maximum [x, y, z]-coords of the 3D-bbox.
- `views` — `array: string`  
    List of corresponding view IDs in the index manifest that this object is visible in.
- `svf2Id` — `int`  
    The stable SVF2 ID of the object.
- `lineageId` — `string`  
    The lineage ID of the object; the (svf2Id, lineageId)-pair allows to track a specific object across several versions.
- `externalId` — `string`  
    The external ID of the object.

### 응답 본문 (303)

- `lmvId` — `int`  
    Object database id from the original seed file property database (_objects_id.id).
- `dbId` — `string`  
    Property database id (the property database the object originated from).
- `props` — `object`  
    Property database property keyed values.
- `propsHash` — `string`  
    Hash used to determine whether object properties have changed between different versions.
- `propsIgnored` — `object`  
    Property database property values that are not considered for property change tracking.
- `geomHash` — `string`  
    Hash used to determine whether the object geometry has changed between different versions.
- `bboxMin` — `object`  
    minimum [x, y, z]-coords of the 3D-bbox.
- `bboxMax` — `object`  
    maximum [x, y, z]-coords of the 3D-bbox.
- `views` — `array: string`  
    List of corresponding view IDs in the index manifest that this object is visible in.
- `svf2Id` — `int`  
    The stable SVF2 ID of the object.
- `lineageId` — `string`  
    The lineage ID of the object; the (svf2Id, lineageId)-pair allows to track a specific object across several versions.
- `externalId` — `string`  
    The external ID of the object.

### 응답 본문 (401)

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
curl -v 'https://developer.api.autodesk.com/construction/index/v2/projects/cd743656-f130-48bd-96e6-948175313637/indexes/da39a3ee5e6b4b0d/queries/0a2bef712ffee30a/properties' \
     -H 'Authorization: Bearer <token>'
```

```
{
  "svf2Id": "1510",
  "lineageId": "344b06a3",
  "externalId": "546a5f5b-1aeb-43f9-b1f2-530ebe1e4c4a-0032d24c",
  "lmvId": "5721",
  "dbId": "455c17b4",
  "props": {
    "p00723fa6": "Main Model",
    "p01bbdcf2": "FIRST FLOOR",
    "p08bc1e88": "0",
    "p10f4572e": "505.527528165408",
    "p153cb174": "CONCESSION/ NATURE STORE 115 [991729]",
    "p188478f2": "0",
    "p1d45bc4f": "4",
    "p20d8441e": "Rooms",
    "p29ff6f58": "115",
    "p5264cd49": "1",
    "p532f0ad6": "New Construction",
    "p562c91d5": "8",
    "p5eddc473": "Revit Rooms",
    "p6ab86626": "FIRST FLOOR",
    "p78f04c1e": "99.54644577473422",
    "pa7275c45": "-2000160",
    "pb2959cb7": "0",
    "pc838ff15": "OCCUPANCY",
    "pdf772b6f": "CONCESSION/ NATURE STORE",
    "pe2ac2e1d": "8",
    "pef87fde6": "0"
  },
  "propsHash": "46681c9a",
  "propsIgnored": {
    "p93e93af5": "5599"
  },
  "geomHash": "c9f2684f",
  "bbox": {
    "min": [
      "-54.80051040649414",
      "1.0369148254394531",
      "-5.971645355224609"
    ],
    "max": [
      "-33.66492462158203",
      "31.324600219726562",
      "2.0283546447753906"
    ]
  },
  "views": [
    "7ca0051c"
  ]
}
```

```
{
  "svf2Id": "1510",
  "lineageId": "344b06a3",
  "externalId": "546a5f5b-1aeb-43f9-b1f2-530ebe1e4c4a-0032d24c",
  "lmvId": "5721",
  "dbId": "455c17b4",
  "props": {
    "p00723fa6": "Main Model",
    "p01bbdcf2": "FIRST FLOOR",
    "p08bc1e88": "0",
    "p10f4572e": "505.527528165408",
    "p153cb174": "CONCESSION/ NATURE STORE 115 [991729]",
    "p188478f2": "0",
    "p1d45bc4f": "4",
    "p20d8441e": "Rooms",
    "p29ff6f58": "115",
    "p5264cd49": "1",
    "p532f0ad6": "New Construction",
    "p562c91d5": "8",
    "p5eddc473": "Revit Rooms",
    "p6ab86626": "FIRST FLOOR",
    "p78f04c1e": "99.54644577473422",
    "pa7275c45": "-2000160",
    "pb2959cb7": "0",
    "pc838ff15": "OCCUPANCY",
    "pdf772b6f": "CONCESSION/ NATURE STORE",
    "pe2ac2e1d": "8",
    "pef87fde6": "0"
  },
  "propsHash": "46681c9a",
  "propsIgnored": {
    "p93e93af5": "5599"
  },
  "geomHash": "c9f2684f",
  "bbox": {
    "min": [
      "-54.80051040649414",
      "1.0369148254394531",
      "-5.971645355224609"
    ],
    "max": [
      "-33.66492462158203",
      "31.324600219726562",
      "2.0283546447753906"
    ]
  },
  "views": [
    "7ca0051c"
  ]
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

- `GET /construction/index/v2/projects/{projectId}/diffs/{diffId}/fields` — [Retrieve a specific fields dictionary associated with a diff index](./index-v2-diff-fields-get.md)
- `POST /construction/index/v2/projects/{projectId}/diffs:batch-status` — [Retrieve the job status for several jobs in a single request](./index-v2-diff-jobs-batch-status-post.md)
- `GET /construction/index/v2/projects/{projectId}/diffs/{diffId}/manifest` — [Retrieve a specific manifest associated with a diff index](./index-v2-diff-manifest-get.md)
- `GET /construction/index/v2/projects/{projectId}/diffs/{diffId}/properties` — [Retrieve the specific properties of the given diff](./index-v2-diff-properties-get.md)
- `GET /construction/index/v2/projects/{projectId}/diffs/{diffId}/queries/{queryId}` — [Depending on the state different properties might be present or missing](./index-v2-diff-query-job-status-get.md)
- `POST /construction/index/v2/projects/{projectId}/diffs/{diffId}/queries` — [Applies the given query to the given properties index](./index-v2-diff-query-post.md)
- `GET /construction/index/v2/projects/{projectId}/diffs/{diffId}/queries/{queryId}/properties` — [Retrieve the query specific properties of the given diff](./index-v2-diff-query-properties-get.md)
- `GET /construction/index/v2/projects/{projectId}/diffs/{diffId}` — [Retrieve the diff status for the given diff ID](./index-v2-diff-status-get.md)
- `GET /construction/index/v2/projects/{projectId}/indexes/{indexId}/fields` — [Retrieve a specific fields dictionary associated with a properties index](./index-v2-index-fields-get.md)
- `POST /construction/index/v2/projects/{projectId}/indexes:batch-status` — [Retrieve the job status for several jobs in a single request](./index-v2-index-jobs-batch-status-post.md)
- `GET /construction/index/v2/projects/{projectId}/indexes/{indexId}/manifest` — [Retrieve a specific manifest associated with a properties index](./index-v2-index-manifest-get.md)
- `GET /construction/index/v2/projects/{projectId}/indexes/{indexId}/properties` — [Retrieve the specific properties index](./index-v2-index-properties-get.md)
- `GET /construction/index/v2/projects/{projectId}/indexes/{indexId}/queries/{queryId}` — [Depending on the state different properties might be present or missing](./index-v2-index-query-job-status-get.md)
- `POST /construction/index/v2/projects/{projectId}/indexes/{indexId}/queries` — [Applies the given query on the given properties index](./index-v2-index-query-post.md)
- `GET /construction/index/v2/projects/{projectId}/indexes/{indexId}` — [Retrieve the indexing status for the given index ID](./index-v2-index-status-get.md)

---
원본 문서: https://aps.autodesk.com/en/docs/acc/v1/reference/http/index-v2-index-query-properties-get
