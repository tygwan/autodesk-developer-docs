---
title: "Compatibility Table"
url_path: overview/bim-360-compatibility/compatibility-table
surface: guide
---
# BIM 360 Forward-Compatible Endpoints

In order to enable your current BIM 360 apps and integrations to be compatible with Forma projects, we have ensured that many BIM 360 endpoints are forward compatible with Forma. This makes it possible for you to access Forma projects and use your BIM 360 apps and integrations before new Forma APIs are available. Note that your existing apps and integrations to BIM 360 and PlanGrid will continue to function as-is for the foreseeable future.

The following tables list all the BIM 360 endpoints and indicate whether they are compatible or not compatible with Forma projects.
- [Assets API](https://aps.autodesk.com/en/docs/acc/v1/overview/compatibility-table/#id2)
- [Checklists API](https://aps.autodesk.com/en/docs/acc/v1/overview/compatibility-table/#id3)
- [Cost API](https://aps.autodesk.com/en/docs/acc/v1/overview/compatibility-table/#id4)
- [Data Connector API](https://aps.autodesk.com/en/docs/acc/v1/overview/compatibility-table/#id6)
- [Document Management (Files) API](https://aps.autodesk.com/en/docs/acc/v1/overview/compatibility-table/#id7)
- [Hub Admin API](https://aps.autodesk.com/en/docs/acc/v1/overview/compatibility-table/#id1)
- [Issues API](https://aps.autodesk.com/en/docs/acc/v1/overview/compatibility-table/#id8)
- [Locations API](https://aps.autodesk.com/en/docs/acc/v1/overview/compatibility-table/#id9)
- [Model Coordination API](https://aps.autodesk.com/en/docs/acc/v1/overview/compatibility-table/#id10)
- [Relationships API](https://aps.autodesk.com/en/docs/acc/v1/overview/compatibility-table/#id15)
- [RFIs API](https://aps.autodesk.com/en/docs/acc/v1/overview/compatibility-table/#id17)

## Assets API

| API | Endpoint | Forward Compatible |
| --- | --- | --- |
| Assets | [GET assets](https://aps.autodesk.com/en/docs/acc/v1/reference/http/assets-assets-v2-GET) | Yes |
|   | [POST assets:batch-get](https://aps.autodesk.com/en/docs/acc/v1/reference/http/assets-assets-batch-get-v2-POST) | Yes |
|   | [POST assets:batch-create](https://aps.autodesk.com/en/docs/acc/v1/reference/http/assets-assets-batch-create-POST-v2/) | Yes |
|   | [PATCH assets:batch-patch](https://aps.autodesk.com/en/docs/acc/v1/reference/http/assets-assets-batch-patch-PATCH-v2/) | Yes |
|   | [POST assets:batch-delete](https://aps.autodesk.com/en/docs/acc/v1/reference/http/assets-assets-batch-delete-v2-POST/) | Yes |
|   | [GET categories](https://aps.autodesk.com/en/docs/acc/v1/reference/http/assets-categories-POST/) | Yes |
|   | [POST categories:batch-get](https://aps.autodesk.com/en/docs/acc/v1/reference/http/assets-categories-batch-get-POST/) | Yes |
|   | [POST categories](https://aps.autodesk.com/en/docs/acc/v1/reference/http/assets-categories-POST/) | Yes |
|   | [POST status-step-sets](https://aps.autodesk.com/en/docs/acc/v1/reference/http/assets-status-step-sets-POST) | Yes |
|   | [POST status-step-sets:batch-get](https://aps.autodesk.com/en/docs/acc/v1/reference/http/assets-status-step-sets-batch-get-POST) | Yes |
|   | [GET status-step-sets](https://aps.autodesk.com/en/docs/acc/v1/reference/http/assets-status-step-sets-GET/) | Yes |
|   | [POST category-status-step-sets/status-step-sets:batch-get](https://aps.autodesk.com/en/docs/acc/v1/reference/http/assets-category-status-step-sets-status-step-sets-batch-get-POST) | Yes |
|   | [PUT categories/:categoryId/status-step-set/:statusStepSetId](https://aps.autodesk.com/en/docs/acc/v1/reference/http/assets-categories-category-id-status-step-set-status-step-set-id-PUT) | Yes |
|   | [POST asset-statuses](https://aps.autodesk.com/en/docs/acc/v1/reference/http/assets-asset-statuses-POST/) | Yes |
|   | [POST asset-statuses:batch-get](https://aps.autodesk.com/en/docs/acc/v1/reference/http/assets-asset-statuses-batch-get-POST) | Yes |
|   | [GET asset-statuses](https://aps.autodesk.com/en/docs/acc/v1/reference/http/assets-asset-statuses-GET/) | Yes |
|   | [POST custom-attributes](https://aps.autodesk.com/en/docs/acc/v1/reference/http/assets-custom-attributes-POST) | Yes |
|   | [POST custom-attributes:batch-get](https://aps.autodesk.com/en/docs/acc/v1/reference/http/assets-custom-attributes-batch-get-POST/) | Yes |
|   | [GET custom-attributes](https://aps.autodesk.com/en/docs/acc/v1/reference/http/assets-custom-attributes-GET/) | Yes |
|   | [PATCH custom-attributes/:customAttributeId](https://aps.autodesk.com/en/docs/acc/v1/reference/http/assets-custom-attributes-custom-attribute-id-PATCH/) | Yes |
|   | [GET categories/:categoryId/custom-attributes](https://aps.autodesk.com/en/docs/acc/v1/reference/http/assets-categories-category-id-custom-attributes-GET/) | Yes |
|   | [PUT categories/:categoryId/custom-attributes/:customAttributeId](https://aps.autodesk.com/en/docs/acc/v1/reference/http/assets-categories-category-id-custom-attributes-custom-attribute-id-PUT/) | Yes |
|   | [POST assets/:assetId/relationships](https://aps.autodesk.com/en/docs/acc/v1/reference/http/assets-assets-asset-id-relationships-POST/) | Yes |
|   | [POST categories/:categoryId/relationships](https://aps.autodesk.com/en/docs/acc/v1/reference/http/assets-categories-category-id-relationships-POST/) | Yes |
|   | [POST relationships:delete](https://aps.autodesk.com/en/docs/acc/v1/reference/http/assets-relationships-delete-POST/) | Yes |
|   | [GET error-codes](https://aps.autodesk.com/en/docs/acc/v1/reference/http/assets-error-codes-GET/) | Yes |
|   | [GET error-codes/:errorCodeName](https://aps.autodesk.com/en/docs/acc/v1/reference/http/assets-error-codes-error-code-name-GET/) | Yes |

## Checklists API

| API | Endpoint | Forward Compatible |
| --- | --- | --- |
| Checklists | GET instances | No |
|   | GET instances/:id | No |
|   | GET templates | No |
|   | GET templates/:id | No |

## Cost API

| API | Endpoint | Forward Compatible |
| --- | --- | --- |
| Cost | [GET actions](https://aps.autodesk.com/en/docs/acc/v1/reference/http/cost-actions-GET) | Yes |
|   | [POST actions](https://aps.autodesk.com/en/docs/acc/v1/reference/http/cost-actions-POST) | Yes |
|   | [GET attachments](https://aps.autodesk.com/en/docs/acc/v1/reference/http/cost-attachments-GET) | Yes |
|   | [POST attachments](https://aps.autodesk.com/en/docs/acc/v1/reference/http/cost-attachments-POST) | Yes |
|   | [DELETE attachments/:attachmentId](https://aps.autodesk.com/en/docs/acc/v1/reference/http/cost-attachments-attachmentId-DELETE) | Yes |
|   | [POST attachment-folders](https://aps.autodesk.com/en/docs/acc/v1/reference/http/cost-attachment-folders-POST) | Yes |
|   | [GET budgets](https://aps.autodesk.com/en/docs/acc/v1/reference/http/cost-budgets-GET/) | Yes |
|   | [POST budgets](https://aps.autodesk.com/en/docs/acc/v1/reference/http/cost-budgets-POST/) | Yes |
|   | [POST budgets:import](https://aps.autodesk.com/en/docs/acc/v1/reference/http/cost-budgetsimport-POST/) | Yes |
|   | [DELETE budgets/:budgetId](https://aps.autodesk.com/en/docs/acc/v1/reference/http/cost-budgets-budgetId-DELETE/) | Yes |
|   | [PATCH budgets/:budgetId](https://aps.autodesk.com/en/docs/acc/v1/reference/http/cost-budgets-budgetId-PATCH) | Yes |
|   | [GET budgets/:budgetId](https://aps.autodesk.com/en/docs/acc/v1/reference/http/cost-budgets-budgetId-GET) | Yes |
|   | [GET change-orders](https://aps.autodesk.com/en/docs/acc/v1/reference/http/cost-change-orders-GET) | Yes |
|   | [GET change-orders/:changeOrder](https://aps.autodesk.com/en/docs/acc/v1/reference/http/cost-change-orders-changeOrder-GET) | Yes |
|   | [POST change-orders/:changeOrder](https://aps.autodesk.com/en/docs/acc/v1/reference/http/cost-change-orders-changeOrder-POST) | Yes |
|   | [GET change-orders/:changeOrder/:id](https://aps.autodesk.com/en/docs/acc/v1/reference/http/cost-change-orders-changeOrder-id-GET) | Yes |
|   | [PATCH change-orders/:changeOrder/:id](https://aps.autodesk.com/en/docs/acc/v1/reference/http/cost-change-orders-changeOrder-id-PATCH) | Yes |
|   | [DELETE change-orders/:changeOrder/:id](https://aps.autodesk.com/en/docs/acc/v1/reference/http/cost-change-orders-changeOrder-id-DELETE) | Yes |
|   | [DELETE contracts/:contractId](https://aps.autodesk.com/en/docs/acc/v1/reference/http/cost-contracts-contractId-DELETE) | Yes |
|   | [GET contracts/:contractId](https://aps.autodesk.com/en/docs/acc/v1/reference/http/cost-contracts-contractId-GET) | Yes |
|   | [PATCH contracts/:contractId](https://aps.autodesk.com/en/docs/acc/v1/reference/http/cost-contracts-contractId-PATCH) | Yes |
|   | [GET contracts](https://aps.autodesk.com/en/docs/acc/v1/reference/http/cost-contracts-GET) | Yes |
|   | [POST contracts](https://aps.autodesk.com/en/docs/acc/v1/reference/http/cost-contracts-POST) | Yes |
|   | [GET cost-items](https://aps.autodesk.com/en/docs/acc/v1/reference/http/cost-cost-items-GET) | Yes |
|   | [POST cost-items](https://aps.autodesk.com/en/docs/acc/v1/reference/http/cost-cost-items-POST) | Yes |
|   | [GET cost-items/:costItemId](https://aps.autodesk.com/en/docs/acc/v1/reference/http/cost-cost-items-costItemId-GET) | Yes |
|   | [PATCH cost-items/:costItemId](https://aps.autodesk.com/en/docs/acc/v1/reference/http/cost-cost-items-costItemId-PATCH) | Yes |
|   | [DELETE cost-items/:costItemId](https://aps.autodesk.com/en/docs/acc/v1/reference/http/cost-cost-items-costItemId-DELETE) | Yes |
|   | [POST cost-items:attach](https://aps.autodesk.com/en/docs/acc/v1/reference/http/cost-cost-itemsattach-POST) | Yes |
|   | [POST cost-items:detach](https://aps.autodesk.com/en/docs/acc/v1/reference/http/cost-cost-itemsdetach-POST) | Yes |
|   | [GET documents](https://aps.autodesk.com/en/docs/acc/v1/reference/http/cost-documents-GET) | Yes |
|   | [GET expenses](https://aps.autodesk.com/en/docs/acc/v1/reference/http/cost-expenses-GET) | Yes |
|   | [POST expenses](https://aps.autodesk.com/en/docs/acc/v1/reference/http/cost-expenses-POST) | Yes |
|   | [GET expenses/:id](https://aps.autodesk.com/en/docs/acc/v1/reference/http/cost-expenses-id-GET) | Yes |
|   | [PATCH expenses/:id](https://aps.autodesk.com/en/docs/acc/v1/reference/http/cost-expenses-id-PATCH) | Yes |
|   | [DELETE expenses/:id](https://aps.autodesk.com/en/docs/acc/v1/reference/http/cost-expenses-id-DELETE) | Yes |
|   | [GET expenses/:expenseId/items](https://aps.autodesk.com/en/docs/acc/v1/reference/http/cost-expenses-expenseId-items-GET) | Yes |
|   | [POST expenses/:expenseId/items](https://aps.autodesk.com/en/docs/acc/v1/reference/http/cost-expenses-expenseId-items-POST) | Yes |
|   | [GET expenses/:expenseId/items/:id](https://aps.autodesk.com/en/docs/acc/v1/reference/http/cost-expenses-expenseId-items-id-GET) | Yes |
|   | [PATCH expenses/:expenseId/items/:id](https://aps.autodesk.com/en/docs/acc/v1/reference/http/cost-expenses-expenseId-items-id-PATCH) | Yes |
|   | [DELETE expenses/:expenseId/items/:id](https://aps.autodesk.com/en/docs/acc/v1/reference/http/cost-expenses-expenseId-items-id-DELETE) | Yes |
|   | [GET main-contracts](https://aps.autodesk.com/en/docs/acc/v1/reference/http/cost-main-contracts-GET/) | Yes |
|   | [POST main-contracts](https://aps.autodesk.com/en/docs/acc/v1/reference/http/cost-main-contracts-POST) | Yes |
|   | [GET main-contracts/:id](https://aps.autodesk.com/en/docs/acc/v1/reference/http/cost-main-contracts-id-GET/) | Yes |
|   | [PATCH main-contracts/:id](https://aps.autodesk.com/en/docs/acc/v1/reference/http/cost-main-contracts-id-PATCH) | Yes |
|   | [DELETE main-contracts/:id](https://aps.autodesk.com/en/docs/acc/v1/reference/http/cost-main-contracts-id-DELETE) | Yes |
|   | [GET main-contracts/:mainContractId/items](https://aps.autodesk.com/en/docs/acc/v1/reference/http/cost-main-contracts-mainContractId-items-GET/) | Yes |
|   | [POST main-contracts/:mainContractId/items](https://aps.autodesk.com/en/docs/acc/v1/reference/http/cost-main-contracts-mainContractId-items-POST) | Yes |
|   | [GET main-contracts/:mainContractId/items/:id](https://aps.autodesk.com/en/docs/acc/v1/reference/http/cost-main-contracts-mainContractId-items-id-GET/) | Yes |
|   | [PATCH main-contracts/:mainContractId/items/:id](https://aps.autodesk.com/en/docs/acc/v1/reference/http/cost-main-contracts-mainContractId-items-id-PATCH) | Yes |
|   | [DELETE main-contracts/:mainContractId/items/:id](https://aps.autodesk.com/en/docs/acc/v1/reference/http/cost-main-contracts-mainContractId-items-id-DELETE) | Yes |
|   | [GET payments](https://aps.autodesk.com/en/docs/acc/v1/reference/http/cost-payments-GET) | Yes |
|   | [GET payments/:id](https://aps.autodesk.com/en/docs/acc/v1/reference/http/cost-payments-id-GET) | Yes |
|   | [GET payment-items](https://aps.autodesk.com/en/docs/acc/v1/reference/http/cost-payment-items-GET) | Yes |
|   | [GET performance-tracking-items](https://aps.autodesk.com/en/docs/acc/v1/reference/http/cost-performance-tracking-items-GET) | Yes |
|   | [POST performance-tracking-items](https://aps.autodesk.com/en/docs/acc/v1/reference/http/cost-performance-tracking-items-POST) | Yes |
|   | [GET performance-tracking-items/:id](https://aps.autodesk.com/en/docs/acc/v1/reference/http/cost-performance-tracking-items-GET) | Yes |
|   | [DELETE performance-tracking-items/:id](https://aps.autodesk.com/en/docs/acc/v1/reference/http/cost-performance-tracking-items-DELETE) | Yes |
|   | [GET performance-tracking-item-instances](https://aps.autodesk.com/en/docs/acc/v1/reference/http/cost-performance-tracking-item-instances-GET) | Yes |
|   | [POST performance-tracking-item-instances](https://aps.autodesk.com/en/docs/acc/v1/reference/http/cost-performance-tracking-item-instances-POST) | Yes |
|   | [GET performance-tracking-item-instances/:id](https://aps.autodesk.com/en/docs/acc/v1/reference/http/cost-performance-tracking-item-instances-id-GET) | Yes |
|   | [PATCH performance-tracking-item-instances/:id](https://aps.autodesk.com/en/docs/acc/v1/reference/http/cost-performance-tracking-item-instances-id-PATCH) | Yes |
|   | [DELETE performance-tracking-item-instances/:id](https://aps.autodesk.com/en/docs/acc/v1/reference/http/cost-performance-tracking-item-instances-id-DELETE) | Yes |
|   | [GET properties](https://aps.autodesk.com/en/docs/acc/v1/reference/http/cost-properties-GET) | Yes |
|   | [POST property-values:batch-update](https://aps.autodesk.com/en/docs/acc/v1/reference/http/cost-property-valuesbatch-update-POST) | Yes |
|   | [GET schedule-of-values](https://aps.autodesk.com/en/docs/acc/v1/reference/http/cost-schedule-of-values-GET) | Yes |
|   | [POST schedule-of-values](https://aps.autodesk.com/en/docs/acc/v1/reference/http/cost-schedule-of-values-POST) | Yes |
|   | [GET schedule-of-values/:id](https://aps.autodesk.com/en/docs/acc/v1/reference/http/cost-schedule-of-values-id-GET/) | Yes |
|   | [PATCH schedule-of-values/:id](https://aps.autodesk.com/en/docs/acc/v1/reference/http/cost-schedule-of-values-id-PATCH) | Yes |
|   | [DELETE schedule-of-values/:id](https://aps.autodesk.com/en/docs/acc/v1/reference/http/cost-schedule-of-values-id-DELETE) | Yes |
|   | [GET segments](https://aps.autodesk.com/en/docs/acc/v1/reference/http/cost-segments-GET) | Yes |
|   | [POST segments](https://aps.autodesk.com/en/docs/acc/v1/reference/http/cost-segments-POST) | Yes |
|   | [DELETE segments](https://aps.autodesk.com/en/docs/acc/v1/reference/http/cost-segments-segmentId-DELETE) | Yes |
|   | [PATCH segments](https://aps.autodesk.com/en/docs/acc/v1/reference/http/cost-segments-segmentId-PATCH) | Yes |
|   | [GET segments](https://aps.autodesk.com/en/docs/acc/v1/reference/http/cost-segments-segmentId-GET) | Yes |
|   | [GET templates](https://aps.autodesk.com/en/docs/acc/v1/reference/http/cost-templates-GET) | Yes |
|   | [GET time-sheets](https://aps.autodesk.com/en/docs/acc/v1/reference/http/cost-time-sheets-GET) | Yes |
|   | [POST time-sheets](https://aps.autodesk.com/en/docs/acc/v1/reference/http/cost-time-sheets-POST) | Yes |
|   | [GET time-sheets/:id](https://aps.autodesk.com/en/docs/acc/v1/reference/http/cost-time-sheets-id-GET) | Yes |
|   | [PATCH time-sheets/:id](https://aps.autodesk.com/en/docs/acc/v1/reference/http/cost-time-sheets-id-PATCH) | Yes |
|   | [DELETE time-sheets/:id](https://aps.autodesk.com/en/docs/acc/v1/reference/http/cost-time-sheets-id-DELETE) | Yes |
|   | [GET values](https://aps.autodesk.com/en/docs/acc/v1/reference/http/cost-values-GET) | Yes |
|   | [POST values](https://aps.autodesk.com/en/docs/acc/v1/reference/http/cost-values-POST) | Yes |
|   | [POST values:import](https://aps.autodesk.com/en/docs/acc/v1/reference/http/cost-valuesimport-POST) | Yes |
|   | [DELETE values/:valueId](https://aps.autodesk.com/en/docs/acc/v1/reference/http/cost-values-valueId-DELETE) | Yes |
|   | [PATCH values/:valueId](https://aps.autodesk.com/en/docs/acc/v1/reference/http/cost-values-valueId-PATCH) | Yes |
|   | [GET values/:valueId](https://aps.autodesk.com/en/docs/acc/v1/reference/http/cost-values-valueId-GET) | Yes |
|   | [POST sub-cost-items](https://aps.autodesk.com/en/docs/acc/v1/reference/http/cost-sub-cost-items-POST) | Yes |
|   | [GET sub-cost-items](https://aps.autodesk.com/en/docs/acc/v1/reference/http/cost-sub-cost-items-GET) | Yes |
|   | [PATCH sub-cost-items/:subCostItemsId](https://aps.autodesk.com/en/docs/acc/v1/reference/http/cost-sub-cost-items-subCostItemsId-PATCH) | Yes |
|   | [DELETE sub-cost-items/:subCostItemsId](https://aps.autodesk.com/en/docs/acc/v1/reference/http/cost-sub-cost-items-subCostItemsId-DELETE) | Yes |
|   | [POST subCostItems:copy](https://aps.autodesk.com/en/docs/acc/v1/reference/http/cost-sub-cost-itemscopy-POST) | Yes |

## Data Connector API

| API | Endpoint | Forward Compatible |
| --- | --- | --- |
| Data Connector | [POST requests](https://aps.autodesk.com/en/docs/acc/v1/reference/http/data-connector-requests-POST) | Yes |
|   | [GET requests](https://aps.autodesk.com/en/docs/acc/v1/reference/http/data-connector-requests-GET) | Yes |
|   | [GET requests/:requestId](https://aps.autodesk.com/en/docs/acc/v1/reference/http/data-connector-requests-requestId-GET) | Yes |
|   | [PATCH requests/:requestId](https://aps.autodesk.com/en/docs/acc/v1/reference/http/data-connector-requests-requestId-PATCH) | Yes |
|   | [DELETE requests/:requestId](https://aps.autodesk.com/en/docs/acc/v1/reference/http/data-connector-requests-requestId-DELETE) | Yes |
|   | [GET requests/:requestId/jobs](https://aps.autodesk.com/en/docs/acc/v1/reference/http/data-connector-requests-requestId-jobs-GET) | Yes |
|   | [GET jobs](https://aps.autodesk.com/en/docs/acc/v1/reference/http/data-connector-jobs-GET) | Yes |
|   | [GET jobs/:jobId](https://aps.autodesk.com/en/docs/acc/v1/reference/http/data-connector-jobs-jobId-GET) | Yes |
|   | [DELETE jobs/:jobId](https://aps.autodesk.com/en/docs/acc/v1/reference/http/data-connector-jobs-jobId-DELETE) | Yes |
|   | [GET jobs/:jobId/data-listing](https://aps.autodesk.com/en/docs/acc/v1/reference/http/data-connector-jobs-jobId-data-listing-GET) | Yes |
|   | [GET jobs/:jobId/data/:name](https://aps.autodesk.com/en/docs/acc/v1/reference/http/data-connector-jobs-jobId-data-name-GET) | Yes |

## Document Management (Files) API

| API | Endpoint | Forward Compatible |
| --- | --- | --- |
| Document Management | [POST projects/:project_id/versions/:version_id/exports](https://aps.autodesk.com/en/docs/bim360/v1/reference/http/document-management-projects-project_id-versions-version_id-exports-POST/) | No** |
|   | [GET projects/:project_id/versions/:version_id/exports/:export_id](https://aps.autodesk.com/en/docs/bim360/v1/reference/http/document-management-projects-project_id-versions-version_id-exports-export_id-GET/) | No** |
|   | [POST projects/:project_id/folders/:folder_id/permissions:batch-create](https://aps.autodesk.com/en/docs/acc/v1/reference/http/document-management-projects-project_id-folders-folder_id-permissionsbatch-create-POST/) | Yes* |
|   | [POST projects/:project_id/folders/:folder_id/permissions:batch-update](https://aps.autodesk.com/en/docs/acc/v1/reference/http/document-management-projects-project_id-folders-folder_id-permissionsbatch-update-POST/) | Yes* |
|   | [POST projects/:project_id/folders/:folder_id/permissions:batch-delete](https://aps.autodesk.com/en/docs/acc/v1/reference/http/document-management-projects-project_id-folders-folder_id-permissionsbatch-delete-POST/) | Yes* |
|   | [GET projects/:project_id/folders/:folder_id/permissions](https://aps.autodesk.com/en/docs/acc/v1/reference/http/document-management-projects-project_id-folders-folder_id-permissions-GET/) | Yes* |
|   | [POST versions:batch-get](https://aps.autodesk.com/en/docs/acc/v1/reference/http/document-management-versionsbatch-get-POST/) | Yes* |
|   | [GET custom-attribute-definitions](https://aps.autodesk.com/en/docs/acc/v1/reference/http/document-management-custom-attribute-definitions-GET/) | Yes* |
|   | [POST custom-attribute-definitions](https://aps.autodesk.com/en/docs/acc/v1/reference/http/document-management-custom-attribute-definitions-POST/) | Yes* |
|   | [POST custom-attributes:batch-update](https://aps.autodesk.com/en/docs/acc/v1/reference/http/document-management-custom-attributesbatch-update-POST/) | Yes* |
|   | [GET naming-standards](https://aps.autodesk.com/en/docs/bim360/v1/reference/http/document-management-naming-standards-id-GET/) | Yes* |
| Data Management | [GET hubs](https://aps.autodesk.com/en/docs/data/v2/reference/http/hubs-GET/) | Yes* |
|   | [GET hubs/:hub_id](https://aps.autodesk.com/en/docs/data/v2/reference/http/hubs-hub_id-GET/) | Yes* |
|   | [GET hubs/:hub_id/projects](https://aps.autodesk.com/en/docs/data/v2/reference/http/hubs-hub_id-projects-GET/) | Yes* |
|   | [GET hubs/:hub_id/projects/project_id](https://aps.autodesk.com/en/docs/data/v2/reference/http/hubs-hub_id-projects-project_id-GET/) | Yes* |
|   | [GET hubs/:hub_id/projects/topFolders](https://aps.autodesk.com/en/docs/data/v2/reference/http/hubs-hub_id-projects-project_id-topFolders-GET/) | Yes* |
|   | [GET projects/:project_id/downloads/:download_id](https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-downloads-download_id-GET/) | No |
|   | [GET projects/:project_id/jobs/:job_id](https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-jobs-job_id-GET/) | No |
|   | [POST projects/:project_id/downloads](https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-downloads-POST/) | No |
|   | [POST projects/:project_id/storage](https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-storage-POST/) | Yes* |
|   | [GET projects/:project_id/folders/:folder_id](https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-folders-folder_id-GET/) | Yes* |
|   | [GET projects/:project_id/folders/:folder_id/contents](https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-folders-folder_id-contents-GET/) | Yes* |
|   | [GET projects/:project_id/folders/:folder_id/parent](https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-folders-folder_id-parent-GET/) | Yes* |
|   | [GET projects/:project_id/folders/:folder_id/refs](https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-folders-folder_id-refs-GET/) | Yes* |
|   | [GET projects/:project_id/folders/:folder_id/relationships/links](https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-folders-folder_id-relationships-links-GET/) | Yes* |
|   | [GET projects/:project_id/folders/:folder_id/relationships/refs](https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-folders-folder_id-relationships-refs-GET/) | Yes* |
|   | [GET projects/:project_id/folders/:folder_id/search](https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-folders-folder_id-search-GET/) | Yes* |
|   | [POST projects/:project_id/folders](https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-folders-POST/) | Yes* |
|   | [POST projects/:project_id/folders/:folder_id/relationships/refs](https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-folders-folder_id-relationships-refs-POST/) | No |
|   | [PATCH projects/:project_id/folders/:folder_id](https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-folders-folder_id-PATCH/) | Yes* |
|   | [GET projects/:project_id/items/:item_id](https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-items-item_id-GET/) | Yes* |
|   | [GET projects/:project_id/items/:item_id/parent](https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-items-item_id-parent-GET/) | Yes* |
|   | [GET projects/:project_id/items/:item_id/refs](https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-items-item_id-refs-GET/) | Yes* |
|   | [GET projects/:project_id/items/:item_id/relationships/links](https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-items-item_id-relationships-links-GET/) | Yes* |
|   | [GET projects/:project_id/items/:item_id/relationships/refs](https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-items-item_id-relationships-refs-GET/) | Yes* |
|   | [GET projects/:project_id/items/:item_id/tip](https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-items-item_id-tip-GET/) | Yes* |
|   | [GET projects/:project_id/items/:item_id/versions](https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-items-item_id-versions-GET/) | Yes* |
|   | [POST projects/:project_id/items](https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-items-POST/) | Yes* |
|   | [POST projects/:project_id/items/:item_id/relationships/refs](https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-items-item_id-relationships-refs-POST/) | No* |
|   | [PATCH projects/:project_id/items/:item_id](https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-items-item_id-PATCH/) | Yes* |
|   | [GET projects/:project_id/versions/:version_id](https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-versions-version_id-GET/) | Yes* |
|   | [GET projects/:project_id/versions/:version_id/downloadFormatsGET projects/:project_id/versions/:version_id/downloadFormats](https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-versions-version_id-downloadFormats-GET/) | Yes* |
|   | [GET projects/:project_id/versions/:version_id/downloads](https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-versions-version_id-downloads-GET/) | Yes* |
|   | [GET projects/:project_id/versions/:version_id/item](https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-versions-version_id-item-GET/) | Yes* |
|   | [GET projects/:project_id/versions/:version_id/refs](https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-versions-version_id-refs-GET/) | Yes* |
|   | [GET projects/:project_id/versions/:version_id/relationships/links](https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-versions-version_id-relationships-links-GET/) | Yes* |
|   | [GET projects/:project_id/versions/:version_id/relationships/refs](https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-versions-version_id-relationships-refs-GET/) | Yes* |
|   | [POST projects/:project_id/versions](https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-versions-POST) | Yes* |
|   | [POST projects/:project_id/versions/:version_id/relationships/refs](https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-versions-version_id-relationships-refs-POST/) | No |
|   | [PATCH projects/:project_id/versions/:version_id](https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-versions-version_id-PATCH/) | Yes* |
|   | [CheckPermission](https://aps.autodesk.com/en/docs/data/v2/reference/http/CheckPermission/) | Yes* |
|   | [ListRefs](https://aps.autodesk.com/en/docs/data/v2/reference/http/ListRefs/) | Yes* |
|   | [ListItems](https://aps.autodesk.com/en/docs/data/v2/reference/http/ListItems/) | Yes* |
|   | [CreateFolder](https://aps.autodesk.com/en/docs/data/v2/reference/http/CreateFolder/) | Yes* |
|   | [PublishModel](https://aps.autodesk.com/en/docs/data/v2/reference/http/PublishModel/) | Yes* |
|   | [GetPublishModelJob](https://aps.autodesk.com/en/docs/data/v2/reference/http/GetPublishModelJob/) | Yes* |

* Note that the BIM 360 APIs do not support all the Forma Data Management features. See the [Forma Data Management Compatibility](https://aps.autodesk.com/en/docs/acc/v1/overview/docs-compatibility/) documentation for details.

** Note that although these endpoints are not compatible with Forma projects, we have released a new [Files API](https://aps.autodesk.com/en/docs/acc/v1/reference/http/files-export-pdf-files-POST/) that provides the same functionality in Forma.

## Hub Admin API

| API | Endpoint | Forward Compatible |
| --- | --- | --- |
| Admin | POST projects | No* |
|   | GET projects | No* |
|   | GET projects/:project_id | No* |
|   | PATCH projects/:project_id | No* |
|   | [PATCH projects/:project_id/image](https://aps.autodesk.com/en/docs/acc/v1/reference/http/projects-:project_id-image-PATCH/) | Yes |
|   | [POST companies](https://aps.autodesk.com/en/docs/acc/v1/companies-POST/) | Yes |
|   | [POST companies/import](https://aps.autodesk.com/en/docs/acc/v1/reference/http/companies-import-POST/) | Yes |
|   | [GET companies](https://aps.autodesk.com/en/docs/acc/v1/reference/http/companies-GET/) | Yes |
|   | [GET companies/:company_id](https://aps.autodesk.com/en/docs/acc/v1/reference/http/companies-:company_id-GET/) | Yes |
|   | [GET companies/search](https://aps.autodesk.com/en/docs/acc/v1/reference/http/companies-search-GET/) | Yes |
|   | [GET projects/:project_id/companies](https://aps.autodesk.com/en/docs/acc/v1/reference/http/projects-:project_id-companies-GET/) | Yes |
|   | [PATCH companies/:company_id](https://aps.autodesk.com/en/docs/acc/v1/reference/http/companies-:company_id-PATCH/) | Yes |
|   | [PATCH companies/:company_id/image](https://aps.autodesk.com/en/docs/acc/v1/reference/http/companies-:company_id-image-PATCH/) | Yes |
|   | [POST users](https://aps.autodesk.com/en/docs/acc/v1/reference/http/users-POST/) | Yes |
|   | [POST users/import](https://aps.autodesk.com/en/docs/acc/v1/reference/http/users-import-POST/) | Yes |
|   | [GET users](https://aps.autodesk.com/en/docs/acc/v1/reference/http/users-GET/) | Yes |
|   | [GET users/:user_id](https://aps.autodesk.com/en/docs/acc/v1/reference/http/users-:user_id-GET/) | Yes |
|   | [GET users/search](https://aps.autodesk.com/en/docs/acc/v1/reference/http/users-search-GET/) | Yes |
|   | [PATCH users/:user_id](https://aps.autodesk.com/en/docs/acc/v1/reference/http/users-:user_id-PATCH/) | Yes |
|   | [GET projects/:project_id/users](https://aps.autodesk.com/en/docs/acc/v1/reference/http/admin-projectsprojectId-users-GET/) | Yes |
|   | POST projects/:project_id/users | No* |
|   | [GET projects/:project_id/users/:user_id](https://aps.autodesk.com/en/docs/acc/v1/reference/http/admin-projectsprojectId-users-userId-GET/) | Yes |
|   | POST projects/:project_id/users/import (v2) | No* |
|   | PATCH projects/:project_id/users/user_id (v2) | No* |
|   | GET projects/:project_id/industry_roles (v2) | No |
|   | [PUT business_units_structure](https://aps.autodesk.com/en/docs/acc/v1/reference/http/business_units_structure-PUT/) | Yes |
|   | [GET business_units_structure](https://aps.autodesk.com/en/docs/acc/v1/reference/http/business_units_structure-GET/) | Yes |
|   | GET jobs/:job_id | No |

* Note that although these endpoints are not compatible with Forma projects, we have released new Hub Admin API endpoints that provide the same functionality, and are compatible with both BIM 360 and Forma projects.

## Issues API

The BIM 360 Issues API is not compatible with Forma projects. However, we have released a new [Issues API](https://aps.autodesk.com/en/docs/acc/v1/reference/http/issues-users-me-GET/) that supports Forma projects.

| API | Endpoint | Forward Compatible |
| --- | --- | --- |
| Issues | GET users/me | No |
|   | GET issues | No |
|   | GET issues/:id | No |
|   | POST issues | No |
|   | PATCH issues/:id | No |
|   | GET issues/:id/comments | No |
|   | POST issues/comments | No |
|   | GET issues/attachments | No |
|   | POST issues/attachments | No |
|   | GET root-causes | No |
|   | GET ng-issue-types | No |
|   | GET custom-attribute-definitions | No |
|   | GET custom-attribute-mappings | No |

## Locations API

| API | Endpoint | Forward Compatible |
| --- | --- | --- |
| Locations | GET nodes | Yes |

## Model Coordination API

| API | Endpoint | Forward Compatible |
| --- | --- | --- |
| Model Coordination | [POST modelsets](https://aps.autodesk.com/en/docs/acc/v1/reference/http/mc-modelset-service-v3-create-model-set-POST/) | Yes |
|   | [GET modelsets](https://aps.autodesk.com/en/docs/acc/v1/reference/http/mc-modelset-service-v3-get-model-sets-GET/) | Yes |
|   | [GET jobs/:jobId](https://aps.autodesk.com/en/docs/acc/v1/reference/http/mc-modelset-service-v3-get-container-job-by-container-GET/) | Yes |
|   | [GET modelsets/:modelSetId](https://aps.autodesk.com/en/docs/acc/v1/reference/http/mc-modelset-service-v3-get-model-set-GET/) | Yes |
|   | [PATCH modelsets/:modelSetId](https://aps.autodesk.com/en/docs/acc/v1/reference/http/mc-modelset-service-v3-patch-model-set-name-description-PATCH/) | Yes |
|   | [POST modelsets/:modelSetId/issues](https://aps.autodesk.com/en/docs/acc/v1/reference/http/mc-modelset-service-v3-add-model-set-issue-POST/) | Yes |
|   | [POST issues/viewcontext](https://aps.autodesk.com/en/docs/acc/v1/reference/http/mc-modelset-service-v3-get-model-set-issue-view-context-POST.rst/) | Yes |
|   | [GET modelsets/:modelSetId/jobs/:jobId](https://aps.autodesk.com/en/docs/acc/v1/reference/http/mc-modelset-service-v3-get-model-set-job-GET/) | Yes |
|   | [POST modelsets/:modelSetId/screenshots](https://aps.autodesk.com/en/docs/acc/v1/reference/http/mc-modelset-service-v3-add-screen-shot-POST/) | Yes |
|   | [GET modelsets/:modelSetId/screenshots/:screenShotId](https://aps.autodesk.com/en/docs/acc/v1/reference/http/mc-modelset-service-v3-get-screen-shot-GET/) | Yes |
|   | [POST modelsets/:modelSetId/versions](https://aps.autodesk.com/en/docs/acc/v1/reference/http/mc-modelset-service-v3-create-model-set-version-POST/) | Yes |
|   | [GET modelsets/:modelSetId/versions](https://aps.autodesk.com/en/docs/acc/v1/reference/http/mc-modelset-service-v3-get-model-set-versions-GET/) | Yes |
|   | [GET modelsets/:modelSetId/versions/latest](https://aps.autodesk.com/en/docs/acc/v1/reference/http/mc-modelset-service-v3-get-model-set-version-latest-GET/) | Yes |
|   | [GET modelsets/:modelSetId/versions/:version](https://aps.autodesk.com/en/docs/acc/v1/reference/http/mc-modelset-service-v3-get-model-set-version-GET/) | Yes |
|   | [PATCH modelsets/:modelSetId/versions:enable](https://aps.autodesk.com/en/docs/acc/v1/reference/http/mc-modelset-service-v3-enable-model-set-versions-PATCH/) | Yes |
|   | [PATCH modelsets/:modelSetId/versions:disable](https://aps.autodesk.com/en/docs/acc/v1/reference/http/mc-modelset-service-v3-disable-model-set-versions-PATCH/) | Yes |
|   | [POST modelsets/:modelSetId/views](https://aps.autodesk.com/en/docs/acc/v1/reference/http/mc-modelset-service-v3-create-model-set-view-POST/) | Yes |
|   | [GET modelsets/:modelSetId/views](https://aps.autodesk.com/en/docs/acc/v1/reference/http/mc-modelset-service-v3-get-model-set-views-GET/) | Yes |
|   | [POST modelsets/:modelSetId/views:lineages](https://aps.autodesk.com/en/docs/acc/v1/reference/http/mc-modelset-service-v3-search-model-set-view-lineages-POST/) | Yes |
|   | [GET modelsets/:modelSetId/views/:viewId](https://aps.autodesk.com/en/docs/acc/v1/reference/http/mc-modelset-service-v3-get-model-set-view-GET/) | Yes |
|   | [PATCH modelsets/:modelSetId/views/:viewId](https://aps.autodesk.com/en/docs/acc/v1/reference/http/mc-modelset-service-v3-update-model-set-view-PATCH/) | Yes |
|   | [DELETE modelsets/:modelSetId/views/:viewId](https://aps.autodesk.com/en/docs/acc/v1/reference/http/mc-modelset-service-v3-delete-model-set-view-DELETE/) | Yes |
|   | [GET modelsets/:modelSetId/versions/:version/views](https://aps.autodesk.com/en/docs/acc/v1/reference/http/mc-modelset-service-v3-get-model-set-view-versions-GET/) | Yes |
|   | [GET modelsets/:modelSetId/versions/:version/views/:viewId](https://aps.autodesk.com/en/docs/acc/v1/reference/http/mc-modelset-service-v3-get-model-set-view-version-GET/) | Yes |
|   | [GET modelsets/:modelSetId/views/:viewId/jobs/:jobId](https://aps.autodesk.com/en/docs/acc/v1/reference/http/mc-modelset-service-v3-get-model-set-view-job-GET/) | Yes |
|   | [GET modelsets/:modelSetId/tests](https://aps.autodesk.com/en/docs/acc/v1/reference/http/mc-clash-service-v3-get-model-set-clash-tests-GET/) | Yes |
|   | [GET modelsets/:modelSetId/versions/:version/tests](https://aps.autodesk.com/en/docs/acc/v1/reference/http/mc-clash-service-v3-get-model-set-version-clash-tests-GET/) | Yes |
|   | [GET tests/:testId](https://aps.autodesk.com/en/docs/acc/v1/reference/http/mc-clash-service-v3-get-clash-test-GET/) | Yes |
|   | [GET tests/:testId/resources](https://aps.autodesk.com/en/docs/acc/v1/reference/http/mc-clash-service-v3-get-clash-test-resources-GET/) | Yes |
|   | [POST tests/:testId/clashes:close](https://aps.autodesk.com/en/docs/acc/v1/reference/http/mc-clash-service-v3-add-closed-clash-group-batch-POST/) | Yes |
|   | [GET tests/:testId/clashes/closed](https://aps.autodesk.com/en/docs/acc/v1/reference/http/mc-clash-service-v3-get-clash-test-closed-clash-group-intersection-GET/) | Yes |
|   | [POST tests/:testId/clashes/closed](https://aps.autodesk.com/en/docs/acc/v1/reference/http/mc-clash-service-v3-get-closed-clash-group-data-batch-POST/) | Yes |
|   | [POST modelsets/:modelSetId/clashes:reopen](https://aps.autodesk.com/en/docs/acc/v1/reference/http/mc-clash-service-v3-reopen-closed-clash-group-batch-POST/) | Yes |
|   | [GET modelsets/:modelSetId/clashes/closed](https://aps.autodesk.com/en/docs/acc/v1/reference/http/mc-clash-service-v3-search-container-model-set-closed-clash-groups-GET/) | Yes |
|   | [POST tests/:testId/clashes:assign](https://aps.autodesk.com/en/docs/acc/v1/reference/http/mc-clash-service-v3-add-assigned-clash-group-batch-POST/) | Yes |
|   | [GET tests/:testId/clashes/assigned](https://aps.autodesk.com/en/docs/acc/v1/reference/http/mc-clash-service-v3-get-clash-test-assigned-clash-group-intersection-GET/) | Yes |
|   | [POST tests/:testId/clashes/assigned](https://aps.autodesk.com/en/docs/acc/v1/reference/http/mc-clash-service-v3-get-assigned-clash-group-batch-POST/) | Yes |
|   | [GET modelsets/:modelSetId/clashes/assigned](https://aps.autodesk.com/en/docs/acc/v1/reference/http/mc-clash-service-v3-search-container-issue-clash-groups-GET/) | Yes |
|   | [GET clashes/assigned/viewcontext](https://aps.autodesk.com/en/docs/acc/v1/reference/http/mc-clash-service-v3-get-assigned-clash-group-view-context-POST/) | Yes |
|   | [GET clashes/jobs/:jobId](https://aps.autodesk.com/en/docs/acc/v1/reference/http/mc-clash-service-v3-get-clash-group-job-GET/) | Yes |
|   | [POST modelsets/:modelSetId/screenshots](https://aps.autodesk.com/en/docs/acc/v1/reference/http/mc-clash-service-v3-add-screen-shot-POST/) | Yes |
|   | [GET modelsets/:modelSetId/screenshots/:screenShotId](https://aps.autodesk.com/en/docs/acc/v1/reference/http/mc-clash-service-v3-get-screen-shot-GET/) | Yes |
|   | [GET modelsets/:modelSetId/clashes/grouped](https://aps.autodesk.com/en/docs/acc/v1/reference/http/mc-clash-service-v3-get-grouped-clashes-GET/) | Yes |
|   | [GET modelsets/:modelSetId/versions/:version/manifest](https://aps.autodesk.com/en/docs/acc/v1/reference/http/mc-index-service-v1-query-model-set-version-index-manifest-GET/) | Yes |
|   | [GET modelsets/:modelSetId/versions/:version/fields](https://aps.autodesk.com/en/docs/acc/v1/reference/http/mc-index-service-v1-query-model-set-version-index-fields-GET/) | Yes |
|   | [POST modelsets/:modelSetId/versions/:version/indexes:query](https://aps.autodesk.com/en/docs/acc/v1/reference/http/mc-index-service-v1-query-model-set-version-index-POST/) | Yes |
|   | [GET modelsets/:modelSetId/jobs/:jobId](https://aps.autodesk.com/en/docs/acc/v1/reference/http/mc-index-service-v1-get-model-set-job-GET/) | Yes |

## Relationships API

| API | Endpoint | Forward Compatible |
| --- | --- | --- |
| Relationships | [POST relationships:batch](https://aps.autodesk.com/en/docs/acc/v1/reference/http/relationship-service-v2-get-relationships-batch-POST/) | Yes |
|   | [GET relationships:search](https://aps.autodesk.com/en/docs/acc/v1/reference/http/relationship-service-v2-search-relationships-GET/) | Yes |
|   | [POST relationships:intersect](https://aps.autodesk.com/en/docs/acc/v1/reference/http/relationship-service-v2-intersect-relationships-POST/) | Yes |
|   | [GET relationships/:relationshipId](https://aps.autodesk.com/en/docs/acc/v1/reference/http/relationship-service-v2-get-relationship-by-id-GET/) | Yes |
|   | [POST relationships:syncStatus](https://aps.autodesk.com/en/docs/acc/v1/reference/http/relationship-service-v2-relationships-sync-status-POST/) | Yes |
|   | [POST relationships:sync](https://aps.autodesk.com/en/docs/acc/v1/reference/http/relationship-service-v2-relationships-sync-POST/) | Yes |
|   | [GET utility/relationships:writable](https://aps.autodesk.com/en/docs/acc/v1/reference/http/relationship-service-v2-get-writable-relationship-domains-GET/) | Yes |
|   | [PUT relationships](https://aps.autodesk.com/en/docs/acc/v1/reference/http/relationship-service-v2-add-relationships-PUT/) | Yes |
|   | [POST relationships:delete](https://aps.autodesk.com/en/docs/acc/v1/reference/http/relationship-service-v2-delete-relationships-POST/) | Yes |

## RFIs API

| API | Endpoint | Forward Compatible |
| --- | --- | --- |
| RFIs | GET rfis | Yes |
|   | GET rfis/:id | Yes |
|   | POST rfis | Yes |
|   | GET users/me | Yes |
|   | PATCH rfis/:id | Yes |
|   | GET comments | Yes |
|   | POST comments | Yes |
|   | GET attachments | Yes |
|   | POST attachments | No |
|   | DELETE attachments/:attachmentId | No |

---
원본 문서: https://aps.autodesk.com/en/docs/acc/v1/overview/bim-360-compatibility/compatibility-table
