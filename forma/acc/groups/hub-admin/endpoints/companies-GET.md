---
operation_id: companies-GET
method: GET
path: /construction/admin/v1/accounts/{accountId}/companies
group: "Hub Admin"
auth_context: user context optional
scopes: [account:read]
surface: http
verification: docs-only
---

# Returns a list of companies in a hub

```http
GET https://developer.api.autodesk.com/construction/admin/v1/accounts/:accountId/companies
```

| | |
| --- | --- |
| **인증 컨텍스트** | user context optional |
| **필요 스코프** | `account:read` |
| **데이터 포맷** | JSON |
| **그룹** | Hub Admin |

Returns a list of companies in a hub.

## 요청

### URI 파라미터

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `accountId` | string: UUID |  | The ID of the hub that contains the projects. This corresponds to the hub ID used in the Data Management API, with the “b." prefix removed. For example, b.c8b0c73d-3ae9 becomes c8b0c73d-3ae9. |

### 쿼리 파라미터

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `filter[name]` | string |  | Filter companies by name. Can be a partial match based on the value of filterTextMatch provided. Max length: 255 |
| `filter[trade]` | string |  | Filter companies by trade. Can be a partial match based on the value of filterTextMatch provided. Max length: 255 |
| `filter[erpId]` | string |  | Filter companies by ERP Id. Can be a partial match based on the value of filterTextMatch provided. Max length: 255 |
| `filter[taxId]` | string |  | Filter companies by tax Id. Can be a partial match based on the value of filterTextMatch provided. Max length: 255 |
| `filter[updatedAt]` | string |  | Filter companies by updated at date range. The range must be specified with dates in an ISO-8601 format with time required. The start and end dates of the range should be separated by .. One of the dates in the range may be omitted. For example, to get everything on or before June 1, 2019 the range would be ..2019-06-01T23:59:59.999Z. To get everything after June 1, 2019 the range would be 2019-06-01T00:00:00.000Z... Max length: 100 |
| `filter[status]` | enum:string |  | Filters companies by status. Possible values: active, inactive, all. Defaults to active. |
| `orFilters` | array: string |  | List of filtered fields to apply an “or” operator. Valid list of fields are erpId, name, taxId, trade, updatedAt. |
| `filterTextMatch` | enum:string |  | Specifies how text-based filters should match values in supported fields. This parameter can be used in any endpoint that supports text-based filtering (e.g., filter[name], filter[jobNumber], filter[companyName], etc.). Possible values: contains (default) – Matches if the field contains the specified text anywhere startsWith – Matches if the field starts with the specified text endsWith – Matches if the field ends with the specified text equals – Matches only if the field exactly matches the specified text Matching is case-insensitive. Wildcards and regular expressions are not supported. |
| `sort` | array: string |  | The list of fields to sort by. When multiple fields are listed the later property is used to sort the resources where the previous fields have the same value. Each property can be followed by a direction modifier of either asc (ascending) or desc (descending). If no direction is specified then asc is assumed. Valid fields for sorting are name, trade, erpId, taxId, status, createdAt, updatedAt, projectSize and userSize. Default sort is name. |
| `fields` | array: string |  | List of fields to return in the response. Defaults to all fields. Valid list of fields are accountId, name, trade, addresses, websiteUrl, description, erpId, taxId, imageUrl, status, createdAt, updatedAt, projectSize, userSize and originalName. |
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
| `200` | OK | The list of requested companies. |
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
    The requested page of companies.
  - `id` — `string: UUID`  
      Id of the company.
  - `accountId` — `string: UUID`  
      The identifier of the hub this company is associated with.
  - `name` — `string`  
      The name of the company. The company name should be unique under a hub. Max length: 255
  - `trade` — `string`  
      Trade or company type based on specialization. Max length: 255
  - `addresses` — `array: object`  
      The company addresses.
    - `type` — `enum:string`  
        The address type. Will always be: Main
    - `addressLine1` — `string`  
        The street address line 1. Max length: 255
    - `addressLine2` — `string`  
        The street address line 2. Max length: 255
    - `city` — `string`  
        City. Max length: 255
    - `stateOrProvince` — `null,string`  
        The state or province location. Only valid state/province names and ISO 3166-2 alpha-2 codes will be accepted. The provided state or province must exist in the provided country. Max length: 255
    - `postalCode` — `string`  
        The zip or postal code in which this address is located. Max length: 255
    - `country` — `null,string`  
        Only valid country names and ISO 3166-1 alpha-2 codes will be accepted. Max length: 255
    - `phone` — `string`  
        Phone Number. Max length: 255
  - `websiteUrl` — `string`  
      The URL of the company website. Max length: 255
  - `description` — `string`  
      The description of the company. Max length: 255
  - `erpId` — `string`  
      The ERP Partner Company ID. Max length: 255
  - `taxId` — `string`  
      The Tax ID. Max length: 255
  - `imageUrl` — `string`  
      The URL of the image associated to the company. Max length: 255
  - `status` — `enum:string`  
      The status of the company. Possible values: deleted, active
  - `createdAt` — `datetime: ISO 8601`  
      The timestamp when this company was created.
  - `updatedAt` — `datetime: ISO 8601`  
      The timestamp when this company was last updated. This will only reflect changes to the company fields and not changes to any resources in the company.
  - `originalName` — `null,string`  
      Original name of the company. Only returned when a company is deleted, since, in this case, the company “name” will be updated to “removed at MMDDYYYY”.
  - `projectSize` — `int`  
      The number of projects associated with the company.
  - `userSize` — `int`  
      The number of users that are associated with the company.

## Example

```
curl -v 'https://developer.api.autodesk.com/construction/admin/v1/accounts/d73fc742-4538-401c-8d0f-853b49b750b2/companies?filter[name]=Plumbing unlimited&filter[trade]=Plumbing&filter[erpId]=companyErpId&filter[taxId]=434920482-22&filter[updatedAt]=2019-06-01T00:00:00.000Z..&filter[status]=active&orFilters=name,trade&filterTextMatch=contains&sort=name&fields=name&limit=20' \
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
      "id": "d1163421-e7eb-4862-ac15-b33777ba42de",
      "accountId": "d73fc742-4538-401c-8d0f-853b49b750b2",
      "name": "Plumbing Unlimited",
      "trade": "Plumbing",
      "addresses": [
        {
          "type": "Main",
          "addressLine1": "123 Main Street",
          "addressLine2": "Suite 2",
          "city": "San Francisco",
          "stateOrProvince": "California",
          "postalCode": "94001",
          "country": "US",
          "phone": "555-555-5555"
        }
      ],
      "websiteUrl": "https://www.plumbingunlimited.com",
      "description": "Plumbing subcontractor in southern California",
      "erpId": "12345678",
      "taxId": "87654321",
      "imageUrl": "https://images.acc.autodesk.com/plumbingunlimited.png",
      "status": "active",
      "createdAt": "2018-01-01T12:45:00.000Z",
      "updatedAt": "2018-01-01T12:45:00.000Z",
      "originalName": "",
      "projectSize": 3,
      "userSize": 12
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
- `GET /hq/v1/accounts/{account_id}/business_units_structure` — [Query all the business units in a specific BIM 360 account or Forma hub](./business_units_structure-GET.md)
- `PUT /hq/v1/accounts/{account_id}/business_units_structure` — [Creates or redefines the business units of a specific BIM 360 account](./business_units_structure-PUT.md)
- `GET /hq/v1/accounts/{account_id}/companies/{company_id}` — [Query the details of a specific partner company](./companies-company_id-GET.md)
- `PATCH /hq/v1/accounts/{account_id}/companies/{company_id}/image` — [Create or update a specific partner company’s image](./companies-company_id-image-PATCH.md)
- `PATCH /hq/v1/accounts/{account_id}/companies/{company_id}` — [Update the properties of only the specified attributes of a specific partner company](./companies-company_id-PATCH.md)
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
원본 문서: https://aps.autodesk.com/en/docs/acc/v1/reference/http/companies-GET
