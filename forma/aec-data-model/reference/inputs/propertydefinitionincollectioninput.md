---
title: "PropertyDefinitionInCollectionInput"
url_path: reference/inputs/propertydefinitionincollectioninput
surface: graphql
reference_kind: input
graphql_name: "PropertyDefinitionInCollectionInput"
---
# PropertyDefinitionInCollectionInput

![input](https://developer.doc.autodesk.com/bPlouYTd/forge-aim-graphql-docs-main-695451/_images/badge_input.png)

Input required for creating property definition.

## Fields

| name*[String!](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/scalars) `non-null` | Name for uniquely identifying a property definition. |
| --- | --- |
| specification*[String!](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/scalars) `non-null` | Specification of property definition. It represents the data type of a property definition. |
| isReadOnly[Boolean](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/scalars) | Indicates if the parameter is read-only or not in the application |
| isHidden[Boolean](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/scalars) | Indicates if the parameter is hidden or not in the application |
| isArchived[Boolean](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/scalars) | Indicates if the parameter is archived or not in the application |
| description[String](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/scalars) | A short description of the property definition. |
| shouldCopy[Boolean](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/scalars) | Specifies expected behavior for the property on document data management operation like ‘copy’ in Autodesk authoring apps. Setting it to ‘true’ will copy the property along to the new document on such operations. |

## Where Used

---
원본 문서: https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/inputs/propertydefinitionincollectioninput
