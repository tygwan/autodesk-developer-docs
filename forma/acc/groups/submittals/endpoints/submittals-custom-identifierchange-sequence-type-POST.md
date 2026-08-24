---
operation_id: submittals-custom-identifierchange-sequence-type-POST
method: POST
path: /construction/submittals/v2/projects/{projectId}/settings/custom-identifier:change-sequence-type
group: "Submittals"
auth_context: user context required
scopes: [data:write]
surface: http
verification: docs-only
---

# Changes the custom identifier sequence type for the project

```http
POST https://developer.api.autodesk.com/construction/submittals/v2/projects/:projectId/settings/custom-identifier:change-sequence-type
```

| | |
| --- | --- |
| **인증 컨텍스트** | user context required |
| **필요 스코프** | `data:write` |
| **데이터 포맷** | JSON |
| **그룹** | Submittals |

Changes the custom identifier sequence type for the project. The sequence type determines how submittal items are numbered: Global (1) assigns a single sequential number across all items, and Spec (2) numbers items within their spec section.

## 요청

### URI 파라미터

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `projectId` | string: UUID |  | The ID of the project. Use the Data Management API to retrieve the project ID. For more information, see the Retrieve a Project ID tutorial. You need to convert the project ID into a project ID for the Forma API by removing the “b." prefix. For example, a project ID of b.a4be0c34a-4ab7 translates to a project ID of a4be0c34a-4ab7. |

### 헤더

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `Authorization` | string | **필수** | Must be Bearer <token>, where <token> is a three-legged access token obtained via an Authorization Code flow or a Secure Service Account (SSA) flow. The SSA flow is designed for headless server-to-server operations. While it functions like a two-legged flow (no user interaction), it is classified as three-legged because it preserves user context. |
| `Content-Type` | string | **필수** | Must be application/json |

### 요청 본문

- `sequenceType` — `enum:string` **(필수)**  
    The sequence type to set for the project. For new projects, either value can be set. If a sequence type has already been set, you can only change it from Global to Spec — once set to Spec, it cannot be changed back. Possible values: Global (1), Spec (2).

## 응답

| 코드 | 의미 | 설명 |
| --- | --- | --- |
| `200` | OK | Successfully retrieved async job |
| `400` | Bad Request | The request could not be understood by the server due to malformed syntax or missing request headers. |
| `401` | Unauthorized | Invalid or missing authorization header. Verify the Bearer token and try again. |
| `403` | Forbidden | The user is not authorized to perform this action. |
| `404` | Not Found | The specified resource was not found. |
| `409` | Conflict | The action is already being performed |
| `500` | Internal Server Error | An unexpected error occurred on the server while processing the request. |

### 응답 본문 (200)

- `id` — `string: UUID`  
    The unique identifier (UUID) of the async job.
- `createdAt` — `datetime: ISO 8601`  
    The date and time when the async job was created, formatted as YYYY-MM-DDTHH:mm:ss.SSSSSSZ (ISO 8601) in UTC. For example, 2018-02-15T12:09:24.198466Z.
- `updatedAt` — `datetime: ISO 8601`  
    The time and date when the async job was last updated, formatted as YYYY-MM-DDTHH:mm:ss.SSSSSSZ (ISO 8601) in UTC. For example, 2018-02-15T12:09:24.198466Z.
- `startedAt` — `datetime: ISO 8601`  
    The time and date when the async job execution started, formatted as YYYY-MM-DDTHH:mm:ss.SSSSSSZ (ISO 8601) in UTC. For example, 2018-02-15T12:09:24.198466Z.
- `asyncState` — `enum:string`  
    The current state of the asynchronous job. Possible values: Pending (1), Started (2), Success (3), Failure (4).
- `resultsPayload` — `object`  
    Final response payload of the asynchronous job. Contains error details when asyncState is Failure. When asyncState is Success, the response may or may not include data, depending on the job type.

## Example

```
curl -v 'https://developer.api.autodesk.com/construction/submittals/v2/projects/9eae7d59-1469-4389-bfb2-4114e2ba5545/settings/custom-identifier:change-sequence-type' \
  -X 'POST' \
  -H 'Authorization: Bearer AuIPTf4KYLTYGVnOHQ0cuolwCW2a' \
  -H 'Content-Type: application/json' \
  -d '{
        "sequenceType": "1"
      }'
```

```
{
  "id": "d8ee6251-3a75-4eef-9d6c-973fdb91a676",
  "createdAt": "2018-02-01T12:09:24.198466Z",
  "updatedAt": "2018-02-01T12:09:24.198466Z",
  "startedAt": "2018-02-01T12:09:24.198466Z",
  "asyncState": "3",
  "resultsPayload": {}
}
```

## 같은 그룹의 다른 엔드포인트

- `GET /construction/submittals/v2/projects/{projectId}/async-jobs/{asyncJobId}` — [Retrieves the current status and result of an asynchronous job](./submittals-async-jobs-asyncJobId-GET.md)
- `PATCH /construction/submittals/v2/projects/{projectId}/items/{itemId}/attachments/{attachmentId}` — [Updates the upload status of an attachment associated with a submittal item](./submittals-attachments-attachmentId-PATCH.md)
- `POST /construction/submittals/v2/projects/{projectId}/items/{itemId}/attachments` — [Adds an attachment to a submittal item within a project](./submittals-attachments-POST.md)
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
- `GET /construction/submittals/v2/projects/{projectId}/users/me` — [Retrieves the Autodesk ID, assigned roles, and permitted actions for the current user within a specified project](./submittals-users-me-GET.md)

---
원본 문서: https://aps.autodesk.com/en/docs/acc/v1/reference/http/submittals-custom-identifierchange-sequence-type-POST
