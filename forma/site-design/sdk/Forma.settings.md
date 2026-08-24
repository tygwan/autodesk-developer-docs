---
namespace: Forma.settings
class: SettingsApi
sdk_version: 0.93.0
surface: sdk
runtime: forma-iframe-only
---

# Forma.settings

```ts
import { Forma } from "forma-embedded-view-sdk/auto";
```

## `get`

```ts
Forma.settings.get(): Promise<SettingsResponse>;
```

Fetch all building functions for the project, including the three built-in
defaults (residential, commercial, unspecified).

@returns All building functions for the project.

@example
const { buildingFunctions } = await Forma.settings.get()

---
SDK 문서: https://app.autodeskforma.com/forma-embedded-view-sdk/docs/
