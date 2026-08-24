---
title: "Issues V1 Changelog"
url_path: change_history/issues_v1_changelog
surface: guide
---
# Issues Changelog

## Added Support for Attachments 2025-08-26

### Added

Forma Issues now supports attachments.

We have added the following features:
- Creating, uploading, downloading, retrieving, and deleting issue attachments.

For more details, see the related [endpoints](https://aps.autodesk.com/en/docs/acc/v1/reference/http/issues-attachments-POST/) and [tutorials](https://aps.autodesk.com/en/docs/acc/v1/tutorials/issues/download-issue-attachments/).

## Added Webhooks Support For Issues Events 2025-07-23

### Added

Forma Issues now supports webhook event notifications. You can subscribe to specific issue-related events and have your application automatically respond when those events occur.

Supported events include:
- `issue.created`
- `issue.updated`
- `issue.deleted`
- `issue.restored`
- `issue.unlinked`

To use this feature, configure a webhook using the [Webhooks API](https://aps.autodesk.com/en/docs/webhooks/v1/developers_guide/overview/). When a subscribed event is triggered, the service sends a notification to your configured callback URL.

For payload details and usage guidance, see the [Issues Field Guide](https://aps.autodesk.com/en/docs/acc/v1/overview/field-guide/issues/#issues-webhooks).

## Updated Maximum Character Limits 2025-03-10

### Updated

The maximum character limits have changed for the following issue fields:
- `title`: Now 100 characters (previously 4200).
- `description`: Now 1,000 characters (previously 10,000).
- `locationDetails`: Now 250 characters (previously 8,300).

The previous higher limits will continue to be supported until May 15, 2025, after which the new limits will be enforced.

## Added Support for Viewing Deleted Issues 2023-09-20

You can now use [GET issues](https://aps.autodesk.com/en/docs/acc/v1/reference/http/issues-issues-GET/) to filter deleted issues (`filter[deleted]`).

For more information about deleted issues, see the [Help documentation](https://help.autodesk.com/view/BUILD/ENU/?guid=Issues_Search_Filter).

## Added New Statuses 2023-05-01

We now support the following statuses: draft, open, pending, in_progress, completed, in_review, not_approved, in_dispute, closed.

For more information about statuses, see the [Help documentation](https://help.autodesk.com/view/BUILD/ENU/?guid=Issues_Statuses).

## Added Support for File-related (pushpin) Issues 2023-03-01

You can now use GET issues to retrieve issues associated with files (pushpins). We have also added a filter (`linkedDocumentUrn`) that allows you to retrieve issues associated with specific 3D and 2D models.

---
원본 문서: https://aps.autodesk.com/en/docs/acc/v1/change_history/issues_v1_changelog
