---
title: "Intersection"
url_path: reference/globals/TypeDefs/Intersection
surface: viewer-sdk
document_kind: reference
category: "globals"
---
# Intersection

Object that is returned by the ray cast and hit test methods for each scene object under the given canvas coordinates.

# Properties

| dbIdnumber | Internal ID of the scene object. |
| --- | --- |
| distancenumber | Distance of the intersection point from camera. All intersections returned by the ray casting method are sorted from the smallest distance to the largest. |
| faceTHREE.Face3 | THREE.Face3 object representing the triangular mesh face that has been intersected. |
| faceIndexnumber | Index of the intersected face, if available. |
| fragIdnumber | ID of Viewer SDK fragment that was intersected. |
| point[Autodesk.Viewing.Math.Vector3](https://aps.autodesk.com/en/docs/viewer/v7/reference/Math/Vector3/) | Autodesk.Viewing.Math.Vector3 point of intersection. |
| model[Autodesk.Viewing.Model](https://aps.autodesk.com/en/docs/viewer/v7/reference/Viewing/Model/) | Model instance the dbId belongs to. |

---
원본 문서: https://aps.autodesk.com/en/docs/viewer/v7/reference/globals/TypeDefs/Intersection
