---
title: "Element"
url_path: reference/objects/element
surface: graphql
reference_kind: object
graphql_name: "Element"
---
# Element

![object](https://developer.doc.autodesk.com/bPlouYTd/forge-aim-graphql-docs-main-695451/_images/badge_object.png)

Represents an element type.

## Fields

| id*[ID!](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/scalars) `non-null` | Globally unique identifier for an Element. |
| --- | --- |
| name*[String!](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/scalars) `non-null` | The human-readable name of the Element |
| properties*[Properties!](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/properties) `non-null` | Query for specific Properties |
| filter[PropertyFilterInput](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/inputs/propertyfilterinput) | Specifies which properties to return. |
| pagination[PaginationInput](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/inputs/paginationinput) | Specifies how to split the response into multiple pages. |
| includeReferencesProperties[String](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/scalars) | Must be set to the reference name. |
| references[ReferenceProperties](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/referenceproperties) | Represents information that further defines the Element (e.g. Type data) |
| filter[ReferencePropertyFilterInput](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/inputs/referencepropertyfilterinput) | Specifies which reference properties to return. |
| pagination[PaginationInput](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/inputs/paginationinput) | Specifies how to split the response into multiple pages. |
| createdBy[User](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/user) | User responsible for creating this element |
| createdOn[DateTime](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/scalars) | Timestamp of element creation |
| lastModifiedBy[User](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/user) | Latest user who modified the data |
| lastModifiedOn[DateTime](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/scalars) | Latest timestamp when the element was modified |
| referencedBy[Elements](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/elements) | Elements which have references to the current element |
| name*[String!](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/scalars) `non-null` | The name of relationship to find references for. |
| filter[ElementFilterInput](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/inputs/elementfilterinput) | Specifies how to filter elements with references to current element. |
| pagination[PaginationInput](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/inputs/paginationinput) | Specifies how to split the response into multiple pages. |
| alternativeIdentifiers[ElementAlternativeIdentifiers](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/elementalternativeidentifiers) | Alternative identifiers for this element |
| elementGroup[ElementGroup](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/elementgroup) | The elementGroup which this element belongs to. |
| components*[ECSComponents!](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/ecscomponents) `non-null` | General data about the element |
| filter[ComponentsFilterInput](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/inputs/componentsfilterinput) |   |
| pagination[PaginationInput](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/inputs/paginationinput) |   |

## Where Used

| Usage | Used By | Description |
| --- | --- | --- |
| Field Of | [Addextensionpropertiespayload](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/addextensionpropertiespayload) | Payload for adding extension properties to elements. |
| Field Of | [Extensioncomponent](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/extensioncomponent) | Component that links an extension to the entity it is extending. |
| Field Of | [Referenceproperty](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/referenceproperty) | A reference property which describes relationship between elements. |
| Field Of | [Removeextensionpropertiespayload](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/removeextensionpropertiespayload) | Payload for removing extension properties from elements. |
| Field Of | [Updateextensionpropertiespayload](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/updateextensionpropertiespayload) | Payload for updating extension properties on elements. |
| Query By | [elementAtTip](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/queries/elementattip) | Retrieves element using given ID. |

---
원본 문서: https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/element
