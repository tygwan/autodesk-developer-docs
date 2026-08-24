---
operation_id: rfis-workflow-GET
method: GET
path: /construction/rfis/v3/projects/{projectId}/workflow
group: "RFIs"
auth_context: user context required
scopes: [data:read]
surface: http
verification: docs-only
---

# Workflows

```http
GET https://developer.api.autodesk.com/construction/rfis/v3/projects/:projectId/workflow
```

| | |
| --- | --- |
| **인증 컨텍스트** | user context required |
| **필요 스코프** | `data:read` |
| **데이터 포맷** | JSON |
| **그룹** | RFIs |

Retrieves the workflow configuration for a given project, including the workflow type, description, and the mapping between project roles and their permitted assignees.

## 요청

### URI 파라미터

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `projectId` | string |  | The ID of the project. Use the Data Management API to retrieve the project ID. For more information, see the Retrieve a Project ID tutorial. You need to convert the project ID into a project ID for the Forma API by removing the “b." prefix. For example, a project ID of b.a4be0c34a-4ab7 translates to a project ID of a4be0c34a-4ab7. |

### 헤더

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `Authorization` | string | **필수** | Must be Bearer <token>, where <token> is a three-legged access token obtained via an Authorization Code flow or a Secure Service Account (SSA) flow. The SSA flow is designed for headless server-to-server operations. While it functions like a two-legged flow (no user interaction), it is classified as three-legged because it preserves user context. |

## 응답

| 코드 | 의미 | 설명 |
| --- | --- | --- |
| `200` | OK | OK |
| `400` | Bad Request | The parameters are invalid |
| `401` | Unauthorized | The provided bearer token is not valid |
| `403` | Forbidden | The user or service represented by the bearer token does not have permission to perform this operation |
| `500` | Internal Server Error | An unknown error occurred on the server |

### 응답 본문 (200)

- `workflowType` — `enum:string`  
    The region type of the workflow. Possible values: US, EU.
- `description` — `string`  
    A description of the workflow
- `projectRolesMapping` — `array: object`  
    A list of project roles and their corresponding permitted assignees.
  - `name` — `string`  
      The name of the project role
  - `permittedAssignees` — `array: object`  
      A list of users, companies, or roles that can be assigned to this project role.
    - `id` — `string`  
        The Autodesk ID of the user, company, or role. To find details about users, call GET users, to find details about companies, call GET companies. Note that we do not currently support finding details about roles for a project.
    - `type` — `enum:string`  
        The type of assignee. Possible values: user, company, role.

## Example

```
curl -v 'https://developer.api.autodesk.com/construction/rfis/v3/projects/:projectId/workflow' \
  -H 'Authorization: Bearer AuIPTf4KYLTYGVnOHQ0cuolwCW2a'
```

```
{
  "workflowType": "US",
  "description": "Support for RFI creation. Review and response with Creator, Manager and Reviewer workflow roles.",
  "projectRolesMapping": [
    {
      "name": "projectGC",
      "permittedAssignees": [
        {
          "id": "PER8KQPK2JRT",
          "type": "user"
        }
      ]
    }
  ]
}
```

## 같은 그룹의 다른 엔드포인트

- `GET /construction/rfis/v3/projects/{projectId}/attributes` — [Retrieves all custom attribute definitions for a project](./rfis-attributes-GET.md)
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

---
원본 문서: https://aps.autodesk.com/en/docs/acc/v1/reference/http/rfis-workflow-GET
