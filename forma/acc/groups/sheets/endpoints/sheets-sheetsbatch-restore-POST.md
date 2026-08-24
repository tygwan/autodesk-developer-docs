---
operation_id: sheets-sheetsbatch-restore-POST
method: POST
path: /construction/sheets/v1/projects/{projectId}/sheets:batch-restore
group: "Sheets"
auth_context: user context optional
scopes: [data:write]
surface: http
verification: docs-only
---

# Restores deleted sheets

```http
POST https://developer.api.autodesk.com/construction/sheets/v1/projects/{projectId}/sheets:batch-restore
```

| | |
| --- | --- |
| **인증 컨텍스트** | user context optional |
| **필요 스코프** | `data:write` |
| **데이터 포맷** | JSON |
| **그룹** | Sheets |

Restores deleted sheets. The sheet is restored to the version set it was associated with when it was deleted.

## 요청

### URI 파라미터

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `projectId` | string: UUID |  | The ID of the project. Use the Data Management API to retrieve the project ID. For more information, see the Retrieve a Project ID tutorial. You can use a project ID either with a “b.” prefix or without a “b.” prefix. For instance, a project ID of “b.a4be0c34a-4ab7” can also be referred to as “a4be0c34a-4ab7”. |

### 헤더

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `Authorization` | string | **필수** | Must be Bearer <token>, where <token> is a two-legged access token obtained via a Client Credentials Grant flow, or a three-legged access token obtained via an Authorization Code flow or a Secure Service Account (SSA) flow. The SSA flow is designed for headless server-to-server operations. While it functions like a two-legged flow (no user interaction), it is classified as three-legged because it preserves user context. |
| `x-user-id` | string |  | The ID of the user on whose behalf the API request is made. This header is optional when using a 2-legged OAuth2, but required if using 2-legged OAuth2 with user impersonation. When using 2-legged OAuth2 without user impersonation, your app has access to all users defined by the administrator in the SaaS integrations UI. However, when user impersonation is enabled, the API call is restricted to act only on behalf of the specified user. This header is not relevant for 3-legged OAuth2. You can use either the user’s Forma ID (id), or their Autodesk ID (autodeskId). |
| `Content-Type` | string | **필수** | Must be application/json |

### 요청 본문

- `ids` — `array: string` **(필수)**  
    The IDs of the sheets to restore. To find the IDs of deleted sheets you want to restore, call GET sheets using the isDeleted=true filter. - The max number of items is 200.

## 응답

| 코드 | 의미 | 설명 |
| --- | --- | --- |
| `200` | OK | Successfully restored sheets. |
| `400` | Bad Request | The parameters of the requested operation are invalid. |
| `403` | Forbidden | The user or client represented by the bearer token does not have permission to perform this operation. |
| `404` | Not Found | The requested resource cannot be found. |
| `409` | Conflict | The request could not be completed due to a conflict with the current state of the target resource. |
| `429` | Too Many Requests | The server has received too many requests. |
| `500` | Internal Server Error | An unexpected error occurred on the server. |

### 응답 본문 (200)

- `results` — `array: object`  
    The list of sheets that were successfully restored.
  - `id` — `string: UUID`  
      The ID of the sheet.
- `errors` — `array: object`  
    The list of sheets that were not restored. Sheets are usually not restored because a sheet with the same number exists in the version set.
  - `sheetId` — `string: UUID`  
      The ID of the sheet that was not restored.
  - `code` — `string`  
      The code of the error.
  - `title` — `string`  
      The title of the error.
  - `detail` — `string`  
      Details about the error.

## Example

```
curl -v 'https://developer.api.autodesk.com/construction/sheets/v1/projects/9ba6681e-1952-4d54-aac4-9de6d9858dd4/sheets:batch-restore' \
  -X 'POST' \
  -H 'Authorization: Bearer AuIPTf4KYLTYGVnOHQ0cuolwCW2a' \
  -H 'Content-Type: application/json' \
  -d '{
        "ids": [
          "0d7a5883-1694-3078-a06d-ad24413f8b06"
        ]
      }'
```

```
{
  "results": [
    {
      "id": "0d7a5883-1694-3078-a06d-ad24413f8b06"
    }
  ],
  "errors": [
    {
      "sheetId": "",
      "code": "",
      "title": "",
      "detail": ""
    }
  ]
}
```

## 같은 그룹의 다른 엔드포인트

- `GET /construction/sheets/v1/projects/{projectId}/collections/{collectionId}` — [Retrieves a specific collection by its unique ID](./sheets-collections-collectionId-GET.md)
- `GET /construction/sheets/v1/projects/{projectId}/collections` — [Retrieves information about all the collections in a project](./sheets-collections-GET.md)
- `GET /construction/sheets/v1/projects/{projectId}/exports/{exportId}` — [Exports](./sheets-exports-exportId-GET.md)
- `POST /construction/sheets/v1/projects/{projectId}/exports` — [Exports up to 1000 sheets from the from the Sheets tool in Forma Build into a new downloadble PDF file](./sheets-exports-POST.md)
- `GET /construction/sheets/v1/projects/{projectId}/uploads/{uploadId}/review-sheets` — [Retrieves a list of review sheets](./sheets-review-sheets-GET.md)
- `PATCH /construction/sheets/v1/projects/{projectId}/uploads/{uploadId}/review-sheets` — [Updates review sheets](./sheets-review-sheets-PATCH.md)
- `POST /construction/sheets/v1/projects/{projectId}/uploads/{uploadId}/review-sheets:publish` — [Publishes uploaded review sheets](./sheets-review-sheetspublish-POST.md)
- `GET /construction/sheets/v1/projects/{projectId}/sheets` — [Retrieves information about the sheets in a project](./sheets-sheets-GET.md)
- `POST /construction/sheets/v1/projects/{projectId}/sheets:batch-delete` — [Deletes a list of sheets](./sheets-sheetsbatch-delete-POST.md)
- `POST /construction/sheets/v1/projects/{projectId}/sheets:batch-get` — [Retrieves a list of sheets by IDs](./sheets-sheetsbatch-get-POST.md)
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
원본 문서: https://aps.autodesk.com/en/docs/acc/v1/reference/http/sheets-sheetsbatch-restore-POST
