---
operation_id: reviews-getreviewprogress-GET
method: GET
path: /construction/reviews/v1/projects/{projectId}/reviews/{reviewId}/progress
group: "Reviews"
auth_context: user context optional
scopes: [data:read]
surface: http
verification: docs-only
---

# Retrieves the progress of a specific review in the specified project

```http
GET https://developer.api.autodesk.com/construction/reviews/v1/projects/{projectId}/reviews/{reviewId}/progress
```

| | |
| --- | --- |
| **인증 컨텍스트** | user context optional |
| **필요 스코프** | `data:read` |
| **데이터 포맷** | JSON |
| **그룹** | Reviews |

Retrieves the progress of a specific review in the specified project.

## 요청

### URI 파라미터

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `projectId` | string: UUID |  | The ID of the project. Use the Data Management API to retrieve the project ID. For more information, see the Retrieve a Project ID tutorial. You can provide the project ID with or without the “b." prefix. - Example with prefix: b.563a4c30-e30d-4869-ac02-2a18b6447abe - Example without prefix: 563a4c30-e30d-4869-ac02-2a18b6447abe |
| `reviewId` | string: UUID |  | The unique ID of the review. This must be the UUID, not the numeric sequence ID shown in the Reviews UI. To find the review ID, call GET reviews. |

### 쿼리 파라미터

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `limit` | int |  | The maximum number of review-progress records to return. Valid range: 1–50. Default: 50. For example: limit=2. |
| `offset` | int |  | The zero-based index of the first record to return. Use with limit for pagination. Default: 0. For example: offset=10. |

### 헤더

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `Authorization` | string | **필수** | Must be Bearer <token>, where <token> is a two-legged access token obtained via a Client Credentials Grant flow, or a three-legged access token obtained via an Authorization Code flow or a Secure Service Account (SSA) flow. The SSA flow is designed for headless server-to-server operations. While it functions like a two-legged flow (no user interaction), it is classified as three-legged because it preserves user context. |
| `x-user-id` | string |  | The Autodesk ID of the user on whose behalf the request is made. Use this header to specify which user should be affected by the request. Your application must be configured to act on behalf of that user. This header is only required when using two-legged authentication. It is not needed for three-legged authentication. Only the user’s Autodesk ID (autodeskId) can be accepted. |

## 응답

| 코드 | 의미 | 설명 |
| --- | --- | --- |
| `200` | OK | The review progress was retrieved successfully. |
| `400` | Bad Request | Bad request. The input parameters were invalid. |
| `401` | Unauthorized | Authentication failed. Required authentication headers are missing or invalid. |
| `403` | Forbidden | Forbidden. The user does not have permission to access this resource. |
| `404` | Not Found | Not found. The resource does not exist or is inaccessible. |
| `500` | Internal Server Error | An unexpected server error occurred. |

### 응답 본문 (200)

- `results` — `array: object`  
    The list of review-progress records, returned in reverse chronological order.
  - `stepId` — `string`  
      The ID of the review step this progress record relates to.
  - `stepName` — `string`  
      The name of the review step this progress record relates to.
  - `claimedBy` — `object`  
      Information about the user who claimed the step.
    - `autodeskId` — `string`  
        The Autodesk ID of the user. To find details about the user, call GET users/:Id.
    - `name` — `string`  
        The name of the user.
  - `actionBy` — `object`  
      Information about the user recorded when the step status is SUBMITTED or VOID. In the Reviews UI, these statuses occur when a participant submits their decision or when a step is voided.
    - `autodeskId` — `string`  
        The Autodesk ID of the user. To find details about the user, call GET users/:Id.
    - `name` — `string`  
        The name of a user.
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
  - `endTime` — `datetime: ISO 8601`  
      The date and time when the step ended. This value is set when the step is completed, either by being submitted or voided.
  - `notes` — `string`  
      Additional information recorded for this step in the review’s progress.
  - `status` — `enum:string`  
      The current status of the step. Possible values: - CLAIMED: A user has claimed the step. - UNCLAIMED: No user has claimed the step. - SUBMITTED: A user submitted the step (e.g., approved/rejected/custom). - VOID: The step was voided.
- `pagination` — `object`  
    Metadata about the paginated results.
  - `limit` — `int`  
      The maximum number of results returned per page.
  - `offset` — `int`  
      The number of results skipped before the current page. Zero-based index.
  - `totalResults` — `int`  
      The total number of results that match the query, regardless of pagination.
  - `nextUrl` — `string`  
      The URL for the next page of results. If omitted, there are no more pages.

## Example

```
curl -v 'https://developer.api.autodesk.com/construction/reviews/v1/projects/563a4c30-e30d-4869-ac02-2a18b6447abe/reviews/73c8b3ec-eea2-4240-9c69-f9563e2fec0c/progress?limit=2&offset=10' \
  -H 'Authorization: Bearer AuIPTf4KYLTYGVnOHQ0cuolwCW2a'
```

```
{
  "results": [
    {
      "stepId": "Lane_uJtTI3vjaF",
      "stepName": "Reviewer",
      "claimedBy": {
        "autodeskId": "HWUBNU689CRU",
        "name": "James Smith"
      },
      "actionBy": {
        "autodeskId": "HWUBNU689CRU",
        "name": "James Smith"
      },
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
      },
      "endTime": "2024-11-19T01:38:27.306Z",
      "notes": "Please check all rebar annotations before approving. Include markup if changes are required.",
      "status": "CLAIMED"
    }
  ],
  "pagination": {
    "limit": 10,
    "offset": 0,
    "totalResults": 100,
    "nextUrl": "https://developer.api.autodesk.com/construction/reviews/v1/projects/497f6eca-6276-4993-bfeb-53cbbbba6f08/reviews/73c8b3ec-eea2-4240-9c69-f9563e2fec0c/progress?limit=10&offset=10"
  }
}
```

## 같은 그룹의 다른 엔드포인트

- `POST /construction/reviews/v1/projects/{projectId}/reviews` — [Creates a new review in the specified project using an existing approval workflow](./reviews-createreview-POST.md)
- `POST /construction/reviews/v1/projects/{projectId}/workflows` — [Creates a new approval workflow in the specified project](./reviews-createworkflow-POST.md)
- `GET /construction/reviews/v1/projects/{projectId}/reviews/{reviewId}` — [Retrieves a specific review in the specified project by review ID](./reviews-getreview-GET.md)
- `GET /construction/reviews/v1/projects/{projectId}/reviews/{reviewId}/versions` — [Retrieves the file versions included in the latest round of the specified review](./reviews-getreviewversions-GET.md)
- `GET /construction/reviews/v1/projects/{projectId}/reviews/{reviewId}/workflow` — [Retrieves the approval workflow associated with a specific review](./reviews-getreviewworkflow-GET.md)
- `GET /construction/reviews/v1/projects/{projectId}/versions/{versionId}/approval-statuses` — [Retrieves the full approval records and review references of a specific file version](./reviews-getversionapprovalstatuses-GET.md)
- `GET /construction/reviews/v1/projects/{projectId}/workflows/{workflowId}` — [Retrieves a specific approval workflow in the project by workflow ID](./reviews-getworkflow-GET.md)
- `GET /construction/reviews/v1/projects/{projectId}/reviews` — [Retrieves the list of reviews created in the specified project](./reviews-reviews-GET.md)
- `GET /construction/reviews/v1/projects/{projectId}/workflows` — [Retrieves all approval workflows used for file reviews in a given project](./reviews-workflows-GET.md)

---
원본 문서: https://aps.autodesk.com/en/docs/acc/v1/reference/http/reviews-getreviewprogress-GET
