---
title: "RFIs"
url_path: overview/field-guide/rfis
surface: guide
---
# Forma RFIs

The RFIs (Requests for Information) API enables you to programmatically manage the lifecycle of RFIs in Forma. RFIs are formal questions raised during a construction project that require clarification from stakeholders. This API allows you to create, update, transition, and track RFIs and their associated data.

For more information about RFIs in the product, see the [RFIs help documentation](https://help.autodesk.com/view/BUILD/ENU/?guid=RFIs_Overview).

## Key Features
- Create, update, and retrieve RFIs
- Transition RFIs between workflow statuses (e.g., draft → open → submitted)
- Create and update responses with optional attachments
- Retrieve and validate custom identifiers
- Create, update, and retrieve custom attributes
- Retrieve user permissions and workflow details
- Add and retrieve comments
- Retrieve attachments associated with an RFI

## Typical Workflow

A typical RFI workflow includes the following steps:
- Create an RFI in `draft` status.
- Transition the RFI to `open` by assigning users.
- Assigned users submit responses.
- The RFI is transitioned to `submitted` (usually by the manager).
- An official response is optionally added.
- The RFI is closed.

Use the `permittedActions` block in the RFI and workflow responses to determine valid transitions and which users can be assigned or respond at each stage.

For details, see the [RFI Transitions](https://aps.autodesk.com/en/docs/acc/v1/tutorials/rfi-transitions/) tutorial.

## Limitations and Notes

The RFIs API does not currently support:
- Batch creation or update of RFIs
- Retrieving activity logs
- Adding or inviting users to a project
- Updating advanced project settings
- Modifying user roles or permissions
- Deleting RFIs, responses, or attachments
- Deleting custom attributes
- Webhook events

## Best Practices and Common Issues
- Available actions and status transitions vary based on the user’s role and current RFI state. Always refer to the `permittedActions` object.
- Only users with a manager workflow role can be assigned to RFIs in certain statuses.
- Transitions that require attributes (such as assignees) will fail if those fields are missing.

---
원본 문서: https://aps.autodesk.com/en/docs/acc/v1/overview/field-guide/rfis
