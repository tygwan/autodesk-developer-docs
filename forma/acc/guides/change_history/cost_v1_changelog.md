---
title: "Cost V1 Changelog"
url_path: change_history/cost_v1_changelog
surface: guide
---
# Cost Management Changelog

## Release Date: 2026-05-10

_version 1.7.5_

### Added
- Added `MainContract` as a valid `associationType` to [GET actions](https://aps.autodesk.com/en/docs/bim360/v1/reference/http/cost-actions-GET/).
- Added `draft`, `pending`, and `approved` statuses to [PATCH main-contracts/:id](https://aps.autodesk.com/en/docs/bim360/v1/reference/http/cost-main-contracts-id-PATCH/).
- Added a field to [GET properties](https://aps.autodesk.com/en/docs/bim360/v1/reference/http/cost-properties-GET/) that indicates the access level granted to collaborators for a custom attribute (`collaboratorAccess`). Possible values: `no_access`, `view`, `edit`.

## Release Date: 2026-01-07

_version 1.7.4_

### Removed
- We have removed the following deprecated tutorials:  Link a Budget to a Contract
- Directly Attach Local Files to Cost Item
- Download a Document Generated from an SCO

### Deprecated
- We are deprecating the [Retrieve Cost Container ID](https://aps.autodesk.com/en/docs/bim360/v1/tutorials/retrieve-cost-container-id/) tutorial. This workflow will not be supported after July 30, 2026. You need to use the project ID instead of the container ID. To obtain the project ID, use [GET projects](https://aps.autodesk.com/en/docs/bim360/v1/reference/http/admin-accounts-accountidprojects-GET/).

## Release Date: 2025-11-28

_version 1.7.3_

### Added
- Added 11 new date and time fields to contract endpoints ([GET contracts](https://aps.autodesk.com/en/docs/bim360/v1/reference/http/cost-contracts-GET/) , [POST contracts](https://aps.autodesk.com/en/docs/bim360/v1/reference/http/cost-contracts-POST/) , [GET contracts/:id](https://aps.autodesk.com/en/docs/bim360/v1/reference/http/cost-contracts-contractId-GET/) and [PATCH contracts/:id](https://aps.autodesk.com/en/docs/bim360/v1/reference/http/cost-contracts-contractId-PATCH/)) to track key contract lifecycle events: `awardedAt`, `statusChangedAt`, `sentAt`, `respondedAt`, `responseDue`, `returnedAt`, `onsiteAt`, `offsiteAt`, `procuredAt`, `approvedAt`, and `executedAt`.
- Added two new budget code fields to [GET payment-items](https://aps.autodesk.com/en/docs/bim360/v1/reference/http/cost-payment-items-GET/): `budgetCode` (unformatted) and `budgetFormattedCode` (formatted with separators for readability).
- The `mainContractId` field is now editable in [PATCH expenses/:id](https://aps.autodesk.com/en/docs/bim360/v1/reference/http/cost-expenses-id-PATCH/), allowing expenses to be reassigned to different main contracts.

## Release Date: 2025-9-11

_version 1.7.2_

### Added

Added a new comments field to the [GET change-orders/:changeOrder](https://aps.autodesk.com/en/docs/bim360/v1/reference/http/cost-change-orders-changeOrder-GET/)
and [GET change-orders/:changeOrder/:id](https://aps.autodesk.com/en/docs/bim360/v1/reference/http/cost-change-orders-changeOrder-id-GET/) endpoints.
This field returns the list of comments associated with a change order.

## Release Date: 2025-8-10

_version 1.7.1_

### Added

Added a new [GET action-histories](https://aps.autodesk.com/en/docs/bim360/v1/reference/http/cost-action-histories-GET/) endpoint to the Cost API for retrieving workflow action histories. This endpoint returns records of actions taken on cost-related items, such as contracts or SCO, including approvals and status changes.

## Release Date: 2025-3-21

_version 1.7.0_

### Added

Added new endpoints to the Cost Management service to manage sub cost items. These endpoints support retrieval, creation, update, deletion, and copying operations.

For more information, see [Sub Cost Items API](https://aps.autodesk.com/en/docs/bim360/v1/reference/http/cost-sub-cost-items-GET/).

## Release Date: 2024-12-10

_version 1.6.3_

### Added

Added a new [GET taxes](https://aps.autodesk.com/en/docs/bim360/v1/reference/http/cost-taxes-GET/) endpoint to support taxes in the Cost Management service. Taxes can be associated with change orders, cost items, expenses, and payments.

## Release Date: 2024-11-20

_Version 1.6.2_

### Removed

We have removed the deprecated method for linking budgets to contracts. The budgets object is no longer supported in [POST Contracts](https://aps.autodesk.com/en/docs/bim360/v1/reference/http/cost-contracts-POST/) and [PATCH Contracts](https://aps.autodesk.com/en/docs/bim360/v1/reference/http/cost-contracts-contractId-PATCH/).

To link budgets to contracts, use [POST budgets-contracts:link](https://aps.autodesk.com/en/docs/bim360/v1/reference/http/cost-budgets-contractslink-POST/) instead.

## Release Date: 2024-11-12

_Version 1.6.1_

### Added

Added a new [cost items](https://aps.autodesk.com/en/docs/bim360/v1/reference/http/cost-cost-itemsbatch-create-POST) endpoint to create multiple cost items in a single request, with a limit of 200 items per request.

## Release Date: 2024-09-12

_version 1.6.0_

### Added
- Added support for integrating Cost Management with external ERP systems. This feature enables developers to synchronize budgets, contracts, main contracts, main contract items, cost items, expenses, expense items, change orders, schedules of value, payment(readonly) and payment item(readonly) with external ERP systems.

New fields have been added to facilitate this integration: `externalSystem`, `externalId`, `externalMessage`, `lastSyncTime`, and `integrationState`. See GET/PATCH/POST request endpoints for more details.

Note: `externalSystem`, `externalId`, `externalMessage`, `lastSyncTime`, and `integrationState` also appear in payments and payment items related endpoints. They are not currently relevant but are included for future use. The `integrationState` field is not yet available for schedules of values but will be supported soon.
- Added a new tutorial [Integrating Cost Management with External Systems](https://aps.autodesk.com/en/docs/bim360/v1/tutorials/cost/integrate-with-external-system/) that demonstrates how to integrate a budget between an external ERP system and the Cost Management service.

## Release Date: 2024-04-21

_Version 1.5.0_

### Added
- Added a new `contracts </en/docs/bim360/v1/reference/http/cost-budgets-contractslink-POST>`_endpoint for batch linking and unlinking of multiple budgets to multiple contracts.
- Added a new tutorial [Link Budgets to a Contract](https://aps.autodesk.com/en/docs/bim360/v1/tutorials/cost/link-budgets-and-contract-new/) that outlines the workflow for retrieving a list of budgets and contracts, and for linking and unlinking multiple budgets to multiple contracts.

### Deprecated

We are deprecating the current method of linking budgets to contracts. Currently, you can only link budgets to a single contract in one API call. We have added a new endpoint that supports linking multiple budgets to multiple contracts. See above for more details.

We are deprecating this feature that is part of [PATCH contracts/:contractId](https://aps.autodesk.com/en/docs/bim360/v1/reference/http/cost-contracts-contractId-PATCH/). Note that we are only deprecating this feature. We are not deprecating the endpoint.

## Release Date: 2023-09-08

_Version 1.4.0_

### Added

Added endpoints for performance tracking items, performance tracking item instances, and timesheets:
- Create, read, and delete performance tracking items.
- Create, read, update, and delete performance tracking item instances.
- Create, read, update, and delete timesheets.

## Release Date: 2023-07-25

_Version 1.3.0_

### Added

Added endpoints for main contracts and main contract items:
- Read, create, update, and delete main contracts.
- Read, create, update, and delete main contract items.

## Release Date: 2023-05-23

_Version 1.2.0_

### Added

Added endpoints for schedule of values, expenses, expense items, payments, and payment items:
- Read, create, update, and delete schedule of values (SOV) items.
- Read, create, update, and delete expenses.
- Read, create, update, and delete expense items.
- Read payments and payment items.

## Release Date: 2023-01-30

_Version 1.1.0_

### Added Webhooks Support

The Webhooks service listens for _events_ that are triggered by various parts of the APS ecosystem, and notifies your application that the events have occurred so you can direct the application to respond accordingly.

This update enables Cost Management to trigger any of 43 different Webhook events to which your application can subscribe, such as when a budget is created or a contract is updated. You use the [Webhooks API](https://aps.autodesk.com/en/docs/webhooks/v1/developers_guide/overview/) to configure a _hook_ that will listen for the event you specify. When an event is triggered, the Webhooks service sends a notification to a _callback URL_ that you have defined.

For details, see the [Cost API Field Guide](https://aps.autodesk.com/en/docs/bim360/v1/overview/field-guide/cost-management/#cost-management-webhooks).

## Removed Deprecated File Packages Endpoint: 2022-05-30

We have removed the deprecated File Packages endpoint. To retrieve file packages, use [GET documents](https://aps.autodesk.com/en/docs/acc/v1/reference/http/cost-documents-GET/).

---
원본 문서: https://aps.autodesk.com/en/docs/acc/v1/change_history/cost_v1_changelog
