---
title: "DistinctPropertyValues"
url_path: reference/objects/distinctpropertyvalues
surface: graphql
reference_kind: object
graphql_name: "DistinctPropertyValues"
---
# DistinctPropertyValues

![object](https://developer.doc.autodesk.com/bPlouYTd/forge-aim-graphql-docs-main-695451/_images/badge_object.png)

Contains a list of DistinctPropertyValue returned in response to a query.

## Fields

| definition[PropertyDefinition](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/propertydefinition) | Information about the Property of the distinct values returned. |
| --- | --- |
| values*[[DistinctPropertyValue!]](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/distinctpropertyvalue) `non-null` | An array of distinct property values. |
| limit[Int](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/scalars) | Limit the number of distinct values returned. Does not support pagination. Default = 200, maximum = 2000. |

## Where Used

| Usage | Used By | Description |
| --- | --- | --- |
| Query By | [distinctPropertyValuesInElementGroupById](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/queries/distinctpropertyvaluesinelementgroupbyid) | Retrieves distinct values in an ElementGroup given a property definition ID. |

---
원본 문서: https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/distinctpropertyvalues
