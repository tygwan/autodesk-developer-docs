---
operation_id: issues-comments-GET
method: GET
path: /construction/issues/v1/projects/{projectId}/issues/{issueId}/comments
group: "Issues"
auth_context: user context required
scopes: [data:read]
surface: http
verification: docs-only
---

# Get all the comments for a specific issue

```http
GET https://developer.api.autodesk.com/construction/issues/v1/projects/{projectId}/issues/{issueId}/comments
```

| | |
| --- | --- |
| **인증 컨텍스트** | user context required |
| **필요 스코프** | `data:read` |
| **데이터 포맷** | JSON |
| **그룹** | Issues |

Get all the comments for a specific issue.

## 요청

### URI 파라미터

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `projectId` | string: UUID |  | The ID of the project. Use the Data Management API to retrieve the project ID. For more information, see the Retrieve a Project ID tutorial. You need to convert the project ID into a project ID for the Forma API by removing the “b." prefix. For example, a project ID of b.a4be0c34a-4ab7 translates to a project ID of a4be0c34a-4ab7. |
| `issueId` | string: UUID |  | The unique identifier of the issue. To find the ID, call GET issues. |

### 쿼리 파라미터

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `sortBy` | array: string |  | Sort issue comments by specified fields. Separate multiple values with commas. To sort in descending order add a - (minus sign) before the sort criteria. For example: sortBy=createdAt,-updatedAt. Possible values: createdAt, updatedAt, createdBy. |
| `limit` | int |  | Add limit=20 to limit the results count (together with the offset to support pagination). |
| `offset` | int |  | Add offset=20 to get partial results (together with the limit to support pagination). |

### 헤더

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `Authorization` | string | **필수** | Must be Bearer <token>, where <token> is a three-legged access token obtained via an Authorization Code flow or a Secure Service Account (SSA) flow. The SSA flow is designed for headless server-to-server operations. While it functions like a two-legged flow (no user interaction), it is classified as three-legged because it preserves user context. |
| `x-ads-region` | string |  | The region to which your request should be routed. If not set, the request is routed automatically but may incur a small latency increase. Possible values: US, EMEA. For the full list of supported regions, see the Regions page. |

## 응답

| 코드 | 의미 | 설명 |
| --- | --- | --- |
| `200` | OK | List of comments of the specific requested issue in combination with pagination details |
| `400` | Bad Request | Invalid ID supplied |
| `403` | Forbidden | The request is valid but lacks the necessary permissions. |
| `404` | Not Found | Project not found |
| `500` | Internal Server Error | Internal server error |

### 응답 본문 (200)

- `pagination` — `object`  
    The pagination object.
  - `limit` — `int`  
      The number of items per page.
  - `offset` — `int`  
      The page number that the results begin from.
  - `totalResults` — `int`  
      The number of items in the response.
- `results` — `array: object`  
    A list of comments for the specified issue.
  - `id` — `string: UUID`  
      The unique identifier for the comment.
  - `body` — `string`  
      The comment content. A ` ` represents a new line. For example, HeynAharon will appear as a two-line comment. Max length: 10000
  - `createdAt` — `datetime: ISO 8601`  
      The date and time the comment was created, in the following format: YYYY-MM-DDThh:mm:ss.sz.
  - `createdBy` — `string`  
      The Autodesk ID of the user who created the comment.
  - `updatedAt` — `datetime: ISO 8601`  
      Not relevant
  - `deletedAt` — `datetime: ISO 8601`  
      Not relevant
  - `clientCreatedAt` — `string`  
      Not relevant
  - `clientUpdatedAt` — `datetime: ISO 8601`  
      Not relevant
  - `permittedActions` — `array: string`  
      Not relevant
  - `permittedAttributes` — `array: string`  
      Not relevant

## Example

```
curl -v 'https://developer.api.autodesk.com/construction/issues/v1/projects/:projectId/issues/:issueId/comments' \
  -H 'Authorization: Bearer AuIPTf4KYLTYGVnOHQ0cuolwCW2a'
```

```
{
  "pagination": {
    "limit": 10,
    "offset": 100,
    "totalResults": 25
  },
  "results": [
    {
      "id": "d26c0adb-bb27-4cec-b3ad-bae5ce5a0b29",
      "body": "Hey Aharon,\nPlease validate that this is even possible before starting work on the issue",
      "createdAt": "2018-07-22T15:05:58.033Z",
      "createdBy": "A3RGM375QTZ7",
      "updatedAt": "",
      "deletedAt": "",
      "clientCreatedAt": "A3RGM375QTZ7",
      "clientUpdatedAt": "2018-07-22T15:05:58.033Z",
      "permittedActions": [
        ""
      ],
      "permittedAttributes": [
        ""
      ]
    }
  ]
}
```

## 같은 그룹의 다른 엔드포인트

- `GET /construction/issues/v1/projects/{projectId}/attachments/{issueId}/items` — [Retrieves all attachments for a specific issue in a project](./issues-attachments-issueId-items-GET.md)
- `POST /construction/issues/v1/projects/{projectId}/attachments` — [Adds attachments to an existing issue](./issues-attachments-POST.md)
- `POST /construction/issues/v1/projects/{projectId}/issues/{issueId}/comments` — [Creates a new comment under a specific issue](./issues-comments-POST.md)
- `GET /construction/issues/v1/projects/{projectId}/issue-attribute-definitions` — [Issue Attribute Definitions](./issues-issue-attribute-definitions-GET.md)
- `GET /construction/issues/v1/projects/{projectId}/issue-attribute-mappings` — [Issue Attribute Mappings](./issues-issue-attribute-mappings-GET.md)
- `GET /construction/issues/v1/projects/{projectId}/issue-root-cause-categories` — [Retrieves a list of supported root cause categories and root causes that you can allocate to an issue](./issues-issue-root-cause-categories-GET.md)
- `GET /construction/issues/v1/projects/{projectId}/issue-types` — [Retrieves a project’s categories and types](./issues-issue-types-GET.md)
- `GET /construction/issues/v1/projects/{projectId}/issues` — [Issues](./issues-issues-GET.md)
- `GET /construction/issues/v1/projects/{projectId}/issues/{issueId}` — [Retrieves detailed information about a single issue](./issues-issues-issueId-GET.md)
- `PATCH /construction/issues/v1/projects/{projectId}/issues/{issueId}` — [Updates an issue](./issues-issues-issueId-PATCH.md)
- `POST /construction/issues/v1/projects/{projectId}/issues` — [Adds an issue to a project](./issues-issues-POST.md)
- `DELETE /construction/issues/v1/projects/{projectId}/attachments/{issueId}/items/{attachmentId}` — [Deletes a specific attachment from an issue in a project](./issues-items-attachmentId-DELETE.md)
- `GET /construction/issues/v1/projects/{projectId}/users/me` — [Returns the current user permissions](./issues-users-me-GET.md)

---
원본 문서: https://aps.autodesk.com/en/docs/acc/v1/reference/http/issues-comments-GET
