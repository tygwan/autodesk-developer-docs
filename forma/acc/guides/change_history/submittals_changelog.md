---
title: "Submittals Changelog"
url_path: change_history/submittals_changelog
surface: guide
---
# Submittals Changelog

## Release Date: 2026-05-15

_Version 2.1.3_

### Added

We have added the following features:
- [Creating admin mappings](https://aps.autodesk.com/en/docs/acc/v1/reference/http/submittals-mappings-POST/) to assign Submittal Managers to a project.
- [Deleting admin mappings](https://aps.autodesk.com/en/docs/acc/v1/reference/http/submittals-mappings-mappingId-DELETE/) from a project.
- [Configuring the custom identifier sequence type](https://aps.autodesk.com/en/docs/acc/v1/reference/http/submittals-custom-identifierchange-sequence-type-POST/) for a project.
- [Retrieving async job status](https://aps.autodesk.com/en/docs/acc/v1/reference/http/submittals-async-jobs-asyncJobId-GET/). This endpoint tracks the status of a sequence type change triggered by [POST custom-identifier:change-sequence-type](https://aps.autodesk.com/en/docs/acc/v1/reference/http/submittals-custom-identifierchange-sequence-type-POST/).

### Tutorials

We have added the following tutorial:
- [Setting Up a New Project in Submittals](https://aps.autodesk.com/en/docs/acc/v1/tutorials/submittals/submittals-settings-up-new-project): Explains how to assign a Submittal Manager and configure the custom identifier sequence type for a new project.

## Release Date: 2025-03-03

_Version 2.1.3_

### Added

We have added the following features:
- Updating submittal items.
- Transitioning submittal items.
- Retrieving Steps and Tasks.
- Closing Tasks.
- Retrieving submittal item revisions.
- Creating and Updating attachments.
- Retrieving Review templates
- Creating a submittal item with a review template

## Release Date: 2024-07-30

_Version 2.1.2_

### Added

We have added the following features:
- Creating submittal items.
- Creating spec sections.
- Retrieving and validating custom numbers.
- Retrieving submittal item types.
- Retrieving submittal item responses.
- Retrieving a list of managers (mappings).
- Retrieving project metadata.
- Retrieving user permissions.
- Filtering submittal items by package ID (`filter[packageId]`) and review response ID (`filter[reviewResponseId]`) in [GET items](https://aps.autodesk.com/en/docs/acc/v1/reference/http/submittals-items-GET/).

## Release Date: 2023-12-30

_Version 2.1.1_

### Added
- You can now retrieve custom numbers (`customIdentifierHumanReadable` and `customIdentifier`) using [GET items](https://aps.autodesk.com/en/docs/acc/v1/reference/http/submittals-items-GET/).
- You can also sort items according to custom numbers.

For information about custom numbering, see the [Help documentation](https://help.autodesk.com/view/BUILD/ENU/?guid=Submittal_Custom_Numbering).

---
원본 문서: https://aps.autodesk.com/en/docs/acc/v1/change_history/submittals_changelog
