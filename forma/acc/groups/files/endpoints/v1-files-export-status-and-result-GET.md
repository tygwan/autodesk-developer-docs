---
operation_id: v1-files-export-status-and-result-GET
method: GET
path: /construction/files/v1/projects/{projectId}/exports/{exportId}
group: "Files"
auth_context: user context optional
scopes: [data:read]
surface: http
verification: docs-only
---

# Retrieves the status of an export job

```http
GET https://developer.api.autodesk.com/construction/files/v1/projects/{projectId}/exports/{exportId}
```

| | |
| --- | --- |
| **인증 컨텍스트** | user context optional |
| **필요 스코프** | `data:read` |
| **데이터 포맷** | JSON |
| **그룹** | Files |

Retrieves the status of an export job. The S3 signed URL (in result.output.signedUrl) will be available for downloading the exported file.

## 요청

### URI 파라미터

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `projectId` | string: UUID |  | The ID of the project. Use the Data Management API to retrieve the project ID. For more information, see the Retrieve a Project ID tutorial. You can use a project ID either with a “b.” prefix or without a “b.” prefix. For instance, a project ID of “b.a4be0c34a-4ab7” can also be referred to as “a4be0c34a-4ab7”. |
| `exportId` | string |  | The ID of the export job. The export ID is generated when you initialize an export job using POST exports. |

### 헤더

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `Authorization` | string | **필수** | Must be Bearer <token>, where <token> is a two-legged access token obtained via a Client Credentials Grant flow, or a three-legged access token obtained via an Authorization Code flow or a Secure Service Account (SSA) flow. The SSA flow is designed for headless server-to-server operations. While it functions like a two-legged flow (no user interaction), it is classified as three-legged because it preserves user context. |
| `x-user-id` | string |  | The ID of a user on whose behalf your API request is acting. Required if you’re using a 2-legged authentication context, which must be 2-legged OAuth2 security with user impersonation. The app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act on behalf of only the user specified. You can use either the user’s Forma ID (id), or their Autodesk ID (autodeskId). |

## 응답

| 코드 | 의미 | 설명 |
| --- | --- | --- |
| `200` | OK | Successfully get the export job status |
| `400` | Bad Request | The parameters of the requested operation are invalid. Sample error code with possible messages: - ERR_BAD_INPUT: - Failed to parse the token |
| `401` | Unauthorized | The provided bearer token is not valid. Sample error code with possible messages: - ERR_AUTHENTICATED_ERROR: - Authentication header is not correct |
| `403` | Forbidden | The user or service represented by the bearer token does not have permission to perform this operation. Sample error code with possible messages: - ERR_NOT_ALLOWED: - Hub inactive - Project inactive - User inactive - Api access deny - User {userId} does not have download permission on resource {resource} |
| `404` | Not Found | The project, project user or the exporting job is not found Sample error code with possible messages: - ERR_RESOURCE_NOT_EXIST: - Project not found - Project user not found - The job does not exist |
| `500` | Internal Server Error | An unknown error occurred on the server. Sample error code with possible messages: - ERR_INTERNAL_SERVER_ERROR: - Request failed for internal exception xxx - Failed to get hub - Failed to get project - Failed to get user - ERR_WORKFLOW_TIMEOUT - Workflow Timeout Error |

### 응답 본문 (200)

- `id` — `string: UUID`  
    The ID of the PDF export job.
- `status` — `string`  
    The status of the PDF export job.
- `result` — `object`  
    The result of a completed export job: - If the exporting job’s status value is successful, the downloadable signed url will be included in the result.output object - If the exporting job’s status value is failed (e.g. the files have been deleted), the result.error object will be present with details. - If the exporting job’s status value is partialSuccess (e.g. when some dwg/rvt files do not contain any exportable views or sheets), the result.output.failedFiles object will be present with file urn and reason.
  - `output` — `object`  
      The output containing the downloadable signed URL.
    - `signedUrl` — `string`  
        The signed URL to download the PDF or ZIP file. Expires in 1 hour.
    - `failedFiles` — `array: object`  
        Only for dwg/rvt files.
      - `id` — `string`  
          The file version URN.
      - `reason` — `string`  
          The reason for failure.
      - `detail` — `string`  
          The detail message for failure
  - `error` — `object`  
      The error codes could be<br> - ERR_WORKFLOW_TIMEOUT, when the export job runs more than 30 minutes.<br> - ERR_INTERNAL_SERVER_ERROR, when other internal server error happens.<br> - ERR_NO_PROCESSABLE_FILES, when all dwg/rvt files do not contain any 2d pdf files.<br> - ERR_FILE_TOO_LARGE, when the total size of exported files exceeds the upper limit.
    - `code` — `string`  
        The HTTP code of the error.
    - `title` — `string`  
        The title of the error.
    - `detail` — `string`  
        The detail of the error.

## Example

```
curl -v 'https://developer.api.autodesk.com/construction/files/v1/projects/9ba6681e-1952-4d54-aac4-9de6d9858dd4/exports/5b4bb914-c123-4f10-87e3-579ef934aaf9' \
  -H 'Authorization: Bearer AuIPTf4KYLTYGVnOHQ0cuolwCW2a'
```

```
{
  "id": "5b4bb914-c123-4f10-87e3-579ef934aaf9",
  "status": "successful",
  "result": {
    "output": {
      "signedUrl": "https://signedUrl"
    }
  }
}
```

```
{
  "id": "5b4bb914-c123-4f10-87e3-579ef934aaf9",
  "status": "failed",
  "result": {
    "error": {
      "code": "401",
      "title": "ERR_AUTHORIZATION_ERROR",
      "detail": "Authentication header is not correct"
    }
  }
}
```

```
{
  "id": "5b4bb914-c123-4f10-87e3-579ef934aaf9",
  "status": "partialSuccess",
  "result": {
    "signedUrl": "https://signedUrl",
    "failedFiles": [{
      "id": "fileUrn",
      "reason": "ERR_NO_PROCESSABLE_FILES",
      "detail": "This file does not contain any 2d pdf files or still under processing."
    }]
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
- `GET /construction/packages/v1/projects/{projectId}/packages` — [Retrieves a list of all packages within a specified Forma project](./packages-list-packages-GET.md)
- `GET /construction/rcm/v1/projects/{projectId}/published-versions/{versionId}/linked-files` — [Linked Files](./rcm-linked-files-GET.md)
- `POST /construction/files/v1/projects/{projectId}/exports` — [Exports one or more individual PDFs, or 2D views and sheets (from DWG or RVT files) as PDFs from the Forma files module](./v1-files-export-pdf-files-POST.md)

---
원본 문서: https://aps.autodesk.com/en/docs/acc/v1/reference/http/v1-files-export-status-and-result-GET
