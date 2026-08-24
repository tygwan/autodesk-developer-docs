---
operation_id: submittals-metadata-GET
method: GET
path: /construction/submittals/v2/projects/{projectId}/metadata
group: "Submittals"
auth_context: user context required
scopes: [data:read]
surface: http
verification: docs-only
---

# Retrieves project metadata and static values needed for creating submittal items and translating retrieved data

```http
GET https://developer.api.autodesk.com/construction/submittals/v2/projects/:projectId/metadata
```

| | |
| --- | --- |
| **인증 컨텍스트** | user context required |
| **필요 스코프** | `data:read` |
| **데이터 포맷** | JSON |
| **그룹** | Submittals |

Retrieves project metadata and static values needed for creating submittal items and translating retrieved data.

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
| `200` | OK | A successfully retrieved submittal project’s metadata. |
| `401` | Unauthorized | Invalid or missing authorization header. Verify the Bearer token and try again. |
| `403` | Forbidden | The user is not authorized to perform this action. |
| `404` | Not Found | The specified resource was not found. |
| `500` | Internal Server Error | An unexpected error occurred on the server while processing the request. |

### 응답 본문 (200)

- `id` — `string: UUID`  
    The unique identifier (UUID) for the metadata object.
- `submittalRoles` — `array: object`  
    A list of submittal roles within the project.
  - `id` — `string`  
      The unique identifier for the submittal role.
  - `key` — `string`  
      Not relevant
  - `value` — `string`  
      The display name of the submittal role.
- `attachmentUrnTypes` — `array: object`  
    A list of attachment URN types.
  - `id` — `string`  
      The unique identifier for the attachment URN type.
  - `key` — `string`  
      Not relevant
  - `value` — `string`  
      The display name of the attachment URN type.
- `itemTypes` — `array: object`  
    A list of submittal item types. This is the same as calling GET item-types
  - `id` — `string: UUID`  
      The internal, globally unique identifier (UUID) for the item type.
  - `key` — `string`  
      Not relevant
  - `value` — `string`  
      The name of the submittal item type.
  - `platformId` — `string`  
      Not relevant
  - `isActive` — `boolean`  
      true: (default) if the submittal item type has not been deleted. false: if the submittal item type has been deleted.
  - `isInUse` — `boolean`  
      true: if the submittal item type is currently associated with a submittal item. false: if the submittal item type is not currently associated with a submittal item.
  - `createdBy` — `string`  
      The Autodesk ID of the user who created the submittal item type.
  - `createdAt` — `datetime: ISO 8601`  
      The date and time when the submittal item type was originally created.
  - `updatedAt` — `datetime: ISO 8601`  
      The date and time when the submittal item type was last updated.
  - `updatedBy` — `string`  
      The Autodesk ID of the user who last updated the submittal item type.
- `adminMappingsSubmittalRoles` — `array: object`  
    A list of admin mappings for submittal roles.
  - `id` — `string`  
      The unique identifier for the submittal role.
  - `key` — `string`  
      Not relevant
  - `value` — `string`  
      The display name of the submittal role.
- `userTypes` — `array: object`  
    Types of users, such as individual users, companies, and roles.
  - `id` — `string`  
      The unique identifier for the user type.
  - `key` — `string`  
      Not relevant
  - `value` — `string`  
      The display name of the user type.
- `statuses` — `array: object`  
    A list of statuses representing different stages of a submittal item.
  - `id` — `string`  
      The unique identifier for the status.
  - `key` — `string`  
      Not relevant
  - `value` — `string`  
      The display name of the status.
- `responses` — `array: object`  
    A list of responses.This is the same as calling GET responses
  - `id` — `string: UUID`  
      The internal, globally unique identifier (UUID) for the response.
  - `key` — `string`  
      Not relevant
  - `value` — `string`  
      The content of the response.
  - `platformId` — `string`  
      Not relevant
  - `isActive` — `boolean`  
      true: if the response was not deleted. false: if the response was deleted.
  - `categoryId` — `string`  
      The type of response. Possible values: 1 (Approved), 2 (Revise and submit), 3 (Rejected).
  - `isApproval` — `boolean`  
      true: settings this response for a submittal item means an approval. false: settings this response for a submittal item means dis-approval. This attribute is taken from the related categoryId
  - `isInUse` — `boolean`  
      true: if the response is currently associated with a submittal item. false: if the response is not currently associated with a submittal item.
  - `createdBy` — `string`  
      The Autodesk ID of the user who created the response.
  - `createdAt` — `datetime: ISO 8601`  
      The time and date when the response was created.
  - `updatedAt` — `datetime: ISO 8601`  
      The time and date when the response was last updated.
  - `updatedBy` — `string`  
      The Autodesk ID of the user who last updated the response.
- `attachmentCategories` — `array: object`  
    A list of attachment categories.
  - `id` — `string`  
      The unique identifier for the attachment category.
  - `key` — `string`  
      Not relevant
  - `value` — `string`  
      The display name of the attachment category.
- `attachmentTypes` — `array: object`  
    A list of attachment types.
  - `id` — `string`  
      The unique identifier for the attachment type.
  - `key` — `string`  
      Not relevant
  - `value` — `string`  
      The display name of the attachment type.
- `isManagerMappingDefined` — `boolean`  
    true: if there is at least one manager mapping in the project. false: if there are no manager mappings in the project.
- `noPackagesInProject` — `boolean`  
    true: if there are no packages in the project. false: if there are packages in the project.
- `noItemsInProject` — `boolean`  
    true: if there are no submittal items in the project. false: if there are submittal items in the project.
- `responseCategories` — `array: object`  
    A list of categories for responses to submittals.
  - `id` — `string`  
      The unique ID for the response category.
  - `value` — `string`  
      The display name of the category as shown in the UI.
  - `isApproval` — `boolean`  
      true: if this option is for an approved submittal response. false: if this option is for other-typed submittal responses.
- `defaultValues` — `object`  
    An object containing the default values for various settings and configurations in the project.
  - `watchers` — `array: object`  
      A list of project watchers, who can be individual users, roles, or companies.
    - `id` — `string`  
        The Autodesk ID of the watcher. The watcher can be a user (autodeskId), role (memberGroupId), or company (memberGroupId). To find details about users, call GET users, to find details about companies, call GET companies. Note that we do not currently support finding details about roles for a project.
    - `userType` — `object`  
        The type of watcher assigned to the submittal item. Possible values: - 1 (user) - 2 (company) - 3 (role)
  - `manager` — `string`  
      The Autodesk ID of the user who is assigned as the manager.
  - `reviewTime` — `int`  
      The number of days remaining until the review due date.
  - `updatedAt` — `datetime: ISO 8601`  
      The date and time when the response was last updated, in ISO 8601 format.
  - `updatedBy` — `string`  
      The Autodesk ID of the user that last updated the response.
- `customIdentifierSequenceType` — `enum:string`  
    The custom numbering sequence type for the current project. Possible values: 1 (Global sequence), 2 (Spec sequence).

## Example

```
curl -v 'https://developer.api.autodesk.com/construction/submittals/v2/projects/9eae7d59-1469-4389-bfb2-4114e2ba5545/metadata' \
  -H 'Authorization: Bearer AuIPTf4KYLTYGVnOHQ0cuolwCW2a'
```

```
{
  "id": "e8302552-fc5a-42ac-ba4b-e9de9760c356",
  "submittalRoles": [
    {
      "id": "4",
      "key": "admin",
      "value": "Admin"
    }
  ],
  "attachmentUrnTypes": [
    {
      "id": "2",
      "key": "dm",
      "value": "DM"
    }
  ],
  "itemTypes": [
    {
      "id": "5bab7f9b-61cf-45bc-8bce-f88ddd9d380e",
      "key": "my-type",
      "value": "Attic Stock",
      "platformId": "attic stock",
      "isActive": true,
      "isInUse": true,
      "createdBy": "WD43ZJGKDFLFH",
      "createdAt": "2018-02-01T12:09:24.198466Z",
      "updatedAt": "2018-02-01T12:09:24.198466Z",
      "updatedBy": "WD43ZJGKDFLFH"
    }
  ],
  "adminMappingsSubmittalRoles": [
    {
      "id": "4",
      "key": "admin",
      "value": "Admin"
    }
  ],
  "userTypes": [
    {
      "id": "2",
      "key": "company",
      "value": "Company"
    }
  ],
  "statuses": [
    {
      "id": "2",
      "key": "open",
      "value": "Open"
    }
  ],
  "responses": [
    {
      "id": "5bab7f9b-61cf-45bc-8bce-f88ddd9d380e",
      "key": "my response",
      "value": "Approved",
      "platformId": "approved",
      "isActive": false,
      "categoryId": "1",
      "isApproval": false,
      "isInUse": false,
      "createdBy": "WD43ZJGKDFLFH",
      "createdAt": "2018-02-01T12:09:24.198466Z",
      "updatedAt": "2018-02-01T12:09:24.198466Z",
      "updatedBy": "WD43ZJGKDFLFH"
    }
  ],
  "attachmentCategories": [
    {
      "id": "2",
      "key": "for_review",
      "value": "For Review"
    }
  ],
  "attachmentTypes": [
    {
      "id": "2",
      "key": "photo",
      "value": "Photo"
    }
  ],
  "isManagerMappingDefined": false,
  "noPackagesInProject": false,
  "noItemsInProject": false,
  "responseCategories": [
    {
      "id": "1",
      "value": "Approved",
      "isApproval": "true"
    }
  ],
  "defaultValues": {
    "watchers": [
      {
        "id": "224356",
        "userType": "2"
      },
      {
        "id": "3522614",
        "userType": "3"
      }
    ],
    "manager": "WD43ZJGKDFLFH",
    "reviewTime": 7,
    "updatedAt": "2018-02-01T12:09:24.198466Z",
    "updatedBy": "WD43ZJGKDFLFH"
  },
  "customIdentifierSequenceType": "1"
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
원본 문서: https://aps.autodesk.com/en/docs/acc/v1/reference/http/submittals-metadata-GET
