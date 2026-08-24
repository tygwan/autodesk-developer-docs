---
operation_id: packages-list-packages-GET
method: GET
path: /construction/packages/v1/projects/{projectId}/packages
group: "Files"
auth_context: user context optional
scopes: [data:read]
surface: http
verification: docs-only
---

# Retrieves a list of all packages within a specified Forma project

```http
GET https://developer.api.autodesk.com/construction/packages/v1/projects/{projectId}/packages
```

| | |
| --- | --- |
| **인증 컨텍스트** | user context optional |
| **필요 스코프** | `data:read` |
| **데이터 포맷** | JSON |
| **그룹** | Files |

Retrieves a list of all packages within a specified Forma project.

## 요청

### URI 파라미터

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `projectId` | string: UUID |  | The ID of the project. You can retrieve the project ID using the Data Management API. For more details, see the Retrieve a Project ID tutorial. You may provide the project ID with or without the b. prefix: - With prefix: b.657a5565-09b7-48e0-bd03-acacfe42efaf - Without prefix: 657a5565-09b7-48e0-bd03-acacfe42efaf |

### 쿼리 파라미터

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `limit` | int |  | The number of packages to return in the response payload. Possible values: 1-200. Default: 200. For example: limit=2. |
| `offset` | int |  | The number of packages that you want to begin retrieving results from. Default: 0. For example: offset=10 |
| `filter[createdBy]` | string |  | Filters results by the Autodesk ID of the users who created the packages. You can provide a single Autodesk ID or a comma-separated list of IDs. |
| `filter[updatedBy]` | string |  | Filters results by the Autodesk ID of the users who last updated the packages. You can provide a single Autodesk ID or a comma-separated list of IDs. To find the IDs call GET users |
| `filter[createdAt]` | string |  | Filter packages by their creation time. Use an ISO 8601 date-time range in the format startDate..endDate. Either date may be omitted to specify an open-ended range. Examples: - After a specific time: 2025-03-26T16:00:00.000Z.. - Before a specific time: ..2025-03-28T15:59:59.999Z - Between two times: 2025-03-26T16:00:00.000Z..2025-03-28T15:59:59.999Z |
| `filter[updatedAt]` | string |  | Filter packages by their last update time. Use an ISO 8601 date-time range in the format startDate..endDate. Either date may be omitted to specify an open-ended range. Examples: - After a specific time: 2025-03-26T16:00:00.000Z.. - Before a specific time: ..2025-03-28T15:59:59.999Z - Between two times: 2025-03-26T16:00:00.000Z..2025-03-28T15:59:59.999Z |
| `sort` | enum:string |  | Sorts the results by a supported field. By default, results are sorted in ascending (asc) order. To sort in descending order, add desc after the field name. Format: sort=fieldName [desc] Possible values: name, createdAt, updatedAt, displayId, Examples: - Sort by name (ascending): sort=name - Sort by creation time (descending): sort=createdAt desc |
| `filter[versionType]` | enum:string |  | Filters results by the version type of the packages. Possible values: - FIXED – Files in the package remain fixed at selected versions. - CURRENT – Files in the package automatically update to the latest current versions. For more details, see the Flexible Package Types documentation. |

### 헤더

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `Authorization` | string | **필수** | Must be Bearer <token>, where <token> is a two-legged access token obtained via a Client Credentials Grant flow, or a three-legged access token obtained via an Authorization Code flow or a Secure Service Account (SSA) flow. The SSA flow is designed for headless server-to-server operations. While it functions like a two-legged flow (no user interaction), it is classified as three-legged because it preserves user context. |
| `x-user-id` | string |  | The Autodesk ID of the user on whose behalf the request is made. This header is required only when using two-legged authentication. It is not needed for three-legged authentication. Your application can access only those users who are assigned to it in the SaaS Integrations UI. Only user Autodesk IDs (autodeskId) are supported. |

## 응답

| 코드 | 의미 | 설명 |
| --- | --- | --- |
| `200` | OK | Successfully retrieved a list of packages |
| `400` | Bad Request | Bad request. The input parameters were invalid. |
| `403` | Forbidden | Forbidden. The user does not have permission to access this resource. |
| `404` | Not Found | Not found. The resource does not exist or is inaccessible. |
| `500` | Internal Server Error | An unexpected server error occurred. |

### 응답 본문 (200)

- `results` — `array: object`  
    The list of results.
  - `id` — `string: UUID`  
      The unique identifier (UUID) of the package.
  - `displayId` — `int`  
      The display ID of the package.
  - `name` — `string`  
      The name of the package. Max length: 255
  - `description` — `string`  
      The description of the package. Max length: 2048
  - `createdAt` — `datetime: ISO 8601`  
      The time the package was created.
  - `createdBy` — `string`  
      The Autodesk ID of the user who created the package. For details about the user, call GET users.
  - `updatedAt` — `datetime: ISO 8601`  
      The time the package was last updated.
  - `updatedBy` — `string`  
      The Autodesk ID of the user who last updated the package. For details about the user, call GET users.
  - `locked` — `boolean`  
      true: The package is locked. Its contents cannot be modified until it is unlocked. false: The package is not locked. Files and resources can still be added, removed, or updated.
  - `lockedBy` — `string`  
      The Autodesk ID of the user who locked the package. For details about the user, call GET users.
  - `lockedAt` — `datetime: ISO 8601`  
      The time the package was locked.
  - `resourceCount` — `int`  
      The number of resources in the package.
  - `versionType` — `object`  
      The version type of the package. Possible values: - FIXED – The files in the package remain fixed at the selected versions. - CURRENT – The files in the package automatically update to the latest current versions. - CHANGING – The package is temporarily changing from one version type to another. This state usually lasts only a few seconds and cannot be used as a filter. For more details, see the Change Package Version Type documentation.
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
curl -v 'https://developer.api.autodesk.com/construction/packages/v1/projects/657a5565-09b7-48e0-bd03-acacfe42efaf/packages?limit=200&filter[createdBy]=L9VDREARJ7X2,9NGKQKPXAUHG&filter[updatedBy]=L9VDREARJ7X2,9NGKQKPXAUHG&filter[createdAt]=2025-03-26T16:00:00.000Z..2025-03-28T15:59:59.999Z&filter[updatedAt]=2025-03-26T16:00:00.000Z..2025-03-28T15:59:59.999Z&sort=name&filter[versionType]=FIXED' \
  -H 'Authorization: Bearer AuIPTf4KYLTYGVnOHQ0cuolwCW2a'
```

```
{
  "results": [
    {
      "id": "c25d1273-41e3-4e04-be1e-f4c1ba809d14",
      "displayId": 8642,
      "name": "Milestones",
      "description": "This package contains all the files related to the milestones.",
      "createdAt": "2025-03-27T01:28:28.272Z",
      "createdBy": "L9VDREARJ7X2",
      "updatedAt": "2025-03-27T03:25:48.884Z",
      "updatedBy": "L9VDREARJ7X2",
      "locked": true,
      "lockedBy": "L9VDREARJ7X2",
      "lockedAt": "2025-03-27T03:25:48.884Z",
      "resourceCount": 2,
      "versionType": "FIXED"
    }
  ],
  "pagination": {
    "limit": 200,
    "offset": 0,
    "nextUrl": "https://developer.api.autodesk.com/construction/packages/v1/projects/657a5565-09b7-48e0-bd03-acacfe42efaf/packages?limit=200&offset=400",
    "totalResults": 8618
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
- `GET /construction/packages/v1/projects/{projectId}/packages/{packageId}/resources` — [Retrieves a list of file versions (“resources”) within a specified package](./packages-list-package-resources-GET.md)
- `GET /construction/rcm/v1/projects/{projectId}/published-versions/{versionId}/linked-files` — [Linked Files](./rcm-linked-files-GET.md)
- `POST /construction/files/v1/projects/{projectId}/exports` — [Exports one or more individual PDFs, or 2D views and sheets (from DWG or RVT files) as PDFs from the Forma files module](./v1-files-export-pdf-files-POST.md)
- `GET /construction/files/v1/projects/{projectId}/exports/{exportId}` — [Retrieves the status of an export job](./v1-files-export-status-and-result-GET.md)

---
원본 문서: https://aps.autodesk.com/en/docs/acc/v1/reference/http/packages-list-packages-GET
