---
title: "Create a Review"
url_path: tutorials/reviews/reviews-create-review
surface: guide
---
# Create a Review

This tutorial demonstrates how to create a review in a project. The steps include preparing the review details, creating the review, confirming the review, and optionally using webhooks to monitor creation status.

## Before You Begin
- [Register an app](https://aps.autodesk.com/myapps), and select `Forma APIs` in the `API Access` dropdown.
- Acquire a [3-legged](https://aps.autodesk.com/en/docs/oauth/v2/tutorials/get-3-legged-token/) or [2-legged](https://aps.autodesk.com/en/docs/oauth/v2/tutorials/get-2-legged-token/) OAuth token with `data:read` and `data:write` scopes.  For a 3-legged token, ensure that the user has permission to access the project and files.
- For a 2-legged token, the `x-user-id` header is required. Retrieve the user’s Autodesk ID by calling [GET projects/:projectId/users](https://aps.autodesk.com/en/docs/acc/v1/reference/http/admin-projectsprojectId-users-GET/) with your 2-legged OAuth token and the user’s email address. Ensure that the user is a project administrator or a candidate in the workflow.
- Find the project ID for the project you want to work with by following the [Retrieve a Forma Hub ID and Project ID](https://aps.autodesk.com/en/docs/acc/v1/tutorials/getting-started/retrieve-account-and-project-id/) tutorial. In this example, assume the project ID is `9ba6681e-1952-4d54-aac4-9de6d9858dd4`.
- Find the workflow ID for the approval workflow you want to use by calling [GET workflows](https://aps.autodesk.com/en/docs/acc/v1/reference/http/reviews-workflows-GET/). In this example, assume the workflow ID is `a4e60936-e950-4097-b7d3-e6cf1c3c5415`.
- Obtain the URNs of the file versions that you want to include in the review. To find file version URNs, follow the first four steps of the [Download a File](https://aps.autodesk.com/en/docs/acc/v1/tutorials/files/download-document-s3/) tutorial.
- Verify that you have access to the relevant Forma hub, project, folders, and files.

## Step 1 (optional): Gather Required IDs and URNs

Use the project ID (`9ba6681e-1952-4d54-aac4-9de6d9858dd4`) to call [GET workflows](https://aps.autodesk.com/en/docs/acc/v1/reference/http/reviews-workflows-GET/) and retrieve available approval workflows (including their steps). Choose a workflow, note its `id` and the Reviewer step `id`, then gather the file version URNs you want to include (and optionally a target folder URN).

### Request

```
curl 'https://developer.api.autodesk.com/construction/reviews/v1/projects/9ba6681e-1952-4d54-aac4-9de6d9858dd4/workflows?limit=10&offset=0' \
  -X GET \
  -H 'x-user-id: U5XCJQ22TL8G' \
  -H 'Authorization: Bearer nFRJxzCD8OOUr7hzBwbr06D76zAT' \
  -H 'Content-Type: application/json'
```

### Response

```
{
  "results": [
    {
      "id": "4e609369-e950-4097-b7d3-e6cf1c3c5415",
      "name": "Drawing Review Workflow",
      "steps": [
        { "id": "INITIATOR", "name": "Initiator" },
        { "id": "Lane_3ReoxO2T0o", "name": "Reviewer" },
        { "id": "APPROVER", "name": "Approver" }
      ],
      "additionalOptions": {
        "initiatorEditPermissions": ["REVIEWER_ASSIGNMENTS_AND_DURATION", "APPROVERS", "CLOSED_REVIEW_TITLE", "START_OWN_REVIEW"],
        "approverEditPermissions": ["APPROVERS"]
      },
      "copyFilesOptions": { "enabled": true, "allowOverride": true }
    }
  ],
  "pagination": { "limit": 10, "offset": 0, "totalResults": 1, "nextUrl": "" }
}
```

### Notes
- **Reviewer step ID** — Use the Reviewer step `id` (e.g., `Lane_3ReoxO2T0o`) if you plan to override candidates in your request (`workflowOptions.steps[].id`).
- **File version URNs** — To find file version URNs, follow the first four steps of the [Download a File](https://aps.autodesk.com/en/docs/acc/v1/tutorials/files/download-document-s3/) tutorial and note the `included.id` values.
- **Target folder URN (optional)** — If you plan to set `workflowOptions.copyFilesOptions.folderUrn`, ensure the workflow allows it (`copyFilesOptions.enabled = true` and `copyFilesOptions.allowOverride = true`). You can locate a folder URN using the [Upload Files to the Forma Files tool](https://aps.autodesk.com/en/docs/acc/v1/tutorials/files/upload-document-s3/) tutorial and note the `data.id`.
- To override reviewer candidates, the workflow must allow it: `additionalOptions.initiatorEditPermissions` must include `REVIEWER_ASSIGNMENTS_AND_DURATION`.

## Step 2: Create a Review

Use the project ID (`9ba6681e-1952-4d54-aac4-9de6d9858dd4`) to call [POST reviews](https://aps.autodesk.com/en/docs/acc/v1/reference/http/reviews-createreview-POST/) with the request payload you prepared in Step 1. This creates a new review instance in the project.

### Request

```
curl 'https://developer.api.autodesk.com/construction/reviews/v1/projects/9ba6681e-1952-4d54-aac4-9de6d9858dd4/reviews' \
  -X POST \
  -H 'x-user-id: HWUBNU689CRU' \
  -H 'Authorization: Bearer nFRJxzCD8OOUr7hzBwbr06D76zAT' \
  -H 'Content-Type: application/json' \
  -d '{
    "name": "The 2nd Floor Design Review",
    "workflowId": "4e609369-e950-4097-b7d3-e6cf1c3c5415",
    "notes": "For the No. 3 Building on the 2nd floor, please review the design and provide feedback.",
    "fileVersions": [
      { "urn": "urn:adsk.wipprod:fs.file:vf.hC6k4hndRWaeIVhIjvHu8w?version=1" },
      { "urn": "urn:adsk.wipprod:fs.file:vf.7vIu5GjLQeaGBMW99tntyg?version=2" }
    ],
    "workflowOptions": {
      "copyFilesOptions": {
        "folderUrn": "urn:adsk.wipprod:fs.folder:co.CplBAmvXRWGqsvN1Nabvd2"
      },
      "steps": [
        {
          "id": "Lane_3ReoxO2T0o",
          "candidates": {
            "users":     [ { "autodeskId": "83QFRYJA3LRX" } ],
            "roles":     [ { "autodeskId": "1473817" } ],
            "companies": [ { "autodeskId": "26980302" } ]
          }
        }
      ]
    }
  }'
```

### Response

```
{
  "id": "c7fc352d-c33d-4e4b-9472-3dfd054be1f7",
  "name": "The 2nd Floor Design Review",
  "status": "OPEN",
  "sequenceId": 9,
  "currentStepId": "Lane_3ReoxO2T0o",
  "currentStepDueDate": "2025-06-21T21:14:14.027Z",
  "createdBy": {
    "autodeskId": "HWUBNU689CRU",
    "name": "James Smith"
  },
  "createdAt": "2025-06-18T21:14:14.672Z",
  "updatedAt": "2025-06-18T21:14:14.672Z",
  "finishedAt": null,
  "archived": false,
  "approvedBy": null,
  "approvedAt": null,
  "workflowId": "4e609369-e950-4097-b7d3-e6cf1c3c5415",
  "nextActionBy": {
    "claimedBy": [],
    "candidates": {
      "companies": [ { "autodeskId": "26980302", "name": "Autodesk Co. Ltd." } ],
      "roles":     [ { "autodeskId": "1473817", "name": "Architect" } ],
      "users":     [ { "autodeskId": "83QFRYJA3LRX", "name": "Bob Smith" } ]
    }
  }
}
```

### Notes
- When a review is created, its `status` is `OPEN` and the `currentStepId` is the first Reviewer step ID, or the Approver step ID if no Reviewer step exists.
- To query the note created during review creation, call [GET reviews/progress](https://aps.autodesk.com/en/docs/acc/v1/reference/http/reviews-getreviewprogress-GET/).

## Step 3: Confirm the Review

After creating a review, confirm that it was created successfully by calling [GET reviews/:reviewId](https://aps.autodesk.com/en/docs/acc/v1/reference/http/reviews-getreview-GET/) with the review ID returned in Step 2. This retrieves the full details of the new review.

### Request

```
curl 'https://developer.api.autodesk.com/construction/reviews/v1/projects/9ba6681e-1952-4d54-aac4-9de6d9858dd4/reviews/c7fc352d-c33d-4e4b-9472-3dfd054be1f7' \
  -X GET \
  -H 'x-user-id: HWUBNU689CRU' \
  -H 'Authorization: Bearer nFRJxzCD8OOUr7hzBwbr06D76zAT' \
  -H 'Content-Type: application/json'
```

### Response

```
{
  "id": "c7fc352d-c33d-4e4b-9472-3dfd054be1f7",
  "name": "The 2nd Floor Design Review",
  "status": "OPEN",
  "sequenceId": 9,
  "currentStepId": "Lane_3ReoxO2T0o",
  "createdBy": {
    "autodeskId": "HWUBNU689CRU",
    "name": "James Smith"
  },
  "createdAt": "2025-06-18T21:14:14.672Z",
  "approvedBy": null,
  "approvedAt": null,
  "workflowId": "4e609369-e950-4097-b7d3-e6cf1c3c5415"
}
```

### Notes
- Confirm that the `status` is `OPEN` and that the `workflowId` matches the workflow you selected.
- If you need to inspect the review’s steps and progress, use [GET reviews/workflow](https://aps.autodesk.com/en/docs/acc/v1/reference/http/reviews-getreviewworkflow-GET/) for the workflow snapshot or [GET reviews/progress](https://aps.autodesk.com/en/docs/acc/v1/reference/http/reviews-getreviewprogress-GET/) for progress updates.

## Step 4 (optional): Use a Webhook to Monitor Review Creation

When a review is created, the system validates its files in the background.
If any file is invalid or missing, the review may later change from `OPEN` to `FAILED` even though the initial request returned `201 Created`.

Rather than repeatedly calling [GET reviews/:id](https://aps.autodesk.com/en/docs/acc/v1/reference/http/reviews-getreview-GET), register a webhook for the `review.created-1.0` event. See the [Creating a Webhook and Listening to Events](https://aps.autodesk.com/en/docs/webhooks/v1/tutorials/create-a-hook-reviews) tutorial for more details.
Forma sends a POST message to your callback URL when the review finishes initialization—whether successful or failed.

When registering a webhook, you must provide a callback endpoint with a POST method to receive messages about the result of the Review creation.

In this example, assume the callback URL is:

```
https://your-webhook-url.com/callback
```

### Request

```
curl 'https://developer.api.autodesk.com/webhooks/v1/systems/autodesk.construction.reviews/events/review.created-1.0/hooks' \
  -X POST \
  -H 'Authorization: Bearer nFRJxzCD8OOUr7hzBwbr06D76zAT' \
  -H 'Content-Type: application/json' \
  -H 'region: US' \
  -d '{
         "callbackUrl": "https://your-webhook-url.com/callback",
         "scope": {
           "project": "9ba6681e-1952-4d54-aac4-9de6d9858dd4"
         },
         "hookAttribute": {
           "projectId": "9ba6681e-1952-4d54-aac4-9de6d9858dd4"
         }
      }'
```

After the review finishes initialization, Forma sends a POST request to your callback URL with the following payload:

### Response

```
{
  "version": "1.0",
  "resourceUrn": "c7fc352d-c33d-4e4b-9472-3dfd054be1f7",
  "hook": {
      "hookId": "271e19ed-0443-44a8-9c0d-9fbcf2b0848d",
      "tenant": "9ba6681e-1952-4d54-aac4-9de6d9858dd4",
      "callbackUrl": "https://your-webhook-url.com/callback",
      "createdBy": "HWUBNU689CRU",
      "event": "review.created-1.0",
      "createdDate": "2025-08-05T21:47:11.233+00:00",
      "lastUpdatedDate": "2025-08-05T21:47:11.233+00:00",
      "system": "autodesk.construction.reviews",
      "creatorType": "O2User",
      "status": "active",
      "scope": {
          "project": "9ba6681e-1952-4d54-aac4-9de6d9858dd4"
      },
      "hookAttribute": {
          "projectId": "9ba6681e-1952-4d54-aac4-9de6d9858dd4"
      },
      "autoReactivateHook": true,
      "urn": "urn:adsk.webhooksprod:events.hook:271e19ed-0443-44a8-9c0d-9fbcf2b0848d",
      "callbackWithEventPayloadOnly": false,
      "__self__": "/systems/autodesk.construction.reviews/events/review.created-1.0/hooks/271e19ed-0443-44a8-9c0d-9fbcf2b0848d"
  },
  "payload": {
      "roundNum": 1,
      "sequenceId": "9",
      "status": "OPEN"
  }
}
```

### Notes
- The default value for `region` is `US`, but we recommend explicitly specifying the region when sending requests. For the complete list of supported region API values, see the [Regions](https://aps.autodesk.com/en/docs/acc/v1/overview/acc-regions) page.
- The `payload` includes the review’s creation status. If an error occurs, an `errorCode` field is returned.

Example of a failed `payload`:

```
{
  "roundNum": 1,
  "sequenceId": "9",
  "status": "FAILED",
  "errorCode": "INVALID_FILE_VERSION"
}
```

The `errorCode` value indicates the type of error that occurred:
- `NO_VALID_VERSION_URN` – Some of the provided URNs are invalid.
- `MALWARE_DETECTED` – A file was detected as malware.
- `VERSIONS_NOT_EXISTED` – One or more version files no longer exist (for example, they were deleted).
- `DIFFERENT_PROJECT_VERSIONS` – One or more URNs belong to a different project.
- `PARENT_FOLDER_NOT_EXISTED` – A parent folder no longer exists (it may have been deleted).
- `VERSIONS_ACCESS_DENIED` – The initiator does not have permission to access the specified files.
- `RETRYABLE_TEMP_ERROR` – The review creation failed due to a temporary error; you can retry the request later.

## Step 5 (optional): List Reviews in a Project

To retrieve all reviews that you can access in a project, call [GET reviews](https://aps.autodesk.com/en/docs/acc/v1/reference/http/reviews-reviews-GET/). Use the `limit` and `offset` parameters for pagination. The default `limit` is 50 and the default `offset` is 0.

If the response does not include a `nextUrl`, it means you have reached the last page of results.

### Request

```
curl 'https://developer.api.autodesk.com/construction/reviews/v1/projects/9ba6681e-1952-4d54-aac4-9de6d9858dd4/reviews?limit=10&offset=0&filter[status]=OPEN' \
  -X GET \
  -H 'x-user-id: 83QFRYJA3LRX' \
  -H 'Authorization: Bearer nFRJxzCD8OOUr7hzBwbr06D76zAT' \
  -H 'Content-Type: application/json'
```

### Response

```
{
  "results": [
    {
      "id": "c7fc352d-c33d-4e4b-9472-3dfd054be1f7",
      "name": "The 2nd Floor Design Review",
      "status": "OPEN",
      "sequenceId": 9,
      "currentStepId": "Lane_3ReoxO2T0o",
      "currentStepDueDate": "2025-06-21T21:14:14.027Z",
      "createdBy": {
        "autodeskId": "HWUBNU689CRU",
        "name": "James Smith"
      },
      "createdAt": "2025-06-18T21:14:14.672Z",
      "workflowId": "4e609369-e950-4097-b7d3-e6cf1c3c5415",
      "nextActionBy": {
        "candidates": {
          "companies": [ { "autodeskId": "26980302", "name": "Autodesk Co. Ltd." } ],
          "roles":     [ { "autodeskId": "1473817", "name": "Architect" } ],
          "users":     [ { "autodeskId": "83QFRYJA3LRX", "name": "Bob Smith" } ]
        }
      }
    },
    ...
  ],
  "pagination": {
    "limit": 10,
    "offset": 0,
    "totalResults": 100,
    "nextUrl": "https://developer.api.autodesk.com/construction/reviews/v1/projects/9ba6681e-1952-4d54-aac4-9de6d9858dd4/reviews?limit=10&offset=10&filter[status]=OPEN"
  }
}
```

### Notes
- Use the `filter[status]` parameter (as shown above) to restrict results by status, such as `OPEN` or `CLOSED`.
- Use `filter[approvedBy]` to filter reviews by the Autodesk ID of the user who approved them, and `filter[approvedAt]` to filter by approval timestamp.
- Use the `nextUrl` field in the response to retrieve additional pages of results.

---
원본 문서: https://aps.autodesk.com/en/docs/acc/v1/tutorials/reviews/reviews-create-review
