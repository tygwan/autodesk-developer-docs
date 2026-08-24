---
operation_id: assets-asset-statuses-GET
method: GET
path: /construction/assets/v1/projects/{projectId}/asset-statuses
group: "Assets"
auth_context: user context required
scopes: [data:read]
surface: http
verification: docs-only
---

# Searches for and returns all specified asset statuses

```http
GET https://developer.api.autodesk.com/construction/assets/v1/projects/{projectId}/asset-statuses
```

| | |
| --- | --- |
| **인증 컨텍스트** | user context required |
| **필요 스코프** | `data:read` |
| **데이터 포맷** | JSON |
| **그룹** | Assets |

Searches for and returns all specified asset statuses.

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
| `includeDeleted` | boolean |  | Whether or not soft-deleted object should be included in the response. If true, soft-deleted objects are returned. If false, they are not. The default is false. |
| `filter[updatedAt]` | string |  | A string that specifies a date and time or a date and time range at which all returned objects mast have been updated. A single date and time takes this format: YYYY-MM-DDThh:mm:ss.SSSZ, A date and time range takes this format: YYYY-MM-DDThh:mm:ss.SSSZ..YYYY-MM-DDThh:mm:ss.SSSZ. Range queries can be closed or open in either direction: YYYY-MM-DDThh:mm:ss.SSSZ.. or ..YYYY-MM-DDThh:mm:ss.SSSZ. |

### 헤더

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `Authorization` | string | **필수** | Must be Bearer <token>, where <token> is obtained via a three-legged OAuth flow. |

## 응답

| 코드 | 의미 | 설명 |
| --- | --- | --- |
| `200` | OK | Successfully returned a page of statuses. |
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
    Result statuses
  - `label` — `string`  
      The display label of the status. This label appears in the Assets UI when viewing statuses. The label must be unique within this status set, but does not need to be unique within the project (in other words, the same label can be used in multiple status sets in the same project). “Uniqueness” in this context means case-insensitive.
  - `description` — `string`  
      A description of the status.
  - `color` — `string`  
      The color of the status as the status appears in the Assets UI. This field is not restricted as it is primarily a tool for the Assets UI to use. However, there are only certain colors that the Forma Assets UI knows how to operate with. Understood color values are: adsk-black, adsk-white, adsk-charcoal-900, adsk-charcoal-800, adsk-charcoal-700, adsk-charcoal-600, adsk-charcoal-500, adsk-charcoal-400, adsk-charcoal-300, adsk-charcoal-200, adsk-charcoal-100, adsk-charcoal-050, adsk-blue-700, adsk-blue-500, adsk-blue-300, adsk-blue-100, adsk-red-700, adsk-red-500, adsk-red-300, adsk-green-700, adsk-green-500, adsk-green-300, adsk-yellow-orange-700, adsk-yellow-orange-500, adsk-yellow-orange-300, adsk-dark-blue-700, adsk-dark-blue-500, adsk-dark-blue-300, adsk-pink-700, adsk-pink-500, adsk-pink-300, adsk-turquoise-700, adsk-turquoise-500, adsk-turquoise-300, adsk-purple-700, adsk-purple-500, adsk-purple-300, adsk-salmon-700, adsk-salmon-500, adsk-salmon-300, adsk-brown-700, adsk-brown-500, adsk-brown-300. Using colors other than those specified here is not disallowed, but may result in unexpected behavior in the Assets UI.
  - `statusStepSetId` — `string: UUID`  
      The ID of the status set to which the new status belongs.
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
  - `bucket` — `string`  
      An immutable string assigned to a status on its creation, typically created by incorporating the status’s label into a larger string that is guaranteed to be unique within a project. The bucket name remains the same for the life of the status, and doesn’t change even if the label does. The bucket value is a useful tool for semantic identification.
  - `sortOrder` — `int`  
      A value that indicates the order of a status within its status set. Each status in the set has a sort order value that indicates its order relative to other statuses in the set. A status set’s sort order values don’t necessarily start at 1, and may not be sequential. The only way to know a status’s order within a set is to compare its sort order value with the sort order values of other statuses.

## Example

```
curl -v 'https://developer.api.autodesk.com/construction/assets/v1/projects/:projectId/asset-statuses?cursorState=eyJsaW1pdCI6MjUsIm9mZnNldCI6MjV9&includeDeleted=true&filter[updatedAt]=2020-05-01T06:00:00.000Z..' \
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
      "label": "Functional-Testing",
      "description": "Custom Functional Testing Status",
      "color": "green",
      "statusStepSetId": "6eb35939-e5fb-453a-98ed-e2e11f326e73",
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
      "bucket": "custom_functional_testing_status_1582935184385",
      "sortOrder": 1
    }
  ]
}
```

## 같은 그룹의 다른 엔드포인트

- `POST /construction/assets/v1/projects/{projectId}/asset-statuses:batch-get` — [Returns a specified set of statuses](./assets-asset-statuses-batch-get-POST.md)
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
원본 문서: https://aps.autodesk.com/en/docs/acc/v1/reference/http/assets-asset-statuses-GET
