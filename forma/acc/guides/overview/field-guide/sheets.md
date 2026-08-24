---
title: "Sheets"
url_path: overview/field-guide/sheets
surface: guide
---
# Forma Sheets API Field Guide

This field guide describes the components of the Forma Sheets service and shows how they work together.
It also provides key concepts to help you successfully use the Forma Sheets API.

For more information about Sheets features, please refer to [Sheets Help](https://help.autodesk.com/view/BUILD/ENU/?guid=Upload_And_Publish_Sheets).

## Sheets

Sheet is the primary component of Forma Sheets service.
One sheet represents one view of a document, e.g. one page of PDF, or one 2D view of RVT.
Currently, the Sheets API only supports uploading PDF files and does not support associating them with collections.

This table shows the standard attributes that define each sheet:

| Name | Required Value? | Description |
| --- | --- | --- |
| ID | Yes | The ID of the sheet. Should be unique within a project. All operations use ID to confirm the scope. |
| Number | Yes | The number of the sheet, a human-readable identifier. Shows as primary description of Number column in Forma Sheets UI.
The `number` is automatically extracted from the sheet’s title block and can be updated on demand. |
| Title | Yes | The title of the sheet. Shows as secondary description of Number column in Forma Sheets UI.
The `title` is automatically extracted from the sheet title block and can be updated on demand. |
| Tags | Yes | A list of user defined tags of the sheet. |
| Version Set ID | Yes | The ID of the version set that the sheet belongs to. |
| Viewable | No | The URN and view GUID that can be used to load the view in [Viewer](https://aps.autodesk.com/en/docs/viewer/v7/developers_guide/viewer_basics/). |

## Version Sets

Version set is the collection of sheets.
One version set can have multiple sheets, but the sheet number must be unique in each version set.
Deleting version set will also delete all the sheets within the version set.

This table shows the standard attributes that define each version set:

| Name | Required Value? | Description |
| --- | --- | --- |
| ID | Yes | The ID of the version set. Should be unique within a project. All operations use ID to confirm the scope. |
| Name | Yes | The name of the version set, a human-readable identifier. Should be unique within the project. |
| Issuance Date | Yes | Represents the date that the sheets are issued to other project members. Determines attribute `current` of sheets, please refer to `Current Sheets` section. |

## Uploads

An upload represents the process of uploading files, extracting and reviewing individual sheets from the files, and publishing them to Forma Sheets.

This table shows the standard attributes that define each upload:

| Name | Required Value? | Description |
| --- | --- | --- |
| ID | Yes | The ID of the upload. Should be unique within a project. All operations use ID to confirm the scope. |
| Version Set ID | Yes | The ID of the version set that will contain all the sheets published by the upload. |
| Status | Yes | The status of the upload, changes according to API call and processing status.
Possible values: `PENDING`, `PROCESSING`, `IN_REVIEW`, `FAILED`, `UPDATING_VERSION_SET`, `PUBLISHING`, `PUBLISHED`. |

A typical workflow of upload will be:

In Forma Files, all storages share one OSS bucket. But in Forma Sheets, each project has its own OSS bucket. It is recommended to extract bucket key from storage URN every time before you call OSS APIs.

Please refer to [Upload Files to Forma Sheets tutorial](https://aps.autodesk.com/en/docs/acc/v1/tutorials/upload-sheets/) to see a detailed example of upload.

## Review Sheets

Review sheets are the objects temporarily created by upload for review before publishing.
The information of review sheets is extracted from the uploaded files, and can be updated by [PATCH review-sheets](https://aps.autodesk.com/en/docs/acc/v1/reference/http/sheets-review-sheets-PATCH/).
Each review sheet will be converted to one sheet in upload publishing process.
The new sheet will have the attributes identical to the review sheet. The review sheet will then be deleted and become no longer accessible.

The review sheets will be entirely deleted when related upload has already been published.

This table shows the standard attributes that define each review sheet:

| Name | Required Value? | Description |
| --- | --- | --- |
| ID | Yes | The ID of the review sheet. |
| Number | Yes | The number of the review sheet, will be inherit by the published sheet. |
| Title | Yes | The title of the review sheet, will be inherit by the published sheet. |
| Tags | Yes | A list of user defined tags of the review sheet, will be inherit by the published sheet. |
| Deleted | Yes | The deleted status of the review sheet. Review sheets marked as `deleted=true` will not be published. |
| Processing State | Yes | The processing status of the review sheet. Possible values: `PROCESSING`, `ROTATING`, `AUDITING`, `READY`, `FAILED`, `PUBLISHING`. |

## Current Sheets

As mentioned in `Version Sets` section, Sheet number should be unique in one version set, but you can use same sheet number in different version sets.
To avoid confusion, the Forma Sheets service orders the sheets with same number by the issuance dates of their version sets, and only shows the sheet in the last.
In this case, the last sheet is the `current` sheet.

Sheet model has an attribute `isCurrent` to indicate whether a sheet is `current`.

You can use query parameter `currentOnly` to specify whether you need all the sheets or only the `current` sheets in the API [GET sheets](https://aps.autodesk.com/en/docs/acc/v1/reference/http/sheets-sheets-GET/).

## Deleting

In the Forma Sheets API, deleting behaviors are different for different kinds of components.
- Sheets: supports deleting and restoring, should use specific APIs.
- Version Sets: supports only deleting.
- Review Sheets: `deleted` is just a flag that indicates upload does not need to publish this review sheet. Call [PATCH review-sheets](https://aps.autodesk.com/en/docs/acc/v1/reference/http/sheets-review-sheets-PATCH/) to update the attribute `deleted`.

Other components do not support deleting in this release.

## Export

To export sheets, users must have, at a minimum, export permissions.

Users can export sheets that include both standard markups and feature markups. Currently, the features supported are Issues, Photos, and Assets. For more information on sheet markups, see the [Sheets Markups Help](https://help.autodesk.com/view/BUILD/ENU/?guid=Sheets_Markups).

Below is a table showing the different types of markups that can be included during sheet export.

| Type | Description |
| --- | --- |
| Published standard markups | Markups visible to all project members. |
| Unpublished standard markups | Markups visible only to their creator. |
| Added markup links | Links added manually to a standard markup, including links to Sheets, Files, RFIs, Forms, Submittals, and Assets. |
| Published issues markups | Issues visible to anyone with the correct permission on your project. |
| Unpublished issues markups | Issues visible only to the issue markup creator and the assignee. |
| Published photos markups | Photos visible to anyone on your project. A subscription to Autodesk Forma Build is required. |
| Unpublished photos markups | Photos visible only to the photo markup creator. A subscription to Autodesk Forma Build is required. |
| Asset markups | Markups associated with assets on the sheet. A subscription to Autodesk Forma Build is required. |

## Collections

A collection organizes sheets in the Forma Sheets module, enabling duplicate sheet numbers (e.g., A101, A102) across different collections within a project.

A collection can include multiple sheets and version sets, but sheet numbers must be unique within each collection.

Deleting a collection also deletes all its sheets and version sets.

Currently, the Sheets API only supports querying collections.

For more details about Sheets Collections, see the [Help documentation](https://help.autodesk.com/view/BUILD/ENU/?guid=Sheets_Collections_Autodesk_Build).

This table outlines the standard attributes that define each sheets collection:

| Name | Required Value? | Description |
| --- | --- | --- |
| ID | Yes | The unique identifier for the collection within a project. Used to reference the collection in all operations. |
| Name | Yes | A human-readable identifier for the collection. Displays as the primary description in the Name column of the Forma Sheets UI. |

## Limitations

The Forma Sheets API currently does not support the following features:
- Importing PDFs or RVTs directly from the Files module of a Forma project. You can only upload PDFs from local storage, and collections are not supported for these uploads.
- Rotating review sheets.
- Managing sheet permissions or disciplines.
- Managing markups.
- Managing collections. The Sheets API only supports querying collections.
- Managing version sets and sheets within collections.

---
원본 문서: https://aps.autodesk.com/en/docs/acc/v1/overview/field-guide/sheets
