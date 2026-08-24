---
title: "FullScreenExtension"
url_path: reference/Extensions/FullScreenExtension
surface: viewer-sdk
document_kind: reference
category: "Extensions"
---
# FullScreenExtension

## new FullScreenExtension(viewer, options)

**Deprecated: This extension is deprecated and will be removed in a future release.**

Use its `activate()` method to enter fullscreen mode. It performs the same action as the toolbar’s fullscreen button.

The extension id is: `Autodesk.FullScreen`

### Parameters

| viewer*[Viewer3D](https://aps.autodesk.com/en/docs/viewer/v7/reference/Viewing/Viewer3D/) | Viewer instance |
| --- | --- |
| options*object | Configurations for the extension |

### Examples

```
viewer.loadExtension('Autodesk.FullScreen')
```

# Methods

## load()

Loads the extension.

### Returns

| type | description |
| --- | --- |
| boolean | True if the load was successful. |

## activate()

Enters fullscreen mode.

## deactivate()

Exits fullscreen mode.

---
원본 문서: https://aps.autodesk.com/en/docs/viewer/v7/reference/Extensions/FullScreenExtension
