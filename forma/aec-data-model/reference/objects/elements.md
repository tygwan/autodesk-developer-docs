---
title: "Elements"
url_path: reference/objects/elements
surface: graphql
reference_kind: object
graphql_name: "Elements"
---
# Elements

![object](https://developer.doc.autodesk.com/bPlouYTd/forge-aim-graphql-docs-main-695451/_images/badge_object.png)

Contains a list of Elements returned in response to a query.

## Fields

| totalCount[Int](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/scalars) | Total count of elements found for a given query. Will only be populated for the following fields: - ‘Query.elements’ - ‘Query.elementsByElementGroup’ - ‘ElementGroup.elements’ - ‘Element.referencedBy’ |
| --- | --- |
| pagination[Pagination](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/pagination) | Contains information about the current page, when results are split into multiple pages. |
| results*[[Element]!](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/element) `non-null` | An array representing elements |

## Where Used

| Usage | Used By | Description |
| --- | --- | --- |
| Field Of | [Element](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/element) | Represents an element type. |
| Field Of | [Elementgroup](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/elementgroup) | Represents a Revit model. |
| Query By | [elementsByHub](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/queries/elementsbyhub) | Retrieves elements from given hub, using additional RSQL filters if provided. |
| Query By | [elementsByProject](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/queries/elementsbyproject) | Retrieves elements from given project, using additional RSQL filters if provided. |
| Query By | [elementsByFolder](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/queries/elementsbyfolder) | Retrieves elements from given folder, using additional RSQL filters if provided. |
| Query By | [elementsByElementGroup](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/queries/elementsbyelementgroup) | Retrieves elements from given elementGroup, using additional RSQL filters if provided. |
| Query By | [elementsByElementGroups](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/queries/elementsbyelementgroups) | Retrieves elements from a given set of elementGroups, using additional RSQL filters if provided. |
| Query By | [elementsByElementGroupAtVersion](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/queries/elementsbyelementgroupatversion) | Retrieves elements from given elementGroup at given elementGroup version, using additional RSQL filters if provided. |

---
원본 문서: https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/elements
