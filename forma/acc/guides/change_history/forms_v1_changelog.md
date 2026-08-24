---
title: "Forms Changelog"
url_path: change_history/forms_v1_changelog
surface: guide
---
# Forms Changelog

## Release Date: 2026-03-31

_Version 2.0.0_

### Added

**New Version Endpoints**
- [GET forms v2](https://aps.autodesk.com/en/docs/acc/v1/reference/http/forms-forms-(New--Beta)-GET) endpoint with enhanced filtering and sorting:  Multi-field `sort` parameter replaces `sortBy`/`sortOrder`
- New `search` parameter for text search across forms
- New `include` parameter for selectively including additional data (`sublocations`, `inactiveFormTemplates`, `layoutInfo`)
- New `includeSubLocations` parameter to include forms from sublocations
- Form status values now align with the UI (`inProgress`, `inReview`, `closed`, `discarded`, `archived`)
- [PUT values:batch-update v2](https://aps.autodesk.com/en/docs/acc/v1/reference/http/forms-valuesbatch-update-(New--Beta)-PUT) endpoint with custom table support:  Use `schema` field to identify tables (supports both built-in aliases and custom table UUIDs)
- Use `columnId` (UUID) to identify columns on custom tables
- Enhanced schema validation
- [POST values:batch-delete v2](https://aps.autodesk.com/en/docs/acc/v1/reference/http/forms-valuesbatch-delete-(Beta)-POST) endpoint for deleting table rows from both built-in and custom tables

These new version endpoints are currently labeled as Public Beta. The previous versions of these endpoints are deprecated and will be removed on December 29, 2026. We recommend migrating to new version endpoints before that date.

**New Endpoints**
- [GET custom values](https://aps.autodesk.com/en/docs/acc/v1/reference/http/forms-custom-values-(Beta)-GET) for retrieving values of non-tabular (custom) form fields
- [GET table values](https://aps.autodesk.com/en/docs/acc/v1/reference/http/forms-get-table-values-GET) for retrieving values from a table
- [GET layout](https://aps.autodesk.com/en/docs/acc/v1/reference/http/forms-layouts-layoutId-(Beta)-GET) for retrieving structure and sections of form template
- [GET section](https://aps.autodesk.com/en/docs/acc/v1/reference/http/forms-sections-sectionId-(Beta)-GET) for retrieving detailed section information, including custom values fields, table column definitions (`columnId`, `columnKey`, `columnType`)
- [GET weather](https://aps.autodesk.com/en/docs/acc/v1/reference/http/forms-get-weather-data-for-a-project-GET) for retrieving weather data associated with a form

These new endpoints are currently labeled as Public Beta.

**Custom Table Support**
- Full support for reading and writing custom tables (user-defined tables on form templates) in addition to the three built-in tables (Work Log, Materials, Equipment)
- Custom table columns support multiple data types: text, number, integer, dropdown, date, time, duration, signature, and reference fields
- See the [Forms API Migration Guide (2026 April Release)](https://aps.autodesk.com/en/docs/acc/v1/overview/migration-guides/forms-v1-to-v2) for details on working with custom tables

### Changed
- Form status values updated to align with the UI:  `draft` → `inProgress`
- `in_review` → `inReview`
- `submitted` → `closed`
- The `updatedAfter`/`updatedBefore` filters now use inclusive comparison (“at or after”/”at or before”) instead of exclusive

Check [Forms API Migration Guide (2026 April Release)](https://aps.autodesk.com/en/docs/acc/v1/overview/migration-guides/forms-v1-to-v2) for details when you work on migration.

## Release Date: 2024-09-17

_Version 1.2.3_

### Added
- New field `name` indicating the name of the form instance in the response of the following endpoints:  [POST forms](https://aps.autodesk.com/en/docs/acc/v1/reference/http/forms-forms-POST)
- [PATCH forms/:formId](https://aps.autodesk.com/en/docs/acc/v1/reference/http/forms-forms-formId-PATCH)
- [PUT values:batch-update](https://aps.autodesk.com/en/docs/acc/v1/reference/http/forms-valuesbatch-update-(Deprecated)-PUT)
- [GET forms](https://aps.autodesk.com/en/docs/acc/v1/reference/http/forms-forms-(Deprecated)-GET)
- New field `name` indicating the name of the form instance in the request body of:  [POST forms](https://aps.autodesk.com/en/docs/acc/v1/reference/http/forms-forms-POST)
- [PATCH forms/:formId](https://aps.autodesk.com/en/docs/acc/v1/reference/http/forms-forms-formId-PATCH)

## Release Date: 2023-03-21

_Version 1.2.2_

### Added
- New endpoint to create Form instances [POST forms](https://aps.autodesk.com/en/docs/acc/v1/reference/http/forms-forms-POST).
- New endpoint to update Form instances [PATCH forms/:formId](https://aps.autodesk.com/en/docs/acc/v1/reference/http/forms-forms-formId-PATCH).
- New endpoint to fill Form fields and tables [PUT values:batch-update](https://aps.autodesk.com/en/docs/acc/v1/reference/http/forms-valuesbatch-update-(Deprecated)-PUT).
- New fields in [GET forms](https://aps.autodesk.com/en/docs/acc/v1/reference/http/forms-forms-(Deprecated)-GET) response  `createdAt` indicating when the form was created on the server
- `userCreatedAt` indicating when the form was created on the client
- `lastReopenedBy` indicating the user that re-opened the Form (if applicable)
- `lastSubmitterSignature` indicating the signature of the reviewer who last submitted the Form (if applicable)
- Weather now includes `provider` indicating the source of the weather data

## Release Date: 2023-01-12

_Version 1.2.1_

### Removed
- Discarded forms no longer appear in the response to [GET forms](https://aps.autodesk.com/en/docs/acc/v1/reference/http/forms-forms-(Deprecated)-GET). It returns forms with `draft`, `submitted`, or `archived` statuses.

## Release Date: 2022-04-28

_Version 1.2.0_

### Added
- The new assignee type attribute (`assigneeType`) was added, which enables you to determine the subject (user, role, or company) the form is assigned to. See [GET forms](https://aps.autodesk.com/en/docs/acc/v1/reference/http/forms-forms-(Deprecated)-GET) for more details.

## Release Date: 2021-09-28

_Version 1.1.0_

### Added
- The new location attribute (`locationId`) was added, which enables you to determine the location associated with a form. See [GET forms](https://aps.autodesk.com/en/docs/acc/v1/reference/http/forms-forms-(Deprecated)-GET) for more details.
- The location filter (`locationIds`) was added, which enables you to filter forms according to the locations. See the [Retrieve Forms Associated With Locations](https://aps.autodesk.com/en/docs/acc/v1/tutorials/forms/retrieve-forms-based-on-locations/) tutorial for more details.

---
원본 문서: https://aps.autodesk.com/en/docs/acc/v1/change_history/forms_v1_changelog
