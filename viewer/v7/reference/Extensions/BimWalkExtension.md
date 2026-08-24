---
title: "BimWalkExtension"
url_path: reference/Extensions/BimWalkExtension
surface: viewer-sdk
document_kind: reference
category: "Extensions"
---
# BimWalkExtension

## new BimWalkExtension(viewer, options)

First Person navigation tool, similar to those found in videogames. Supports keyboard and mouse input.

The extension id is: `Autodesk.BimWalk`

### Parameters

| viewer*[Viewer3D](https://aps.autodesk.com/en/docs/viewer/v7/reference/Viewing/Viewer3D/) | Viewer instance |
| --- | --- |
| options*object | Configurations for the extension |

### Examples

```
viewer.loadExtension('Autodesk.BimWalk')
```

# Methods

## activate()

Enables the walk tool.

## deactivate()

Deactivates the walk tool.

---
원본 문서: https://aps.autodesk.com/en/docs/viewer/v7/reference/Extensions/BimWalkExtension
