---
title: "NavToolsExtension"
url_path: reference/Extensions/NavToolsExtension
surface: viewer-sdk
document_kind: reference
category: "Extensions"
---
# NavToolsExtension

## new NavToolsExtension(viewer, options)

Adds toolbar buttons to Orbit, Pan and Dolly. It also adds camera interaction buttons for Fit to View, Focal Length and Roll

The extension id is: `Autodesk.DefaultTools.NavTools`

### Parameters

| viewer*[Viewer3D](https://aps.autodesk.com/en/docs/viewer/v7/reference/Viewing/Viewer3D/) | Viewer instance |
| --- | --- |
| options*object | Configurations for the extension |

### Examples

```
viewer.loadExtension('Autodesk.DefaultTools.NavTools')
```

# Methods

## activate(mode)

Performs the corresponding button action.

### Parameters

| mode*string | one of the supported modes, see getModes(). |
| --- | --- |

## deactivate()

Deactivates the current mode and activates the default viewer’s navigation tool.

### Returns

| type | description |
| --- | --- |
| boolean | true when deactivation is successful. |

## isActive(mode)

Checks whether a specific supported mode is currently active.

### Parameters

| mode*string | one of the supported modes. |
| --- | --- |

### Returns

| type | description |
| --- | --- |
| boolean | true is the mode queried is currently active. |

---
원본 문서: https://aps.autodesk.com/en/docs/viewer/v7/reference/Extensions/NavToolsExtension
