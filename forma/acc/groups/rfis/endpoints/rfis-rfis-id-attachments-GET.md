---
operation_id: rfis-rfis-id-attachments-GET
method: GET
path: /construction/rfis/v3/projects/{projectId}/rfis/{rfiId}/attachments
group: "RFIs"
auth_context: user context required
scopes: [data:read]
surface: http
verification: docs-only
---

# Retrieves a list of attachments for a specific RFI

```http
GET https://developer.api.autodesk.com/construction/rfis/v3/projects/:projectId/rfis/:rfiId/attachments
```

| | |
| --- | --- |
| **인증 컨텍스트** | user context required |
| **필요 스코프** | `data:read` |
| **데이터 포맷** | JSON |
| **그룹** | RFIs |

Retrieves a list of attachments for a specific RFI.

## 요청

### URI 파라미터

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `projectId` | string |  | The ID of the project. Use the Data Management API to retrieve the project ID. For more information, see the Retrieve a Project ID tutorial. You need to convert the project ID into a project ID for the Forma API by removing the “b." prefix. For example, a project ID of b.a4be0c34a-4ab7 translates to a project ID of a4be0c34a-4ab7. |
| `rfiId` | string |  | The ID of the RFI. To find the ID, call POST search:rfis. |

### 쿼리 파라미터

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `limit` | int |  | The number of attachments to return in the response. Possible values: 1–200. Default: 10. For example, to limit the response to two attachments per page, use limit=2. |
| `offset` | int |  | The number of items to skip before starting to return results. For example, to begin the results from the fourth item, use offset=3. |
| `filter[attachmentTypes]` | array: string |  | Filters the response to only include attachments of the specified types. Possible values: rfiResponse, rfiOfficialResponse, rfiWebHiddenFiles, bridgeFiles. If not provided, the default filter is: rfiResponse, rfiOfficialResponse. |

### 헤더

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `Authorization` | string | **필수** | Must be Bearer <token>, where <token> is a three-legged access token obtained via an Authorization Code flow or a Secure Service Account (SSA) flow. The SSA flow is designed for headless server-to-server operations. While it functions like a two-legged flow (no user interaction), it is classified as three-legged because it preserves user context. |

## 응답

| 코드 | 의미 | 설명 |
| --- | --- | --- |
| `200` | OK | Success |
| `400` | Bad Request | The parameters are invalid |
| `401` | Unauthorized | The provided bearer token is not valid |
| `403` | Forbidden | The user or service represented by the bearer token does not have permission to perform this operation |
| `404` | Not Found | RFI not found |
| `500` | Internal Server Error | An unknown error occurred on the server |

### 응답 본문 (200)

- `results` — `array: object`  
    The list of attachments.
  - `attachmentId` — `string: UUID`  
      The unique ID of the attachment.
  - `attachmentType` — `enum:string`  
      The type of the attachment. Possible values: rfiResponse, rfiOfficialResponse, bridgeFiles, rfiWebHiddenFiles.
  - `displayName` — `string`  
      The name of the attachment file as it appears in the UI.
  - `fileName` — `string`  
      The original name of the uploaded file, including its extension.
  - `storageUrn` — `string`  
      The storage URN of the attachment file. Use this value to generate a signed URL and download the file via the Data Management API. For more details, see the Submit RFI Response tutorial.
  - `domainEntityId` — `string: UUID`  
      The ID of the related entity.
  - `docsId` — `string: UUID`  
      Not relevant
  - `containerId` — `string`  
      The ID of the container associated with the attachment.
  - `rfiId` — `string`  
      The ID of the RFI associated with the attachment.
  - `lineageUrn` — `string`  
      Not relevant
  - `fileSize` — `int`  
      The size of the attachment file in bytes.
  - `fileType` — `string`  
      The file extension type for the attachment.
  - `version` — `int`  
      The version number of the uploaded file.
  - `versionUrn` — `string`  
      Not relevant
  - `tipVersionUrn` — `string`  
      Not relevant
  - `bubbleUrn` — `string`  
      Not relevant
  - `createdOn` — `datetime: ISO 8601`  
      The timestamp of the date and time the attachment was created, in the following format: YYYY-MM-DDThh:mm:ss.sz.
  - `createdBy` — `string`  
      The Autodesk ID of the user who added the attachment.
  - `modifiedOn` — `datetime: ISO 8601`  
      The timestamp of the date and time the attachment was modified, in the following format: YYYY-MM-DDThh:mm:ss.sz.
  - `modifiedBy` — `string`  
      The Autodesk ID of the user who has modified the attachment.
  - `createdByName` — `string`  
      The name of the user who added the attachment.
  - `isDeleted` — `boolean`  
      Not relevant
  - `deletedOn` — `datetime: ISO 8601`  
      The timestamp of the date and time the attachment was deleted, in the following format: YYYY-MM-DDThh:mm:ss.sz.
  - `deletedBy` — `string`  
      The Autodesk ID of the user who deleted the attachment.
- `pagination` — `object`  
    The pagination object.
  - `limit` — `int`  
      The number of items returned per page.
  - `offset` — `int`  
      The number of items skipped before this page of results.
  - `totalResults` — `int`  
      The total number of items matching the request.

## Example

```
curl -v 'https://developer.api.autodesk.com/construction/rfis/v3/projects/:projectId/rfis/:rfiId/attachments' \
  -H 'Authorization: Bearer AuIPTf4KYLTYGVnOHQ0cuolwCW2a'
```

```
{
  "results": [
    {
      "attachmentId": "1234852d-5957-4145-9c8d-e7cfe9d564df",
      "attachmentType": "rfiResponse",
      "displayName": "Structural Plan - Rev A.pdf",
      "fileName": "revA_plan_final_v2.pdf",
      "storageUrn": "urn:adsk.objects:os.object:wip.dm.qa/b232ff3f-eff7-4e17-a486-362de84230a3.png",
      "domainEntityId": "c911852d-5957-4145-9c8d-e7cfe9d564df",
      "docsId": "c911852d-5957-4145-9c8d-e7cfe9d564df",
      "containerId": "12302fc6-00a5-45ca-a9df-4427b9247123",
      "rfiId": "0d302fc6-00a5-45ca-a9df-4427b9247c81",
      "lineageUrn": "urn:adsk.wipprod:dm.lineage:1t7QY9-JSxCB0TLh1qMvFQ",
      "fileSize": 1024,
      "fileType": "png",
      "version": 1,
      "versionUrn": "urn:adsk.wipprod:fs.file:vf.1HROnsnfQgq4N0b-nUoGge?version=1",
      "tipVersionUrn": "urn:adsk.wipprod:fs.file:vf.1HROnsnfQgq4N0b-nUoGge?version=1",
      "bubbleUrn": "urn:adsk.objects:os.object:modelderivative/building.rvt",
      "createdOn": "2018-08-01T08:56:48.699Z",
      "createdBy": "PER8KQPK2JRT",
      "modifiedOn": "2018-08-01T08:56:48.699Z",
      "modifiedBy": "PER8KQPK2JRT",
      "createdByName": "Jill Sharp",
      "isDeleted": false,
      "deletedOn": "2018-08-01T08:56:48.699Z",
      "deletedBy": "PER8KQPK2JRT"
    }
  ],
  "pagination": {
    "limit": 10,
    "offset": 0,
    "totalResults": 97
  }
}
```

## 같은 그룹의 다른 엔드포인트

- `GET /construction/rfis/v3/projects/{projectId}/attributes` — [Retrieves all custom attribute definitions for a project](./rfis-attributes-GET.md)
- `POST /construction/rfis/v3/projects/{projectId}/attributes` — [Creates a custom attribute definition for a project](./rfis-attributes-POST.md)
- `PATCH /construction/rfis/v3/projects/{projectId}/attributes/{attributeId}` — [Updates an existing custom attribute definition for a project](./rfis-custom-attributes-attributeId-PATCH.md)
- `GET /construction/rfis/v3/projects/{projectId}/rfis/custom-identifier` — [Returns the current and next available RFI custom identifier for the project](./rfis-custom-identifier-GET.md)
- `POST /construction/rfis/v3/projects/{projectId}/search:rfis` — [RFIs](./rfis-rfi-search-POST.md)
- `GET /construction/rfis/v3/projects/{projectId}/rfi-types` — [Retrieves the list of RFI types configured for the specified project](./rfis-RFI-types-GET.md)
- `GET /construction/rfis/v3/projects/{projectId}/rfis/{rfiId}` — [Retrieves detailed information about a specific RFI (Request for Information) in Forma](./rfis-rfis-id-GET.md)
- `PATCH /construction/rfis/v3/projects/{projectId}/rfis/{rfiId}` — [Updates an RFI](./rfis-rfis-id-PATCH.md)
- `POST /construction/rfis/v3/projects/{projectId}/rfis/{rfiId}/responses` — [Creates a response to the specified RFI](./rfis-rfis-id-responses-POST.md)
- `PATCH /construction/rfis/v3/projects/{projectId}/rfis/{rfiId}/responses/{responseId}` — [Updates an existing RFI response](./rfis-rfis-id-responses-responseId-PATCH.md)
- `POST /construction/rfis/v3/projects/{projectId}/rfis` — [Adds an RFI (request for information) to a project](./rfis-rfis-POST.md)
- `GET /construction/rfis/v3/projects/{projectId}/rfis/{rfiId}/comments` — [Retrieves a list of comments associated with a specific RFI](./rfis-rfis-rfiId-comments-GET.md)
- `POST /construction/rfis/v3/projects/{projectId}/rfis/{rfiId}/comments` — [Adds a comment to an RFI](./rfis-rfis-rfiId-comments-POST.md)
- `GET /construction/rfis/v3/projects/{projectId}/users/me` — [Retrieves information about the current user in the context of the specified project](./rfis-users-me-GET.md)
- `GET /construction/rfis/v3/projects/{projectId}/workflow` — [Workflows](./rfis-workflow-GET.md)

---
원본 문서: https://aps.autodesk.com/en/docs/acc/v1/reference/http/rfis-rfis-id-attachments-GET
