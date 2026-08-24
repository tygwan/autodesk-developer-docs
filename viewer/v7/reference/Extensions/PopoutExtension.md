---
title: "PopoutExtension"
url_path: reference/Extensions/PopoutExtension
surface: viewer-sdk
document_kind: reference
category: "Extensions"
---
# PopoutExtension

Extension to popout the viewer into child windows

The extension id is: `Autodesk.Viewing.Popout`

## new PopoutExtension(viewer, options)

### Parameters

| viewer*[Autodesk.Viewing.Viewer3D](https://aps.autodesk.com/en/docs/viewer/v7/reference/Viewing/Viewer3D/) | Viewer instance. |
| --- | --- |
| options*object | Not used. |

### Examples

```
viewer.loadExtension('Autodesk.Viewing.Popout');
```

# Methods

## load()

Extension interface method - loads the extension

### Returns

| type | description |
| --- | --- |
| boolean |   |

## unload()

Extension interface method - unloads the extension

### Returns

| type | description |
| --- | --- |
| boolean |   |

## popoutToChild(child, elementid, copyStyles, setupStyleObserver)

Use this to pop the viewer out to an existing window

### Parameters

| child*object | Already open window created with window.open() |
| --- | --- |
| elementid*string | The dom element id in the child where the viewer will be moved to |
| copyStylesboolean | Flag to copy the styles from the current window to the child. Set this to false if you intend to copy the styles yourself |
| setupStyleObserverboolean | Style observers clone dynamically added (from extensions loading) into child. This is required for extensions to work. Set this to false if you intend to set up the cloning with mutation observers yourself |

## popoutToBlank(options, onBeforeUnload, onClose, onBlocked)

Use this to pop the viewer out to a new blank window

### Parameters

| optionsobject | windowFeature options |
| --- | --- |
| onBeforeUnloadfunction | Called before the popout window is unloaded |
| onClosefunction | Called when popout window is closed |
| onBlockedfunction | Called when popup blockers block creating child window |

## popin()

Closes the popout window and moves the viewer back to the main window

---
원본 문서: https://aps.autodesk.com/en/docs/viewer/v7/reference/Extensions/PopoutExtension
