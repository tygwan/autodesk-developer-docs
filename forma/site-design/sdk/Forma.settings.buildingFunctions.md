---
namespace: Forma.settings.buildingFunctions
class: BuildingFunctionsApi
sdk_version: 0.93.0
surface: sdk
runtime: forma-iframe-only
---

# Forma.settings.buildingFunctions

```ts
import { Forma } from "forma-embedded-view-sdk/auto";
```

## `add`

```ts
Forma.settings.buildingFunctions.add(params: { /** Display name for the new building function. */ name: string; /** Optional hex color string, e.g. "#FF5733". */ color?: HexColorString; }): Promise<SettingsResponse>;
```

Add a new building function to the project.

@returns All building functions after the addition.

@example
const { buildingFunctions } = await Forma.settings.buildingFunctions.add({ name: "Retail", color: "#FF5733" })

## `update`

```ts
Forma.settings.buildingFunctions.update(params: { /** ID of the building function to update. */ id: string; /** New display name. */ name: string; /** New hex color string, e.g. "#FF5733". */ color?: HexColorString; }): Promise<SettingsResponse>;
```

Update an existing project-level building function by ID.
Returns an error if the ID belongs to a built-in building function.

@returns All building functions after the update.

@example
const { buildingFunctions } = await Forma.settings.buildingFunctions.update({ id: "abc123", name: "Updated name" })

## `delete`

```ts
Forma.settings.buildingFunctions.delete(params: { /** ID of the building function to delete. */ id: string; }): Promise<SettingsResponse>;
```

Delete a project-level building function by ID.
Returns an error if the ID belongs to a built-in building function.

@returns All building functions after the deletion.

@example
const { buildingFunctions } = await Forma.settings.buildingFunctions.delete({ id: "abc123" })

---
SDK 문서: https://app.autodeskforma.com/forma-embedded-view-sdk/docs/
