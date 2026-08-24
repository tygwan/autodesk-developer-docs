---
operation_id: sun-analysis-triggersunanalysis-POST
method: POST
path: /forma/sun-analysis/v1alpha/analyses/trigger
group: "sun-analysis"
auth_context: user context required
scopes: [data:read, data:write]
surface: http
verification: docs-only
---

# Trigger a sun analysis for a proposal or element on a given date

```http
POST https://developer.api.autodesk.com/forma/sun-analysis/v1alpha/analyses/trigger
```

| | |
| --- | --- |
| **인증 컨텍스트** | user context required |
| **필요 스코프** | `data:read`, `data:write` |
| **데이터 포맷** | JSON |
| **그룹** | sun-analysis |

Trigger a sun analysis for a proposal or element on a given date. When the analysis is finished, you can fetch the raw ground results
for the analysis.

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

- `rootElementUrn` — `string` **(필수)**  
    The root urn for the analysis. The root needs a terrain for the analysis to run properly.
- `sunDate` — `object` **(필수)**  
    The month and day the analysis is run on.
  - `month` — `int` **(필수)**  
      Month of year, starting at 1.
  - `date` — `int` **(필수)**  
      Day of month, starting at 1.
- `geoLocation` — `object` **(필수)**  
    The location the analysis should be run for
  - `latitude` — `number` **(필수)**
  - `longitude` — `number` **(필수)**
- `selectedElementPaths` — `array: string` **(필수)**  
    The selected elements’ paths relative to the root.

## 응답

| 코드 | 의미 | 설명 |
| --- | --- | --- |
| `200` | OK | The response will contain the metadata of the newly triggered analysis. If the configuration of the analysis has previously been triggered, no new analysis will be triggered, but the already created analysis metadata will be returned. |
| `400` | Bad Request | Malformed request. The request body is not valid according to the schema. See response for details. |
| `401` | Unauthorized | Bearer token is not valid |
| `403` | Forbidden | Token does not have access to the specified project. Are you in the right region? |
| `429` | Too Many Requests | There are limits to how many analysis can be run on a given day or concurrently. If that limit is exceeded, 429 will be returned |
| `500` | Internal Server Error | Internal server error |

### 응답 본문 (200)

- `id` — `string`  
    The id of the analysis
- `status` — `enum:string`  
    Status of the analysis Possible values: IN_PROGRESS, SUCCEEDED, STOPPED

## Example

```
curl -v 'https://developer.api.autodesk.com/forma/sun-analysis/v1alpha/analyses/trigger' \
  -X 'POST' \
  -H 'Authorization: Bearer AuIPTf4KYLTYGVnOHQ0cuolwCW2a' \
  -H 'Content-Type: application/json' \
  -d '{
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
      }'
```

```
{
  "id": "",
  "status": "IN_PROGRESS"
}
```

## 같은 그룹의 다른 엔드포인트

- `GET /forma/sun-analysis/v1alpha/analyses/{analysisId}` — [Get the metadata of an analysis](./sun-analysis-getanalysis-GET.md)

---
원본 문서: https://aps.autodesk.com/en/docs/forma/v1/reference/http-reference/sun-analysis-triggersunanalysis-POST
