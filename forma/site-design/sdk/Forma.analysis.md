---
namespace: Forma.analysis
class: AnalysisApi
sdk_version: 0.93.0
surface: sdk
runtime: forma-iframe-only
---

# Forma.analysis

```ts
import { Forma } from "forma-embedded-view-sdk/auto";
```

## `list`

```ts
Forma.analysis.list(request: { /** * Authcontext to use with the request. As of now, the currently * open project id is both default and only allowed value. */ authcontext?: string | undefined; /** * First part of root element URN -- enables filtering based on URN pattern. */ elementUrnPrefix?: string | undefined; /** * Allowedlist of analysis types (such as sun, noise and wind) to filter for. */ analysisTypes?: string[] | undefined; }): Promise<Analysis[]>;
```

Fetch analysis records connected to the currently open proposal.

@returns
List of relevant analysis records.

@example
// Fetch all sun analysis records.
// Filter to only include those in SUCCEEDED state.
const sunAnalyses = await Forma.analysis.list({ analysisTypes: ["sun"] })
const succeededSunAnalyses = sunAnalyses.filter(analysis => analysis.status === "SUCCEEDED")

## `triggerNoise`

```ts
Forma.analysis.triggerNoise(request: { /** * List of element paths to trigger noise analysis on. */ selectedElementPaths: string[]; /** * Root URN corresponding to the proposal which the selected element * paths belong to. Defaults to the currently open proposal. */ rootUrn?: string | undefined; }): Promise<Analysis>;
```

@beta
Trigger a
[noise analysis](https://aps.autodesk.com/en/docs/forma/v1/embedded-views/useful-concepts/analysis/noise/)
based on the traffic data connected to roads and railways in the proposal. Computes A-weighted decibel levels.

Requires edit access. See getCanEdit for more info.

@returns Analysis record for the newly triggered analysis.

@example
// Trigger noise analysis on selected elements
const currentlySelected = await Forma.selection.getSelection()
const sunAnalysis = await Forma.analysis.triggerNoise({
   selectedElementPaths: currentlySelected
})
@remarks
Noise analysis is a Beta feature of Autodesk Forma Site Design.

## `triggerSun`

```ts
Forma.analysis.triggerSun(request: { /** * List of element paths to trigger sun analysis on. */ selectedElementPaths: string[]; /** * Month of the year (1-12). */ month: number; /** * Day of the month (1-31). */ date: number; /** * Root URN corresponding to the proposal which the selected element * paths belong to. Defaults to the currently open proposal. */ rootUrn?: string | undefined; }): Promise<Analysis>;
```

Trigger a
[sun analysis](https://aps.autodesk.com/en/docs/forma/v1/embedded-views/useful-concepts/analysis/sun/)
for a specific day of the year. Computes sun exposure in hours.

Requires edit access. See getCanEdit for more info.

@returns
Analysis record for the newly triggered analysis.

@example
// Trigger sun analysis on selected elements for the summer solstice
const currentlySelected = await Forma.selection.getSelection()
const sunAnalysis = await Forma.analysis.triggerSun({
   selectedElementPaths: currentlySelected,
   month: 6,
   date: 21
})

## `getSunAnalysis`

```ts
Forma.analysis.getSunAnalysis(request: { /** * Unique identifier for the analysis */ analysisId: string; }): Promise<SunAnalysis>;
```

Fetch a specific sun analysis.

@returns
Information about the sun analysis.

## `getNoiseAnalysis`

```ts
Forma.analysis.getNoiseAnalysis(request: { /** * Unique identifier for the analysis */ analysisId: string; }): Promise<NoiseAnalysis>;
```

Fetch a specific noise analysis.

@returns
Information about the noise analysis.

@remarks
Noise analysis is a Beta feature of Autodesk Forma Site Design.

## `getGroundGrid`

```ts
Forma.analysis.getGroundGrid(request: { /** * Analysis record to fetch ground grid results for. */ analysis: Analysis; }): Promise<AnalysisGroundGrid | undefined>;
```

Fetch
[ground grid result](https://aps.autodesk.com/en/docs/forma/v1/embedded-views/useful-concepts/analysis/)
for a sun or noise analysis.

Requires edit access. See getCanEdit for more info.

@returns
Ground grid containing results for the requested analysis.

@example
// Fetch ground grid for the first listed succeeded sun analysis
const sunAnalyses = await Forma.analysis.list({ analysisTypes: ["sun"] })
const succeededSunAnalyses = sunAnalyses.filter(analysis => analysis.status === "SUCCEEDED")
const groundGrid = await Forma.analysis.getGroundGrid({ analysis: succeededSunAnalyses[0] })

@remarks
Noise analysis is a Beta feature of Autodesk Forma Site Design.

---
SDK 문서: https://app.autodeskforma.com/forma-embedded-view-sdk/docs/
