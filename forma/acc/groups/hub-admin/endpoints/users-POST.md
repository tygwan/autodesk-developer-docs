---
operation_id: users-POST
method: POST
path: /hq/v1/accounts/{account_id}/users
group: "Hub Admin"
auth_context: app only
scopes: [account:write]
surface: http
verification: docs-only
---

# Create a new user in the BIM 360 member directory

```http
POST https://developer.api.autodesk.com/hq/v1/accounts/:account_id/users
```

| | |
| --- | --- |
| **인증 컨텍스트** | app only |
| **필요 스코프** | `account:write` |
| **데이터 포맷** | - |
| **그룹** | Hub Admin |

Create a new user in the BIM 360 member directory.

## 요청

### URI 파라미터

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `account_id` | string: UUID |  | The account/hub ID of the user. This corresponds to hub ID in the Data Management API. To obtain hub ID you need to remove the “b.” prefix. For example: b.c8b0c73d-3ae9 becomes c8b0c73d-3ae9. |

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

- `id` — `string: UUID`  
    User ID
- `account_id` — `string: UUID`  
    Account/Hub ID
- `role` — `string`  
    The role of the user in the account/hub New user should be account_user only.
- `status` — `string`  
    Status of the user in the system A new account user is always not_invited.
- `company_id` — `string: UUID`  
    The user’s default company ID in BIM 360
- `company_name` — `string`  
    The name of the user’s default company name in BIM 360
- `last_sign_in` — `datetime: ISO 8601`  
    The time and date of the user’s most recent sign-in, in ISO 8601 format (YYYY-MM-DDThh:mm:ss.sssZ). Note that this field is not supported by Forma Unified products. The value is updated only when the user logs into one of the following services associated with the specified BIM 360 account: BIM 360 Account Admin, BIM 360 Project Admin, BIM 360 Document Management, BIM 360 Field (Classic), or BIM 360 Plan.
- `email` — `string`  
    User’s email Max length: 255
- `name` — `string`  
    Default display name Max length: 255
- `nickname` — `string`  
    Nick name for user Max length: 255
- `first_name` — `string`  
    User’s first name Max length: 255
- `last_name` — `string`  
    User’s last name Max length: 255
- `uid` — `string`  
    User’s Autodesk ID
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
    Short description about the user
- `default_role` — `string`  
    The user’s default role.
- `default_role_id` — `string`  
    The ID of the default role. Max length: 255
- `created_at` — `datetime: ISO 8601`  
    YYYY-MM-DDThh:mm:ss.sssZ format
- `updated_at` — `datetime: ISO 8601`  
    YYYY-MM-DDThh:mm:ss.sssZ format

## Example

```
curl -v 'https://developer.api.autodesk.com/hq/v1/accounts/9dbb160e-b904-458b-bc5c-ed184687592d/users' \
  -X 'POST' \
  -H 'Authorization: Bearer XZvCJNhdxESsBRIH28MfLf2hKL5O' \
  -H 'Content-Type: application/json' \
  -d '{
    "email": "john.smith@mail.com",
    "company_id": "14e95a5e-02eb-49aa-a39a-447d90544873",
    "nickname": "Johnny",
    "first_name": "John",
    "last_name": "Smith",
    "image_url": "/image/johnsmith.jpeg",
    "address_line_1": "The Fifth Avenue",
    "address_line_2": "#301",
    "city": "shanghai",
    "postal_code": "20000",
    "state_or_province": "Shanghai",
    "country": "China",
    "phone": "1234567",
    "company": "Autodesk",
    "job_title": "software developer",
    "industry": "IT",
    "about_me": "Nothing here",
    "default_role": "BIM Manager"
    }'
```

```
{
  "id": "79b51334-1127-4313-a0e1-4986b3e96c47",
  "account_id": "9dbb160e-b904-458b-bc5c-ed184687592d",
  "status": "not_invited",
  "role": "account_user",
  "company_id": "14e95a5e-02eb-49aa-a39a-447d90544873",
  "company_name": "Autodesk",
  "last_sign_in": null,
  "email": "john.smith@mail.com",
  "name": "John Smith",
  "nickname": "Johnny",
  "first_name": "John",
  "last_name": "Smith",
  "uid": "L9EBJKCGCXBB",
  "image_url": "http://static-dc.autodesk.net/etc/designs/v201412151200/autodesk/adsk-design/images/autodesk_header_logo_140x23.png",
  "address_line_1": "The Fifth Avenue",
  "address_line_2": "#301",
  "city": "Shanghai",
  "postal_code": "10010",
  "state_or_province": "New York",
  "country": "United States",
  "phone": "(634)329-2353",
  "company": "Autodesk",
  "job_title": "Software Developer",
  "industry": "IT",
  "about_me": "Nothing here",
  "default_role": "BIM Manager",
  "default_role_id": "4e7e02ae-2994-4210-9153-84bfb9a23a63",
  "created_at": "2016-04-07T08:45:51.050Z",
  "updated_at": "2016-04-07T08:45:51.050Z"
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
- `POST /hq/v1/accounts/{account_id}/users/import` — [Bulk import users to the master member directory in a BIM 360 account of Forma hub](./users-import-POST.md)
- `GET /hq/v1/accounts/{account_id}/users/search` — [Search users in the master member directory of a specific BIM 360 account by specified fields](./users-search-GET.md)

---
원본 문서: https://aps.autodesk.com/en/docs/acc/v1/reference/http/users-POST
