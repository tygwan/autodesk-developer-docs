---
operation_id: proposal-listrevisions-GET
method: GET
path: /forma/proposal/v1alpha/proposals/{proposalId}/revisions
group: "proposal"
auth_context: user context required
scopes: [data:read]
surface: http
verification: docs-only
---

# List revisions for a proposal

```http
GET https://developer.api.autodesk.com/forma/proposal/v1alpha/proposals/{proposalId}/revisions
```

| | |
| --- | --- |
| **인증 컨텍스트** | user context required |
| **필요 스코프** | `data:read` |
| **데이터 포맷** | JSON |
| **그룹** | proposal |

List revisions for a proposal

## 요청

### URI 파라미터

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `proposalId` | string |  | The proposal ID |

### 쿼리 파라미터

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `authcontext` | string | **필수** | The authcontext of the resource you are requesting. |
| `limit` | int |  | Limit the number of results returned. Min 1, max 100, default 100. |
| `cursorState` | string |  | The cursor state from the previous response |

### 헤더

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `Authorization` | string | **필수** | Must be Bearer <token>, where <token> is obtained via a three-legged OAuth flow. |
| `X-Ads-Region` | string |  | Specifies the geographical location (region) of the service. US or EMEA. Defaults to US. |

## 응답

| 코드 | 의미 | 설명 |
| --- | --- | --- |
| `200` | OK | The response will include a list of proposals revisions and pagination details to retrieve the next page. |
| `400` | Bad Request | Malformed request. The request body is not valid according to the schema. See response for details. |
| `401` | Unauthorized | Bearer token is not valid |
| `403` | Forbidden | Token does not have access to the specified project. Are you in the right region? |
| `404` | Not Found | The specified proposal does not exist |
| `412` |  | Precondition failed. One or more preconditions for this endpoint was not met. See response for details. |
| `500` | Internal Server Error | Internal server error |

### 응답 본문 (200)

- `results` — `array: object`  
    List of proposal elements at the specified page.
  - `urn` — `string`  
      A Forma element URN
  - `metadata` — `object`  
      Metadata about an element. Does not describe the element itself, but rather the context in which it has been created/updated
    - `predecessor` — `string`  
        Urn pointer to the previous revision of this element.
    - `createdAt` — `string`  
        ISO8601 timestamp of when the element was created
    - `createdBy` — `string`
  - `properties` — `object`
    - `category` — `enum:string`  
        Will always be: proposal
    - `name` — `string`  
        Name of proposal
  - `children` — `array: object`  
      A collection of child elements
    - `urn` — `string`  
        A Forma element URN
    - `key` — `string`  
        Unique id under parent. Used to build up paths. Prefer short values for space efficiency. Since element URNs cannot be used to identify _instances_ of elements, children have unique keys under their parent which are used to build up a path in context of the root of an element tree.
    - `transform` — `array: number`  
        A 4x4 matrix representing the transformation of the element
    - `name` — `string`  
        User defined naming of this specific reference, typically used to distinguish elements in eg. UI listings
- `pagination` — `object`  
    The information for paginating records returned by the endpoint.
  - `limit` — `number`  
      The limit value supplied in the request or the default value.
  - `nextUrl` — `string`  
      URL for retrieving the next page of items. If there are no more items, this field will not be present.

## Example

```
curl -v 'https://developer.api.autodesk.com/forma/proposal/v1alpha/proposals/id134unique/revisions?authcontext=pro_123&limit=100' \
  -H 'Authorization: Bearer AuIPTf4KYLTYGVnOHQ0cuolwCW2a'
```

```
{
  "results": [
    {
      "urn": "urn:adsk-forma-elements:proposal:pro_123:id134unique:1707471576213",
      "metadata": {
        "predecessor": "urn:adsk-forma-elements:basic:myauthcontext:myelementid:myrevision",
        "createdAt": "2023-10-03T13:37:00.000Z",
        "createdBy": ""
      },
      "properties": {
        "category": "proposal",
        "name": "Proposal 1"
      },
      "children": [
        {
          "urn": "urn:adsk-forma-elements:proposal:pro_123:id134unique:1707471576213",
          "key": "",
          "transform": [
            1,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            1
          ],
          "name": ""
        }
      ]
    }
  ],
  "pagination": {
    "limit": 100,
    "nextUrl": "https://developer.api.autodesk.com/forma/proposal/v1alpha/proposals/pro_123/revisions?authcontext=pro_123&cursorState=eyJwayI6eyJTIjoicHJvX3hjdWcwYnVmNG&limit=100"
  }
}
```

## 같은 그룹의 다른 엔드포인트

- `POST /forma/proposal/v1alpha/proposals` — [Create a proposal](./proposal-createproposal-POST.md)
- `GET /forma/proposal/v1alpha/proposals` — [List proposals](./proposal-listproposals-GET.md)
- `PUT /forma/proposal/v1alpha/proposals/{proposalId}/revisions/{revision}` — [Update a proposal](./proposal-putproposal-PUT.md)

---
원본 문서: https://aps.autodesk.com/en/docs/forma/v1/reference/http-reference/proposal-listrevisions-GET
