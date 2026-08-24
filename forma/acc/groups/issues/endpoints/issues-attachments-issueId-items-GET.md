---
operation_id: issues-attachments-issueId-items-GET
method: GET
path: /construction/issues/v1/projects/{projectId}/attachments/{issueId}/items
group: "Issues"
auth_context: user context required
scopes: [data:read]
surface: http
verification: docs-only
---

# Retrieves all attachments for a specific issue in a project

```http
GET https://developer.api.autodesk.com/construction/issues/v1/projects/{projectId}/attachments/{issueId}/items
```

| | |
| --- | --- |
| **인증 컨텍스트** | user context required |
| **필요 스코프** | `data:read` |
| **데이터 포맷** | JSON |
| **그룹** | Issues |

Retrieves all attachments for a specific issue in a project.

## 요청

### URI 파라미터

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `projectId` | string: UUID |  | The ID of the project. Use the Data Management API to retrieve the project ID. For more information, see the Retrieve a Project ID tutorial. You need to convert the project ID into a project ID for the Forma API by removing the “b." prefix. For example, a project ID of b.a4be0c34a-4ab7 translates to a project ID of a4be0c34a-4ab7. |
| `issueId` | string: UUID |  | The unique identifier of the issue. To find the ID, call GET issues. |

### 헤더

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `Authorization` | string | **필수** | Must be Bearer <token>, where <token> is a three-legged access token obtained via an Authorization Code flow or a Secure Service Account (SSA) flow. The SSA flow is designed for headless server-to-server operations. While it functions like a two-legged flow (no user interaction), it is classified as three-legged because it preserves user context. |

## 응답

| 코드 | 의미 | 설명 |
| --- | --- | --- |
| `200` | OK | OK |
| `400` | Bad Request | Invalid input |
| `403` | Forbidden | The request is valid but lacks the necessary permissions. |
| `404` | Not Found | Issue not found |
| `500` | Internal Server Error | Internal server error |

### 응답 본문 (200)

- `attachments` — `array: object`  
    A collection of attachments linked to the issue.
  - `attachmentId` — `string: UUID`  
      The unique identifier for the attachment, set by the client when creating the attachment reference. This can be any unique GUID, but it is recommended to use the OSS storage GUID.
  - `displayName` — `string`  
      The human-readable display name for the attachment, including the file extension (for example, .pdf, .jpg, .dwg). This name appears in the Forma web UI and is used when downloading the file from the issue.
  - `fileName` — `string`  
      The unique filename of the attachment, as stored in Autodesk Forma Data Management (OSS). This is the name assigned to the uploaded file in the system, typically formatted as {attachmentId}.{fileExtension}.
  - `attachmentType` — `enum:string`  
      The type of attachment. For issue attachments, this value is always issue-attachment. Will always be: issue-attachment
  - `storageUrn` — `string`  
      The Object Storage Service (OSS) URN identifying where the attachment file is stored in Autodesk’s cloud infrastructure. Use this value when downloading the file (see the Download Issue Attachment </en/docs/acc/v1/tutorials/issues/download-issue-attachments/>_ tutorial).
  - `fileSize` — `int`  
      The size of the file in bytes.
  - `fileType` — `string`  
      The file extension (without the dot), for example pdf or jpg.
  - `domainEntityId` — `string: UUID`  
      The ID of the issue that owns the attachment.
  - `lineageUrn` — `string`  
      The document lineage URN for the attachment’s source file.
  - `version` — `int`  
      The document version number.
  - `versionUrn` — `string`  
      The URN for the specific file version that was attached to the issue. This may differ from the latest version URN (tipVersionUrn) if a newer version of the file exists in Autodesk Forma Data Management.
  - `tipVersionUrn` — `string`  
      The URN for the latest (tip) version of the file.
  - `bubbleUrn` — `string`  
      Not relevant
  - `createdBy` — `string`  
      The ID of the user who created the issue attachment. For details about the user, call GET users.
  - `createdOn` — `datetime: ISO 8601`  
      The date and time when the issue attachment was created, in ISO8601 format.
  - `modifiedBy` — `string`  
      Not relevant
  - `modifiedOn` — `datetime: ISO 8601`  
      Not relevant
  - `deletedBy` — `string`  
      The ID of the user who deleted the issue attachment, if applicable. For details about the user, call GET users.
  - `deletedOn` — `datetime: ISO 8601`  
      The date and time when the issue attachment was deleted, if applicable.
  - `isDeleted` — `boolean`  
      true: The attachment has been deleted. false: (default) The attachment has not been deleted.

## Example

```
curl -v 'https://developer.api.autodesk.com/construction/issues/v1/projects/:projectId/attachments/:issueId/items' \
  -H 'Authorization: Bearer AuIPTf4KYLTYGVnOHQ0cuolwCW2a'
```

```
{
  "attachments": [
    {
      "attachmentId": "aea9f035-b63a-4e46-884d-3016454507e2",
      "displayName": "myfile.pdf",
      "fileName": "aea9f035-b63a-4e46-884d-3016454507e2.pdf",
      "attachmentType": "issue-attachment",
      "storageUrn": "urn:adsk.objects:os.object:wip.dm.prod/2a6d61f2-49df-4d7b.jpg",
      "fileSize": 1000000,
      "fileType": "png",
      "domainEntityId": "20c71442-d5b2-480b-9051-0ba108b62bb9",
      "lineageUrn": "urn:adsk.wipprod:dm.lineage:AeYgDtcTSuqYoyMweWFhhQ",
      "version": 32,
      "versionUrn": "urn:adsk.wipprod:fs.file:vf.1HROnsnfQgq4N0b-nUoGge?version=2",
      "tipVersionUrn": "urn:adsk.wipprod:fs.file:vf.1HROnsnfQgq4N0b-nUoGge?version=2",
      "bubbleUrn": "urn:adsk.objects:os.object:modelderivative/building.rvt",
      "createdBy": "A3RGM375QTZ7",
      "createdOn": "2018-07-22T15:05:58.033Z",
      "modifiedBy": "A3RGM375QTZ7",
      "modifiedOn": "2018-07-22T15:05:58.033Z",
      "deletedBy": "A3RGM375QTZ7",
      "deletedOn": "2018-07-22T15:05:58.033Z",
      "isDeleted": false
    }
  ]
}
```

## 같은 그룹의 다른 엔드포인트

- `POST /construction/issues/v1/projects/{projectId}/attachments` — [Adds attachments to an existing issue](./issues-attachments-POST.md)
- `GET /construction/issues/v1/projects/{projectId}/issues/{issueId}/comments` — [Get all the comments for a specific issue](./issues-comments-GET.md)
- `POST /construction/issues/v1/projects/{projectId}/issues/{issueId}/comments` — [Creates a new comment under a specific issue](./issues-comments-POST.md)
- `GET /construction/issues/v1/projects/{projectId}/issue-attribute-definitions` — [Issue Attribute Definitions](./issues-issue-attribute-definitions-GET.md)
- `GET /construction/issues/v1/projects/{projectId}/issue-attribute-mappings` — [Issue Attribute Mappings](./issues-issue-attribute-mappings-GET.md)
- `GET /construction/issues/v1/projects/{projectId}/issue-root-cause-categories` — [Retrieves a list of supported root cause categories and root causes that you can allocate to an issue](./issues-issue-root-cause-categories-GET.md)
- `GET /construction/issues/v1/projects/{projectId}/issue-types` — [Retrieves a project’s categories and types](./issues-issue-types-GET.md)
- `GET /construction/issues/v1/projects/{projectId}/issues` — [Issues](./issues-issues-GET.md)
- `GET /construction/issues/v1/projects/{projectId}/issues/{issueId}` — [Retrieves detailed information about a single issue](./issues-issues-issueId-GET.md)
- `PATCH /construction/issues/v1/projects/{projectId}/issues/{issueId}` — [Updates an issue](./issues-issues-issueId-PATCH.md)
- `POST /construction/issues/v1/projects/{projectId}/issues` — [Adds an issue to a project](./issues-issues-POST.md)
- `DELETE /construction/issues/v1/projects/{projectId}/attachments/{issueId}/items/{attachmentId}` — [Deletes a specific attachment from an issue in a project](./issues-items-attachmentId-DELETE.md)
- `GET /construction/issues/v1/projects/{projectId}/users/me` — [Returns the current user permissions](./issues-users-me-GET.md)

---
원본 문서: https://aps.autodesk.com/en/docs/acc/v1/reference/http/issues-attachments-issueId-items-GET
