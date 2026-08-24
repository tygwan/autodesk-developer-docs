---
operation_id: takeoff-projects-project_id-packages-package_id-takeoff-items-takeoff_item_id-GET
method: GET
path: /construction/takeoff/v1/projects/{projectId}/packages/{packageId}/takeoff-items/{takeoffItemId}
group: "Takeoff"
auth_context: user context required
scopes: [data:read]
surface: http
verification: docs-only
---

# Retrieves a specified takeoff item for a package

```http
GET https://developer.api.autodesk.com/construction/takeoff/v1/projects/{projectId}/packages/{packageId}/takeoff-items/{takeoffItemId}
```

| | |
| --- | --- |
| **인증 컨텍스트** | user context required |
| **필요 스코프** | `data:read` |
| **데이터 포맷** | JSON |
| **그룹** | Takeoff |

Retrieves a specified takeoff item for a package.

## 요청

### URI 파라미터

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `projectId` | string: UUID |  | The ID of the project. This corresponds to project ID in the Data Management API, and can be specified in the form of “UUID” or b.”UUID”. To learn how to find the project ID, see the Retrieve Forma hub and project ID tutorial. |
| `packageId` | string: UUID |  | The takeoff package ID. To find the ID, call GET packages. |
| `takeoffItemId` | string: UUID |  | The takeoff item ID. To find the ID, call GET takeoff-items. |

### 헤더

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `Authorization` | string | **필수** | Must be Bearer <token>, where <token> is a three-legged access token obtained via an Authorization Code flow or a Secure Service Account (SSA) flow. The SSA flow is designed for headless server-to-server operations. While it functions like a two-legged flow (no user interaction), it is classified as three-legged because it preserves user context. |
| `region` | string |  | Specifies the region where the service is located. Possible values: US, EMEA. For the full list of supported regions, see the Regions page. |

## 응답

| 코드 | 의미 | 설명 |
| --- | --- | --- |
| `200` | OK | Successfully retrieved the takeoff item. |
| `400` | Bad Request | The parameters of the requested operation are invalid. |
| `401` | Unauthorized | The provided bearer token is not valid. |
| `403` | Forbidden | The user or service represented by the bearer token does not have permission to perform this operation. |
| `404` | Not Found | The requested resource could not be found. |
| `429` | Too Many Requests | Rate limit exceeded; wait some time before retrying. The ‘Retry-After’ header might provide the amount of the time to wait. |
| `500` | Internal Server Error | An unknown error occurred on the server. |

### 응답 본문 (200)

- `id` — `string: UUID`  
    The takeoff item ID.
- `takeoffTypeId` — `string: UUID`  
    The takeoff type ID.
- `type` — `enum:string`  
    The takeoff type method. Possible values: COUNT, DISTANCE, AREA, SELECT. Corresponding UI names: COUNT, LINEAR, AREA, BIM.
- `objectName` — `string`  
    The name of the takeoff type that the item is derived from.
- `geometry` — `string`  
    The geometry of a 2D takeoff item specified in SVG. This property is not returned for a 3D takeoff item.
- `rotationAngle` — `int`  
    The rotation angle of a count item in degrees.
- `objectId` — `int`  
    The ID of the selected BIM model element in the viewing model.
- `propertyValues` — `array: object`  
    A list of takeoff item properties used to calculate quantity.
  - `name` — `string`  
      Name of the property.
  - `unitOfMeasure` — `enum:string`  
      The unit of measurement. Possible values: EA, IN, LF, YD, SI, SF, SY, CI, CF, CY, LBS, TON, MM, M, M2, M3, KG, T.
  - `source` — `enum:string`  
      Specifies how a takeoff property value was obtained. Possible values: MANUAL_ENTRY, BIM_PROPERTY, MEASUREMENT
  - `value`  
      The value of a takeoff instance.
    - `anyOf`  
        The value of a takeoff instance.
      - `Number` — `number`  
          A number representation of the property value.
      - `String` — `string`  
          A string representation of the property value.
- `primaryQuantity` — `object`  
    The quantity of a takeoff.
  - `outputName` — `string`  
      A custom output name from the user.
  - `classificationCodeOne` — `string`  
      Deprecated. The classification code selected from the first classification system.
  - `classificationCodeTwo` — `string`  
      Deprecated. The classification code selected from the second classification system.
  - `quantity` — `number`  
      The quantity of the takeoff.
  - `unitOfMeasure` — `enum:string`  
      The unit of measurement. Possible values: EA, IN, LF, YD, SI, SF, SY, CI, CF, CY, LBS, TON, MM, M, M2, M3, KG, T.
- `secondaryQuantities` — `array: object`  
    A list of secondary takeoff quantities.
  - `outputName` — `string`  
      A custom output name from the user.
  - `classificationCodeOne` — `string`  
      Deprecated. The classification code selected from the first classification system.
  - `classificationCodeTwo` — `string`  
      Deprecated. The classification code selected from the second classification system.
  - `quantity` — `number`  
      The quantity of the takeoff.
  - `unitOfMeasure` — `enum:string`  
      The unit of measurement. Possible values: EA, IN, LF, YD, SI, SF, SY, CI, CF, CY, LBS, TON, MM, M, M2, M3, KG, T.
- `contentView` — `object`  
    The content view reference that this item is associated with.
  - `id` — `string: UUID`  
      The content view ID.
  - `version` — `one of`  
      The content view version.
    - `Data Management Identifier` — `string`  
        The 3D model ID, or the 2D files ID
    - `Sheet identifier` — `string: UUID`  
        Deprecated. The 2D sheet’s ID
- `locationId` — `string: UUID`  
    The location ID associated with the takeoff item. For more information about the location, see GET nodes.
- `createdAt` — `datetime: ISO 8601`  
    The date and time when the resource was created, in the following format: YYYY-MM-DDThh:mm:ssZ.
- `updatedAt` — `datetime: ISO 8601`  
    The date and time when the resource was last updated, in the following format: YYYY-MM-DDThh:mm:ssZ.
- `updatedByName` — `string`  
    The name of the user who last updated the resource.

## Example

```
curl -v 'https://developer.api.autodesk.com/construction/takeoff/v1/projects/:projectId/packages/:packageId/takeoff-items/:takeoffItemId' \
  -H 'Authorization: Bearer AuIPTf4KYLTYGVnOHQ0cuolwCW2a'
```

```
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "takeoffTypeId": "b9380176-9ac2-454d-acdd-fdfd988b9702",
  "type": "COUNT",
  "objectName": "36\" x 48\"",
  "geometry": "<path fill=\"none\" stroke=\"red\" d=\"M 10,10 h 10 m 0,10 h 10 m 0,10 h 10\">",
  "rotationAngle": 45,
  "objectId": 1,
  "propertyValues": [
    {
      "name": "Perimeter",
      "unitOfMeasure": "LF",
      "source": "MEASUREMENT",
      "value": 3
    }
  ],
  "primaryQuantity": {
    "outputName": "Bedroom Wall",
    "classificationCodeOne": "015113",
    "classificationCodeTwo": "011223",
    "quantity": 15,
    "unitOfMeasure": "EA"
  },
  "secondaryQuantities": [
    {
      "outputName": "Wall Paint",
      "classificationCodeOne": "016732",
      "classificationCodeTwo": "011665",
      "quantity": 45,
      "unitOfMeasure": "LF"
    }
  ],
  "contentView": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "version": "urn:adsk.wipstg:fs.file:vf.oeSywgLpSkONo9O6CUZvkQ?version=3"
  },
  "locationId": "ff7f6eb4-6276-4993-bfeb-34cbbbba3a17",
  "createdAt": "2019-08-24T14:15:22Z",
  "updatedAt": "2020-11-11T12:32:45Z",
  "updatedByName": "Jane Johnson"
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
- `GET /construction/takeoff/v1/projects/{projectId}/content-views` — [Retrieves the content views for a project](./takeoff-projects-project_id-content-views-GET.md)
- `GET /construction/takeoff/v1/projects/{projectId}/packages` — [Retrieves the takeoff packages for a project](./takeoff-projects-project_id-packages-GET.md)
- `GET /construction/takeoff/v1/projects/{projectId}/packages/{packageId}` — [Retrieves a specified takeoff package](./takeoff-projects-project_id-packages-package_id-GET.md)
- `PATCH /construction/takeoff/v1/projects/{projectId}/packages/{packageId}` — [Updates the name of a takeoff package for a project](./takeoff-projects-project_id-packages-package_id-PATCH.md)
- `GET /construction/takeoff/v1/projects/{projectId}/packages/{packageId}/takeoff-items` — [Retrieves the takeoff items for a package](./takeoff-projects-project_id-packages-package_id-takeoff-items-GET.md)
- `GET /construction/takeoff/v1/projects/{projectId}/packages/{packageId}/takeoff-types` — [Retrieves the takeoff types for a package](./takeoff-projects-project_id-packages-package_id-takeoff-types-GET.md)
- `GET /construction/takeoff/v1/projects/{projectId}/packages/{packageId}/takeoff-types/{takeoffTypeId}` — [Retrieves a specified takeoff type for a package](./takeoff-projects-project_id-packages-package_id-takeoff-types-takeoff_type_id-GET.md)
- `POST /construction/takeoff/v1/projects/{projectId}/packages` — [Creates a takeoff package for a project](./takeoff-projects-project_id-packages-POST.md)
- `GET /construction/takeoff/v1/projects/{projectId}/settings` — [Retrieves the measurement system settings for a project](./takeoff-projects-project_id-settings-GET.md)
- `PATCH /construction/takeoff/v1/projects/{projectId}/settings` — [Updates the measurement system settings for a project](./takeoff-projects-project_id-settings-PATCH.md)

---
원본 문서: https://aps.autodesk.com/en/docs/acc/v1/reference/http/takeoff-projects-project_id-packages-package_id-takeoff-items-takeoff_item_id-GET
