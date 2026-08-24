---
title: "AddExtensionPropertiesInput"
url_path: reference/inputs/addextensionpropertiesinput
surface: graphql
reference_kind: input
graphql_name: "AddExtensionPropertiesInput"
---
# AddExtensionPropertiesInput

![input](https://developer.doc.autodesk.com/bPlouYTd/forge-aim-graphql-docs-main-695451/_images/badge_input.png)

Input for adding extension properties to elements.

## Fields

| targets*[[ExtensionPropertyTarget!]!](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/inputs/extensionpropertytarget) `non-null` | Ids of targets to add extension properties on. |
| --- | --- |
| properties*[[ExtensionPropertyInput!]!](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/inputs/extensionpropertyinput) `non-null` | Extension properties to add. |

## Where Used

| Usage | Used By | Description |
| --- | --- | --- |
| Input for Mutation | [addExtensionPropertiesToElements](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/mutations/addextensionpropertiestoelements) | Adds extension properties to elements. |

---
원본 문서: https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/inputs/addextensionpropertiesinput
