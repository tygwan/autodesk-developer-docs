---
title: "ElementGroupExtractionStatus"
url_path: reference/objects/elementgroupextractionstatus
surface: graphql
reference_kind: object
graphql_name: "ElementGroupExtractionStatus"
---
# ElementGroupExtractionStatus

![object](https://developer.doc.autodesk.com/bPlouYTd/forge-aim-graphql-docs-main-695451/_images/badge_object.png)

Information about elementGroup extraction status.

## Fields

| status*[ExtractionStatus!](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/extractionstatus) `non-null` | Extraction status. |
| --- | --- |
| details[String](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/scalars) | Additional information about extraction status. |
| elementGroup[ElementGroup](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/elementgroup) | If available, the ElementGroup which corresponds to the extraction. |

## Where Used

| Usage | Used By | Description |
| --- | --- | --- |
| Query By | [elementGroupExtractionStatus](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/queries/elementgroupextractionstatus) | Retrieves the extraction status of the given elementGroup. |
| Query By | [elementGroupExtractionStatusAtTip](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/queries/elementgroupextractionstatusattip) | Retrieves the extraction status for the latest version of elementGroup. |

---
원본 문서: https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/elementgroupextractionstatus
