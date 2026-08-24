---
document_type: "sdk-reference-index"
product: "Viewer SDK"
surface: "viewer-v7"
category: "Extensions"
protocol: "JavaScript SDK"
language: "en"
generated: "true"
---

# Extensions

[SDK reference index](../INDEX.md) · [Viewer SDK v7 index](../../INDEX.md)

## Overview

Built-in and custom capabilities including measurement, markups, sectioning, navigation, PDF, and model building.

## SDK reference

| Symbol | Purpose | Documentation |
| --- | --- | --- |
| AnimationExtension | AnimationExtension adds a toolbar with buttons (play/pause/forward/backward/goto start/end) and timeline scrubber to control animation playback. The extension provides api methods that will be reflected by the animation toolbar. | [Open reference](./AnimationExtension.md) |
| BimWalkExtension | First Person navigation tool, similar to those found in videogames. Supports keyboard and mouse input. | [Open reference](./BimWalkExtension.md) |
| CrossFadeEffects | CrossFadeEffects extension provides API for implementing smooth fading effects in LMV, e.g. - CrossFading between models or model configurations (e.g. color theming, hiding objects etc.) - Image-based “ghosting” effect, i.e. showing a semitransparent snapshot of a model on top of another one. | [Open reference](./CrossFadeEffects.md) |
| DocumentBrowser | Adds a toolbar button that opens a Panel displaying all models and views available from the loaded Document. The panel allows navigating to any model referenced by the Document. | [Open reference](./DocumentBrowser.md) |
| Edit2DExtension | Edit2D extension provides API for implementing 2D vector editing. Loading the extension does not add UI or changes behavior in the viewer. Its purpose is only to provide a basis for other extensions and client applications. | [Open reference](./Edit2DExtension.md) |
| ExplodeExtension | Use its `activate()` method to enable the explode UI. | [Open reference](./ExplodeExtension.md) |
| Extensions | Each class in the Extension namespace is like a plug-in for Viewer SDK. The extensions provide a collection of classes you can use if you need to add specialized functionality to Viewer SDK. You can also create your own extensions if you need functionality not included by default. You probably won’t need to write your own extension, but if you do have a special requirement check out this tutorial on [writing your own extension](https://aps.autodesk.com/en/docs/viewer/v7/developers_guide/viewer_basics/extensions/). | [Open reference](../Extensions.md) |
| FullScreenExtension | **Deprecated: This extension is deprecated and will be removed in a future release.** | [Open reference](./FullScreenExtension.md) |
| FusionOrbitExtension | Provides a customization to the orbit tool. | [Open reference](./FusionOrbitExtension.md) |
| GeolocationExtension | Provides functions for converting GPS coordinates in WGS-84 format { x: Longitude, y: Latitude, z: Height(m) } into Viewer scene coordinates, and back. Supports a single model loaded into the scene. | [Open reference](./GeolocationExtension.md) |
| GestureDocumentNavigationExtension | **Deprecated: This extension is deprecated and will be removed in a future release.** | [Open reference](./GestureDocumentNavigationExtension.md) |
| glTF | Extension description | [Open reference](./glTF.md) |
| GoHomeExtension | Use its `activate()` method to animate the camera back to its default, home view. The extension doesn’t provide any UI. | [Open reference](./GoHomeExtension.md) |
| HyperlinkExtension | Enhances 2D models by adding in-canvas tooltips that on click will navigate the user to another 2D or 3D model. | [Open reference](./HyperlinkExtension.md) |
| LayerManagerExtension | Use its `activate()` method to open the LayersPanel UI. Layers are usually present in 2D models, but some 3D models may support layers as well, for example: AutoCAD. | [Open reference](./LayerManagerExtension.md) |
| MarkupsCore | Extension that allows end users to draw 2D markups on top of 2D and 3D models. | [Open reference](./MarkupsCore.md) |
| MeasureExtension | Provides UI controls to perform distance and angle measurements for 2D and 3D models. | [Open reference](./MeasureExtension.md) |
| MinimapExtension | Provides a 2d Minimap to show the view of the current document. | [Open reference](./MinimapExtension.md) |
| ModelBuilder | **Deprecated: This class is deprecated and will be removed in a future release. Use Scene API instead.** | [Open reference](./ModelBuilder.md) |
| ModelStructureExtension | Adds a toolbar button for accessing the Model Browser panel. | [Open reference](./ModelStructureExtension.md) |
| NavToolsExtension | Adds toolbar buttons to Orbit, Pan and Dolly. It also adds camera interaction buttons for Fit to View, Focal Length and Roll | [Open reference](./NavToolsExtension.md) |
| NPR | **Deprecated: This extension is deprecated and will be removed in a future release.** | [Open reference](./NPR.md) |
| PDFExtension | Registers a FileLoader to enhance `viewer.loadModel()` to allow loading of PDF files. The viewer will render a single page at a time. | [Open reference](./PDFExtension.md) |
| PopoutExtension | Extension to popout the viewer into child windows | [Open reference](./PopoutExtension.md) |
| PropertiesManagerExtension | Use its `activate()` method to open the Properties UI. | [Open reference](./PropertiesManagerExtension.md) |
| RollCameraExtension | Provides UI controls to perform rotation of camera view. | [Open reference](./RollCameraExtension.md) |
| SceneBuilder | **Deprecated: This extension is deprecated and will be removed in a future release. Use Scene API instead.** | [Open reference](./SceneBuilder.md) |
| SectionExtension | The SectionExtension provides ways to cut the geometry using planes or a cube. The extension adds a toolbar button to access the feature. | [Open reference](./SectionExtension.md) |
| SnappingExtension | Utility extension that provides access to the [Autodesk.Viewing.Extensions.Snapping.Snapper](https://aps.autodesk.com/en/docs/viewer/v7/reference/Snapping/Snapper/) tool. | [Open reference](./SnappingExtension.md) |
| SplitScreenExtension | This extension subdivides the LMV canvas into between 2 and 4 (inclusive) separate subcanvases. | [Open reference](./SplitScreenExtension.md) |
| ViewCubeUi | Create the UI for the view cube. | [Open reference](./ViewCubeUi.md) |
| ViewerSettingsExtension | Use its `activate()` method to open the Settings UI. | [Open reference](./ViewerSettingsExtension.md) |
| WireframesExtension | Provides the ability of rendering the model in wireframe mode. The method implemented is not very performant, so it’s best to avoid using it with large models. | [Open reference](./WireframesExtension.md) |
| ZoomWindow | The extension id is: `Autodesk.Viewing.ZoomWindow` | [Open reference](./ZoomWindow.md) |
