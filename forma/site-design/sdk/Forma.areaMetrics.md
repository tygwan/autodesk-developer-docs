---
namespace: Forma.areaMetrics
class: AreaMetricsApi
sdk_version: 0.93.0
surface: sdk
runtime: forma-iframe-only
---

# Forma.areaMetrics

```ts
import { Forma } from "forma-embedded-view-sdk/auto";
```

## `calculate`

```ts
Forma.areaMetrics.calculate(request: { /** * Selection of paths to calculate metrics for. */ paths?: string[]; }): Promise<AreaMetrics>;
```

Calculate area metrics for the given paths.
If no paths are given, the metrics will be calculated for all elements.

@returns
Area metrics for the given paths.

@example
// Calculate area metrics for selected elements
const currentlySelected = await Forma.selection.getSelection()
const areaMetrics = await Forma.areaMetrics.calculate({
  paths: currentlySelected
})

---
SDK 문서: https://app.autodeskforma.com/forma-embedded-view-sdk/docs/
