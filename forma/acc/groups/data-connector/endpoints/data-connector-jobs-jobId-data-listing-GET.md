---
operation_id: data-connector-jobs-jobId-data-listing-GET
method: GET
path: /data-connector/v1/accounts/{accountId}/jobs/{jobId}/data-listing
group: "Data Connector"
auth_context: user context required
scopes: [data:read]
surface: http
verification: docs-only
---

# Returns an array of information about the files contained within the data extract created by a specified job

```http
GET https://developer.api.autodesk.com/data-connector/v1/accounts/:accountId/jobs/:jobId/data-listing
```

| | |
| --- | --- |
| **인증 컨텍스트** | user context required |
| **필요 스코프** | `data:read` |
| **데이터 포맷** | JSON |
| **그룹** | Data Connector |

Returns an array of information about the files contained within the data extract created by a specified job. The job must be spawned by a data request that was created by the authenticated user. The user must have executive overview or project administrator permissions.

## 요청

### URI 파라미터

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `accountId` | string: UUID |  | The ID of the hub. To obtain the hub ID, call GET hubs in the Data Management API and remove the “b.” prefix. |
| `jobId` | string: UUID |  | The job ID |

### 헤더

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `Authorization` | string | **필수** | Must be Bearer <token>, where <token> is a three-legged access token obtained via an Authorization Code flow or a Secure Service Account (SSA) flow. The SSA flow is designed for headless server-to-server operations. While it functions like a two-legged flow (no user interaction), it is classified as three-legged because it preserves user context. |

## 응답

| 코드 | 의미 | 설명 |
| --- | --- | --- |
| `200` | OK | Successfully returned an array of information about data extract files for the specified job. |
| `400` | Bad Request | The parameters are invalid. |
| `401` | Unauthorized | The provided bearer token is invalid. |
| `403` | Forbidden | Forbidden. The user or service represented by the bearer token does not have permission to perform this operation. |
| `404` | Not Found | The resource or endpoint cannot be found. |
| `429` | Too Many Requests | Rate limited exceeded; wait some time before retrying. |
| `500` | Internal Server Error | An unexpected error occurred on the server. |
| `503` | Service Unavailable | Service unavailable. |

### 응답 본문 (200)

- `name` — `string`  
    The name of the file.
- `createdAt` — `datetime: ISO 8601`  
    The date and time the file was created, presented in ISO 8601 format.
- `size` — `int`  
    The size of the file in bytes.

## Example

```
curl -v 'https://developer.api.autodesk.com/data-connector/v1/accounts/:accountId/jobs/:jobId/data-listing' \
  -H 'Authorization: Bearer AuIPTf4KYLTYGVnOHQ0cuolwCW2a'
```

```
[
  {
    "name": "admin_companies.csv",
    "createdAt": "2020-11-06T19:09:40.106Z",
    "size": "123456"
  }
]
```

## 같은 그룹의 다른 엔드포인트

- `GET /data-connector/v1/accounts/{accountId}/jobs` — [Returns an array of Data Connector jobs spawned by requests from the authenticated user](./data-connector-jobs-GET.md)
- `GET /data-connector/v1/accounts/{accountId}/jobs/{jobId}/data/{name}` — [Returns a signed URL that you can contact to retrieve a single specified file from a specified job’s data extract](./data-connector-jobs-jobId-data-name-GET.md)
- `DELETE /data-connector/v1/accounts/{accountId}/jobs/{jobId}` — [Cancels the specified running job spawned by a data request created by the authenticated user](./data-connector-jobs-jobId-DELETE.md)
- `GET /data-connector/v1/accounts/{accountId}/jobs/{jobId}` — [Returns information about a specified job that was spawned by a data request created by the authenticated user](./data-connector-jobs-jobId-GET.md)
- `GET /data-connector/v1/accounts/{accountId}/requests` — [Returns an array of data requests that the authenticated user has created in the specified hub](./data-connector-requests-GET.md)
- `POST /data-connector/v1/accounts/{accountId}/requests` — [Creates a data request for an authenticated user](./data-connector-requests-POST.md)
- `DELETE /data-connector/v1/accounts/{accountId}/requests/{requestId}` — [Deletes the specified data request created earlier by the authenticated user](./data-connector-requests-requestId-DELETE.md)
- `GET /data-connector/v1/accounts/{accountId}/requests/{requestId}` — [Returns information about a specified data request created earlier by the authenticated user](./data-connector-requests-requestId-GET.md)
- `GET /data-connector/v1/accounts/{accountId}/requests/{requestId}/jobs` — [Returns an array of data connector jobs associated with a request that was created by the authenticated user](./data-connector-requests-requestId-jobs-GET.md)
- `PATCH /data-connector/v1/accounts/{accountId}/requests/{requestId}` — [Updates the attributes of an existing data request created earlier by the authenticated user](./data-connector-requests-requestId-PATCH.md)

---
원본 문서: https://aps.autodesk.com/en/docs/acc/v1/reference/http/data-connector-jobs-jobId-data-listing-GET
