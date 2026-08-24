---
operation_id: sun-analysis-getanalysis-GET
method: GET
path: /forma/sun-analysis/v1alpha/analyses/{analysisId}
group: "sun-analysis"
auth_context: user context required
scopes: [data:read]
surface: http
verification: docs-only
---

# Get the metadata of an analysis

```http
GET https://developer.api.autodesk.com/forma/sun-analysis/v1alpha/analyses/{analysisId}
```

| | |
| --- | --- |
| **인증 컨텍스트** | user context required |
| **필요 스코프** | `data:read` |
| **데이터 포맷** | JSON |
| **그룹** | sun-analysis |

Get the metadata of an analysis

## 요청

### URI 파라미터

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `analysisId` | string |  | The id of the analysis |

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
| `200` | OK | The response will contain the metadata of the analysis, such as status and the analysis’ parameters. If there exists a result for the ground on the analysis, there is also a groundResultsDataUrl, which is a location for the raw ground results of that analysis. The results will be in msgpack format. |
| `400` | Bad Request | Malformed request. The request body is not valid according to the schema. See response for details. |
| `401` | Unauthorized | Bearer token is not valid |
| `403` | Forbidden | Token does not have access to the specified project. Are you in the right region? |
| `404` | Not Found | No analysis exists for this analysis ID |
| `500` | Internal Server Error | Internal server error |

### 응답 본문 (200)

- `id` — `string`  
    The id of the analysis
- `createdAt` — `datetime: ISO 8601`  
    ISO8601 timestamp (UTC) of when the analysis was created
- `completedAt` — `datetime: ISO 8601`  
    ISO8601 timestamp (UTC) of when the analysis finished
- `status` — `enum:string`  
    The status of the analysis. Possible values: IN_PROGRESS, SUCCEEDED, FAILED, STOPPED, INVALIDATED
- `parameters` — `object`
  - `rootElementUrn` — `string`  
      The root urn for the analysis. The root needs a terrain for the analysis to run properly.
  - `sunDate` — `object`  
      The month and day the analysis is run on.
    - `month` — `int`  
        Month of year, starting at 1.
    - `date` — `int`  
        Day of month, starting at 1.
  - `geoLocation` — `object`  
      The location the analysis should be run for
    - `latitude` — `number`
    - `longitude` — `number`
  - `selectedElementPaths` — `array: string`  
      The selected elements’ paths relative to the root.
- `groundResultsDataUrl` — `string`  
    The location of the raw results data. The data is in ``msgpack` <https://msgpack.org/index.html>`_ format. See the groundResultsDataUrlFormat property for documentation of the data structure. Note that groundResultsDataUrlFormat is never included in the response.
- `groundResultsDataUrlFormat` — `object`  
    (This property is not included in the reponse. It only describes the format of the file that can retrieved by the URL above.) Metadata of the analysis that describes how you should parse the analysis in relation to the proposal it was run on. Is used to place the result in the real world.
  - `grid` — `array: number`  
      The grid is a Uint8Array and each sample point is represented with 30 Uint8 values. Each of the 8 bits in the Uint8 signals if the location is sunlit (1) or not (0) at a certain time. Results are provided for every 6 minutes throughout the day, which is why 30 bytes are required to represent the results for each sample point. The analysis is run 00:00 to 23:59 local time on the date on which the analysis was run; the first value for a sample point is for 00:00 local time for that day. Local time uses the timezone derived from the input geolocation.
  - `mask` — `array: integer`  
      Boolean array which denotes if each sample point is a valid point. Invalid sample points are typically the ones where a building is placed.
  - `resolution` — `number`  
      Meters between each sample point in the scores array
  - `width` — `int`  
      Number of points in the horizontal direction (columns) in the scores array.
  - `height` — `int`  
      Number of points in the vertical direction (rows) in the scores array.
  - `x0` — `number`  
      x-coordinate of the upper left corner of the ground grid.
  - `y0` — `number`  
      y-coordinate of the upper left corner of the ground grid.

## Example

```
curl -v 'https://developer.api.autodesk.com/forma/sun-analysis/v1alpha/analyses/:analysisId' \
  -H 'Authorization: Bearer AuIPTf4KYLTYGVnOHQ0cuolwCW2a'
```

```
{
  "id": "",
  "createdAt": "",
  "completedAt": "",
  "status": "IN_PROGRESS",
  "parameters": {
    "rootElementUrn": "urn:adsk-forma-elements:proposal:pro_123:id134unique:1707471576213",
    "sunDate": {
      "month": "",
      "date": ""
    },
    "geoLocation": {
      "latitude": "",
      "longitude": ""
    },
    "selectedElementPaths": [
      ""
    ]
  },
  "groundResultsDataUrl": "",
  "groundResultsDataUrlFormat": {
    "grid": [
      ""
    ],
    "mask": [
      0
    ],
    "resolution": "",
    "width": "",
    "height": "",
    "x0": "",
    "y0": ""
  }
}
```

## 같은 그룹의 다른 엔드포인트

- `POST /forma/sun-analysis/v1alpha/analyses/trigger` — [Trigger a sun analysis for a proposal or element on a given date](./sun-analysis-triggersunanalysis-POST.md)

---
원본 문서: https://aps.autodesk.com/en/docs/forma/v1/reference/http-reference/sun-analysis-getanalysis-GET
