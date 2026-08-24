---
operation_id: takeoff-projects-project_id-classification-systems-system_id-GET
method: GET
path: /construction/takeoff/v1/projects/{projectId}/classification-systems/{systemId}
group: "Takeoff"
auth_context: user context required
scopes: [data:read]
surface: http
verification: docs-only
deprecated: true
---

# Classification Systems

> ⚠️ **DEPRECATED** — 이 엔드포인트는 더 이상 권장되지 않습니다.

```http
GET https://developer.api.autodesk.com/construction/takeoff/v1/projects/{projectId}/classification-systems/{systemId}
```

| | |
| --- | --- |
| **인증 컨텍스트** | user context required |
| **필요 스코프** | `data:read` |
| **데이터 포맷** | JSON |
| **그룹** | Takeoff |

## 요청

### URI 파라미터

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `systemId` | string: UUID |  | The classification system ID. To find the ID, call GET classification-systems. |
| `projectId` | string: UUID |  | The ID of the project. This corresponds to project ID in the Data Management API, and can be specified in the form of “UUID” or b.”UUID”. To learn how to find the project ID, see the Retrieve Forma hub and project ID tutorial. |

### 헤더

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `Authorization` | string | **필수** | Must be Bearer <token>, where <token> is a three-legged access token obtained via an Authorization Code flow or a Secure Service Account (SSA) flow. The SSA flow is designed for headless server-to-server operations. While it functions like a two-legged flow (no user interaction), it is classified as three-legged because it preserves user context. |
| `region` | string |  | Specifies the region where the service is located. Possible values: US, EMEA. For the full list of supported regions, see the Regions page. |

## 응답

| 코드 | 의미 | 설명 |
| --- | --- | --- |
| `200` | OK | Successfully retrieved the classification system. |
| `400` | Bad Request | The parameters of the requested operation are invalid. |
| `401` | Unauthorized | The provided bearer token is not valid. |
| `403` | Forbidden | The user or service represented by the bearer token does not have permission to perform this operation. |
| `404` | Not Found | The requested resource could not be found. |
| `409` | Conflict | Project has migrated to CW-CS Classifications, Legacy Classifications are disabled. |
| `429` | Too Many Requests | Rate limit exceeded; wait some time before retrying. The ‘Retry-After’ header might provide the amount of the time to wait. |
| `500` | Internal Server Error | An unknown error occurred on the server. |

### 응답 본문 (200)

- `id` — `string: UUID`  
    The classification system ID.
- `name` — `string`  
    The classification system name. Max length: 200
- `type` — `enum:string`  
    The type of classification system. Possible values: CLASSIFICATION_SYSTEM_1, CLASSIFICATION_SYSTEM_2. See the Help documentation for more details about the classification systems.

## Example

```
curl -v 'https://developer.api.autodesk.com/construction/takeoff/v1/projects/:projectId/classification-systems/:systemId' \
  -H 'Authorization: Bearer AuIPTf4KYLTYGVnOHQ0cuolwCW2a'
```

```
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "Smith Construction Classification",
  "type": "CLASSIFICATION_SYSTEM_1"
}
```

## 같은 그룹의 다른 엔드포인트

- `GET /construction/takeoff/v1/projects/{projectId}/assigned-structures` — [Retrieves the classification structures (trees) that have been assigned to a Takeoff project](./takeoff-projects-project_id-assigned-structures-GET.md)
- `DELETE /construction/takeoff/v1/projects/{projectId}/assigned-structures/{structureId}` — [Unassigns a classification structure (tree) from a Takeoff project](./takeoff-projects-project_id-assigned-structures-structure_id-DELETE.md)
- `POST /construction/takeoff/v1/projects/{projectId}/assigned-structures:batch-add` — [Assigns one or more classification structures (trees) to a Takeoff project](./takeoff-projects-project_id-assigned-structuresbatch-add-POST.md)
- `GET /construction/takeoff/v1/projects/{projectId}/classification-systems` — [Classification Systems](./takeoff-projects-project_id-classification-systems-GET.md)
- `POST /construction/takeoff/v1/projects/{projectId}/classification-systems` — [Classification Systems](./takeoff-projects-project_id-classification-systems-POST.md)
- `GET /construction/takeoff/v1/projects/{projectId}/classification-systems/{systemId}/classifications` — [Classification Systems](./takeoff-projects-project_id-classification-systems-system_id-classifications-GET.md)
- `POST /construction/takeoff/v1/projects/{projectId}/classification-systems/{systemId}/classifications:import` — [Classification Systems](./takeoff-projects-project_id-classification-systems-system_id-classificationsimport-POST.md)
- `DELETE /construction/takeoff/v1/projects/{projectId}/classification-systems/{systemId}` — [Classification Systems](./takeoff-projects-project_id-classification-systems-system_id-DELETE.md)
- `GET /construction/takeoff/v1/projects/{projectId}/content-views` — [Retrieves the content views for a project](./takeoff-projects-project_id-content-views-GET.md)
- `GET /construction/takeoff/v1/projects/{projectId}/packages` — [Retrieves the takeoff packages for a project](./takeoff-projects-project_id-packages-GET.md)
- `GET /construction/takeoff/v1/projects/{projectId}/packages/{packageId}` — [Retrieves a specified takeoff package](./takeoff-projects-project_id-packages-package_id-GET.md)
- `PATCH /construction/takeoff/v1/projects/{projectId}/packages/{packageId}` — [Updates the name of a takeoff package for a project](./takeoff-projects-project_id-packages-package_id-PATCH.md)
- `GET /construction/takeoff/v1/projects/{projectId}/packages/{packageId}/takeoff-items` — [Retrieves the takeoff items for a package](./takeoff-projects-project_id-packages-package_id-takeoff-items-GET.md)
- `GET /construction/takeoff/v1/projects/{projectId}/packages/{packageId}/takeoff-items/{takeoffItemId}` — [Retrieves a specified takeoff item for a package](./takeoff-projects-project_id-packages-package_id-takeoff-items-takeoff_item_id-GET.md)
- `GET /construction/takeoff/v1/projects/{projectId}/packages/{packageId}/takeoff-types` — [Retrieves the takeoff types for a package](./takeoff-projects-project_id-packages-package_id-takeoff-types-GET.md)
- `GET /construction/takeoff/v1/projects/{projectId}/packages/{packageId}/takeoff-types/{takeoffTypeId}` — [Retrieves a specified takeoff type for a package](./takeoff-projects-project_id-packages-package_id-takeoff-types-takeoff_type_id-GET.md)
- `POST /construction/takeoff/v1/projects/{projectId}/packages` — [Creates a takeoff package for a project](./takeoff-projects-project_id-packages-POST.md)
- `GET /construction/takeoff/v1/projects/{projectId}/settings` — [Retrieves the measurement system settings for a project](./takeoff-projects-project_id-settings-GET.md)
- `PATCH /construction/takeoff/v1/projects/{projectId}/settings` — [Updates the measurement system settings for a project](./takeoff-projects-project_id-settings-PATCH.md)

---
원본 문서: https://aps.autodesk.com/en/docs/acc/v1/reference/http/takeoff-projects-project_id-classification-systems-system_id-GET
