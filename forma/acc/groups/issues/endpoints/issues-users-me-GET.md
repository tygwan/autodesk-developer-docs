---
operation_id: issues-users-me-GET
method: GET
path: /construction/issues/v1/projects/{projectId}/users/me
group: "Issues"
auth_context: user context required
scopes: [data:read]
surface: http
verification: docs-only
---

# Returns the current user permissions

```http
GET https://developer.api.autodesk.com/construction/issues/v1/projects/{projectId}/users/me
```

| | |
| --- | --- |
| **인증 컨텍스트** | user context required |
| **필요 스코프** | `data:read` |
| **데이터 포맷** | JSON |
| **그룹** | Issues |

Returns the current user permissions.

## 요청

### URI 파라미터

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `projectId` | string: UUID |  | The ID of the project. Use the Data Management API to retrieve the project ID. For more information, see the Retrieve a Project ID tutorial. You need to convert the project ID into a project ID for the Forma API by removing the “b." prefix. For example, a project ID of b.a4be0c34a-4ab7 translates to a project ID of a4be0c34a-4ab7. |

### 헤더

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `Authorization` | string | **필수** | Must be Bearer <token>, where <token> is a three-legged access token obtained via an Authorization Code flow or a Secure Service Account (SSA) flow. The SSA flow is designed for headless server-to-server operations. While it functions like a two-legged flow (no user interaction), it is classified as three-legged because it preserves user context. |
| `x-ads-region` | string |  | The region to which your request should be routed. If not set, the request is routed automatically but may incur a small latency increase. Possible values: US, EMEA. For the full list of supported regions, see the Regions page. |

## 응답

| 코드 | 의미 | 설명 |
| --- | --- | --- |
| `200` | OK | Success |
| `400` | Bad Request | Invalid input |
| `403` | Forbidden | Unauthorized |
| `404` | Not Found | Project not found |
| `500` | Internal Server Error | Internal server error |

### 응답 본문 (200)

- `id` — `string`  
    The user’s Autodesk ID.
- `isProjectAdmin` — `boolean`  
    States whether the current logged in user is a system admin.
- `canManageTemplates` — `boolean`  
    Not relevant
- `issues` — `object`
  - `new` — `object`  
      If this object appears in the response, it indicates that the user can create and modify issues.
    - `permittedActions` — `array: string`  
        The list of actions permitted for the user for this issue in its current state. Possible Values: assign_all (can assign another user from another company to the issue), assign_same_company (can only assign another user from the same company to the issue), clear_assignee, copy (can copy the issue), delete, add_comment, add_attachment, remove_attachment. The following values are not relevant: add_attachment, remove_attachment.
    - `permittedAttributes` — `array: string`  
        A list of attributes you are allowed to open a new issue. issueTypeId, linkedDocument, links, ownerId, officialResponse, rootCauseId, snapshotUrn are not applicable. Possible Values: title, description, issueTypeId, issueSubtypeId, status, assignedTo, assignedToType, dueDate, locationId, locationDetails, linkedDocuments, links, ownerId, rootCauseId, officialResponse, customAttributes, snapshotUrn, startDate, published, deleted, watchers.
    - `permittedStatuses` — `array: string`  
        A list of available statuses for the project. Possible values: draft, open, pending, in_progress, completed, in_review, not_approved, in_dispute, closed. For more information about statuses, see the Help documentation.
    - `permitted_actions` — `array: string`  
        Not relevant
    - `permitted_attributes` — `array: string`  
        Not relevant
    - `permitted_statuses` — `array: string`  
        Not relevant
  - `filter` — `object`  
      Not relevant
    - `permittedStatuses` — `array: string`  
        Not relevant
- `permissionLevels` — `array: string`  
    The permission level of the user. Each permission level corresponds to a combination of values in the response. For example, a combination of read and create in the response, corresponds to a Full visibility permission level. Note that if a user with View and assign issues for their company permissions attempts to assign a user from a another company to the issue, it will return an error. In addition, the user can both create and view issues for their own company. You can also verify a user’s assignment permissions by checking the permittedActions or permissionLevels attributes. - Edit, view, and assign This permission level is split into two sub-levels: - View and assign to their company (previously known as Create for my company) : create and the permittedActions array must include assign-same-company - View issues for their company. Assign issues to anyone. : create and the permittedActions array must include assign-all - Full visibility (previously known as Create for other companies): create, read - Manage issues: create, read, write Possible values: create, read, write. For more details about the permission levels, see Issues Permissions.

## Example

```
curl -v 'https://developer.api.autodesk.com/construction/issues/v1/projects/:projectId/users/me' \
  -H 'Authorization: Bearer AuIPTf4KYLTYGVnOHQ0cuolwCW2a'
```

```
{
  "id": "BXQXL7646C2R",
  "isProjectAdmin": true,
  "canManageTemplates": "",
  "issues": {
    "new": {
      "permittedActions": [
        "add_comment"
      ],
      "permittedAttributes": [
        "title"
      ],
      "permittedStatuses": [
        "draft",
        "open",
        "pending",
        "in_progress",
        "completed",
        "in_review",
        "not_approved",
        "in_dispute",
        "closed"
      ],
      "permitted_actions": [
        "add_comment"
      ],
      "permitted_attributes": [
        "title"
      ],
      "permitted_statuses": [
        "open"
      ]
    },
    "filter": {
      "permittedStatuses": [
        "draft",
        "open",
        "pending",
        "in_progress",
        "completed",
        "in_review",
        "not_approved",
        "in_dispute",
        "closed"
      ]
    }
  },
  "permissionLevels": [
    "read"
  ]
}
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
- `DELETE /construction/issues/v1/projects/{projectId}/attachments/{issueId}/items/{attachmentId}` — [Deletes a specific attachment from an issue in a project](./issues-items-attachmentId-DELETE.md)

---
원본 문서: https://aps.autodesk.com/en/docs/acc/v1/reference/http/issues-users-me-GET
