---
operation_id: library-createlibraryitem-POST
method: POST
path: /forma/library/v1alpha/library-items
group: "library"
auth_context: user context required
scopes: [data:read, data:write]
surface: http
verification: docs-only
---

# This endpoint allows you to create and add a new item to the library

```http
POST https://developer.api.autodesk.com/forma/library/v1alpha/library-items
```

| | |
| --- | --- |
| **인증 컨텍스트** | user context required |
| **필요 스코프** | `data:read`, `data:write` |
| **데이터 포맷** | JSON |
| **그룹** | library |

This endpoint allows you to create and add a new item to the library

## 요청

### 쿼리 파라미터

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `authcontext` | string | **필수** |  |

### 헤더

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `Authorization` | string | **필수** | Must be Bearer <token>, where <token> is obtained via a three-legged OAuth flow. |
| `X-Ads-Region` | string |  | Specifies the geographical location (region) of the service. US or EMEA. Defaults to US. |
| `Content-Type` | string | **필수** | Must be application/json |

### 요청 본문

- `elementUrn` — `string`
- `status` — `enum:string`  
    Possible values: pending, failed, success
- `name` — `string`  
    Max length: 100
- `properties` — `object`
  - `*`

## 응답

| 코드 | 의미 | 설명 |
| --- | --- | --- |
| `201` | Created | The item was successfully created and added to the library. The response contains the newly created item. |
| `400` | Bad Request | Malformed request. The request body is not valid according to the schema. See response for details. |
| `401` | Unauthorized | Bearer token is not valid |
| `403` | Forbidden | Token does not have access to the specified project. Are you in the right region? |
| `500` | Internal Server Error | Internal server error |

### 응답 본문 (201)

- `authcontext` — `string`
- `id` — `string`
- `elementUrn` — `string`
- `name` — `string`
- `createdAt` — `datetime: ISO 8601`  
    Library items created before 2024-02-13 do not contain the created time
- `updatedAt` — `datetime: ISO 8601`
- `status` — `enum:string`  
    Possible values: pending, failed, success
- `failedReason` — `string`  
    For a library item with status failed additional information might be available in this property
- `properties` — `object`
  - `*`

## Example

```
curl -v 'https://developer.api.autodesk.com/forma/library/v1alpha/library-items?authcontext=pro_123' \
  -X 'POST' \
  -H 'Authorization: Bearer AuIPTf4KYLTYGVnOHQ0cuolwCW2a' \
  -H 'Content-Type: application/json' \
  -d '{
        "elementUrn": "",
        "status": "pending",
        "name": "",
        "properties": {}
      }'
```

```
{
  "authcontext": "",
  "id": "",
  "elementUrn": "",
  "name": "",
  "createdAt": "",
  "updatedAt": "",
  "status": "pending",
  "failedReason": "",
  "properties": {}
}
```

---
원본 문서: https://aps.autodesk.com/en/docs/forma/v1/reference/http-reference/library-createlibraryitem-POST
