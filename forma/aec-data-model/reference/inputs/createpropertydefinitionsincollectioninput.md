---
title: "CreatePropertyDefinitionsInCollectionInput"
url_path: reference/inputs/createpropertydefinitionsincollectioninput
surface: graphql
reference_kind: input
graphql_name: "CreatePropertyDefinitionsInCollectionInput"
---
# CreatePropertyDefinitionsInCollectionInput

![input](https://developer.doc.autodesk.com/bPlouYTd/forge-aim-graphql-docs-main-695451/_images/badge_input.png)

Input required for creating property definitions

## Fields

| propertyDefinitionCollectionId*[ID!](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/scalars) `non-null` | The ID of property definition collection. |
| --- | --- |
| propertyDefinitionsInput*[[PropertyDefinitionInCollectionInput!]!](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/inputs/propertydefinitionincollectioninput) `non-null` | List of property definitions to be created. |

## Where Used

| Usage | Used By | Description |
| --- | --- | --- |
| Input for Mutation | [createPropertyDefinitionsInCollection](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/mutations/createpropertydefinitionsincollection) | Creates multiple property definitions in a property definition collection. |

---
원본 문서: https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/inputs/createpropertydefinitionsincollectioninput
