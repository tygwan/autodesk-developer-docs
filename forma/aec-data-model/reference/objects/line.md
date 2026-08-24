---
title: "Line"
url_path: reference/objects/line
surface: graphql
reference_kind: object
graphql_name: "Line"
---
# Line

![object](https://developer.doc.autodesk.com/bPlouYTd/forge-aim-graphql-docs-main-695451/_images/badge_object.png)

Represents a Line geometry

## Fields

| range*[ParamRange!](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/paramrange) `non-null` | The parameter range of the line. |
| --- | --- |
| position*[Point!](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/point) `non-null` | The position of the line. |
| direction*[Vector!](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/vector) `non-null` | The direction vector of the line. |
| type*[CurveType!](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/curvetype) `non-null` | The curve type. |

## Implements

| Usage | Used By | Description |
| --- | --- | --- |
| Interface | [Curve](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/interfaces/curve) | Interface for all curve types. |

---
원본 문서: https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/line
