---
operation_id: business_units_structure-GET
method: GET
path: /hq/v1/accounts/{account_id}/business_units_structure
group: "Hub Admin"
auth_context: app only
scopes: [account:read]
surface: http
verification: docs-only
---

# Query all the business units in a specific BIM 360 account or Forma hub

```http
GET https://developer.api.autodesk.com/hq/v1/accounts/:account_id/business_units_structure
```

| | |
| --- | --- |
| **인증 컨텍스트** | app only |
| **필요 스코프** | `account:read` |
| **데이터 포맷** | - |
| **그룹** | Hub Admin |

Query all the business units in a specific BIM 360 account or Forma hub.

## 요청

### URI 파라미터

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `account_id` | string: UUID |  | The account/hub ID of the business unit. This corresponds to the hub ID used in the Data Management API, with the “b." prefix removed. For example, b.c8b0c73d-3ae9 becomes c8b0c73d-3ae9. |

### 헤더

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `Authorization` | yes |  | Must be Bearer <token>, where <token> is obtained via a two-legged OAuth flow. |
| `Region` | no |  | Specifies the region where the service is located. Possible values: US, EMEA. For the full list of supported regions, see the Regions page. |

## 응답

| 코드 | 의미 | 설명 |
| --- | --- | --- |
| `200` | OK | The request has succeeded |
| `400` | Bad Request | The request could not be understood by the server due to malformed syntax |
| `403` | Forbidden | Unauthorized |
| `404` | Not Found | The resource cannot be found |
| `409` | Conflict | The request could not be completed due to a conflict with the current state of the resource. |
| `422` | Unprocessable Entity | The request was unable to be followed due to restrictions |
| `500` | Internal Server Error | An unexpected error occurred on the server |

### 응답 본문 (200)

- `business_units` — `array:object`
  - `id` — `string: UUID`  
      Business unit ID
  - `account_id` — `string: UUID`  
      Account/Hub ID
  - `parent_id` — `string: UUID`  
      The ID of the parent business unit; used to configure the tree structure of business units
  - `name` — `string`  
      The name of the business unit
  - `path` — `string`  
      The path of the business unit in the tree structure
  - `description` — `string`  
      The description of the business unit
  - `created_at`
  - `updated_at`

## Example

```
curl -v 'https://developer.api.autodesk.com/hq/v1/accounts/e3d5ef8d-5c37-4b9d-925d-1e6d24753ace/business_units_structure' \
   -H 'Authorization: Bearer 9ezBnx9Rd5D1xG4KMt6b72T4w0MG'
```

```
{
  "business_units":[
   {
     "id": "933df8fd-abb2-4e4e-8f79-95ba2afebc6c",
     "account_id": "e3d5ef8d-5c37-4b9d-925d-1e6d24753ace",
     "parent_id": null,
     "name": "North America",
     "description": "USA, Canada",
     "path": null,
     "created_at": "2016-04-11T03:49:09.176Z",
     "updated_at": "2016-04-11T03:49:09.176Z"
   },
   {
     "id": "fda4ab9e-ab82-4ba9-8d6c-ae7dbd7cee31",
     "account_id": "e3d5ef8d-5c37-4b9d-925d-1e6d24753ace",
     "parent_id": "933df8fd-abb2-4e4e-8f79-95ba2afebc6c",
     "name": "USA Western Region",
     "description": "California, Nevada, Washington",
     "path": "North America",
     "created_at": "2016-04-11T03:49:09.176Z",
     "updated_at": "2016-04-11T03:49:09.176Z"
   }
  ]
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
- `POST /construction/admin/v2/projects/{projectId}/users:import` — [Adds multiple users to a project at once](./admin-v2-projects-project-Id-users-import-POST.md)
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
원본 문서: https://aps.autodesk.com/en/docs/acc/v1/reference/http/business_units_structure-GET
