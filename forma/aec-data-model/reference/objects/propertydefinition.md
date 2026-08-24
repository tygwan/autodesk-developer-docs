---
title: "PropertyDefinition"
url_path: reference/objects/propertydefinition
surface: graphql
reference_kind: object
graphql_name: "PropertyDefinition"
---
# PropertyDefinition

![object](https://developer.doc.autodesk.com/bPlouYTd/forge-aim-graphql-docs-main-695451/_images/badge_object.png)

Data object that represents property definition.

Property definition is an object that acts as a template to create properties on an entity.

## Fields

| name*[String!](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/scalars) `non-null` | Name for this property definition. |
| --- | --- |
| specification[String](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/scalars) | Specification of the property definition. It represents the data type of a property definition. |
| units[Units](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/units) | Unit of a property definition. |
| id*[ID!](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/scalars) `non-null` | The ID of property definition. |
| description[String](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/scalars) | A short description of the property definition. |
| isHidden[Boolean](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/scalars) | Indicates if the parameter is hidden or not in the application |
| isArchived[Boolean](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/scalars) | Indicates if the parameter is archived or not. |
| isReadOnly[Boolean](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/scalars) | Indicates if the parameter is read-only or not in the application |
| shouldCopy[Boolean](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/scalars) | Specifies expected behavior for the property on document data management operation like ‘copy’ in Autodesk authoring apps. A value of ‘true’ means the property will be copied along to the new document on such operations. |
| collection[PropertyDefinitionCollection](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/propertydefinitioncollection) | Property definition collection in which this property definition is present |

## Where Used

| Usage | Used By | Description |
| --- | --- | --- |
| Field Of | [Property](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/property) | Data object that represents property. |
| Field Of | [Referenceproperty](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/referenceproperty) | A reference property which describes relationship between elements. |

---
원본 문서: https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/propertydefinition
