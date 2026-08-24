---
namespace: Forma.render
class: RenderApi
sdk_version: 0.93.0
surface: sdk
runtime: forma-iframe-only
---

# Forma.render

```ts
import { Forma } from "forma-embedded-view-sdk/auto";
```

## `hideElement`

```ts
Forma.render.hideElement(request: { path: string; }): Promise<void>;
```

Hide an element from the scene.

@example
await Forma.render.hideElement({ path: "root/myElementPath" })

## `hideElementsBatch`

```ts
Forma.render.hideElementsBatch(request: { paths: string[]; }): Promise<void>;
```

Hide a set of elements from the scene.

@example
await Forma.render.hideElementsBatch({ paths: ["root/myElement1", "root/myElement2"] })

## `unhideElement`

```ts
Forma.render.unhideElement(request: { path: string; }): Promise<void>;
```

Unhide an element from the scene.

@example
await Forma.render.unhideElement({ path: "root/myElementPath" })

## `unhideElementsBatch`

```ts
Forma.render.unhideElementsBatch(request: { paths: string[]; }): Promise<void>;
```

Unhide a set of elements from the scene.

@example
await Forma.render.unhideElementsBatch({ paths: ["root/myElement1", "root/myElement2"] })

## `setElementsVisibility`

```ts
Forma.render.setElementsVisibility(request: { paths: { path: string; visible: boolean; }[]; }): Promise<void>;
```

Hides or unhides elements from the scene based on the `visible` parameter for each path.

@example
await Forma.render.setElementsVisibility( { [ { "root/myElement1", true}, { "root/myElement2", false} ] } )

## `unhideAllElements`

```ts
Forma.render.unhideAllElements(): Promise<void>;
```

Unhide all elements added by the hideElements function of this API from the scene.

Called automatically when the extension is unloaded.

@example
await Forma.render.unhideAllElements()

## `addMesh`

```ts
Forma.render.addMesh(request: { /** Data describing the mesh to be added. */ geometryData: GeometryData; /** Transform to position the element relative to the project reference point. Defaults to identity matrix. */ transform?: Transform | undefined; }): Promise<{ id: string; }>;
```

Add a mesh to the scene.

@returns Unique identifier of the mesh object in the scene.

@example
const {id} = await Forma.render.addMesh({ geometryData }),

## `updateMesh`

```ts
Forma.render.updateMesh(request: { /** Scene identifier of the mesh object to update. */ id: string; /** Updated data describing the mesh. */ geometryData: GeometryData; /** Updated transform to apply. */ transform?: Transform | undefined; }): Promise<void>;
```

Upsert an mesh in the scene. If the mesh does not exist, it will be added.

@example
await Forma.render.updateMesh({ id: "myPreviouslyAddedGlbId", geometryData })

## `remove`

```ts
Forma.render.remove(request: { /** Scene identifier of the mesh object to remove. */ id: string; }): Promise<void>;
```

Remove an existing mesh from the scene.

@example
await Forma.render.remove({ id: "myPreviouslyAddedMeshId" })

## `cleanup`

```ts
Forma.render.cleanup(): Promise<void>;
```

Remove all meshes added by this API from the scene.

Called automatically when the extension is unloaded.

@example
await Forma.render.cleanup()

---
SDK 문서: https://app.autodeskforma.com/forma-embedded-view-sdk/docs/
