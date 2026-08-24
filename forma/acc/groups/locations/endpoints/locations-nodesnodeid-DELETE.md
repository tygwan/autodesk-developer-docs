---
operation_id: locations-nodesnodeid-DELETE
method: DELETE
path: /construction/locations/v2/projects/{projectId}/trees/{treeId}/nodes/{nodeId}
group: "Locations"
auth_context: user context required
scopes: [data:write]
surface: http
verification: docs-only
---

# Deletes the specified node from the specified locations tree

```http
DELETE https://developer.api.autodesk.com/construction/locations/v2/projects/:projectId/trees/:treeId/nodes/:nodeId
```

| | |
| --- | --- |
| **인증 컨텍스트** | user context required |
| **필요 스코프** | `data:write` |
| **데이터 포맷** | JSON |
| **그룹** | Locations |

Deletes the specified node from the specified locations tree.

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

## 응답

| 코드 | 의미 | 설명 |
| --- | --- | --- |
| `204` | No Content | Node deleted |
| `400` | Bad Request | Bad request |
| `403` | Forbidden | Forbidden. The caller has no permission to perform this operation. |
| `404` | Not Found | The specified project, tree or node was not found. |

## Example

```
curl -v 'https://developer.api.autodesk.com/construction/locations/v2/projects/:projectId/trees/:treeId/nodes/:nodeId' \
  -X 'DELETE' \
  -H 'Authorization: Bearer AuIPTf4KYLTYGVnOHQ0cuolwCW2a'
```

```
204 No Content
```

## 같은 그룹의 다른 엔드포인트

- `GET /construction/locations/v2/projects/{projectId}/trees/{treeId}/nodes` — [Retrieves an array of nodes (locations) from the specified locations tree (LBS)](./locations-nodes-GET.md)
- `POST /construction/locations/v2/projects/{projectId}/trees/{treeId}/nodes` — [Creates a node in the specified locations tree](./locations-nodes-POST.md)
- `PATCH /construction/locations/v2/projects/{projectId}/trees/{treeId}/nodes/{nodeId}` — [Updates the name or barcode of the specified node of the specified locations tree](./locations-nodesnodeid-PATCH.md)

---
원본 문서: https://aps.autodesk.com/en/docs/acc/v1/reference/http/locations-nodesnodeid-DELETE
