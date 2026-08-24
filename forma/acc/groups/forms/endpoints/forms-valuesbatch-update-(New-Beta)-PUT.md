---
operation_id: forms-valuesbatch-update-(New--Beta)-PUT
method: PUT
path: /construction/forms/v2/projects/{projectId}/forms/{formId}/values:batch-update
group: "Forms"
auth_context: user context required
scopes: [data:write]
surface: http
verification: docs-only
---

# Updates a form’s main form fields, both tabular and non-tabular

```http
PUT https://developer.api.autodesk.com/construction/forms/v2/projects/:projectId/forms/:formId/values:batch-update
```

| | |
| --- | --- |
| **인증 컨텍스트** | user context required |
| **필요 스코프** | `data:write` |
| **데이터 포맷** | JSON |
| **그룹** | Forms |

Updates a form’s main form fields, both tabular and non-tabular.

## 요청

### URI 파라미터

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `projectId` | string |  | The ID of the project. Use the Data Management API to retrieve the project ID. For more information, see the Retrieve a Project ID tutorial. You need to convert the project ID into a project ID for the Forma API by removing the “b." prefix. For example, a project ID of b.a4be0c34a-4ab7 translates to a project ID of a4be0c34a-4ab7. |
| `formId` | string |  | The unique identifier of the form. Use GET forms to retrieve the form ID. |

### 쿼리 파라미터

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `excludeFormResponse` | boolean |  | Exclude the updated form in the response. Default: false. |
| `includeNativeFormValues` | boolean |  | Include the form values in the response. Default: false. |

### 헤더

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `Authorization` | string | **필수** | Must be Bearer <token>, where <token> is a three-legged access token obtained via an Authorization Code flow or a Secure Service Account (SSA) flow. The SSA flow is designed for headless server-to-server operations. While it functions like a two-legged flow (no user interaction), it is classified as three-legged because it preserves user context. |
| `Content-Type` | string | **필수** | Must be application/json |

### 요청 본문

- `customValues` — `array: object`  
    The list of non-tabular fields. Maximum 10 items per request.
  - `fieldId` — `string: UUID` **(필수)**  
      The unique identifier of the field.
  - `notes` — `string`  
      Text for the field’s notes section. This is relevant for all fields. Max length: 8000
  - `textVal` — `string`  
      The attribute used for updating text value fields, For example, textVal: This is my response!. Each non-tabular field is assigned a specific value type, which you need to specify when updating the field. textVal is only relevant for updating text value fields. To verify whether the field you want to update is a text value field, call GET forms and check the field’s valueName. Max length: 8000
  - `choiceVal` — `string`  
      The attribute used for updating single-select and dropdown fields. For example, choiceVal: Answer 3. Each non-tabular field is assigned a specific value type, which you need to specify when updating the field. choiceVal is only relevant for updating single-select and dropdown fields. To verify whether the field you want to update is a single-select or dropdown field, call GET forms and check the field’s valueName.
  - `arrayVal` — `array: string`  
      The attribute used for updating multi-select fields. For example, arrayVal: ["Answer 1", "Answer 2"]. Each non-tabular field is assigned a specific value type, which you need to specify when updating the field. arrayVal is only relevant for updating multi-select fields. To verify whether the field you want to update is a multi-select field, call GET forms and check the field’s valueName.
  - `dateVal` — `string`  
      The attribute used for updating date fields, in the following format (YYYY-MM-DD). For example, "dateVal": "1999-12-31". Each non-tabular field is assigned a specific value type, which you need to specify when updating the field. dateVal is only relevant for updating date fields. To verify whether the field you want to update is a date field, call GET forms and check the field’s valueName.
  - `numberVal` — `number`  
      The attribute used for updating number fields. For example, "numberVal": "42". Each non-tabular field is assigned a specific value type, which you need to specify when updating the field. numberVal is only relevant for updating number fields. To verify whether the field you want to update is a number field, call GET forms and check the field’s valueName.
  - `toggleVal` — `enum:string`  
      The attribute used for updating preconfigured fields. For example, “toggleVal”: “Yes”. Each non-tabular field is assigned a specific value type, which you need to specify when updating the field. toggleVal is only relevant for updating preconfigured fields. To verify whether the field you want to update is a preconfigured field, call GET forms and check the field’s valueName. Possible values: Yes, No, False, True, Minus, Plus, Fail, Pass, NA
  - `svgVal` — `string`  
      The attribute used for updating signature fields. Each non-tabular field is assigned a specific value type, which you need to specify when updating the field. svgVal is only relevant for updating signature fields. To verify whether the field you want to update is a signature field, call GET forms and check the field’s valueName. The signature needs to be in SVG format and it needs to be base64 encoded.
  - `name` — `string`  
      The name of the person who signed the form. By default, it is the name of the logged in user. It is only relevant for signature fields. To update the name you need to use the signature field ID.
- `tabularValues` — `array: object`  
    The list of tabular fields. Maximum 10 items per request.
  - `id` — `string: UUID` **(필수)**  
      Unique identifier for the table row. You need to generate the ID (UUID) for the row.
  - `schema` — `string` **(필수)**  
      Table identifier or built-in table alias. For built-in tables, use worklogEntries, materialsEntries, or equipmentEntries. For custom tables, use the table’s schema identifier or fieldId.
  - `columns` — `array: object`  
      The set of values for the columns in the row.
    - `columnId` — `string: UUID`  
        Unique identifier for the column. Either columnId or columnName must be provided, but not both.
    - `columnName` — `enum:string`  
        The name of the column to update. Either columnId or columnName must be provided, but not both. For the Work Log table: trade (Crew) - use textVal, timespan (Total hours) - use timespanVal, headcount (workers) - use numberVal, description (work performed) - use textVal For the Equipment table: item (equipment) - use textVal, timespan (Hours used) - use timespanVal, quantity (Quantity) - use numberVal, description (comment) - use textVal For the Materials table: item (Material) - use textVal, quantity (Quantity) - use numberVal, unit (Unit) - use textVal, description (Comment) - use textVal. Possible values: companyId, description, headcount, item, quantity, roleId, timespan, trade, unit
    - `numberVal` — `number`  
        The attribute used for updating number columns. For example, "numberVal": "42". Each tabular field is assigned a specific value type, which you need to specify when updating the field. numberVal is relevant for updating the following columns: headcount (Workers) and quantity (Quantity).
    - `integerVal` — `int`  
        The attribute used for updating integer columns.
    - `textVal` — `string`  
        The attribute used for updating text value columns. Each tabular field is assigned a specific value type, which you need to specify when updating the field. textVal is relevant for updating the following columns: description (Work performed), description (comment), item (Equipment), item (Material), trade (Crew), and unit (Unit). Note: When using svgVal for signatures, textVal should contain the name of the person who signed. Max length: 8000
    - `svgVal` — `string`  
        Base64 encoded SVG string used for signature fields. When providing a signature, you must also include the signer’s name in textVal.
    - `arrayVal` — `array: string`  
        Array of strings for dropdown or multi-select answers.
    - `timespanVal` — `number`  
        The attribute used for updating time-related columns. Value represents amount of time in milliseconds. Each tabular field is assigned a specific value type, which you need to specify when updating the field. timespanVal is relevant for updating the following columns: timespan (Total hours), timespan (Hours used).
    - `uidVal` — `string`  
        UUID value for fields that store unique identifiers.
    - `dateVal` — `string`  
        Date value without timezone.
    - `timeVal` — `string`  
        Time value without timezone.
    - `datetimeLocalVal` — `string`  
        Datetime value in local time. When providing this field, you must also include datetimeUtcVal, timezoneVal, and timezoneRulesVal. Optionally include latVal and lngVal for more accurate timezone handling.
    - `datetimeUtcVal` — `string`  
        Datetime value in UTC. Required when datetimeLocalVal is provided.
    - `timezoneVal` — `string`  
        Timezone identifier. Required when datetimeLocalVal is provided.
    - `timezoneRulesVal` — `string`  
        Timezone rules data. Required when datetimeLocalVal is provided.
    - `latVal` — `number`  
        Latitude value. Optional but recommended when using datetime fields for accurate timezone handling during daylight saving transitions.
    - `lngVal` — `number`  
        Longitude value. Optional but recommended when using datetime fields for accurate timezone handling during daylight saving transitions.

## 응답

| 코드 | 의미 | 설명 |
| --- | --- | --- |
| `200` | OK | The updated Form |
| `204` | No Content | No content (when excludeFormResponse is true) |
| `400` | Bad Request | The request could not be understood by the server due to malformed syntax or missing request header |
| `401` | Unauthorized | The request was not accepted because it lacked valid authentication credentials |
| `403` | Forbidden | The request was not accepted because the client is authenticated, but is not authorized to access the target resource |
| `404` | Not Found | The resource cannot be found |
| `409` | Conflict | The request could not be completed due to a conflict with the current state of the target resource |
| `429` | Too Many Requests | The request could not be completed due to the rate limit of the target resource |
| `500` | Internal Server Error | The request could not be completed due to an internal server error |

### 응답 본문 (200)

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
    Native form data including layout and values.
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
  - `customValues` — `array: object`  
      Custom form values for Form.
    - `fieldId` — `string`  
        The unique identifier of the field.
    - `sectionLabel` — `string`  
        Name of the section containing this field.
    - `itemLabel` — `string`  
        The field’s label or question text.
    - `valueName` — `enum:string`  
        Indicates the type of value used for this item. Possible values: textVal, toggleVal, arrayVal, numberVal, choiceVal, dateVal, svgVal
    - `toggleVal` — `enum:string`  
        A boolean like enum value. Possible values: Yes, No, False, True, Minus, Plus, Fail, Pass, NA
    - `textVal` — `string`  
        A text value.
    - `arrayVal` — `string`  
        Multi select values.
    - `numberVal` — `number`  
        A numeric value.
    - `choiceVal` — `string`  
        A single select value.
    - `dateVal` — `string`  
        A date value.
    - `svgVal` — `string`  
        A signature value (base64 encoded SVG).
    - `notes` — `string`  
        Text for the field’s notes section. Max length: 8000
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

## Example

```
curl -v 'https://developer.api.autodesk.com/construction/forms/v2/projects/:projectId/forms/:formId/values:batch-update' \
  -X 'PUT' \
  -H 'Authorization: Bearer AuIPTf4KYLTYGVnOHQ0cuolwCW2a' \
  -H 'Content-Type: application/json' \
  -d '{
        "customValues": [
          {
            "fieldId": "4f50355e-4e8b-4449-9539-a6beb100ebba",
            "notes": "Rain prevented progress",
            "textVal": "Everything looks good",
            "choiceVal": "Answer 1",
            "arrayVal": [
              "Answer 1",
              "Answer 2"
            ],
            "dateVal": "2020-11-20",
            "numberVal": 20,
            "toggleVal": "True",
            "svgVal": "PHN2ZyBoZWlnaHQ9IjIwMCIgd2lkdGg9IjUwMCI+PHBvbHlsaW5lIHBvaW50cz0iMjAsMjAgNDAsMjUgNjAsNDAgODAsMTIwIDEyMCwxNDAgMjAwLDE4MCIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6YmxhY2s7c3Ryb2tlLXdpZHRoOjMiIC8+PC9zdmc+",
            "name": "Jane Doe"
          }
        ],
        "tabularValues": [
          {
            "id": "28a31f14-d963-42a3-bf98-d38b73e7aba3",
            "schema": "worklogEntries",
            "columns": [
              {
                "columnId": "123e4567-e89b-12d3-a456-426614174000",
                "columnName": "quantity",
                "numberVal": 5,
                "integerVal": 10,
                "textVal": "Bricks",
                "svgVal": "PHN2ZyBoZWlnaHQ9IjIwMCIgd2lkdGg9IjUwMCI+...",
                "arrayVal": [
                  "Option 1",
                  "Option 2"
                ],
                "timespanVal": 21600000,
                "uidVal": "550e8400-e29b-41d4-a716-446655440000",
                "dateVal": "2023-06-15",
                "timeVal": "14:30:00",
                "datetimeLocalVal": "2023-06-15T14:30:00",
                "datetimeUtcVal": "2023-06-15T21:30:00Z",
                "timezoneVal": "America/Los_Angeles",
                "timezoneRulesVal": "2025b",
                "latVal": 37.7749,
                "lngVal": -122.4194
              }
            ]
          }
        ]
      }'
```

```
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
    },
    "customValues": [
      {
        "fieldId": "151eedb2-5be1-4ebc-899d-7ff8eda4d76d",
        "sectionLabel": "Observation",
        "itemLabel": "Was everyone wearing masks / face protection?",
        "valueName": "textVal",
        "toggleVal": "Yes",
        "textVal": "Yes",
        "arrayVal": [
          "A",
          "B"
        ],
        "numberVal": 1,
        "choiceVal": "A",
        "dateVal": "Yes",
        "svgVal": "PHN2ZyB4bWxucz0iaHR0cDov...",
        "notes": "Observed Masks and Face Protection"
      }
    ]
  },
  "pdfFile": {
    "id": "123e4567-e89b-12d3-a456-426614174000",
    "fileName": "form_report.pdf",
    "pdfUrl": "https://example.com/form_report.pdf"
  },
  "lastFetchedAt": "2020-11-20T16:14:27.615127+00:00"
}
```

## Example

```
curl -v 'https://developer.api.autodesk.com/construction/forms/v2/projects/:projectId/forms/:formId/values:batch-update' \
  -X 'PUT' \
  -H 'Authorization: Bearer AuIPTf4KYLTYGVnOHQ0cuolwCW2a' \
  -H 'Content-Type: application/json' \
  -d '{
        "customValues": [
          {
            "fieldId": "4f50355e-4e8b-4449-9539-a6beb100ebba",
            "notes": "Rain prevented progress",
            "textVal": "Everything looks good",
            "choiceVal": "Answer 1",
            "arrayVal": [
              "Answer 1",
              "Answer 2"
            ],
            "dateVal": "2020-11-20",
            "numberVal": 20,
            "toggleVal": "True",
            "svgVal": "PHN2ZyBoZWlnaHQ9IjIwMCIgd2lkdGg9IjUwMCI+PHBvbHlsaW5lIHBvaW50cz0iMjAsMjAgNDAsMjUgNjAsNDAgODAsMTIwIDEyMCwxNDAgMjAwLDE4MCIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6YmxhY2s7c3Ryb2tlLXdpZHRoOjMiIC8+PC9zdmc+",
            "name": "Jane Doe"
          }
        ],
        "tabularValues": [
          {
            "id": "28a31f14-d963-42a3-bf98-d38b73e7aba3",
            "schema": "worklogEntries",
            "columns": [
              {
                "columnId": "123e4567-e89b-12d3-a456-426614174000",
                "columnName": "quantity",
                "numberVal": 5,
                "integerVal": 10,
                "textVal": "Bricks",
                "svgVal": "PHN2ZyBoZWlnaHQ9IjIwMCIgd2lkdGg9IjUwMCI+...",
                "arrayVal": [
                  "Option 1",
                  "Option 2"
                ],
                "timespanVal": 21600000,
                "uidVal": "550e8400-e29b-41d4-a716-446655440000",
                "dateVal": "2023-06-15",
                "timeVal": "14:30:00",
                "datetimeLocalVal": "2023-06-15T14:30:00",
                "datetimeUtcVal": "2023-06-15T21:30:00Z",
                "timezoneVal": "America/Los_Angeles",
                "timezoneRulesVal": "2025b",
                "latVal": 37.7749,
                "lngVal": -122.4194
              }
            ]
          }
        ]
      }'
```

```
204 No Content
```

## 같은 그룹의 다른 엔드포인트

- `GET /construction/forms/v2/projects/{projectId}/forms/{formId}/values` — [Returns all form field values (custom values / question values) on the form](./forms-custom-values-(Beta)-GET.md)
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

---
원본 문서: https://aps.autodesk.com/en/docs/acc/v1/reference/http/forms-valuesbatch-update-(New--Beta)-PUT
