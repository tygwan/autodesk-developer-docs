---
title: "Folders"
url_path: reference/objects/folders
surface: graphql
reference_kind: object
graphql_name: "Folders"
---
# Folders

![object](https://developer.doc.autodesk.com/bPlouYTd/forge-aim-graphql-docs-main-695451/_images/badge_object.png)

A list of Folders returned in response to a query.

A folder contains items, such as designs and sub-folders.

## Fields

| pagination[Pagination](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/pagination) | Contains information about the current page, when results are split into multiple pages. |
| --- | --- |
| results*[[Folder!]](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/folder) `non-null` | An array that contains objects representing items. |

## Where Used

| Usage | Used By | Description |
| --- | --- | --- |
| Field Of | [Folder](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/folder) | Represents a folder. A folder is a location for storing files, data, and other folders (sub-folders). |
| Field Of | [Project](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/project) | Represents a project. A project is a shared workspace for teams of people working together on a project, to store, organize, and manage all related entity data. |
| Query By | [foldersByFolder](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/queries/foldersbyfolder) | Retrieves all subfolders within a specified folder that meet the filter criteria specified by the `filter` argument. |
| Query By | [foldersByProject](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/queries/foldersbyproject) | Retrieves all top level folders under a specified project that meet the filter criteria specified by the `filter` argument. |

---
원본 문서: https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/folders
