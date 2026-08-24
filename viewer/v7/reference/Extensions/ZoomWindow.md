---
title: "ZoomWindow"
url_path: reference/Extensions/ZoomWindow
surface: viewer-sdk
document_kind: reference
category: "Extensions"
---
# ZoomWindow

Extends the dolly (zoom) button on the toolbar with a tool for end users to specify a rectangular section for the camera to zoom into and adjust accordingly.

The extension id is: `Autodesk.Viewing.ZoomWindow`

## new ZoomWindow()

### Examples

```
viewer.loadExtension('Autodesk.Viewing.ZoomWindow')
```

# Methods

## activate(mode)

Activates either ZoomWindow or dolly/zoom tool.

### Parameters

| modestring | Either ‘zoomwindow’ or ‘dolly’ |
| --- | --- |

## deactivate()

Deactivates the tool and resets the navigation tool.

---
원본 문서: https://aps.autodesk.com/en/docs/viewer/v7/reference/Extensions/ZoomWindow
