---
namespace: Forma.render.glb
class: RenderGlbApi
sdk_version: 0.93.0
surface: sdk
runtime: forma-iframe-only
---

# Forma.render.glb

```ts
import { Forma } from "forma-embedded-view-sdk/auto";
```

## `add`

```ts
Forma.render.glb.add(request: { /** Binary .glb file as an ArrayBuffer */ glb: ArrayBuffer; }): Promise<{ id: string; }>;
```

Add a GLB to the scene.

@returns Unique identifier of the GLB object in the scene.

@example
const {id} = await Forma.render.glb.add({ glb }),

## `update`

```ts
Forma.render.glb.update(request: { /** Scene identifier of the GLB object to update (or create). */ id: string; /** Binary .glb file as an ArrayBuffer */ glb: ArrayBuffer; }): Promise<void>;
```

Upsert an mesh in the scene. If the mesh does not exist, it will be added.

This method can also be used as an upsert.

@example
await Forma.render.glb.update({ id: "myPreviouslyAddedGlbId", glb })

## `remove`

```ts
Forma.render.glb.remove(request: { /** Scene identifier of the GLB object to remove. */ id: string; }): Promise<void>;
```

Remove an existing GLB from the scene.

@example
await Forma.render.glb.remove({ id: "myPreviouslyAddedGlbId" })

## `cleanup`

```ts
Forma.render.glb.cleanup(): Promise<void>;
```

Remove all GLBs added by this API from the scene.

Called automatically when the extension is unloaded

@example
await Forma.render.glb.cleanup()

---
SDK 문서: https://app.autodeskforma.com/forma-embedded-view-sdk/docs/
