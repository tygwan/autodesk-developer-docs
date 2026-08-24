---
operation_id: rfis-RFI-types-GET
method: GET
path: /construction/rfis/v3/projects/{projectId}/rfi-types
group: "RFIs"
auth_context: user context required
scopes: [data:read]
surface: http
verification: docs-only
---

# Retrieves the list of RFI types configured for the specified project

```http
GET https://developer.api.autodesk.com/construction/rfis/v3/projects/:projectId/rfi-types
```

| | |
| --- | --- |
| **인증 컨텍스트** | user context required |
| **필요 스코프** | `data:read` |
| **데이터 포맷** | JSON |
| **그룹** | RFIs |

Retrieves the list of RFI types configured for the specified project.

## 요청

### URI 파라미터

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `projectId` | string |  | The ID of the project. Use the Data Management API to retrieve the project ID. For more information, see the Retrieve a Project ID tutorial. You need to convert the project ID into a project ID for the Forma API by removing the “b." prefix. For example, a project ID of b.a4be0c34a-4ab7 translates to a project ID of a4be0c34a-4ab7. |

### 쿼리 파라미터

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `limit` | int |  | The number of RFIs to return in the response. Acceptable values: 1–200. Default: 10. For example, to limit the response to two items per page, use limit=2 |
| `offset` | int |  | The number of items to skip before starting to return results. For example, to begin the results from the fourth item, use offset=3. |
| `filter[status]` | array: string |  | Filters the response to only include RFI types with the specified status. Possible values: active, inactive, hidden. |

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

- `results` — `array: object`  
    The list of RFI types configured for the project.
  - `id` — `string: UUID`  
      The ID of the default RFI type assigned to the project. This is the unique identifier of the RFI type that will be selected by default when creating a new RFI.
  - `name` — `string`  
      The name of the RFI type, as configured by the project admin. This name is shown in the Forma UI and in the API when selecting an RFI type. Max length: 50
  - `wfType` — `enum:string`  
      The workflow type used for this RFI type. Possible values: - US: The US-style workflow, with a Reviewer and optional Manager. - EU: The EU-style workflow, with a Project Coordinator and Project Reviewer. The workflow type determines the available statuses and workflow roles for RFIs of this type.
  - `status` — `enum:string`  
      The current status of the RFI type. Possible values: - active: The type is available for use when creating or updating RFIs. - inactive: The type exists but cannot currently be selected when creating RFIs. - hidden: The type is hidden from users in the UI but may still appear in the API. Only active types are available by default when creating new RFIs.
  - `isDefault` — `boolean`  
      true: This RFI type is the default for the project. false: (default) This RFI type is not the default.
  - `projectReviewer` — `array: object`  
      A list of users, companies, or roles that can be assigned to this project role.
    - `id` — `string`  
        The Autodesk ID of the user, company, or role. To find details about users, call GET users, to find details about companies, call GET companies. Note that we do not currently support finding details about roles for a project.
    - `type` — `enum:string`  
        The type of assignee. Possible values: user, company, role.
  - `projectCoordinator` — `array: object`  
      A list of users, companies, or roles that can be assigned to this project role.
    - `id` — `string`  
        The Autodesk ID of the user, company, or role. To find details about users, call GET users, to find details about companies, call GET companies. Note that we do not currently support finding details about roles for a project.
    - `type` — `enum:string`  
        The type of assignee. Possible values: user, company, role.
  - `manager` — `array: object`  
      A list of users, companies, or roles who can be assigned to this workflow role.
    - `id` — `string`  
        The Autodesk ID of the user, company, or role. To find details about users, call GET users, to find details about companies, call GET companies. Note that we do not currently support finding details about roles for a project.
    - `type` — `enum:string`  
        The type of assignee. Possible values: user, company, role.
  - `watchers` — `array: object`  
      A list of users, companies, or roles that can be assigned to this project role.
    - `id` — `string`  
        The Autodesk ID of the user, company, or role. To find details about users, call GET users, to find details about companies, call GET companies. Note that we do not currently support finding details about roles for a project.
    - `type` — `enum:string`  
        The type of assignee. Possible values: user, company, role.
  - `dueDateOffset` — `integer,null`  
      The number of calendar days from the RFI creation date to the default due date. Used to automatically calculate the RFI due date when creating a new RFI of this type.
  - `locationDescription` — `string,null`  
      The default text for the Location field when creating a new RFI. Note that the API does not auto-populate this value. Clients are responsible for applying the default if desired.
  - `costImpact` — `string,null`  
      The default cost impact value for new RFIs of this type. Possible values: null, Yes, No, Unknown.
  - `scheduleImpact` — `string,null`  
      The default schedule impact value for new RFIs of this type. Possible values: null, Yes, No, Unknown.
  - `priority` — `string,null`  
      The default priority for new RFIs of this type. The available priority values are configured in Project Admin. If no default is set, this field is null. Note that the API does not auto-populate this value when creating an RFI. Clients are responsible for applying the default if desired. Some possible values: null, High, Normal, Low.
  - `discipline` — `array: string`  
      The list of available disciplines for RFIs. Each discipline is configured in Project Admin. Some possible values: Architectural, Civil/Site, Concrete, Electrical, Exterior Envelope, Fire Protection, Interior/Finishes, Landscaping, Masonry, Mechanical, Plumbing, Structural, Other.
  - `category` — `array: string`  
      A list of predefined categories to assign to the RFI. Categories help group RFIs for filtering and reporting. Each value must match a category configured in the project’s RFI settings. Categories are case-sensitive and project-specific. RFI categories are configured in Project Admin and may differ between projects. Some possible values: Code Compliance, Constructability, Design Coordination, Documentation Conflict, Documentation Incomplete, Field condition, Other.
  - `reference` — `string,null`  
      The default value for the Reference field when creating a new RFI. This is typically used when the RFI was created in another system. Note that the API does not auto-populate this value. Clients are responsible for applying the default if desired. Max length: 20
  - `bridgeTargetProjectIds` — `array,null`  
      Not relevant
- `pagination` — `object`  
    The pagination object.
  - `limit` — `int`  
      The number of items returned per page.
  - `offset` — `int`  
      The number of items skipped before this page of results.
  - `totalResults` — `int`  
      The total number of items matching the request.

## Example

```
curl -v 'https://developer.api.autodesk.com/construction/rfis/v3/projects/:projectId/rfi-types' \
  -H 'Authorization: Bearer AuIPTf4KYLTYGVnOHQ0cuolwCW2a'
```

```
{
  "results": [
    {
      "id": "c911852d-5957-4145-9c8d-e7cfe9d564df",
      "name": "Type 1",
      "wfType": "US",
      "status": "active",
      "isDefault": true,
      "projectReviewer": [
        {
          "id": "PER8KQPK2JRT",
          "type": "user"
        }
      ],
      "projectCoordinator": [
        {
          "id": "PER8KQPK2JRT",
          "type": "user"
        }
      ],
      "manager": [
        {
          "id": "PER8KQPK2JRT",
          "type": "user"
        }
      ],
      "watchers": [
        {
          "id": "PER8KQPK2JRT",
          "type": "user"
        }
      ],
      "dueDateOffset": 7,
      "locationDescription": "In the middle of the room.",
      "costImpact": "Yes",
      "scheduleImpact": "Yes",
      "priority": "High",
      "discipline": [
        "Architectural"
      ],
      "category": [
        "Constructability"
      ],
      "reference": "",
      "bridgeTargetProjectIds": ""
    }
  ],
  "pagination": {
    "limit": 10,
    "offset": 0,
    "totalResults": 97
  }
}
```

## 같은 그룹의 다른 엔드포인트

- `GET /construction/rfis/v3/projects/{projectId}/attributes` — [Retrieves all custom attribute definitions for a project](./rfis-attributes-GET.md)
- `POST /construction/rfis/v3/projects/{projectId}/attributes` — [Creates a custom attribute definition for a project](./rfis-attributes-POST.md)
- `PATCH /construction/rfis/v3/projects/{projectId}/attributes/{attributeId}` — [Updates an existing custom attribute definition for a project](./rfis-custom-attributes-attributeId-PATCH.md)
- `GET /construction/rfis/v3/projects/{projectId}/rfis/custom-identifier` — [Returns the current and next available RFI custom identifier for the project](./rfis-custom-identifier-GET.md)
- `POST /construction/rfis/v3/projects/{projectId}/search:rfis` — [RFIs](./rfis-rfi-search-POST.md)
- `GET /construction/rfis/v3/projects/{projectId}/rfis/{rfiId}/attachments` — [Retrieves a list of attachments for a specific RFI](./rfis-rfis-id-attachments-GET.md)
- `GET /construction/rfis/v3/projects/{projectId}/rfis/{rfiId}` — [Retrieves detailed information about a specific RFI (Request for Information) in Forma](./rfis-rfis-id-GET.md)
- `PATCH /construction/rfis/v3/projects/{projectId}/rfis/{rfiId}` — [Updates an RFI](./rfis-rfis-id-PATCH.md)
- `POST /construction/rfis/v3/projects/{projectId}/rfis/{rfiId}/responses` — [Creates a response to the specified RFI](./rfis-rfis-id-responses-POST.md)
- `PATCH /construction/rfis/v3/projects/{projectId}/rfis/{rfiId}/responses/{responseId}` — [Updates an existing RFI response](./rfis-rfis-id-responses-responseId-PATCH.md)
- `POST /construction/rfis/v3/projects/{projectId}/rfis` — [Adds an RFI (request for information) to a project](./rfis-rfis-POST.md)
- `GET /construction/rfis/v3/projects/{projectId}/rfis/{rfiId}/comments` — [Retrieves a list of comments associated with a specific RFI](./rfis-rfis-rfiId-comments-GET.md)
- `POST /construction/rfis/v3/projects/{projectId}/rfis/{rfiId}/comments` — [Adds a comment to an RFI](./rfis-rfis-rfiId-comments-POST.md)
- `GET /construction/rfis/v3/projects/{projectId}/users/me` — [Retrieves information about the current user in the context of the specified project](./rfis-users-me-GET.md)
- `GET /construction/rfis/v3/projects/{projectId}/workflow` — [Workflows](./rfis-workflow-GET.md)

---
원본 문서: https://aps.autodesk.com/en/docs/acc/v1/reference/http/rfis-RFI-types-GET
