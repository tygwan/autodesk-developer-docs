---
title: "Files"
url_path: overview/field-guide/files
surface: guide
---
# Forma Files API Field Guide

This field guide describes the components of the Forma Files service and shows how they work together. It also provides key concepts to help you successfully use the Files API to manage files in your Forma projects.

For more information about working with Files, see the [Files Help](https://help.autodesk.com/view/DOCS/ENU/?guid=Files).

## Export

Currently, the Files Export API supports exporting only PDF, RVT and DWG files. The user must have at least download permission to perform the export operation.

You can export files with both _standard_ markups and _feature_ markups included (Issues and Photos are the currently supported features). For more information about markups, see the [Markups Help](https://help.autodesk.com/view/DOCS/ENU/?guid=Markups_Files_Docs).

**Note that the Files API endpoints are not compatible with the export PDF endpoints in BIM 360 Docs Management.**

This table shows different types of markups that you can include when you export files.

| Type | Description |
| --- | --- |
| Published standard markups | Markups visible to all project members. |
| Unpublished standard markups | Markups visible only to their creator. |
| Added markup links | Links added manually to a standard markup, including links to Sheets, Files, RFIs, Forms, Submittals, and Assets. |
| Published issues markups | Issues visible to anyone with the correct permission on your project. |
| Unpublished issues markups | Issues visible only to the issue markup creator and the assignee. |
| Published photos markups | Photos visible to anyone on your project. A subscription to Autodesk Forma Build is required. |
| Unpublished photos markups | Photos visible only to the photo markup creator. A subscription to Autodesk Forma Build is required. |

## File Packages

The File Packages API provides read-only access to packages and their associated resources in the Files module of a Forma project.

You can use this API to:
- Retrieve and filter a list of packages, including package details such as name, creator, creation date, and version type.
- Retrieve and filter the resources (file versions) contained in a package, including metadata such as approval status and custom attributes.

For more information about working with packages in the Files module, see the [File Packages](https://help.autodesk.com/view/DOCS/ENU/?guid=File_Packages_Docs) help documentation.

**Package version types**

| Version Type | Description |
| --- | --- |
| Current versions | `CURRENT` – Files in this package automatically update to the latest current versions. |
| Fixed versions | `FIXED` – Files in this package remain fixed at the selected versions. |

## Limitations

The current release of the Forma Files API has the following limitations:
- Export functionality currently supports only PDFs, and 2D views and sheets from RVT and DWG files.
- The File Packages API does not support creating, updating or sharing packages
- You cannot create, update, or delete packages.
- You cannot add, remove, or update the file versions (resources) within a package.

---
원본 문서: https://aps.autodesk.com/en/docs/acc/v1/overview/field-guide/files
