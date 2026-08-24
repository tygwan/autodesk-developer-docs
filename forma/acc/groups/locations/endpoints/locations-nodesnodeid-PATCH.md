---
operation_id: locations-nodesnodeid-PATCH
method: PATCH
path: /construction/locations/v2/projects/{projectId}/trees/{treeId}/nodes/{nodeId}
group: "Locations"
auth_context: user context required
scopes: [data:write]
surface: http
verification: docs-only
---

# Updates the name or barcode of the specified node of the specified locations tree

```http
PATCH https://developer.api.autodesk.com/construction/locations/v2/projects/:projectId/trees/:treeId/nodes/:nodeId
```

| | |
| --- | --- |
| **인증 컨텍스트** | user context required |
| **필요 스코프** | `data:write` |
| **데이터 포맷** | JSON |
| **그룹** | Locations |

Updates the name or barcode of the specified node of the specified locations tree.

## 요청

### URI 파라미터

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `projectId` | string: UUID |  | The identifier of the project that contains your locations tree. Use the Data Management API to retrieve the relevant Forma hub and project IDs. |
| `treeId` | string |  | Must be default. Currently a project can contain only the default tree. |
| `nodeId` | string: UUID |  | The unique identifier of an LBS node. To find node IDs, call the GET nodes endpoint and check the value of results.id in the returned nodes. |

### 헤더

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `Authorization` | string | **필수** | Must be Bearer <token>, where <token> is a three-legged access token obtained via an Authorization Code flow or a Secure Service Account (SSA) flow. The SSA flow is designed for headless server-to-server operations. While it functions like a two-legged flow (no user interaction), it is classified as three-legged because it preserves user context. |
| `Content-Type` | string | **필수** | Must be application/json |

### 요청 본문

- `name` — `string` **(필수)**  
    The name of the specified LBS node to update. Note that you must specify name, barcode, or both for this endpoint to succeed. Max length: 255
- `barcode` — `string` **(필수)**  
    The barcode of the specified LBS node to update. This value must be unique per project. Note that you must specify barcode, name, or both for this endpoint to succeed. Max length: 255

## 응답

| 코드 | 의미 | 설명 |
| --- | --- | --- |
| `200` | OK | Node updated |
| `400` | Bad Request | Bad request. Note that renaming the root node is not permitted. |
| `403` | Forbidden | Forbidden. The caller has no permission to perform this operation. |
| `404` | Not Found | The specified project, tree or node was not found. |

### 응답 본문 (200)

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

## Example

```
curl -v 'https://developer.api.autodesk.com/construction/locations/v2/projects/:projectId/trees/:treeId/nodes/:nodeId' \
  -X 'PATCH' \
  -H 'Authorization: Bearer AuIPTf4KYLTYGVnOHQ0cuolwCW2a' \
  -H 'Content-Type: application/json' \
  -d '{
        "name": "Suite 205",
        "barcode": "1234567890"
      }'
```

```
{
  "id": "802ffa47-6e29-40f5-8e82-65bda03a7f5a",
  "parentId": "88e07ccb-4594-4dc5-8973-304412b8fa96",
  "type": "Area",
  "name": "Suite 205",
  "description": "The Suite 205 node",
  "barcode": "1234567890",
  "order": 0
}
```

## 같은 그룹의 다른 엔드포인트

- `GET /construction/locations/v2/projects/{projectId}/trees/{treeId}/nodes` — [Retrieves an array of nodes (locations) from the specified locations tree (LBS)](./locations-nodes-GET.md)
- `POST /construction/locations/v2/projects/{projectId}/trees/{treeId}/nodes` — [Creates a node in the specified locations tree](./locations-nodes-POST.md)
- `DELETE /construction/locations/v2/projects/{projectId}/trees/{treeId}/nodes/{nodeId}` — [Deletes the specified node from the specified locations tree](./locations-nodesnodeid-DELETE.md)

---
원본 문서: https://aps.autodesk.com/en/docs/acc/v1/reference/http/locations-nodesnodeid-PATCH
