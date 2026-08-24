---
operation_id: rfis-attributes-GET
method: GET
path: /construction/rfis/v3/projects/{projectId}/attributes
group: "RFIs"
auth_context: user context required
scopes: [data:read]
surface: http
verification: docs-only
---

# Retrieves all custom attribute definitions for a project

```http
GET https://developer.api.autodesk.com/construction/rfis/v3/projects/:projectId/attributes
```

| | |
| --- | --- |
| **인증 컨텍스트** | user context required |
| **필요 스코프** | `data:read` |
| **데이터 포맷** | JSON |
| **그룹** | RFIs |

Retrieves all custom attribute definitions for a project.

## 요청

### URI 파라미터

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `projectId` | string |  | The ID of the project. Use the Data Management API to retrieve the project ID. For more information, see the Retrieve a Project ID tutorial. You need to convert the project ID into a project ID for the Forma API by removing the “b." prefix. For example, a project ID of b.a4be0c34a-4ab7 translates to a project ID of a4be0c34a-4ab7. |

### 쿼리 파라미터

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `limit` | int |  | The number of RFIs to return in the response. Acceptable values: 1–200. Default: 10. For example, to limit the response to two items per page, use limit=2 |
| `offset` | int |  | The number of items to skip before starting to return results. For example, to begin the results from the fourth item, use offset=3. |
| `filter[status]` | array: string |  | Filters the response to only include custom attributes with the specified status. Possible values: active, inactive, hidden. |

### 헤더

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `Authorization` | string | **필수** | Must be Bearer <token>, where <token> is a three-legged access token obtained via an Authorization Code flow or a Secure Service Account (SSA) flow. The SSA flow is designed for headless server-to-server operations. While it functions like a two-legged flow (no user interaction), it is classified as three-legged because it preserves user context. |

## 응답

| 코드 | 의미 | 설명 |
| --- | --- | --- |
| `200` | OK | Success |
| `400` | Bad Request | The parameters are invalid |
| `401` | Unauthorized | The provided bearer token is not valid |
| `403` | Forbidden | The user or service represented by the bearer token does not have permission to perform this operation |
| `500` | Internal Server Error | An unknown error occurred on the server |

### 응답 본문 (200)

- `results` — `array: object`  
    The list of custom attributes.
  - `id` — `string: UUID`  
      The ID of the custom attribute definition.
  - `name` — `string`  
      The name of the custom attribute as displayed in the UI. Max length: 50
  - `type` — `enum:string`  
      The type of the attribute. Possible values: text, numeric
  - `description` — `string`  
      The description of the attribute as shown in the UI. Max length: 1000
  - `status` — `enum:string`  
      The display status of the attribute in the UI. Possible values: active, inactive, hidden.
  - `multipleChoice` — `boolean`  
      true: users can select more than one value for this attribute. false: (default) users can select only one value.
  - `possibleValues` — `array: object`  
      A list of possible values for the attribute.
    - `id` — `string: UUID`  
        The unique ID of the attribute value.
    - `name` — `string,integer,null`  
        The name of the attribute value as shown in the UI. Max length: 100
- `pagination` — `object`  
    The pagination object.
  - `limit` — `int`  
      The number of items returned per page.
  - `offset` — `int`  
      The number of items skipped before this page of results.
  - `totalResults` — `int`  
      The total number of items matching the request.

## Example

```
curl -v 'https://developer.api.autodesk.com/construction/rfis/v3/projects/:projectId/attributes' \
  -H 'Authorization: Bearer AuIPTf4KYLTYGVnOHQ0cuolwCW2a'
```

```
{
  "results": [
    {
      "id": "c911852d-5957-4145-9c8d-e7cfe9d564df",
      "name": "Attribute 1",
      "type": "text",
      "description": "This is a description of the attribute",
      "status": "active",
      "multipleChoice": false,
      "possibleValues": [
        {
          "id": "c911852d-5957-4145-9c8d-e7cfe9d564df",
          "name": "Value 1"
        }
      ]
    }
  ],
  "pagination": {
    "limit": 10,
    "offset": 0,
    "totalResults": 97
  }
}
```

## 같은 그룹의 다른 엔드포인트

- `POST /construction/rfis/v3/projects/{projectId}/attributes` — [Creates a custom attribute definition for a project](./rfis-attributes-POST.md)
- `PATCH /construction/rfis/v3/projects/{projectId}/attributes/{attributeId}` — [Updates an existing custom attribute definition for a project](./rfis-custom-attributes-attributeId-PATCH.md)
- `GET /construction/rfis/v3/projects/{projectId}/rfis/custom-identifier` — [Returns the current and next available RFI custom identifier for the project](./rfis-custom-identifier-GET.md)
- `POST /construction/rfis/v3/projects/{projectId}/search:rfis` — [RFIs](./rfis-rfi-search-POST.md)
- `GET /construction/rfis/v3/projects/{projectId}/rfi-types` — [Retrieves the list of RFI types configured for the specified project](./rfis-RFI-types-GET.md)
- `GET /construction/rfis/v3/projects/{projectId}/rfis/{rfiId}/attachments` — [Retrieves a list of attachments for a specific RFI](./rfis-rfis-id-attachments-GET.md)
- `GET /construction/rfis/v3/projects/{projectId}/rfis/{rfiId}` — [Retrieves detailed information about a specific RFI (Request for Information) in Forma](./rfis-rfis-id-GET.md)
- `PATCH /construction/rfis/v3/projects/{projectId}/rfis/{rfiId}` — [Updates an RFI](./rfis-rfis-id-PATCH.md)
- `POST /construction/rfis/v3/projects/{projectId}/rfis/{rfiId}/responses` — [Creates a response to the specified RFI](./rfis-rfis-id-responses-POST.md)
- `PATCH /construction/rfis/v3/projects/{projectId}/rfis/{rfiId}/responses/{responseId}` — [Updates an existing RFI response](./rfis-rfis-id-responses-responseId-PATCH.md)
- `POST /construction/rfis/v3/projects/{projectId}/rfis` — [Adds an RFI (request for information) to a project](./rfis-rfis-POST.md)
- `GET /construction/rfis/v3/projects/{projectId}/rfis/{rfiId}/comments` — [Retrieves a list of comments associated with a specific RFI](./rfis-rfis-rfiId-comments-GET.md)
- `POST /construction/rfis/v3/projects/{projectId}/rfis/{rfiId}/comments` — [Adds a comment to an RFI](./rfis-rfis-rfiId-comments-POST.md)
- `GET /construction/rfis/v3/projects/{projectId}/users/me` — [Retrieves information about the current user in the context of the specified project](./rfis-users-me-GET.md)
- `GET /construction/rfis/v3/projects/{projectId}/workflow` — [Workflows](./rfis-workflow-GET.md)

---
원본 문서: https://aps.autodesk.com/en/docs/acc/v1/reference/http/rfis-attributes-GET
