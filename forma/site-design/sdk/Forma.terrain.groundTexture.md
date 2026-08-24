---
namespace: Forma.terrain.groundTexture
class: GroundTextureApi
sdk_version: 0.93.0
surface: sdk
runtime: forma-iframe-only
---

# Forma.terrain.groundTexture

```ts
import { Forma } from "forma-embedded-view-sdk/auto";
```

## `add`

```ts
Forma.terrain.groundTexture.add(request: { /** The name of the texture to add. */ name: string; /** The canvas to use as texture data. */ canvas: HTMLCanvasElement; /** x and y position denotes where to place the center of the canvas. z gives the order of the ground texture and overlapping textures with a larger z position will cover those with a smaller one. */ position: Position; /** The number of meters each pixel in the canvas represents. Defaults to 1 meter. */ scale?: Scale | undefined; }): Promise<void>;
```

Add a ground texture to the terrain.

@example
// Create canvas
const canvas = document.createElement("canvas");
canvas.width = 100;
canvas.height = 100;

// Fill canvas with blue color
const ctx = canvas.getContext("2d");
if (ctx) {
   ctx.fillStyle = "blue";
   ctx.fillRect(0, 0, 100, 100);

   // Add canvas as ground texture to position (0, 0) in the local coordinate system.
   // The texture will cover a 100x100 meter square area on the terrain,
   // with lower left corner in (x: -50, y: -50) and upper right corner in (x: 50, y: 50).
   await Forma.terrain.groundTexture.add({
       name: "myGroundTexture",
       canvas,
       position: { x: 0, y: 0, z: 1 },
       scale: { x: 1, y: 1 },
     });
}

## `updateTextureData`

```ts
Forma.terrain.groundTexture.updateTextureData(request: { /** The name of the texture to update. */ name: string; /** The canvas to use as updated texture data. */ canvas: HTMLCanvasElement; }): Promise<void>;
```

Update the texture data for an existing ground texture object.

@example
// Create a new canvas filled with red and update the ground texture with this new texture
const newCanvas = document.createElement("newCanvas");
newCanvas.width = 100;
newCanvas.height = 100;
const ctx = newCanvas.getContext("2d");
if (ctx) {
   ctx.fillStyle = "red";
   ctx.fillRect(0, 0, 100, 100);
   await Forma.terrain.groundTexture.updateTextureData({
       name: "myGroundTexture",
       canvas: newCanvas,
   });
}

## `updatePosition`

```ts
Forma.terrain.groundTexture.updatePosition(request: { /** The name of the texture to move. */ name: string; /** The position to move the ground texture to. x and y position denotes where to place the center of the canvas. z gives the order of the ground texture and overlapping textures with a larger z position will cover those with a smaller one. */ position: Position; }): Promise<void>;
```

Update the placement of an existing ground texture object.

@example
// Move "myGroundTexture" to (100, 100) in the local coordinate system.
await Forma.terrain.groundTexture.updatePosition({
  name: "myGroundTexture",
  position: { x: 100, y: 100, z: 1 }
})

## `remove`

```ts
Forma.terrain.groundTexture.remove(request: { /** The name of the texture to remove. */ name: string; }): Promise<void>;
```

Remove an existing ground texture object.

@example
// Remove "myGroundTexture".
await Forma.terrain.groundTexture.remove({ name: "myGroundTexture" })

---
SDK 문서: https://app.autodeskforma.com/forma-embedded-view-sdk/docs/
