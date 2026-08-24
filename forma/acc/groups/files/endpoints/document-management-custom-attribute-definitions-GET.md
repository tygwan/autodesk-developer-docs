---
operation_id: document-management-custom-attribute-definitions-GET
method: GET
path: /bim360/docs/v1/projects/{project_id}/folders/{folder_id}/custom-attribute-definitions
group: "Files"
auth_context: user context optional
scopes: [data:read]
surface: http
verification: docs-only
---

# Custom Attributes (beta)

```http
GET https://developer.api.autodesk.com/bim360/docs/v1/projects/:project_id/folders/:folder_id/custom-attribute-definitions
```

| | |
| --- | --- |
| **인증 컨텍스트** | user context optional |
| **필요 스코프** | `data:read` |
| **데이터 포맷** | JSON |
| **그룹** | Files |

Retrieves a complete list of custom attribute definitions for all the documents in a specific folder, including custom attributes that have not been assigned a value, as well as the potential drop-down (array) values.

## 요청

### URI 파라미터

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `project_id` | string: UUID |  | The ID of the project. This corresponds to the project ID in the Data Management API. To convert a project ID in the Data Management API to a project ID in the BIM 360 API you need to remove the “b." prefix. For example, a project ID of b.a4be0c34a-4ab7 translates to a project ID of a4be0c34a-4ab7. |
| `folder_id` | string |  | The URL-encoded ID (URN) of the folder. For details about how to find the URN, follow the initial steps (1-3) of the Download Files tutorial. |

### 쿼리 파라미터

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `limit` | int |  | The number of results to return in the response. Acceptable values: 1-200. Default value: 10. For example, to limit the response to two custom attributes per page, use limit=2. |
| `offset` | int |  | The item number that you want to begin results from. Default value: 0. For example, to begin the results from item three, use offset=3. |

### 헤더

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `Authorization` | string | **필수** | Must be Bearer <token>, where <token> is a two-legged access token obtained via a Client Credentials Grant flow, or a three-legged access token obtained via an Authorization Code flow or a Secure Service Account (SSA) flow. The SSA flow is designed for headless server-to-server operations. While it functions like a two-legged flow (no user interaction), it is classified as three-legged because it preserves user context. |
| `x-user-id` | string |  | In a two-legged authentication context, the app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act on behalf of only the user specified. |

## 응답

| 코드 | 의미 | 설명 |
| --- | --- | --- |
| `200` | OK | Successfully retrieved the list of custom attribute definitions. |
| `400` | Bad Request | The parameters of the requested operation are invalid. |
| `403` | Forbidden | The user or service represented by the bearer token does not have permission to perform this operation. |
| `404` | Not Found | The project or folder does not exist. |
| `500` | Internal Server Error | An unknown error occurred on the server. |

### 응답 본문 (200)

- `results` — `array: object`  
    The list of results.
  - `id` — `int`  
      The ID of the attribute.
  - `name` — `string`  
      The name of the attribute.
  - `type` — `enum:string`  
      The type of attribute. Possible values: string (text field), date, array (drop-list).
  - `arrayValues` — `array: string`  
      A list of possible values for the attribute. Only relevant for drop-list attributes.
- `pagination` — `object`  
    Pagination information when data must be returned page by page.
  - `limit` — `int`  
      The number of results to return in the response.
  - `offset` — `int`  
      The item number that the results begin from.
  - `totalResults` — `int`  
      Total number of results.
  - `previousUrl` — `string`  
      The URL for the previous page of results.
  - `nextUrl` — `string`  
      The URL for the next page of results.

## Example

```
curl -v 'https://developer.api.autodesk.com/bim360/docs/v1/projects/c0337487-5b66-422b-a284-c273b424af54/folders/urn%3Aadsk.wipprod%3Afs.folder%3Aco.9g7HeA2wRqOxLlgLJ40UGQ/custom-attribute-definitions' \
  -H 'Authorization: Bearer AuIPTf4KYLTYGVnOHQ0cuolwCW2a'
```

```
{
  "results": [
    {
      "id": 1001,
      "name": "Drawing Stage",
      "type": "string"
    },
    {
      "id": 1002,
      "name": "Publish Date",
      "type": "date"
    },
    {
      "id": 1003,
      "name": "Drawing Type",
      "type": "array",
      "arrayValues": [
        "Details",
        "General",
        "Plans",
        "Schedules"
      ]
    },
    {
      "id": 1004,
      "name": "Original Number",
      "type": "string"
    }
  ],
  "pagination": {
    "limit": 100,
    "offset": 200,
    "totalResults": 500,
    "previousUrl": "",
    "nextUrl": ""
  }
}
```

## 같은 그룹의 다른 엔드포인트

- `GET /construction/files/v1/projects/{projectId}/custom-attribute-definitions` — [Retrieves a list of custom attribute definitions for a Forma project](./customattributes-custom-attribute-definitions-GET.md)
- `GET /construction/files/v1/projects/{projectId}/custom-attribute-definitions/{customAttributeDefinitionId}/items` — [Retrieves the selectable options for a large drop-down list (largeList) custom attribute definition](./customattributes-items-GET.md)
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
- `POST /construction/files/v1/projects/{projectId}/exports` — [Exports one or more individual PDFs, or 2D views and sheets (from DWG or RVT files) as PDFs from the Forma files module](./v1-files-export-pdf-files-POST.md)
- `GET /construction/files/v1/projects/{projectId}/exports/{exportId}` — [Retrieves the status of an export job](./v1-files-export-status-and-result-GET.md)

---
원본 문서: https://aps.autodesk.com/en/docs/acc/v1/reference/http/document-management-custom-attribute-definitions-GET
