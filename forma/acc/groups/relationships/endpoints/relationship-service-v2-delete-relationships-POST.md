---
operation_id: relationship-service-v2-delete-relationships-POST
method: POST
path: /bim360/relationship/v2/containers/{containerId}/relationships:delete
group: "Relationships"
auth_context: user context required
scopes: [data:write]
surface: http
verification: docs-only
---

# Deletes one or more relationships by passing an array of relationship UUIDs

```http
POST https://developer.api.autodesk.com/bim360/relationship/v2/containers/:containerId/relationships:delete
```

| | |
| --- | --- |
| **인증 컨텍스트** | user context required |
| **필요 스코프** | `data:write` |
| **데이터 포맷** | JSON |
| **그룹** | Relationships |

Deletes one or more relationships by passing an array of relationship UUIDs.

## 요청

### URI 파라미터

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `containerId` | string: UUID |  | The project ID. |

### 헤더

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `Authorization` | string | **필수** | Must be Bearer <token>, where <token> is obtained via a three-legged OAuth flow. |
| `Content-Type` | string | **필수** | Must be application/json |
| `x-ads-region` | enum: string |  | The region to which your request should be routed. If not set, the request is routed automatically but may incur a small latency increase. Possible values: US, EMEA. For the full list of supported regions, see the Regions page. |

### 요청 본문

- `array: string: UUID` — `array: string: UUID` **(필수)**  
    The list of relationships (UUIDs) to delete. Min items: 1 Max items: 50

## 응답

| 코드 | 의미 | 설명 |
| --- | --- | --- |
| `200` | OK | Success |
| `400` | Bad Request | The parameters of the requested operation are invalid. |
| `401` | Unauthorized | The provided bearer token is not valid. |
| `403` | Forbidden | The user or service represented by the bearer token does not have permission to perform this operation. |
| `404` | Not Found | The requested resource could not be found. |
| `415` | Unsupported Media Type | The Content-Type header must be application/json. |
| `429` | Too Many Requests | Rate limit exceeded; wait some time before retrying. The Retry-After header might provide the amount of the time to wait. |
| `500` | Internal Server Error | An unknown error occurred on the server. |

### 응답 본문 (200)

- `deleted` — `array: string: UUID`  
    The list of UUIDs that uniquely identify the deleted relationships.

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
      The field that failed validation.
  - `title` — `string`  
      A short title for the error.
  - `detail` — `string`  
      A more detailed, human readable description of the error, assuming that this message is not localized and is therefore EN-US. UI consumers can use the error.type value to provide a localized version of this error for presentation.
  - `type` — `string`  
      The error code.

## Example

```
curl -v 'https://developer.api.autodesk.com/bim360/relationship/v2/containers/fbd6cb57-7d0e-4961-8c2c-69646514ef44/relationships:delete' \
     -X POST \
     -H 'Authorization: Bearer <token>' \
     -H 'Content-Type: application/json' \
     -d '[
           "d98c1dd4-008f-04b2-e980-0998ecf8427e"
         ]'
```

```
{
  "deleted": [
    "d98c1dd4-008f-04b2-e980-0998ecf8427e"
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

- `PUT /bim360/relationship/v2/containers/{containerId}/relationships` — [Creates a relationship between two entities (for example, asset and document)](./relationship-service-v2-add-relationships-PUT.md)
- `GET /bim360/relationship/v2/containers/{containerId}/relationships/{relationshipId}` — [Retrieves a requested relationship based on the relationship’s ID](./relationship-service-v2-get-relationship-by-id-GET.md)
- `POST /bim360/relationship/v2/containers/{containerId}/relationships:batch` — [Retrieves a list of one or more relationships by passing an array of relationship IDs](./relationship-service-v2-get-relationships-batch-POST.md)
- `GET /bim360/relationship/v2/utility/relationships:writable` — [GET utility/relationships:writable](./relationship-service-v2-get-writable-relationship-domains-GET.md)
- `POST /bim360/relationship/v2/containers/{containerId}/relationships:intersect` — [Retrieves a list of relationships that contain the specified relationship entities](./relationship-service-v2-intersect-relationships-POST.md)
- `POST /bim360/relationship/v2/containers/{containerId}/relationships:sync` — [Synchronise relationships using the (optional) synchronization token passed by the caller](./relationship-service-v2-relationships-sync-POST.md)
- `POST /bim360/relationship/v2/containers/{containerId}/relationships:syncStatus` — [Retrieves the relationship synchronization status for the caller as one or more synchronization tokens](./relationship-service-v2-relationships-sync-status-POST.md)
- `GET /bim360/relationship/v2/containers/{containerId}/relationships:search` — [Retrieves a list of relationships that match the provided search parameters](./relationship-service-v2-search-relationships-GET.md)

---
원본 문서: https://aps.autodesk.com/en/docs/acc/v1/reference/http/relationship-service-v2-delete-relationships-POST
