---
operation_id: project-getproject-GET
method: GET
path: /forma/project/v1alpha/projects/{projectId}
group: "project"
auth_context: user context optional
scopes: [data:read]
surface: http
verification: docs-only
deprecated: true
---

# Get a project

> ⚠️ **DEPRECATED** — 이 엔드포인트는 더 이상 권장되지 않습니다.

```http
GET https://developer.api.autodesk.com/forma/project/v1alpha/projects/{projectId}
```

| | |
| --- | --- |
| **인증 컨텍스트** | user context optional |
| **필요 스코프** | `data:read` |
| **데이터 포맷** | JSON |
| **그룹** | project |

Get a project. Deprecated - please use the Site API.

## 요청

### URI 파라미터

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `projectId` | string |  |  |

### 헤더

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `Authorization` | string | **필수** | Must be Bearer <token>, where <token> is obtained via either a two-legged or three-legged OAuth flow. |
| `X-Ads-Region` | string |  | Specifies the geographical location (region) of the service. US or EMEA. Defaults to US. |

## 응답

| 코드 | 의미 | 설명 |
| --- | --- | --- |
| `200` | OK |  |
| `400` | Bad Request | Malformed request. The request body is not valid according to the schema. See response for details. |
| `401` | Unauthorized | Bearer token is not valid |
| `403` | Forbidden | Token does not have access to the specified project. Are you in the right region? |
| `500` | Internal Server Error | Internal server error |

### 응답 본문 (200)

- `id` — `string`  
    Project ID Max length: 40
- `name` — `string`
- `createdAt` — `datetime: ISO 8601`
- `hubId` — `string`  
    Max length: 50
- `description` — `string`
- `countryCode` — `string`  
    The ISO 3166-1 alpha-2 two-letter country code for the project
- `refPointWgs84` — `array: number`
- `coordinateSystem` — `object`
  - `srid` — `number`
  - `refPoint` — `array: number`
- `timezone` — `string`  
    Timezone identifier as defined in the IANA Time Zone Database
- `archivedAt` — `datetime: ISO 8601`
- `inviteOnly` — `boolean`

## Example

```
curl -v 'https://developer.api.autodesk.com/forma/project/v1alpha/projects/:projectId' \
  -H 'Authorization: Bearer AuIPTf4KYLTYGVnOHQ0cuolwCW2a'
```

```
{
  "id": "",
  "name": "",
  "createdAt": "",
  "hubId": "",
  "description": "",
  "countryCode": "NO",
  "refPointWgs84": [
    ""
  ],
  "coordinateSystem": {
    "srid": "",
    "refPoint": [
      ""
    ]
  },
  "timezone": "Europe/Oslo",
  "archivedAt": "",
  "inviteOnly": ""
}
```

---
원본 문서: https://aps.autodesk.com/en/docs/forma/v1/reference/http-reference/project-getproject-GET
