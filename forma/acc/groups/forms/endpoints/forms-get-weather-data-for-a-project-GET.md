---
operation_id: forms-get-weather-data-for-a-project-GET
method: GET
path: /construction/forms/v3/projects/{projectId}/weather/{weatherId}
group: "Forms"
auth_context: user context required
scopes: [data:read]
surface: http
verification: docs-only
---

# Returns weather data for a specific weather record associated with a project

```http
GET https://developer.api.autodesk.com/construction/forms/v3/projects/:projectId/weather/:weatherId
```

| | |
| --- | --- |
| **인증 컨텍스트** | user context required |
| **필요 스코프** | `data:read` |
| **데이터 포맷** | JSON |
| **그룹** | Forms |

Returns weather data for a specific weather record associated with a project.

## 요청

### URI 파라미터

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `projectId` | string |  | The ID of the project. Use the Data Management API to retrieve the project ID. For more information, see the Retrieve a Project ID tutorial. You need to convert the project ID into a project ID for the Forma API by removing the “b." prefix. For example, a project ID of b.a4be0c34a-4ab7 translates to a project ID of a4be0c34a-4ab7. |
| `weatherId` | int |  | The unique identifier of the weather record. Use GET forms to retrieve the weather ID from a form’s weatherId field. |

### 헤더

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `Authorization` | string | **필수** | Must be Bearer <token>, where <token> is a three-legged access token obtained via an Authorization Code flow or a Secure Service Account (SSA) flow. The SSA flow is designed for headless server-to-server operations. While it functions like a two-legged flow (no user interaction), it is classified as three-legged because it preserves user context. |

## 응답

| 코드 | 의미 | 설명 |
| --- | --- | --- |
| `200` | OK | Weather data in metric units. |
| `400` | Bad Request | The request could not be understood by the server due to malformed syntax or missing request header |
| `401` | Unauthorized | The request was not accepted because it lacked valid authentication credentials |
| `403` | Forbidden | The request was not accepted because the client is authenticated, but is not authorized to access the target resource |
| `404` | Not Found | The weather record cannot be found |
| `429` | Too Many Requests | The request could not be completed due to the rate limit of the target resource |
| `500` | Internal Server Error | The request could not be completed due to an internal server error |

### 응답 본문 (200)

- `id` — `int`  
    Unique identifier for the weather record.
- `summaryKey` — `string`  
    A code describing the weather conditions in SCREAMING_SNAKE_CASE. Common values include: CLEAR, RAIN, SNOW, SLEET, WIND, FOG, CLOUDY, PARTLY_CLOUDY, MOSTLY_CLEAR, MOSTLY_CLOUDY, HEAVY_RAIN, DRIZZLE, HEAVY_SNOW, FLURRIES, FREEZING_RAIN, THUNDERSTORMS, WINDY, BREEZY, FOGGY, HAZE, BLIZZARD, HOT, FRIGID, WINTRY_MIX. Additional values may appear as weather condition codes evolve.
- `precipitationType` — `string`  
    Type of precipitation. Possible values: RAIN, SNOW, SLEET, or null if no precipitation.
- `precipitationAccumulation` — `number`  
    Amount of precipitation accumulated throughout the day, in millimeters (mm).
- `hourlyWeather` — `array: object`  
    Weather observations for specific hours of the day (typically 07:00, 12:00, and 16:00 local time).
  - `id` — `int`  
      Unique identifier for the hourly weather record.
  - `summaryKey` — `string`  
      A code describing the weather conditions for this hour in SCREAMING_SNAKE_CASE. Common values include: CLEAR, RAIN, SNOW, SLEET, WIND, FOG, CLOUDY, PARTLY_CLOUDY, MOSTLY_CLEAR, MOSTLY_CLOUDY, HEAVY_RAIN, DRIZZLE, HEAVY_SNOW, FLURRIES, FREEZING_RAIN, THUNDERSTORMS, WINDY, BREEZY, FOGGY, HAZE, BLIZZARD, HOT, FRIGID, WINTRY_MIX. Additional values may appear as weather condition codes evolve.
  - `hour` — `string`  
      The hour of day for this observation, in HH:MM:SS format (24-hour clock).
  - `temp` — `number`  
      Temperature during the specified hour, in degrees Celsius (°C).
  - `windSpeed` — `number`  
      Average wind speed during the specified hour, in kilometers per hour (km/h).
  - `windBearing` — `int`  
      Direction the wind is coming from, in degrees (0-360). North is 0°, East is 90°, South is 180°, West is 270°.
  - `windBearingKey` — `string`  
      Cardinal direction the wind is coming from. Possible values: N, NE, E, SE, S, SW, W, NW.
  - `humidity` — `number`  
      Relative humidity as a decimal value between 0 and 1 (e.g., 0.65 represents 65% humidity).
- `provider` — `enum:string`  
    Indicates the source of the weather data. Possible values: DARK_SKY, WEATHER_KIT
- `fetchedAt` — `datetime: ISO 8601`  
    The date and time when the weather data was fetched from the weather API.

## Example

```
curl -v 'https://developer.api.autodesk.com/construction/forms/v3/projects/:projectId/weather/:weatherId' \
  -H 'Authorization: Bearer AuIPTf4KYLTYGVnOHQ0cuolwCW2a'
```

```
{
  "id": 12345,
  "summaryKey": "CLEAR",
  "precipitationType": "RAIN",
  "precipitationAccumulation": 12.7,
  "hourlyWeather": [
    {
      "id": 67890,
      "summaryKey": "PARTLY_CLOUDY",
      "hour": "12:00:00",
      "temp": 22.5,
      "windSpeed": 16.9,
      "windBearing": 225,
      "windBearingKey": "SW",
      "humidity": 0.65
    }
  ],
  "provider": "WEATHER_KIT",
  "fetchedAt": "2024-01-20T14:30:00+00:00"
}
```

## 같은 그룹의 다른 엔드포인트

- `GET /construction/forms/v2/projects/{projectId}/forms/{formId}/values` — [Returns all form field values (custom values / question values) on the form](./forms-custom-values-(Beta)-GET.md)
- `GET /construction/forms/v1/projects/{projectId}/form-templates` — [Returns all project’s form templates the user has access to](./forms-form-templates-GET.md)
- `GET /construction/forms/v1/projects/{projectId}/forms` — [Returns a paginated list of forms in a project](./forms-forms-(Deprecated)-GET.md)
- `GET /construction/forms/v2/projects/{projectId}/forms` — [Returns a paginated list of forms in a project](./forms-forms-(New-Beta)-GET.md)
- `PATCH /construction/forms/v1/projects/{projectId}/form-templates/{templateId}/forms/{formId}` — [Updates a form’s form details](./forms-forms-formId-PATCH.md)
- `POST /construction/forms/v1/projects/{projectId}/form-templates/{templateId}/forms` — [Adds a new form to a project](./forms-forms-POST.md)
- `GET /construction/forms/v1/projects/{projectId}/forms/{formId}/table/{fieldId}/values` — [Returns all row values from a specific table in a form](./forms-get-table-values-GET.md)
- `GET /construction/forms/v1/projects/{projectId}/layouts/{layoutId}` — [Returns layout information for a form template](./forms-layouts-layoutId-(Beta)-GET.md)
- `GET /construction/forms/v2/projects/{projectId}/layouts/{layoutId}/sections/{sectionId}` — [Returns detailed information about a specific section within a form layout](./forms-sections-sectionId-(Beta)-GET.md)
- `POST /construction/forms/v2/projects/{projectId}/forms/{formId}/values:batch-delete` — [This API currently only deletes form values from tabular fields](./forms-valuesbatch-delete-(Beta)-POST.md)
- `PUT /construction/forms/v1/projects/{projectId}/forms/{formId}/values:batch-update` — [Updates a form’s main form fields, both tabular and non-tabular](./forms-valuesbatch-update-(Deprecated)-PUT.md)
- `PUT /construction/forms/v2/projects/{projectId}/forms/{formId}/values:batch-update` — [Updates a form’s main form fields, both tabular and non-tabular](./forms-valuesbatch-update-(New-Beta)-PUT.md)

---
원본 문서: https://aps.autodesk.com/en/docs/acc/v1/reference/http/forms-get-weather-data-for-a-project-GET
