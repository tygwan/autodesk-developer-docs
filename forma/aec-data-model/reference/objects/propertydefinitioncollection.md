---
title: "propertyDefinitionCollection"
url_path: reference/objects/propertydefinitioncollection
surface: graphql
reference_kind: object
graphql_name: "propertyDefinitionCollection"
---
# PropertyDefinitionCollection

![object](https://developer.doc.autodesk.com/bPlouYTd/forge-aim-graphql-docs-main-695451/_images/badge_object.png)

Data object that represents property definition collection.

## Fields

| id*[ID!](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/scalars) `non-null` | The ID of this property definition collection. |
| --- | --- |
| name[String](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/scalars) | Name for this property definition collection. |
| description[String](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/scalars) | Description for this property definition collection. |
| definitions[PropertyDefinitions](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/propertydefinitions) | Get all Property Definitions of this Collection |
| filter[PropertyDefinitionFilterInput](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/inputs/propertydefinitionfilterinput) | Specifies how to filter on property definitions. |
| pagination[PaginationInput](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/inputs/paginationinput) | Specifies how to split the response into multiple pages. |

## Where Used

| Usage | Used By | Description |
| --- | --- | --- |
| Field Of | [Propertydefinition](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/propertydefinition) | Data object that represents property definition. Property definition is an object that acts as a template to create properties on an entity. |

---
원본 문서: https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/propertydefinitioncollection
