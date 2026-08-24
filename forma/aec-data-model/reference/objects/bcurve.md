---
title: "BCurve"
url_path: reference/objects/bcurve
surface: graphql
reference_kind: object
graphql_name: "BCurve"
---
# BCurve

![object](https://developer.doc.autodesk.com/bPlouYTd/forge-aim-graphql-docs-main-695451/_images/badge_object.png)

Represents a BCurve geometry.

## Fields

| range*[ParamRange!](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/paramrange) `non-null` | The parameter range of the BCurve. |
| --- | --- |
| degree*[Int!](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/scalars) `non-null` | The degree of the BCurve. |
| knots*[[Float!]!](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/scalars) `non-null` | The knots of the BCurve. |
| controlPoints*[[Point!]!](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/point) `non-null` | The control points that define the BCurve. |
| weights*[[Float!]!](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/scalars) `non-null` | The weights of the BCurve. |
| type*[CurveType!](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/curvetype) `non-null` | The curve type. |

## Implements

| Usage | Used By | Description |
| --- | --- | --- |
| Interface | [Curve](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/interfaces/curve) | Interface for all curve types. |

---
원본 문서: https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/bcurve
