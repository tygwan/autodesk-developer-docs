---
title: "OriginComponentFilterInput"
url_path: reference/inputs/origincomponentfilterinput
surface: graphql
reference_kind: input
graphql_name: "OriginComponentFilterInput"
---
# OriginComponentFilterInput

![input](https://developer.doc.autodesk.com/bPlouYTd/forge-aim-graphql-docs-main-695451/_images/badge_input.png)

Filter input for querying elements by their origin component location and existence.

## Fields

| originRange[OriginRange](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/inputs/originrange) | Spatial area defined by start and end coordinates to filter elements within a specific 3D range |
| --- | --- |
| exists[Boolean](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/scalars) | When true, returns only elements that have origin component data; when false, returns elements without origin components |

## Where Used

| Usage | Used By | Description |
| --- | --- | --- |
| Argument for Input | [elementfilterinput](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/inputs/elementfilterinput) | Query input for filtering Elements. |

---
원본 문서: https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/inputs/origincomponentfilterinput
