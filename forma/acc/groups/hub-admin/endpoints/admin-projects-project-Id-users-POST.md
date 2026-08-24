---
operation_id: admin-projects-project-Id-users-POST
method: POST
path: /construction/admin/v1/projects/{projectId}/users
group: "Hub Admin"
auth_context: user context required
scopes: [account:write]
surface: http
verification: docs-only
---

# Assigns a user to the specified project

```http
POST https://developer.api.autodesk.com/construction/admin/v1/projects/:projectId/users
```

| | |
| --- | --- |
| **인증 컨텍스트** | user context required |
| **필요 스코프** | `account:write` |
| **데이터 포맷** | JSON |
| **그룹** | Hub Admin |

Assigns a user to the specified project.

## 요청

### URI 파라미터

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `projectId` | string: UUID |  | The ID of the project. This corresponds to project ID in the Data Management API. To convert a project ID in the Data Management API into a project ID in the Forma API you need to remove the “b." prefix. For example, a project ID of b.a4be0c34a-4ab7 translates to a project ID of a4be0c34a-4ab7. |

### 헤더

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `Authorization` | string | **필수** | Must be Bearer <token>, where <token> is a three-legged access token obtained via an Authorization Code flow or a Secure Service Account (SSA) flow. The SSA flow is designed for headless server-to-server operations. While it functions like a two-legged flow (no user interaction), it is classified as three-legged because it preserves user context. |
| `Content-Type` | string | **필수** | Must be application/json |
| `Region` | string |  | Specifies the region where your request should be routed. If not set, the request is routed automatically, which may result in a slight increase in latency. Possible values: US, EMEA. For a complete list of supported regions, see the Regions page. |
| `User-Id` | string |  | The ID of a user on whose behalf your request is acting. Your app has access to all users specified by the administrator in the SaaS integrations UI. Provide this header value to identify the user to be affected by the request. You can use either the user’s Forma ID (id), or their Autodesk ID (autodeskId). Note that this header is required for hub Admin POST, PATCH, and DELETE endpoints if you want to use a 2-legged authentication context. This header is optional for hub Admin GET endpoints. |

### 요청 본문

- `email` — `string` **(필수)**  
    The email address of the user. Max length: 255
- `companyId` — `null,string`  
    The ID of the company that the user is representing in the project. To obtain a list of all company IDs associated with a project, call GET projects/:projectId/companies.
- `roleIds` — `array: string`  
    A list of IDs of the roles that the user belongs to in the project.
- `products` — `array: object`  
    Information about the products activated in the specified project for this user. Do not include this field if the requester has Member Manager access level.
  - `key` — `enum:string` **(필수)**  
      A machine-readable identifier for the product (e.g., docs, build). Each product has a unique key used throughout the API for identification, filtering, and integration logic (e.g., in query parameters like filter[key]). Possible values: Forma - autoSpecs, build, cost, designCollaboration, docs, insight, modelCoordination, projectAdministration, and takeoff. BIM 360 - assets, costManagement, designCollaboration, documentManagement, field, fieldManagement, glue, insight, modelCoordination, plan, projectAdministration, projectHome, projectManagement, and quantification. Note that this endpoint returns only Forma products. Other endpoints, such as GET projects and GET projects/:projectId, may return both Forma and BIM 360 projects. In those responses, product keys may include BIM 360 values.
  - `access` — `enum:string` **(필수)**  
      The user’s type of access to the product identified by key. Possible values: - administrator - member - none Note that when you’re using a POST or PATCH endpoint to set this value, you must adhere to the following guidelines: - If you set a product’s key to projectAdministration and you set access to none, all other products should be set to member access for the user. - If you set a product’s key to projectAdministration and you set access to administrator, all other products should be set to administrator access for the user. - You cannot set a product’s key to projectAdministration and set access to member.
- `suppressAdministrativeEmails` — `boolean`  
    Suppresses project invite emails to the invited users. Defaults to false.

## 응답

| 코드 | 의미 | 설명 |
| --- | --- | --- |
| `201` | Created | Successfully added the user to the project. |
| `400` | Bad Request | The request could not be understood by the server due to malformed syntax. |
| `401` | Unauthorized | Request has not been applied because it lacks valid authentication credentials for the target resource. |
| `403` | Forbidden | The server understood the request but refuses to authorize it. |
| `404` | Not Found | The resource could not be found. |
| `409` | Conflict | The request could not be completed due to a conflict with the current state of the resource. |
| `410` |  | Access to the target resource is no longer available. |
| `412` |  | The server refuses to accept the request because a pre-condition failed. |
| `415` |  | The server refuses to accept the request because the payload format is in an unsupported format. |
| `429` | Too Many Requests | User has sent too many requests in a given amount of time. |
| `500` | Internal Server Error | An unexpected error occurred on the server. |
| `503` | Service Unavailable | Server is not ready to handle the request. |

### 응답 본문 (201)

- `email` — `string`  
    The email of the user. Max length: 255
- `id` — `string: UUID`  
    The Forma ID of the user.
- `name` — `string`  
    The full name of the user. Max length: 255
- `firstName` — `string`  
    The user’s first name. This data syncs from the user’s Autodesk profile. Max length: 255
- `lastName` — `string`  
    The user’s last name. This data syncs from the user’s Autodesk profile. Max length: 255
- `autodeskId` — `string`  
    The ID of the user’s Autodesk profile. Max length: 255
- `analyticsId` — `string`  
    Not relevant
- `addressLine1` — `string`  
    The user’s address line 1. This data syncs from the user’s Autodesk profile. Max length: 255
- `addressLine2` — `string`  
    The user’s address line 2. This data syncs from the user’s Autodesk profile. Max length: 255
- `city` — `string`  
    The User’s city. This data syncs from the user’s Autodesk profile. Max length: 255
- `stateOrProvince` — `null,string`  
    The state or province of the user. The accepted values here change depending on which country is provided. This data syncs from the user’s Autodesk profile. Max length: 255
- `postalCode` — `string`  
    The zip or postal code of the user. This data syncs from the user’s Autodesk profile. Max length: 255
- `country` — `null,string`  
    The user’s country. This data syncs from the user’s Autodesk profile. Max length: 255
- `imageUrl` — `string`  
    The URL of the user’s avatar. This data syncs from the user’s Autodesk profile. Max length: 255
- `phone` — `object`  
    The user’s phone number. This data syncs from the user’s Autodesk profile.
  - `number` — `string`  
      User’s phone number
  - `phoneType` — `enum:string`  
      The user’s phone type. Possible values: home, mobile, or office. Default value: mobile.
  - `extension` — `string`  
      User’s phone extension.
- `jobTitle` — `string`  
    The user’s job title. This data syncs from the user’s Autodesk profile. Max length: 255
- `industry` — `string`  
    The industry the user works in. This data syncs from the user’s Autodesk profile. Max length: 255
- `aboutMe` — `string`  
    A short bio about the user. This data syncs from the user’s Autodesk profile. Max length: 255
- `accessLevels` — `object`  
    Flags that identify a returned user’s access levels in the hub or project.
  - `accountAdmin` — `boolean`  
      Indicates whether the user is a hub administrator for the hub. Possible values: - true: The user is a hub administrator. - false: The user is not a hub administrator.
  - `projectAdmin` — `boolean`  
      Indicates whether the user is a project administrator for the project. Possible values: - true: The user is a project administrator. - false: The user is not a project administrator.
  - `executive` — `boolean`  
      Indicates whether the user is an executive in the hub. Possible values: - true: The user is an executive. - false: The user is not an executive.
- `addedOn` — `datetime: ISO 8601`  
    The timestamp when the user was first given access to any product on the project.
- `updatedAt` — `datetime: ISO 8601`  
    The timestamp when the project user was last updated, in ISO 8601 format.
- `companyId` — `null,string`  
    The ID of the company that the user is representing in the project. To obtain a list of all company IDs associated with a project, call GET projects/:projectId/companies.
- `companyName` — `null,string`  
    The name of the company to which the user belongs. Max length: 255
- `roleIds` — `array: string`  
    A list of IDs of the roles that the user belongs to in the project.
- `roles` — `array: object`  
    A list of the role IDs and names that are associated with the user in the project.
  - `id` — `string: UUID`  
      The ID of a role that the user belongs to in the project.
  - `name` — `string`  
      The name of a role that the user belongs to in the project.
- `status` — `string`  
    The status of the user in the project. A pending user could be waiting for their products to activate, or the user hasn’t accepted an email to create a hub with Autodesk. Possible values: - active: The user has been added to the project. - pending: The user is in the process of being added to the project. - disabled: The user has been temporarily suspended from the project. - deleted: The user has been removed from the project.
- `products` — `array: object`  
    Information about the products activated in the specified project for this user. Do not include this field if the requester has Member Manager access level.
  - `key` — `enum:string`  
      A machine-readable identifier for the product (e.g., docs, build). Each product has a unique key used throughout the API for identification, filtering, and integration logic (e.g., in query parameters like filter[key]). Possible values: Forma - autoSpecs, build, cost, designCollaboration, docs, insight, modelCoordination, projectAdministration, and takeoff. BIM 360 - assets, costManagement, designCollaboration, documentManagement, field, fieldManagement, glue, insight, modelCoordination, plan, projectAdministration, projectHome, projectManagement, and quantification. Note that this endpoint returns only Forma products. Other endpoints, such as GET projects and GET projects/:projectId, may return both Forma and BIM 360 projects. In those responses, product keys may include BIM 360 values.
  - `access` — `enum:string`  
      The user’s type of access to the product identified by key. Possible values: - administrator - member - none Note that when you’re using a POST or PATCH endpoint to set this value, you must adhere to the following guidelines: - If you set a product’s key to projectAdministration and you set access to none, all other products should be set to member access for the user. - If you set a product’s key to projectAdministration and you set access to administrator, all other products should be set to administrator access for the user. - You cannot set a product’s key to projectAdministration and set access to member.
- `jobId` — `string: UUID`  
    Not relevant - we don’t currently support this field.

## Example

```
curl -v 'https://developer.api.autodesk.com/construction/admin/v1/projects/367d5cc2-9008-462c-96e5-c9491db85d93/users' \
  -X 'POST' \
  -H 'Authorization: Bearer AuIPTf4KYLTYGVnOHQ0cuolwCW2a' \
  -H 'Content-Type: application/json' \
  -d '{
        "email": "sampleUser1@autodesk.com",
        "companyId": "c32ffb13-83f8-43fb-bddf-3e5c0c2dda24",
        "roleIds": [
          "cda845af-05f0-4c46-9108-71b993946c35",
          "b8e84a73-7506-4d3f-b221-93691df2a359"
        ],
        "products": [
          {
            "key": "projectAdministration",
            "access": "administrator"
          },
          {
            "key": "designCollaboration",
            "access": "administrator"
          },
          {
            "key": "build",
            "access": "administrator"
          },
          {
            "key": "cost",
            "access": "administrator"
          },
          {
            "key": "modelCoordination",
            "access": "administrator"
          },
          {
            "key": "docs",
            "access": "administrator"
          },
          {
            "key": "insight",
            "access": "administrator"
          },
          {
            "key": "takeoff",
            "access": "administrator"
          }
        ],
        "suppressAdministrativeEmails": true
      }'
```

```
{
  "email": "sampleUser1@autodesk.com",
  "id": "39712a51-bd64-446a-9c72-48c4e43d0a0d",
  "name": "Bob Smith",
  "firstName": "Bob",
  "lastName": "Smith",
  "autodeskId": "USER123A",
  "analyticsId": "SOMEID123",
  "addressLine1": "123 Main Street",
  "addressLine2": "Suite 2",
  "city": "San Francisco",
  "stateOrProvince": "California",
  "postalCode": "94001",
  "country": "United States",
  "imageUrl": "https://s3.amazonaws.com:443/com.autodesk.storage.public.dev/oxygen/USER123A/profilepictures/x20.jpg",
  "phone": {
    "number": "123-345-1234",
    "phoneType": "mobile",
    "extension": "10"
  },
  "jobTitle": "Owner",
  "industry": "Architecture & Construction Service Providers",
  "aboutMe": "Bob has been in construction for 25 years.",
  "accessLevels": {
    "accountAdmin": true,
    "projectAdmin": true,
    "executive": true
  },
  "addedOn": "2018-01-01T12:45:00.000Z",
  "updatedAt": "2018-01-01T12:45:00.000Z",
  "companyId": "c32ffb13-83f8-43fb-bddf-3e5c0c2dda24",
  "companyName": "Sample Company",
  "roleIds": [
    "cda845af-05f0-4c46-9108-71b993946c35",
    "b8e84a73-7506-4d3f-b221-93691df2a359"
  ],
  "roles": [
    {
      "id": "cda845af-05f0-4c46-9108-71b993946c35",
      "name": "Architect"
    },
    {
      "id": "b8e84a73-7506-4d3f-b221-93691df2a359",
      "name": "Engineer"
    }
  ],
  "status": "active",
  "products": [
    {
      "key": "projectAdministration",
      "access": "administrator"
    },
    {
      "key": "designCollaboration",
      "access": "administrator"
    },
    {
      "key": "build",
      "access": "administrator"
    },
    {
      "key": "cost",
      "access": "administrator"
    },
    {
      "key": "modelCoordination",
      "access": "administrator"
    },
    {
      "key": "docs",
      "access": "administrator"
    },
    {
      "key": "insight",
      "access": "administrator"
    },
    {
      "key": "takeoff",
      "access": "administrator"
    }
  ],
  "jobId": "5d3bc131-c0dc-4222-9a2a-351363f437fa"
}
```

## 같은 그룹의 다른 엔드포인트

- `GET /construction/admin/v1/accounts/{accountId}/projects` — [Retrieves a list of the projects in the specified hub](./admin-accounts-accountidprojects-GET.md)
- `POST /construction/admin/v1/accounts/{accountId}/projects` — [Creates a new project in the specified hub](./admin-accounts-accountidprojects-POST.md)
- `DELETE /construction/admin/v1/projects/{projectId}/users/{userId}` — [Removes the specified user from a project](./admin-projects-project-Id-users-userId-DELETE.md)
- `PATCH /construction/admin/v1/projects/{projectId}/users/{userId}` — [Updates information about the specified user in a project](./admin-projects-project-Id-users-userId-PATCH.md)
- `GET /construction/admin/v1/projects/{projectId}` — [Retrieves a project specified by project ID](./admin-projectsprojectId-GET.md)
- `GET /construction/admin/v1/projects/{projectId}/users` — [Retrieves information about a filtered subset of users in the specified project](./admin-projectsprojectId-users-GET.md)
- `GET /construction/admin/v1/projects/{projectId}/users/{userId}` — [Retrieves detailed information about the specified user in a project](./admin-projectsprojectId-users-userId-GET.md)
- `GET /construction/admin/v1/accounts/{accountId}/users/{userId}/products` — [Returns a list of Forma products the user is associated with in their assigned projects](./admin-usersuseridproducts-GET.md)
- `GET /construction/admin/v1/accounts/{accountId}/users/{userId}/projects` — [Returns a list of projects for a specified user within a Forma or BIM 360 account](./admin-usersuseridprojects-GET.md)
- `GET /construction/admin/v1/accounts/{accountId}/users/{userId}/roles` — [Returns the roles assigned to a specific user across the projects they belong to](./admin-usersuseridroles-GET.md)
- `POST /construction/admin/v2/projects/{projectId}/users:import` — [Adds multiple users to a project at once](./admin-v2-projects-project-Id-users-import-POST.md)
- `GET /hq/v1/accounts/{account_id}/business_units_structure` — [Query all the business units in a specific BIM 360 account or Forma hub](./business_units_structure-GET.md)
- `PUT /hq/v1/accounts/{account_id}/business_units_structure` — [Creates or redefines the business units of a specific BIM 360 account](./business_units_structure-PUT.md)
- `GET /hq/v1/accounts/{account_id}/companies/{company_id}` — [Query the details of a specific partner company](./companies-company_id-GET.md)
- `PATCH /hq/v1/accounts/{account_id}/companies/{company_id}/image` — [Create or update a specific partner company’s image](./companies-company_id-image-PATCH.md)
- `PATCH /hq/v1/accounts/{account_id}/companies/{company_id}` — [Update the properties of only the specified attributes of a specific partner company](./companies-company_id-PATCH.md)
- `GET /construction/admin/v1/accounts/{accountId}/companies` — [Returns a list of companies in a hub](./companies-GET.md)
- `GET /hq/v1/accounts/{account_id}/companies` — [Query all the partner companies in a specific BIM 360 account](./companies-GET-legacy.md)
- `POST /hq/v1/accounts/{account_id}/companies/import` — [Bulk import partner companies to the company directory in a specific BIM 360 account](./companies-import-POST.md)
- `POST /hq/v1/accounts/{account_id}/companies` — [Create a new partner company](./companies-POST.md)
- `GET /hq/v1/accounts/{account_id}/companies/search` — [Search partner companies in a specific BIM 360 account by name](./companies-search-GET.md)
- `GET /hq/v1/accounts/{account_id}/projects/{project_id}/companies` — [Query all the partner companies in a specific BIM 360/Forma project](./projects-project_id-companies-GET.md)
- `PATCH /hq/v1/accounts/{account_id}/projects/{project_id}/image` — [Create or update a project’s image](./projects-project_id-image-PATCH.md)
- `GET /hq/v1/accounts/{account_id}/users/{user_id}` — [Query the details of a specific user](./users-user_id-GET.md)
- `PATCH /hq/v1/accounts/{account_id}/users/{user_id}` — [Update a specific user’s status or default company](./users-user_id-PATCH.md)
- `GET /hq/v1/accounts/{account_id}/users` — [Query all the users in a specific BIM 360 account](./users-GET.md)
- `POST /hq/v1/accounts/{account_id}/users/import` — [Bulk import users to the master member directory in a BIM 360 account of Forma hub](./users-import-POST.md)
- `POST /hq/v1/accounts/{account_id}/users` — [Create a new user in the BIM 360 member directory](./users-POST.md)
- `GET /hq/v1/accounts/{account_id}/users/search` — [Search users in the master member directory of a specific BIM 360 account by specified fields](./users-search-GET.md)

---
원본 문서: https://aps.autodesk.com/en/docs/acc/v1/reference/http/admin-projects-project-Id-users-POST
