---
operation_id: packages-list-package-resources-GET
method: GET
path: /construction/packages/v1/projects/{projectId}/packages/{packageId}/resources
group: "Files"
auth_context: user context optional
scopes: [data:read]
surface: http
verification: docs-only
---

# Retrieves a list of file versions (“resources”) within a specified package

```http
GET https://developer.api.autodesk.com/construction/packages/v1/projects/{projectId}/packages/{packageId}/resources
```

| | |
| --- | --- |
| **인증 컨텍스트** | user context optional |
| **필요 스코프** | `data:read` |
| **데이터 포맷** | JSON |
| **그룹** | Files |

Retrieves a list of file versions (“resources”) within a specified package.

## 요청

### URI 파라미터

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `projectId` | string: UUID |  | The ID of the project. You can retrieve the project ID using the Data Management API. For more details, see the Retrieve a Project ID tutorial. You may provide the project ID with or without the b. prefix: - With prefix: b.657a5565-09b7-48e0-bd03-acacfe42efaf - Without prefix: 657a5565-09b7-48e0-bd03-acacfe42efaf |
| `packageId` | string: UUID |  | The ID of the package. To find the package ID, call GET packages. |

### 쿼리 파라미터

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `limit` | int |  | The number of resources to return in the response payload. Possible values: 1-1000. Default: 200. For example: limit=2. |
| `offset` | int |  | The number of resources that you want to begin retrieving results from. Default: 0. For example: offset=10. |
| `filter[fileType]` | string |  | Filter by file type. This can be a single value or a comma-separated list of values. For example: filter[fileType]=pdf,rvt. Refer to Supported Files for more details. |
| `filter[version]` | string |  | Filter by file version number. This can be a single value or a comma-separated list of values. For example: filter[version]=1,2,3 |
| `sort` | enum:string |  | Provide options to sort on single field, in ascending (asc) by default or descending (desc) order. Possible values of sorting field: name, description, updatedAt, approvalStatus, version. For example: sort=name desc. |

### 헤더

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `Authorization` | string | **필수** | Must be Bearer <token>, where <token> is a two-legged access token obtained via a Client Credentials Grant flow, or a three-legged access token obtained via an Authorization Code flow or a Secure Service Account (SSA) flow. The SSA flow is designed for headless server-to-server operations. While it functions like a two-legged flow (no user interaction), it is classified as three-legged because it preserves user context. |
| `x-user-id` | string |  | The Autodesk ID of the user on whose behalf the request is made. This header is required only when using two-legged authentication. It is not needed for three-legged authentication. Your application can access only those users who are assigned to it in the SaaS Integrations UI. Only user Autodesk IDs (autodeskId) are supported. |

## 응답

| 코드 | 의미 | 설명 |
| --- | --- | --- |
| `200` | OK | Successfully retrieved file versions in a package |
| `400` | Bad Request | Bad request. The input parameters were invalid. |
| `403` | Forbidden | Forbidden. The user does not have permission to access this resource. |
| `404` | Not Found | Not found. The resource does not exist or is inaccessible. |
| `500` | Internal Server Error | An unexpected server error occurred. |

### 응답 본문 (200)

- `results` — `array: object`  
    The list of results.
  - `urn` — `string`  
      The ID (URN) of the file version in Forma.
  - `id` — `string: UUID`  
      The unique identifier (UUID) of the file version.
  - `createdAt` — `string`  
      The time and date the file version was created.
  - `createdBy` — `string`  
      The Autodesk ID of the user who created the version. For details about the user, call GET users.
  - `createdByName` — `string`  
      The name of the user who created the file version.
  - `updatedAt` — `string`  
      The time and date when the file version was last modified.
  - `updatedBy` — `string`  
      The Autodesk ID of the user who last modified the version. For details about the user, call GET users.
  - `updatedByName` — `string`  
      The name of the user who last modified the file version.
  - `name` — `string`  
      The file name in Forma Files. Max length: 255
  - `description` — `string`  
      The description of the file version.
  - `isDeleted` — `boolean`  
      Indicates whether the file version has been deleted. true – The file version is deleted, either directly or because its parent folder was deleted. false – The file version is not deleted.
  - `entityType` — `enum:string`  
      The type of file version. Possible values: - SEED_FILE – A document that was not split into sheets when uploaded to Forma Files. - DOCUMENT – A document that was split into sheets when uploaded to Forma Files.
  - `parentFolderUrn` — `string`  
      The ID (URN) of the parent folder that contains the file version.
  - `storageUrn` — `string`  
      The URN of the file version’s storage object.
  - `customAttributes` — `array: object`  
      A list of custom attributes assigned to the file version. For more information, see Customize Documents with Attributes.
    - `id` — `int`  
        The unique identifier of the custom attribute.
    - `type` — `enum:string`  
        The data type of the custom attribute. Possible values: - string – Text field. - date – Date field. - array – Drop-down list.
    - `name` — `string`  
        The name of the custom attribute.
    - `value` — `string`  
        The value of the custom attribute.
  - `version` — `int`  
      The version number of the resource in Forma Files. This number increases when the file is completely replaced (for example, re-uploaded and overwritten), not when it is merely updated or saved.
  - `approvalStatus` — `object`  
      The approval status of the file version. For more information, see File Status documentation.
    - `id` — `string`  
        The unique identifier of the approval status.
    - `label` — `string`  
        The customized label of the approval status. Max length: 255
    - `value` — `string`  
        The value of the approval status.
  - `fileType` — `string`  
      The file type of the version. For more details, see the Supported Files documentation.
- `pagination` — `object`  
    The pagination information for the response. This object is included when results are returned in multiple pages.
  - `limit` — `int`  
      The maximum number of objects that may be returned in the page.
  - `offset` — `int`  
      The offset from the start of the collection to the first entry in the page. It is zero-based.
  - `nextUrl` — `string`  
      The URL to retrieve the next page of results. If not included, this is the last page of results.
  - `totalResults` — `int`  
      The total number of results that match the query, regardless of the limit value.

## Example

```
curl -v 'https://developer.api.autodesk.com/construction/packages/v1/projects/657a5565-09b7-48e0-bd03-acacfe42efaf/packages/c25d1273-41e3-4e04-be1e-f4c1ba809d14/resources?limit=200&filter[fileType]=pdf,rvt&filter[version]=1,2,3&sort=name' \
  -H 'Authorization: Bearer AuIPTf4KYLTYGVnOHQ0cuolwCW2a'
```

```
{
  "results": [
    {
      "urn": "urn:adsk.wip:fs.file:vf.betLCOhhTF6o1ACTFdEbXA?version=1",
      "id": "f16e92f0-64be-4ae1-bcd6-dd2ad004c8d2",
      "createdAt": "2025-03-27T03:29:48.000Z",
      "createdBy": "L9VDREARJ7X2",
      "createdByName": "John Smith",
      "updatedAt": "2025-03-05T08:14:53.000Z",
      "updatedBy": "L9VDREARJ7X2",
      "updatedByName": "John Smith",
      "name": "101-BIMicon-CD-L2-DR-A-A40-010-R1.pdf",
      "description": "BIM icon CD L2 DR A40 010 R1",
      "isDeleted": false,
      "entityType": "SEED_FILE",
      "parentFolderUrn": "urn:adsk.wip:fs.folder:co.rbR46ACySm6qdS4vAOdDDA",
      "storageUrn": "urn:adsk.objects:os.object:wip.dm.prod/c4a75bbc-24eb-41a3-a58b-48e51942222e.pdf",
      "customAttributes": [
        {
          "id": 123,
          "type": "array",
          "name": "Drawing Type",
          "value": "General"
        }
      ],
      "version": 1,
      "approvalStatus": {
        "id": "f44e623d-f04f-47fe-8195-efc43d1d985b",
        "label": "Approved",
        "value": "approved"
      },
      "fileType": "pdf"
    }
  ],
  "pagination": {
    "limit": 200,
    "offset": 0,
    "nextUrl": "https://developer.api.autodesk.com/construction/packages/v1/projects/657a5565-09b7-48e0-bd03-acacfe42efaf/packages/c25d1273-41e3-4e04-be1e-f4c1ba809d14/resources?limit=100&offset=200",
    "totalResults": 100
  }
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
- `POST /bim360/docs/v1/projects/{project_id}/versions:batch-get` — [Retrieves a list of custom attribute values for multiple BIM 360 Document Management documents](./document-management-versionsbatch-get-POST.md)
- `GET /construction/packages/v1/projects/{projectId}/packages` — [Retrieves a list of all packages within a specified Forma project](./packages-list-packages-GET.md)
- `GET /construction/rcm/v1/projects/{projectId}/published-versions/{versionId}/linked-files` — [Linked Files](./rcm-linked-files-GET.md)
- `POST /construction/files/v1/projects/{projectId}/exports` — [Exports one or more individual PDFs, or 2D views and sheets (from DWG or RVT files) as PDFs from the Forma files module](./v1-files-export-pdf-files-POST.md)
- `GET /construction/files/v1/projects/{projectId}/exports/{exportId}` — [Retrieves the status of an export job](./v1-files-export-status-and-result-GET.md)

---
원본 문서: https://aps.autodesk.com/en/docs/acc/v1/reference/http/packages-list-package-resources-GET
