---
title: "Reviews V1 Changelog"
url_path: change_history/reviews_v1_changelog
surface: guide
---
# Reviews Changelog

## Release Date: 2026-07-28

_Version 1.4.0_

### Added
- Adds two new `initiatorEditPermissions` values to `additionalOptions`:  `CLOSED_REVIEW_TITLE`: Allows initiators to rename closed reviews.
- `START_OWN_REVIEW`: Allows initiators to start their own reviews.
- Adds a new field `additionalOptions.approverEditPermissions` (array). The `APPROVERS` value allows approvers to modify the approver candidate list, enabling delegation to other users.
- Adds a new custom attribute type `largeList` to `reviewContent.customAttributes.[].type` in the [GET reviews/:reviewId/versions](https://aps.autodesk.com/en/docs/acc/v1/reference/http/reviews-getreviewversions-GET) endpoint, supporting large dropdown list attributes.
- Adds `approvedBy` and `approvedAt` fields to the review response returned by [GET reviews/:reviewId](https://aps.autodesk.com/en/docs/acc/v1/reference/http/reviews-getreview-GET) and [GET reviews](https://aps.autodesk.com/en/docs/acc/v1/reference/http/reviews-reviews-GET).
- Adds `filter[approvedBy]` and `filter[approvedAt]` query parameters to the [GET reviews](https://aps.autodesk.com/en/docs/acc/v1/reference/http/reviews-reviews-GET) endpoint for filtering reviews by approval information.

## Release Date: 2026-05-15

_Version 1.3.0_

### Added
- Adds more granular control over what initiators can edit when starting a review (`initiatorEditPermissions` in `additionalOptions`). This replaces the boolean `allowInitiatorToEdit` field. To preserve the previous behavior (allowing initiators to edit reviewer assignments and step durations), set `initiatorEditPermissions` to `REVIEWER_ASSIGNMENTS_AND_DURATION`. Additional permissions, such as `APPROVERS`, allow control over capabilities that were not configurable with the legacy field.
- Adds support for attaching custom attributes to an approval workflow and controlling how those attributes are updated after the review is complete (`attachedAttributes` and `updateAttributesOptions`). This includes support for allowing approvers to update attribute values for rejected files (`allowApproverToUpdateRejectedFiles` in `updateAttributesOptions`).

### Changed
- `allowInitiatorToEdit` is deprecated but remains available for backward compatibility.

## Release Date: 2025-10-23

_Version 1.2.0_

### Changed
- Added webhook support for Forma Reviews. You can now subscribe to review-related webhook events and have your application automatically respond when these events occur. Supported events include:  `review.created-1.0` – Triggered when a review finishes initialization (success or failure).
- `review.closed-1.0` – Triggered when a review is closed.

To use this feature, configure a webhook using the [Webhooks API](https://aps.autodesk.com/en/docs/webhooks/v1/developers_guide/overview/).
When a subscribed event occurs, Forma sends a notification to your configured callback URL.

For examples and payload details, see Step 4 in the [Create a Review](https://aps.autodesk.com/en/docs/acc/v1/tutorials/reviews-create-review) tutorial.

## Release Date: 2025-09-30

_Version 1.1.0_

### Added
- New endpoint to create an approval workflow: [POST workflows](https://aps.autodesk.com/en/docs/acc/v1/reference/http/reviews-createworkflow-POST).
- New endpoint to retrieve an approval workflow by ID: [GET workflows/:workflowId](https://aps.autodesk.com/en/docs/acc/v1/reference/http/reviews-getworkflow-GET).
- New endpoint to create a review: [POST reviews](https://aps.autodesk.com/en/docs/acc/v1/reference/http/reviews-createreview-POST).
- New endpoint to retrieve a review by ID: [GET reviews/:reviewId](https://aps.autodesk.com/en/docs/acc/v1/reference/http/reviews-getreview-GET).
- New endpoint to retrieve the progress of a review: [GET reviews/:reviewId/progress](https://aps.autodesk.com/en/docs/acc/v1/reference/http/reviews-getreviewprogress-GET).

### Changed
- Updated the versionId parameters description and the Request example of the [GET reviews/:reviewId/versions/:versionId/approval-statuses](https://aps.autodesk.com/en/docs/acc/v1/reference/http/reviews-getversionapprovalstatuses-GET) endpoint.

---
원본 문서: https://aps.autodesk.com/en/docs/acc/v1/change_history/reviews_v1_changelog
