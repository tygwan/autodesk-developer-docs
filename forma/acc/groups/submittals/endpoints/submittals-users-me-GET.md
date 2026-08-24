---
operation_id: submittals-users-me-GET
method: GET
path: /construction/submittals/v2/projects/{projectId}/users/me
group: "Submittals"
auth_context: user context required
scopes: [data:read]
surface: http
verification: docs-only
---

# Retrieves the Autodesk ID, assigned roles, and permitted actions for the current user within a specified project

```http
GET https://developer.api.autodesk.com/construction/submittals/v2/projects/:projectId/users/me
```

| | |
| --- | --- |
| **인증 컨텍스트** | user context required |
| **필요 스코프** | `data:read` |
| **데이터 포맷** | JSON |
| **그룹** | Submittals |

Retrieves the Autodesk ID, assigned roles, and permitted actions for the current user within a specified project.

## 요청

### URI 파라미터

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `projectId` | string: UUID |  | The ID of the project. Use the Data Management API to retrieve the project ID. For more information, see the Retrieve a Project ID tutorial. You need to convert the project ID into a project ID for the Forma API by removing the “b." prefix. For example, a project ID of b.a4be0c34a-4ab7 translates to a project ID of a4be0c34a-4ab7. |

### 헤더

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `Authorization` | string | **필수** | Must be Bearer <token>, where <token> is a three-legged access token obtained via an Authorization Code flow or a Secure Service Account (SSA) flow. The SSA flow is designed for headless server-to-server operations. While it functions like a two-legged flow (no user interaction), it is classified as three-legged because it preserves user context. |

## 응답

| 코드 | 의미 | 설명 |
| --- | --- | --- |
| `200` | OK | Returns user details. |
| `401` | Unauthorized | Invalid or missing authorization header. Verify the Bearer token and try again. |
| `403` | Forbidden | The user is not authorized to perform this action. |
| `404` | Not Found | The specified resource was not found. |
| `500` | Internal Server Error | An unexpected error occurred on the server while processing the request. |

### 응답 본문 (200)

- `id` — `string`  
    The AutodeskId for the current user.
- `roles` — `array: string`  
    The roles assigned to the user in Submittals. Possible values: 1 - Manager, 2 - User, 4 - Admin
- `permittedActions` — `array: object`  
    A list of actions that the user is allowed to perform
  - `id` — `string`  
      ID of the action in the format type_of_object::action. For example, item::create, Spec::create.
  - `fields` — `object`  
      A mapping of field names to lists of possible values for each field, specific to the associated action. An empty array indicates that there is no specific set of values for those fields. For example, in the action Spec::create, fields might contain mapping for title (title) and identifier (identifier).
  - `mandatoryFields` — `array: string`  
      A subset of fields (fields) that are required to perform specific actions, such as creating or transitioning a submittal item. The required fields depend on the user’s role and the action. For example, creating a submittal item in the mgr-1 state as a manager or in the sbc-1 state as a subcontractor requires different fields. For example, [stateId, specId, title, typeId, manager, managerType].
  - `transitions` — `array: object`  
      list of possible transitions
    - `id` — `string`  
        The ID of the transition in the format from-state::to-state. Possible values: create::mgr-1, create::sbc-1.
    - `name` — `string`  
        The descriptive name of the transition. Possible values: Create, Send to Manager, Send to void.
    - `stateFrom` — `object`  
        The starting state of the transition.
      - `id` — `string`  
          The unique ID of the starting state. Possible values: create, mgr-1, sbc-1. A rev (review), refers to the state where a submittal item is undergoing revisions or is being reviewed.
      - `name` — `string`  
          The name of the starting state. Possible values: Create, Manager Review, Review.
    - `stateTo` — `object`  
        The target state of the transition.
      - `id` — `string`  
          The unique ID of the target state. For example, mgr-1, mgr-2, void.
      - `name` — `string`  
          The name of the target state. For example, Manager Review, Manager Final Review, Void.
    - `transitionFields` — `array: string`  
        Fields that are used in the transition. For example, [subcontractor, subcontractorType, watchers, responseId].
    - `mandatoryFields` — `array: string`  
        A list of required fields for the transition. For example, [responseId].
    - `actionId` — `string`  
        Not relevant

## Example

```
curl -v 'https://developer.api.autodesk.com/construction/submittals/v2/projects/9eae7d59-1469-4389-bfb2-4114e2ba5545/users/me' \
  -H 'Authorization: Bearer AuIPTf4KYLTYGVnOHQ0cuolwCW2a'
```

```
{
  "id": "GJDGNLSX7B8T",
  "roles": [
    "1",
    "2",
    "4"
  ],
  "permittedActions": [
    {
      "id": "Item::create",
      "fields": {},
      "mandatoryFields": [
        ""
      ],
      "transitions": [
        {
          "id": "create::mgr-1",
          "name": "Create",
          "stateFrom": {
            "id": "create",
            "name": "Create"
          },
          "stateTo": {
            "id": "mgr-1",
            "name": "MGR 1"
          },
          "transitionFields": [
            "manager",
            "managerType",
            "stateId",
            "title",
            "description",
            "priority"
          ],
          "mandatoryFields": [
            [
              "manager",
              "managerType",
              "stateId",
              "title"
            ]
          ],
          "actionId": "ITEM_TRANSITION_CREATE_MGR1"
        }
      ]
    }
  ]
}
```

## 같은 그룹의 다른 엔드포인트

- `GET /construction/submittals/v2/projects/{projectId}/async-jobs/{asyncJobId}` — [Retrieves the current status and result of an asynchronous job](./submittals-async-jobs-asyncJobId-GET.md)
- `PATCH /construction/submittals/v2/projects/{projectId}/items/{itemId}/attachments/{attachmentId}` — [Updates the upload status of an attachment associated with a submittal item](./submittals-attachments-attachmentId-PATCH.md)
- `POST /construction/submittals/v2/projects/{projectId}/items/{itemId}/attachments` — [Adds an attachment to a submittal item within a project](./submittals-attachments-POST.md)
- `POST /construction/submittals/v2/projects/{projectId}/settings/custom-identifier:change-sequence-type` — [Changes the custom identifier sequence type for the project](./submittals-custom-identifierchange-sequence-type-POST.md)
- `GET /construction/submittals/v2/projects/{projectId}/item-types` — [Retrieves all submittal itme types for the specified project](./submittals-item-types-GET.md)
- `GET /construction/submittals/v2/projects/{projectId}/item-types/{id}` — [Retrieve the information about a single submittal type](./submittals-item-types-id-GET.md)
- `GET /construction/submittals/v2/projects/{projectId}/items` — [Retrieves information about all the submittal items in a project that the user has permission to view](./submittals-items-GET.md)
- `GET /construction/submittals/v2/projects/{projectId}/items/{itemId}/attachments` — [Retrieve information about attachments associated with a specified item](./submittals-items-itemId-attachments-GET.md)
- `GET /construction/submittals/v2/projects/{projectId}/items/{itemId}` — [Retrieve information about a single submittal item that the user has permission to view](./submittals-items-itemId-GET.md)
- `PATCH /construction/submittals/v2/projects/{projectId}/items/{itemId}` — [Updates specific attributes of an existing submittal item](./submittals-items-itemId-PATCH.md)
- `POST /construction/submittals/v2/projects/{projectId}/items/:itemId:transition` — [Items](./submittals-items-itemIdtransition-POST.md)
- `POST /construction/submittals/v2/projects/{projectId}/items` — [Creates a new submittal item in the specified project](./submittals-items-POST.md)
- `GET /construction/submittals/v2/projects/{projectId}/items:next-custom-identifier` — [Retrieves the next available custom identifier for a submittal item in a project](./submittals-itemsnext-custom-identifier-GET.md)
- `POST /construction/submittals/v2/projects/{projectId}/items:validate-custom-identifier` — [Validates a custom identifier for a submittal item in a project](./submittals-itemsvalidate-custom-identifier-POST.md)
- `GET /construction/submittals/v2/projects/{projectId}/settings/mappings` — [Retrieves users, roles, and companies assigned the manager role in the current project](./submittals-mappings-GET.md)
- `DELETE /construction/submittals/v2/projects/{projectId}/settings/mappings/{mappingId}` — [Deletes an admin mapping from the project](./submittals-mappings-mappingId-DELETE.md)
- `POST /construction/submittals/v2/projects/{projectId}/settings/mappings` — [Creates an admin mapping, assigning a user, role, or company as a Submittal Manager in the project](./submittals-mappings-POST.md)
- `GET /construction/submittals/v2/projects/{projectId}/metadata` — [Retrieves project metadata and static values needed for creating submittal items and translating retrieved data](./submittals-metadata-GET.md)
- `GET /construction/submittals/v2/projects/{projectId}/packages` — [Retrieve all the packages for the specified project](./submittals-packages-GET.md)
- `GET /construction/submittals/v2/projects/{projectId}/packages/{id}` — [Retrieve details about a single package](./submittals-packages-id-GET.md)
- `GET /construction/submittals/v2/projects/{projectId}/responses` — [Retrieves all the responses for the specified project](./submittals-responses-GET.md)
- `GET /construction/submittals/v2/projects/{projectId}/responses/{id}` — [Retrieve details about a single submittal response for the specified project, see the Help documentation](./submittals-responses-id-GET.md)
- `GET /construction/submittals/v2/projects/{projectId}/items/{itemId}/revisions` — [Items](./submittals-revisions-GET.md)
- `GET /construction/submittals/v2/projects/{projectId}/specs` — [Retrieve all the spec sections for the specified project](./submittals-specs-GET.md)
- `GET /construction/submittals/v2/projects/{projectId}/specs/{id}` — [Retrieve the details about a single spec section](./submittals-specs-id-GET.md)
- `POST /construction/submittals/v2/projects/{projectId}/specs` — [Creates a spec section to organize and categorize submittals](./submittals-specs-POST.md)
- `GET /construction/submittals/v2/projects/{projectId}/items/{itemId}/steps` — [Retrieves a list of review steps associated with a specific submittal item](./submittals-steps-GET.md)
- `GET /construction/submittals/v2/projects/{projectId}/items/{itemId}/steps/{stepId}` — [Retrieves information about a single review step associated with a submittal item](./submittals-steps-stepId-GET.md)
- `GET /construction/submittals/v2/projects/{projectId}/items/{itemId}/steps/{stepId}/tasks` — [Retrieves a list of tasks associated with a specific review step of a submittal item in a project](./submittals-tasks-GET.md)
- `GET /construction/submittals/v2/projects/{projectId}/items/{itemId}/steps/{stepId}/tasks/{taskId}` — [Retrieves details of a specific task associated with a review step in a submittal item](./submittals-tasks-taskId-GET.md)
- `POST /construction/submittals/v2/projects/{projectId}/items/{itemId}/steps/{stepId}/tasks/:taskId:close` — [Closes a task by adding a required review response, marking it as complete within the submittal review workflow](./submittals-tasks-taskIdclose-POST.md)
- `GET /construction/submittals/v2/projects/{projectId}/templates` — [Retrieves a list of review templates available for a project](./submittals-templates-GET.md)

---
원본 문서: https://aps.autodesk.com/en/docs/acc/v1/reference/http/submittals-users-me-GET
