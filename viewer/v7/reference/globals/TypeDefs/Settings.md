---
title: "Settings"
url_path: reference/globals/TypeDefs/Settings
surface: viewer-sdk
document_kind: reference
category: "globals"
---
# Settings

Object used to apply the preferences by a Profile

# Properties

| viewCubeboolean | Sets the visibility of the viewcube. |
| --- | --- |
| viewCubeCompassboolean | Sets the visibility of the viewcube compass. The compass will only be displayed if model contains orientation data. |
| viewTypenumber | Sets the view to default (0), orthographic (1), perspective (2) or perspective with ortho faces (3). |
| alwaysUsePivotboolean | Orbit controls always orbit around the currently set pivot point. |
| zoomTowardsPivotboolean | default direction for camera dolly (zoom) operations to be towards the camera pivot point. |
| reverseHorizontalLookDirectionboolean | Sets a view navigation option to reverse the default direction for horizontal look operations. |
| reverseVerticalLookDirectionboolean | Sets a view navigation option to reverse the default direction for vertical look operations. |
| orbitPastWorldPolesboolean | Set a view navigation option to allow the orbit controls to move the camera beyond the north and south poles (world up/down direction). |
| clickToSetCOIboolean | Modify the default click behavior for the viewer. |
| ghostingboolean | Toggles ghosting during search and isolate. |
| optimizeNavigationboolean | Toggles whether the navigation should be optimized for performance. |
| ambientShadowsboolean | Enables or disables ambient shadows. |
| antialiasingboolean | Enables or disables antialiasing. |
| groundShadowboolean | Toggles ground shadow. |
| groundReflectionboolean | Toggles ground reflection. |
| lineRenderingboolean | Hides all lines in the scene. |
| edgeRenderingboolean | Turns edge topology display on/off (where available). |
| lightPresetnumber, string | Sets the Light Presets (Environments) for the Viewer. |
| envMapBackgroundboolean | Toggles environment map for background. |
| bimWalkToolPopupboolean | Toggles the bimwalk tool popup. |
| grayscaleboolean | Overrides line colors in 2D models to render in shades of gray. |
| swapBlackAndWhiteboolean | Will switch to white lines on a black background. |
| progressiveRenderingboolean | Toggles whether progressive rendering is used. |
| openPropertiesOnSelectboolean | Open property panel when selecting an object (Only for GuiViewer3D). |
| pointRenderingboolean | Hides all points in the scene. |
| backgroundColorPreset | Sets a color to the background. |
| reverseMouseZoomDirboolean | Reverse the default direction for camera dolly (zoom) operations. |
| leftHandedMouseSetupboolean | Reverse mouse buttons from their default assignment (i.e. Left mouse operation becomes right mouse and vice versa). |
| fusionOrbitboolean | Sets the orbit to fusion orbit. |
| fusionOrbitConstrainedboolean | Sets the the orbit to the contrained fusion orbit. |
| wheelSetsPivotboolean | Sets wheel-zoom action to automatically reset the orbit pivot to the location under the cursor. |
| selectionSetsPivotboolean | Sets selection / un-selection action to automatically reset the orbit pivot to be the center of the multiple selection. |
| bimWalkNavigatorTypestring | Sets the BimWalk tool navigator. |
| bimWalkGravityboolean | Toggles the BimWalk tool’s gravity. |
| defaultNavigationTool3Dstring | Sets which navigation tool will be used by the viewer. (ie: ‘extractor_defined’ \|\| ‘bimwalk’) |
| explodeStrategystring | Sets which algorithm is used when exploding a model. Supported values are ‘hierarchy’ (default) and ‘radial’. Other values are treated as ‘radial’. |
| loadingAnimationboolean | Toggles loading animation for 2D Models. |
| forcePDFCalibrationboolean | Force PDF calibration before measuring. |
| forceLeafletCalibrationboolean | Force Leaflet calibration before measuring. |
| restoreMeasurementsboolean | When opening the measure tool restore any existing measurements that where created during the session. |
| forceDoubleSidedboolean | Force the render to use double sided materials. |
| keyMapCmdboolean | Force mapping CMD key to Ctrl in Mac. |
| displaySectionHatchesboolean | Display the hatch pattern for planes in the section tool. This does not apply to the section box. |
| zoomDragSpeednumber | Sets a sensitivity of mouse movement with the zoom tool. |
| zoomScrollSpeednumber | Sets a sensitivity of the mouse scroll wheel when zooming. |

---
원본 문서: https://aps.autodesk.com/en/docs/viewer/v7/reference/globals/TypeDefs/Settings
