---
title: "RemoveExtensionPropertiesPayload"
url_path: reference/objects/removeextensionpropertiespayload
surface: graphql
reference_kind: object
graphql_name: "RemoveExtensionPropertiesPayload"
---
# RemoveExtensionPropertiesPayload

![object](https://developer.doc.autodesk.com/bPlouYTd/forge-aim-graphql-docs-main-695451/_images/badge_object.png)

Payload for removing extension properties from elements.

## Fields

| elements*[[Element!]](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/element) `non-null` | Extension elements that were changed. |
| --- | --- |
| totalResults[Int](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/scalars) | Total number of mutated extension elements. |
| message[String](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/scalars) | Additional response details for categoryFilter-based mutations. |

## Where Used

| Usage | Used By | Description |
| --- | --- | --- |
| Mutated By | [removeExtensionPropertiesFromElements](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/mutations/removeextensionpropertiesfromelements) | Removes extension properties from elements. |

---
원본 문서: https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/removeextensionpropertiespayload
