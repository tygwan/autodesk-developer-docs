---
operation_id: submittals-packages-GET
method: GET
path: /construction/submittals/v2/projects/{projectId}/packages
group: "Submittals"
auth_context: user context required
scopes: [data:read]
surface: http
verification: docs-only
---

# Retrieve all the packages for the specified project

```http
GET https://developer.api.autodesk.com/construction/submittals/v2/projects/:projectId/packages
```

| | |
| --- | --- |
| **인증 컨텍스트** | user context required |
| **필요 스코프** | `data:read` |
| **데이터 포맷** | JSON |
| **그룹** | Submittals |

Retrieve all the packages for the specified project. For information about packages, see the Help documentation.

## 요청

### URI 파라미터

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `projectId` | string: UUID |  | The ID of the project. Use the Data Management API to retrieve the project ID. For more information, see the Retrieve a Project ID tutorial. You need to convert the project ID into a project ID for the Forma API by removing the “b." prefix. For example, a project ID of b.a4be0c34a-4ab7 translates to a project ID of a4be0c34a-4ab7. |

### 쿼리 파라미터

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `limit` | int |  | The maximum number of results per page. Possible values: 1- 50. Default value: 20. For example, to limit the response to two results per page, use limit=2. |
| `offset` | int |  | The number of results to skip before starting to return data. For example, to skip the first 20 results, include offset=20 in the query string. For more details, see the JSON API Paging Help documentation. |
| `sort` | string |  | Sort packages by specified fields. Separate multiple values with commas. To sort in descending or ascending order, add desc or asc after the sort criteria. For example, spec asc. Possible values: id, identifier, title, description, spec, spec.identifier. |
| `filter[identifier]` | string |  | Filter packages with the specified package ID (the package ID in the UI). You can specify multiple values. Separate multiple values with commas. For example, filter[identifier]=2. |
| `filter[title]` | string |  | Filter packages with the specified title. You can specify multiple values. Separate multiple values with commas. For example, filter[title]=Structural Steel. |
| `filter[specId]` | string |  | Filter packages with the associated specified spec section internal, globally unique ID (UUID). You can specify multiple values. Separate multiple values with commas. For example, filter[specId]=b4aa3864-5706-4a7b-b06c-a792e8b2df23. |
| `filter[spec.identifier]` | string |  | Filter packages with the associated specified section ID (the spec section ID in the UI). You can specify multiple values. Separate multiple values with commas. For example, filter[identifier]=2. |
| `search` | string |  | Search for packages by querying a specified string within specific fields (identifier, title, spec.identifier), and retrieve the associated packages that match the search criteria. This includes packages where the string matches part of a field. For example, search=1. |

### 헤더

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `Authorization` | string | **필수** | Must be Bearer <token>, where <token> is a three-legged access token obtained via an Authorization Code flow or a Secure Service Account (SSA) flow. The SSA flow is designed for headless server-to-server operations. While it functions like a two-legged flow (no user interaction), it is classified as three-legged because it preserves user context. |

## 응답

| 코드 | 의미 | 설명 |
| --- | --- | --- |
| `200` | OK | Successful retrieval of packages |
| `400` | Bad Request | The request could not be understood by the server due to malformed syntax or missing request headers. |
| `401` | Unauthorized | Invalid or missing authorization header. Verify the Bearer token and try again. |
| `403` | Forbidden | The user is not authorized to perform this action. |
| `404` | Not Found | The specified resource was not found. |
| `500` | Internal Server Error | An unexpected error occurred on the server while processing the request. |

### 응답 본문 (200)

- `pagination` — `object`  
    Describes pagination details for the response, including information about the current page and navigation to other pages.
  - `limit` — `int`  
      The maximum number of results to be displayed on each page.
  - `offset` — `int`  
      The number of results skipped before starting the current page.
  - `totalResults` — `int`  
      The overall count of results available across all pages.
  - `previousUrl` — `string`  
      The URL to retrieve the preceding page of results, if applicable. Not returned on the first page of results.
  - `nextUrl` — `string`  
      The URL to retrieve the subsequent page of results, if available. If not included, this is the last page of data.
- `results` — `array: object`  
    The list of packages.
  - `id` — `string: UUID`  
      The internal, globally unique identifier (UUID) for the package.
  - `specId` — `string: UUID`  
      The internal, globally unique identifier (UUID) of the spec associated with the package.
  - `title` — `string`  
      The title of the package.
  - `identifier` — `int`  
      The unique ID assigned to the package within the UI.
  - `description` — `string`  
      The description of the package.
  - `specIdentifier` — `string`  
      The unique ID of the spec assigned to the package in the UI, specific to each project.
  - `permittedActions` — `array: object`  
      The list of actions the user is allowed to perform on the submittal item.
    - `id` — `string`  
        The ID of the action in the format type_of_object::action. For example, Item::retrieve.
    - `fields` — `object`  
        A list of field names for which values must be provided when performing the action. An empty array indicates no specific set of values.
    - `mandatoryFields` — `array: string`  
        Lists the fields that are required when updating a submittal item. The required fields depend on the action being performed, the item’s current state, and the user’s role. For example: To transition the state of a submittal item, stateId and responseId are required. To reassign the manager, manager and managerType are required. To modify the spec section, specId is required.
    - `transitions` — `array: object`  
        The list of possible state transitions for a submittal item within the review workflow.
      - `id` — `string`  
          The ID of the transition in the format from-state::to-state. For example, create::mgr-1, mgr-1::mgr-2, rev::void.
      - `name` — `string`  
          The descriptive name of the transition. For example, Create, Send to Manager, Send to void.
      - `stateFrom` — `object`  
          The starting state of the transition, representing the current position of the submittal item in the workflow.
        - `id` — `string`  
            The unique ID of the starting state. For example, create, mgr-1, rev. The rev state indicates that the submittal item is currently under review.
        - `name` — `string`  
            The name of the starting state. For example, Create, Manager Review, Review.
      - `stateTo` — `object`  
          The target state of the transition, indicating the next position of the submittal item in the workflow.
        - `id` — `string`  
            The unique ID of the target state. For example, mgr-1, mgr-2, void.
        - `name` — `string`  
            The name of the target state. For example, Manager Review, Manager Final Review, Void.
      - `transitionFields` — `array: string`  
          Fields that are used in the transition. For example, [subcontractor, subcontractorType, watchers, responseId].
      - `mandatoryFields` — `array: string`  
          A list of required fields for the transition. For example, [responseId].
      - `actionId` — `string`  
          Not relevant

## Example

```
curl -v 'https://developer.api.autodesk.com/construction/submittals/v2/projects/9eae7d59-1469-4389-bfb2-4114e2ba5545/packages' \
  -H 'Authorization: Bearer AuIPTf4KYLTYGVnOHQ0cuolwCW2a'
```

```
{
  "pagination": {
    "limit": 10,
    "offset": 100,
    "totalResults": 25,
    "previousUrl": "https://developer.api.autodesk.com/construction/submittals/v2/projects/9eae7d59-1469-4389-bfb2-4114e2ba5545/settings/mappings?offset=10&limit=100",
    "nextUrl": null
  },
  "results": [
    {
      "id": "e8302552-fc5a-42ac-ba4b-e9de9760c356",
      "specId": "e6111f96-8437-491e-a1ae-16fd53f0cbef",
      "title": "my package1",
      "identifier": 222,
      "description": "Electrical specifications",
      "specIdentifier": "A-500",
      "permittedActions": [
        {
          "id": "Item::update",
          "fields": {
            "subcontractor": [],
            "manager": []
          },
          "mandatoryFields": [
            ""
          ],
          "transitions": [
            {
              "id": "rev::void",
              "name": "Send to void",
              "stateFrom": {
                "id": "rev",
                "name": "Review"
              },
              "stateTo": {
                "id": "void",
                "name": "Void"
              },
              "transitionFields": [
                "subcontractor",
                "subcontractorType",
                "watchers",
                "responseId"
              ],
              "mandatoryFields": [
                "responseId"
              ],
              "actionId": "ITEM_TRANSITION_REV_VOID"
            }
          ]
        }
      ]
    }
  ]
}
```

## 같은 그룹의 다른 엔드포인트

- `GET /construction/submittals/v2/projects/{projectId}/async-jobs/{asyncJobId}` — [Retrieves the current status and result of an asynchronous job](./submittals-async-jobs-asyncJobId-GET.md)
- `PATCH /construction/submittals/v2/projects/{projectId}/items/{itemId}/attachments/{attachmentId}` — [Updates the upload status of an attachment associated with a submittal item](./submittals-attachments-attachmentId-PATCH.md)
- `POST /construction/submittals/v2/projects/{projectId}/items/{itemId}/attachments` — [Adds an attachment to a submittal item within a project](./submittals-attachments-POST.md)
- `POST /construction/submittals/v2/projects/{projectId}/settings/custom-identifier:change-sequence-type` — [Changes the custom identifier sequence type for the project](./submittals-custom-identifierchange-sequence-type-POST.md)
- `GET /construction/submittals/v2/projects/{projectId}/item-types` — [Retrieves all submittal itme types for the specified project](./submittals-item-types-GET.md)
- `GET /construction/submittals/v2/projects/{projectId}/item-types/{id}` — [Retrieve the information about a single submittal type](./submittals-item-types-id-GET.md)
- `GET /construction/submittals/v2/projects/{projectId}/items` — [Retrieves information about all the submittal items in a project that the user has permission to view](./submittals-items-GET.md)
- `GET /construction/submittals/v2/projects/{projectId}/items/{itemId}/attachments` — [Retrieve information about attachments associated with a specified item](./submittals-items-itemId-attachments-GET.md)
- `GET /construction/submittals/v2/projects/{projectId}/items/{itemId}` — [Retrieve information about a single submittal item that the user has permission to view](./submittals-items-itemId-GET.md)
- `PATCH /construction/submittals/v2/projects/{projectId}/items/{itemId}` — [Updates specific attributes of an existing submittal item](./submittals-items-itemId-PATCH.md)
- `POST /construction/submittals/v2/projects/{projectId}/items/:itemId:transition` — [Items](./submittals-items-itemIdtransition-POST.md)
- `POST /construction/submittals/v2/projects/{projectId}/items` — [Creates a new submittal item in the specified project](./submittals-items-POST.md)
- `GET /construction/submittals/v2/projects/{projectId}/items:next-custom-identifier` — [Retrieves the next available custom identifier for a submittal item in a project](./submittals-itemsnext-custom-identifier-GET.md)
- `POST /construction/submittals/v2/projects/{projectId}/items:validate-custom-identifier` — [Validates a custom identifier for a submittal item in a project](./submittals-itemsvalidate-custom-identifier-POST.md)
- `GET /construction/submittals/v2/projects/{projectId}/settings/mappings` — [Retrieves users, roles, and companies assigned the manager role in the current project](./submittals-mappings-GET.md)
- `DELETE /construction/submittals/v2/projects/{projectId}/settings/mappings/{mappingId}` — [Deletes an admin mapping from the project](./submittals-mappings-mappingId-DELETE.md)
- `POST /construction/submittals/v2/projects/{projectId}/settings/mappings` — [Creates an admin mapping, assigning a user, role, or company as a Submittal Manager in the project](./submittals-mappings-POST.md)
- `GET /construction/submittals/v2/projects/{projectId}/metadata` — [Retrieves project metadata and static values needed for creating submittal items and translating retrieved data](./submittals-metadata-GET.md)
- `GET /construction/submittals/v2/projects/{projectId}/packages/{id}` — [Retrieve details about a single package](./submittals-packages-id-GET.md)
- `GET /construction/submittals/v2/projects/{projectId}/responses` — [Retrieves all the responses for the specified project](./submittals-responses-GET.md)
- `GET /construction/submittals/v2/projects/{projectId}/responses/{id}` — [Retrieve details about a single submittal response for the specified project, see the Help documentation](./submittals-responses-id-GET.md)
- `GET /construction/submittals/v2/projects/{projectId}/items/{itemId}/revisions` — [Items](./submittals-revisions-GET.md)
- `GET /construction/submittals/v2/projects/{projectId}/specs` — [Retrieve all the spec sections for the specified project](./submittals-specs-GET.md)
- `GET /construction/submittals/v2/projects/{projectId}/specs/{id}` — [Retrieve the details about a single spec section](./submittals-specs-id-GET.md)
- `POST /construction/submittals/v2/projects/{projectId}/specs` — [Creates a spec section to organize and categorize submittals](./submittals-specs-POST.md)
- `GET /construction/submittals/v2/projects/{projectId}/items/{itemId}/steps` — [Retrieves a list of review steps associated with a specific submittal item](./submittals-steps-GET.md)
- `GET /construction/submittals/v2/projects/{projectId}/items/{itemId}/steps/{stepId}` — [Retrieves information about a single review step associated with a submittal item](./submittals-steps-stepId-GET.md)
- `GET /construction/submittals/v2/projects/{projectId}/items/{itemId}/steps/{stepId}/tasks` — [Retrieves a list of tasks associated with a specific review step of a submittal item in a project](./submittals-tasks-GET.md)
- `GET /construction/submittals/v2/projects/{projectId}/items/{itemId}/steps/{stepId}/tasks/{taskId}` — [Retrieves details of a specific task associated with a review step in a submittal item](./submittals-tasks-taskId-GET.md)
- `POST /construction/submittals/v2/projects/{projectId}/items/{itemId}/steps/{stepId}/tasks/:taskId:close` — [Closes a task by adding a required review response, marking it as complete within the submittal review workflow](./submittals-tasks-taskIdclose-POST.md)
- `GET /construction/submittals/v2/projects/{projectId}/templates` — [Retrieves a list of review templates available for a project](./submittals-templates-GET.md)
- `GET /construction/submittals/v2/projects/{projectId}/users/me` — [Retrieves the Autodesk ID, assigned roles, and permitted actions for the current user within a specified project](./submittals-users-me-GET.md)

---
원본 문서: https://aps.autodesk.com/en/docs/acc/v1/reference/http/submittals-packages-GET
