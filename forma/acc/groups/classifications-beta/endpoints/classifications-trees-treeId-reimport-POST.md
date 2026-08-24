---
operation_id: classifications-trees-treeId-reimport-POST
method: POST
path: /construction/classifications/v1/projects/{projectId}/trees/{treeId}:reimport
group: "Classifications (beta)"
auth_context: user context required
scopes: [data:write]
surface: http
verification: docs-only
---

# Trees

```http
POST https://developer.api.autodesk.com/construction/classifications/v1/projects/{projectId}/trees/{treeId}:reimport
```

| | |
| --- | --- |
| **인증 컨텍스트** | user context required |
| **필요 스코프** | `data:write` |
| **데이터 포맷** | JSON |
| **그룹** | Classifications (beta) |

Updates the nodes of an existing classification tree by reimporting a structured hierarchy, and publishes the result as the latest version (tip version).

## 요청

### URI 파라미터

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `projectId` | string: UUID |  | The ID of the project. Use the Data Management API to retrieve the project ID. For more information, see the Retrieve a Project ID tutorial. You need to convert the project ID into a project ID for the Forma API by removing the b. prefix. For example, a project ID of b.a4be0c34a-4ab7 translates to a project ID of a4be0c34a-4ab7. |
| `treeId` | string: UUID |  | The unique identifier of the classification tree. To find the ID, call GET trees. |

### 헤더

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `Authorization` | string | **필수** | Must be Bearer <token>, where <token> is a three-legged access token obtained via an Authorization Code flow or a Secure Service Account (SSA) flow. The SSA flow is designed for headless server-to-server operations. While it functions like a two-legged flow (no user interaction), it is classified as three-legged because it preserves user context. |
| `Region` | string |  | The region to which your request should be routed. If not set, the request is routed automatically but may incur a small latency increase. Examples include: US, EMEA. For the full list of supported regions, see the Regions page. |
| `Content-Type` | string | **필수** | Must be application/json |

### 요청 본문

- `name` — `string` **(필수)**  
    The name of the tree. Max length: 256
- `description` — `string`  
    The description of the tree. Max length: 256
- `importData` — `array: object` **(필수)**  
    A list of root nodes for the tree. Each node can include nested children to represent the hierarchy. The full payload supports up to 50000 total nodes across all levels, with a maximum nesting depth of 10. During reimport, nodes omitted from the hierarchy are marked as deleted in the new tip version.
  - `id` — `string: UUID`  
      The UUID identifier of the node. Optional for import and reimport. During reimport, if provided, the system uses this value to match and update an existing node. If no matching node is found or the field is omitted, a new node is created at the same position in the hierarchy.
  - `name` — `string` **(필수)**  
      The display name of the node. Max length: 2048
  - `nodeCode` — `string`  
      A code that uniquely identifies the node within the tree. Max length: 256
  - `children` — `array`  
      The child nodes nested under this node. Each child follows the same structure and can include further nested children. Up to 50000 items are accepted in this array.

## 응답

| 코드 | 의미 | 설명 |
| --- | --- | --- |
| `201` | Created | Successfully updated the classification tree nodes and published the result as the latest version (tip version). |
| `400` | Bad Request | The request could not be understood by the server due to malformed syntax or missing request headers. |
| `401` | Unauthorized | Invalid or missing authorization header. |
| `403` | Forbidden | The user is not authorized to perform this operation. |
| `404` | Not Found | The specified project or tree was not found. |
| `409` | Conflict | The request conflicts with the current state of the resource. |
| `422` | Unprocessable Entity | The request body syntax is correct but could not be processed. |
| `429` | Too Many Requests | Rate limit exceeded. See the Classifications Rate Limits page. |
| `500` | Internal Server Error | An unexpected error occurred on the server. |

### 응답 본문 (201)

- `id` — `string: UUID`  
    The unique identifier of the classification tree.
- `name` — `string`  
    The name of the tree.
- `description` — `string`  
    The description of the tree.
- `isBasedOnAccountTree` — `boolean`  
    true : the tree is linked to an account-level source tree and changes to the source may propagate to this tree. false : the tree is either standalone or was originally based on an account tree but has since been disconnected.
- `treeConnectionType`  
    The connection state of the tree. standalone: not derived from another tree. connected: derived from another tree and linked to it. disconnected: derived from another tree but disconnected from it.
  - `anyOf`  
      The connection state of the tree. standalone: not derived from another tree. connected: derived from another tree and linked to it. disconnected: derived from another tree but disconnected from it.
    - `0` — `enum:string`  
        Will always be: standalone
    - `1` — `enum:string`  
        Will always be: connected
    - `2` — `enum:string`  
        Will always be: disconnected
- `originalTreeId` — `string: UUID`  
    The ID of the source tree this tree was based on. This can be a tree from the same project or from an account-level library. Returns null if the tree was not derived from another tree.
- `createdAt` — `datetime: ISO 8601`  
    The date and time when the tree was created, in the following format YYYY-MM-DDTHH:mm:ss.SSSZ (ISO 8601) in UTC. For example 2018-07-22T15:05:58.033Z.
- `updatedAt` — `datetime: ISO 8601`  
    The date and time when the tree was last updated, in the following format: YYYY-MM-DDTHH:mm:ss.SSSZ (ISO 8601) in UTC. For example, 2018-07-22T15:05:58.033Z. Note that this value is also updated when a new version is published.
- `createdBy` — `string`  
    The Autodesk ID of the user who created the tree. To find the name of user, call GET users.
- `updatedBy` — `string`  
    The Autodesk ID of the user who last updated the tree. To find the name of user, call GET users.

## Example

```
curl -v 'https://developer.api.autodesk.com/construction/classifications/v1/projects/0195f158-6f95-7fb0-b008-4cde506166dd/trees/0295f158-6f95-7fb0-b008-4cde506166ee:reimport' \
  -X 'POST' \
  -H 'Authorization: Bearer AuIPTf4KYLTYGVnOHQ0cuolwCW2a' \
  -H 'Content-Type: application/json' \
  -d '{
        "name": "Locations",
        "description": "",
        "importData": [
          {
            "id": "019eda35-47f9-752b-9884-bfeb7231e505",
            "name": "Floor 0",
            "nodeCode": "FLOOR-0",
            "children": [
              {
                "id": "019eda35-47f9-752b-9884-bfeb7231e506",
                "name": "Living room",
                "nodeCode": "LIVING-ROOM-0"
              },
              {
                "id": "019eda35-47f9-752b-9884-bfeb7231e507",
                "name": "Bedroom 1",
                "nodeCode": "BEDROOM-0-1"
              },
              {
                "name": "Bedroom 2",
                "nodeCode": "BEDROOM-0-2"
              }
            ]
          },
          {
            "id": "019eda35-47f9-752b-9884-bfeb7231e508",
            "name": "Floor 1",
            "nodeCode": "FLOOR-1",
            "children": [
              {
                "id": "019eda35-47f9-752b-9884-bfeb7231e509",
                "name": "Music room",
                "nodeCode": "MUSIC-ROOM-1"
              },
              {
                "id": "019eda35-47f9-752b-9884-bfeb7231e510",
                "name": "Bedroom 3",
                "nodeCode": "BEDROOM-1-3"
              }
            ]
          },
          {
            "name": "Roof"
          }
        ]
      }'
```

```
{
  "id": "0295f158-6f95-7fb0-b008-4cde506166ee",
  "name": "Locations",
  "description": "Structure of places on the building site",
  "isBasedOnAccountTree": false,
  "treeConnectionType": "standalone",
  "originalTreeId": "0195f158-6f95-7fb0-b008-4cde506166dd",
  "createdAt": "2018-07-22T15:05:58.033Z",
  "updatedAt": "2018-07-22T15:05:58.033Z",
  "createdBy": "A3RGM375QTZ7",
  "updatedBy": "A3RGM375QTZ7"
}
```

## 같은 그룹의 다른 엔드포인트

- `GET /construction/classifications/v1/projects/{projectId}/trees` — [Retrieves a list of classification trees in a project, sorted by creation date from newest to oldest](./classifications-trees-GET.md)
- `GET /construction/classifications/v1/projects/{projectId}/trees/{treeId}` — [Retrieves the metadata for a specific classification tree, without its nodes](./classifications-trees-treeId-GET.md)
- `PATCH /construction/classifications/v1/projects/{projectId}/trees/{treeId}` — [Updates a tree’s name or description](./classifications-trees-treeId-PATCH.md)
- `GET /construction/classifications/v1/projects/{projectId}/trees/{treeId}/versions/tip/nodes` — [Retrieves the nodes from the latest version (tip version) of a classification tree](./classifications-trees-treeId-versions-tip-nodes-GET.md)
- `POST /construction/classifications/v1/projects/{projectId}/trees:import` — [Trees](./classifications-treesimport-POST.md)

---
원본 문서: https://aps.autodesk.com/en/docs/acc/v1/reference/http/classifications-trees-treeId-reimport-POST
