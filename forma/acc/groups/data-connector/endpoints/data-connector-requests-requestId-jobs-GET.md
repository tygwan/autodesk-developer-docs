---
operation_id: data-connector-requests-requestId-jobs-GET
method: GET
path: /data-connector/v1/accounts/{accountId}/requests/{requestId}/jobs
group: "Data Connector"
auth_context: user context required
scopes: [data:read]
surface: http
verification: docs-only
---

# Returns an array of data connector jobs associated with a request that was created by the authenticated user

```http
GET https://developer.api.autodesk.com/data-connector/v1/accounts/:accountId/requests/:requestId/jobs
```

| | |
| --- | --- |
| **인증 컨텍스트** | user context required |
| **필요 스코프** | `data:read` |
| **데이터 포맷** | JSON |
| **그룹** | Data Connector |

Returns an array of data connector jobs associated with a request that was created by the authenticated user. The user must have project administrator or executive overview permissions.

## 요청

### URI 파라미터

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `accountId` | string: UUID |  | The ID of the hub. To obtain the hub ID, call GET hubs in the Data Management API and remove the “b.” prefix. |
| `requestId` | string: UUID |  | The ID of the specified request |

### 쿼리 파라미터

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `sort` | string |  | The sort order of returned data connector objects. Possible values: asc ascending by date (earliest to latest date), desc descending by date (latest to earliest date). |
| `limit` | int |  | The number of data connector objects to return. Default value: 20 |
| `offset` | int |  | The number of data objects to skip before starting to starting to collect the result set. Default value: 0 |

### 헤더

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `Authorization` | string | **필수** | Must be Bearer <token>, where <token> is a three-legged access token obtained via an Authorization Code flow or a Secure Service Account (SSA) flow. The SSA flow is designed for headless server-to-server operations. While it functions like a two-legged flow (no user interaction), it is classified as three-legged because it preserves user context. |

## 응답

| 코드 | 의미 | 설명 |
| --- | --- | --- |
| `200` | OK | Successfully retrieved an array of jobs associated with the specified data request. |
| `400` | Bad Request | The parameters are invalid. |
| `401` | Unauthorized | The provided bearer token is invalid. |
| `403` | Forbidden | Forbidden. The user or service represented by the bearer token does not have permission to perform this operation. |
| `404` | Not Found | The resource or endpoint cannot be found. |
| `429` | Too Many Requests | Rate limited exceeded; wait some time before retrying. |
| `500` | Internal Server Error | An unexpected error occurred on the server. |
| `503` | Service Unavailable | Service unavailable. |

### 응답 본문 (200)

- `pagination` — `object`  
    Information about the pagination used to return the results array.
  - `limit` — `int`  
      The specified upper limit of results to return.
  - `offset` — `int`  
      The specified number of results skipped before the results in this array were collected.
  - `totalResults` — `int`  
      The total number of results returned here.
- `results` — `array: object`  
    An array of job records.
  - `id` — `string: UUID`  
      The job ID.
  - `requestId` — `string: UUID`  
      The ID of the data request that spawned the job.
  - `accountId` — `string: UUID`  
      The hub ID.
  - `projectId` — `string: UUID`  
      The project ID.
  - `projectIdList` — `array: string`  
      The list of project IDs
  - `createdBy` — `string`  
      The BIM 360 / Forma user ID of the user who created the data request that spawned this job.
  - `createdByEmail` — `string`  
      The email address of the user who created the data request that spawned this job.
  - `createdAt` — `datetime: ISO 8601`  
      The date and time the job was created, presented in ISO 8601 format.
  - `status` — `string`  
      The current status of the job. Possible values: queued, running, complete.
  - `completionStatus` — `string`  
      The completion status for completed jobs. Possible values: success, failed, cancelled.
  - `startedAt` — `datetime: ISO 8601`  
      The date and time the job was started, presented in ISO 8601 format. If the job has not yet started, the value is null.
  - `completedAt` — `datetime: ISO 8601`  
      The date and time the job was completed, presented in ISO 8601 format. If the job has not yet completed, the value is null.
  - `sendEmail` — `boolean`  
      Send a notification email when the job completes.
  - `progress` — `int`  
      Job progress indicator (0 to 100 percent)
  - `lastDownloadedBy` — `string`  
      The ID of the user who last downloaded this job data.
  - `lastDownloadedAt` — `datetime: ISO 8601`  
      The last date and time that a user downloaded this job data, in ISO 8601 format.
  - `startDate` — `string`  
      The start date and time for the data extraction, in ISO 8601 format. This field applies only to schemas that support date range extraction. The detailed schema documentation delivered with each data extract identifies the schemas and tables that support date range extraction.
  - `endDate` — `string`  
      The end date and time for the data extraction, in ISO 8601 format. This field applies only to schemas that support date range extraction. The detailed schema documentation delivered with each data extract identifies the schemas and tables that support date range extraction.

## Example

```
curl -v 'https://developer.api.autodesk.com/data-connector/v1/accounts/:accountId/requests/:requestId/jobs?sort=asc&limit=20&offset=0' \
  -H 'Authorization: Bearer AuIPTf4KYLTYGVnOHQ0cuolwCW2a'
```

```
{
  "pagination": {
    "limit": 20,
    "offset": 0,
    "totalResults": 100
  },
  "results": [
    {
      "id": "ce9bc188-1e18-11eb-adc1-0242ac120002",
      "requestId": "a5a8e90f-3dbe-4b08-9b8e-16e8049ce31e",
      "accountId": "f9abf4c8-1f51-4b26-a6b7-6ac0639cb138",
      "projectId": null,
      "projectIdList": "[ \"ffffffff-1f51-4b26-a6b7-6ac0639cb138\", \"aaaaaaaa-1f51-4b26-a6b7-6ac0639cb138\" ]",
      "createdBy": "ABCDEFGHI",
      "createdByEmail": "joe.user@mycompany.com",
      "createdAt": "2020-11-06T19:09:40.106Z",
      "status": "complete",
      "completionStatus": "success",
      "startedAt": "2020-11-06T19:10:00.106Z",
      "completedAt": "2020-11-06T19:29:40.106Z",
      "sendEmail": true,
      "progress": "",
      "lastDownloadedBy": "joe.user@mycompany.com",
      "lastDownloadedAt": "2021-11-06T19:09:40.106Z",
      "startDate": "2023-06-06T00:00:00.000Z",
      "endDate": "2023-06-06T12:00:00.000Z"
    }
  ]
}
```

## 같은 그룹의 다른 엔드포인트

- `GET /data-connector/v1/accounts/{accountId}/jobs` — [Returns an array of Data Connector jobs spawned by requests from the authenticated user](./data-connector-jobs-GET.md)
- `GET /data-connector/v1/accounts/{accountId}/jobs/{jobId}/data-listing` — [Returns an array of information about the files contained within the data extract created by a specified job](./data-connector-jobs-jobId-data-listing-GET.md)
- `GET /data-connector/v1/accounts/{accountId}/jobs/{jobId}/data/{name}` — [Returns a signed URL that you can contact to retrieve a single specified file from a specified job’s data extract](./data-connector-jobs-jobId-data-name-GET.md)
- `DELETE /data-connector/v1/accounts/{accountId}/jobs/{jobId}` — [Cancels the specified running job spawned by a data request created by the authenticated user](./data-connector-jobs-jobId-DELETE.md)
- `GET /data-connector/v1/accounts/{accountId}/jobs/{jobId}` — [Returns information about a specified job that was spawned by a data request created by the authenticated user](./data-connector-jobs-jobId-GET.md)
- `GET /data-connector/v1/accounts/{accountId}/requests` — [Returns an array of data requests that the authenticated user has created in the specified hub](./data-connector-requests-GET.md)
- `POST /data-connector/v1/accounts/{accountId}/requests` — [Creates a data request for an authenticated user](./data-connector-requests-POST.md)
- `DELETE /data-connector/v1/accounts/{accountId}/requests/{requestId}` — [Deletes the specified data request created earlier by the authenticated user](./data-connector-requests-requestId-DELETE.md)
- `GET /data-connector/v1/accounts/{accountId}/requests/{requestId}` — [Returns information about a specified data request created earlier by the authenticated user](./data-connector-requests-requestId-GET.md)
- `PATCH /data-connector/v1/accounts/{accountId}/requests/{requestId}` — [Updates the attributes of an existing data request created earlier by the authenticated user](./data-connector-requests-requestId-PATCH.md)

---
원본 문서: https://aps.autodesk.com/en/docs/acc/v1/reference/http/data-connector-requests-requestId-jobs-GET
