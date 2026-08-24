---
namespace: Forma.elements.floorStack
class: FloorStackApi
sdk_version: 0.93.0
surface: sdk
runtime: forma-iframe-only
---

# Forma.elements.floorStack

```ts
import { Forma } from "forma-embedded-view-sdk/auto";
```

## `createFromFloors`

```ts
Forma.elements.floorStack.createFromFloors(request: { /** The floors which define the building */ floors: Floor[]; /** The optional floor plans to define floors from */ plans?: Plan[]; }): Promise<{ urn: string; }>;
```

Create a 2.5D building from a stack of floors.

By 2.5D, we mean that the building only has vertical walls and flat roofs.
The floors are given from bottom to top.

Requires edit access to the project. See getCanEdit for more info.

@returns URN of the created building element.

## `createFromFloorsBatch`

```ts
Forma.elements.floorStack.createFromFloorsBatch(request: { /** The floors which define the building */ floors: Floor[]; /** The optional floor plans to define floors from */ plans?: Plan[]; }[]): Promise<{ urns: string[]; }>;
```

Create multiple 2.5D buildings from stacks of floors.

By 2.5D, we mean that the building only has vertical walls and flat roofs.
The floors are given from bottom to top.

Requires edit access to the project. See getCanEdit for more info.

@returns URNs of the created building elements.

---
SDK 문서: https://app.autodeskforma.com/forma-embedded-view-sdk/docs/
