---
title: "SnappingExtension"
url_path: reference/Extensions/SnappingExtension
surface: viewer-sdk
document_kind: reference
category: "Extensions"
---
# SnappingExtension

Utility extension that provides access to the [Autodesk.Viewing.Extensions.Snapping.Snapper](https://aps.autodesk.com/en/docs/viewer/v7/reference/Snapping/Snapper/) tool.

The extension id is: `Autodesk.Snapping`

## new SnappingExtension(viewer, options)

### Parameters

| viewer*[Viewer3D](https://aps.autodesk.com/en/docs/viewer/v7/reference/Viewing/Viewer3D/) | Viewer instance |
| --- | --- |
| options*object | Configurations for the extension |

### Examples

```
viewer.loadExtension('Autodesk.Snapping')
```

# Methods

## load()

Load the extension.

### Returns

| type | description |
| --- | --- |
| Promise | that resolves when dependent extension finishes loading. |

## unload()

Unloads the extension. It does not unload dependent extensions.

### Returns

| type | description |
| --- | --- |
| boolean | Always returns true |

## activate()

Unused method.

### Returns

| type | description |
| --- | --- |
| boolean | Always returns true |

## deactivate()

Unused method.

### Returns

| type | description |
| --- | --- |
| boolean | Always returns false |

---
원본 문서: https://aps.autodesk.com/en/docs/viewer/v7/reference/Extensions/SnappingExtension
