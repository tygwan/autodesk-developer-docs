---
operation_id: relationship-service-v2-get-writable-relationship-domains-GET
method: GET
path: /bim360/relationship/v2/utility/relationships:writable
group: "Relationships"
auth_context: user context required
scopes: [data:read]
surface: http
verification: docs-only
---

# GET utility/relationships:writable

```http
GET https://developer.api.autodesk.com/bim360/relationship/v2/utility/relationships:writable
```

| | |
| --- | --- |
| **인증 컨텍스트** | user context required |
| **필요 스코프** | `data:read` |
| **데이터 포맷** | JSON |
| **그룹** | Relationships |

Retrieves a list of entity types that are compatible with each other, to establish whether you can create relationships between them or to delete those relationships. For example, between an asset and a document.

## 요청

### 헤더

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `Authorization` | string | **필수** | Must be Bearer <token>, where <token> is obtained via a three-legged OAuth flow. |
| `x-ads-region` | enum: string |  | The region to which your request should be routed. If not set, the request is routed automatically but may incur a small latency increase. Possible values: US, EMEA. For the full list of supported regions, see the Regions page. |

## 응답

| 코드 | 의미 | 설명 |
| --- | --- | --- |
| `200` | OK | Success |
| `401` | Unauthorized | The provided bearer token is not valid. |
| `403` | Forbidden | The user or service represented by the bearer token does not have permission to perform this operation. |
| `429` | Too Many Requests | Rate limit exceeded; wait some time before retrying. The Retry-After header might provide the amount of the time to wait. |
| `500` | Internal Server Error | An unknown error occurred on the server. |

### 응답 본문 (200)

- `domain` — `string`  
    The domain to which the entity types belong. For example: autodesk-bim360-asset To learn more about domains and entities, see the Relationship Service Field Guide.
- `entityTypes` — `array: object`  
    The list of entity types in the domain.
  - `entityType` — `string`  
      An individual entity type. For example: asset.
  - `allow` — `array: object`  
      The allow list for the entity type.
    - `domain` — `string`  
        The domain containing the allowed entity types.
    - `entityTypes` — `array: string`  
        The allowed entity types.

## Example

```
curl -v 'https://developer.api.autodesk.com/bim360/relationship/v2/utility/relationships:writable' \
     -H 'Authorization: Bearer <token>'
```

```
[
  {
    "domain": "autodesk-bim360-asset",
    "entityTypes": [
      {
        "entityType": "asset",
        "allow": [
          {
            "domain": "autodesk-bim360-documentmanagement",
            "entityTypes": [
              "documentlineage"
            ]
          }
        ]
      }
    ]
  }
]
```

## 같은 그룹의 다른 엔드포인트

- `PUT /bim360/relationship/v2/containers/{containerId}/relationships` — [Creates a relationship between two entities (for example, asset and document)](./relationship-service-v2-add-relationships-PUT.md)
- `POST /bim360/relationship/v2/containers/{containerId}/relationships:delete` — [Deletes one or more relationships by passing an array of relationship UUIDs](./relationship-service-v2-delete-relationships-POST.md)
- `GET /bim360/relationship/v2/containers/{containerId}/relationships/{relationshipId}` — [Retrieves a requested relationship based on the relationship’s ID](./relationship-service-v2-get-relationship-by-id-GET.md)
- `POST /bim360/relationship/v2/containers/{containerId}/relationships:batch` — [Retrieves a list of one or more relationships by passing an array of relationship IDs](./relationship-service-v2-get-relationships-batch-POST.md)
- `POST /bim360/relationship/v2/containers/{containerId}/relationships:intersect` — [Retrieves a list of relationships that contain the specified relationship entities](./relationship-service-v2-intersect-relationships-POST.md)
- `POST /bim360/relationship/v2/containers/{containerId}/relationships:sync` — [Synchronise relationships using the (optional) synchronization token passed by the caller](./relationship-service-v2-relationships-sync-POST.md)
- `POST /bim360/relationship/v2/containers/{containerId}/relationships:syncStatus` — [Retrieves the relationship synchronization status for the caller as one or more synchronization tokens](./relationship-service-v2-relationships-sync-status-POST.md)
- `GET /bim360/relationship/v2/containers/{containerId}/relationships:search` — [Retrieves a list of relationships that match the provided search parameters](./relationship-service-v2-search-relationships-GET.md)

---
원본 문서: https://aps.autodesk.com/en/docs/acc/v1/reference/http/relationship-service-v2-get-writable-relationship-domains-GET
