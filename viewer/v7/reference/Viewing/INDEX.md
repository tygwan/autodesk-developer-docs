---
document_type: "sdk-reference-index"
product: "Viewer SDK"
surface: "viewer-v7"
category: "Viewing"
protocol: "JavaScript SDK"
language: "en"
generated: "true"
---

# Viewing

[SDK reference index](../INDEX.md) · [Viewer SDK v7 index](../../INDEX.md)

## Overview

Viewer lifecycle, documents, models, navigation, events, tools, profiles, and render layers.

## SDK reference

| Symbol | Purpose | Documentation |
| --- | --- | --- |
| AggregatedView | AggregatedView implements a viewing application based on Viewer3D. Its purpose is to provide functionality around Viewer3D to facilitate implementation of viewer application workflows like switching between different views or toggling models on/off dynamically. | [Open reference](./AggregatedView.md) |
| AppScreenModeDelegate | Screen mode delegate allowing the viewer to go full screen. | [Open reference](./AppScreenModeDelegate.md) |
| BubbleNode | Wrapper and helper for “bubble” data. | [Open reference](./BubbleNode.md) |
| CoordinateSystem | Core class representing the Aggregated Coordinate System Space (ACS) and the Model Coordinate System Space, according to v3 schema definition. Reference: [https://git.autodesk.com/BIM360/visualization-schemas/blob/35c5171474298e2c2804b1aa68f3868926ba5bc6/autodesk.viewer_state-3.0.0.yaml#L8](https://git.autodesk.com/BIM360/visualization-schemas/blob/35c5171474298e2c2804b1aa68f3868926ba5bc6/autodesk.viewer_state-3.0.0.yaml#L8) | [Open reference](./CoordinateSystem.md) |
| Document | Allows the client to load the model data from the cloud, it gives access to the root and provides a method for finding elements by id. | [Open reference](./Document.md) |
| EventUtils | Contains static utility functions for DOM and viewer events. | [Open reference](./EventUtils.md) |
| Extension | Base class for extending the functionality of the viewer. | [Open reference](./Extension.md) |
| ExtensionManager | The ExtensionManager manages all the extensions available to the viewer. Register, retrieve, and unregister your extension using the singleton `Autodesk.Viewing.theExtensionManager`. | [Open reference](./ExtensionManager.md) |
| FeatureFlags | Static class that manages feature flags. Feature flags enable or expose capabilities in the viewer. After initialization, the flags become immutable. We are currently using two types of feature flags: - enabling a functionality: checked in the code to toggle/modify/patch certain functionality - exposing a capability: checked in the code to expose a capability to the user, with the actual capability not being enabled until the user explicitly enables it Additionally,initialization callbacks can be used to verify client support or automatically enable a feature. | [Open reference](./FeatureFlags.md) |
| FileLoader | Base class for file loaders. | [Open reference](./FileLoader.md) |
| GuiViewer3D | Viewer component based on [Autodesk.Viewing.Viewer3D](https://aps.autodesk.com/en/docs/viewer/v7/reference/Viewing/Viewer3D/) with added UI. | [Open reference](./GuiViewer3D.md) |
| HotkeyManager | Management of hotkeys for the viewer. | [Open reference](./HotkeyManager.md) |
| Model | Core class representing the geometry. | [Open reference](./Model.md) |
| Navigation | This is the core interface to camera controls and navigation. The active navigation object can normally be obtained from the “navigation” property of the Viewer3D instance. Client implementations should not normally instantiate this class directly. | [Open reference](./Navigation.md) |
| NullScreenModeDelegate | Screen mode delegate with no full screen functionality. | [Open reference](./NullScreenModeDelegate.md) |
| ObjectTree | Whether a node id is hidden. | [Open reference](./ObjectTree.md) |
| OverlayManager | Provides a mechanism for adding custom meshes. These meshes are added into their own overlay scenes, which are always rendered after the main scene. | [Open reference](./OverlayManager.md) |
| Profile | Profiles encapsulate viewer settings, extensions to unload, and extensions to load. | [Open reference](./Profile.md) |
| ProfileManager | The ProfileManager provides a mechanism for registering [profile settings](https://aps.autodesk.com/en/docs/viewer/v7/reference/globals/TypeDefs/ProfileSettings/) with a specific file type. Any of the registered profiles can be set by using [viewer.setProfile()](https://aps.autodesk.com/en/docs/viewer/v7/reference/Viewing/Viewer3D/#setProfile/). | [Open reference](./ProfileManager.md) |
| PropertySet | The PropertySet class allows for aggregation of properties with the same names and categories. To get an instance of this class use [Autodesk.Viewing.Model#getPropertySet](https://aps.autodesk.com/en/docs/viewer/v7/reference/Viewing/Model/#getPropertySet/). | [Open reference](./PropertySet.md) |
| PublicFeatureFlags | List of publicly available feature flags. | [Open reference](./PublicFeatureFlags.md) |
| RenderLayerManager | Manages render layers for adding custom content that renders alongside the main scene. | [Open reference](./RenderLayerManager.md) |
| ScreenModeDelegate | Virtual base class for screen mode manipulation. | [Open reference](./ScreenModeDelegate.md) |
| ToolController | Core interface to add and remove canvas interactions to the viewer. | [Open reference](./ToolController.md) |
| ToolInterface | Base class for new interaction tools. | [Open reference](./ToolInterface.md) |
| Viewer3D | Base class for all viewer implementations. It contains everything that is needed to connect to the Autodesk Platform Services and display 2D and 3D models. It also includes basic navigation support, context menu and extension APIs. | [Open reference](./Viewer3D.md) |
| Viewing | Viewing is the top-level namespace in the Viewer SDK library. Use these classes to implement basic viewer functionality. | [Open reference](../Viewing.md) |
| ViewingUtilities | Variety of utilities convenient to navigation and tool development. | [Open reference](./ViewingUtilities.md) |
