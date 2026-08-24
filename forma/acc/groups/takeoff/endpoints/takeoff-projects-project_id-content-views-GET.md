---
operation_id: takeoff-projects-project_id-content-views-GET
method: GET
path: /construction/takeoff/v1/projects/{projectId}/content-views
group: "Takeoff"
auth_context: user context required
scopes: [data:read]
surface: http
verification: docs-only
---

# Retrieves the content views for a project

```http
GET https://developer.api.autodesk.com/construction/takeoff/v1/projects/{projectId}/content-views
```

| | |
| --- | --- |
| **인증 컨텍스트** | user context required |
| **필요 스코프** | `data:read` |
| **데이터 포맷** | JSON |
| **그룹** | Takeoff |

Retrieves the content views for a project.

## 요청

### URI 파라미터

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `projectId` | string: UUID |  | The ID of the project. This corresponds to project ID in the Data Management API, and can be specified in the form of “UUID” or b.”UUID”. To learn how to find the project ID, see the Retrieve Forma hub and project ID tutorial. |

### 쿼리 파라미터

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `offset` | int |  | The content view object number from which the pagination starts. This is zero-based. |
| `limit` | int |  | The maximum number of content view objects per page. Acceptable values: 1-200. Default value: 200. |

### 헤더

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `Authorization` | string | **필수** | Must be Bearer <token>, where <token> is a three-legged access token obtained via an Authorization Code flow or a Secure Service Account (SSA) flow. The SSA flow is designed for headless server-to-server operations. While it functions like a two-legged flow (no user interaction), it is classified as three-legged because it preserves user context. |
| `region` | string |  | Specifies the region where the service is located. Possible values: US, EMEA. For the full list of supported regions, see the Regions page. |

## 응답

| 코드 | 의미 | 설명 |
| --- | --- | --- |
| `200` | OK | Successfully retrieved the content views. |
| `400` | Bad Request | The parameters of the requested operation are invalid. |
| `401` | Unauthorized | The provided bearer token is not valid. |
| `403` | Forbidden | The user or service represented by the bearer token does not have permission to perform this operation. |
| `404` | Not Found | The requested resource could not be found. |
| `429` | Too Many Requests | Rate limit exceeded; wait some time before retrying. The ‘Retry-After’ header might provide the amount of the time to wait. |
| `500` | Internal Server Error | An unknown error occurred on the server. |

### 응답 본문 (200)

- `pagination` — `object`  
    The pagination object.
  - `limit` — `int`  
      The maximum number of objects per page.
  - `nextUrl` — `string`  
      The URL path that returns the next page of data.
  - `offset` — `int`  
      The object number from which the pagination starts. This is zero-based.
- `results` — `array: object`  
    A list of content views for the project.
  - `id` — `string: UUID`  
      The content view ID.
  - `type` — `enum:string`  
      The content view type. Possible values: SHEET (2D Sheet), FILE_MODEL (3D Model).
  - `view` — `one of`  
      The content view.
    - `Model View` — `object`  
        The 3D model view.
      - `lineageUrn` — `string`  
          The URN of the 3D model view. To learn how to use this attribute to retrieve details of the 3D model, see the Takeoff Extract Inventory tutorial.
      - `viewName` — `string`  
          The name of the 3D model view.
    - `Sheet View` — `object`  
        The 2D sheet view.
      - `sheetName` — `string`  
          The sheet view name.
      - `calibration` — `object`  
          The sheet view calibration details.
        - `scaleFactor` — `number`  
            The scale used in the sheet view calibration.
        - `units` — `enum:string`  
            The units used in the sheet view calibration. Possible values: FT_AND_DECIMAL_IN, FT_AND_FRACTIONAL_IN, M, CM, MM.

## Example

```
curl -v 'https://developer.api.autodesk.com/construction/takeoff/v1/projects/:projectId/content-views?limit=10' \
  -H 'Authorization: Bearer AuIPTf4KYLTYGVnOHQ0cuolwCW2a'
```

```
{
  "pagination": {
    "limit": 2,
    "nextUrl": "https://developer.api.autodesk.com/construction/takeoff/v1/resources?limit=2&offset=0",
    "offset": 0
  },
  "results": [
    [
      {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "type": "FILE_MODEL",
        "view": {
          "lineageUrn": "urn:adsk.wipqa:dm.lineage:TCBw0V-GQX2aAWWSSrhQmQ",
          "viewName": "3D"
        }
      },
      {
        "id": "95451383-ee38-44da-b06c-2d5266e726d2",
        "type": "SHEET",
        "view": {
          "sheetName": "A09.05",
          "calibration": {
            "scaleFactor": 0.987,
            "units": "FT_AND_FRACTIONAL_IN"
          }
        }
      }
    ]
  ]
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
- `GET /construction/takeoff/v1/projects/{projectId}/classification-systems/{systemId}` — [Classification Systems](./takeoff-projects-project_id-classification-systems-system_id-GET.md)
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
원본 문서: https://aps.autodesk.com/en/docs/acc/v1/reference/http/takeoff-projects-project_id-content-views-GET
