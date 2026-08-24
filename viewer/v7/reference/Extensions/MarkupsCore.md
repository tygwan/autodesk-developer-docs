---
title: "MarkupsCore"
url_path: reference/Extensions/MarkupsCore
surface: viewer-sdk
document_kind: reference
category: "Extensions"
---
# MarkupsCore

## new MarkupsCore(viewer, options)

Extension that allows end users to draw 2D markups on top of 2D and 3D models.

### Parameters

| viewer*[Autodesk.Viewing.Viewer3D](https://aps.autodesk.com/en/docs/viewer/v7/reference/Viewing/Viewer3D/) | Viewer instance used to operate on. |
| --- | --- |
| options*object | Same Dictionary object passed into [Viewer3D](https://aps.autodesk.com/en/docs/viewer/v7/reference/Viewing/Viewer3D/)’s constructor. |
| markupDisableHotkeysboolean | Disables hotkeys for copy, cut, paste, duplicate, undo, redo and deselect. |
| markupToolClass[Autodesk.Viewing.ToolInterface](https://aps.autodesk.com/en/docs/viewer/v7/reference/Viewing/ToolInterface/) | Class override for input handling. Use it to override/extend default hotkeys and/or mouse/gesture input. |

# Methods

## enterEditMode(layerId)

Enables mouse interactions and mobile device gestures over the Viewer canvas to create or draw markups.

Exit Edit mode by calling [leaveEditMode()](https://aps.autodesk.com/en/docs/viewer/v7/reference/Extensions/MarkupsCore/#leaveeditmode-1/).

See also [show()](https://aps.autodesk.com/en/docs/viewer/v7/reference/Extensions/MarkupsCore/#show/)

### Parameters

| layerId*string | [optional] Identifier for the layer of markups to be edited. Example “Layer1”. |
| --- | --- |

### Returns

| type | description |
| --- | --- |
| boolean | Returns true if editMode is active |

## leaveEditMode()

Exits Edit mode.

See also [enterEditMode()](https://aps.autodesk.com/en/docs/viewer/v7/reference/Extensions/MarkupsCore/#entereditmode-layerid/).

### Returns

| type | description |
| --- | --- |
| boolean | Returns true if Edit mode has been deactivated |

## toggle()

Toggle between visible markups, i.e., show() and hidden markups, i.e., hide().

## show()

Enables loading of previously saved markups. Exit Edit mode by calling [hide()](https://aps.autodesk.com/en/docs/viewer/v7/reference/Extensions/MarkupsCore/#hide/).

See also [enterEditMode()](https://aps.autodesk.com/en/docs/viewer/v7/reference/Extensions/MarkupsCore/#entereditmode-layerid/).

### Returns

| type | description |
| --- | --- |
| boolean | Whether it successfully entered view mode or not. |

## hide()

Removes any markup currently overlaid on the viewer. It exits Edit mode if it is active.

See also [show()](https://aps.autodesk.com/en/docs/viewer/v7/reference/Extensions/MarkupsCore/#show/)

### Returns

| type | description |
| --- | --- |
| boolean | Whether it successfully left view mode or not. |

## clear()

Removes newly created markups in the current editing layer. Markups that were created in a specific layer will not be removed.

Markups should have been added while in [enterEditMode()](https://aps.autodesk.com/en/docs/viewer/v7/reference/Extensions/MarkupsCore/#entereditmode-layerid/).

## generateData()

Returns an SVG string with the markups created so far. The SVG string can be reloaded using [loadMarkups()](https://aps.autodesk.com/en/docs/viewer/v7/reference/Extensions/MarkupsCore/#loadmarkups-markupstring-layerid/).

Markups should have been added while in [enterEditMode()](https://aps.autodesk.com/en/docs/viewer/v7/reference/Extensions/MarkupsCore/#entereditmode-layerid/).

### Returns

| type | description |
| --- | --- |
| string | Returns an SVG element with all of the created markups in a string format. |

## changeEditMode(editMode)

Changes the active drawing tool. For example, from the Arrow drawing tool to the Rectangle drawing tool. Only applicable while in [Edit Mode](https://aps.autodesk.com/en/docs/viewer/v7/reference/Extensions/MarkupsCore/#entereditmode-layerid/).

Supported values are:
- `new Autodesk.Viewing.Extensions.Markups.Core.EditModeArrow(MarkupsCoreInstance)`
- `new Autodesk.Viewing.Extensions.Markups.Core.EditModeRectangle(MarkupsCoreInstance)`
- `new Autodesk.Viewing.Extensions.Markups.Core.EditModeCircle(MarkupsCoreInstance)`
- `new Autodesk.Viewing.Extensions.Markups.Core.EditModeCloud(MarkupsCoreInstance)`
- `new Autodesk.Viewing.Extensions.Markups.Core.EditModeText(MarkupsCoreInstance)`
- `new Autodesk.Viewing.Extensions.Markups.Core.EditModeFreehand(MarkupsCoreInstance)`
- `new Autodesk.Viewing.Extensions.Markups.Core.EditModePolyline(MarkupsCoreInstance)`
- `new Autodesk.Viewing.Extensions.Markups.Core.EditModePolycloud(MarkupsCoreInstance)`

This function fires event `Autodesk.Viewing.Extensions.MarkupsCore.EVENT_EDITMODE_CHANGED`.

### Parameters

| editMode*object | Object instance for the drawing tool |
| --- | --- |

## isNavigationAllowed()

Check whether a user can perform camera navigation operations on the current loaded model. While the extension is active, the user can still draw markups. Panning and zooming are only supported for orthographic cameras.

### Returns

| type | description |
| --- | --- |
| boolean | Whether [allowNavigation()](https://aps.autodesk.com/en/docs/viewer/v7/reference/Extensions/MarkupsCore/#allownavigation-allow/) can succeed. |

## allowNavigation(allow)

Enables click, tap, and swipe behavior to allow camera zoom and panning operations. It is only available in [Edit mode](https://aps.autodesk.com/en/docs/viewer/v7/reference/Extensions/MarkupsCore/#entereditmode-layerid/).

### Parameters

| allow*boolean | Whether camera navigation interactions are active or not. |
| --- | --- |

## disableMarkupInteractions(disable)

Sets mouse interactions and mobile device gestures with markups. Only applicable in [Edit mode](https://aps.autodesk.com/en/docs/viewer/v7/reference/Extensions/MarkupsCore/#entereditmode-layerid/).

### Parameters

| disable*boolean | true to disable interactions with markups; false to enable interactions with markups; default false. |
| --- | --- |

## copy()

Standard copy operation. Applies to any selected markup.
See also [cut()](https://aps.autodesk.com/en/docs/viewer/v7/reference/Extensions/MarkupsCore/#cut-1/) and [paste()](https://aps.autodesk.com/en/docs/viewer/v7/reference/Extensions/MarkupsCore/#paste-2/).

## cut()

Standard cut operation. Applies to any selected markup, which gets removed from the screen at call time.
See also [copy()](https://aps.autodesk.com/en/docs/viewer/v7/reference/Extensions/MarkupsCore/#copy/) and [paste()](https://aps.autodesk.com/en/docs/viewer/v7/reference/Extensions/MarkupsCore/#paste-2/).

## paste()

Standard paste operation. This function will paste any previously copied or cut markup. Can be called repeatedly after a single copy or cut operation.
See also [copy()](https://aps.autodesk.com/en/docs/viewer/v7/reference/Extensions/MarkupsCore/#copy/) and [cut()](https://aps.autodesk.com/en/docs/viewer/v7/reference/Extensions/MarkupsCore/#cut-1/).

## undo()

Will undo the previous operation.
The Undo/Redo stacks will track any change done to the existing markups.
See also [redo()](https://aps.autodesk.com/en/docs/viewer/v7/reference/Extensions/MarkupsCore/#redo-1/) and [isUndoStackEmpty()](https://aps.autodesk.com/en/docs/viewer/v7/reference/Extensions/MarkupsCore/#isUndoStackEmpty/).

## redo()

Will redo any previously undo operation.
See also [undo()](https://aps.autodesk.com/en/docs/viewer/v7/reference/Extensions/MarkupsCore/#undo/), [isRedoStackEmpty()](https://aps.autodesk.com/en/docs/viewer/v7/reference/Extensions/MarkupsCore/#isRedoStackEmpty/).

## isUndoStackEmpty()

Returns true when [undo()](https://aps.autodesk.com/en/docs/viewer/v7/reference/Extensions/MarkupsCore/#undo/) produces no changes.

### Returns

| type | description |
| --- | --- |
| boolean | true if there are no changes to undo; false if there are changes to undo. |

## isRedoStackEmpty()

Returns true when [redo()](https://aps.autodesk.com/en/docs/viewer/v7/reference/Extensions/MarkupsCore/#redo-1/) produces no changes.

### Returns

| type | description |
| --- | --- |
| boolean | true if there are no changes to redo; false if there are changes to redo. |

## getId()

Helper function for generating unique markup ids.

### Returns

| type | description |
| --- | --- |
| number |   |

## getMarkup(id)

Returns a markup with the specified ID. Returns null when not found. The ID can be retrieved from the return value of getSelection().
See also [getSelection()](https://aps.autodesk.com/en/docs/viewer/v7/reference/Extensions/MarkupsCore/#getselection-1/).

### Parameters

| id*string | Markup identifier. |
| --- | --- |

### Returns

| type | description |
| --- | --- |
| Autodesk.Viewing.Extensions.Markups.Core.Markup | Returns markup object. |

## selectMarkup(markup)

Selects or deselects a markup. A selected markup gets an overlayed UI that allows you to perform transformations such as resizing, rotations, and translations. To deselect a markup, send a null value.
See also [getMarkup()](https://aps.autodesk.com/en/docs/viewer/v7/reference/Extensions/MarkupsCore/#getmarkup-id/).

### Parameters

| markup*Autodesk.Viewing.Extensions.Markups.Core.Markup, null | The markup instance to select. Set the value to null to deselect a markup. |
| --- | --- |

## getSelection()

Returns the currently selected markup. A selected markup has a custom UI overlayed that allows you to perform resizing, rotations and translations.
See also [selectMarkup()](https://aps.autodesk.com/en/docs/viewer/v7/reference/Extensions/MarkupsCore/#selectmarkup-markup/).

### Returns

| type | description |
| --- | --- |
| Autodesk.Viewing.Extensions.Markups.Core.Markup, null | Returns selected markup object; null if no markup is selected. |

## deleteMarkup(markup, dontAddToHistory)

Deletes a markup from the canvas. Only applies while in [Edit mode](https://aps.autodesk.com/en/docs/viewer/v7/reference/Extensions/MarkupsCore/#entereditmode-layerid/).

### Parameters

| markup*Autodesk.Viewing.Extensions.Markups.Core.Markup | Markup object. |
| --- | --- |
| dontAddToHistoryboolean | Whether delete action can be [undone](https://aps.autodesk.com/en/docs/viewer/v7/reference/Extensions/MarkupsCore/#undo/). |

## loadMarkups(markupString, layerId)

Loads data (SVG string) for all markups in a specified layer (layerId) to the Viewer’s canvas.

See also [unloadMarkups()](https://aps.autodesk.com/en/docs/viewer/v7/reference/Extensions/MarkupsCore/#unloadmarkups-layerid/), and [hideMarkups()](https://aps.autodesk.com/en/docs/viewer/v7/reference/Extensions/MarkupsCore/#hidemarkups-layerid/).

### Parameters

| markupString*string | SVG string with markups. See also [generateData()](https://aps.autodesk.com/en/docs/viewer/v7/reference/Extensions/MarkupsCore/#generatedata/). |
| --- | --- |
| layerId*string | Identifier for the layer where the markup should be loaded to. Example “Layer1”. |

### Returns

| type | description |
| --- | --- |
| boolean | Whether the markup string was able to be loaded successfully |

## revertLayer(layerId)

Revert any changes made to the specific layer.

See also [loadMarkups()](https://aps.autodesk.com/en/docs/viewer/v7/reference/Extensions/MarkupsCore/#loadmarkups-markupstring-layerid/) and [enterEditMode()](https://aps.autodesk.com/en/docs/viewer/v7/reference/Extensions/MarkupsCore/#entereditmode-layerid/).

### Parameters

| layerId*string | ID of the layer to revert any changes that were made to it. |
| --- | --- |

### Returns

| type | description |
| --- | --- |
| boolean | true if the layer was unloaded, false if the layer was not unloaded. |

## unloadMarkups(layerId)

Removes markups from the DOM (Document Object Model). This is helpful for freeing up memory.

See also [loadMarkups()](https://aps.autodesk.com/en/docs/viewer/v7/reference/Extensions/MarkupsCore/#loadmarkups-markupstring-layerid/), [unloadMarkupsAllLayers()](https://aps.autodesk.com/en/docs/viewer/v7/reference/Extensions/MarkupsCore/#unloadmarkupsalllayers-1/), [clear()](https://aps.autodesk.com/en/docs/viewer/v7/reference/Extensions/MarkupsCore/#clear/), [hide()](https://aps.autodesk.com/en/docs/viewer/v7/reference/Extensions/MarkupsCore/#hide-1/), and [hideMarkups()](https://aps.autodesk.com/en/docs/viewer/v7/reference/Extensions/MarkupsCore/#hidemarkups-layerid/).

### Parameters

| layerId*string | ID of the layer containing all markups to unload (from the DOM). |
| --- | --- |

### Returns

| type | description |
| --- | --- |
| boolean | Whether the operation succeeded or not. |

## unloadMarkupsAllLayers()

Removes all markups loaded so far. Great for freeing up memory.

See also [loadMarkups()](https://aps.autodesk.com/en/docs/viewer/v7/reference/Extensions/MarkupsCore/#loadmarkups-markupstring-layerid/), [unloadMarkups()](https://aps.autodesk.com/en/docs/viewer/v7/reference/Extensions/MarkupsCore/#unloadmarkups-layerid/), [clear()](https://aps.autodesk.com/en/docs/viewer/v7/reference/Extensions/MarkupsCore/#clear/), [hide()](https://aps.autodesk.com/en/docs/viewer/v7/reference/Extensions/MarkupsCore/#hide-1/), and [hideMarkups()](https://aps.autodesk.com/en/docs/viewer/v7/reference/Extensions/MarkupsCore/#hidemarkups-layerid/).

## hideMarkups(layerId)

Hides all markups in a specified layer. Note that hidden markups will not be unloaded. Use the [showMarkups()](https://aps.autodesk.com/en/docs/viewer/v7/reference/Extensions/MarkupsCore/#showmarkups-layerid/) method to make them visible again; no additional parsing is required.

See also [showMarkups()](https://aps.autodesk.com/en/docs/viewer/v7/reference/Extensions/MarkupsCore/#showmarkups-layerid/), [unloadMarkups()](https://aps.autodesk.com/en/docs/viewer/v7/reference/Extensions/MarkupsCore/#unloadmarkups-layerid/), and [loadMarkups()](https://aps.autodesk.com/en/docs/viewer/v7/reference/Extensions/MarkupsCore/#loadmarkups-markupstring-layerid/).

### Parameters

| layerId*string | ID of the layer containing all markups that should be hidden (in the DOM). |
| --- | --- |

### Returns

| type | description |
| --- | --- |
| boolean | Whether the operation succeeded or not. |

## showMarkups(layerId)

Unhides a layer of hidden markups (hideMarkups()).

### Parameters

| layerId*string | ID of the layer containing all markups to unload (from the DOM). |
| --- | --- |

### Returns

| type | description |
| --- | --- |
| boolean | Whether the operation succeeded or not. |

# Events

## EVENT_EDITMODE_CHANGED

Fired whenever the drawing tool changes. For example, when the Arrow drawing tool changes into the Rectangle drawing tool.

## EVENT_EDITMODE_ENTER

Fired when Edit mode has been enabled, which allows the end user to start drawing markups over the Viewer canvas.

## EVENT_EDITMODE_LEAVE

Fired when Edit mode has been disabled, preventing the end user from drawing markups over the Viewer canvas.

## EVENT_MARKUP_SELECTED

Fired when a drawn markup has been selected by the end user with a click command.

### Properties

| markupMarkup | The selected markup |
| --- | --- |

## EVENT_MARKUP_DRAGGING

Fired when a drawn markup is being dragged over the Viewer canvas.

## EVENT_HISTORY_CHANGED

Fired whenever a new undo or redo action is available.

### Properties

| data[EventHistoryChangedData](https://aps.autodesk.com/en/docs/viewer/v7/reference/globals/TypeDefs/EventHistoryChangedData/) | The event data to identify the action and target |
| --- | --- |

## EVENT_EDITMODE_CREATION_BEGIN

Fired when a markup creation begins. For example, as soon as the user starts dragging with the mouse to draw an arrow on the screen.

## EVENT_EDITMODE_CREATION_END

Fired when a markup has been created. For example, as soon as the user stops dragging and releases the mouse button to finish drawing an arrow on the screen

## EVENT_MARKUP_DESELECT

Fired when a markup is no longer selected.

### Properties

| markupIdnumber | The id of the selected markup |
| --- | --- |

## EVENT_EDITFRAME_EDITION_START

The selected markup is being modified, i.e, resizing, rotating, moving around

## EVENT_EDITFRAME_EDITION_END

The selected markup is no longer being modified

---
원본 문서: https://aps.autodesk.com/en/docs/viewer/v7/reference/Extensions/MarkupsCore
