---
title: "CurveType"
url_path: reference/objects/curvetype
surface: graphql
reference_kind: object
graphql_name: "CurveType"
---
# CurveType

![enum](https://developer.doc.autodesk.com/bPlouYTd/forge-aim-graphql-docs-main-695451/_images/badge_enum.png)
Enum which represents the possible types of a Curve.

## Valid Values

| Value | Description |
| --- | --- |
| CIRCLE | Circle Type |
| LINE | Line Type |
| POLYLINE | Polyline Type |
| BCURVE | BCurve Type |
| ELLIPSE | Ellipse Type |

## Where Used

| Object/Input | Field | Description |
| --- | --- | --- |
| [BCurve](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/bcurve) | `type`. | Represents a BCurve geometry. |
| [Circle](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/circle) | `type`. | Represents a circle geometry |
| [Curve](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/scalars) | `type`. | Interface for all curve types. |
| [Ellipse](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/ellipse) | `type`. | Represents an Ellipse geometry |
| [Line](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/line) | `type`. | Represents a Line geometry |
| [Polyline](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/polyline) | `type`. | Represents a polyline geometry. |

---
원본 문서: https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/curvetype
