---
document_type: "api-group-index"
product: "Autodesk Forma"
surface: "forma-apis"
group: "Hub Admin"
protocol: "REST"
language: "en"
generated: "true"
---

# Hub Admin

[Forma APIs index](../../INDEX.md)

## Overview

- **Product:** Autodesk Forma
- **Surface:** Forma APIs
- **Protocol:** REST
- **Capabilities:** Administer accounts, projects, users, companies, products, and permissions.
- **Common path:** `-`

## Endpoints

| Method | Path | Authentication | Scopes | Description |
| --- | --- | --- | --- | --- |
| `GET` | `/construction/admin/v1/accounts/{accountId}/companies` | user context optional | account:read | [Returns a list of companies in a hub](./endpoints/companies-GET.md) |
| `GET` | `/construction/admin/v1/accounts/{accountId}/projects` | user context optional | account:read | [Retrieves a list of the projects in the specified hub](./endpoints/admin-accounts-accountidprojects-GET.md) |
| `POST` | `/construction/admin/v1/accounts/{accountId}/projects` | user context required | account:write | [Creates a new project in the specified hub](./endpoints/admin-accounts-accountidprojects-POST.md) |
| `GET` | `/construction/admin/v1/accounts/{accountId}/users/{userId}/products` | user context optional | account:read | [Returns a list of Forma products the user is associated with in their assigned projects](./endpoints/admin-usersuseridproducts-GET.md) |
| `GET` | `/construction/admin/v1/accounts/{accountId}/users/{userId}/projects` | user context optional | account:read | [Returns a list of projects for a specified user within a Forma or BIM 360 account](./endpoints/admin-usersuseridprojects-GET.md) |
| `GET` | `/construction/admin/v1/accounts/{accountId}/users/{userId}/roles` | user context optional | account:read | [Returns the roles assigned to a specific user across the projects they belong to](./endpoints/admin-usersuseridroles-GET.md) |
| `GET` | `/construction/admin/v1/projects/{projectId}` | user context optional | account:read | [Retrieves a project specified by project ID](./endpoints/admin-projectsprojectId-GET.md) |
| `GET` | `/construction/admin/v1/projects/{projectId}/users` | user context optional | account:read | [Retrieves information about a filtered subset of users in the specified project](./endpoints/admin-projectsprojectId-users-GET.md) |
| `POST` | `/construction/admin/v1/projects/{projectId}/users` | user context required | account:write | [Assigns a user to the specified project](./endpoints/admin-projects-project-Id-users-POST.md) |
| `DELETE` | `/construction/admin/v1/projects/{projectId}/users/{userId}` | user context required | account:write | [Removes the specified user from a project](./endpoints/admin-projects-project-Id-users-userId-DELETE.md) |
| `GET` | `/construction/admin/v1/projects/{projectId}/users/{userId}` | user context optional | account:read | [Retrieves detailed information about the specified user in a project](./endpoints/admin-projectsprojectId-users-userId-GET.md) |
| `PATCH` | `/construction/admin/v1/projects/{projectId}/users/{userId}` | user context required | account:write | [Updates information about the specified user in a project](./endpoints/admin-projects-project-Id-users-userId-PATCH.md) |
| `POST` | `/construction/admin/v2/projects/{projectId}/users:import` | user context optional | account:write | [Adds multiple users to a project at once](./endpoints/admin-v2-projects-project-Id-users-import-POST.md) |
| `GET` | `/hq/v1/accounts/{account_id}/business_units_structure` | app only | account:read | [Query all the business units in a specific BIM 360 account or Forma hub](./endpoints/business_units_structure-GET.md) |
| `PUT` | `/hq/v1/accounts/{account_id}/business_units_structure` | app only | account:write | [Creates or redefines the business units of a specific BIM 360 account](./endpoints/business_units_structure-PUT.md) |
| `GET` | `/hq/v1/accounts/{account_id}/companies` | app only | account:read | [Query all the partner companies in a specific BIM 360 account](./endpoints/companies-GET-legacy.md) |
| `POST` | `/hq/v1/accounts/{account_id}/companies` | app only | account:write | [Create a new partner company](./endpoints/companies-POST.md) |
| `GET` | `/hq/v1/accounts/{account_id}/companies/{company_id}` | app only | account:read | [Query the details of a specific partner company](./endpoints/companies-company_id-GET.md) |
| `PATCH` | `/hq/v1/accounts/{account_id}/companies/{company_id}` | app only | account:write | [Update the properties of only the specified attributes of a specific partner company](./endpoints/companies-company_id-PATCH.md) |
| `PATCH` | `/hq/v1/accounts/{account_id}/companies/{company_id}/image` | app only | account:write | [Create or update a specific partner company’s image](./endpoints/companies-company_id-image-PATCH.md) |
| `POST` | `/hq/v1/accounts/{account_id}/companies/import` | app only | account:write | [Bulk import partner companies to the company directory in a specific BIM 360 account](./endpoints/companies-import-POST.md) |
| `GET` | `/hq/v1/accounts/{account_id}/companies/search` | app only | account:read | [Search partner companies in a specific BIM 360 account by name](./endpoints/companies-search-GET.md) |
| `GET` | `/hq/v1/accounts/{account_id}/projects/{project_id}/companies` | app only | account:read | [Query all the partner companies in a specific BIM 360/Forma project](./endpoints/projects-project_id-companies-GET.md) |
| `PATCH` | `/hq/v1/accounts/{account_id}/projects/{project_id}/image` | app only | account:write | [Create or update a project’s image](./endpoints/projects-project_id-image-PATCH.md) |
| `GET` | `/hq/v1/accounts/{account_id}/users` | app only | account:read | [Query all the users in a specific BIM 360 account](./endpoints/users-GET.md) |
| `POST` | `/hq/v1/accounts/{account_id}/users` | app only | account:write | [Create a new user in the BIM 360 member directory](./endpoints/users-POST.md) |
| `GET` | `/hq/v1/accounts/{account_id}/users/{user_id}` | app only | account:read | [Query the details of a specific user](./endpoints/users-user_id-GET.md) |
| `PATCH` | `/hq/v1/accounts/{account_id}/users/{user_id}` | app only | account:write | [Update a specific user’s status or default company](./endpoints/users-user_id-PATCH.md) |
| `POST` | `/hq/v1/accounts/{account_id}/users/import` | app only | account:write | [Bulk import users to the master member directory in a BIM 360 account of Forma hub](./endpoints/users-import-POST.md) |
| `GET` | `/hq/v1/accounts/{account_id}/users/search` | app only | account:read | [Search users in the master member directory of a specific BIM 360 account by specified fields](./endpoints/users-search-GET.md) |

## Machine-readable specification

- [OpenAPI 3.1](./openapi.yaml)
