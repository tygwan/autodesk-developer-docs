---
document_type: "sdk-index"
product: "Autodesk Forma"
surface: "forma-embedded-view-sdk"
protocol: "TypeScript SDK"
sdk_version: "0.93.0"
language: "en"
generated: "true"
---

# Forma Embedded View SDK

[Forma Site Design index](../INDEX.md) · [Autodesk Forma overview](../../README.md)

## Overview

TypeScript SDK for extensions running inside a Forma embedded-view iframe.

- **Package:** `forma-embedded-view-sdk`
- **Version:** `0.93.0`
- **Runtime:** Forma embedded-view iframe only

> Use the REST or GraphQL APIs from servers, CLIs, batch processes, and other headless environments.

## Capability map

### Project context and proposals

Read project context, work with proposals and libraries, and coordinate embedded-view lifecycle and messaging.

| Namespace | Key operations | Documentation |
| --- | --- | --- |
| `Forma` | `ping`, `getIframeMessenger`, `getProjectId`, `getExtensionId`, `getRegion`, `getPresentationUnitSystem`, `getCanEdit`, `getCanViewHub`, … | [Open reference](./Forma.root.md) |
| `Forma.library` | `createItem`, `updateItem`, `deleteItem` | [Open reference](./Forma.library.md) |
| `Forma.project` | `get`, `getCountryCode`, `getGeoLocation`, `getTimezone` | [Open reference](./Forma.project.md) |
| `Forma.proposal` | `getRootUrn`, `getId`, `addElement`, `replaceElement`, `removeElement`, `replaceTerrain`, `updateElements`, `subscribe`, … | [Open reference](./Forma.proposal.md) |

### Elements and design automation

Read and modify elements, representations, floor stacks, blobs, generators, design tools, and integrated elements.

| Namespace | Key operations | Documentation |
| --- | --- | --- |
| `Forma.designTool` | `getPoint`, `getPolygon`, `getExtrudedPolygon`, `getLine`, `onEditStart`, `onEditEnd` | [Open reference](./Forma.designTool.md) |
| `Forma.elements` | `get`, `getByPath`, `getWorldTransform`, `editProperties` | [Open reference](./Forma.elements.md) |
| `Forma.elements.blobs` | `get` | [Open reference](./Forma.elements.blobs.md) |
| `Forma.elements.floorStack` | `createFromFloors`, `createFromFloorsBatch` | [Open reference](./Forma.elements.floorStack.md) |
| `Forma.elements.representations` | `volumeMesh`, `footprint`, `grossFloorAreaPolygons`, `graphBuilding` | [Open reference](./Forma.elements.representations.md) |
| `Forma.generators` | `put`, `list` | [Open reference](./Forma.generators.md) |
| `Forma.integrateElements` | `createElementHierarchy`, `createElementV2`, `updateElementV2`, `batchIngestElementsV2`, `uploadFile`, `createUrn` | [Open reference](./Forma.integrateElements.md) |

### Geometry and geospatial data

Work with geometry, geospatial data, terrain, and terrain ground textures.

| Namespace | Key operations | Documentation |
| --- | --- | --- |
| `Forma.geoData` | `upload` | [Open reference](./Forma.geoData.md) |
| `Forma.geometry` | `getPathsByCategory`, `getPathsForVirtualElements`, `getFootprint`, `getTriangles`, `getPathsInsidePolygons` | [Open reference](./Forma.geometry.md) |
| `Forma.terrain` | `getBbox`, `getElevationAt`, `isInternal`, `getPads`, `addPads`, `applyPads` | [Open reference](./Forma.terrain.md) |
| `Forma.terrain.groundTexture` | `add`, `updateTextureData`, `updatePosition`, `remove` | [Open reference](./Forma.terrain.groundTexture.md) |

### Rendering and interaction

Observe selection, control the camera, render geometry and colors, and present color scales.

| Namespace | Key operations | Documentation |
| --- | --- | --- |
| `Forma.camera` | `move`, `switchPerspective`, `capture`, `getCurrent`, `subscribe` | [Open reference](./Forma.camera.md) |
| `Forma.colorbar` | `add`, `remove` | [Open reference](./Forma.colorbar.md) |
| `Forma.render` | `hideElement`, `hideElementsBatch`, `unhideElement`, `unhideElementsBatch`, `setElementsVisibility`, `unhideAllElements`, `addMesh`, `updateMesh`, … | [Open reference](./Forma.render.md) |
| `Forma.render.elementColors` | `set`, `clear`, `clearAll` | [Open reference](./Forma.render.elementColors.md) |
| `Forma.render.geojson` | `add`, `update`, `remove`, `cleanup` | [Open reference](./Forma.render.geojson.md) |
| `Forma.render.glb` | `add`, `update`, `remove`, `cleanup` | [Open reference](./Forma.render.glb.md) |
| `Forma.selection` | `getSelection`, `subscribe` | [Open reference](./Forma.selection.md) |

### Analysis and metrics

Run and inspect analyses, predictive analysis, sun results, and area metrics.

| Namespace | Key operations | Documentation |
| --- | --- | --- |
| `Forma.analysis` | `list`, `triggerNoise`, `triggerSun`, `getSunAnalysis`, `getNoiseAnalysis`, `getGroundGrid` | [Open reference](./Forma.analysis.md) |
| `Forma.areaMetrics` | `calculate` | [Open reference](./Forma.areaMetrics.md) |
| `Forma.predictiveAnalysis` | `getWindParameters`, `predictWind` | [Open reference](./Forma.predictiveAnalysis.md) |
| `Forma.sun` | `getDate`, `setDate` | [Open reference](./Forma.sun.md) |

### Extension data and automation

Authenticate extensions, manage extension lifecycle and storage, and read Forma settings and building functions.

| Namespace | Key operations | Documentation |
| --- | --- | --- |
| `Forma.auth` | `configure`, `acquireTokenSilent`, `acquireTokenPopup`, `acquireTokenOverlay`, `refreshCurrentToken` | [Open reference](./Forma.auth.md) |
| `Forma.extensions` | - | [Open reference](./Forma.extensions.md) |
| `Forma.extensions.storage` | `setObject`, `getTextObject`, `getBinaryObject`, `listObjects`, `deleteObject` | [Open reference](./Forma.extensions.storage.md) |
| `Forma.settings` | `get` | [Open reference](./Forma.settings.md) |
| `Forma.settings.buildingFunctions` | `add`, `update`, `delete` | [Open reference](./Forma.settings.buildingFunctions.md) |

### Experimental APIs

Preview experimental analysis, housing, rendering, and element-rendering capabilities.

| Namespace | Key operations | Documentation |
| --- | --- | --- |
| `Forma.experimental` | - | [Open reference](./Forma.experimental.md) |
| `Forma.experimental.analysis` | `putCatalogItem` | [Open reference](./Forma.experimental.analysis.md) |
| `Forma.experimental.housing` | `createFromLine`, `listTemplates` | [Open reference](./Forma.experimental.housing.md) |
| `Forma.experimental.render` | - | [Open reference](./Forma.experimental.render.md) |
| `Forma.experimental.render.element` | `add`, `update`, `remove`, `cleanup` | [Open reference](./Forma.experimental.render.element.md) |

## Provenance

- [SDK surface metadata](./surface.json)
- [Site Design build metadata](../_meta/build.json)

Captured SDK signatures and descriptions are preserved as published.
