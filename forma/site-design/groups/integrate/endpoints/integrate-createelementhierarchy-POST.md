---
operation_id: integrate-createelementhierarchy-POST
method: POST
path: /forma/integrate/v1alpha/elements
group: "integrate"
auth_context: user context optional
scopes: [data:read, data:write]
surface: http
verification: docs-only
deprecated: true
---

# Create an element with geometry

> ⚠️ **DEPRECATED** — 이 엔드포인트는 더 이상 권장되지 않습니다.

```http
POST https://developer.api.autodesk.com/forma/integrate/v1alpha/elements
```

| | |
| --- | --- |
| **인증 컨텍스트** | user context optional |
| **필요 스코프** | `data:read`, `data:write` |
| **데이터 포맷** | JSON |
| **그룹** | integrate |

Create an element with geometry.

## 요청

### 쿼리 파라미터

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `authcontext` | string | **필수** | Authcontext for the request, such as the Forma project context. |
| `s3Id` | string |  | If the payload for the request is larger than 6 MB it needs to be uploaded to S3 instead because AWS Lambda can only receive 6 MB. To do this make a GET request to /upload-link?authcontext=${authcontext}. You’ll get back an ID and a URL as JSON. First upload your payload by making a PUT request to the URL with your elements as the body. Then make a POST request with no body where s3Id is the ID you got from the request to /upload-link. |

### 헤더

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `Authorization` | string | **필수** | Must be Bearer <token>, where <token> is obtained via either a two-legged or three-legged OAuth flow. |
| `X-Ads-Region` | string |  | Specifies the geographical location (region) of the service. US or EMEA. Defaults to US. |
| `Content-Type` | string | **필수** | Must be application/json |

### 요청 본문

- `rootElement` — `string` **(필수)**
- `elements` — `object` **(필수)**
  - `*` — `object` **(필수)**
    - `id` — `string` **(필수)**
    - `metadata` — `object`
      - `licensing` — `object`
        - `exportable` — `boolean` **(필수)**
        - `attributions` — `array: object` **(필수)**
          - `action` — `enum:string` **(필수)**  
              Possible values: display, transfer
          - `content` — `string` **(필수)**
          - `url` — `string` **(필수)**
        - `licenseUrl` — `string` **(필수)**
        - `providerDescriptionUrl` — `string` **(필수)**
      - `predecessor` — `string`
    - `properties` — `object`
      - `category` — `string`
      - `name` — `string`
      - `internalRepresentationReference` — `string`
      - `spacemakerObjectStorageReferences` — `array: string`
      - `geoReference` — `object`
        - `srid` — `number` **(필수)**
        - `refPoint` **(필수)**
          - `anyOf` **(필수)**
            - `0` — `array: number` **(필수)**
            - `1` — `array: number` **(필수)**
      - `elementProvider` — `string`
      - `geometry`
        - `anyOf`
          - `0` — `object`
            - `type` — `enum:string` **(필수)**  
                Will always be: File
            - `format` — `enum:string` **(필수)**  
                Will always be: glb
            - `s3Id` — `string: UUID` **(필수)**
            - `nodeId` — `string`
            - `doubleSided` — `boolean`
          - `1` — `object`
            - `type` — `enum:string` **(필수)**  
                Will always be: Inline
            - `format` — `enum:string` **(필수)**  
                Will always be: Mesh
            - `doubleSided` — `boolean`
            - `verts` — `array: number` **(필수)**
            - `faces` — `array: number` **(필수)**
          - `2` — `object`
            - `type` — `enum:string` **(필수)**  
                Will always be: Inline
            - `format` — `enum:string` **(필수)**  
                Will always be: GeoJSON
            - `geoJson` — `object` **(필수)**
              - `type` — `enum:string` **(필수)**  
                  Will always be: FeatureCollection
              - `features` — `array: object` **(필수)**
                - `id` — `string`
                - `type` — `enum:string` **(필수)**  
                    Will always be: Feature
                - `properties` — `object` **(필수)**
                  - `stroke`
                    - `anyOf`
                      - `0` — `string`
                      - `1` — `object`
                        - `color` — `string`
                        - `lineWidth` — `number`
                  - `stroke-width` — `number`
                  - `fill`
                    - `anyOf`
                      - `0` — `string`
                      - `1` — `object`
                        - `color` — `string`
                        - `opacity` — `number`
                  - `fill-opacity` — `number`
                - `geometry` — `one of` **(필수)**
                  - `0` — `object` **(필수)**
                    - `coordinates` — `array: array` **(필수)**
                    - `type` — `enum:string` **(필수)**  
                        Will always be: Polygon
                  - `1` — `object` **(필수)**
                    - `coordinates` — `array: array` **(필수)**
                    - `type` — `enum:string` **(필수)**  
                        Will always be: LineString
            - `nodeId` — `string`
          - `3` — `object`
            - `type` — `enum:string` **(필수)**  
                Will always be: File
            - `format` — `enum:string` **(필수)**  
                Will always be: GeoJSON
            - `s3Id` — `string: UUID` **(필수)**
            - `nodeId` — `string` **(필수)**
      - `color` — `object`
      - `opacity` — `object`
      - `stroke` — `object`
      - `areaStatsReps` — `object`
        - `grossFloorPolygonsV2` — `array: object`
          - `grossFloorPolygon` — `array: array` **(필수)**
          - `elevation` — `number` **(필수)**
          - `areaType` — `string`
      - `buildingFloors3DSketch_UNSTABLE` — `object`
      - `gfaUnits` — `array`
    - `representations` — `object`
      - `*` — `one of`
        - `linked` — `object`
          - `type` — `enum:string` **(필수)**  
              Will always be: linked
          - `blobId` — `string` **(필수)**  
              Use the upload links endpoint to get a blob ID. Data must be uploaded before the blob ID can be used.
          - `selection` — `one of`
            - `equals` — `object`
              - `type` — `enum:string` **(필수)**  
                  Will always be: equals
              - `value` — `string` **(필수)**
            - `startsWith` — `object`
              - `type` — `enum:string` **(필수)**  
                  Will always be: startsWith
              - `value` — `string` **(필수)**
          - `properties` — `object`
            - `*`
        - `embedded-json` — `object`
          - `type` — `enum:string` **(필수)**  
              Will always be: embedded-json
          - `data` — `object`  
              A maximum of approximately 100 KiB of JSON data can be provided. Use a linked representation if you risk exceeding this.
          - `selection` — `one of`
            - `equals` — `object`
              - `type` — `enum:string` **(필수)**  
                  Will always be: equals
              - `value` — `string` **(필수)**
            - `startsWith` — `object`
              - `type` — `enum:string` **(필수)**  
                  Will always be: startsWith
              - `value` — `string` **(필수)**
          - `properties` — `object`
            - `*`
    - `children` — `array: object`  
        Note that either all children must have keys specified or none of them
      - `id` — `string` **(필수)**
      - `transform` — `array: number`  
          Standard 4 by 4 transformation matrix as a flat array of 16 numbers in column-major order.
      - `key` — `string`  
          A key must be unique within the same children list Max length: 40

## 응답

| 코드 | 의미 | 설명 |
| --- | --- | --- |
| `200` | OK | Id and revision for the root of the newly created element tree |
| `400` | Bad Request | Malformed request. The request body is not valid according to the schema. See response for details. |
| `401` | Unauthorized | Bearer token is not valid |
| `403` | Forbidden | Token does not have access to the specified authcontext. Are you in the right region? |
| `500` | Internal Server Error | Internal server error |

### 응답 본문 (200)

- `urn` — `string`
- `id` — `string`
- `revision` — `string`

## Example

```
curl -v 'https://developer.api.autodesk.com/forma/integrate/v1alpha/elements?authcontext=pro_123' \
  -X 'POST' \
  -H 'Authorization: Bearer AuIPTf4KYLTYGVnOHQ0cuolwCW2a' \
  -H 'Content-Type: application/json' \
  -d '{
        "rootElement": "",
        "elements": {}
      }'
```

```
{
  "urn": "urn:adsk-forma-elements:integrate:pro_example:f0c60b7b-d49f-43a1-9a34-a6834897f880:1719505510305",
  "id": "",
  "revision": ""
}
```

## 같은 그룹의 다른 엔드포인트

- `POST /forma/integrate/v2alpha/elements/batch-ingest` — [The desired element URNs can optionally be specified](./integrate-batchingestelementsv2-POST.md)
- `POST /forma/integrate/v2alpha/elements` — [To store a representation you need to first upload it to S3 by using the upload link endpoint](./integrate-createelementv2-POST.md)
- `GET /forma/integrate/v1alpha/upload-link` — [Useful for submitting element trees with more than 6MB of data](./integrate-getuploadlink-GET.md)
- `POST /forma/integrate/v2alpha/elements/{elementUrn}/update` — [Create a new element based on the existing element](./integrate-updateelementv2-POST.md)
- `POST /forma/integrate/v1alpha/elements/{elementId}` — [Creates a new element with a new revision under the specified element ID](./integrate-updateelementwithoutrevision-POST.md)

---
원본 문서: https://aps.autodesk.com/en/docs/forma/v1/reference/http-reference/integrate-createelementhierarchy-POST
