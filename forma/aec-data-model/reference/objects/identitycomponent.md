---
title: "IdentityComponent"
url_path: reference/objects/identitycomponent
surface: graphql
reference_kind: object
graphql_name: "IdentityComponent"
---
# IdentityComponent

![object](https://developer.doc.autodesk.com/bPlouYTd/forge-aim-graphql-docs-main-695451/_images/badge_object.png)

Component that contains identity information of an entity

## Fields

| componentType*[ComponentType!](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/componenttype) `non-null` | Type of the component |
| --- | --- |
| name*[String!](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/scalars) `non-null` | The human-readable name of the entity |
| createdBy[User](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/user) | User responsible for creating this entity |
| createdOn[DateTime](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/scalars) | Timestamp of entity creation |
| lastModifiedBy[User](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/user) | Latest user who modified the data |
| lastModifiedOn[DateTime](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/scalars) | Latest timestamp when the entity was modified |

## Implements

| Usage | Used By | Description |
| --- | --- | --- |
| Interface | [ECSComponent](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/interfaces/ecscomponent) | Represents a component |

---
원본 문서: https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/identitycomponent
