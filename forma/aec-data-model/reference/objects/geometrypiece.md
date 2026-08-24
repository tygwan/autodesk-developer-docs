---
title: "GeometryPiece"
url_path: reference/objects/geometrypiece
surface: graphql
reference_kind: object
graphql_name: "GeometryPiece"
---
# GeometryPiece

![object](https://developer.doc.autodesk.com/bPlouYTd/forge-aim-graphql-docs-main-695451/_images/badge_object.png)

Represents a Geometry Piece.

## Fields

| type*[GeometryComponentType!](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/geometrycomponenttype) `non-null` | The type of the geometry component. |
| --- | --- |
| geometry[GeometryPieceData](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/unions/geometrypiecedata) | The actual geometry piece data. |
| storageLengthUnit[String](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/scalars) | The storage length unit of the geometry piece. |
| transform[Transform](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/transform) | The transform of the geometry piece. |

---
원본 문서: https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/geometrypiece
