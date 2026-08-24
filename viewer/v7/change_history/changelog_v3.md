---
title: "v3 Changelog"
url_path: change_history/changelog_v3
surface: viewer-sdk
document_kind: changelog
category: "changelog_v3"
---
# V3 Changelog

## Version 3.3.5

_Release Date: 2017-12-15_

### Fixed
- Fix a conflict in Angular zone.js promise polyfill.

## Version 3.3.4

_Release Date: 2017-11-29_

### Added

#### Non-Photorealistic (NPR) Rendering Styles

Several styles of non-photorealistic rendering (NPR) are now available.

NPR is often used for artistic expression or as a way to suggest that a view is to be interpreted as a work in progress.

This is done as a post process. For desktops and laptops the cost is negligible; for mobile devices the cost is some drop in frame rate, due to a lack of multiple-render target support on these devices.

#### API Reference

```
preloadPostProcessStyle();        //OPTIONAL: loads all textures needed, for all styles.
preloadPostProcessStyle(string);  //OPTIONAL: use style string to initialize textures for a single style
```

Optional:

The “graphite” and “pencil” styles require textures, so there may be a slight delay upon first launch while textures are cached. You can preload all textures or instead pass an individual style string to initialize only a single style. (If not called, the first call to setPostProcessParameter which sets a style will load the textures.)

```
setPostProcessParameter(string, value);  //string options and value ranges are described in the reference below
```

All NPR parameters are set with a combination of string and value. See additional descriptions below.
- “” (or “off”)
- “edging”
- “cel”
- “graphite”
- “pencil”

| None (value = “” or “off”) | value = “edging” | value = “cel” | value = “graphite” | value = “pencil” |
| --- | --- | --- | --- | --- |
| ![None](https://developer.doc.autodesk.com/bPlouYTd/A360-firefly.js-docs-master-764104/_images/scooter.png) | ![Edges](https://developer.doc.autodesk.com/bPlouYTd/A360-firefly.js-docs-master-764104/_images/scooter_edges.png) | ![Cel](https://developer.doc.autodesk.com/bPlouYTd/A360-firefly.js-docs-master-764104/_images/scooter_cel_6levels.png) | ![Graphite](https://developer.doc.autodesk.com/bPlouYTd/A360-firefly.js-docs-master-764104/_images/scooter_gray.png) | ![Pencil](https://developer.doc.autodesk.com/bPlouYTd/A360-firefly.js-docs-master-764104/_images/scooter_color75.png) |

#### Example Code

```
// Optional call, do this some time before using a style so that the required textures are loaded before the style is used.
// Not doing so may give a bad render or two while the textures are being loaded. In particular, Graphite will look black.
// This loads all textures needed, for all styles. You can instead pass an individual style string to initialize only it.
// Currently only the graphite and pencil styles require textures. If not called, the first call to setPostProcessParameter
// which sets a style will load the textures.
viewer.impl.preloadPostProcessStyle();

// Turn on a style. Styles are passed in as strings, for the "value" parameter:
// "" - turn off the style; back to normal, no post-process is done.
// "edging" - turn on image-based edging system
// "cel" - cartoon ("posterized") style, with edges
// "graphite" - black pencil style
// "pencil" - colored pencil and paper
var value = "graphite";
viewer.impl.setPostProcessParameter( "style", value );

// make the image have no edges:
viewer.impl.setPostProcessParameter( "edges", false);

// turn up brightness a bit:
viewer.impl.setPostProcessParameter( "brightness", 0.4);
```

### Selection and highlight can be turned off individually using a new API

By default, the viewer changes the color of an object when you hover the mouse over it, and you can select objects by clicking them in the view or Model Browser. This highlighting is useful when selecting and interacting with the model, but can be a distraction when you prefer a presentation mode. You can now toggle these behaviors.

#### API Reference

```
disableHighlight(boolean); //true to disable highlight, false to show highlight (defaults to false)
disableSelection(boolean); //true to disable selection, false to allow selection (defaults to false)
```

#### Example Code

Toggle highlight and selection

```
// Disable highlight when cursor hovers over an object
disableHighlight(true);

// Enable highlight when cursor hovers over an object
disableHighlight(false);

// Disable selection when clicking an object in the view or Model Browser
disableSelection(true);

// Enable selection when clicking an object in the view or Model Browser
disableSelection(false);
```

### Layers defined in 3D files now can accessed through the Layers Panel

The Layer Manager control now works for 3D files. Click the Layer Manager icon to open the Layers panel, where you can toggle visibility of layers.

![Layers in 3D views](https://developer.doc.autodesk.com/bPlouYTd/A360-firefly.js-docs-master-764104/_images/layers_in_3d.gif)

### Dutch language supported

See existing API Reference for `Autodesk.Viewing.Initializer`.

Set string `options.language` to “nl” to enable Dutch.

### Fixed
- Hyperlinks pointing to invalid locations are no longer displayed
- Fit to View “f” hotkey now works consistently
- Ambient shadows now work on mobile devices
- Measure Tool is more accurate when measuring large drawings
- Interaction is no longer blocked in the ViewCube area when ViewCube is disabled`div.viewcubeUI` no longer blocks interaction when the ViewCube is disabled

## Version 3.2.1

_Release Date: 2017-10-25_

### Changed

#### Model Browser look and feel

The Model Browser has been improved for more consistent appearance and behavior. Object visibility is now explicitly indicated by the eye icon to the right of each element. Object selection behavior has changed.
- Toggle visibility by clicking the eye icon to the right of the element
- Left-click a listed name to select an element and automatically focus the view on it
- Right-click a selected object to bring up the full context menu (Isolate, Hide selected, Show all objects, Focus, Clear selection)

| Before | **Now** |
| --- | --- |
| ![Before](https://developer.doc.autodesk.com/bPlouYTd/A360-firefly.js-docs-master-764104/_images/3.2_model_browser_old.png) | ![Now](https://developer.doc.autodesk.com/bPlouYTd/A360-firefly.js-docs-master-764104/_images/3.2_model_browser_new.png) |

#### Measure Angle tool

Measurement of angles will now require selecting 3 points instead of choosing 2 lines.

Animated example:
![Angle Tool](https://developer.doc.autodesk.com/bPlouYTd/A360-firefly.js-docs-master-764104/_images/measure-three-point-angle.gif)

### Added

#### Viewer version display

Viewer version is now displayed at the very top of viewer3D.min.js

| **URL** | [https://developer.api.autodesk.com/modelderivative/v2/viewers/viewer3D.min.js?v=3.2](https://developer.api.autodesk.com/modelderivative/v2/viewers/viewer3D.min.js?v=3.2) |
| --- | --- |
| **Content** | ![Header](https://developer.doc.autodesk.com/bPlouYTd/A360-firefly.js-docs-master-764104/_images/3.2_js_version_header.png) |

#### Camera transition event

| **Event** | Autodesk.Viewing.CAMERA_TRANSITION_COMPLETED |
| --- | --- |
| **Usage** | 

```
// Hook the event
viewer.addEventListener(Autodesk.Viewing.CAMERA_TRANSITION_COMPLETED, function(){
    console.log('camera is no longer moving');
});

// Trigger an action that will move the camera and fire the event
viewer.fitToView();
```

 |

#### Transition types

The event will fire at the end of these operations:
- Go Home transition
- Focus / Fit to View transition (example above)
- Restore State transition
- Named Views transition
- Any other camera transitions

#### New tool method: getPriority()

Tools that are registered into the `ToolController` will now be able to specify their own priority. The priority is used by the `ToolController` to sort the tools in it. By default all tools have a priority value of 0.

```
// Default implementation
this.getPriority = function() {
   return 0;
};
```

The higher the numeric value returned, the higher priority on the tool stack. Tools with a higher priority have the opportunity to handle events first.

```
// Tool with high priority
function MyAwesomeTool() {
  Autodesk.Viewing.ToolInterface.call(this);
  this.names = ['my-awesome-tool'];

    this.getPriority = function() {
       return 1000; // Default is 0, higher numerical value results in higher priority.
    };
};

// Tool with default priority
function MyRegularTool() {
    Autodesk.Viewing.ToolInterface.call(this);
    this.names = ['my-regular-tool'];
};

// Register them to the Viewer instance (no matter the order)
viewer.toolController.registerTool(new MyAwesomeTool());
viewer.toolController.registerTool(new MyRegularTool());

// Activate tools
viewer.toolController.activateTool('my-awesome-tool'); // MyAwesomeTool gets all events because it is being activated
viewer.toolController.activateTool('my-regular-tool'); // MyAwesomeTool STILL gets all events first because it has the highest priority.
```

### Fixed
- The Freehand Markup is now smoother and more performant.
- Fixed issue where SVG icon on toolbar buttons didn’t work on IE11
- Fixed issue with the New First Person tool which locked the camera when the initial view was pointing directly down or up
- Fixed issues with touch gestures on IE11 running on Windows Surface devices.
- Improved memory handling on iOS for models that referenced multiple textures

## Version 3.1.3

_Release Date: 2017-10-02_

### Fixed
- Fix issue where the event `Autodesk.Viewing.GEOMETRY_LOADED_EVENT` was not getting fired after loading a 2D model in Chrome for iPhone.

## Version 3.1.2

_Release Date: 2017-09-21_

### Fixed
- Fix issue where ESC button would enable the measure toolbar.

## Version 3.1.1

_Release Date: 2017-09-15_

### Changed

#### Semantic Versioning

Starting now, current and future versions of the Viewer will be following the [Semantic Versioning](http://semver.org/) convention.

#### Breaking Changes

A few API methods have been relocated:

|   | Before | **Now** |
| --- | --- | --- |
| method | Autodesk.Viewing.setApiEndpoint | Autodesk.Viewing.endpoint.setApiEndpoint |
| method | Autodesk.Viewing.getEndpointAndApi | Autodesk.Viewing.endpoint.getApiEndpoint |
| object | Autodesk.Viewing.HTTP_REQUEST_HEADERS | Autodesk.Viewing.endpoint.HTTP_REQUEST_HEADERS |

#### Model Browser

In our previous release, the Model Browser internals were changed to reduce the memory consumption, which was a big issue with BIM models.

In this occasion, the Model Browser is getting some behavior improvements.

**Tree-Node Selection**

Clicking to select a node in the Model Browser will now trigger a selection and a focus operation on the model canvas.

![../../_images/model-browser-tree-click.gif](https://developer.doc.autodesk.com/bPlouYTd/A360-firefly.js-docs-master-764104/_images/model-browser-tree-click.gif)

Additionally, the selection will display on top of occluding objects.

**Viewer Selection**

To keep the experience consistent, the selection on the viewer will get reflected on the Model Browser.

The Model Browser will automatically scroll to the selected item.

![../../_images/model-browser-viewer-click.gif](https://developer.doc.autodesk.com/bPlouYTd/A360-firefly.js-docs-master-764104/_images/model-browser-viewer-click.gif)

**Context Menu**

Right clicking to open the Context Menu will no longer perform a selection action as part of the operation.

Same rule applies when clicking away to close the Context Menu.

**Upcoming changes**

The Model Browser will receive UI changes in the upcoming release.

#### Measure Tool Redesign

Accessing the measure tool is still done through a button on the toolbar

![../../_images/measure_redesign_1.png](https://developer.doc.autodesk.com/bPlouYTd/A360-firefly.js-docs-master-764104/_images/measure_redesign_1.png)

After clicking on the button, the toolbar will expand to reveal additional measuring tools

![../../_images/measure_redesign_2.png](https://developer.doc.autodesk.com/bPlouYTd/A360-firefly.js-docs-master-764104/_images/measure_redesign_2.png)

**Measure simple distance**

Click 2 points and get their distance.

_For 2D models_:

![../../_images/distance-2d.gif](https://developer.doc.autodesk.com/bPlouYTd/A360-firefly.js-docs-master-764104/_images/distance-2d.gif)

_For 3D models_:

![../../_images/distance-3d.gif](https://developer.doc.autodesk.com/bPlouYTd/A360-firefly.js-docs-master-764104/_images/distance-3d.gif)

**Measure angle**

Click 2 lines and get the angle between them.

_For 2D models_:

![../../_images/angle-2d.gif](https://developer.doc.autodesk.com/bPlouYTd/A360-firefly.js-docs-master-764104/_images/angle-2d.gif)

_For 3D models_:

![../../_images/angle-3d.gif](https://developer.doc.autodesk.com/bPlouYTd/A360-firefly.js-docs-master-764104/_images/angle-3d.gif)

**Measure area**

Define a closed area composed of line segments to get the total area within. Available **only in 2D models**.

![../../_images/area-2d.gif](https://developer.doc.autodesk.com/bPlouYTd/A360-firefly.js-docs-master-764104/_images/area-2d.gif)

**Calibration**

Is the document’s default measurement inaccurate? Then use the calibration tool to specify a known distance,
and have all the other measurements performed on the document adjusted accordingly.

**Settings**

Accessing measurement unit type and precision is now done through the measure’s Settings panel

![../../_images/measure_redesign_settings.png](https://developer.doc.autodesk.com/bPlouYTd/A360-firefly.js-docs-master-764104/_images/measure_redesign_settings.png)

**Multiple measurements**

It is now possible to have more than one measurement on the screen at once!

![../../_images/mesure_redesign_multiple.png](https://developer.doc.autodesk.com/bPlouYTd/A360-firefly.js-docs-master-764104/_images/mesure_redesign_multiple.png)

**Modify measurement**

After a measurement has been performed, users are able to adjust it by dragging the blue knobs.

![../../_images/change-knobs.gif](https://developer.doc.autodesk.com/bPlouYTd/A360-firefly.js-docs-master-764104/_images/change-knobs.gif)

---
원본 문서: https://aps.autodesk.com/en/docs/viewer/v7/change_history/changelog_v3
