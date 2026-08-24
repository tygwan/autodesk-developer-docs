---
title: "ElementPropertyFilterInput"
url_path: reference/inputs/elementpropertyfilterinput
surface: graphql
reference_kind: input
graphql_name: "ElementPropertyFilterInput"
---
# ElementPropertyFilterInput

![input](https://developer.doc.autodesk.com/bPlouYTd/forge-aim-graphql-docs-main-695451/_images/badge_input.png)

Query input for filtering Elements by their properties

## Fields

| name[String](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/scalars) | Name of the property |
| --- | --- |
| id[String](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/scalars) | ID of the property |
| value[[String!]](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/scalars) | Value that the property should have |
| valueWithComparator[[ValueComparatorInput!]](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/inputs/valuecomparatorinput) | Value that the property should have and comparator to apply |

## Where Used

| Usage | Used By | Description |
| --- | --- | --- |
| Argument for Input | [elementfilterinput](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/inputs/elementfilterinput) | Query input for filtering Elements. |

---
원본 문서: https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/inputs/elementpropertyfilterinput
