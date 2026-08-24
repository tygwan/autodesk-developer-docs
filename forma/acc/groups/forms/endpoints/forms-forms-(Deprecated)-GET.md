---
operation_id: forms-forms-(Deprecated)-GET
method: GET
path: /construction/forms/v1/projects/{projectId}/forms
group: "Forms"
auth_context: user context required
scopes: [data:read]
surface: http
verification: docs-only
deprecated: true
---

# Returns a paginated list of forms in a project

> ⚠️ **DEPRECATED** — 이 엔드포인트는 더 이상 권장되지 않습니다.

```http
GET https://developer.api.autodesk.com/construction/forms/v1/projects/:projectId/forms
```

| | |
| --- | --- |
| **인증 컨텍스트** | user context required |
| **필요 스코프** | `data:read` |
| **데이터 포맷** | JSON |
| **그룹** | Forms |

Returns a paginated list of forms in a project. Forms are sorted by updatedAt in ascending order by default (oldest first).

## 요청

### URI 파라미터

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `projectId` | string |  | The ID of the project. Use the Data Management API to retrieve the project ID. For more information, see the Retrieve a Project ID tutorial. You need to convert the project ID into a project ID for the Forma API by removing the “b." prefix. For example, a project ID of b.a4be0c34a-4ab7 translates to a project ID of a4be0c34a-4ab7. |

### 쿼리 파라미터

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `offset` | int |  | The number of records to skip before returning the result records. Defaults to 0. Increase this value in subsequent requests to continue getting results when the number of records exceeds the requested limit. |
| `limit` | int |  | The number of records to return in a single request. Can be a number between 1 and 50. Defaults to 50. |
| `ids` | array: string |  | An array of Form IDs to retrieve. |
| `formDateMin` | string |  | Return Forms with formDate at or after specified date. |
| `formDateMax` | string |  | Return Forms with formDate at or before specified date. |
| `updatedAfter` | datetime: ISO 8601 |  | Return Forms updated after a specified time. |
| `updatedBefore` | datetime: ISO 8601 |  | Return Forms updated before a specified time. |
| `templateId` | string |  | Return Forms on template with given ID. |
| `statuses` | array: string |  | Return Forms with given statuses. |
| `sortBy` | string |  | Return Forms sorted by specified attribute. |
| `sortOrder` | string |  | Return Forms in specified sorted order. |
| `locationIds` | array: string |  | A sequence of location IDs. Each returned object must be associated with one of the locations specified by the IDs. For example, ?locationId=123e102a-36de-14e7-8c56-1b1234ccbba8&locationId=cee45678-fcc4-43ae-80a2-8ca819dfa70d. See the usage example in the Retrieve Forms Associated With Locations tutorial. |
| `includeInactiveFormTemplates` | boolean |  | Set this value to true in order to include forms that were created using inactive form templates. Defaults to false. |

### 헤더

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `Authorization` | string | **필수** | Must be Bearer <token>, where <token> is a three-legged access token obtained via an Authorization Code flow or a Secure Service Account (SSA) flow. The SSA flow is designed for headless server-to-server operations. While it functions like a two-legged flow (no user interaction), it is classified as three-legged because it preserves user context. |

## 응답

| 코드 | 의미 | 설명 |
| --- | --- | --- |
| `200` | OK | Forms in project at specified page. |
| `400` | Bad Request | The request could not be understood by the server due to malformed syntax or missing request header |
| `401` | Unauthorized | The request was not accepted because it lacked valid authentication credentials |
| `403` | Forbidden | The request was not accepted because the client is authenticated, but is not authorized to access the target resource |
| `404` | Not Found | The resource cannot be found |
| `429` | Too Many Requests | The request could not be completed due to the rate limit of the target resource |
| `500` | Internal Server Error | The request could not be completed due to an internal server error |

### 응답 본문 (200)

- `data` — `array: object`  
    List of forms in the project.
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
- `pagination` — `object`  
    Request pagination information.
  - `offset` — `int`  
      Number of items skipped.
  - `limit` — `int`  
      Number of items returned per page.
  - `totalResults` — `int`  
      Total number of items that can be returned.
  - `nextUrl` — `string`  
      URL for the next page of items. Next page url is null on the last page.

## 같은 그룹의 다른 엔드포인트

- `GET /construction/forms/v2/projects/{projectId}/forms/{formId}/values` — [Returns all form field values (custom values / question values) on the form](./forms-custom-values-(Beta)-GET.md)
- `GET /construction/forms/v1/projects/{projectId}/form-templates` — [Returns all project’s form templates the user has access to](./forms-form-templates-GET.md)
- `GET /construction/forms/v2/projects/{projectId}/forms` — [Returns a paginated list of forms in a project](./forms-forms-(New-Beta)-GET.md)
- `PATCH /construction/forms/v1/projects/{projectId}/form-templates/{templateId}/forms/{formId}` — [Updates a form’s form details](./forms-forms-formId-PATCH.md)
- `POST /construction/forms/v1/projects/{projectId}/form-templates/{templateId}/forms` — [Adds a new form to a project](./forms-forms-POST.md)
- `GET /construction/forms/v1/projects/{projectId}/forms/{formId}/table/{fieldId}/values` — [Returns all row values from a specific table in a form](./forms-get-table-values-GET.md)
- `GET /construction/forms/v3/projects/{projectId}/weather/{weatherId}` — [Returns weather data for a specific weather record associated with a project](./forms-get-weather-data-for-a-project-GET.md)
- `GET /construction/forms/v1/projects/{projectId}/layouts/{layoutId}` — [Returns layout information for a form template](./forms-layouts-layoutId-(Beta)-GET.md)
- `GET /construction/forms/v2/projects/{projectId}/layouts/{layoutId}/sections/{sectionId}` — [Returns detailed information about a specific section within a form layout](./forms-sections-sectionId-(Beta)-GET.md)
- `POST /construction/forms/v2/projects/{projectId}/forms/{formId}/values:batch-delete` — [This API currently only deletes form values from tabular fields](./forms-valuesbatch-delete-(Beta)-POST.md)
- `PUT /construction/forms/v1/projects/{projectId}/forms/{formId}/values:batch-update` — [Updates a form’s main form fields, both tabular and non-tabular](./forms-valuesbatch-update-(Deprecated)-PUT.md)
- `PUT /construction/forms/v2/projects/{projectId}/forms/{formId}/values:batch-update` — [Updates a form’s main form fields, both tabular and non-tabular](./forms-valuesbatch-update-(New-Beta)-PUT.md)

---
원본 문서: https://aps.autodesk.com/en/docs/acc/v1/reference/http/forms-forms-(Deprecated)-GET
