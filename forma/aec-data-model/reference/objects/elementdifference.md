---
title: "ElementDifference"
url_path: reference/objects/elementdifference
surface: graphql
reference_kind: object
graphql_name: "ElementDifference"
---
# ElementDifference

![object](https://developer.doc.autodesk.com/bPlouYTd/forge-aim-graphql-docs-main-695451/_images/badge_object.png)

Represents an Element Difference type

## Fields

| type[DifferenceType](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/differencetype) | The type of the difference in the element between versions |
| --- | --- |
| element[Element](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/element) | Represents the element the difference belongs to |
| differences[ComponentDifferences](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/componentdifferences) | Contains the Component Differences for the element |
| pagination[PaginationInput](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/inputs/paginationinput) | Pagination for property-level differences within the element. |

## Where Used

| Usage | Used By | Description |
| --- | --- | --- |
| Query By | [diffElementByVersionWithLatest](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/queries/diffelementbyversionwithlatest) | Returns the element difference from target element. |

---
원본 문서: https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/elementdifference
