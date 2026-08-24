---
operation_id: classifications-trees-treeId-versions-tip-nodes-GET
method: GET
path: /construction/classifications/v1/projects/{projectId}/trees/{treeId}/versions/tip/nodes
group: "Classifications (beta)"
auth_context: user context required
scopes: [data:read]
surface: http
verification: docs-only
---

# Retrieves the nodes from the latest version (tip version) of a classification tree

```http
GET https://developer.api.autodesk.com/construction/classifications/v1/projects/{projectId}/trees/{treeId}/versions/tip/nodes
```

| | |
| --- | --- |
| **인증 컨텍스트** | user context required |
| **필요 스코프** | `data:read` |
| **데이터 포맷** | JSON |
| **그룹** | Classifications (beta) |

Retrieves the nodes from the latest version (tip version) of a classification tree.

## 요청

### URI 파라미터

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `projectId` | string: UUID |  | The ID of the project. Use the Data Management API to retrieve the project ID. For more information, see the Retrieve a Project ID tutorial. You need to convert the project ID into a project ID for the Forma API by removing the b. prefix. For example, a project ID of b.a4be0c34a-4ab7 translates to a project ID of a4be0c34a-4ab7. |
| `treeId` | string: UUID |  | The unique identifier of the classification tree. To find the ID, call GET trees. |

### 쿼리 파라미터

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `limit` | int |  | The maximum number of results to return per page. Acceptable values are 1-10000. Default value: 100. |
| `offset` | int |  | The number of results to skip before returning results. Use this together with limit to paginate through results. Default value: 0. |
| `includeDeleted` | boolean |  | true: includes deleted nodes in the response. false: excludes deleted nodes from the response. |

### 헤더

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `Authorization` | string | **필수** | Must be Bearer <token>, where <token> is a three-legged access token obtained via an Authorization Code flow or a Secure Service Account (SSA) flow. The SSA flow is designed for headless server-to-server operations. While it functions like a two-legged flow (no user interaction), it is classified as three-legged because it preserves user context. |
| `Region` | string |  | The region to which your request should be routed. If not set, the request is routed automatically but may incur a small latency increase. Examples include: US, EMEA. For the full list of supported regions, see the Regions page. |

## 응답

| 코드 | 의미 | 설명 |
| --- | --- | --- |
| `200` | OK | Successfully retrieved the nodes from the latest version (tip version) of the classification tree |
| `304` | Not Modified | The requested resource has not been modified since the last request |
| `401` | Unauthorized | Invalid or missing authorization header. |
| `403` | Forbidden | The user is not authorized to perform this operation. |
| `404` | Not Found | The specified project or tree was not found. |
| `429` | Too Many Requests | Rate limit exceeded. See the Classifications Rate Limits page. |
| `500` | Internal Server Error | An unexpected error occurred on the server. |

### 응답 본문 (200)

- `pagination` — `object`  
    Pagination details for the result set.
  - `limit` — `int`  
      The maximum number of results to return per page.
  - `offset` — `int`  
      The number of results to skip before returning results.
  - `totalResults` — `int`  
      The total number of results available in the collection.
  - `nextUrl` — `string`  
      The absolute URL of the next page of results, or null if there are no additional results.
- `results` — `array: object`  
    A list of nodes from the latest version (tip version) of the classification tree.
  - `id` — `string: UUID`  
      The identifier of the node within the returned tree version.
  - `externalId` — `string: UUID`  
      Not relevant. Do not use or rely on this field. It will be removed in a future release.
  - `name` — `string`  
      The display name of the node.
  - `nodeCode` — `string`  
      A code that uniquely identifies the node within the tree.
  - `parentNodeId` — `string: UUID`  
      The identifier of the node’s immediate parent within the returned tree version. null for root-level nodes.
  - `parentNodeExternalId` — `string: UUID`  
      Not relevant. Do not use or rely on this field. It will be removed in a future release.
  - `order` — `int`  
      The position of the node among its sibling nodes under the same parent.
  - `isDeleted` — `boolean`  
      true: the node has been deleted in the returned tree version. false: the node is active in the returned tree version.

## Example

```
curl -v 'https://developer.api.autodesk.com/construction/classifications/v1/projects/0195f158-6f95-7fb0-b008-4cde506166dd/trees/0295f158-6f95-7fb0-b008-4cde506166ee/versions/tip/nodes' \
  -H 'Authorization: Bearer AuIPTf4KYLTYGVnOHQ0cuolwCW2a'
```

```
{
  "pagination": {
    "limit": 10,
    "offset": 0,
    "totalResults": 10,
    "nextUrl": "https://developer.api.autodesk.com/construction/classifications/v1/projects/{projectId}/trees/{treeId}/versions/tip/nodes?limit=10&offset=10"
  },
  "results": [
    {
      "id": "0195f158-6f95-7fb0-b008-4cde506166de",
      "externalId": "0195f158-6f95-7fb0-b008-4cde506166de",
      "name": "Floor 1",
      "nodeCode": "FLOOR-1",
      "parentNodeId": "0195f158-6f95-7fb0-b008-4cde506166df",
      "parentNodeExternalId": "0195f158-6f95-7fb0-b008-4cde506166df",
      "order": 1,
      "isDeleted": false
    }
  ]
}
```

## 같은 그룹의 다른 엔드포인트

- `GET /construction/classifications/v1/projects/{projectId}/trees` — [Retrieves a list of classification trees in a project, sorted by creation date from newest to oldest](./classifications-trees-GET.md)
- `GET /construction/classifications/v1/projects/{projectId}/trees/{treeId}` — [Retrieves the metadata for a specific classification tree, without its nodes](./classifications-trees-treeId-GET.md)
- `PATCH /construction/classifications/v1/projects/{projectId}/trees/{treeId}` — [Updates a tree’s name or description](./classifications-trees-treeId-PATCH.md)
- `POST /construction/classifications/v1/projects/{projectId}/trees/{treeId}:reimport` — [Trees](./classifications-trees-treeId-reimport-POST.md)
- `POST /construction/classifications/v1/projects/{projectId}/trees:import` — [Trees](./classifications-treesimport-POST.md)

---
원본 문서: https://aps.autodesk.com/en/docs/acc/v1/reference/http/classifications-trees-treeId-versions-tip-nodes-GET
