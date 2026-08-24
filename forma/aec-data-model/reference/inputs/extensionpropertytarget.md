---
title: "ExtensionPropertyTarget"
url_path: reference/inputs/extensionpropertytarget
surface: graphql
reference_kind: input
graphql_name: "ExtensionPropertyTarget"
---
# ExtensionPropertyTarget

![input](https://developer.doc.autodesk.com/bPlouYTd/forge-aim-graphql-docs-main-695451/_images/badge_input.png)

Input specifying target elements and their extensionGroup to add properties in. You can target elements in one of two ways:
- **By explicit IDs**: Provide specific element IDs using the `elementIds` field
- **By category**: Filter elements by category name using the `categoryFilter` field

These options are mutually exclusive - use either `elementIds` OR `categoryFilter`, not both.

## Fields

| elementIds[[String!]](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/scalars) | Ids of target elements |
| --- | --- |
| extensionGroupId*[ID!](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/scalars) `non-null` | Id of extensionGroup which should contain extension elements |
| categoryFilter[CategoryFilterInput](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/inputs/categoryfilterinput) | Target element categories |

## Where Used

---
원본 문서: https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/inputs/extensionpropertytarget
