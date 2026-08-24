---
namespace: Forma.camera
class: CameraApi
sdk_version: 0.93.0
surface: sdk
runtime: forma-iframe-only
---

# Forma.camera

```ts
import { Forma } from "forma-embedded-view-sdk/auto";
```

## `move`

```ts
Forma.camera.move(request: { /** Wanted position to move camera to. */ position: { x: number; y: number; z: number; }; /** Target to point camera towards. */ target?: { x: number; y: number; z: number; } | undefined; /** Zoom level to set camera to. */ zoom?: number | undefined; /** Duration of transition in milliseconds. */ transitionTimeMs?: number | undefined; }): Promise<void>;
```

Move camera view to a new position.

@example
// Move camera to view down on the center of the proposal from directly
// above, spending 1 second on the transition.
await Forma.camera.move({
  position: { x: 0, y: 0, z: 100 },
  target: { x: 0, y: 0, z: 0 },
  transitionTimeMs: 1000,
})

## `switchPerspective`

```ts
Forma.camera.switchPerspective(): Promise<void>;
```

Toggle between perspective and orthographic camera.

@example
await Forma.camera.switchPerspective()

## `capture`

```ts
Forma.camera.capture(request: { /** Width of the canvas to capture. */ width: number; /** Height of the canvas to capture. */ height: number; }): Promise<HTMLCanvasElement>;
```

Capture a screenshot of the current camera view as a canvas.

@returns Canvas with the captured screenshot.

@example
// Capture a 100x100 pixel screenshot of the current camera view.
const canvas = await Forma.camera.capture({ width: 100, height: 100 })

## `getCurrent`

```ts
Forma.camera.getCurrent(): Promise<CameraState>;
```

Fetch the current camera state in the designmode scene.

@returns Current camera state.

@example
const currentCameraState = await Forma.camera.getCurrent()

## `subscribe`

```ts
Forma.camera.subscribe(callback: (payload: CameraState) => void): Promise<{ unsubscribe: () => void; }>;
```

Subscribe to camera changes.

@example
const { unsubscribe } = await Forma.camera.subscribe((cameraState: CameraState) => {
  console.log("Camera was updated", cameraState)
})
// Later, when you want to stop listening for changes:
unsubscribe()

@param callback event handler for each camera change. Callback receives the new camera state as an argument.
@returns { unsubscribe: () => void } object with an `unsubscribe` method to stop listening for changes

---
SDK 문서: https://app.autodeskforma.com/forma-embedded-view-sdk/docs/
