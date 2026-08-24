---
operation_id: cost-payments-id-GET
method: GET
path: /cost/v1/containers/{containerId}/payments/{id}
group: "Cost Management"
auth_context: user context required
scopes: [data:read]
surface: http
verification: docs-only
---

# Retrieves a payment in the given project

```http
GET https://developer.api.autodesk.com/cost/v1/containers/:containerId/payments/:id
```

| | |
| --- | --- |
| **인증 컨텍스트** | user context required |
| **필요 스코프** | `data:read` |
| **데이터 포맷** | JSON |
| **그룹** | Cost Management |

Retrieves a payment in the given project.

## 요청

### URI 파라미터

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `containerId` | string: UUID |  | The ID of the project (the container ID is the same as the project ID). To obtain the project ID, see GET projects. |
| `id` | array: string: uuid |  | The unique ID of the payment to retrieve. |

### 쿼리 파라미터

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `include` | array: string |  | Include nested resources in the response. For example, include=paymentReferences will return payment references to each payment. include=attributes will return custom attributes which represents the “properties” in the response. Possible values: paymentReferences, attributes, summaryCalculatedFields, complianceExpiration. |

### 헤더

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `Authorization` | string | **필수** | Must be Bearer <token>, where <token> is a three-legged access token obtained via an Authorization Code flow or a Secure Service Account (SSA) flow. The SSA flow is designed for headless server-to-server operations. While it functions like a two-legged flow (no user interaction), it is classified as three-legged because it preserves user context. |
| `region` | string |  | Specifies the region where the project data resides. By default, the request is routed automatically. However, specifying the region can improve performance by avoiding lookup overhead. Possible values: country or region codes such as US or EMEA. For the full list of supported regions, see the Forma Regions page. To verify your project’s region, refer to the Working with BIM 360 Services in Different Regions section on the API Basics page. |

## 응답

| 코드 | 의미 | 설명 |
| --- | --- | --- |
| `200` | OK | Success |
| `400` | Bad Request | The parameters are invalid. |
| `401` | Unauthorized | The provided bearer token is invalid. |
| `403` | Forbidden | Forbidden. The user or service represented by the bearer token does not have permission to perform this operation. |
| `404` | Not Found | The resource or endpoint cannot be found. |
| `409` | Conflict | The request could not be completed due to a conflict with the current state of the resource. |
| `429` | Too Many Requests | Rate limit exceeded. Retry your request after a few minutes. |
| `500` | Internal Server Error | An unexpected error occurred on the server. |
| `503` | Service Unavailable | Service unavailable. |

### 응답 본문 (200)

- `id` — `string: UUID`  
    The unique identifier of the payment.
- `billingPeriodId` — `string: UUID`  
    Not relevant
- `previousPaymentId` — `string: UUID`  
    The unique identifier of the previous payment for this payment.
- `associationType` — `enum:string`  
    The type of contract associated with this payment. Possible values: Contract, MainContract.
- `associationId` — `string: UUID`  
    The ID of the contract or main contract that the payment is associated with.
- `mainContractId` — `string: UUID`  
    The ID of the main contract associated with this payment.
- `budgetPaymentId` — `string,null`  
    The ID of the budget payment associated with this cost payment. This field is valid only for cost payments.
- `budgetTransferIds` — `array: string`  
    Not relevant
- `startDate` — `string`  
    The start date of this payment.
- `endDate` — `string`  
    The end date of this payment.
- `dueDate` — `string`  
    The due date of this payment.
- `number` — `string`  
    The number of this payment. Max length: 255
- `name` — `string`  
    The name of this payment. Max length: 1024
- `description` — `string`  
    A detailed description of this payment.
- `note` — `string`  
    The note attached to the payment, if returned. The note consists of Tiptap formatted rich text. For more information, see https://tiptap.dev.
- `contactId` — `string,null`  
    The ID of a contact managed by a BIM 360 Admin.
- `creatorId` — `string,null`  
    The user who created the payment. This is the ID of a user managed by BIM 360 Admin.
- `status` — `enum:string`  
    The status of this payment. For details about the possible values of this field, see Payment Application Statuses. Possible values: draft, pendingInput, submitted, revise, accepted, approved, paid.
- `exchangeRate` — `number,string,null`  
    Exchange rate. Default value is 1. If multi-currency is not enabled, it will also be 1.
- `previousExchangeRate` — `number,string,null`  
    Exchange rate from previous payment application. Default value is 1, if multi-currency is not enabled, it will also be 1.
- `contractAmount` — `number,string,null`  
    The original contract amount of the payment.
- `contractAmountForeignCurrency` — `number,string,null`  
    The original contract amount of the payment, in foreign currency.
- `approvedChangeOrders` — `number,string,null`  
    The amount of total approved change orders in this payment.
- `approvedChangeOrdersForeignCurrency` — `number,string,null`  
    The amount of total approved change orders in this payment, in foreign currency.
- `approvedBudgetTransfers` — `number,string,null`  
    Not relevant
- `approvedBudgetTransfersForeignCurrency` — `number,string,null`  
    Not relevant
- `originalAmount` — `number,string,null`  
    The original payment amount, including the main contract amount, change orders, and internal budget transfers that affect the schedule of values defined in project settings.
- `originalAmountForeignCurrency` — `number,string,null`  
    The original payment amount in foreign currency, including the main contract amount, change orders, and internal budget transfers that affect the schedule of values defined in project settings.
- `previousAmount` — `number,string,null`  
    The amount of total work completed prior to this period.
- `previousAmountForeignCurrency` — `number,string,null`  
    The amount of total work completed prior to this period, in foreign currency.
- `previousApprovedChangeOrders` — `number,string,null`  
    The amount of total approved change orders prior to this period.
- `previousApprovedChangeOrdersForeignCurrency` — `number,string,null`  
    The amount of total approved change orders prior to this period, in foreign currency.
- `previousApprovedBudgetTransfers` — `number,string,null`  
    Not relevant
- `previousApprovedBudgetTransfersForeignCurrency` — `number,string,null`  
    Not relevant
- `amount` — `number,string,null`  
    The amount of the work completed in this period.
- `previousMaterialsOnStore` — `number,string,null`  
    The amount of total materials stored prior to this period.
- `materialsOnStore` — `number,string,null`  
    The amount of the materials stored in this application.
- `previousMaterialsBilled` — `number,string,null`  
    The amount of total materials billed prior to this period.
- `previousMaterialsBilledForeignCurrency` — `number,string,null`  
    The amount of total materials billed prior to this period, in foreign currency.
- `materialsBilled` — `number,string,null`  
    The amount of the materials billed in this period.
- `currentCompletedWorkRetentionPercent` — `number`  
    Not relevant
- `completedWorkRetainedPercent` — `number`  
    Not relevant
- `completedWorkRetained` — `number`  
    Not relevant
- `completedWorkRetention` — `number,string,null`  
    The amount of total work completed retained in this application.
- `completedWorkRetentionForeignCurrency` — `number,string,null`  
    The amount of total work completed retained (pre-release), in foreign currency.
- `completedWorkGrossRetentionPercent` — `number`  
    The percentage of the gross retention amount of the payment for work completed. (released value is not removed)
- `currentMaterialsRetentionPercent` — `number`  
    Not relevant
- `materialsGrossRetentionPercent` — `number`  
    The percentage of the gross retention of the payment for material (released value is not removed).
- `materialsRetainedPercent` — `number`  
    Not relevant
- `materialsRetained` — `number,string,null`  
    The amount of the materials (stored or billed) retained in this application.
- `materialsRetention` — `number,string,null`  
    The amount of the materials (stored or billed) retained in this application.
- `materialsOnStoreRetention` — `number,string,null`  
    The amount of the materials stored retained in this application. This parameter is deprecated.
- `materialsRetentionForeignCurrency` — `number,string,null`  
    The amount of the materials (stored or billed) retained in this application, in foreign currency.
- `totalGrossRetentionPercent` — `number`  
    The percentage of the gross retention of the payment for work completed and material. (released value is not removed)
- `totalRetainedPercent` — `number`  
    Not relevant
- `totalRetained` — `number`  
    Not relevant
- `previousRetention` — `number,string,null`  
    The retained amount of total work completed and materials (stored or billed) prior to this period.
- `previousRetentionForeignCurrency` — `number,string,null`  
    The retained amount of total work completed and materials (stored or billed) prior to this period, in foreign currency.
- `netAmount` — `number,string,null`  
    The net amount that should be paid in this period, including work completed, advance amount, materials stored or billed, retention and release.
- `netAmountForeignCurrency` — `number,string,null`  
    The net amount that should be paid in this period, including work completed, advance amount, materials stored or billed, retention and release, in foreign currency.
- `netMaterialsOnStore` — `number,string,null`  
    The net materials stored in this period, which equals to (materialsOnStore - previousMaterialsOnStore).
- `netRetention` — `number,string,null`  
    The net retention in this period, which equals to (completedWorkRetention + materialsOnStoreRetention - previousRetention).
- `previousClaimedAmount` — `number,string,null`  
    The claimed amount of total work completed prior to this period.
- `previousClaimedAmountForeignCurrency` — `number,string,null`  
    The claimed amount of total work completed prior to this period, in foreign currency.
- `claimedAmount` — `number,string,null`  
    The claimed amount of total work completed in this period.
- `previousAdvanceAmount` — `number,string,null`  
    The advance amount of total work completed prior to this period.
- `previousAdvanceAmountForeignCurrency` — `number,string,null`  
    The advance amount of total work completed prior to this period, in foreign currency.
- `previousRecoupmentAmount` — `number,string,null`  
    The recoupment amount of total work completed prior to this period.
- `previousRecoupmentAmountForeignCurrency` — `number,string,null`  
    The recoupment amount of total work completed prior to this period, in foreign currency.
- `advancePercent` — `number,null`  
    The advance percent of the work completed in this period.
- `advanceAmount` — `number,string,null`  
    The advance amount of the work completed in this period.
- `recoupmentAmount` — `number,string,null`  
    The recoupment amount of the work completed in this period.
- `recoupmentPercentOfCompletedWork` — `number,null`  
    The recoupment percentage of the work completed in this period.
- `aggregateBy` — `string,null`  
    Not relevant
- `canReleaseRetention` — `boolean`  
    Not relevant
- `isRetentionPercentPreserved` — `boolean`  
    Not relevant
- `hasItemRejected` — `boolean`  
    Indicate if this payment has item rejected. This parameter is deprecated.
- `hasItemReviewed` — `boolean`  
    Indicate if this payment has item reviewed. This parameter is deprecated.
- `recipients` — `array: object`  
    Persons that the generated documents will be sent to.
  - `id` — `string`  
      This is the ID of a user managed by BIM 360 Admin.
  - `isDefault` — `boolean`  
      True if this is the default recipient of a Contract or Change Order.
- `companyId` — `string,null`  
    The ID of a company managed by a BIM 360 Admin. Detailed company information can be retrieved by calling GET projects/:project_id/companies and locating the member_group_id in the response.
- `companyUid` — `string,null`  
    The unique ID (UUID) of the company in this hub. Detailed company information can be retrieved using this UUID by calling GET companies/:company_id in the response.
- `architectCompanyId` — `string,null`  
    The BIM360/Forma ID of the architecture firm. The detailed company information can be retrieved from GET projects/:project_id/companies endpoint by searching the member_group_id in the response.
- `architectCompanyUid` — `string,null`  
    The unique ID of the architecture firm. The detailed company information can be retrieved by this uuid from GET companies/:company_id <en/docs/bim360/v1/reference/http/companies-:company_id-GET/> in the response
- `architectContactId` — `string,null`  
    The BIM360/Forma ID of the primary contact at the architecture firm.
- `additionalCollaborators` — `array: object`  
    The additional collaborator company and contacts.
  - `companyId` — `string`  
      The BIM360/Forma ID of the firm.
  - `companyUid` — `string,null`  
      The unique ID (UUID) of the company in this hub. Detailed company information can be retrieved using this UUID by calling GET companies/:company_id in the response.
  - `contactIds` — `array: string`  
      The BIM360/Forma user ID of the contacts in the firm.
- `approvedAt` — `string,null`  
    The date and time that the item was approved, in ISO 8601 format.
- `calculatedAt` — `string,null`  
    The date and time that the item was calculated, in ISO 8601 format.
- `calculatedBy` — `string`  
    The ID of the user who calculated the payment.
- `paidAt` — `string,null`  
    The date and time when the expense is paid.
- `forecastDistributionAt` — `string,null`  
    The date and time determine which distribution period this payment belongs to, after the status of status is set to approved or paid.
- `submittedAt` — `string,null`  
    The date and time when the payment is submitted.
- `paymentStage` — `enum:string`  
    Not relevant
- `paymentStageSource` — `string,null`  
    The source of the payment stage change. Possible values: user: The payment stage was manually set by a user. The system will not auto-set the payment stage to Final. system: The payment stage is automatically managed by the platform.
- `bridgeInfo` — `object,null`  
    Not relevant
- `internalId` — `string,null`  
    Not relevant
- `internalSystem` — `string,null`  
    Not relevant
- `integrationState` — `string,null`  
    The state of the item during the integration with the external ERP system (such as SignNow). An item can be a budget, contract, main contract, main contract item, cost item, expense, expense item, change order, or schedule of value. For more details, see Integrate with External System tutorial. Possible values: locked: the item is currently locked within the ERP system, preventing modifications until unlocked. To unlock and modify the item, use the relevant PATCH endpoint to set integrationState to null. For example, for a budget, call PATCH budgets. For a contract, call PATCH contracts. For more details, see the Help documentation. integrated: the item has been successfully added to the ERP system. failed: the item encountered an error during the integration process and was not successfully added to the ERP system. For example, if a user tries to integrate contracts from an ERP system and the updates fail, the integrationState can be set to failed. Retry the sync process or analyze the issue if it continues to fail. null: The item has not been integrated with the ERP system. This is default value. For more information regarding integrations within the Cost Management system, see Integrations in Cost Management.
- `integrationStateChangedAt` — `string,null`  
    The date and time that the item’s integration status was last changed.
- `integrationStateChangedBy` — `string,null`  
    The user who last changed the integration status. This is the ID of a user managed by the BIM 360/Forma Admin.
- `externalId` — `string`  
    The identifier assigned to an item in its original external ERP system. Use this ID to track and look up data within the integrated system. Note that this value comes from the item’s ID in the external system. Max length: 255
- `externalSystem` — `string`  
    The name of the external ERP system integrated with Cost Management. Use this name to identify and search for data within the integrated system. Max length: 255
- `externalMessage` — `string`  
    A message generated by the external ERP system that explains the sync status of the integration. For example, common values include success or fail to indicate the result of the integration operation. Max length: 255
- `lastSyncTime` — `datetime: ISO 8601`  
    The date and time when the item was last synchronized with the external ERP system. This value is updated by the external system and is in ISO 8601 format.
- `createdAt` — `datetime: ISO 8601`  
    The date and time that the item was created, in ISO 8601 format.
- `updatedAt` — `datetime: ISO 8601`  
    The date and time that the item was last updated, in ISO 8601 format.

## Example

```
curl -v 'https://developer.api.autodesk.com/cost/v1/containers/e94b9bc8-1775-4d76-9b1d-c613e120ccff/payments/:id' \
  -H 'Authorization: Bearer AuIPTf4KYLTYGVnOHQ0cuolwCW2a'
```

```
[
  {
    "id": "a2e16076-d5bb-44b3-b451-fb1fb390e4fc",
    "billingPeriodId": "18d97ae0-9484-11e8-a7ec-7ddae203e404",
    "previousPaymentId": "18d97ae0-9484-11e8-a7ec-7ddae203e404",
    "associationType": "Contract",
    "associationId": "18d97ae0-9484-11e8-a7ec-7ddae203e404",
    "mainContractId": "18d97ae0-9484-11e8-a7ec-7ddae203e404",
    "budgetPaymentId": "18d97ae0-9484-11e8-a7ec-7ddae203e404",
    "budgetTransferIds": [
      "a2e16076-d5bb-44b3-b451-fb1fb390e4fc"
    ],
    "startDate": "2019-02-01",
    "endDate": "2019-02-28",
    "dueDate": "2019-02-28",
    "number": "09871000072000O",
    "name": "INSURANCE",
    "description": "Description of Payment",
    "note": "",
    "contactId": "CED9LVTLHNXV",
    "creatorId": "CED9LVTLHNXV",
    "status": "draft",
    "exchangeRate": "1.0000",
    "previousExchangeRate": "1.0000",
    "contractAmount": "1000.0000",
    "contractAmountForeignCurrency": "1000.0000",
    "approvedChangeOrders": "1000.0000",
    "approvedChangeOrdersForeignCurrency": "1000.0000",
    "approvedBudgetTransfers": "1000.0000",
    "approvedBudgetTransfersForeignCurrency": "1000.0000",
    "originalAmount": "1000.0000",
    "originalAmountForeignCurrency": "1000.0000",
    "previousAmount": "1000.0000",
    "previousAmountForeignCurrency": "1000.0000",
    "previousApprovedChangeOrders": "1000.0000",
    "previousApprovedChangeOrdersForeignCurrency": "1000.0000",
    "previousApprovedBudgetTransfers": "1000.0000",
    "previousApprovedBudgetTransfersForeignCurrency": "1000.0000",
    "amount": "1000.0000",
    "previousMaterialsOnStore": "1000.0000",
    "materialsOnStore": "1000.0000",
    "previousMaterialsBilled": "1000.0000",
    "previousMaterialsBilledForeignCurrency": "1000.0000",
    "materialsBilled": "1000.0000",
    "currentCompletedWorkRetentionPercent": 0.1,
    "completedWorkRetainedPercent": 0.1,
    "completedWorkRetained": "",
    "completedWorkRetention": "1000.0000",
    "completedWorkRetentionForeignCurrency": "1000.0000",
    "completedWorkGrossRetentionPercent": 0.1,
    "currentMaterialsRetentionPercent": 0.1,
    "materialsGrossRetentionPercent": 0.1,
    "materialsRetainedPercent": 0.1,
    "materialsRetained": "1000.0000",
    "materialsRetention": "1000.0000",
    "materialsOnStoreRetention": "1000.0000",
    "materialsRetentionForeignCurrency": "1000.0000",
    "totalGrossRetentionPercent": 0.1,
    "totalRetainedPercent": 0.1,
    "totalRetained": "",
    "previousRetention": "1000.0000",
    "previousRetentionForeignCurrency": "1000.0000",
    "netAmount": "1000.0000",
    "netAmountForeignCurrency": "1000.0000",
    "netMaterialsOnStore": "1000.0000",
    "netRetention": "1000.0000",
    "previousClaimedAmount": "1000.0000",
    "previousClaimedAmountForeignCurrency": "1000.0000",
    "claimedAmount": "1000.0000",
    "previousAdvanceAmount": "1000.0000",
    "previousAdvanceAmountForeignCurrency": "1000.0000",
    "previousRecoupmentAmount": "1000.0000",
    "previousRecoupmentAmountForeignCurrency": "1000.0000",
    "advancePercent": 0.1,
    "advanceAmount": "1000.0000",
    "recoupmentAmount": "1000.0000",
    "recoupmentPercentOfCompletedWork": 0.1,
    "aggregateBy": "workCompleted",
    "canReleaseRetention": false,
    "isRetentionPercentPreserved": false,
    "hasItemRejected": true,
    "hasItemReviewed": true,
    "recipients": [
      {
        "id": "ZPYARKZX9ANQ",
        "isDefault": false
      }
    ],
    "companyId": "GF8XKPKWM38E",
    "companyUid": "683904a0-47ce-4146-ac2d-a3840f00e0f4",
    "architectCompanyId": "GF8XKPKWM38E",
    "architectCompanyUid": "683904a0-47ce-4146-ac2d-a3840f00e0f4",
    "architectContactId": "CED9LVTLHNXV",
    "additionalCollaborators": [
      {
        "companyId": "GF8XKPKWM38E",
        "companyUid": "683904a0-47ce-4146-ac2d-a3840f00e0f4",
        "contactIds": [
          "CED9LVTLHNXV"
        ]
      }
    ],
    "approvedAt": "2019-02-05T01:00:12.989Z",
    "calculatedAt": "2019-02-05T01:00:12.989Z",
    "calculatedBy": "CED9LVTLHNXV",
    "paidAt": "2019-02-05T01:00:12.989Z",
    "forecastDistributionAt": "2019-02-05T01:00:12.989Z",
    "submittedAt": "2019-02-05T01:00:12.989Z",
    "paymentStage": "Progress",
    "paymentStageSource": "user",
    "bridgeInfo": "",
    "internalId": "123",
    "internalSystem": "GCPay",
    "integrationState": "locked",
    "integrationStateChangedAt": "2019-09-05T01:00:12.989Z",
    "integrationStateChangedBy": "CED9LVTLHNXV",
    "externalId": "10010-99-AB",
    "externalSystem": "Sage300",
    "externalMessage": "Success.",
    "lastSyncTime": "2019-09-05T01:00:12.989Z",
    "createdAt": "2019-01-06T01:24:22.678Z",
    "updatedAt": "2019-09-05T01:00:12.989Z"
  }
]
```

## 같은 그룹의 다른 엔드포인트

- `GET /cost/v1/containers/{containerId}/workflows/action-histories` — [Retrieves the action history records associated with specified cost items, such as contracts, budget payments, or RFQs](./cost-action-histories-GET.md)
- `GET /cost/v1/containers/{containerId}/workflows/{associationType}/{associationId}/actions` — [List the actions that can execute on the specified item according to the item’s current state](./cost-actions-GET.md)
- `POST /cost/v1/containers/{containerId}/workflows/actions` — [Perform a specified action on an item](./cost-actions-POST.md)
- `POST /cost/v1/containers/{containerId}/attachment-folders` — [Find or create an attachment folder in BIM 360 Docs for a given item](./cost-attachment-folders-POST.md)
- `DELETE /cost/v1/containers/{containerId}/attachments/{attachmentId}` — [Deletes a Attachment](./cost-attachments-attachmentId-DELETE.md)
- `GET /cost/v1/containers/{containerId}/attachments` — [Retrieves all of the attachments associated with an item such as a budget, contract, or cost item](./cost-attachments-GET.md)
- `POST /cost/v1/containers/{containerId}/attachments` — [Creates an attachment in a specific project](./cost-attachments-POST.md)
- `POST /cost/v1/containers/{containerId}/attachments:batch-create` — [Creates an attachment in a specific project](./cost-attachmentsbatch-create-POST.md)
- `DELETE /cost/v1/containers/{containerId}/budgets/{budgetId}` — [Deletes a budget](./cost-budgets-budgetId-DELETE.md)
- `GET /cost/v1/containers/{containerId}/budgets/{budgetId}` — [Retrieves a budget specified by ID](./cost-budgets-budgetId-GET.md)
- `PATCH /cost/v1/containers/{containerId}/budgets/{budgetId}` — [Updates a budget](./cost-budgets-budgetId-PATCH.md)
- `POST /cost/v1/containers/{containerId}/budgets-contracts:link` — [Link or unlink one or multiple budgets with one or multiple contracts](./cost-budgets-contractslink-POST.md)
- `GET /cost/v1/containers/{containerId}/budgets` — [Returns all the budgets in a specific project](./cost-budgets-GET.md)
- `POST /cost/v1/containers/{containerId}/budgets` — [Creates a budget in the specified project](./cost-budgets-POST.md)
- `POST /cost/v1/containers/{containerId}/budgets:import` — [Imports a list of budgets into a project chunk by chunk](./cost-budgetsimport-POST.md)
- `GET /cost/v1/containers/{containerId}/change-orders/{changeOrder}` — [Change Orders](./cost-change-orders-changeOrder-GET.md)
- `DELETE /cost/v1/containers/{containerId}/change-orders/{changeOrder}/{id}` — [Delete an existing change order](./cost-change-orders-changeOrder-id-DELETE.md)
- `GET /cost/v1/containers/{containerId}/change-orders/{changeOrder}/{id}` — [Retrieves the details of a change order specified by ID](./cost-change-orders-changeOrder-id-GET.md)
- `PATCH /cost/v1/containers/{containerId}/change-orders/{changeOrder}/{id}` — [Updates the specified change order](./cost-change-orders-changeOrder-id-PATCH.md)
- `POST /cost/v1/containers/{containerId}/change-orders/{changeOrder}` — [Create a new change order (typically a PCO) to initiate a change](./cost-change-orders-changeOrder-POST.md)
- `GET /cost/v1/containers/{containerId}/change-orders` — [Change Orders](./cost-change-orders-GET.md)
- `DELETE /cost/v1/containers/{containerId}/contracts/{contractId}` — [Deletes a contract item specified by ID](./cost-contracts-contractId-DELETE.md)
- `GET /cost/v1/containers/{containerId}/contracts/{contractId}` — [Retrieves the contract specified by contract ID](./cost-contracts-contractId-GET.md)
- `PATCH /cost/v1/containers/{containerId}/contracts/{contractId}` — [Updates the specified contract](./cost-contracts-contractId-PATCH.md)
- `GET /cost/v1/containers/{containerId}/contracts` — [Retrieves the details of all contracts in the specified project](./cost-contracts-GET.md)
- `POST /cost/v1/containers/{containerId}/contracts` — [Creates a contract in the specific project](./cost-contracts-POST.md)
- `DELETE /cost/v1/containers/{containerId}/cost-items/{costItemId}` — [Deletes an existing cost item](./cost-cost-items-costItemId-DELETE.md)
- `GET /cost/v1/containers/{containerId}/cost-items/{costItemId}` — [Gets a cost item specified by ID](./cost-cost-items-costItemId-GET.md)
- `PATCH /cost/v1/containers/{containerId}/cost-items/{costItemId}` — [Updates an existing cost item](./cost-cost-items-costItemId-PATCH.md)
- `GET /cost/v1/containers/{containerId}/cost-items` — [Retrieves a list of all cost items in the specified cost container for a project](./cost-cost-items-GET.md)
- `POST /cost/v1/containers/{containerId}/cost-items` — [Creates a new cost item in the specified project](./cost-cost-items-POST.md)
- `POST /cost/v1/containers/{containerId}/cost-items:attach` — [Add existing cost items to a change order](./cost-cost-itemsattach-POST.md)
- `POST /cost/v1/containers/{containerId}/cost-items:batch-create` — [Adds multiple cost items to a project](./cost-cost-itemsbatch-create-POST.md)
- `POST /cost/v1/containers/{containerId}/cost-items:detach` — [Remove existing cost items from a change order](./cost-cost-itemsdetach-POST.md)
- `GET /cost/v1/containers/{containerId}/documents` — [Gets generated documents](./cost-documents-GET.md)
- `GET /cost/v1/containers/{containerId}/expenses/{expenseId}/items` — [Retrieves the expense items and subitems of the specified expenses for a given project](./cost-expenses-expenseId-items-GET.md)
- `DELETE /cost/v1/containers/{containerId}/expenses/{expenseId}/items/{id}` — [Deletes an expense item from the specified expense of a given project](./cost-expenses-expenseId-items-id-DELETE.md)
- `GET /cost/v1/containers/{containerId}/expenses/{expenseId}/items/{id}` — [Retrieves an expense item in the specified expense of a given project](./cost-expenses-expenseId-items-id-GET.md)
- `PATCH /cost/v1/containers/{containerId}/expenses/{expenseId}/items/{id}` — [Updates an expense item in the specified expense of a given project](./cost-expenses-expenseId-items-id-PATCH.md)
- `POST /cost/v1/containers/{containerId}/expenses/{expenseId}/items` — [Creates an expense item in the specified expense of a given project](./cost-expenses-expenseId-items-POST.md)
- `GET /cost/v1/containers/{containerId}/expenses` — [Retrieves the requested set of expenses in the specified project](./cost-expenses-GET.md)
- `DELETE /cost/v1/containers/{containerId}/expenses/{id}` — [Deletes the specified expense](./cost-expenses-id-DELETE.md)
- `GET /cost/v1/containers/{containerId}/expenses/{id}` — [Retrieves the specified expense](./cost-expenses-id-GET.md)
- `PATCH /cost/v1/containers/{containerId}/expenses/{id}` — [Updates the specified expense](./cost-expenses-id-PATCH.md)
- `POST /cost/v1/containers/{containerId}/expenses` — [Creates an expense in the given project](./cost-expenses-POST.md)
- `GET /cost/v1/containers/{containerId}/main-contracts` — [Retrieves one or more of the main contracts in the given project](./cost-main-contracts-GET.md)
- `DELETE /cost/v1/containers/{containerId}/main-contracts/{id}` — [Deletes a main contract by ID in the given project](./cost-main-contracts-id-DELETE.md)
- `GET /cost/v1/containers/{containerId}/main-contracts/{id}` — [Retrieves a main contract by ID in the given project](./cost-main-contracts-id-GET.md)
- `PATCH /cost/v1/containers/{containerId}/main-contracts/{id}` — [Updates a main contract in the given project](./cost-main-contracts-id-PATCH.md)
- `GET /cost/v1/containers/{containerId}/main-contracts/{mainContractId}/items` — [Retrieves one or more items in the specified main contracts](./cost-main-contracts-mainContractId-items-GET.md)
- `DELETE /cost/v1/containers/{containerId}/main-contracts/{mainContractId}/items/{id}` — [Deletes a main contract item by ID](./cost-main-contracts-mainContractId-items-id-DELETE.md)
- `GET /cost/v1/containers/{containerId}/main-contracts/{mainContractId}/items/{id}` — [Retrieves a main contract item by ID](./cost-main-contracts-mainContractId-items-id-GET.md)
- `PATCH /cost/v1/containers/{containerId}/main-contracts/{mainContractId}/items/{id}` — [Updates a main contract item by ID](./cost-main-contracts-mainContractId-items-id-PATCH.md)
- `POST /cost/v1/containers/{containerId}/main-contracts/{mainContractId}/items` — [Creates a main contract item in the given main contract](./cost-main-contracts-mainContractId-items-POST.md)
- `POST /cost/v1/containers/{containerId}/main-contracts` — [Creates a main contract in the given project](./cost-main-contracts-POST.md)
- `GET /cost/v1/containers/{containerId}/payment-items` — [Retrieves payment items in the given project based on associationId and paymentId](./cost-payment-items-GET.md)
- `GET /cost/v1/containers/{containerId}/payments` — [Retrieves payments in the given project based on the specified query criteria](./cost-payments-GET.md)
- `GET /cost/v1/containers/{containerId}/performance-tracking-item-instances` — [Retrieves one or more performance tracking item instances in the given project](./cost-performance-tracking-item-instances-GET.md)
- `DELETE /cost/v1/containers/{containerId}/performance-tracking-item-instances/{id}` — [Deletes a performance tracking item instance with the specified ID in the given project](./cost-performance-tracking-item-instances-id-DELETE.md)
- `GET /cost/v1/containers/{containerId}/performance-tracking-item-instances/{id}` — [Retrieves a performance tracking item instance by ID in the given project](./cost-performance-tracking-item-instances-id-GET.md)
- `PATCH /cost/v1/containers/{containerId}/performance-tracking-item-instances/{id}` — [Updates a performance tracking item instance by ID in the given project](./cost-performance-tracking-item-instances-id-PATCH.md)
- `POST /cost/v1/containers/{containerId}/performance-tracking-item-instances` — [Creates a performance tracking item instance based on the specified tracking item in the given project](./cost-performance-tracking-item-instances-POST.md)
- `GET /cost/v1/containers/{containerId}/performance-tracking-items` — [Retrieves one or more performance tracking items in the given project](./cost-performance-tracking-items-GET.md)
- `DELETE /cost/v1/containers/{containerId}/performance-tracking-items/{id}` — [Deletes a performance tracking item that’s based on the specified budget in the given project](./cost-performance-tracking-items-id-DELETE.md)
- `GET /cost/v1/containers/{containerId}/performance-tracking-items/{id}` — [Retrieves a performance tracking item by ID in the given project](./cost-performance-tracking-items-id-GET.md)
- `POST /cost/v1/containers/{containerId}/performance-tracking-items` — [Creates a performance tracking item from the specified budget in the given project](./cost-performance-tracking-items-POST.md)
- `GET /cost/v1/containers/{containerId}/properties` — [Lists all the attribute definitions created to define custom attributes for a given module](./cost-properties-GET.md)
- `POST /cost/v1/containers/{containerId}/property-values:batch-update` — [Attribute Values](./cost-property-valuesbatch-update-POST.md)
- `GET /cost/v1/containers/{containerId}/schedule-of-values` — [Retrieves one or more schedule of values (SOV) items in the given project](./cost-schedule-of-values-GET.md)
- `DELETE /cost/v1/containers/{containerId}/schedule-of-values/{id}` — [Deletes a specified schedule of values (SOV) item in the given project](./cost-schedule-of-values-id-DELETE.md)
- `GET /cost/v1/containers/{containerId}/schedule-of-values/{id}` — [Retrieves one schedule of values (SOV) item in the given project by ID.](./cost-schedule-of-values-id-GET.md)
- `PATCH /cost/v1/containers/{containerId}/schedule-of-values/{id}` — [Updates the specified schedule of values (SOV) item in the given project](./cost-schedule-of-values-id-PATCH.md)
- `POST /cost/v1/containers/{containerId}/schedule-of-values` — [Creates a new schedule of values (SOV) item for the given project as a child of an existing SOV item](./cost-schedule-of-values-POST.md)
- `GET /cost/v1/containers/{containerId}/segment-values` — [Retrieves the defined segment values for the specified budget code segment](./cost-segment-values-GET.md)
- `POST /cost/v1/containers/{containerId}/templates/{templateId}/segments` — [Creates a new segment in the budget code template](./cost-segments-POST.md)
- `DELETE /cost/v1/containers/{containerId}/templates/{templateId}/segments/{segmentId}` — [Deletes a segment by ID](./cost-segments-segmentId-DELETE.md)
- `GET /cost/v1/containers/{containerId}/templates/{templateId}/segments/{segmentId}` — [Retrieves a segment by ID](./cost-segments-segmentId-GET.md)
- `PATCH /cost/v1/containers/{containerId}/templates/{templateId}/segments/{segmentId}` — [Updates a segment by ID](./cost-segments-segmentId-PATCH.md)
- `GET /cost/v1/containers/{containerId}/cost-items/{costItemId}/sub-cost-items` — [Retrieves sub cost items associated with a specific cost item in a project](./cost-sub-cost-items-GET.md)
- `POST /cost/v1/containers/{containerId}/cost-items/{costItemId}/sub-cost-items` — [Creates a sub cost item within a specific cost item in a project](./cost-sub-cost-items-POST.md)
- `DELETE /cost/v1/containers/{containerId}/cost-items/{costItemId}/sub-cost-items/{subCostItemsId}` — [Deletes a sub cost item within a specific cost item](./cost-sub-cost-items-subCostItemsId-DELETE.md)
- `PATCH /cost/v1/containers/{containerId}/cost-items/{costItemId}/sub-cost-items/{subCostItemsId}` — [Updates a sub cost item within a specific cost item](./cost-sub-cost-items-subCostItemsId-PATCH.md)
- `POST /cost/v1/containers/{containerId}/cost-items/{costItemId}/sub-cost-items:copy` — [Sub Cost Items](./cost-sub-cost-itemscopy-POST.md)
- `GET /cost/v1/containers/{containerId}/taxes` — [Retrieves a list of tax formulas associated with specific cost objects in the given project](./cost-taxes-GET.md)
- `GET /cost/v1/containers/{containerId}/templates` — [Retrieves ID, name, and timestamp information for all budget code templates in a specific project](./cost-templates-GET.md)
- `GET /cost/v1/containers/{containerId}/templates/{templateId}/segments` — [Retrieves all of the segments in a budget code template](./cost-templates-templateId-segments-GET.md)
- `GET /cost/v1/containers/{containerId}/time-sheets` — [Retrieves one or more timesheets in the given project](./cost-time-sheets-GET.md)
- `DELETE /cost/v1/containers/{containerId}/time-sheets/{id}` — [Deletes the specified timesheet in the given project](./cost-time-sheets-id-DELETE.md)
- `GET /cost/v1/containers/{containerId}/time-sheets/{id}` — [Retrieves the specified timesheet in the given project](./cost-time-sheets-id-GET.md)
- `PATCH /cost/v1/containers/{containerId}/time-sheets/{id}` — [Updates the specified timesheet in the given project](./cost-time-sheets-id-PATCH.md)
- `POST /cost/v1/containers/{containerId}/time-sheets` — [Creates a timesheet for the specified tracking item instance in the given project](./cost-time-sheets-POST.md)
- `GET /cost/v1/containers/{containerId}/segments/{segmentId}/values` — [Retrieves all of the defined segment values for a specific segment](./cost-values-GET.md)
- `POST /cost/v1/containers/{containerId}/segments/{segmentId}/values` — [Creates a segment value in a budget code segment](./cost-values-POST.md)
- `DELETE /cost/v1/containers/{containerId}/segments/{segmentId}/values/{valueId}` — [Deletes a segment value by ID](./cost-values-valueId-DELETE.md)
- `GET /cost/v1/containers/{containerId}/segments/{segmentId}/values/{valueId}` — [Retrieves a segment value by ID](./cost-values-valueId-GET.md)
- `PATCH /cost/v1/containers/{containerId}/segments/{segmentId}/values/{valueId}` — [Updates a segment value by ID](./cost-values-valueId-PATCH.md)
- `POST /cost/v1/containers/{containerId}/segments/{segmentId}/values:import` — [Imports segment value definitions for use in a specific segment of a budget code template](./cost-valuesimport-POST.md)

---
원본 문서: https://aps.autodesk.com/en/docs/acc/v1/reference/http/cost-payments-id-GET
