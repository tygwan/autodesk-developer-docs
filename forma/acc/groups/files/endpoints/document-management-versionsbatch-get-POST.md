---
operation_id: document-management-versionsbatch-get-POST
method: POST
path: /bim360/docs/v1/projects/{project_id}/versions:batch-get
group: "Files"
auth_context: user context optional
scopes: [data:read]
surface: http
verification: docs-only
---

# Retrieves a list of custom attribute values for multiple BIM 360 Document Management documents

```http
POST https://developer.api.autodesk.com/bim360/docs/v1/projects/:project_id/versions:batch-get
```

| | |
| --- | --- |
| **인증 컨텍스트** | user context optional |
| **필요 스코프** | `data:read` |
| **데이터 포맷** | JSON |
| **그룹** | Files |

Retrieves a list of custom attribute values for multiple BIM 360 Document Management documents. For information about custom attributes, see the Help documentation. This endpoint also retrieves information about a document’s approval status and revision number.

## 요청

### URI 파라미터

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `project_id` | string |  | The ID of the project. This corresponds to project ID in the Data Management API. To convert a project ID in the Data Management API into a project ID in the BIM 360 API you need to remove the “b." prefix. For example, a project ID of b.a4be0c34a-4ab7 translates to a project ID of a4be0c34a-4ab7. |

### 헤더

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `Authorization` | string | **필수** | Must be Bearer <token>, where <token> is a two-legged access token obtained via a Client Credentials Grant flow, or a three-legged access token obtained via an Authorization Code flow or a Secure Service Account (SSA) flow. The SSA flow is designed for headless server-to-server operations. While it functions like a two-legged flow (no user interaction), it is classified as three-legged because it preserves user context. |
| `Content-Type` | string | **필수** | Must be application/json |
| `x-user-id` | string |  | In a two-legged authentication context, the app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act on behalf of only the user specified. |

### 요청 본문

- `urns` — `array: string` **(필수)**  
    A list of version IDs or item IDs. If you use item IDs it retrieves the values for the latest (tip) versions. You can specify up to 50 documents. To find the version ID and item ID of a document follow the initial steps of the Download Files tutorial.

## 응답

| 코드 | 의미 | 설명 |
| --- | --- | --- |
| `200` | OK | Successful retrieval of versions. |
| `400` | Bad Request | The parameters of the requested operation are invalid. |
| `403` | Forbidden | The user or service represented by the bearer token does not have permission to perform this operation. |
| `404` | Not Found | The project does not exist. |
| `500` | Internal Server Error | An unknown error occurred on the server. |

### 응답 본문 (200)

- `results` — `array: object`  
    The list of results.
  - `urn` — `string`  
      The ID of the version.
  - `itemUrn` — `string`  
      The ID of the related item.
  - `name` — `string`  
      The name of the version. This corresponds to the file name in BIM 360 Document Management.
  - `title` — `string`  
      The title of the version.
  - `number` — `string`  
      The sheet number. This is only relevant for documents uploaded to the Plans folder that were split into sheets.
  - `createTime` — `string`  
      The time and date the version was created.
  - `createUserId` — `string`  
      The ID of the user who created the version.
  - `createUserName` — `string`  
      The name of the user who created the version.
  - `lastModifiedTime` — `string`  
      The time and date the version was last modified.
  - `lastModifiedUserId` — `string`  
      The ID of the user who last modified the version.
  - `lastModifiedUserName` — `string`  
      The name of the user who last modified the version.
  - `storageUrn` — `string`  
      The ID of the version’s storage object. This is only relevant for documents that were not split into sheets when they were uploaded to BIM 360 Document Management.
  - `storageSize` — `int`  
      The file size of the version’s storage object, in bytes. This is only relevant for documents that were not split into sheets when they were uploaded to BIM 360 Document Management.
  - `entityType` — `enum:string`  
      The type of version. Possible values: - SEED_FILE: Documents that were not split into sheets when they were uploaded to BIM 360 Document Management. - DOCUMENT: Documents that were split into sheets when they were uploaded to BIM 360 Document Management.
  - `revisionNumber` — `int`  
      The revision number of the version. The revision number increases when you completely replace the version. For example when you reupload a document and overwrite the current document. Note that this is not the same as the version number, which increases when you update the document. For example, when you save the document. The revision number corresponds to the version in BIM 360 Document Management.
  - `processState` — `enum:string`  
      The process state of the version. Possible values: NEEDS_PROCESSING, PROCESSING, PREVIOUS_SEED_PENDING, EXTRACTION_PENDING, SPLITTING, PREVIOUS_DOC_PENDING, PROCESSING_ABORTING, PROCESSING_ABORTED, PROCESSING_COMPLETE, PROCESSING_PROMOTION, PROCESSING_COPY, PROCESSING_PROMOTING, PROCESSING_COPYING, PROCESSING_SUSPEND
  - `approvalStatus` — `object`  
      The approval status of the version. Only available when the review has been approved or rejected. For more information about the approval workflow, see the Approval Workflows and Document Review documentation.
    - `label` — `string`  
        The customized label of the approval status. Max length: 255
    - `value` — `enum:string`  
        The value of the approval status. Possible values: approved, rejected
  - `customAttributes` — `array: object`  
      The list of custom attributes for each document. For more information about custom attributes, see the Customize Documents with Attributes documentation.
    - `id` — `int`  
        The ID of the attribute.
    - `type` — `enum:string`  
        The data type of the attribute. Possible values: string (text field), date, array (drop-list).
    - `name` — `string`  
        The name of the attribute.
    - `value` — `string`  
        The value of the attribute.
- `errors` — `array: object`  
    The list of errors.
  - `urn` — `string`  
      The ID of the version or item associated with the error.
  - `code` — `string`  
      The error code.
  - `title` — `string`  
      The title of the error.
  - `detail` — `string`  
      The details about the error.

## Example

```
curl -v 'https://developer.api.autodesk.com/bim360/docs/v1/projects/:project_id/versions:batch-get' \
  -X 'POST' \
  -H 'Authorization: Bearer AuIPTf4KYLTYGVnOHQ0cuolwCW2a' \
  -H 'Content-Type: application/json' \
  -d '{
        "urns": [
          "urn:adsk.wipprod:fs.file:vf.zSoimiozRD6qdgHwfykp_w?version=6",
          "urn:adsk.wipprod:dm.lineage:AS3XD9MzQvu4MakMF-w7vQ"
        ]
      }'
```

```
{
  "results": [
    {
      "urn": "urn:adsk.wipprod:fs.file:vf.AS3XD9MzQvu4MakMF-w7vQ?version=1",
      "itemUrn": "urn:adsk.wipprod:dm.lineage:AS3XD9MzQvu4MakMF-w7vQ",
      "name": "Oct.pdf",
      "title": "Bin Work",
      "number": "",
      "createTime": "2019-04-18T03:33:36+0000",
      "createUserId": "CGZ5PG7PZMAS",
      "createUserName": "Tom Jerry",
      "lastModifiedTime": "2019-04-18T03:33:36+0000",
      "lastModifiedUserId": "CGZ5PG7PZMAS",
      "lastModifiedUserName": "Tom Jerry",
      "storageUrn": "urn:adsk.objects:os.object:wip.dm.prod/c4a75bbc-24eb-41a3-a58b-48e51942222e.pdf",
      "storageSize": 7164826,
      "entityType": "SEED_FILE",
      "revisionNumber": 1,
      "processState": "PROCESSING_COMPLETE",
      "approvalStatus": {
        "label": "Approved w/ comments.",
        "value": "approved"
      },
      "customAttributes": [
        {
          "id": 123,
          "type": "array",
          "name": "Drawing Type",
          "value": "General"
        }
      ]
    }
  ],
  "errors": [
    {
      "urn": "urn:adsk.wipprod:fs.file:vf.zSoimiozRD6qdgHwfykp_w?version=6",
      "code": "ERR_RESOURCE_NOT_EXIST",
      "title": "The resource does not exist",
      "detail": "The resource XXX does not exist."
    }
  ]
}
```

## 같은 그룹의 다른 엔드포인트

- `GET /construction/files/v1/projects/{projectId}/custom-attribute-definitions` — [Retrieves a list of custom attribute definitions for a Forma project](./customattributes-custom-attribute-definitions-GET.md)
- `GET /construction/files/v1/projects/{projectId}/custom-attribute-definitions/{customAttributeDefinitionId}/items` — [Retrieves the selectable options for a large drop-down list (largeList) custom attribute definition](./customattributes-items-GET.md)
- `GET /bim360/docs/v1/projects/{project_id}/folders/{folder_id}/custom-attribute-definitions` — [Custom Attributes (beta)](./document-management-custom-attribute-definitions-GET.md)
- `POST /bim360/docs/v1/projects/{project_id}/folders/{folder_id}/custom-attribute-definitions` — [Adds a custom attribute to a folder](./document-management-custom-attribute-definitions-POST.md)
- `POST /bim360/docs/v1/projects/{project_id}/versions/{version_id}/custom-attributes:batch-update` — [Assigns values to custom attributes for multiple documents](./document-management-custom-attributesbatch-update-POST.md)
- `GET /bim360/docs/v1/projects/{projectId}/naming-standards/{id}` — [Retrieves the file naming standard for a project](./document-management-naming-standards-id-GET.md)
- `GET /bim360/docs/v1/projects/{project_id}/folders/{folder_id}/permissions` — [Permissions](./document-management-projects-project_id-folders-folder_id-permissions-GET.md)
- `POST /bim360/docs/v1/projects/{project_id}/folders/{folder_id}/permissions:batch-create` — [Assign permissions to multiple users, roles, and companies for a BIM 360 Document Management folder](./document-management-projects-project_id-folders-folder_id-permissionsbatch-create-POST.md)
- `POST /bim360/docs/v1/projects/{project_id}/folders/{folder_id}/permissions:batch-delete` — [Deletes all the permissions assigned to specified users, roles, and companies](./document-management-projects-project_id-folders-folder_id-permissionsbatch-delete-POST.md)
- `POST /bim360/docs/v1/projects/{project_id}/folders/{folder_id}/permissions:batch-update` — [Updates the permissions assigned to multiple users, roles, and companies for a folder](./document-management-projects-project_id-folders-folder_id-permissionsbatch-update-POST.md)
- `GET /construction/packages/v1/projects/{projectId}/packages/{packageId}/resources` — [Retrieves a list of file versions (“resources”) within a specified package](./packages-list-package-resources-GET.md)
- `GET /construction/packages/v1/projects/{projectId}/packages` — [Retrieves a list of all packages within a specified Forma project](./packages-list-packages-GET.md)
- `GET /construction/rcm/v1/projects/{projectId}/published-versions/{versionId}/linked-files` — [Linked Files](./rcm-linked-files-GET.md)
- `POST /construction/files/v1/projects/{projectId}/exports` — [Exports one or more individual PDFs, or 2D views and sheets (from DWG or RVT files) as PDFs from the Forma files module](./v1-files-export-pdf-files-POST.md)
- `GET /construction/files/v1/projects/{projectId}/exports/{exportId}` — [Retrieves the status of an export job](./v1-files-export-status-and-result-GET.md)

---
원본 문서: https://aps.autodesk.com/en/docs/acc/v1/reference/http/document-management-versionsbatch-get-POST
