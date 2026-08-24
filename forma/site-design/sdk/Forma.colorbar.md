---
namespace: Forma.colorbar
class: ColorbarApi
sdk_version: 0.93.0
surface: sdk
runtime: forma-iframe-only
---

# Forma.colorbar

```ts
import { Forma } from "forma-embedded-view-sdk/auto";
```

## `add`

```ts
Forma.colorbar.add(request: { /** * Colors for each segment of the colorbar. The number of colors determine the number of segments the colorbar is divided into. */ colors: string[]; /** * Where to position the labels relative to the color segments. * * - `"center"` will place the label in the middle of the segment and requires the number of labels to be equal to the number of segments. * - `"edge"` will place the label between the segments and requires the number of labels to be 1 less than the number of segments. */ labelPosition?: "center" | "edge" | undefined; /** * Labels to show below the color segments. * * The number of `labels` must be equal to or 1 less than the number of `colors`, depending on the `labelPosition`. * * An empty string can be used to skip a label. With many colors, it is recommended to skip labels to avoid clutter. * * @example * const labels = ["", "200", "", "400", "", "600", "", "800", ""] */ labels?: string[] | undefined; /** * Unit label to be displayed on the left side of the component. * * @example * const unit = "kWh/m²" */ unit?: string | undefined; /** * Function to be called when the user changes the limits of the colorbar. * This function must be passed to make the colorbar limits interactive. * * @example * Filter analysis results when user interact with the colorbar and update the range limits. * ```ts * const onRangeFilterChange = (rangeFilter: { lowerIndex, upperIndex }) => { * const lowerValue = values[lowerIndex] * const upperValue = values[upperIndex] * myAnalysis.filterVisualsAndStatsByRange(lowerValue, upperValue) * } * ``` */ onRangeFilterChange?: ((rangeFilter: { lowerIndex: number; upperIndex: number; }) => void) | undefined; }): Promise<void>;
```

Add colorbar to the scene view.

Only one colorbar can be added at a time. Only the most recently added colorbar will be visible.

     @example Wind comfort colorbar
     Add wind comfort colorbar. The labels are centered below the segments.
     ```ts
     const comfortWindColors = ["#B2F8DA", "#55DCA2", "#FED52A", "#FFA900", "#FF463A"]
     const comfortWindLabels = ["Sitting", "Standing", "Strolling", "Walking", "Uncomfortable"]
     const labelPosition = "center"
     await Forma.colorbar.add({colors: comfortWindColors, labelPosition, labels: comfortWindLabels})
     ```
     <img src="../media/colorbar_wind_comfort.png" width="600px"/>

@example Solar energy interactive colorbar
Add interactive solar energy colorbar. Include colorbar unit showed to the left and labels on selected segment limits.
```ts
const solarEnergyColors = ["#662818", "#80321E", "#D94E06", "#E46306", "#EE7606", "#F88A06", "#FFA005", "#FFBC04", "#FFD603", "#FFF101",]
const solarEnergyLabels = ["", "700", "", "800", "", "900", "", "1000", ""]
const labelPosition = "edge"
const filterAnalysis = (rangeFilter: {lowerIndex: number, upperIndex: number}) => {
  // Do something with the range filter
  console.log(rangeFilter)
}
await Forma.colorbar.add({colors: solarEnergyColors, labelPosition, labels: solarEnergyLabels, unit: "kWh/m²", onRangeFilterChange: filterAnalysis})
```
<img src="../media/colorbar_solar_energy.gif" width="600px"/>

## `remove`

```ts
Forma.colorbar.remove(): Promise<void>;
```

Removes the colorbar added by this embedded view from the scene view.

@example
await Forma.colorbar.remove()

---
SDK 문서: https://app.autodeskforma.com/forma-embedded-view-sdk/docs/
