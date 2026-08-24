---
title: "VersionTypeEnum"
url_path: reference/objects/versiontypeenum
surface: graphql
reference_kind: object
graphql_name: "VersionTypeEnum"
---
# VersionTypeEnum

![enum](https://developer.doc.autodesk.com/bPlouYTd/forge-aim-graphql-docs-main-695451/_images/badge_enum.png)
Specifies whether a version number refers to a WIP (timeline) version or a PUBLISHED (lineage) version.

## Valid Values

| Value | Description |
| --- | --- |
| WIP | WIP version number from the document timeline. |
| PUBLISHED | Published (lineage) version number. |

## Where Used

| Object/Input | Field | Description |
| --- | --- | --- |
| [versionfilterinput](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/inputs/versionfilterinput) | `versionType`. | Specifies which version number to use. Defaults to PUBLISHED if not provided. |

---
원본 문서: https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/versiontypeenum
