---
operation_id: rfis-attributes-POST
method: POST
path: /construction/rfis/v3/projects/{projectId}/attributes
group: "RFIs"
auth_context: user context required
scopes: [data:write, data:create]
surface: http
verification: docs-only
---

# Creates a custom attribute definition for a project

```http
POST https://developer.api.autodesk.com/construction/rfis/v3/projects/:projectId/attributes
```

| | |
| --- | --- |
| **인증 컨텍스트** | user context required |
| **필요 스코프** | `data:write`, `data:create` |
| **데이터 포맷** | JSON |
| **그룹** | RFIs |

Creates a custom attribute definition for a project.

## 요청

### URI 파라미터

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `projectId` | string |  | The ID of the project. Use the Data Management API to retrieve the project ID. For more information, see the Retrieve a Project ID tutorial. You need to convert the project ID into a project ID for the Forma API by removing the “b." prefix. For example, a project ID of b.a4be0c34a-4ab7 translates to a project ID of a4be0c34a-4ab7. |

### 헤더

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `Authorization` | string | **필수** | Must be Bearer <token>, where <token> is a three-legged access token obtained via an Authorization Code flow or a Secure Service Account (SSA) flow. The SSA flow is designed for headless server-to-server operations. While it functions like a two-legged flow (no user interaction), it is classified as three-legged because it preserves user context. |
| `Content-Type` | string | **필수** | Must be application/json |

### 요청 본문

- `name` — `string` **(필수)**  
    The name of the custom attribute as displayed in the UI. Max length: 50
- `type` — `enum:string` **(필수)**  
    The type of the attribute. Possible values: text, numeric
- `description` — `string`  
    The description of the attribute as shown in the UI. Max length: 1000
- `status` — `enum:string` **(필수)**  
    The display status of the attribute in the UI. Possible values: active, inactive, hidden.
- `multipleChoice` — `boolean`  
    true: users can select more than one value for this attribute. false: (default) users can select only one value.
- `possibleValues` — `array: object`  
    A list of possible values for the attribute.
  - `id` — `string: UUID`  
      The unique ID of the attribute value.
  - `name` — `string,integer,null` **(필수)**  
      The name of the attribute value as shown in the UI. Max length: 100

## 응답

| 코드 | 의미 | 설명 |
| --- | --- | --- |
| `201` | Created | Created |
| `400` | Bad Request | The parameters are invalid |
| `401` | Unauthorized | The provided bearer token is not valid |
| `403` | Forbidden | The user or service represented by the bearer token does not have permission to perform this operation |
| `500` | Internal Server Error | An unknown error occurred on the server |

### 응답 본문 (201)

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

## Example

```
curl -v 'https://developer.api.autodesk.com/construction/rfis/v3/projects/:projectId/attributes' \
  -X 'POST' \
  -H 'Authorization: Bearer AuIPTf4KYLTYGVnOHQ0cuolwCW2a' \
  -H 'Content-Type: application/json' \
  -d '{
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
      }'
```

```
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
```

## 같은 그룹의 다른 엔드포인트

- `GET /construction/rfis/v3/projects/{projectId}/attributes` — [Retrieves all custom attribute definitions for a project](./rfis-attributes-GET.md)
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
원본 문서: https://aps.autodesk.com/en/docs/acc/v1/reference/http/rfis-attributes-POST
