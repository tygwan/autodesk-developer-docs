---
operation_id: reviews-createreview-POST
method: POST
path: /construction/reviews/v1/projects/{projectId}/reviews
group: "Reviews"
auth_context: user context optional
scopes: [data:write]
surface: http
verification: docs-only
---

# Creates a new review in the specified project using an existing approval workflow

```http
POST https://developer.api.autodesk.com/construction/reviews/v1/projects/{projectId}/reviews
```

| | |
| --- | --- |
| **인증 컨텍스트** | user context optional |
| **필요 스코프** | `data:write` |
| **데이터 포맷** | JSON |
| **그룹** | Reviews |

Creates a new review in the specified project using an existing approval workflow.

## 요청

### URI 파라미터

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `projectId` | string: UUID |  | The ID of the project. Use the Data Management API to retrieve the project ID. For more information, see the Retrieve a Project ID tutorial. You can provide the project ID with or without the “b." prefix. - Example with prefix: b.563a4c30-e30d-4869-ac02-2a18b6447abe - Example without prefix: 563a4c30-e30d-4869-ac02-2a18b6447abe |

### 헤더

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `Authorization` | string | **필수** | Must be Bearer <token>, where <token> is a two-legged access token obtained via a Client Credentials Grant flow, or a three-legged access token obtained via an Authorization Code flow or a Secure Service Account (SSA) flow. The SSA flow is designed for headless server-to-server operations. While it functions like a two-legged flow (no user interaction), it is classified as three-legged because it preserves user context. |
| `x-user-id` | string |  | The Autodesk ID of the user on whose behalf the request is made. Use this header to specify which user should be affected by the request. Your application must be configured to act on behalf of that user. This header is only required when using two-legged authentication. It is not needed for three-legged authentication. Only the user’s Autodesk ID (autodeskId) can be accepted. |
| `Content-Type` | string | **필수** | Must be application/json |

### 요청 본문

- `name` — `string` **(필수)**  
    The name of the review. Maximum length: 255 characters. Max length: 255
- `fileVersions` — `array: object` **(필수)**  
    The file versions to include in the review. Maximum: 1000 items.
  - `urn` — `string` **(필수)**  
      The URN of the file version. You can find this value by following the first four steps of the Download a File tutorial and noting the included.id field in the response. Note that the Step 4 request in the tutorial returns only the latest version of each file in the folder. Use the included.attributes.name or included.attributes.displayName fields in the response to confirm you have the correct file.
- `workflowId` — `string: UUID` **(필수)**  
    The ID of the approval workflow used to create the review. To list available workflows, call GET workflows.
- `notes` — `string`  
    A note about the review. In the UI, this appears as the Description field. Maximum length: 4096 characters. Max length: 4096
- `workflowOptions` — `object`  
    Optional parameters that override approval workflow settings for this review (for example, steps, copy settings, or additional options).
  - `copyFilesOptions` — `object`  
      (Copy approved files in the UI) Option for copying approved files when the review is complete.
    - `folderUrn` — `string`  
        (Then copy approved files to in the UI) The URN of the target folder where approved files will be copied. To find the folder URN, follow the first four steps of the Upload Files to the Forma Files tool tutorial and note the data.id field in the response. Use data.attributes.name or data.attributes.displayName to confirm you have the correct folder.
  - `steps` — `array: object`  
      Assigns participants to the steps defined in the approval workflow. If omitted, the review inherits default candidates from the workflow. If provided, your assignments replace the defaults for that step. Multiple REVIEWER steps run sequentially in the order returned by GET workflows.
    - `id` — `string` **(필수)**  
        The ID of the step in the approval workflow. Use this value to set the candidates for the step when creating the review. Retrieve step IDs by calling GET workflows.
    - `candidates` — `object` **(필수)**  
        (Displayed in the UI when selecting Reviewers/Approvers for a step) Defines the users, roles, or companies to specify for this step of the approval workflow. At least one of the fields (users, roles, or companies) must be provided.
      - `users` — `array: object`  
          A list of individual users assigned as candidates for this step.
        - `autodeskId` — `string` **(필수)**  
            The Autodesk ID of the user. To find the Autodesk IDs of users for a project, call GET projects/users.
      - `roles` — `array: object`  
          A list of project roles assigned as candidates for this step.
        - `autodeskId` — `string` **(필수)**  
            The Autodesk ID of the role. Note that we do not currently support finding details about roles for a project.
      - `companies` — `array: object`  
          A list of companies assigned as candidates for this step.
        - `autodeskId` — `string` **(필수)**  
            The Autodesk ID of the company. To find the Autodesk IDs of companies for a project, call GET companies.

## 응답

| 코드 | 의미 | 설명 |
| --- | --- | --- |
| `201` | Created | The review was created successfully |
| `400` | Bad Request | Bad request. The input parameters were invalid. |
| `401` | Unauthorized | Authentication failed. Required authentication headers are missing or invalid. |
| `403` | Forbidden | Forbidden. The user does not have permission to access this resource. |
| `404` | Not Found | Not found. The resource does not exist or is inaccessible. |
| `500` | Internal Server Error | An unexpected server error occurred. |

### 응답 본문 (201)

- `id` — `string: UUID`  
    The unique identifier of the review.
- `sequenceId` — `int`  
    A unique, auto-incrementing number assigned to the review when it is first submitted. This ID does not change, even if the review is sent back to the initiator and goes through multiple rounds. It identifies the review within the project and reflects the order in which reviews were created.
- `name` — `string`  
    The name of the review.
- `status` — `enum:string`  
    The current status of the review. Possible values: OPEN, CLOSED, VOID, FAILED.
- `currentStepId` — `string`  
    The ID of the current step in the review.
- `currentStepDueDate` — `datetime: ISO 8601`  
    The due date of the current step.
- `createdBy` — `object`  
    Information about the user who initiated the review.
  - `autodeskId` — `string`  
      The Autodesk ID of the initiator.
  - `name` — `string`  
      The name of the initiator.
- `createdAt` — `datetime: ISO 8601`  
    The date time when the review was initiated.
- `updatedAt` — `datetime: ISO 8601`  
    The date time when the review was last updated.
- `finishedAt` — `datetime: ISO 8601`  
    The date time when the review was completed.
- `archived` — `boolean`  
    Indicates whether the review has been archived. true: the review is archived. false: (default) the review is active.
- `archivedBy` — `object`  
    Information about the user who archived the review.
  - `autodeskId` — `string`  
      The Autodesk ID of the archiver.
  - `name` — `string`  
      The name of the archiver.
- `archivedAt` — `datetime: ISO 8601`  
    The date and time when the review was archived. If the review has not been archived, this value is null.
- `approvedBy` — `object`  
    Information about the user who submitted the final workflow step. Returns an empty object if the review has not yet been final-approved.
  - `autodeskId` — `string`  
      The Autodesk ID of the final approver.
  - `name` — `string`  
      The name of the final approver.
- `approvedAt` — `datetime: ISO 8601`  
    The date and time when the final workflow step was submitted. If the review has not yet been final-approved, this value is null.
- `workflowId` — `string: UUID`  
    The unique identifier (UUID) of the approval workflow used to create this review.
- `nextActionBy` — `object`  
    Information about the claimers and candidates responsible for the current step.
  - `claimedBy` — `array: object`  
      A list of users who have already claimed the current step.
    - `autodeskId` — `string`  
        The Autodesk ID of the user.
    - `name` — `string`  
        The name of the user.
  - `candidates` — `object`  
      Information about the users, roles, and companies who are eligible to take the next action in this step.
    - `roles` — `array: object`  
        Project roles that can act in this step.
      - `autodeskId` — `string`  
          The Autodesk ID of the role.
      - `name` — `string`  
          The name of the role.
    - `users` — `array: object`  
        Individual users who can act in this step.
      - `autodeskId` — `string`  
          The Autodesk ID of the user.
      - `name` — `string`  
          The name of the user.
    - `companies` — `array: object`  
        Companies that can act in this step.
      - `autodeskId` — `string`  
          The Autodesk ID of the company.
      - `name` — `string`  
          The name of the company.

## Example

```
curl -v 'https://developer.api.autodesk.com/construction/reviews/v1/projects/563a4c30-e30d-4869-ac02-2a18b6447abe/reviews' \
  -X 'POST' \
  -H 'Authorization: Bearer AuIPTf4KYLTYGVnOHQ0cuolwCW2a' \
  -H 'Content-Type: application/json' \
  -d '{
        "name": "The 2nd Floor Design Review",
        "fileVersions": [
          {
            "urn": "urn:adsk.wipprod:fs.file:vf.hC6k4hndRWaeIVhIjvHu8w?version=1"
          }
        ],
        "workflowId": "43c4fa9b-0cbc-4b57-a121-9d7d46a3eaa4",
        "notes": "For the No. 3 Building on the 2nd floor, please review the design and provide feedback.",
        "workflowOptions": {
          "copyFilesOptions": {
            "folderUrn": "urn:adsk.wipprod:fs.folder:co.CplBAmvXRWGqsvN1Nabvd2"
          },
          "steps": [
            {
              "id": "Lane_068sgjq",
              "candidates": {
                "users": [
                  {
                    "autodeskId": "HWUBNU689CRU"
                  }
                ],
                "roles": [
                  {
                    "autodeskId": "1473817"
                  }
                ],
                "companies": [
                  {
                    "autodeskId": "26980302"
                  }
                ]
              }
            }
          ]
        }
      }'
```

```
{
  "id": "37d5145b-c634-407c-b0b4-a65197e43fce",
  "sequenceId": 23,
  "name": "3rd Floor Design Review",
  "status": "OPEN",
  "currentStepId": "Lane_uJtTI3vjaF",
  "currentStepDueDate": "2024-11-09T01:42:16.600Z",
  "createdBy": {
    "autodeskId": "HWUBNU689CRU",
    "name": "James Smith"
  },
  "createdAt": "2024-11-06T01:42:17.476Z",
  "updatedAt": "2024-11-07T12:33:36.421Z",
  "finishedAt": "2024-11-10T02:33:17.336Z",
  "archived": false,
  "archivedBy": {
    "autodeskId": "TTFMLCMCRG5F",
    "name": "Tim Hudson"
  },
  "archivedAt": "2024-11-19T01:38:27.306Z",
  "approvedBy": {
    "autodeskId": "A96JX8NUKRLVFWSR",
    "name": "Tim Hudson"
  },
  "approvedAt": "2024-11-10T02:33:17.336Z",
  "workflowId": "0b43cedf-5c02-462b-8166-7dfbb13d3476",
  "nextActionBy": {
    "claimedBy": [
      {
        "autodeskId": "HWUBNU689CRU",
        "name": "James Smith"
      }
    ],
    "candidates": {
      "roles": [
        {
          "autodeskId": "1473817",
          "name": "Architect"
        }
      ],
      "users": [
        {
          "autodeskId": "HWUBNU689CRU",
          "name": "James Smith"
        }
      ],
      "companies": [
        {
          "autodeskId": "26980302",
          "name": "Autodesk Co. Ltd."
        }
      ]
    }
  }
}
```

## 같은 그룹의 다른 엔드포인트

- `POST /construction/reviews/v1/projects/{projectId}/workflows` — [Creates a new approval workflow in the specified project](./reviews-createworkflow-POST.md)
- `GET /construction/reviews/v1/projects/{projectId}/reviews/{reviewId}` — [Retrieves a specific review in the specified project by review ID](./reviews-getreview-GET.md)
- `GET /construction/reviews/v1/projects/{projectId}/reviews/{reviewId}/progress` — [Retrieves the progress of a specific review in the specified project](./reviews-getreviewprogress-GET.md)
- `GET /construction/reviews/v1/projects/{projectId}/reviews/{reviewId}/versions` — [Retrieves the file versions included in the latest round of the specified review](./reviews-getreviewversions-GET.md)
- `GET /construction/reviews/v1/projects/{projectId}/reviews/{reviewId}/workflow` — [Retrieves the approval workflow associated with a specific review](./reviews-getreviewworkflow-GET.md)
- `GET /construction/reviews/v1/projects/{projectId}/versions/{versionId}/approval-statuses` — [Retrieves the full approval records and review references of a specific file version](./reviews-getversionapprovalstatuses-GET.md)
- `GET /construction/reviews/v1/projects/{projectId}/workflows/{workflowId}` — [Retrieves a specific approval workflow in the project by workflow ID](./reviews-getworkflow-GET.md)
- `GET /construction/reviews/v1/projects/{projectId}/reviews` — [Retrieves the list of reviews created in the specified project](./reviews-reviews-GET.md)
- `GET /construction/reviews/v1/projects/{projectId}/workflows` — [Retrieves all approval workflows used for file reviews in a given project](./reviews-workflows-GET.md)

---
원본 문서: https://aps.autodesk.com/en/docs/acc/v1/reference/http/reviews-createreview-POST
