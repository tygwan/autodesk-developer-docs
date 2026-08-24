---
namespace: Forma.terrain
class: TerrainApi
sdk_version: 0.93.0
surface: sdk
runtime: forma-iframe-only
---

# Forma.terrain

```ts
import { Forma } from "forma-embedded-view-sdk/auto";
```

## `getBbox`

```ts
Forma.terrain.getBbox(): Promise<Bbox>;
```

Fetch the bounding box for the terrain.

@returns Axis-aligned bounding box for the terrain.
More specifically, the minimum and maximum (x,y,z) values, in the local coordinate system.

## `getElevationAt`

```ts
Forma.terrain.getElevationAt(request: { /** The X-coordinate of the point in the local coordinate system. */ x: number; /** The Y-coordinate of the point in the local coordinate system. */ y: number; }): Promise<number>;
```

Retrieves the elevation of the terrain (in meters above sea level) at a specific point within the scene.

If the coordinates are outside the terrain mesh, it returns the minimum elevation in the terrain.

## `isInternal`

```ts
Forma.terrain.isInternal(): Promise<boolean>;
```

Returns whether the terrain is internal.

@remarks
Internal terrain is managed fully within Forma Site Design.
Non-internal terrain can potentially be coming from other cloud applications,
including Revit Cloud Model and other Forma Connected Clients.

Certain operations such as addPads,
applyPads, and
replaceTerrain are only supported
for internal terrains.

## `getPads`

```ts
Forma.terrain.getPads(): Promise<TerrainPad[]>;
```

Retrieves all terrain pads defined in the current terrain.

@remarks
Terrain pads are flat areas applied to the terrain surface.

Each pad defines a polygon boundary at a specific elevation. The terrain mesh
within the polygon is modified to match the pad's elevation. An optional slope
angle defines how the terrain transitions from surrounding areas to the pad.

@returns An array of TerrainPad objects representing all terrain pads.
Returns an empty array if no pads are defined on the terrain.

@example
```typescript
// Retrieve all terrain pads
const pads = await Forma.terrain.getPads();

// Log information about each pad
for (const pad of pads) {
  console.log(`Pad ID: ${pad.id}`);
  console.log(`  Elevation: ${pad.elevation}m`);
  console.log(`  Vertices: ${pad.coordinates.length}`);
  if (pad.slopeAngle !== undefined) {
    console.log(`  Slope angle: ${pad.slopeAngle}°`);
  }
}
```

## `addPads`

```ts
Forma.terrain.addPads(pads: TerrainPad[]): Promise<void>;
```

Adds new terrain pads to the existing pads on the terrain.

@remarks
This method appends the provided pads to the current set of terrain pads
without removing or modifying existing ones. Use this when you want to
incrementally add new flat areas to the terrain while preserving existing pads.

This method is only supported when the terrain is internal.
Use isInternal to check whether the terrain is internal.

Each pad must specify its slope using either `slopeAngle` (in degrees) or
`slopePercentage`, but not both.

@param pads - Array of terrain pads to add.

@example
```typescript
// Add multiple pads with different slope specifications
await Forma.terrain.addPads([
  {
    id: "7ab85ec80b3e2",
    coordinates: [
      { x: 0, y: 0 },
      { x: 100, y: 0 },
      { x: 100, y: 100 },
      { x: 0, y: 100 }
    ],
    elevation: 50,
    applySlope: true,
    slopeAngle: 30  // Using degrees
  },
  {
    id: "70234fcf791b2",
    coordinates: [
      { x: 200, y: 0 },
      { x: 300, y: 0 },
      { x: 300, y: 100 },
      { x: 200, y: 100 }
    ],
    elevation: 45,
    applySlope: true,
    slopePercentage: 50  // Using percentage
  },
  {
    id: "70234fcf791b3",
    coordinates: [
      { x: 200, y: 0 },
      { x: 300, y: 0 },
      { x: 300, y: 100 },
      { x: 200, y: 100 }
    ],
    elevation: 45,
    applySlope: false // No slope applied; abrupt pad
  }
]);
```

@see TerrainApi.applyPads to replace all existing pads.
@see TerrainApi.getPads to retrieve current pads.

## `applyPads`

```ts
Forma.terrain.applyPads(pads: TerrainPad[]): Promise<void>;
```

Replaces all existing terrain pads with the provided array of pads.

@remarks
This method unconditionally sets the terrain pads to the provided array,
removing any existing pads that are not included in the new array.
Use this when you want complete control over the terrain pads, or when
you need to remove pads.

This method is only supported when the terrain is internal.
Use isInternal to check whether the terrain is internal.

To remove all pads, call this method with an empty array.

@param pads - Array of terrain pads to set. Pass an empty array to remove all pads.

@example
```typescript
// Replace all pads with a new set
await Forma.terrain.applyPads([
  {
    id: "7ab85ec80b3e2",
    coordinates: [
      { x: 0, y: 0 },
      { x: 100, y: 0 },
      { x: 100, y: 100 },
      { x: 0, y: 100 }
    ],
    elevation: 50,
    applySlope: true,
    slopeAngle: 30
  }
]);
```

@example
```typescript
// Remove all terrain pads
await Forma.terrain.applyPads([]);
```

@see TerrainApi.addPads to add pads without removing existing ones.
@see TerrainApi.getPads to retrieve current pads.

---
SDK 문서: https://app.autodeskforma.com/forma-embedded-view-sdk/docs/
