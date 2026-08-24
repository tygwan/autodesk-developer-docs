---
operation_id: customattributes-items-GET
method: GET
path: /construction/files/v1/projects/{projectId}/custom-attribute-definitions/{customAttributeDefinitionId}/items
group: "Files"
auth_context: user context optional
scopes: [data:read]
surface: http
verification: docs-only
---

# Retrieves the selectable options for a large drop-down list (largeList) custom attribute definition

```http
GET https://developer.api.autodesk.com/construction/files/v1/projects/{projectId}/custom-attribute-definitions/{customAttributeDefinitionId}/items
```

| | |
| --- | --- |
| **인증 컨텍스트** | user context optional |
| **필요 스코프** | `data:read` |
| **데이터 포맷** | JSON |
| **그룹** | Files |

Retrieves the selectable options for a large drop-down list (largeList) custom attribute definition. To identify large drop-down list definitions and retrieve the definition ID required for this endpoint, call GET projects/{projectId}/custom-attribute-definitions.

## 요청

### URI 파라미터

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `projectId` | string: UUID |  | The ID of the project. Use the Data Management API to retrieve the project ID. For more information, see the Retrieve a Project ID tutorial. You need to convert the project ID into a project ID for the Forma API by removing the “b." prefix. For example, a project ID of b.a4be0c34a-4ab7 translates to a project ID of a4be0c34a-4ab7. |
| `customAttributeDefinitionId` | int |  | The ID of the large drop-down list custom attribute definition. To find the ID, call GET projects/{projectId}/custom-attribute-definitions. |

### 쿼리 파라미터

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `offset` | int |  | The number of results to skip before starting to return data. For example, to skip the first 20 results, include offset=20 in the query string. For more details, see the JSON API Paging Help documentation. |
| `limit` | int |  | The maximum number of results to return per page. Possible values: 1–1000. Default value: 200. For example, to return up to 500 items per page, use limit=500. |
| `searchText` | string |  | Filters results by the item value (results.value) or description (results.description). Returns items where either field contains the specified string. Matching is case-insensitive. |
| `sort` | enum:string |  | Sorts items by value (results.value) or description (results.description), in ascending (asc) or descending (desc) order. Possible values: value asc, value desc, description asc, description desc. If you omit this parameter, items are returned in insertion order. |

### 헤더

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `Authorization` | string | **필수** | Must be Bearer <token>, where <token> is a two-legged access token obtained via a Client Credentials Grant flow, or a three-legged access token obtained via an Authorization Code flow or a Secure Service Account (SSA) flow. The SSA flow is designed for headless server-to-server operations. While it functions like a two-legged flow (no user interaction), it is classified as three-legged because it preserves user context. |
| `x-user-id` | string |  | The ID of a user on whose behalf your request is acting. Your app has access to all users specified by the administrator in the SaaS integrations UI. Provide this header value to identify the user to be affected by the request. You can use either the user’s Forma ID (id), or their Autodesk ID (autodeskId). Note that this header is required for a 2-legged authentication context. |

## 응답

| 코드 | 의미 | 설명 |
| --- | --- | --- |
| `200` | OK | Successfully retrieved large drop-down options |
| `400` | Bad Request | Operation failed because the request is invalid. For example, the specified custom attribute definition is not of type largeList, or the sort value is unsupported. |
| `401` | Unauthorized | Invalid or missing authorization header. Verify the Bearer token and try again. |
| `403` | Forbidden | The user does not have permission to perform this operation. |
| `404` | Not Found | The specified custom attribute definition was not found, or the user does not have permission to access it. |
| `500` | Internal Server Error | An unexpected error occurred on the server while processing the request. |

### 응답 본문 (200)

- `results` — `array: object`  
    The list of large drop-down options.
  - `value` — `string`  
      The value displayed as a selectable option in the large drop-down list. Max length: 32
  - `description` — `string`  
      An optional description that provides additional information about the selectable option. Returns an empty string when no description has been provided. Max length: 255
- `pagination` — `object`  
    Information about the paginated results.
  - `totalResults` — `int`  
      The total number of large drop-down options.
  - `offset` — `int`  
      The number of options skipped before returning the results.
  - `limit` — `int`  
      The maximum number of options returned per page.
  - `nextUrl` — `string`  
      The URL for retrieving the next page of options. Returns an empty string when the current page is the last page.

## Example

```
curl -v 'https://developer.api.autodesk.com/construction/files/v1/projects/c0337487-5b66-422b-a284-c273b424af54/custom-attribute-definitions/278684/items?limit=200&searchText=ABC&sort=value asc' \
  -H 'Authorization: Bearer AuIPTf4KYLTYGVnOHQ0cuolwCW2a'
```

```
{
  "results": [
    {
      "value": "ABC-003",
      "description": "Item ABC-003"
    }
  ],
  "pagination": {
    "totalResults": 500,
    "offset": 0,
    "limit": 200,
    "nextUrl": "https://developer.api.autodesk.com/construction/files/v1/projects/e495f579-52ca-4eb5-9d0f-b38192072687/custom-attribute-definitions/278684/items?offset=200&limit=200"
  }
}
```

## 같은 그룹의 다른 엔드포인트

- `GET /construction/files/v1/projects/{projectId}/custom-attribute-definitions` — [Retrieves a list of custom attribute definitions for a Forma project](./customattributes-custom-attribute-definitions-GET.md)
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
- `POST /construction/files/v1/projects/{projectId}/exports` — [Exports one or more individual PDFs, or 2D views and sheets (from DWG or RVT files) as PDFs from the Forma files module](./v1-files-export-pdf-files-POST.md)
- `GET /construction/files/v1/projects/{projectId}/exports/{exportId}` — [Retrieves the status of an export job](./v1-files-export-status-and-result-GET.md)

---
원본 문서: https://aps.autodesk.com/en/docs/acc/v1/reference/http/customattributes-items-GET
