---
title: "PaginationInput"
url_path: reference/inputs/paginationinput
surface: graphql
reference_kind: input
graphql_name: "PaginationInput"
---
# PaginationInput

![input](https://developer.doc.autodesk.com/bPlouYTd/forge-aim-graphql-docs-main-695451/_images/badge_input.png)

Specifies how to split the response into multiple pages.

## Fields

| cursor[String](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/scalars) | Specifies what page to fetch. If you don’t specify `cursor`, fetches the first page. |
| --- | --- |
| limit[Int](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/scalars) | The maximum number of items to return in a page. The default value for `limit` varies from query to query. |

## Where Used

| Usage | Used By | Description |
| --- | --- | --- |
| Argument for Query | [elementGroupsByHub](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/queries/elementgroupsbyhub) | Retrieves elementGroups in the given hub, using additional RSQL filters if provided. |
| Argument for Query | [elementGroupsByProject](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/queries/elementgroupsbyproject) | Retrieves elementGroups in the given project, using additional RSQL filters if provided. |
| Argument for Query | [elementGroupsByFolder](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/queries/elementgroupsbyfolder) | Retrieves elementGroups in the given folder, using additional RSQL filters if provided. |
| Argument for Query | [elementGroupsByFolderAndSubFolders](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/queries/elementgroupsbyfolderandsubfolders) | Retrieves elementGroups in the given folder and it’s sub-folders recursively, using additional RSQL filters if provided. |
| Argument for Query | [elementsByHub](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/queries/elementsbyhub) | Retrieves elements from given hub, using additional RSQL filters if provided. |
| Argument for Query | [elementsByProject](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/queries/elementsbyproject) | Retrieves elements from given project, using additional RSQL filters if provided. |
| Argument for Query | [elementsByFolder](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/queries/elementsbyfolder) | Retrieves elements from given folder, using additional RSQL filters if provided. |
| Argument for Query | [elementsByElementGroup](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/queries/elementsbyelementgroup) | Retrieves elements from given elementGroup, using additional RSQL filters if provided. |
| Argument for Query | [elementsByElementGroups](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/queries/elementsbyelementgroups) | Retrieves elements from a given set of elementGroups, using additional RSQL filters if provided. |
| Argument for Query | [elementsByElementGroupAtVersion](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/queries/elementsbyelementgroupatversion) | Retrieves elements from given elementGroup at given elementGroup version, using additional RSQL filters if provided. |
| Argument for Query | [hubs](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/queries/hubs) | Retrieves all hubs that match the specified criteria. A Hub is a container of projects, shared resources, and users with a common context. |
| Argument for Query | [projects](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/queries/projects) | Retrieves all projects that match the specified filter criteria from a specified hub. |
| Argument for Query | [foldersByFolder](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/queries/foldersbyfolder) | Retrieves all subfolders within a specified folder that meet the filter criteria specified by the `filter` argument. |
| Argument for Query | [foldersByProject](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/queries/foldersbyproject) | Retrieves all top level folders under a specified project that meet the filter criteria specified by the `filter` argument. |
| Argument for Field | [Element](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/element) | Represents an element type. |
| Argument for Field | [ElementGroup](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/elementgroup) | Represents a Revit model. |
| Argument for Field | [ElementGroupVersionHistory](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/elementgroupversionhistory) | Information related to versions of an elementGroup. |
| Argument for Field | [Folder](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/folder) | Represents a folder. A folder is a location for storing files, data, and other folders (sub-folders). |
| Argument for Field | [Hub](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/hub) | Represents a hub. A hub is a container of projects, shared resources, and users with a common context. |
| Argument for Field | [Project](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/project) | Represents a project. A project is a shared workspace for teams of people working together on a project, to store, organize, and manage all related entity data. |
| Argument for Field | [PropertyDefinitionCollection](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/propertydefinitioncollection) | Data object that represents property definition collection. |

---
원본 문서: https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/inputs/paginationinput
