---
operation_id: data-connector-jobs-jobId-data-name-GET
method: GET
path: /data-connector/v1/accounts/{accountId}/jobs/{jobId}/data/{name}
group: "Data Connector"
auth_context: user context required
scopes: [data:read]
surface: http
verification: docs-only
---

# Returns a signed URL that you can contact to retrieve a single specified file from a specified job’s data extract

```http
GET https://developer.api.autodesk.com/data-connector/v1/accounts/:accountId/jobs/:jobId/data/:name
```

| | |
| --- | --- |
| **인증 컨텍스트** | user context required |
| **필요 스코프** | `data:read` |
| **데이터 포맷** | JSON |
| **그룹** | Data Connector |

Returns a signed URL that you can contact to retrieve a single specified file from a specified job’s data extract. You can examine a data extract’s available files, their names, and their sizes using GET jobs/:jobId/data-listing. The information it returns can help you plan what you would like to retrieve using this endpoint, useful if you want to retrieve only part of a data extract to avoid downloading large but unnecessary files. The user must have executive overview or project administrator permissions.

## 요청

### URI 파라미터

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `accountId` | string: UUID |  | The ID of the hub. To obtain the hub ID, call GET hubs in the Data Management API and remove the “b.” prefix. |
| `jobId` | string: UUID |  | The job ID |
| `name` | string: UUID |  | Name of the file to retrieve |

### 헤더

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `Authorization` | string | **필수** | Must be Bearer <token>, where <token> is a three-legged access token obtained via an Authorization Code flow or a Secure Service Account (SSA) flow. The SSA flow is designed for headless server-to-server operations. While it functions like a two-legged flow (no user interaction), it is classified as three-legged because it preserves user context. |

## 응답

| 코드 | 의미 | 설명 |
| --- | --- | --- |
| `200` | OK | Successfully set up a job extract file for retrieval from a returned signed URL |
| `400` | Bad Request | The parameters are invalid. |
| `401` | Unauthorized | The provided bearer token is invalid. |
| `403` | Forbidden | Forbidden. The user or service represented by the bearer token does not have permission to perform this operation. |
| `404` | Not Found | The resource or endpoint cannot be found. |
| `429` | Too Many Requests | Rate limited exceeded; wait some time before retrying. |
| `500` | Internal Server Error | An unexpected error occurred on the server. |
| `503` | Service Unavailable | Service unavailable. |

### 응답 본문 (200)

- `size` — `int`  
    The size of the file in bytes.
- `name` — `string`  
    The name of the file.
- `signedUrl` — `string`  
    The signed URL to contact to download the specified file. Note that this URL will be valid for 60 seconds from the time of this response.

## Example

```
curl -v 'https://developer.api.autodesk.com/data-connector/v1/accounts/:accountId/jobs/:jobId/data/:name' \
  -H 'Authorization: Bearer AuIPTf4KYLTYGVnOHQ0cuolwCW2a'
```

```
{
  "size": "123456",
  "name": "admin_companies.csv",
  "signedUrl": "https://bim360dc-p-ue1-extracts.s3.amazonaws.com/data/9be6b2cd-e9e8-4861-aa45-c96668a9f6bd/d023d0cf-b603-4de9-b240-a0e8a85bbf8d/autodesk_data_extract.zip?AWSAccessKeyId=ASIAWZ7KRFT5TZSCKIYO&Expires=1604690406&Signature=cb5HR%2FthOATYIAqW41ojbfptMsM%3D&x-amz-security-token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIHQdYa9Z%2BhS3u5EmRfEoz1KFwm2xCvLK6pH1Go2q88%2BWAiEAy7KMbb%2FKBww1XWxR0B%2FepB0Syt6jOhXTahznLrCWKcYq2gEIHBACGgw0NjgxMDY0MjM1NDciDHewqYuFoS8GY2PlZCq3AZG8jsIKx5egqYARC2N%2F7%2B72nkATTV6PwomhMOsAb9eZhIBCR%2F861wvtM1%2B4gEfu8LN9gWMNI%2BvmHcWC92kC1lujXM1Klpq8KksSxN8%2Bt5aurFPwZ465iespRnEHKB7jX2KUzCVDPCpZ7NDTvcsy0TdqLU82L0p%2Bw6fTT0QhGuykRuhn%2FURLbtzVHvx4wi3R2kSEJ9DWGkAaWR96h76vCFDaC9o2VmLEjKww88YunnYKQcAqIhGEBTD2vpb9BTrgAVGy7Cavc8LDgwuoS7LBt%2FmE6iPohyfILcksPL5NYl3yvaUhYW%2FX9w1mgLgpnuEt4rcdcrUOTcOdjRFmqvA9%2FVPFXD%2FCWxzDRU6V3U%2BC1dZi5Y4lV3AfodZyhsJI9aSkX2D0xDMpuV%2FDiX0HyCCVk3awuCQDfPtlWqbMVzW9zzO5d6JBThIIxdEGq1Nwe677anh1WQGY%2Fuemcc4fyZRTx%2Br0i%2B8Z35YtR0pEKfvp7GQhV7d%2FSfh%2FYL58QMvvciH4yBqkcMba8SwDJQQV03Q%2FrQX2vqVOq%2BSFCijaXalvPjQp"
}
```

## 같은 그룹의 다른 엔드포인트

- `GET /data-connector/v1/accounts/{accountId}/jobs` — [Returns an array of Data Connector jobs spawned by requests from the authenticated user](./data-connector-jobs-GET.md)
- `GET /data-connector/v1/accounts/{accountId}/jobs/{jobId}/data-listing` — [Returns an array of information about the files contained within the data extract created by a specified job](./data-connector-jobs-jobId-data-listing-GET.md)
- `DELETE /data-connector/v1/accounts/{accountId}/jobs/{jobId}` — [Cancels the specified running job spawned by a data request created by the authenticated user](./data-connector-jobs-jobId-DELETE.md)
- `GET /data-connector/v1/accounts/{accountId}/jobs/{jobId}` — [Returns information about a specified job that was spawned by a data request created by the authenticated user](./data-connector-jobs-jobId-GET.md)
- `GET /data-connector/v1/accounts/{accountId}/requests` — [Returns an array of data requests that the authenticated user has created in the specified hub](./data-connector-requests-GET.md)
- `POST /data-connector/v1/accounts/{accountId}/requests` — [Creates a data request for an authenticated user](./data-connector-requests-POST.md)
- `DELETE /data-connector/v1/accounts/{accountId}/requests/{requestId}` — [Deletes the specified data request created earlier by the authenticated user](./data-connector-requests-requestId-DELETE.md)
- `GET /data-connector/v1/accounts/{accountId}/requests/{requestId}` — [Returns information about a specified data request created earlier by the authenticated user](./data-connector-requests-requestId-GET.md)
- `GET /data-connector/v1/accounts/{accountId}/requests/{requestId}/jobs` — [Returns an array of data connector jobs associated with a request that was created by the authenticated user](./data-connector-requests-requestId-jobs-GET.md)
- `PATCH /data-connector/v1/accounts/{accountId}/requests/{requestId}` — [Updates the attributes of an existing data request created earlier by the authenticated user](./data-connector-requests-requestId-PATCH.md)

---
원본 문서: https://aps.autodesk.com/en/docs/acc/v1/reference/http/data-connector-jobs-jobId-data-name-GET
