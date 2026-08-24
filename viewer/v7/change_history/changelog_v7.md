---
title: "v7 Changelog"
url_path: change_history/changelog_v7
surface: viewer-sdk
document_kind: changelog
category: "changelog_v7"
---
# V7 Changelog

## 7.126.0

_Release Date: 08/19/2026_

## 7.125.1 (internal only)

_Release Date: 08/07/2026_

## 7.125.0

_Release Date: 08/07/2026_

### Fixed
- Fixed a crash when using section planes on models with Prism materials under the WebGPU renderer.

## 7.124.4

_Release Date: 08/03/2026_

## 7.124.3

_Release Date: 07/30/2026_

## 7.124.2

_Release Date: 07/24/2026_

### Fixed
- Minor bugfix

## 7.124.1

_Release Date: 07/23/2026_

### Changed
- Improved speed with which the Render Budget adapts.

## 7.124.0

_Release Date: 07/22/2026_

### Added
- Exposed the WebGPU rendering backend as a public feature flag. Enabled by default, but users need to activate WebGPU rendering in the settings.
- Added `Model.getObjectTreeAsync()` promise wrapper for `getObjectTree()`.

### Changed
- The viewer now loads model derivatives from the modern APS API endpoint (`api.aps.autodesk.com`) instead of `developer.api.autodesk.com`. If your application restricts network access with an allowlist, make sure `api.aps.autodesk.com` is permitted.
- Improved frame time estimations to better maintain target FPS

### Fixed
- Fixed rendering of objects being brighter in overlays than in mainpass.

## 7.123.1 (internal only)

_Release Date: 07/16/2026_

## 7.123.0 (internal only)

_Release Date: 07/08/2026_

### Added
- Added a `NotificationManager` extension for centralized user-facing notifications.
- Issue pushpins can no longer be created or moved onto point cloud models; a not-allowed cursor and tooltip are shown when attempting to do so.
- Added public `Autodesk.Viewing.ObjectTree` API for querying the model object tree.

### Changed
- Moved POINT_RENDERING preference to Pref3D. Pref.POINT_RENDERING is deprecated.
- Deprecated `Prefs.POINT_RENDERING` in favor of `Prefs3D.POINT_RENDERING`. Point rendering is now a 3D-only preference and no longer applies to 2D models.
- WebGPU renderer available to all users by default. Has to be activated in the settings.

### Fixed
- Fixed rendering of instances with transparent UnlitMaterials in WebGPU

## 7.122.2 (internal only)

_Release Date: 07/16/2026_

## 7.122.1 (internal only)

_Release Date: 07/06/2026_

### Fixed
- Fixed rendering of instances with transparent UnlitMaterials in WebGPU
- Fixed correctness and scheduling of progressive transparency in WebGPU

## 7.122.0

_Release Date: 06/25/2026_

### Added
- Added a “Constant line width” setting for PDF documents (WebGPU only).

### Changed
- Deprecated `Autodesk.Viewing.Private.InstanceTree` use `Autodesk.Viewing.ObjectTree` instead.
- Deprecated `Model.getInstanceTree()`; use `Model.getObjectTree()` instead.
- Replaced THREE math types with equivalents from Autodesk.Viewing.Math
- Deprecated the following extensions; loading them now logs a deprecation warning to the console and they will be removed in a future release: `Autodesk.BIM360.GestureDocumentNavigation`, `Autodesk.FullScreen`, `Autodesk.NPR`.

### Fixed
- Fixed malformed rendering of meshes with 32bit index buffers using the Large Model Experience.

## 7.121.1 (internal only)

_Release Date: 06/18/2026_

## 7.121.0 (internal only)

_Release Date: 06/10/2026_

### Added
- Filter extension can resolve aggregate lineage references in property queries when `projectId` is provided.
- Add support for US Survey Feet as a measurement and display unit.

## 7.120.1

_Release Date: 06/03/2026_

### Fixed
- Fixed a crash when opening the alignment panel for SVF1 models with a world-up rotation.
- Fixed an exception and loading never finishing on models with vertex colors in WebGL

## 7.120.0

_Release Date: 06/03/2026_

### Changed
- THREE.Vector3 is now reusing the Autodesk.Viewing.Math.Vector3 implementation
- THREE.Matrix4 is now reusing the Autodesk.Viewing.Math.Matrix4 implementation

### Fixed
- “Show Selected” in the context menu now correctly restores visibility for objects across all loaded models in a multi-model scene.
- Broken visibility toggling of top level object.
- Fixed hit detection for points and lines in 3D being overly generous in some models, causing them to be wrongly selected when trying to select geometry in their vicinity.

## 7.119.8

_Release Date: 05/21/2026_

## 7.119.7

_Release Date: 05/12/2026_

## 7.119.6

_Release Date: 05/11/2026_

## 7.119.5

_Release Date: 05/08/2026_

### Fixed
- F2D rendering on mobile devices

## 7.119.4

_Release Date: 05/07/2026_

### Fixed
- More stable point hit testing for SVF2 point geometry by guarding against undefined `pointSize` and performing the distance check in world space.
- Work around an SVF2 issue that produced an edge index buffer for point geometries, causing spurious lines to be drawn between points when edge rendering is on.

## 7.119.3

_Release Date: 05/06/2026_

## 7.119.2

_Release Date: 05/06/2026_

## 7.119.1

_Release Date: 05/06/2026_

## 7.119.0

_Release Date: 05/06/2026_

### Added
- new `LANGUAGE_CHANGED_EVENT` and `setLanguage()` auto-localizes all viewer instances.

### Changed
- Introduction of slow gpu detection and user notification behind feature flag.
- Large Model experience is now enabled by default on all platforms.
- Merged Environment tab into Appearance tab with a compact dropdown.

### Fixed
- Fixed initialization fallback for Large Model Experience. Always call ‘await Autodesk.Viewing.Initializer(options);’ before viewer class instantiation.
- Fixed spurious “Model is empty” dialog when loading PDF (and other 2D streaming) models in AggregatedView.
- ViewCube now updates face labels on language change without requiring a page reload.
- Fixed race condition in resource management that could lead to exceptions
- PropertyPanel: Fixed highlighting searched text not working.

## 7.118.7

_Release Date: 04/27/2026_

## 7.118.6

_Release Date: 04/13/2026_

### Changed
- safe-guard against non-strings in PDB’s `name` property.

## 7.118.5

_Release Date: 04/10/2026_

## 7.118.4

_Release Date: 04/09/2026_

## 7.118.3

_Release Date: 04/07/2026_

## 7.118.2

_Release Date: 04/02/2026_

## 7.118.0

_Release Date: 04/02/2026_

### Changed
- Default edge intensity increased and `Viewer3DImpl.setEdgeColor()` added for custom override.

### Fixed
- Fixed a bug in the out of core priority management that could cause exceptions.

## 7.117.2

_Release Date: 03/20/2026_

## 7.117.1

_Release Date: 03/12/2026_

## 7.117.0

_Release Date: 03/05/2026_

### Added
- Double click a measurement label to copy the value to the clipboard
- Improve cached model loading time by up to 7% by fixing a performance issue where the viewer would freeze for up to 2s while loading very large SVF2 models
- Added a notification for the user when shortest distance measurement result is outside the user’s view

### Fixed
- Fixed thumbnails not showing in den document browser due to incorrect url encoding
- Fixed inconsistent object names between SVF2 and SVF1. Property panel, model tree and API now return consistent names for both Revit and DWG
- Fixed default vertex color attribute for WebGL when a material with vertex color is used, but color attribute is missing on geometry
- Fixed bounding volume hierarchy computation for degenerated models
- Fixed wrong 3D measurement results after sheet-to-model transition
- Fixed Hypermodeling preview plane not disappearing

## 7.116.0

_Release Date: 02/05/2026_

### Added
- Add Finnish (’fi’) and Hungarian (’hu’) language support
- Added forceWorldUpDirection option to the AggregatedView to enforce the world-up-direction

### Fixed
- Fix Z-Fighting with Hypermodeling in some cases
- Fix for race condition in the SVF2 loader that can cause fragments to not be correctly activated when materials are missing
- Fix z-fighting during Alignment Process for Models using Feet Unit.
- Fix fetching `/endpoints` while switching the models for non-US regions when `DS_ENDPOINTS` feature flag is enabled.
- Fix progress reporting when loading a dwf file

### Removed
- Unused “Autodesk.Viewing.Shaders” namespace
- Deprecated flag acc_viewer_vector_raster_switch (enableVectorRasterSwitch) has been removed and the feature is now always available.

## 7.115.2

_Release Date: 01/15/2026_

### Fixed
- Fixed an issue in Chrome 144+ on Mac where `GL_MAX_UNIFORM_BLOCK_SIZE` was exceeded.

## 7.115.1

_Release Date: 12/17/2025_

## 7.115.0

_Release Date: 11/28/2025_

### Changed
- Pressing the escape key now allows to cancel ongoing or deselect the active measurement.
- Measure: restore active tool when closing/reopening

### Fixed
- Fixed loading texts for PDFs when using Raster <> Vector render switch
- Convert model properties with a UOM value of `autodesk.unit.unit:feet-1.0.1`

## 7.114.0

_Release Date: 11/06/2025_

### Added
- Remove Feature Flag from new Edit Tool when aligning a new Sheet (Hypermodeling)

### Changed
- Measurement: clicking outside clears the selected measurement

### Fixed
- Fix “Display Edges” toggle having no effect before the model finished loading
- Fix lighting for non-default lighting environments in screenshots
- Fix token refresh when the automatic region routing is enabled with `DS_ENDPOINTS` feature flag
- Fix models not loading from cache when Angular.js is used

## 7.113.0

_Release Date: 10/09/2025_

### Added
- Added support for displaying section hatches with multiple section planes and the section box
- Added new `RENDERING_TICKED_EVENT` event that can communicate progressive rendering state
- Improved BoxSelection extension to make the behavior more configurable (setMode, setType, setFilter, setImmediate, setStyle)
- Measure: Pressing Delete button will remove all measurements if none is selected.

### Changed
- Active measurements labels are highlighted for better distinction.
- Change DiffTool initialization logic to fix mismatch between dbId and ElementId

### Fixed
- Fix unit scale for models using US Survey Feet units

## 7.112.1

_Release Date: 09/09/2025_

### Fixed
- Fixed some input validation issues.

## 7.112.0

_Release Date: 08/28/2025_

### Fixed
- Fixed border width of section plane sometimes being too thick
- Fix orientation of section box in some edge cases
- Improved performance for aggregated scene with many models
- Fixed viewer crash on DWG files containing 0-scale items
- Fixed model explode on models with flat instance tree
- fix gltf not loading if mesh does not contain an index buffer
- fix gltf not loading with packed base64 textures
- fix gltf not loading if default scene is not specified

### Removed
- Removed `Autodesk.Viewing.WebVR` extension

## 7.111.0

_Release Date: 08/7/2025_

### Added
- Added a Laser Measurement Tool feature for 3D that allows users to measure dimensions and distance from a point using a laser pointer visualization.

### Changed
- The “Display Section Hatches” setting is now persisted across loads.
- Better progress bar status when loading multiple models.

### Fixed
- Fix face snapping behavior for coplanar faces while measuring.
- When starting with avp.Prefs3D.DISPLAY_SECTION_HATCHES set to false, section hatches were still be displayed while the settings panel showed the feature as disabled.
- Fix measure labels disappearing when switching units.
- Fix random occasional freezes on mouse hovers on large models.

## 7.110.1

_Release Date: 07/15/2025_

## 7.110.0

_Release Date: 07/10/2025_

### Added
- Added `option.includeHTMLElements` to `Autodesk.Viewing.ScreenShot.getScreenShot()` parameters, allowing the given array of HTML Elements belonging to the viewer to be captured in an LMV screenshot.
- Introduced a non-throwing function ‘Autodesk.Viewing.tryFromUrlSafeBase64’ to decode base64 strings.

### Changed
- Using the `navToolsConfig.dollyScrollScale` and `navToolsConfig.dollyDragScale` to change the initial zoom `Scroll Speed` and `Drag Speed` is now deprecated. Please, use the persistent `zoomDragSpeed` and `zoomScrollSpeed` viewer Profile Settings instead.
- Improved estimation of frametime budget to reduce drop-outs and better maintain fps.

### Fixed
- `Scroll Speed` and `Drag Speed` zoom settings are now stored between sessions.
- Fixed a hash collision bug when loading BVH nodes from cache in multi-model scenarios.
- Fix measure tool snap for specific Revit material
- Fixed exception when minimap is opened with a ModelBuilder model present.
- Fixed selection after explode and animations

### Removed
- Removed spot measurement feature flag to make it publicly available for all 3d viewing

## 7.109.2

_Release Date: 06/25/2025_

## 7.109.1

_Release Date: 06/20/2025_

### Added
- `DS_ENDPOINTS` feature flag to enable an automatic region routing to the model data. The feature flag must be set before `Autodesk.Viewing.Initializer`: 

```
const options = { /* your Viewer options */ };
Autodesk.Viewing.FeatureFlags.set('DS_ENDPOINTS', true);
Autodesk.Viewing.Initializer(options, function() { /* your callback logic */ });
```

### Changed
- Previously introduced region-specific `api` values `streamingV2_EU` and `streamingV2_AUS` are now deprecated. They are ignored, when the `DS_ENDPOINTS` feature flag is enabled, but still supported otherwise. It is recommended though to simplify them to `streamingV2` while enabling the feature flag.

## 7.109.0

_Release Date: 06/12/2025_

### Changed
- Increase z-index of DockingPanel and Toolbar to avoid overlapping bug

### Fixed
- On level-switching, avoid un-hiding occluders that have already been filtered out
- Fixed an issue with UI elements being out of sync with the 3D scene
- Fixed transparent object draw order with multiple models
- Fixed an issue with holes being visible in rendered edges
- Fixed an issue in the levels extension with generated levels (e.g. coming from NWC files)

## 7.108.0

_Release Date: 05/08/2025_

### Fixed
- Fixed a bug that could prevent loading to complete when switching between multiple views.
- Fixed a bug that could lead to drop-outs of objects close to the viewer.
- Fixed a bug that resulted in performance degradations after switching to 2D view and back
- Exception in SheetSyncExtension when switching from 3D with minimap to 2D and back to 3D views.
- Convert units for attributes with forge units like `autodesk.unit.unit:feetFractionalInches-1.0.0`.
- Creating an early section plane causing a crash for large models.
- Fixed a bug where models with no instance tree highlighted incorrect object on click.
- Added a check to ensure the level is present when requesting tiles.
- Small Performance Improvement for PDFs with lots of small images

## 7.107.0

_Release Date: 04/10/2025_

### Added
- Added a “Clear model cache” button, allowing clearing the OPFS cache for the viewer

### Changed
- Deactivated gravitation in first person mode until optimization data is available to avoid performance issues.
- The Large Model Experience now uses 4x smaller cache files, allowing lower disk usage or more cached models.

### Fixed
- Section Plane option not appearing with multiple models
- Box selection is unpredictable in case of single click without moving mouse
- Viewer uninitialization handling in waitForLoadDone
- Fixed largest primitive size in BVH for transparent nodes
- waitForLoadDone not resolving if onlyModels is set and models already loaded
- Multi-Material draw doesn’t work when Transform Feedback is disabled.

## 7.106.0

_Release Date: 03/06/2025_

### Changed
- Improved loading times
- Improved Model Browser performance for large models

### Fixed
- A regression issue with ray intersection and highlighted objects
- Incorrect theming colors for some objects
- Fragments flagged as hidden (SVF2 only) not being rendered as ghosted
- A regression issue with `FragmentList.isFragVisible()`
- A bug where the section plane option wouldn’t appear in the context menu
- A bug where PDF is rendered with black boxes

### Removed
- An option to opt-out of Large Model Experience being available in the settings

## 7.105.0

_Release Date: 02/13/2025_

### Fixed
- Selected object not being visible after using fitToView
- Shading of GLTF models that didn’t specify normals
- When switching from 3D to 2D sheet, wrong colors were shown depending on the environment settings.
- Wrong visibility of the model geometries stored in the Viewer state, which led to some unwanted side effects, e.g., hiding a complete model after deactivating an extension
- When performing a regular diff and the models are both OTG, ensure the element id is shown in the result
- Always store the selection mode preferences so that it can be overridden for IFC models if desired
- An issue where unnecessary language-fallback requests cause 404 responses

## 7.104.0

_Release Date: 01/09/2025_

### Fixed
- Selection causing severe dropouts on large models when moving the camera

## 7.103.0

_Release Date: 12/05/2024_

## 7.102.1

_Release Date: 11/28/2024_

## 7.102.0

_Release Date: 11/27/2024_

### Added
- Support separate property databases per SVF2 view
- Feature flag to enable the “Large Model Experience” feature by default

### Fixed
- Incorrect bounding volume hierarchy node computation causing some objects to not be rendered (Large Model Experience Beta)
- Reconsolidation for models with large model experience
- Incorrect data caching across different views of the same model

### Removed
- `viewerCE.js`, the compact edition (CE) is no longer supported. Please use `viewer3D.js` instead

## 7.101.0

_Release Date: 10/30/2024_

### Fixed
- An issue when unicode languages are used with scene-builder
- Line Geometry disappeared when using First Person Mode
- Home button of the View Cube not responding after clicking on empty space next to it.
- Incorrect behavior for hover-highlight and shape selection when using big line widths.
- Fixed `Autodesk.Viewing.Viewer3D#toggleLockVisible()` not working
- An issue with `visibilityManager.isolatedNodes` not being reset on subsequent `setAggregateIsolation` calls
- Incorrect reflection-map use when activating first person view on 3D models with 2D views
- Incorrect rendering of material overrides from Navisworks files
- Incorrect rendering of filled self-intersecting polygons in PDFs
- Multiple issue in texture management for shared materials in SVF2 models
- A teleportation issues in first person mode caused by incorrect wall detection
- A crash on initialization when `accessToken` is not a valid JWT

## 7.100.1

_Release Date: 09/30/2024_

### Fixed
- An exception occurring in unsecure contexts where the `SubtleCrypto` interface is unavailable

## 7.100.0

_Release Date: 09/25/2024_

### Added
- Improved time budget management for progressive rendering
- _Large Model Experience_ (Beta) related additions:  Caching of the optimized bounding volume hierarchy
- Support for multiple models
- Improved GPU memory management
- Improved handling of minimap and multi-viewer use cases

### Changed
- Renamed `APAC` endpoints to `AUS`
- Made `streamingV2` (SVF2) the default in the documentation of the API initialization
- Improved bounding volume hierarchy construction for faster raycasting in large models, e.g., when using BimWalk
- Switched to GPU-based geometry pre-processing (transform feedback) and improved buffer management  Disabled for Firefox on macOS (no support for transform feedback)

### Fixed
- An exception occurring when the viewer is destroyed during asynchronous operations
- Transparency issues with nwd files with consolidated model
- Node visibility state in Model Browser when isolating and then hiding the node
- Crash in PowerBI, `<iframes>`, and Android WebView due to `localStorage` access
- Missing `getBoundingBox` Model API in the Viewer SDK
- An issue where Fusion-style orbit is not loaded correctly
- A measurement issue in Edit2D tools
- An issue when pushpin is deselected, the section tool should stay activated

## 7.99.1

_Release Date: 08/07/2024_

## 7.99.0

_Release Date: 07/31/2024_

### Changed
- Renamed “Smooth Navigation” setting to “Disable shadow effect” to clarify its purpose
- When “Large Model Experience” is enabled, this adds a label to the progressbar indicating the current operation (`Loading`, `Optimizing`, `Rendering`)

### Added
- `Autodesk.Viewing.Viewer3D#setAggregateIsolation()` to isolate across multiple models
- “Large model experience” preference allowing users to perform a beta test of large model rendering optimizations, which are currently in development. By default, the option is toggled off and users will have to explicitly enable it to see the optimizations. Since these optimizations are still in beta and not ready for all use cases (e.g. rendering aggregates of many models), we provide a feature flag to hide the option from users: 

```
Autodesk.Viewing.FeatureFlags.set('HIDE_LARGE_MODEL_EXPERIENCE', true);
```

### Fixed
- A bug where some PDF annotations are not rendered due to incorrect bbox calculation
- `Autodesk.Viewing.Viewer3D#isolate()` behavior for multiple models (bug introduced in 7.98)
- `Autodesk.Viewing.Viewer3D#isolate()` not resetting the isolation
- Vector <> Raster switch behavior for hypermodeling
- Issues which could prevent internationalization from being correctly applied
- An issue occurring when right clicking part of a model early during startup
- Occasional crashes on initialization when using the LeechViewer (multiple viewers)

## 7.98.0

_Release Date: 06/26/2024_

### Changed
- Improved layer visibility and isolation toggling responsiveness
- Enabled the OPFS cache by default, greatly improving cached model loading performance. See [this blog post](https://aps.autodesk.com/blog/viewer-performance-update-part-2-3-opfs-caching) for more information.

### Added
- Central Feature Flag management
- Introduced adaptive streaming for SVF2, speeding up geometry loading
- Reduced loading time of OPFS-cached models by up to 20%
- API to search the InstanceTree by node names
- Optimizations in SVF2 initialization decreasing the time to first pixel by 0.2s

### Fixed
- An issue where Markups are not rendered correctly to the canvas (WebKit)
- View cube not rendering correctly with multiple viewers
- Changing models in PDFs with `loadNextModel` and `loadPrevModel` methods of the `Autodesk.DocumentBrowser` extension
- Type `resource` instead of `geometry` for bubble nodes having the `pdf-page` role
- GPU memory deallocation issue
- Occasional false positives returned by `isLoadDone` and its dependant `waitForLoadDone` of the Viewer3D API
- Pushpins placed at incorrect locations if the first of multiple loaded models was a flat plane
- An issue with the ground reflection
- The visibility status in the model browser when multiple models are loaded
- A regression where the rendering prioritization with multiple models would not work
- A potential race condition in `Autodesk.Filter` extension
- Incorrect area measurements in `Autodesk.Measure` not taking PDF viewport units into account
- ACC PDFs not correctly routing to APAC
- Selection Plane option being unavailable in the context menus of some selections
- CVE-2024-4367 security issue (”Arbitrary JavaScript execution in PDF.js”)
- An issue in the Model Browser with some nodes not denoting the number of child nodes
- SmartSection button and panel not being removed after unloading the extension
- Context submenu sometimes not showing up
- Unintended sanitization of `'` character from BIM360 text markup
- A few missing translations

## 7.97.0

_Release Date: 05/13/2024_

### Added
- Introduce a color theming veto mechanism for Model Alignment
- Introduce Raster <> Vector render switch for PDF
- Filtering non-loaded fragments from the model browser
- Performance optimizations when loading models from cache. Loading time improved by up to 20%, time to first pixel improved by up to 50%
- `disableTheming` material parameter to disable theming per material. This allows to use simple highlights (e.g. when using the `Autodesk.Viewing.SelectionType.REGULAR` node selection type) also when theming colors are being set.

### Fixed
- An issue where the preliminary property lookup syntax in property queries (selective loading) did not work for names containing special characters
- Issue where elements in NW viewpoints were still hidden after switching views
- Enable vector viewing settings for ACC Sheets
- Correctly free memory when unloading a mesh
- Load progress bar was hidden too early
- Redundant computation of optimization data structures for first person navigation mode
- Gizmo height calculation for perspective camera. Gizmo offset is now considered when calculating distance to the camera.
- Support of mixed topology models and support of shared DBID models in the Autodesk.Measure extension
- Caching of options in `Autodesk.Viewing.Viewer3D#loadDocumentNode` led to unexpected side-effects, e.g., a wrong data in the Document Browser.
- Some preferences were not properly restored, e.g., hidden minimap.
- Issue where SVF2 viewpoints loading could result in material loading errors
- A crash of the SVGs when using special characters in the Autodesk.BIM360.Markups extension
- A crash of the Autodesk.CAM360 extension

## 7.96.0

_Release Date: 03/21/2024_

### Added
- New and improved geometry cache that can be enabled using the URL parameter `useOPFS=true`

### Fixed
- An issue where sheet alignment was sometimes mirrored, making it difficult to align correctly
- An issue in the Place-Me tool where teleporting to floor plans added an incorrect height offset
- An issue with models having empty layer names in the property database
- [Regression] UV texture transformations should be applied to the existing matrix, but not overwrite it.
- Out-of-memory crashes on certain PDF documents
- Wrong data shown due to a section view not being reset when switching between markups in the Autodesk.Vault.Markups extension
- Handling of corrupted PDF layers

### Removed
- [Rollback] Fix view cube orientation when loading svf files originated from Navisworks Coordination.

## 7.95.1

_Release Date: 03/01/2024_

### Fixed
- Regression related to `env` not being set to `AutodeskProduction` by default

## 7.95.0

_Release Date: 02/14/2024_

### Changed
- Client streaming parameters to improve model load time
- Attribute properties will no longer be inherited from non-graphical parent objects in the Autodesk.Filter extension.

### Fixed
- Loading of property db for 2D layers supplied as PDFs by the translation service
- Green screen overlay flickering on some devices when using the Autodesk.Viewing.PixelCompare extension
- Add condition to transform functions in the Autodesk.BIM360.Extension.PushPin extension to protect it from failing.

### Removed
- [BREAKING] Support for WebGL1, now requires WebGL2. Since all supported browsers already support WebGL2, the effective browser requirements do not change.

## 7.94.0

_Release Date: 01/24/2024_

### Added
- Add flag to ignore extra viewpoint data in `Autodesk.Viewing.Viewer3D#setView`.
- Add support of glTFs extensions `EXT_meshopt_compression`, `KHR_mesh_quantization`, and `KHR_texture_transform`.
- Add `parentId` parameter to the `InstanceTree.enumNodeChildren` callback.

### Fixed
- Fix spurious line rendering of some PDF documents.
- Fix error log and geometry load delay when switching views.
- Fix incorrect rendering of gradient fills in some PDF documents.
- Fix loading of models that use `UNSIGNED_BYTE` indices.
- Fix missing fragments when using selective loading with property queries.
- Fix view cube orientation on restore.
- Fix view cube orientation when loading svf files originated from Navisworks Coordination.
- Fix PixelCompare overlay state.

### Removed
- Remove IE11 polyfills and workarounds.
- Remove `legacy/ViewingApplication.js`.

## 7.93.1

_Release Date: 10/20/2023_

### Fixed
- Fix loading of geometry when switching views.

## 7.93.0

_Release Date: 10/05/2023_

### Changed
- Improve model load time by 5-10% and prioritize on relevant geometry the first few seconds loading.
- [BREAKING] Model.dispose() made private.
- Support hiding of overlay scenes from model rendering.
- [BREAKING] Custom overlay targets may no longer be passed to getScreenshot() options.
- Improve load speed of large PDF documents.

### Added
- Add invert option for section boxes in Autodesk.SmartSection extension.
- Add documentation for the NPR extension.
- Add documentation for MarkupEvents.

### Fixed
- Fix markup context menu overlaps with text markup in Autodesk.Vault.Markups extension.
- Fix occasional error in PushPin3D when accessing its marker.
- Fix occasional synchronization issue in the section plane panel.
- Fix auto-resize of markups when mouse is not moving in Autodesk.Viewing.MarkupsCore extension.
- Fix loading viewpoints tree in document browser (affects nwd, nwc, and ifc files).
- Fix loading of textures from DWF models.
- Fix explode slider positioning in multi-viewer scenarios.
- Fix display of some characters in PDF documents.
- Enable iOS 15.x work-around to prevent browser crashes on iOS 17 and future versions as well.

## 7.92.0

_Release Date: 08/15/2023_

### Changed
- Update @adsk/recap-extension from 7.2.8 to 7.3.17.
- Disable initial visibility handling after model load to avoid browser tab freeze.
- Autodesk.Viewing.Initializer now allows specifying an option to set the root path for LMV resources (lmvResourceRoot).

### Added
- Add `Viewer3D.hideHiddenObjects` as a fallback to trigger initial visibility handling.

### Fixed
- Avoid console warnings that occur when closing WebSockets during their opening process.

## 7.91.0

_Release Date: 07/17/2023_

### Changed
- Improved performance of Autodesk.Viewing.PixelCompare extension.

### Fixed
- Alignment of models when comparing different versions of the same DWG model in the Autodesk.Viewing.PixelCompare extension
- Autodesk.Viewing.PixelCompare extension now renders with the same color and brightness as regular viewing
- Exception when unloading a model while the measure tool is active
- Rare endless loop in PDF loader
- Resolved Chrome 114+ crash issue in DWF texture loading. Affected models now load but with some or all textures missing.
- Navisworks Viewpoints section boxes were not applied in all cases

## 7.90.0

_Release Date: 06/20/2023_

### Changed
- When loading the Autodesk.PixelCompare extension, there is now an option to specify the default visibility of the UI.

### Added
- Added support for Navisworks Viewpoints in SVF2 format
- Documentation for the MarkupsCore extension for v7

### Fixed
- Leaving an empty diff view in AggregatedView shows all models in ghosted mode
- Measurements don’t follow objects when the model is exploded
- Using BoxSelection with a mouse on touch-enabled devices didn’t work
- An issue with Model.getPropertyHashes in minified builds
- A rare issue that caused some missing objects when loading SVF2 data

## 7.89.0

_Release Date: 06/02/2023_

### Changed
- Extension Autodesk.PixelCompare allows rendering the same model for both main and secondary models.
- Extension Autodesk.PixelCompare now allows clients to control the main and secondary document colours in overlay compare mode.
- Improved snapper performance
- Improve SVF2 load performance (already cached designs loaded with an older version won’t benefit from this change)

### Added
- A `filter` option (`loadDocomentNode` & `loadModel`) that allows to only load subsets of designs via spatial and property filter queries.
- Added mainOverlayColor, secondaryOverlayColor, and blendedOverlayColor options in the PixelCompare extension, along with default colors to show overlay diff when in model overlay compare mode

### Fixed
- Added substitutions for Japanese fonts KozMinPr6N-Regular, MS Gothic, MS Mincho, Meiryo
- Rendering of some annotations in PDF documents.

### Removed
- The previously deprecated and non-functional Collaboration extension

## 7.88.0

_Release Date: 04/18/2023_

### Changed
- Improved loading speed of very large SVF2 models on Chrome
- Loading very large SVF2 models consumes less memory during the load process, reducing the risk of crashes
- Extension Autodesk.PixelCompare now allows hiding all models when rendering overlay scenes
- Extension Autodesk.DiffTool now also supports the file type `application/vnd.autodesk.composite`
- Replaced includeMainModelOverlayScenes option in the PixelCompare extension with mainOverlayScenes and secondaryOverlayScenes options to render overlay scenes associated with the main and secondary models.

### Added
- Support for “butt” line caps in PDF drawings
- Extension Autodesk.Edit2D allows specifying a custom overlay scene to the Edit2dContext to draw shapes to

### Fixed
- A crash when camera data in SVF derivatives is ill-defined
- BoxSelection does not work on touch devices (e.g. mobile)
- A rare error when rendering measurements

## 7.87.0

_Release Date: 02/23/2023_

### Fixed
- Loading an SVF model doesn’t crash if the embedded camera information is corrupted

## 7.86.0

_Release Date: 02/09/2023_

### Fixed
- Section box created via context menu is consistently oriented with those created via the toolbar
- Error when resizing the viewer element to very small dimensions (<32 pixel) while ambient shadows are enabled
- Small helper geometries, e.g. measure snapping indicator, are not disposed properly
- Secondary UV channels override the primary channel in SVF2 designs
- Unable to change sheet background color in Macbook (M1)
- 404 (not found) error for `/en-US/allstrings.json`
- StandardSurface Extension: Simple Environments can be used now

## 7.85.0

_Release Date: 01/26/2023_

### Added
- PDF: added Symbol as built-in font

### Fixed
- Corrected a misspelled variable name in the Edit2D tutorial
- Crash on iOS 15+ if WebGL2 is explicitly disabled in the browser

## 7.84.0

_Release Date: 12/29/2022_

### Changed
- Improved ground shadow computation for faster startup and better sectioning

### Added
- Extension Autodesk.Edit2D now supports snapping with miter line segments
- Added ZapfDingbats as a built-in font for PDF viewing

### Fixed
- Wide line rendering, when two or more objects use the same wide line material
- Resource cache to be freed up correctly for unloaded SVF2 models
- Section plane gizmo positioning when created via SectionExtension.setSectionPlane or context menu
- Display of wrong characters in some pdfs.
- Textures of decal materials are loaded for SVF2 designs
- Some small objects are not rendered when they should
- Broken characters in PDFs with non-embedded Japanese fonts
- Missing checkmarks in some PDF forms
- Missing Chinese characters in some PDFs

## 7.83.0

_Release Date: 12/15/2022_

### Changed
- Extension Autodesk.DiffTool raises an error with a better message if not all models have the same dimensionality.
- Rebranded the Forge Viewer to the Viewer SDK (Forge -> Autodesk Platform Services)

## 7.82.0

_Release Date: 12/01/2022_

### Changed
- Extension Autodesk.Edit2D replaced “filled line” feature with “miter line” for improved performance and visuals.
- Reduced re-rendering frequency of PDFs while loading
- Reduced viewer’s memory footprint
- Improved rendering to be more energy-efficient
- Extension Autodesk.PixelCompare now allows rendering overlay scenes in primary and/or secondary models.
- Enable iOS 15.x work-around to prevent browser crashes on iOS 16 as well

### Added
- DiffTool: Added a `propertyFilter` option that allows to exclude properties from the diff calculation.

### Fixed
- Model flips by 90° when clicking the home button, if the model does not contain a dedicated home view.
- Progressive rendering for large PDFs
- Selection highlighting in 2D models while loading
- Adding a SceneBuilder model to an AggregatedView was causing an exception
- PDF viewport / model transformation for affine viewport transformations

## 7.81.0

_Release Date: 11/17/2022_

### Changed
- DiffTool will not use “Source File” property for comparison for IFC and NWD format.

### Fixed
- Fix to extract externalIds for SVF2 models that use regular Diff Comparison.
- Rendering artifacts in some pdf files

## 7.80.0

_Release Date: 11/03/2022_

### Changed
- Measurements in PDFs created by Revit and AutoCAD will use units as specified in the design applications
- Measuring precision presets for PDF files created from .rvt or .dwg files are taken into account

### Fixed
- Navisworks viewpoint loading code could fail when loading SVFs without viewpoints
- Unicode layer names in PDFs

## 7.79.0

_Release Date: 10/20/2022_

### Changed
- Retry model data requests that fail with CORS errors a few times before giving up on them

### Fixed
- Memory leak after destroying a viewer instance

## 7.78.0

_Release Date: 10/06/2022_

### Changed
- Reduced unnecessary minimap refreshes if camera is unchanged

### Added
- `Autodesk.Viewing.LOADER_REPAINT_REQUEST_EVENT` indicating that a loader wants to rerender

### Fixed
- Respect navigation lock settings in side-by-side view in the DiffTool extension
- PDF rendering of repeating image patterns
- Enable color themes for all diff modes in the DiffTool extension
- Extension Autodesk.Edit2D now render filled lines correctly on an edge-case of nearly straight lines.

## 7.77.0

_Release Date: 09/22/2022_

### Changed
- Section planes and boxes align with project north if load options contains applyRefPoint=true

### Fixed
- Section planes positioning in some cases
- Avoid distortion of wide lines when the browser window and the viewer canvas don’t have the same aspect ratio.
- PDF: some entities were missing when enabling a (disabled by default) layer for the first time
- PDF: Error when switching views

## 7.76.0

_Release Date: 09/08/2022_

### Fixed
- PDF: Fixed measuring lines inside a layer

## 7.75.0

_Release Date: 08/25/2022_

### Added
- Translations for European Portuguese (pt-PT)

### Fixed
- Raycasting/selection for scenes created with Scene Builder
- Incorrect rendering of consolidated meshes when using the LeechViewer (e.g. Minimap)

## 7.74.0

_Release Date: 08/11/2022_

### Fixed
- Fixed transparent surfaces hiding opaque surfaces in aggregated models

## 7.73.0

_Release Date: 07/28/2022_

### Changed
- Update @adsk/recap-extension from 7.1.2 to 7.1.26-alpha.1

### Added
- Added geometry type filtering to ray intersection tests
- Added MeasureEvents.SELECT_MEASUREMENT event

### Fixed
- Fixed loading of some PDFs
- Fixed loading of PDF documents with unexpected optional content
- Browser detection in IOS web views

## 7.72.0

_Release Date: 07/14/2022_

### Added
- Added support for Viewpoint overrides from Navisworks

### Fixed
- Floor intersection test in BimWalk extension to avoid user falling through the floor to the level underneath
- Incorrect camera movement when reactivating the BimWalk extension

## 7.71.0

_Release Date: 06/30/2022_

### Changed
- In Autodesk.AEC.ViewportsExtension returned viewports are now ordered by creation time, oldest to newest.

### Fixed
- Sensor sprites in DataViz extension were not rendered on mobile devices anymore.
- Extensions with an asynchronous load function are handled as expected in applications that polyfill ES6 Promises.

## 7.70.0

_Release Date: 06/16/2022_

### Changed
- Drop IE11 support
- Deprecate Autodesk.Viewing.Collaboration extension
- Deprecate Autodesk.Viewing.WebVR extension

### Fixed
- ComboButton.removeControl actually removes a button from the group
- Fail gracefully when encountering unsupported `strokeStyle` types in vector PDFs.

## 7.69.0

_Release Date: 06/02/2022_

### Changed
- No triangulation calculated for open contours in section tool

### Fixed
- Unloading the DataVisualization extension disables textures
- Section box outlines computation.

## 7.68.0

_Release Date: 05/19/2022_

### Changed
- Update default endpoint from `https://developer[-env].api.autodesk.com` to `https://cdn[-env].derivative.autodesk.com`

### Fixed
- Tab to freeze or reload on IOS 15 devices when loading large models
- Explode slider could not be manipulated on windows devices using a touchscreen.

## 7.67.0

_Release Date: 05/05/2022_

### Changed
- Localize “Document Browser” text

### Fixed
- Fix dynamic loading of localized string for extensions
- Combo box button arrow icon sometimes renders as an invalid character

## 7.66.0

_Release Date: 04/21/2022_

### Fixed
- Extension Autodesk.Edit2D with filled lines now draws near right angles correctly.
- Incorrect display of some PDF documents
- Unloading errors for Autodesk.DataVisualization extension.
- Prevent selection hits on mobile devices if selection is disabled
- Fix MC model transform overrides being applied when no transform exists on either; take the most recent in that case.

## 7.65.0

_Release Date: 04/07/2022_

### Added
- Introduce `BEFORE_MODEL_UNLOAD` event on the viewer instance.

### Fixed
- Lines in pdf documents render with correct widths
- Avoid parsing PDF data twice.
- Always check for multiple render targets (MRT) support for RGBA8 targets, to enable MRT rendering on supported mobile devices.
- Prevent duplicated pushpin activated event on mobile devices
- Use correct set of rendering features on devices that only support WebGL1.

## 7.64.0

_Release Date: 03/24/2022_

### Changed
- Make better use of model precision to improve the measure tool
- Avatar’s rotation disabled while gyro is on
- Extension Autodesk.Edit2D now allows polylines to be drawn as polygons for a smoother and more accurate display on a sheet
- Improved image handling in PDF viewing.

### Added
- Example to Autodesk.Fusion360.Animation documentation
- Enum documentation for instance tree’s node type

### Fixed
- Make sure that the `ANIMATION_READY_EVENT` is only fired once animations are ready to play.
- Prevent that operations run on a property database (e.g. `userFunctions`) are executed based on another model’s loading state, which causes errors.
- Misplaced images in PDF documents now display correctly.
- Less dropouts when navigating PDF documents with complex images.
- Keep PDF line width consistent when using a perspective camera in a 3D view

## 7.63.0

_Release Date: 03/10/2022_

### Fixed
- Fixed levels not working in IFC files
- THREE.Line mesh is now correctly rendered
- Fix measurements on large PDF pages (>200 inches)
- Mark-up paperclips are not displayed correctly on mobile application

## 7.62.0

_Release Date: 02/24/2022_

### Changed
- Improve PDF rendering quality for all desktop browsers except Firefox (due to technical limitations)

### Fixed
- Position of menu button tooltips in vertical toolbars
- PDF with specific fonts rendering with defects in LMV
- Minimap3DExtension got stuck while loading

## 7.61.0

_Release Date: 02/10/2022_

### Added
- Initial version for a filter extension. Under Construction

### Fixed
- FusionSim panel gets cloned when a new model is loaded reusing the same viewer.
- Thumbnails of PDF sheets not loading in Document Browser

## 7.60.0

_Release Date: 01/27/2022_

### Changed
- Deprecate `renderTarget` parameter in WebGLRenderer
- Ensure unit change handler in Edit2dContext is removed when context is destroyed.
- Set `LOADING_ANIMATION` to `false` by default

## 7.59.0

_Release Date: 01/13/2022_

### Changed
- scale emissive values for DWFx and DWF files
- Gyroscope movement improvements.
- Skip empty models when calculating the ray - line intersection threshold for the scene

### Added
- The DiffTool extension’s `onInitialized` callback configuration option can now be used in hot mode, too

### Fixed
- In case of an error withing SVF2 loader code the real error will be logged instead of an invalid “Uncaught ReferenceError: comment is not defined”.
- Fixed an issue when the memory consumption of an unloaded model was calculated.
- Errors in adding ElementIds to names in PropertySets for SVF2 will no longer prevent the PropertySet from being created.
- Fixed incorrectly rendered glTFs using vertex colors
- Regression for DocumentBrowser toggleOverlayedSelection action
- hiding the diff popup threw errors when the diff extension was used with external UIs

## 7.58.0

_Release Date: 12/09/2021_

### Changed
- turn off fresnel reflection for phong material when reflectivity is set exactly to 0.0
- Move prism material shader customisation out of `WebGLProgram` and `WebGLRenderer` to `PrismMaterial.onBeforeCompile`
- Extension Autodesk.Aec.LevelsExtension loads the AecModelData when `autoDetectAecModelData=true` to add entries to the levels extension levels panel.

### Added
- intermediary function `Material.onBuild` for compatibility with latest Three.js renderer

### Fixed
- Resolved issue with the `Display Units` preference value being reset in later viewer sessions.
- Fix a null reference exception in LevelsExtension when model alignment got loaded but the model data isn’t available, yet.
- Fix a possible null reference in Model.getDocumentNode()
- Fix null reference exceptions in MeasureTool when snapper is inactive
- Levels Panel remains empty when no extra call is done when `autoDetectAecModelData=true`
- Fixed sudden camera movements after unlocking viewer navigation during BimWalk mode.
- Minimap3D: Fix incorrect frustum shape on some Android devices

### Removed
- `GetPrismMapSampleChunk`, `GetPrismMapUniformChunk` from Autodesk.Private.Viewing

## 7.57.0

_Release Date: 11/25/2021_

### Changed
- Added a Traditional Chinese fallback font to improve PDF text rendering
- Deprecate `createPrismMaterial` and `clonePrismMaterial` in Autodesk.Viewing.MaterialConverterPrism

### Added
- `PrismMaterial` in Autodesk.Viewing.MaterialConverterPrism
- Default display units will match the setting in Revit

### Fixed
- Cleaned up residual data from the VisualClusters extension that was previously present on the screen when the extension was unloaded.
- Fixed Property Panel title in multi-selection scenario
- Various SVF2 loader issues that could lead to incomplete scenes

## 7.56.0

_Release Date: 11/11/2021_

### Changed
- UnifiedCamera.applyMatrix4 to use Objecct3D.applyMatrix4

### Added
- `from` parameter to `viewer.properties` analytics.
- `file_2d_extension`, `file_3d_extension` parameters to `viewer.place_me` analytics.

### Fixed
- Model cameras set in the SVF2 loader would sometimes use data objects instead of vector instances as their properties.
- Account ids are tracked and set properly when loading multiple SVF2 models simultaneously.
- Authorize SVF2 urns in the web socket if the socket is reused for multiple models.

## 7.55.0

_Release Date: 10/29/2021_

### Changed
- Profiles and Preferences are stored in separated JSON objects in Local Store. Overriding one attribute in one profile doesn’t impact the others when switching between them.

### Fixed
- Enabled localization for some ModelAlignment strings and also for some other extensions
- Fix Simplified & Traditional Chinese localization on case-sensitive web services
- Enforce that all access to preferences are done using the correct method.
- Enabled localization of a few strings in diff panel
- Fixed missing DocumentBrowser icon

## 7.54.0

_Release Date: 10/14/2021_

### Changed
- Preferences are saved in different local storage entries according to the profile they belong.

### Fixed
- Autodesk.Viewing.MarkupsCore’s rendering markups upside-down in Safari.
- Preferences stored for one profile are not cleared/overridden by preferences of another profile.

## 7.53.0

_Release Date: 09/30/2021_

### Changed
- Interpolation for av.i18n.translate() doesnt use `postProcess` option

## 7.52.0

_Release Date: 09/16/2021_

### Fixed
- Fix a crash in `Viewer3DImpl.fitToView()` respectively `Viewer3DImpl._fitToView2d()` when `aggregateSelection` parameter is empty.
- Add missing null check before accessing units method of the viewer model (handle 0 model case)

## 7.51.0

_Release Date: 08/24/2021_

### Fixed
- Remove the inverting of the last frustum plane used for culling in BoxSelection
- Toggling rooms in the model browser did not work for SVF2 models

### Removed
- Removed redundant block for perspective camera, the orthogonal path should work with any camera.

## 7.49.0

_Release Date: 08/05/2021_

### Changed
- Disabled “Show Edges” toggle switch if model is loaded without edges

### Fixed
- Extension Autodesk.BoxSelection: Intersection mode no longer selects elements outside of selection box.

## 7.48.0

_Release Date: 07/22/2021_

### Changed
- SVF2 `env` and `api` values have been updated. The possible values are env=`AutodeskDevelopment2 / AutodeskStaging2 / AutodeskProduction2` and api=`streamingV2 / streamingV2_EU`. The existing `MD20xxx` and `D3S` values for env and api are deprecated and will result in a console warning, but it would still work.

### Fixed
- Fixed an issue where Chinese characters were not rendered in some PDFs

## 7.47.0

_Release Date: 07/08/2021_

### Fixed
- Update the section tool button states when using the `setSectionPlane` API
- Fixed console error when displaying a context menu with a divider and sub items on the far right of the screen.
- Fixed surface shading for the Safari browser in the `DataVisualization` extension

## 7.46.0

_Release Date: 06/24/2021_

### Changed
- Existing calls to `model.remapDbId()`and `model.reverseMapDbId()` now use the new `model.remapDbIdFor2D()` and `model.reverseMapDbIdFor2D()` calls wherever the existing behaviour appeared to depend on `model.idRemap` only being available for 2D sheets.

### Added
- New Stamp markup type available
- Extension Autodesk.Viewing.MarkupsCore supports a new text-data field for markups.
- added methods to fire transition events for the Visual Cluster extension
- New `loadOptions.needsDbIdRemap` boolean flag, which forces generating the `model.idRemap` map for 3D models (only in SVF2).
- Added `model.remapDbIdFor2D()` and `model.reverseMapDbIdFor2D()`, which act like `model.remapDbId()` and `model.reverseMapDbId()` except they will always return their argument unchanged if the model is not 2D. These have been added to provide the effective behaviour of the old methods since `model.idRemap` would previously never be available on 3D models.
- Context menus now support dividers

### Fixed
- Enabling needsDbIdRemap for a 3D model no longer restructures the object tree accordingly, as this behaviour is only relevant for 2D sheets. Previously this restructuring would break object selection, highlighting, and other internal object identification by dbId. Arguably this isn’t really a “fix” since you previously couldn’t try and do this for 3D models anyway.
- Margins of the calibration panel are now correct in all browsers

## 7.45.0

_Release Date: 06/10/2021_

### Changed
- cross-site requests to PDF files now default to `withCredentials=false` (previously true) unless explicitly set by `Autodesk.Viewing.endpoint.setUseCookie(true)`
- Return the loading promises for `AggregatedView.setNodes()` and also `.switchView()`
- DataVisualization Extension: When mouse cursor moves off a sprite, the corresponding `MOUSE_HOVERING` now has the `dbId` set to the `dbId` of sprite that mouse cursor moves off of, instead of being `0`.
- DataVisualization Extension: `renderSurfaceShading` API now takes an optional `heatmapConfig` parameter instead of `confidenceSize`. Existing code that passes in `number` for `confidenceSize` will continue to work, but the use of `HeatmapConfig` options is encouraged. See documentation for `HeatmapConfig` for more details.
- DataVisualization Extension: The `options.position: string` parameter for planar heatmap in `setupSurfaceShading` has been replaced by `options.slicingPosition: number`. While the old `options.position` continues to work, the use of `options.slicingPosition` is strongly encouraged. See `setupSurfaceShading` API for details of this option.
- DataVisualization Extension: The `options.placePosition: string` parameter for planar heatmap in `setupSurfaceShading` has been replaced by `options.placementPosition: number`. While the old `options.placePosition` continues to work, the use of `options.placementPosition` is strongly encouraged. See `setupSurfaceShading` API for details of this option.

### Added
- DataVisualization Extension: `updateSurfaceShading` API now takes an optional `heatmapConfig` parameter. See documentation for `HeatmapConfig` for more details.

### Fixed
- Fixed an issue where some PDFs would freeze the browser when loading.
- fixed incorrectly drawn “4” character in vector pdfs
- Fixed the free measure mode in the Measure extension

## 7.44.0

_Release Date: 05/27/2021_

### Fixed
- Model Browser panel has a reasonable size when the toolbar is hidden.
- Fixed an issue when destroying the ForgeLogoSpinner
- fixed texture load error when loading some dwf files
- Fixed an issue where the property panel would freeze the viewer for models containing internal references.
- Fixes margins and layout in the calibration dialog from the Autodesk.Measure extension
- Fixed the av.ScreenShot.getScreenShotWithBounds API while editing markups
- Fixed double byte character displays when loading a dwf

## 7.43.0

_Release Date: 05/13/2021_

### Fixed
- fixed flipped images when rendering some pdf files
- Fixed the loading of a model’s property database that contained invalid unicode characters

## 7.42.0

_Release Date: 04/29/2021_

### Changed
- av.Document.downloadAecModelData adds the bearer token to the request if AECModelData.json gets downloaded from Forge API (instead of OTG service).

### Fixed
- Edit2D: when calling ext.registerDefaultTools() the browser would freeze for large models
- Fixed an issue when generating stats for a document. Handle the case if a parent geometry for a node can’t be found.
- Fixed line width in PDFs that have a very large different in the width and height
- Consider orthoScale when transforming home cameras. It may affect start views of some clients when they use unit scaling, but the result now is correct and matches original view.

## 7.41.0

_Release Date: 04/15/2021_

### Fixed
- Fixed restoring of custom Autodesk.Viewing.Private.Prefs.DISPLAY_UNITS preference

## 7.40.0

_Release Date: 04/01/2021_

### Added
- Added localization for British English

### Fixed
- Fixed image rendering in PDFs
- Documentation fixes for Autodesk.Viewing.Viewer
- selecting a parent node in the model browser does not select its children correctly
- Regression related to duplicate i18n calls on Edit2D

## 7.39.0

_Release Date: 03/18/2021_

### Changed
- Show element ID on OTG Compare  Show element ID in a Properties window title, on selected object for OTG documents

### Added
- retry requests on intermittent failures
- Added `viewer. setAggregateSelection` api to select across models

### Fixed
- Fixed string localization for polygon error message.
- Support leaflet highlight in ACC Files section

## 7.38.0

_Release Date: 03/04/2021_

### Added
- Added “Show Properties” option in the context menu

### Fixed
- Extension Autodesk.Fusion360.Simulation now supports showing non-linear simulation results.
- Fixed rendering of PDF files
- Improve PDF rendering performance
- Fixed TypeError in Hyperlink extension

## 7.37.0

_Release Date: 02/18/2021_

### Changed
- AnimationToolbar styles to be more specific to guarantee precedence.

### Added
- BoxSelection extension is loaded by default
- fetching string properties as height, character width and string width for F2D and PDF.js documents
- search sub-strings for partial search query occurrences.
- Localization for the Edit2D extension.
- Property panel: support multi-selection
- New option `escapeOssObjects` will escape OSS object keys before sending requests to OSS.
- added cmd(mac) or ctrl hotkey for turning on box selection
- Added D3SLocalUS and D3SLocalEU environments for offline serving of SVF2 and 2D content.

### Fixed
- Fixed endless pan/zoom/rotate when using Command/Control + Arrow keys on Mac
- Box Selection not selecting correct objects in some cases
- changed `THREE.REVISION` back into a string
- Profile settings dialog strings not translated
- Fixed states of navigation tools.
- Rendering of cropped images in PDFs

## 7.36.0

_Release Date: 02/04/2021_

### Changed
- Allows full transformation matrix to be used–not just translation.
- Autodesk.BimWalk extension: Set gravity on mobile to `false` by default, until joystick interaction

### Added
- Added glTF 2.0 loader extension
- Added documentation and tutorial for AggregatedView
- documentation to SnapperIndicator render methods
- added Autodesk.Viewing.PropertySet and Autodesk.Viewing.Model#getPropertySet

### Fixed
- Incorrect units displayed in the properties panel for new revit files
- Error clicking viewcube arrow for some models

## 7.35.0

_Release Date: 01/21/2021_

### Added
- Added the following events: av.EXTENSION_PRE_ACTIVATED_EVENT, av.EXTENSION_ACTIVATED_EVENT, av.EXTENSION_PRE_DEACTIVATED_EVENT, av.EXTENSION_DEACTIVATED_EVENT, av.EXTENSION_PRE_LOADED_EVENT, av.EXTENSION_PRE_UNLOADED_EVENT
- added support for a variety of additional units used by Revit 2022
- Setting to turn section plane hatches on and off. This setting does not apply to the section box.
- Make the avp.Prefs.DISPLAY_UNITS and avp.Prefs.DISPLAY_UNITS_PRECISION preferences persistent between browser sessions.

### Fixed
- DWF: Some images are not rendered and appear as black boxes
- DWF: Some dwfs with complex clipping is not rendered correctly
- Fixed searchbox behavior on model browser. It will only search when query string has 3 characters or more.
- URLs with parentheses are now correctly hyperlinked in the Properties panel
- fixed a memory leak on `viewer.finish()`

## 7.34.0

_Release Date: 01/07/2021_

### Fixed
- DWF: Some images are not rendered and appear as black boxes
- DWF: Some dwfs with complex clipping is not rendered correctly

## 7.33.1

_Release Date: 12/08/2020_

## 7.33.0

_Release Date: 12/07/2020_

### Changed
- Updated the Visual Clusters button tooltip.
- Changed how Edit2D polygons and polylines can be moved, by allowing them to be selected and moved with one click and drag instead of needing to be selected first, and then dragged with a second click.

### Added
- Localization strings for ZH-HK

### Fixed
- Format distance units in the difftool ui

## 7.32.0

_Release Date: 11/19/2020_

### Added
- new search option `includeInherited` for e.g., `viewer.search('search text', console.log, console.error, null, {includeInherited: true})`. When set to true, nodes that inherit the property will be returned, mimicking the property panel.
- New beta extension `Autodesk.BoxSelection` for selection within a rectangle area

### Fixed
- Speedup pdf rendering with single line JPEG images
- Fix avp.Prefs3D.FORCE_DOUBLE_SIDED when turning cut planes on and off.
- Fix MSDF text in PDFs
- crash when loading empty scenebuilder model in aggregate view
- Some PDFs were being drawn as rasters instead of vectors

## 7.31.0

_Release Date: 11/05/2020_

### Changed
- BimWalk: When focusing on an element ignore gravity

### Added
- Arc measure mode in the measure tool to measure circular arcs

### Fixed
- Fixed markups initialized with large stroke width
- Fixed snapping in PDF child groups
- Theming color not applied on Android

## 7.30.0

_Release Date: 10/22/2020_

### Changed
- The native DWF loader is now published as a separate npm package. Internal customers who consume LMV from Artifactory and wish to include the native DWF loader extension must include the `@adsk/lmv-ext-dwf` dependency and incorporate it into their builds. CDN customers are unaffected by this change.

### Added
- Added an event which will be triggered every time delete button in measurement panel is clicked
- Added APIs to the tool controller to set the tool modalities

### Fixed
- Fixed SceneBuilder empty model error.

## 7.29.0

_Release Date: 10/08/2020_

### Changed
- Fix settings panel drop down item width
- Do not show the full screen button if document.fullscreenEnabled is set to false.
- Forge Viewer will start collecting usage analytics not tied to a particular user from version 7.29 onwards for purposes of supporting and improving the Forge Viewer_._ If you do not wish to participate, you may opt-out of this feature using `Autodesk.Viewing.Private.analytics.optOut()` method.

### Added
- Getter for measure tools isolate mode
- Add Search Text capability for Vector PDF documents.

### Fixed
- Restore 3D light preset after switching from 3D -> 2D -> 2D -> 3D
- Speed up the execution of the Hide Selected context menu item.
- Fix PDFs containing isolated groups.
- Fixed opaque markups in native PDFs.

## 7.28.0

_Release Date: 09/24/2020_

### Changed
- Use Forge logo as the loading spinner.

### Added
- The gizmo in SectionBox is centered when it is out of bounds
- Tracked event when an extension is loaded
- Tracked event when an extension is unloaded
- Added option parameter to `viewer.search` API. The only option supported now is `searchHidden: true/false` to search for hidden properties
- Text Search provider for searching text with 2D files by filtering user’s search query
- Add StringExtractor extension for retrieving and formatting text from 2D files

### Fixed
- Preserve preferences in localStorage for each viewer instance.

## 7.27.0

_Release Date: 09/14/2020_

### Changed
- Use Forge logo as the loading spinner.
- Moved Mixpanel to MixpanelProvider extension.

### Added
- Auto-choose endpoint based on model URN.

### Fixed
- Regression in `v7.25` where some pdfs opens blank
- Selection for PDFs containing more than 4096 dbIds.
- Fixed docking panel resize after a viewer resize
- Wrong properties displayed for PDFs when they are loaded from OTG/Fluent endpoint

## 7.26.1

_Release Date: 08/28/2020_

### Fixed
- Fixed an error when restoring a state with cutplanes without enabling the section tool
- Fixed an error with the contextual sub menus

## 7.26.0

_Release Date: 08/27/2020_

### Changed
- Changed Mixpanel batch size to maximum 500 events (default value is 50).
- Changed Mixpanel batch flush interval to 15 seconds (default value is 5 seconds).

### Added
- New `override` parameter added to Profile#apply gives the option of not overriding an existing preference.
- Support multiple models for the “Section Plane” option in the context menu.
- Ability to group context menu items into submenus.
- Added localized view cube for the Norwegian language.

### Fixed
- The Model Browser now works correctly when loading subsequent 3D models from native DWF.
- Fix memory leak when loading PDFs.
- Displaying decimal m-and-cm and ft-and-in correctly when precision rounds the smaller unit to the maximum value.
- It was not possible to bring up the context menu on mobile after enabling the section tool.
- Added missing localization strings for the context menu.

## 7.25.1

_Release Date: 08/21/2020_

### Fixed
- Fixed a regression in `v7.25` where some pdfs opens blank

## 7.25.0

_Release Date: 08/13/2020_

### Changed
- Ability to configure mapping of the Mac `cmd` key through Profile Settings. This is done by intercepting keydown event for `cmd` key and triggering the default keydown event for the`ctrl` key.

### Added
- Lodash library, custom build. Includes throttle and debounce. Created by running: `lodash include=debounce,throttle exports=amd`
- Added `RenderContext#useOverlayAlpha` to enable or disable blending of transparent backgrounds with overlays
- Added a second boolean parameter MeasureExtension#setFreeMeasureMode to enable free mode measurements to use the previous measurement’s viewport.

### Fixed
- Measure or calibration units are sometimes reset unexpectedly

## 7.24.0

_Release Date: 07/30/2020_

### Changed
- Extension Autodesk.Edit2D now allows linear shape labels to optionally display ‘ft’ and ‘in’ in place of ‘ and “ respectively.

### Added
- ReCap extension now has multi-client live editing for creating, updating, and deleting annotations
- ReCap extension differentiates annotations created with ReCap Pro and Forge Viewer. ReCap Pro annotations are not be editable.
- Groundwork for handling and importing ViewState into the ReCap extension

### Fixed
- Highlight the Boardwalk for the AEC profile in the settings panel.
- Load default environment background when Prefs3D.LIGHT_PRESET is set to an incorrect value
- Unit conversion for area and volumes
- Blend modes for some PDFs.
- Crash when loading files with unicode-encoded characters.
- An infinite lock when panning while uninitializing `ToolController`.
- Measure calibration units settings now match the preferences
- Performance improvement for PDFs with many image masks.
- ScanId from legacy xml in ReCap Pro will be loaded correctly.
- Issue in the ReCap extension where freeform annotation transparency would reset when moving.

## 7.23.0

_Release Date: 07/16/2020_

### Changed
- Webpack config for easier debugging in development
- Updated icons to SVG format
- Displayed line segments with proper occlusion
- Rounded up of value of measurement

### Added
- New option `ifcLevelsEnabled` in Levels extension. When true it will extract levels from IFC data.
- MEASUREMENT_COMPLETED_EVENT event and trigger it when all picks have been set
- Search Manager and search providers.
- Support for partial scan
- Button to hide/show project browser
- Navigation icon to rotate camera to look-at selected annotation
- Highlighted selected annotation
- Live preview for distance and markup creations
- Handling of legacy XML sync file

### Fixed
- Call F2DLoader directly to load 2D DWF models
- The DWFLoader onSuccess callback wasn’t getting called. Calling the DWFLoader onSuccess callback added the model to the viewer twice.
- Partial model loading could result in object-level metadata and selection id inconsistencies
- Incorrect annotation locations
- Issues with mini map
- Issues with CSS conflicts on container site
- Attachments loading from ReCap project file

## 7.22.0

_Release Date: 07/02/2020_

### Changed
- The outline noise for the NPR extension is no longer turned on by default.

### Added
- Use the latest firefly.dwf package that contains fixed for loading 2d dwf models.
- Added a checkbox to the NPR option panel to toggle the outline noise.
- Added a slider to the NPR option panel to control the size of the outline.
- ‘Autodesk.Explode’ to 2D GuiViewer3D cleanup extension list
- Added display units and precision to settings panel. These are saved as `displayUnits` and `displayUnitsPrecision` preference

### Fixed
- Handling of bump and normal maps in Standard Surface extension

## 7.21.0

_Release Date: 06/18/2020_

### Changed
- Swap displayed labels on radio buttons for DiffTool compare in order to display correct document version.

## 7.20.0

_Release Date: 06/03/2020_

### Changed
- Partial reorder in `initEscapeHandlers` functionality and precondition for Section tool deactivation.

### Added
- Tutorials for loading, using, and customizing the Edit2D extension.

### Fixed
- LMV-5480 - Phong materials. Material color and specular are no longer modified by LMV when the material is added. This allows vertex colors to be visible.
- Prepare a File for the Viewer link

## 7.19.0

_Release Date: 05/21/2020_

### Changed
- Reverse zoom direction for AEC profile
- Changed Design Diff Changes Popup behavior.
- Pivot point behavior upon BimWalk exit

### Added
- New option, `navToolsConfig.isAECCameraControls`, in viewer configuration that adds only Fit To View to camera interactions.
- Prefs3D.FORCE_DOUBLE_SIDED preference that will turn on or off double sided materials.
- Add outline noise when using the Autodesk.NPR extension.

### Fixed
- Uncommon error after a diff failed between two versions.
- Error handling in AggregatedView when model couldn’t be loaded.
- Draw missing PDF fill patterns.
- Typo in an AlertBox image (from `img-unloack` to `img-unlock`). The old css rule for `img-unloack` is still active to support old code.
- Material load exception for materials containing decals
- Some DWFx files can’t be measured
- Add missing selection type localization strings.
- Error loading property db from fluent server for some dwg files

## 7.18.0

_Release Date: 05/07/2020_

### Changed
- Add optional callback instead of url string in Autodesk.Viewing.theExtensionManager.registerExternalExtension
- Changing the default for analytics to `opt out`

### Added
- New option in Scenebuilder api `addNewModel({ createWireframe: true })` causes edges to be generated for indexed geometry. Without indices, the edges may not be generated properly.
- LMV-5358 - Added api to Viewer3D for the scene and sceneAfter THREE.Scenes
- PDF: Added support for gradient fill colors.
- AggregatedView now supports customizing which extensions are loaded through `options.extensions`
- Added attribName and searchAncestors options to the VisualClusters extension

### Fixed
- Problem with eye icons in the model browser for SceneBuilder scenes
- Viewer CSS breaks third-party application’s styles

## 7.17.1

_Release Date: 04/29/2020_

### Fixed
- material load exception for materials containing decals

## 7.16.1

_Release Date: 04/29/2020_
- material load exception for materials containing decals

## 7.15.3

_Release Date: 04/29/2020_

### Fixed
- material load exception for materials containing decals

## 7.17.0

_Release Date: 04/23/2020_

### Added
- LMV-5396 - Added initial DWF Loader
- LMV-5341 - Added SceneBuilder tutorial.
- Add `isOTGCompareDisabled` option to Design Diff extension
- Added `Prefs3D.BIM_WALK_GRAVITY` to store the BimWalk gravity through the Viewer’s profiles.

### Fixed
- Inconsistency in viewcube compass
- LMV-5392 - Fixed theming for SceneBuilder scenes.
- Fixed `aggregateIsolate` throwing an exception on a model created with SceneBuilder api
- LMV-5416 - Fixed Scene Builder Model display in the Model Browser Panel
- Fixed Wireframes extension
- Render polygon offsets for models that contain lines.
- LMV-5422 - Fixed draw edges issue in overlays.
- Problem with eye icons in the model browser for SceneBuilder scenes

## 7.16.0

_Release Date: 04/09/2020_

### Changed
- Do not restore the VIEW_TYPE preference when a default view exists for the model
- Removed zoom limitations from 3d models
- Removed zoom-out limitation from f2d (non-leaflet)
- Maximum zoom-in will be based on the thinnest line

### Added
- Viewer collects and sends analytics information by default
- Ability for VisualClusters extension to work with attribute data attached to ancestor nodes.
- Profile setting value avp.Prefs2D.DISABLE_PDF_HIGHLIGHT can be used to disable the object highlight for vector PDFs.

## 7.15.2

_Release Date: 03/30/2020_

### Added
- Viewer collects and sends analytics information by default

## 7.15.1

_Release Date: 03/27/2020_

### Fixed
- Fixed error when loading PDFs in IE11.

## 7.15.0

_Release Date: 03/26/2020_

### Changed
- Allow Fit to View on 2D/3D hybrid models (i.e. Hypermodeling)

### Fixed
- Fix fullScreen in iOS to get viewer to expand to full height and width

## 7.14.0

_Release Date: 03/12/2020_

### Added
- 2D Edit extension now allows users to query toolsets by name.
- New extension `Autodesk.AEC.Hypermodeling` allows the placement of Revit 2D sheets on top of 3D models.

### Fixed
- Minimap extension UI fixes
- Section box gets removed after clicking “Done” in the measure tool.

## 7.13.1

_Release Date: 03/03/2020_

### Changed
- Improved rendering of Standard Surface materials with height (bump) maps on Windows machines

## 7.13.0

_Release Date: 02/27/2020_

### Added
- `Autodesk.AEC.SheetSyncExtension`: An extension that syncs between a 3D model and its corresponding 2D sheet.
- Added SELECTION_SETS_PIVOT preference that will automatically reset the pivot point to the center of selected object(s).

### Fixed
- An issue with restoring viewer to its default dimensions

## 7.12.0

_Release Date: 02/13/2020_

### Changed
- Do not force calibration for PDF models and set the default units to points.
- Measure tool will restore existing measurements when the tool is reactivated.

### Added
- Store the ViewCube views as persistent preferences.
- Avatar Extension: An extension that displays an avatar on a 2D sheet, based on a target viewer’s 3D camera.
- Added switch for free measure in the measurement settings panel.
- Added `measureExt.deleteMeasurements` to remove all measurements.
- Support for Standard Surface materials in SVF via the `Autodesk.StandardSurface` extension
- `waitForLoadDone` and `isLoadDone` methods to Viewer3D API

### Fixed
- After zooming is done, there is a delay in restarting progressive rendering.
- 3D objects are not focused when you select an object from a 2D sheet and view it in 3D.
- `computeObjectBounds` function did not work as expected for selection proxies.
- Minimap Extension: Sheet remained visible when toggling during the zoom-in transition.
- Fixed an issue on mobile devices when a touch event doesn’t contain `e.target.className`.
- Unable to snap to a specific PDF document.
- Fixed double encoding of urls in PDFLoader.
- Standard Surface materials with transmission maps now render with correct transparency

### Removed
- Remove blue highlight when selecting the x, y or z section planes.

## 7.11.0

_Release Date: 01/30/2020_

### Changed
- Extension `Autodesk.AEC.Minimap3D` features a new level selection dropdown UI.

### Added
- Method `GuiViewer3D.registerCustomizeToolbarCB(callbackFunction)` to register a callback function that gets invoked each time the viewer gets resized. The callback’s signature is `function (viewer, width, height)`. The callback function is also invoked whenever a new extension gets loaded.
- Settings Panel option that enables/disables line-animations when loading PDF files.
- Profile setting value `avp.Prefs2D.LOADING_ANIMATION` can be used programmatically to control whether line-animations are enabled for PDF files.
- A context menu entry that allows users to select an object from a 2D sheet and view it in 3D.
- Support for `options.priority` into `viewer.addEventListener(eventId, callback, options)`. Allows callbacks with higher priorities to be invoked first.
- `MeasureExtension.setMeasurements()` function restores measurements that were saved by the `MeasureExtension.getMeasurementList()` api.
- Support for rendering PDF fill image patterns.

### Fixed
- Extension `Autodesk.AEC.Minimap3D` is now localized.
- Runtime error in `model.getPageToModelTransform()` when viewports are not available.
- BLMV-3897 Fix issue where `BimMarkups` extension could not load a non-standard arrow-callout markup.
- Fixed an issue loading the viewer from data urls
- `getPropertiesSubsetWithInheritance` function was not returning properties correctly for objects that had more than one subset property
- Do not show the blue section plane when restoring a viewer state that contains cutplanes.
- LMV-5281 Viewer no longer pollutes css className `.card`, which clashes with Bootstrap’s css.
- LMV-5188 Release memory on `viewer.finish()`
- LMV-5241 MSDF text not clipped correctly.

## 7.10.0

Release Date 2020-01-16

### Changed
- Added a new Clipping implementation for PDFs with performance improvement.

### Added
- LMV-5272 A new Preference value `avp.Prefs3D.EXPLODE_STRATEGY` to control which algorithm (hierarchical or radial) gets used when using the explode feature.
- Blending Mode support for PDFs.
- This version will attempt to initialize using a WebGL2 and will fallback into WebGL1.

### Fixed
- LMV-5257 PDF background turns black when it’s white in the source PDF.
- LMV-5226 “Open properties on select” setting does not work on multiple models.
- PDF opened as raster instead of vector.
- BimWalk toolbar button doesn’t work when you change the navigation tool programmatically.
- LMV-5272 Explode tool is not working well for manufacturing-specific models.
- WebGL errors when rendering section outlines as a 2D material in a 3D material world when using WebGL2 context.
- Snapping to arc centers was broken.

## 7.9.0

_Release Date: 12/17/2019_

### Added
- Apply clip regions to path outlines to improve 2D viewing solution.
- LMV-5175 Performance improvement for the PDFs that contain inline image group.
- LMV-5214 Support to load properties for PDFs.
- Allow users to specify `bypassds` flag when requesting a manifest.

### Fixed
- Minimap camera rotation direction.
- PDFLayers: PDF sheet loads blank when it doesn’t have the layer information.
- LMV-5236 Some characters of text were missing from Vector PDFs.
- SheetThumbnails: Requesting sheet thumbnails failed with CORS-request when the viewer was initialized without useCookie=true.
- Multiple render target code path is not working in the latest version of Chrome.

## 7.8.0

_Release Date: 12/05/2019_

### Added
- LMV-5153 Viewer3D.lockVisible(dbids, lock, model) - Keep visibility ON despite having parent dbIds OFF.
- LMV-5153 Viewer3D.lockExplode(dbids, lock, model) - Prevent specific dbIds from reacting to the explode operation.
- LMV-5153 Viewer3D.lockSelection(dbIds, lock, model) - Prevent specific dbIds from getting selected and highlighted.
- LMV-5127 BimWalk extension’s `Toggle Gravity` UI checkbox available in Settings Panel.
- Support for options.env values `FluentProductionEU` and `FluentStagingEU`.
- When entering and leaving the measure mode, Viewer fires new events: Autodesk.Viewing.MeasureCommon.Events.MEASUREMENT_MODE_ENTER and Autodesk.Viewing.MeasureCommon.Events.MEASUREMENT_MODE_LEAVE.

### Removed
- BubbleNode.getPlacementTransform and BubbleNode.getHash functions have been deprecated.

### Fixed
- BLMV-3772 Vector-PDF not supported in Europe
- viewer.setView() did not work for georeferenced models
- Improved and simplified directed zoom in Minimap
- Keyboard processing issues with multiple viewers side-by-side
- LevelExtension: LevelsPanel button not appearing if toolbar was not ready
- RenderContext: depthWrite was not always updated correctly for depthMaterials
- While using Viewer3DImpl.syncCamera, the camera was not consistently updated
- Always load the dbId mapping file

## 7.7.0

_Release Date: 11/21/2019_

### Changed
- LMV-5170 Extension `Autodesk.PropertiesManager` now controls addition of Property Panel’s toolbar button. GuiViewer3D loads the extension by default.

### Added
- LMV-5163 Dashed Line support into PDFLoader.
- LMV-5092 PDF supports measurement from the center of a circle.

### Fixed
- Fix `modelMemoryTracker` bug where `getByteLength` returns undefined.
- Propagate error when PDF file fails to load.
- LMV-5205 Fixed a regression in WebGLRenderer that caused occasionally missing meshes.
- LMV-5142 Animation shows objects that should be invisible.
- LMV-5171 Fix transform translations when using placement transform.
- LMV-4920 HyperlinkTool error when loading DWG.
- LMV-5171 load option `applyScaling`: ‘mm’ is forcing all fragments to origin.
- LMV-5063 Performance issue with 2d selection.
- LMV-4821 PDF text was not getting cropped correctly.
- LMV-4920 HyperlinkTool error when loading DWG.
- LMV-5090 Display view properties in the property panel when a view is selected.
- LMV-5146 glyph rendering transformation issue in PDF.
- LMV-5174 Transparent texts shows up in black in the PDF document.
- LMV-5176 Color UI for 4 arrows on ViewCube compass.
- BLMV-3716 Vector PDF cannot be calibrated on iOS.
- BLMV-3741 Error propagation when failing to load a PDF file.
- BLMV-3753: Duplicate entries in Layers Panel when option underlayRaster was enabled.

## 7.6.1

_Release Date: 11/11/2019_

### Fixed
- Prevent ViewCube’s Compass from displaying by default in non-AEC models.

## 7.6.0

_Release Date: 11/07/2019_

### Changed
- Extension `Autodesk.ModelStructure` now controls addition of Model Browser’s toolbar button. GuiViewer3D loads the extension by default.

### Added
- LMV-2837 - Viewcube compass, which provides visual indicators for north, south, east and west directions.
- BimWalk - Added `jumpToFloor` API.
- RenderContext: Allow custom shapes to define their own edge opacity via material’s edgeOpacity attribute.

### Fixed
- LMV-5134 Issue where Model Browser would display an incorrect number of models when multiple ones are loaded.
- LMV-4171 Measurement inconsistencies when “isolate measurements” options is checked.
- BLMV-3685 There is an unexpected tooltip shown when move explode submenu bar (IE).
- Hide tooltip on explode slider.
- Pixel Compare - Disable color button and visibility buttons on side-by-side mode.
- Vector-PDF - Fix underlayRaster race condition.
- LMV-4936 Fixed problem with thin arcs and circles on mobile.
- BLMV-3699 Toolbar missing after switching Vector PDF sheets while using underlayRaster option.
- BLMV-3684 PushPin extension - corrupted seedUrns
- LMV-4916 Autodesk.Viewing.shutdown() no longer breaks the property db loader

## 7.5.1

_Release Date: 10/24/2019_

### Fixed
- LMV-5132 Issue where PDF layers were not working.

## 7.5.0

_Release Date: 10/22/2019_

### Fixed
- Selection did not work on animated Otg model fragments.
- BLMV-3501 Issue where some DWG 2D sheets would not load on mobile devices.
- BLMV-3666 Minimap UI buttons missaligned in Internet Explorer.
- BLMV-3658 Keep section planes when saving Markups.
- BLMV-3688 iPad detection on iOS 13
- BLMV-3676 Minimap3D: disable side-by-side and minimap buttons while in split view mode.

## 7.4.2

_Release Date: 10/17/2019_

### Fixed
- LMV-5151 Orbit does not work in IE11

## 7.4.1

_Release Date: 10/16/2019_

### Fixed
- Fix bugs in the new Scene Builder API.

## 7.4.0

_Release Date: 10/08/2019_

### Changed
- BLMV-3638 Disable explode UI when creating or editing a pushpin.
- LMV-4862 Updated default memory budgets used by the `Autodesk.MemoryLimited`extension.

### Added
- LMV-4933 SceneBuilder API.
- LMV-2675 `Autodesk.ProfileUi` extension, which can be used for switching to existing viewer profiles.

### Fixed
- LMV-4927 Issue with the Layers Panel where parent-children relationships were not displayed correctly.
- BLMV-3622 Pixel Compare: Issue where sometimes the DiffTool would display inconsistent results on Leaflets.
- BLMV-3621 Pixel Compare: Background changes color after clicking on visibility button.
- BLMV-3619 Pixel Compare: Navigation toolbar was missing in diff mode.
- BLMV-3644 Pixel Compare: Handle models without background.
- Crash in AEC HyperlinkTracker in cases where no sheets are found.
- BLMV-3624 Unable to load PushPin issue when seedUrn was missing.
- Separate the CSS styles with comma.
- LMV-4971 New popout extension.
- Errors when when using snapping for 3D lines.
- LMV-4863 Unresponsive error in memory limited mode.
- LMV-5023 PDF: Display progress bar while downloading content.

## 7.3.0

_Release Date: 09/18/2019_

### Changed
- LMV-4929 Profiles API is now official.
- Pixel Compare - Supports Vector-PDFs.
- LMV-4872 Change consolidation works when using theming and ghosting.

### Added
- LMV-4871 Method `setFreeMeasureMode(bool)` to `Autodesk.Measure` extension, which allows measuring from any location.
- LMV-4725 AEC Navigator for the `BimWalk` extension. Gives users an experience similar to the Navisworks and Revit first-person tools.
- `viewer.hitTest()` extends its implementation to also intersect objects from `sceneAfter`.
- LMV-4935 `getMeasurementList` and `getCalibration` APIs to get the list of measurements on the canvas and calibration values.
- Extension `Autodesk.Snapping`, which exposes a tool for snapping to geometry: `Autodesk.Extensions.Snapping.Snapper`.

### Removed
- Hotkey for activating the Field-of-View tool ( Ctrl + Shift ). Users can still access the functionality by using the appropriate toolbar button.
- Hotkey for activating the Roll tool ( Alt + Shift ). Users can still access the functionality by using the appropriate toolbar button.

### Fixed
- LMV-4873 Bubble nodes are sorted based on the order number provided in the bubble.json
- LMV-4877 DWG layers in external references do not turn on/off.
- LMV-4913 Model Browser and Selection wouldn’t work when Property Database contained cycles.
- LMV-4952 Fix Prism wood material problem when using different canvases.
- Regression: Extensions fail to load in multiple viewer instances.

## 7.2.1

_Release Date: 09/06/2019_

### Fixed
- Regression when loading external ids.

## 7.2.0

_Release Date: 08/15/2019_

### Changed
- Force calibration for vector PDF
- LMV-4861 Clicking in Model Browser will now isolate objects.
- LMV-4702 Extension `Autodesk.LayerManager`_ controls whether the Layers Panel button gets added to the toolbar. This extension is loaded by default.
- LMV-4904 A single preference can have multiple registered callbacks. See `Autodesk.Viewing.Private.Preferences#addListeners`_.

### Added
- Toolbar button to select text in PDF files.
- LMV-4281 Layer support to PDF files
- LMV-4914 `PDF Extension`_: Add support for `options.enableHyperlinks` and `options.enableTextSearch`. Both are true by default.
- LMV-4675 `Autodesk.Viewing.UI.DataTable`_ component
- LMV-4867 Beta release of `Autodesk.Viewing.Profile`_. A Profile can be used to apply settings and load/unload extensions from the Viewer.

### Fixed
- Fixed `attributesVersion` bugs on pushpin’s metadata
- LMV-4901 Infinite recursion in Fusion Orbit
- LMV-4724 Reset view frustrum and clipping planes when zoomed into large model
- LMV-4937 MRT errors in Chrome 76

## 7.1.1

_Release Date: 08/09/2019_

### Fixed
- LMV-4928 ViewerStates that contain objectSets that are not generated by `viewer.getState()` will not be applied when calling `viewer.restoreState(state)`.

## 7.1.0

_Release Date: 07/30/2019_

### Changed
- LMV-4715 Hyperlinks in PDF files will now preview destination page on hover.
- LMV-2910 `Autodesk.Section` extension will now take into account the cut planes set by `viewer.setCutPlanes()`.
- LMV-4810 Progress bar renders blue only when the memory limited extension is active (not just loaded).
- BLMV-3444 BimWalk no longer disables the section tool.
- Markup error handler returns error key as the second parameter.

### Added
- `Autodesk.BIM360.GestureDocumentNavigation` extension.
- `Autodesk.BIM360.RollCamera` extension.
- `Autodesk.BIM360.Minimap` extension.
- `Extension.load()` may now return a Promise.
- LMV-4783 thumbnail view to `Autodesk.DocumentBrowser` extension.
- LMV-4726 context menu option “Section Box”. Places a section box around the selected model object(s). `Autodesk.Section#setSectionBox`
- LMV-4834 context menu option “Section Plane”. Places a section plane at the selected point. `Autodesk.Section#setSectionPlane`
- LMV-4554 Multiple model support to methods `viewer.getState()` and `viewer.restoreState()`.
- Event `LOADER_LOAD_FILE_EVENT`
- Event `AGGREGATE_HIDDEN_CHANGED_EVENT`
- Method `model.getProperties2(...)` which will avoid including `externalId` data in the result set. This speeds fetching property data and reduces memory footprint when `externalId` values are not required.
- Method `model.getBulkProperties2(...)`. Similar benefits to `model.getProperties2(...)`.

### Fixed
- `Minimap3DExtension`: Fix missing view node.
- Send correct tool with `TOOL_CHANGE_EVENT` event
- A trap that caused directional zoom when using own tools
- BLMV-3461 Runtime error when unloading a Leaflet model.
- Measure: Fix measurement type changing bug.

## 7.0.4

_Release Date: 07/23/2019_

### Fixed
- LMV-4860 Extensions no longer load twice on first load when using `viewer.loadDocumentNode()`

## 7.0.3

_Release Date: 07/15/2019_

### Fixed
- The entire model getting selected when you select a group node in the model browser while using geometry consolidation.

## 7.0.2

_Release Date: 07/12/2019_

### Fixed
- Runtime error when URL contains “viewermemory” parameter.

## 7.0.1

_Release Date: 07/10/2019_

### Fixed
- 2D models not loading properly in the Firefox browser.
- Progress bar initial width.

## IMPORTANT

### BREAKING CHANGES: LMV 7.0

This major release, LMV 7.0, contains breaking changes to better accommodate upstream merges, specify new file loaders, reduce package size, and improve performance.

We strongly recommend that you specify the version of Viewer code you are using for web applications deployed in production. By including a specific version number, you can update your application as necessary to accommodate breaking changes and dictate when to migrate to the next version. To learn how to load version-specific Viewer libraries, refer to the section “Getting the Code” in `Developer's Guide Basics`_ .

## 7.0.0

_Release Date: 06/25/2019_

### Changed
- `ViewingApplication` is bundled into its own javascript file. See `Migration Guide`_ .
- `viewer.loadModel()` API now async and returns a promise
- LMV-4482 Non-photorealistic rendering feature moved into extension `Autodesk.NPR`
- View cube APIs were moved to extension `Autodesk.ViewCubeUi`
- `Document.getMessages` no longer accepts plain GUID. Use `Document.getRoot().findByGuid()` to obtain the corresponding BubbleNode.
- `Document.getViewGeometry` returns BubbleNode instead of raw JSON
- Pushpin thumbnails generate only when supplying `generateIssueThumbnail` or `generateRFIThumbnail` in the extension’s options.

### Added
- LMV-4431 JavaScript bundle `viewerCE.min.js`, compact library with enough capabilities to load SVF and F2D models.
- Global shutdown API `Autodesk.Viewing.shutdown()` to shutdown the application properly and free up memory.
- Namespace `Autodesk.Viewing.ScreenShot` containing static functions for capturing viewer screenshots.
- LMV-4678 2nd argument `userData` into `model.getPropertyDb().executeUserFunction(userFunction, userData)`.
- LMV-2958 2nd argument `opacity` into `set2dSelectionColor(new THREE.Color(r,g,b), opacity)`
- Option to display a toolbar vertically `new avu.ToolBar('toolbar-id', { alignVertically: true });`
- LMV-4522 `Extension.onToolbarCreated(toolbar)` API.
- Compact vertex buffer support to `VertexBufferReader`
- `viewer.overlays` which exposes APIs for adding overlay scenes, meshes, etc.
- `viewer.unloadModel()`, `viewer.hitTest()`, and `viewer.refresh()`.
- `model.getFragmentPointer()` which exposes the `FragmentPointer` class of a specific fragment in the model.
- APIs to change the zoom dolly speed: 

```
    var tool = viewer.toolController.getTool('dolly');
    tool.setDollyDragScale(value); //Drag Speed
    tool.setDollyScrollScale(value); //Scroll Speed
```

- Zoom speed and scroll wheel speed slider controls added to Settings.
- LMV-4714 Canadian-French local language support.
- Pinch gesture support into extension `Autodesk.BimWalk`.
- Extension `Autodesk.Fusion360.Animation` can be now configured in a panel accessible from the Settings Panel.
- `headless` viewer support for `Autodesk.DiffTool` extension.
- LMV-4626 Extension `Autodesk.NPR` can be now configured in a panel accessible from the Settings Panel.
- Panning ability for `3D Minimap`.

### Removed
- `viewer.getToolbar(true)` no longer creates a toolbar. Function no longer takes any parameters.
- `viewer.getToolbarProm():Promise` - Refer to migration guide: `Migration Guide`_ .
- `viewer.playAnimation(callback)` - Refer to migration guide: `Migration Guide`_ .
- `Document.getViewableItems(document)` - use `Document.getRoot().findAllViewables()` instead.
- `Document.getItemById(id)` - use `Document.getRoot().findByGuid()` .
- `Document.getPropertyDbPath` - Use `Document.getFullPath(Document.getRoot().findPropertyDbPath())` to populate this field, in case you are calling `Viewer3D.loadModel` directly and not using `loadDocuementNode`, which populates the property automatically.
- `Document.getRootItem` - use `Document.getRoot()`
- `createItem(data)` method from extension `Autodesk.BIM360.Extension.PushPin`; it has been replaced by `loadItems([data])` .
- `RESET_EVENT` - No part of the code was firing the event; few classes where responding to it.
- `viewer.load()`, replaced by `viewer.loadModel()` .
- `viewer.isolateById()`, replaced by `viewer.isolate()` .
- `viewer.displayHomeandInfoButton()` .
- `MarkupsCoreUtils.getClipPathId()`, replaced by `MarkupsCoreUtils.getUniqueID()` .

### Fixed
- Pushpin label with spaces bug.
- CrossFadeEffect artifact bug on 2D.
- Pushpin selection bug on iOS.
- Pushpin visibility button bug.
- LMV-4235 slow 2d model.
- Visibility animation.
- Selection color to the blender shader.
- Minimap cleanup error when deactivating the tool.
- Inconsistent functionality of the toolbar bug.
- When an extension exists in `loadExtensionLocal`, return it instead of loading it again.
- Pixel compare was broken.
- Empty fontCache bug when changing sheets.

---
원본 문서: https://aps.autodesk.com/en/docs/viewer/v7/change_history/changelog_v7
