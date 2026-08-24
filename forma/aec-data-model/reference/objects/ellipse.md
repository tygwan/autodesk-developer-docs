---
title: "Ellipse"
url_path: reference/objects/ellipse
surface: graphql
reference_kind: object
graphql_name: "Ellipse"
---
# Ellipse

![object](https://developer.doc.autodesk.com/bPlouYTd/forge-aim-graphql-docs-main-695451/_images/badge_object.png)

Represents an Ellipse geometry

## Fields

| range*[ParamRange!](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/paramrange) `non-null` | The parameter range of the Ellipse. |
| --- | --- |
| center*[Point!](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/point) `non-null` | The center point of the Ellipse. |
| normal*[Vector!](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/vector) `non-null` | The normal vector of the Ellipse’s plane. |
| majorRadius*[Vector!](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/vector) `non-null` | The major radius vector of the Ellipse. |
| radiusRatio*[Float!](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/scalars) `non-null` | The radius ratio of the Ellipse. |
| type*[CurveType!](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/curvetype) `non-null` | The curve type. |

## Implements

| Usage | Used By | Description |
| --- | --- | --- |
| Interface | [Curve](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/interfaces/curve) | Interface for all curve types. |

---
원본 문서: https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/ellipse
