---
operation_id: admin-usersuseridroles-GET
method: GET
path: /construction/admin/v1/accounts/{accountId}/users/{userId}/roles
group: "Hub Admin"
auth_context: user context optional
scopes: [account:read]
surface: http
verification: docs-only
---

# Returns the roles assigned to a specific user across the projects they belong to

```http
GET https://developer.api.autodesk.com/construction/admin/v1/accounts/:accountId/users/:userId/roles
```

| | |
| --- | --- |
| **인증 컨텍스트** | user context optional |
| **필요 스코프** | `account:read` |
| **데이터 포맷** | JSON |
| **그룹** | Hub Admin |

Returns the roles assigned to a specific user across the projects they belong to.

## 요청

### URI 파라미터

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `accountId` | string: UUID |  | The ID of the hub that contains the projects. This corresponds to the hub ID used in the Data Management API, with the “b." prefix removed. For example, b.c8b0c73d-3ae9 becomes c8b0c73d-3ae9. |
| `userId` | string |  | The ID of the user. To find the ID call GET users. You can use either the Forma ID (id) or the Autodesk ID (autodeskId). |

### 쿼리 파라미터

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `filter[projectId]` | array: string: uuid |  | A list of project IDs. Only results where the user is associated with one or more of the specified projects are returned. |
| `filter[status]` | array: string |  | Filters roles by their status. Accepts one or more of the following values: active – The role is currently in use. inactive – The role has been removed or is no longer in use. |
| `filter[name]` | string |  | Filters roles by name. By default, this performs a partial match (case-insensitive). You can control how the match behaves by using the filterTextMatch parameter. For example, to match only names that start with (startsWith), end with (endsWith), or exactly equal (equals) the provided value. |
| `filterTextMatch` | enum:string |  | Specifies how text-based filters should match values in supported fields. This parameter can be used in any endpoint that supports text-based filtering (e.g., filter[name], filter[jobNumber], filter[companyName], etc.). Possible values: contains (default) – Matches if the field contains the specified text anywhere startsWith – Matches if the field starts with the specified text endsWith – Matches if the field ends with the specified text equals – Matches only if the field exactly matches the specified text Matching is case-insensitive. Wildcards and regular expressions are not supported. |
| `fields` | array: string |  | A comma-separated list of response fields to include. Defaults to all fields if not specified. Use this parameter to reduce the response size by retrieving only the fields you need. Possible values: projectIds – Projects where the user holds this role name – Role name status – Role status (active or inactive) key – Internal key used to translate the role name isImmutable – Indicates whether the role is immutable createdAt – Timestamp when the role was created updatedAt – Timestamp when the role was last updated |
| `sort` | array: string |  | Sorts the results by one or more fields. Each field can be followed by a direction modifier: asc – Ascending order (default) desc – Descending order Possible values: name, createdAt, updatedAt. Default sort: name asc Example: sort=name,updatedAt desc |
| `limit` | int |  | The maximum number of records to return in the response. Default: 20 Minimum: 1 Maximum: 200 (If a larger value is provided, only 200 records are returned) |
| `offset` | int |  | The index of the first record to return. Used for pagination in combination with the limit parameter. Example: limit=20 and offset=40 returns records 41–60. |

### 헤더

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `Authorization` | string | **필수** | Must be Bearer <token>, where <token> is a two-legged access token obtained via a Client Credentials Grant flow, or a three-legged access token obtained via an Authorization Code flow or a Secure Service Account (SSA) flow. The SSA flow is designed for headless server-to-server operations. While it functions like a two-legged flow (no user interaction), it is classified as three-legged because it preserves user context. |
| `Region` | string |  | Specifies the region where your request should be routed. If not set, the request is routed automatically, which may result in a slight increase in latency. Possible values: US, EMEA. For a complete list of supported regions, see the Regions page. |
| `User-Id` | string |  | The ID of a user on whose behalf your request is acting. Your app has access to all users specified by the administrator in the SaaS integrations UI. Provide this header value to identify the user to be affected by the request. You can use either the user’s Forma ID (id), or their Autodesk ID (autodeskId). Note that this header is required for hub Admin POST, PATCH, and DELETE endpoints if you want to use a 2-legged authentication context. This header is optional for hub Admin GET endpoints. |

## 응답

| 코드 | 의미 | 설명 |
| --- | --- | --- |
| `200` | OK | A list of requested roles associated with the user |
| `400` | Bad Request | The request could not be understood by the server due to malformed syntax. |
| `401` | Unauthorized | Request has not been applied because it lacks valid authentication credentials for the target resource. |
| `403` | Forbidden | The server understood the request but refuses to authorize it. |
| `404` | Not Found | The resource could not be found. |
| `406` | Not Acceptable | The server cannot produce a response matching the list of acceptable values defined in the request. |
| `410` |  | Access to the target resource is no longer available. |
| `429` | Too Many Requests | User has sent too many requests in a given amount of time. |
| `500` | Internal Server Error | An unexpected error occurred on the server. |
| `503` | Service Unavailable | Server is not ready to handle the request. |

### 응답 본문 (200)

- `pagination` — `object`  
    Contains pagination details for the records returned by the endpoint.
  - `limit` — `int`  
      The maximum number of records returned per page. The last page may contain fewer records than the specified limit.
  - `offset` — `int`  
      The index of the first record in the returned page. Used for pagination.
  - `totalResults` — `int`  
      The total number of records matching the request.
  - `nextUrl` — `string`  
      The URL for the next page of records, if more results are available. Max length: 2000 characters. Max length: 2000
  - `previousUrl` — `string`  
      The URL for the previous page of records, if applicable. Max length: 2000 characters. Max length: 2000
- `results` — `array: object`  
    The requested page of roles associated with the user.
  - `id` — `string: UUID`  
      The unique ID of the role.
  - `status` — `enum:string`  
      The role status. Possible values: active, inactive.
  - `name` — `string`  
      The name of the role. Predefined roles are localized based on the request language. Max length: 255
  - `key` — `string`  
      The internal key used for translating predefined role names. Max length: 255
  - `createdAt` — `datetime: ISO 8601`  
      The timestamp when the role was created.
  - `updatedAt` — `datetime: ISO 8601`  
      The timestamp when the role was last updated.
  - `projectIds` — `array: string`  
      The list of projects where the user is associated with this role.

## Example

```
curl -v 'https://developer.api.autodesk.com/construction/admin/v1/accounts/d73fc742-4538-401c-8d0f-853b49b750b2/users/6cc15635-2fbd-4f73-afbe-abd833408a1d/roles?filter[projectId]=39712a51-bd64-446a-9c72-48c4e43d0a0d,d1163421-e7eb-4862-ac15-b33777ba42de&filter[status]=active&filter[name]=Architect&filterTextMatch=contains&fields=name&sort=name&limit=20' \
  -H 'Authorization: Bearer AuIPTf4KYLTYGVnOHQ0cuolwCW2a'
```

```
{
  "pagination": {
    "limit": 20,
    "offset": 10,
    "totalResults": 121,
    "nextUrl": "https://resource?limit=20&offset=30",
    "previousUrl": "https://resource?limit=20&offset=0"
  },
  "results": [
    {
      "id": "287d5cc2-9008-462c-96e5-c9491db85d97",
      "status": "active",
      "name": "Architect",
      "key": "architect",
      "createdAt": "2018-01-01T12:45:00.000Z",
      "updatedAt": "2019-01-01T12:45:00.000Z",
      "projectIds": [
        "3e354e66-ac8b-41dd-9bc1-93fc182c25dd"
      ]
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
원본 문서: https://aps.autodesk.com/en/docs/acc/v1/reference/http/admin-usersuseridroles-GET
