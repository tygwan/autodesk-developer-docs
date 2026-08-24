---
title: "Forms API Migration Guide (2026 April Release)"
url_path: overview/migration-guides/forms-v1-to-v2
surface: guide
---
# Forms API Migration Guide (2026 April Release)

The ACC Forms API Migration Guide was created for developers who are migrating from Forms API v1 to v2. It outlines the changes developers need to make to their code.

## General Changes
- Changes to URIs (v1 to v2).
- Some query parameters have been added, removed, or replaced.
- Response structure has been significantly reorganized with the introduction of the `nativeForm` object.
- The `formTemplate` object has been replaced with `formTemplateId` reference.
- Weather data is no longer included in the response (only `weatherId` is provided). Use the new [GET weather](https://aps.autodesk.com/en/docs/acc/v1/reference/http/forms-get-weather-data-for-a-project-GET) endpoint to retrieve weather details.
- Values (`customValues` and `tabularValues`) are now nested within the `nativeForm` object.
- Custom tables now require `columnId` (UUID) to identify columns—`columnName` is only supported for built-in tables.
- **Form status values have changed** to align with the UI. See Status Changes for the full mapping.

## New Features

New features for v2 include:
- **Custom Table Support**: The v2 API supports custom tables in addition to the built-in tables (worklogEntries, materialsEntries, equipmentEntries). See Working with Custom Tables for details.
- **Enhanced Filtering and Sorting**: New `sort` parameter replaces `sortBy`/`sortOrder` with support for multi-field sorting. New `search` parameter for text search.
- **Granular Data Inclusion**: The `include` parameter allows you to selectively include additional data like `nativeValues`, `tableMetadata`, `layoutInformation`, `sublocations`, and `inactiveFormTemplates`.
- **Native Form Structure**: The `nativeForm` object provides a more structured representation of form data with layout information and detailed column metadata.
- **Sublocation Support**: New `includeSubLocations` parameter to include forms from sublocations.
- **Batch Update Options**: New query parameters `excludeFormResponse` and `includeNativeFormValues` for controlling response data.
- **Batch Delete Endpoint**: New [POST values:batch-delete](https://aps.autodesk.com/en/docs/acc/v1/reference/http/forms-valuesbatch-delete-(Beta)-POST) endpoint for deleting table rows from both native and custom tables.
- **Dedicated Table Values Endpoint**: New [GET table values](https://aps.autodesk.com/en/docs/acc/v1/reference/http/forms-get-table-values-GET) endpoint for retrieving values from a specific table with pagination support.
- **Weather Data Endpoint**: New v3 endpoint to retrieve weather details using the `weatherId` from forms. See Weather Data for details.

The following tables show the specific changes for each endpoint:

### GET Forms

| category | Forms V1 | Forms V2 | Comments |
| --- | --- | --- | --- |
| Method and URI | GET /construction/forms/v1/projects/{projectId}/forms | GET /construction/forms/v2/projects/{projectId}/forms | Replaced |
| Query String Parameter | sortBy | sort | Replaced - v2 supports multi-field sorting with direction |
| Query String Parameter | sortOrder |   | Deleted - merged into sort parameter |
| Query String Parameter |   | search | New - search for forms containing exact text match |
| Query String Parameter |   | includeSubLocations | New - include forms from sublocations |
| Query String Parameter |   | include | New - selectively include additional data (nativeValues/tableMetadata/layoutInfo/sublocations/inactiveFormTemplates) |
| Query String Parameter | includeInactiveFormTemplates |   | Deleted - replaced by include parameter |
| Query String Parameter | updatedAfter | updatedAfter | Behavior changed - v2 uses ‘at or after’ instead of ‘after’ |
| Query String Parameter | updatedBefore | updatedBefore | Behavior changed - v2 uses ‘at or before’ instead of ‘before’ |
| Attribute (response) | data.status (draft/in_review/submitted/discarded/archived) | data.status (inProgress/inReview/closed/discarded/archived) | Changed - status values updated to match UI labels |
| Attribute (response) | data.formTemplate |   | Deleted - replaced with formTemplateId |
| Attribute (response) |   | data.formTemplateId | New - UUID reference to template |
| Attribute (response) | data.projectId |   | Deleted - project ID is in the URI |
| Attribute (response) |   | data.dueDate | New - date the form is due |
| Attribute (response) |   | data.updatedBy | New - user ID that last updated the form |
| Attribute (response) |   | data.weatherId | New - unique identifier of weather associated with form |
| Attribute (response) |   | data.lastSubmittedBy | New - user ID that last submitted the form |
| Attribute (response) |   | data.lastSubmittedAt | New - timestamp when form was last submitted |
| Attribute (response) | data.weather |   | Deleted - only weatherId is provided in v2 |
| Attribute (response) | data.pdfUrl |   | Deleted - replaced with pdfFile object |
| Attribute (response) |   | data.pdfFile | New - object containing PDF file information (id/fileName/pdfUrl) |
| Attribute (response) | data.tabularValues |   | Deleted - moved into nativeForm object |
| Attribute (response) | data.customValues |   | Deleted - moved into nativeForm object |
| Attribute (response) |   | data.nativeForm | New - contains layout info and form values |
| Attribute (response) |   | data.nativeForm.id | New - unique identifier of native form |
| Attribute (response) |   | data.nativeForm.layoutId | New - unique identifier of layout |
| Attribute (response) |   | data.nativeForm.version | New - version of native form |
| Attribute (response) |   | data.nativeForm.layoutInfo | New - layout metadata (uid/type/description/hasSectionAssignees) |
| Attribute (response) |   | data.nativeForm.tabularValues | New - array of table rows with enhanced metadata |
| Attribute (response) |   | data.nativeForm.tabularValues.table | New - built-in table identifier (optional) |
| Attribute (response) |   | data.nativeForm.tabularValues.schema | New - table identifier (built-in alias or UUID for custom tables) |
| Attribute (response) |   | data.nativeForm.tabularValues.rank | New - sort order in table |
| Attribute (response) |   | data.nativeForm.tabularValues.columns | New - array of column values with detailed metadata |
| Attribute (response) |   | data.nativeForm.tabularValues.columns.formValueId | New - unique identifier for form value |
| Attribute (response) |   | data.nativeForm.tabularValues.columns.columnId | New - unique identifier for column |
| Attribute (response) |   | data.nativeForm.tabularValues.columns.columnName | New - name of the column |
| Attribute (response) |   | data.nativeForm.tabularValues.updatedAt | New - timestamp when row was last updated |
| Attribute (response) |   | data.nativeForm.tabularValues.updatedBy | New - user ID that last updated the row |
| Attribute (response) |   | data.nativeForm.customValues | New - array of custom form values (non-tabular) |
| Attribute (response) |   | data.lastFetchedAt | New - timestamp when form was retrieved from API |
|   |   |   |   |

### Status Changes

The v2 API uses updated status values that are consistent with the Forms UI. If your integration filters or displays form statuses, you will need to update your code to use the new values.

| v1 Status | v2 Status | UI Label |
| --- | --- | --- |
| `draft` | `inProgress` | In Progress |
| `in_review` | `inReview` | In Review |
| `submitted` | `closed` | Closed |
| `discarded` | `discarded` | Discarded |
| `archived` | `archived` | Archived |

Note: The `status` query parameter on GET forms also uses the v2 values. For example, to filter for draft forms in v2, use `status=inProgress` instead of `status=draft`.

### PUT values:batch-update

| category | Forms V1 | Forms V2 | Comments |
| --- | --- | --- | --- |
| Method and URI | PUT /construction/forms/v1/projects/{projectId}/forms/{formId}/values:batch-update | PUT /construction/forms/v2/projects/{projectId}/forms/{formId}/values:batch-update | Replaced |
| Query String Parameter |   | excludeFormResponse | New - exclude updated form in response (returns 204) |
| Query String Parameter |   | includeNativeFormValues | New - include form values in response |
| Attribute (request) | tabularValues.table | tabularValues.schema | Replaced - schema supports custom tables |
| Attribute (request) | tabularValues.id | tabularValues.id | Note: v2 requires UUID to be generated for new rows |
| Attribute (request) | tabularValues.columns.columnName | tabularValues.columns.columnId | Note: custom tables require columnId (UUID); columnName only works for built-in tables |
| HTTP Status Code |   | 204 No Content | New - returned when excludeFormResponse is true |
| Attribute (response) | formTemplate |   | Deleted - replaced with formTemplateId |
| Attribute (response) |   | formTemplateId | New - UUID reference to template |
| Attribute (response) | projectId |   | Deleted - project ID is in the URI |
| Attribute (response) |   | dueDate | New - date the form is due |
| Attribute (response) |   | updatedBy | New - user ID that last updated the form |
| Attribute (response) |   | weatherId | New - unique identifier of weather associated with form |
| Attribute (response) |   | lastSubmittedBy | New - user ID that last submitted the form |
| Attribute (response) |   | lastSubmittedAt | New - timestamp when form was last submitted |
| Attribute (response) | weather |   | Deleted - only weatherId is provided in v2 |
| Attribute (response) | pdfUrl |   | Deleted - replaced with pdfFile object |
| Attribute (response) |   | pdfFile | New - object containing PDF file information (id/fileName/pdfUrl) |
| Attribute (response) | tabularValues |   | Deleted - moved into nativeForm object |
| Attribute (response) | customValues |   | Deleted - moved into nativeForm object |
| Attribute (response) |   | nativeForm | New - contains layout info and form values |
| Attribute (response) |   | nativeForm.id | New - unique identifier of native form |
| Attribute (response) |   | nativeForm.layoutId | New - unique identifier of layout |
| Attribute (response) |   | nativeForm.version | New - version of native form |
| Attribute (response) |   | nativeForm.layoutInfo | New - layout metadata (uid/type/description/hasSectionAssignees) |
| Attribute (response) |   | nativeForm.tabularValues | New - array of table rows with enhanced metadata |
| Attribute (response) |   | nativeForm.tabularValues.table | New - built-in table identifier (optional) |
| Attribute (response) |   | nativeForm.tabularValues.schema | New - table identifier (built-in alias or UUID for custom tables) |
| Attribute (response) |   | nativeForm.tabularValues.rank | New - sort order in table |
| Attribute (response) |   | nativeForm.tabularValues.columns | New - array of column values with detailed metadata |
| Attribute (response) |   | nativeForm.tabularValues.columns.formValueId | New - unique identifier for form value |
| Attribute (response) |   | nativeForm.tabularValues.columns.columnId | New - unique identifier for column |
| Attribute (response) |   | nativeForm.tabularValues.columns.columnName | New - name of the column |
| Attribute (response) |   | nativeForm.tabularValues.updatedAt | New - timestamp when row was last updated |
| Attribute (response) |   | nativeForm.tabularValues.updatedBy | New - user ID that last updated the row |
| Attribute (response) |   | nativeForm.customValues | New - array of custom form values (non-tabular) |
| Attribute (response) |   | lastFetchedAt | New - timestamp when form was retrieved from API |
|   |   |   |   |

## Working with Custom Tables

One of the key enhancements in v2 is support for custom tables. In v1, you could only work with the three built-in tables (worklogEntries, materialsEntries, equipmentEntries). In v2, you can work with any custom table defined in your form template.

In v1, you specified the table using the `table` field with one of the built-in aliases:

```
{
  "tabularValues": [
    {
      "id": "cb95aceb-187a-3a8f-2e5f-502a555c03d5",
      "table": "worklogEntries",
      "columns": [...]
    }
  ]
}
```

In v2, you use the `schema` field, which accepts both built-in aliases and custom table identifiers (UUIDs):

```
{
  "tabularValues": [
    {
      "id": "cb95aceb-187a-3a8f-2e5f-502a555c03d5",
      "schema": "worklogEntries",
      "columns": [...]
    },
    {
      "id": "2f7e534d-d084-594b-8aa6-147cb8fbc060",
      "schema": "ec7b2dea-9383-49d4-b22d-52e04659e28b",
      "columns": [...]
    }
  ]
}
```

**Built-in tables** (worklogEntries, materialsEntries, equipmentEntries) support both `columnName` and `columnId` to identify columns:

```
{
  "columns": [
    {
      "columnName": "trade",
      "textVal": "Electricians"
    }
  ]
}
```

**Custom tables** require `columnId` (UUID)—`columnName` is not supported:

```
{
  "columns": [
    {
      "columnId": "e5c8eg5d-35f9-694i-87h7-90ga7fa5j396",
      "textVal": "Excavator #12"
    }
  ]
}
```

To find the column UUIDs for custom tables, use [GET sections](https://aps.autodesk.com/en/docs/acc/v1/reference/http/forms-sections-sectionId-(Beta)-GET) to retrieve the table’s column definitions. For a complete workflow, see the [Work with Form Layouts and Custom Tables](https://aps.autodesk.com/en/docs/acc/v1/tutorials/forms/manage-layouts-and-tables/) tutorial.

In v1, tabular data was returned at the top level with built-in table names:

```
{
  "tabularValues": {
    "worklogEntries": [...],
    "materialsEntries": [...],
    "equipmentEntries": [...]
  }
}
```

In v2, all tabular data is returned in a unified array within `nativeForm.tabularValues`, with each row identified by its `schema`:

```
{
  "nativeForm": {
    "tabularValues": [
      {
        "id": "cb95aceb-187a-3a8f-2e5f-502a555c03d5",
        "table": "worklogEntries",
        "schema": "worklogEntries",
        "rank": 0,
        "deleted": false,
        "columns": [...],
        "updatedAt": "2020-11-20T16:14:27.615127+00:00",
        "updatedBy": "USER123A"
      },
      {
        "id": "1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d",
        "schema": "ec7b2dea-9383-49d4-b22d-52e04659e28b",
        "rank": 0,
        "deleted": false,
        "columns": [...],
        "updatedAt": "2020-11-20T16:14:27.615127+00:00",
        "updatedBy": "USER123A"
      }
    ]
  }
}
```

Note that for custom tables, the `table` field is `null` (or omitted), and you should use the `schema` field to identify the table type. Custom table rows are included in `nativeForm.tabularValues` alongside built-in table rows - no additional API calls are needed to fetch custom table values. Built-in tables have both `table` and `schema` fields populated with the same alias value (`worklogEntries`, `materialsEntries`, or `equipmentEntries`), while custom tables only have the `schema` field containing a UUID.

For tables with many rows or when you need pagination, use the dedicated [GET table values](https://aps.autodesk.com/en/docs/acc/v1/reference/http/forms-get-table-values-GET) endpoint:

```
GET /construction/forms/v1/projects/{projectId}/forms/{formId}/table/{fieldId}/values?limit=10&offset=0
```

The `fieldId` path parameter is the table’s schema identifier (UUID). For built-in tables, use these UUIDs:
- Work Log: `6c8055d5-1301-46f6-9d18-8a2a208a277e`
- Materials: `2adf5ad9-d9d3-ee42-6fd8-015c34ce474d`
- Equipment: `8af6c450-dd2a-32ae-0090-5493a9cc884e`

For custom tables, use the `schema` UUID from the form’s layout definition.

The response includes both `schema` (for backwards compatibility) and `fieldId` fields with the same UUID value.

## Understanding nativeForm

The v2 API introduces the `nativeForm` object, which provides a more structured representation of form data:

The `nativeForm.layoutInfo` object provides metadata about the form’s layout:

```
{
  "nativeForm": {
    "layoutInfo": {
      "uid": "7e8f9a0b-1c2d-3e4f-5a6b-7c8d9e0f1a2b",
      "type": "form",
      "description": "Daily Report Template",
      "hasSectionAssignees": false
    }
  }
}
```

In v2, tabular values include additional metadata:
- `updatedAt`: Timestamp when the row was last updated
- `updatedBy`: User ID who last updated the row
- `rank`: Sort order of the row in the table
- `columns`: Array of column values with detailed metadata including `formValueId`, `columnId`, and `columnName`

Custom values (non-tabular form fields) are now nested within `nativeForm.customValues` and retain the same structure as v1, but with the added context of being part of the native form structure.

## Using the include Parameter

The v2 GET Forms endpoint supports an `include` parameter that allows you to selectively include additional data in the response:
- `nativeValues`: Include the `nativeForm` object with form values
- `tableMetadata`: Include metadata about tables in the form
- `layoutInfo`: Include detailed layout information
- `sublocations`: Include sublocation data
- `inactiveFormTemplates`: Include forms created from inactive templates

Example:

```
GET /construction/forms/v2/projects/{projectId}/forms?include=nativeValues&include=layoutInfo
```

By default, if the `include` parameter is not specified, the response will not include the `nativeForm` object. This allows you to optimize response size when you only need form metadata.

## Deleting Table Values

Use the [POST values:batch-delete](https://aps.autodesk.com/en/docs/acc/v1/reference/http/forms-valuesbatch-delete-(Beta)-POST) endpoint to delete rows from both native and custom tables:

```
POST /construction/forms/v2/projects/{projectId}/forms/{formId}/values:batch-delete
```

Request body:

```
{
  "tabularValues": [
    {
      "id": "row-uuid-to-delete",
      "schema": "worklogEntries"
    },
    {
      "id": "custom-row-uuid",
      "schema": "ec7b2dea-9383-49d4-b22d-52e04659e28b"
    }
  ]
}
```

Optional query parameters:
- `excludeFormResponse=true`: Returns HTTP 204 with no body (faster for bulk operations)
- `includeNativeFormValues=true`: Includes the full native form values in the response

## Weather Data

To retrieve full weather details using the `weatherId` from forms, use the [GET weather](https://aps.autodesk.com/en/docs/acc/v1/reference/http/forms-get-weather-data-for-a-project-GET) endpoint:

```
GET /construction/forms/v3/projects/{projectId}/weather/{weatherId}
```

The response includes:
- Daily summary (`summaryKey`, `precipitationType`, `precipitationAccumulation`)
- Hourly observations (typically at 07:00, 12:00, and 16:00 local time) with temperature, wind speed, wind direction, and humidity

Note: Weather values are returned in **metric units** (Celsius, km/h, mm).

---
원본 문서: https://aps.autodesk.com/en/docs/acc/v1/overview/migration-guides/forms-v1-to-v2
