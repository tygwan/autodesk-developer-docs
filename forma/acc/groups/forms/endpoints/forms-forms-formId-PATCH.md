---
operation_id: forms-forms-formId-PATCH
method: PATCH
path: /construction/forms/v1/projects/{projectId}/form-templates/{templateId}/forms/{formId}
group: "Forms"
auth_context: user context required
scopes: [data:write]
surface: http
verification: docs-only
---

# Updates a form’s form details

```http
PATCH https://developer.api.autodesk.com/construction/forms/v1/projects/:projectId/form-templates/:templateId/forms/:formId
```

| | |
| --- | --- |
| **인증 컨텍스트** | user context required |
| **필요 스코프** | `data:write` |
| **데이터 포맷** | JSON |
| **그룹** | Forms |

Updates a form’s form details. Note that we do not currently support updating PDF forms.

## 요청

### URI 파라미터

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `projectId` | string |  | The ID of the project. Use the Data Management API to retrieve the project ID. For more information, see the Retrieve a Project ID tutorial. You need to convert the project ID into a project ID for the Forma API by removing the “b." prefix. For example, a project ID of b.a4be0c34a-4ab7 translates to a project ID of a4be0c34a-4ab7. |
| `templateId` | string |  | The unique identifier of the form template. Use GET forms to retrieve a form’s template ID. |
| `formId` | string |  | The unique identifier of the form. Use GET forms to retrieve the form ID. |

### 헤더

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `Authorization` | string | **필수** | Must be Bearer <token>, where <token> is a three-legged access token obtained via an Authorization Code flow or a Secure Service Account (SSA) flow. The SSA flow is designed for headless server-to-server operations. While it functions like a two-legged flow (no user interaction), it is classified as three-legged because it preserves user context. |
| `Content-Type` | string | **필수** | Must be application/json |

### 요청 본문

- `assigneeId` — `string`  
    The unique identifier of the company, role, or user the form is assigned to. Note that the assignee must be a contributor of the template.
- `assigneeType` — `enum:string`  
    Type of entity the form is assigned to. Possible values: company, role, user
- `description` — `string`  
    Text for the form’s description field. Max length: 8000
- `name` — `string`  
    The name of the form instance. If the specified value is null or empty, it defaults to the form’s template name. Max length: 100
- `formDate` — `string`  
    Date the form pertains to, must be after 1950-01-01.
- `locationId` — `string: UUID`  
    Location identifier associated with the form. For more information about the location, see GET nodes.
- `notes` — `string`  
    Text for the form’s notes section. Max length: 8000
- `status` — `enum:string`  
    New status for the form. "draft" (in progress) forms may be edited. "inReview" forms may not be edited but may be approved by the form reviewers. "submitted" forms are closed and no longer editable. "archived" forms are not editable and hidden in the ui Possible values: draft, discarded, submitted, archived, in_review
- `submitterSignature` — `string`  
    Signature of the reviewer who is submitting the form (should be included when submitting an inReview form) as a base64 encoded SVG. Note: the SVG will be sanitized: tags and attributes are limited to the basics (<path>, <g>, <polyline>, etc) needed to represent a signature.

## 응답

| 코드 | 의미 | 설명 |
| --- | --- | --- |
| `200` | OK | The updated Form |
| `400` | Bad Request | The request could not be understood by the server due to malformed syntax or missing request header |
| `401` | Unauthorized | The request was not accepted because it lacked valid authentication credentials |
| `403` | Forbidden | The request was not accepted because the client is authenticated, but is not authorized to access the target resource |
| `404` | Not Found | The resource cannot be found |
| `409` | Conflict | The request could not be completed due to a conflict with the current state of the target resource |
| `429` | Too Many Requests | The request could not be completed due to the rate limit of the target resource |
| `500` | Internal Server Error | The request could not be completed due to an internal server error |

### 응답 본문 (200)

- `status` — `enum:string`  
    The current status of the form. Note that forms are created in draft status. Possible values: draft: you can edit forms. inReview: you cannot edit forms, however, they can be approved by form reviewers. submitted: forms are closed and no longer editable. archived forms are not edtiable and hidden in the UI.
- `id` — `string`  
    The unique identifier of the form.
- `projectId` — `string`  
    The unique identifier of the project the form belongs to.
- `formNum` — `int`  
    A chronological user-fiendly identifier of the form within the project e.g. form #5.
- `formDate` — `string`  
    Date the form pertains to.
- `assigneeId` — `string`  
    The unique identifier of the user, role, or company the form is assigned to.
- `assigneeType` — `enum:string`  
    Type of entity the form is assigned to. Possible values: company, role, user
- `locationId` — `string`  
    Location identifier associated with the form. For more information about the location, see GET nodes.
- `updatedAt` — `datetime: ISO 8601`  
    The date when the form was last updated, UTC date and time in ISO-8601 format.
- `createdBy` — `string`  
    The unique identifier of the user who created the form.
- `notes` — `string`  
    Text for the form’s notes section.
- `description` — `string`  
    Text for the form’s description section.
- `name` — `string`  
    The name of the form instance. Max length: 100
- `formTemplate` — `object`  
    Information about the form’s template.
  - `status` — `enum:string`  
      Possible values: active, inactive, deleted
  - `id` — `string`  
      The unique identifier of the template.
  - `projectId` — `string`  
      Unique indentifier of the project the template belongs to.
  - `name` — `string`  
      Name of the form template.
  - `templateType` — `string`  
      User defined type of the form template.
- `pdfValues` — `array: object`  
    For PDF forms, values extracted from fields in the PDF.
  - `name` — `string`  
      The name of the PDF field.
  - `value` — `string`  
      The value of the PDF field.
- `pdfUrl` — `string`  
    For PDF forms, the URL to download the form’s PDF.
- `weather` — `object`  
    Weather forecast captured on the form.
  - `summaryKey` — `string`  
      A code describing the weather conditions. For weather data from DarkSky (legacy), possible values are: clear, rain, snow, sleet, wind, fog, cloudy, partlyCloudy. For weather data from WeatherKit, values come from Apple’s WeatherCondition codes and include: Clear, MostlyClear, PartlyCloudy, MostlyCloudy, Cloudy, Rain, HeavyRain, Drizzle, Snow, HeavySnow, Flurries, Sleet, FreezingRain, FreezingDrizzle, Hail, Thunderstorms, IsolatedThunderstorms, ScatteredThunderstorms, StrongStorms, Windy, Breezy, Foggy, Haze, Smoky, Blizzard, BlowingDust, BlowingSnow, TropicalStorm, Hurricane, SunShowers, Hot, Frigid, WintryMix. Check the provider field to determine which value set to expect. Additional values may appear as Apple’s WeatherKit condition codes evolve.
  - `precipitationAccumulation` — `number`  
      Amount of precipitation accumulated throughout the day.
  - `precipitationAccumulationUnit` — `string`  
      Indicates the measurement unit of the precipitationAccumulation.
  - `temperatureMin` — `number`  
      Minimum temperature during the day.
  - `temperatureMax` — `number`  
      Maximum temperature during the day.
  - `temperatureUnit` — `string`  
      Indicates the measurement unit of the temperature values e.g. temperatureMin, temperatureMax, temp.
  - `humidity` — `number`  
      A percentage value indicating the humidity over the course of the day.
  - `windSpeed` — `number`  
      Average wind speed observed throughout the day.
  - `windGust` — `number`  
      Maximum wind speed observed throughout the day.
  - `speedUnit` — `string`  
      Indicates the measurement unit of the windSpeed and windGust.
  - `windBearing` — `number`  
      Direction of the wind, in degrees.
  - `hourlyWeather` — `array: object`  
      Weather information for specific hours (07:00:00, 12:00:00, 16:00:00).
    - `id` — `int`  
        Unique identifier.
    - `hour` — `string`  
        Hour of the day for this forecast.
    - `temp` — `number`  
        Temperature during specified hour.
    - `windSpeed` — `number`  
        Average wind speed.
    - `windBearing` — `int`  
        Direction of the wind, in degrees.
    - `humidity` — `number`  
        A percentage value indicating the humidity.
    - `fetchedAt` — `datetime: ISO 8601`  
        The date when weather was fetched from weather API.
    - `createdAt` — `datetime: ISO 8601`  
        The date when weather was first fetched.
    - `updatedAt` — `datetime: ISO 8601`  
        The date when the weather was last updated.
  - `provider` — `enum:string`  
      Indicates the source of the weather data. Possible values: darksky, weatherkit
- `customValues` — `array: object`  
    For non-PDF forms, data stored in the form fields.
  - `fieldId` — `string`  
      The unique identifier of the field.
  - `sectionLabel` — `string`  
      Name of the section containing this field.
  - `itemLabel` — `string`  
      The field’s label or question text.
  - `valueName` — `enum:string`  
      Indicates the type of value used for this item. Possible values: textVal, toggleVal, arrayVal, numberVal, choiceVal, dateVal, svgVal
  - `toggleVal` — `enum:string`  
      A boolean like enum value. Possible values: Yes, No, False, True, Minus, Plus, Fail, Pass, NA
  - `textVal` — `string`  
      A text value.
  - `arrayVal` — `string`  
      Multi select values.
  - `numberVal` — `number`  
      A numeric value.
  - `choiceVal` — `string`  
      A single select value.
  - `dateVal` — `string`  
      A date value.
  - `svgVal` — `string`  
      A signature value (base64 encoded SVG).
  - `notes` — `string`  
      Text for the field’s notes section. Max length: 8000
- `lastReopenedBy` — `string`  
    Unique identifier for the user that last re-opened the Form (if applicable).
- `lastSubmitterSignature` — `string`  
    Signature of the reviewer who last submitted the Form (if applicable). Signature value (base64 encoded SVG).
- `userCreatedAt` — `datetime: ISO 8601`  
    Timestamp when the form was created on the client device or external system. This may differ from createdAt if the form was created offline and synced later. UTC date and time in ISO-8601 format.
- `createdAt` — `datetime: ISO 8601`  
    Timestamp when the form was received and stored on the server. UTC date and time in ISO-8601 format.

## Example

```
curl -v 'https://developer.api.autodesk.com/construction/forms/v1/projects/:projectId/form-templates/:templateId/forms/:formId' \
-X 'PATCH' \
-H 'Authorization: Bearer AuIPTf4KYLTYGVnOHQ0cuolwCW2a' \
-H 'Content-Type: application/json' \
-d '{
      "assigneeId": "USER123A",
      "assigneeType": "user",
      "name": "Daily Safety Inspection",
      "description": "For Sam Subcontractor",
      "formDate": "2020-11-20",
      "locationId": "cee45678-fcc4-43ae-80a2-8ca819dfa70d",
      "notes": "Installed 25 units",
      "status": "submitted",
      "submitterSignature": "PHN2ZyBoZWlnaHQ9IjIwMCIgd2lkdGg9IjUwMCI+PHBvbHlsaW5lIHBvaW50cz0iMjAsMjAgNDAsMjUgNjAsNDAgODAsMTIwIDEyMCwxNDAgMjAwLDE4MCIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6YmxhY2s7c3Ryb2tlLXdpZHRoOjMiIC8+PC9zdmc+"
    }'
```

```
{
  "status": "submitted",
  "id": "932da979-e537-4530-b8aa-18607ac6db37",
  "projectId": "9ba6681e-1952-4d54-aac4-9de6d9858dd4",
  "formNum": 1,
  "name": "Daily Safety Inspection",
  "formDate": "2020-11-20",
  "assigneeId": "fc830fd8-f1ef-4cd6-9163-fb115dc698d7",
  "assigneeType": "company",
  "locationId": "d14ce3a6-e61b-4ab0-a9be-5acf7b5366df",
  "updatedAt": "2020-11-20T16:14:27.615127+00:00",
  "createdBy": "USER123A",
  "notes": "Form notes",
  "description": "Form description",
  "formTemplate": {
      "status": "active",
      "id": "2f634a22-779d-4930-9f08-8391a41fea05",
      "projectId": "9ba6681e-1952-4d54-aac4-9de6d9858dd4",
      "name": "Daily Report",
      "templateType": "pg.template_type.daily_report"
  },
  "pdfValues": [
      {
      "name": "CommentsRow1",
      "value": "Observed Masks and Face Covering"
      }
  ],
  "pdfUrl": "https://link.to/form.pdf",
  "weather": {
      "summaryKey": "Clear",
      "precipitationAccumulation": 2.3,
      "precipitationAccumulationUnit": "in",
      "temperatureMin": 47.1,
      "temperatureMax": 65.1,
      "temperatureUnit": "Fahrenheit",
      "humidity": 0.2,
      "windSpeed": 12.5,
      "windGust": 34.6,
      "speedUnit": "km/h",
      "windBearing": 18,
      "hourlyWeather": [
      {
          "id": 1234,
          "hour": "07:00:00",
          "temp": 54.12,
          "windSpeed": 14.2,
          "windBearing": 14,
          "humidity": 0.24,
          "fetchedAt": null,
          "createdAt": "2021-01-20T20:38:32+00:00",
          "updatedAt": "2021-01-20T20:38:32+00:00"
      }
      ],
      "provider": "weatherkit"
  },
  "tabularValues": {
      "worklogEntries": null,
      "materialsEntries": null,
      "equipmentEntries": null
  },
  "customValues": [],
  "lastReopenedBy": "USER123A",
  "lastSubmitterSignature": "PHN2ZyBoZWlnaHQ9IjIwMCIgd2lkdGg9IjUwMCI+PHBvbHlsaW5lIHBvaW50cz0iMjAsMjAgNDAsMjUgNjAsNDAgODAsMTIwIDEyMCwxNDAgMjAwLDE4MCIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6YmxhY2s7c3Ryb2tlLXdpZHRoOjMiIC8+PC9zdmc+",
  "userCreatedAt": "2019-01-20T12:14:27.615127+00:00",
  "createdAt": "2019-01-20T12:14:28.000000+00:00"
}
```

## 같은 그룹의 다른 엔드포인트

- `GET /construction/forms/v2/projects/{projectId}/forms/{formId}/values` — [Returns all form field values (custom values / question values) on the form](./forms-custom-values-(Beta)-GET.md)
- `GET /construction/forms/v1/projects/{projectId}/form-templates` — [Returns all project’s form templates the user has access to](./forms-form-templates-GET.md)
- `GET /construction/forms/v1/projects/{projectId}/forms` — [Returns a paginated list of forms in a project](./forms-forms-(Deprecated)-GET.md)
- `GET /construction/forms/v2/projects/{projectId}/forms` — [Returns a paginated list of forms in a project](./forms-forms-(New-Beta)-GET.md)
- `POST /construction/forms/v1/projects/{projectId}/form-templates/{templateId}/forms` — [Adds a new form to a project](./forms-forms-POST.md)
- `GET /construction/forms/v1/projects/{projectId}/forms/{formId}/table/{fieldId}/values` — [Returns all row values from a specific table in a form](./forms-get-table-values-GET.md)
- `GET /construction/forms/v3/projects/{projectId}/weather/{weatherId}` — [Returns weather data for a specific weather record associated with a project](./forms-get-weather-data-for-a-project-GET.md)
- `GET /construction/forms/v1/projects/{projectId}/layouts/{layoutId}` — [Returns layout information for a form template](./forms-layouts-layoutId-(Beta)-GET.md)
- `GET /construction/forms/v2/projects/{projectId}/layouts/{layoutId}/sections/{sectionId}` — [Returns detailed information about a specific section within a form layout](./forms-sections-sectionId-(Beta)-GET.md)
- `POST /construction/forms/v2/projects/{projectId}/forms/{formId}/values:batch-delete` — [This API currently only deletes form values from tabular fields](./forms-valuesbatch-delete-(Beta)-POST.md)
- `PUT /construction/forms/v1/projects/{projectId}/forms/{formId}/values:batch-update` — [Updates a form’s main form fields, both tabular and non-tabular](./forms-valuesbatch-update-(Deprecated)-PUT.md)
- `PUT /construction/forms/v2/projects/{projectId}/forms/{formId}/values:batch-update` — [Updates a form’s main form fields, both tabular and non-tabular](./forms-valuesbatch-update-(New-Beta)-PUT.md)

---
원본 문서: https://aps.autodesk.com/en/docs/acc/v1/reference/http/forms-forms-formId-PATCH
