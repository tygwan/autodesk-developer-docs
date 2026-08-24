---
operation_id: forms-form-templates-GET
method: GET
path: /construction/forms/v1/projects/{projectId}/form-templates
group: "Forms"
auth_context: user context required
scopes: [data:read]
surface: http
verification: docs-only
---

# Returns all project’s form templates the user has access to

```http
GET https://developer.api.autodesk.com/construction/forms/v1/projects/:projectId/form-templates
```

| | |
| --- | --- |
| **인증 컨텍스트** | user context required |
| **필요 스코프** | `data:read` |
| **데이터 포맷** | JSON |
| **그룹** | Forms |

Returns all project’s form templates the user has access to.

## 요청

### URI 파라미터

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `projectId` | string |  | The ID of the project. Use the Data Management API to retrieve the project ID. For more information, see the Retrieve a Project ID tutorial. You need to convert the project ID into a project ID for the Forma API by removing the “b." prefix. For example, a project ID of b.a4be0c34a-4ab7 translates to a project ID of a4be0c34a-4ab7. |

### 쿼리 파라미터

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `offset` | int |  | The number of records to skip before returning the result records. Defaults to 0. Increase this value in subsequent requests to continue getting results when the number of records exceeds the requested limit. |
| `limit` | int |  | The number of records to return in a single request. Can be a number between 1 and 50. Defaults to 50. |
| `updatedAfter` | datetime: ISO 8601 |  | Return Templates updated after specified time. |
| `updatedBefore` | datetime: ISO 8601 |  | Return Templates updated before specified time. |
| `sortOrder` | enum:string |  | Return Templates in specified sorted order. Possible values: desc, asc |

### 헤더

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `Authorization` | string | **필수** | Must be Bearer <token>, where <token> is a three-legged access token obtained via an Authorization Code flow or a Secure Service Account (SSA) flow. The SSA flow is designed for headless server-to-server operations. While it functions like a two-legged flow (no user interaction), it is classified as three-legged because it preserves user context. |

## 응답

| 코드 | 의미 | 설명 |
| --- | --- | --- |
| `200` | OK | Form Templates. |
| `400` | Bad Request | The request could not be understood by the server due to malformed syntax or missing request header |
| `401` | Unauthorized | The request was not accepted because it lacked valid authentication credentials |
| `403` | Forbidden | The request was not accepted because the client is authenticated, but is not authorized to access the target resource |
| `404` | Not Found | The resource cannot be found |
| `429` | Too Many Requests | The request could not be completed due to the rate limit of the target resource |
| `500` | Internal Server Error | The request could not be completed due to an internal server error |

### 응답 본문 (200)

- `data` — `array: object`  
    List of form templates in the project.
  - `projectId` — `string`  
      Unique indentifier of the project the template belongs to.
  - `id` — `string`  
      The unique identifier of the template.
  - `name` — `string`  
      Display name of template.
  - `status` — `enum:string`  
      Status of template: "active", "inactive" (archived), or "deleted" Possible values: active, inactive, deleted
  - `templateType` — `string`  
      User supplied type of template. Can be a custom string or one of the standard template types: pg.template_type.daily_report, pg.template_type.quality, pg.template_type.safety, pg.template_type.punchlist, pg.template_type.commissioning, pg.template_type.time_sheet, pg.template_type.other
  - `userPermissions` — `array`  
      Permissions on this template assigned to individual users.
  - `groupPermissions` — `array`  
      Permissions on this template assigned to companies and roles.
  - `createdBy` — `string`  
      The unique identifier of the user who created the template.
  - `updatedAt` — `datetime: ISO 8601`  
      The date when the template was last updated, UTC date and time in ISO-8601 format.
  - `isPdf` — `boolean`  
      A flag that indicates whether the template has a PDF or not.
  - `pdfUrl` — `string`  
      For PDF forms, the URL to download the form’s PDF.
  - `forms` — `object`  
      Reference to fetch forms created from this template.
    - `url` — `string`  
        URL to retrieve resources.
  - `currentLayoutId` — `string: UUID`  
      The unique identifier of the form template’s current layout, if it is not a PDF template. This can be used to retrieve detailed layout information via the GET layouts endpoint.
- `pagination` — `object`  
    Request pagination information.
  - `offset` — `int`  
      Number of items skipped.
  - `limit` — `int`  
      Number of items returned per page.
  - `totalResults` — `int`  
      Total number of items that can be returned.
  - `nextUrl` — `string`  
      URL for the next page of items. Next page url is null on the last page.

## Example

```
curl -v 'https://developer.api.autodesk.com/construction/forms/v1/projects/:projectId/form-templates' \
  -H 'Authorization: Bearer AuIPTf4KYLTYGVnOHQ0cuolwCW2a'
```

```
{
  "data": [
    {
      "projectId": "9ba6681e-1952-4d54-aac4-9de6d9858dd4",
      "id": "2f634a22-779d-4930-9f08-8391a41fea05",
      "name": "Daily Report",
      "status": "active",
      "templateType": "pg.template_type.daily_report",
      "userPermissions": [
        {
          "permissions": [
            "submit"
          ],
          "userId": "USER123A"
        }
      ],
      "groupPermissions": [
        {
          "permissions": [
            "manage"
          ],
          "roleKey": "hq_access_level:admin",
          "roleName": "Admin"
        }
      ],
      "createdBy": "USER123A",
      "updatedAt": "2020-11-20T16:13:33.615127+00:00",
      "isPdf": true,
      "pdfUrl": "https://link.to/form.pdf",
      "forms": {
        "url": "https://developer.api.autodesk.com/construction/forms/v1/projects/9ba6681e-1952-4d54-aac4-9de6d9858dd4/forms?templateId=2f634a22-779d-4930-9f08-8391a41fea05"
      },
      "currentLayoutId": "123e4567-e89b-12d3-a456-426614174000"
    }
  ],
  "pagination": {
    "offset": 0,
    "limit": 50,
    "totalResults": 1,
    "nextUrl": null
  }
}
```

## 같은 그룹의 다른 엔드포인트

- `GET /construction/forms/v2/projects/{projectId}/forms/{formId}/values` — [Returns all form field values (custom values / question values) on the form](./forms-custom-values-(Beta)-GET.md)
- `GET /construction/forms/v1/projects/{projectId}/forms` — [Returns a paginated list of forms in a project](./forms-forms-(Deprecated)-GET.md)
- `GET /construction/forms/v2/projects/{projectId}/forms` — [Returns a paginated list of forms in a project](./forms-forms-(New-Beta)-GET.md)
- `PATCH /construction/forms/v1/projects/{projectId}/form-templates/{templateId}/forms/{formId}` — [Updates a form’s form details](./forms-forms-formId-PATCH.md)
- `POST /construction/forms/v1/projects/{projectId}/form-templates/{templateId}/forms` — [Adds a new form to a project](./forms-forms-POST.md)
- `GET /construction/forms/v1/projects/{projectId}/forms/{formId}/table/{fieldId}/values` — [Returns all row values from a specific table in a form](./forms-get-table-values-GET.md)
- `GET /construction/forms/v3/projects/{projectId}/weather/{weatherId}` — [Returns weather data for a specific weather record associated with a project](./forms-get-weather-data-for-a-project-GET.md)
- `GET /construction/forms/v1/projects/{projectId}/layouts/{layoutId}` — [Returns layout information for a form template](./forms-layouts-layoutId-(Beta)-GET.md)
- `GET /construction/forms/v2/projects/{projectId}/layouts/{layoutId}/sections/{sectionId}` — [Returns detailed information about a specific section within a form layout](./forms-sections-sectionId-(Beta)-GET.md)
- `POST /construction/forms/v2/projects/{projectId}/forms/{formId}/values:batch-delete` — [This API currently only deletes form values from tabular fields](./forms-valuesbatch-delete-(Beta)-POST.md)
- `PUT /construction/forms/v1/projects/{projectId}/forms/{formId}/values:batch-update` — [Updates a form’s main form fields, both tabular and non-tabular](./forms-valuesbatch-update-(Deprecated)-PUT.md)
- `PUT /construction/forms/v2/projects/{projectId}/forms/{formId}/values:batch-update` — [Updates a form’s main form fields, both tabular and non-tabular](./forms-valuesbatch-update-(New-Beta)-PUT.md)

---
원본 문서: https://aps.autodesk.com/en/docs/acc/v1/reference/http/forms-form-templates-GET
