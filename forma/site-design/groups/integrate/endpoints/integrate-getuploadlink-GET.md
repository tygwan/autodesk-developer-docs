---
operation_id: integrate-getuploadlink-GET
method: GET
path: /forma/integrate/v1alpha/upload-link
group: "integrate"
auth_context: user context optional
scopes: [data:read, data:write]
surface: http
verification: docs-only
---

# Useful for submitting element trees with more than 6MB of data

```http
GET https://developer.api.autodesk.com/forma/integrate/v1alpha/upload-link
```

| | |
| --- | --- |
| **인증 컨텍스트** | user context optional |
| **필요 스코프** | `data:read`, `data:write` |
| **데이터 포맷** | JSON |
| **그룹** | integrate |

Useful for submitting element trees with more than 6MB of data

## 요청

### 쿼리 파라미터

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `authcontext` | string | **필수** | Authcontext for the request, such as the Forma project context. |

### 헤더

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `Authorization` | string | **필수** | Must be Bearer <token>, where <token> is obtained via either a two-legged or three-legged OAuth flow. |
| `X-Ads-Region` | string |  | Specifies the geographical location (region) of the service. US or EMEA. Defaults to US. |

## 응답

| 코드 | 의미 | 설명 |
| --- | --- | --- |
| `200` | OK | Id of upload, and corresponding upload URL |
| `400` | Bad Request | Malformed request. The request body is not valid according to the schema. See response for details. |
| `401` | Unauthorized | Bearer token is not valid |
| `403` | Forbidden | Token does not have access to the specified authcontext. Are you in the right region? |
| `500` | Internal Server Error | Internal server error |

### 응답 본문 (200)

- `id` — `string`
- `url` — `string`
- `blobId` — `string`

## Example

```
curl -v 'https://developer.api.autodesk.com/forma/integrate/v1alpha/upload-link?authcontext=pro_123' \
  -H 'Authorization: Bearer AuIPTf4KYLTYGVnOHQ0cuolwCW2a'
```

```
{
  "id": "",
  "url": "",
  "blobId": ""
}
```

## 같은 그룹의 다른 엔드포인트

- `POST /forma/integrate/v2alpha/elements/batch-ingest` — [The desired element URNs can optionally be specified](./integrate-batchingestelementsv2-POST.md)
- `POST /forma/integrate/v1alpha/elements` — [Create an element with geometry](./integrate-createelementhierarchy-POST.md)
- `POST /forma/integrate/v2alpha/elements` — [To store a representation you need to first upload it to S3 by using the upload link endpoint](./integrate-createelementv2-POST.md)
- `POST /forma/integrate/v2alpha/elements/{elementUrn}/update` — [Create a new element based on the existing element](./integrate-updateelementv2-POST.md)
- `POST /forma/integrate/v1alpha/elements/{elementId}` — [Creates a new element with a new revision under the specified element ID](./integrate-updateelementwithoutrevision-POST.md)

---
원본 문서: https://aps.autodesk.com/en/docs/forma/v1/reference/http-reference/integrate-getuploadlink-GET
