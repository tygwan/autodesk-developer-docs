---
title: "DistinctPropertyValuesCollection"
url_path: reference/objects/distinctpropertyvaluescollection
surface: graphql
reference_kind: object
graphql_name: "DistinctPropertyValuesCollection"
---
# DistinctPropertyValuesCollection

![object](https://developer.doc.autodesk.com/bPlouYTd/forge-aim-graphql-docs-main-695451/_images/badge_object.png)

A collection of distinct properties matching the name given.

## Fields

| pagination[Pagination](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/pagination) | Contains information about the current page when results are split into multiple pages. |
| --- | --- |
| results*[[DistinctPropertyValues]!](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/distinctpropertyvalues) `non-null` | An array of distinct property values matching the name given. |

## Where Used

| Usage | Used By | Description |
| --- | --- | --- |
| Query By | [distinctPropertyValuesInElementGroupByName](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/queries/distinctpropertyvaluesinelementgroupbyname) | Retrieves distinct values in an ElementGroup given a property name. |

---
원본 문서: https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/distinctpropertyvaluescollection
