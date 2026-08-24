---
operation_id: proposal-putproposal-PUT
method: PUT
path: /forma/proposal/v1alpha/proposals/{proposalId}/revisions/{revision}
group: "proposal"
auth_context: user context required
scopes: [data:read, data:write]
surface: http
verification: docs-only
---

# Update a proposal

```http
PUT https://developer.api.autodesk.com/forma/proposal/v1alpha/proposals/{proposalId}/revisions/{revision}
```

| | |
| --- | --- |
| **인증 컨텍스트** | user context required |
| **필요 스코프** | `data:read`, `data:write` |
| **데이터 포맷** | JSON |
| **그룹** | proposal |

Update a proposal

## 요청

### URI 파라미터

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `proposalId` | string |  |  |
| `revision` | string |  |  |

### 쿼리 파라미터

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `authcontext` | string | **필수** | The authcontext of the resource you are requesting. |

### 헤더

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `Authorization` | string | **필수** | Must be Bearer <token>, where <token> is obtained via a three-legged OAuth flow. |
| `X-Ads-Region` | string |  | Specifies the geographical location (region) of the service. US or EMEA. Defaults to US. |
| `Content-Type` | string | **필수** | Must be application/json |

### 요청 본문

- `name` — `string`  
    A human-readable name for the proposal
- `terrain` — `object` **(필수)**  
    The terrain element (required). Must be an element from the “terrain” element system
  - `urn` — `string` **(필수)**  
      A Forma element URN
  - `key` — `string` **(필수)**  
      Unique id under parent. Used to build up paths. Prefer short values for space efficiency. Since element URNs cannot be used to identify _instances_ of elements, children have unique keys under their parent which are used to build up a path in context of the root of an element tree.
  - `transform` — `array: number`  
      A 4x4 matrix representing the transformation of the element
  - `name` — `string`  
      User defined naming of this specific reference, typically used to distinguish elements in eg. UI listings
- `base` — `object` **(필수)**  
    The base element. Must be an element from the “group” element system
  - `urn` — `string` **(필수)**  
      A Forma element URN
  - `key` — `string` **(필수)**  
      Unique id under parent. Used to build up paths. Prefer short values for space efficiency. Since element URNs cannot be used to identify _instances_ of elements, children have unique keys under their parent which are used to build up a path in context of the root of an element tree.
  - `transform` — `array: number`  
      A 4x4 matrix representing the transformation of the element
  - `name` — `string`  
      User defined naming of this specific reference, typically used to distinguish elements in eg. UI listings
- `children` — `array: object` **(필수)**  
    A collection of child elements
  - `urn` — `string` **(필수)**  
      A Forma element URN
  - `key` — `string` **(필수)**  
      Unique id under parent. Used to build up paths. Prefer short values for space efficiency. Since element URNs cannot be used to identify _instances_ of elements, children have unique keys under their parent which are used to build up a path in context of the root of an element tree.
  - `transform` — `array: number`  
      A 4x4 matrix representing the transformation of the element
  - `name` — `string`  
      User defined naming of this specific reference, typically used to distinguish elements in eg. UI listings

## 응답

| 코드 | 의미 | 설명 |
| --- | --- | --- |
| `200` | OK |  |
| `400` | Bad Request | Malformed request. The request body is not valid according to the schema. See response for details. |
| `401` | Unauthorized | Bearer token is not valid |
| `403` | Forbidden | Token does not have access to the specified project. Are you in the right region? |
| `404` | Not Found | The specified proposal does not exist |
| `412` |  | Precondition failed. One or more preconditions for this endpoint was not met. See response for details. |
| `500` | Internal Server Error | Internal server error |

### 응답 본문 (200)

- `urn` — `string`

## Example

```
curl -v 'https://developer.api.autodesk.com/forma/proposal/v1alpha/proposals/:proposalId/revisions/:revision?authcontext=pro_123' \
  -X 'PUT' \
  -H 'Authorization: Bearer AuIPTf4KYLTYGVnOHQ0cuolwCW2a' \
  -H 'Content-Type: application/json' \
  -d '{
        "name": "My proposal",
        "terrain": {
          "urn": "urn:adsk-forma-elements:terrain:pro_123:id134unique:1707471576213",
          "key": "123-terrain"
        },
        "base": {
          "urn": "urn:adsk-forma-elements:group:pro_123:id204unique:1707471576542",
          "key": "123-base"
        },
        "children": []
      }'
```

```
{
  "urn": "urn:adsk-forma-elements:proposal:pro_123:id134unique:1707471576213"
}
```

## 같은 그룹의 다른 엔드포인트

- `POST /forma/proposal/v1alpha/proposals` — [Create a proposal](./proposal-createproposal-POST.md)
- `GET /forma/proposal/v1alpha/proposals` — [List proposals](./proposal-listproposals-GET.md)
- `GET /forma/proposal/v1alpha/proposals/{proposalId}/revisions` — [List revisions for a proposal](./proposal-listrevisions-GET.md)

---
원본 문서: https://aps.autodesk.com/en/docs/forma/v1/reference/http-reference/proposal-putproposal-PUT
