---
operation_id: issues-issue-attribute-mappings-GET
method: GET
path: /construction/issues/v1/projects/{projectId}/issue-attribute-mappings
group: "Issues"
auth_context: user context required
scopes: [data:read]
surface: http
verification: docs-only
---

# Issue Attribute Mappings

```http
GET https://developer.api.autodesk.com/construction/issues/v1/projects/{projectId}/issue-attribute-mappings
```

| | |
| --- | --- |
| **인증 컨텍스트** | user context required |
| **필요 스코프** | `data:read` |
| **데이터 포맷** | JSON |
| **그룹** | Issues |

Retrieves information about the issue custom attributes (custom fields) that are assigned to issue categories and issue types.

## 요청

### URI 파라미터

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `projectId` | string: UUID |  | The ID of the project. Use the Data Management API to retrieve the project ID. For more information, see the Retrieve a Project ID tutorial. You need to convert the project ID into a project ID for the Forma API by removing the “b." prefix. For example, a project ID of b.a4be0c34a-4ab7 translates to a project ID of a4be0c34a-4ab7. |

### 쿼리 파라미터

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `limit` | int |  | The number of custom attribute mappings to return in the response payload. For example, limit=2. Acceptable values: 1-200. Default value: 200. |
| `offset` | int |  | The number of custom attribute mappings you want to begin retrieving results from. |
| `filter[createdAt]` | datetime: ISO 8601 |  | Retrieves items that were created at the specified date and time, in one of the following URL-encoded formats: YYYY-MM-DDThh:mm:ss.sz or YYYY-MM-DD. Separate multiple values with commas. We support the following filtering options: - Date range: e.g., 2022-03-02..2022-03-03 or 2022-02-28T22:00:00.000Z..2022-03-28T22:00:00.000Z - Specific day: e.g., 2022-03-02 or 2022-02-28T22:00:00.000Z - Specific start date: e.g., 2022-03-02.. or 2022-02-28T22:00:00.000Z.. - Specific end date: e.g., ..2022-03-02 or ..2022-02-28T22:00:00.000Z For more details, see JSON API Filtering. |
| `filter[updatedAt]` | datetime: ISO 8601 |  | Retrieves items that were last updated at the specified date and time, in one of the following URL-encoded formats: YYYY-MM-DDThh:mm:ss.sz or YYYY-MM-DD. Separate multiple values with commas. We support the following filtering options: - Date range: e.g., 2022-03-02..2022-03-03 or 2022-02-28T22:00:00.000Z..2022-03-28T22:00:00.000Z - Specific day: e.g., 2022-03-02 or 2022-02-28T22:00:00.000Z - Specific start date: e.g., 2022-03-02.. or 2022-02-28T22:00:00.000Z.. - Specific end date: e.g., ..2022-03-02 or ..2022-02-28T22:00:00.000Z For more details, see JSON API Filtering. |
| `filter[deletedAt]` | datetime: ISO 8601 |  | Retrieves types that were deleted at the specified date and time, in one of the following URL-encoded formats: YYYY-MM-DDThh:mm:ss.sz or YYYY-MM-DD. Separate multiple values with commas. We support the following filtering options: - Date range: e.g., 2022-03-02..2022-03-03 or 2022-02-28T22:00:00.000Z..2022-03-28T22:00:00.000Z - Specific day: e.g., 2022-03-02 or 2022-02-28T22:00:00.000Z - Specific start date: e.g., 2022-03-02.. or 2022-02-28T22:00:00.000Z.. - Specific end date: e.g., ..2022-03-02 or ..2022-02-28T22:00:00.000Z To include non-deleted items in the response, add null to the filter: filter[deletedAt]=null,YYYY-MM-DDThh:mm:ss.sz...YYYY-MM-DDThh:mm:ss.sz. For more details, see JSON API Filtering. |
| `filter[attributeDefinitionId]` | string |  | Retrieves issue custom attribute mappings associated with the specified issue custom attribute definitions. Separate multiple values with commas. For example: filter[attributeDefinitionId]=18ee5858-cbf1-451a-a525-7c6ff8156775. |
| `filter[mappedItemId]` | string |  | Retrieves issue custom attribute mappings associated with the specified items (project, type, or subtype). Separate multiple values with commas. For example: filter[mappedItemId]=18ee5858-cbf1-451a-a525-7c6ff8156775. Note that this does not retrieve inherited custom attribute mappings or custom attribute mappings of descendants. |

### 헤더

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `Authorization` | string | **필수** | Must be Bearer <token>, where <token> is a three-legged access token obtained via an Authorization Code flow or a Secure Service Account (SSA) flow. The SSA flow is designed for headless server-to-server operations. While it functions like a two-legged flow (no user interaction), it is classified as three-legged because it preserves user context. |
| `x-ads-region` | string |  | The region to which your request should be routed. If not set, the request is routed automatically but may incur a small latency increase. Possible values: US, EMEA. For the full list of supported regions, see the Regions page. |

## 응답

| 코드 | 의미 | 설명 |
| --- | --- | --- |
| `200` | OK | List of issue attribute mappings |
| `400` | Bad Request | Invalid input |
| `403` | Forbidden | Unauthorized |
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
    A list of issue attribute mappings.
  - `id` — `string: UUID`  
      The ID of the custom attribute mapping.
  - `attributeDefinitionId` — `string: UUID`  
      The ID of the custom attribute definition.
  - `containerId` — `string: UUID`  
      Not relevant
  - `mappedItemType` — `enum:string`  
      The type of item the custom attribute is mapped to. Possible values: issueType - this corresponds to Issue Category in the UI. issueSubtype - this corresponds to Issue Type in the UI. Note that issueSubtype's inherit issueType's.
  - `mappedItemId` — `string: UUID`  
      The ID of the item (type, or subtype) the custom attribute is mapped to.
  - `order` — `int`  
      The order that the custom attributes were mapped to the item (type, subtype). This is only relevant to non-inherited mappings.
  - `permittedActions` — `array: string`  
      Not relevant
  - `permittedAttributes` — `array: string`  
      Not relevant
  - `createdAt` — `datetime: ISO 8601`  
      The date and time the custom attribute mapping was created, in the following format: YYYY-MM-DDThh:mm:ss.sz.
  - `createdBy` — `string`  
      The Autodesk ID of the user who created the custom attribute mapping.
  - `updatedAt` — `datetime: ISO 8601`  
      The last date and time the custom attribute mapping was updated, in the following format: YYYY-MM-DDThh:mm:ss.sz.
  - `updatedBy` — `string`  
      The Autodesk ID of the user who last updated the custom attribute mapping.
  - `deletedAt` — `datetime: ISO 8601`  
      The date and time the custom attribute mapping was deleted, in the following format: YYYY-MM-DDThh:mm:ss.sz.
  - `deletedBy` — `string`  
      The Autodesk ID of the user who deleted the custom attribute mapping.

## Example

```
curl -v 'https://developer.api.autodesk.com/construction/issues/v1/projects/:projectId/issue-attribute-mappings' \
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
      "id": "1110f111-6c54-4b01-90e6-d701748f1111",
      "attributeDefinitionId": "1110f111-6c54-4b01-90e6-d701748f1333",
      "containerId": "2220f222-6c54-4b01-90e6-d701748f0222",
      "mappedItemType": "issueType",
      "mappedItemId": "2220f222-6c54-4b01-90e6-d701748f0222",
      "order": 2,
      "permittedActions": [
        "delete"
      ],
      "permittedAttributes": [
        ""
      ],
      "createdAt": "2018-07-22T15:05:58.033Z",
      "createdBy": "A3RGM375QTZ7",
      "updatedAt": "2018-07-22T15:05:58.033Z",
      "updatedBy": "A3RGM375QTZ7",
      "deletedAt": "2018-07-22T15:05:58.033Z",
      "deletedBy": "A3RGM375QTZ7"
    }
  ]
}
```

## 같은 그룹의 다른 엔드포인트

- `GET /construction/issues/v1/projects/{projectId}/attachments/{issueId}/items` — [Retrieves all attachments for a specific issue in a project](./issues-attachments-issueId-items-GET.md)
- `POST /construction/issues/v1/projects/{projectId}/attachments` — [Adds attachments to an existing issue](./issues-attachments-POST.md)
- `GET /construction/issues/v1/projects/{projectId}/issues/{issueId}/comments` — [Get all the comments for a specific issue](./issues-comments-GET.md)
- `POST /construction/issues/v1/projects/{projectId}/issues/{issueId}/comments` — [Creates a new comment under a specific issue](./issues-comments-POST.md)
- `GET /construction/issues/v1/projects/{projectId}/issue-attribute-definitions` — [Issue Attribute Definitions](./issues-issue-attribute-definitions-GET.md)
- `GET /construction/issues/v1/projects/{projectId}/issue-root-cause-categories` — [Retrieves a list of supported root cause categories and root causes that you can allocate to an issue](./issues-issue-root-cause-categories-GET.md)
- `GET /construction/issues/v1/projects/{projectId}/issue-types` — [Retrieves a project’s categories and types](./issues-issue-types-GET.md)
- `GET /construction/issues/v1/projects/{projectId}/issues` — [Issues](./issues-issues-GET.md)
- `GET /construction/issues/v1/projects/{projectId}/issues/{issueId}` — [Retrieves detailed information about a single issue](./issues-issues-issueId-GET.md)
- `PATCH /construction/issues/v1/projects/{projectId}/issues/{issueId}` — [Updates an issue](./issues-issues-issueId-PATCH.md)
- `POST /construction/issues/v1/projects/{projectId}/issues` — [Adds an issue to a project](./issues-issues-POST.md)
- `DELETE /construction/issues/v1/projects/{projectId}/attachments/{issueId}/items/{attachmentId}` — [Deletes a specific attachment from an issue in a project](./issues-items-attachmentId-DELETE.md)
- `GET /construction/issues/v1/projects/{projectId}/users/me` — [Returns the current user permissions](./issues-users-me-GET.md)

---
원본 문서: https://aps.autodesk.com/en/docs/acc/v1/reference/http/issues-issue-attribute-mappings-GET
