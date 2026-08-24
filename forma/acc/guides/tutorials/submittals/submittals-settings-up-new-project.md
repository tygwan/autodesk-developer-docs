---
title: "Setting up a New Submittals Project"
url_path: tutorials/submittals/submittals-settings-up-new-project
surface: guide
---
# Setting Up a New Project in Submittals

This tutorial explains how to configure a newly created Autodesk Forma project for use with Submittals.
The steps include verifying user permissions, assigning a Submittal Manager, and configuring the custom identifier sequence type.

For more information about working with submittals, see the [Help documentation](https://help.autodesk.com/view/BUILD/ENU/?guid=Submittals_Overview).

## Before You Begin
- [Register an app](https://aps.autodesk.com/myapps)
- Acquire a [3-legged OAuth token](https://aps.autodesk.com/en/docs/oauth/v2/tutorials/get-3-legged-token/) with `data:read` `data:write` scopes.
- Verify that you have access to the relevant account and Forma project.
- Find the relevant project ID for the project you want to create an item in by following the [Retrieve an Account ID and Project ID](https://aps.autodesk.com/en/docs/acc/v1/tutorials/getting-started/retrieve-account-and-project-id/) tutorial. In this example, assume the project ID is `d4be9275-1e59-4ba9-a68b-2dcec49e25c0`.
- Have the Autodesk ID of the user, role, or company to assign as a Submittal Manager. You can use [GET projects/users](https://aps.autodesk.com/en/docs/acc/v1/reference/http/admin-projectsprojectId-users-GET/) or [GET projects/companies](https://aps.autodesk.com/en/docs/acc/v1/reference/http/projects-:project_id-companies-GET/) to find the relevant identifier.

## Step 1: Verify User Permissions

Call [GET users/me](https://aps.autodesk.com/en/docs/acc/v1/reference/http/submittals-users-me-GET/) using the project ID (`d4be9275-1e59-4ba9-a68b-2dcec49e25c0`) to retrieve the relevant permissions for the user.

Look for the following in the response:
- The `roles` array – check if `"4"` (Admin) is present.
- The `permittedActions` array – check if an entry with `"id": "AdminMapping::create"` is present.

### Request

```
curl -v 'https://developer.api.autodesk.com/construction/submittals/v2/projects/d4be9275-1e59-4ba9-a68b-2dcec49e25c0/users/me' \
  -H 'Authorization: Bearer AuIPTf4KYLTYGVnOHQ0cuolwCW2a'
```

### Response

```
{
    "id": "MFEGJ9W5GGQL",
    "roles": [
        "4",
        "2"
    ],
    "permittedActions": [
        {
            "id": "Spec::list",
            "fields": {},
            "mandatoryFields": [],
            "transitions": []
        },
        {
            "id": "Spec::retrieve",
            "fields": {},
            "mandatoryFields": [],
            "transitions": []
        },
        {
            "id": "Spec::create",
            "fields": {
                "title": [],
                "identifier": []
            },
            "mandatoryFields": [
                "title",
                "identifier"
            ],
            "transitions": []
        },
        {
            "id": "Spec::partial_update",
            "fields": {
                "title": [],
                "identifier": []
            },
            "mandatoryFields": [],
            "transitions": []
        },
        {
            "id": "Spec::destroy",
            "fields": {},
            "mandatoryFields": [],
            "transitions": []
        },
        {
            "id": "Item::list",
            "fields": {},
            "mandatoryFields": [],
            "transitions": []
        },
        {
            "id": "Item::bulk_partial_update",
            "fields": {
                "subcontractor": [],
                "subcontractorType": [],
                "submitterDueDate": [],
                "manager": [],
                "managerType": [],
                "managerDueDate": [],
                "typeId": [],
                "packageId": [],
                "priority": [],
                "specId": [],
                "watchers": []
            },
            "mandatoryFields": [],
            "transitions": []
        },
        {
            "id": "Item::xlsx_export",
            "fields": {},
            "mandatoryFields": [],
            "transitions": []
        },
        {
            "id": "Item::create",
            "fields": {
                "stateId": [],
                "id": [],
                "specId": [],
                "subsection": [],
                "title": [],
                "description": [],
                "packageId": [],
                "typeId": [],
                "manager": [],
                "managerType": [],
                "priority": [],
                "watchers": [],
                "requiredOnJobDate": [],
                "leadTime": [],
                "requiredDate": [],
                "requiredApprovalDate": [],
                "templateId": [],
                "customAttributes": []
            },
            "mandatoryFields": [
                "stateId",
                "specId",
                "title",
                "typeId",
                "manager",
                "managerType"
            ],
            "transitions": [
                {
                    "id": "create::mgr-1",
                    "name": "Create",
                    "stateFrom": {
                        "id": "create",
                        "name": "Create"
                    },
                    "stateTo": {
                        "id": "mgr-1",
                        "name": "MGR 1"
                    },
                    "transitionFields": null,
                    "mandatoryFields": null,
                    "actionId": "ITEM_TRANSITION_CREATE_MGR1"
                }
            ]
        },
        {
            "id": "Item::bulk_apply_template",
            "fields": {},
            "mandatoryFields": [],
            "transitions": []
        },
        {
            "id": "Item::bulk_add_custom_identifier",
            "fields": {},
            "mandatoryFields": [],
            "transitions": []
        },
        {
            "id": "Item::bulk_wf_transition",
            "fields": {},
            "mandatoryFields": [],
            "transitions": [
                {
                    "id": "draft::sbc-1",
                    "name": "Assign to Responsible Contractor",
                    "stateFrom": {
                        "id": "draft",
                        "name": "DRAFT"
                    },
                    "stateTo": {
                        "id": "sbc-1",
                        "name": "SBC 1"
                    },
                    "transitionFields": [
                        "subcontractor",
                        "subcontractorType",
                        "submitterDueDate"
                    ],
                    "mandatoryFields": [
                        "subcontractor",
                        "subcontractorType",
                        "submitterDueDate"
                    ],
                    "actionId": "ITEM_TRANSITION_DRAFT_SBC1"
                },
                {
                    "id": "sbc-1::mgr-1",
                    "name": "Submit to Manager",
                    "stateFrom": {
                        "id": "sbc-1",
                        "name": "SBC 1"
                    },
                    "stateTo": {
                        "id": "mgr-1",
                        "name": "MGR 1"
                    },
                    "transitionFields": [
                        "manager"
                    ],
                    "mandatoryFields": [
                        "manager",
                        "managerType"
                    ],
                    "actionId": "ITEM_TRANSITION_SBC1_MGR1"
                },
                {
                    "id": "sbc-1::void",
                    "name": "Send to Void",
                    "stateFrom": {
                        "id": "sbc-1",
                        "name": "SBC 1"
                    },
                    "stateTo": {
                        "id": "void",
                        "name": "VOID"
                    },
                    "transitionFields": null,
                    "mandatoryFields": null,
                    "actionId": "ITEM_TRANSITION_SBC1_VOID"
                },
                {
                    "id": "mgr-1::sbc-1",
                    "name": "Return to Responsible Contractor",
                    "stateFrom": {
                        "id": "mgr-1",
                        "name": "MGR 1"
                    },
                    "stateTo": {
                        "id": "sbc-1",
                        "name": "SBC 1"
                    },
                    "transitionFields": [
                        "subcontractor",
                        "subcontractorType",
                        "submitterDueDate"
                    ],
                    "mandatoryFields": [
                        "subcontractor",
                        "subcontractorType",
                        "submitterDueDate"
                    ],
                    "actionId": "ITEM_TRANSITION_MGR1_SBC1"
                },
                {
                    "id": "mgr-1::rev",
                    "name": "Submit to Review",
                    "stateFrom": {
                        "id": "mgr-1",
                        "name": "MGR 1"
                    },
                    "stateTo": {
                        "id": "rev",
                        "name": "REV"
                    },
                    "transitionFields": [
                        "watchers",
                        "stepDueDate",
                        "mailNote",
                        "saveAttachmentDrafts",
                        "duplicateAttachments",
                        "customIdentifier"
                    ],
                    "mandatoryFields": [
                        "customIdentifier"
                    ],
                    "actionId": "ITEM_TRANSITION_MGR1_REV"
                },
                {
                    "id": "mgr-1::void",
                    "name": "Send to Void",
                    "stateFrom": {
                        "id": "mgr-1",
                        "name": "MGR 1"
                    },
                    "stateTo": {
                        "id": "void",
                        "name": "VOID"
                    },
                    "transitionFields": null,
                    "mandatoryFields": null,
                    "actionId": "ITEM_TRANSITION_MGR1_VOID"
                },
                {
                    "id": "rev::void",
                    "name": "Send to Void",
                    "stateFrom": {
                        "id": "rev",
                        "name": "REV"
                    },
                    "stateTo": {
                        "id": "void",
                        "name": "VOID"
                    },
                    "transitionFields": null,
                    "mandatoryFields": null,
                    "actionId": "ITEM_TRANSITION_REV_VOID"
                },
                {
                    "id": "mgr-2::void",
                    "name": "Send to Void",
                    "stateFrom": {
                        "id": "mgr-2",
                        "id": "mgr-2",
                        "name": "MGR 2"
                    },
                    "stateTo": {
                        "id": "void",
                        "name": "VOID"
                    },
                    "transitionFields": null,
                    "mandatoryFields": null,
                    "actionId": "ITEM_TRANSITION_MGR2_VOID"
                },
                {
                    "id": "sbc-2::mgr-2",
                    "name": "Reopen to Manager",
                    "stateFrom": {
                        "id": "sbc-2",
                        "name": "SBC 2"
                    },
                    "stateTo": {
                        "id": "mgr-2",
                        "name": "MGR 2"
                    },
                    "transitionFields": null,
                    "mandatoryFields": null,
                    "actionId": "ITEM_TRANSITION_SBC2_MGR2"
                }
            ]
        },
        {
            "id": "AdminMapping::list",
            "fields": {},
            "mandatoryFields": [],
            "transitions": []
        },
        {
            "id": "AdminMapping::create",
            "fields": {
                "container": [],
                "autodeskId": [],
                "userType": [
                    "1",
                    "2",
                    "3"
                ],
                "submittalsRole": [
                    "1"
                ]
            },
            "mandatoryFields": [
                "autodeskId",
                "userType",
                "submittalsRole"
            ],
            "transitions": []
        },
        {
            "id": "AdminMapping::destroy",
            "fields": {},
            "mandatoryFields": [],
            "transitions": []
        },
        {
            "id": "Package::retrieve",
            "fields": {},
            "mandatoryFields": [],
            "transitions": []
        },
        {
            "id": "Package::list",
            "fields": {},
            "mandatoryFields": [],
            "transitions": []
        },
        {
            "id": "Package::partial_update",
            "fields": {
                "description": [],
                "title": []
            },
            "mandatoryFields": [],
            "transitions": []
        },
        {
            "id": "Package::add_items_to_package",
            "fields": {},
            "mandatoryFields": [],
            "transitions": []
        },
        {
            "id": "Package::destroy",
            "fields": {},
            "mandatoryFields": [],
            "transitions": []
        },
        {
            "id": "Package::create",
            "fields": {
                "title": [],
                "identifier": [],
                "description": [],
                "specId": []
            },
            "mandatoryFields": [
                "specId",
                "title"
            ],
            "transitions": []
        },
        {
            "id": "DefaultValues::retrieve",
            "fields": {},
            "mandatoryFields": [],
            "transitions": []
        },
        {
            "id": "DefaultValues::partial_update",
            "fields": {
                "reviewTime": [],
                "manager": [],
                "watchers": []
            },
            "mandatoryFields": [],
            "transitions": []
        },
        {
            "id": "ItemResponse::list",
            "fields": {},
            "mandatoryFields": [],
            "transitions": []
        },
        {
            "id": "ItemResponse::retrieve",
            "fields": {},
            "mandatoryFields": [],
            "transitions": []
        },
        {
            "id": "ItemResponse::create",
            "fields": {
                "value": [],
                "categoryId": [
                    "1",
                    "2",
                    "3"
                ],
                "isActive": [
                    true,
                    false
                ]
            },
            "mandatoryFields": [
                "value",
                "categoryId"
            ],
            "transitions": []
        },
        {
            "id": "ItemResponse::partial_update",
            "fields": {
                "value": [],
                "isActive": [
                    true,
                    false
                ],
                "categoryId": [
                    "1",
                    "2",
                    "3"
                ]
            },
            "mandatoryFields": [],
            "transitions": []
        },
        {
            "id": "ItemType::list",
            "fields": {},
            "mandatoryFields": [],
            "transitions": []
        },
        {
            "id": "ItemType::retrieve",
            "fields": {},
            "mandatoryFields": [],
            "transitions": []
        },
        {
            "id": "ItemType::create",
            "fields": {
                "value": [],
                "isActive": [
                    true,
                    false
                ]
            },
            "mandatoryFields": [
                "value"
            ],
            "transitions": []
        },
        {
            "id": "ItemType::partial_update",
            "fields": {
                "value": [],
                "isActive": [
                    true,
                    false
                ]
            },
            "mandatoryFields": [],
            "transitions": []
        },
        {
            "id": "Template::list",
            "fields": {},
            "mandatoryFields": [],
            "transitions": []
        },
        {
            "id": "Template::retrieve",
            "fields": {},
            "mandatoryFields": [],
            "transitions": []
        },
        {
            "id": "Template::destroy",
            "fields": {},
            "mandatoryFields": [],
            "transitions": []
        },
        {
            "id": "Template::create",
            "fields": {
                "name": [],
                "steps": [],
                "watchers": []
            },
            "mandatoryFields": [
                "name",
                "steps"
            ],
            "transitions": []
        },
        {
            "id": "Template::partial_update",
            "fields": {
                "name": [],
                "steps": [],
                "watchers": []
            },
            "mandatoryFields": [],
            "transitions": []
        }
    ]
}
```
- From the `roles` array, verify that `"4"` (Admin) is present. The possible role values are `"1"` (Manager), `"2"` (User), and `"4"` (Admin). Only a user with the Admin role can create a Submittal Manager mapping (Step 2) or change the sequence type (Step 3).
- From the `permittedActions` array, verify that an entry with `"id": "AdminMapping::create"` is present. This confirms the user is permitted to create an admin mapping. For a full description of the `permittedActions` structure, see the [GET users/me](https://aps.autodesk.com/en/docs/acc/v1/reference/http/submittals-users-me-GET/) endpoint reference.

## Step 2: Create the Submittal Manager Mapping

Use [POST mappings](https://aps.autodesk.com/en/docs/acc/v1/reference/http/submittals-mappings-POST/) to create an admin mapping, using the following values:
- `autodeskId`: the Autodesk ID of the user, role, or company to assign as Submittal Manager (`WBGQM228YWFQ` in this example).
- `userType`: `"1"` (User), `"2"` (Company), or `"3"` (Role). In this example, `"1"` (User).
- `submittalsRole`: `"1"` (Manager) – currently the only supported value.

### Request

```
curl -X POST 'https://developer.api.autodesk.com/construction/submittals/v2/projects/d4be9275-1e59-4ba9-a68b-2dcec49e25c0/settings/mappings' \
-H 'Authorization: Bearer AuIPTf4KYLTYGVnOHQ0cuolwCW2a' \
-H 'Content-Type: application/json' \
-d '{
    "autodeskId": "WBGQM228YWFQ",
    "userType": "1",
    "submittalsRole": "1"
    }'
```

### Response

```
{
"id": "eeb77e82-931a-4434-a423-b1bdef156632",
"createdBy": "MFEGJ9W5GGQL",
"createdAt": "2026-01-18T10:16:00.412194Z",
"updatedBy": "MFEGJ9W5GGQL",
"updatedAt": "2026-01-18T10:16:00.412208Z",
"oxygenId": "WBGQM228YWFQ",
"autodeskId": "WBGQM228YWFQ",
"userType": "1",
"submittalsRole": "1"
}
```

Note the admin mapping ID (`id`): `eeb77e82-931a-4434-a423-b1bdef156632`. This confirms the Submittal Manager has been assigned to the project.

## Step 3: Set the Custom Identifier Sequence Type

Use [POST custom-identifier:change-sequence-type](https://aps.autodesk.com/en/docs/acc/v1/reference/http/submittals-custom-identifierchange-sequence-type-POST/) to set the sequence type for the project. As verified in Step 1, only a user with the Admin role can perform this action:
- `sequenceType`: `"2"` (Spec) in this example.

The two available sequence types are:
- `1` – Global: assigns a single sequential number across all submittal items.
- `2` – Spec: numbers items sequentially within their spec section.

Note that the sequence type can only be changed from Global to Spec — once set to Spec, it cannot be changed back.

For more details about custom numbering, see the [Help documentation](https://help.autodesk.com/view/BUILD/ENU/?guid=Submittal_Custom_Numbering).

### Request

```
curl -X POST 'https://developer.api.autodesk.com/construction/submittals/v2/projects/d4be9275-1e59-4ba9-a68b-2dcec49e25c0/settings/custom-identifier:change-sequence-type' \
  -H 'Authorization: Bearer AuIPTf4KYLTYGVnOHQ0cuolwCW2a' \
  -H 'Content-Type: application/json' \
  -d '{ "sequenceType": "2" }'
```

### Response

```
{
"id": "7eda559f-53c0-448e-a038-b28e543ab677",
"resultsPayload": {},
"asyncState": "1",
"createdAt": "2026-01-18T10:19:11.307162Z",
"updatedAt": "2026-01-18T10:19:11.307189Z",
"startedAt": null
}
```

The response includes an async job ID, indicating that the operation is being processed in the background.

In the next step, we will monitor the status of this job using the job ID (`7eda559f-53c0-448e-a038-b28e543ab677`).

## Step 4: Poll the Async Job Status

Call [GET async-jobs/{asyncJobId}](https://aps.autodesk.com/en/docs/acc/v1/reference/http/submittals-async-jobs-asyncJobId-GET/) using the job ID (`7eda559f-53c0-448e-a038-b28e543ab677`) returned in Step 3 to poll the status of the async job. Repeat this call until the job reaches a terminal state.

The possible `asyncState` values are:
- `1` – Pending
- `2` – Started
- `3` – Success
- `4` – Failure

### Request

```
curl -v 'https://developer.api.autodesk.com/construction/submittals/v2/projects/d4be9275-1e59-4ba9-a68b-2dcec49e25c0/async-jobs/7eda559f-53c0-448e-a038-b28e543ab677' \
  -H 'Authorization: Bearer AuIPTf4KYLTYGVnOHQ0cuolwCW2a'
```

### Response

```
{
"id": "7eda559f-53c0-448e-a038-b28e543ab677",
"resultsPayload": {},
"asyncState": "3",
"createdAt": "2026-01-18T10:19:11.307162Z",
"updatedAt": "2026-01-18T10:19:11.431956Z",
"startedAt": "2026-01-18T10:19:11.350000Z"
}
```

Note the asyncState value of `3`, indicating that the operation has completed successfully.
If the job completes with `asyncState = 4`, the response will include error information in resultsPayload.

By completing this tutorial, you have:
- Verified user permissions using the `roles` and `permittedActions` arrays from a single call
- Assigned a Submittal Manager using admin mappings
- Configured the submittals numbering method
- Used async jobs to apply configuration changes safely

The project is now ready for creating and managing Submittal items.

---
원본 문서: https://aps.autodesk.com/en/docs/acc/v1/tutorials/submittals/submittals-settings-up-new-project
