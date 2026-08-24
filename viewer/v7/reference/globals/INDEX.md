---
document_type: "sdk-reference-index"
product: "Viewer SDK"
surface: "viewer-v7"
category: "globals"
protocol: "JavaScript SDK"
language: "en"
generated: "true"
---

# globals

[SDK reference index](../INDEX.md) · [Viewer SDK v7 index](../../INDEX.md)

## Overview

Global functions, properties, callback types, initialization options, preferences, and shared typedefs.

## SDK reference

| Symbol | Purpose | Documentation |
| --- | --- | --- |
| AggregatedResult | - | [Open reference](./TypeDefs/AggregatedResult.md) |
| AttributeLayout | Describes one attribute within an interleaved vertex buffer. | [Open reference](./TypeDefs/AttributeLayout.md) |
| AttributeType | Numeric values and their meanings associated to [PropertyResult.type](https://aps.autodesk.com/en/docs/viewer/v7/reference/globals/TypeDefs/PropertyResult/). | [Open reference](./Properties/AttributeType.md) |
| cloneHTMLElementsToWrapperElement | Helper method to create a wrapper HTML element that contains all HTML elements specified. CSS styles are preserved. The wrapper element is sized to match the viewer’s canvas size, and the elements are positioned relative to the viewer’s canvas. This is useful for capturing HTML elements in a screenshot using html2canvas. | [Open reference](./Functions/cloneHTMLElementsToWrapperElement.md) |
| create | Initialize the view cube and the home button. This method is called when the extension is loaded. | [Open reference](./Functions/create.md) |
| EventHistoryChangedData | The event data to identify the action and target for MarkupCore.EVENT_HISTORY_CHANGED event. | [Open reference](./TypeDefs/EventHistoryChangedData.md) |
| Extensions | Contains information about which extension should or should not be loaded. | [Open reference](./TypeDefs/Extensions.md) |
| forEachCallback | This callback is displayed as a global member. | [Open reference](./TypeDefs/forEachCallback.md) |
| FPS_TARGET_MODES | Modes to set the FPS target when progressive rendering is enabled. | [Open reference](./TypeDefs/FPS_TARGET_MODES.md) |
| GeometryChangedCallback | - | [Open reference](./TypeDefs/GeometryChangedCallback.md) |
| GetPropertiesResult | Object with properties associated with a dbId. | [Open reference](./TypeDefs/GetPropertiesResult.md) |
| GlobalManagerMixin | Adds the GlobalManagerProvider methods to the prototype of another class. | [Open reference](./Functions/GlobalManagerMixin.md) |
| GlobalManagerProvider | Helper class that can be inherited from to store a reference to the GlobalManager and provide convenience methods to the global objects managed by the GlobalManager. | [Open reference](./Classes/GlobalManagerProvider.md) |
| InitOptions | - | [Open reference](./TypeDefs/InitOptions.md) |
| InitParametersSetting | - | [Open reference](./Properties/InitParametersSetting.md) |
| InstancesCallback | - | [Open reference](./TypeDefs/InstancesCallback.md) |
| Intersection | Object that is returned by the ray cast and hit test methods for each scene object under the given canvas coordinates. | [Open reference](./TypeDefs/Intersection.md) |
| LMV_RASTER_PDF | When true, the viewer will favor loading the Leaflet derivative over the PDF file, ignoring the manifest value for `totalRasterPixels`. When [LMV_RASTER_PDF](https://aps.autodesk.com/en/docs/viewer/v7/reference/globals/Properties/LMV_RASTER_PDF/) is true, this value is ignored. | [Open reference](./Properties/LMV_RASTER_PDF.md) |
| LMV_THIRD_PARTY_COOKIE | When true, requests to APS are authenticated with a cookie. When false, requests to APS are authenticated with an Authentication header. When undefined, the viewer will first try authentication via cookie, if that doesn’t work it will fallback to using an Authentication header. | [Open reference](./Properties/LMV_THIRD_PARTY_COOKIE.md) |
| LMV_VECTOR_PDF | When true, the viewer will favor loading the PDF file over the Leaflet derivative, ignoring the manifest value for `totalRasterPixels`. A true value will take precedence over [LMV_RASTER_PDF](https://aps.autodesk.com/en/docs/viewer/v7/reference/globals/Properties/LMV_RASTER_PDF/). | [Open reference](./Properties/LMV_VECTOR_PDF.md) |
| LMV_VIEWER_VERSION | Contains the Viewer’s version. | [Open reference](./Properties/LMV_VIEWER_VERSION.md) |
| MaterialChangedCallback | - | [Open reference](./TypeDefs/MaterialChangedCallback.md) |
| NavToolsConfig | Configuration object for the navigation tools | [Open reference](./TypeDefs/NavToolsConfig.md) |
| NodeTraverseCallback | Callback invoked for each node during a [Autodesk.Viewing.Scene.Node3D#traverse](https://aps.autodesk.com/en/docs/viewer/v7/reference/Scene/Node3D/#traverse/) walk. | [Open reference](./TypeDefs/NodeTraverseCallback.md) |
| Prefs | Contains viewer setting preference names that are available to both 3D and 2D models. | [Open reference](./TypeDefs/Prefs.md) |
| Prefs2D | Contains viewer setting preference names for 2D models. | [Open reference](./TypeDefs/Prefs2D.md) |
| Prefs3D | Contains viewer setting preference names for 3D models. | [Open reference](./TypeDefs/Prefs3D.md) |
| ProfileSettings | Object used for setting a viewer profile. | [Open reference](./TypeDefs/ProfileSettings.md) |
| PropertyResult | Element type for [GetPropertiesResult.properties](https://aps.autodesk.com/en/docs/viewer/v7/reference/globals/TypeDefs/GetPropertiesResult/). | [Open reference](./TypeDefs/PropertyResult.md) |
| RenderLayerOptions | Options for configuring a render layer. | [Open reference](./TypeDefs/RenderLayerOptions.md) |
| SearchResults | - | [Open reference](./Classes/SearchResults.md) |
| SelectionDef | - | [Open reference](./TypeDefs/SelectionDef.md) |
| setCompassRotation | - | [Open reference](./Functions/setCompassRotation.md) |
| Settings | Object used to apply the preferences by a Profile | [Open reference](./TypeDefs/Settings.md) |
| setViewType | Set the viewCube view type. | [Open reference](./Functions/setViewType.md) |
| showCompass | - | [Open reference](./Functions/showCompass.md) |
| SnapProvider | Externally registered snap providers are scoped per viewer instance (stored on the viewer as `_snapProviders`), so providers registered for one viewer never run inside another viewer’s Snapper. Each provider is a function `(snapResult, viewer, context) => boolean` that runs at the end of Snapper.onMouseMove, after any built-in model snapping AND also when the model was not hit at all (so providers can snap over empty space). `context` is `{ position, snapper }`, where `position` is the mouse position in canvas coords ({x, y}) for screen-space snapping and `snapper` is the Snapper instance (e.g. for `snapper.setDetectRadius(worldPoint)` / `snapper.getDetectRadiusInPixels()`). | [Open reference](./TypeDefs/SnapProvider.md) |
| ThemingColorChangedCallback | - | [Open reference](./TypeDefs/ThemingColorChangedCallback.md) |
| VertexAttributeReader | Reads a decoded vertex attribute (e.g. position or normal) for a single vertex into the provided output vector. | [Open reference](./TypeDefs/VertexAttributeReader.md) |
| VIEW_TYPES | ViewCube view types. | [Open reference](./TypeDefs/VIEW_TYPES.md) |
| Viewer3DExtraScene | LMV has two extra scene it renders along with the models. One is rendered before the models, and the other is rendered after the models. These scenes are THREE.Scene objects and you can add custom meshes to be rendered to either of the scenes. | [Open reference](./TypeDefs/Viewer3DExtraScene.md) |
