---
operation_id: companies-:company_id-image-PATCH
method: PATCH
path: /hq/v1/accounts/{account_id}/companies/{company_id}/image
group: "Hub Admin"
auth_context: app only
scopes: [account:write]
surface: http
verification: docs-only
---

# Create or update a specific partner company’s image

```http
PATCH https://developer.api.autodesk.com/hq/v1/accounts/:account_id/companies/:company_id/image
```

| | |
| --- | --- |
| **인증 컨텍스트** | app only |
| **필요 스코프** | `account:write` |
| **데이터 포맷** | - |
| **그룹** | Hub Admin |

Create or update a specific partner company’s image.

## 요청

### URI 파라미터

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `account_id` | string: UUID |  | The account/hub ID of the company. This corresponds to the hub ID used in the Data Management API, with the “b." prefix removed. For example, b.c8b0c73d-3ae9 becomes c8b0c73d-3ae9. |
| `company_id` | string: UUID |  | Company ID |

## 응답

| 코드 | 의미 | 설명 |
| --- | --- | --- |
| `200` | OK | The request has succeeded. |
| `400` | Bad Request | The request could not be understood by the server due to malformed syntax. |
| `403` | Forbidden | Unauthorized |
| `404` | Not Found | The resource cannot be found. |
| `409` | Conflict | The request could not be completed due to a conflict with the current state of the resource. |
| `422` | Unprocessable Entity | The request was unable to be followed due to restrictions. |
| `500` | Internal Server Error | An unexpected error occurred on the server. |

### 응답 본문 (200)

- `id` — `string: UUID`  
    Company ID
- `account_id` — `string: UUID`  
    Account/Hub ID
- `name` — `string`  
    Company name should be unique under an account/hub Max length: 255
- `trade` — `string`  
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

## Example

```
curl 'https://developer.api.autodesk.com/hq/v1/accounts/80793a28-f9b1-4888-9533-5f00cddcd6fb/companies/fc830fd8-f1ef-4cd6-9163-fb115dc698d7/image' \
  -X 'PATCH' \
  -H 'Authorization: Bearer RVKtOysEJKtQh6RJDJF7oJBrBGc4' \
  -H 'Content-Type: multipart/form-data' \
  -F 'chunk=@/Users/test/Desktop/demo.png;type=image/png'
```

```
{
  "id": "fc830fd8-f1ef-4cd6-9163-fb115dc698d7",
  "account_id": "80793a28-f9b1-4888-9533-5f00cddcd6fb",
  "name": "Autodesk",
  "trade": "Concrete",
  "address_line_1": "The Fifth Avenue",
  "address_line_2": "#301",
  "city": "New York",
  "postal_code": "10011",
  "state_or_province": "New York",
  "country": "United States",
  "phone": "(503)623-1525",
  "website_url": "http://www.autodesk.com",
  "description": "Autodesk, Inc., is a leader in 3D design, engineering and entertainment software.",
  "created_at": "2016-05-20T02:24:21.400Z",
  "updated_at": "2016-05-20T09:28:21.354Z",
  "erp_id": "c79bf096-5a3e-41a4-aaf8-a771ed329047",
  "tax_id": "213-73-8867"
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
원본 문서: https://aps.autodesk.com/en/docs/acc/v1/reference/http/companies-:company_id-image-PATCH
