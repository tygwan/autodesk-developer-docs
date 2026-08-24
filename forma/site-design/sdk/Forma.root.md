---
namespace: Forma
class: EmbeddedViewSdk
sdk_version: 0.93.0
surface: sdk
runtime: forma-iframe-only
---

# Forma

```ts
import { Forma } from "forma-embedded-view-sdk/auto";
```

## `ping`

```ts
Forma.ping(): Promise<string>;
```

## `getIframeMessenger`

```ts
Forma.getIframeMessenger(): IframeMessenger;
```

@hidden
@internal

## `getProjectId`

```ts
Forma.getProjectId(): string;
```

## `getExtensionId`

```ts
Forma.getExtensionId(): string;
```

## `getRegion`

```ts
Forma.getRegion(): "EMEA" | "US";
```

Get the region for which the current Forma Site Design project is hosted.
If you're using the Forma Site Design API, you need to use this to determine
the `X-Ads-Region` header value. The possible values are `US` and `EMEA`
@returns "EMEA" or "US"

## `getPresentationUnitSystem`

```ts
Forma.getPresentationUnitSystem(): Promise<"metric" | "imperial">;
```

Get the preferred presentation unit system for the project.
It is important to note that all programmatic interfaces operate with metric units.
This value should be used to determine the default unit system for the UI.
If this value is imperial, you should convert and dispaly results in imperial units in the UI.

## `getCanEdit`

```ts
Forma.getCanEdit(): Promise<boolean>;
```

Check for access to perform edit operations in the current project.

@example
```js
const canEdit = await Forma.getCanEdit()
if (canEdit) {
 await Forma.proposal.addElement({ urn })
} else {
  console.log("User need to have collaborator or admin role to add elements")
}
```

## `getCanViewHub`

```ts
Forma.getCanViewHub(): Promise<boolean>;
```

Check for access to view the current project's hub
@example
```js
const canViewHub = await Forma.getCanViewHub()
if (canViewHub) {
  const projectData = await Forma.project.get()
  await Forma.extensions.storage.getTextObject({
    key: "some-key",
    authcontext: projectData.hubId
  })
}
```

## `getCanEditHub`

```ts
Forma.getCanEditHub(): Promise<boolean>;
```

Check for access to edit the current project's hub
@example
```js
const canViewHub = await Forma.getCanEditHub()
if (canEditHub) {
  const projectData = await Forma.project.get()
  await Forma.extensions.storage.setObject({
    key: "some-key",
    authcontext: projectData.hubId,
    data: "some awesome data"
  })
}
```

## `getEmbeddedViewId`

```ts
Forma.getEmbeddedViewId(): string;
```

Retrieve the embedded view ID used to identify this embedded view.

You can set a custom embedded view ID when dynamically opening
an embedded view inside a floating panel.

## `setRequestHandler`

```ts
Forma.setRequestHandler(name: string, handler: RequestHandler): void;
```

@hidden
@internal

@remarks
This method allows only one handler to be registered per action.
Registering a new handler for the same action will replace the existing handler.

## `deleteRequestHandler`

```ts
Forma.deleteRequestHandler(name: string): boolean;
```

@hidden
@internal

## `setEventHandler`

```ts
Forma.setEventHandler(name: string, handler: EventHandler): void;
```

@hidden
@internal

@remarks
This method allows only one handler to be registered per action.
Registering a new handler for the same action will replace the existing handler.

## `deleteEventHandler`

```ts
Forma.deleteEventHandler(name: string): boolean;
```

@hidden
@internal

## `setSubscribeHandler`

```ts
Forma.setSubscribeHandler(name: string, handler: SubscribeHandler): void;
```

@hidden
@internal

@remarks
This method allows only one handler to be registered per action.
Registering a new handler for the same action will replace the existing handler.

## `deleteSubscribeHandler`

```ts
Forma.deleteSubscribeHandler(name: string): boolean;
```

@hidden
@internal

## `openFloatingPanel`

```ts
Forma.openFloatingPanel(options: { embeddedViewId: string; url: string; /** * Title shown for the floating panel. */ title?: string | undefined; /** * The initial size of the floating panel. * * The panel will be shrinked if it cannot fit within the main area. */ preferredSize?: { width: number; height: number; } | undefined; /** * The initial position of the floating panel. */ placement?: { type: "right"; /** * Offset from the top position of the current embedded view. * * This allows to position the floating panel at the * same top position as e.g. a clicked button. * * `Element.getBoundingClientRect().top` can be used to * calculate a value for this. * * @defaultValue 0 */ offsetTop?: number | undefined; } | { type: "fullscreen"; } | { /** * Position the floating panel in center of the available view. */ type: "center"; } | undefined; /** * Absolute URL to an icon. * * The icon will be displayed as a square (currently 24x24 pixels). * * @defaultValue A generic icon. */ iconUrl?: string | undefined; /** * Hide the icon. * * @defaultValue false */ hideIcon?: boolean | undefined; /** * Disable the minimize functionality. * * @defaultValue false */ disableMinimize?: boolean | undefined; /** * Disable the resize functionality. * * @defaultValue false */ disableResize?: boolean | undefined; /** * Minimum width for a resizable floating panel. * * This is the width of the embedded view, so the actual * panel width will be larger to include the spacing around. * * Can not be specified below the default value. * * Can not be specified above 400. * * @defaultValue 100 */ minimumWidth?: number | undefined; /** * Minimum height for a resizable floating panel. * * This is the height of the embedded view, so the actual * panel height will be larger to include the header and * spacing around. * * Can not be specified below the default value. * * Can not be specified above 400. * * @defaultValue 60 */ minimumHeight?: number | undefined; }): Promise<void>;
```

Open another embedded view in a floating panel.

The embedded view will be owned by the current embedded view,
and automatically closed when the current embedded view is closed.

To wait for the embedded view to be ready or being closed, listen to
the relevant events via onEmbeddedViewStateChange
before invoking this method. Methods such as createMessagePort
will automatically wait for the embedded view to be ready.

If the URL is invalid or the embedded view cannot be initialized,
the state of the embedded view will remain open and not connected,
until the user closes the panel which triggers the closed state.

@experimental

## `closeEmbeddedView`

```ts
Forma.closeEmbeddedView(options: { embeddedViewId: string; }): Promise<void>;
```

Close an embedded view belonging to this extension.

Currently only floating panels can be closed.

If the embedded view is not open this will still resolve successfully.

@experimental

## `onEmbeddedViewStateChange`

```ts
Forma.onEmbeddedViewStateChange(handler: (payload: { embeddedViewId: string; state: "opened" | "connected" | "disconnected" | "closed"; }) => void): Promise<CreateSubscriptionResult>;
```

Listen to when the state of an embedded view belonging to the current
extension changes.

@experimental

## `onLocaleUpdate`

```ts
Forma.onLocaleUpdate(handler: (payload: { locale: string; }) => void): Promise<CreateSubscriptionResult>;
```

Subscribe to locale updates.

The handler will be called when the locale updates or locale becomes ready.

@example
```js
const i18n = ... // your i18n library

void Forma.onLocaleUpdate(({ locale }) => {
  i18n.setLocale(locale)
})
```

@param handler function to be called when the locale updates
@returns { unsubscribe: () => void } object with an `unsubscribe` method to stop subscribing to the event

## `onEmbeddedViewClosing`

```ts
Forma.onEmbeddedViewClosing(handler: (payload: { timeoutDuration: number; }) => Promise<void>): CreateSubscriptionResult;
```

Register a handler to be called when the embedded view is closing.
It will be called before the embedded view is removed from the DOM.
The handler must resolve before the timeout duration.

@example
const { unsubscribe } = Forma.onEmbeddedViewClosing(async ({ timeoutDuration }) => {
   await new Promise((resolve) => setTimeout(() => {
     console.log(`The embedded view will be removed from DOM within ${timeoutDuration}ms`)
     resolve(null)
   }, 5000))
})

// Later, when you want to stop listening for changes:
unsubscribe()

@param handler function to be called when the embedded view is closing. The handler must resolve before the timeout duration.
@returns { unsubscribe: () => void } object with an `unsubscribe` method to stop subscribing to the event

@remarks
This will not function when the user closes the tab or browser gracefully.
To ensure robustness, please also handle these events.
Learn more at [Window: beforeunload event](https://developer.mozilla.org/en-US/docs/Web/API/Window/beforeunload_event).

@experimental

## `createMessagePort`

```ts
Forma.createMessagePort(options: { /** * The ID of the embedded view to communicate with. */ embeddedViewId: string; /** * Optional name for the port. Can be used if setting * up multiple ports to distinguish between them. */ portName?: string | undefined; }): Promise<MessagePort>;
```

Create a MessagePort that can be used to communicate directly with
another embedded view belonging to the current extension.

The other embedded view must have called the onMessagePort method
during initialization for this to succeeed.

@see https://developer.mozilla.org/en-US/docs/Web/API/Channel_Messaging_API
@experimental

## `onMessagePort`

```ts
Forma.onMessagePort(handler: (payload: { portName?: string | undefined; port: MessagePort; }) => void): () => void;
```

Receive a MessagePort initiated from createMessagePort.

The first time this is called, the handler will receive any
queued message ports.

@returns A function that can be used to unsubscribe.

@experimental

---
SDK 문서: https://app.autodeskforma.com/forma-embedded-view-sdk/docs/
