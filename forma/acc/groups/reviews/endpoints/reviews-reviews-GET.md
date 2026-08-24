---
operation_id: reviews-reviews-GET
method: GET
path: /construction/reviews/v1/projects/{projectId}/reviews
group: "Reviews"
auth_context: user context optional
scopes: [data:read]
surface: http
verification: docs-only
---

# Retrieves the list of reviews created in the specified project

```http
GET https://developer.api.autodesk.com/construction/reviews/v1/projects/{projectId}/reviews
```

| | |
| --- | --- |
| **인증 컨텍스트** | user context optional |
| **필요 스코프** | `data:read` |
| **데이터 포맷** | JSON |
| **그룹** | Reviews |

Retrieves the list of reviews created in the specified project.

## 요청

### URI 파라미터

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `projectId` | string: UUID |  | The ID of the project. Use the Data Management API to retrieve the project ID. For more information, see the Retrieve a Project ID tutorial. You can provide the project ID with or without the “b." prefix. - Example with prefix: b.563a4c30-e30d-4869-ac02-2a18b6447abe - Example without prefix: 563a4c30-e30d-4869-ac02-2a18b6447abe |

### 쿼리 파라미터

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `limit` | int |  | The maximum number of reviews to retrieve. Possible values: 1-50. Maximum: 50. Default: 50. For example: limit=2. |
| `offset` | int |  | The index of the first result to return (zero-based). Default: 0. For example: offset=10. |
| `sort` | string |  | Sorts the results by a single field. Use the format fieldName (ascending) or fieldName desc (descending). If no direction is specified, sorting defaults to ascending. Possible values: name, status, sequenceId, currentStepDueDate, createdAt, finishedAt. For example: sort=createdAt desc. |
| `filter[workflowId]` | string: UUID |  | Filter by a specific approval workflow ID in URL-encoded format. For example: filter[workflowId]=497f6eca-6276-4993-bfeb-53cbbbba6f08. |
| `filter[status]` | string |  | Filter by the review status in URL-encoded format. Possible values: OPEN, CLOSED, VOID, FAILED. For example: filter[status]=OPEN. Reviews with status FAILED are only visible to project administrators. |
| `filter[currentStepDueDate]` | string |  | Filter by the due date of the current review step in URL-encoded format. Provide a date range using the format startDate..endDate. Both values must be in ISO 8601 format. For example: filter[updatedAt]=2023-06-01..2023-06-30. |
| `filter[createdAt]` | string |  | Filter by review creation date in URL-encoded format. Provide a date range using the format startDate..endDate. Both values must be in ISO 8601 format. For example: filter[createdAt]=2023-06-01..2023-06-30 |
| `filter[updatedAt]` | string |  | Filter by the review’s last updated date in URL-encoded format. Provide a date range using the format startDate..endDate. Both values must be in ISO 8601 format. For example: filter[updatedAt]=2023-06-01..2023-06-30. |
| `filter[finishedAt]` | string |  | Filter by the date the review was finished, in URL-encoded format. Provide a date range using the format startDate..endDate. Both values must be in ISO 8601 format. For example: filter[finishedAt]=2023-06-01..2023-06-30. |
| `filter[nextActionByUser]` | string |  | Filter by Autodesk ID of a user responsible for the next action, in URL-encoded format. This includes reviews assigned directly to the user or to their role or company. For example: filter[nextActionByUser]=A96JX8NUKRLVFWSR. |
| `filter[nextActionByRole]` | string |  | Filter by Autodesk ID of a role responsible for the next action, in URL-encoded format. For example: filter[nextActionByRole]=1572818. |
| `filter[nextActionByCompany]` | string |  | Filter by Autodesk ID of a company responsible for the next action, in URL-encoded format. For example: filter[nextActionByCompany]=81768771. |
| `filter[name]` | string |  | Filter by review name in URL-encoded format. Retrieves reviews with names that contain the specified string (not case-sensitive). For example: filter[name]=Apartment retrieves reviews like Apartment Block A and apartment_rendering. |
| `filter[sequenceId]` | int |  | Filter by review sequence ID in URL-encoded format. Retrieves reviews with sequence IDs that partially match the specified number. For example: filter[sequenceId]=11 may retrieve 113 and 211. |
| `filter[archived]` | boolean |  | Filter by archive status in URL-encoded format. true: retrieves only archived reviews. false: retrieves only active (non-archived) reviews. If omitted, only active reviews are retrieved. For example: filter[archived]=false. |
| `filter[archivedBy]` | string |  | Filter by the Autodesk ID of the user who archived the review, in URL-encoded format. To find the ID, call GET users. It only takes effect when filter[archived]=true is also set. For example: filter[archivedBy]=A96JX8NUKRLVFWSR. |
| `filter[archivedAt]` | string |  | Filter by the date the review was archived, in URL-encoded format. It only applies if filter[archived]=true. Provide a date range using the format startDate..endDate. Both values must be in ISO 8601 format. For example: filter[archivedAt]=2023-06-01..2023-06-30. |
| `filter[approvedBy]` | string |  | Filter by the Autodesk ID of the user who submitted the final workflow step, in URL-encoded format. To find the ID, call GET users. Up to 10 Autodesk IDs, separated by commas. For example: filter[approvedBy]=A96JX8NUKRLVFWSR. |
| `filter[approvedAt]` | string |  | Filter by the date the final workflow step was submitted, in URL-encoded format. Provide a date range using the format startDate..endDate. Both values must be in ISO 8601 format. For example: filter[approvedAt]=2023-06-01..2023-06-30. |

### 헤더

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `Authorization` | string | **필수** | Must be Bearer <token>, where <token> is a two-legged access token obtained via a Client Credentials Grant flow, or a three-legged access token obtained via an Authorization Code flow or a Secure Service Account (SSA) flow. The SSA flow is designed for headless server-to-server operations. While it functions like a two-legged flow (no user interaction), it is classified as three-legged because it preserves user context. |
| `x-user-id` | string |  | The Autodesk ID of the user on whose behalf the request is made. Use this header to specify which user should be affected by the request. Your application must be configured to act on behalf of that user. This header is only required when using two-legged authentication. It is not needed for three-legged authentication. Only the user’s Autodesk ID (autodeskId) can be accepted. |

## 응답

| 코드 | 의미 | 설명 |
| --- | --- | --- |
| `200` | OK | Successfully retrieved the list of reviews |
| `400` | Bad Request | Bad request. The input parameters were invalid. |
| `401` | Unauthorized | Authentication failed. Required authentication headers are missing or invalid. |
| `403` | Forbidden | Forbidden. The user does not have permission to access this resource. |
| `404` | Not Found | Not found. The resource does not exist or is inaccessible. |
| `500` | Internal Server Error | An unexpected server error occurred. |

### 응답 본문 (200)

- `results` — `array: object`  
    A list of reviews matching the request parameters
  - `id` — `string: UUID`  
      The unique identifier of the review.
  - `sequenceId` — `int`  
      A unique, auto-incrementing number assigned to the review when it is first submitted. This ID does not change, even if the review is sent back to the initiator and goes through multiple rounds. It identifies the review within the project and reflects the order in which reviews were created.
  - `name` — `string`  
      The name of the review.
  - `status` — `enum:string`  
      The current status of the review. Possible values: OPEN, CLOSED, VOID, FAILED.
  - `currentStepId` — `string`  
      The ID of the current step in the review.
  - `currentStepDueDate` — `datetime: ISO 8601`  
      The due date of the current step.
  - `createdBy` — `object`  
      Information about the user who initiated the review.
    - `autodeskId` — `string`  
        The Autodesk ID of the initiator.
    - `name` — `string`  
        The name of the initiator.
  - `createdAt` — `datetime: ISO 8601`  
      The date time when the review was initiated.
  - `updatedAt` — `datetime: ISO 8601`  
      The date time when the review was last updated.
  - `finishedAt` — `datetime: ISO 8601`  
      The date time when the review was completed.
  - `archived` — `boolean`  
      Indicates whether the review has been archived. true: the review is archived. false: (default) the review is active.
  - `archivedBy` — `object`  
      Information about the user who archived the review.
    - `autodeskId` — `string`  
        The Autodesk ID of the archiver.
    - `name` — `string`  
        The name of the archiver.
  - `archivedAt` — `datetime: ISO 8601`  
      The date and time when the review was archived. If the review has not been archived, this value is null.
  - `approvedBy` — `object`  
      Information about the user who submitted the final workflow step. Returns an empty object if the review has not yet been final-approved.
    - `autodeskId` — `string`  
        The Autodesk ID of the final approver.
    - `name` — `string`  
        The name of the final approver.
  - `approvedAt` — `datetime: ISO 8601`  
      The date and time when the final workflow step was submitted. If the review has not yet been final-approved, this value is null.
  - `workflowId` — `string: UUID`  
      The unique identifier (UUID) of the approval workflow used to create this review.
  - `nextActionBy` — `object`  
      Information about the claimers and candidates responsible for the current step.
    - `claimedBy` — `array: object`  
        A list of users who have already claimed the current step.
      - `autodeskId` — `string`  
          The Autodesk ID of the user.
      - `name` — `string`  
          The name of the user.
    - `candidates` — `object`  
        Information about the users, roles, and companies who are eligible to take the next action in this step.
      - `roles` — `array: object`  
          Project roles that can act in this step.
        - `autodeskId` — `string`  
            The Autodesk ID of the role.
        - `name` — `string`  
            The name of the role.
      - `users` — `array: object`  
          Individual users who can act in this step.
        - `autodeskId` — `string`  
            The Autodesk ID of the user.
        - `name` — `string`  
            The name of the user.
      - `companies` — `array: object`  
          Companies that can act in this step.
        - `autodeskId` — `string`  
            The Autodesk ID of the company.
        - `name` — `string`  
            The name of the company.
- `pagination` — `object`  
    Metadata about the paginated results.
  - `limit` — `int`  
      The maximum number of results returned per page.
  - `offset` — `int`  
      The number of results skipped before the current page. Zero-based index.
  - `totalResults` — `int`  
      The total number of results that match the query, regardless of pagination.
  - `nextUrl` — `string`  
      The URL to retrieve the next page of reviews results, if any. If not included, this is the last page.

## Example

```
curl -v 'https://developer.api.autodesk.com/construction/reviews/v1/projects/563a4c30-e30d-4869-ac02-2a18b6447abe/reviews?limit=2&offset=10&sort=createdAt desc&filter[workflowId]=497f6eca-6276-4993-bfeb-53cbbbba6f08&filter[status]=OPEN&filter[currentStepDueDate]=2023-06-01..2023-06-30&filter[createdAt]=2023-06-01..2023-06-30&filter[updatedAt]=2023-06-01..2023-06-30&filter[finishedAt]=2023-06-01..2023-06-30&filter[nextActionByUser]=A96JX8NUKRLVFWSR&filter[nextActionByRole]=1572818&filter[nextActionByCompany]=81768771&filter[name]=Apartment&filter[sequenceId]=11&filter[archivedBy]=A96JX8NUKRLVFWSR&filter[archivedAt]=2023-06-01..2023-06-30&filter[approvedBy]=A96JX8NUKRLVFWSR,TTFMLCMCRG5F&filter[approvedAt]=2023-06-01..2023-06-30' \
  -H 'Authorization: Bearer AuIPTf4KYLTYGVnOHQ0cuolwCW2a'
```

```
{
  "results": [
    {
      "id": "37d5145b-c634-407c-b0b4-a65197e43fce",
      "sequenceId": 23,
      "name": "3rd Floor Design Review",
      "status": "OPEN",
      "currentStepId": "Lane_uJtTI3vjaF",
      "currentStepDueDate": "2024-11-09T01:42:16.600Z",
      "createdBy": {
        "autodeskId": "HWUBNU689CRU",
        "name": "James Smith"
      },
      "createdAt": "2024-11-06T01:42:17.476Z",
      "updatedAt": "2024-11-07T12:33:36.421Z",
      "finishedAt": "2024-11-10T02:33:17.336Z",
      "archived": false,
      "archivedBy": {
        "autodeskId": "TTFMLCMCRG5F",
        "name": "Tim Hudson"
      },
      "archivedAt": "2024-11-19T01:38:27.306Z",
      "approvedBy": {
        "autodeskId": "A96JX8NUKRLVFWSR",
        "name": "Tim Hudson"
      },
      "approvedAt": "2024-11-10T02:33:17.336Z",
      "workflowId": "0b43cedf-5c02-462b-8166-7dfbb13d3476",
      "nextActionBy": {
        "claimedBy": [
          {
            "autodeskId": "HWUBNU689CRU",
            "name": "James Smith"
          }
        ],
        "candidates": {
          "roles": [
            {
              "autodeskId": "1473817",
              "name": "Architect"
            }
          ],
          "users": [
            {
              "autodeskId": "HWUBNU689CRU",
              "name": "James Smith"
            }
          ],
          "companies": [
            {
              "autodeskId": "26980302",
              "name": "Autodesk Co. Ltd."
            }
          ]
        }
      }
    }
  ],
  "pagination": {
    "limit": 10,
    "offset": 0,
    "totalResults": 100,
    "nextUrl": "https://developer.api.autodesk.com/construction/reviews/v1/projects/497f6eca-6276-4993-bfeb-53cbbbba6f08/reviews?limit=50&offset=50"
  }
}
```

## 같은 그룹의 다른 엔드포인트

- `POST /construction/reviews/v1/projects/{projectId}/reviews` — [Creates a new review in the specified project using an existing approval workflow](./reviews-createreview-POST.md)
- `POST /construction/reviews/v1/projects/{projectId}/workflows` — [Creates a new approval workflow in the specified project](./reviews-createworkflow-POST.md)
- `GET /construction/reviews/v1/projects/{projectId}/reviews/{reviewId}` — [Retrieves a specific review in the specified project by review ID](./reviews-getreview-GET.md)
- `GET /construction/reviews/v1/projects/{projectId}/reviews/{reviewId}/progress` — [Retrieves the progress of a specific review in the specified project](./reviews-getreviewprogress-GET.md)
- `GET /construction/reviews/v1/projects/{projectId}/reviews/{reviewId}/versions` — [Retrieves the file versions included in the latest round of the specified review](./reviews-getreviewversions-GET.md)
- `GET /construction/reviews/v1/projects/{projectId}/reviews/{reviewId}/workflow` — [Retrieves the approval workflow associated with a specific review](./reviews-getreviewworkflow-GET.md)
- `GET /construction/reviews/v1/projects/{projectId}/versions/{versionId}/approval-statuses` — [Retrieves the full approval records and review references of a specific file version](./reviews-getversionapprovalstatuses-GET.md)
- `GET /construction/reviews/v1/projects/{projectId}/workflows/{workflowId}` — [Retrieves a specific approval workflow in the project by workflow ID](./reviews-getworkflow-GET.md)
- `GET /construction/reviews/v1/projects/{projectId}/workflows` — [Retrieves all approval workflows used for file reviews in a given project](./reviews-workflows-GET.md)

---
원본 문서: https://aps.autodesk.com/en/docs/acc/v1/reference/http/reviews-reviews-GET
