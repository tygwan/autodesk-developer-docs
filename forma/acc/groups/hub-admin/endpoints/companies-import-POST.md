---
operation_id: companies-import-POST
method: POST
path: /hq/v1/accounts/{account_id}/companies/import
group: "Hub Admin"
auth_context: app only
scopes: [account:write]
surface: http
verification: docs-only
---

# Bulk import partner companies to the company directory in a specific BIM 360 account

```http
POST https://developer.api.autodesk.com/hq/v1/accounts/:account_id/companies/import
```

| | |
| --- | --- |
| **인증 컨텍스트** | app only |
| **필요 스코프** | `account:write` |
| **데이터 포맷** | - |
| **그룹** | Hub Admin |

Bulk import partner companies to the company directory in a specific BIM 360 account. (50 companies maximum can be included in each call.)

## 요청

### URI 파라미터

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `account_id` | string: UUID |  | The account/hub ID of the company. This corresponds to the hub ID used in the Data Management API, with the “b." prefix removed. For example, b.c8b0c73d-3ae9 becomes c8b0c73d-3ae9. |

### 헤더

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `Authorization` | yes |  | Must be Bearer <token>, where <token> is obtained via a two-legged OAuth flow. |
| `Content-Type` | yes |  | Must be application/json. |
| `Region` | no |  | Specifies the region where the service is located. Possible values: US, EMEA. For the full list of supported regions, see the Regions page. |

### 요청 본문

- `name` — `string` **(필수)**  
    Company name should be unique under an account/hub Max length: 255
- `trade` — `string` **(필수)**  
    Trade type based on specialization Refer to the trade list in the Parameters guide.
- `address_line_1` — `string`  
    Company address line 1 Max length: 255
- `address_line_2` — `string`  
    Company address line 2 Max length: 255
- `city` — `string`  
    City in which company is located Max length: 255
- `state_or_province` — `enum: string`  
    State or province in which company is located Max length: 255 Note that the state_or_province value depends on the selected country value; see the valid values in the state_or_province list in the Parameters guide.
- `postal_code` — `string`  
    Postal code for the company location Max length: 255
- `country` — `enum: string`  
    Country for this company Refer to the country list in the Parameters guide.
- `phone` — `string`  
    Business phone number for the company Max length: 255
- `website_url` — `string`  
    Company website Max length: 255
- `description` — `string`  
    Short description or overview for company Max length: 255
- `erp_id` — `string`  
    Used to associate a company in BIM 360 with the company data in an ERP system
- `tax_id` — `string`  
    Used to associate a company in BIM 360 with the company data from public and industry sources

## 응답

| 코드 | 의미 | 설명 |
| --- | --- | --- |
| `201` | Created | A new resource has been successfully created |
| `400` | Bad Request | The request could not be understood by the server due to malformed syntax |
| `403` | Forbidden | Unauthorized |
| `404` | Not Found | The resource cannot be found |
| `409` | Conflict | The request could not be completed due to a conflict with the current state of the resource |
| `422` | Unprocessable Entity | The request was unable to be followed due to restrictions |
| `500` | Internal Server Error | An unexpected error occurred on the server |

### 응답 본문 (201)

- `success` — `int`  
    Import success company count
- `failure` — `int`  
    Import failure company count
- `success_items` — `array:object`  
    Array of company objects that were successfully imported
  - `id`
  - `account_id`
  - `name`
  - `trade`
  - `address_line_1`
  - `address_line_2`
  - `city`
  - `postal_code`
  - `state_or_province`
  - `country`
  - `phone`
  - `website_url`
  - `description`
  - `created_at`
  - `updated_at`
  - `erp_id`
  - `tax_id`
- `failure_items` — `array:object`  
    Array of company objects that failed to import, along with content and error information

## Example

```
curl -v 'https://developer.api.autodesk.com/hq/v1/accounts/80793a28-f9b1-4888-9533-5f00cddcd6fb/companies/import' \
  -X 'POST' \
  -H 'Authorization: Bearer AuIPTf4KYLTYGVnOHQ0cuolwCW2a' \
  -H 'Content-Type: application/json' \
  -d '[
    {
      "name":"Maybach",
      "trade": "mh-trade",
      "website_url": "http://www.autodesk.com",
      "city": "Shanghai",
      "country": "China",
      "address_line_1": "Pudian Road",
      "address_line_2": "Pudian Road",
      "postal_code": "200012",
      "erp_id":"cf87ce66-6cab-481c-97ae-079efce98ac2",
      "tax_id":"675-16-6587",
      "phone": "021-78665544",
      "description": "nothing here"
    },
    {
      "name":"Lincoln",
      "trade": "mh-trade",
      "website_url": "http://www.autodesk.com",
      "city": "Shanghai",
      "country": "China",
      "address_line_1": "Pudian Road",
      "address_line_2": "Pudian Road",
      "postal_code": "200012",
      "erp_id":"6e28dfb9-7f4e-4c33-a500-cf2c87e447c5",
      "tax_id":"508-65-7386",
      "phone": "021-77336644",
      "description": "nothing here"
    }
  ]'
```

```
{
  "success": 2,
  "failure": 0,
  "success_items": [
    {
      "id": "681587f9-4de4-461a-99ca-5649e848555b",
      "account_id": "80793a28-f9b1-4888-9533-5f00cddcd6fb",
      "name": "Maybach",
      "trade": "mh-trade",
      "address_line_1": "Pudian Road",
      "address_line_2": "Pudian Road",
      "city": "Shanghai",
      "postal_code": "200012",
      "state_or_province": null,
      "country": "China",
      "phone": "021-78665544",
      "website_url": "http://www.autodesk.com",
      "description": "nothing here",
      "created_at": "2016-05-20T06:55:16.190Z",
      "updated_at": "2016-05-20T06:55:16.190Z",
      "erp_id": "cf87ce66-6cab-481c-97ae-079efce98ac2",
      "tax_id": "675-16-6587"
    },
    {
      "id": "f54dc236-0b52-4a49-b502-69538441d257",
      "account_id": "80793a28-f9b1-4888-9533-5f00cddcd6fb",
      "name": "Lincoln",
      "trade": "mh-trade",
      "address_line_1": "Pudian Road",
      "address_line_2": "Pudian Road",
      "city": "Shanghai",
      "postal_code": "200012",
      "state_or_province": null,
      "country": "China",
      "phone": "021-77336644",
      "website_url": "http://www.autodesk.com",
      "description": "nothing here",
      "created_at": "2016-05-20T06:55:16.283Z",
      "updated_at": "2016-05-20T06:55:16.283Z",
      "erp_id": "6e28dfb9-7f4e-4c33-a500-cf2c87e447c5",
      "tax_id": "508-65-7386"
    }
  ],
  "failure_items": []
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
- `GET /construction/admin/v1/accounts/{accountId}/companies` — [Returns a list of companies in a hub](./companies-GET.md)
- `GET /hq/v1/accounts/{account_id}/companies` — [Query all the partner companies in a specific BIM 360 account](./companies-GET-legacy.md)
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
원본 문서: https://aps.autodesk.com/en/docs/acc/v1/reference/http/companies-import-POST
