---
operation_id: assets-assets-batch-patch-PATCH-v2
method: PATCH
path: /construction/assets/v2/projects/{projectId}/assets:batch-patch
group: "Assets"
auth_context: user context required
scopes: [data:write, data:create]
surface: http
verification: docs-only
---

# Updates a set of one or more assets

```http
PATCH https://developer.api.autodesk.com/construction/assets/v2/projects/{projectId}/assets:batch-patch
```

| | |
| --- | --- |
| **인증 컨텍스트** | user context required |
| **필요 스코프** | `data:write`, `data:create` |
| **데이터 포맷** | JSON |
| **그룹** | Assets |

Updates a set of one or more assets.

## 요청

### URI 파라미터

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `projectId` | string |  | The Forma project ID. Must be a UUID or a project ID of the form “b.{UUID}”. |

### 헤더

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `Authorization` | string | **필수** | Must be Bearer <token>, where <token> is obtained via a three-legged OAuth flow. |
| `Content-Type` | string | **필수** | Must be application/json |

## 응답

| 코드 | 의미 | 설명 |
| --- | --- | --- |
| `200` | OK | Successfully updated specified assets and returned properties of updated assets. |
| `400` | Bad Request | The request could not be understood by the server due to malformed syntax or missing request header |
| `401` | Unauthorized | The request was not accepted because it lacked valid authentication credentials |
| `403` | Forbidden | The request was not accepted because the client is authenticated, but is not authorized to access the target resource |
| `404` | Not Found | The resource cannot be found |
| `409` | Conflict | The request could not be completed due to a conflict with the current state of the target resource |
| `429` | Too Many Requests | The request was not accepted because the rate limit was exceeded due to too many requests being made. |
| `500` | Internal Server Error | An unexpected error occurred on the server |

## Example

```
curl -v 'https://developer.api.autodesk.com/construction/assets/v2/projects/:projectId/assets:batch-patch' \
  -X 'PATCH' \
  -H 'Authorization: Bearer AuIPTf4KYLTYGVnOHQ0cuolwCW2a' \
  -H 'Content-Type: application/json' \
  -d '{
        "286c1ef7-70f6-4ebd-8f87-e7f591ec6b1f": {
          "clientAssetId": "AH-1000",
          "categoryId": "42",
          "statusId": "5cd53aeb-6657-4fb3-a077-f700fb29e644",
          "customAttributes": {
            "ca1": true,
            "ca5": [
              "f3a084e3-3531-40a7-9dce-3a17012443c7",
              "b5ee90c1-6e5d-41f2-83da-e54bf4331a8a"
            ],
            "ca6": "Updated text value"
          }
        },
        "4a125d1b-0803-408e-ab8b-ccdd159b8ca8": {
          "clientAssetId": "VACUUM-9000",
          "description": "The new Vacuum 9000",
          "locationId": "8500bd50-d25d-41a4-a686-cfa32d9a7dd4",
          "barcode": "F00086728"
        }
      }'
```

```
{
  "286c1ef7-70f6-4ebd-8f87-e7f591ec6b1f": {
    "id": "286c1ef7-70f6-4ebd-8f87-e7f591ec6b1f",
    "version": "2,",
    "clientAssetId": "AH-1000",
    "categoryId": "42",
    "statusId": "5cd53aeb-6657-4fb3-a077-f700fb29e644",
    "companyId": "212c9e25-f020-45c1-b93f-5c3d8af66ecb",
    "description": "AC unit for basement",
    "locationId": "826e102a-36de-41e7-8c58-1b1696ccbba8",
    "barcode": "DR025SGPT",
    "customAttributes": {
      "ca1": true,
      "ca2": 128,
      "ca3": "1989-11-09",
      "ca4": "9e6de5b0-f0d3-4eea-9b9c-efb14423f03e",
      "ca5": [
        "f3a084e3-3531-40a7-9dce-3a17012443c7",
        "b5ee90c1-6e5d-41f2-83da-e54bf4331a8a"
      ],
      "ca6": "Updated text value"
    },
    "isActive": "true,",
    "createdAt": "2020-05-01T06:00:00.000Z",
    "createdBy": "LA7ZL85MU7ML",
    "updatedAt": "2020-05-01T06:00:00.000Z",
    "updatedBy": "LA7ZL85MU7ML"
  },
  "4a125d1b-0803-408e-ab8b-ccdd159b8ca8": {
    "id": "4a125d1b-0803-408e-ab8b-ccdd159b8ca8",
    "version": "2,",
    "clientAssetId": "VACUUM-9000",
    "categoryId": "12",
    "statusId": "f27c6e60-327c-4b22-b430-a77c5ece70e5",
    "companyId": "212c9e25-f020-45c1-b93f-5c3d8af66ecb",
    "description": "The new Vacuum 9000",
    "locationId": "e4f7c1d5-0517-46ff-912b-65a05ecd839a",
    "barcode": "F00086728",
    "customAttributes": {
      "ca11": "2020-10-31",
      "ca13": "6867e8ad-4a05-45da-82a1-17f89902f0b9",
      "ca14": "some text input"
    },
    "isActive": "true,",
    "createdAt": "2020-05-01T06:00:00.000Z",
    "createdBy": "LA7ZL85MU7ML",
    "updatedAt": "2020-05-01T06:00:00.000Z",
    "updatedBy": "LA7ZL85MU7ML"
  }
}
```

## 같은 그룹의 다른 엔드포인트

- `POST /construction/assets/v1/projects/{projectId}/asset-statuses:batch-get` — [Returns a specified set of statuses](./assets-asset-statuses-batch-get-POST.md)
- `GET /construction/assets/v1/projects/{projectId}/asset-statuses` — [Searches for and returns all specified asset statuses](./assets-asset-statuses-GET.md)
- `POST /construction/assets/v1/projects/{projectId}/asset-statuses` — [Creates a new asset status](./assets-asset-statuses-POST.md)
- `POST /construction/assets/v2/projects/{projectId}/assets:batch-create` — [Creates a set of new assets](./assets-assets-batch-create-POST-v2.md)
- `POST /construction/assets/v2/projects/{projectId}/assets:batch-delete` — [Deletes one or more assets](./assets-assets-batch-delete-v2-POST.md)
- `POST /construction/assets/v2/projects/{projectId}/assets:batch-get` — [Returns a specified set of assets](./assets-assets-batch-get-v2-POST.md)
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
원본 문서: https://aps.autodesk.com/en/docs/acc/v1/reference/http/assets-assets-batch-patch-PATCH-v2
