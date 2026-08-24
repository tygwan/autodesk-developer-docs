---
title: "Project"
url_path: reference/objects/project
surface: graphql
reference_kind: object
graphql_name: "Project"
---
# Project

![object](https://developer.doc.autodesk.com/bPlouYTd/forge-aim-graphql-docs-main-695451/_images/badge_object.png)

Represents a project.

A project is a shared workspace for teams of people working together on a project, to store, organize, and manage all related entity data.

## Fields

| id*[ID!](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/scalars) `non-null` | The ID that uniquely identifies the project. |
| --- | --- |
| hub[Hub](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/hub) | An object representing the hub that contains this project. |
| elementGroups*[ElementGroups!](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/elementgroups) `non-null` | The ElementGroups within the project |
| filter[ElementGroupFilterInput](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/inputs/elementgroupfilterinput) | Specifies how to filter |
| pagination[PaginationInput](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/inputs/paginationinput) | Specifies how to split the response into multiple pages. |
| name[String](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/scalars) | The name of the project. |
| alternativeIdentifiers[ProjectAlternativeIdentifiers](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/projectalternativeidentifiers) | Alternative identifiers for this project |
| folders[Folders](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/folders) | The top-level folders within the project. |
| pagination[PaginationInput](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/inputs/paginationinput) | Specifies how to split the response into multiple pages. |
| filter[FolderFilterInput](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/inputs/folderfilterinput) | Specifies how to filter on folders. |

## Where Used

| Usage | Used By | Description |
| --- | --- | --- |
| Field Of | [Folder](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/folder) | Represents a folder. A folder is a location for storing files, data, and other folders (sub-folders). |
| Query By | [project](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/queries/project) | Retrieves an object representing a project from a specified hub. A project is a shared workspace for teams of people to store, organize, and manage all related design data. |
| Query By | [projectByDataManagementAPIId](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/queries/projectbydatamanagementapiid) | Retrieves an object representing a project by its external id. A project is a shared workspace for teams of people to store, organize, and manage all related design data. |

---
원본 문서: https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/project
