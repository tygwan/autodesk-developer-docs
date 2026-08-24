---
operation_id: admin-v2-projects-project-Id-users-import-POST
method: POST
path: /construction/admin/v2/projects/{projectId}/users:import
group: "Hub Admin"
auth_context: user context optional
scopes: [account:write]
surface: http
verification: docs-only
---

# Adds multiple users to a project at once

```http
POST https://developer.api.autodesk.com/construction/admin/v2/projects/:projectId/users:import
```

| | |
| --- | --- |
| **인증 컨텍스트** | user context optional |
| **필요 스코프** | `account:write` |
| **데이터 포맷** | JSON |
| **그룹** | Hub Admin |

Adds multiple users to a project at once. Can add up to 200 users per request.

## 요청

### URI 파라미터

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `projectId` | string: UUID |  | The ID of the project. This corresponds to project ID in the Data Management API. To convert a project ID in the Data Management API into a project ID in the Forma API you need to remove the “b." prefix. For example, a project ID of b.a4be0c34a-4ab7 translates to a project ID of a4be0c34a-4ab7. |

### 헤더

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `Authorization` | string | **필수** | Must be Bearer <token>, where <token> is a two-legged access token obtained via a Client Credentials Grant flow, or a three-legged access token obtained via an Authorization Code flow or a Secure Service Account (SSA) flow. The SSA flow is designed for headless server-to-server operations. While it functions like a two-legged flow (no user interaction), it is classified as three-legged because it preserves user context. |
| `Content-Type` | string | **필수** | Must be application/json |
| `Accept-Language` | string |  | This header is not currently supported in the Hub Admin API. |
| `Region` | string |  | The region that the data is stored in. For a full list of supported regions, please check here. |
| `User-Id` | string |  | Note that this header is not relevant for Hub Admin GET endpoints. The ID of a user on whose behalf your API request is acting. Required if you’re using a 2-legged authentication context, which must be 2-legged OAuth2 security with user impersonation. Your app has access to all users specified by the administrator in the SaaS integrations UI. Provide this header value to identify the user to be affected by the request. You can use either the user’s Forma ID (id), or their Autodesk ID (autodeskId). |

### 요청 본문

- `users` — `array: object`  
    User data to import.
  - `firstName` — `string`  
      The first name of the user. Max length: 255
  - `lastName` — `string`  
      The last name of the user. Max length: 255
  - `email` — `string` **(필수)**  
      The email of the user. Max length: 255
  - `userId` — `string`  
      Not relevant
  - `companyId` — `null,string`  
      The ID of the company that the user is representing in the project. To obtain a list of all company IDs associated with a project, call GET projects/:projectId/companies.
  - `roleIds` — `array: string`  
      A list of the IDs of the user’s roles in the project. To obtain role IDs for this parameter, you can call GET projects/:projectId/users endpoint or GET projects/:projectId/users/:userId and inspect the roleId field in the response.
  - `products` — `array: object`  
      Information about the products activated in the project and the user’s access level for each product. Do not include this field if the requester has Member Manager access level. If it is included, the request will be rejected.
    - `key` — `string` **(필수)**  
        A keyword that identifies the product. Possible values: autoSpecs, build, cost, designCollaboration, docs, insight, modelCoordination, projectAdministration, and takeoff.
    - `access` — `enum:string` **(필수)**  
        The user’s type of access to the product identified by key. Possible values: - administrator - member - none Note that when you’re using a POST or PATCH endpoint to set this value, you must adhere to the following guidelines: - If you set a product’s key to projectAdministration and you set access to none, all other products should be set to member access for the user. - If you set a product’s key to projectAdministration and you set access to administrator, all other products should be set to administrator access for the user. - You cannot set a product’s key to projectAdministration and set access to member.
- `suppressAdministrativeEmails` — `boolean`  
    Controls whether project invitation emails are sent to the invited users. true: prevents project invitation emails from being sent to users. false: (default) send project invitation emails to the invited users.

## 응답

| 코드 | 의미 | 설명 |
| --- | --- | --- |
| `202` | Accepted | The request has been received but not yet acted upon. |
| `400` | Bad Request | The request could not be understood by the server due to malformed syntax. |
| `401` | Unauthorized | Request has not been applied because it lacks valid authentication credentials for the target resource. |
| `403` | Forbidden | The server understood the request but refuses to authorize it. |
| `404` | Not Found | The resource cannot be found. |
| `409` | Conflict | The request could not be completed due to a conflict with the current state of the resource. |
| `410` |  | Access to the target resource is no longer available. |
| `412` |  | The server refuses to accept the request because a pre-condition failed. |
| `415` |  | The server refuses to accept the request because the payload format is in an unsupported format. |
| `429` | Too Many Requests | User has sent too many requests in a given amount of time. |
| `500` | Internal Server Error | An unexpected error occurred on the server. |
| `503` | Service Unavailable | Server is not ready to handle the request. |

### 응답 본문 (202)

- `jobId` — `string: UUID`  
    We don’t currently support this field, but expect to in a future release. If the response returns jobId with a valid UUID value, the user import operation was successful.

## Example

```
curl -v 'https://developer.api.autodesk.com/construction/admin/v2/projects/367d5cc2-9008-462c-96e5-c9491db85d93/users:import' \
  -X 'POST' \
  -H 'Authorization: Bearer AuIPTf4KYLTYGVnOHQ0cuolwCW2a' \
  -H 'Content-Type: application/json' \
  -d '{
        "users": [
          {
            "firstName": "Jane",
            "lastName": "Doe",
            "email": "sampleUser1@autodesk.com",
            "userId": "6cc15635-2fbd-4f73-afbe-abd833408a1d",
            "companyId": "c32ffb13-83f8-43fb-bddf-3e5c0c2dda24",
            "roleIds": [
              "287d5cc2-9008-462c-96e5-c9491db85d97",
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
            ]
          }
        ],
        "suppressAdministrativeEmails": true
      }'
```

```
{
  "jobId": "fa976214-f1fb-4795-a152-04ad20fa7310"
}
```

## 같은 그룹의 다른 엔드포인트

- `GET /construction/admin/v1/accounts/{accountId}/projects` — [Retrieves a list of the projects in the specified hub](./admin-accounts-accountidprojects-GET.md)
- `POST /construction/admin/v1/accounts/{accountId}/projects` — [Creates a new project in the specified hub](./admin-accounts-accountidprojects-POST.md)
- `POST /construction/admin/v1/projects/{projectId}/users` — [Assigns a user to the specified project](./admin-projects-project-Id-users-POST.md)
- `DELETE /construction/admin/v1/projects/{projectId}/users/{userId}` — [Removes the specified user from a project](./admin-projects-project-Id-users-userId-DELETE.md)
- `PATCH /construction/admin/v1/projects/{projectId}/users/{userId}` — [Updates information about the specified user in a project](./admin-projects-project-Id-users-userId-PATCH.md)
- `GET /construction/admin/v1/projects/{projectId}` — [Retrieves a project specified by project ID](./admin-projectsprojectId-GET.md)
- `GET /construction/admin/v1/projects/{projectId}/users` — [Retrieves information about a filtered subset of users in the specified project](./admin-projectsprojectId-users-GET.md)
- `GET /construction/admin/v1/projects/{projectId}/users/{userId}` — [Retrieves detailed information about the specified user in a project](./admin-projectsprojectId-users-userId-GET.md)
- `GET /construction/admin/v1/accounts/{accountId}/users/{userId}/products` — [Returns a list of Forma products the user is associated with in their assigned projects](./admin-usersuseridproducts-GET.md)
- `GET /construction/admin/v1/accounts/{accountId}/users/{userId}/projects` — [Returns a list of projects for a specified user within a Forma or BIM 360 account](./admin-usersuseridprojects-GET.md)
- `GET /construction/admin/v1/accounts/{accountId}/users/{userId}/roles` — [Returns the roles assigned to a specific user across the projects they belong to](./admin-usersuseridroles-GET.md)
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
원본 문서: https://aps.autodesk.com/en/docs/acc/v1/reference/http/admin-v2-projects-project-Id-users-import-POST
