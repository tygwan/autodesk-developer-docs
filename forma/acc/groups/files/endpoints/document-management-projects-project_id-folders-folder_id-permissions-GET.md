---
operation_id: document-management-projects-project_id-folders-folder_id-permissions-GET
method: GET
path: /bim360/docs/v1/projects/{project_id}/folders/{folder_id}/permissions
group: "Files"
auth_context: user context optional
scopes: [data:read]
surface: http
verification: docs-only
---

# Permissions

```http
GET https://developer.api.autodesk.com/bim360/docs/v1/projects/:project_id/folders/:folder_id/permissions
```

| | |
| --- | --- |
| **인증 컨텍스트** | user context optional |
| **필요 스코프** | `data:read` |
| **데이터 포맷** | JSON |
| **그룹** | Files |

Retrieves information about the permissions assigned to users, roles and companies for a BIM 360 Document Management folder, including details about the name and the status.

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
| `x-user-id` | string |  | In a two-legged authentication context, the app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act on behalf of only the user specified. |

## 응답

| 코드 | 의미 | 설명 |
| --- | --- | --- |
| `200` | OK | Successfully retrieved a list of permissions |
| `400` | Bad Request | Operation failed because of bad input |
| `403` | Forbidden | The user does not have permission to perform this operation. |
| `404` | Not Found | The project or folder does not exist |
| `429` | Too Many Requests | The server has received too many requests. |
| `500` | Internal Server Error | Operation failed because of an internal server error |

### 응답 본문 (200)

- `subjectId` — `string: UUID`  
    The ID of the user, role, or company. For example, this corresponds to the id, roleId, or companyId in the response for GET /users/user_id.
- `autodeskId` — `string`  
    The Autodesk ID of the user, role or company.
- `name` — `string`  
    The name of the user, role, or company.
- `email` — `string`  
    The user’s email. Only relevant if the subject is a user.
- `userType` — `enum:string`  
    The type of project user. Possible values: PROJECT_ADMIN or PROJECT_MEMBER. Only relevant if the subject is a user.
- `subjectType` — `enum:string`  
    The type of subject. Possible values: USER, COMPANY, ROLE
- `subjectStatus` — `enum:string`  
    The status of the user, role, or company. Possible values: - For a user: INACTIVE, ACTIVE, PENDING, DISABLED - For a role: INACTIVE, ACTIVE - For a company: ACTIVE
- `actions` — `array: string`  
    Permitted actions for the user, role, or company. The permission action group is different in BIM 360 Document Management and Forma Files. - The six permission levels in BIM 360 Document Management correspond to one or more actions: - View Only: VIEW, COLLABORATE - View/Download: VIEW, DOWNLOAD, COLLABORATE - Upload Only: PUBLISH - View/Download+Upload: PUBLISH, VIEW, DOWNLOAD, COLLABORATE - View/Download+Upload+Edit: PUBLISH, VIEW, DOWNLOAD, COLLABORATE, EDIT - Full controller: PUBLISH, VIEW, DOWNLOAD, COLLABORATE, EDIT, CONTROL - The six permission levels in Forma correspond to one or more actions: - View Only: VIEW, COLLABORATE - View/Download: VIEW, DOWNLOAD, COLLABORATE - View/Download+PublishMarkups: VIEW, DOWNLOAD, COLLABORATE, PUBLISH_MARKUP - View/Download+PublishMarkups+Upload: PUBLISH, VIEW, DOWNLOAD, COLLABORATE, PUBLISH_MARKUP - View/Download+PublishMarkups+Upload+Edit: PUBLISH, VIEW, DOWNLOAD, COLLABORATE, PUBLISH_MARKUP, EDIT - Full controller: PUBLISH, VIEW, DOWNLOAD, COLLABORATE, PUBLISH_MARKUP, EDIT, CONTROL See the BIM 360 Help documentation or the Forma Files Help documentation for more details about each permission group. Note that the full set of permissions assigned to the user, role, or company is a combination of actions and inheritActions.
- `inheritActions` — `array: string`  
    Permissions inherited by the user, role, or company from a higher level folder. The permission action group is different in BIM 360 Document Management and Forma Files. - The six permission levels in BIM 360 Document Management correspond to one or more actions: - View Only: VIEW, COLLABORATE - View/Download: VIEW, DOWNLOAD, COLLABORATE - Upload Only: PUBLISH - View/Download+Upload: PUBLISH, VIEW, DOWNLOAD, COLLABORATE - View/Download+Upload+Edit: PUBLISH, VIEW, DOWNLOAD, COLLABORATE, EDIT - Full controller: PUBLISH, VIEW, DOWNLOAD, COLLABORATE, EDIT, CONTROL - The six permission levels in Forma correspond to one or more actions: - View Only: VIEW, COLLABORATE - View/Download: VIEW, DOWNLOAD, COLLABORATE - View/Download+PublishMarkups: VIEW, DOWNLOAD, COLLABORATE, PUBLISH_MARKUP - View/Download+PublishMarkups+Upload: PUBLISH, VIEW, DOWNLOAD, COLLABORATE, PUBLISH_MARKUP - View/Download+PublishMarkups+Upload+Edit: PUBLISH, VIEW, DOWNLOAD, COLLABORATE, PUBLISH_MARKUP, EDIT - Full controller: PUBLISH, VIEW, DOWNLOAD, COLLABORATE, PUBLISH_MARKUP, EDIT, CONTROL See the BIM 360 Help documentation or the Forma Files Help documentation for more details about each permission group. Note that the full set of permissions assigned to the user, role, or company is a combination of actions and inheritActions. Note that project administrators’ permissions are non-inherited actions for the root folder, and inherited actions for all other folders.

## Example

```
curl -v 'https://developer.api.autodesk.com/bim360/docs/v1/projects/c0337487-5b66-422b-a284-c273b424af54/folders/urn:adsk.wipprod:fs.folder:co.9g7HeA2wRqOxLlgLJ40UGQ/permissions' \
  -H 'Authorization: Bearer AuIPTf4KYLTYGVnOHQ0cuolwCW2a'
```

```
[
  {
    "subjectId": "684c4e47-7720-4961-b0e9-ff5966d82edb",
    "autodeskId": "45GPJ4KAX789",
    "name": "John Smith",
    "email": "john.smith@mail.com",
    "userType": "PROJECT_ADMIN",
    "subjectType": "USER",
    "subjectStatus": "ACTIVE",
    "actions": [
      "PUBLISH"
    ],
    "inheritActions": [
      "PUBLISH"
    ]
  }
]
```

## 같은 그룹의 다른 엔드포인트

- `GET /construction/files/v1/projects/{projectId}/custom-attribute-definitions` — [Retrieves a list of custom attribute definitions for a Forma project](./customattributes-custom-attribute-definitions-GET.md)
- `GET /construction/files/v1/projects/{projectId}/custom-attribute-definitions/{customAttributeDefinitionId}/items` — [Retrieves the selectable options for a large drop-down list (largeList) custom attribute definition](./customattributes-items-GET.md)
- `GET /bim360/docs/v1/projects/{project_id}/folders/{folder_id}/custom-attribute-definitions` — [Custom Attributes (beta)](./document-management-custom-attribute-definitions-GET.md)
- `POST /bim360/docs/v1/projects/{project_id}/folders/{folder_id}/custom-attribute-definitions` — [Adds a custom attribute to a folder](./document-management-custom-attribute-definitions-POST.md)
- `POST /bim360/docs/v1/projects/{project_id}/versions/{version_id}/custom-attributes:batch-update` — [Assigns values to custom attributes for multiple documents](./document-management-custom-attributesbatch-update-POST.md)
- `GET /bim360/docs/v1/projects/{projectId}/naming-standards/{id}` — [Retrieves the file naming standard for a project](./document-management-naming-standards-id-GET.md)
- `POST /bim360/docs/v1/projects/{project_id}/folders/{folder_id}/permissions:batch-create` — [Assign permissions to multiple users, roles, and companies for a BIM 360 Document Management folder](./document-management-projects-project_id-folders-folder_id-permissionsbatch-create-POST.md)
- `POST /bim360/docs/v1/projects/{project_id}/folders/{folder_id}/permissions:batch-delete` — [Deletes all the permissions assigned to specified users, roles, and companies](./document-management-projects-project_id-folders-folder_id-permissionsbatch-delete-POST.md)
- `POST /bim360/docs/v1/projects/{project_id}/folders/{folder_id}/permissions:batch-update` — [Updates the permissions assigned to multiple users, roles, and companies for a folder](./document-management-projects-project_id-folders-folder_id-permissionsbatch-update-POST.md)
- `POST /bim360/docs/v1/projects/{project_id}/versions:batch-get` — [Retrieves a list of custom attribute values for multiple BIM 360 Document Management documents](./document-management-versionsbatch-get-POST.md)
- `GET /construction/packages/v1/projects/{projectId}/packages/{packageId}/resources` — [Retrieves a list of file versions (“resources”) within a specified package](./packages-list-package-resources-GET.md)
- `GET /construction/packages/v1/projects/{projectId}/packages` — [Retrieves a list of all packages within a specified Forma project](./packages-list-packages-GET.md)
- `GET /construction/rcm/v1/projects/{projectId}/published-versions/{versionId}/linked-files` — [Linked Files](./rcm-linked-files-GET.md)
- `POST /construction/files/v1/projects/{projectId}/exports` — [Exports one or more individual PDFs, or 2D views and sheets (from DWG or RVT files) as PDFs from the Forma files module](./v1-files-export-pdf-files-POST.md)
- `GET /construction/files/v1/projects/{projectId}/exports/{exportId}` — [Retrieves the status of an export job](./v1-files-export-status-and-result-GET.md)

---
원본 문서: https://aps.autodesk.com/en/docs/acc/v1/reference/http/document-management-projects-project_id-folders-folder_id-permissions-GET
