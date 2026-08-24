---
operation_id: customattributes-custom-attribute-definitions-GET
method: GET
path: /construction/files/v1/projects/{projectId}/custom-attribute-definitions
group: "Files"
auth_context: user context optional
scopes: [data:read]
surface: http
verification: docs-only
---

# Retrieves a list of custom attribute definitions for a Forma project

```http
GET https://developer.api.autodesk.com/construction/files/v1/projects/{projectId}/custom-attribute-definitions
```

| | |
| --- | --- |
| **인증 컨텍스트** | user context optional |
| **필요 스코프** | `data:read` |
| **데이터 포맷** | JSON |
| **그룹** | Files |

Retrieves a list of custom attribute definitions for a Forma project.

## 요청

### URI 파라미터

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `projectId` | string: UUID |  | The ID of the project. Use the Data Management API to retrieve the project ID. For more information, see the Retrieve a Project ID tutorial. You need to convert the project ID into a project ID for the Forma API by removing the “b." prefix. For example, a project ID of b.a4be0c34a-4ab7 translates to a project ID of a4be0c34a-4ab7. |

### 쿼리 파라미터

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `limit` | int |  | The maximum number of results per page. Possible values: 1- 100. Default value: 100. For example, to limit the response to two results per page, use limit=2. |
| `offset` | int |  | The number of results to skip before starting to return data. For example, to skip the first 20 results, include offset=20 in the query string. For more details, see the JSON API Paging Help documentation. |
| `sort` | enum:string |  | Sorts custom attribute definitions by name (results.name) or ID (results.id), in ascending (asc) or descending (desc) order. Possible values: id asc, id desc, name asc, name desc. Default: id asc. |
| `searchText` | string |  | Filters results by the name of the custom attribute definition (results.name). Returns custom attribute definitions where the name contains the specified string (case-insensitive). |

### 헤더

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `Authorization` | string | **필수** | Must be Bearer <token>, where <token> is a two-legged access token obtained via a Client Credentials Grant flow, or a three-legged access token obtained via an Authorization Code flow or a Secure Service Account (SSA) flow. The SSA flow is designed for headless server-to-server operations. While it functions like a two-legged flow (no user interaction), it is classified as three-legged because it preserves user context. |
| `x-user-id` | string |  | The ID of a user on whose behalf your request is acting. Your app has access to all users specified by the administrator in the SaaS integrations UI. Provide this header value to identify the user to be affected by the request. You can use either the user’s Forma ID (id), or their Autodesk ID (autodeskId). Note that this header is required for a 2-legged authentication context. |

## 응답

| 코드 | 의미 | 설명 |
| --- | --- | --- |
| `200` | OK | Successfully retrieved a list of custom attribute definitions. |
| `400` | Bad Request | The parameters of the requested operation are invalid. For example, an invalid sort value. |
| `401` | Unauthorized | Invalid or missing authorization header. Verify the Bearer token and try again. |
| `403` | Forbidden | The user is not authorized to perform this action. |
| `404` | Not Found | The specified resource was not found. |
| `500` | Internal Server Error | An unexpected error occurred on the server while processing the request. |

### 응답 본문 (200)

- `results` — `array: object`  
    A list of custom attribute definitions.
  - `id` — `int`  
      The unique numeric identifier of the custom attribute definition.
  - `name` — `string`  
      The name of the custom attribute definition. Max length: 32
  - `type` — `enum:string`  
      The type of custom attribute definition. Possible values: string: A single-line text field. array: A drop-down of selectable options. date: A date field. largeList: A drop-down that supports a large number of options.
  - `createdBy` — `object`  
      Details about the user who created the custom attribute definition.
    - `id` — `string`  
        The Autodesk ID of the user.
    - `name` — `string`  
        The name of the user.
  - `updatedBy` — `object`  
      Details about the user who last updated the custom attribute definition.
    - `id` — `string`  
        The Autodesk ID of the user.
    - `name` — `string`  
        The name of the user.
  - `createdAt` — `datetime: ISO 8601`  
      The date and time the custom attribute definition was created, in ISO 8601 format. For example, 2024-03-05T01:17:47.301Z.
  - `updatedAt` — `datetime: ISO 8601`  
      The date and time the custom attribute definition was last updated, in ISO 8601 format. For example, 2024-03-07T01:17:47.301Z.
  - `description` — `string`  
      The description of the custom attribute definition. Returns null when no description has been provided. Max length: 255
  - `arrayOptions` — `array: object`  
      The list of predefined values available for this drop-down custom attribute definition. Only present when type is array. Returns null for all other types.
    - `value` — `string`  
        The value of the drop-down option, as stored and displayed.
    - `description` — `string`  
        An optional description that provides additional context for the drop-down option value. Returns an empty string when no description has been provided.
  - `namingStandardIds` — `array: string`  
      The IDs of the naming standards associated with this custom attribute definition. Returns an empty array when no naming standards are associated.
- `pagination` — `object`  
    Information about the paginated results.
  - `totalResults` — `int`  
      The total number of custom attribute definitions.
  - `offset` — `int`  
      The number of custom attribute definitions skipped before returning results.
  - `limit` — `int`  
      The maximum number of custom attribute definitions returned per page.
  - `nextUrl` — `string`  
      The URL for retrieving the next page of results. Returns an empty string when the current page is the last page.

## Example

```
curl -v 'https://developer.api.autodesk.com/construction/files/v1/projects/c0337487-5b66-422b-a284-c273b424af54/custom-attribute-definitions?limit=100&sort=id asc&searchText=Revision' \
  -H 'Authorization: Bearer AuIPTf4KYLTYGVnOHQ0cuolwCW2a'
```

```
{
  "results": [
    {
      "id": 278690,
      "name": "Revision",
      "type": "string",
      "description": null,
      "updatedAt": "2026-02-11T08:30:46.701Z",
      "namingStandardIds": [],
      "createdBy": {
        "id": "HWUBNU689CRH",
        "name": "John Smith"
      },
      "updatedBy": {
        "id": "PQR789STU012",
        "name": "Jane Doe"
      },
      "createdAt": "2021-03-10T09:15:29.611Z"
    },
    {
      "id": 278684,
      "name": "Volume/System",
      "type": "array",
      "description": null,
      "updatedAt": "2021-05-19T06:29:52.638Z",
      "namingStandardIds": [
        "151",
        "252"
      ],
      "createdBy": {
        "id": "HWUBNU689CRH",
        "name": "John Smith"
      },
      "updatedBy": {
        "id": "PQR789STU012",
        "name": "Jane Doe"
      },
      "createdAt": "2021-03-10T09:15:29.611Z",
      "arrayOptions": [
        {
          "value": "Mechanical",
          "description": "Mechanical systems"
        },
        {
          "value": "Electrical",
          "description": "Electrical systems"
        }
      ]
    }
  ],
  "pagination": {
    "totalResults": 50,
    "offset": 0,
    "limit": 3,
    "nextUrl": "https://developer.api.autodesk.com/construction/files/v1/projects/e495f579-52ca-4eb5-9d0f-b38192072687/custom-attribute-definitions?offset=10&limit=10&sort=id asc"
  }
}
```

## 같은 그룹의 다른 엔드포인트

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
- `POST /construction/files/v1/projects/{projectId}/exports` — [Exports one or more individual PDFs, or 2D views and sheets (from DWG or RVT files) as PDFs from the Forma files module](./v1-files-export-pdf-files-POST.md)
- `GET /construction/files/v1/projects/{projectId}/exports/{exportId}` — [Retrieves the status of an export job](./v1-files-export-status-and-result-GET.md)

---
원본 문서: https://aps.autodesk.com/en/docs/acc/v1/reference/http/customattributes-custom-attribute-definitions-GET
