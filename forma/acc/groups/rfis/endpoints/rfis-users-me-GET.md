---
operation_id: rfis-users-me-GET
method: GET
path: /construction/rfis/v3/projects/{projectId}/users/me
group: "RFIs"
auth_context: user context required
scopes: [data:read]
surface: http
verification: docs-only
---

# Retrieves information about the current user in the context of the specified project

```http
GET https://developer.api.autodesk.com/construction/rfis/v3/projects/:projectId/users/me
```

| | |
| --- | --- |
| **인증 컨텍스트** | user context required |
| **필요 스코프** | `data:read` |
| **데이터 포맷** | JSON |
| **그룹** | RFIs |

Retrieves information about the current user in the context of the specified project. The response includes the user’s assigned RFI workflow roles, whether the user is permitted to create RFIs, the workflow states in which the user can create RFIs, and the attributes required in each state.

## 요청

### URI 파라미터

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `projectId` | string |  | The ID of the project. Use the Data Management API to retrieve the project ID. For more information, see the Retrieve a Project ID tutorial. You need to convert the project ID into a project ID for the Forma API by removing the “b." prefix. For example, a project ID of b.a4be0c34a-4ab7 translates to a project ID of a4be0c34a-4ab7. |

### 헤더

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `Authorization` | string | **필수** | Must be Bearer <token>, where <token> is a three-legged access token obtained via an Authorization Code flow or a Secure Service Account (SSA) flow. The SSA flow is designed for headless server-to-server operations. While it functions like a two-legged flow (no user interaction), it is classified as three-legged because it preserves user context. |

## 응답

| 코드 | 의미 | 설명 |
| --- | --- | --- |
| `200` | OK | Success |
| `400` | Bad Request | The parameters are invalid |
| `401` | Unauthorized | The provided bearer token is not valid |
| `403` | Forbidden | The user or service represented by the bearer token does not have permission to perform this operation |
| `500` | Internal Server Error | An unknown error occurred on the server |

### 응답 본문 (200)

- `user` — `object`  
    The current user’s details.
  - `id` — `string`  
      The Autodesk ID of the user.
  - `name` — `string`  
      The name of the user.
  - `role` — `enum:string`  
      The user’s role in the project. Possible values: project_user, project_admin.
- `permittedActions` — `object`  
    The list of actions that are permitted for the user.
  - `createRfi` — `object`  
      The user’s permissions for creating RFIs. Note that if this field is present, the user is permitted to create RFIs in the project.
    - `permittedStatuses` — `object`  
        The list of statuses the user is permitted to transition an RFI to, without differentiating between workflow types (e.g., us and emea).
      - `wfUS` — `array: object`  
          The list of statuses the user is permitted to transition an RFI to in workflows of type US.
        - `status` — `enum:string`  
            The current response status of the RFI for single-reviewer workflows (US): Possible values: draft, submitted, open, answered, rejected, closed, void. For more information about workflows, see About RFI Workflows – Autodesk Help.
        - `maxAssignees` — `int`  
            The maximum number of users that can be assigned to this RFI.
        - `requiredAttributes` — `array: object`  
            The list of attributes that are required when creating or updating an RFI.
          - `name` — `string`  
              The name of the RFI attribute that must be provided when updating or creating an RFI in the specified status.
          - `values` — `array: object`  
              The list of allowed values for the required attribute.
            - `value` — `string`  
                The actual value that must be used for the required attribute when updating or creating the RFI. To find details about users, call GET users, to find details about companies, call GET companies. Note that we do not currently support finding details about roles for a project.
            - `type` — `string`  
                The type of the required attribute value. Indicates what kind of entity the value represents (e.g., user, role, or company).
        - `permittedAttributes` — `array: object`  
            The list of attributes that the user is optionally allowed to include when updating or creating the RFI in the specified status.
          - `name` — `string`  
              The name of the RFI attribute that must be provided when updating or creating an RFI in the specified status.
          - `values` — `array: object`  
              The list of allowed values for the required attribute.
            - `value` — `string`  
                The actual value that must be used for the required attribute when updating or creating the RFI. To find details about users, call GET users, to find details about companies, call GET companies. Note that we do not currently support finding details about roles for a project.
            - `type` — `string`  
                The type of the required attribute value. Indicates what kind of entity the value represents (e.g., user, role, or company).
      - `wfEU` — `array: object`  
          The list of statuses the user is permitted to transition an RFI to in workflows of type emea.
        - `status` — `enum:string`  
            The current response status of the RFI for a multi-reviewer workflow (EMEA): Possible values: draft, submitted, openRev1 (manager), openRev2 (reviewer), answeredRev1, answeredManager, closed, void. For more information about workflows, see About RFI Workflows – Autodesk Help.
        - `maxAssignees` — `int`  
            The maximum number of users that can be assigned to this RFI.
        - `requiredAttributes` — `array: object`  
            The list of attributes that are required when creating or updating an RFI.
          - `name` — `string`  
              The name of the RFI attribute that must be provided when updating or creating an RFI in the specified status.
          - `values` — `array: object`  
              The list of allowed values for the required attribute.
            - `value` — `string`  
                The actual value that must be used for the required attribute when updating or creating the RFI. To find details about users, call GET users, to find details about companies, call GET companies. Note that we do not currently support finding details about roles for a project.
            - `type` — `string`  
                The type of the required attribute value. Indicates what kind of entity the value represents (e.g., user, role, or company).
        - `permittedAttributes` — `array: object`  
            The list of attributes that the user is optionally allowed to include when updating or creating the RFI in the specified status.
          - `name` — `string`  
              The name of the RFI attribute that must be provided when updating or creating an RFI in the specified status.
          - `values` — `array: object`  
              The list of allowed values for the required attribute.
            - `value` — `string`  
                The actual value that must be used for the required attribute when updating or creating the RFI. To find details about users, call GET users, to find details about companies, call GET companies. Note that we do not currently support finding details about roles for a project.
            - `type` — `string`  
                The type of the required attribute value. Indicates what kind of entity the value represents (e.g., user, role, or company).
- `workflow` — `object`  
    The user’s assigned workflow roles and workflow type for RFIs in the current project.
  - `roles` — `array: string`  
      The list of RFI workflow roles assigned to the user. Possible values: projectSC — Creator projectGC — Manager projectCoordinator — Reviewer 1 (EMEA workflow only) projectReviewer — Reviewer 1 (US) or Reviewer 2 (EMEA) For information about workflow roles, see the RFIs Permission documentation.
  - `type` — `enum:string`  
      The RFI workflow type assigned to the project. Possible values: US Single-reviewer workflow EU Two-reviewer workflow Note that you cannot set the workflow type via the API. To change it, use the Project Admin UI.
- `defaultRfiType` — `string: UUID`  
    The ID of the default RFI type assigned to the project. This is the unique identifier of the RFI type that will be selected by default when creating a new RFI.
- `externalUsers` — `array: object`  
    Not relevant
  - `email` — `string`  
      Not relevant
  - `autodeskId` — `string`  
      Not relevant
- `maintenanceEndDate` — `string`  
    Not relevant

## Example

```
curl -v 'https://developer.api.autodesk.com/construction/rfis/v3/projects/:projectId/users/me' \
  -H 'Authorization: Bearer AuIPTf4KYLTYGVnOHQ0cuolwCW2a'
```

```
{
  "user": {
    "id": "BZPWJWWWMLSV",
    "name": "Jon Doe",
    "role": "project_admin"
  },
  "permittedActions": {
    "createRfi": {
      "permittedStatuses": {
        "wfUS": [
          {
            "status": "open",
            "maxAssignees": "",
            "requiredAttributes": [
              {
                "name": "assignedTo",
                "values": [
                  {
                    "value": "PER8KQPK2JRT",
                    "type": "user"
                  }
                ]
              }
            ],
            "permittedAttributes": [
              {
                "name": "assignedTo",
                "values": [
                  {
                    "value": "PER8KQPK2JRT",
                    "type": "user"
                  }
                ]
              }
            ]
          }
        ],
        "wfEU": [
          {
            "status": "open",
            "maxAssignees": "",
            "requiredAttributes": [
              {
                "name": "assignedTo",
                "values": [
                  {
                    "value": "PER8KQPK2JRT",
                    "type": "user"
                  }
                ]
              }
            ],
            "permittedAttributes": [
              {
                "name": "assignedTo",
                "values": [
                  {
                    "value": "PER8KQPK2JRT",
                    "type": "user"
                  }
                ]
              }
            ]
          }
        ]
      }
    }
  },
  "workflow": {
    "roles": [
      "projectSC"
    ],
    "type": "US"
  },
  "defaultRfiType": "c911852d-5957-4145-9c8d-e7cfe9d564df",
  "externalUsers": [
    {
      "email": "",
      "autodeskId": ""
    }
  ],
  "maintenanceEndDate": ""
}
```

## 같은 그룹의 다른 엔드포인트

- `GET /construction/rfis/v3/projects/{projectId}/attributes` — [Retrieves all custom attribute definitions for a project](./rfis-attributes-GET.md)
- `POST /construction/rfis/v3/projects/{projectId}/attributes` — [Creates a custom attribute definition for a project](./rfis-attributes-POST.md)
- `PATCH /construction/rfis/v3/projects/{projectId}/attributes/{attributeId}` — [Updates an existing custom attribute definition for a project](./rfis-custom-attributes-attributeId-PATCH.md)
- `GET /construction/rfis/v3/projects/{projectId}/rfis/custom-identifier` — [Returns the current and next available RFI custom identifier for the project](./rfis-custom-identifier-GET.md)
- `POST /construction/rfis/v3/projects/{projectId}/search:rfis` — [RFIs](./rfis-rfi-search-POST.md)
- `GET /construction/rfis/v3/projects/{projectId}/rfi-types` — [Retrieves the list of RFI types configured for the specified project](./rfis-RFI-types-GET.md)
- `GET /construction/rfis/v3/projects/{projectId}/rfis/{rfiId}/attachments` — [Retrieves a list of attachments for a specific RFI](./rfis-rfis-id-attachments-GET.md)
- `GET /construction/rfis/v3/projects/{projectId}/rfis/{rfiId}` — [Retrieves detailed information about a specific RFI (Request for Information) in Forma](./rfis-rfis-id-GET.md)
- `PATCH /construction/rfis/v3/projects/{projectId}/rfis/{rfiId}` — [Updates an RFI](./rfis-rfis-id-PATCH.md)
- `POST /construction/rfis/v3/projects/{projectId}/rfis/{rfiId}/responses` — [Creates a response to the specified RFI](./rfis-rfis-id-responses-POST.md)
- `PATCH /construction/rfis/v3/projects/{projectId}/rfis/{rfiId}/responses/{responseId}` — [Updates an existing RFI response](./rfis-rfis-id-responses-responseId-PATCH.md)
- `POST /construction/rfis/v3/projects/{projectId}/rfis` — [Adds an RFI (request for information) to a project](./rfis-rfis-POST.md)
- `GET /construction/rfis/v3/projects/{projectId}/rfis/{rfiId}/comments` — [Retrieves a list of comments associated with a specific RFI](./rfis-rfis-rfiId-comments-GET.md)
- `POST /construction/rfis/v3/projects/{projectId}/rfis/{rfiId}/comments` — [Adds a comment to an RFI](./rfis-rfis-rfiId-comments-POST.md)
- `GET /construction/rfis/v3/projects/{projectId}/workflow` — [Workflows](./rfis-workflow-GET.md)

---
원본 문서: https://aps.autodesk.com/en/docs/acc/v1/reference/http/rfis-users-me-GET
