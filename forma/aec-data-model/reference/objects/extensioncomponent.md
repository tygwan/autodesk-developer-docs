---
title: "ExtensionComponent"
url_path: reference/objects/extensioncomponent
surface: graphql
reference_kind: object
graphql_name: "ExtensionComponent"
---
# ExtensionComponent

![object](https://developer.doc.autodesk.com/bPlouYTd/forge-aim-graphql-docs-main-695451/_images/badge_object.png)

Component that links an extension to the entity it is extending.

## Fields

| componentType*[ComponentType!](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/componenttype) `non-null` | Type of the component |
| --- | --- |
| element[Element](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/element) | Element being extended |
| elementGroup[ElementGroup](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/elementgroup) | ElementGroup being extended |

## Implements

| Usage | Used By | Description |
| --- | --- | --- |
| Interface | [ECSComponent](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/interfaces/ecscomponent) | Represents a component |

---
원본 문서: https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/extensioncomponent
