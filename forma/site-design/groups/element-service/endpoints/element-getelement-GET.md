---
operation_id: element-getelement-GET
method: GET
path: /forma/element-service/v1alpha/elements/{urn}
group: "element-service"
auth_context: user context required
scopes: [data:read]
surface: http
verification: docs-only
---

# Get element by urn

```http
GET https://developer.api.autodesk.com/forma/element-service/v1alpha/elements/{urn}
```

| | |
| --- | --- |
| **인증 컨텍스트** | user context required |
| **필요 스코프** | `data:read` |
| **데이터 포맷** | JSON |
| **그룹** | element-service |

Get element by urn.

## 요청

### URI 파라미터

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `urn` | string |  |  |

### 쿼리 파라미터

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `authcontext` | string | **필수** | The authcontext of the resource you are requesting |
| `recursive` | boolean |  | Will traverse the element’s entire hierarchy recursively if enabled. All of the element’s children will be returned. Default is false. |

### 헤더

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `Authorization` | string | **필수** | Must be Bearer <token>, where <token> is obtained via a three-legged OAuth flow. |
| `X-Ads-Region` | string |  | Specifies the geographical location (region) of the service. US or EMEA. Defaults to US. |

## 응답

| 코드 | 의미 | 설명 |
| --- | --- | --- |
| `200` | OK | The response will include an object with a mapping from URN to elements. It is guaranteed that the element you requested will be in the response, along with potential elements that are batched together. If you use the recursive query parameter the element along with all its children will be included. |
| `302` |  | Clients should follow redirects, as the response might be stored somewhere else |
| `400` | Bad Request | Bad request. The request body is not valid according to the schema. See response for details. |
| `401` | Unauthorized | Bearer token is not valid |
| `403` | Forbidden | Token does not have access to the specified project. Are you in the right region? |
| `404` | Not Found | The requested resource does not exist. See response for details. |
| `500` | Internal Server Error | Internal server error |

### 응답 본문 (200)

- `elements` — `object`  
    Mapping from URN to element
  - `*` — `object`  
      Learn more about the element system here: https://aps.autodesk.com/en/docs/forma/v1/working-with-forma/element-system/
    - `urn` — `string`  
        Unique Resource Name (URN) for an element, used to identify a specific revision of an element. The element URN scheme is urn:adsk-forma-elements:{system}:{authcontext}:{id}:{revision}.
    - `metadata` — `object`  
        Metadata about an element. Does not describe the element itself, but rather the context in which it has been created/updated and potential licensing information.
      - `predecessor` — `string`  
          Unique Resource Name (URN) for an element, used to identify a specific revision of an element. The element URN scheme is urn:adsk-forma-elements:{system}:{authcontext}:{id}:{revision}.
      - `createdAt` — `datetime: ISO 8601`  
          Creation timestamp, in ISO8601 datetime format.
      - `createdBy` — `string`
      - `licensing` — `object`  
          Information related to the licensing governing the use and transfer of this element.
        - `exportable` — `boolean`  
            Whether or not data can be transferred out of Forma, for example by downloading a data file or sending a project to Revit.
        - `attributions` — `array: object`  
            Attribution requirements that must be followed. Empty if there are no requirements
          - `action` — `enum:string`  
              We support two types of attribution actions, depending on what happens to the data: - display: A watermark (clickable text) to be shown whenever data is displayed. - transfer: Text to be shown to users (or put in LICENCE files or similar) whenever data is imported or exported. Possible values: display, transfer
          - `content` — `string`
          - `url` — `string`
        - `licenseUrl` — `string`  
            Link to the original license for the data
        - `providerDescriptionUrl` — `string`  
            Link to the providers description on how the license should be interpreted. For auditing purposes.
    - `properties` — `object`  
        Properties of an element are inherent attributes which are independent of the representation used to interpret its geometry. For example, setting an element’s virtual property to true will indicate that the element should not be included as a physical object which e.g. blocks sun rays – regardless of which representation you are looking at.
      - `category` — `string`  
          The category is used to indicate the user intent of the element. It can be used to group and filter top-level elements in the UI. The category is a string, and can be any value.
      - `noiseIgnore` — `boolean`  
          For elements with a volumeMesh representation, this flag signals that the element should be ignored when analyzing traffic noise. In contrast to the virtual property, it does _not_ imply that the element isn’t a physical object – just that it does not block noise. Typically used for vegetation elements, since it is common practice to ignore vegetation when performing traffic noise analysis.
      - `treatAsVegetationInWindAnalysis` — `boolean`  
          If true, and if the element has a volumeMesh representation, the wind analysis will interpret the element as vegetation modelled as a porous medium. See this help center article for details about the implementation.
      - `virtual` — `boolean`  
          This field can be used to identify something that isn’t real, like a constraint or an illustrative boy with balloon. If this is set, analyses and possibly other modes will ignore the element.
      - `functionId` — `string`  
          Deprecated: This field is being removed. Function tagging will be re-introduced using a new concept. This field will assign a function to the element, which will dictate the color with which it is rendered in addition to providing function breakdowns in Area Metrics.
      - `trafficData`  
          Providing this field will include the element as a noise source in the rapid and detailed noise analysis.
        - `anyOf`  
            Providing this field will include the element as a noise source in the rapid and detailed noise analysis.
          - `0` — `all of`  
              Properties required for road traffic data
            - `0` — `object`  
                Base object for traffic data. Currently used for rail and road traffic data.
              - `speed` — `number`  
                  Average speed in km/h. Often proxied by the speed limit
              - `adt` — `number`  
                  Annual average daily traffic
              - `adtDistribution` — `object`  
                  Annual average daily traffic distribution. All values must sum to 100
                - `dayPercentage` — `number`  
                    Percentage of traffic during the day (07:00-19:00). Number between 0 and 100
                - `eveningPercentage` — `number`  
                    Percentage of traffic during the evening (19:00-23:00). Number between 0 and 100
                - `nightPercentage` — `number`  
                    Percentage of traffic during the night (23:00-07:00). Number between 0 and 100
            - `1` — `object`
              - `heavyVehiclePercentage` — `number`  
                  Percentage of heavy-duty vehicles, motor home vehicles, buses, with three or more axles. Number between 0 and 100
          - `1` — `all of`  
              Properties required for rail traffic data
            - `0` — `object`  
                Base object for traffic data. Currently used for rail and road traffic data.
              - `speed` — `number`  
                  Average speed in km/h. Often proxied by the speed limit
              - `adt` — `number`  
                  Annual average daily traffic
              - `adtDistribution` — `object`  
                  Annual average daily traffic distribution. All values must sum to 100
                - `dayPercentage` — `number`  
                    Percentage of traffic during the day (07:00-19:00). Number between 0 and 100
                - `eveningPercentage` — `number`  
                    Percentage of traffic during the evening (19:00-23:00). Number between 0 and 100
                - `nightPercentage` — `number`  
                    Percentage of traffic during the night (23:00-07:00). Number between 0 and 100
            - `1` — `object`
              - `railType` — `enum:string`  
                  Type of rail traffic. Note: The subway and train properties are used for the beta and will be removed in future releases. Possible values: train, subway, high_speed, regional, tram
              - `vehicleLength` — `number`  
                  Length of the vehicle in meters. Note: This property is used for the beta and will be removed in future releases.
      - `*`
    - `representations` — `object`  
        Representations provide ways for an element to be interpreted. An element can have zero, one, or several representations which unlock different functionality. See: https://aps.autodesk.com/en/docs/forma/v1/working-with-forma/element-system/forma-element-specification/#representations
      - `*` — `one of`
        - `LinkedRepresentation` — `object`  
            The data for a linked representation must be fetched by a separate API using the blob ID.
          - `type` — `object`  
              Will always be: linked
          - `blobId` — `string`  
              Blob ID. Used to retrieve the data for this representation.
          - `selection` — `one of`  
              The underlying data for a representation can be shared across multiple elements/representations. This field, if present, should be used to select the relevant parts from the data that belongs to this representation. The exact details is specific for the representation/format, but in most cases this is used with an ID in the data and comparing it against this value using the specified operator.
            - `0` — `object`
              - `type` — `object`  
                  Will always be: equals
              - `value` — `string`  
                  The relevant data for the representation will be under this value.
            - `1` — `object`
              - `type` — `object`  
                  Will always be: startsWith
              - `value` — `string`  
                  Any value with this prefix is relevant for the representation.
          - `properties` — `object`  
              Additional information about the representation.
            - `*`
        - `EmbeddedJsonRepresentation` — `object`  
            The data for an embedded representation can be accessed directly under the data key.
          - `type` — `object`  
              Will always be: embedded-json
          - `data` — `object`
          - `selection` — `one of`  
              The underlying data for a representation can be shared across multiple elements/representations. This field, if present, should be used to select the relevant parts from the data that belongs to this representation. The exact details is specific for the representation/format, but in most cases this is used with an ID in the data and comparing it against this value using the specified operator.
            - `0` — `object`
              - `type` — `object`  
                  Will always be: equals
              - `value` — `string`  
                  The relevant data for the representation will be under this value.
            - `1` — `object`
              - `type` — `object`  
                  Will always be: startsWith
              - `value` — `string`  
                  Any value with this prefix is relevant for the representation.
          - `properties` — `object`  
              Additional information about the representation.
            - `*`
        - `EmbeddedBinaryRepresentation` — `object`  
            The data for an embedded representation can be accessed directly under the data key.
          - `type` — `object`  
              Will always be: embedded-binary
          - `data` — `string`
          - `selection` — `one of`  
              The underlying data for a representation can be shared across multiple elements/representations. This field, if present, should be used to select the relevant parts from the data that belongs to this representation. The exact details is specific for the representation/format, but in most cases this is used with an ID in the data and comparing it against this value using the specified operator.
            - `0` — `object`
              - `type` — `object`  
                  Will always be: equals
              - `value` — `string`  
                  The relevant data for the representation will be under this value.
            - `1` — `object`
              - `type` — `object`  
                  Will always be: startsWith
              - `value` — `string`  
                  Any value with this prefix is relevant for the representation.
          - `properties` — `object`  
              Additional information about the representation.
            - `*`
    - `children` — `array: object`  
        An element can include other elements as children, which results in a tree structure. Elements may be referenced multiple times, with different transforms and under different parents. See: https://aps.autodesk.com/en/docs/forma/v1/working-with-forma/element-system/forma-element-specification/#children
      - `urn` — `string`  
          Unique Resource Name (URN) for an element, used to identify a specific revision of an element. The element URN scheme is urn:adsk-forma-elements:{system}:{authcontext}:{id}:{revision}.
      - `key` — `string`  
          Unique id under parent. Used to build up paths. Prefer short values for space efficiency.
      - `transform` — `array: number`  
          Flat array of 16 numbers representing column-major 4x4 affine matrix. Translation values use metres as unit. The matrix is applied to the element’s geometry, and the resulting geometry is then transformed by the parent’s matrix. See: https://aps.autodesk.com/en/docs/forma/v1/working-with-forma/element-system/forma-element-specification/#transformation-matrix
      - `name` — `string`  
          User defined naming of this specific reference, typically used to distinguish elements in eg. UI listings

## Example

```
curl -v 'https://developer.api.autodesk.com/forma/element-service/v1alpha/elements/urn:adsk-forma-elements:parametric:pro_abcd:c80d7b660e891:1712753285802?authcontext=pro_abcd' \
  -H 'Authorization: Bearer AuIPTf4KYLTYGVnOHQ0cuolwCW2a' \
  -H "X-Ads-Region: EMEA"
```

```
{
  "element": {
    "urn:adsk-forma-elements:parametric:pro_abcd:c80d7b660e891:1712753285802": {
      "urn": "urn:adsk-forma-elements:parametric:pro_abcd:c80d7b660e891:1712753285802",
      "children": [
        {
          "key": "myFavoritechild",
          "transform": [
            1,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            1
          ],
          "urn": "urn:adsk-forma-elements:some-element:pro_abcd:some-id:revision"
        }
      ],
      "properties": {
        "name": "Surrounding Building 1",
        "category": "building"
      },
      "representations": {
        "volumeMesh": {
          "type": "linked",
          "selection": {
            "type": "equals",
            "value": "c80d7b660e891"
          },
          "blobId": "parametric:eyJlbGVtZW50SWQiOiJjODBkN2I2NjBlODkxIiwicmV2aXNpb24iOiIxNzEyNzUzMjg1ODAyIiwidHlwZSI6ImdsYiJ9"
        },
        "grossFloorAreaPolygons": {
          "type": "embedded-json",
          "data": [
            {
              "grossFloorPolygon": [
                [
                  [
                    -268.8674135512906,
                    -129.91293074777607
                  ],
                  [
                    -273.52954996440917,
                    -140.9702579142062
                  ],
                  [
                    -258.78644707583567,
                    -147.1864397983643
                  ],
                  [
                    -254.1243106627171,
                    -136.12911263193416
                  ],
                  [
                    -268.8674135512906,
                    -129.91293074777607
                  ]
                ]
              ],
              "elevation": 0,
              "areaType": "UNASSIGNED"
            }
          ]
        }
      }
    }
  },
  "elements": {}
}
```

## 같은 그룹의 다른 엔드포인트

- `GET /forma/element-service/v1alpha/blobs/{blobId}` — [Get blob](./element-getblob-GET.md)
- `POST /forma/element-service/v1alpha/blobs-batch` — [This operation can be used to retrieve multiple blobs at once, which helps reducing the number of API calls needed](./element-getblobsbatch-POST.md)
- `POST /forma/element-service/v1alpha/elements-batch` — [Retrieve multiple elements](./element-getelementsbatch-POST.md)

---
원본 문서: https://aps.autodesk.com/en/docs/forma/v1/reference/http-reference/element-getelement-GET
