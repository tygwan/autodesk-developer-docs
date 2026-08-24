---
title: "Hubs"
url_path: reference/objects/hubs
surface: graphql
reference_kind: object
graphql_name: "Hubs"
---
# Hubs

![object](https://developer.doc.autodesk.com/bPlouYTd/forge-aim-graphql-docs-main-695451/_images/badge_object.png)

Contains a list of hubs returned in response to a query.

A hub is a container of projects, shared resources, and users with a common context.

## Fields

| pagination[Pagination](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/pagination) | Contains information about the current page, when results are split into multiple pages. |
| --- | --- |
| results*[[Hub]!](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/hub) `non-null` | An array that contains objects representing hubs. |

## Where Used

| Usage | Used By | Description |
| --- | --- | --- |
| Query By | [hubs](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/queries/hubs) | Retrieves all hubs that match the specified criteria. A Hub is a container of projects, shared resources, and users with a common context. |

---
원본 문서: https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/hubs
