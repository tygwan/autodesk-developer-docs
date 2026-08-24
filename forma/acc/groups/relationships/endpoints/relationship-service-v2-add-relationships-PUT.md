---
operation_id: relationship-service-v2-add-relationships-PUT
method: PUT
path: /bim360/relationship/v2/containers/{containerId}/relationships
group: "Relationships"
auth_context: user context required
scopes: [data:create, data:write]
surface: http
verification: docs-only
---

# Creates a relationship between two entities (for example, asset and document)

```http
PUT https://developer.api.autodesk.com/bim360/relationship/v2/containers/:containerId/relationships
```

| | |
| --- | --- |
| **인증 컨텍스트** | user context required |
| **필요 스코프** | `data:create`, `data:write` |
| **데이터 포맷** | JSON |
| **그룹** | Relationships |

Creates a relationship between two entities (for example, asset and document). Relationships are stored in the project container, and are retrievable via the relationships search endpoints.

## 요청

### URI 파라미터

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `containerId` | string: UUID |  | The project ID. |

### 헤더

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `Authorization` | string | **필수** | Must be Bearer <token>, where <token> is obtained via a three-legged OAuth flow. |
| `Content-Type` | string | **필수** | Must be application/json |
| `x-ads-region` | enum: string |  | The region to which your request should be routed. If not set, the request is routed automatically but may incur a small latency increase. Possible values: US, EMEA. For the full list of supported regions, see the Regions page. |

### 요청 본문

- `id` — `string: UUID`  
    The UUID that uniquely identifies the relationship. If no id is supplied, the system automatically allocates one.
- `entities` — `array: object` **(필수)**  
    The entities to be contained in the relationship. Min items: 2 Max items: 2
  - `domain` — `string` **(필수)**  
      The domain to which the entity belongs. To learn more about domains and entities, see the Relationship Service Field Guide. Max length: 128
  - `type` — `string` **(필수)**  
      The type of entity. Max length: 128
  - `id` — `string` **(필수)**  
      The unique identifier of the entity. Max length: 512

## 응답

| 코드 | 의미 | 설명 |
| --- | --- | --- |
| `200` | OK | Success |
| `400` | Bad Request | The parameters of the requested operation are invalid. |
| `401` | Unauthorized | The provided bearer token is not valid. |
| `403` | Forbidden | The user or service represented by the bearer token does not have permission to perform this operation. |
| `404` | Not Found | The requested resource could not be found. |
| `409` | Conflict | Indicates that the request could not be carried out because of a conflict on the server. |
| `415` | Unsupported Media Type | The Content-Type header must be application/json. |
| `429` | Too Many Requests | Rate limit exceeded; wait some time before retrying. The Retry-After header might provide the amount of the time to wait. |
| `500` | Internal Server Error | An unknown error occurred on the server. |

### 응답 본문 (200)

- `id` — `string: UUID`  
    The UUID that uniquely identifies the relationship.
- `createdOn` — `datetime: ISO 8601`  
    The date and time the relationship was created.
- `isReadOnly` — `boolean`  
    true if this relationship is read only for the current caller. false if this relationship is not read only for the current caller.
- `isService` — `boolean`  
    true if this relationship was created by a service. false if this relationship was not created by a service.
- `isDeleted` — `boolean`  
    true if this relationship is deleted. false if this relationship is not deleted.
- `deletedOn` — `datetime: ISO 8601`  
    The date and time the relationship was deleted.
- `entities` — `array: object`  
    The entities contained in the relationship. Min items: 2 Max items: 2
  - `createdOn` — `datetime: ISO 8601`  
      The date and time the entity was created.
  - `domain` — `string`  
      The domain to which the entity belongs. To learn more about domains and entities, see the Relationship Service Field Guide. Max length: 128
  - `type` — `string`  
      The type of entity. Max length: 128
  - `id` — `string`  
      The unique identifier of the entity. Max length: 512

### 응답 본문 (400)

- `type` — `string`  
    The error code.
- `title` — `string`  
    A short title for the error.
- `detail` — `string`  
    A more detailed, human readable description of the error, assuming that this message is not localized and is therefore EN-US. UI consumers can use the error.type value to provide a localized version of this error for presentation.
- `errors` — `array: object`  
    A set of specific validation errors that need to be fixed.
  - `field` — `string`  
      The field that failed validation.
  - `title` — `string`  
      A short title for the error.
  - `detail` — `string`  
      A more detailed, human readable description of the error, assuming that this message is not localized and is therefore EN-US. UI consumers can use the error.type value to provide a localized version of this error for presentation.
  - `type` — `string`  
      The error code.

### 응답 본문 (409)

- `success` — `array: object`  
    Successfully created relationships.
  - `id` — `string: UUID`  
      The UUID that uniquely identifies the relationship.
  - `createdOn` — `datetime: ISO 8601`  
      The date and time the relationship was created.
  - `isReadOnly` — `boolean`  
      true if this relationship is read only for the current caller. false if this relationship is not read only for the current caller.
  - `isService` — `boolean`  
      true if this relationship was created by a service. false if this relationship was not created by a service.
  - `isDeleted` — `boolean`  
      true if this relationship is deleted. false if this relationship is not deleted.
  - `deletedOn` — `datetime: ISO 8601`  
      The date and time the relationship was deleted.
  - `entities` — `array: object`  
      The entities contained in the relationship. Min items: 2 Max items: 2
    - `createdOn` — `datetime: ISO 8601`  
        The date and time the entity was created.
    - `domain` — `string`  
        The domain to which the entity belongs. To learn more about domains and entities, see the Relationship Service Field Guide. Max length: 128
    - `type` — `string`  
        The type of entity. Max length: 128
    - `id` — `string`  
        The unique identifier of the entity. Max length: 512
- `conflict` — `array: object`  
    Conflicting relationships. A conflict between IDs of an existing relationship and a proposed relationship, or due to allocating an array of entity items two different IDs.
  - `id` — `string: UUID`  
      The UUID of the conflict.
  - `actual` — `object`  
      A set of related domain entities.
    - `id` — `string: UUID`  
        The UUID that uniquely identifies the relationship.
    - `createdOn` — `datetime: ISO 8601`  
        The date and time the relationship was created.
    - `isReadOnly` — `boolean`  
        true if this relationship is read only for the current caller. false if this relationship is not read only for the current caller.
    - `isService` — `boolean`  
        true if this relationship was created by a service. false if this relationship was not created by a service.
    - `isDeleted` — `boolean`  
        true if this relationship is deleted. false if this relationship is not deleted.
    - `deletedOn` — `datetime: ISO 8601`  
        The date and time the relationship was deleted.
    - `entities` — `array: object`  
        The entities contained in the relationship. Min items: 2 Max items: 2
      - `createdOn` — `datetime: ISO 8601`  
          The date and time the entity was created.
      - `domain` — `string`  
          The domain to which the entity belongs. To learn more about domains and entities, see the Relationship Service Field Guide. Max length: 128
      - `type` — `string`  
          The type of entity. Max length: 128
      - `id` — `string`  
          The unique identifier of the entity. Max length: 512

## Example

```
curl -v 'https://developer.api.autodesk.com/bim360/relationship/v2/containers/fbd6cb57-7d0e-4961-8c2c-69646514ef44/relationships' \
     -X PUT \
     -H 'Authorization: Bearer <token>' \
     -H 'Content-Type: application/json' \
     -d '[
           {
             "entities": [
               {
                 "domain": "autodesk-bim360-asset",
                 "type": "asset",
                 "id": "2b95ba7a-3df5-4e99-a693-9c7cc15ee8c0",
                 "createdOn": "2021-07-29T11:39:12+01:00"
               },
               {
                 "domain": "autodesk-bim360-documentmanagement",
                 "type": "documentlineage",
                 "id": "urn:adsk.wipprod:dm.lineage:hC6k4hndRWaeIVhIjvHu8w",
                 "createdOn": "2021-07-29T13:39:12+01:00"
               }
             ]
           }
         ]'
```

```
[
  {
    "id": "74b70bb8-8802-a1fd-f201-890375a60c8f",
    "createdOn": "2015-10-21T16:32:22Z",
    "isReadOnly": true,
    "isService": false,
    "isDeleted": false,
    "entities": [
      {
        "domain": "autodesk-bim360-asset",
        "type": "asset",
        "id": "2b95ba7a-3df5-4e99-a693-9c7cc15ee8c0",
        "createdOn": "2021-07-29T11:39:12+01:00"
      },
      {
        "domain": "autodesk-bim360-documentmanagement",
        "type": "documentlineage",
        "id": "urn:adsk.wipprod:dm.lineage:hC6k4hndRWaeIVhIjvHu8w",
        "createdOn": "2021-07-29T13:39:12+01:00"
      }
    ]
  }
]
```

```
{
  "type": "BadInput",
  "title": "One or more input values in the request were bad",
  "detail": "The following parameters are invalid: containerId",
  "errors": [
    {
      "field": "containerId",
      "title": "Invalid parameter",
      "detail": "The value 'testing' is not valid.",
      "type": "BadInput"
    }
  ]
}
```

```
{
  "success": [
    {
      "id": "74b70bb8-8802-a1fd-f201-890375a60c8f",
      "createdOn": "2015-10-21T16:32:22Z",
      "isReadOnly": true,
      "isService": false,
      "isDeleted": false,
      "entities": [
        {
          "domain": "autodesk-bim360-asset",
          "type": "asset",
          "id": "2b95ba7a-3df5-4e99-a693-9c7cc15ee8c0",
          "createdOn": "2021-07-29T11:39:12+01:00"
        },
        {
          "domain": "autodesk-bim360-documentmanagement",
          "type": "documentlineage",
          "id": "urn:adsk.wipprod:dm.lineage:hC6k4hndRWaeIVhIjvHu8w",
          "createdOn": "2021-07-29T13:39:12+01:00"
        }
      ]
    }
  ],
  "conflict": [
    {
      "id": "74b70bb8-8802-a1fd-f201-890375a60c8f",
      "actual": {
        "id": "74b70bb8-8802-a1fd-f201-890375a60c8f",
        "createdOn": "2015-10-21T16:32:22Z",
        "isReadOnly": true,
        "isService": false,
        "isDeleted": false,
        "entities": [
          {
            "domain": "autodesk-bim360-asset",
            "type": "asset",
            "id": "2b95ba7a-3df5-4e99-a693-9c7cc15ee8c0",
            "createdOn": "2021-07-29T11:39:12+01:00"
          },
          {
            "domain": "autodesk-bim360-documentmanagement",
            "type": "documentlineage",
            "id": "urn:adsk.wipprod:dm.lineage:hC6k4hndRWaeIVhIjvHu8w",
            "createdOn": "2021-07-29T13:39:12+01:00"
          }
        ]
      }
    }
  ]
}
```

## 같은 그룹의 다른 엔드포인트

- `POST /bim360/relationship/v2/containers/{containerId}/relationships:delete` — [Deletes one or more relationships by passing an array of relationship UUIDs](./relationship-service-v2-delete-relationships-POST.md)
- `GET /bim360/relationship/v2/containers/{containerId}/relationships/{relationshipId}` — [Retrieves a requested relationship based on the relationship’s ID](./relationship-service-v2-get-relationship-by-id-GET.md)
- `POST /bim360/relationship/v2/containers/{containerId}/relationships:batch` — [Retrieves a list of one or more relationships by passing an array of relationship IDs](./relationship-service-v2-get-relationships-batch-POST.md)
- `GET /bim360/relationship/v2/utility/relationships:writable` — [GET utility/relationships:writable](./relationship-service-v2-get-writable-relationship-domains-GET.md)
- `POST /bim360/relationship/v2/containers/{containerId}/relationships:intersect` — [Retrieves a list of relationships that contain the specified relationship entities](./relationship-service-v2-intersect-relationships-POST.md)
- `POST /bim360/relationship/v2/containers/{containerId}/relationships:sync` — [Synchronise relationships using the (optional) synchronization token passed by the caller](./relationship-service-v2-relationships-sync-POST.md)
- `POST /bim360/relationship/v2/containers/{containerId}/relationships:syncStatus` — [Retrieves the relationship synchronization status for the caller as one or more synchronization tokens](./relationship-service-v2-relationships-sync-status-POST.md)
- `GET /bim360/relationship/v2/containers/{containerId}/relationships:search` — [Retrieves a list of relationships that match the provided search parameters](./relationship-service-v2-search-relationships-GET.md)

---
원본 문서: https://aps.autodesk.com/en/docs/acc/v1/reference/http/relationship-service-v2-add-relationships-PUT
