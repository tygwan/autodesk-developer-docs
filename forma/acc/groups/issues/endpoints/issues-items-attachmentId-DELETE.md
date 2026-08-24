---
operation_id: issues-items-attachmentId-DELETE
method: DELETE
path: /construction/issues/v1/projects/{projectId}/attachments/{issueId}/items/{attachmentId}
group: "Issues"
auth_context: user context required
scopes: [data:write]
surface: http
verification: docs-only
---

# Deletes a specific attachment from an issue in a project

```http
DELETE https://developer.api.autodesk.com/construction/issues/v1/projects/{projectId}/attachments/{issueId}/items/{attachmentId}
```

| | |
| --- | --- |
| **인증 컨텍스트** | user context required |
| **필요 스코프** | `data:write` |
| **데이터 포맷** | JSON |
| **그룹** | Issues |

Deletes a specific attachment from an issue in a project.

## 요청

### URI 파라미터

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `projectId` | string: UUID |  | The ID of the project. Use the Data Management API to retrieve the project ID. For more information, see the Retrieve a Project ID tutorial. You need to convert the project ID into a project ID for the Forma API by removing the “b." prefix. For example, a project ID of b.a4be0c34a-4ab7 translates to a project ID of a4be0c34a-4ab7. |
| `issueId` | string: UUID |  | The unique identifier of the issue. To find the ID, call GET issues. |
| `attachmentId` | string: UUID |  | The unique identifier of the attachment. To find the ID, call GET attachments. |

### 헤더

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `Authorization` | string | **필수** | Must be Bearer <token>, where <token> is a three-legged access token obtained via an Authorization Code flow or a Secure Service Account (SSA) flow. The SSA flow is designed for headless server-to-server operations. While it functions like a two-legged flow (no user interaction), it is classified as three-legged because it preserves user context. |

## 응답

| 코드 | 의미 | 설명 |
| --- | --- | --- |
| `204` | No Content | OK |
| `400` | Bad Request | Invalid input |
| `403` | Forbidden | The request is valid but lacks the necessary permissions. |
| `404` | Not Found | Issue or attachment not found, or attachment has already been deleted |
| `500` | Internal Server Error | Internal server error |

## Example

```
curl -v 'https://developer.api.autodesk.com/construction/issues/v1/projects/:projectId/attachments/:issueId/items/:attachmentId' \
  -X 'DELETE' \
  -H 'Authorization: Bearer AuIPTf4KYLTYGVnOHQ0cuolwCW2a'
```

```
204 No Content
```

## 같은 그룹의 다른 엔드포인트

- `GET /construction/issues/v1/projects/{projectId}/attachments/{issueId}/items` — [Retrieves all attachments for a specific issue in a project](./issues-attachments-issueId-items-GET.md)
- `POST /construction/issues/v1/projects/{projectId}/attachments` — [Adds attachments to an existing issue](./issues-attachments-POST.md)
- `GET /construction/issues/v1/projects/{projectId}/issues/{issueId}/comments` — [Get all the comments for a specific issue](./issues-comments-GET.md)
- `POST /construction/issues/v1/projects/{projectId}/issues/{issueId}/comments` — [Creates a new comment under a specific issue](./issues-comments-POST.md)
- `GET /construction/issues/v1/projects/{projectId}/issue-attribute-definitions` — [Issue Attribute Definitions](./issues-issue-attribute-definitions-GET.md)
- `GET /construction/issues/v1/projects/{projectId}/issue-attribute-mappings` — [Issue Attribute Mappings](./issues-issue-attribute-mappings-GET.md)
- `GET /construction/issues/v1/projects/{projectId}/issue-root-cause-categories` — [Retrieves a list of supported root cause categories and root causes that you can allocate to an issue](./issues-issue-root-cause-categories-GET.md)
- `GET /construction/issues/v1/projects/{projectId}/issue-types` — [Retrieves a project’s categories and types](./issues-issue-types-GET.md)
- `GET /construction/issues/v1/projects/{projectId}/issues` — [Issues](./issues-issues-GET.md)
- `GET /construction/issues/v1/projects/{projectId}/issues/{issueId}` — [Retrieves detailed information about a single issue](./issues-issues-issueId-GET.md)
- `PATCH /construction/issues/v1/projects/{projectId}/issues/{issueId}` — [Updates an issue](./issues-issues-issueId-PATCH.md)
- `POST /construction/issues/v1/projects/{projectId}/issues` — [Adds an issue to a project](./issues-issues-POST.md)
- `GET /construction/issues/v1/projects/{projectId}/users/me` — [Returns the current user permissions](./issues-users-me-GET.md)

---
원본 문서: https://aps.autodesk.com/en/docs/acc/v1/reference/http/issues-items-attachmentId-DELETE
