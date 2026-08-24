---
title: "FusionOrbitExtension"
url_path: reference/Extensions/FusionOrbitExtension
surface: viewer-sdk
document_kind: reference
category: "Extensions"
---
# FusionOrbitExtension

## new FusionOrbitExtension(viewer, options)

Provides a customization to the orbit tool.

The extension id is: `Autodesk.Viewing.FusionOrbit`

### Parameters

| viewer*[Viewer3D](https://aps.autodesk.com/en/docs/viewer/v7/reference/Viewing/Viewer3D/) | Viewer instance |
| --- | --- |
| options*object | Configurations for the extension |

### Examples

```
viewer.loadExtension('Autodesk.Viewing.FusionOrbit')
```

# Methods

## activate(mode)

Activates the extension’s tool.

### Parameters

| modestring | Either ‘fusionorbit’ (default) or ‘fusionfreeorbit’. |
| --- | --- |

## deactivate()

Deactivates the extension’s tool.

---
원본 문서: https://aps.autodesk.com/en/docs/viewer/v7/reference/Extensions/FusionOrbitExtension
