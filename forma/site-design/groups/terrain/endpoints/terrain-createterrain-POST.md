---
operation_id: terrain-createterrain-POST
method: POST
path: /forma/terrain/v1alpha/terrains
group: "terrain"
auth_context: user context optional
scopes: [data:read, data:write]
surface: http
verification: docs-only
---

# This endpoint is used to create a new terrain and generate a link for uploading a gzipped terrain GLB file

```http
POST https://developer.api.autodesk.com/forma/terrain/v1alpha/terrains
```

| | |
| --- | --- |
| **인증 컨텍스트** | user context optional |
| **필요 스코프** | `data:read`, `data:write` |
| **데이터 포맷** | JSON |
| **그룹** | terrain |

This endpoint is used to create a new terrain and generate a link for uploading a gzipped terrain GLB file. Use HTTP PUT method for the upload.

## 요청

### 쿼리 파라미터

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `authcontext` | string | **필수** | Provides the authcontext of the request, such as the forma project |

### 헤더

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `Authorization` | string | **필수** | Must be Bearer <token>, where <token> is obtained via either a two-legged or three-legged OAuth flow. |
| `X-Ads-Region` | string |  | Specifies the geographical location (region) of the service. US or EMEA. Defaults to US. |
| `Content-Type` | string | **필수** | Must be application/json |

### 요청 본문

- `bbox3d` — `array` **(필수)**
- `licensing` — `object`
  - `attributions` — `array: object` **(필수)**
    - `action` — `enum:string` **(필수)**  
        Possible values: display, transfer
    - `content` — `string` **(필수)**
    - `url` — `string` **(필수)**
  - `exportable` — `boolean` **(필수)**
  - `licenseUrl` — `string` **(필수)**
  - `providerDescriptionUrl` — `string` **(필수)**

## 응답

| 코드 | 의미 | 설명 |
| --- | --- | --- |
| `201` | Created | Returns a terrain with a presigned s3 link for uploading a gzipped terrain glb. |
| `400` | Bad Request | Error response |
| `403` | Forbidden | Unauthorized |
| `404` | Not Found | Error response |
| `500` | Internal Server Error | Error response |

### 응답 본문 (201)

- `elementId` — `string`
- `presignedS3Url` — `string`  
    The URL to upload a gzipped terrain GLB file. Use HTTP PUT method for the upload.
- `revision` — `string`
- `urn` — `string`

## Example

```
curl -v 'https://developer.api.autodesk.com/forma/terrain/v1alpha/terrains?authcontext=pro_123' \
  -X 'POST' \
  -H 'Authorization: Bearer AuIPTf4KYLTYGVnOHQ0cuolwCW2a' \
  -H 'Content-Type: application/json' \
  -d '{
        "bbox3d": [
          [
            597982.5331297795,
            6643115.58486251,
            20.42
          ],
          [
            597982.5331297795,
            6643115.58486251,
            80.31
          ]
        ],
        "licensing": {}
      }'
```

```
{
  "elementId": "5d943f58-042f-453e-b605-df7217fc5a3f",
  "presignedS3Url": "https://terrain-element-store-local-bucket/pro_udf4s7j4tg/5d943f58-042f-453e-b605-df7217fc5a3f/1682339192328.glb",
  "revision": "1682339192328",
  "urn": "urn:adsk-forma-elements:terrain:pro_test:24c99081-1cbd-449b-9d11-34a8a89c67c3:1707486855123"
}
```

## 같은 그룹의 다른 엔드포인트

- `GET /forma/terrain/v1alpha/terrains/{elementId}/revisions/{revision}/download` — [This endpoint is used to download a specific terrain GLB file by providing the terrain’s elementId and revision](./terrain-downloadterrainglb-GET.md)
- `PATCH /forma/terrain/v1alpha/terrains/{elementId}/revisions/{revision}` — [This endpoint is used to mark a specific terrain as uploaded by providing the terrain’s elementId and revision](./terrain-markterrainasuploaded-PATCH.md)

---
원본 문서: https://aps.autodesk.com/en/docs/forma/v1/reference/http-reference/terrain-createterrain-POST
