---
title: "Circle"
url_path: reference/objects/circle
surface: graphql
reference_kind: object
graphql_name: "Circle"
---
# Circle

![object](https://developer.doc.autodesk.com/bPlouYTd/forge-aim-graphql-docs-main-695451/_images/badge_object.png)

Represents a circle geometry

## Fields

| range*[ParamRange!](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/paramrange) `non-null` | The parameter range of the circle. |
| --- | --- |
| center*[Point!](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/point) `non-null` | The center point of the circle. |
| normal*[Vector!](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/vector) `non-null` | The normal vector of the circle’s plane. |
| radius*[Point!](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/point) `non-null` | The radius of the circle. |
| type*[CurveType!](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/curvetype) `non-null` | The curve type. |

## Implements

| Usage | Used By | Description |
| --- | --- | --- |
| Interface | [Curve](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/interfaces/curve) | Interface for all curve types. |

---
원본 문서: https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/circle
