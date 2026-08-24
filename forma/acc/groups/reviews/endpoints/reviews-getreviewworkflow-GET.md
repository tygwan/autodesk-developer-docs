---
operation_id: reviews-getreviewworkflow-GET
method: GET
path: /construction/reviews/v1/projects/{projectId}/reviews/{reviewId}/workflow
group: "Reviews"
auth_context: user context optional
scopes: [data:read]
surface: http
verification: docs-only
---

# Retrieves the approval workflow associated with a specific review

```http
GET https://developer.api.autodesk.com/construction/reviews/v1/projects/{projectId}/reviews/{reviewId}/workflow
```

| | |
| --- | --- |
| **인증 컨텍스트** | user context optional |
| **필요 스코프** | `data:read` |
| **데이터 포맷** | JSON |
| **그룹** | Reviews |

Retrieves the approval workflow associated with a specific review.

## 요청

### URI 파라미터

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `projectId` | string: UUID |  | The ID of the project. Use the Data Management API to retrieve the project ID. For more information, see the Retrieve a Project ID tutorial. You can provide the project ID with or without the “b." prefix. - Example with prefix: b.563a4c30-e30d-4869-ac02-2a18b6447abe - Example without prefix: 563a4c30-e30d-4869-ac02-2a18b6447abe |
| `reviewId` | string: UUID |  | The unique ID of the review. It must be in UUID format — not the numeric sequence ID shown in the Reviews UI. To find the review ID, call GET reviews. |

### 헤더

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `Authorization` | string | **필수** | Must be Bearer <token>, where <token> is a two-legged access token obtained via a Client Credentials Grant flow, or a three-legged access token obtained via an Authorization Code flow or a Secure Service Account (SSA) flow. The SSA flow is designed for headless server-to-server operations. While it functions like a two-legged flow (no user interaction), it is classified as three-legged because it preserves user context. |

## 응답

| 코드 | 의미 | 설명 |
| --- | --- | --- |
| `200` | OK | Successfully retrieved the requested review workflow data |
| `400` | Bad Request | Bad request. The input parameters were invalid. |
| `401` | Unauthorized | Authentication failed. Required authentication headers are missing or invalid. |
| `403` | Forbidden | Forbidden. The user does not have permission to access this resource. |
| `404` | Not Found | Not found. The resource does not exist or is inaccessible. |
| `500` | Internal Server Error | An unexpected server error occurred. |

### 응답 본문 (200)

- `name` — `string`  
    The name of the workflow. It must be unique within the project. Max length: 255
- `description` — `string`  
    A description of the workflow. Max length: 4096
- `notes` — `string`  
    A custom note associated with the workflow. Visible to all reviewers during the review process. Max length: 4096
- `additionalOptions` — `object`  
    Workflow-level settings that control additional edit permissions for initiators and approvers.
  - `allowInitiatorToEdit` — `boolean`  
      Deprecated Supported for backward compatibility. Use initiatorEditPermissions with value REVIEWER_ASSIGNMENTS_AND_DURATION instead, which provides the same behavior. true: the initiator can change reviewer assignments and durations. false: (default) reviewers and durations are fixed.
  - `initiatorEditPermissions` — `array: string`  
      An optional array of values that grant the initiator additional edit permissions. Replaces the deprecated allowInitiatorToEdit field. If omitted or empty, the initiator has no additional edit permissions. Default: []. Possible values: - REVIEWER_ASSIGNMENTS_AND_DURATION - Allows the initiator to edit reviewer assignments and step durations. Equivalent to setting allowInitiatorToEdit to true. - APPROVERS - Allows the initiator to modify the approver candidate list. - CLOSED_REVIEW_TITLE - Allows the initiator to rename closed reviews. - START_OWN_REVIEW - Allows the initiator to start their own reviews.
  - `approverEditPermissions` — `array: string`  
      An optional array of values that grant approvers additional edit permissions in the UI. If omitted or empty, approvers have no additional edit permissions. Default: [] (empty array). Possible values: - APPROVERS - Allow approvers to adjust the approvers in approver steps.
- `id` — `string: UUID`  
    The ID of the workflow.
- `approvalStatusOptions` — `array: object`  
    A list of file review status options to the workflow, which contains two built in options returned by the system.
  - `label` — `string`  
      The display name shown in the UI. It must be unique across all status options (built-in and custom). Maximum length: 255 characters. Max length: 255
  - `value` — `enum:string`  
      The value representing the approval outcome. Possible values: APPROVED, REJECTED.
  - `id` — `string: UUID`  
      The unique identifier of this approval status entry in the workflow.
  - `builtIn` — `boolean`  
      Indicates whether the approval status is a built-in option. true: the status is built in (e.g., APPROVED, REJECTED). false: the status is a custom option created by a user.
- `steps` — `array: object`  
    A list of steps specify the details for each step in the workflow.
  - `name` — `string`  
      The name of the step, as defined in the workflow. It appears in the UI and is used in workflow configuration. Maximum length: 255 characters. Max length: 255
  - `type` — `enum:string`  
      Indicates the step type in the workflow. Possible values: - INITIATOR: the first step. It typically represents the person who launches the review. - REVIEWER: an intermediate step. It allows one or more reviewers to evaluate the files. - APPROVER: the final step. It represents the decision maker who approves or rejects the files.
  - `duration` — `int`  
      (Time allowed in the UI) The number of days allocated to complete this step. This field applies only to REVIEWER and APPROVER steps. It is used to calculate the due date based on the selected dueDateType. Valid range: 1–99.
  - `dueDateType` — `enum:string`  
      Specifies how the due date is calculated for this step. It works together with duration. This field applies only to REVIEWER and APPROVER steps. Possible values: - CALENDAR_DAY (default): the due date includes all calendar days, including weekends and holidays. - WORKDAY: the due date excludes weekends and project holidays.
  - `groupReview` — `object`  
      (Reviewer Type in the UI) Defines whether multiple reviewers can participate in this step and how their responses are handled. It applies only to REVIEWER steps.
    - `enabled` — `boolean`  
        Indicates whether group review is enabled for this step. true: multiple reviewers can participate in the step. false: (default) only a single reviewer is allowed.
    - `type` — `enum:string`  
        (Displayed under More options in the UI) Specifies the group review rule for this step. Possible values: - ALL: every reviewer assigned to the step must submit a response (up to 30). - MINIMUM: only a specified number of reviewers must respond, as defined in min.
    - `min` — `int`  
        The minimum number of reviewers required for this step. This field is set automatically when the group review type is set to MINIMUM. It is not independently configurable. Valid range: 1–30.
  - `id` — `string`  
      The ID of the step.
  - `candidates` — `object`  
      (Displayed in the UI when selecting reviewers for a step) Lists the users, roles, or companies that were configured as reviewers for this step. These candidates are defined during workflow setup and determine who will be invited to participate in the step during a review.
    - `roles` — `array: object`  
        A list of project roles assigned as candidates for this step.
      - `autodeskId` — `string`  
          The Autodesk ID of the role.
      - `name` — `string`  
          The name of the role.
    - `users` — `array: object`  
        A list of individual users assigned as candidates for this step.
      - `autodeskId` — `string`  
          The Autodesk ID of the user.
      - `name` — `string`  
          The name of the user.
    - `companies` — `array: object`  
        A list of companies assigned as candidates for this step.
      - `autodeskId` — `string`  
          The Autodesk ID of the company.
      - `name` — `string`  
          The name of the company.
- `copyFilesOptions` — `object`  
    (Copy approved files in the UI) The configuration for copying approved files to a target folder when the review is complete.
  - `enabled` — `boolean`  
      Indicates whether approved files should be copied to a target folder after the review is complete. true: copy approved files to the target folder. false: do not copy approved files.
  - `allowOverride` — `boolean`  
      (Allow the initiator to change the target folder in the UI) Allows the initiator to change the target folder when creating a review. true: the initiator can choose a different target folder. false: the folder defined in the workflow is used.
  - `condition` — `string`  
      (All/Any files in the review have been approved in the UI) Specifies the condition under which approved files will be copied. Possible values: ANY: copy files if at least one file in the review is approved. ALL: copy files only if all files in the review are approved.
  - `folderUrn` — `string`  
      (Then copy approved files to in the UI) The URN of the target folder where approved files will be copied.
  - `includeMarkups` — `boolean`  
      (Include all published markups on approved files in the UI) Indicates whether published markups should be included when copying files. true: include all published (unarchived) markups from the source version. false: (default) do not include markups.
  - `disableOverrideMarkupSetting` — `boolean`  
      (Allow approvers to change whether or not markups are included in the UI) Controls whether approvers or admins can change the markup inclusion setting when starting the review. true: the markup setting is locked and cannot be changed. false: the setting can be changed during review setup.
- `attachedAttributes` — `array: object`  
    (Update Attributes in the UI) The list of attributes added in the Update Attributes action. These attributes will be applied to the approved files in the target folder, or optionally also in the source folder depending on the configuration.
  - `id` — `int`  
      The ID of the custom attribute to be applied after review completion.
  - `required` — `boolean`  
      (Attribute – Required by approver in the UI) Indicates whether the approver must enter a value for this attribute to submit the review. true: the attribute is required. false: (default) the attribute is optional.
- `updateAttributesOptions` — `object`  
    The configuration for applying attribute updates when a review is completed. This applies only if the workflow includes a file copy action and the Update Attributes action is enabled.
  - `enableAttachedAttributes` — `boolean`  
      (Update attributes in the UI) Indicates whether the Update Attributes action is enabled. true: attributes will be applied after the review. false: (default) attributes will not be updated.
  - `updateSourceAndCopiedFiles` — `boolean`  
      (Update attributes both for target folder and source folder or Update attributes only for target folder in the UI) Determines whether attributes are updated only for files in the target folder, or for both the target and source folders. true: update attributes in both folders. false: (default) update only the target folder. Only available when the approval workflow includes a copy post-action.
  - `allowApproverToUpdateRejectedFiles` — `boolean`  
      (Allow approvers to choose if the attributes of rejected files are updated for the source folder in the UI) Determines whether approvers can choose to update attributes for rejected files in the source folder when submitting a review. Only applicable when enableAttachedAttributes and updateSourceAndCopiedFiles are true. true: approvers can choose to update attributes for both approved and rejected files in the source folder. false: (default) attributes are only updated for approved files.

## Example

```
curl -v 'https://developer.api.autodesk.com/construction/reviews/v1/projects/563a4c30-e30d-4869-ac02-2a18b6447abe/reviews/73c8b3ec-eea2-4240-9c69-f9563e2fec0c/workflow' \
  -H 'Authorization: Bearer AuIPTf4KYLTYGVnOHQ0cuolwCW2a'
```

```
{
  "name": "Final Structural Review",
  "description": "Used to review structural plans before finalizing IFC drawings.",
  "notes": "Please check all rebar annotations before approving. Include markup if changes are required.",
  "additionalOptions": {
    "allowInitiatorToEdit": true,
    "initiatorEditPermissions": [
      "REVIEWER_ASSIGNMENTS_AND_DURATION",
      "APPROVERS"
    ],
    "approverEditPermissions": [
      "APPROVERS"
    ]
  },
  "id": "dab28823-7ecc-47b4-a92a-37540d777751",
  "approvalStatusOptions": [
    {
      "label": "Approved w/ comments",
      "value": "APPROVED",
      "id": "b2a3c3b7-4fef-40a4-868b-981b23e7182f",
      "builtIn": false
    }
  ],
  "steps": [
    {
      "name": "Reviewer",
      "type": "REVIEWER",
      "duration": 3,
      "dueDateType": "CALENDAR_DAY",
      "groupReview": {
        "enabled": true,
        "type": "MINIMUM",
        "min": 3
      },
      "id": "Lane_uJtTI3vjaF",
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
  ],
  "copyFilesOptions": {
    "enabled": true,
    "allowOverride": false,
    "condition": "ANY",
    "folderUrn": "urn:adsk.wipprod:fs.folder:co.CplBAmvXRWGqsvN1Nabvd2",
    "includeMarkups": false,
    "disableOverrideMarkupSetting": false
  },
  "attachedAttributes": [
    {
      "id": 10272,
      "required": false
    }
  ],
  "updateAttributesOptions": {
    "enableAttachedAttributes": false,
    "updateSourceAndCopiedFiles": false,
    "allowApproverToUpdateRejectedFiles": false
  }
}
```

## 같은 그룹의 다른 엔드포인트

- `POST /construction/reviews/v1/projects/{projectId}/reviews` — [Creates a new review in the specified project using an existing approval workflow](./reviews-createreview-POST.md)
- `POST /construction/reviews/v1/projects/{projectId}/workflows` — [Creates a new approval workflow in the specified project](./reviews-createworkflow-POST.md)
- `GET /construction/reviews/v1/projects/{projectId}/reviews/{reviewId}` — [Retrieves a specific review in the specified project by review ID](./reviews-getreview-GET.md)
- `GET /construction/reviews/v1/projects/{projectId}/reviews/{reviewId}/progress` — [Retrieves the progress of a specific review in the specified project](./reviews-getreviewprogress-GET.md)
- `GET /construction/reviews/v1/projects/{projectId}/reviews/{reviewId}/versions` — [Retrieves the file versions included in the latest round of the specified review](./reviews-getreviewversions-GET.md)
- `GET /construction/reviews/v1/projects/{projectId}/versions/{versionId}/approval-statuses` — [Retrieves the full approval records and review references of a specific file version](./reviews-getversionapprovalstatuses-GET.md)
- `GET /construction/reviews/v1/projects/{projectId}/workflows/{workflowId}` — [Retrieves a specific approval workflow in the project by workflow ID](./reviews-getworkflow-GET.md)
- `GET /construction/reviews/v1/projects/{projectId}/reviews` — [Retrieves the list of reviews created in the specified project](./reviews-reviews-GET.md)
- `GET /construction/reviews/v1/projects/{projectId}/workflows` — [Retrieves all approval workflows used for file reviews in a given project](./reviews-workflows-GET.md)

---
원본 문서: https://aps.autodesk.com/en/docs/acc/v1/reference/http/reviews-getreviewworkflow-GET
