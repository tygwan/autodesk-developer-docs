---
title: "Submittals"
url_path: overview/field-guide/submittals
surface: guide
---
# Forma Submittals

The Submittals API allows you to create submittal items, manage their transitions, and access data stored in the [Forma Submittals module](https://help.autodesk.com/view/BUILD/ENU/?guid=Submittals_Overview). Submittals are documents created for approval by the project’s stakeholders. They go through a formal reviewing process. For more information about Submittals, see the [Submittals help](https://help.autodesk.com/view/BUILD/ENU/?guid=Submittals_Overview) documentation.

The Submittals API includes the following features:
- Create, Update and retrieve submittal items.
- Transition submittal items
- Retrieve submittal item revisions.
- Create and retrieve spec sections.
- Retrieve packages.
- Retrieve submittal item types.
- Retrieve submittal item responses.
- Retrieve submittal item Steps and Tasks.
- Retrieve review templates.
- Close Tasks (Add review).
- Create and Update attachments.
- Retrieve attachments associated with a submittal item.
- Download attachments.
- Retrieve the next custom number and validate your own custom number.
- Retrieve a list of project managers.
- Retrieve a user’s permissions.
- Retrieve project metadata.
- Creating and deleting Submittal Managers for a project.
- Configuring the custom identifier sequence type for a project.

## Limitations

We do not currently support the following features:
- Updating, and deleting submittals data.
- Batch create and batch update (including importing).
- Creating packages.
- Retrieving item activities.
- Creating item types or responses.
- Creating and managing submittals review templates.
- We do not currently provide endpoints to programmatically retrieve information about roles.
- Although creating review Steps and Tasks programmatically is not supported, users can create a review template (containing Steps and Tasks) through the UI and apply it to a submittal item in the [Post items](https://aps.autodesk.com/en/docs/acc/v1/reference/http/submittals-items-POST/) request.

---
원본 문서: https://aps.autodesk.com/en/docs/acc/v1/overview/field-guide/submittals
