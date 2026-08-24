---
operation_id: sheets-collections-collectionId-GET
method: GET
path: /construction/sheets/v1/projects/{projectId}/collections/{collectionId}
group: "Sheets"
auth_context: user context optional
scopes: [data:read]
surface: http
verification: docs-only
---

# Retrieves a specific collection by its unique ID

```http
GET https://developer.api.autodesk.com/construction/sheets/v1/projects/{projectId}/collections/{collectionId}
```

| | |
| --- | --- |
| **인증 컨텍스트** | user context optional |
| **필요 스코프** | `data:read` |
| **데이터 포맷** | JSON |
| **그룹** | Sheets |

Retrieves a specific collection by its unique ID.

## 요청

### URI 파라미터

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `projectId` | string: UUID |  | The ID of the project. Use the Data Management API to retrieve the project ID. For more information, see the Retrieve a Project ID tutorial. You can use a project ID either with a “b.” prefix or without a “b.” prefix. For instance, a project ID of “b.a4be0c34a-4ab7” can also be referred to as “a4be0c34a-4ab7”. |
| `collectionId` | string: UUID |  | The ID of the collection, To find the collection ID, call GET collections. |

### 헤더

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `Authorization` | string | **필수** | Must be Bearer <token>, where <token> is a two-legged access token obtained via a Client Credentials Grant flow, or a three-legged access token obtained via an Authorization Code flow or a Secure Service Account (SSA) flow. The SSA flow is designed for headless server-to-server operations. While it functions like a two-legged flow (no user interaction), it is classified as three-legged because it preserves user context. |
| `x-user-id` | string |  | The ID of the user on whose behalf the API request is made. This header is optional when using a 2-legged OAuth2, but required if using 2-legged OAuth2 with user impersonation. When using 2-legged OAuth2 without user impersonation, your app has access to all users defined by the administrator in the SaaS integrations UI. However, when user impersonation is enabled, the API call is restricted to act only on behalf of the specified user. This header is not relevant for 3-legged OAuth2. You can use either the user’s Forma ID (id), or their Autodesk ID (autodeskId). |

## 응답

| 코드 | 의미 | 설명 |
| --- | --- | --- |
| `200` | OK | Successfully retrieved collection data |
| `400` | Bad Request | The parameters of the requested operation are invalid. Sample error code with possible messages: - ERR_BAD_INPUT: - Failed to parse the token |
| `401` | Unauthorized | The provided bearer token is not valid. Sample error code with possible messages: - ERR_AUTHENTICATED_ERROR: - Authentication header is not correct |
| `403` | Forbidden | The user or service represented by the bearer token does not have permission to perform this operation. Sample error code with possible messages: - ERR_NOT_ALLOWED: - Hub inactive - Project inactive - User inactive - API access denied - User {userId} does not have download permission on resource {resource} |
| `404` | Not Found | The requested resources, such as the project, hub, user, sheet, or collection, do not exist. Sample error code with possible messages: - ERR_RESOURCE_NOT_EXIST: - Project not found - Project user not found - The collection does not exist |
| `500` | Internal Server Error | An unknown error occurred on the server. Sample error code with possible messages: - ERR_INTERNAL_SERVER_ERROR: - Request failed for internal exception xxx - Failed to get hub - Failed to get project - Failed to get user |

### 응답 본문 (200)

- `id` — `string: UUID`  
    The unique identifier of the collection.
- `name` — `string`  
    The name of the collection. This corresponds to the Name column in the Forma Sheets Collections Settings UI.
- `createdAt` — `datetime: ISO 8601`  
    The date and time the collection was created.
- `createdBy` — `string`  
    The Autodesk ID of the user who created the collection.
- `createdByName` — `string`  
    The name of the user who created the collection.
- `updatedAt` — `datetime: ISO 8601`  
    The date and time the collection was last updated.
- `updatedBy` — `string`  
    The Autodesk ID of the user who last updated the collection.
- `updatedByName` — `string`  
    The name of the user who last updated the collection.

## Example

```
curl -v 'https://developer.api.autodesk.com/construction/sheets/v1/projects/9ba6681e-1952-4d54-aac4-9de6d9858dd4/collections/5cb5d9da-060e-421e-bca9-97dd8b5cd800' \
  -H 'Authorization: Bearer AuIPTf4KYLTYGVnOHQ0cuolwCW2a'
```

```
{
  "id": "619ef887-974f-45e4-9775-461e6a62d784",
  "name": "Group 1",
  "createdAt": "2024-11-04T08:12:23.041Z",
  "createdBy": "45GPJ4KAX789",
  "createdByName": "John Smith",
  "updatedAt": "2024-11-04T08:12:23.041Z",
  "updatedBy": "45GPJ4KAX789",
  "updatedByName": "John Smith"
}
```

## 같은 그룹의 다른 엔드포인트

- `GET /construction/sheets/v1/projects/{projectId}/collections` — [Retrieves information about all the collections in a project](./sheets-collections-GET.md)
- `GET /construction/sheets/v1/projects/{projectId}/exports/{exportId}` — [Exports](./sheets-exports-exportId-GET.md)
- `POST /construction/sheets/v1/projects/{projectId}/exports` — [Exports up to 1000 sheets from the from the Sheets tool in Forma Build into a new downloadble PDF file](./sheets-exports-POST.md)
- `GET /construction/sheets/v1/projects/{projectId}/uploads/{uploadId}/review-sheets` — [Retrieves a list of review sheets](./sheets-review-sheets-GET.md)
- `PATCH /construction/sheets/v1/projects/{projectId}/uploads/{uploadId}/review-sheets` — [Updates review sheets](./sheets-review-sheets-PATCH.md)
- `POST /construction/sheets/v1/projects/{projectId}/uploads/{uploadId}/review-sheets:publish` — [Publishes uploaded review sheets](./sheets-review-sheetspublish-POST.md)
- `GET /construction/sheets/v1/projects/{projectId}/sheets` — [Retrieves information about the sheets in a project](./sheets-sheets-GET.md)
- `POST /construction/sheets/v1/projects/{projectId}/sheets:batch-delete` — [Deletes a list of sheets](./sheets-sheetsbatch-delete-POST.md)
- `POST /construction/sheets/v1/projects/{projectId}/sheets:batch-get` — [Retrieves a list of sheets by IDs](./sheets-sheetsbatch-get-POST.md)
- `POST /construction/sheets/v1/projects/{projectId}/sheets:batch-restore` — [Restores deleted sheets](./sheets-sheetsbatch-restore-POST.md)
- `POST /construction/sheets/v1/projects/{projectId}/sheets:batch-update` — [Updates a list of sheets](./sheets-sheetsbatch-update-POST.md)
- `POST /construction/sheets/v1/projects/{projectId}/storage` — [Creates a storage location in the Object Storage Service (OSS) for you to upload the file to](./sheets-storage-POST.md)
- `POST /construction/sheets/v1/projects/{projectId}/uploads/{uploadId}/thumbnails:batch-get` — [Retrieves a list of thumbnails for the specified review sheets](./sheets-thumbnailsbatch-get-POST.md)
- `GET /construction/sheets/v1/projects/{projectId}/uploads` — [Checks the processing status of all the uploaded files in the project](./sheets-uploads-GET.md)
- `POST /construction/sheets/v1/projects/{projectId}/uploads` — [Creates an Forma upload object](./sheets-uploads-POST.md)
- `GET /construction/sheets/v1/projects/{projectId}/uploads/{uploadId}` — [Checks the processing status of a specific uploaded file](./sheets-uploads-uploadId-GET.md)
- `GET /construction/sheets/v1/projects/{projectId}/version-sets` — [Retrieves a list of version sets](./sheets-version-sets-GET.md)
- `POST /construction/sheets/v1/projects/{projectId}/version-sets` — [Creates a version set](./sheets-version-sets-POST.md)
- `PATCH /construction/sheets/v1/projects/{projectId}/version-sets/{versionSetId}` — [Updates a version set](./sheets-version-sets-versionSetId-PATCH.md)
- `POST /construction/sheets/v1/projects/{projectId}/version-sets:batch-delete` — [Deletes a list of version sets](./sheets-version-setsbatch-delete-POST.md)
- `POST /construction/sheets/v1/projects/{projectId}/version-sets:batch-get` — [Retrieves a list of version sets](./sheets-version-setsbatch-get-POST.md)

---
원본 문서: https://aps.autodesk.com/en/docs/acc/v1/reference/http/sheets-collections-collectionId-GET
