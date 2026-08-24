---
operation_id: terrain-downloadterrainglb-GET
method: GET
path: /forma/terrain/v1alpha/terrains/{elementId}/revisions/{revision}/download
group: "terrain"
auth_context: user context optional
scopes: [data:read, data:write]
surface: http
verification: docs-only
---

# This endpoint is used to download a specific terrain GLB file by providing the terrain’s elementId and revision

```http
GET https://developer.api.autodesk.com/forma/terrain/v1alpha/terrains/{elementId}/revisions/{revision}/download
```

| | |
| --- | --- |
| **인증 컨텍스트** | user context optional |
| **필요 스코프** | `data:read`, `data:write` |
| **데이터 포맷** | JSON |
| **그룹** | terrain |

This endpoint is used to download a specific terrain GLB file by providing the terrain’s elementId and revision.

## 요청

### URI 파라미터

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `elementId` | string |  | ID of the element |
| `revision` | string |  | Revision |

### 쿼리 파라미터

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `authcontext` | string | **필수** | Provides the authcontext of the request, such as the forma project |

### 헤더

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `Authorization` | string | **필수** | Must be Bearer <token>, where <token> is obtained via either a two-legged or three-legged OAuth flow. |
| `X-Ads-Region` | string |  | Specifies the geographical location (region) of the service. US or EMEA. Defaults to US. |

## 응답

| 코드 | 의미 | 설명 |
| --- | --- | --- |
| `307` |  | Redirects to the terrain GLB file download location. |
| `400` | Bad Request | Error response |
| `403` | Forbidden | Unauthorized |
| `404` | Not Found | Error response |
| `500` | Internal Server Error | Error response |

## Example

```
curl -v 'https://developer.api.autodesk.com/forma/terrain/v1alpha/terrains/:elementId/revisions/:revision/download?authcontext=pro_123' \
  -H 'Authorization: Bearer AuIPTf4KYLTYGVnOHQ0cuolwCW2a'
```

## 같은 그룹의 다른 엔드포인트

- `POST /forma/terrain/v1alpha/terrains` — [This endpoint is used to create a new terrain and generate a link for uploading a gzipped terrain GLB file](./terrain-createterrain-POST.md)
- `PATCH /forma/terrain/v1alpha/terrains/{elementId}/revisions/{revision}` — [This endpoint is used to mark a specific terrain as uploaded by providing the terrain’s elementId and revision](./terrain-markterrainasuploaded-PATCH.md)

---
원본 문서: https://aps.autodesk.com/en/docs/forma/v1/reference/http-reference/terrain-downloadterrainglb-GET
