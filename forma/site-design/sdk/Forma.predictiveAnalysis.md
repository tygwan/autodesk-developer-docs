---
namespace: Forma.predictiveAnalysis
class: PredictiveAnalysisApi
sdk_version: 0.93.0
surface: sdk
runtime: forma-iframe-only
---

# Forma.predictiveAnalysis

```ts
import { Forma } from "forma-embedded-view-sdk/auto";
```

## `getWindParameters`

```ts
Forma.predictiveAnalysis.getWindParameters(): Promise<WindParameters>;
```

This function returns the wind parameters used by Forma Site Design to predict wind conditions.
It includes a wind rose with 8 directions and a surface roughness.

## `predictWind`

```ts
Forma.predictiveAnalysis.predictWind(request: { /** HeightMaps represent a height raster for a given area. */ heightMaps: HeightMaps; /** Windrose with 8 directions. Value used by Forma Site Design can be retrieved using `getWindParameters`. */ windRose: { data: WindDirectionData[]; height: number; }; /** Type of wind results to predict. Only wind comfort supported for now. */ type: "comfort"; /** Surface roughness. Value used by Forma Site Design can be retrieved using `getWindParameters`. */ roughness: number; /** Read more about [Comfort scales](https://help.autodeskforma.com/en/articles/6994344-how-to-analyze-pedestrian-wind-comfort). */ comfortScale: "lawson_lddc" | "davenport" | "lawson" | "lawson_2001" | "nen8100" | "cstb"; }): Promise<PredictiveAnalysisGroundGrid>;
```

Predict wind conditions using Forma Site Design's rapid wind model.
Read more about rapid wind at [Forma Site Design Help](https://help.autodeskforma.com/en/articles/6977396-rapid-wind-analysis).

@returns 2d grid of wind conditions. For wind comfort values are 0-4 where lower is better conditions.

@example
const windRose = await Forma.prediction.getWindParameters()
// See HeightMaps for more infor on how to create heightMaps
const heightMaps = computeHeightMaps(terrainGeometry, terrainAndBuildingsGeometry)
const prediction = await Forma.prediction.predictWind({
 heightMaps,
 windRose,
 type: "comfort",
 roughness: windRose.roughness,
 comfortScale: "lawson_lddc",
})
// calculate statistics, mix with other grids, etc.

---
SDK 문서: https://app.autodeskforma.com/forma-embedded-view-sdk/docs/
