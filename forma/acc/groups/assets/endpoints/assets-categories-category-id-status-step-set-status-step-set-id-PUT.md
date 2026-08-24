---
operation_id: assets-categories-category-id-status-step-set-status-step-set-id-PUT
method: PUT
path: /construction/assets/v1/projects/{projectId}/categories/{categoryId}/status-step-set/{statusStepSetId}
group: "Assets"
auth_context: user context required
scopes: [data:write]
surface: http
verification: docs-only
---

# Assigns a status set to a category

```http
PUT https://developer.api.autodesk.com/construction/assets/v1/projects/{projectId}/categories/{categoryId}/status-step-set/{statusStepSetId}
```

| | |
| --- | --- |
| **인증 컨텍스트** | user context required |
| **필요 스코프** | `data:write` |
| **데이터 포맷** | JSON |
| **그룹** | Assets |

Assigns a status set to a category.

## 요청

### URI 파라미터

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `projectId` | string |  | The Forma project ID. Must be a UUID or a project ID of the form “b.{UUID}”. |
| `categoryId` | string |  | The category ID |
| `statusStepSetId` | string: UUID |  | The status set ID |

### 헤더

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `Authorization` | string | **필수** | Must be Bearer <token>, where <token> is obtained via a three-legged OAuth flow. |

## 응답

| 코드 | 의미 | 설명 |
| --- | --- | --- |
| `200` | OK | Successfully assigned a status set to a category. |
| `400` | Bad Request | The request could not be understood by the server due to malformed syntax or missing request header |
| `401` | Unauthorized | The request was not accepted because it lacked valid authentication credentials |
| `403` | Forbidden | The request was not accepted because the client is authenticated, but is not authorized to access the target resource |
| `404` | Not Found | The resource cannot be found |
| `409` | Conflict | The request could not be completed due to a conflict with the current state of the target resource |
| `429` | Too Many Requests | The request was not accepted because the rate limit was exceeded due to too many requests being made. |
| `500` | Internal Server Error | An unexpected error occurred on the server |

### 응답 본문 (200)

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
- `categoryId` — `string`  
    The ID of the category to which the status set is assigned.
- `statusStepSetId` — `string: UUID`  
    The ID of the status set assigned to the category.

## Example

```
curl -v 'https://developer.api.autodesk.com/construction/assets/v1/projects/:projectId/categories/123/status-step-set/6eb35939-e5fb-453a-98ed-e2e11f326e73' \
  -X 'PUT' \
  -H 'Authorization: Bearer AuIPTf4KYLTYGVnOHQ0cuolwCW2a'
```

```
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
  "categoryId": "124",
  "statusStepSetId": "6eb35939-e5fb-453a-98ed-e2e11f326e73"
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
원본 문서: https://aps.autodesk.com/en/docs/acc/v1/reference/http/assets-categories-category-id-status-step-set-status-step-set-id-PUT
