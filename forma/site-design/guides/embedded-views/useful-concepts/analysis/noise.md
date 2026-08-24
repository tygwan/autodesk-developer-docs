---
title: "Noise"
url_path: embedded-views/useful-concepts/analysis/noise
surface: guide
---
# Interpreting noise analysis results (Beta)

**NOTE: Noise analysis is a Beta feature of Autodesk Forma**

The noise analysis is based on annual average traffic counts of roads in the
project, and estimates the perceived noise in decibels (dB). For a full
introduction to this analysis, check out the
[Autodesk Forma help centre article](https://help.autodeskforma.com/en/articles/7793576-detailed-noise-analysis).

In the output of the noise analysis, `grid` contains the decibel value at each
sample point as a `Float32` value. Non-valid sample points are signaled by
`NaN` entries.

## Code example: Noise above 60 dB

The following code example illustrates how to generate a mask of noise values larger than 60 decibel:

```
const noiseAnalysis = analyses
  .filter(({ proposalId, status }) => proposalId === currentProposalId && status === "SUCCEEDED")
  .find({ analysisType }) => analysisType === "noise");

const noiseGroundGrid = await Forma.analysis.getGroundGrid({
  analysis: noiseAnalysis,
});

const N_POINTS = noiseGroundGrid.mask.length;
const aboveSixtyDecibelMask = new Float32Array(N_POINTS).fill(NaN);

for (let i = 0; i < N_POINTS; i++) {
  if (!isNaN(noiseGroundGrid.grid[i])) {
    if (noiseGroundGrid.grid[i] > 60) {
      aboveSixtyDecibelMask[i] = 0;
    } else {
      aboveSixtyDecibelMask[i] = 1;
    }
  }
}
```

---
원본 문서: https://aps.autodesk.com/en/docs/forma/v1/embedded-views/useful-concepts/analysis/noise
