---
title: "UpdateExtensionPropertiesInput"
url_path: reference/inputs/updateextensionpropertiesinput
surface: graphql
reference_kind: input
graphql_name: "UpdateExtensionPropertiesInput"
---
# UpdateExtensionPropertiesInput

![input](https://developer.doc.autodesk.com/bPlouYTd/forge-aim-graphql-docs-main-695451/_images/badge_input.png)

Input for updating extension properties on elements.

## Fields

| targets*[[ExtensionPropertyTarget!]!](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/inputs/extensionpropertytarget) `non-null` | Ids of targets to update extension properties on. |
| --- | --- |
| properties*[[ExtensionPropertyInput!]!](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/inputs/extensionpropertyinput) `non-null` | Extension properties to update. |

## Where Used

| Usage | Used By | Description |
| --- | --- | --- |
| Input for Mutation | [updateExtensionPropertiesOnElements](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/mutations/updateextensionpropertiesonelements) | Updates extension properties on elements. |

---
원본 문서: https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/inputs/updateextensionpropertiesinput
