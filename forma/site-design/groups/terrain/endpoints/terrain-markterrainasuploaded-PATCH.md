---
operation_id: terrain-markterrainasuploaded-PATCH
method: PATCH
path: /forma/terrain/v1alpha/terrains/{elementId}/revisions/{revision}
group: "terrain"
auth_context: user context optional
scopes: [data:read, data:write]
surface: http
verification: docs-only
---

# This endpoint is used to mark a specific terrain as uploaded by providing the terrain’s elementId and revision

```http
PATCH https://developer.api.autodesk.com/forma/terrain/v1alpha/terrains/{elementId}/revisions/{revision}
```

| | |
| --- | --- |
| **인증 컨텍스트** | user context optional |
| **필요 스코프** | `data:read`, `data:write` |
| **데이터 포맷** | JSON |
| **그룹** | terrain |

This endpoint is used to mark a specific terrain as uploaded by providing the terrain’s elementId and revision.

## 요청

### 헤더

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `Authorization` | string | **필수** | Must be Bearer <token>, where <token> is obtained via either a two-legged or three-legged OAuth flow. |
| `X-Ads-Region` | string |  | Specifies the geographical location (region) of the service. US or EMEA. Defaults to US. |

## 응답

| 코드 | 의미 | 설명 |
| --- | --- | --- |
| `200` | OK | Returns the updated terrain state. |
| `400` | Bad Request | Error response |
| `403` | Forbidden | Unauthorized |
| `404` | Not Found | Error response |
| `500` | Internal Server Error | Error response |

### 응답 본문 (200)

- `id` — `string`
- `revision` — `string`
- `state` — `enum:string`  
    Possible values: creating, patching, complete, failed

## Example

```
curl -v 'https://developer.api.autodesk.com/forma/terrain/v1alpha/terrains/:elementId/revisions/:revision' \
  -X 'PATCH' \
  -H 'Authorization: Bearer AuIPTf4KYLTYGVnOHQ0cuolwCW2a'
```

```
{
  "elementId": "5d943f58-042f-453e-b605-df7217fc5a3f",
  "revision": "1682339192328",
  "state": "complete"
}
```

## 같은 그룹의 다른 엔드포인트

- `POST /forma/terrain/v1alpha/terrains` — [This endpoint is used to create a new terrain and generate a link for uploading a gzipped terrain GLB file](./terrain-createterrain-POST.md)
- `GET /forma/terrain/v1alpha/terrains/{elementId}/revisions/{revision}/download` — [This endpoint is used to download a specific terrain GLB file by providing the terrain’s elementId and revision](./terrain-downloadterrainglb-GET.md)

---
원본 문서: https://aps.autodesk.com/en/docs/forma/v1/reference/http-reference/terrain-markterrainasuploaded-PATCH
