---
operation_id: submittals-templates-GET
method: GET
path: /construction/submittals/v2/projects/{projectId}/templates
group: "Submittals"
auth_context: user context required
scopes: [data:read]
surface: http
verification: docs-only
---

# Retrieves a list of review templates available for a project

```http
GET https://developer.api.autodesk.com/construction/submittals/v2/projects/:projectId/templates
```

| | |
| --- | --- |
| **인증 컨텍스트** | user context required |
| **필요 스코프** | `data:read` |
| **데이터 포맷** | JSON |
| **그룹** | Submittals |

Retrieves a list of review templates available for a project. Each review template contains predefined steps and tasks that streamline the review workflow and can be applied to submittal items during their creation using POST items.

## 요청

### URI 파라미터

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `projectId` | string: UUID |  | The ID of the project. Use the Data Management API to retrieve the project ID. For more information, see the Retrieve a Project ID tutorial. You need to convert the project ID into a project ID for the Forma API by removing the “b." prefix. For example, a project ID of b.a4be0c34a-4ab7 translates to a project ID of a4be0c34a-4ab7. |

### 쿼리 파라미터

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `limit` | int |  | The maximum number of results per page. Possible values: 1- 50. Default value: 20. For example, to limit the response to two results per page, use limit=2. |
| `offset` | int |  | The number of results to skip before starting to return data. For example, to skip the first 20 results, include offset=20 in the query string. For more details, see the JSON API Paging Help documentation. |
| `sort` | string |  | A comma-delimited list of fields to sort by in the format field asc or field desc. Possible values: id, name, createdAt, createdBy, updatedAt, updatedBy. For example: sort=id asc. |

### 헤더

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `Authorization` | string | **필수** | Must be Bearer <token>, where <token> is a three-legged access token obtained via an Authorization Code flow or a Secure Service Account (SSA) flow. The SSA flow is designed for headless server-to-server operations. While it functions like a two-legged flow (no user interaction), it is classified as three-legged because it preserves user context. |

## 응답

| 코드 | 의미 | 설명 |
| --- | --- | --- |
| `200` | OK | A successful request returning review templates with steps and tasks. |
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
    The list of templates retrieved in the API response. Each template includes its steps and associated tasks.
  - `id` — `string: UUID`  
      The internal, globally unique identifier (UUID) for the template. Each template in the workflow has a unique ID.
  - `name` — `string`  
      The name of the template.
  - `steps` — `array: object`  
      The list of steps included in the template. Each step defines specific actions and associated tasks.
    - `id` — `string: UUID`  
        The internal, globally unique identifier (UUID) for the step. Each step in the workflow has a unique ID.
    - `stepNumber` — `number`  
        The number representing the order of the steps, where 1 is the first step.
    - `daysToRespond` — `number`  
        Specifies a dynamic due date. When the step starts, the due date is calculated based on this field.
    - `tasks` — `array: object`  
        A list of tasks associated with this template. Each task has its own unique identifier (UUID).
      - `id` — `string: UUID`  
          The internal, globally unique identifier (UUID) for the task.
      - `assignedTo` — `string`  
          The Autodesk ID or member group ID of the user, company, or role assigned to the task.
      - `assignedToType` — `enum:string`  
          Specifies whether the task is assigned to a user, company, or role. Possible values: 1 (user), 2 (company), 3 (role).
      - `isRequired` — `boolean`  
          - true: the task is required to complete the step. - false: (default) the task is not required to complete the step.
  - `createdAt` — `datetime: ISO 8601`  
      The date and time when the template was originally created, formatted as YYYY-MM-DDTHH:mm:ss.SSSSSSZ (ISO 8601) in UTC. For example, 2025-01-20T12:00:00.198466Z.
  - `createdBy` — `string`  
      The Autodesk ID of the user that created the template.
  - `updatedAt` — `datetime: ISO 8601`  
      The date and time when the template was last updated, formatted as YYYY-MM-DDTHH:mm:ss.SSSSSSZ (ISO 8601) in UTC. For example, 2025-01-20T12:00:00.198466Z.
  - `updatedBy` — `string`  
      The Autodesk ID of the user that last updated the template.
  - `watchers` — `array: object`  
      A list of project watchers, who can be individual users, roles, or companies.
    - `id` — `string`  
        The Autodesk ID of the watcher. The watcher can be a user (autodeskId), role (memberGroupId), or company (memberGroupId). To find details about users, call GET users, to find details about companies, call GET companies. Note that we do not currently support finding details about roles for a project.
    - `userType` — `object`  
        The type of watcher assigned to the submittal item. Possible values: - 1 (user) - 2 (company) - 3 (role)

## Example

```
curl -v 'https://developer.api.autodesk.com/construction/submittals/v2/projects/9eae7d59-1469-4389-bfb2-4114e2ba5545/templates' \
  -H 'Authorization: Bearer AuIPTf4KYLTYGVnOHQ0cuolwCW2a'
```

```
{
  "pagination": {
    "limit": 10,
    "offset": 100,
    "totalResults": 25,
    "previousUrl": "https://developer.api.autodesk.com/construction/submittals/v2/projects/9eae7d59-1469-4389-bfb2-4114e2ba5545/templates?limit=5&offset=10",
    "nextUrl": null
  },
  "results": [
    {
      "id": "56abeb4a-c450-4c34-a23d-a49e5e47ef2a",
      "name": "Structural Review Template",
      "steps": [
        {
          "id": "54e9ca56-54b8-4492-b140-d6c0454d70fe",
          "stepNumber": 1,
          "daysToRespond": 10,
          "tasks": [
            {
              "id": "63d901e6-e148-4b29-8330-92dfe91e8d07",
              "assignedTo": "WD43ZJGKDFLFH",
              "assignedToType": "1",
              "isRequired": true
            }
          ]
        }
      ],
      "createdAt": "2018-02-21T23:04:49.406673Z",
      "createdBy": "WD43ZJGKDFLFH",
      "updatedAt": "2018-02-21T23:04:49.406Z",
      "updatedBy": "WD43ZJGKDFLFH",
      "watchers": [
        {
          "id": "224356",
          "userType": "2"
        },
        {
          "id": "3522614",
          "userType": "3"
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
- `GET /construction/submittals/v2/projects/{projectId}/users/me` — [Retrieves the Autodesk ID, assigned roles, and permitted actions for the current user within a specified project](./submittals-users-me-GET.md)

---
원본 문서: https://aps.autodesk.com/en/docs/acc/v1/reference/http/submittals-templates-GET
