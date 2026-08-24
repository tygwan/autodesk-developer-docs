---
namespace: Forma.selection
class: SelectionApi
sdk_version: 0.93.0
surface: sdk
runtime: forma-iframe-only
---

# Forma.selection

```ts
import { Forma } from "forma-embedded-view-sdk/auto";
```

## `getSelection`

```ts
Forma.selection.getSelection(): Promise<string[]>;
```

Get selected elements.

@returns List of paths to elements currently selected in the scene.

@example
// Fetch all paths to selected elements in the current proposal.
// Count how many of them are buildings.
const selectedPaths = await Forma.selection.getSelection()
const buildingPaths = await Forma.geometry.getPathsByCategory({ category: "buildings" })
const selectedBuildingPaths = selectedPaths.filter(path => buildingPaths.includes(path))
const numberOfSelectedBuildings = selectedBuildingPaths.length

## `subscribe`

```ts
Forma.selection.subscribe(callback: (payload: { paths: string[]; }) => void): Promise<{ unsubscribe: () => void; }>;
```

Subscribe to selection changes.

@example
const { unsubscribe } = await Forma.selection.subscribe(({ paths }) => {
 console.log(paths)
});

@param callback event handler for each selection change
@returns { unsubscribe: () => void } object with an `unsubscribe` method to stop listening

---
SDK 문서: https://app.autodeskforma.com/forma-embedded-view-sdk/docs/
