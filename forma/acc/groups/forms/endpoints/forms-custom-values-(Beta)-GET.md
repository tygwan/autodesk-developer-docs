---
operation_id: forms-custom-values-(Beta)-GET
method: GET
path: /construction/forms/v2/projects/{projectId}/forms/{formId}/values
group: "Forms"
auth_context: user context required
scopes: [data:read]
surface: http
verification: docs-only
---

# Returns all form field values (custom values / question values) on the form

```http
GET https://developer.api.autodesk.com/construction/forms/v2/projects/:projectId/forms/:formId/values
```

| | |
| --- | --- |
| **인증 컨텍스트** | user context required |
| **필요 스코프** | `data:read` |
| **데이터 포맷** | JSON |
| **그룹** | Forms |

Returns all form field values (custom values / question values) on the form.

## 요청

### URI 파라미터

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `projectId` | string |  | The ID of the project. Use the Data Management API to retrieve the project ID. For more information, see the Retrieve a Project ID tutorial. You need to convert the project ID into a project ID for the Forma API by removing the “b." prefix. For example, a project ID of b.a4be0c34a-4ab7 translates to a project ID of a4be0c34a-4ab7. |
| `formId` | string |  | The unique identifier of the form. Use GET forms to retrieve the form ID. |

### 쿼리 파라미터

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `offset` | int |  | The number of records to skip before returning the result records. Defaults to 0. Increase this value in subsequent requests to continue getting results when the number of records exceeds the requested limit. |
| `limit` | int |  | The number of records to return in a single request. Can be a number between 1 and 50. Defaults to 50. |
| `sectionUid` | string |  | Filter by section UID to retrieve values for a specific section only. Use GET layout to retrieve section UIDs from the form’s layout. |

### 헤더

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `Authorization` | string | **필수** | Must be Bearer <token>, where <token> is a three-legged access token obtained via an Authorization Code flow or a Secure Service Account (SSA) flow. The SSA flow is designed for headless server-to-server operations. While it functions like a two-legged flow (no user interaction), it is classified as three-legged because it preserves user context. |

## 응답

| 코드 | 의미 | 설명 |
| --- | --- | --- |
| `200` | OK | Form field values. |
| `400` | Bad Request | The request could not be understood by the server due to malformed syntax or missing request header |
| `401` | Unauthorized | The request was not accepted because it lacked valid authentication credentials |
| `403` | Forbidden | The request was not accepted because the client is authenticated, but is not authorized to access the target resource |
| `404` | Not Found | The resource cannot be found |
| `429` | Too Many Requests | The request could not be completed due to the rate limit of the target resource |
| `500` | Internal Server Error | The request could not be completed due to an internal server error |

### 응답 본문 (200)

- `data` — `array: object`  
    List of form field values (custom values / question values).
  - `id` — `string: UUID`  
      Unique identifier for the form value.
  - `fieldId` — `string: UUID`  
      Unique identifier for the field (schema_uid). Use this to correlate the value with its field definition in the form layout.
  - `deleted` — `boolean`  
      Indicates whether this value has been deleted. If true, the value was removed from the form.
  - `toggleVal` — `enum:string`  
      Value for toggle/checkbox fields. This endpoint always returns normalized values: True (affirmative), False (negative), or NA (not applicable), regardless of the question’s modifier type (yes/no, pass/fail, plus/minus). To determine the original display format (e.g., Yes/No vs Pass/Fail), check the question’s modifier from the GET section endpoint. Possible values: Yes, No, False, True, Minus, Plus, Fail, Pass, NA
  - `textVal` — `string`  
      Value for text input fields.
  - `numberVal` — `number`  
      Value for number input fields.
  - `choiceVal` — `string`  
      Value for single-select dropdown or radio button fields. Contains the selected option value.
  - `arrayVal` — `array: string`  
      Value for multi-select fields. Contains an array of selected option values.
  - `dateVal` — `string`  
      Value for date fields. Date in ISO-8601 format (YYYY-MM-DD).
  - `svgVal` — `string`  
      Value for signature fields. Contains the signature as a base64-encoded SVG string.
  - `name` — `string`  
      Name of the person who provided the signature. Only populated for signature fields.
  - `notes` — `string`  
      Additional notes or comments associated with the field value.
  - `updatedAt` — `datetime: ISO 8601`  
      The date and time when the value was last updated, in UTC ISO-8601 format.
  - `updatedBy` — `string`  
      The user ID (Oxygen ID) of the user who last updated this value.
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
curl -v 'https://developer.api.autodesk.com/construction/forms/v2/projects/:projectId/forms/:formId/values' \
  -H 'Authorization: Bearer AuIPTf4KYLTYGVnOHQ0cuolwCW2a'
```

```
{
  "data": [
    {
      "id": "550e8400-e29b-41d4-a716-446655440001",
      "fieldId": "123e4567-e89b-12d3-a456-426614174000",
      "deleted": false,
      "toggleVal": "True",
      "textVal": "Site inspection completed successfully.",
      "numberVal": 42.5,
      "choiceVal": "Option A",
      "arrayVal": [
        "Option 1",
        "Option 2",
        "Option 3"
      ],
      "dateVal": "2026-01-29",
      "svgVal": "PHN2ZyBoZWlnaHQ9IjIwMCIgd2lkdGg9IjUwMCI+...",
      "name": "John Smith",
      "notes": "Verified by site supervisor.",
      "updatedAt": "2026-01-29T14:30:00.000000+00:00",
      "updatedBy": "USER123ABC"
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

- `GET /construction/forms/v1/projects/{projectId}/form-templates` — [Returns all project’s form templates the user has access to](./forms-form-templates-GET.md)
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
원본 문서: https://aps.autodesk.com/en/docs/acc/v1/reference/http/forms-custom-values-(Beta)-GET
