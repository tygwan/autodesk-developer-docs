---
title: "EventUtils"
url_path: reference/Viewing/EventUtils
surface: viewer-sdk
document_kind: reference
category: "Viewing"
---
# EventUtils

Contains static utility functions for DOM and viewer events.

## new EventUtils()

# Methods

## isRightClick(event)

### Parameters

| event*DOMEvent | A browser-triggered event |
| --- | --- |

### Returns

| type | description |
| --- | --- |
| boolean | true when the event matches a secondary-button click. |

## isMiddleClick(event)

### Parameters

| event*DOMEvent | A browser-triggered event |
| --- | --- |

### Returns

| type | description |
| --- | --- |
| boolean | true when the event matches a middle-button mouse click. |

## waitUntilTransitionEnded(viewer)

If there’s no camera transition, return immediately. Otherwise, resolve when the camera transition is finished.

### Parameters

| viewer*[Autodesk.Viewing.Viewer3D](https://aps.autodesk.com/en/docs/viewer/v7/reference/Viewing/Viewer3D/) |   |
| --- | --- |

## waitUntilGeometryLoaded(viewer)

If geometry has been loaded, return immediately. Otherwise, resolve when the geometry loaded event is fired.

### Parameters

| viewer*[Autodesk.Viewing.Viewer3D](https://aps.autodesk.com/en/docs/viewer/v7/reference/Viewing/Viewer3D/) |   |
| --- | --- |
| Model | model - Default is viewer.model, if not provided |

## waitUntilModelAdded(viewer)

If model has been already added, return immediately. Otherwise, resolve when the model is added.

### Parameters

| viewer*[Autodesk.Viewing.Viewer3D](https://aps.autodesk.com/en/docs/viewer/v7/reference/Viewing/Viewer3D/) |   |
| --- | --- |
| Model | model - Default is viewer.model, if not provided |

---
원본 문서: https://aps.autodesk.com/en/docs/viewer/v7/reference/Viewing/EventUtils
