---
title: "ReferencesComponent"
url_path: reference/objects/referencescomponent
surface: graphql
reference_kind: object
graphql_name: "ReferencesComponent"
---
# ReferencesComponent

![object](https://developer.doc.autodesk.com/bPlouYTd/forge-aim-graphql-docs-main-695451/_images/badge_object.png)

Component that contains references of an entity

## Fields

| componentType*[ComponentType!](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/componenttype) `non-null` | Type of the component |
| --- | --- |
| references[ReferenceProperties](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/referenceproperties) | Represents information that further defines the Element (e.g. Type data) |
| filter[ReferencePropertyFilterInput](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/inputs/referencepropertyfilterinput) | Specifies which reference properties to return. |
| pagination[PaginationInput](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/inputs/paginationinput) | Specifies how to split the response into multiple pages. |

## Implements

| Usage | Used By | Description |
| --- | --- | --- |
| Interface | [ECSComponent](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/interfaces/ecscomponent) | Represents a component |

---
원본 문서: https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/referencescomponent
