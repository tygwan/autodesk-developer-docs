---
operation_id: assets-custom-attributes-batch-get-POST
method: POST
path: /construction/assets/v1/projects/{projectId}/custom-attributes:batch-get
group: "Assets"
auth_context: user context required
scopes: [data:read]
surface: http
verification: docs-only
---

# Returns a specified set of custom attributes

```http
POST https://developer.api.autodesk.com/construction/assets/v1/projects/{projectId}/custom-attributes:batch-get
```

| | |
| --- | --- |
| **인증 컨텍스트** | user context required |
| **필요 스코프** | `data:read` |
| **데이터 포맷** | JSON |
| **그룹** | Assets |

Returns a specified set of custom attributes.

## 요청

### URI 파라미터

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `projectId` | string |  | The Forma project ID. Must be a UUID or a project ID of the form “b.{UUID}”. |

### 쿼리 파라미터

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `includeDeleted` | boolean |  | Whether or not soft-deleted object should be included in the response. If true, soft-deleted objects are returned. If false, they are not. The default is false. |

### 헤더

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `Authorization` | string | **필수** | Must be Bearer <token>, where <token> is obtained via a three-legged OAuth flow. |
| `Content-Type` | string | **필수** | Must be application/json |

### 요청 본문

- `ids` — `array: string`  
    Unique IDs of Custom Attributes to fetch. One or both of these body structure fields must be present to specify at least one custom attribute.
- `names` — `array: string`  
    Unique names of custom attributes to fetch. One or both of these body structure fields must be present to specify at least one custom attribute. Note that the unique name of a custom attribute is not the display name of the attribute, but the immutable name returned by the attribute’s name field.

## 응답

| 코드 | 의미 | 설명 |
| --- | --- | --- |
| `200` | OK | Successfully returned a batch of custom attributes. |
| `400` | Bad Request | The request could not be understood by the server due to malformed syntax or missing request header |
| `401` | Unauthorized | The request was not accepted because it lacked valid authentication credentials |
| `403` | Forbidden | The request was not accepted because the client is authenticated, but is not authorized to access the target resource |
| `404` | Not Found | The resource cannot be found |
| `429` | Too Many Requests | The request was not accepted because the rate limit was exceeded due to too many requests being made. |
| `500` | Internal Server Error | An unexpected error occurred on the server |

### 응답 본문 (200)

- `results` — `array: object`  
    Returned custom attributes
  - `displayName` — `string`  
      The human-readable display name for the Asset custom attribute. This name appears when viewing the custom attribute in the Assets UI, and must be unique within a project. Max length: 100
  - `description` — `string`  
      A description of the Asset custom attribute. Max length: 1000
  - `enumValues` — `array: string`  
      An array of string values that defines possible values that may be supplied when this custom attributes data type (defined by dataType) is set to select or multi_select. This field is required when the data type is set to select or multi_select.
  - `requiredOnIngress` — `boolean`  
      Specifies whether or not this custom attribute is required when creating or editing an asset. If true, the custom attribute is required. If false, it is not required. Setting this field to true does not guarantee that existing or imported assets will have this custom attribute.
  - `maxLengthOnIngress` — `int`  
      The maximum length that a text value can be for this custom attribute when creating or editing an asset. Setting a value for this field does not guarantee that existing or imported assets with this custom attribute will have this attribute’s value limited to this length. This field only applies when datatype is set to text. Default is 250, which is the maximum value this field can be set to.
  - `defaultValue` — `one of`  
      The default value for this custom attribute if no value is specified on asset creation. If this field is not specified, the custom attribute does not have a default value. The default value it takes can be any one of three possible value types, defined below.
    - `0` — `string`  
        A String value, maximum length: 250 Max length: 250
    - `1` — `array: string`  
        An array of string values that are set for a multi_select custom attribute.
    - `2` — `boolean`  
        A Boolean value
  - `dataType` — `enum:string`  
      The data type that this custom attribute’s value must take. Once set, the data type can’t be changed. Possible values: - boolean: true or false - text: a string - numeric: a string that parses as a valid floating point number (not localized) - date: an ISO8601 date string with no time, for example, “2021-04-01”. - select: a valid ID from the list of values defined by enumValues. - multi_select: an array of valid IDs from the list of values defined by enumValues.
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
  - `projectId` — `string: UUID`  
      The Forma project ID. Must be a UUID or a project ID of the form “b.{UUID}”.
  - `name` — `string`  
      An autogenerated value, created when an Asset custom attribute is created. The name does not change over the life of the custom attribute.
  - `values` — `array: object`  
      An array of objects that describe the select values for select and multi_select Asset custom attributes.
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
    - `projectId` — `string: UUID`  
        The Forma project ID. Must be a UUID or a project ID of the form “b.{UUID}”.
    - `customAttributeId` — `string: UUID`  
        The ID of the custom attribute.
    - `displayName` — `string`  
        The display name of the value. Must be unique within the custom attribute (case-insensitive). Use to generate the enumValues field for the custom attribute.

## Example

```
curl -v 'https://developer.api.autodesk.com/construction/assets/v1/projects/:projectId/custom-attributes:batch-get?includeDeleted=true' \
  -X 'POST' \
  -H 'Authorization: Bearer AuIPTf4KYLTYGVnOHQ0cuolwCW2a' \
  -H 'Content-Type: application/json' \
  -d '{
        "ids": [
          "3063f212-6ce9-494e-b749-eb73b4445bf0"
        ],
        "names": [
          "ca1"
        ]
      }'
```

```
{
  "results": [
    {
      "displayName": "Elevator Speed",
      "description": "The average speed of an elevator in meters per second",
      "enumValues": [
        "Custom Select Value"
      ],
      "requiredOnIngress": true,
      "maxLengthOnIngress": 100,
      "defaultValue": "2019-01-01",
      "dataType": "multi_select",
      "id": "b302d910-b5e3-46ba-81d8-6b6d30406e14",
      "createdAt": "2020-05-01T06:00:00.000Z",
      "createdBy": "LA7ZL85MU7ML",
      "updatedAt": "2020-05-01T06:00:00.000Z",
      "updatedBy": "LA7ZL85MU7ML",
      "deletedAt": "2020-05-01T06:00:00.000Z",
      "deletedBy": "LA7ZL85MU7ML",
      "isActive": true,
      "version": 1,
      "projectId": "f74a012c-62fd-4988-ac2b-c5b4fd937724",
      "name": "ca1",
      "values": [
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
          "projectId": "f74a012c-62fd-4988-ac2b-c5b4fd937724",
          "customAttributeId": "3063f212-6ce9-494e-b749-eb73b4445bf0",
          "displayName": "Custom Select Value"
        }
      ]
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
- `GET /construction/assets/v2/projects/{projectId}/assets` — [Searches for and returns all specified assets within a project visible to the authenticated user](./assets-assets-v2-GET.md)
- `POST /construction/assets/v1/projects/{projectId}/categories:batch-get` — [Returns a specified set of categories](./assets-categories-batch-get-POST.md)
- `PUT /construction/assets/v1/projects/{projectId}/categories/{categoryId}/custom-attributes/{customAttributeId}` — [Assigns an Asset custom attribute to a category](./assets-categories-category-id-custom-attributes-custom-attribute-id-PUT.md)
- `GET /construction/assets/v1/projects/{projectId}/categories/{categoryId}/custom-attributes` — [Returns the custom attribute assignments for a specified category](./assets-categories-category-id-custom-attributes-GET.md)
- `PUT /construction/assets/v1/projects/{projectId}/categories/{categoryId}/status-step-set/{statusStepSetId}` — [Assigns a status set to a category](./assets-categories-category-id-status-step-set-status-step-set-id-PUT.md)
- `GET /construction/assets/v1/projects/{projectId}/categories` — [Searches for and returns all specified categories](./assets-categories-GET.md)
- `POST /construction/assets/v1/projects/{projectId}/categories` — [Creates a new category](./assets-categories-POST.md)
- `POST /construction/assets/v1/projects/{projectId}/category-status-step-sets/status-step-sets:batch-get` — [Returns status set assignments associated with a specified set of categories](./assets-category-status-step-sets-status-step-sets-batch-get-POST.md)
- `PATCH /construction/assets/v1/projects/{projectId}/custom-attributes/{customAttributeId}` — [Updates an Asset custom attribute](./assets-custom-attributes-custom-attribute-id-PATCH.md)
- `GET /construction/assets/v1/projects/{projectId}/custom-attributes` — [Searches for and returns all specified custom attributes](./assets-custom-attributes-GET.md)
- `POST /construction/assets/v1/projects/{projectId}/custom-attributes` — [Creates a new Asset custom attribute](./assets-custom-attributes-POST.md)
- `GET /construction/assets/v1/error-codes/{errorCodeName}` — [Retrieves details about an error code by name](./assets-error-codes-error-code-name-GET.md)
- `GET /construction/assets/v1/error-codes` — [Retrieves a list of all error codes returned by the Assets API](./assets-error-codes-GET.md)
- `POST /construction/assets/v1/projects/{projectId}/status-step-sets:batch-get` — [Returns a specified set of status sets](./assets-status-step-sets-batch-get-POST.md)
- `GET /construction/assets/v1/projects/{projectId}/status-step-sets` — [Searches for and returns all specified status sets](./assets-status-step-sets-GET.md)
- `POST /construction/assets/v1/projects/{projectId}/status-step-sets` — [Creates a new status set](./assets-status-step-sets-POST.md)

---
원본 문서: https://aps.autodesk.com/en/docs/acc/v1/reference/http/assets-custom-attributes-batch-get-POST
