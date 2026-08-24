---
operation_id: document-management-custom-attribute-definitions-POST
method: POST
path: /bim360/docs/v1/projects/{project_id}/folders/{folder_id}/custom-attribute-definitions
group: "Files"
auth_context: user context optional
scopes: [data:write]
surface: http
verification: docs-only
---

# Adds a custom attribute to a folder

```http
POST https://developer.api.autodesk.com/bim360/docs/v1/projects/:project_id/folders/:folder_id/custom-attribute-definitions
```

| | |
| --- | --- |
| **인증 컨텍스트** | user context optional |
| **필요 스코프** | `data:write` |
| **데이터 포맷** | JSON |
| **그룹** | Files |

Adds a custom attribute to a folder.

## 요청

### URI 파라미터

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `project_id` | string: UUID |  | The ID of the project. This corresponds to the project ID in the Data Management API. To convert a project ID in the Data Management API to a project ID in the BIM 360 API you need to remove the “b." prefix. For example, a project ID of b.a4be0c34a-4ab7 translates to a project ID of a4be0c34a-4ab7. |
| `folder_id` | string |  | The URL-encoded ID (URN) of the folder. For details about how to find the URN, follow the initial steps (1-3) of the Download Files tutorial. |

### 헤더

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `Authorization` | string | **필수** | Must be Bearer <token>, where <token> is a two-legged access token obtained via a Client Credentials Grant flow, or a three-legged access token obtained via an Authorization Code flow or a Secure Service Account (SSA) flow. The SSA flow is designed for headless server-to-server operations. While it functions like a two-legged flow (no user interaction), it is classified as three-legged because it preserves user context. |
| `Content-Type` | string | **필수** | Must be application/json |
| `x-user-id` | string |  | In a two-legged authentication context, the app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act on behalf of only the user specified. |

### 요청 본문

- `name` — `string` **(필수)**  
    The name of the attribute. It needs to be unique within the folder.
- `type` — `enum:string` **(필수)**  
    The type of attribute. Possible values: string (text field), date, array (drop-list).
- `arrayValues` — `array: string`  
    A list of possible values for the attribute. Only relevant for drop-list attributes.

## 응답

| 코드 | 의미 | 설명 |
| --- | --- | --- |
| `201` | Created | Successfully added a custom attribute. |
| `400` | Bad Request | The parameters of the requested operation are invalid. |
| `403` | Forbidden | The user or service represented by the bearer token does not have permission to perform this operation. |
| `404` | Not Found | The project or folder does not exist. |
| `500` | Internal Server Error | An unknown error occurred on the server. |

### 응답 본문 (201)

- `id` — `int`  
    The ID of the attribute.
- `name` — `string`  
    The name of the attribute.
- `type` — `enum:string`  
    The type of attribute. Possible values: string (text field), date, array (drop-list).
- `arrayValues` — `array: string`  
    A list of possible values for the attribute. Only relevant for drop-list attributes.

## Example

```
curl -v 'https://developer.api.autodesk.com/bim360/docs/v1/projects/c0337487-5b66-422b-a284-c273b424af54/folders/urn%3Aadsk.wipprod%3Afs.folder%3Aco.9g7HeA2wRqOxLlgLJ40UGQ/custom-attribute-definitions' \
  -X 'POST' \
  -H 'Authorization: Bearer AuIPTf4KYLTYGVnOHQ0cuolwCW2a' \
  -H 'Content-Type: application/json' \
  -d '{
        "name": "Drawing Type",
        "type": "array",
        "arrayValues": [
          "Details",
          "General",
          "Plans",
          "Schedules"
        ]
      }'
```

```
{
  "id": 123,
  "name": "Drawing Type",
  "type": "array",
  "arrayValues": [
    "Details",
    "General",
    "Plans",
    "Schedules"
  ]
}
```

## 같은 그룹의 다른 엔드포인트

- `GET /construction/files/v1/projects/{projectId}/custom-attribute-definitions` — [Retrieves a list of custom attribute definitions for a Forma project](./customattributes-custom-attribute-definitions-GET.md)
- `GET /construction/files/v1/projects/{projectId}/custom-attribute-definitions/{customAttributeDefinitionId}/items` — [Retrieves the selectable options for a large drop-down list (largeList) custom attribute definition](./customattributes-items-GET.md)
- `GET /bim360/docs/v1/projects/{project_id}/folders/{folder_id}/custom-attribute-definitions` — [Custom Attributes (beta)](./document-management-custom-attribute-definitions-GET.md)
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
- `POST /construction/files/v1/projects/{projectId}/exports` — [Exports one or more individual PDFs, or 2D views and sheets (from DWG or RVT files) as PDFs from the Forma files module](./v1-files-export-pdf-files-POST.md)
- `GET /construction/files/v1/projects/{projectId}/exports/{exportId}` — [Retrieves the status of an export job](./v1-files-export-status-and-result-GET.md)

---
원본 문서: https://aps.autodesk.com/en/docs/acc/v1/reference/http/document-management-custom-attribute-definitions-POST
