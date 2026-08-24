---
title: "Polyline"
url_path: reference/objects/polyline
surface: graphql
reference_kind: object
graphql_name: "Polyline"
---
# Polyline

![object](https://developer.doc.autodesk.com/bPlouYTd/forge-aim-graphql-docs-main-695451/_images/badge_object.png)

Represents a polyline geometry.

## Fields

| range*[ParamRange!](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/paramrange) `non-null` | The parameter range of the Polyline. |
| --- | --- |
| points*[[Point!]!](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/point) `non-null` | The list of control points that define the polyline. |
| closed*[Boolean!](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/scalars) `non-null` | Indicates whether the polyline is closed (forms a loop). |
| type*[CurveType!](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/curvetype) `non-null` | The curve type. |

## Implements

| Usage | Used By | Description |
| --- | --- | --- |
| Interface | [Curve](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/interfaces/curve) | Interface for all curve types. |

---
원본 문서: https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/polyline
