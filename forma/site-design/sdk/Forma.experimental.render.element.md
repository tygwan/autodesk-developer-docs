---
namespace: Forma.experimental.render.element
class: RenderElementApi
sdk_version: 0.93.0
surface: sdk
runtime: forma-iframe-only
---

# Forma.experimental.render.element

```ts
import { Forma } from "forma-embedded-view-sdk/auto";
```

## `add`

```ts
Forma.experimental.render.element.add(request: { /** A list of elements with their transforms */ elements: { urn: Urn; transform?: Transform; }[]; }): Promise<{ id: string; }>;
```

Add elements to the scene.

@returns Unique identifier for this render call

@example
const { id } = await Forma.render.element.add({ elements: [{ urn: <urn> }] }),

## `update`

```ts
Forma.experimental.render.element.update(request: { /** Id of group to update. Obtained when adding elements using the Forma.render.element.add function */ id: string; /** A list of elements with their transforms */ elements: { urn: Urn; transform?: Transform; }[]; }): Promise<void>;
```

Upsert an element in the scene. If the element does not exist, it will be added.

This method can also be used as an upsert.

@example
await Forma.render.element.update({ id: "myPreviousAddedGroup", elements: [{ urn: <urn> }] })

## `remove`

```ts
Forma.experimental.render.element.remove(request: { /** Scene identifier of the Element object to remove. */ id: string; }): Promise<void>;
```

Remove an existing element group from the scene.

@example
await Forma.render.element.remove({ id: "myPreviousAddedGroup" })

## `cleanup`

```ts
Forma.experimental.render.element.cleanup(): Promise<void>;
```

Remove all Elements added by this API from the scene.

Called automatically when the extension is unloaded

@example
await Forma.render.element.cleanup()

---
SDK 문서: https://app.autodeskforma.com/forma-embedded-view-sdk/docs/
