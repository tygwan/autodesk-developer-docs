---
title: "ElementFilterInput"
url_path: reference/inputs/elementfilterinput
surface: graphql
reference_kind: input
graphql_name: "ElementFilterInput"
---
# ElementFilterInput

![input](https://developer.doc.autodesk.com/bPlouYTd/forge-aim-graphql-docs-main-695451/_images/badge_input.png)

Query input for filtering Elements.

## Fields

| query[String](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/scalars) | Filter query in RSQL format for searching elements. For more details, please refer to: [Advanced Filtering](https://aps.autodesk.com/en/docs/aecdatamodel/v1/developers_guide/filtering/advanced-filtering) |
| --- | --- |
| name[[String!]](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/scalars) | Filter for elements with a specified name |
| nameWithComparator[[ValueComparatorInput!]](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/inputs/valuecomparatorinput) | Filter for elements with a specified name and comparator to apply |
| properties[[ElementPropertyFilterInput!]](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/inputs/elementpropertyfilterinput) | Filter for elements with specified property values |
| references[[ElementReferenceFilterInput!]](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/inputs/elementreferencefilterinput) | Filter for elements with specified reference properties |
| createdBy[[String!]](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/scalars) | Filter for elements created by a specified user (email) |
| lastModifiedBy[[String!]](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/scalars) | Filter for elements last modified by a specified user (email) |
| elementId[[String!]](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/scalars) | Filter for elements by their ids |
| revitElementId[[String!]](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/scalars) | Filter for elements by their revit element ids |
| extensibilityFilter[ExtensibilityFilterInput](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/inputs/extensibilityfilterinput) | Filter for elements by their extension properties |
| originComponentFilter[OriginComponentFilterInput](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/inputs/origincomponentfilterinput) | Filter for elements by their origin component |

## Where Used

| Usage | Used By | Description |
| --- | --- | --- |
| Argument for Query | [elementsByHub](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/queries/elementsbyhub) | Retrieves elements from given hub, using additional RSQL filters if provided. |
| Argument for Query | [elementsByProject](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/queries/elementsbyproject) | Retrieves elements from given project, using additional RSQL filters if provided. |
| Argument for Query | [elementsByFolder](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/queries/elementsbyfolder) | Retrieves elements from given folder, using additional RSQL filters if provided. |
| Argument for Query | [elementsByElementGroup](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/queries/elementsbyelementgroup) | Retrieves elements from given elementGroup, using additional RSQL filters if provided. |
| Argument for Query | [elementsByElementGroups](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/queries/elementsbyelementgroups) | Retrieves elements from a given set of elementGroups, using additional RSQL filters if provided. |
| Argument for Query | [elementsByElementGroupAtVersion](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/queries/elementsbyelementgroupatversion) | Retrieves elements from given elementGroup at given elementGroup version, using additional RSQL filters if provided. |
| Argument for Query | [distinctPropertyValuesInElementGroupById](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/queries/distinctpropertyvaluesinelementgroupbyid) | Retrieves distinct values in an ElementGroup given a property definition ID. |
| Argument for Query | [distinctPropertyValuesInElementGroupByName](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/queries/distinctpropertyvaluesinelementgroupbyname) | Retrieves distinct values in an ElementGroup given a property name. |
| Argument for Field | [Element](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/element) | Represents an element type. |
| Argument for Field | [ElementGroup](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/elementgroup) | Represents a Revit model. |

---
원본 문서: https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/inputs/elementfilterinput
