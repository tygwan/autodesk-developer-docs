---
title: "PropertiesComponent"
url_path: reference/objects/propertiescomponent
surface: graphql
reference_kind: object
graphql_name: "PropertiesComponent"
---
# PropertiesComponent

![object](https://developer.doc.autodesk.com/bPlouYTd/forge-aim-graphql-docs-main-695451/_images/badge_object.png)

Component that contains properties of an entity

## Fields

| componentType*[ComponentType!](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/componenttype) `non-null` | Type of the component |
| --- | --- |
| properties[Properties](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/properties) | Query for specific Properties |
| filter[PropertyFilterInput](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/inputs/propertyfilterinput) | Specifies which properties to return. |
| pagination[PaginationInput](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/inputs/paginationinput) | Specifies how to split the response into multiple pages. |

## Implements

| Usage | Used By | Description |
| --- | --- | --- |
| Interface | [ECSComponent](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/interfaces/ecscomponent) | Represents a component |

---
원본 문서: https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/propertiescomponent
