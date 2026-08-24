---
title: "ElementGroups"
url_path: reference/objects/elementgroups
surface: graphql
reference_kind: object
graphql_name: "ElementGroups"
---
# ElementGroups

![object](https://developer.doc.autodesk.com/bPlouYTd/forge-aim-graphql-docs-main-695451/_images/badge_object.png)

Contains a list of ElementGroups returned in response to a query.

## Fields

| pagination[Pagination](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/pagination) | Contains information about the current page when results are split into multiple pages. |
| --- | --- |
| results*[[ElementGroup]!](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/elementgroup) `non-null` | An array containing ElementGroups |

## Where Used

| Usage | Used By | Description |
| --- | --- | --- |
| Field Of | [Project](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/project) | Represents a project. A project is a shared workspace for teams of people working together on a project, to store, organize, and manage all related entity data. |
| Query By | [elementGroupsByHub](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/queries/elementgroupsbyhub) | Retrieves elementGroups in the given hub, using additional RSQL filters if provided. |
| Query By | [elementGroupsByProject](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/queries/elementgroupsbyproject) | Retrieves elementGroups in the given project, using additional RSQL filters if provided. |
| Query By | [elementGroupsByFolder](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/queries/elementgroupsbyfolder) | Retrieves elementGroups in the given folder, using additional RSQL filters if provided. |
| Query By | [elementGroupsByFolderAndSubFolders](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/queries/elementgroupsbyfolderandsubfolders) | Retrieves elementGroups in the given folder and it’s sub-folders recursively, using additional RSQL filters if provided. |

---
원본 문서: https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/elementgroups
