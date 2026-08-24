---
title: "v6 Changelog"
url_path: change_history/changelog_v6
surface: viewer-sdk
document_kind: changelog
category: "changelog_v6"
---
# V6 Changelog

## IMPORTANT

### Next major release: LMV 7.0

BREAKING CHANGES: The next major release, LMV 7.0 is expected to contain breaking changes to better accommodate upstream merges, specify new file loaders, reduce package size, and improve performance.

We strongly recommend that you specify the version of Viewer code you are using for web applications deployed in production. By including a specific version number, you can update your application as necessary to accommodate breaking changes and dictate when to migrate to the next version. To learn how to load version-specific Viewer libraries, refer to the section “Getting the Code” in [Developer’s Guide Basics](https://aps.autodesk.com/en/docs/viewer/v6/developers_guide/basics/#getting-the-code) .

## 6.6.4

_Release Date: 2019-06-12_

### Fixed
- LMV-4744 Non-photoreal Rendering causes black screen in Chrome v75

## 6.6.3

_Release Date: 2019-06-07_

### Fixed
- LMV-2958 2D annotations obscured by opaque selection highlight.

### Changed
- LMV-2958 2D selection opacity is now configurable through argument in existing Viewer API `set2dSelectionColor()`

## 6.6.2

_Release Date: 2019-06-05_

### Fixed
- LMV-4720 Hyperlinks do not work in 6.6.1

## 6.6.1

_Release Date: 2019-05-20_

### Fixed
- LMV-4634 Objects are not isolating properly in large NWD models

## 6.6.0

_Release Date: 2019-04-23_

### Changed
- LMV-4399: Section tool will now take into account the camera’s viewport during initialization

### Added
- Support for `Autodesk.AEC.LevelsExtension` on mobile platforms.
- Support for `Autodesk.BIM360.Extension.PushPin` (pushpins) and `Autodesk.PDF` (vector PDF).
- Pushpin thumbnail & screenshots enhancements.
- Method `rearrangeByPriorities` to `toolController` API.
- Handler for swipe gesture.
- LMV-4218: `config3d.modelBrowserIsolateSelectedNodes` to configure the Model Browser to isolate the selected nodes or not (default is set to not isolate it).
- `DockingPanel.bringToFront()`

### Removed
- LMV-4218: Transparent selection highlighting

### Fixed
- LMV-2958: Selection highlights for 2D are not transparent and obscured annotations
- LMV-4308: Section tool cuts plane partially if state was saved with `viewer.getState()`
- LMV-4338: Rendering of rotated images in PDF Extension
- LMV-4308: Section tool cuts plane partially after using `viewer.restoreState()`
- LMV-4150: Dialog title gets truncated
- LMV-4140: The camera cannot be tilted in first person mode if the initial point of view is looking straight down or up at the model
- LMV-4428: Reduce hitTest when mouse hovering on the canvas

## 6.5.0

_Release Date: 2019-03-04_

### Changed
- LMV-4003: To properly support models with animation, _on-demand-loading_ is _disabled_ in `viewer.loadDocumentNode()` when `Autodesk.Fusion360.Animation` is present in BubbleNode’s extensions.
- LMV-3886: UI code for the Explode slider has been moved out of `GuiViewer3D` and into extension `Autodesk.Explode`.
- LMV-4069: Settings Panel (which had been locked in a fixed location since being updated in 4.1.0) is now floating and can again be moved around the canvas.
- BLMV-3048: Code for section planes from `LevelsExtension` was moved out of `viewerState.cutplanes` and into `viewerState.floorGuid`.

### Added
- Model Browser displays child element count in parentheses. New child element countOriginal behavior ![Model Browser (latest)](https://developer.doc.autodesk.com/bPlouYTd/A360-firefly.js-docs-master-764104/_images/6.5_model_browser.JPG) ![Model Browser (earlier versions)](https://developer.doc.autodesk.com/bPlouYTd/A360-firefly.js-docs-master-764104/_images/6.4_older_model_browser.JPG)
- WebGLRenderer can now use a WebGL2 context
- LMV-4201: New methods to Fusion Animation extension `Autodesk.Fusion360.Animation` to optionally decouple cameras from animation:

`setFollowCamera(bool)`

`isFollowingCamera():bool`

When setFollowCamera(false) is invoked, playing an animation will not affect the camera state. Likewise, the animation will not stop when the user orbits the model. The default behavior remains unchanged. The UI also remains unchanged, so the feature can only be activated via javascript.
- recursive flag to viewer.setThemingColor function: `setThemingColor( dbId, color [, model [, recursive ] ] )`

|   | `dbId` | _number_ |   |   |
| --- | --- | --- | --- | --- |
|   | `color` | _THREE.Vector4_ |   | (r, g, b, intensity), all in [0,1]. |
|   | `model` | _Autodesk.Viewing.Model_ | <optional> |   |
| **NEW!** | `recursive` | _boolean_ | <optional> | Should apply theming color recursively to all child nodes. |
- LMV-3934: `model.getPropertyDb().executeUserFunction():Promise`

Allows executing user supplied function code on the worker thread against the _PropertyDatabase_ instance. The returned value from the supplied function will be used to resolve the returned Promise.

Example:

```
executeUserFunction(function userFunction(pdb) {
     var dbId = 1;
     pdb.enumObjectProperties(dbId, function(propId, valueId) {
           // do stuff
     });
})
```

Get started with the step-by-step [Property Database Queries](https://aps.autodesk.com/en/docs/viewer/v6/tutorials/propdb-queries) tutorial.
- LMV-4174: new `totalRasterPixels` property to decide when to render PDFs using the new vector renderer. (Once this property is enabled in Derivative Services,) PDF pages that contain less than about 1 megapixel of raster images will be rendered with the vector renderer; otherwise the Leaflet renderer is still used.

### Removed

None

### Fixed
- LMV-4064: Screenshot includes overlays, SAO and antialiasing
- BLMV-2790: Icons get mixed with lowercase letter font in IE/Edge
- BLMV-2918: Use DPI data embedded in markups/pushpins to scale them according to the DPI of the current version
- LMV-4131: shadow maps which were broken after 3.3
- BLMV-2978: Shift+Click selects object while selector is disabled
- LMV-3886: Explode slider doesn’t work on Android mobile devices
- LMV-4004: Improper selection color on theming colored items
- BLMV-2977: navigation lock race condition with touch devices.
- DropMeTool logic to resolve overlapping viewports
- Viewcube triad sometimes vanishes when aligned to axis
- `fitBounds` now takes into account camera rotation (roll)

## 6.4.2

_Release Date: 2019-02-06_

### Fixed
- LMV-4237: Runtime error when invoking `viewer.finish()`

## 6.4.1

_Release Date: 2019-01-23_

### Fixed
- LMV-4064: Include overlays and SAO in screen shot

## 6.4.0

_Release Date: 2019-01-22_

### Added
- LMV-4020: Danish locale support
- Leaflet support to viewer.impl.getScreenshotProgressive
- Support ghosted object in getScreenshotProgressive
- LMV-3511: Support for undo in the markups extension to automatically select the next markup item available to undo.
- Support different dpi leaflet-pdf file compare
- BIM color theme via viewer.setTheme(‘bim-theme’).
- LMV-4123: Method BubbleNode.useAsDefault():Boolean

#### CrossFadeEffects extension

CrossFade effects are an optional LMV feature that supports rendering into multiple color targets and blending between them. This addition moves the implementation from the viewer core to a new extension “CrossFadeEffects”.

The extension id is: `Autodesk.CrossFadeEffects`

Example:

```
var extName = 'Autodesk.CrossFadeEffects';
NOP_VIEWER.loadExtension(extName);

function setCameraToRoom() {
    var cam = {
       fov:          53.13010235415598,
       isPerspective:true,
       orthoScale:   6.442020414517138,
       position:     {x:-23.63091853857176, y: 0.9033896546012906, z:-4.261154219883789},
       target:       {x:-20.871083468967406, y: 6.520671770079398, z:-5.787286273399167},
       up:           {x:0.10446560472788749, y: 0.21262602957092375, z:0.9715333802694284}
    };
    NOP_VIEWER.impl.setViewFromCamera(cam, true);
}

function fadeExample() {

    // apply fade transition
    var viewer = NOP_VIEWER;
    var ext = viewer.getExtension(extName);
    ext.fadeToViewerState(setCameraToRoom, 1.5);
}
```

#### Geolocation extension

Provides functions for converting GPS coordinates in WGS-84 format { x: Longitude, y: Latitude, z: Height(m) } into
Viewer scene coordinates and back. Supports a single 3D model loaded into the scene.

The extension id is: `Autodesk.Geolocation`

Example:

`viewer.loadExtension('Autodesk.Geolocation')`

Functions:

`hasGeolocationData()`

Does the model contain geolocation data?

returns _boolean_ (true when the model contains geolocation data)

`lmvToLonLat( lmvPoint )`

Converts viewer coordinates (obtained with something like viewer.clientToWorld()) into { x: Longitude, y: Latitude, z: Height (meters) } in WGS-84 format.

returns _{THREE.Vector3}_: (GPS coordinate in WGS-84 format: { x: Longitude, y: Latitude, z: Height } )

`lonLatToLmv( lonLat )`

Converts coordinates from { x: Longitude, y: Latitude, z: Height (meters) } in WGS-84 format into viewer scene coordinates.

returns _{THREE.Vector3}_: (3D point in the scene)

`openGoogleMaps( [ pointLL84 ] )`

Returns a Google Maps URL with a PIN on the specified GPS location. When no argument is provided, the URL will use the Model’s geolocation if available.

`activate()`

Click the model to set points and see optional panel UI for testing and debugging
![Geolocation Extension](https://developer.doc.autodesk.com/bPlouYTd/A360-firefly.js-docs-master-764104/_images/geolocation_panel.png)

### Changed
- Redesigned Environments UI in Settings Panel.
- BLMV-2115: [PushPin extension] Save external IDs along with LMV IDs
- BLMV-2525: [PushPin extension] Save globalOffset to viewerState
- FloorSelector: Avoid using crossFade effects when running on mobile

### Fixed
- LMV-3606: Restore topology highlight in measure tool for Fusion models
- LMV-3196: Transparent object loses transparency and becomes opaque on focus.
- LMV-3722: Selected transparent objects become opaque when the view is orbited, panned or zoomed.
- LMV-3967: First Person extension does not properly initialize FOV from ortho view
- LMV-3975: Crash with F2D files missing rcv_offsets and rcvs property DB files
- Improve bubbleNode.search docs
- BLMV-2644: [Markups extension] Fix canvg import on IE11 and Edge
- BLMV-2685: [Pixel Compare] sensitivity of threshold
- Some PDF text characters failing to get filled
- LMV-4067: JsDocs search function
- LMV-4076: Animation scrub for opacity
- LMV-4043: DocumentBrowser extension lists an empty “folder” entry
- LMV-4133: Inconsistent appearance of Phong material with mirror transform. Backfacing normals now face the camera in this case

## Version 6.3.5

_Release Date: 2018-12-14_

### Fixed
- LMV-4075: Issue with loading models from manifests where the view-node isn’t a child of a geometry node.

## Version 6.3.4

_Release Date: 2018-12-05_

### Fixed
- LMV-4049: Issue of MarkupCore’s `renderToCanvas()` displaying upside-down.

## Version 6.3.3

_Release Date: 2018-11-27_

### Fixed
- Issue in 6.1 and later where incompatible libraries caused 2D sheets to render black. URLs for dependencies are now set to load matching versions.

## Version 6.3.2 BROKEN

_Release Date: 2018-11-26_

### Broken
- Regression error introduced in version number handling when attempting to prevent issue where incompatible libraries caused 2D sheets to render black. SEE FIX IN PATCH 6.3.3.

## Version 6.3.1

_Release Date: 2018-11-20_

### Changed
- Restore function `Autodesk.Viewing.Private.getHtmlTemplate` for compatibility.

## Version 6.3.0

_Release Date: 2018-11-19_

### Added
- LMV-3766 Support for leaflet pyramid output with missing levels

#### Autodesk.PDF extension

Prototype vector rendering loader for PDF files.

Sample code:

```
// Create Viewer instance and load PDF file on page 1
    Autodesk.Viewing.Initializer(options, function() {
        var viewer = new Autodesk.Viewing.Viewer3D(div,config3d);
        viewer.start()
        viewer.loadExtension('Autodesk.PDF').then(function() {
            // URL parameter `page` will override value passed to loadModel
            viewer.loadModel('path/to/file.pdf', { page: 1 });
        });
    });
```

#### Autodesk.DocumentBrowser extension

Toolbar button and panel for viewing all 2D and 3D models available in a JSON manifest.

![Document Browser Extension](https://developer.doc.autodesk.com/bPlouYTd/A360-firefly.js-docs-master-764104/_images/document_browser.PNG)
Document Browser Extension

#### viewer.loadDocumentNode

New model loading API:
`viewer.loadDocumentNode(lmvDocument, bubbleNode, options)`

| lmvDocument | The Document instance, which owns the model being loaded |
| --- | --- |
| bubbleNode | The specific manifest node to load (within the Document) |
| options<optional> | Options to pass to Autodesk.Viewing.Viewer3D#loadModel. Will be initialized internally if not specified. Leave empty in most cases. |

#### loadOptions

`loadOptions.skipHiddenFragments:bool` to skip initially hidden meshes

### Changed

#### Property Panel

Property Panel’s title will now display the name of the selected node.

| Properties: Older versions | Properties: 6.3 updated title |
| --- | --- |
| ![Properties - original behavior](https://developer.doc.autodesk.com/bPlouYTd/A360-firefly.js-docs-master-764104/_images/props_old.PNG) | ![Properties - 6.3 improved title](https://developer.doc.autodesk.com/bPlouYTd/A360-firefly.js-docs-master-764104/_images/props_6.3.PNG) |

#### Other:
- Default value for BlendShader’s AO opacity
- Default values for SAOShader’s radius and intensity.
- All documentation URLs referencing `forge.autodesk.com` are now referencing `forge.developer.com`
- Model loading UI will now be removed as soon as geometry is ready for rendering

### Fixed
- SplitScreen: Fix pan speed in SplitScreen when using 3 or 4 viewports
- SplitScreen: Roll tool no longer jumps when dragging across viewports
- LMV-3823: Missing `Uint8Array.prototype.slice` in IE11 while loading Leaflet PDFs
- Keep View Cube’s triad oriented correctly when top/front/etc. changes
- Incorrect selection color for wide lines
- Let `avp.ENABLE_INLINE_WORKER` be changed at run time
- LMV-3783: `viewer.clearSelection` no longer fires an event when nothing is selected

## Version 6.2.3

_Release Date: 2018-11-26_

### Fixed
- Issue in 6.1 and later where incompatible libraries caused 2D sheets to render black. URLs for dependencies are now set to load matching versions.

## Version 6.2.2

_Release Date: 2018-10-17_

### Fixed
- LMV-3726 WebVR extension not working

## Version 6.2.1

_Release Date: 2018-10-12_

### Fixed
- LMV-3809 DWFx embedded images have low resolution

## Version 6.2.0

_Release Date: 2018-09-12_

### Added

#### Probing

Extension `Autodesk.OMV` for On Machine Verification flows.

![On-machine Verification - Probing](https://developer.doc.autodesk.com/bPlouYTd/A360-firefly.js-docs-master-764104/_images/OMV_confetti.png)
Display of measurement/probe points

![Probing - Confetti setting](https://developer.doc.autodesk.com/bPlouYTd/A360-firefly.js-docs-master-764104/_images/OMV_probing_confetti_setting.png)
Setting confetti diameter

### Changed

#### Split Screen Extension

Support for up to 4 views in SplitScreenExt

![Split Screen Extension](https://developer.doc.autodesk.com/bPlouYTd/A360-firefly.js-docs-master-764104/_images/splitScreen_x4.png)
Split Screen Extension - up to 4 linked views

### Fixed
- BLMV-2463: Unable to close sub-menu. (Centers toolbar only with text-align: center)
- Incorrectly named property - RenderContext.getConfig().clearColorBottom
- BLMV-2458: Viewer runs out of memory when loading large textures
- LMV-3703: Model Browser becomes empty after unloading a non-primary model

## Version 6.1.2

_Release Date: 2018-11-26_

### Fixed
- Issue in 6.1 and later where incompatible libraries caused 2D sheets to render black. URLs for dependencies are now set to load matching versions.

## Version 6.1.1

_Release Date: 2018-08-21_

### Fixed
- LMV-3689 - Selection not working correctly

## Version 6.1.0

_Release Date: 2018-08-21_

### Changed
- MEASUREMENT_CHANGED_EVENT to contain type & id

### Added
- Handling new paper transform for 2d files.
- Support for png based leaflets
- Function `viewer.getVisibleModels()`
- Allow meta keys (CMD) to be used on mac. Applies to Markup’s copy/paste/undo/redo commands. All tools benefit from this change, too.

### Removed
- Global variable `LMV_RESOURCE_VERSION`

### Fixed
- zoomWindowTool issue on window resize
- Markup’s text input height when zooming
- iOS10 device keyboard now hides after editing a text markup
- Top right area is now clickable when viewcube is disabled (ex: 2D documents)
- “Calibration required” dialog displays as expected
- Path to markups output files in string replace
- Editing markup in IE11 (update canvg third party to address)
- Environment Background image visiblity while in 2D file compare
- Visibility of measuring axes on mobile devices
- Camera view when loading Navisworks saved views
- Bump map heuristics overwriting the specified bumpScale / “generic_bump_amount” in certain cases.
- Measure button behavior when pressing for the second time
- Duplication of focal length and edit frame elements when changing sheets
- 3D section missing capping in the view saved with a pushpin
- Text markup jumps after finishing editing on iOS
- World up tool (roll) for extension `Autodesk.SplitScreen`
- BimWalk guide missing title: Run
- Zoom tool when `Autodesk.SplitScreen` extension is active.

## Version 6.0.2

_Release Date: 2018-08-13_

### Fixed
- Filter functions for extension `Autodesk.SplitScreen`

## Version 6.0.1

_Release Date: 2018-07-25_

### Fixed
- Avoid dispatching events when `viewer.getScreenShot()` is invoked.

## Version 6.0.0

_Release Date: 2018-07-24_

**NOTE:** This release includes breaking changes described below. As a workaround, affected users may include a version number to the CDN url. Please visit [Basics](https://aps.autodesk.com/en/docs/viewer/v6/overview/basics#getting-the-code) page for details.

### Changed

#### Screenshots

BREAKING CHANGE: `getScreenShotBuffer()` has been removed.

`getScreenShot(width, height, onComplete)` has been improved to allow arbitrary sized screenshots. In addtion, the parameters are now optional (defaults to the canvas size)

| Viewer Canvas (350px x 400px) | getScreenShot () (350px x 400px) |
| --- | --- |
| ![Viewer Canvas (350 x 400)](https://developer.doc.autodesk.com/bPlouYTd/A360-firefly.js-docs-master-764104/_images/canvas.png) | ![Low Fidelity (350 x 400)](https://developer.doc.autodesk.com/bPlouYTd/A360-firefly.js-docs-master-764104/_images/lowres.png) |

| getScreenShot (3500,4000) | Blow-up of getScreenShot(3500,4000) |
| --- | --- |
| ![High Fidelity (3500 x 4000)](https://developer.doc.autodesk.com/bPlouYTd/A360-firefly.js-docs-master-764104/_images/highres.jpg) | ![Magnification](https://developer.doc.autodesk.com/bPlouYTd/A360-firefly.js-docs-master-764104/_images/blow-up.png) |

#### Other Changes
- Several performance improvements for loading PDF and 2D models.

### Added

#### API endpoints for EMEA (eu) Data Center Support

Note that in some cases you may wish to determine if the bucketKey is from EMEA or US.
Start by base64 decoding the URN, then check if it contains `urn:adsk.wipemea:xxx` (for EMEA) or `urn:adsk.wipprod:xxx` (for US).
Read more in the blog about [European data center support](https://aps.autodesk.com/blog/bim-360-docs-api-changes-access-data-european-data-center).

#### SplitScreen Extension
- Added `Autodesk.SplitScreen` extension
- Added optional params to facilitate multi-viewport rendering.
- Vertex array objects default to false on mobile devices to save memory
- `Autodesk.BIM360.Extension.PushPin` extension
- Panning with middle button when editing markup is now allowed
- Added layerOrder support
- Added `viewer.impl.cancelLeafletScreenshot()` to cancel time-consuming PDF screenshots
- More render settings can be controlled via metadata: `renderEnvironmentDisplayEdges`, `renderEnvironmentDisplayPoints` and additional parameters for `renderEnvironmentAmbientShadows`.

### Removed
- Removed `viewer.getScreenShotBuffer()`. Please use `viewer.getScreenShot()`, instead.
- `window.Hammer` removed in favor of `Autodesk.Viewing.Hammer`

### Fixed
- Fixed ray intersection fixes aggregated views
- `fragmentList.getOriginalWorldBounds()` no longer crashes in 2D
- AGD/Scalaris files without stress data are now handled properly
- Issue with text markup being cut after saving
- Issue with callbacks when ending markup creation on mobile.
- `getCameraUpVector()` case where up and direction vectors are colinear
- Issues with Moldflow visualization extension seen in _Edge/IE11_
- Inability to load certain files from `modelderivative/v2/` endpoint.

---
원본 문서: https://aps.autodesk.com/en/docs/viewer/v7/change_history/changelog_v6
