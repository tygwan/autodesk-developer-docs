---
title: "Hub"
url_path: reference/objects/hub
surface: graphql
reference_kind: object
graphql_name: "Hub"
---
# Hub

![object](https://developer.doc.autodesk.com/bPlouYTd/forge-aim-graphql-docs-main-695451/_images/badge_object.png)

Represents a hub.

A hub is a container of projects, shared resources, and users with a common context.

## Fields

| id*[ID!](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/scalars) `non-null` | The ID that uniquely identifies the hub. |
| --- | --- |
| name[String](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/scalars) | A human-readable name to identify the hub. |
| projects[Projects](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/projects) | Contains a list of projects within the specified hub. Expand to see the inputs for this field. |
| filter[ProjectFilterInput](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/inputs/projectfilterinput) | Specifies how to filter a list of projects. You can filter by name. |
| pagination[PaginationInput](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/inputs/paginationinput) | Specifies how to split the response into multiple pages. |
| alternativeIdentifiers[HubAlternativeIdentifiers](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/hubalternativeidentifiers) | Alternative identifiers for this hub |

## Where Used

| Usage | Used By | Description |
| --- | --- | --- |
| Field Of | [Folder](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/folder) | Represents a folder. A folder is a location for storing files, data, and other folders (sub-folders). |
| Field Of | [Project](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/project) | Represents a project. A project is a shared workspace for teams of people working together on a project, to store, organize, and manage all related entity data. |
| Query By | [hub](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/queries/hub) | Retrieves an object representing a hub. A Hub is a container of projects, shared resources, and users with a common context. |
| Query By | [hubByDataManagementAPIId](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/queries/hubbydatamanagementapiid) | Retrieves an object representing a hub by its external id. A Hub is a container of projects, shared resources, and users with a common context. |

---
원본 문서: https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/hub
