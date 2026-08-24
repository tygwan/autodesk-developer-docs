---
operation_id: assets-categories-GET
method: GET
path: /construction/assets/v1/projects/{projectId}/categories
group: "Assets"
auth_context: user context required
scopes: [data:read]
surface: http
verification: docs-only
---

# Searches for and returns all specified categories

```http
GET https://developer.api.autodesk.com/construction/assets/v1/projects/{projectId}/categories
```

| | |
| --- | --- |
| **인증 컨텍스트** | user context required |
| **필요 스코프** | `data:read` |
| **데이터 포맷** | JSON |
| **그룹** | Assets |

Searches for and returns all specified categories.

## 요청

### URI 파라미터

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `projectId` | string |  | The Forma project ID. Must be a UUID or a project ID of the form “b.{UUID}”. |

### 쿼리 파라미터

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `filter[isActive]` | boolean |  | Specifies whether or not to return categories that are active. If true, return only active categories. If false, return only inactive categories. Default is to return both active and inactive categories, to ensure full tree structure is returned (conversely, full tree structure is not guaranteed when filtering active or inactive categories). Note that this behavior is different than that of the includeDeleted flag other endpoints use. |
| `filter[parentId]` | string |  | Specifies the parent category ID of returned categories. The query returns only categories that are direct child categories of the specified category. |
| `filter[maxDepth]` | number |  | Specifies the depth of the category tree to return, starting with the root category. Depth 0 means to return only the root category. Depth 4, for example, means to return only the root category and categories that are four levels of inheritance deep, but not to return categories that are five or more levels deep. Note that this can be used in conjunction with filter[parentId], but that the depth is still computed from the root category, not the parent category specified by the filter. |
| `filter[updatedAt]` | string |  | A string that specifies a date and time or a date and time range at which all returned objects mast have been updated. A single date and time takes this format: YYYY-MM-DDThh:mm:ss.SSSZ, A date and time range takes this format: YYYY-MM-DDThh:mm:ss.SSSZ..YYYY-MM-DDThh:mm:ss.SSSZ. Range queries can be closed or open in either direction: YYYY-MM-DDThh:mm:ss.SSSZ.. or ..YYYY-MM-DDThh:mm:ss.SSSZ. |
| `includeUid` | boolean |  | If provided, and set to true, the globally-unique category uid field will be present in the response. The globally unique category ID is used with the (upcoming) v3 category APIs. The option to include the globally-unique ID with the v1 category APIs is to help consumers transition to the new IDs. |

### 헤더

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `Authorization` | string | **필수** | Must be Bearer <token>, where <token> is obtained via a three-legged OAuth flow. |

## 응답

| 코드 | 의미 | 설명 |
| --- | --- | --- |
| `200` | OK | Successfully returned a page of categories. |
| `400` | Bad Request | The request could not be understood by the server due to malformed syntax or missing request header |
| `401` | Unauthorized | The request was not accepted because it lacked valid authentication credentials |
| `403` | Forbidden | The request was not accepted because the client is authenticated, but is not authorized to access the target resource |
| `404` | Not Found | The resource cannot be found |
| `429` | Too Many Requests | The request was not accepted because the rate limit was exceeded due to too many requests being made. |
| `500` | Internal Server Error | An unexpected error occurred on the server |

### 응답 본문 (200)

- `pagination` — `object`  
    The pagination object.
  - `limit` — `int`  
      The maximum number of objects that can be returned in a page. A request might return fewer objects than the limit if the Assets service runs out of specified objects to return - at the end of a set of paged results, for example. The maximum limit is 200; the default limit is 25.
  - `offset` — `int`  
      The offset of the first entry in the pagination results.
  - `totalResults` — `int`  
      Total number of results available.
- `results` — `array: object`  
    Result categories
  - `id` — `string`  
      The ID of the category. This is a numeric string for v1 category APIs.
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
  - `name` — `string`  
      The name of the category. Must be unique among children of the same parent category. This name is displayed for the category in the Assets user interface where a user chooses categories.
  - `description` — `string`  
      A description of the category.
  - `uid` — `string`  
      The globally-unique ID of a Category from the v3 (upcoming) Category APIs. This is provided for interoperability with other APIs that use the globally-unique category ID. Only included if the includeUid=true query param is included.
  - `parentId` — `string`  
      The ID of the category’s parent category.
  - `isRoot` — `boolean`  
      Whether or not this category is the root category of the category tree. If true, it’s the root; if false, it’s not. There will only ever be one (immutable) root category for a project, which is created automatically when the project is created.
  - `isLeaf` — `boolean`  
      Whether or not this category is a leaf category of the category tree. If true, it’s a leaf; if false, it’s not. Note that this is a derived field and should not be persisted as this field may be updated without updating the category itself.
  - `subcategoryIds` — `array: string`  
      An array of category IDs of this category’s child categories. Note that this is a derived field and should not be persisted as this field may be updated without updating the category itself. As such, it is highly recommended to use the parentId field to construct the tree locally instead of subcategoryIds.

## Example

```
curl -v 'https://developer.api.autodesk.com/construction/assets/v1/projects/:projectId/categories?filter[isActive]=true&filter[parentId]=122&filter[maxDepth]=3&filter[updatedAt]=2020-05-01T06:00:00.000Z..&includeUid=true' \
  -H 'Authorization: Bearer AuIPTf4KYLTYGVnOHQ0cuolwCW2a'
```

```
{
  "pagination": {
    "limit": 25,
    "offset": 0,
    "totalResults": 100
  },
  "results": [
    {
      "id": "123",
      "createdAt": "2020-05-01T06:00:00.000Z",
      "createdBy": "LA7ZL85MU7ML",
      "updatedAt": "2020-05-01T06:00:00.000Z",
      "updatedBy": "LA7ZL85MU7ML",
      "deletedAt": "2020-05-01T06:00:00.000Z",
      "deletedBy": "LA7ZL85MU7ML",
      "isActive": true,
      "name": "Electrical",
      "description": "Electrical Outlets",
      "uid": "b4511bcd-e141-4253-8607-26b194de4ae3",
      "parentId": "122",
      "isRoot": false,
      "isLeaf": false,
      "subcategoryIds": [
        "124",
        "125"
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
원본 문서: https://aps.autodesk.com/en/docs/acc/v1/reference/http/assets-categories-GET
