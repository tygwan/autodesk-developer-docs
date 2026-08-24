---
document_type: "api-index"
product: "Autodesk Forma"
surface: "forma-site-design"
protocol: "REST and TypeScript SDK"
api_version: "v1"
language: "en"
generated: "true"
---

# Forma Site Design API & SDK

[Autodesk Forma index](../INDEX.md) · [Product overview](../README.md)

## Overview

Site planning APIs and the Embedded View SDK for extensions running inside Forma.

- **Protocol:** REST and TypeScript SDK
- **API version:** `v1`
- **Official source:** [Autodesk documentation](https://aps.autodesk.com/en/docs/forma/v1)

## Start here

- Select an API group below for endpoint paths, authentication context, scopes, and operation documentation.
- Use the Embedded View SDK only from an extension running inside a Forma embedded-view iframe.
- Use the REST API from a server, CLI, or batch process.

## API reference

| API group | Capabilities | Common path | Documentation |
| --- | --- | --- | --- |
| basic | Create batches of basic geometry resources. | `/forma/basic/v1alpha/geometries/batch-create` | [Open index](./groups/basic/INDEX.md) |
| element-service | Retrieve Forma elements and binary element blobs. | `/forma/element-service/v1alpha` | [Open index](./groups/element-service/INDEX.md) |
| integrate | Integrate external geometry and element data with Forma. | `/forma/integrate` | [Open index](./groups/integrate/INDEX.md) |
| library | Retrieve and manage reusable Forma library items. | `/forma/library/v1alpha/library-items` | [Open index](./groups/library/INDEX.md) |
| project | Retrieve Forma project information. | `/forma/project/v1alpha/projects/{projectId}` | [Open index](./groups/project/INDEX.md) |
| proposal | Create, retrieve, update, and list proposal revisions. | `/forma/proposal/v1alpha/proposals` | [Open index](./groups/proposal/INDEX.md) |
| site | Retrieve Forma site information. | `/forma/site/v1alpha/sites/{siteId}` | [Open index](./groups/site/INDEX.md) |
| sun-analysis | Trigger sun analyses and retrieve their results. | `/forma/sun-analysis/v1alpha/analyses` | [Open index](./groups/sun-analysis/INDEX.md) |
| terrain | Create terrain resources and download terrain geometry. | `/forma/terrain/v1alpha/terrains` | [Open index](./groups/terrain/INDEX.md) |

## SDK reference

- **Package:** `forma-embedded-view-sdk`
- **Version:** `0.93.0`
- **Runtime:** Forma embedded-view iframe
- [Open the capability and namespace index](./sdk/INDEX.md)

| Capability | What it provides |
| --- | --- |
| [Project context and proposals](./sdk/INDEX.md#project-context-and-proposals) | Read project context, work with proposals and libraries, and coordinate embedded-view lifecycle and messaging. |
| [Elements and design automation](./sdk/INDEX.md#elements-and-design-automation) | Read and modify elements, representations, floor stacks, blobs, generators, design tools, and integrated elements. |
| [Geometry and geospatial data](./sdk/INDEX.md#geometry-and-geospatial-data) | Work with geometry, geospatial data, terrain, and terrain ground textures. |
| [Rendering and interaction](./sdk/INDEX.md#rendering-and-interaction) | Observe selection, control the camera, render geometry and colors, and present color scales. |
| [Analysis and metrics](./sdk/INDEX.md#analysis-and-metrics) | Run and inspect analyses, predictive analysis, sun results, and area metrics. |
| [Extension data and automation](./sdk/INDEX.md#extension-data-and-automation) | Authenticate extensions, manage extension lifecycle and storage, and read Forma settings and building functions. |
| [Experimental APIs](./sdk/INDEX.md#experimental-apis) | Preview experimental analysis, housing, rendering, and element-rendering capabilities. |

## Guides and tutorials

### Embedded Views

- [Analysis](./guides/embedded-views/useful-concepts/analysis.md)
- [Configuration](./guides/embedded-views/configuration.md)
- [Examples](./guides/embedded-views/examples.md)
- [File explorer](./guides/embedded-views/examples/file-explorer.md)
- [Inspiration](./guides/embedded-views/inspiration.md)
- [Introduction](./guides/embedded-views/introduction.md)
- [Noise](./guides/embedded-views/useful-concepts/analysis/noise.md)
- [SDK documentation](./guides/embedded-views/sdk-documentation.md)
- [Shadow Study](./guides/embedded-views/examples/shadow-study.md)
- [Sun](./guides/embedded-views/useful-concepts/analysis/sun.md)
- [Technical guidelines](./guides/embedded-views/technical-guidelines.md)
- [Tutorial](./guides/embedded-views/tutorial.md)
- [Using HTTP APIs](./guides/embedded-views/using-http-apis.md)

### Overview

- [Design guidelines](./guides/overview/design-guidelines.md)
- [Extension types](./guides/overview/extension-types.md)
- [Getting started](./guides/overview/getting-started.md)
- [Publish to marketplace](./guides/overview/publishing-extensions.md)
- [Share your extension](./guides/overview/sharing-extensions.md)
- [Welcome to Forma Site Design](./guides/overview/welcome-to-forma.md)

### Reference

- [HTTP Reference](./guides/reference/http-reference.md)
- [Integrate API](./guides/reference/http-specification/integrate-api.md)
- [Introduction](./guides/reference/http-specification/introduction.md)

### Working With Forma

- [Auth context](./guides/working-with-forma/authcontext.md)
- [Element hierarchies](./guides/working-with-forma/element-system/element-hierarchies.md)
- [Element System](./guides/working-with-forma/element-system.md)
- [FormaElement specification](./guides/working-with-forma/element-system/forma-element-specification.md)
- [Geometry placement](./guides/working-with-forma/placing-geometry.md)
- [Introduction](./guides/working-with-forma/introduction.md)
- [Key principles](./guides/working-with-forma/element-system/key-principles.md)
- [Regions](./guides/working-with-forma/regions.md)

## Provenance

- [Build metadata](./_meta/build.json)
- [Page manifest](./_meta/manifest.json)
- [Stable page IDs](./_meta/pages.json)
- **Source build:** `forma-forma-documentation-main-617165`

Captured documentation values are preserved as published. Use Git history to inspect snapshot changes.
