---
operation_id: rfis-rfis-rfiId-comments-GET
method: GET
path: /construction/rfis/v3/projects/{projectId}/rfis/{rfiId}/comments
group: "RFIs"
auth_context: user context required
scopes: [data:read]
surface: http
verification: docs-only
---

# Retrieves a list of comments associated with a specific RFI

```http
GET https://developer.api.autodesk.com/construction/rfis/v3/projects/:projectId/rfis/:rfiId/comments
```

| | |
| --- | --- |
| **인증 컨텍스트** | user context required |
| **필요 스코프** | `data:read` |
| **데이터 포맷** | JSON |
| **그룹** | RFIs |

Retrieves a list of comments associated with a specific RFI.

## 요청

### URI 파라미터

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `projectId` | string |  | The ID of the project. Use the Data Management API to retrieve the project ID. For more information, see the Retrieve a Project ID tutorial. You need to convert the project ID into a project ID for the Forma API by removing the “b." prefix. For example, a project ID of b.a4be0c34a-4ab7 translates to a project ID of a4be0c34a-4ab7. |
| `rfiId` | string |  | The ID of the RFI. To find the ID, call POST search:rfis. |

### 쿼리 파라미터

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `limit` | int |  | The number of RFIs to return in the response. Acceptable values: 1–200. Default: 10. For example, to limit the response to two items per page, use limit=2 |
| `offset` | int |  | The number of items to skip before starting to return results. For example, to begin the results from the fourth item, use offset=3. |
| `sort` | array: string |  | The fields to sort the list by |
| `fields` | array: string |  | Specify which attributes you want to see in the response. Separate multiple values with commas. For example, fields = title,description. |
| `filter[createdAt]` | string |  | Retrieves comments created after the specified date, in the following format: YYYY-MM-DDThh:mm:ss.sz, or a date range in the following format: YYYY-MM-DDThh:mm:ss.sz..YYYY-MM-DDThh:mm:ss.sz. |
| `filter[createdBy]` | array: string |  | Retrieves comments created by the user. For example, filter[createdBy]=PER8KQPK2JRT |

### 헤더

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `Authorization` | string | **필수** | Must be Bearer <token>, where <token> is a three-legged access token obtained via an Authorization Code flow or a Secure Service Account (SSA) flow. The SSA flow is designed for headless server-to-server operations. While it functions like a two-legged flow (no user interaction), it is classified as three-legged because it preserves user context. |

## 응답

| 코드 | 의미 | 설명 |
| --- | --- | --- |
| `200` | OK | Success |
| `400` | Bad Request | The parameters are invalid |
| `401` | Unauthorized | The provided bearer token is not valid |
| `403` | Forbidden | The user or service represented by the bearer token does not have permission to perform this operation |
| `404` | Not Found | RFI not found |
| `500` | Internal Server Error | An unknown error occurred on the server |

### 응답 본문 (200)

- `results` — `array: object`  
    A list of comments associated with the RFI.
  - `id` — `string`  
      The unique identifier of the comment.
  - `body` — `string`  
      The content of the comment.
  - `createdBy` — `string`  
      The Autodesk ID of the user who created the comment. To check the name of the user, call GET users.
  - `createdAt` — `datetime: ISO 8601`  
      The timestamp of the date and time the comment was created, in the following format: YYYY-MM-DDThh:mm:ss.sz.
  - `updatedAt` — `datetime: ISO 8601`  
      The timestamp of the date and time the comment was updated, in the following format: YYYY-MM-DDThh:mm:ss.sz.
  - `source` — `enum:string`  
      The source of the comment. Indicates how the comment was created. Possible values: - web – The comment was created through the web interface or API. - email – The comment was created by replying via email.
- `pagination` — `object`  
    The pagination object.
  - `limit` — `int`  
      The number of items returned per page.
  - `offset` — `int`  
      The number of items skipped before this page of results.
  - `totalResults` — `int`  
      The total number of items matching the request.

## Example

```
curl -v 'https://developer.api.autodesk.com/construction/rfis/v3/projects/:projectId/rfis/:rfiId/comments' \
  -H 'Authorization: Bearer AuIPTf4KYLTYGVnOHQ0cuolwCW2a'
```

```
{
  "results": [
    {
      "id": "94ce6921-e8f9-4bc5-bf5a-1a8f543a2564",
      "body": "This needs more attention.",
      "createdBy": "PER8KQPK2JRT",
      "createdAt": "2018-08-01T08:56:48.699Z",
      "updatedAt": "2019-08-01T08:56:48.699Z",
      "source": "web"
    }
  ],
  "pagination": {
    "limit": 10,
    "offset": 0,
    "totalResults": 97
  }
}
```

## 같은 그룹의 다른 엔드포인트

- `GET /construction/rfis/v3/projects/{projectId}/attributes` — [Retrieves all custom attribute definitions for a project](./rfis-attributes-GET.md)
- `POST /construction/rfis/v3/projects/{projectId}/attributes` — [Creates a custom attribute definition for a project](./rfis-attributes-POST.md)
- `PATCH /construction/rfis/v3/projects/{projectId}/attributes/{attributeId}` — [Updates an existing custom attribute definition for a project](./rfis-custom-attributes-attributeId-PATCH.md)
- `GET /construction/rfis/v3/projects/{projectId}/rfis/custom-identifier` — [Returns the current and next available RFI custom identifier for the project](./rfis-custom-identifier-GET.md)
- `POST /construction/rfis/v3/projects/{projectId}/search:rfis` — [RFIs](./rfis-rfi-search-POST.md)
- `GET /construction/rfis/v3/projects/{projectId}/rfi-types` — [Retrieves the list of RFI types configured for the specified project](./rfis-RFI-types-GET.md)
- `GET /construction/rfis/v3/projects/{projectId}/rfis/{rfiId}/attachments` — [Retrieves a list of attachments for a specific RFI](./rfis-rfis-id-attachments-GET.md)
- `GET /construction/rfis/v3/projects/{projectId}/rfis/{rfiId}` — [Retrieves detailed information about a specific RFI (Request for Information) in Forma](./rfis-rfis-id-GET.md)
- `PATCH /construction/rfis/v3/projects/{projectId}/rfis/{rfiId}` — [Updates an RFI](./rfis-rfis-id-PATCH.md)
- `POST /construction/rfis/v3/projects/{projectId}/rfis/{rfiId}/responses` — [Creates a response to the specified RFI](./rfis-rfis-id-responses-POST.md)
- `PATCH /construction/rfis/v3/projects/{projectId}/rfis/{rfiId}/responses/{responseId}` — [Updates an existing RFI response](./rfis-rfis-id-responses-responseId-PATCH.md)
- `POST /construction/rfis/v3/projects/{projectId}/rfis` — [Adds an RFI (request for information) to a project](./rfis-rfis-POST.md)
- `POST /construction/rfis/v3/projects/{projectId}/rfis/{rfiId}/comments` — [Adds a comment to an RFI](./rfis-rfis-rfiId-comments-POST.md)
- `GET /construction/rfis/v3/projects/{projectId}/users/me` — [Retrieves information about the current user in the context of the specified project](./rfis-users-me-GET.md)
- `GET /construction/rfis/v3/projects/{projectId}/workflow` — [Workflows](./rfis-workflow-GET.md)

---
원본 문서: https://aps.autodesk.com/en/docs/acc/v1/reference/http/rfis-rfis-rfiId-comments-GET
