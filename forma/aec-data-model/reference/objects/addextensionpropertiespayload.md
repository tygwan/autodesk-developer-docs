---
title: "AddExtensionPropertiesPayload"
url_path: reference/objects/addextensionpropertiespayload
surface: graphql
reference_kind: object
graphql_name: "AddExtensionPropertiesPayload"
---
# AddExtensionPropertiesPayload

![object](https://developer.doc.autodesk.com/bPlouYTd/forge-aim-graphql-docs-main-695451/_images/badge_object.png)

Payload for adding extension properties to elements.

## Fields

| elements*[[Element!]](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/element) `non-null` | Extension elements that were changed. |
| --- | --- |
| totalResults[Int](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/scalars) | Total number of mutated extension elements. |
| message[String](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/scalars) | Additional response details for categoryFilter-based mutations. |

## Where Used

| Usage | Used By | Description |
| --- | --- | --- |
| Mutated By | [addExtensionPropertiesToElements](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/mutations/addextensionpropertiestoelements) | Adds extension properties to elements. |

---
원본 문서: https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/addextensionpropertiespayload
