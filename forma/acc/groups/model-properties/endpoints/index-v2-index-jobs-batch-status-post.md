---
operation_id: index-v2-index-jobs-batch-status-post
method: POST
path: /construction/index/v2/projects/{projectId}/indexes:batch-status
group: "Model Properties"
auth_context: user context required
scopes: [data:read]
surface: http
verification: docs-only
---

# Retrieve the job status for several jobs in a single request

```http
POST https://developer.api.autodesk.com/construction/index/v2/projects/:projectId/indexes:batch-status
```

| | |
| --- | --- |
| **인증 컨텍스트** | user context required |
| **필요 스코프** | `data:read` |
| **데이터 포맷** | json |
| **그룹** | Model Properties |

Retrieve the job status for several jobs in a single request.

## 요청

### URI 파라미터

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `projectId` | string: UUID |  | The project ID. |

### 헤더

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `Authorization` | string | **필수** | Must be Bearer <token>, where <token> is obtained via a three-legged OAuth flow. |
| `Content-Type` | string | **필수** | Must be application/json |
| `x-ads-force-regenerate-cache` | boolean |  | If set to true, force regeneration of S3 cache. |
| `x-ads-region` | enum: string |  | The region to which your request should be routed. If not set, the request is routed automatically but may incur a small latency increase. Possible values: US, EMEA. For the full list of supported regions, see the Regions page. |

### 요청 본문

- `versions` — `array: object` **(필수)**  
    versions. Min items: 1 Max items: 1000
  - `versionUrn` — `string` **(필수)**  
      file version urn.
  - `query` — `object`  
      SQL AST for binary expression/filter
  - `columns` — `object`  
      SQL AST for describing columns/projections

## 응답

| 코드 | 의미 | 설명 |
| --- | --- | --- |
| `200` | OK | Success |
| `401` | Unauthorized | Response in case of an error. |
| `403` | Forbidden | The user or service represented by the bearer token does not have permission to perform this operation. |
| `415` | Unsupported Media Type | The Content-Type header must be application/json. |
| `429` | Too Many Requests | Rate limit exceeded. Wait some time before retrying. The Retry-After header might provide the amount of the time to wait. |
| `500` | Internal Server Error | An unknown error occurred on the server. |

### 응답 본문 (200)

- `indexes` — `array: object`  
    indexes. Min items: 1 Max items: 1000
  - `projectId` — `string`  
      project id.
  - `indexId` — `string`  
      index id.
  - `queryId` — `string`  
      query id.
  - `type` — `enum: string`  
      type. Possible values: INDEX
  - `state` — `enum: string`  
      job status. Possible values: PROCESSING, FINISHED, FAILED
  - `selfUrl` — `string`  
      unique url for this indexing job status.
  - `versionUrns` — `array: string`  
      list all versions this index depends upon.
  - `updatedAt` — `datetime: ISO 8601`  
      timestamp.
  - `retryAt` — `datetime: ISO 8601`  
      timestamp.
  - `stats` — `object`  
      some higher level index statistics.
    - `objects` — `int`  
        number of objects contained in the properties index.
  - `manifestUrl` — `string`  
      url for downloading the index manifest.
  - `fieldsUrl` — `string`  
      url for downloading the index fields.
  - `propertiesUrl` — `string`  
      url for downloading the index properties.
  - `queryResultsUrl` — `string`  
      url for downloading the query result.
  - `errors` — `array: object`  
      errors.
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
curl -v 'https://developer.api.autodesk.com/construction/index/v2/projects/cd743656-f130-48bd-96e6-948175313637/indexes:batchStatus' \
     -X POST \
     -H 'Authorization: Bearer <token>' \
     -H 'Content-Type: application/json' \
     -d '{
           "versions": [
             {
               "versionUrn": "urn:adsk.wipstg:fs.file:vf.-7p38avKTMGWp2vcCW568Q?version=2",
               "query": {
                 " $not ": [
                   {
                     " s.p123 ": "17"
                   },
                   {
                     " s.pabc ": " '\''Hello'\'' "
                   }
                 ]
               },
               "columns": {
                 "a": {
                   "$date_add": [
                     "YEAR",
                     "5",
                     "'\''2010-01-01T'\''"
                   ]
                 },
                 "b": {
                   "$mul": [
                     {
                       "$add": [
                         "5",
                         "s.p789"
                       ]
                     },
                     "10"
                   ]
                 },
                 "s.svf2Id": "true"
               }
             }
           ]
         }'
```

```
{
  "indexes": [
    {
      "projectId": "some_project_id",
      "indexId": "4e34bb65ae12",
      "queryId": "90756abcefd2",
      "type": "INDEX",
      "selfUrl": "https://developer.api.autodesk.com/construction/index/v2/projects/some_project_id/indexes/4e34bb65ae12/queries/90756abcefd2",
      "versionUrns": [
        "some_version_urn"
      ],
      "updatedAt": "2020-09-18T07:44:04.946Z",
      "state": "FINISHED",
      "stats": {
        "objects": "345678"
      },
      "manifestUrl": "https://developer.api.autodesk.com/construction/index/v2/projects/some_project_id/indexes/4e34bb65ae12/manifest",
      "fieldsUrl": "https://developer.api.autodesk.com/construction/index/v2/projects/some_project_id/indexes/4e34bb65ae12/fields",
      "propertiesUrl": "https://developer.api.autodesk.com/construction/index/v2/projects/some_project_id/indexes/4e34bb65ae12/properties",
      "queryResultsUrl": "https://developer.api.autodesk.com/construction/index/v2/projects/some_project_id/indexes/4e34bb65ae12/queries/90756abcefd2/properties"
    }
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
- `GET /construction/index/v2/projects/{projectId}/indexes/{indexId}/manifest` — [Retrieve a specific manifest associated with a properties index](./index-v2-index-manifest-get.md)
- `GET /construction/index/v2/projects/{projectId}/indexes/{indexId}/properties` — [Retrieve the specific properties index](./index-v2-index-properties-get.md)
- `GET /construction/index/v2/projects/{projectId}/indexes/{indexId}/queries/{queryId}` — [Depending on the state different properties might be present or missing](./index-v2-index-query-job-status-get.md)
- `POST /construction/index/v2/projects/{projectId}/indexes/{indexId}/queries` — [Applies the given query on the given properties index](./index-v2-index-query-post.md)
- `GET /construction/index/v2/projects/{projectId}/indexes/{indexId}/queries/{queryId}/properties` — [Retrieve the query specific properties index](./index-v2-index-query-properties-get.md)
- `GET /construction/index/v2/projects/{projectId}/indexes/{indexId}` — [Retrieve the indexing status for the given index ID](./index-v2-index-status-get.md)

---
원본 문서: https://aps.autodesk.com/en/docs/acc/v1/reference/http/index-v2-index-jobs-batch-status-post
