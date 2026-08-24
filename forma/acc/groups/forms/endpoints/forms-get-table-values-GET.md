---
operation_id: forms-get-table-values-GET
method: GET
path: /construction/forms/v1/projects/{projectId}/forms/{formId}/table/{fieldId}/values
group: "Forms"
auth_context: user context required
scopes: [data:read]
surface: http
verification: docs-only
---

# Returns all row values from a specific table in a form

```http
GET https://developer.api.autodesk.com/construction/forms/v1/projects/:projectId/forms/:formId/table/:fieldId/values
```

| | |
| --- | --- |
| **인증 컨텍스트** | user context required |
| **필요 스코프** | `data:read` |
| **데이터 포맷** | JSON |
| **그룹** | Forms |

Returns all row values from a specific table in a form.

## 요청

### URI 파라미터

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `projectId` | string |  | The ID of the project. Use the Data Management API to retrieve the project ID. For more information, see the Retrieve a Project ID tutorial. You need to convert the project ID into a project ID for the Forma API by removing the “b." prefix. For example, a project ID of b.a4be0c34a-4ab7 translates to a project ID of a4be0c34a-4ab7. |
| `formId` | string |  | The unique identifier of the form. Use GET forms to retrieve the form ID. |
| `fieldId` | string |  | The table’s schema identifier (UUID). This corresponds to the schema and fieldId fields returned in each row of the response. For built-in tables, use the following UUIDs: - Work Log: 6c8055d5-1301-46f6-9d18-8a2a208a277e - Materials: 2adf5ad9-d9d3-ee42-6fd8-015c34ce474d - Equipment: 8af6c450-dd2a-32ae-0090-5493a9cc884e For custom tables, the schema identifier can be found in the section detail. Use GET section to retrieve the section, then look for schema fields on table section items. |

### 쿼리 파라미터

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `offset` | int |  | The number of records to skip before returning the result records. Defaults to 0. Increase this value in subsequent requests to continue getting results when the number of records exceeds the requested limit. |
| `limit` | int |  | The number of records to return in a single request. Can be a number between 1 and 50. Defaults to 50. |

### 헤더

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `Authorization` | string | **필수** | Must be Bearer <token>, where <token> is a three-legged access token obtained via an Authorization Code flow or a Secure Service Account (SSA) flow. The SSA flow is designed for headless server-to-server operations. While it functions like a two-legged flow (no user interaction), it is classified as three-legged because it preserves user context. |

## 응답

| 코드 | 의미 | 설명 |
| --- | --- | --- |
| `200` | OK | Table values from the form. |
| `400` | Bad Request | The request could not be understood by the server due to malformed syntax or missing request header |
| `401` | Unauthorized | The request was not accepted because it lacked valid authentication credentials |
| `403` | Forbidden | The request was not accepted because the client is authenticated, but is not authorized to access the target resource |
| `404` | Not Found | The resource cannot be found. This is returned when the form does not exist, the fieldId does not correspond to a valid table in the form’s layout, or the user does not have access to the form. |
| `429` | Too Many Requests | The request could not be completed due to the rate limit of the target resource |
| `500` | Internal Server Error | The request could not be completed due to an internal server error |

### 응답 본문 (200)

- `data` — `array: object`  
    List of table rows.
  - `id` — `string: UUID`  
      Unique identifier for this table row. Each column value in the columns array references this ID via its formValueId field.
  - `table` — `enum:string`  
      Built-in table identifier. If it is not provided, the table will be a custom table identified by the schema field. Possible values: worklogEntries, materialsEntries, equipmentEntries
  - `schema` — `string: UUID`  
      The table’s schema identifier (UUID). This is the legacy field name, retained for backwards compatibility. Use fieldId for new integrations. This value corresponds to the fieldId path parameter used to query this table.
  - `fieldId` — `string: UUID`  
      The table’s schema identifier (UUID). This is the preferred field name that matches the fieldId path parameter. Historically, tables were identified by a field called schema, which caused confusion with database schema concepts. The fieldId field provides a clearer name while schema is retained for backwards compatibility. Both fields contain the same UUID value.
  - `rank` — `int`  
      The sort order in the table.
  - `deleted` — `boolean`  
      Whether the table row has been deleted or not.
  - `columns` — `array: object`  
      The list of cell values in this row. Each item represents the value at the intersection of this row and a specific column (i.e., a table cell). Each cell contains formValueId (matching this row’s id) and columnId (identifying which column).
    - `formValueId` — `string: UUID`  
        The row identifier (matches the parent TabularValueRow.id). This is repeated in each cell to enable independent cell storage and sparse table support. Think of it as the ‘rowId’ portion of a cell’s coordinate.
    - `columnId` — `string: UUID`  
        The column identifier from the form’s layout. Think of it as the ‘columnId’ portion of a cell’s coordinate. This corresponds to the uid of a column in the table’s columns array in the section detail. Use GET section to retrieve the section and find column definitions with their uid, columnKey, label, and columnType.
    - `columnName` — `string`  
        The name (columnKey) of the column. For built-in tables, this is one of the predefined column keys (e.g., trade, headcount, description). For custom tables, this is the user-defined column key.
    - `textVal` — `string`  
        Text value.
    - `numberVal` — `number`  
        Number value.
    - `integerVal` — `int`  
        Integer value.
    - `arrayVal` — `array: string`  
        Array value.
    - `timespanVal` — `int`  
        Amount of time in milliseconds.
    - `svgVal` — `string`  
        SVG value.
    - `uidVal` — `string`  
        UUID value.
    - `datetimeLocalVal` — `string`  
        Datetime value in local time.
    - `datetimeUtcVal` — `string`  
        Datetime value in UTC.
    - `timezoneVal` — `string`  
        Timezone identifier.
    - `timezoneRulesVal` — `string`  
        Timezone rules data.
    - `lngVal` — `number`  
        Longitude value.
    - `latVal` — `number`  
        Latitude value.
    - `dateVal` — `string`  
        Date without timezone.
    - `timeVal` — `string`  
        Time without timezone.
  - `updatedAt` — `datetime: ISO 8601`  
      The date when the table row was last updated, UTC date and time in ISO-8601 format.
  - `updatedBy` — `string`  
      User ID that last updated the table row.
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
curl -v 'https://developer.api.autodesk.com/construction/forms/v1/projects/:projectId/forms/:formId/table/:fieldId/values' \
  -H 'Authorization: Bearer AuIPTf4KYLTYGVnOHQ0cuolwCW2a'
```

```
{
  "data": [
    {
      "id": "28a31f14-d963-42a3-bf98-d38b73e7aba3",
      "table": "worklogEntries",
      "schema": "6c8055d5-1301-46f6-9d18-8a2a208a277e",
      "fieldId": "6c8055d5-1301-46f6-9d18-8a2a208a277e",
      "rank": 1,
      "deleted": false,
      "columns": [
        {
          "formValueId": "550e8400-e29b-41d4-a716-446655440001",
          "columnId": "123e4567-e89b-12d3-a456-426614174000",
          "columnName": "trade",
          "textVal": "Plumber",
          "numberVal": 42.5,
          "integerVal": 10,
          "arrayVal": [
            "Option 1",
            "Option 2"
          ],
          "timespanVal": 21600000,
          "svgVal": "PHN2ZyBoZWlnaHQ9IjIwMCIgd2lkdGg9IjUwMCI+...",
          "uidVal": "550e8400-e29b-41d4-a716-446655440000",
          "datetimeLocalVal": "2023-06-15T14:30:00",
          "datetimeUtcVal": "2023-06-15T21:30:00Z",
          "timezoneVal": "America/Los_Angeles",
          "timezoneRulesVal": "",
          "lngVal": -122.4194,
          "latVal": 37.7749,
          "dateVal": "2023-06-15",
          "timeVal": "14:30:00"
        }
      ],
      "updatedAt": "2020-11-20T16:14:27.615127+00:00",
      "updatedBy": "USER123A"
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
- `GET /construction/forms/v2/projects/{projectId}/forms` — [Returns a paginated list of forms in a project](./forms-forms-(New-Beta)-GET.md)
- `PATCH /construction/forms/v1/projects/{projectId}/form-templates/{templateId}/forms/{formId}` — [Updates a form’s form details](./forms-forms-formId-PATCH.md)
- `POST /construction/forms/v1/projects/{projectId}/form-templates/{templateId}/forms` — [Adds a new form to a project](./forms-forms-POST.md)
- `GET /construction/forms/v3/projects/{projectId}/weather/{weatherId}` — [Returns weather data for a specific weather record associated with a project](./forms-get-weather-data-for-a-project-GET.md)
- `GET /construction/forms/v1/projects/{projectId}/layouts/{layoutId}` — [Returns layout information for a form template](./forms-layouts-layoutId-(Beta)-GET.md)
- `GET /construction/forms/v2/projects/{projectId}/layouts/{layoutId}/sections/{sectionId}` — [Returns detailed information about a specific section within a form layout](./forms-sections-sectionId-(Beta)-GET.md)
- `POST /construction/forms/v2/projects/{projectId}/forms/{formId}/values:batch-delete` — [This API currently only deletes form values from tabular fields](./forms-valuesbatch-delete-(Beta)-POST.md)
- `PUT /construction/forms/v1/projects/{projectId}/forms/{formId}/values:batch-update` — [Updates a form’s main form fields, both tabular and non-tabular](./forms-valuesbatch-update-(Deprecated)-PUT.md)
- `PUT /construction/forms/v2/projects/{projectId}/forms/{formId}/values:batch-update` — [Updates a form’s main form fields, both tabular and non-tabular](./forms-valuesbatch-update-(New-Beta)-PUT.md)

---
원본 문서: https://aps.autodesk.com/en/docs/acc/v1/reference/http/forms-get-table-values-GET
