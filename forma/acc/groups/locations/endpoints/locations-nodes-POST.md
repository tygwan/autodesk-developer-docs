---
operation_id: locations-nodes-POST
method: POST
path: /construction/locations/v2/projects/{projectId}/trees/{treeId}/nodes
group: "Locations"
auth_context: user context required
scopes: [data:write]
surface: http
verification: docs-only
---

# Creates a node in the specified locations tree

```http
POST https://developer.api.autodesk.com/construction/locations/v2/projects/:projectId/trees/:treeId/nodes
```

| | |
| --- | --- |
| **인증 컨텍스트** | user context required |
| **필요 스코프** | `data:write` |
| **데이터 포맷** | JSON |
| **그룹** | Locations |

Creates a node in the specified locations tree. Note that creating the root node is not allowed because the root node is created automatically when the project is created.

## 요청

### URI 파라미터

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `projectId` | string: UUID |  | The identifier of the project that contains your locations tree. Use the Data Management API to retrieve the relevant Forma hub and project IDs. |
| `treeId` | string |  | Must be default. Currently a project can contain only the default tree. |

### 쿼리 파라미터

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `targetNodeId` | string: UUID |  | Unique identifier of a node that will be the new node’s immediate sibling in the locations tree. The target node’s parentId must match the body.parentId field in the request. Note that nodes in a given tier of the tree have a defined sequence order. The new node will be created in the same tier, either before or after the target node. You specify the sequence position of the new node using the insertOption parameter. Note that this parameter is unavailable if this request is creating an existing node’s first child node. Required only when insertOption is also included in the request. |
| `insertOption` | enum:string |  | Where to insert the new node relative to the target node that you specified with targetNodeId. The nodes in a given tier of the tree have a defined sequence order, and insertOption specifies whether the new node comes before or after the target node. Required only when targetNodeId is also included in the request. Possible values: After, Before |

### 헤더

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `Authorization` | string | **필수** | Must be Bearer <token>, where <token> is a three-legged access token obtained via an Authorization Code flow or a Secure Service Account (SSA) flow. The SSA flow is designed for headless server-to-server operations. While it functions like a two-legged flow (no user interaction), it is classified as three-legged because it preserves user context. |
| `Content-Type` | string | **필수** | Must be application/json |

### 요청 본문

- `parentId` — `string: UUID` **(필수)**  
    The identifier of the parent node of this LBS node.
- `type` — `enum:string` **(필수)**  
    The type of this LBS node. Note that only Area is a currently supported request value. Possible values: Area, Level, Root
- `name` — `string` **(필수)**  
    The name of this LBS node. Max length: 255
- `description` — `string`  
    Not relevant
- `barcode` — `string`  
    The barcode that represents this LBS node. This value must be unique per project. Max length: 255

## 응답

| 코드 | 의미 | 설명 |
| --- | --- | --- |
| `201` | Created | Node created |
| `400` | Bad Request | Bad request |
| `403` | Forbidden | Forbidden. The caller has no permission to perform this operation. |
| `404` | Not Found | The specified project or tree was not found. |

### 응답 본문 (201)

- `id` — `string: UUID`  
    The unique identifier of the new LBS node.
- `parentId` — `string: UUID`  
    The identifier of the parent node of this LBS node.
- `type` — `enum:string`  
    The type of this LBS node. Note that only Area is a currently supported request value. Possible values: Area, Level, Root
- `name` — `string`  
    The name of this LBS node. Max length: 255
- `description` — `string`  
    Not relevant
- `barcode` — `string`  
    The barcode that represents this LBS node. This value must be unique per project. Max length: 255
- `order` — `int`  
    This node’s position relative to its sibling nodes. Nodes with the same parent have a defined sequence order. A node with a lower order value will be positioned before a node with a higher order value. This is zero-based; for example, a node with an order value of 3 is the fourth node among its sibling nodes. If an existing sibling node has the same or higher order value, that value will be incremented to make room for the new node.
- `documentCount` — `int`  
    This field is reserved for future use.

## Example

```
curl -v 'https://developer.api.autodesk.com/construction/locations/v2/projects/:projectId/trees/:treeId/nodes' \
  -X 'POST' \
  -H 'Authorization: Bearer AuIPTf4KYLTYGVnOHQ0cuolwCW2a' \
  -H 'Content-Type: application/json' \
  -d '{
        "parentId": "88e07ccb-4594-4dc5-8973-304412b8fa96",
        "type": "Area",
        "name": "Suite 205",
        "description": "The Suite 205 node",
        "barcode": "1234567890"
      }'
```

```
{
  "id": "de9aca33-5e0c-4668-85fa-f96273db4b35",
  "parentId": "88e07ccb-4594-4dc5-8973-304412b8fa96",
  "type": "Area",
  "name": "Suite 205",
  "description": null,
  "barcode": "ABC123",
  "order": 0
}
```

## 같은 그룹의 다른 엔드포인트

- `GET /construction/locations/v2/projects/{projectId}/trees/{treeId}/nodes` — [Retrieves an array of nodes (locations) from the specified locations tree (LBS)](./locations-nodes-GET.md)
- `DELETE /construction/locations/v2/projects/{projectId}/trees/{treeId}/nodes/{nodeId}` — [Deletes the specified node from the specified locations tree](./locations-nodesnodeid-DELETE.md)
- `PATCH /construction/locations/v2/projects/{projectId}/trees/{treeId}/nodes/{nodeId}` — [Updates the name or barcode of the specified node of the specified locations tree](./locations-nodesnodeid-PATCH.md)

---
원본 문서: https://aps.autodesk.com/en/docs/acc/v1/reference/http/locations-nodes-POST
