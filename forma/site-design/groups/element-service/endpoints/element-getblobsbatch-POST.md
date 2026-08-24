---
operation_id: element-getblobsbatch-POST
method: POST
path: /forma/element-service/v1alpha/blobs-batch
group: "element-service"
auth_context: user context required
scopes: [data:read]
surface: http
verification: docs-only
---

# This operation can be used to retrieve multiple blobs at once, which helps reducing the number of API calls needed

```http
POST https://developer.api.autodesk.com/forma/element-service/v1alpha/blobs-batch
```

| | |
| --- | --- |
| **인증 컨텍스트** | user context required |
| **필요 스코프** | `data:read` |
| **데이터 포맷** | JSON |
| **그룹** | element-service |

This operation can be used to retrieve multiple blobs at once,
which helps reducing the number of API calls needed.

## 요청

### 쿼리 파라미터

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `authcontext` | string | **필수** | The authcontext of the resource you are requesting |

### 헤더

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `Authorization` | string | **필수** | Must be Bearer <token>, where <token> is obtained via a three-legged OAuth flow. |
| `X-Ads-Region` | string |  | Specifies the geographical location (region) of the service. US or EMEA. Defaults to US. |
| `Content-Type` | string | **필수** | Must be application/json |

### 요청 본문

- `items` — `array: string`  
    Each item value is a blob ID.

## 응답

| 코드 | 의미 | 설명 |
| --- | --- | --- |
| `200` | OK | At minimum the response will contain a field named metadata.json that includes references to other fields in the response. The content type of each individual field is ignored. The metadata.json must contain a valid JSON value, and the other fields are assumed to hold binary data as if it used application/octet-stream and parsed for whatever context the data is referred from. |
| `302` |  | Clients should follow redirects, as the response might be stored somewhere else |
| `400` | Bad Request | Bad request. The request body is not valid according to the schema. See response for details. |
| `401` | Unauthorized | Bearer token is not valid |
| `403` | Forbidden | Token does not have access to the specified project. Are you in the right region? |
| `500` | Internal Server Error | Internal server error |

## Example 1

```
curl -v 'https://developer.api.autodesk.com/forma/element-service/v1alpha/blobs-batch?authcontext=pro_abcd' \
  -X 'POST' \
  -H 'Authorization: Bearer AuIPTf4KYLTYGVnOHQ0cuolwCW2a'
  -d '{
      "items":[
        "basic:eyJ0eXBlIjoiZ2xiIiwiYmF0Y2hJZCI6ImVkMzFiZTI1LWM2NjYtNGUzMC1hYTVkLTZmYTY5MTg3OTkxNSIsInJldmlzaW9uIjoiMTcxNjk3MjYxMDMxMiJ9",
        "basic:eyJ0eXBlIjoiZ2xiIiwiYmF0Y2hJZCI6ImVkMzFiZTI1LWM2NjYtNGUzMC1hYTVkLTZmYTY5MTg3OTkxNSIsInJldmlzaW9uIjoiMTcxNjk3MjYwMDI1OSJ9"
      ]
    }'
```

```
Content-Length: 85587
Content-Type: multipart/form-data; boundary=----formdata-undici-030119948553
```

```
Content-Disposition: form-data; name="0"; filename="blob"
Content-Type: application/octet-stream

glTF  JSON{"asset":{"generator":"glTF-Transform v4.0.1","version":"2.0"},"accessors":[{"type":"VEC3","componentType":5126,"count":42,"max":[11.458879470825195,7.289392948150635,15.7844877243042],"min":[-11.458879470825195,-7.289392948150635,-15.7844877243042],"bufferView":0,"byteOffset":0}],"bufferViews":[{"buffer":0,"byteOffset":0,"byteLength":504,"byteStride":12,"target":34962}],"buffers":[{"byteLength":504}],"materials":[{"pbrMetallicRoughness":{"baseColorFactor":[0.9372549019607843,0.9372549019607843,0.9372549019607843,1]}}],"meshes":[{"name":"98e2a86d1e50d","primitives":[{"attributes":{"POSITION":0},"mode":4,"material":0}]}],"nodes":[{"name":"98e2a86d1e50d","mesh":0}],"scenes":[{"nodes":[0]}]}   REDACTED_BINARY_DATA
------formdata-undici-050918310317
Content-Disposition: form-data; name="1"; filename="blob"
Content-Type: application/octet-stream

glTF  JSON{"asset":{"generator":"glTF-Transform v4.0.1","version":"2.0"},"accessors":[{"type":"VEC3","componentType":5126,"count":42,"max":[18.803159713745117,8.189318656921387,15.363637924194336],"min":[-18.803159713745117,-8.189318656921387,-15.363637924194336],"bufferView":0,"byteOffset":0}],"bufferViews":[{"buffer":0,"byteOffset":0,"byteLength":504,"byteStride":12,"target":34962}],"buffers":[{"byteLength":504}],"materials":[{"pbrMetallicRoughness":{"baseColorFactor":[0.9372549019607843,0.9372549019607843,0.9372549019607843,1]}}],"meshes":[{"name":"58dd185117661","primitives":[{"attributes":{"POSITION":0},"mode":4,"material":0}]}],"nodes":[{"name":"58dd185117661","mesh":0}],"scenes":[{"nodes":[0]}]}  REDACTED_BINARY_DATA
------formdata-undici-050918310317
Content-Disposition: form-data; name="metadata.json"

{"results":{"basic:eyJ0eXBlIjoiZ2xiIiwiYmF0Y2hJZCI6ImVkMzFiZTI1LWM2NjYtNGUzMC1hYTVkLTZmYTY5MTg3OTkxNSIsInJldmlzaW9uIjoiMTcxNjk3MjYwMDI1OSJ9":{"responseFieldName":"0"},"basic:eyJ0eXBlIjoiZ2xiIiwiYmF0Y2hJZCI6ImVkMzFiZTI1LWM2NjYtNGUzMC1hYTVkLTZmYTY5MTg3OTkxNSIsInJldmlzaW9uIjoiMTcxNjk3MjYxMDMxMiJ9":{"responseFieldName":"1"}},"errors":{}}
------formdata-undici-050918310317--
```

## Example 2

```
async function getBlobs(blobIds: string[]) {
  const authcontext = encodeURIComponent("pro_abcde");
  const res = await fetch(
    `https://developer.api.autodesk.com/forma/element-service/v1alpha/blobs-batch?authcontext=${authcontext}`,
    {
      method: "POST",
      body: JSON.stringify({ items: blobIds }),
      headers: {
        Authorization: `Bearer <access-token>`,
        "X-Ads-Region": "EMEA",
      },
    },
  );
  if (!res.ok) {
    throw new Error("Failed to fetch blobs");
  }

  const formData = await res.formData();

  const metadataFile = formData.get("metadata.json");
  if (!metadataFile) {
    throw new Error("no metadata found");
  }

  const metadata = JSON.parse(typeof metadataFile === "string" ? metadataFile : await metadataFile.text()) as Metadata;

  const files = new Map<string, () => Promise<ArrayBuffer>>();
  formData.forEach((entry, key) => {
    if (key === "metadata.json") return;
    files.set(key, async () =>
      typeof entry === "string" ? textEncoder.encode(entry).buffer : await entry.arrayBuffer(),
    );
  });

  const blobIdToArrayBuffer = new Map<string, ArrayBuffer>();
  for (let [blobId, { responseFieldName }] of Object.entries(metadata.results)) {
    const getFile = files.get(responseFieldName);
    if (!getFile) {
      throw new Error("No file for blobId.");
    }
    const file = await getFile();
    blobIdToArrayBuffer.set(blobId, file);
  }
  return blobIdToArrayBuffer;
}
```

## metadata.json Structure

- `results` — `object`  
    Mapping from blob IDs to details.
  - `*` — `object`
    - `responseFieldName` — `string`  
        This is a reference to a specific field name in the multipart response.
- `errors` — `object`  
    Mapping from blob IDs to errors.
  - `*` — `object`
    - `code` — `enum:string`  
        Supported error codes are skipped, not_found and other. If the error code skipped is used, it means the element system was unable to process the requested item, and the client should issue another request for that item (optionally together with multiple others). This error code can be used in cases where the total size of the result or processing time exceeds a certain system-specific threshold, to ensure a valid partial response can be given. This must be expected for both elements and blobs batch operations. The client should repeat this process until either all items have been processed or the system only returns errors with this code. Possible values: skipped, not_found, other
    - `message` — `string`

## 같은 그룹의 다른 엔드포인트

- `GET /forma/element-service/v1alpha/blobs/{blobId}` — [Get blob](./element-getblob-GET.md)
- `GET /forma/element-service/v1alpha/elements/{urn}` — [Get element by urn](./element-getelement-GET.md)
- `POST /forma/element-service/v1alpha/elements-batch` — [Retrieve multiple elements](./element-getelementsbatch-POST.md)

---
원본 문서: https://aps.autodesk.com/en/docs/forma/v1/reference/http-reference/element-getblobsbatch-POST
