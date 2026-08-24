---
title: "ViewerSettingsExtension"
url_path: reference/Extensions/ViewerSettingsExtension
surface: viewer-sdk
document_kind: reference
category: "Extensions"
---
# ViewerSettingsExtension

## new ViewerSettingsExtension(viewer, options)

Use its `activate()` method to open the Settings UI.

The extension id is: `Autodesk.ViewerSettings`

### Parameters

| viewer*[Viewer3D](https://aps.autodesk.com/en/docs/viewer/v7/reference/Viewing/Viewer3D/) | Viewer instance |
| --- | --- |
| options*object | Configurations for the extension |

### Examples

```
viewer.loadExtension('Autodesk.ViewerSettings')
```

# Methods

## activate()

Opens the Settings UI.

## deactivate()

Closes the Settings UI.

---
원본 문서: https://aps.autodesk.com/en/docs/viewer/v7/reference/Extensions/ViewerSettingsExtension
