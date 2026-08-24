---
operation_id: geometries-batchcreategeometries-POST
method: POST
path: /forma/basic/v1alpha/geometries/batch-create
group: "basic"
auth_context: user context required
scopes: [data:read, data:write]
surface: http
verification: docs-only
---

# Batch Create Basic Geometries

```http
POST https://developer.api.autodesk.com/forma/basic/v1alpha/geometries/batch-create
```

| | |
| --- | --- |
| **인증 컨텍스트** | user context required |
| **필요 스코프** | `data:read`, `data:write` |
| **데이터 포맷** | JSON |
| **그룹** | basic |

This endpoint is used to create multiple basic geometries in a single request and returns an array of URNs (Uniform Resource Names) for each element that is created

## 요청

### 쿼리 파라미터

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `authcontext` | string | **필수** | Authcontext for the request, such as the Forma project context. |

### 헤더

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `Authorization` | string | **필수** | Must be Bearer <token>, where <token> is obtained via a three-legged OAuth flow. |
| `X-Ads-Region` | string |  | Specifies the geographical location (region) of the service. US or EMEA. Defaults to US. |
| `Content-Type` | string | **필수** | Must be application/json |

### 요청 본문

- `id` — `string` **(필수)**
- `geometry` **(필수)**
  - `anyOf` **(필수)**
    - `0` — `object` **(필수)**
      - `type` — `enum:string` **(필수)**  
          Will always be: polygon
      - `coordinates` — `array: array` **(필수)**
      - `color` — `string`
      - `opacity` — `number`
      - `lineWidth` — `number`
    - `1` — `object` **(필수)**
      - `type` — `enum:string` **(필수)**  
          Will always be: extrudedPolygon
      - `coordinates` — `array: array` **(필수)**
      - `height` — `number` **(필수)**
      - `elevation` — `number` **(필수)**
    - `2` — `object` **(필수)**
      - `type` — `enum:string` **(필수)**  
          Will always be: line
      - `coordinates` — `array: array` **(필수)**
      - `color` — `string`
      - `lineWidth` — `number`
- `category` — `string` **(필수)**
- `name` — `string` **(필수)**
- `userData` — `object` **(필수)**
  - `*` **(필수)**

## 응답

| 코드 | 의미 | 설명 |
| --- | --- | --- |
| `201` | Created | The response contains an array of URNs (Uniform Resource Names) for each element that is created |
| `403` | Forbidden | Unauthorized |

### 응답 본문 (201)

- `urn` — `string`  
    Max length: 200

## Example

```
curl -v 'https://developer.api.autodesk.com/forma/basic/v1alpha/geometries/batch-create?authcontext=pro_123' \
  -X 'POST' \
  -H 'Authorization: Bearer AuIPTf4KYLTYGVnOHQ0cuolwCW2a' \
  -H 'Content-Type: application/json' \
  -d '[
        {
          "id": "",
          "geometry": {},
          "category": "",
          "name": "",
          "userData": {}
        }
      ]'
```

```
[
  {
    "urn": "urn:adsk-forma-elements:terrain:pro_test:24c99081-1cbd-449b-9d11-34a8a89c67c3:1707486855123"
  },
  {
    "urn": "urn:adsk-forma-elements:terrain:pro_test:24c99081-1cbd-449b-9d11-34a8a89c67c3:1707486855123"
  }
]
```

---
원본 문서: https://aps.autodesk.com/en/docs/forma/v1/reference/http-reference/geometries-batchcreategeometries-POST
