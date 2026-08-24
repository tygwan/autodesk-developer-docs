---
operation_id: v1-files-export-pdf-files-POST
method: POST
path: /construction/files/v1/projects/{projectId}/exports
group: "Files"
auth_context: user context optional
scopes: [data:write]
surface: http
verification: docs-only
---

# Exports one or more individual PDFs, or 2D views and sheets (from DWG or RVT files) as PDFs from the Forma files module

```http
POST https://developer.api.autodesk.com/construction/files/v1/projects/{projectId}/exports
```

| | |
| --- | --- |
| **인증 컨텍스트** | user context optional |
| **필요 스코프** | `data:write` |
| **데이터 포맷** | JSON |
| **그룹** | Files |

Exports one or more individual PDFs, or 2D views and sheets (from DWG or RVT files) as PDFs from the Forma files module. All PDFs are packaged into a single ZIP file.

## 요청

### URI 파라미터

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `projectId` | string: UUID |  | The ID of the project. Use the Data Management API to retrieve the project ID. For more information, see the Retrieve a Project ID tutorial. You can use a project ID either with a “b.” prefix or without a “b.” prefix. For instance, a project ID of “b.a4be0c34a-4ab7” can also be referred to as “a4be0c34a-4ab7”. |

### 헤더

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `Authorization` | string | **필수** | Must be Bearer <token>, where <token> is a two-legged access token obtained via a Client Credentials Grant flow, or a three-legged access token obtained via an Authorization Code flow or a Secure Service Account (SSA) flow. The SSA flow is designed for headless server-to-server operations. While it functions like a two-legged flow (no user interaction), it is classified as three-legged because it preserves user context. |
| `x-user-id` | string |  | The ID of a user on whose behalf your API request is acting. Required if you’re using a 2-legged authentication context, which must be 2-legged OAuth2 security with user impersonation. The app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act on behalf of only the user specified. You can use either the user’s Forma ID (id), or their Autodesk ID (autodeskId). |
| `Content-Type` | string | **필수** | Must be application/json |

### 요청 본문

- `options` — `object`  
    The criteria for the markups and links to include with the exported files. Note that unpublished markups are those visible only to their creator.
  - `outputFileName` — `string`  
      The name of the file that will be produced by the export operation. This should not include the filename extension.
  - `standardMarkups` — `object`  
      The options for which standard markups and associated links to export. No markups or links will be exported if all options are set to false.
    - `includePublishedMarkups` — `boolean`  
        true: (Default) Include all published standard markups in the exported files. Note that published markups are visible to all project members. false: Export files without including any published standard markups.
    - `includeUnpublishedMarkups` — `boolean`  
        true: (Default) Include in the exported files all standard markups that are only visible to their creators. false: Export files without including unpublished markups.
    - `includeMarkupLinks` — `boolean`  
        true: Include with each exported file the supported type reference links added to its markups. Supported links are links to Sheets, Files, RFIs, Forms, Submittals, and Assets. false: (Default) Export files without any reference links. Note that this parameter will be treated as false if the values of includePublishedMarkups and includeUnpublishedMarkups are both false.
  - `issueMarkups` — `object`  
      The options for which Issues markups to export. No Issues markups will be exported if both options are set to false.
    - `includePublishedMarkups` — `boolean`  
        true: Include all published Issues markups in the exported files. false: (Default) Export files without including any published Issues markups.
    - `includeUnpublishedMarkups` — `boolean`  
        true: Include in the exported files all Issues markups that are only visible to their creators or assignees. false: (default) Export files without including any unpublished Issues markups.
  - `photoMarkups` — `object`  
      The options for which Photos markups to export. No Photos markups will be exported if both options are set to false.
    - `includePublishedMarkups` — `boolean`  
        true: Include all published Photos markups in the exported files. false: (Default) Export files without including any published Photos markups.
    - `includeUnpublishedMarkups` — `boolean`  
        true: Include in the exported files all Photos markups that are only visible to their creators or assignees. false: (default) Export files without including any unpublished Photos markups.
- `fileVersions` — `array: string` **(필수)**  
    A list of file version URNs. A maximum of 200 files may be included.

## 응답

| 코드 | 의미 | 설명 |
| --- | --- | --- |
| `202` | Accepted | Successfully created an export job. |
| `400` | Bad Request | The parameters of the requested operation are invalid. Sample error code with possible messages: - ERR_BAD_INPUT: - Multiple documents only can be exported as a ZIP file. - 2D views and sheets in DWG or RVT format can only be exported as a ZIP file. - Some resources are not valid types (only PDF, DWG, and RVT are accepted). |
| `401` | Unauthorized | The provided bearer token is not valid. Sample error code with possible messages: - ERR_AUTHENTICATED_ERROR: - Authentication header is not correct |
| `403` | Forbidden | The user or service represented by the bearer token does not have permission to perform this operation. Sample error code with possible messages: - ERR_NOT_ALLOWED: - Hub inactive - Project inactive - User inactive - Api access deny - User {userId} does not have download permission on resource {resource} |
| `404` | Not Found | The resources requested, e.g. project, hub, user, and any files included, do not exist. Sample error code with possible messages: - ERR_RESOURCE_NOT_EXIST: - Some resources are not found - Hub not found - Project not found - Project user not found |
| `422` | Unprocessable Entity | The total file size exceeds the 10GB maximum limit. Sample error code with possible messages: - ERR_FILES_TOO_LARGE: - The overall file size is over 10GB. |
| `500` | Internal Server Error | An unknown error occurred on the server. Sample error code with possible messages: - ERR_INTERNAL_SERVER_ERROR: - Request failed for internal exception xxx - Failed to get hub - Failed to get project - Failed to get user |

### 응답 본문 (202)

- `id` — `string: UUID`  
    The ID of the PDF export job.
- `status` — `enum:string`  
    The status of the PDF export job. Possible values: successful, processing, failed

## Example

```
curl -v 'https://developer.api.autodesk.com/construction/files/v1/projects/9ba6681e-1952-4d54-aac4-9de6d9858dd4/exports' \
  -X 'POST' \
  -H 'Authorization: Bearer AuIPTf4KYLTYGVnOHQ0cuolwCW2a' \
  -H 'Content-Type: application/json' \
  -d '{
        "options": {
          "outputFileName": "output_file_name",
          "standardMarkups": {
            "includePublishedMarkups": true,
            "includeUnpublishedMarkups": true,
            "includeMarkupLinks": false
          },
          "issueMarkups": {
            "includePublishedMarkups": false,
            "includeUnpublishedMarkups": false
          },
          "photoMarkups": {
            "includePublishedMarkups": false,
            "includeUnpublishedMarkups": false
          }
        },
        "fileVersions": [
          "urn:adsk.wip.file:vf.fileId?version=2"
        ]
      }'
```

```
{
  "id": "636e6a96-d4d2-43e6-b67a-db8618fc0ff9",
  "status": "processing"
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
- `GET /construction/packages/v1/projects/{projectId}/packages/{packageId}/resources` — [Retrieves a list of file versions (“resources”) within a specified package](./packages-list-package-resources-GET.md)
- `GET /construction/packages/v1/projects/{projectId}/packages` — [Retrieves a list of all packages within a specified Forma project](./packages-list-packages-GET.md)
- `GET /construction/rcm/v1/projects/{projectId}/published-versions/{versionId}/linked-files` — [Linked Files](./rcm-linked-files-GET.md)
- `GET /construction/files/v1/projects/{projectId}/exports/{exportId}` — [Retrieves the status of an export job](./v1-files-export-status-and-result-GET.md)

---
원본 문서: https://aps.autodesk.com/en/docs/acc/v1/reference/http/v1-files-export-pdf-files-POST
