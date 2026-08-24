---
title: "Button"
url_path: reference/UI/Button
surface: viewer-sdk
document_kind: reference
category: "UI"
---
# Button

Extends [Autodesk.Viewing.UI.Control](https://aps.autodesk.com/en/docs/viewer/v7/reference/UI/Control)

## new Button(id, options)

Button control that can be added to toolbars.

### Parameters

| idstring | The ID for this button. Optional. |
| --- | --- |
| optionsobject | An optional dictionary of options. |
| collapsibleboolean | Whether this button is collapsible. |

# Properties

| StateNumber | Enum for button states |
| --- | --- |

# Methods

## setState(state)

Sets the state of this button.

### Parameters

| state*[Autodesk.Viewing.UI.Button.State](https://aps.autodesk.com/en/docs/viewer/v7/reference/UI/Button/#State/) | The state. |
| --- | --- |

### Returns

| type | description |
| --- | --- |
| boolean | True if the state was set successfully. |

## setIcon(iconClass)

Sets the icon for the button.

### Parameters

| iconClass*string | The CSS class defining the appearance of the button icon (e.g. image background). |
| --- | --- |

## getState()

Returns the state of this button.

### Returns

| type | description |
| --- | --- |
| [Autodesk.Viewing.UI.Button.State](https://aps.autodesk.com/en/docs/viewer/v7/reference/UI/Button/#State/) | The state of the button. |

## onClick(event)

Override this method to be notified when the user clicks on the button.

### Parameters

| event*MouseEvent |   |
| --- | --- |

## onMouseOver(event)

Override this method to be notified when the mouse enters the button.

### Parameters

| event*MouseEvent |   |
| --- | --- |

## onMouseOut(event)

Override this method to be notified when the mouse leaves the button.

### Parameters

| event*MouseEvent |   |
| --- | --- |

## getId()

Gets this control’s ID.

### Returns

| type | description |
| --- | --- |
| string | The control’s ID. |

## setVisible(visible)

Sets the visibility of this control.

### Parameters

| visible*boolean | The visibility value to set. |
| --- | --- |

### Returns

| type | description |
| --- | --- |
| boolean | True if the control’s visibility changed. |

## isVisible()

Gets the visibility of this control.

### Returns

| type | description |
| --- | --- |
| boolean | True if the this control is visible. |

## setToolTip(toolTipText)

Sets the tooltip text for this control.

### Parameters

| toolTipText*string | The text for the tooltip. |
| --- | --- |

### Returns

| type | description |
| --- | --- |
| boolean | True if the tooltip was successfully set. |

## getToolTip()

Returns the tooltip text for this control.

### Returns

| type | description |
| --- | --- |
| string | The tooltip text. Null if it’s not set. |

## setCollapsed(collapsed)

Sets the collapsed state of this control.

### Parameters

| collapsed*boolean | The collapsed value to set. |
| --- | --- |

### Returns

| type | description |
| --- | --- |
| boolean | True if the control’s collapsed state changes. |

## isCollapsed()

Gets the collapsed state of this control.

### Returns

| type | description |
| --- | --- |
| boolean | True if this control is collapsed. |

## isCollapsible()

Returns whether or not this control is collapsible.

### Returns

| type | description |
| --- | --- |
| boolean | True if this control can be collapsed. |

## addClass(cssClass)

Adds a CSS class to this control.

### Parameters

| cssClass*string | The name of the CSS class. |
| --- | --- |

## removeClass(cssClass)

Removes a CSS class from this control.

### Parameters

| cssClass*string | The name of the CSS class. |
| --- | --- |

## getPosition()

Returns the position of this control relative to the canvas.

### Returns

| type | description |
| --- | --- |
| object | The `top` and `left` values of the toolbar. |

## getDimensions()

Returns the dimensions of this control.

### Returns

| type | description |
| --- | --- |
| object | The `width` and `height` of the toolbar. |

## setDisplay(value)

Sets the CSS `display` style value.

### Parameters

| value*string | CSS display value |
| --- | --- |

## removeFromParent()

Removes current control from its parent container.

### Returns

| type | description |
| --- | --- |
| boolean | True if the control was successfully removed. |

# Events

## STATE_CHANGED

Event fired when state of the button changes.

### Properties

| buttonIdstring | The ID of the button that fired this event. |
| --- | --- |
| state[Autodesk.Viewing.UI.Button.State](https://aps.autodesk.com/en/docs/viewer/v7/reference/UI/Button/#State/) | The new state of the button. |

## VISIBILITY_CHANGED

Event fired when the visibility of the control changes.

### Properties

| controlIdstring | The ID of the control that fired this event. |
| --- | --- |
| isVisibleboolean | True if the control is now visible. |

## COLLAPSED_CHANGED

Event fired when the collapsed state of the control changes.

### Properties

| controlIdstring | The ID of the control that fired this event. |
| --- | --- |
| isCollapsedboolean | True if the control is now collapsed. |

---
원본 문서: https://aps.autodesk.com/en/docs/viewer/v7/reference/UI/Button
