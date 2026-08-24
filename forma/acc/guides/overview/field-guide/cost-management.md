---
title: "Cost Management"
url_path: overview/field-guide/cost-management
surface: guide
---
# Cost Management API Field Guide

This section describes the key terminologies and relationships among data objects used in the BIM 360 Cost Management API, followed by known limitations in the first public release.

## Terminologies

Below are a list of key terminologies to understand the Cost Management API:

| Term | Definition |
| --- | --- |
| Container | A scope to isolate data in Cost Management, currently mapped to a BIM 360 project. |
| Budget Code Template | A template defines the schema for budget codes used in Cost Management. |
| Segment | A segment is one section of a code template, defined by its type, order, length, and delimiter. |
| Segment Value | Segment values are the codes available for use in a code template segment. |
| Budget | The budget is a breakdown of the planned cost allowances for a project. |
| Contract | A package of information that includes data such as: description of scope, specification, drawings, schedule of work items.
A general contractor sends contracts out to trade subcontractors to provide pricing. The subcontractors return prices which the general contractor evaluates to begin contract negotiations with the preferred bidders. A single contract can cover multiple budget items. |
| Main Contract | The primary contractual agreement between the general contractor and the owner of a project. |
| SOV (Schedule of Values) | A list of every item (cost or change order) in the main contract, along with each item’s value. |
| PCO (Potential Change Order) | Any event which might affect project cost. The change could be an internal change or an external change submitted to the client.
Every potential change will be a summary of detailed cost items and typically markups. |
| RFQ (Request For Quote) | The General contractor may send details of a PCO in the form of an RFQ if they require Supplier pricing input. The RFQ describes the scope of work to be estimated, assigns a due date, and provides any supporting documents such as revised drawings. It may also contain the a detailed breakdown of cost items into sub items. |
| SCO (Supplier Change Order) | An SCO contains changes to contracts or agreements between the general contractor and their subcontractors, supplier or consultants. It also contains the multiple relevant cost items. |
| RCO (Request Change Order) | An RCO requests a change in the contract between the owner and the general contractor. The general contractor typically creates the RCO and sends it to the owner. The RCO is built from one or more PCOs through their cost items. |
| OCO (Owner Change Order) | An OCO is a change order from the owner to the main contractor or construction manager. An OCO might be built from one or many change requests (RCOs) by processing the RCOs into the OCO or could be created directly from PCOs. |
| FormDefinition | A FormDefinition is the general definition of the PCO/RFQ/RCO/OCO/SCO in cost management including a type and name. It might be extended to support more change order types in the future. FormDefinitions are used as an association in defining attachments, attributes, documents, and file packages. |
| FormInstance | An instance of FormDefinition, representing a dedicated PCO/RFQ/RCO/OCO/SCO instance. |
| Cost item | A detail item that relates a budget code, a company, and units/dollars. Cost items can also be broken down into more detailed subitems.
A cost item typically won’t be created or used alone, but will instead be in a change order. The same cost item might be in different change orders, which means the cost item is in different stages. For example, if a potential change order is identified, create a PCO to document it. Adding items to the PCO creates cost items. If the PCO is processed into an RCO, the cost items will also be related to the new RCO.
Financial markups are special cost items that are generated from a predefined formula. |
| Document | Documents are generated from a predefined template (in docx format) by merging relevant PCO/RFQ/RCO/OCO/SCO data. |
| File package | In a contract, the predefined package can include multiple templates and exhibits. All these files will be packaged together in a zip file package after merging the contract data. |
| Attachment | An attachment is a local file that is uploaded from BIM 360 Cost Management to the BIM 360 DOCS hidden folder. |
| Attachment folder | An attachment folder is a special folder created in the BIM 360 DOCS hidden folder to save attachments uploaded from BIM 360 Cost Management. |
| Attributes | Customizable attributes extend a budget, contract, or any other item when you want more than the default system attributes for the item. |
| Status | Every cost item and change order has its statuses,(e.g., draft/open/submitted/accepted/approved/executed/rejected). |
| Association | Associations (associationId and associationType) are used to set up the relationship between shared data types (such as custom attributes, attachments, and statuses) and main modules (such as Budget, Contract, and Change Orders). |
| Action | Action represents the user’s action to change the status of an item. For example, the change of status in workflow from Draft to Open, and locking contract. |
| User | A member participating in the project. All user data is managed by BIM 360 Admin and referenced in BIM 360 Cost Management by an Autodesk ID. |
| Company | An organization that contributes to a project (such as a general contractor, owner, or a subcontractor). Every project member is associated with a company. All the company data is managed by BIM 360 Admin and referenced in BIM 360 Cost Management by an Autodesk ID. |
| Tax | A financial charge imposed by a government to fund public spending. Taxes can be applied to contracts, main contracts, change orders, and payments. |
| Sub Cost Item | A detailed breakdown of a cost item, structured in a hierarchical tree format. Each sub cost item is linked to a parent sub cost item, except for root-level sub cost items that have no parent. Sub cost items inherit attributes from their parent and can be categorized by type, quantity, unit price, and value. This structure enables detailed cost tracking and approval workflows. |

## Data Object Relationships

The Forma Cost API is a part of a larger set of APS APIs. To access cost data through the API you need to use other APS APIs such as the Authentication API, the Data Management API, and the Forma Admin API. The illustration below shows the relationship between different data objects in different API component groups.

Each project is assigned a container that stores all the cost data for the project. You use the container ID to access cost data. You obtain the container ID using the Data Management API.

Cost attachments are stored using the Data Management API, which is used to access Forma Data Management. The Cost module stores the reference pointer (URN) to the stored data.

User and company information that is referenced in the Cost module (e.g., contracts) is stored in the Forma Admin API.

## Performance Tracking

With performance tracking, you can see how planned and actual performance of work on a given budget affect each other with an analysis of tracked input (units of time spent) and output (units of work completed). With this knowledge, you can address labor issues on the jobsite and accurately forecast any cost impact as early as possible.

Using the Cost Management API, you create a performance _tracking item_ to represent a budget, and divide the tracking item into _tracking item instances_ that you update to reflect the work done. The instances can be divided based on differing values of any of their attributes, including the job locations at which work will be done. For more information about performance tracking, see the [Performance Tracking help page](https://help.autodesk.com/view/BUILD/ENU/?guid=Cost_Performance_Tracking).

Note that if you’ve integrated a third-party labor tracking application such as Riskcast, Rhumbix, QuickBooks Time, or ClickUp, you can use the API’s timesheets endpoints to capture periodic performance data from those applications and incorporate it into each tracking item instance automatically.

### The Basics by Example

Performance tracking starts with your budget for a particular piece of work; for example, **pouring concrete to ground beams**, for which you create a performance tracking item.

The cost of this example piece of work is divided among the tracking item instances that represent different locations. Each instance starts with the materials in cubic yards (`cy`) of concrete required to complete the work. Next you need the projected labor in hours (`hr`) required to pour the concrete. These figures must be multiplied by the cost per `cy` and the cost per `hr`, respectively, to arrive at the same _planned total cost_ using the following set of equivalencies:

`(total hours * cost/hr) = (total cubic yards * cost/cy) = planned total cost`

These terms are represented in each tracking item instance by the following Cost Management API fields:

`(inputQuantity * inputUnitPrice) = (outputQuantity * outputUnitPrice) = plannedTotal`

Note that the `plannedTotal` field is not exposed in the API, as it can be calculated from the other values. However, when you update any of these fields, you can lock the value of `plannedTotal` to prevent it from being modified by the update.

The `plannedTotal` value should be the same for both input and output. This means that both labor and materials are part of the `inputUnitPrice` (`cost/hr`). It also means that both labor and materials are part of the `outputUnitPrice` (`cost/cy`). Thus if it takes 1,000 hours to pour 2,000 cubic yards of concrete, the `inputUnitPrice` will be double the `outputUnitPrice` to produce the same `plannedTotal`. For this example, assume that you’ve determined the `inputUnitPrice` to be $50. This means that the `outputUnitPrice` must be $25:

`1,000 hr * $50/hr = 2,000 cy * $25/cy = $50,000`

### Tracked Values

For a given tracking item instance in our example, you track the number of hours worked and the number of cubic yards of concrete poured as the work progresses and as these values are reported (typically daily or weekly). In the Cost Management API, the reported values are represented in the tracking item instance by the `trackedInputQuantity` and `trackedOutputQuantity` fields.

A given reported number of hours worked (`trackedInputQuantity`) indicates what percentage of the planned hours have been used. For example:

`800` worked hours / `1,000` planned hours = `80%` of planned hours used

To be on track, the reported cubic yards of concrete poured (`trackedOutputQuantity`) should be the same percentage as the hours used. In this example, 80% of of the planned cubic yards poured is 1,600:

`1,600` poured cubic yards / `2,000` planned cubic yards = `80%` of planned cubic yards poured

However, if these tracked percentages don’t match, the work done is either behind or ahead of the plan. For example, if the `trackedOutputQuantity` value is too low (1,400 cy):

`1,400` poured cubic yards / `2,000` planned cubic yards = `70%` of planned cubic yards poured

### Adjustments

At any point in the lifespan of a given tracking item instance, if you want to forecast based on a final quantity that’s different from the original output quantity, you can override the original output quantity with an adjusted value by calling the [PATCH performance-tracking-item-instances/:id](https://aps.autodesk.com/en/docs/bim360/v1/reference/http/cost-performance-tracking-item-instances-id-PATCH/) endpoint to update the `adjustedOutputQuantity` field.

## Cost Management Webhooks

Many Cost Management endpoints trigger a _webhook event_ when, for example, a change order is created or a budget is updated.

You can use the Webhooks API to create a webhook that will notify your Cost Management application when a particular event is triggered in a specified hub or project, so your application can respond appropriately. The Webhooks service sends the notification to a callback URL that you provided when creating the webhook.

For a full list of the available events for which you can configure a webhook, see the [Cost Management Events](https://aps.autodesk.com/en/docs/webhooks/v1/reference/events/cost_management_events/) page.

For more information, see the [Webhooks API](https://aps.autodesk.com/en/docs/webhooks/v1/developers_guide/overview/) and the [Creating a Webhook and Listening to Events](https://aps.autodesk.com/en/docs/webhooks/v1/tutorials/create-a-hook-cost-management/) tutorial.

## Known Limitations
- The Cost API does not currently support setting up cost management project data, such as project settings. You need to manually set up the project before using the API.
- You cannot currently define custom attributes. We only support retrieving custom attribute definitions. We support retrieving, creating, and updating custom attribute instances, i.e., custom attributes attached to budgets, contracts, and change orders.

---
원본 문서: https://aps.autodesk.com/en/docs/acc/v1/overview/field-guide/cost-management
