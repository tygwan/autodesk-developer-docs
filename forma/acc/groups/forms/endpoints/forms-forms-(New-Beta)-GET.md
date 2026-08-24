---
operation_id: forms-forms-(New--Beta)-GET
method: GET
path: /construction/forms/v2/projects/{projectId}/forms
group: "Forms"
auth_context: user context required
scopes: [data:read]
surface: http
verification: docs-only
---

# Returns a paginated list of forms in a project

```http
GET https://developer.api.autodesk.com/construction/forms/v2/projects/:projectId/forms
```

| | |
| --- | --- |
| **인증 컨텍스트** | user context required |
| **필요 스코프** | `data:read` |
| **데이터 포맷** | JSON |
| **그룹** | Forms |

Returns a paginated list of forms in a project.

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
| `ids` | array: string |  | An array of Form IDs to retrieve. |
| `formDateMin` | string |  | Return Forms with formDate at or after specified date. |
| `formDateMax` | string |  | Return Forms with formDate at or before specified date. |
| `updatedAfter` | datetime: ISO 8601 |  | Return Forms updated at or after a specified time. |
| `updatedBefore` | datetime: ISO 8601 |  | Return Forms updated at or before a specified time. |
| `templateId` | string |  | Return Forms on template with given ID. |
| `statuses` | array: string |  | Return Forms with given statuses. |
| `sort` | string |  | A string that specifies how to sort returned objects. The string provides a valid name (formDate, updatedAt, status, formNum, description, dueDate, templateName, createdByName, updatedByName) with an optional direction, either asc (ascending) or desc (descending). The string may contain multiple comma-separated expressions (max of 3) for secondary sorts. The default sort order is asc if not provided. Example: updatedAt desc,formNum asc |
| `search` | string |  | Search for forms containing the exact match of the specified text. |
| `locationIds` | array: string |  | A sequence of location IDs. Each returned objects must/will be associated with one of the locations specified by the IDs. |
| `includeSubLocations` | boolean |  | Include forms associated with sublocations of the specified locationIds. |
| `include` | array: string |  | Include the specified extra fields. You can specify multiple values by repeating the parameter (e.g., include=sublocations&include=layoutInfo). Possible values: sublocations, inactiveFormTemplates, layoutInfo. |

### 헤더

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `Authorization` | string | **필수** | Must be Bearer <token>, where <token> is a three-legged access token obtained via an Authorization Code flow or a Secure Service Account (SSA) flow. The SSA flow is designed for headless server-to-server operations. While it functions like a two-legged flow (no user interaction), it is classified as three-legged because it preserves user context. |

## 응답

| 코드 | 의미 | 설명 |
| --- | --- | --- |
| `200` | OK | Forms in project at specified page. |
| `400` | Bad Request | The request could not be understood by the server due to malformed syntax or missing request header |
| `401` | Unauthorized | The request was not accepted because it lacked valid authentication credentials |
| `403` | Forbidden | The request was not accepted because the client is authenticated, but is not authorized to access the target resource |
| `404` | Not Found | The resource cannot be found |
| `429` | Too Many Requests | The request could not be completed due to the rate limit of the target resource |
| `500` | Internal Server Error | The request could not be completed due to an internal server error |

### 응답 본문 (200)

- `data` — `array: object`  
    List of forms in the project.
  - `formTemplateId` — `string: UUID`  
      Unique identifier of template the form belongs to.
  - `id` — `string: UUID`  
      Unique identifier of the form.
  - `status` — `enum:string`  
      Current state of the form e.g. inProgress Possible values: draft, inReview, submitted, archived
  - `formNum` — `int`  
      Unique identifier of form, autoincremental, unique per project.
  - `formDate` — `string`  
      Date the Form is created for.
  - `assigneeId` — `string`  
      ID of the entity form is assigned to.
  - `assigneeType` — `enum:string`  
      Type of the entity form is assigned to. Possible values: company, role, user
  - `dueDate` — `string`  
      Date the Form is due.
  - `locationId` — `string: UUID`  
      The unique identifier of the Form’s location
  - `createdBy` — `string`  
      User ID that created the Form.
  - `createdAt` — `datetime: ISO 8601`  
      Timestamp when the form was received and stored on the server. UTC date and time in ISO-8601 format.
  - `userCreatedAt` — `datetime: ISO 8601`  
      Timestamp when the form was created on the client device or external system. This may differ from createdAt if the form was created offline and synced later. UTC date and time in ISO-8601 format.
  - `notes` — `string`  
      Form notes.
  - `description` — `string`  
      Form description.
  - `name` — `string`  
      Form name
  - `updatedAt` — `datetime: ISO 8601`  
      When form was last updated, UTC date and time in ISO-8601 format.
  - `updatedBy` — `string`  
      User ID that last updated the Form.
  - `weatherId` — `int`  
      Unique identifier of weather associated with this form.
  - `lastSubmitterSignature` — `string`  
      Signature of the reviewer who last submitted the Form (if applicable). Signature value (base64 encoded SVG).
  - `lastSubmittedBy` — `string`  
      User ID that last submitted the Form.
  - `lastSubmittedAt` — `datetime: ISO 8601`  
      When form was last submitted (if applicable), UTC date and time in ISO-8601 format.
  - `lastReopenedBy` — `string`  
      User ID that re-opened the Form (if applicable).
  - `lastStatusChanges` — `object`  
      Contains the last transition into each status. Since a form can transition between statuses multiple times (e.g., reopened from closed back to inProgress), this shows the most recent transition for each status the form has been in.
    - `previousStatus` — `string`  
        The status the form was in before the current status.
    - `inProgress` — `object`  
        The last time the form transitioned into inProgress status.
      - `by` — `string`  
          User ID who made the status change.
      - `at` — `string`  
          When the status change occurred, UTC date and time in ISO-8601 format.
    - `inReview` — `object`  
        The last time the form transitioned into inReview status.
      - `by` — `string`  
          User ID who made the status change.
      - `at` — `string`  
          When the status change occurred, UTC date and time in ISO-8601 format.
    - `closed` — `object`  
        The last time the form transitioned into closed status.
      - `by` — `string`  
          User ID who made the status change.
      - `at` — `string`  
          When the status change occurred, UTC date and time in ISO-8601 format.
    - `archived` — `object`  
        The last time the form transitioned into archived status.
      - `by` — `string`  
          User ID who made the status change.
      - `at` — `string`  
          When the status change occurred, UTC date and time in ISO-8601 format.
    - `discarded` — `object`  
        The last time the form transitioned into discarded status.
      - `by` — `string`  
          User ID who made the status change.
      - `at` — `string`  
          When the status change occurred, UTC date and time in ISO-8601 format.
  - `nativeForm` — `object`  
      Native form data including layout information. To retrieve form field values, use the GET custom values endpoint.
    - `id` — `string: UUID`  
        The form’s unique identifier. This is the same value as the top-level form id.
    - `layoutId` — `string: UUID`  
        Unique identifier of the layout.
    - `version` — `string`  
        Semantic version indicating the feature set available for this form’s template. Clients can use this to determine which features are supported. For example, version 13.0 or higher is required for custom tables support. The Forms App typically uses the highest available version.
    - `layoutInfo` — `object`  
        Information about the layout of this form.
      - `description` — `string`  
          The description of the layout.
      - `hasSectionAssignees` — `boolean`  
          Determines if section assignment is enabled.
  - `pdfFile` — `object`  
      PDF file information for the form.
    - `id` — `string`  
        Unique identifier of the PDF file.
    - `fileName` — `string`  
        Name of the PDF file.
    - `pdfUrl` — `string`  
        URL to download the PDF file.
  - `lastFetchedAt` — `datetime: ISO 8601`  
      When form was retrieved from the API, UTC date and time in ISO-8601 format.
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
curl -v 'https://developer.api.autodesk.com/construction/forms/v2/projects/:projectId/forms' \
  -H 'Authorization: Bearer AuIPTf4KYLTYGVnOHQ0cuolwCW2a'
```

```
{
  "data": [
    {
      "formTemplateId": "2f634a22-779d-4930-9f08-8391a41fea05",
      "id": "932da979-e537-4530-b8aa-18607ac6db37",
      "status": "draft",
      "formNum": 1,
      "formDate": "2020-11-20",
      "assigneeId": "fc830fd8-f1ef-4cd6-9163-fb115dc698d7",
      "assigneeType": "company",
      "dueDate": "2020-11-25",
      "locationId": "d14ce3a6-e61b-4ab0-a9be-5acf7b5366df",
      "createdBy": "USER123A",
      "createdAt": "2019-01-20T12:14:28.000000+00:00",
      "userCreatedAt": "2019-01-20T12:14:27.615127+00:00",
      "notes": "Form notes",
      "description": "Form description",
      "name": "Form name",
      "updatedAt": "2020-11-20T16:14:27.615127+00:00",
      "updatedBy": "USER123A",
      "weatherId": 12345,
      "lastSubmitterSignature": "PHN2ZyBoZWlnaHQ9IjIwMCIgd2lkdGg9IjUwMCI+PHBvbHlsaW5lIHBvaW50cz0iMjAsMjAgNDAsMjUgNjAsNDAgODAsMTIwIDEyMCwxNDAgMjAwLDE4MCIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6YmxhY2s7c3Ryb2tlLXdpZHRoOjMiIC8+PC9zdmc+",
      "lastSubmittedBy": "USER123A",
      "lastSubmittedAt": "2020-11-20T18:14:27.615127+00:00",
      "lastReopenedBy": "USER123A",
      "lastStatusChanges": {
        "previousStatus": "inProgress",
        "inProgress": {
          "by": "USER123A",
          "at": "2020-11-20T16:14:27.615127+00:00"
        },
        "inReview": {
          "by": "USER123A",
          "at": "2020-11-20T16:14:27.615127+00:00"
        },
        "closed": {
          "by": "USER123A",
          "at": "2020-11-20T16:14:27.615127+00:00"
        },
        "archived": {
          "by": "USER123A",
          "at": "2020-11-20T16:14:27.615127+00:00"
        },
        "discarded": {
          "by": "USER123A",
          "at": "2020-11-20T16:14:27.615127+00:00"
        }
      },
      "nativeForm": {
        "id": "932da979-e537-4530-b8aa-18607ac6db37",
        "layoutId": "123e4567-e89b-12d3-a456-426614174001",
        "version": "13.0",
        "layoutInfo": {
          "description": "",
          "hasSectionAssignees": false
        }
      },
      "pdfFile": {
        "id": "123e4567-e89b-12d3-a456-426614174000",
        "fileName": "form_report.pdf",
        "pdfUrl": "https://example.com/form_report.pdf"
      },
      "lastFetchedAt": "2020-11-20T16:14:27.615127+00:00"
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
- `GET /construction/forms/v1/projects/{projectId}/form-templates` — [Returns all project’s form templates the user has access to](./forms-form-templates-GET.md)
- `GET /construction/forms/v1/projects/{projectId}/forms` — [Returns a paginated list of forms in a project](./forms-forms-(Deprecated)-GET.md)
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
원본 문서: https://aps.autodesk.com/en/docs/acc/v1/reference/http/forms-forms-(New--Beta)-GET
