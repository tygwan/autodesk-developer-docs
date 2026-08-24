---
title: "RemoveExtensionPropertiesInput"
url_path: reference/inputs/removeextensionpropertiesinput
surface: graphql
reference_kind: input
graphql_name: "RemoveExtensionPropertiesInput"
---
# RemoveExtensionPropertiesInput

![input](https://developer.doc.autodesk.com/bPlouYTd/forge-aim-graphql-docs-main-695451/_images/badge_input.png)

Input for removing extension properties from elements.

## Fields

| targets*[[ExtensionPropertyTarget!]!](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/inputs/extensionpropertytarget) `non-null` | Ids of targets to remove extension properties from. |
| --- | --- |
| propertyDefinitionIds*[[String!]!](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/scalars) `non-null` | Extension properties to remove. |

## Where Used

| Usage | Used By | Description |
| --- | --- | --- |
| Input for Mutation | [removeExtensionPropertiesFromElements](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/mutations/removeextensionpropertiesfromelements) | Removes extension properties from elements. |

---
원본 문서: https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/inputs/removeextensionpropertiesinput
