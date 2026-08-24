---
operation_id: sheets-sheetsbatch-get-POST
method: POST
path: /construction/sheets/v1/projects/{projectId}/sheets:batch-get
group: "Sheets"
auth_context: user context optional
scopes: [data:read]
surface: http
verification: docs-only
---

# Retrieves a list of sheets by IDs

```http
POST https://developer.api.autodesk.com/construction/sheets/v1/projects/{projectId}/sheets:batch-get
```

| | |
| --- | --- |
| **인증 컨텍스트** | user context optional |
| **필요 스코프** | `data:read` |
| **데이터 포맷** | JSON |
| **그룹** | Sheets |

Retrieves a list of sheets by IDs.

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
    The IDs of the sheets to retrieve. - The max number of items is 200.

## 응답

| 코드 | 의미 | 설명 |
| --- | --- | --- |
| `200` | OK | Successfully retrieved the list of sheets. |
| `400` | Bad Request | The parameters of the requested operation are invalid. |
| `403` | Forbidden | The user or client represented by the bearer token does not have permission to perform this operation. |
| `404` | Not Found | The requested resource cannot be found. |
| `429` | Too Many Requests | The server has received too many requests. |
| `500` | Internal Server Error | An unexpected error occurred on the server. |

### 응답 본문 (200)

- `results` — `array: object`  
    The list of results.
  - `id` — `string: UUID`  
      The ID of the sheet.
  - `number` — `string`  
      The number of the sheet.
  - `versionSet` — `object`  
      Basic version set data. For a complete collection of version set data, call GET version-sets.
    - `id` — `string: UUID`  
        The ID of the version set.
    - `name` — `string`  
        The name of the version set. Max length: 255
    - `issuanceDate` — `datetime: ISO 8601`  
        The issuance date of the version set in ISO-8601 format (YYYY-MM-DD).
    - `deleted` — `boolean`  
        - true if the version set has been deleted. - false if the version set has not been deleted.
  - `createdAt` — `datetime: ISO 8601`  
      The time when the sheet was created, in ISO-8601 format (YYYY-MM-DDTHH:mm:ss.SSSZ).
  - `createdBy` — `string`  
      The ID of the user who created the sheet.
  - `createdByName` — `string`  
      The name of the user who created the sheet.
  - `updatedAt` — `datetime: ISO 8601`  
      The time when the sheet was last updated, in ISO-8601 format (YYYY-MM-DDTHH:mm:ss.SSSZ).
  - `updatedBy` — `string`  
      The ID of the user who last updated the sheet.
  - `updatedByName` — `string`  
      The name of the user who last updated the sheet.
  - `title` — `string`  
      The title of the sheet.
  - `uploadFileName` — `string`  
      The name of the source file from which the sheet was generated.
  - `uploadId` — `string: UUID`  
      The ID of the upload that generated the sheet.
  - `tags` — `array: string`  
      The tags of the sheet.
  - `paperSize` — `array: number`  
      The size of the sheet in pixels.
  - `isCurrent` — `boolean`  
      - true if the sheet is the version with the most recent issuance date. This is only relevant if you uploaded multiple versions of the same sheet that were assigned the same number. The current sheet is the sheet with the most recent issuance date. - false if the sheet is not the version with the most recent issuance date.
  - `deleted` — `boolean`  
      - true if the sheet has been deleted. - false if the sheet has not been deleted.
  - `deletedAt` — `datetime: ISO 8601`  
      The time when the sheet was deleted, in ISO-8601 format (YYYY-MM-DDTHH:mm:ss.SSSZ).
  - `deletedBy` — `string`  
      The ID of the user who deleted the sheet.
  - `deletedByName` — `string`  
      The name of the user who deleted the sheet.
  - `viewable` — `object`  
      Information about the sheet relevant for loading the sheet to the Viewer. See Add Viewer to an HTML Page for more information.
    - `urn` — `string`  
        The URN of the viewable resources. Multiple sheets created by the same original file may share the same viewable URN. When loading the sheet to the viewer, this URN should be used as the documentId to get the manifest.
    - `guid` — `string`  
        The GUID of the viewable resources. When loading the sheet to the viewer, this GUID should be used to find the related geometry node of the sheet.
  - `collection` — `object`  
      The collection object, if assigned. If no collection is assigned, this value is null.
    - `id` — `string: UUID`  
        The unique identifier of the collection.
    - `name` — `string`  
        The name of the collection. This corresponds to the Name column in the Forma Sheets Collections Settings UI. Max length: 255

## Example

```
curl -v 'https://developer.api.autodesk.com/construction/sheets/v1/projects/9ba6681e-1952-4d54-aac4-9de6d9858dd4/sheets:batch-get' \
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
      "id": "0d7a5883-1694-3078-a06d-ad24413f8b06",
      "number": "A-01",
      "versionSet": {
        "id": "7c2ecde0-2406-49f9-9199-50176848a0b7",
        "name": "one set",
        "issuanceDate": "2021-07-01",
        "deleted": false
      },
      "createdAt": "2021-07-01T05:21:05.391Z",
      "createdBy": "45GPJ4KAX789",
      "createdByName": "John Smith",
      "updatedAt": "2021-07-01T05:21:05.391Z",
      "updatedBy": "45GPJ4KAX789",
      "updatedByName": "John Smith",
      "title": "Floor One",
      "uploadFileName": "example.pdf",
      "uploadId": "5cb5d9da-060e-421e-bca9-97dd8b5cd800",
      "tags": [
        "april",
        "floor"
      ],
      "paperSize": [
        1000,
        600
      ],
      "isCurrent": true,
      "deleted": false,
      "deletedAt": "",
      "deletedBy": "",
      "deletedByName": "",
      "viewable": {
        "urn": "urn:adsk.bimdocs:seed:207edb73-69c2-43d2-ba0e-e2ffe9fdcb56",
        "guid": "cc3eb847-737f-3408-bdbd-e2628a02b8de"
      },
      "collection": {
        "id": "619ef887-974f-45e4-9775-461e6a62d784",
        "name": "Group 1"
      }
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
원본 문서: https://aps.autodesk.com/en/docs/acc/v1/reference/http/sheets-sheetsbatch-get-POST
