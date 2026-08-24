---
operation_id: cost-change-orders-changeOrder-id-GET
method: GET
path: /cost/v1/containers/{containerId}/change-orders/{changeOrder}/{id}
group: "Cost Management"
auth_context: user context required
scopes: [data:read]
surface: http
verification: docs-only
---

# Retrieves the details of a change order specified by ID

```http
GET https://developer.api.autodesk.com/cost/v1/containers/:containerId/change-orders/:changeOrder/:id
```

| | |
| --- | --- |
| **인증 컨텍스트** | user context required |
| **필요 스코프** | `data:read` |
| **데이터 포맷** | JSON |
| **그룹** | Cost Management |

Retrieves the details of a change order specified by ID.

## 요청

### URI 파라미터

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `containerId` | string: UUID |  | The ID of the project (the container ID is the same as the project ID). To obtain the project ID, see GET projects. |
| `changeOrder` | enum:string |  | The change order type. Possible values: pco, rfq, rco, oco, sco. |
| `id` | string: UUID |  | The change order’s ID. |

### 쿼리 파라미터

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `include` | array: string |  | Include nested resources in the response. For example, include=costItems will return the related cost items with the change order. include=attributes will return custom attributes which represents the “properties” in the response. Possible values: costItems, costItems[changeOrders], attributes, comments. |

### 헤더

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `Authorization` | string | **필수** | Must be Bearer <token>, where <token> is a three-legged access token obtained via an Authorization Code flow or a Secure Service Account (SSA) flow. The SSA flow is designed for headless server-to-server operations. While it functions like a two-legged flow (no user interaction), it is classified as three-legged because it preserves user context. |
| `region` | string |  | Specifies the region where the project data resides. By default, the request is routed automatically. However, specifying the region can improve performance by avoiding lookup overhead. Possible values: country or region codes such as US or EMEA. For the full list of supported regions, see the Forma Regions page. To verify your project’s region, refer to the Working with BIM 360 Services in Different Regions section on the API Basics page. |

## 응답

| 코드 | 의미 | 설명 |
| --- | --- | --- |
| `200` | OK | Success. |
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
    Unique identifier of a change order, auto generated.
- `number` — `string`  
    System-generated sequential number. Max length: 255
- `splitNumber` — `object`  
    Not relevant
  - `prefix` — `string`  
      Not relevant
  - `number` — `string`  
      Not relevant
  - `postfix` — `string`  
      Not relevant
  - `isFreeModify` — `boolean`  
      Not relevant
- `name` — `string`  
    The name of the Change Order Max length: 1024
- `description` — `string`  
    The detail description of the Change Order. Max length: 2048
- `type` — `string,null`  
    The type of the change order. It is customizable by the project admin.
- `scope` — `enum:string`  
    The scope of the change order. Possible values: out, in, tbd , budgetOnly, contingency.
- `creatorId` — `string`  
    The ID of the change order’s creator, a project user managed by BIM 360 Admin.
- `ownerId` — `string`  
    The ID of the change order’s owner, a project user managed by BIM 360 Admin.
- `changedBy` — `string`  
    The ID of the person who lastly changed the change order, a project user managed by BIM 360 Admin.
- `markupFormulaId` — `string`  
    Not relevant
- `appliedBy` — `string,null`  
    Not relevant
- `appliedAt` — `string,null`  
    Not relevant
- `budgetStatus` — `string,null`  
    The budget status of the PCO, RCO or OCO: Possible PCO statuses: [draft, open, submitted, accepted, approved, revising, executed, rejected, void]. Possible RCO statuses: [draft, open, submitted, revising, accepted, approved, executed, rejected]. Possible OCO statuses: [draft, open, inReview, submitted, revising, approved, executed, rejected]. Empty for an RFQ or SCO. The status of the change order should not be updated directly, but set by an action working on the change order.
- `costStatus` — `string,null`  
    The cost status of the PCO, RFQ, or SCO: Possible PCO statuses: [draft, open, pricing, proposed, accepted, approved, executed, revising, rejected, void]. Possible RFQ statuses: [draft, open, pricing, proposed, accepted, revising, rejected]. Possible SCO statuses: [draft, open, inReview, sent, executed]. Empty for an RCO or OCO. The status of the change order should not be updated directly, but set by an action working on the change order.
- `estimated` — `number,string,null`  
    Rough estimate of this change order without a quotation.
- `proposed` — `number,string,null`  
    The quoted cost of the change order.
- `submitted` — `number,string,null`  
    The amount sent to the owner for approval.
- `approved` — `number,string,null`  
    The amount approved by the owner.
- `committed` — `number,string,null`  
    The amount committed to the supplier.
- `quantity` — `number,null`  
    Not relevant
- `unit` — `string`  
    Not relevant
- `scopeOfWork` — `string`  
    The scope of work of the change order. Tiptap formatted rich text (https://tiptap.dev/introduction/).
- `scheduleChange` — `number,null`  
    The schedule change of the change order.
- `proposedRevisedCompletionDate` — `string,null`  
    The proposed revised completion date of the change order.
- `note` — `string`  
    The note to the change order. Tiptap formatted rich text (https://tiptap.dev/introduction/).
- `sourceId` — `string,null`  
    The ID of the source of the RFQ, ususally the PCO ID.
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
- `createdAt` — `datetime: ISO 8601`  
    The date and time that the item was created, in ISO 8601 format.
- `updatedAt` — `datetime: ISO 8601`  
    The date and time that the item was last updated, in ISO 8601 format.
- `properties` — `array: object`  
    The custom attributes of the change order.
  - `name` — `string`  
      Name of the custom attribute. Inherited from the custom attribute definition.
  - `builtIn` — `boolean`  
      A flag to indicate whether this is a pre-defined attribute or not. Inherited from the custom attribute definition.
  - `position` — `number`  
      The order of the custom attribute displayed in the BIM 360 Cost Management. Inherited from the custom attribute definition.
  - `propertyDefinitionId` — `string: UUID`  
      The ID of the custom attribute definition. This is the ID from /properties.
  - `type` — `string`  
      The type of the custom attribute. Inherited from the custom attribute definition.
  - `value` — `string`  
      The value of the custom attribute.
- `costItems` — `array: object`  
    The cost items in the change order.
  - `id` — `string`  
      The system ID of the cost item.
  - `includeMarkup` — `boolean,null`  
      Used to indicate whether the cost items amounts estimated, proposed, submitted, approved, include the markups.
- `variableMarkupFormulaItems` — `array: object`  
    The variables when apply markup formula.
  - `id` — `string`  
      The id of the markup formula item.
  - `amount` — `number,string,null`  
      The amount of the markup formula item.
- `companyId` — `string,null`  
    The BIM360/Forma ID of the company. For RFQ & SCO it’s the supplier company. For OCO and OCO it’s the owner company. For PCO, when PCO acts as RFQ it’s the supplier company, when PCO asts as RCO it’s the owner company, otherwise it’s empty.
- `companyUid` — `string,null`  
    The unique ID (UUID) of the company in this hub. Detailed company information can be retrieved using this UUID by calling GET companies/:company_id in the response.
- `architectCompanyId` — `string,null`  
    The BIM360/Forma ID of the architecture firm.
- `architectCompanyUid` — `string,null`  
    The unique ID (UUID) of the company in this hub. Detailed company information can be retrieved using this UUID by calling GET companies/:company_id in the response.
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
- `contactId` — `string,null`  
    Not relevant
- `contacts` — `array: string`  
    Not relevant
- `sourceType` — `string,null`  
    The type of entity from which the change order is created (e.g., RFI, Issue).
- `comments` — `array: object`  
    The list of comments associated with the change order.
  - `createdAt` — `string`  
      The date and time when the comment was created, in ISO 8601 format.
  - `content` — `string`  
      The text content of the comment.
  - `creatorId` — `string`  
      The BIM 360/Forma user ID of the comment’s author. For details about the author, see GET users.

## Example

```
curl -v 'https://developer.api.autodesk.com/cost/v1/containers/e94b9bc8-1775-4d76-9b1d-c613e120ccff/change-orders/pco/18d97ae0-9484-11e8-a7ec-7ddae203e404?include=include=costItems,attributes,comments' \
  -H 'Authorization: Bearer AuIPTf4KYLTYGVnOHQ0cuolwCW2a'
```

```
{
  "id": "97363960-9483-11e8-a7ec-7ddae203e404",
  "number": 1,
  "splitNumber": {
    "prefix": "INT-",
    "number": 1,
    "postfix": "-XYZ",
    "isFreeModify": false
  },
  "name": "Additional Slab Openings",
  "description": "Something about additional Slab Openings",
  "type": "Purchase Order",
  "scope": "in",
  "creatorId": "CED9LVTLHNXV",
  "ownerId": "CED9LVTLHNXV",
  "changedBy": "CED9LVTLHNXV",
  "markupFormulaId": "27634250-96df-11e8-bdd8-e9d2381ecf45",
  "appliedBy": "CED9LVTLHNXV",
  "appliedAt": "",
  "budgetStatus": "open",
  "costStatus": "open",
  "estimated": "1000.0000",
  "proposed": "1000.0000",
  "submitted": "1000.0000",
  "approved": "1000.0000",
  "committed": "1000.0000",
  "quantity": 1,
  "unit": "ls",
  "scopeOfWork": "",
  "scheduleChange": 0,
  "proposedRevisedCompletionDate": "2021-01-01",
  "note": "",
  "sourceId": "",
  "externalId": "10010-99-AB",
  "externalSystem": "Sage300",
  "externalMessage": "Success.",
  "lastSyncTime": "2019-09-05T01:00:12.989Z",
  "integrationState": "locked",
  "integrationStateChangedAt": "2019-09-05T01:00:12.989Z",
  "integrationStateChangedBy": "CED9LVTLHNXV",
  "createdAt": "2019-01-06T01:24:22.678Z",
  "updatedAt": "2019-09-05T01:00:12.989Z",
  "properties": [
    {
      "name": "Source Type",
      "builtIn": true,
      "position": 0,
      "propertyDefinitionId": "fc4a7581-7838-11e8-a467-7de33c3af32d",
      "type": "options",
      "value": "RFI"
    }
  ],
  "costItems": [
    {
      "id": "9e027d30-9483-11e8-a7ec-7ddae203e404",
      "includeMarkup": "false"
    }
  ],
  "variableMarkupFormulaItems": [
    {
      "id": "9e027d30-9483-11e8-a7ec-7ddae203e404",
      "amount": "1000.0000"
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
  "contactId": "CED9LVTLHNXV",
  "contacts": [
    "CED9LVTLHNXV"
  ],
  "sourceType": "RFI",
  "comments": [
    {
      "createdAt": "2025-06-24T11:59:47.819Z",
      "content": "Please attach the revised structural drawings before approval.",
      "creatorId": "CED9LVTLHNXV"
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
원본 문서: https://aps.autodesk.com/en/docs/acc/v1/reference/http/cost-change-orders-changeOrder-id-GET
