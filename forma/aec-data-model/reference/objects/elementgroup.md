---
title: "ElementGroup"
url_path: reference/objects/elementgroup
surface: graphql
reference_kind: object
graphql_name: "ElementGroup"
---
# ElementGroup

![object](https://developer.doc.autodesk.com/bPlouYTd/forge-aim-graphql-docs-main-695451/_images/badge_object.png)

Represents a Revit model.

## Fields

| id*[ID!](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/scalars) `non-null` | Globally unique identifier. |
| --- | --- |
| name[String](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/scalars) | Name of the ElementGroup Container. |
| elements*[Elements!](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/elements) `non-null` | Get Elements |
| filter[ElementFilterInput](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/inputs/elementfilterinput) | RSQL filter to use for searching elements. |
| pagination[PaginationInput](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/inputs/paginationinput) | Specifies how to split the response into multiple pages. |
| propertyDefinitions*[PropertyDefinitions!](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/propertydefinitions) `non-null` | Get all Property Definitions used in this elementGroup |
| filter[PropertyDefinitionFilterInput](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/inputs/propertydefinitionfilterinput) | Specifies how to filter on property definitions. |
| pagination[PaginationInput](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/inputs/paginationinput) | Specifies how to split the response into multiple pages. |
| version[ElementGroupVersion](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/elementgroupversion) | Specific version of this ElementGroup, null with extension group currently. |
| versionHistory*[ElementGroupVersionHistory!](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/elementgroupversionhistory) `non-null` | Version history for this elementGroup. Empty with extension group currently. |
| createdBy[User](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/user) | User responsible for creating this elementGroup |
| createdOn[DateTime](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/scalars) | Timestamp of elementGroup creation |
| lastModifiedBy[User](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/user) | Latest user who modified this elementGroup |
| lastModifiedOn[DateTime](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/scalars) | Latest timestamp when this elementGroup was modified |
| alternativeIdentifiers[ElementGroupAlternativeIdentifiers](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/elementgroupalternativeidentifiers) | Alternative identifiers for this elementGroup |
| parentFolder[Folder](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/folder) | Parent folder containing this elementGroup |

## Where Used

| Usage | Used By | Description |
| --- | --- | --- |
| Field Of | [Element](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/element) | Represents an element type. |
| Field Of | [Elementgroupextractionstatus](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/elementgroupextractionstatus) | Information about elementGroup extraction status. |
| Field Of | [Elementgroupversion](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/elementgroupversion) | Represents a single version of an ElementGroup. |
| Query By | [elementGroupAtTip](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/queries/elementgroupattip) | Retrieves latest elementGroup data based on given ID. |
| Query By | [elementGroupByVersionNumber](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/queries/elementgroupbyversionnumber) | Retrieves elementGroup by version number and ID. |

---
원본 문서: https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/elementgroup
