---
title: "SnapResult"
url_path: reference/MeasureCommon/SnapResult
surface: viewer-sdk
document_kind: reference
category: "MeasureCommon"
---
# SnapResult

## new SnapResult()

Encapsulates the result of a Snap operation performed by the [Snapper](https://aps.autodesk.com/en/docs/viewer/v7/reference/Snapping/Snapper/).

# Methods

## clear()

Resets the object to its non-snapping state.

## copyTo(destiny)

Copies the current state of the object into another.

### Parameters

| destiny*[SnapResult](https://aps.autodesk.com/en/docs/viewer/v7/reference/MeasureCommon/SnapResult/) | target for the copy operation. |
| --- | --- |

## clone()

Creates a new instance and copies the current state into it.

### Returns

| type | description |
| --- | --- |
| [SnapResult](https://aps.autodesk.com/en/docs/viewer/v7/reference/MeasureCommon/SnapResult/) |   |

## isEmpty()

### Returns

| type | description |
| --- | --- |
| boolean | true only when snapping information is available. |

## getFace()

Gets the snapped face, when available.

## getEdge()

Gets the snapped edge, when available.

## getVertex()

Gets the snapped vertex, when available.

## getGeometry()

Gets the snapped element, which differs depending on what kind of element it was snapped to, see SnapType.

---
원본 문서: https://aps.autodesk.com/en/docs/viewer/v7/reference/MeasureCommon/SnapResult
