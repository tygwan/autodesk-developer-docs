---
title: "Files V1 Changelog"
url_path: change_history/files_v1_changelog
surface: guide
---
# Files Changelog

## Release Date: 2026-07-21

_Version 1.6.0_

### Added

#### Large Drop-down Custom Attributes

Added support for large drop-down list custom attribute definitions in Forma projects. Users can create large drop-down lists with up to 2,000 values in the Files UI. The [GET custom-attribute-definitions](https://aps.autodesk.com/en/docs/acc/v1/reference/http/customattributes-custom-attribute-definitions-GET/) response identifies large drop-down list definitions by returning `largeList` in the `type` field.

Added [GET custom-attribute-definitions/:customAttributeDefinitionId/items](https://aps.autodesk.com/en/docs/acc/v1/reference/http/customattributes-items-GET/) to retrieve the selectable options for a `largeList` custom attribute definition.

First, call the custom attribute definitions endpoint above and check the returned `type`:
- For regular drop-down list definitions whose `type` is `array`, the selectable options are returned in `arrayOptions`.
- For large drop-down list definitions whose `type` is `largeList`, use the new endpoint to retrieve the selectable options.

The public API does not currently support creating or updating `largeList` custom attribute definitions or managing their options.

Applications that process custom attribute definitions should be updated to recognize the new `largeList` type.

## Release Date: 2026-07-20

_Version 1.5.0_

### Added

#### Forma Custom Attribute Definitions

Added a new endpoint for retrieving custom attribute definitions across an entire Forma project:
- [GET custom-attribute-definitions](https://aps.autodesk.com/en/docs/acc/v1/reference/http/customattributes-custom-attribute-definitions-GET/).

You can use this endpoint to retrieve project-level custom attribute definitions, for example, when building review workflows using [POST createworkflow](https://aps.autodesk.com/en/docs/acc/v1/reference/http/reviews-createworkflow-POST/).

## Release Date: 2026-04-16

_Version 1.4.0_

### Updated

#### Get RCM Linked Files - Permission Enforcement

The [GET linked-files](https://aps.autodesk.com/en/docs/acc/v1/reference/http/rcm-linked-files-GET/) endpoint now enforces permission checks on linked Revit models. The response includes only linked models that the requesting user has download permission to access. Linked models for which the user lacks sufficient permission are omitted from the response.
For more details, see the updated [Download RVT Files from a Published Model](https://aps.autodesk.com/en/docs/acc/v1/tutorials/files/rcm-linked-files) tutorial.

## Release Date: 2025-08-12

_Version 1.3.0_

### Added

#### Forma File Packages

Added two new endpoints for working with file packages in Forma projects:
- [GET packages](https://aps.autodesk.com/en/docs/acc/v1/reference/http/packages-list-packages-GET/) - Retrieves all packages in the specified Forma project.
- [GET packages/:packageId/resources](https://aps.autodesk.com/en/docs/acc/v1/reference/http/packages-list-package-resources-GET/) - Retrieves the file versions (resources) contained in a specified package.

## Release Date: 2025-06-25

_Version 1.2.0_

### Added

#### Get RCM Linked Files

Added a new endpoint, [GET linked-files](https://aps.autodesk.com/en/docs/acc/v1/reference/http/rcm-linked-files-GET/), that returns signed URLs and metadata for the RVT files linked into a published version of a Cloud Workshared Revit model.

For a step-by-step walkthrough, see the [Download RVT Files from a Published Model](https://aps.autodesk.com/en/docs/acc/v1/tutorials/files/rcm-linked-files) tutorial.

## Release Date: 2024-09-30

_Version 1.1.0_

### Updated

#### PDF File Export
- Support for exporting 2D views and sheets from RVT and DWG files.
- Added support for 2-legged token authentication.
- The [GET export status](https://aps.autodesk.com/en/docs/acc/v1/reference/http/v1-files-export-status-and-result-GET/) endpoint now returns a new status: `partialSuccess`, which includes `failedFiles` in the response.

---
원본 문서: https://aps.autodesk.com/en/docs/acc/v1/change_history/files_v1_changelog
