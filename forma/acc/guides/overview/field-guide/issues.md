---
title: "Issues"
url_path: overview/field-guide/issues
surface: guide
---
# Forma Issues

The Forma Issues API creates and updates issues in your Forma projects. An issue is an item that is created in Forma for tracking, managing and communicating tasks, problems and other points of concern through to resolution.
The Issues API includes the following features:
- Create, update and retrieve project-related Forma issues.
- Retrieve file-related issues (pushpins).
- Retrieve a user’s basic issue permissions.
- Retrieve issue project settings, such as custom attribute (field) definitions and mappings, issue types, and root cause categories.
- Add and retrieve issue comments.
- Update issue statuses (draft/open/answered/closed), and publish or unpublish an issue.
- Upload, download, retrieve, and delete issue attachments.

## Issues Webhooks

Many Issues endpoints trigger a webhook event — for example, when an issue is created, updated, deleted, restored, or unlinked.

These events apply to both placement (pushpin) and non-placement issues, except for `issue.unlinked`, which applies only to placement issues. Placement issues are linked to a location on a drawing or model.

Note that placement issues are currently read-only in the Issues API — they can be retrieved using [GET issues](https://aps.autodesk.com/en/docs/acc/v1/reference/http/issues-issues-GET/), but cannot be created or updated via the API.

Only users with Project Admin permissions can create webhooks for Forma Issues.

You can use the Webhooks API to create a webhook that notifies your application when a specified event occurs in a project or hub. When triggered, the webhook sends a notification to the callback URL you define.

For more information about webhooks, see the [Webhooks API](https://aps.autodesk.com/en/docs/webhooks/v1/developers_guide/overview/).

For a full list of available events, see the [Forma Issues Events](https://aps.autodesk.com/en/docs/webhooks/v1/reference/events/issues_events/) page.

For setup instructions, see the [Creating a Webhook and Listening to Events](https://aps.autodesk.com/en/docs/webhooks/v1/tutorials/create-a-hook-issues/) tutorial.

## Differences Between BIM 360 and Forma

The following list details some notable differences between the BIM 360 Issues API and the Forma Issues API:
- The Issue permissions for Forma are different from BIM 360. For example, a user with Create for my company permissions can only assign an issue to a member of the same company. See [GET users/me](https://aps.autodesk.com/en/docs/acc/v1/reference/http/issues-users-me-GET/) for more details. In addition, some attributes can only be updated by the issue creator or the assignee. For more information, see the [help](https://help.autodesk.com/view/BUILD/ENU/?guid=Issues_Permissions) documentation.
- Forma issues are created as unpublished by default. Only the issue creator and assignee have access to the unpublished issue and only they can edit it. See the [help](https://help.autodesk.com/view/BUILD/ENU/?guid=Issues_Permissions) documentation for more details. You can create issues in a published state or transition them to a published state by configuring the `published` request attribute.
- We are only exposing a single status set for Forma. (in BIM 360 we exposed two status sets). Note that we might be supporting additional status values within the single status set in the future.
- Forma Issues supports both attachments and references. Use the Issues Attachments API to upload and manage file attachments directly to issues. You can use the [Relationships API](https://aps.autodesk.com/en/docs/bim360/v1/overview/field-guide/relationships/) to define and retrieve references between different modules, such as links between issues and photos. See this [blogpost](https://aps.autodesk.com/blog/bim-360acc-relationships-api) for more information about the Relationships API.

## Limitations

The following list details known limitations for the Forma Issues API release:
- You cannot add issues to sheets, models, or files (pushpins). You can retrieve issues that are associated with files, however, we do not currently support retrieving issues that are associated with sheets in the Forma Build Sheet tool.
- We do not currently support retrieving issue activities.
- You can download photo references by retrieving them via the Relationships API and downloading them using Photos API. However, you cannot currently upload photos using the Photos API. We will be supporting the photos upload in the near future. As a workaround you can upload photos to Forma Files using the Data Management API and a _file_ reference to the issue. See the tutorial in the introduction to [POST](https://aps.autodesk.com/en/docs/acc/v1/reference/http/issues-issues-POST/) issues for more details.
- Note that the Forma Issues API is not compatible with BIM 360 projects. Use the BIM 360 Issues API for BIM 360 projects.
- Currently, you can only check permissions for the “current” user. You cannot retrieve permission levels for all users.
- We do not support endpoints that configure permissions.
- We do not support endpoints that configure issue types or custom attributes.

---
원본 문서: https://aps.autodesk.com/en/docs/acc/v1/overview/field-guide/issues
