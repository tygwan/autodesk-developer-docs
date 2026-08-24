---
title: "VersionFilterInput"
url_path: reference/inputs/versionfilterinput
surface: graphql
reference_kind: input
graphql_name: "VersionFilterInput"
---
# VersionFilterInput

![input](https://developer.doc.autodesk.com/bPlouYTd/forge-aim-graphql-docs-main-695451/_images/badge_input.png)

Filter input for specifying version resolution behavior.

## Fields

| versionType[VersionTypeEnum](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/versiontypeenum) | Specifies which version number to use. Defaults to PUBLISHED if not provided. |
| --- | --- |

## Where Used

| Usage | Used By | Description |
| --- | --- | --- |
| Argument for Query | [elementGroupByVersionNumber](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/queries/elementgroupbyversionnumber) | Retrieves elementGroup by version number and ID. |
| Argument for Query | [elementsByElementGroupAtVersion](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/queries/elementsbyelementgroupatversion) | Retrieves elements from given elementGroup at given elementGroup version, using additional RSQL filters if provided. |
| Argument for Query | [diffElementGroupByVersionWithLatest](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/queries/diffelementgroupbyversionwithlatest) | Returns a list of element differences and their difference type from target elementGroup. |
| Argument for Query | [diffElementByVersionWithLatest](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/queries/diffelementbyversionwithlatest) | Returns the element difference from target element. |
| Argument for Field | [ElementGroupVersionHistory](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/elementgroupversionhistory) | Information related to versions of an elementGroup. |

---
원본 문서: https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/inputs/versionfilterinput
