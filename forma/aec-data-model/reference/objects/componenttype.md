---
title: "ComponentType"
url_path: reference/objects/componenttype
surface: graphql
reference_kind: object
graphql_name: "ComponentType"
---
# ComponentType

![enum](https://developer.doc.autodesk.com/bPlouYTd/forge-aim-graphql-docs-main-695451/_images/badge_enum.png)
Enum which represents the possible types of a component

## Valid Values

| Value | Description |
| --- | --- |
| IDENTITY | Identify component |
| PROPERTIES | Properties component |
| REFERENCES | References component |
| ELEMENT_ALTERNATIVE_REPRESENTATIONS | Element alternative representations component |
| BODY_REPRESENTATION | Body representation component |
| ORIGIN | Origin component |
| AXIS | Axis representation component |
| EXTENSION | Extension component |

## Where Used

| Object/Input | Field | Description |
| --- | --- | --- |
| [AxisRepresentationComponent](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/axisrepresentationcomponent) | `componentType`. | Represents the Axis Representation Component which contains a curve defining the axis. |
| [BodyRepresentationComponent](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/bodyrepresentationcomponent) | `componentType`. | Component that contains body representation of an entity. |
| [ECSComponent](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/interfaces/ecscomponent) | `componentType`. | Represents a component |
| [ElementAlternativeIdentifiersComponent](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/elementalternativeidentifierscomponent) | `componentType`. | Component that contains alternative identifiers of an element |
| [ExtensionComponent](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/extensioncomponent) | `componentType`. | Component that links an extension to the entity it is extending. |
| [IdentityComponent](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/identitycomponent) | `componentType`. | Component that contains identity information of an entity |
| [OriginComponent](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/origincomponent) | `componentType`. | Represents the Origin Component which contains the origin point of the element. |
| [PropertiesComponent](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/propertiescomponent) | `componentType`. | Component that contains properties of an entity |
| [ReferencesComponent](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/referencescomponent) | `componentType`. | Component that contains references of an entity |
| [componentsfilterinput](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/inputs/componentsfilterinput) | `types`. | Types of components |

---
원본 문서: https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/componenttype
