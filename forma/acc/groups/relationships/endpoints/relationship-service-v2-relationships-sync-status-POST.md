---
operation_id: relationship-service-v2-relationships-sync-status-POST
method: POST
path: /bim360/relationship/v2/containers/{containerId}/relationships:syncStatus
group: "Relationships"
auth_context: user context required
scopes: [data:read]
surface: http
verification: docs-only
---

# Retrieves the relationship synchronization status for the caller as one or more synchronization tokens

```http
POST https://developer.api.autodesk.com/bim360/relationship/v2/containers/:containerId/relationships:syncStatus
```

| | |
| --- | --- |
| **인증 컨텍스트** | user context required |
| **필요 스코프** | `data:read` |
| **데이터 포맷** | JSON |
| **그룹** | Relationships |

Retrieves the relationship synchronization status for the caller as one or more synchronization tokens. This can be based on an optional array of input tokens.

## 요청

### URI 파라미터

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `containerId` | string: UUID |  | The GUID that uniquely identifies the container. |

### 헤더

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `Authorization` | string | **필수** | Must be Bearer <token>, where <token> is obtained via a three-legged OAuth flow. |
| `Content-Type` | string | **필수** | Must be application/json |
| `x-ads-region` | enum: string |  | The region to which your request should be routed. If not set, the request is routed automatically but may incur a small latency increase. Possible values: US, EMEA. For the full list of supported regions, see the Regions page. |

### 요청 본문

- `referenceId` — `string`  
    An optional reference passed by the caller and returned by the service.
- `syncToken` — `string`  
    The token that can be used to obtain data via the synchronization endpoint.

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

- `results` — `array: object`  
    The array of sync tokens.
  - `moreData` — `boolean`  
      If set to true, data is available for synchronization using the supplied synchronization token.
  - `overwrite` — `boolean`  
      If set to true, the data returned by the synchronization endpoint can be used to overwrite local copies.
  - `referenceId` — `string`  
      An optional reference passed by the caller and returned by the service.
  - `syncToken` — `string`  
      The token that can be used to obtain data via the synchronization endpoint.
- `errors` — `array: object`  
    The array of errors associated with the request for sync tokens.
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
  - `referenceId` — `string`  
      An optional reference passed by the caller and returned by the service.
  - `syncToken` — `string`  
      The token that can be used to obtain data via the synchronization endpoint.

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
curl -v 'https://developer.api.autodesk.com/bim360/relationship/v2/containers/f0f4f36a-ac64-687f-b132-8efe04b22454/relationships:syncStatus' \
     -X POST \
     -H 'Authorization: Bearer <token>' \
     -H 'Content-Type: application/json' \
     -d '[
           {
             "syncToken": "eyAibGFzdENoZWNrZWQiOiIyMDE5LTEwLTE4VDEyOjEwOjA3Ljc5NloiIH0="
           }
         ]'
```

```
{
  "results": [
    {
      "moreData": true,
      "overwrite": false,
      "syncToken": "eyAibGFzdENoZWNrZWQiOiIyMDE5LTEwLTE4VDEyOjEwOjA3Ljc5NloiIH0="
    }
  ],
  "errors": [
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
      ],
      "syncToken": "eyAibGFzdENoZWNrZWQiOiIyMDE5LTEwLTE4VDEyOjEwOjA3Ljc5NloiIH0="
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

- `PUT /bim360/relationship/v2/containers/{containerId}/relationships` — [Creates a relationship between two entities (for example, asset and document)](./relationship-service-v2-add-relationships-PUT.md)
- `POST /bim360/relationship/v2/containers/{containerId}/relationships:delete` — [Deletes one or more relationships by passing an array of relationship UUIDs](./relationship-service-v2-delete-relationships-POST.md)
- `GET /bim360/relationship/v2/containers/{containerId}/relationships/{relationshipId}` — [Retrieves a requested relationship based on the relationship’s ID](./relationship-service-v2-get-relationship-by-id-GET.md)
- `POST /bim360/relationship/v2/containers/{containerId}/relationships:batch` — [Retrieves a list of one or more relationships by passing an array of relationship IDs](./relationship-service-v2-get-relationships-batch-POST.md)
- `GET /bim360/relationship/v2/utility/relationships:writable` — [GET utility/relationships:writable](./relationship-service-v2-get-writable-relationship-domains-GET.md)
- `POST /bim360/relationship/v2/containers/{containerId}/relationships:intersect` — [Retrieves a list of relationships that contain the specified relationship entities](./relationship-service-v2-intersect-relationships-POST.md)
- `POST /bim360/relationship/v2/containers/{containerId}/relationships:sync` — [Synchronise relationships using the (optional) synchronization token passed by the caller](./relationship-service-v2-relationships-sync-POST.md)
- `GET /bim360/relationship/v2/containers/{containerId}/relationships:search` — [Retrieves a list of relationships that match the provided search parameters](./relationship-service-v2-search-relationships-GET.md)

---
원본 문서: https://aps.autodesk.com/en/docs/acc/v1/reference/http/relationship-service-v2-relationships-sync-status-POST
