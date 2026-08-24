---
namespace: Forma.render.elementColors
class: ElementColorApi
sdk_version: 0.93.0
surface: sdk
runtime: forma-iframe-only
---

# Forma.render.elementColors

```ts
import { Forma } from "forma-embedded-view-sdk/auto";
```

## `set`

```ts
Forma.render.elementColors.set(request: { /** The internal paths of elements and their colors. */ pathsToColor: Map<string, string>; }): Promise<{ id: string; }>;
```

Set color override on the speficied elements.
The color is set as a hex string, e.g. `#ff0000` in the sRGB color space.

@example
void Forma.selection.subscribe(({ paths }) => {
  Forma.render.elementColors.clearAll()
  const pathsToColor = new Map<string, string>()
  for (const path of paths) {
    pathsToColor.set(path, "#00ff00")
  }
  Forma.render.elementColors.set({ pathsToColor })
})

## `clear`

```ts
Forma.render.elementColors.clear(request: { /** The internal paths of elements and their colors. */ paths: string[]; }): Promise<{ id: string; }>;
```

Clear color override on the speficied elements.

## `clearAll`

```ts
Forma.render.elementColors.clearAll(): Promise<{ id: string; }>;
```

Clear color override on the speficied elements.

---
SDK 문서: https://app.autodeskforma.com/forma-embedded-view-sdk/docs/
