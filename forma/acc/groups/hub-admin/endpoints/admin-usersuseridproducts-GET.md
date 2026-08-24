---
operation_id: admin-usersuseridproducts-GET
method: GET
path: /construction/admin/v1/accounts/{accountId}/users/{userId}/products
group: "Hub Admin"
auth_context: user context optional
scopes: [account:read]
surface: http
verification: docs-only
---

# Returns a list of Forma products the user is associated with in their assigned projects

```http
GET https://developer.api.autodesk.com/construction/admin/v1/accounts/:accountId/users/:userId/products
```

| | |
| --- | --- |
| **인증 컨텍스트** | user context optional |
| **필요 스코프** | `account:read` |
| **데이터 포맷** | JSON |
| **그룹** | Hub Admin |

Returns a list of Forma products the user is associated with in their assigned projects.

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
| `filter[key]` | array: string |  | Filters the list of products by product key — a machine-readable identifier for a Forma product (such as docs, build, or cost). You can specify one or more keys to return only those products the user is associated with. Example: filter[key]=docs,build Possible values: accountAdministration, autoSpecs, build, buildingConnected, capitalPlanning, cloudWorksharing, cost, designCollaboration, docs, financials, insight, modelCoordination, projectAdministration, takeoff, and workshopxr. |
| `fields` | array: string |  | List of fields to return in the response. Defaults to all fields. Possible values: projectIds, name and icon. |
| `sort` | array: string |  | The list of fields to sort by. Each property can be followed by a direction modifier of either asc (ascending) or desc (descending). The default is asc. Possible values: name. Default is the order in database. |
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
| `200` | OK | A list of products associated with the user |
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
    A list of Forma products the user is associated with.
  - `key` — `enum:string`  
      A machine-readable identifier for the product (e.g., docs, build). Each product has a unique key used throughout the API for identification, filtering, and integration logic (e.g., in query parameters like filter[key]). Possible values: Forma - autoSpecs, build, cost, designCollaboration, docs, insight, modelCoordination, projectAdministration, and takeoff. BIM 360 - assets, costManagement, designCollaboration, documentManagement, field, fieldManagement, glue, insight, modelCoordination, plan, projectAdministration, projectHome, projectManagement, and quantification. Note that this endpoint returns only Forma products. Other endpoints, such as GET projects and GET projects/:projectId, may return both Forma and BIM 360 projects. In those responses, product keys may include BIM 360 values.
  - `icon` — `string`  
      The URL of the icon associated with the product.
  - `name` — `string`  
      The name of the product.
  - `projectIds` — `array: string`  
      The list of projects IDs where the user is associated with the product.

## Example

```
curl -v 'https://developer.api.autodesk.com/construction/admin/v1/accounts/d73fc742-4538-401c-8d0f-853b49b750b2/users/6cc15635-2fbd-4f73-afbe-abd833408a1d/products?filter[projectId]=39712a51-bd64-446a-9c72-48c4e43d0a0d,d1163421-e7eb-4862-ac15-b33777ba42de&filter[key]=build,docs&fields=name&sort=name&limit=20' \
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
      "key": "assets",
      "icon": "https://s3.us-east-1.amazonaws.com/product_icon.png",
      "name": "Document Management",
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
원본 문서: https://aps.autodesk.com/en/docs/acc/v1/reference/http/admin-usersuseridproducts-GET
