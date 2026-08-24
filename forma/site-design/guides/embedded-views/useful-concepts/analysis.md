---
title: "Analysis"
url_path: embedded-views/useful-concepts/analysis
surface: guide
---
# Analysis

Forma includes a number of analyses which provide our users with insight about
factors such as sun exposure, traffic noise and wind conditions. Read an
introduction to our analysis suite
[here](https://help.autodeskforma.com/en/articles/6932460-how-to-analyze-your-proposals).
Through the Analysis API, it is possible to access information about these
analyses, and to access some of the raw results (currently _noise_ and _sun_
results on _ground_, with more to come).

In order to retrieve all analyses for a given `authcontext`, use the `list()`
method of the analysis API:

```
const projectId = Forma.getProjectId();
const analyses = await Forma.analysis.list({ authcontext: projectId });
```

Each analysis record contains metadata about the analysis according to the
following interface:

```
export interface Analysis {
  analysisId: string;
  analysisType: "sun" | "noise" | string;
  createdAt: number;
  proposalId: string;
  proposalRevision: string;
  status: "SUCCEEDED" | "FAILED";
  updatedAt: number;
}
```

To find the results of a given analysis in the current proposal revision you can

Filtering can help to obtain only analyses which have succeeded and which
correspond to the currently open proposal. Obtaining the latest sun analysis
which satisfy these criteria:

```
const currentProposalId = await Forma.proposal.getId();
const sunAnalysis = analyses
  .filter(({ proposalId, status }) => proposalId === currentProposalId && status === "SUCCEEDED")
  .find({ analysisType }) => analysisType === "sun");
```

# Analysis ground grid

In order to fetch the ground results for this particular analysis, use:

```
const sunGroundGrid = await Forma.analysis.getGroundGrid({
  analysis: sunAnalysis,
});
```

The output format of raw ground results is

```
export type AnalysisGroundGrid = {
  grid: Float32Array | Uint8Array;
  mask?: Uint8Array;
  resolution: number;
  width: number;
  height: number;
  x0: number;
  y0: number;
};
```

`grid` is a flat list of the result values. The data type and format of the
`grid` depends on the analysis type, and in the subsections below we describe how to
interpret the results as new types are exposed through the API.

`mask` is a boolean array which denotes if each sample point is a valid sample point. For `Float32Array` this is
also signaled by a `NaN` value for non-valid sample points. Such points are found for example under building footprints
of buildings and where the drawn ground polygons leaves gaps in the result grid. We have here chosen a regular `width`
x `height` analysis grid even though the analyzed ground polygon does not cover the whole `grid`.

`resolution` is the number of _meters_ between each sample point in the ground grid.

`width` and `height` gives the dimensions of the analysis grid, i.e. the number of grid points in each dimension. Given an analysis result with `n`
values per point, you are guaranteed that `mask.length === width * height` and `grid.length === n * width * height`.

`x0` and `y0` denotes the coordinates for the upper left corner of the analysis ground grid in local coordinates relative to the `refPoint` of the project.

The sample point coordinates can calculated using the grid data:

```
for (let k = 0; k < N_POINTS; k++) {
    const samplePointXCoords[k] = x0 + resolution / 2 + resolution * Math.floor(k % width);
    const samplePointYCoords[k] = y0 - resolution / 2 - resolution * Math.floor(k / width);
}
```

---
원본 문서: https://aps.autodesk.com/en/docs/forma/v1/embedded-views/useful-concepts/analysis
