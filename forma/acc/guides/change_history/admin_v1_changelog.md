---
title: "Hub Admin Changelog"
url_path: change_history/admin_v1_changelog
surface: guide
---
# Hub Admin V1 Changelog

## Release Date: 2026-03-18

_Version 1.5.0_

### Added
- Added a new filter (`filter[addedOn]`) to [GET projects/:id/users](https://aps.autodesk.com/en/docs/acc/v1/reference/http/admin/projects-projectId-users-GET/) to filter users by the date they were added to the project.
- Added a new filter (`filter[status]`) to [GET accounts/:id/companies](https://aps.autodesk.com/en/docs/acc/v1/reference/http/admin/accountsaccountidcompanies-GET/) to filter companies by status.
- Added a new `suppressAdministrativeEmails` field to [POST projects/id/users:import](https://aps.autodesk.com/en/docs/acc/v1/reference/http/admin-v2/projects-projectId-users-import-POST/) to control whether project invitation emails are sent to invited users.

## Release Date: 2025-04-23

_Version 1.3.0_

### Added

Added new endpoints:
- Retrieve the products associated with a specified user. [GET users/:user_id/products](https://aps.autodesk.com/en/docs/acc/v1/reference/http/admin-usersuseridproducts-GET/)
- Retrieve the roles associated with a specified user. [GET users/:user_id/roles](https://aps.autodesk.com/en/docs/acc/v1/reference/http/admin-usersuseridroles-GET/)

## Release Date: 2025-03-20

_Version 1.2.0_

### Added

Added new endpoint: [GET users/:user_id/projects](https://aps.autodesk.com/en/docs/acc/v1/reference/http/admin-usersuseridprojects-GET/) that retrieves the projects associated with a specified user.

## Release Date: 2025-03-03

_Version 1.1.4_

### Added

A new field (`templateId`) has been added to indicate the ID of the project that was used as a template when creating a new project.

This field is included in the response for the following endpoints:
- [GET accounts/projects](https://aps.autodesk.com/en/docs/acc/v1/reference/http/admin-accounts-accountidprojects-GET/)
- [POST accounts/projects](https://aps.autodesk.com/en/docs/acc/v1/reference/http/admin-accounts-accountidprojects-POST/)
- [GET projects/:id](https://aps.autodesk.com/en/docs/acc/v1/reference/http/admin-projectsprojectId-GET/)

## Release Date: 2024-10-01

_Version 1.1.3_

### Added

We have added a new, replacement [GET companies](https://aps.autodesk.com/en/docs/bim360/v1/reference/http/companies-GET/) endpoint, which now also supports filtering. We will continue to support the legacy endpoint.

## Release Date: 2023-10-31

_Version 1.1.0_

### Added

Added new endpoints to do the following:
- Create a new project from scratch or based on an existing template project.
- Add the specified user to a project.
- Add multiple users to a project in bulk.
- Update information about the specified user in a project.
- Remove the specified user from a project.

## Release Date: 2023-06-12

_Version 1.0.0_

### Added

Added new beta endpoints to do the following:
- Retrieve a list of the projects in the specified hub.
- Retrieve a project specified by project ID.
- Retrieve information about a filtered subset of users in the specified project.
- Retrieve detailed information about the specified user in a project.

---
원본 문서: https://aps.autodesk.com/en/docs/acc/v1/change_history/admin_v1_changelog
