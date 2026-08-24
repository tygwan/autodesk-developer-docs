---
title: "Curve"
url_path: reference/interfaces/curve
surface: graphql
reference_kind: interface
graphql_name: "Curve"
---
# Curve

![interface](https://developer.doc.autodesk.com/bPlouYTd/forge-aim-graphql-docs-main-695451/_images/badge_interface.png)

Interface for all curve types.

## Fields

| range*[ParamRange!](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/paramrange) `non-null` | The parameter range of the curve. |
| --- | --- |
| type*[CurveType!](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/curvetype) `non-null` | The type of the curve |

## Where Used

| Usage | Used By | Description |
| --- | --- | --- |
| Implemented By | [BCurve](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/bcurve) | Represents a BCurve geometry. |
| Implemented By | [Circle](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/circle) | Represents a circle geometry |
| Implemented By | [Ellipse](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/ellipse) | Represents an Ellipse geometry |
| Implemented By | [Line](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/line) | Represents a Line geometry |
| Implemented By | [Polyline](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/polyline) | Represents a polyline geometry. |

---
원본 문서: https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/interfaces/curve
