---
title: "GoHomeExtension"
url_path: reference/Extensions/GoHomeExtension
surface: viewer-sdk
document_kind: reference
category: "Extensions"
---
# GoHomeExtension

## new GoHomeExtension(viewer, options)

Use its `activate()` method to animate the camera back to its default, home view. The extension doesn’t provide any UI.

The extension id is: `Autodesk.GoHome`

### Parameters

| viewer*[Viewer3D](https://aps.autodesk.com/en/docs/viewer/v7/reference/Viewing/Viewer3D/) | Viewer instance |
| --- | --- |
| options*object | Configurations for the extension |

### Examples

```
viewer.loadExtension('Autodesk.GoHome')
```

# Methods

## activate()

Animates the camera back to its home location.

## activate()

It doesn’t do anything.

---
원본 문서: https://aps.autodesk.com/en/docs/viewer/v7/reference/Extensions/GoHomeExtension
