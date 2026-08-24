---
title: "Prefs3D"
url_path: reference/globals/TypeDefs/Prefs3D
surface: viewer-sdk
document_kind: reference
category: "globals"
---
# Prefs3D

Contains viewer setting preference names for 3D models.

# Properties

| VIEW_CUBEstring | Sets the visibility of the viewcube. |
| --- | --- |
| VIEW_CUBE_COMPASSstring | Sets the visibility of the viewcube compass. The compass will only be displayed if model contains orientation data. |
| VIEW_TYPEstring | Sets the view to orthographic or perspective. |
| ALWAYS_USE_PIVOTstring | Orbit controls always orbit around the currently set pivot point. |
| ZOOM_TOWARDS_PIVOTstring | Default direction for camera dolly (zoom) operations to be towards the camera pivot point. |
| SELECTION_SETS_PIVOTstring | Sets selection / un-selection action to automatically reset the orbit pivot to be the center of the multiple selection. |
| REVERSE_HORIZONTAL_LOOK_DIRECTIONstring | Sets a view navigation option to reverse the default direction for horizontal look operations. |
| REVERSE_VERTICAL_LOOK_DIRECTIONstring | Sets a view navigation option to reverse the default direction for vertical look operations. |
| ORBIT_PAST_WORLD_POLESstring | Set a view navigation option to allow the orbit controls to move the camera beyond the north and south poles (world up/down direction). |
| CLICK_TO_SET_COIstring | Modify the default click behavior for the viewer. |
| GHOSTINGstring | Toggles ghosting during search and isolate. |
| OPTIMIZE_NAVIGATIONstring | Toggles whether the navigation should be optimized for performance. |
| AMBIENT_SHADOWSstring | Enables or disables ambient shadows. |
| ANTIALIASINGstring | Enables or disables antialiasing. |
| GROUND_SHADOWstring | Toggles ground shadow. |
| GROUND_REFLECTIONstring | Toggles ground reflection. |
| POINT_RENDERINGstring | Hides all points in the scene. |
| LINE_RENDERINGstring | Hides all lines in the scene. |
| EDGE_RENDERINGstring | Turns edge topology display on/off (where available). |
| LIGHT_PRESETstring | Sets the Light Presets (Environments) for the Viewer. |
| ENV_MAP_BACKGROUNDstring | Toggles environment map for background. |
| BIM_WALK_TOOL_POPUPstring | Toggles the bimwalk tool popup. |
| BIM_WALK_NAVIGATOR_TYPEstring | Identifier for the bimWalkNavigatorType preference. This is used to set the BimWalk tool navigator. |
| BIM_WALK_GRAVITYstring | Identifier for the bimWalkGravity preference. This is used to toggle the BimWalk tool’s gravity. |
| DEFAULT_NAVIGATION_TOOL_3Dstring | identifier for the toolToUse preference. This is used to set which navigation tool will be used. |
| SELECTION_MODEstring | identifier for the selectionMode preference. This is used to set which selection mode (Leaf, First, Last object) wil be used by the viewer. |
| ENABLE_CUSTOM_ORBIT_TOOL_CURSORstring | identifier for whether the OrbitDollyPanTool will customize the cursor visuals. |
| EXPLODE_STRATEGYstring | Specifies which algorithm is used when exploding the model. Supported values are ‘hierarchy’ (default) and ‘radial’. Other values are treated as ‘radial’. |
| FORCE_DOUBLE_SIDEDstring | Forces the viewer to render materials as double sided. Otherwise it uses the model specified value. |
| GPU_MEMORY_LIMITstring | Sets the maximum amount of GPU memory that can be used by the viewer. (WEBGPU only) |

---
원본 문서: https://aps.autodesk.com/en/docs/viewer/v7/reference/globals/TypeDefs/Prefs3D
