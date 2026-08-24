---
operation_id: sheets-exports-exportId-GET
method: GET
path: /construction/sheets/v1/projects/{projectId}/exports/{exportId}
group: "Sheets"
auth_context: user context optional
scopes: [data:read]
surface: http
verification: docs-only
---

# Exports

```http
GET https://developer.api.autodesk.com/construction/sheets/v1/projects/{projectId}/exports/{exportId}
```

| | |
| --- | --- |
| **인증 컨텍스트** | user context optional |
| **필요 스코프** | `data:read` |
| **데이터 포맷** | JSON |
| **그룹** | Sheets |

Retrieves the status of a PDF sheet export job, as well as the signed URL required to download the exported file once the export process is complete.

## 요청

### URI 파라미터

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `projectId` | string: UUID |  | The ID of the project. Use the Data Management API to retrieve the project ID. For more information, see the Retrieve a Project ID tutorial. You can use a project ID either with a “b.” prefix or without a “b.” prefix. For instance, a project ID of “b.a4be0c34a-4ab7” can also be referred to as “a4be0c34a-4ab7”. |
| `exportId` | string |  | The ID of the export job. The export ID is generated when you initialize an export job using POST exports. |

### 헤더

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `Authorization` | string | **필수** | Must be Bearer <token>, where <token> is a two-legged access token obtained via a Client Credentials Grant flow, or a three-legged access token obtained via an Authorization Code flow or a Secure Service Account (SSA) flow. The SSA flow is designed for headless server-to-server operations. While it functions like a two-legged flow (no user interaction), it is classified as three-legged because it preserves user context. |
| `x-user-id` | string |  | The ID of a user on whose behalf your API request is acting. Required for 2-legged OAuth2 with user impersonation. The app has access to all users specified by the administrator in the SaaS integrations UI. When you provide this header, the API call is limited to acting on behalf of the specified user. You can use either the user’s Forma ID (id) or their Autodesk ID (autodeskId). |

## 응답

| 코드 | 의미 | 설명 |
| --- | --- | --- |
| `200` | OK | Successfully retrieved export data |
| `400` | Bad Request | The parameters of the requested operation are invalid. Sample error code with possible messages: - ERR_BAD_INPUT: - Failed to parse the token |
| `401` | Unauthorized | The provided bearer token is not valid. Sample error code with possible messages: - ERR_AUTHENTICATED_ERROR: - Authentication header is not correct |
| `403` | Forbidden | The user or service represented by the bearer token does not have permission to perform this operation. Sample error code with possible messages: - ERR_NOT_ALLOWED: - Hub inactive - Project inactive - User inactive - API access denied - User {userId} does not have download permission on resource {resource} |
| `404` | Not Found | The requested resources, such as the project, hub, user, sheet, or job, do not exist. Sample error code with possible messages: - ERR_RESOURCE_NOT_EXIST: - Project not found - Project user not found - The job does not exist |
| `500` | Internal Server Error | An unknown error occurred on the server. Sample error code with possible messages: - ERR_INTERNAL_SERVER_ERROR: - Request failed for internal exception xxx - Failed to get hub - Failed to get project - Failed to get user |

### 응답 본문 (200)

- `id` — `string: UUID`  
    The ID of the sheets export job.
- `status` — `enum:string`  
    The status of the sheets export job. Possible values: successful, processing, failed
- `result` — `object`  
    The result of a completed export job. - If the status is successful, a downloadable signed URL will be included in the result.output object. - If the status value is failed (e.g., because some files were deleted), the result.error object will include details of the error.
  - `output` — `object`  
      Details about the downloadable signed URL.
    - `signedUrl` — `string`  
        The signed URL that you can use to download the PDF file. Note that it expires in one hour.
  - `error` — `object`  
      Information about the error.
    - `code` — `string`  
        The code of the error.
    - `title` — `string`  
        The title of the error.
    - `detail` — `string`  
        The details of the error.

## Example

```
curl -v 'https://developer.api.autodesk.com/construction/sheets/v1/projects/9ba6681e-1952-4d54-aac4-9de6d9858dd4/exports/5b4bb914-c123-4f10-87e3-579ef934aaf9' \
  -H 'Authorization: Bearer AuIPTf4KYLTYGVnOHQ0cuolwCW2a'
```

```
{
  "id": "5b4bb914-c123-4f10-87e3-579ef934aaf9",
  "status": "successful",
  "result": {
    "output": {
      "signedUrl": "https://signedUrl"
    }
  }
}
```

```
{
  "id": "5b4bb914-c123-4f10-87e3-579ef934aaf9",
  "status": "failed",
  "result": {
    "error": {
      "code": "401",
      "title": "ERR_AUTHORIZATION_ERROR",
      "detail": "Authentication header is not correct"
    }
  }
}
```

## 같은 그룹의 다른 엔드포인트

- `GET /construction/sheets/v1/projects/{projectId}/collections/{collectionId}` — [Retrieves a specific collection by its unique ID](./sheets-collections-collectionId-GET.md)
- `GET /construction/sheets/v1/projects/{projectId}/collections` — [Retrieves information about all the collections in a project](./sheets-collections-GET.md)
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
원본 문서: https://aps.autodesk.com/en/docs/acc/v1/reference/http/sheets-exports-exportId-GET
