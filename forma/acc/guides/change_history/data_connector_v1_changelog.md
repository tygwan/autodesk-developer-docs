---
title: "Data Connector V1 Changelog"
url_path: change_history/data_connector_v1_changelog
surface: guide
---
# Data Connector V1 Changelog

## Release Date: 2026-05-01

_Version 1.2.0_

### Added

You can now:
- Use delta extraction (Change Data Capture) service groups to extract only records that have changed within a specified time window, instead of full datasets on each run. Delta extraction requires `startDate` and `endDate` to define the extraction window. See the [Field Guide](https://aps.autodesk.com/en/docs/acc/v1/overview/field-guide/data-connector/) for details.
- Use the new `CUSTOM` value for the `dateRange` attribute to define a custom date range using `startDate` and `endDate`.

See [POST requests](https://aps.autodesk.com/en/docs/bim360/v1/reference/http/data-connector-requests-POST/)
for more details about these updates.

## Release Date: 2025-01-21

_Version 1.1.1_

### Added

You can now:
- Extract data for a list of selected projects (`projectIdList`)
- Extract data for only active projects in the hub (`projectStatus`)
- Specify a timeframe for data extraction using the new `dateRange` attribute, with options such as `TODAY`, `YESTERDAY`, `PAST_7_DAYS`, `MONTH_TO_DATE`, and `LAST_MONTH`. Note that the `dateRange` attribute currently applies only to the Activities service. See the [Field Guide](https://aps.autodesk.com/en/docs/acc/v1/overview/field-guide/data-connector/) for details about Request Scheduling and Data Timeframes.

See [POST requests](https://aps.autodesk.com/en/docs/acc/v1/reference/http/data-connector-requests-POST/) for more details about these updates.

## Release Date: 2023-05-17

_Version 1.1.0_

### Added

You can now:
- Extract Activities service data (`serviceGroups`)
- Specify date ranges (`startDate`, `endDate`) for schemas that support date range extraction

See [POST requests](https://aps.autodesk.com/en/docs/bim360/v1/reference/http/data-connector-requests-POST/) and [PATCH requests/:requestId](https://aps.autodesk.com/en/docs/bim360/v1/reference/http/data-connector-requests-requestId-PATCH/) for more details.

You can now:
- Sort parameters in the response (`sortFields`)
- Filter your request according to specified values or dates (`filter[]`)

See [GET requests](https://aps.autodesk.com/en/docs/bim360/v1/reference/http/data-connector-requests-GET/) and [GET jobs](https://aps.autodesk.com/en/docs/bim360/v1/reference/http/data-connector-jobs-GET/) for more details.

You can now check who last downoaded each returned extraction job, and the date and time it was extracted.

See [GET requests/:requestId/jobs](https://aps.autodesk.com/en/docs/acc/v1/reference/http/data-connector-requests-requestId-jobs-GET/), [GET jobs](https://aps.autodesk.com/en/docs/bim360/v1/reference/http/data-connector-jobs-GET/), and [GET jobs/:jobId](https://aps.autodesk.com/en/docs/bim360/v1/reference/http/data-connector-jobs-jobId-GET/) endpoints now return `lastDownloadedBy` and `lastDownloadedAt` for more details.

## Release Date: 2022-06-06

_Version 1.0.1_

### Added

Added a new endpoint, [GET jobs](https://aps.autodesk.com/en/docs/bim360/v1/reference/http/data-connector-jobs-GET/), which returns all of the data extraction jobs for all of the requests in a specified hub or project. Use this endpoint’s `projectId` parameter to specify the project.

Other Data Connector endpoints now include a `projectId` field in their request or response payload to support project-level data extraction:
- [POST requests](https://aps.autodesk.com/en/docs/bim360/v1/reference/http/data-connector-requests-POST/) uses `projectId` in its request payload to create a project-level data extraction request.
- [POST requests](https://aps.autodesk.com/en/docs/bim360/v1/reference/http/data-connector-requests-POST/), [GET requests](https://aps.autodesk.com/en/docs/bim360/v1/reference/http/data-connector-requests-GET/), [PATCH requests/:requestId](https://aps.autodesk.com/en/docs/bim360/v1/reference/http/data-connector-requests-requestId-PATCH/), and [GET requests/:requestId/jobs](https://aps.autodesk.com/en/docs/bim360/v1/reference/http/data-connector-requests-requestId-jobs-GET/) include `projectId` in their response payloads to identify the project of each returned request or job.

---
원본 문서: https://aps.autodesk.com/en/docs/acc/v1/change_history/data_connector_v1_changelog
