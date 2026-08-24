---
title: "HyperlinkExtension"
url_path: reference/Extensions/HyperlinkExtension
surface: viewer-sdk
document_kind: reference
category: "Extensions"
---
# HyperlinkExtension

## new HyperlinkExtension(viewer, options)

Enhances 2D models by adding in-canvas tooltips that on click will navigate the user to another 2D or 3D model.

The extension id is: `Autodesk.Hyperlink`

### Parameters

| viewer*[Viewer3D](https://aps.autodesk.com/en/docs/viewer/v7/reference/Viewing/Viewer3D/) | Viewer instance |
| --- | --- |
| options*object | Configurations for the extension |

### Examples

```
viewer.loadExtension('Autodesk.Hyperlink')
```

# Methods

## load()

Registers the hyperlink tool that will intercept pointer events to provide hyperlinks next to specific nodes in the model.

## unload()

Unregisters the hyperlink tool.

---
원본 문서: https://aps.autodesk.com/en/docs/viewer/v7/reference/Extensions/HyperlinkExtension
