---
operation_id: transmittals-listtransmittalrecipients-GET
method: GET
path: /construction/transmittals/v1/projects/{projectId}/transmittals/{transmittalId}/recipients
group: "Transmittals"
auth_context: user context optional
scopes: [data:read]
surface: http
verification: docs-only
---

# Retrieves all recipients of a specific transmittal, including project members and external members

```http
GET https://developer.api.autodesk.com/construction/transmittals/v1/projects/{projectId}/transmittals/{transmittalId}/recipients
```

| | |
| --- | --- |
| **인증 컨텍스트** | user context optional |
| **필요 스코프** | `data:read` |
| **데이터 포맷** | JSON |
| **그룹** | Transmittals |

Retrieves all recipients of a specific transmittal, including project members and external members.

## 요청

### URI 파라미터

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `projectId` | string: UUID |  | The ID of the project. You can retrieve the project ID using the Data Management API. For more details, see the Retrieve a Project ID tutorial. You may provide the project ID with or without the b. prefix: - With prefix: b.657a5565-09b7-48e0-bd03-acacfe42efaf - Without prefix: 657a5565-09b7-48e0-bd03-acacfe42efaf |
| `transmittalId` | string: UUID |  | The ID of the transmittal. To find the ID, call GET transmittals. |

### 헤더

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `Authorization` | string | **필수** | Must be Bearer <token>, where <token> is obtained via either a two-legged or three-legged OAuth flow. |
| `x-user-id` | string |  | The Autodesk ID of the user on whose behalf the request is made. This header is required only when using two-legged authentication. It is not needed for three-legged authentication. Your application can access only those users who are assigned to it in the SaaS Integrations UI. Only user Autodesk IDs (autodeskId) are supported. |

## 응답

| 코드 | 의미 | 설명 |
| --- | --- | --- |
| `200` | OK | Successfully retrieved the recipients of the transmittal. |
| `202` | Accepted | The transmittal has been created and is currently being processed but is not yet ready for review. The recipients and externalMembers lists are empty. |
| `400` | Bad Request | Operation failed because of bad user input |
| `401` | Unauthorized | Unauthorized error |
| `403` | Forbidden | The user does not have permission to perform this operation. |
| `404` | Not Found | The project or transmittal does not exist |
| `500` | Internal Server Error | Internal server error |

### 응답 본문 (200)

- `recipients` — `array: object`  
    The list of project-member recipients included in the transmittal.
  - `autodeskId` — `string`  
      The Autodesk ID of the recipient.
  - `email` — `string`  
      The recipients email address.
  - `name` — `string`  
      The recipient’s name.
  - `companyAutodeskId` — `string`  
      The Autodesk ID of the recipient’s company at the time the transmittal was issued.
  - `companyName` — `string`  
      The name of the recipient’s company at the time the transmittal was issued.
  - `receivedAt` — `datetime: ISO 8601`  
      The date and time when the recipient received the transmittal (ISO 8601 format).
  - `viewedAt` — `datetime: ISO 8601`  
      The date and time when the recipient first viewed the transmittal (ISO 8601 format).
  - `downloadedAt` — `datetime: ISO 8601`  
      The date and time when the recipient first downloaded the transmittal (ISO 8601 format).
- `externalMembers` — `array: object`  
    A list of external recipients included in the transmittal.
  - `email` — `string`  
      The email address of the external recipient.
  - `name` — `string`  
      The name of the external recipient.
  - `companyName` — `string`  
      The company name of the external recipient. This value may change if the external user later updates their company information.
  - `role` — `string`  
      The role name of the external recipient.
  - `receivedAt` — `datetime: ISO 8601`  
      The date and time when the external recipient received the transmittal notification, in ISO 8601 format.
  - `viewedAt` — `datetime: ISO 8601`  
      The date and time when the external recipient first viewed the transmittal, in ISO 8601 format.
  - `downloadedAt` — `datetime: ISO 8601`  
      The date and time when the external recipient first downloaded the transmittal, in ISO 8601 format.

### 응답 본문 (202)

- `recipients` — `array: object`  
    An empty array of recipients while the transmittal is still being processed.
- `externalMembers` — `array: object`  
    An empty array of external recipients while the transmittal is still being processed.

## Example

```
curl -v 'https://developer.api.autodesk.com/construction/transmittals/v1/projects/657a5565-09b7-48e0-bd03-acacfe42efaf/transmittals/88c286a3-4100-4251-8d0e-830e7726fc17/recipients' \
  -H 'Authorization: Bearer AuIPTf4KYLTYGVnOHQ0cuolwCW2a'
```

```
{
  "recipients": [
    {
      "autodeskId": "HWUBNU689CRH",
      "email": "john.smith@email.com",
      "name": "John Smith",
      "companyAutodeskId": "156891388",
      "companyName": "Autodesk Inc.",
      "receivedAt": "2025-04-19T01:38:27.306Z",
      "viewedAt": "2025-04-19T01:38:27.306Z",
      "downloadedAt": "2025-04-19T01:38:27.306Z"
    }
  ],
  "externalMembers": [
    {
      "email": "john.smith@email.com",
      "name": "John Smith",
      "companyName": "Autodesk Inc.",
      "role": "Construction",
      "receivedAt": "2025-04-19T01:38:27.306Z",
      "viewedAt": "2025-04-19T01:38:27.306Z",
      "downloadedAt": "2025-04-19T01:38:27.306Z"
    }
  ]
}
```

```
{
  "recipients": [],
  "externalMembers": []
}
```

## 같은 그룹의 다른 엔드포인트

- `GET /construction/transmittals/v1/projects/{projectId}/transmittals/{transmittalId}` — [Retrieves a transmittal by ID within the specified project](./transmittals-gettransmittal-GET.md)
- `GET /construction/transmittals/v1/projects/{projectId}/transmittals/{transmittalId}/documents` — [Retrieves the documents that were included in a specific transmittal](./transmittals-listtransmittaldocuments-GET.md)
- `GET /construction/transmittals/v1/projects/{projectId}/transmittals/{transmittalId}/folders` — [Retrieves all folders associated with the documents included in a specific transmittal](./transmittals-listtransmittalfolders-GET.md)
- `GET /construction/transmittals/v1/projects/{projectId}/transmittals` — [Retrieves all transmittals created in the specified project](./transmittals-listtransmittals-GET.md)

---
원본 문서: https://aps.autodesk.com/en/docs/acc/v1/reference/http/transmittals-listtransmittalrecipients-GET
