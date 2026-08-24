---
operation_id: document-management-custom-attributesbatch-update-POST
method: POST
path: /bim360/docs/v1/projects/{project_id}/versions/{version_id}/custom-attributes:batch-update
group: "Files"
auth_context: user context optional
scopes: [data:write]
surface: http
verification: docs-only
---

# Assigns values to custom attributes for multiple documents

```http
POST https://developer.api.autodesk.com/bim360/docs/v1/projects/:project_id/versions/:version_id/custom-attributes:batch-update
```

| | |
| --- | --- |
| **인증 컨텍스트** | user context optional |
| **필요 스코프** | `data:write` |
| **데이터 포맷** | JSON |
| **그룹** | Files |

Assigns values to custom attributes for multiple documents. This endpoint also clears custom attribute values.

## 요청

### URI 파라미터

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `project_id` | string: UUID |  | The ID of the project. This corresponds to the project ID in the Data Management API. To convert a project ID in the Data Management API to a project ID in the BIM 360 API you need to remove the “b." prefix. For example, a project ID of b.a4be0c34a-4ab7 translates to a project ID of a4be0c34a-4ab7. |
| `version_id` | string |  | The URL-encoded ID (URN) of the version. To find the version ID of a document follow the initial steps of the Download Files tutorial. |

### 헤더

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `Authorization` | string | **필수** | Must be Bearer <token>, where <token> is a two-legged access token obtained via a Client Credentials Grant flow, or a three-legged access token obtained via an Authorization Code flow or a Secure Service Account (SSA) flow. The SSA flow is designed for headless server-to-server operations. While it functions like a two-legged flow (no user interaction), it is classified as three-legged because it preserves user context. |
| `Content-Type` | string | **필수** | Must be application/json |
| `x-user-id` | string |  | In a two-legged authentication context, the app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act on behalf of only the user specified. |

### 요청 본문

- `id` — `string` **(필수)**  
    The ID of the custom attribute. To find the ID, call GET custom-attribute-definitions.
- `value` — `string` **(필수)**  
    The value of the custom attribute. If you are assigning a value to a drop-list attribute, call GET custom-attribute-definitions to retrieve a list of possible values. If you are clearing a custom attribute value, assign a null value to the attribute. - For text field (string) attributes, the max length is 255. - Date attributes need to be compliant with ISO8601. Milliseconds are discarded.

## 응답

| 코드 | 의미 | 설명 |
| --- | --- | --- |
| `200` | OK | Successfully updated the custom attribute values. |
| `400` | Bad Request | The parameters of the requested operation are invalid. |
| `403` | Forbidden | The user or service represented by the bearer token does not have permission to perform this operation. |
| `404` | Not Found | The project or version does not exist. |
| `500` | Internal Server Error | An unknown error occurred on the server. |

### 응답 본문 (200)

- `results` — `array: object`  
    The list of results.
  - `id` — `int`  
      The ID of the attribute.
  - `type` — `enum:string`  
      The data type of the attribute. Possible values: string (text field), date, array (drop-list).
  - `name` — `string`  
      The name of the attribute.
  - `value` — `string`  
      The value of the attribute.

## Example

```
curl -v 'https://developer.api.autodesk.com/bim360/docs/v1/projects/c0337487-5b66-422b-a284-c273b424af54/versions/urn%3Aadsk.wipprod%3Afs.file%3Avf.AS3XD9MzQvu4MakMF-w7vQ%3Fversion%3D1/custom-attributes:batch-update' \
  -X 'POST' \
  -H 'Authorization: Bearer AuIPTf4KYLTYGVnOHQ0cuolwCW2a' \
  -H 'Content-Type: application/json' \
  -d '[
        {
          "id": 1001,
          "value": "checked"
        },
        {
          "id": 1002,
          "value": "2020-03-31T16:00:00.000Z"
        },
        {
          "id": 1003,
          "value": "v2"
        }
      ]'
```

```
{
  "results": [
    {
      "id": 1001,
      "name": "column1",
      "type": "string",
      "value": "checked"
    },
    {
      "id": 1002,
      "name": "column2",
      "type": "date",
      "value": "2020-03-31T16:00:00.000Z"
    },
    {
      "id": 1003,
      "name": "column3",
      "type": "array",
      "value": "v2"
    },
    {
      "id": 1004,
      "name": "column4",
      "type": "string",
      "value": "anything"
    }
  ]
}
```

## 같은 그룹의 다른 엔드포인트

- `GET /construction/files/v1/projects/{projectId}/custom-attribute-definitions` — [Retrieves a list of custom attribute definitions for a Forma project](./customattributes-custom-attribute-definitions-GET.md)
- `GET /construction/files/v1/projects/{projectId}/custom-attribute-definitions/{customAttributeDefinitionId}/items` — [Retrieves the selectable options for a large drop-down list (largeList) custom attribute definition](./customattributes-items-GET.md)
- `GET /bim360/docs/v1/projects/{project_id}/folders/{folder_id}/custom-attribute-definitions` — [Custom Attributes (beta)](./document-management-custom-attribute-definitions-GET.md)
- `POST /bim360/docs/v1/projects/{project_id}/folders/{folder_id}/custom-attribute-definitions` — [Adds a custom attribute to a folder](./document-management-custom-attribute-definitions-POST.md)
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
원본 문서: https://aps.autodesk.com/en/docs/acc/v1/reference/http/document-management-custom-attributesbatch-update-POST
