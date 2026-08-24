---
operation_id: element-getblob-GET
method: GET
path: /forma/element-service/v1alpha/blobs/{blobId}
group: "element-service"
auth_context: user context required
scopes: [data:read]
surface: http
verification: docs-only
---

# Get blob

```http
GET https://developer.api.autodesk.com/forma/element-service/v1alpha/blobs/{blobId}
```

| | |
| --- | --- |
| **인증 컨텍스트** | user context required |
| **필요 스코프** | `data:read` |
| **데이터 포맷** | JSON |
| **그룹** | element-service |

Get blob

## 요청

### URI 파라미터

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `blobId` | string |  |  |

### 쿼리 파라미터

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `authcontext` | string | **필수** | The authcontext of the resource you are requesting |

### 헤더

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `Authorization` | string | **필수** | Must be Bearer <token>, where <token> is obtained via a three-legged OAuth flow. |
| `X-Ads-Region` | string |  | Specifies the geographical location (region) of the service. US or EMEA. Defaults to US. |

## 응답

| 코드 | 의미 | 설명 |
| --- | --- | --- |
| `200` | OK | The data of the blob |
| `302` |  | Clients should follow redirects, as the response might be stored somewhere else |
| `400` | Bad Request | Bad request. The request body is not valid according to the schema. See response for details. |
| `401` | Unauthorized | Bearer token is not valid |
| `403` | Forbidden | Token does not have access to the specified project. Are you in the right region? |
| `404` | Not Found | The requested resource does not exist. See response for details. |
| `500` | Internal Server Error | Internal server error |

## Example

```
curl -v 'https://developer.api.autodesk.com/forma/element-service/v1alpha/blobs/:blobId' \
  -H 'Authorization: Bearer AuIPTf4KYLTYGVnOHQ0cuolwCW2a'
```

```
""
```

## 같은 그룹의 다른 엔드포인트

- `POST /forma/element-service/v1alpha/blobs-batch` — [This operation can be used to retrieve multiple blobs at once, which helps reducing the number of API calls needed](./element-getblobsbatch-POST.md)
- `GET /forma/element-service/v1alpha/elements/{urn}` — [Get element by urn](./element-getelement-GET.md)
- `POST /forma/element-service/v1alpha/elements-batch` — [Retrieve multiple elements](./element-getelementsbatch-POST.md)

---
원본 문서: https://aps.autodesk.com/en/docs/forma/v1/reference/http-reference/element-getblob-GET
