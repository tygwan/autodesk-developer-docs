---
title: "ElementGroupDifference"
url_path: reference/objects/elementgroupdifference
surface: graphql
reference_kind: object
graphql_name: "ElementGroupDifference"
---
# ElementGroupDifference

![object](https://developer.doc.autodesk.com/bPlouYTd/forge-aim-graphql-docs-main-695451/_images/badge_object.png)

Contains a list of ElementDifferences returned in response to a query.

## Fields

| result[[ElementDifference]](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/elementdifference) | An array containing ElementDifferences |
| --- | --- |
| pagination[Pagination](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/pagination) | Contains information about the current page when results are split into multiple pages. |

## Where Used

| Usage | Used By | Description |
| --- | --- | --- |
| Query By | [diffElementGroupByVersionWithLatest](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/queries/diffelementgroupbyversionwithlatest) | Returns a list of element differences and their difference type from target elementGroup. |

---
원본 문서: https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/elementgroupdifference
