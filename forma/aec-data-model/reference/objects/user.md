---
title: "User"
url_path: reference/objects/user
surface: graphql
reference_kind: object
graphql_name: "User"
---
# User

![object](https://developer.doc.autodesk.com/bPlouYTd/forge-aim-graphql-docs-main-695451/_images/badge_object.png)

An object representing a User.

## Fields

| id*[ID!](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/scalars) `non-null` | The ID that uniquely identifies the User. |
| --- | --- |
| userName[String](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/scalars) | The display name of the user. |
| firstName[String](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/scalars) | The user’s first name. |
| lastName[String](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/scalars) | The user’s last name. |
| email[String](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/scalars) | The user’s email address. |
| lastModifiedOn[DateTime](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/scalars) | The date and time the user’s information was last modified. |
| createdOn[DateTime](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/scalars) | The date and time the user’s information was created. |

## Where Used

| Usage | Used By | Description |
| --- | --- | --- |
| Field Of | [Element](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/element) | Represents an element type. |
| Field Of | [Elementgroup](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/elementgroup) | Represents a Revit model. |
| Field Of | [Elementgroupversion](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/elementgroupversion) | Represents a single version of an ElementGroup. |
| Field Of | [Folder](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/folder) | Represents a folder. A folder is a location for storing files, data, and other folders (sub-folders). |

---
원본 문서: https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/user
