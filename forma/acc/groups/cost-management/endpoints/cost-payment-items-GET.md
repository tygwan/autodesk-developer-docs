---
operation_id: cost-payment-items-GET
method: GET
path: /cost/v1/containers/{containerId}/payment-items
group: "Cost Management"
auth_context: user context required
scopes: [data:read]
surface: http
verification: docs-only
---

# Retrieves payment items in the given project based on associationId and paymentId

```http
GET https://developer.api.autodesk.com/cost/v1/containers/:containerId/payment-items
```

| | |
| --- | --- |
| **인증 컨텍스트** | user context required |
| **필요 스코프** | `data:read` |
| **데이터 포맷** | JSON |
| **그룹** | Cost Management |

Retrieves payment items in the given project based on associationId and paymentId.

## 요청

### URI 파라미터

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `containerId` | string: UUID |  | The ID of the project (the container ID is the same as the project ID). To obtain the project ID, see GET projects. |

### 쿼리 파라미터

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `filter[associationId]` | array: string: uuid |  | Return only the payment items that are associated with the provided list of contract or main contract IDs. Separate multiple IDs with commas. For example, filter[associationId]=id1,id2. |
| `filter[paymentId]` | array: string: uuid |  | Return only the payment items that are associated with the payments identified by the provided list of payment IDs. Separate multiple IDs with commas. For example, filter[id]=id1,id2. |
| `filter[associationType]` | array: string |  | Return only the payment items that are associated with the type of original entities specified. For example, filter[associationType]=SOV,SCO. Possible values for cost payment: SOV,SCO,CostItem,MaterialsOnSite, and budget payments: MainContractItem,OCO,CostItem,SubCostItem,MaterialsOnSite. |
| `offset` | int |  | The number of records to skip before returning results. Used together with limit to paginate through results, where offset specifies the starting point and limit specifies the number of records to return. |
| `limit` | int |  | The maximum number of records returned per page. Default: 100. A page may contain fewer records than the limit if there are fewer matching items or if it is the last page of results. |
| `sort` | string |  | Specifies the field(s) to sort results by, with optional direction (asc for ascending or desc for descending; default is asc). Use comma-separated field names for multiple sort criteria, for example sort=name desc or sort=name,createdAt desc. |

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

- `pagination` — `object`  
    Contains pagination information when data is returned page by page.
  - `limit` — `int`  
      The maximum number of records returned in the response.
  - `offset` — `int`  
      The number of records skipped before returning the page of results.
  - `totalResults` — `int`  
      The total number of records that matched the request criteria.
  - `nextUrl` — `string`  
      The URL for the next request to retrieve the next page of results. Max length: 2000. Max length: 2000
- `results` — `array: object`  
    The detail items in the payment.
  - `id` — `string: UUID`  
      Unique identifier of the payment.
  - `paymentId` — `string: UUID`  
      The ID of the payment the items belong to.
  - `parentId` — `string: UUID`  
      The ID of the parent item for sub items.
  - `budgetId` — `string: UUID`  
      The ID of the Budget to which the payment item belongs.
  - `budgetCode` — `string`  
      The budget code for the payment item (unformatted string).
  - `budgetFormattedCode` — `string`  
      The budget code for the payment item (formatted with separators).
  - `associationType` — `enum:string`  
      The object type of the payment item is generated from. Possible values: SCO, OCO, SOV, CostItem, SubCostItem, MaterialsOnSite
  - `associationId` — `string: UUID`  
      The ID of the object that the payment item is generated from.
  - `name` — `string`  
      The name of the payment item. Max length: 1024
  - `description` — `string`  
      A description of the payment item.
  - `position` — `int`  
      The position of the payment item in the payment item siblings.
  - `exchangeRate` — `number,string,null`  
      Exchange rate. Default value is 1. If multi-currency is not enabled, it will also be 1.
  - `originalExchangeRate` — `number,string,null`  
      If this payment item came from Schedule of Value, the value is equal to Schedule of Value exchange rate; If this payment item came from SCO, the value is equal to SCO exchange rate. Default value is 1. If multi-currency is not enabled, it will also be 1.
  - `previousExchangeRate` — `number,string,null`  
      Exchange rate from previous payment application. Default value is 1, if multi-currency is not enabled, it will also be 1.
  - `originalQuantity` — `number`  
      The original quantity of the payment item. Derived from the associated SOV or the main contract item.
  - `originalUnitPrice` — `number,string,null`  
      The original unit price of the payment item. Derived from the associated SOV or the main contract item.
  - `originalAmount` — `number,string,null`  
      The original amount of the payment item. Derived from the associated SOV or the main contract item.
  - `budgetTransfersQuantity` — `number`  
      Not relevant
  - `budgetTransfersUnitPrice` — `number,string,null`  
      Not relevant
  - `budgetTransfers` — `number,string,null`  
      Not relevant
  - `previousQuantity` — `number`  
      The quantity of total work completed prior to this period.
  - `previousUnitPrice` — `number,string,null`  
      The unit price of total work completed prior to this period.
  - `previousAmount` — `number,string,null`  
      The amount of total work completed prior to this period.
  - `previousAmountForeignCurrency` — `number,string,null`  
      The amount of total work completed prior to this period, in foreign currency.
  - `previousMaterialsOnStore` — `number,string,null`  
      The amount of total materials stored prior to this period.
  - `previousMaterialsBilledQuantity` — `number`  
      The quantity of total materials billed prior to this period.
  - `previousMaterialsBilledUnitPrice` — `number,string,null`  
      The unit price of total materials billed prior to this period.
  - `previousMaterialsBilledUnit` — `string`  
      The unit of total materials billed prior to this period.
  - `previousMaterialsBilled` — `number,string,null`  
      The amount of total materials billed prior to this period.
  - `previousMaterialsBilledForeignCurrency` — `number,string,null`  
      The amount of total materials billed prior to this period, in foreign currency.
  - `previousMaterials` — `number,string,null`  
      Not relevant
  - `quantity` — `number`  
      The quantity of the work completed in this period.
  - `unitPrice` — `number,string,null`  
      The unit price of the work completed in this period.
  - `unit` — `string`  
      The unit of the work completed in this period.
  - `amount` — `number,string,null`  
      The amount of the work completed in this period.
  - `materialsBilledQuantity` — `number`  
      The quantity of the materials billed in this period.
  - `materialsBilledUnitPrice` — `number,string,null`  
      The unit price of the materials billed in this period.
  - `materialsBilledUnit` — `string`  
      The unit of the materials billed in this period.
  - `materialsBilled` — `number,string,null`  
      The amount of the materials billed in this period.
  - `materialsOnStoreQuantity` — `number`  
      The quantity of the materials stored in this application.
  - `materialsOnStoreUnitPrice` — `number,string,null`  
      The unit price of the materials stored in this application.
  - `materialsOnStoreUnit` — `string`  
      The unit of the materials stored in this application.
  - `materialsOnStore` — `number,string,null`  
      The amount of the materials stored in this application.
  - `materials` — `number,string,null`  
      Not relevant
  - `currentCompletedWorkRetentionPercent` — `number`  
      Not relevant
  - `currentCompletedWorkRetention` — `number,string,null`  
      Not relevant
  - `currentCompletedWorkRetentionForeignCurrency` — `number,string,null`  
      Not relevant
  - `previousCompletedWorkRetained` — `number,string,null`  
      Not relevant
  - `previousCompletedWorkRetainedForeignCurrency` — `number,string,null`  
      Not relevant
  - `completedWorkRetainedPercent` — `number`  
      Not relevant
  - `completedWorkRetainedPercentBase` — `number`  
      Not relevant
  - `completedWorkRetainedPercentRoundingAdjust` — `number,string,null`  
      Not relevant
  - `completedWorkRetained` — `number,string,null`  
      Not relevant
  - `completedWorkReleased` — `number,string,null`  
      The retained amount of total work completed released in this period.
  - `completedWorkRetentionPercent` — `number`  
      The percentage of total work completed retained in this application.
  - `completedWorkRetention` — `number,string,null`  
      The amount of total work completed retained (pre-release) in this application. This parameter will be deprecated.
  - `currentMaterialsRetentionPercent` — `number`  
      Not relevant
  - `currentMaterialsRetention` — `number,string,null`  
      Not relevant
  - `currentMaterialsRetentionForeignCurrency` — `number,string,null`  
      Not relevant
  - `previousMaterialsRetained` — `number,string,null`  
      Not relevant
  - `previousMaterialsRetainedForeignCurrency` — `number,string,null`  
      Not relevant
  - `materialsRetainedPercent` — `number`  
      Not relevant
  - `materialsRetainedPercentBase` — `number`  
      Not relevant
  - `materialsRetainedPercentRoundingAdjust` — `number,string,null`  
      Not relevant
  - `materialsRetained` — `number,string,null`  
      The amount of the materials (stored or billed) retained in this application.
  - `materialsReleased` — `number,string,null`  
      The retained amount of the materials (stored or billed) released in this period.
  - `materialsOnStoreReleased` — `number,string,null`  
      The retained amount of the materials (stored or billed) released in this period. This parameter is deprecated, use materialsReleased.
  - `materialsOnStoreRetentionPercent` — `number`  
      The percentage of the materials retained. This parameter is deprecated, use materialsRetainedPercent.
  - `materialsRetentionPercent` — `number`  
      The percentage of the materials (stored or billed) retained (pre-release) in this application. This parameter will be deprecated, use materialsRetainedPercent.
  - `materialsRetention` — `number,string,null`  
      The amount of the materials (stored or billed) retained (pre-release) in this application. This parameter will be deprecated, use materialsRetained.
  - `previousRetained` — `number,string,null`  
      Not relevant
  - `totalRetainedPercent` — `number`  
      Not relevant
  - `totalRetained` — `number`  
      Not relevant
  - `currentRetention` — `number,string,null`  
      Not relevant
  - `currentReleased` — `number,string,null`  
      Not relevant
  - `totalRetentionPercent` — `number`  
      The percentage of total work completed and materials retained (pre-release).
  - `retainage` — `number,string,null`  
      Not relevant
  - `previousNetAmount` — `number,string,null`  
      Not relevant
  - `netAmount` — `number,string,null`  
      The net amount to be paid in this period, including work completed, materials stored or billed, retention and release.
  - `netAmountForeignCurrency` — `number,string,null`  
      The net amount to be paid in this period, in foreign currency.
  - `realizedGainOrLoss` — `number,string,null`  
      netAmountForeignCurrency / originalExchangeRate - netAmount
  - `previousClaimedQuantity` — `number`  
      The claimed quantity of total work completed prior to this period.
  - `previousClaimedUnitPrice` — `number,string,null`  
      The claimed unit price of the work completed prior to this period.
  - `previousClaimedAmount` — `number,string,null`  
      The claimed amount of the work completed prior to this period.
  - `previousClaimedAmountForeignCurrency` — `number,string,null`  
      The claimed amount of the work completed prior to this period, in foreign currency.
  - `claimedQuantity` — `number,string,null`  
      The claimed quantity of the work completed in this period.
  - `claimedUnitPrice` — `number,string,null`  
      The claimed unit price of the work completed in this period.
  - `claimedAmount` — `number,string,null`  
      The claimed amount of the work completed in this period.
  - `previousAdvanceAmount` — `number,string,null`  
      The advance amount of total work completed prior to this period.
  - `previousAdvanceAmountForeignCurrency` — `number,string,null`  
      The advance amount of total work completed prior to this period, in foreign currency.
  - `advancePercent` — `number,null`  
      The advance percent of the work completed in this period.
  - `advanceAmount` — `number,string,null`  
      The advance amount of the work completed in this period.
  - `previousRecoupmentAmount` — `number,string,null`  
      The recoupment amount of the work completed prior to this period.
  - `previousRecoupmentAmountForeignCurrency` — `number,string,null`  
      The recoupment amount of the work completed prior to this period, in foreign currency.
  - `recoupmentAmount` — `number,string,null`  
      The recoupment amount of the work completed in this period.
  - `recoupmentPercentOfCompletedWork` — `number,null`  
      The recoupment percentage of the work completed in this period.
  - `creatorId` — `string,null`  
      The user who created the payment item. This is the ID of a user managed by BIM 360 Admin.
  - `changedBy` — `string,null`  
      The user who made the change.
  - `status` — `string,null`  
      The review status the payment item. Possible values: accepted, rejected, semi-rejected, null
  - `lastReviewedBy` — `string,null`  
      The last user who made the review.
  - `hasComment` — `boolean`  
      Indicate if this payment item has comment.
  - `canDelete` — `boolean`  
      Indicate if this payment item can be deleted.
  - `isPrivate` — `boolean,null`  
      Indicate if this payment item should be exposed to owner. This is only for budget payment.
  - `aggregateBy` — `string,null`  
      The aggregate type to budget Payment application. Possible values: workCompleted, workCompletedPercentage
  - `linkedSOVId` — `string,null`  
      Not relevant
  - `bridgeInfo` — `object,null`  
      Not relevant
  - `createdAt` — `datetime: ISO 8601`  
      The date and time that the item was created, in ISO 8601 format.
  - `updatedAt` — `datetime: ISO 8601`  
      The date and time that the item was last updated, in ISO 8601 format.
  - `externalId` — `string`  
      The identifier assigned to an item in its original external ERP system. Use this ID to track and look up data within the integrated system. Note that this value comes from the item’s ID in the external system. Max length: 255
  - `externalSystem` — `string`  
      The name of the external ERP system integrated with Cost Management. Use this name to identify and search for data within the integrated system. Max length: 255
  - `externalMessage` — `string`  
      A message generated by the external ERP system that explains the sync status of the integration. For example, common values include success or fail to indicate the result of the integration operation. Max length: 255
  - `lastSyncTime` — `datetime: ISO 8601`  
      The date and time when the item was last synchronized with the external ERP system. This value is updated by the external system and is in ISO 8601 format.
  - `integrationState` — `string,null`  
      The state of the item during the integration with the external ERP system (such as SignNow). An item can be a budget, contract, main contract, main contract item, cost item, expense, expense item, change order, or schedule of value. For more details, see Integrate with External System tutorial. Possible values: locked: the item is currently locked within the ERP system, preventing modifications until unlocked. To unlock and modify the item, use the relevant PATCH endpoint to set integrationState to null. For example, for a budget, call PATCH budgets. For a contract, call PATCH contracts. For more details, see the Help documentation. integrated: the item has been successfully added to the ERP system. failed: the item encountered an error during the integration process and was not successfully added to the ERP system. For example, if a user tries to integrate contracts from an ERP system and the updates fail, the integrationState can be set to failed. Retry the sync process or analyze the issue if it continues to fail. null: The item has not been integrated with the ERP system. This is default value. For more information regarding integrations within the Cost Management system, see Integrations in Cost Management.
  - `integrationStateChangedAt` — `string,null`  
      The date and time that the item’s integration status was last changed.
  - `integrationStateChangedBy` — `string,null`  
      The user who last changed the integration status. This is the ID of a user managed by the BIM 360/Forma Admin.

## Example

```
curl -v 'https://developer.api.autodesk.com/cost/v1/containers/e94b9bc8-1775-4d76-9b1d-c613e120ccff/payment-items?limit=100&sort=name,createdAt desc' \
  -H 'Authorization: Bearer AuIPTf4KYLTYGVnOHQ0cuolwCW2a'
```

```
{
  "pagination": {
    "limit": 20,
    "offset": 0,
    "totalResults": 1,
    "nextUrl": ""
  },
  "results": [
    {
      "id": "a2e16076-d5bb-44b3-b451-fb1fb390e4fc",
      "paymentId": "18d97ae0-9484-11e8-a7ec-7ddae203e404",
      "parentId": "18d97ae0-9484-11e8-a7ec-7ddae203e404",
      "budgetId": "48934441-e392-49d7-bf58-8dea43d413ae",
      "budgetCode": "847200010330000SUB",
      "budgetFormattedCode": "8472-0001.03.30.00.0.SUB",
      "associationType": "Contract",
      "associationId": "18d97ae0-9484-11e8-a7ec-7ddae203e404",
      "name": "INSURANCE",
      "description": "The description of the payment item.",
      "position": 1,
      "exchangeRate": "1.0000",
      "originalExchangeRate": "1.0000",
      "previousExchangeRate": "1.0000",
      "originalQuantity": 100,
      "originalUnitPrice": "1000.0000",
      "originalAmount": "1000.0000",
      "budgetTransfersQuantity": 100,
      "budgetTransfersUnitPrice": "1000.0000",
      "budgetTransfers": "1000.0000",
      "previousQuantity": 2000,
      "previousUnitPrice": "1000.0000",
      "previousAmount": "1000.0000",
      "previousAmountForeignCurrency": "1000.0000",
      "previousMaterialsOnStore": "1000.0000",
      "previousMaterialsBilledQuantity": 100,
      "previousMaterialsBilledUnitPrice": "1000.0000",
      "previousMaterialsBilledUnit": "LS",
      "previousMaterialsBilled": "1000.0000",
      "previousMaterialsBilledForeignCurrency": "1000.0000",
      "previousMaterials": "1000.0000",
      "quantity": 100,
      "unitPrice": "1000.0000",
      "unit": "LS",
      "amount": "1000.0000",
      "materialsBilledQuantity": 100,
      "materialsBilledUnitPrice": "1000.0000",
      "materialsBilledUnit": "LS",
      "materialsBilled": "1000.0000",
      "materialsOnStoreQuantity": 100,
      "materialsOnStoreUnitPrice": "1000.0000",
      "materialsOnStoreUnit": "LS",
      "materialsOnStore": "1000.0000",
      "materials": "1000.0000",
      "currentCompletedWorkRetentionPercent": 0.3,
      "currentCompletedWorkRetention": "1000.0000",
      "currentCompletedWorkRetentionForeignCurrency": "1000.0000",
      "previousCompletedWorkRetained": "1000.0000",
      "previousCompletedWorkRetainedForeignCurrency": "1000.0000",
      "completedWorkRetainedPercent": 0.3,
      "completedWorkRetainedPercentBase": 0.1,
      "completedWorkRetainedPercentRoundingAdjust": "1000.0000",
      "completedWorkRetained": "1000.0000",
      "completedWorkReleased": "1000.0000",
      "completedWorkRetentionPercent": "0.3",
      "completedWorkRetention": "1000.0000",
      "currentMaterialsRetentionPercent": 0.1,
      "currentMaterialsRetention": "1000.0000",
      "currentMaterialsRetentionForeignCurrency": "1000.0000",
      "previousMaterialsRetained": "1000.0000",
      "previousMaterialsRetainedForeignCurrency": "1000.0000",
      "materialsRetainedPercent": 0.1,
      "materialsRetainedPercentBase": 0.1,
      "materialsRetainedPercentRoundingAdjust": "1000.0000",
      "materialsRetained": "1000.0000",
      "materialsReleased": "1000.0000",
      "materialsOnStoreReleased": "1000.0000",
      "materialsOnStoreRetentionPercent": "0.1",
      "materialsRetentionPercent": "0.1",
      "materialsRetention": "1000.0000",
      "previousRetained": "1000.0000",
      "totalRetainedPercent": 0.3,
      "totalRetained": "0.1",
      "currentRetention": "1000.0000",
      "currentReleased": "1000.0000",
      "totalRetentionPercent": "0.2",
      "retainage": "1000.0000",
      "previousNetAmount": "1000.0000",
      "netAmount": "1000.0000",
      "netAmountForeignCurrency": "1000.0000",
      "realizedGainOrLoss": "1000.0000",
      "previousClaimedQuantity": 100,
      "previousClaimedUnitPrice": "1000.0000",
      "previousClaimedAmount": "1000.0000",
      "previousClaimedAmountForeignCurrency": "1000.0000",
      "claimedQuantity": "1000.0000",
      "claimedUnitPrice": "1000.0000",
      "claimedAmount": "1000.0000",
      "previousAdvanceAmount": "1000.0000",
      "previousAdvanceAmountForeignCurrency": "1000.0000",
      "advancePercent": "",
      "advanceAmount": "1000.0000",
      "previousRecoupmentAmount": "1000.0000",
      "previousRecoupmentAmountForeignCurrency": "1000.0000",
      "recoupmentAmount": "1000.0000",
      "recoupmentPercentOfCompletedWork": "",
      "creatorId": "CED9LVTLHNXV",
      "changedBy": "CED9LVTLHNXV",
      "status": "rejected",
      "lastReviewedBy": "CED9LVTLHNXV",
      "hasComment": true,
      "canDelete": true,
      "isPrivate": false,
      "aggregateBy": "workCompleted",
      "linkedSOVId": "8f127780-96d6-11e8-81a8-cd51c63a9484",
      "bridgeInfo": "",
      "createdAt": "2019-01-06T01:24:22.678Z",
      "updatedAt": "2019-09-05T01:00:12.989Z",
      "externalId": "10010-99-AB",
      "externalSystem": "Sage300",
      "externalMessage": "Success.",
      "lastSyncTime": "2019-09-05T01:00:12.989Z",
      "integrationState": "locked",
      "integrationStateChangedAt": "2019-09-05T01:00:12.989Z",
      "integrationStateChangedBy": "CED9LVTLHNXV"
    }
  ]
}
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
- `GET /cost/v1/containers/{containerId}/payments` — [Retrieves payments in the given project based on the specified query criteria](./cost-payments-GET.md)
- `GET /cost/v1/containers/{containerId}/payments/{id}` — [Retrieves a payment in the given project](./cost-payments-id-GET.md)
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
원본 문서: https://aps.autodesk.com/en/docs/acc/v1/reference/http/cost-payment-items-GET
