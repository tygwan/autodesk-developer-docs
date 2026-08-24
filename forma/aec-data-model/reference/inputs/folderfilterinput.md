---
title: "FolderFilterInput"
url_path: reference/inputs/folderfilterinput
surface: graphql
reference_kind: input
graphql_name: "FolderFilterInput"
---
# FolderFilterInput

![input](https://developer.doc.autodesk.com/bPlouYTd/forge-aim-graphql-docs-main-695451/_images/badge_input.png)

Specifies how to filter folders.

## Fields

| name[String](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/scalars) | The name of the item you want to match. Currently, only exact matches are supported. |
| --- | --- |

## Where Used

| Usage | Used By | Description |
| --- | --- | --- |
| Argument for Query | [foldersByFolder](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/queries/foldersbyfolder) | Retrieves all subfolders within a specified folder that meet the filter criteria specified by the `filter` argument. |
| Argument for Query | [foldersByProject](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/queries/foldersbyproject) | Retrieves all top level folders under a specified project that meet the filter criteria specified by the `filter` argument. |
| Argument for Field | [Folder](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/folder) | Represents a folder. A folder is a location for storing files, data, and other folders (sub-folders). |
| Argument for Field | [Project](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/project) | Represents a project. A project is a shared workspace for teams of people working together on a project, to store, organize, and manage all related entity data. |

---
원본 문서: https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/inputs/folderfilterinput
