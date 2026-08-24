---
title: "Projects"
url_path: reference/objects/projects
surface: graphql
reference_kind: object
graphql_name: "Projects"
---
# Projects

![object](https://developer.doc.autodesk.com/bPlouYTd/forge-aim-graphql-docs-main-695451/_images/badge_object.png)

Contains a list of projects returned in response to a query.

## Fields

| pagination[Pagination](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/pagination) | Contains information about the current page, when results are split into multiple pages. |
| --- | --- |
| results*[[Project]!](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/project) `non-null` | An array that contains objects representing projects. |

## Where Used

| Usage | Used By | Description |
| --- | --- | --- |
| Field Of | [Hub](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/hub) | Represents a hub. A hub is a container of projects, shared resources, and users with a common context. |
| Query By | [projects](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/queries/projects) | Retrieves all projects that match the specified filter criteria from a specified hub. |

---
원본 문서: https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/projects
