---
operation_id: sheets-review-sheets-GET
method: GET
path: /construction/sheets/v1/projects/{projectId}/uploads/{uploadId}/review-sheets
group: "Sheets"
auth_context: user context optional
scopes: [data:read]
surface: http
verification: docs-only
---

# Retrieves a list of review sheets

```http
GET https://developer.api.autodesk.com/construction/sheets/v1/projects/{projectId}/uploads/{uploadId}/review-sheets
```

| | |
| --- | --- |
| **인증 컨텍스트** | user context optional |
| **필요 스코프** | `data:read` |
| **데이터 포맷** | JSON |
| **그룹** | Sheets |

Retrieves a list of review sheets. This endpoint is typically used during the process of uploading files to the Forma Sheets tool.
It enables you to review the sheets that you uploaded before publishing them. For more details, see the Upload Sheets tutorial.

## 요청

### URI 파라미터

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `projectId` | string: UUID |  | The ID of the project. Use the Data Management API to retrieve the project ID. For more information, see the Retrieve a Project ID tutorial. You can use a project ID either with a “b.” prefix or without a “b.” prefix. For instance, a project ID of “b.a4be0c34a-4ab7” can also be referred to as “a4be0c34a-4ab7”. |
| `uploadId` | string |  | The ID of the upload. The upload ID is generated when you create an upload object. |

### 쿼리 파라미터

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `offset` | int |  | The starting point for the results, specified by item number. The default value is 0. For example, use offset=3 to start the results from the third item. |
| `limit` | int |  | The number of results to return in the response. |

### 헤더

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `Authorization` | string | **필수** | Must be Bearer <token>, where <token> is a two-legged access token obtained via a Client Credentials Grant flow, or a three-legged access token obtained via an Authorization Code flow or a Secure Service Account (SSA) flow. The SSA flow is designed for headless server-to-server operations. While it functions like a two-legged flow (no user interaction), it is classified as three-legged because it preserves user context. |
| `x-user-id` | string |  | The ID of the user on whose behalf the API request is made. This header is optional when using a 2-legged OAuth2, but required if using 2-legged OAuth2 with user impersonation. When using 2-legged OAuth2 without user impersonation, your app has access to all users defined by the administrator in the SaaS integrations UI. However, when user impersonation is enabled, the API call is restricted to act only on behalf of the specified user. This header is not relevant for 3-legged OAuth2. You can use either the user’s Forma ID (id), or their Autodesk ID (autodeskId). |

## 응답

| 코드 | 의미 | 설명 |
| --- | --- | --- |
| `200` | OK | Successfully retrieved the list of review sheets. |
| `400` | Bad Request | The parameters of the requested operation are invalid. |
| `403` | Forbidden | The user or client represented by the bearer token does not have permission to perform this operation. |
| `404` | Not Found | The requested resource cannot be found. |
| `429` | Too Many Requests | The server has received too many requests. |
| `500` | Internal Server Error | An unexpected error occurred on the server. |

### 응답 본문 (200)

- `results` — `array: object`  
    The list of results.
  - `id` — `string`  
      The ID of the review sheet.
  - `page` — `number`  
      The page number of the source file from which the review sheet was generated.
  - `fileName` — `string`  
      The source file name of the review sheet.
  - `number` — `string`  
      The number of the review sheet.
  - `title` — `string`  
      The title of the review sheet.
  - `deleted` — `boolean`  
      - true if the review sheet has been deleted. - false if the review sheet has not been deleted. Note that if the review sheet has been deleted, it will not be published.
  - `tags` — `array: string`  
      The tags of the review sheet.
  - `rotation` — `number`  
      The rotation of the review sheet. Possible values: 0, 90, 180, 270.
  - `processingState` — `enum:string`  
      The processing state of the review sheet. Possible values: - PROCESSING: the review sheet is being processed. - AUDITING: the review sheet is being audited. - ROTATING: the review sheet is being rotated. - READY: the review sheet is ready for updating or publishing. - FAILED: the processing of the review sheet failed. - PUBLISHING the review sheet is publishing.
- `pagination` — `object`  
    Pagination information for paged data.
  - `limit` — `int`  
      The number of results to return in the response.
  - `offset` — `int`  
      The item number from which the results begin.
  - `previousUrl` — `string`  
      The URL for the previous page of results.
  - `nextUrl` — `string`  
      The URL for the next page of results.
  - `totalResults` — `int`  
      The total number of results available.

## Example

```
curl -v 'https://developer.api.autodesk.com/construction/sheets/v1/projects/9ba6681e-1952-4d54-aac4-9de6d9858dd4/uploads/5cb5d9da-060e-421e-bca9-97dd8b5cd800/review-sheets' \
  -H 'Authorization: Bearer AuIPTf4KYLTYGVnOHQ0cuolwCW2a'
```

```
{
  "results": [
    {
      "id": "0d7a5883-1694-3078-a06d-ad24413f8b06",
      "page": 1,
      "fileName": "example.pdf",
      "number": "A-01",
      "title": "Floor One",
      "deleted": false,
      "tags": [
        "april",
        "floor"
      ],
      "rotation": 0,
      "processingState": "READY"
    }
  ],
  "pagination": {
    "limit": 100,
    "offset": 0,
    "previousUrl": "",
    "nextUrl": "",
    "totalResults": 1
  }
}
```

## 같은 그룹의 다른 엔드포인트

- `GET /construction/sheets/v1/projects/{projectId}/collections/{collectionId}` — [Retrieves a specific collection by its unique ID](./sheets-collections-collectionId-GET.md)
- `GET /construction/sheets/v1/projects/{projectId}/collections` — [Retrieves information about all the collections in a project](./sheets-collections-GET.md)
- `GET /construction/sheets/v1/projects/{projectId}/exports/{exportId}` — [Exports](./sheets-exports-exportId-GET.md)
- `POST /construction/sheets/v1/projects/{projectId}/exports` — [Exports up to 1000 sheets from the from the Sheets tool in Forma Build into a new downloadble PDF file](./sheets-exports-POST.md)
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
원본 문서: https://aps.autodesk.com/en/docs/acc/v1/reference/http/sheets-review-sheets-GET
