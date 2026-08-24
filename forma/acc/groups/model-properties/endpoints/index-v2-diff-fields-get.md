---
operation_id: index-v2-diff-fields-get
method: GET
path: /construction/index/v2/projects/{projectId}/diffs/{diffId}/fields
group: "Model Properties"
auth_context: user context required
scopes: [data:read]
surface: http
verification: docs-only
---

# Retrieve a specific fields dictionary associated with a diff index

```http
GET https://developer.api.autodesk.com/construction/index/v2/projects/:projectId/diffs/:diffId/fields
```

| | |
| --- | --- |
| **인증 컨텍스트** | user context required |
| **필요 스코프** | `data:read` |
| **데이터 포맷** | json.gz |
| **그룹** | Model Properties |

Retrieve a specific fields dictionary associated with a diff index. Once created, the fields dictionary is immutable. The response will set a long expiration HTTP header for efficient client-side caching.

## 요청

### URI 파라미터

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `projectId` | string: UUID |  | The project ID. |
| `diffId` | string |  | The diff ID. |

### 헤더

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `Authorization` | string | **필수** | Must be Bearer <token>, where <token> is obtained via a three-legged OAuth flow. |
| `x-ads-region` | enum: string |  | The region to which your request should be routed. If not set, the request is routed automatically but may incur a small latency increase. Possible values: US, EMEA. For the full list of supported regions, see the Regions page. |

## 응답

| 코드 | 의미 | 설명 |
| --- | --- | --- |
| `200` | OK | The response is provided in the [line-delimited JSON streaming format (LDJSON)](https://de.wikipedia.org/wiki/JSON_streaming) with the definition of one field per line. |
| `303` | Redirect Method | The response is provided in the [line-delimited JSON streaming format (LDJSON)](https://de.wikipedia.org/wiki/JSON_streaming) with the definition of one field per line. |
| `401` | Unauthorized | Response in case of an error. |
| `403` | Forbidden | The user or service represented by the bearer token does not have permission to perform this operation. |
| `429` | Too Many Requests | Rate limit exceeded. Wait some time before retrying. The Retry-After header might provide the amount of the time to wait. |
| `500` | Internal Server Error | An unknown error occurred on the server. |

### 응답 본문 (200)

- `key` — `string`  
    The unique identifier for the attribute in file version.
- `category` — `string`  
    The property database attribute category, can be null.
- `type` — `enum: string`  
    field data type. Possible values: Unknown, Boolean, Integer, Double, Blob, DbKey, String, LocalizableString, DateTime, GeoLocation, Position
- `name` — `string`  
    The property database attribute name.
- `uom` — `string`  
    The property database attribute data type context or unit of measurement, e.g., “m”, “ft”, “m^2”, “kip/inch^2”.

### 응답 본문 (303)

- `key` — `string`  
    The unique identifier for the attribute in file version.
- `category` — `string`  
    The property database attribute category, can be null.
- `type` — `enum: string`  
    field data type. Possible values: Unknown, Boolean, Integer, Double, Blob, DbKey, String, LocalizableString, DateTime, GeoLocation, Position
- `name` — `string`  
    The property database attribute name.
- `uom` — `string`  
    The property database attribute data type context or unit of measurement, e.g., “m”, “ft”, “m^2”, “kip/inch^2”.

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
      The field that failed validation.
  - `title` — `string`  
      A short title for the error.
  - `detail` — `string`  
      A more detailed, human readable description of the error, assuming that this message is not localized and is therefore EN-US. UI consumers can use the error.type value to provide a localized version of this error for presentation.
  - `type` — `string`  
      The error code.

## Example

```
curl -v 'https://developer.api.autodesk.com/construction/index/v2/projects/cd743656-f130-48bd-96e6-948175313637/diffs/3fe13864aecfe0a5/fields' \
     -H 'Authorization: Bearer <token>'
```

```
{
  "key": "p8e7b8610",
  "category": "Materials and Finishes",
  "type": "Double",
  "name": "Concrete compression",
  "uom": "kip/inch^2"
}
```

```
{
  "key": "p8e7b8610",
  "category": "Materials and Finishes",
  "type": "Double",
  "name": "Concrete compression",
  "uom": "kip/inch^2"
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
- `GET /construction/index/v2/projects/{projectId}/indexes/{indexId}/queries/{queryId}/properties` — [Retrieve the query specific properties index](./index-v2-index-query-properties-get.md)
- `GET /construction/index/v2/projects/{projectId}/indexes/{indexId}` — [Retrieve the indexing status for the given index ID](./index-v2-index-status-get.md)

---
원본 문서: https://aps.autodesk.com/en/docs/acc/v1/reference/http/index-v2-diff-fields-get
