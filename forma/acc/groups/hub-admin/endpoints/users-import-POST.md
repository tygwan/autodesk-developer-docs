---
operation_id: users-import-POST
method: POST
path: /hq/v1/accounts/{account_id}/users/import
group: "Hub Admin"
auth_context: app only
scopes: [account:write]
surface: http
verification: docs-only
---

# Bulk import users to the master member directory in a BIM 360 account of Forma hub

```http
POST https://developer.api.autodesk.com/hq/v1/accounts/:account_id/users/import
```

| | |
| --- | --- |
| **인증 컨텍스트** | app only |
| **필요 스코프** | `account:write` |
| **데이터 포맷** | - |
| **그룹** | Hub Admin |

Bulk import users to the master member directory in a BIM 360 account of Forma hub. (50 users maximum can be included in each call.)

## 요청

### URI 파라미터

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `account_id` | string: UUID |  | The account/hub ID of the users. This corresponds to hub ID in the Data Management API. To obtain hub ID you need to remove the “b.” prefix. For example: b.c8b0c73d-3ae9 becomes c8b0c73d-3ae9. |

### 헤더

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `Authorization` | yes |  | Must be Bearer <token>, where <token> is obtained via a two-legged OAuth flow. |
| `Content-Type` | yes |  | Must be application/json |
| `Region` | no |  | Specifies the region where the service is located. Possible values: US, EMEA. For the full list of supported regions, see the Regions page. |

### 요청 본문

- `company_id` — `string: UUID`  
    The user’s default company ID in BIM 360
- `email` — `string` **(필수)**  
    User’s email Max length: 255
- `nickname` — `string`  
    Nick name for user Max length: 255
- `first_name` — `string`  
    User’s first name Max length: 255
- `last_name` — `string`  
    User’s last name Max length: 255
- `image_url` — `string`  
    URL for user’s profile image Max length: 255
- `address_line_1` — `string`  
    User’s address line 1 Max length: 255
- `address_line_2` — `string`  
    User’s address line 2 Max length: 255
- `city` — `string`  
    City in which user is located Max length: 255
- `state_or_province` — `enum: string`  
    State or province in which user is located Max length: 255 Note that the state_or_province value depends on the selected country value; see the valid values in the state_or_province list in the Parameters guide.
- `postal_code` — `string`  
    Postal code for the user’s location Max length: 255
- `country` — `enum: string`  
    Country for this user Refer to the country list in the Parameters guide.
- `phone` — `string`  
    Contact phone number for the user Max length: 255
- `company` — `string`  
    Company information from the Autodesk user profile Max length: 255 Note that this is different from company in BIM 360.
- `job_title` — `string`  
    User’s job title Max length: 255
- `industry` — `string`  
    Industry information for user Max length: 255
- `about_me` — `string`  
    Short description about the user Max length: 255
- `default_role` — `string`  
    The user’s default role Max length: 255

## 응답

| 코드 | 의미 | 설명 |
| --- | --- | --- |
| `201` | Created | A new resource has been successfully created. |
| `400` | Bad Request | The request could not be understood by the server due to malformed syntax. |
| `403` | Forbidden | Unauthorized |
| `404` | Not Found | The resource cannot be found. |
| `409` | Conflict | The request could not be completed due to a conflict with the current state of the resource. |
| `422` | Unprocessable Entity | The request was unable to be followed due to restrictions. |
| `500` | Internal Server Error | An unexpected error occurred on the server. |

### 응답 본문 (201)

- `success` — `int`  
    Import success company count
- `failure` — `int`  
    Import failure company count
- `success_items` — `array:object`  
    Array of user objects that were successfully imported
  - `id`
  - `account_id`
  - `status`
  - `role`
  - `company_id`
  - `company_name`
  - `email`
  - `name`
  - `nickname`
  - `first_name`
  - `last_name`
  - `uid`
  - `image_url`
  - `last_sign_in`
  - `address_line_1`
  - `address_line_2`
  - `city`
  - `postal_code`
  - `state_or_province`
  - `country`
  - `phone`
  - `company`
  - `job_title`
  - `industry`
  - `about_me`
  - `created_at`
  - `updated_at`
- `failure_items` — `array:object`  
    Array of user objects that failed to import, along with content and error information

## Example

```
curl -v 'https://developer.api.autodesk.com/hq/v1/accounts/80793a28-f9b1-4888-9533-5f00cddcd6fb/users/import' \
  -X 'POST' \
  -H 'Authorization: Bearer XZvCJNhdxESsBRIH28MfLf2hKL5O' \
  -H 'Content-Type: application/json' \
  -d '[
    {
      "email": "john.smith@mail.com",
      "nickname": "Johnny",
      "first_name": "John",
      "last_name": "Smith",
      "image_url": "http://static-dc.autodesk.net/etc/designs/v201412151200/autodesk/adsk-design/images/autodesk_header_logo_140x23.png",
      "address_line_1": "The Fifth Avenue",
      "address_line_2": "#301",
      "city": "New York",
      "postal_code": "10011",
      "state_or_province": "shanghai",
      "country": "United States",
      "phone": "(634)329-2353",
      "company": "autodesk",
      "job_title": "software developer",
      "industry": "IT",
      "about_me": "nothing",
      "company_id": "14e95a5e-02eb-49aa-a39a-447d90544873",
      "default_role": "BIM Manager"
    }
  ]'
```

```
{
  "success": 1,
  "failure": 0,
  "success_items": [
    {
      "id": "8e3d3095-5e4a-4918-b57a-fe2066f8d443",
      "account_id": "80793a28-f9b1-4888-9533-5f00cddcd6fb",
      "status": "not_invited",
      "role": "account_user",
      "company_id": "14e95a5e-02eb-49aa-a39a-447d90544873",
      "company_name": "Autodesk",
      "email": "john.smith@mail.com",
      "name": "John Smith",
      "nickname": "Johnny",
      "first_name": "John",
      "last_name": "Smith",
      "uid": "L9EBJKCGCXBB",
      "image_url": "http://static-dc.autodesk.net/etc/designs/v201412151200/autodesk/adsk-design/images/autodesk_header_logo_140x23.png",
      "last_sign_in": null,
      "address_line_1": "The Fifth Avenue",
      "address_line_2": "#301",
      "city": "New York",
      "postal_code": "10011",
      "state_or_province": "New York",
      "country": "United States",
      "phone": "(634)329-2353",
      "company": "Autodesk",
      "job_title": "Software Developer",
      "industry": "IT",
      "about_me": "Nothing",
      "default_role": "BIM Manager",
      "default_role_id": "4e7e02ae-2994-4210-9153-84bfb9a23a63",
      "created_at": "2016-04-07T08:45:51.050Z",
      "updated_at": "2016-04-07T08:45:51.050Z"
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
- `POST /hq/v1/accounts/{account_id}/companies/import` — [Bulk import partner companies to the company directory in a specific BIM 360 account](./companies-import-POST.md)
- `POST /hq/v1/accounts/{account_id}/companies` — [Create a new partner company](./companies-POST.md)
- `GET /hq/v1/accounts/{account_id}/companies/search` — [Search partner companies in a specific BIM 360 account by name](./companies-search-GET.md)
- `GET /hq/v1/accounts/{account_id}/projects/{project_id}/companies` — [Query all the partner companies in a specific BIM 360/Forma project](./projects-project_id-companies-GET.md)
- `PATCH /hq/v1/accounts/{account_id}/projects/{project_id}/image` — [Create or update a project’s image](./projects-project_id-image-PATCH.md)
- `GET /hq/v1/accounts/{account_id}/users/{user_id}` — [Query the details of a specific user](./users-user_id-GET.md)
- `PATCH /hq/v1/accounts/{account_id}/users/{user_id}` — [Update a specific user’s status or default company](./users-user_id-PATCH.md)
- `GET /hq/v1/accounts/{account_id}/users` — [Query all the users in a specific BIM 360 account](./users-GET.md)
- `POST /hq/v1/accounts/{account_id}/users` — [Create a new user in the BIM 360 member directory](./users-POST.md)
- `GET /hq/v1/accounts/{account_id}/users/search` — [Search users in the master member directory of a specific BIM 360 account by specified fields](./users-search-GET.md)

---
원본 문서: https://aps.autodesk.com/en/docs/acc/v1/reference/http/users-import-POST
