---
title: "Pagination"
url_path: reference/objects/pagination
surface: graphql
reference_kind: object
graphql_name: "Pagination"
---
# Pagination

![object](https://developer.doc.autodesk.com/bPlouYTd/forge-aim-graphql-docs-main-695451/_images/badge_object.png)

Contains information about the current page, when results are split into multiple pages.

## Fields

| cursor[String](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/scalars) | The address of the next page, if one exists. If the current page is the last page, `cursor` is `null`. |
| --- | --- |
| pageSize[Int](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/scalars) | The number of items in the response page. |

## Where Used

| Usage | Used By | Description |
| --- | --- | --- |
| Field Of | [Elementgroups](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/elementgroups) | Contains a list of ElementGroups returned in response to a query. |
| Field Of | [Elementgroupversions](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/elementgroupversions) | An array of versions. |
| Field Of | [Elements](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/elements) | Contains a list of Elements returned in response to a query. |
| Field Of | [Folders](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/folders) | A list of Folders returned in response to a query. A folder contains items, such as designs and sub-folders. |
| Field Of | [Hubs](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/hubs) | Contains a list of hubs returned in response to a query. A hub is a container of projects, shared resources, and users with a common context. |
| Field Of | [Projects](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/projects) | Contains a list of projects returned in response to a query. |
| Field Of | [Properties](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/properties) | Object representing list of Properties. |
| Field Of | [Propertydefinitioncollections](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/propertydefinitioncollections) | Contains a list of Property Definition Collections returned in response to a query. |
| Field Of | [Propertydefinitions](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/propertydefinitions) | List of property definitions. |
| Field Of | [Referenceproperties](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/referenceproperties) | Reference properties. |
| Field Of | [Users](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/users) | Represents pagination and result of list of users |

---
원본 문서: https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/pagination
