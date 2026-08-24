---
title: "MinimapExtension"
url_path: reference/Extensions/MinimapExtension
surface: viewer-sdk
document_kind: reference
category: "Extensions"
---
# MinimapExtension

Provides a 2d Minimap to show the view of the current document.

The extension id is: `Autodesk.BIM360.Minimap`

## new MinimapExtension()

### Examples

```
viewer.loadExtension('Autodesk.BIM360.Minimap')
```

# Methods

## load()

Load the minimap extension.

### Returns

| type | description |
| --- | --- |
| boolean | True if minimap extension is loaded successfully. |

## unload()

Unload the minimap extension.

### Returns

| type | description |
| --- | --- |
| boolean | True if minimap extension is unloaded successfully. |

## onCameraChange(withTransition)

Occurs when camera changes

### Parameters

| withTransition*boolean | True if cameara changed with a transition. |
| --- | --- |

## destroyUI()

Destroys minimap’s UI

---
원본 문서: https://aps.autodesk.com/en/docs/viewer/v7/reference/Extensions/MinimapExtension
