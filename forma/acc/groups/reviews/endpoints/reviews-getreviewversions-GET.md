---
operation_id: reviews-getreviewversions-GET
method: GET
path: /construction/reviews/v1/projects/{projectId}/reviews/{reviewId}/versions
group: "Reviews"
auth_context: user context optional
scopes: [data:read]
surface: http
verification: docs-only
---

# Retrieves the file versions included in the latest round of the specified review

```http
GET https://developer.api.autodesk.com/construction/reviews/v1/projects/{projectId}/reviews/{reviewId}/versions
```

| | |
| --- | --- |
| **인증 컨텍스트** | user context optional |
| **필요 스코프** | `data:read` |
| **데이터 포맷** | JSON |
| **그룹** | Reviews |

Retrieves the file versions included in the latest round of the specified review.

## 요청

### URI 파라미터

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `projectId` | string: UUID |  | The ID of the project. Use the Data Management API to retrieve the project ID. For more information, see the Retrieve a Project ID tutorial. You can provide the project ID with or without the “b." prefix. - Example with prefix: b.563a4c30-e30d-4869-ac02-2a18b6447abe - Example without prefix: 563a4c30-e30d-4869-ac02-2a18b6447abe |
| `reviewId` | string: UUID |  | The unique ID of the review. It must be in UUID format — not the numeric sequence ID shown in the Reviews UI. To find the review ID, call GET reviews. |

### 쿼리 파라미터

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `limit` | int |  | The number of file versions to return in the response. Possible values: 1-50. Maximum: 50. Default: 50. For example: limit=2. |
| `offset` | int |  | The index of the first result to return (zero-based). Default: 0. For example: offset=10. |
| `filter[approveStatus]` | array |  | Filters the results based on the approval status assigned to each file during the review. It should be URL-encoded. The filter applies to the label of the approval status, as defined in the workflow — not the internal value. For example, if your workflow includes a status labeled Approved with comments, you would filter using that label: filter[approveStatus]=Approved with comments. This is especially useful when a workflow includes multiple approval options with customized labels. Note: It supports multiple values. For example, if you want to filter with 2 labels: both Approved and Rejected, you could filter with the query string: filter[approveStatus]=Approved&filter[approveStatus]=Rejected |

### 헤더

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `Authorization` | string | **필수** | Must be Bearer <token>, where <token> is a two-legged access token obtained via a Client Credentials Grant flow, or a three-legged access token obtained via an Authorization Code flow or a Secure Service Account (SSA) flow. The SSA flow is designed for headless server-to-server operations. While it functions like a two-legged flow (no user interaction), it is classified as three-legged because it preserves user context. |
| `x-user-id` | string |  | The Autodesk ID of the user on whose behalf the request is made. Use this header to specify which user should be affected by the request. Your application must be configured to act on behalf of that user. This header is only required when using two-legged authentication. It is not needed for three-legged authentication. Only the user’s Autodesk ID (autodeskId) can be accepted. |

## 응답

| 코드 | 의미 | 설명 |
| --- | --- | --- |
| `200` | OK | Successfully retrieved the file versions in the latest review round |
| `400` | Bad Request | Bad request. The input parameters were invalid. |
| `401` | Unauthorized | Authentication failed. Required authentication headers are missing or invalid. |
| `403` | Forbidden | Forbidden. The user does not have permission to access this resource. |
| `404` | Not Found | Not found. The resource does not exist or is inaccessible. |
| `500` | Internal Server Error | An unexpected server error occurred. |

### 응답 본문 (200)

- `results` — `array: object`  
    A list of file versions included in the latest round of the review.
  - `urn` — `string`  
      The URN of the file version currently under review. This value is used when retrieving the full approval and review history of a specific version. See GET approval-statuses for more details.
  - `itemUrn` — `string`  
      The URN of the file item this version belongs to.
  - `approveStatus` — `object`  
      The approval status assigned to the file during the review.
    - `id` — `string`  
        The ID of the approval status.
    - `label` — `string`  
        The custom label assigned to the approval status. Max length: 255
    - `value` — `enum:string`  
        The internal value representing the approval status outcome. Possible values: APPROVED, REJECTED.
  - `reviewContent` — `object`  
      Review-specific metadata related to the file version.
    - `name` — `string`  
        The pending file name assigned during the review. If the review is approved, this becomes the official version name. In most cases, this value is automatically generated according to the naming standard configured on the folder.
    - `customAttributes` — `array: object`  
        A list of custom attributes applied to the file during the review.
      - `id` — `int`  
          The ID of the attribute.
      - `type` — `enum:string`  
          The data type of the attribute. Possible values: string (text field), date, array (drop-down list), largeList (large drop-down list).
      - `name` — `string`  
          The name of the attribute.
      - `value` — `string`  
          The value of the attribute.
  - `copiedFileVersionUrn` — `string`  
      The URN of the version copied to the target folder after the file was approved. This field is only present if the workflow includes a copy action and the file was approved.
  - `name` — `string`  
      The name of the resulting file version.
- `pagination` — `object`  
    Metadata about the paginated results.
  - `limit` — `int`  
      The maximum number of results returned per page.
  - `offset` — `int`  
      The number of results skipped before the current page. Zero-based index.
  - `totalResults` — `int`  
      The total number of results that match the query, regardless of pagination.
  - `nextUrl` — `string`  
      The URL to retrieve the next page of file versions results, if any. If not included, this is the last page.

## Example

```
curl -v 'https://developer.api.autodesk.com/construction/reviews/v1/projects/563a4c30-e30d-4869-ac02-2a18b6447abe/reviews/73c8b3ec-eea2-4240-9c69-f9563e2fec0c/versions?limit=2&offset=10&filter[approveStatus]=Approved' \
  -H 'Authorization: Bearer AuIPTf4KYLTYGVnOHQ0cuolwCW2a'
```

```
{
  "results": [
    {
      "urn": "urn:adsk.wipprod:fs.file:vf.Zvg8qMkjQ26MBJjIA2ZjeU?version=1",
      "itemUrn": "urn:adsk.wipprod:dm.lineage:Zvg8qMkjQ26MBJjIA2ZjeU",
      "approveStatus": {
        "id": "f44e623d-f04f-47fe-8195-efc43d1d985b",
        "label": "Approved",
        "value": "APPROVED"
      },
      "reviewContent": {
        "name": "3rd Floor 3D Models (shared).pdf",
        "customAttributes": [
          {
            "id": 10272,
            "type": "string",
            "name": "Reference Document Number",
            "value": "X-3910-3DWA"
          }
        ]
      },
      "copiedFileVersionUrn": "urn:adsk.wipprod:fs.file:vf.Zvg8qMkjQ26MBJjIA2ZjeK?version=3",
      "name": "3rd Floor 3D Models.pdf"
    }
  ],
  "pagination": {
    "limit": 10,
    "offset": 0,
    "totalResults": 100,
    "nextUrl": "https://developer.api.autodesk.com/construction/reviews/v1/projects/497f6eca-6276-4993-bfeb-53cbbbba6f08/reviews/73c8b3ec-eea2-4240-9c69-f9563e2fec0c/versions?limit=10&offset=10"
  }
}
```

## 같은 그룹의 다른 엔드포인트

- `POST /construction/reviews/v1/projects/{projectId}/reviews` — [Creates a new review in the specified project using an existing approval workflow](./reviews-createreview-POST.md)
- `POST /construction/reviews/v1/projects/{projectId}/workflows` — [Creates a new approval workflow in the specified project](./reviews-createworkflow-POST.md)
- `GET /construction/reviews/v1/projects/{projectId}/reviews/{reviewId}` — [Retrieves a specific review in the specified project by review ID](./reviews-getreview-GET.md)
- `GET /construction/reviews/v1/projects/{projectId}/reviews/{reviewId}/progress` — [Retrieves the progress of a specific review in the specified project](./reviews-getreviewprogress-GET.md)
- `GET /construction/reviews/v1/projects/{projectId}/reviews/{reviewId}/workflow` — [Retrieves the approval workflow associated with a specific review](./reviews-getreviewworkflow-GET.md)
- `GET /construction/reviews/v1/projects/{projectId}/versions/{versionId}/approval-statuses` — [Retrieves the full approval records and review references of a specific file version](./reviews-getversionapprovalstatuses-GET.md)
- `GET /construction/reviews/v1/projects/{projectId}/workflows/{workflowId}` — [Retrieves a specific approval workflow in the project by workflow ID](./reviews-getworkflow-GET.md)
- `GET /construction/reviews/v1/projects/{projectId}/reviews` — [Retrieves the list of reviews created in the specified project](./reviews-reviews-GET.md)
- `GET /construction/reviews/v1/projects/{projectId}/workflows` — [Retrieves all approval workflows used for file reviews in a given project](./reviews-workflows-GET.md)

---
원본 문서: https://aps.autodesk.com/en/docs/acc/v1/reference/http/reviews-getreviewversions-GET
