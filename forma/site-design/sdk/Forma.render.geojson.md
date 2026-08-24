---
namespace: Forma.render.geojson
class: RenderGeojsonApi
sdk_version: 0.93.0
surface: sdk
runtime: forma-iframe-only
---

# Forma.render.geojson

```ts
import { Forma } from "forma-embedded-view-sdk/auto";
```

## `add`

```ts
Forma.render.geojson.add(request: { /** Feature collection of a geojson, Right now, we only support LineString and Polygon */ geojson: FeatureCollection<LineString | Polygon>; /** Transform to position the element relative to the project reference point. Defaults to identity matrix. */ transform?: Transform | undefined; }): Promise<{ id: string; }>;
```

Add a Geojson to the scene.

@returns Unique identifier of the Geojson object in the scene.

@example
const {id} = await Forma.render.geojson.add({ geojson }),

## `update`

```ts
Forma.render.geojson.update(request: { /** Scene identifier of the Geojson object to update (or create). */ id: string; /** Feature collection of a geojson, Right now, we only support LineString and Polygon */ geojson: FeatureCollection<LineString | Polygon>; /** Transform to position the element relative to the project reference point. Defaults to identity matrix. */ transform?: Transform | undefined; }): Promise<void>;
```

Upsert an geojson in the scene. If the geojson does not exist, it will be added.

This method can also be used as an upsert.

@example
await Forma.render.geojson.update({ id: "myPreviouslyAddedGeojsonId", geojson, isImperial, transform })

## `remove`

```ts
Forma.render.geojson.remove(request: { /** Scene identifier of the Geojson object to remove. */ id: string; }): Promise<void>;
```

Remove an existing Geojson from the scene.

@example
await Forma.render.geojson.remove({ id: "myPreviouslyAddedGeojsonId" })

## `cleanup`

```ts
Forma.render.geojson.cleanup(): Promise<void>;
```

Remove all Geojsons added by this API from the scene.

Called automatically when the extension is unloaded

@example
await Forma.render.geojson.cleanup()

---
SDK 문서: https://app.autodeskforma.com/forma-embedded-view-sdk/docs/
