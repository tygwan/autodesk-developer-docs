---
title: "Reviews"
url_path: overview/field-guide/reviews
surface: guide
---
# Forma Reviews API Field Guide

This guide introduces the Forma Reviews API, which allows access to resources related to the Reviews tool in Forma projects.

For more information about how Reviews work in Forma, see the [Reviews Help](https://help.autodesk.com/view/DOCS/ENU/?guid=Reviews).

## How the Reviews API Works

The Reviews API provides read and write access to Reviews and associated data in your Forma project. This includes:
- Retrieving approval workflows configured for reviews
- Retrieving review instances generated from those approval workflows
- Retrieving the files and file versions currently under a review
- Retrieving the approval workflow assigned to a specific review
- Retrieving approval statuses for each file version across all reviews
- Retrieving step-by-step progress of a review
- Creating approval workflows with customized configurations
- Creating reviews for multiple files using specific approval workflows

## Reviews Webhooks

A review instance can trigger webhook events upon creation and closure.
These events enable you to track when a review becomes available or is fully completed.

Review creation and closure are asynchronous processes:

When the create event is triggered, it indicates that all resources associated with the review have been prepared and the review is ready for use.

When the close event is triggered, it signifies that the review process has finished, including the execution of all completion actions.

Any project member can create a webhook for Reviews events.
See the [Creating a Webhook and Listening to Forma Reviews Events](https://aps.autodesk.com/en/docs/webhooks/v1/tutorials/create-a-hook-reviews/) tutorial for setup details.
Only users who have access to a specific review instance can receive corresponding webhook notifications.

Use the Webhooks API to create a webhook that notifies your application when a specified event occurs in a project or hub.
When triggered, the webhook sends a notification to your configured callback URL.

For more information, see the [Webhooks API Overview](https://aps.autodesk.com/en/docs/webhooks/v1/developers_guide/overview/).
For a complete list of available events, see [Reviews Events](https://aps.autodesk.com/en/docs/webhooks/v1/reference/events/reviews_events/).

## Terminology

These terms are specific to the Reviews API:

### Approval Workflow

A defined sequence of steps and candidate reviewers/approvers used to guide the file review process.

Each workflow can include multiple Initial Review steps and a Final Review step.

### Review

An instance of an Approval Workflow that has been started for specific file versions. Review candidates are assigned according to the original approval workflow.

Note that modifying the workflow does not affect existing reviews created from it.

### Version

A specific version of a file uploaded to Forma. A review typically targets one or more versions of a file.

### Approval Status

Represents the current state of a version in the review process. Possible values include:
- `IN_REVIEW`
- `APPROVED`
- `REJECTED`

Note that a file version may be part of multiple reviews. If any associated review is still open, the status remains `IN_REVIEW`.

### Step

A workflow consists of multiple steps. Initial Review steps involve one or more reviewers. The Final Review step is typically the approval step.

Candidate

A user assigned to a step in an approval workflow. Candidates can be:

Initiator — Starts the review.

Reviewer — Reviews files and adds comments.

Approver — Gives final approval.

### Progress

The progress of a review instance shows its overall status and records the actions taken by candidates at each step of the workflow.

### Candidate

A candidate is a user assigned to a step in an approval workflow. Candidates fall into three roles:
- Initiator: The user who can start a review.
- Reviewer: The user who reviews files and adds comments in reviewer steps.
- Approver: The user who gives final approval in the approver step.

### Workflow Definition Options

Approval workflow definitions support configuration options that control what initiators and approvers can edit when starting or managing a review, and how post-review actions behave.

`additionalOptions.initiatorEditPermissions` controls initiator editing behavior when starting or managing a review. It replaces the deprecated `allowInitiatorToEdit` field, which previously enabled editing reviewer assignments and step durations as a single bundled behavior. Each value in this array grants a specific capability to the initiator. Supported values:
- `REVIEWER_ASSIGNMENTS_AND_DURATION`: Allows initiators to modify reviewer assignments and step durations when starting a review. This preserves the behavior of the legacy `allowInitiatorToEdit` field.
- `APPROVERS`: Allows initiators to modify the approver candidate list when starting a review.
- `CLOSED_REVIEW_TITLE`: Allows initiators to rename closed reviews.
- `START_OWN_REVIEW`: Allows initiators to start their own reviews.

`additionalOptions.approverEditPermissions` defines what approvers are allowed to modify during an active review. Supported values:
- `APPROVERS`: Allows approvers to modify the approver candidate list for the current step, enabling delegation to other users.

Workflow definitions can also include `attachedAttributes` and `updateAttributesOptions` to control how custom attributes are applied after the review is complete.
- `attachedAttributes` defines the custom attributes included in the workflow.
- `updateAttributesOptions` controls how those attributes are updated after completion, when the workflow includes a copy action and attribute updates are enabled. It also determines whether approvers are required to enter values before submitting the review.

### Custom Attribute Types

Review file versions may include custom attributes defined by the workflow. Each attribute has a `type` field that indicates its data type. Supported values:
- `string`: A free-text attribute.
- `array`: A dropdown list attribute.
- `date`: A date attribute.
- `largeList`: A large dropdown list attribute, used when the list of options is too large for the standard `array` type.

These attributes appear in the `reviewContent.customAttributes` array in the [GET reviews/:reviewId/versions](https://aps.autodesk.com/en/docs/acc/v1/reference/http/reviews-getreviewversions-GET/) endpoint response.

### Review Approval Fields

Review instances include fields that record the final approval outcome:
- `approvedBy`: An object identifying the user who approved the review.
- `approvedAt`: The timestamp at which the review was approved.

These fields are present in the response of [GET reviews/:reviewId](https://aps.autodesk.com/en/docs/acc/v1/reference/http/reviews-getreview-GET/) and [GET reviews](https://aps.autodesk.com/en/docs/acc/v1/reference/http/reviews-reviews-GET/). You can also filter the list of reviews by these values using the `filter[approvedBy]` and `filter[approvedAt]` query parameters on the [GET reviews](https://aps.autodesk.com/en/docs/acc/v1/reference/http/reviews-reviews-GET/) endpoint.

## Limitations

The Reviews API does not support:
- Editing approval workflows or existing review instances
- Updating or deleting file versions that are under review
- Adding or removing reviewers or approvers from a review instance
- Modifying custom attributes associated with a review instance
- Retrieving activity logs of a review instance
- Exporting review reports
- Proactively sending notifications to reviewers or approvers of a review instance
- Processing or completing a review (for example, [Starting a review, Completing steps, or Submitting decisions](https://help.autodesk.com/view/DOCS/ENU/?guid=Reviews_Review_and_Approve))

---
원본 문서: https://aps.autodesk.com/en/docs/acc/v1/overview/field-guide/reviews
