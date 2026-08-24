---
title: "Hub Admin"
url_path: overview/field-guide/admin
surface: guide
---
# Forma Hub Admin API Field Guide

The Forma Hub Admin API automates setting up projects, assigning project admins, managing member and partner company directories, and managing project users across products. You can also synchronize data with external systems. The Admin API includes the following features:
- Create and retrieve information about Forma projects. Note that the project endpoints support both 2-legged (with user ID) and 3-legged authentication.
- Create, retrieve, update, and delete Forma project users. Note that the project user endpoints support both 2-legged (with user ID) and 3-legged authentication.
- Manage your business partner companies across products.
- Create a master member directory to manage hub users and project users across products.
- Manage a business units structure that can be used to create regional offices or locations that you use for reporting purposes.

Note that the Forma Project and Project User endpoints are NOT compatible with BIM 360. Use the BIM 360 Account Admin API for BIM 360 projects.

To assign licenses to Forma users, go to the Members tool in the Hub Admin module in the [Forma UI](https://acc.autodesk.com). For more information about Forma Hub Admin features and workflows, see the [Forma Hub Admin](https://help.autodesk.com/view/BUILD/ENU/?guid=Account_Administration) help documentation.

## Working with Forma Services in Different Regions

Forma services are hosted in data centers across the US and EMEA. Data stored in the US is not available in EMEA and vice versa.

Most Forma services support automatic region routing; your API calls are automatically routed to the relevant data center. API calls to US data centers are the same as API calls to EMEA data centers.

However, the Forma Hub Admin API does not currently support automatic region routing:
- For Forma-only endpoints, the correct `region` must be specified in the request header.
- For forward-compatible BIM 360 endpoints, Hub Admin calls to US data centers require different base URIs than calls to EMEA data centers.

Note that If you’re not sure which region your data is stored in, we recommend that you verify the region by calling [GET projects](https://aps.autodesk.com/en/docs/acc/v1/reference/http/admin-accounts-accountidprojects-GET/) using both `region` header values. The correct region returns a 200 HTTP status code, and the incorrect region returns a 404 HTTP status code. You can then store the correct region to use for subsequent Forma Hub Admin API calls.

## Working with Projects

You can directly create two classifications of Forma projects:
- A _production project_ — This is a standard project, and the default project classification. All products associated with the hub that contains the project are automatically added to the project and activated.
- A _project template_ — This is a project that you can clone to create a production project.

Note that we refer to a project that was cloned from a template — but is not ready to be used in production — as a _cloned project_. Once its assigned project members have configured the cloned project for use, it will be a production project.

Note that you cannot create a project template from another project template, but you can base it on a production project. The new project template is not completely configured for use, but it will get you started.

For more information about working with project templates, see [Project Administration > Project Templates](https://help.autodesk.com/view/BUILD/ENU/?guid=Templates_About) and [Hub Administration > Project Templates](https://help.autodesk.com/view/BUILD/ENU/?guid=Account_Admin_Project_Templates) in Build Help.

### Project Members

You can assign any user in the Forma hub that contains a given production project or project template to participate in the project as a _project member_.

Project templates have two sets of members:
- The main set of _template project members_ who can be assigned in bulk to production projects that are cloned from the template. These members are inactive within the template, but will be activated once copied to a cloned project.
- A separate set of _template configuration members_ who are able to edit the template. These members are active within the template, but are not automatically assigned to any cloned project.

Note that currently when you call [GET projects/:projectId/users](https://aps.autodesk.com/en/docs/acc/v1/reference/http/admin-projects-projectId-users-GET/) to retrieve a template’s users, the response contains only the active members — the template configuration members.

You can give project members either _member_ access or _administrator_ access to any project in which they’re active.

### Cloning a Project from a Template

You can create a new production project as a clone of an existing project template by calling [POST accounts/:account_id/projects](https://aps.autodesk.com/en/docs/acc/v1/reference/http/admin-accountsaccountidprojects-POST/) with the appropriate request parameters. The template’s products and settings are copied to the cloned project. The Hub Admin service launches an asynchronous job to activate the products.

Currently, you can copy all of the template project members to the cloned project in bulk by calling [POST projects/:projectId/users](https://aps.autodesk.com/en/docs/acc/v1/reference/http/admin-projects-projectId-users-POST/) to assign a project administrator to the cloned project. This administrator can be any user who is currently in the same hub as the project. This triggers the automatic process of assigning the template project members to the cloned project and activating them.

## Limitations

The following list details known limitations of the current release of the Forma Hub Admin API:
- All products in a Forma project must be active. We do not currently support turning off entire products or tools for a project.
- We do not currently support different project user access levels for different products. See the [Administration documentation](https://help.autodesk.com/view/BUILD/ENU/?guid=Administration) for more details about how to set user access levels per product.
- We currently do not provide Forma endpoints for the following operations:  Fetching the status of an asynchronous job while creating a project or importing multiple project users.
- Retrieving Forma project roles. We recommend using the [Data Connector API](https://aps.autodesk.com/en/docs/acc/v1/reference/http/data-connector-requests-POST/) to fetch project role data.
- Updating or deleting Forma projects.

If you are experiencing performance issues with the Hub Admin API, we recommend reducing the volume of API calls or the number of resources affected by batch operations. For more information, see the [Rate Limits](https://aps.autodesk.com/en/docs/acc/v1/overview/rate-limits/admin-rate-limits/) page.

---
원본 문서: https://aps.autodesk.com/en/docs/acc/v1/overview/field-guide/admin
