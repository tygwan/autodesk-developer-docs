---
operation_id: assets-assets-v2-GET
method: GET
path: /construction/assets/v2/projects/{projectId}/assets
group: "Assets"
auth_context: user context required
scopes: [data:read]
surface: http
verification: docs-only
---

# Searches for and returns all specified assets within a project visible to the authenticated user

```http
GET https://developer.api.autodesk.com/construction/assets/v2/projects/{projectId}/assets
```

| | |
| --- | --- |
| **인증 컨텍스트** | user context required |
| **필요 스코프** | `data:read` |
| **데이터 포맷** | JSON |
| **그룹** | Assets |

Searches for and returns all specified assets within a project visible to the authenticated user.

## 요청

### URI 파라미터

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `projectId` | string |  | The Forma project ID. Must be a UUID or a project ID of the form “b.{UUID}”. |

### 쿼리 파라미터

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `cursorState` | string |  | An opaque cursor token that identifies where the next page of paginated results should start. It’s returned in each paginated response so that it can be supplied in the next request to continue paginated results. If a paginated response contains no cursorState value, then there are no further pages to return. Omit this field to initiate a paginated request or to restart pagination. |
| `limit` | int |  | The maximum number of objects that can be returned in a page. A request might return fewer objects than the limit if the Assets service runs out of specified objects to return - at the end of a set of paged results, for example. The maximum limit is 200; the default limit is 25. |
| `filter[categoryId]` | array |  | An exploded array of category IDs to which all returned objects must belong. For example, ?filter[categoryId]=123&filter[categoryId]=456. |
| `filter[statusLabel]` | array |  | An exploded array of status labels. Each returned object must have one of the statuses bearing any of these labels, case-insensitive. For example, ?filter[statusLabel]=ordered&filter[statusLabel]=delivered. |
| `filter[statusId]` | array |  | An exploded array of status IDs. Each returned object must have one of the statuses specified by the IDs. For example, ?filter[statusId]=84eb6a10-dde3-475f-aaf4-b5df3aebbd0b&filter[statusId]=5ba5c1af-fcd6-4506-b5e4-f20f5321dd69. |
| `filter[locationId]` | array |  | An exploded array of location IDs. Each returned object must be associated with one of the locations specified by the IDs. To specify sub-locations of a location, provide a single location ID here and then set the includeSubLocations field in the request to true. For example, ?filter[locationId]=826e102a-36de-41e7-8c58-1b1696ccbba8&filter[locationId]=cee49807-fcc4-43ae-80a2-8ca819dfa70d. |
| `filter[customAttributes]` | object |  | A custom attribute and value that each returned object must have. This filter is keyed by the custom attribute’s name field and set equal to the desired value. As an example, ?filter[customAttributes][ca1]=true. Use this field multiple times to specify more than one custom attribute filter. The value supplied for a custom attribute filter must match the type specified by the attribute. Values can be: - A single value, or exploded array of values, of string, boolean, or number (for text, numeric, date, boolean, select, or multi_select types). Note that a string value for a text data type will perform a case-insensitive, substring match. - A range of values (inclusive) in the form: startValue..endValue (for numeric or date Types). - Partial ranges (inclusive): ...endValue or startValue.. (for numeric or date Types). Select and Multi-Select filters should use Custom Attribute Value IDs as values. Note that explicit value filters and range filters for a given attribute cannot be used in conjunction. Examples (without URL escaping) Example 1) Filter a boolean custom attribute:?filter[customAttributes][ca1]=true Example 2) Filter a numeric range custom attribute:?filter[customAttributes][ca2]=1..5 Example 3) Filter a date custom attribute to on or before a given date:?filter[customAttributes][ca3]=..2020-11-01 Example 4) Filter a select custom attribute:?filter[customAttributes][ca4]=b959daad-4d00-4209-9acc-e900ac5832cf Example 5) Filter a multi_select custom attribute to multiple values:?filter[customAttributes][ca5]=63801bb7-db1f-49bf-9000-a392a5879f22&filter[customAttributes][ca5]=757d0934-a4a0-4af8-821d-64d611e84a56 Example 6) Filter a text custom attribute to a given input:?filter[customAttributes][ca6]=Some text input |
| `filter[searchText]` | string |  | A string that must be contained within any of a returned object’s searchable text fields, including text custom attributes. searchText is case-insensitive, and will match substrings as well as full strings. |
| `filter[updatedAt]` | string |  | A string that specifies a date and time or a date and time range at which all returned objects mast have been updated. A single date and time takes this format: YYYY-MM-DDThh:mm:ss.SSSZ, A date and time range takes this format: YYYY-MM-DDThh:mm:ss.SSSZ..YYYY-MM-DDThh:mm:ss.SSSZ. Range queries can be closed or open in either direction: YYYY-MM-DDThh:mm:ss.SSSZ.. or ..YYYY-MM-DDThh:mm:ss.SSSZ. |
| `sort` | string |  | A string that specifies how to sort returned objects. The string provides a valid API field name with an optional direction, either asc (ascending) or desc (descending). In the case of custom attributes, use dot notation to specify the attribute by name—for example, customAttributes.ca3 desc. The string may contain multiple comma-separated expressions for secondary sorts. The default sort order is asc if not provided. |
| `includeCustomAttributes` | boolean |  | Specifies whether or not returned assets include custom attributes or not. If true, they’re included. If false, they’re not. Default is false. |
| `includeDeleted` | boolean |  | Whether or not soft-deleted object should be included in the response. If true, soft-deleted objects are returned. If false, they are not. The default is false. |
| `includeSubLocations` | boolean |  | Specifies whether or not to consider sub-locations when filtering by locationId. For this setting to work, the request must contain only a single for filter[locationId]. If true, the search looks for assets within the specified location and in all the sub-locations of the specified location. If false, the search looks for assets only within the specified location(s). Default is false. |

### 헤더

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `Authorization` | string | **필수** | Must be Bearer <token>, where <token> is obtained via a three-legged OAuth flow. |

## 응답

| 코드 | 의미 | 설명 |
| --- | --- | --- |
| `200` | OK | Successfully returned a page of assets. |
| `400` | Bad Request | The request could not be understood by the server due to malformed syntax or missing request header |
| `401` | Unauthorized | The request was not accepted because it lacked valid authentication credentials |
| `403` | Forbidden | The request was not accepted because the client is authenticated, but is not authorized to access the target resource |
| `404` | Not Found | The resource cannot be found |
| `429` | Too Many Requests | The request was not accepted because the rate limit was exceeded due to too many requests being made. |
| `500` | Internal Server Error | An unexpected error occurred on the server |

### 응답 본문 (200)

- `pagination` — `object`
  - `limit` — `int`  
      The maximum number of objects that can be returned in a page. A request might return fewer objects than the limit if the Assets service runs out of specified objects to return - at the end of a set of paged results, for example. The maximum limit is 200; the default limit is 25.
  - `cursorState` — `string`  
      An opaque cursor token that identifies where the next page of paginated results should start. It’s returned in each paginated response so that it can be supplied in the next request to continue paginated results. If a paginated response contains no cursorState value, then there are no further pages to return. Omit this field to initiate a paginated request or to restart pagination.
  - `nextUrl` — `string`  
      A URL that requests the next page for this query.
- `results` — `array: object`  
    Result assets
  - `id` — `string`  
      The ID of the component.
  - `createdAt` — `string`  
      The time when the component was created (ISO8601 Date time format in UTC).
  - `createdBy` — `string`  
      The actor that created the component. This is an Autodesk / Oxygen ID.
  - `updatedAt` — `string`  
      The time when the component was last updated (ISO8601 Date time format in UTC).
  - `updatedBy` — `string`  
      The actor that last updated the component. This is an Autodesk / Oxygen ID.
  - `deletedAt` — `string`  
      The time when the component was deleted at (ISO8601 Date time format in UTC).
  - `deletedBy` — `string`  
      The actor that deleted the component. This is an Autodesk / Oxygen ID.
  - `isActive` — `boolean`  
      A flag indicating whether the component is active or inactive (isActive is true if-and-only-if deletedAt is empty).
  - `version` — `int`  
      A global sequence number that is incremented any time a component of this type is created, updated, or deleted. If you cache components, you can use the version value to compare the cached component to the same component online to see if the component has been updated. If the online component has a higher version value, it has been updated.
  - `clientAssetId` — `string`  
      An identifying name for the asset such as “laundry 220V outlet”. The name need not be unique, and shouldn’t be confused with the asset ‘id’ field, which is created and assigned when the asset is created. This value appears as “Asset ID” in the Assets UI, and may sometimes be called “Name” in asset exports.
  - `categoryId` — `string`  
      The ID of the category to which the asset belongs.
  - `statusId` — `string: UUID`  
      The ID of the status assigned to the asset. The status must belong to the status set specified by the asset’s category.
  - `description` — `string`  
      A brief description of the asset. Currently limited to 1000 characters.
  - `locationId` — `string: UUID`  
      The ID of the location of the asset. This value is supplied through the Locations API.
  - `barcode` — `string`  
      A string that lists a barcode value that may be assigned to the asset. The string uses whatever format your barcode system supports.
  - `customAttributes` — `object`  
      An optional JSON dictionary specifying one or more custom attributes and values to be assigned to the asset. The custom attributes must belong to the set of custom attributes specified by the asset’s category. The dictionary is a set of key:value pairs that each starts with the unique custom attribute name (not to be confused with the custom attribute’s display name) followed by the attribute value. The value must use the data type defined by the attribute: For text, the value is a string. For date, the value is an ISO8601 date string with no time, for example, “2020-04-10”. For select, the value is a valid ID from the list of values defined for this custom attribute. For multi-select, the value is an array of valid IDs from the list of values defined for this custom attribute. For boolean, the value is a boolean. For numeric, the value is a string that parses as a valid floating point number (not localized).
    - `*` — `one of`
      - `0` — `string`  
          A String value Max length: 250
      - `1` — `array: string`  
          An array of String values
      - `2` — `boolean`  
          A Boolean value
  - `companyId` — `string: UUID`  
      The ID of the company to which the creating user belongs in the project.

## Example

```
curl -v 'https://developer.api.autodesk.com/construction/assets/v2/projects/:projectId/assets?cursorState=eyJsaW1pdCI6MjUsIm9mZnNldCI6MjV9&filter[customAttributes]=[object Object]&filter[searchText]=Air Handler&filter[updatedAt]=2020-05-01T06:00:00.000Z..&sort=createdAt asc,clientAssetId desc&includeCustomAttributes=true&includeDeleted=true' \
  -H 'Authorization: Bearer AuIPTf4KYLTYGVnOHQ0cuolwCW2a'
```

```
{
  "pagination": {
    "limit": 25,
    "cursorState": "eyJsaW1pdCI6MjUsIm9mZnNldCI6MjV9",
    "nextUrl": "https://developer.api.autodesk.com/construction/assets/v1/projects/04605b7a-0c53-421e-8e11-c743e75ac10a/assets?cursorState=eyJsaW1pdCI6MjUsIm9mZnNldCI6MjV9"
  },
  "results": [
    {
      "id": "b302d910-b5e3-46ba-81d8-6b6d30406e14",
      "createdAt": "2020-05-01T06:00:00.000Z",
      "createdBy": "LA7ZL85MU7ML",
      "updatedAt": "2020-05-01T06:00:00.000Z",
      "updatedBy": "LA7ZL85MU7ML",
      "deletedAt": "2020-05-01T06:00:00.000Z",
      "deletedBy": "LA7ZL85MU7ML",
      "isActive": true,
      "version": 1,
      "clientAssetId": "MVS-3D2",
      "categoryId": "42",
      "statusId": "84eb6a10-dde3-475f-aaf4-b5df3aebbd0b",
      "description": "AC unit for basement",
      "locationId": "826e102a-36de-41e7-8c58-1b1696ccbba8",
      "barcode": "F0086728",
      "customAttributes": {
        "ca1": true,
        "ca2": 6.5,
        "ca4": "688f8cfb-0eb4-4289-9d18-96007875dec3",
        "ca5": [
          "9e653094-8d9e-4050-a97a-24d9c5a3786f",
          "e88357bc-e3dd-4cd8-a9e2-6d659b301e7f"
        ],
        "ca6": "text value"
      },
      "companyId": "07b5f07d-c54a-4236-a086-f84192fabdb3"
    }
  ]
}
```

## 같은 그룹의 다른 엔드포인트

- `POST /construction/assets/v1/projects/{projectId}/asset-statuses:batch-get` — [Returns a specified set of statuses](./assets-asset-statuses-batch-get-POST.md)
- `GET /construction/assets/v1/projects/{projectId}/asset-statuses` — [Searches for and returns all specified asset statuses](./assets-asset-statuses-GET.md)
- `POST /construction/assets/v1/projects/{projectId}/asset-statuses` — [Creates a new asset status](./assets-asset-statuses-POST.md)
- `POST /construction/assets/v2/projects/{projectId}/assets:batch-create` — [Creates a set of new assets](./assets-assets-batch-create-POST-v2.md)
- `POST /construction/assets/v2/projects/{projectId}/assets:batch-delete` — [Deletes one or more assets](./assets-assets-batch-delete-v2-POST.md)
- `POST /construction/assets/v2/projects/{projectId}/assets:batch-get` — [Returns a specified set of assets](./assets-assets-batch-get-v2-POST.md)
- `PATCH /construction/assets/v2/projects/{projectId}/assets:batch-patch` — [Updates a set of one or more assets](./assets-assets-batch-patch-PATCH-v2.md)
- `POST /construction/assets/v1/projects/{projectId}/categories:batch-get` — [Returns a specified set of categories](./assets-categories-batch-get-POST.md)
- `PUT /construction/assets/v1/projects/{projectId}/categories/{categoryId}/custom-attributes/{customAttributeId}` — [Assigns an Asset custom attribute to a category](./assets-categories-category-id-custom-attributes-custom-attribute-id-PUT.md)
- `GET /construction/assets/v1/projects/{projectId}/categories/{categoryId}/custom-attributes` — [Returns the custom attribute assignments for a specified category](./assets-categories-category-id-custom-attributes-GET.md)
- `PUT /construction/assets/v1/projects/{projectId}/categories/{categoryId}/status-step-set/{statusStepSetId}` — [Assigns a status set to a category](./assets-categories-category-id-status-step-set-status-step-set-id-PUT.md)
- `GET /construction/assets/v1/projects/{projectId}/categories` — [Searches for and returns all specified categories](./assets-categories-GET.md)
- `POST /construction/assets/v1/projects/{projectId}/categories` — [Creates a new category](./assets-categories-POST.md)
- `POST /construction/assets/v1/projects/{projectId}/category-status-step-sets/status-step-sets:batch-get` — [Returns status set assignments associated with a specified set of categories](./assets-category-status-step-sets-status-step-sets-batch-get-POST.md)
- `POST /construction/assets/v1/projects/{projectId}/custom-attributes:batch-get` — [Returns a specified set of custom attributes](./assets-custom-attributes-batch-get-POST.md)
- `PATCH /construction/assets/v1/projects/{projectId}/custom-attributes/{customAttributeId}` — [Updates an Asset custom attribute](./assets-custom-attributes-custom-attribute-id-PATCH.md)
- `GET /construction/assets/v1/projects/{projectId}/custom-attributes` — [Searches for and returns all specified custom attributes](./assets-custom-attributes-GET.md)
- `POST /construction/assets/v1/projects/{projectId}/custom-attributes` — [Creates a new Asset custom attribute](./assets-custom-attributes-POST.md)
- `GET /construction/assets/v1/error-codes/{errorCodeName}` — [Retrieves details about an error code by name](./assets-error-codes-error-code-name-GET.md)
- `GET /construction/assets/v1/error-codes` — [Retrieves a list of all error codes returned by the Assets API](./assets-error-codes-GET.md)
- `POST /construction/assets/v1/projects/{projectId}/status-step-sets:batch-get` — [Returns a specified set of status sets](./assets-status-step-sets-batch-get-POST.md)
- `GET /construction/assets/v1/projects/{projectId}/status-step-sets` — [Searches for and returns all specified status sets](./assets-status-step-sets-GET.md)
- `POST /construction/assets/v1/projects/{projectId}/status-step-sets` — [Creates a new status set](./assets-status-step-sets-POST.md)

---
원본 문서: https://aps.autodesk.com/en/docs/acc/v1/reference/http/assets-assets-v2-GET
