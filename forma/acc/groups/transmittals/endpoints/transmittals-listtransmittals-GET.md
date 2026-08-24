---
operation_id: transmittals-listtransmittals-GET
method: GET
path: /construction/transmittals/v1/projects/{projectId}/transmittals
group: "Transmittals"
auth_context: user context optional
scopes: [data:read]
surface: http
verification: docs-only
---

# Retrieves all transmittals created in the specified project

```http
GET https://developer.api.autodesk.com/construction/transmittals/v1/projects/{projectId}/transmittals
```

| | |
| --- | --- |
| **인증 컨텍스트** | user context optional |
| **필요 스코프** | `data:read` |
| **데이터 포맷** | JSON |
| **그룹** | Transmittals |

Retrieves all transmittals created in the specified project.

## 요청

### URI 파라미터

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `projectId` | string: UUID |  | The ID of the project. You can retrieve the project ID using the Data Management API. For more details, see the Retrieve a Project ID tutorial. You may provide the project ID with or without the b. prefix: - With prefix: b.657a5565-09b7-48e0-bd03-acacfe42efaf - Without prefix: 657a5565-09b7-48e0-bd03-acacfe42efaf |

### 쿼리 파라미터

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `limit` | int |  | The maximum number of results to return per page. Acceptable values: 1-200. Default value: 20. For example, to limit the response to two results per page, use limit=2. |
| `offset` | int |  | The index from which the response starts returning results. Default value: 0. For example, to skip the first three results, use offset=3. |
| `sort` | enum:string |  | Sorts the transmittals by a supported field and order. By default, results are sorted by sequenceId desc (descending order). To sort in ascending order, add asc after the field name. Format: sort=<field> [asc or desc] Possible values: status, sequenceId, title, sentByName, createdAt, documentsCount. Examples: - sort=status asc – sorts transmittals by status in ascending order. - sort=createdAt desc – sorts transmittals by creation date in descending order. |

### 헤더

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `Authorization` | string | **필수** | Must be Bearer <token>, where <token> is obtained via either a two-legged or three-legged OAuth flow. |
| `x-user-id` | string |  | The Autodesk ID of the user on whose behalf the request is made. This header is required only when using two-legged authentication. It is not needed for three-legged authentication. Your application can access only those users who are assigned to it in the SaaS Integrations UI. Only user Autodesk IDs (autodeskId) are supported. |

## 응답

| 코드 | 의미 | 설명 |
| --- | --- | --- |
| `200` | OK | Successfully retrieved the list of transmittals If one or more transmittals are still being processed, some fields—such as recipients and externalMembers—may be temporarily empty. |
| `400` | Bad Request | Bad request. The input parameters were invalid. |
| `401` | Unauthorized | Unauthorized error |
| `403` | Forbidden | The user does not have permission to perform this operation. |
| `404` | Not Found | The project does not exist |
| `500` | Internal Server Error | Internal server error |

### 응답 본문 (200)

- `results` — `array: object`  
    A list of transmittals that belong to the specified project.
  - `id` — `string: UUID`  
      The unique identifier of the transmittal.
  - `sequenceId` — `string`  
      A project-specific number automatically assigned when the transmittal is first submitted. It identifies the transmittal within the project and reflects the order in which it was created.
  - `title` — `string`  
      The title of the transmittal.
  - `message` — `string`  
      An optional message included with the transmittal.
  - `status` — `enum:string`  
      The current processing state of the transmittal. - SENDING – The transmittal is being processed or packaged; some fields may be temporarily empty. The recipients and externalMembers fields may be temporarily empty. - COMPLETED – The transmittal has been successfully issued and all data is available. - FAILED – The transmittal failed to process or send. Possible values: SENDING, COMPLETED, FAILED.
  - `sentBy` — `object`  
      Information about the user who created and sent the transmittal.
    - `autodeskId` — `string`  
        The Autodesk ID of the transmittal creator.
    - `email` — `string`  
        The email of the transmittal creator.
    - `name` — `string`  
        The full name of the transmittal creator.
    - `companyAutodeskId` — `string`  
        The Autodesk ID of the creator’s company at the time the transmittal was created.
    - `companyName` — `string`  
        The name of the creator’s company at the time the transmittal was created.
  - `recipients` — `object`  
      The list of recipients included in the transmittal, grouped by user, company, and role. For more information on how to add recipients to a transmittal, see the Create Transmittals documentation.
    - `users` — `array: object`  
        The list of individual users who were added as recipients.
      - `autodeskId` — `string`  
          The Autodesk ID of the user recipient.
      - `name` — `string`  
          The name of the user recipient.
    - `companies` — `array: object`  
        The list of companies that were added as recipients.
      - `autodeskId` — `string`  
          The Autodesk ID of the company recipient.
      - `name` — `string`  
          The name of the company recipient.
    - `roles` — `array: object`  
        The list of project roles that were added as recipients.
      - `autodeskId` — `string`  
          The Autodesk ID of the role recipient.
      - `name` — `string`  
          The name of the role recipient.
  - `externalMembers` — `array: object`  
      The list of external recipients who are not members of the project.
    - `name` — `string`  
        The name of the external recipient.
    - `email` — `string`  
        The email address of the external recipient.
  - `createdAt` — `datetime: ISO 8601`  
      The date and time when the transmittal was created, in ISO 8601 format.
  - `documentsCount` — `int`  
      The total number of documents included in the transmittal.
  - `packedStatus` — `enum:string`  
      Indicates the progress of packaging transmittal files into a ZIP archive. Possible values: SUCCESS, PARTIAL_SUCCESS, FAILED, PROCESSING, EXPIRED, NOT_ALLOWED
  - `displayRecipients` — `enum:string`  
      Specifies how much recipient information each recipient can see. - ALL – All recipients can view the full recipient list. - LIMITED – Each recipient can view only their own recipient information. Project Admins and the sender always see the full list. Possible values: ALL, LIMITED
- `pagination` — `object`  
    The list of pagination details for the response.
  - `limit` — `int`  
      The maximum number of results returned per page.
  - `offset` — `int`  
      The number of results skipped before the current page, starting from zero.
  - `totalResults` — `int`  
      The total number of results that match the query, regardless of pagination.
  - `nextUrl` — `string`  
      The URL to retrieve the next page of transmittals. If this field is not included, the current page is the last page of results.

## Example

```
curl -v 'https://developer.api.autodesk.com/construction/transmittals/v1/projects/6fbcdf65-f2e4-4dd4-86bd-96febe58ff82/transmittals?limit=20&sort=sequenceId desc' \
  -H 'Authorization: Bearer AuIPTf4KYLTYGVnOHQ0cuolwCW2a'
```

```
{
  "results": [
    {
      "id": "88c286a3-4100-4251-8d0e-830e7726fc17",
      "sequenceId": "25",
      "title": "Building design",
      "message": "This is a building design pdf",
      "status": "COMPLETED",
      "sentBy": {
        "autodeskId": "HWUBNU689CRH",
        "email": "john.smith@email.com",
        "name": "John Smith",
        "companyAutodeskId": "156891388",
        "companyName": "BuildCo Ltd."
      },
      "recipients": {
        "users": [
          {
            "autodeskId": "HWUBNU689CRH",
            "name": "John Smith"
          }
        ],
        "companies": [
          {
            "autodeskId": "73758762",
            "name": "Autodesk Inc."
          }
        ],
        "roles": [
          {
            "autodeskId": "233404534",
            "name": "designer"
          }
        ]
      },
      "externalMembers": [
        {
          "name": "John Smith",
          "email": "john.smith@email.com"
        }
      ],
      "createdAt": "2025-04-03T09:42:17.476Z",
      "documentsCount": 2,
      "packedStatus": "SUCCESS",
      "displayRecipients": "ALL"
    }
  ],
  "pagination": {
    "limit": 20,
    "offset": 0,
    "totalResults": 100,
    "nextUrl": "https://developer.api.autodesk.com/construction/transmittals/v1/projects/657a5565-09b7-48e0-bd03-acacfe42efaf/transmittals?limit=20&offset=10"
  }
}
```

## 같은 그룹의 다른 엔드포인트

- `GET /construction/transmittals/v1/projects/{projectId}/transmittals/{transmittalId}` — [Retrieves a transmittal by ID within the specified project](./transmittals-gettransmittal-GET.md)
- `GET /construction/transmittals/v1/projects/{projectId}/transmittals/{transmittalId}/documents` — [Retrieves the documents that were included in a specific transmittal](./transmittals-listtransmittaldocuments-GET.md)
- `GET /construction/transmittals/v1/projects/{projectId}/transmittals/{transmittalId}/folders` — [Retrieves all folders associated with the documents included in a specific transmittal](./transmittals-listtransmittalfolders-GET.md)
- `GET /construction/transmittals/v1/projects/{projectId}/transmittals/{transmittalId}/recipients` — [Retrieves all recipients of a specific transmittal, including project members and external members](./transmittals-listtransmittalrecipients-GET.md)

---
원본 문서: https://aps.autodesk.com/en/docs/acc/v1/reference/http/transmittals-listtransmittals-GET
