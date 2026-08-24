---
title: "ElementGroupFilterInput"
url_path: reference/inputs/elementgroupfilterinput
surface: graphql
reference_kind: input
graphql_name: "ElementGroupFilterInput"
---
# ElementGroupFilterInput

![input](https://developer.doc.autodesk.com/bPlouYTd/forge-aim-graphql-docs-main-695451/_images/badge_input.png)

Query input for filtering ElementGroups.

## Fields

| query[String](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/scalars) | Query filter in RSQL format to search for elementGroups. For more details, please refer to: [Advanced Filtering](https://aps.autodesk.com/en/docs/aecdatamodel/v1/developers_guide/filtering/advanced-filtering) |
| --- | --- |
| name[[String!]](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/scalars) | Filter for elementGroups with a specified name |
| createdBy[[String!]](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/scalars) | Filter for elementGroups created by a specified user (email) |
| lastModifiedBy[[String!]](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/scalars) | Filter for elementGroups last modified by a specified user (email) |
| fileUrn[[String!]](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/scalars) | Filter for elementGroups with a specified file URN |

## Where Used

| Usage | Used By | Description |
| --- | --- | --- |
| Argument for Query | [elementGroupsByHub](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/queries/elementgroupsbyhub) | Retrieves elementGroups in the given hub, using additional RSQL filters if provided. |
| Argument for Query | [elementGroupsByProject](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/queries/elementgroupsbyproject) | Retrieves elementGroups in the given project, using additional RSQL filters if provided. |
| Argument for Query | [elementGroupsByFolder](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/queries/elementgroupsbyfolder) | Retrieves elementGroups in the given folder, using additional RSQL filters if provided. |
| Argument for Query | [elementGroupsByFolderAndSubFolders](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/queries/elementgroupsbyfolderandsubfolders) | Retrieves elementGroups in the given folder and it’s sub-folders recursively, using additional RSQL filters if provided. |
| Argument for Field | [Project](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/project) | Represents a project. A project is a shared workspace for teams of people working together on a project, to store, organize, and manage all related entity data. |

---
원본 문서: https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/inputs/elementgroupfilterinput
