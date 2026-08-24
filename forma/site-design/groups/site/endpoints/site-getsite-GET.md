---
operation_id: site-getsite-GET
method: GET
path: /forma/site/v1alpha/sites/{siteId}
group: "site"
auth_context: user context optional
scopes: [data:read]
surface: http
verification: docs-only
---

# Get a site

```http
GET https://developer.api.autodesk.com/forma/site/v1alpha/sites/{siteId}
```

| | |
| --- | --- |
| **인증 컨텍스트** | user context optional |
| **필요 스코프** | `data:read` |
| **데이터 포맷** | JSON |
| **그룹** | site |

Get a site

## 요청

### URI 파라미터

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `siteId` | string |  |  |

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
| `403` | Forbidden | Token does not have access to the specified site. Are you in the right region? |
| `500` | Internal Server Error | Internal server error |

### 응답 본문 (200)

- `id` — `string`  
    Site ID Max length: 40
- `name` — `string`
- `createdAt` — `datetime: ISO 8601`
- `hubId` — `string`  
    Max length: 50
- `description` — `string`
- `countryCode` — `string`  
    The ISO 3166-1 alpha-2 two-letter country code for the site
- `refPointWgs84` — `array: number`
- `coordinateSystem` — `object`
  - `srid` — `number`
  - `refPoint` — `array: number`
- `timezone` — `string`  
    Timezone identifier as defined in the IANA Time Zone Database
- `archivedAt` — `datetime: ISO 8601`
- `inviteOnly` — `boolean`
- `projectId` — `string`  
    Parent project ID Max length: 40

## Example

```
curl -v 'https://developer.api.autodesk.com/forma/site/v1alpha/sites/:siteId' \
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
  "inviteOnly": "",
  "projectId": ""
}
```

---
원본 문서: https://aps.autodesk.com/en/docs/forma/v1/reference/http-reference/site-getsite-GET
