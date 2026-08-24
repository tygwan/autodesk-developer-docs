---
operation_id: submittals-steps-stepId-GET
method: GET
path: /construction/submittals/v2/projects/{projectId}/items/{itemId}/steps/{stepId}
group: "Submittals"
auth_context: user context required
scopes: [data:read]
surface: http
verification: docs-only
---

# Retrieves information about a single review step associated with a submittal item

```http
GET https://developer.api.autodesk.com/construction/submittals/v2/projects/:projectId/items/:itemId/steps/:stepId
```

| | |
| --- | --- |
| **인증 컨텍스트** | user context required |
| **필요 스코프** | `data:read` |
| **데이터 포맷** | JSON |
| **그룹** | Submittals |

Retrieves information about a single review step associated with a submittal item.

## 요청

### URI 파라미터

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `projectId` | string: UUID |  | The ID of the project. Use the Data Management API to retrieve the project ID. For more information, see the Retrieve a Project ID tutorial. You need to convert the project ID into a project ID for the Forma API by removing the “b." prefix. For example, a project ID of b.a4be0c34a-4ab7 translates to a project ID of a4be0c34a-4ab7. |
| `itemId` | string |  | The ID of the submittal item. To find the item ID, call GET items. |
| `stepId` | string |  | The ID of the review step associated with the submittal item. To find the step ID, call GET steps. |

### 헤더

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `Authorization` | string | **필수** | Must be Bearer <token>, where <token> is a three-legged access token obtained via an Authorization Code flow or a Secure Service Account (SSA) flow. The SSA flow is designed for headless server-to-server operations. While it functions like a two-legged flow (no user interaction), it is classified as three-legged because it preserves user context. |

## 응답

| 코드 | 의미 | 설명 |
| --- | --- | --- |
| `200` | OK | Submittal item step successfully retrieved. |
| `400` | Bad Request | The request could not be understood by the server due to malformed syntax or missing request headers. |
| `401` | Unauthorized | Invalid or missing authorization header. Verify the Bearer token and try again. |
| `403` | Forbidden | The user is not authorized to perform this action. |
| `404` | Not Found | The specified resource was not found. |
| `500` | Internal Server Error | An unexpected error occurred on the server while processing the request. |

### 응답 본문 (200)

- `id` — `string: UUID`  
    The internal, globally unique identifier (UUID) for the step.
- `itemId` — `string: UUID`  
    The ID of the item associated with the step.
- `status` — `enum:string`  
    The current status of the step. Possible values: not-started, in-progress, completed.
- `stepNumber` — `number`  
    The number representing the order of the steps, where 1 is the first step.
- `daysToRespond` — `number`  
    Specifies a dynamic due date. When the step starts, the due date is calculated based on this field.
- `dueDate` — `string`  
    The due date of the step in the format YYYY-MM-DD (ISO 8601) in UTC. For example, 2018-02-15.
- `tasks` — `array: object`  
    The list of tasks associated with the step.
  - `id` — `string: UUID`  
      The internal, globally unique identifier (UUID) for the task.
  - `stepId` — `string: UUID`  
      The ID of the review step associated with the task.
  - `status` — `enum:string`  
      The current status of the task. Possible values: not-started, in-progress, completed.
  - `assignedTo` — `string`  
      The Autodesk ID or member group ID of the user, company, or role assigned to the task.
  - `assignedToType` — `enum:string`  
      Specifies whether the task is assigned to a user, company, or role. Possible values: 1 (user), 2 (company), 3 (role).
  - `isRequired` — `boolean`  
      true: the task is required to complete the step. false: (default) the task is not required to complete the step.
  - `stepDueDate` — `string`  
      The due date of the related step, formatted as YYYY-MM-DD (ISO 8601) in UTC. For example, 2025-01-20.
  - `responseId` — `string: UUID`  
      The ID of the response associated with the task, linking to the specific feedback or action taken.
  - `responseComment` — `string`  
      The content of the response comment, providing feedback or instructions related to the task.
  - `respondedAt` — `datetime: ISO 8601`  
      The date and time when the response was added, formatted as YYYY-MM-DDTHH:mm:ss.SSSSSSZ (ISO 8601) in UTC. For example, 2025-01-20T12:00:00.198466Z.
  - `respondedBy` — `string`  
      The Autodesk ID of the user who provided the response to the task.
  - `createdAt` — `datetime: ISO 8601`  
      The date and time when the task was originally created, formatted as YYYY-MM-DDTHH:mm:ss.SSSSSSZ (ISO 8601) in UTC. For example, 2025-01-20T12:00:00.198466Z.
  - `createdBy` — `string`  
      The Autodesk ID of the user who created the task.
  - `updatedAt` — `datetime: ISO 8601`  
      The date and time when the task was last updated, formatted as YYYY-MM-DDTHH:mm:ss.SSSSSSZ (ISO 8601) in UTC. For example, 2025-01-20T12:00:00.198466Z.
  - `updatedBy` — `string`  
      The Autodesk ID of the user who last updated the task.
  - `startedAt` — `datetime: ISO 8601`  
      The date and time when the related step was marked as started (In Progress), formatted as YYYY-MM-DDTHH:mm:ss.SSSSSSZ (ISO 8601) in UTC. For example, 2025-01-20T12:00:00.198466Z.
  - `completedAt` — `datetime: ISO 8601`  
      The date and time when the task was completed, formatted as YYYY-MM-DDTHH:mm:ss.SSSSSSZ (ISO 8601) in UTC. For example, 2025-01-20T12:00:00.198466Z.
  - `completedBy` — `string`  
      The Autodesk ID of the user who completed the task.
  - `permittedActions` — `array: object`  
      A list of actions that the user is allowed to perform on the task within the submittal workflow.
    - `id` — `string`  
        The ID of the action in the format type_of_object::action. For example, partial_update.
    - `fields` — `object`  
        A mapping of field names to lists of possible values for each field. Note that an empty array indicates that there is no specific set of values for those fields.
    - `mandatoryFields` — `array: string`  
        Fields required to perform specific actions, such as closing a task. The required fields depend on the user’s role and the action.
    - `transitions` — `array: string`  
        Not relevant
- `createdAt` — `datetime: ISO 8601`  
    The date and time when the step was created, formatted as YYYY-MM-DDTHH:mm:ss.SSSSSSZ (ISO 8601) in UTC. For example, 2025-01-20T12:00:00.198466Z.
- `createdBy` — `string`  
    The Autodesk ID of the user that created the step.
- `updatedAt` — `datetime: ISO 8601`  
    The date and time when the step was last updated, formatted as YYYY-MM-DDTHH:mm:ss.SSSSSSZ (ISO 8601) in UTC. For example, 2025-01-20T12:00:00.198466Z.
- `updatedBy` — `string`  
    The Autodesk ID of the user that updated the step.
- `startedAt` — `datetime: ISO 8601`  
    The date and time when the step transitioned to In Progress in the backend. This corresponds to the step being marked as Started in the UI, formatted as YYYY-MM-DDTHH:mm:ss.SSSSSSZ (ISO 8601) in UTC. For example, 2025-01-20T12:00:00.198466Z.
- `completedAt` — `datetime: ISO 8601`  
    The date and time when the step was completed, formatted as YYYY-MM-DDTHH:mm:ss.SSSSSSZ (ISO 8601) in UTC. For example, 2025-01-20T12:00:00.198466Z.
- `permittedActions` — `array: object`  
    A list of actions that the user is allowed to perform on the step.
  - `id` — `string`  
      The ID of the action in the format type_of_object::action. For example, Step::partial_update.
  - `fields` — `object`  
      A mapping of field names to lists of possible values for each field. If a field does not require a specific value, it will be returned as an empty array.
  - `mandatoryFields` — `array: string`  
      A list of fields required to perform specific actions on a step, such as tasks for the Step::partial_update action. The required fields depend on the user’s role and the action.
  - `transitions` — `array: string`  
      Not relevant

## Example

```
curl -v 'https://developer.api.autodesk.com/construction/submittals/v2/projects/9eae7d59-1469-4389-bfb2-4114e2ba5545/items/767b5888-2c6a-413d-8487-613966dd64ce/steps/b79059cc-611b-4769-80b7-f8db9a2dfcdf' \
  -H 'Authorization: Bearer AuIPTf4KYLTYGVnOHQ0cuolwCW2a'
```

```
{
  "id": "84eb33cd-4a42-42b7-95dd-3900035c3407",
  "itemId": "2df3b4cf-16f4-496e-8173-7125f31e3dd1",
  "status": "in-progress",
  "stepNumber": 1,
  "daysToRespond": 10,
  "dueDate": "2024-02-15",
  "tasks": [
    {
      "id": "4d539b8f-c522-4f1c-9743-d7fdfa9e9c9e",
      "stepId": "d6635799-e973-4c9c-80d8-fb4b3591ef6b",
      "status": "completed",
      "assignedTo": "WD43ZJGKDFLFH",
      "assignedToType": "1",
      "isRequired": true,
      "stepDueDate": "2024-02-15",
      "responseId": "2d46d30b-7dc1-4a65-991d-d739a1381eb8",
      "responseComment": "Approved without changes.",
      "respondedAt": "2024-02-03T12:09:24.198466Z",
      "respondedBy": "WD43ZJGKDFLFH",
      "createdAt": "2024-03-21T23:04:49.406Z",
      "createdBy": "WD43ZJGKDFLFH",
      "updatedAt": "2024-03-24T23:04:49.406674Z",
      "updatedBy": "WD43ZJGKDFLFH",
      "startedAt": "2024-03-21T23:15:49.406894Z",
      "completedAt": "2024-03-24T23:04:49.4066344Z",
      "completedBy": "WD43ZJGKDFLFH",
      "permittedActions": [
        {
          "id": "Task::partial_update",
          "fields": {
            "responseComment": [],
            "responseId": []
          },
          "mandatoryFields": [
            "responseId"
          ],
          "transitions": [
            ""
          ]
        }
      ]
    }
  ],
  "createdAt": "2024-03-21T23:04:49.406Z",
  "createdBy": "WD43ZJGKDFLFH",
  "updatedAt": "2024-03-24T23:04:49.406Z",
  "updatedBy": "WD43ZJGKDFLFH",
  "startedAt": "2024-03-21T23:15:49.406Z",
  "completedAt": "2024-03-24T23:04:49.406Z",
  "permittedActions": [
    {
      "id": "Step::overwrite_step",
      "fields": {
        "tasks": []
      },
      "mandatoryFields": [
        "tasks"
      ],
      "transitions": [
        ""
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
- `GET /construction/submittals/v2/projects/{projectId}/items/{itemId}/steps/{stepId}/tasks` — [Retrieves a list of tasks associated with a specific review step of a submittal item in a project](./submittals-tasks-GET.md)
- `GET /construction/submittals/v2/projects/{projectId}/items/{itemId}/steps/{stepId}/tasks/{taskId}` — [Retrieves details of a specific task associated with a review step in a submittal item](./submittals-tasks-taskId-GET.md)
- `POST /construction/submittals/v2/projects/{projectId}/items/{itemId}/steps/{stepId}/tasks/:taskId:close` — [Closes a task by adding a required review response, marking it as complete within the submittal review workflow](./submittals-tasks-taskIdclose-POST.md)
- `GET /construction/submittals/v2/projects/{projectId}/templates` — [Retrieves a list of review templates available for a project](./submittals-templates-GET.md)
- `GET /construction/submittals/v2/projects/{projectId}/users/me` — [Retrieves the Autodesk ID, assigned roles, and permitted actions for the current user within a specified project](./submittals-users-me-GET.md)

---
원본 문서: https://aps.autodesk.com/en/docs/acc/v1/reference/http/submittals-steps-stepId-GET
