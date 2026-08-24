---
namespace: Forma.designTool
class: DesignToolApi
sdk_version: 0.93.0
surface: sdk
runtime: forma-iframe-only
---

# Forma.designTool

```ts
import { Forma } from "forma-embedded-view-sdk/auto";
```

## `getPoint`

```ts
Forma.designTool.getPoint(): Promise<Vec3 | undefined>;
```

Activate tool for creating a point by clicking in the 3D scene.

Does not return until the user has selected a point or cancelled the operation (by clicking ESC).

@returns The selected point, or `undefined` if the user cancelled the operation.

@example
const point = await Forma.designTool.getPoint();

## `getPolygon`

```ts
Forma.designTool.getPolygon(): Promise<Vec3[] | undefined>;
```

Activate tools for creating a polygon.

There are several available tools for creating polygons:
1. "free-form": Click repeatedly in the 3D scene to create a polygon with any number of vertices.
2. "rectangle": Click two points to define the first side of a rectangle, and then a third point along a 90 degree angle to define the second side.
3. "circle": Click a centre and then a point on the circumference to create a circle.
4. "pick": Select an existing shape in the 3D scene and use it as the basis for a new polygon.

Does not return until the user has created a polygon or cancelled the operation (by clicking ESC).

@returns The created polygon, or `undefined` if the user cancelled the operation.

@example
const polygon = await Forma.designTool.getPolygon();

## `getExtrudedPolygon`

```ts
Forma.designTool.getExtrudedPolygon(): Promise<ExtrudedPolygon | undefined>;
```

Activate tool for creating an extruded polygon.

See getPolygon for available tools for creating polygons.
Once a polygon has been created, choose the height of the extrusion by clicking a final time.

Does not return until the user has created an extruded polygon or cancelled the operation (by clicking ESC).

@returns The created extruded polygon, or `undefined` if the user cancelled the operation.

@example
const extrudedPolygon = await Forma.designTool.getExtrudedPolygon();

## `getLine`

```ts
Forma.designTool.getLine(): Promise<Line | undefined>;
```

Activate tool for creating a line.

Click repeatedly in the 3D scene to create a line with any number of vertices.

Does not return until the user has created a line or cancelled the operation (by clicking ESC).

@returns The created Line, or `undefined` if the user cancelled the operation.

@example
const line = await Forma.designTool.getLine();

## `onEditStart`

```ts
Forma.designTool.onEditStart(callback: () => void): Promise<{ unsubscribe: () => void; }>;
```

Subscribe to the 'start' event for edits with the drawing tools.

@example
const { unsubscribe } = await Forma.designTool.onEditStart(() => {
 console.log('start event')
});

@param callback event handler to be called when editing starts
@returns { unsubscribe: () => void } object with an `unsubscribe` method to stop listening

## `onEditEnd`

```ts
Forma.designTool.onEditEnd(callback: () => void): Promise<{ unsubscribe: () => void; }>;
```

Subscribe to the 'end' event for edits with the drawing tools.

@example
const { unsubscribe } = await Forma.designTool.onEditEnd(() => {
 console.log('end event')
});

@param callback event handler to be called when editing ends
@returns { unsubscribe: () => void } object with an `unsubscribe` method to stop listening

---
SDK 문서: https://app.autodeskforma.com/forma-embedded-view-sdk/docs/
