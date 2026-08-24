---
title: "Cost Management Rate Limits"
url_path: overview/rate-limits/cost-management-rate-limits 
surface: guide
---
# Cost Management API Rate Limits

The Cost Management service of BIM 360/Forma observes a set of rate limits to ensure that all clients get sufficient service and that runaway applications don’t consume excessive resources. You’ll find general information about rate limits in [APS Rate Limits and Quotas](https://aps.autodesk.com/en/docs/bim360/v1/overview/rate-limits/forge-rate-limits).

These rate limits apply to each of the Cost Management API’s endpoints. Note that these rate limits are not service guarantees. In the uncommon case where total service use is too high across all clients, the accepted request rate may drop until traffic subsides.

## Scope

The Cost Management service applies a separate rate limit to each application, identified by the user ID in the access token, for each API endpoint. For example, an application cannot make more than 300 requests per minute to the [GET containers/:containerId/cost-items/:costItemId](https://aps.autodesk.com/en/docs/bim360/v1/reference/http/cost-cost-items-costItemId-GET) endpoint.

The application can, however, exceed 300 combined requests per minute if those requests go to separate endpoints and requests to each endpoint stay within that endpoint’s rate limit.

## Endpoint Rate Limits

These rate limits apply to Cost Management API endpoints:

| Method | Endpoint | Limit (requests/minute) |
| --- | --- | --- |
| POST | [containers/:containerId/workflows/actions](https://aps.autodesk.com/en/docs/bim360/v1/reference/http/cost-actions-POST) | 150 |
| GET | [containers/:containerId/workflows/:associationType/:associationId/actions](https://aps.autodesk.com/en/docs/bim360/v1/reference/http/cost-actions-GET) | 150 |
| GET | [containers/:containerId/attachments](https://aps.autodesk.com/en/docs/bim360/v1/reference/http/cost-attachments-GET) | 100 |
| POST | [containers/:containerId/attachments](https://aps.autodesk.com/en/docs/bim360/v1/reference/http/cost-attachments-POST) | 50 |
| POST | [containers/:containerId/attachments:batch-create](https://aps.autodesk.com/en/docs/bim360/v1/reference/http/cost-attachmentsbatch-create-POST) | 30 |
| DELETE | [containers/:containerId/attachments/:attachmentId](https://aps.autodesk.com/en/docs/bim360/v1/reference/http/cost-attachments-attachmentId-DELETE) | 30 |
| POST | [containers/:containerId/attachment-folders](https://aps.autodesk.com/en/docs/bim360/v1/reference/http/cost-attachment-folders-POST) | 30 |
| GET | [containers/:containerId/properties](https://aps.autodesk.com/en/docs/bim360/v1/reference/http/cost-properties-GET) | 150 |
| POST | [containers/:containerId/property-values:batch-update](https://aps.autodesk.com/en/docs/bim360/v1/reference/http/cost-property-valuesbatch-update-POST) | 300 |
| GET | [containers/:containerId/segment-values](https://aps.autodesk.com/en/docs/bim360/v1/reference/http/cost-segment-values-GET) | 200 |
| GET | [containers/:containerId/segments/:segmentId/values](https://aps.autodesk.com/en/docs/bim360/v1/reference/http/cost-values-GET) | 300 |
| POST | [containers/:containerId/segments/:segmentId/values](https://aps.autodesk.com/en/docs/bim360/v1/reference/http/cost-values-POST) | 500 |
| POST | [containers/:containerId/segments/:segmentId/values:import](https://aps.autodesk.com/en/docs/bim360/v1/reference/http/cost-valuesimport-POST) | 30 |
| DELETE | [containers/:containerId/segments/:segmentId/values/:valueId](https://aps.autodesk.com/en/docs/bim360/v1/reference/http/cost-values-valueId-DELETE) | 50 |
| PATCH | [containers/:containerId/segments/:segmentId/values/:valueId](https://aps.autodesk.com/en/docs/bim360/v1/reference/http/cost-values-valueId-PATCH) | 120 |
| GET | [containers/:containerId/segments/:segmentId/values/:valueId](https://aps.autodesk.com/en/docs/bim360/v1/reference/http/cost-values-valueId-GET) | 300 |
| GET | [containers/:containerId/templates/:templateId/segments](https://aps.autodesk.com/en/docs/bim360/v1/reference/http/cost-templates-templateId-segments-GET) | 100 |
| POST | [containers/:containerId/templates/:templateId/segments](https://aps.autodesk.com/en/docs/bim360/v1/reference/http/cost-segments-POST) | 30 |
| DELETE | [containers/:containerId/templates/:templateId/segments/:segmentId](https://aps.autodesk.com/en/docs/bim360/v1/reference/http/cost-segments-segmentId-DELETE) | 30 |
| PATCH | [containers/:containerId/templates/:templateId/segments/:segmentId](https://aps.autodesk.com/en/docs/bim360/v1/reference/http/cost-segments-segmentId-PATCH) | 30 |
| GET | [containers/:containerId/templates/:templateId/segments/:segmentId](https://aps.autodesk.com/en/docs/bim360/v1/reference/http/cost-segments-segmentId-GET) | 30 |
| GET | [containers/:containerId/templates](https://aps.autodesk.com/en/docs/bim360/v1/reference/http/cost-templates-GET) | 250 |
| GET | [containers/:containerId/budgets](https://aps.autodesk.com/en/docs/bim360/v1/reference/http/cost-budgets-GET) | 300 |
| POST | [containers/:containerId/budgets](https://aps.autodesk.com/en/docs/bim360/v1/reference/http/cost-budgets-POST) | 60 |
| POST | [containers/:containerId/budgets:import](https://aps.autodesk.com/en/docs/bim360/v1/reference/http/cost-budgetsimport-POST) | 30 |
| DELETE | [containers/:containerId/budgets/:budgetId](https://aps.autodesk.com/en/docs/bim360/v1/reference/http/cost-budgets-budgetId-DELETE) | 30 |
| PATCH | [containers/:containerId/budgets/:budgetId](https://aps.autodesk.com/en/docs/bim360/v1/reference/http/cost-budgets-budgetId-PATCH) | 150 |
| GET | [containers/:containerId/budgets/:budgetId](https://aps.autodesk.com/en/docs/bim360/v1/reference/http/cost-budgets-budgetId-GET) | 120 |
| POST | [containers/:containerId/budgets-contracts:link](https://aps.autodesk.com/en/docs/bim360/v1/reference/http/cost-budgets-contractslink-POST) | 40 |
| POST | [containers/:containerId/cost-items:attach](https://aps.autodesk.com/en/docs/bim360/v1/reference/http/cost-cost-itemsattach-POST) | 50 |
| POST | [containers/:containerId/cost-items:detach](https://aps.autodesk.com/en/docs/bim360/v1/reference/http/cost-cost-itemsdetach-POST) | 30 |
| GET | [containers/:containerId/change-orders](https://aps.autodesk.com/en/docs/bim360/v1/reference/http/cost-change-orders-GET) | 30 |
| GET | [containers/:containerId/change-orders/:changeOrder](https://aps.autodesk.com/en/docs/bim360/v1/reference/http/cost-change-orders-changeOrder-GET) | 60 |
| POST | [containers/:containerId/change-orders/:changeOrder](https://aps.autodesk.com/en/docs/bim360/v1/reference/http/cost-change-orders-changeOrder-POST) | 60 |
| GET | [containers/:containerId/change-orders/:changeOrder/:id](https://aps.autodesk.com/en/docs/bim360/v1/reference/http/cost-change-orders-changeOrder-id-GET) | 150 |
| PATCH | [containers/:containerId/change-orders/:changeOrder/:id](https://aps.autodesk.com/en/docs/bim360/v1/reference/http/cost-change-orders-changeOrder-id-PATCH) | 100 |
| DELETE | [containers/:containerId/change-orders/:changeOrder/:id](https://aps.autodesk.com/en/docs/bim360/v1/reference/http/cost-change-orders-changeOrder-id-DELETE) | 60 |
| DELETE | [containers/:containerId/contracts/:contractId](https://aps.autodesk.com/en/docs/bim360/v1/reference/http/cost-contracts-contractId-DELETE) | 30 |
| PATCH | [containers/:containerId/contracts/:contractId](https://aps.autodesk.com/en/docs/bim360/v1/reference/http/cost-contracts-contractId-PATCH) | 50 |
| GET | [containers/:containerId/contracts/:contractId](https://aps.autodesk.com/en/docs/bim360/v1/reference/http/cost-contracts-contractId-GET) | 150 |
| GET | [containers/:containerId/contracts](https://aps.autodesk.com/en/docs/bim360/v1/reference/http/cost-contracts-GET) | 120 |
| POST | [containers/:containerId/contracts](https://aps.autodesk.com/en/docs/bim360/v1/reference/http/cost-contracts-POST) | 60 |
| GET | [containers/:containerId/cost-items](https://aps.autodesk.com/en/docs/bim360/v1/reference/http/cost-cost-items-GET) | 60 |
| POST | [containers/:containerId/cost-items](https://aps.autodesk.com/en/docs/bim360/v1/reference/http/cost-cost-items-POST) | 60 |
| POST | [containers/:containerId/cost-items:batch-create](https://aps.autodesk.com/en/docs/bim360/v1/reference/http/cost-cost-itemsbatch-create-POST) | 30 |
| GET | [containers/:containerId/cost-items/:costItemId](https://aps.autodesk.com/en/docs/bim360/v1/reference/http/cost-cost-items-costItemId-GET) | 300 |
| PATCH | [containers/:containerId/cost-items/:costItemId](https://aps.autodesk.com/en/docs/bim360/v1/reference/http/cost-cost-items-costItemId-PATCH) | 250 |
| DELETE | [containers/:containerId/cost-items/:costItemId](https://aps.autodesk.com/en/docs/bim360/v1/reference/http/cost-cost-items-costItemId-DELETE) | 200 |
| GET | [containers/:containerId/documents](https://aps.autodesk.com/en/docs/bim360/v1/reference/http/cost-documents-GET) | 30 |
| GET | [containers/:containerId/expenses](https://aps.autodesk.com/en/docs/bim360/v1/reference/http/cost-expenses-GET) | 50 |
| POST | [containers/:containerId/expenses](https://aps.autodesk.com/en/docs/bim360/v1/reference/http/cost-expenses-POST) | 50 |
| DELETE | [containers/:containerId/expenses/:id](https://aps.autodesk.com/en/docs/bim360/v1/reference/http/cost-expenses-id-DELETE) | 50 |
| PATCH | [containers/:containerId/expenses/:id](https://aps.autodesk.com/en/docs/bim360/v1/reference/http/cost-expenses-id-PATCH) | 20 |
| GET | [containers/:containerId/expenses/:id](https://aps.autodesk.com/en/docs/bim360/v1/reference/http/cost-expenses-id-GET) | 20 |
| GET | [containers/:containerId/expenses/:expenseId/items](https://aps.autodesk.com/en/docs/bim360/v1/reference/http/cost-expenses-expenseId-items-GET) | 50 |
| POST | [containers/:containerId/expenses/:expenseId/items](https://aps.autodesk.com/en/docs/bim360/v1/reference/http/cost-expenses-expenseId-items-POST) | 20 |
| DELETE | [containers/:containerId/expenses/:expenseId/items/:id](https://aps.autodesk.com/en/docs/bim360/v1/reference/http/cost-expenses-expenseId-items-id-DELETE) | 50 |
| PATCH | [containers/:containerId/expenses/:expenseId/items/:id](https://aps.autodesk.com/en/docs/bim360/v1/reference/http/cost-expenses-expenseId-items-id-PATCH) | 20 |
| GET | [containers/:containerId/expenses/:expenseId/items/:id](https://aps.autodesk.com/en/docs/bim360/v1/reference/http/cost-expenses-expenseId-items-id-GET) | 50 |
| GET | [containers/:containerId/main-contracts](https://aps.autodesk.com/en/docs/bim360/v1/reference/http/cost-main-contracts-GET) | 120 |
| POST | [containers/:containerId/main-contracts](https://aps.autodesk.com/en/docs/bim360/v1/reference/http/cost-main-contracts-POST) | 30 |
| GET | [containers/:containerId/main-contracts/:id](https://aps.autodesk.com/en/docs/bim360/v1/reference/http/cost-main-contracts-id-GET) | 100 |
| PATCH | [containers/:containerId/main-contracts/:id](https://aps.autodesk.com/en/docs/bim360/v1/reference/http/cost-main-contracts-id-PATCH) | 30 |
| DELETE | [containers/:containerId/main-contracts/:id](https://aps.autodesk.com/en/docs/bim360/v1/reference/http/cost-main-contracts-id-DELETE) | 30 |
| GET | [containers/:containerId/main-contracts/:mainContractId/items](https://aps.autodesk.com/en/docs/bim360/v1/reference/http/cost-main-contracts-mainContractId-items-GET) | 120 |
| POST | [containers/:containerId/main-contracts/:mainContractId/items](https://aps.autodesk.com/en/docs/bim360/v1/reference/http/cost-main-contracts-mainContractId-items-POST) | 60 |
| GET | [containers/:containerId/main-contracts/:mainContractId/items/:id](https://aps.autodesk.com/en/docs/bim360/v1/reference/http/cost-main-contracts-mainContractId-items-id-GET) | 120 |
| PATCH | [containers/:containerId/main-contracts/:mainContractId/items/:id](https://aps.autodesk.com/en/docs/bim360/v1/reference/http/cost-main-contracts-mainContractId-items-id-PATCH) | 60 |
| DELETE | [containers/:containerId/main-contracts/:mainContractId/items/:id](https://aps.autodesk.com/en/docs/bim360/v1/reference/http/cost-main-contracts-mainContractId-items-id-DELETE) | 30 |
| GET | [containers/:containerId/payments](https://aps.autodesk.com/en/docs/bim360/v1/reference/http/cost-payments-GET) | 300 |
| GET | [containers/:containerId/payments/:id](https://aps.autodesk.com/en/docs/bim360/v1/reference/http/cost-payments-id-GET) | 50 |
| GET | [containers/:containerId/payment-items](https://aps.autodesk.com/en/docs/bim360/v1/reference/http/cost-payment-items-GET) | 300 |
| GET | [containers/:containerId/schedule-of-values](https://aps.autodesk.com/en/docs/bim360/v1/reference/http/cost-schedule-of-values-GET) | 400 |
| POST | [containers/:containerId/schedule-of-values](https://aps.autodesk.com/en/docs/bim360/v1/reference/http/cost-schedule-of-values-POST) | 150 |
| GET | [containers/:containerId/schedule-of-values/:id](https://aps.autodesk.com/en/docs/bim360/v1/reference/http/cost-schedule-of-values-id-GET) | 50 |
| PATCH | [containers/:containerId/schedule-of-values/:id](https://aps.autodesk.com/en/docs/bim360/v1/reference/http/cost-schedule-of-values-id-PATCH) | 100 |
| DELETE | [containers/:containerId/schedule-of-values/:id](https://aps.autodesk.com/en/docs/bim360/v1/reference/http/cost-schedule-of-values-id-DELETE) | 30 |
| GET | [containers/:containerId/cost-items/:costItemId/sub-cost-items](https://aps.autodesk.com/en/docs/bim360/v1/reference/http/cost-sub-cost-items-GET) | 150 |
| POST | [containers/:containerId/cost-items/:costItemId/sub-cost-items](https://aps.autodesk.com/en/docs/bim360/v1/reference/http/cost-sub-cost-items-POST) | 150 |
| POST | [containers/:containerId/cost-items/:costItemId/sub-cost-items:copy](https://aps.autodesk.com/en/docs/bim360/v1/reference/http/cost-sub-cost-itemscopy-POST) | 50 |
| PATCH | [containers/:containerId/cost-items/:costItemId/sub-cost-items/:subCostItemsId](https://aps.autodesk.com/en/docs/bim360/v1/reference/http/cost-sub-cost-items-subCostItemsId-PATCH) | 150 |
| DELETE | [containers/:containerId/cost-items/:costItemId/sub-cost-items/:subCostItemsId](https://aps.autodesk.com/en/docs/bim360/v1/reference/http/cost-sub-cost-items-subCostItemsId-DELETE) | 150 |
| GET | [containers/:containerId/taxes](https://aps.autodesk.com/en/docs/bim360/v1/reference/http/cost-taxes-GET) | 400 |
| GET | [containers/:containerId/time-sheets](https://aps.autodesk.com/en/docs/bim360/v1/reference/http/cost-time-sheets-GET) | 100 |
| POST | [containers/:containerId/time-sheets](https://aps.autodesk.com/en/docs/bim360/v1/reference/http/cost-time-sheets-POST) | 60 |
| GET | [containers/:containerId/time-sheets/:id](https://aps.autodesk.com/en/docs/bim360/v1/reference/http/cost-time-sheets-id-GET) | 30 |
| PATCH | [containers/:containerId/time-sheets/:id](https://aps.autodesk.com/en/docs/bim360/v1/reference/http/cost-time-sheets-id-PATCH) | 30 |
| DELETE | [containers/:containerId/time-sheets/:id](https://aps.autodesk.com/en/docs/bim360/v1/reference/http/cost-time-sheets-id-DELETE) | 30 |
| GET | [containers/:containerId/performance-tracking-items](https://aps.autodesk.com/en/docs/bim360/v1/reference/http/cost-performance-tracking-items-GET) | 80 |
| POST | [containers/:containerId/performance-tracking-items](https://aps.autodesk.com/en/docs/bim360/v1/reference/http/cost-performance-tracking-items-POST) | 30 |
| GET | [containers/:containerId/performance-tracking-items/:id](https://aps.autodesk.com/en/docs/bim360/v1/reference/http/cost-performance-tracking-items-id-GET) | 30 |
| DELETE | [containers/:containerId/performance-tracking-items/:id](https://aps.autodesk.com/en/docs/bim360/v1/reference/http/cost-performance-tracking-items-id-DELETE) | 30 |
| GET | [containers/:containerId/performance-tracking-item-instances](https://aps.autodesk.com/en/docs/bim360/v1/reference/http/cost-performance-tracking-item-instances-GET) | 30 |
| POST | [containers/:containerId/performance-tracking-item-instances](https://aps.autodesk.com/en/docs/bim360/v1/reference/http/cost-performance-tracking-item-instances-POST) | 30 |
| GET | [containers/:containerId/performance-tracking-item-instances/:id](https://aps.autodesk.com/en/docs/bim360/v1/reference/http/cost-performance-tracking-item-instances-id-GET) | 30 |
| PATCH | [containers/:containerId/performance-tracking-item-instances/:id](https://aps.autodesk.com/en/docs/bim360/v1/reference/http/cost-performance-tracking-item-instances-id-PATCH) | 60 |
| DELETE | [containers/:containerId/performance-tracking-item-instances/:id](https://aps.autodesk.com/en/docs/bim360/v1/reference/http/cost-performance-tracking-item-instances-id-DELETE) | 30 |
| GET | [containers/:containerId/workflows/action-histories](https://aps.autodesk.com/en/docs/bim360/v1/reference/http/cost-action-histories-GET) | 50 |

## Overall Rate Limit

The Cost Management service’s overall rate limit is 5000 requests per minute across all applications and endpoints. Note that this rate is not a service guarantee. In the uncommon case where total service use is too high across all clients, the accepted request rate may drop until traffic subsides.

## Violation Notification

If an application makes a Cost Management API request that exceeds any of these rate limits, the Cost Management service returns an HTTP 429 error (described in detail in [APS Rate Limits and Quotas](https://aps.autodesk.com/en/docs/bim360/v1/overview/rate-limits/forge-rate-limits)).

## Changing Limits

[APS Rate Limits and Quotas](https://aps.autodesk.com/en/docs/bim360/v1/overview/rate-limits/forge-rate-limits) describes how to request rate limit changes for APS APIs.

---
원본 문서: https://aps.autodesk.com/en/docs/acc/v1/overview/rate-limits/cost-management-rate-limits 
