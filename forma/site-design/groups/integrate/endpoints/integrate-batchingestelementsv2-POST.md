---
operation_id: integrate-batchingestelementsv2-POST
method: POST
path: /forma/integrate/v2alpha/elements/batch-ingest
group: "integrate"
auth_context: user context required
scopes: [data:read, data:write]
surface: http
verification: docs-only
---

# The desired element URNs can optionally be specified

```http
POST https://developer.api.autodesk.com/forma/integrate/v2alpha/elements/batch-ingest
```

| | |
| --- | --- |
| **인증 컨텍스트** | user context required |
| **필요 스코프** | `data:read`, `data:write` |
| **데이터 포맷** | JSON |
| **그룹** | integrate |

The desired element URNs can optionally be specified.

## 요청

### 쿼리 파라미터

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `authcontext` | string | **필수** | Authcontext for the request, such as the Forma project context. |
| `s3Id` | string |  | If the payload for the request is larger than 6 MB it needs to be uploaded to S3 instead because AWS Lambda can only receive 6 MB. To do this make a GET request to /upload-link?authcontext=${authcontext}. You’ll get back an ID and a URL as JSON. First upload your payload by making a PUT request to the URL with your elements as the body. Then make a POST request with no body where s3Id is the ID you got from the request to /upload-link. |

### 헤더

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `Authorization` | string | **필수** | Must be Bearer <token>, where <token> is obtained via a three-legged OAuth flow. |
| `X-Ads-Region` | string |  | Specifies the geographical location (region) of the service. US or EMEA. Defaults to US. |
| `Content-Type` | string | **필수** | Must be application/json |

### 요청 본문

- `items` — `array` **(필수)**  
    List of items to create or update. Maximum 1000 items can be specified.
  - `oneOf` — `array:oneOf` **(필수)**
    - `create` — `object` **(필수)**
      - `operation` — `enum:string` **(필수)**  
          Will always be: create
      - `urn` — `string`  
          URN of the new element. The authcontext must match the current authcontext.
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
        - `*`
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
        - `urn` — `string` **(필수)**  
            URN of the new element. The authcontext must match the current authcontext.
        - `transform` — `array: number`  
            Standard 4 by 4 transformation matrix as a flat array of 16 numbers in column-major order.
        - `key` — `string`  
            A key must be unique within the same children list. Either all children must have keys specified or none of them. Max length: 40
    - `update` — `object` **(필수)**
      - `operation` — `enum:string` **(필수)**  
          Will always be: update
      - `urn` — `string` **(필수)**  
          Reference to the element to update.
      - `nextUrn` — `string`  
          URN of the new element. The authcontext must match the current authcontext.
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
          - `2`
      - `children` — `array: object`
        - `urn` — `string` **(필수)**  
            URN of the new element. The authcontext must match the current authcontext.
        - `transform` — `array: number`  
            Standard 4 by 4 transformation matrix as a flat array of 16 numbers in column-major order.
        - `key` — `string`  
            A key must be unique within the same children list. Either all children must have keys specified or none of them. Max length: 40

## 응답

| 코드 | 의미 | 설명 |
| --- | --- | --- |
| `201` | Created | The items in the response reflects the same order as in the input. Each item includes a reference to the new element. The response can be partial including failed items. |
| `400` | Bad Request | Malformed request. The request body is not valid according to the schema. See response for details. |
| `401` | Unauthorized | Bearer token is not valid |
| `403` | Forbidden | Token does not have access to the specified authcontext. Are you in the right region? |
| `500` | Internal Server Error | Internal server error |

### 응답 본문 (201)

- `items` — `array`  
    Each item in the response corresponds to the item with the same index in the request.
  - `oneOf` — `array:oneOf`
    - `ok` — `object`  
        Result for a successful operation.
      - `status` — `enum:string`  
          Will always be: ok
      - `urn` — `string`
    - `failed` — `object`  
        Result for a failed operation.
      - `status` — `enum:string`  
          Will always be: failed
      - `error` — `object`
        - `title` — `string`
        - `detail` — `string`
        - `errors` — `array: object`
          - `field` — `string`
          - `path` — `array`
          - `title` — `string`
          - `detail` — `string`

## Example

```
curl -v 'https://developer.api.autodesk.com/forma/integrate/v2alpha/elements/batch-ingest?authcontext=pro_123' \
  -X 'POST' \
  -H 'Authorization: Bearer AuIPTf4KYLTYGVnOHQ0cuolwCW2a' \
  -H 'Content-Type: application/json' \
  -d '{
        "items": [
          {
            "operation": "create",
            "urn": "urn:adsk-forma-elements:integrate:pro_example:f0c60b7b-d49f-43a1-9a34-a6834897f880:1719505510305",
            "metadata": {
              "licensing": {
                "exportable": true,
                "attributions": [
                  {
                    "action": "display",
                    "content": "Open City Model is made available by BuildZero.Org under the Open Database License",
                    "url": "http://opendatacommons.org/licenses/odbl/1.0/"
                  },
                  {
                    "action": "transfer",
                    "content": "Open City Model is made available by BuildZero.Org under the Open Database License",
                    "url": "http://opendatacommons.org/licenses/odbl/1.0/"
                  }
                ],
                "licenseUrl": "http://opendatacommons.org/licenses/odbl/1.0/",
                "providerDescriptionUrl": "https://github.com/opencitymodel/opencitymodel"
              },
              "predecessor": ""
            },
            "properties": {
              "category": "",
              "name": "",
              "internalRepresentationReference": "",
              "spacemakerObjectStorageReferences": [
                ""
              ],
              "geoReference": {
                "srid": "",
                "refPoint": {}
              },
              "elementProvider": ""
            },
            "representations": {},
            "children": [
              {
                "urn": "urn:adsk-forma-elements:integrate:pro_example:f0c60b7b-d49f-43a1-9a34-a6834897f880:1719505510305",
                "transform": [
                  ""
                ],
                "key": ""
              }
            ]
          }
        ]
      }'
```

```
{
  "items": [
    {
      "status": "ok",
      "urn": "urn:adsk-forma-elements:integrate:pro_example:f0c60b7b-d49f-43a1-9a34-a6834897f880:1719505510305"
    }
  ]
}
```

## 같은 그룹의 다른 엔드포인트

- `POST /forma/integrate/v1alpha/elements` — [Create an element with geometry](./integrate-createelementhierarchy-POST.md)
- `POST /forma/integrate/v2alpha/elements` — [To store a representation you need to first upload it to S3 by using the upload link endpoint](./integrate-createelementv2-POST.md)
- `GET /forma/integrate/v1alpha/upload-link` — [Useful for submitting element trees with more than 6MB of data](./integrate-getuploadlink-GET.md)
- `POST /forma/integrate/v2alpha/elements/{elementUrn}/update` — [Create a new element based on the existing element](./integrate-updateelementv2-POST.md)
- `POST /forma/integrate/v1alpha/elements/{elementId}` — [Creates a new element with a new revision under the specified element ID](./integrate-updateelementwithoutrevision-POST.md)

---
원본 문서: https://aps.autodesk.com/en/docs/forma/v1/reference/http-reference/integrate-batchingestelementsv2-POST
