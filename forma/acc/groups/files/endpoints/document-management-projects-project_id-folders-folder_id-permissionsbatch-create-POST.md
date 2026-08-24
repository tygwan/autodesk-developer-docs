---
operation_id: document-management-projects-project_id-folders-folder_id-permissionsbatch-create-POST
method: POST
path: /bim360/docs/v1/projects/{project_id}/folders/{folder_id}/permissions:batch-create
group: "Files"
auth_context: user context optional
scopes: [data:write]
surface: http
verification: docs-only
---

# Assign permissions to multiple users, roles, and companies for a BIM 360 Document Management folder

```http
POST https://developer.api.autodesk.com/bim360/docs/v1/projects/:project_id/folders/:folder_id/permissions:batch-create
```

| | |
| --- | --- |
| **인증 컨텍스트** | user context optional |
| **필요 스코프** | `data:write` |
| **데이터 포맷** | JSON |
| **그룹** | Files |

Assign permissions to multiple users, roles, and companies for a BIM 360 Document Management folder.

## 요청

### URI 파라미터

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `project_id` | string: UUID |  | The ID of the project. This corresponds to project ID in the Data Management API. To convert a project ID in the Data Management API into a project ID in the BIM 360 API you need to remove the “b." prefix. For example, a project ID of b.a4be0c34a-4ab7 translates to a project ID of a4be0c34a-4ab7. |
| `folder_id` | string |  | The ID (URN) of the folder. For details about how to find the URN, follow the initial steps (1-3) in the Download Files tutorial. |

### 헤더

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `Authorization` | string | **필수** | Must be Bearer <token>, where <token> is a two-legged access token obtained via a Client Credentials Grant flow, or a three-legged access token obtained via an Authorization Code flow or a Secure Service Account (SSA) flow. The SSA flow is designed for headless server-to-server operations. While it functions like a two-legged flow (no user interaction), it is classified as three-legged because it preserves user context. |
| `Content-Type` | string | **필수** | Must be application/json |
| `x-user-id` | string |  | In a two-legged authentication context, the app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act on behalf of only the user specified. |

### 요청 본문

- `subjectId` — `string: UUID` **(필수)**  
    The ID of the user, role, or company. To verify the subjectId: - For a user, use GET users. - For a role, use GET roles - For a company, use GET companies
- `autodeskId` — `string`  
    The Autodesk ID of the user, role or company.
- `subjectType` — `enum:string` **(필수)**  
    The type of subject. Possible values: USER, COMPANY, ROLE
- `actions` — `array: string` **(필수)**  
    Permitted actions for the user, role, or company. The permission action group is different in BIM 360 Document Management and Forma Build Files. - The six permission levels in BIM 360 Document Management correspond to one or more actions: - View Only: VIEW, COLLABORATE - View/Download: VIEW, DOWNLOAD, COLLABORATE - Upload Only: PUBLISH - View/Download+Upload: PUBLISH, VIEW, DOWNLOAD, COLLABORATE - View/Download+Upload+Edit: PUBLISH, VIEW, DOWNLOAD, COLLABORATE, EDIT - Full controller: PUBLISH, VIEW, DOWNLOAD, COLLABORATE, EDIT, CONTROL - The six permission levels in Forma correspond to one or more actions: - View Only: VIEW, COLLABORATE - View/Download: VIEW, DOWNLOAD, COLLABORATE - View/Download+PublishMarkups: VIEW, DOWNLOAD, COLLABORATE, PUBLISH_MARKUP - View/Download+PublishMarkups+Upload: PUBLISH, VIEW, DOWNLOAD, COLLABORATE, PUBLISH_MARKUP - View/Download+PublishMarkups+Upload+Edit: PUBLISH, VIEW, DOWNLOAD, COLLABORATE, PUBLISH_MARKUP, EDIT - Full controller: PUBLISH, VIEW, DOWNLOAD, COLLABORATE, PUBLISH_MARKUP, EDIT, CONTROL See the BIM 360 Help documentation or the Forma Files Help documentation for more details about each permission level. Note that the full set of permissions assigned to the user, role, or company is a combination of actions and inheritActions.

## 응답

| 코드 | 의미 | 설명 |
| --- | --- | --- |
| `200` | OK | Successfully created permissions |
| `400` | Bad Request | Operation failed because of bad input |
| `403` | Forbidden | The user does not have permission to perform this operation. |
| `404` | Not Found | The project or folder does not exist |
| `422` | Unprocessable Entity | The payload contains unprocessable data |
| `423` | Locked | The folder is temporarily inaccessible because it is being used by another operation. |
| `429` | Too Many Requests | The server has received too many requests. |
| `500` | Internal Server Error | Operation failed because of an internal server error |

### 응답 본문 (200)

- `results` — `array: object`  
    The results object.
  - `subjectId` — `string: UUID`  
      The ID of the user, role, or company. For example, this corresponds to the id, roleId, or companyId in the response for GET /users/user_id.
  - `subjectType` — `enum:string`  
      The type of subject. Possible values: USER, COMPANY, ROLE
  - `actions` — `array: string`  
      Permitted actions for the user, role, or company. The permission action group is different in BIM 360 Document Management and Forma Build Files. - The six permission levels in BIM 360 Document Management correspond to one or more actions: - View Only: VIEW, COLLABORATE - View/Download: VIEW, DOWNLOAD, COLLABORATE - Upload Only: PUBLISH - View/Download+Upload: PUBLISH, VIEW, DOWNLOAD, COLLABORATE - View/Download+Upload+Edit: PUBLISH, VIEW, DOWNLOAD, COLLABORATE, EDIT - Full controller: PUBLISH, VIEW, DOWNLOAD, COLLABORATE, EDIT, CONTROL - The six permission levels in Forma correspond to one or more actions: - View Only: VIEW, COLLABORATE - View/Download: VIEW, DOWNLOAD, COLLABORATE - View/Download+PublishMarkups: VIEW, DOWNLOAD, COLLABORATE, PUBLISH_MARKUP - View/Download+PublishMarkups+Upload: PUBLISH, VIEW, DOWNLOAD, COLLABORATE, PUBLISH_MARKUP - View/Download+PublishMarkups+Upload+Edit: PUBLISH, VIEW, DOWNLOAD, COLLABORATE, PUBLISH_MARKUP, EDIT - Full controller: PUBLISH, VIEW, DOWNLOAD, COLLABORATE, PUBLISH_MARKUP, EDIT, CONTROL See the BIM 360 Help documentation or the Forma Files Help documentation for more details about each permission level. Note that the full set of permissions assigned to the user, role, or company is a combination of actions and inheritActions.

## Example

```
curl -v 'https://developer.api.autodesk.com/bim360/docs/v1/projects/c0337487-5b66-422b-a284-c273b424af54/folders/urn:adsk.wipprod:fs.folder:co.9g7HeA2wRqOxLlgLJ40UGQ/permissions:batch-create' \
  -X 'POST' \
  -H 'Authorization: Bearer AuIPTf4KYLTYGVnOHQ0cuolwCW2a' \
  -H 'Content-Type: application/json' \
  -d '[
        {
          "subjectId": "684c4e47-7720-4961-b0e9-ff5966d82edb",
          "autodeskId": "45GPJ4KAX789",
          "subjectType": "USER",
          "actions": [
            "PUBLISH"
          ]
        }
      ]'
```

```
{
  "results": [
    {
      "subjectId": "684c4e47-7720-4961-b0e9-ff5966d82edb",
      "subjectType": "USER",
      "actions": [
        "PUBLISH"
      ]
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
- `POST /bim360/docs/v1/projects/{project_id}/folders/{folder_id}/permissions:batch-delete` — [Deletes all the permissions assigned to specified users, roles, and companies](./document-management-projects-project_id-folders-folder_id-permissionsbatch-delete-POST.md)
- `POST /bim360/docs/v1/projects/{project_id}/folders/{folder_id}/permissions:batch-update` — [Updates the permissions assigned to multiple users, roles, and companies for a folder](./document-management-projects-project_id-folders-folder_id-permissionsbatch-update-POST.md)
- `POST /bim360/docs/v1/projects/{project_id}/versions:batch-get` — [Retrieves a list of custom attribute values for multiple BIM 360 Document Management documents](./document-management-versionsbatch-get-POST.md)
- `GET /construction/packages/v1/projects/{projectId}/packages/{packageId}/resources` — [Retrieves a list of file versions (“resources”) within a specified package](./packages-list-package-resources-GET.md)
- `GET /construction/packages/v1/projects/{projectId}/packages` — [Retrieves a list of all packages within a specified Forma project](./packages-list-packages-GET.md)
- `GET /construction/rcm/v1/projects/{projectId}/published-versions/{versionId}/linked-files` — [Linked Files](./rcm-linked-files-GET.md)
- `POST /construction/files/v1/projects/{projectId}/exports` — [Exports one or more individual PDFs, or 2D views and sheets (from DWG or RVT files) as PDFs from the Forma files module](./v1-files-export-pdf-files-POST.md)
- `GET /construction/files/v1/projects/{projectId}/exports/{exportId}` — [Retrieves the status of an export job](./v1-files-export-status-and-result-GET.md)

---
원본 문서: https://aps.autodesk.com/en/docs/acc/v1/reference/http/document-management-projects-project_id-folders-folder_id-permissionsbatch-create-POST
