---
operation_id: submittals-revisions-GET
method: GET
path: /construction/submittals/v2/projects/{projectId}/items/{itemId}/revisions
group: "Submittals"
auth_context: user context required
scopes: [data:read]
surface: http
verification: docs-only
---

# Items

```http
GET https://developer.api.autodesk.com/construction/submittals/v2/projects/:projectId/items/:itemId/revisions
```

| | |
| --- | --- |
| **인증 컨텍스트** | user context required |
| **필요 스코프** | `data:read` |
| **데이터 포맷** | JSON |
| **그룹** | Submittals |

Retrieves the revision history of a specified submittal item, returning previous versions of its fields and associated workflow details. Each revision contains information about the item’s previous states.

## 요청

### URI 파라미터

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `projectId` | string: UUID |  | The ID of the project. Use the Data Management API to retrieve the project ID. For more information, see the Retrieve a Project ID tutorial. You need to convert the project ID into a project ID for the Forma API by removing the “b." prefix. For example, a project ID of b.a4be0c34a-4ab7 translates to a project ID of a4be0c34a-4ab7. |
| `itemId` | string |  | The ID of the submittal item. To find the item ID, call GET items. |

### 쿼리 파라미터

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `limit` | int |  | The maximum number of results per page. Possible values: 1- 50. Default value: 20. For example, to limit the response to two results per page, use limit=2. |
| `offset` | int |  | The number of results to skip before starting to return data. For example, to skip the first 20 results, include offset=20 in the query string. For more details, see the JSON API Paging Help documentation. |

### 헤더

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `Authorization` | string | **필수** | Must be Bearer <token>, where <token> is a three-legged access token obtained via an Authorization Code flow or a Secure Service Account (SSA) flow. The SSA flow is designed for headless server-to-server operations. While it functions like a two-legged flow (no user interaction), it is classified as three-legged because it preserves user context. |

## 응답

| 코드 | 의미 | 설명 |
| --- | --- | --- |
| `200` | OK | The request was successful, returning a list of item revisions. |
| `400` | Bad Request | The request could not be understood by the server due to malformed syntax or missing request headers. |
| `401` | Unauthorized | Invalid or missing authorization header. Verify the Bearer token and try again. |
| `403` | Forbidden | The user is not authorized to perform this action. |
| `404` | Not Found | The specified resource was not found. |
| `500` | Internal Server Error | An unexpected error occurred on the server while processing the request. |

### 응답 본문 (200)

- `pagination` — `object`  
    Describes pagination details for the response, including information about the current page and navigation to other pages.
  - `limit` — `int`  
      The maximum number of results to be displayed on each page.
  - `offset` — `int`  
      The number of results skipped before starting the current page.
  - `totalResults` — `int`  
      The overall count of results available across all pages.
  - `previousUrl` — `string`  
      The URL to retrieve the preceding page of results, if applicable. Not returned on the first page of results.
  - `nextUrl` — `string`  
      The URL to retrieve the subsequent page of results, if available. If not included, this is the last page of data.
- `results` — `array: object`  
    A list of revisions associated with the specified submittal item.
  - `itemId` — `string: UUID`  
      The unique identifier of the submittal item whose revision history is being retrieved. It remains the same across all revisions of the item. Use this ID to track changes and access previous versions. To get the most recent version of a submittal item, call GET items/:itemId.
  - `revision` — `int`  
      The version number of the submittal item, representing its revision history.
  - `manager` — `string`  
      The Autodesk ID of the user, company, or role assigned as the manager of the submittal item. In order to get more info about the manager, use: - GET projects/users to verify the actual name of the user in case the typs is a user (1). - GET companies to determine the name of the company in case the typs is a company (2). Note that we do not currently support verifying names of roles.
  - `managerType` — `enum:string`  
      The type of entity assigned as the manager of the submittal item. Possible values: 1 (user), 2 (company), 3 (role).
  - `subcontractor` — `string`  
      The Autodesk ID of the user, company, or role assigned as the subcontractor for the submittal item. In order to get more info about the subcontractor, use: - GET projects/users to verify the actual name of the user in case the typs is a user (1). - GET companies to determine the name of the company in case the typs is a company (2). Note that we do not currently support verifying names of roles.
  - `subcontractorType` — `enum:string`  
      The type of manager. Possible values: 1 (user), 2 (company), 3 (role).
  - `submitterDueDate` — `string`  
      The date when the subcontractor is expected to submit the submittal to the manager, in the following format: YYYY-MM-DD in UTC (ISO 8601). For example, 2017-02-15. This corresponds to the sbc-1 state Waiting for submission.
  - `sentToSubmitter` — `datetime: ISO 8601`  
      The date when the submittal item transitioned to the subcontractor for review, formatted as YYYY-MM-DDTHH:mm:ss.SSSSSSZ (ISO 8601) in UTC. For example, 2018-02-15T12:09:24.198466Z. This corresponds to transition to the sbc-1 state.
  - `receivedFromSubmitter` — `datetime: ISO 8601`  
      The date when the subcontractor submitted the submittal item back to the manager, formatted as YYYY-MM-DDTHH:mm:ss.SSSSSSZ (ISO 8601) in UTC. For example, 2018-02-15T12:09:24.198466Z. This corresponds to transition to the mgr-1 state.
  - `submittedBy` — `string`  
      The Autodesk ID of the user who transitioned the submittal item to the manager.
  - `managerDueDate` — `string`  
      The date by which the manager is expected to prepare the submittal item for review, formatted as YYYY-MM-DD in UTC (ISO 8601). For example, 2018-02-15. This corresponds to the mgr-1 state Open (Submitted).
  - `sentToReview` — `datetime: ISO 8601`  
      The date and time when the submittal item was transitioned to the rev state (Open - In review), formatted as ISO 8601.
  - `sentToReviewBy` — `string`  
      The Autodesk ID of the user who transitioned the submittal item to the rev state (Open - In review).
  - `receivedFromReview` — `datetime: ISO 8601`  
      The date and time when the submittal item transitioned from the rev state (Open - In Review) to the mgr-2 state (Close and distribute), formatted as YYYY-MM-DDTHH:mm:ss.SSSSSSZ (ISO 8601) in UTC. For example, 2018-02-15T12:09:24.198466Z.
  - `publishedDate` — `datetime: ISO 8601`  
      The date when the manager closed and distributed the submittal item, formatted as YYYY-MM-DDTHH:mm:ss.SSSSSSZ (ISO 8601) in UTC. For example, 2018-02-15T12:09:24.198466Z.
  - `publishedBy` — `string`  
      The Autodesk ID of the user who published the submittal item.
  - `responseId` — `string: UUID`  
      The ID of the response associated with the submittal item, linking to the specific feedback or action taken. For information about the response, call GET responses.
  - `responseComment` — `string`  
      The body of the response comment, containing feedback or instructions related to the submittal item.
  - `respondedAt` — `datetime: ISO 8601`  
      The date and time when the response was added, formatted as YYYY-MM-DDTHH:mm:ss.SSSSSSZ (ISO 8601) in UTC. For example, 2018-02-15T12:09:24.198466Z.
  - `respondedBy` — `string`  
      The Autodesk ID of the user that gave the response to the submittal item.
  - `reviewerDueDate` — `datetime: ISO 8601`  
      Not relevant
  - `steps` — `array: object`  
      A list of workflow steps for the submittal item at a specific revision.
    - `stepId` — `string: UUID`  
        The unique identifier of the step within the submittal item’s workflow for this revision.
    - `revision` — `int`  
        The revision number of the submittal item when this step was recorded.
    - `stepNumber` — `number`  
        The order of the step in the workflow at this revision. The first step is 1.
    - `daysToRespond` — `number`  
        A way to specify a dynamic due date instead of the the regular dueDate field. When the step will start the due date will be calculated and assigned according to this field.
    - `dueDate` — `string`  
        The due date for this step, in the following format: YYYY-MM-DD (ISO 8601) in UTC. For example, 2025-01-27T12:09:24.198466Z.
    - `startedAt` — `datetime: ISO 8601`  
        The date and time when the step began, formatted as YYYY-MM-DDTHH:mm:ss.SSSSSSZ (ISO 8601) in UTC. For example, 2018-02-15T12:09:24.198466Z. Note that this value will be null if not started.
    - `completedAt` — `datetime: ISO 8601`  
        The date when the step was completed, formatted as YYYY-MM-DDTHH:mm:ss.SSSSSSZ (ISO 8601) in UTC. For example, 2018-02-15T12:09:24.198466Z. Note that this value will be null if not completed.
    - `createdAt` — `datetime: ISO 8601`  
        The date when the step was created, formatted as YYYY-MM-DDTHH:mm:ss.SSSSSSZ (ISO 8601) in UTC. For example, 2018-02-15T12:09:24.198466Z.
    - `updatedAt` — `datetime: ISO 8601`  
        The date when the step was last updated, formatted as YYYY-MM-DDTHH:mm:ss.SSSSSSZ (ISO 8601) in UTC. For example, 2018-02-15T12:09:24.198466Z.
    - `tasks` — `array: object`  
        A list of tasks related to a specific step within the workflow.
      - `taskId` — `string: UUID`  
          The unique identifier of the task within this step, specific to the submittal item’s revision.
      - `stepId` — `string: UUID`  
          The ID of the step associated with this task in this revision.
      - `itemId` — `string: UUID`  
          The ID of the submittal item associated with the task.
      - `revision` — `int`  
          The revision number of the submittal item.
      - `assignedTo` — `string`  
          The Autodesk ID or member group ID of the user, company, or role assigned to the task.
      - `assignedToType` — `enum:string`  
          Specifies whether the task is assigned to a user, company, or role. Possible values: 1 (user), 2 (company), 3 (role).
      - `isRequired` — `boolean`  
          true: the task is required to complete the step. false: (default) the task is not required to complete the step.
      - `responseId` — `string`  
          The ID of the response associated with the task, linking to the specific feedback or action taken.
      - `responseComment` — `string`  
          The body of the response comment, containing feedback or instructions related to the task.
      - `respondedAt` — `datetime: ISO 8601`  
          The date and time when the response was added, formatted as YYYY-MM-DDTHH:mm:ss.SSSSSSZ (ISO 8601) in UTC. For example, 2018-02-15T12:09:24.198466Z.
      - `respondedBy` — `string`  
          The Autodesk ID of the user that gave the response to the task.
      - `startedAt` — `datetime: ISO 8601`  
          The date and time when the task started, formatted as YYYY-MM-DDTHH:mm:ss.SSSSSSZ (ISO 8601) in UTC. For example, 2018-02-15T12:09:24.198466Z.
      - `completedAt` — `datetime: ISO 8601`  
          The date and time when the task was completed, formatted as YYYY-MM-DDTHH:mm:ss.SSSSSSZ (ISO 8601) in UTC. For example, 2018-02-15T12:09:24.198466Z.
      - `completedBy` — `string`  
          The Autodesk ID of the user who completed the task.
      - `createdAt` — `datetime: ISO 8601`  
          The date and time when the task was originally created, formatted as YYYY-MM-DDTHH:mm:ss.SSSSSSZ (ISO 8601) in UTC. For example, 2018-02-15T12:09:24.198466Z.
      - `updatedAt` — `datetime: ISO 8601`  
          The date and time when the task was last updated, formatted as YYYY-MM-DDTHH:mm:ss.SSSSSSZ (ISO 8601) in UTC. For example, 2018-02-15T12:09:24.198466Z.

## Example

```
curl -v 'https://developer.api.autodesk.com/construction/submittals/v2/projects/9eae7d59-1469-4389-bfb2-4114e2ba5545/items/767b5888-2c6a-413d-8487-613966dd64ce/revisions' \
  -H 'Authorization: Bearer AuIPTf4KYLTYGVnOHQ0cuolwCW2a'
```

```
{
  "pagination": {
    "limit": 10,
    "offset": 100,
    "totalResults": 25,
    "previousUrl": "https://developer.api.autodesk.com/construction/submittals/v2/projects/9eae7d59-1469-4389-bfb2-4114e2ba5545/items/767b5888-2c6a-413d-8487-613966dd64ce/revisions?limit=5&offset=10",
    "nextUrl": null
  },
  "results": [
    {
      "itemId": "767b5888-2c6a-413d-8487-613966dd64ce",
      "revision": 2,
      "manager": "WD43ZJGKDFLFH",
      "managerType": "1",
      "subcontractor": "WD43ZJGKDFLFH",
      "subcontractorType": "1",
      "submitterDueDate": "2018-02-15",
      "sentToSubmitter": "2018-02-01T12:09:24.198466Z",
      "receivedFromSubmitter": "2018-02-01T12:09:24.198466Z",
      "submittedBy": "WD43ZJGKDFLFH",
      "managerDueDate": "2018-02-15",
      "sentToReview": "2018-02-01T12:09:24.198466Z",
      "sentToReviewBy": "WD43ZJGKDFLFH",
      "receivedFromReview": "2018-02-01T12:09:24.198466Z",
      "publishedDate": "2018-02-01T12:09:24.198466Z",
      "publishedBy": "WD43ZJGKDFLFH",
      "responseId": "2d46d30b-7dc1-4a65-991d-d739a1381eb8",
      "responseComment": "Additional details needed on material compliance.",
      "respondedAt": "2024-02-03T12:09:24.198466Z",
      "respondedBy": "WD43ZJGKDFLFH",
      "reviewerDueDate": "2018-02-01T12:09:24.198466Z",
      "steps": [
        {
          "stepId": "d6635799-e973-4c9c-80d8-fb4b3591ef6b",
          "revision": 1,
          "stepNumber": 1,
          "daysToRespond": 10,
          "dueDate": "2024-02-15",
          "startedAt": "2024-03-21T23:15:49.406000Z",
          "completedAt": "2018-02-21T23:04:49.406000Z",
          "createdAt": "2024-03-21T23:04:49.406000Z",
          "updatedAt": "2024-03-24T23:04:49.406000Z",
          "tasks": [
            {
              "taskId": "4d539b8f-c522-4f1c-9743-d7fdfa9e9c9e",
              "stepId": "d6635799-e973-4c9c-80d8-fb4b3591ef6b",
              "itemId": "2df3b4cf-16f4-496e-8173-7125f31e3dd1",
              "revision": 1,
              "assignedTo": "WD43ZJGKDFLFH",
              "assignedToType": "1",
              "isRequired": true,
              "responseId": "2d46d30b-7dc1-4a65-991d-d739a1381eb8",
              "responseComment": "Please revise and resubmit with missing specifications.",
              "respondedAt": "2024-02-03T12:09:24.198466Z",
              "respondedBy": "WD43ZJGKDFLFH",
              "startedAt": "2024-03-21T23:15:49.406Z",
              "completedAt": "2024-03-24T23:04:49.406Z",
              "completedBy": "WD43ZJGKDFLFH",
              "createdAt": "2024-03-21T23:04:49.406Z",
              "updatedAt": "2024-03-24T23:04:49.406Z"
            }
          ]
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
- `GET /construction/submittals/v2/projects/{projectId}/specs` — [Retrieve all the spec sections for the specified project](./submittals-specs-GET.md)
- `GET /construction/submittals/v2/projects/{projectId}/specs/{id}` — [Retrieve the details about a single spec section](./submittals-specs-id-GET.md)
- `POST /construction/submittals/v2/projects/{projectId}/specs` — [Creates a spec section to organize and categorize submittals](./submittals-specs-POST.md)
- `GET /construction/submittals/v2/projects/{projectId}/items/{itemId}/steps` — [Retrieves a list of review steps associated with a specific submittal item](./submittals-steps-GET.md)
- `GET /construction/submittals/v2/projects/{projectId}/items/{itemId}/steps/{stepId}` — [Retrieves information about a single review step associated with a submittal item](./submittals-steps-stepId-GET.md)
- `GET /construction/submittals/v2/projects/{projectId}/items/{itemId}/steps/{stepId}/tasks` — [Retrieves a list of tasks associated with a specific review step of a submittal item in a project](./submittals-tasks-GET.md)
- `GET /construction/submittals/v2/projects/{projectId}/items/{itemId}/steps/{stepId}/tasks/{taskId}` — [Retrieves details of a specific task associated with a review step in a submittal item](./submittals-tasks-taskId-GET.md)
- `POST /construction/submittals/v2/projects/{projectId}/items/{itemId}/steps/{stepId}/tasks/:taskId:close` — [Closes a task by adding a required review response, marking it as complete within the submittal review workflow](./submittals-tasks-taskIdclose-POST.md)
- `GET /construction/submittals/v2/projects/{projectId}/templates` — [Retrieves a list of review templates available for a project](./submittals-templates-GET.md)
- `GET /construction/submittals/v2/projects/{projectId}/users/me` — [Retrieves the Autodesk ID, assigned roles, and permitted actions for the current user within a specified project](./submittals-users-me-GET.md)

---
원본 문서: https://aps.autodesk.com/en/docs/acc/v1/reference/http/submittals-revisions-GET
