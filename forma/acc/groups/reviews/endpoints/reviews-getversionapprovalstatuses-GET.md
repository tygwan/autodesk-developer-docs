---
operation_id: reviews-getversionapprovalstatuses-GET
method: GET
path: /construction/reviews/v1/projects/{projectId}/versions/{versionId}/approval-statuses
group: "Reviews"
auth_context: user context optional
scopes: [data:read]
surface: http
verification: docs-only
---

# Retrieves the full approval records and review references of a specific file version

```http
GET https://developer.api.autodesk.com/construction/reviews/v1/projects/{projectId}/versions/{versionId}/approval-statuses
```

| | |
| --- | --- |
| **인증 컨텍스트** | user context optional |
| **필요 스코프** | `data:read` |
| **데이터 포맷** | JSON |
| **그룹** | Reviews |

Retrieves the full approval records and review references of a specific file version.

## 요청

### URI 파라미터

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `projectId` | string: UUID |  | The ID of the project. Use the Data Management API to retrieve the project ID. For more information, see the Retrieve a Project ID tutorial. You can provide the project ID with or without the “b." prefix. - Example with prefix: b.563a4c30-e30d-4869-ac02-2a18b6447abe - Example without prefix: 563a4c30-e30d-4869-ac02-2a18b6447abe |
| `versionId` | string |  | The URL-encoded unique identifier (URN) of the file version whose review and approval history you want to retrieve. For example, encode urn:adsk.wipprod:fs.file:vf.Ibsc4cPuQEqBHRJdBjhr6w?version=2``as ``urn%3Aadsk.wipprod%3Afs.file%3Avf.Ibsc4cPuQEqBHRJdBjhr6w%3Fversion%3D2. To find the latest version, call GET versions and check the urn field. |

### 쿼리 파라미터

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `limit` | int |  | The maximum number of results to return in the response. Possible values: 1–50. Maximum: 50. Default: 50. For example: limit=2. |
| `offset` | int |  | The number of results to skip from the beginning of the list. Used for pagination. Default: 0. For example: offset=10. |

### 헤더

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `Authorization` | string | **필수** | Must be Bearer <token>, where <token> is a two-legged access token obtained via a Client Credentials Grant flow, or a three-legged access token obtained via an Authorization Code flow or a Secure Service Account (SSA) flow. The SSA flow is designed for headless server-to-server operations. While it functions like a two-legged flow (no user interaction), it is classified as three-legged because it preserves user context. |
| `x-user-id` | string |  | The Autodesk ID of the user on whose behalf the request is made. Use this header to specify which user should be affected by the request. Your application must be configured to act on behalf of that user. This header is only required when using two-legged authentication. It is not needed for three-legged authentication. Only the user’s Autodesk ID (autodeskId) can be accepted. |

## 응답

| 코드 | 의미 | 설명 |
| --- | --- | --- |
| `200` | OK | Successfully retrieved the review and approval history for the file version |
| `400` | Bad Request | Bad request. The input parameters were invalid. |
| `401` | Unauthorized | Authentication failed. Required authentication headers are missing or invalid. |
| `403` | Forbidden | Forbidden. The user does not have permission to access this resource. |
| `404` | Not Found | Not found. The resource does not exist or is inaccessible. |
| `500` | Internal Server Error | An unexpected server error occurred. |

### 응답 본문 (200)

- `results` — `array: object`  
    A list of approval statuses and related review information for the specified file version.
  - `approvalStatus` — `object`  
      The file’s approval status within a specific review.
    - `id` — `string`  
        The ID of the approval status option.
    - `label` — `string`  
        The custom text used to describe the approval status. Max length: 255
    - `value` — `enum:string`  
        The value of the approval status. Possible values: APPROVED, REJECTED, IN_REVIEW.
  - `review` — `object`  
      Metadata about the review in which this file version was included.
    - `id` — `string: UUID`  
        The ID of the review.
    - `sequenceId` — `int`  
        A unique, auto-incrementing number assigned to the review when it is first submitted. This ID does not change, even if the review is sent back to the initiator and goes through multiple rounds. It identifies the review within the project and reflects the order in which reviews were created.
    - `status` — `enum:string`  
        The current status of the review. Possible values: OPEN, CLOSED, VOID, FAILED.
- `pagination` — `object`  
    Metadata about the paginated results.
  - `limit` — `int`  
      The maximum number of results returned per page.
  - `offset` — `int`  
      The number of results skipped before the current page. Zero-based index.
  - `totalResults` — `int`  
      The total number of results that match the query, regardless of pagination.
  - `nextUrl` — `string`  
      The URL to retrieve the next page of file approval statuses results, if any. If not included, this is the last page.

## Example

```
curl -v 'https://developer.api.autodesk.com/construction/reviews/v1/projects/563a4c30-e30d-4869-ac02-2a18b6447abe/versions/urn%3Aadsk.wipprod%3Afs.file%3Avf.Ibsc4cPuQEqBHRJdBjhr6w%3Fversion%3D2/approval-statuses?limit=2&offset=10' \
  -H 'Authorization: Bearer AuIPTf4KYLTYGVnOHQ0cuolwCW2a'
```

```
{
  "results": [
    {
      "approvalStatus": {
        "id": "f44e623d-f04f-47fe-8195-efc43d1d985b",
        "label": "Approved",
        "value": "APPROVED"
      },
      "review": {
        "id": "37d5145b-c634-407c-b0b4-a65197e43fce",
        "sequenceId": 23,
        "status": "OPEN"
      }
    }
  ],
  "pagination": {
    "limit": 10,
    "offset": 0,
    "totalResults": 100,
    "nextUrl": "https://developer.api.autodesk.com/construction/reviews/v1/projects/497f6eca-6276-4993-bfeb-53cbbbba6f08/versions/urn%3Aadsk.wipprod%3Afs.file%3Avf.Ibsc4cPuQEqBHRJdBjhr6w%3Fversion%3D2/approval-statuses?limit=50&offset=50"
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
- `GET /construction/reviews/v1/projects/{projectId}/workflows/{workflowId}` — [Retrieves a specific approval workflow in the project by workflow ID](./reviews-getworkflow-GET.md)
- `GET /construction/reviews/v1/projects/{projectId}/reviews` — [Retrieves the list of reviews created in the specified project](./reviews-reviews-GET.md)
- `GET /construction/reviews/v1/projects/{projectId}/workflows` — [Retrieves all approval workflows used for file reviews in a given project](./reviews-workflows-GET.md)

---
원본 문서: https://aps.autodesk.com/en/docs/acc/v1/reference/http/reviews-getversionapprovalstatuses-GET
