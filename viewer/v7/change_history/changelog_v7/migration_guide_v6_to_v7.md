---
title: "Migration Guide v6 to v7"
url_path: change_history/changelog_v7/migration_guide_v6_to_v7
surface: viewer-sdk
document_kind: changelog
category: "changelog_v7"
---
# Migration Guide v6 to v7

## Description

This guide is intended for developers who have been using `v6` and are upgrading to `v7`.

The tables indicate changes from `v6` to `v7`. Developers should review the changes and update their code based on the changes noted in `v7`. Refer to the final column for instructions and description of the changes.

The code below assumes that symbol `av` stands for `Autodesk.Viewing` namespace global variable.

## API Changes

Changes in `options` object passed into `av.Initializer(options,callback)`:

| **v6** | `var options=av.createInitializerOptions()` |   |
| --- | --- | --- |
| **v7** | `var options={env:'AutodeskProduction'};` | Developers need to create the object themselves. |

| **v6** | `options.loglevel=1` or `options.logLevel=1` |   |
| --- | --- | --- |
| **v7** | `options.logLevel=1` | Only uppercase `Level` is supported. |

`Viewer` related changes:

| **v6** | `var config3d=av.createViewerConfig()` |   |
| --- | --- | --- |
| **v7** | `var config3d={};` | Developers need to create the object themselves. Empty object yields the same result. |

| **v6** | `av.Private.GuiViewer3D` |   |
| --- | --- | --- |
| **v7** | `av.GuiViewer3D` | Class is now available from outside the Private namespace. |

| **v6** | `viewer.load` (svfURN, sharedPropertyDbPath, onSuccess, onError, acmSessionId, loadOptions) |   |
| --- | --- | --- |
| **v7** | var options = {
sharedPropertyDbPath,
acmSessionId,
loadOptions

};
`viewer.loadModel` (svfURN,options,onSuccess,onError); | Replace with new method. |

| **v6** | `viewer.loadModel(...):bool` |   |
| --- | --- | --- |
| **v7** | `viewer.loadModel(...):Promise` | The function now returns a `Promise` which resolves with the `bool` returned in v6. |

| **v6** | `viewer.isolateById(idArray)` |   |
| --- | --- | --- |
| **v7** | `viewer.isolate(idArray)` | Replace with new method. |

| **v6** | `viewer.getMemoryInfo()` |   |
| --- | --- | --- |
| **v7** | `viewer.getExtension('Autodesk.MemoryLimited').getMemoryInfo()` | Functionality has been encapsulated into an extension. |

The ViewCube apis have been moved out of `Viewer3D` instance and into the `Autodesk.ViewCubeUi` extension.

| **v6** | `viewer.displayViewCubeUI(display)` |   |
| --- | --- | --- |
| **v7** | `extension.setVisible(display);` | Functionality available in extension. |

| **v6** | `viewer.displayViewCube(display)` |   |
| --- | --- | --- |
| **v7** | `extension.displayViewCube(display);` | Functionality available in extension. |

| **v6** | `viewer.setViewCube(display)` |   |
| --- | --- | --- |
| **v7** | `extension.setViewCube(display);` | Functionality available in extension. |

| **v6** | `viewer.showViewCubeUI(show)` |   |
| --- | --- | --- |
| **v7** | `extension.setVisible(show);` | Functionality available in extension. |

| **v6** | `viewer.showViewCubeTriad(show)` |   |
| --- | --- | --- |
| **v7** | `extension.showTriad(show);` | Functionality available in extension. |

| **v6** | `viewer.displayHomeButton(show)` |   |
| --- | --- | --- |
| **v7** | `extension.displayHomeButton(show);` | Functionality available in extension. |

Changes to `Document` class:

| **v6** | `Document.getSubitemsWithProperties(...)` |   |
| --- | --- | --- |
| **v7** | `BubbleNode.search(...)` | Replaced by member function in `BubbleNode`. |

| **v6** | `getItemById(id)` |   |
| --- | --- | --- |
| **v7** | `bubbleNode.findByGuid(id)` | Replaced by member function in `BubbleNode`. |

| **v6** | `getRootItem():Object` |   |
| --- | --- | --- |
| **v7** | `bubbleNode.getRoot():BubbleNode` | Replaced by member function in `BubbleNode`. The return value also changes. Get the raw object by using `bubbleNode.data`. |

| **v6** | `getViewableItems():Array` |   |
| --- | --- | --- |
| **v7** | `bubbleNode.getRoot().findAllViewables():Array` | Replaced by member function in `BubbleNode`. Make sure to use the root node before using the function. |

| **v6** | `Document.getPropertyDbPath():string` |   |
| --- | --- | --- |
| **v7** | `Document.getFullPath(bubbleNode.getRoot().findPropertyDbPath())` | Use in case you are calling `Viewer3D.loadModel` directly and not using `Viewer3D.loadDocuementNode`, which populates the property automatically. |

Changes to `ViewingApplication` class:

| **v6** | `ViewingApplication` |   |
| --- | --- | --- |
| **v7** | `viewer.loadDocumentNode()` | The `ViewingApplication` class provided a way to keep a reference to the `Document` instance and provided methods to change the model in the scene. The class is no longer required now that the `Viewer3D` instance provides the same functionality. Refer to `loadDocumentNode()` documentation for usage details. |

If you are not ready to move out of using `ViewingApplication`, you may still continue using it with version 7 by fetching the code from `<script src=https://developer.api.autodesk.com/modelderivative/v2/viewers/7.*/legacy/ViewingApplication.js>`.

**On-Demand Loading** is the feature that allows to visualize models that require more memory than the available in the browser. The trade off is that loading times will be longer. This feature has been repackaged into the `Autodesk.MemoryLimited` extension.

| **v6** | **Enabled** by default |   |
| --- | --- | --- |
| **v7** | **Disabled** by default | To enable memory limited mode you must configure LMV to use the `Autodesk.MemoryLimited` extension
to load large SVF models on memory limited devices.
This is done by adding an object to the options you pass the Viewer3D or GuiViewer3D constructor. |

Example:

```
var config3d = {
    ...
    loaderExtensions = {
        svf: "Autodesk.MemoryLimited"
    }
}
var viewer = new av.Viewer3D(domCanvasContainer, config3d); // or
var viewer = new av.GuiViewer3D(domCanvasContainer, config3d);
```

| **v6** | `GEOMETRY_LOADED_EVENT` may include property `onDemandLoad` |   |
| --- | --- | --- |
| **v7** | `GEOMETRY_LOADED_EVENT` no longer includes property `onDemandLoad` | The event’s payload no longer contains property `onDemandLoad`. Use `getMemoryInfo()` on the `Autodesk.MemoryLimited`
extension to determine whether a model is using on demand loading. |

Detecting Toolbar creation:

| **v6** | `viewer.getToolbarPromise():Promise` |   |
| --- | --- | --- |
| **v7** | `Extension.prototype.onToolbarCreated(toolbar)` | Extensions may now override method `onToolbarCreated` to be notified when the toolbar is instantiated.
The `TOOLBAR_CREATED_EVENT` is still present without modifications. |

Animation API changes:

| **v6** | `viewer.playAnimation(callback)` |   |
| --- | --- | --- |
| **v7** | `viewer.addEventListener(av.ANIMATION_TRACK_UPDATE_EVENT, callback)`
`viewer.getExtension('Autodesk.Fusion360.Animation').play()` | Animation API is not concentrated in the `Autodesk.Fusion360.Animation` extension. |

Non-Photorealistic Rendering (NPR) changes:

| **v6** | `viewer.impl.setPostProcessParameter('style','cel')` |   |
| --- | --- | --- |
| **v7** | `viewer.loadExtension('Autodesk.NPR');`
`var ext=viewer.getExtension('Autodesk.NPR');`
`ext.setParameter('style','cel')` | Extension `Autodesk.NPR` provides the API method. |

| **v6** | `viewer.impl.preloadPostProcessStyle ('style')` |   |
| --- | --- | --- |
| **v7** | No replacement | The functionality has been folded into `ext.setParameter()`. |

`Autodesk.BIM360.Extension.PushPin` changes:

| **v6** | `extension.createItem(data)` |   |
| --- | --- | --- |
| **v7** | `extension.loadItems([data])` | Replacement wraps data into an Array. |

Moved symbols from between namespaces:

| **v6** | `av.getScreenShot()` |   |
| --- | --- | --- |
| **v7** | `av.ScreenShot.getScreenShot()` | Screenshot-related static functions have been moved into their own namespace. |

| **v6** | `av.Viewer3D.ScreenMode` |   |
| --- | --- | --- |
| **v7** | `av.ScreenMode` | Moved into the `Autodesk.Viewing` namespace. |

Function `BubbleNode.prototype.getAecModelData()` may require an additional server request to fetch the data.

| **v6** | `var aecData=bubbleNode.getAecModelData()` |   |
| --- | --- | --- |
| **v7** | `av.Document.getAecModelData(bubbleNode).then(aecData=>...)` | The addded static function in `Document` guarantees that an additional server request will be performed (when needed) before attempting to access the model’s AEC data. |

Version global variable.

| **v6** | `LMV_VIEWER_PATCH` |   |
| --- | --- | --- |
| **v7** | `LMV_VIEWER_VERSION` | The value of `LMV_VIEWER_PATCH` has been folded into `LMV_VIEWER_VERSION`, which will contain a proper Semanic Version string value. |

---
원본 문서: https://aps.autodesk.com/en/docs/viewer/v7/change_history/changelog_v7/migration_guide_v6_to_v7
