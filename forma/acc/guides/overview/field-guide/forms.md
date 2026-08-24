---
title: "Forms"
url_path: overview/field-guide/forms
surface: guide
---
# Forma Forms API Field Guide

The Forms tool enables your team to fill out, review, and manage project forms. This provides a single secure point to coordinate data collection, photos, and follow-up documents.

For more information about using Forms, see the [Forms help documentation](https://help.autodesk.com/view/BUILD/ENU/?guid=Build_Forms_about_forms_html).

The Forma Forms API allows you to get, create, update, and fill Forms in your Forma projects.

## Templates

Templates define the permissions, workflow, and the data that will be collected. Each template has a layout that defines its structure — including sections, fields, and tables. Use [GET layouts/:layoutId](https://aps.autodesk.com/en/docs/acc/v1/reference/http/forms-layouts-layoutId-(Beta)-GET) to retrieve the layout of a template.

## Forms

A Form is an instance of a template that is used to collect data from users.
See the [Manage Forms tutorial](https://aps.autodesk.com/en/docs/acc/v1/tutorials/forms/create-update-forms/) to see how to work with forms through the API.

## Values

For PDF Forms, `pdfValues` are data we attempt to extract from the PDF’s smart fields.
For non-PDF Forms, `customValues` are answers to questions in the Form, and `tabularValues` are rows in the tables on the Form.
See the [Manage Forms tutorial](https://aps.autodesk.com/en/docs/acc/v1/tutorials/forms/create-update-forms/) to see how to provide `customValues` and `tabularValues` through the API.
See the [Work with Form Layouts and Custom Tables](https://aps.autodesk.com/en/docs/acc/v1/tutorials/forms/manage-layouts-and-tables/) tutorial to learn how to work with layouts and custom table values.

## Locations

Location values may be optionally provided for a Form’s “Location” attribute. These values are created and maintained outside of the Forms service by the Locations service. Locations are created in an inheritance tree that further defines location as you traverse the tree moving away from the root. For example, a full location might be San Leandro campus > 357 Bernoulli Drive > 4th floor > Meeting Room Gamma.
See the [Configure a Locations Tree](https://aps.autodesk.com/en/docs/acc/v1/overview/field-guide/forms/acc/v1/tutorials/locations/configure-locations-tree) tutorial to see how to work with the locations API.

## Relationships

The Relationships service defines a link between entities in different Autodesk services (called domains in the Relationships API).
One example is a Form that is linked to an Issue.
You can read more about relationships in the [Relationships Field Guide](https://aps.autodesk.com/en/docs/bim360/v1/overview/field-guide/relationships/).

When using the Relationships API, the API sees the Forms service as one relationship domain that contains two entities: forms and form fields. The Relationships API can link forms and form fields to entities in other domains.

## Limitations

This release of the Forma Forms API has some limitations:
- It does not support creating or updating templates.
- Some template information is not included, such as conditional logic rules, user-defined validation rules, and template-level permission assignments.
- It does not support replacing a Form’s PDF.

---
원본 문서: https://aps.autodesk.com/en/docs/acc/v1/overview/field-guide/forms
