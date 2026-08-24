---
operation_id: transmittals-listtransmittaldocuments-GET
method: GET
path: /construction/transmittals/v1/projects/{projectId}/transmittals/{transmittalId}/documents
group: "Transmittals"
auth_context: user context optional
scopes: [data:read]
surface: http
verification: docs-only
---

# Retrieves the documents that were included in a specific transmittal

```http
GET https://developer.api.autodesk.com/construction/transmittals/v1/projects/{projectId}/transmittals/{transmittalId}/documents
```

| | |
| --- | --- |
| **인증 컨텍스트** | user context optional |
| **필요 스코프** | `data:read` |
| **데이터 포맷** | JSON |
| **그룹** | Transmittals |

Retrieves the documents that were included in a specific transmittal.

## 요청

### URI 파라미터

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `projectId` | string: UUID |  | The ID of the project. You can retrieve the project ID using the Data Management API. For more details, see the Retrieve a Project ID tutorial. You may provide the project ID with or without the b. prefix: - With prefix: b.657a5565-09b7-48e0-bd03-acacfe42efaf - Without prefix: 657a5565-09b7-48e0-bd03-acacfe42efaf |
| `transmittalId` | string: UUID |  | The ID of the transmittal. To find the ID, call GET transmittals. |

### 쿼리 파라미터

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `limit` | int |  | The maximum number of results to return per page. Acceptable values: 1-200. Default value: 20. For example, to limit the response to two results per page, use limit=2. |
| `offset` | int |  | The index from which the response starts returning results. Default value: 0. For example, to skip the first three results, use offset=3. |
| `sort` | enum:string |  | Sorts the document results by a supported field and order. By default, results are sorted in ascending order by name (name asc). To sort in descending order, add desc after the field name. Format: sort=<field> [asc or desc] Possible values: name, title, version, lastUpdatedAt, updatedByName. Examples: - sort=name asc – sorts documents alphabetically by name. - sort=lastUpdatedAt desc – sorts documents by last update time (newest first). |

### 헤더

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `Authorization` | string | **필수** | Must be Bearer <token>, where <token> is obtained via either a two-legged or three-legged OAuth flow. |
| `x-user-id` | string |  | The Autodesk ID of the user on whose behalf the request is made. This header is required only when using two-legged authentication. It is not needed for three-legged authentication. Your application can access only those users who are assigned to it in the SaaS Integrations UI. Only user Autodesk IDs (autodeskId) are supported. |

## 응답

| 코드 | 의미 | 설명 |
| --- | --- | --- |
| `200` | OK | Successfully retrieved the documents included in the transmittal |
| `202` | Accepted | The transmittal has been created and is currently being processed but not ready for review yet. The documents list will be empty. |
| `400` | Bad Request | Operation failed because of bad user input |
| `401` | Unauthorized | Unauthorized error |
| `403` | Forbidden | The user does not have permission to perform this operation. |
| `404` | Not Found | The project or transmittal does not exist |
| `500` | Internal Server Error | Internal server error |

### 응답 본문 (200)

- `results` — `array: object`  
    The list of documents that were included in the transmittal when it was issued.
  - `urn` — `string`  
      The URN of the document.
  - `name` — `string`  
      The name of the document.
  - `description` — `string`  
      The description of the document, if provided.
  - `title` — `string`  
      The title of the document.
  - `version` — `int`  
      The version number of the document at the time the transmittal was issued.
  - `fileName` — `string`  
      The file name of the document.
  - `approveStatus` — `object`  
      The approval status of the file version. For more information, see File Review Statuses documentation.
    - `label` — `string`  
        The customized label of the approval status. Max length: 255
    - `value` — `enum:string`  
        The value of the approval status. Possible values: APPROVED, REJECTED
  - `lastUpdatedAt` — `datetime: ISO 8601`  
      The date and time when the file was last updated, in ISO 8601 format.
  - `updatedByName` — `string`  
      The name of the user who last modified the document.
  - `updatedBy` — `string`  
      The Autodesk ID of the user who created the file. For details about the user, call GET user.
  - `isDeleted` — `boolean`  
      Indicates whether the file is deleted. true – The file is deleted, either directly or because its parent folder was deleted. false – The file is not deleted.
  - `parentFolderUrn` — `string`  
      The URN of the folder that contains the document.
  - `folderType` — `string`  
      The type of folder that contains the document.
  - `revisionLabel` — `string`  
      The revision label assigned to the document.
  - `storageUrn` — `string`  
      The storage URN of the document. You can use the storage URN to download the document. For details, see the Download Files tutorial.
- `pagination` — `object`  
    The list of pagination details for the response.
  - `limit` — `int`  
      The maximum number of results returned per page.
  - `offset` — `int`  
      The number of results skipped before the current page, starting from zero.
  - `totalResults` — `int`  
      The total number of results that match the query, regardless of pagination.
  - `nextUrl` — `string`  
      The URL to retrieve the next page of transmittal documents. If this field is not included, the current page is the last page.

### 응답 본문 (202)

- `results` — `array: object`  
    This list of results will be empty.

## Example

```
curl -v 'https://developer.api.autodesk.com/construction/transmittals/v1/projects/657a5565-09b7-48e0-bd03-acacfe42efaf/transmittals/88c286a3-4100-4251-8d0e-830e7726fc17/documents' \
  -H 'Authorization: Bearer AuIPTf4KYLTYGVnOHQ0cuolwCW2a'
```

```
{
  "results": [
    {
      "urn": "urn:adsk.wipprod:fs.file:vf.jM1_OeAjRL6OWjKQLR3cMg?version=1",
      "name": "Building_Design.pdf",
      "description": "This is a pdf of building design",
      "title": "building design",
      "version": 1,
      "fileName": "Building_Design.pdf",
      "approveStatus": {
        "label": "Approved w/ comments.",
        "value": "APPROVED"
      },
      "lastUpdatedAt": "2024-10-21T08:05:54.000Z",
      "updatedByName": "John Smith",
      "updatedBy": "HWUBNU689CRH",
      "isDeleted": false,
      "parentFolderUrn": "urn:adsk.wipprod:fs.folder:co.plHRTgMySeK-DIMyDe7aSA",
      "folderType": "normal",
      "revisionLabel": "432",
      "storageUrn": "urn:adsk.objects:os.object:wip.dm.prod?afedb9a6-749c-45cc-9f44-6617cea3a2fd.f3d"
    }
  ],
  "pagination": {
    "limit": 1,
    "offset": 0,
    "totalResults": 10,
    "nextUrl": "https://developer.api.autodesk.com/construction/transmittals/v1/projects/657a5565-09b7-48e0-bd03-acacfe42efaf/transmittals/88c286a3-4100-4251-8d0e-830e7726fc17/documents?limit=1&offset=1"
  }
}
```

```
{
  "results": [],
  "pagination": {
    "limit": 1,
    "offset": 0,
    "totalResults": 0,
    "nextUrl": null
  }
}
```

## 같은 그룹의 다른 엔드포인트

- `GET /construction/transmittals/v1/projects/{projectId}/transmittals/{transmittalId}` — [Retrieves a transmittal by ID within the specified project](./transmittals-gettransmittal-GET.md)
- `GET /construction/transmittals/v1/projects/{projectId}/transmittals/{transmittalId}/folders` — [Retrieves all folders associated with the documents included in a specific transmittal](./transmittals-listtransmittalfolders-GET.md)
- `GET /construction/transmittals/v1/projects/{projectId}/transmittals/{transmittalId}/recipients` — [Retrieves all recipients of a specific transmittal, including project members and external members](./transmittals-listtransmittalrecipients-GET.md)
- `GET /construction/transmittals/v1/projects/{projectId}/transmittals` — [Retrieves all transmittals created in the specified project](./transmittals-listtransmittals-GET.md)

---
원본 문서: https://aps.autodesk.com/en/docs/acc/v1/reference/http/transmittals-listtransmittaldocuments-GET
