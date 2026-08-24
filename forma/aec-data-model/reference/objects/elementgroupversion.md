---
title: "ElementGroupVersion"
url_path: reference/objects/elementgroupversion
surface: graphql
reference_kind: object
graphql_name: "ElementGroupVersion"
---
# ElementGroupVersion

![object](https://developer.doc.autodesk.com/bPlouYTd/forge-aim-graphql-docs-main-695451/_images/badge_object.png)

Represents a single version of an ElementGroup.

## Fields

| versionNumber[Int](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/scalars) | Published version number (lineage version). |
| --- | --- |
| wipVersionNumber[Int](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/scalars) | WIP version number from the document timeline. Null when sync is not enabled. |
| createdOn[DateTime](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/scalars) | Date and time of version creation. |
| createdBy[User](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/user) | User that created this specific version. |
| elementGroup[ElementGroup](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/elementgroup) | The ElementGroup at this version. |

## Where Used

| Usage | Used By | Description |
| --- | --- | --- |
| Field Of | [Elementgroup](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/elementgroup) | Represents a Revit model. |
| Field Of | [Elementgroupversionhistory](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/elementgroupversionhistory) | Information related to versions of an elementGroup. |

---
원본 문서: https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/elementgroupversion
