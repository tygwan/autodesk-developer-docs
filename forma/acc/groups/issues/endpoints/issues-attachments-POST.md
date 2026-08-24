---
operation_id: issues-attachments-POST
method: POST
path: /construction/issues/v1/projects/{projectId}/attachments
group: "Issues"
auth_context: user context required
scopes: [data:write]
surface: http
verification: docs-only
---

# Adds attachments to an existing issue

```http
POST https://developer.api.autodesk.com/construction/issues/v1/projects/{projectId}/attachments
```

| | |
| --- | --- |
| **인증 컨텍스트** | user context required |
| **필요 스코프** | `data:write` |
| **데이터 포맷** | JSON |
| **그룹** | Issues |

Adds attachments to an existing issue.

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

- `domainEntityId` — `string: UUID`  
    The unique identifier of the issue to which the attachments will be added.
- `attachments` — `array: object` **(필수)**  
    A list of attachments to add to the issue.
  - `attachmentId` — `string: UUID` **(필수)**  
      The unique identifier for the attachment, set by the client when creating the attachment reference. This can be any unique GUID, but it is recommended to use the OSS storage GUID. For more information, see the Upload Issue Attachment tutorial.
  - `displayName` — `string` **(필수)**  
      The human-readable display name for the attachment, including the file extension (for example, .pdf, .jpg, .dwg). This name appears in the Forma web UI and is used when downloading the file from the issue.
  - `fileName` — `string` **(필수)**  
      The unique filename of the attachment, typically formatted as {attachmentId}.{fileExtension}. This value must exactly match the name of the file stored in Autodesk Forma Data Management (OSS) that you uploaded via the OSS process. For more information, see the Upload Issue Attachment tutorial.
  - `attachmentType` — `enum:string` **(필수)**  
      The type of attachment to create. Set to issue-attachment. Will always be: issue-attachment
  - `storageUrn` — `string` **(필수)**  
      The Object Storage Service (OSS) URN that uniquely identifies where the file is stored in Autodesk’s cloud infrastructure. You obtain this value after uploading the file to OSS (see the Upload Issue Attachment tutorial) or by retrieving it from an existing attachment (see the Downloading Issue Attachments tutorial).

## 응답

| 코드 | 의미 | 설명 |
| --- | --- | --- |
| `200` | OK | OK |
| `400` | Bad Request | Invalid input |
| `403` | Forbidden | The request is valid but lacks the necessary permissions. |
| `404` | Not Found | Project not found |
| `409` | Conflict | Conflict - one or more attachments already exist in the document service |
| `422` | Unprocessable Entity | The limit of 100 attachments per issue has been reached |
| `500` | Internal Server Error | Internal server error |

### 응답 본문 (200)

- `attachments` — `array: object`  
    A collection of created attachments linked to the issue.
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
  - `hash` — `string`  
      Not relevant

## Example

```
curl -v 'https://developer.api.autodesk.com/construction/issues/v1/projects/:projectId/attachments' \
  -X 'POST' \
  -H 'Authorization: Bearer AuIPTf4KYLTYGVnOHQ0cuolwCW2a' \
  -H 'Content-Type: application/json' \
  -d '{
        "domainEntityId": "be9ade84-e25d-412a-a08c-f5f14cf04957",
        "attachments": [
          {
            "attachmentId": "aea9f035-b63a-4e46-884d-3016454507e2",
            "displayName": "myfile.pdf",
            "fileName": "aea9f035-b63a-4e46-884d-3016454507e2.pdf",
            "attachmentType": "issue-attachment",
            "storageUrn": "urn:adsk.objects:os.object:wip.dm.prod/2a6d61f2-49df-4d7b.jpg"
          }
        ]
      }'
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
      "isDeleted": false,
      "hash": "a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6"
    }
  ]
}
```

## 같은 그룹의 다른 엔드포인트

- `GET /construction/issues/v1/projects/{projectId}/attachments/{issueId}/items` — [Retrieves all attachments for a specific issue in a project](./issues-attachments-issueId-items-GET.md)
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
원본 문서: https://aps.autodesk.com/en/docs/acc/v1/reference/http/issues-attachments-POST
