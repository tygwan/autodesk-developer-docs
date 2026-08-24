---
title: "ElementGroupVersionFilterInput"
url_path: reference/inputs/elementgroupversionfilterinput
surface: graphql
reference_kind: input
graphql_name: "ElementGroupVersionFilterInput"
---
# ElementGroupVersionFilterInput

![input](https://developer.doc.autodesk.com/bPlouYTd/forge-aim-graphql-docs-main-695451/_images/badge_input.png)

Input to filter using version criteria.

## Fields

| number[Int](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/scalars) | version number to use for filtering |
| --- | --- |
| createdAfter[DateTime](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/scalars) | createdAfter datetime filter |
| createdBefore[DateTime](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/scalars) | createdBefore datetime filter |
| createdOn[DateTime](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/scalars) | createdOn datetime filter |
| createdBy[ID](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/scalars) | filter based on user who created the version |

## Where Used

| Usage | Used By | Description |
| --- | --- | --- |
| Argument for Field | [ElementGroupVersionHistory](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/elementgroupversionhistory) | Information related to versions of an elementGroup. |

---
원본 문서: https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/inputs/elementgroupversionfilterinput
