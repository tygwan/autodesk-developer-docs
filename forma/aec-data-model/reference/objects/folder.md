---
title: "Folder"
url_path: reference/objects/folder
surface: graphql
reference_kind: object
graphql_name: "Folder"
---
# Folder

![object](https://developer.doc.autodesk.com/bPlouYTd/forge-aim-graphql-docs-main-695451/_images/badge_object.png)

Represents a folder.

A folder is a location for storing files, data, and other folders (sub-folders).

## Fields

| id*[ID!](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/scalars) `non-null` | The ID that uniquely identifies the folder. |
| --- | --- |
| project[Project](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/project) | An object representing the project that contains this folder. |
| hub[Hub](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/hub) | An object representing the hub that contains this folder. |
| parentFolder[Folder](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/folder) | The folder that contains this folder. |
| name[String](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/scalars) | A human-readable name to identify this folder. |
| createdOn[DateTime](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/scalars) | Indicates when this folder was created. |
| createdBy[User](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/user) | An object representing the user who created this folder. |
| lastModifiedOn[DateTime](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/scalars) | Indicates when this folder was most recently modified. |
| lastModifiedBy[User](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/user) | An object representing the user who made the most recent modification. |
| objectCount[Int](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/scalars) | Indicates the number items (folders and files) contained in this folder. |
| folders[Folders](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/folders) | Contains a list of folders that meet the specified filter criteria. You specify the filter criteria as an input to this field. Expand to see the inputs for this field. |
| filter[FolderFilterInput](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/inputs/folderfilterinput) | Specifies how to filter on folders. |
| pagination[PaginationInput](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/inputs/paginationinput) | Specifies how to split the response into multiple pages. |

## Where Used

| Usage | Used By | Description |
| --- | --- | --- |
| Field Of | [Elementgroup](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/elementgroup) | Represents a Revit model. |
| Field Of | [Folder](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/folder) | Represents a folder. A folder is a location for storing files, data, and other folders (sub-folders). |
| Field Of | [Folders](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/folders) | A list of Folders returned in response to a query. A folder contains items, such as designs and sub-folders. |
| Query By | [folder](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/queries/folder) | Retrieve folder specified by the provided Id |

---
원본 문서: https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/folder
