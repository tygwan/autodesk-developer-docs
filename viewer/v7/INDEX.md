---
document_type: "sdk-index"
product: "Viewer SDK"
surface: "viewer-v7"
protocol: "JavaScript SDK"
api_version: "v7"
language: "en"
generated: "true"
---

# Viewer SDK v7

[Viewer SDK product index](../INDEX.md) · [Product overview](../README.md)

## Overview

JavaScript SDK for loading, viewing, inspecting, and interacting with 2D and 3D design models in a web browser.

- **Runtime:** Web browser
- **Language:** JavaScript
- **Documentation version:** `v7`
- **Official source:** [Autodesk documentation](https://aps.autodesk.com/en/docs/viewer/v7)

## Start here

- [Overview](./developers_guide/overview.md)
- [Getting Started](./developers_guide/viewer_basics/starting-html.md)
- [Complete SDK reference](./reference/INDEX.md)
- [v7 changelog](./change_history/changelog_v7.md)

## Capability map

| Capability | What is available | Start here | Reference |
| --- | --- | --- | --- |
| Model loading and viewing | Documents, models, file loaders, Viewer lifecycle, and aggregated views | [Getting Started](./developers_guide/viewer_basics/starting-html.md) | [Viewing](./reference/Viewing/INDEX.md) |
| Navigation and interaction | Camera navigation, selection, hotkeys, events, and custom tools | [Reacting to Events](./developers_guide/viewer_basics/events.md) | [Viewing](./reference/Viewing/INDEX.md) |
| UI customization | Buttons, toolbars, docking panels, property panels, trees, menus, and settings | [Customizing the Toolbar](./developers_guide/viewer_basics/toolbar-button.md) | [UI](./reference/UI/INDEX.md) |
| Model data and properties | Object trees, property sets, metadata, and property database queries | [Property Database](./developers_guide/advanced_options/propdb-queries.md) | [Viewing](./reference/Viewing/INDEX.md) |
| Extensions and review | Measurement, markups, sectioning, snapping, navigation, and custom extensions | [Writing an Extension](./developers_guide/viewer_basics/extensions.md) | [Extensions](./reference/Extensions/INDEX.md) |
| Scene and rendering | Custom geometry, materials, render layers, overlays, and scene building | [Scene API](./developers_guide/scene_api/concepts.md) | [Scene](./reference/Scene/INDEX.md) |
| 2D editing | Edit2D setup, shapes, tools, and customization | [Setting Up Edit2D](./developers_guide/advanced_options/edit2d-setup.md) | [Edit2DExtension](./reference/Extensions/Edit2DExtension.md) |
| Profiles and settings | Preferences, feature flags, profiles, and settings UI | [Profile APIs](./developers_guide/advanced_options/profiles.md) | [Viewing](./reference/Viewing/INDEX.md) |
| File and display formats | glTF, PDF, wireframes, and split-screen viewing | [Loading glTF](./developers_guide/viewer_basics/GLTFExtension.md) | [Extensions](./reference/Extensions/INDEX.md) |

## SDK reference

| Category | Contains | Key symbols | Documentation |
| --- | --- | --- | --- |
| ErrorCodes | Viewer initialization, loading, network, and runtime error codes. | `ErrorCodes` | [Open index](./reference/ErrorCodes/INDEX.md) |
| Extensions | Built-in and custom capabilities including measurement, markups, sectioning, navigation, PDF, and model building. | `MeasureExtension`, `MarkupsCore`, `SectionExtension`, `ModelBuilder` | [Open index](./reference/Extensions/INDEX.md) |
| globals | Global functions, properties, callback types, initialization options, preferences, and shared typedefs. | `Functions`, `Properties`, `TypeDefs` | [Open index](./reference/globals/INDEX.md) |
| Math | Vectors, matrices, quaternions, boxes, and transformation primitives. | `Vector3`, `Matrix4`, `Quaternion`, `Box3` | [Open index](./reference/Math/INDEX.md) |
| MeasureCommon | Shared measurement and snapping result types. | `SnapResult` | [Open index](./reference/MeasureCommon/INDEX.md) |
| Private | Published private implementation references such as preferences and property databases. | `PropertyDatabase`, `Preferences` | [Open index](./reference/Private/INDEX.md) |
| ProfileSettings | Default Viewer profile-setting definitions. | `ProfileSettings` | [Open index](./reference/ProfileSettings/INDEX.md) |
| Scene | Geometry, materials, textures, scene nodes, and instance collections. | `GeometryFactory`, `StandardMaterial`, `Node3D` | [Open index](./reference/Scene/INDEX.md) |
| Snapping | Snapping tools and snap-result handling. | `Snapper` | [Open index](./reference/Snapping/INDEX.md) |
| UI | Buttons, toolbars, docking panels, property panels, trees, menus, and settings UI. | `Button`, `ToolBar`, `DockingPanel`, `PropertyPanel` | [Open index](./reference/UI/INDEX.md) |
| Viewing | Viewer lifecycle, documents, models, navigation, events, tools, profiles, and render layers. | `Viewer3D`, `Document`, `Model`, `Navigation` | [Open index](./reference/Viewing/INDEX.md) |

## Guides and tutorials

### Advanced Options

- [Adding Custom Geometry](./developers_guide/advanced_options/custom-geometry.md)
- [Adding Custom Geometry with Scene Builder](./developers_guide/advanced_options/scene-builder.md)
- [Customizing Edit2D](./developers_guide/advanced_options/edit2d-customize.md)
- [Drawing Edit2D Shapes Manually](./developers_guide/advanced_options/edit2d-manual.md)
- [Querying the Property Database](./developers_guide/advanced_options/propdb-queries.md)
- [Selective Loading Using Queries](./developers_guide/advanced_options/selective-loading.md)
- [Setting Up Edit2D](./developers_guide/advanced_options/edit2d-setup.md)
- [Using Aggregated View](./developers_guide/advanced_options/aggregated-view.md)
- [Using Profile APIs](./developers_guide/advanced_options/profiles.md)
- [Using the Edit2D Toolset](./developers_guide/advanced_options/edit2d-use.md)

### Glossary

- [Glossary of Terms](./developers_guide/glossary.md)

### Interactive Examples

- [Aggregated View](./developers_guide/interactive_examples/example_6.md)
- [Controlling Viewer State](./developers_guide/interactive_examples/example_1.md)
- [Customizing Viewer Scene](./developers_guide/interactive_examples/example_5.md)
- [Customizing Viewer UI](./developers_guide/interactive_examples/example_4.md)
- [Handling Viewer Events](./developers_guide/interactive_examples/example_2.md)
- [Interactive Examples](./developers_guide/interactive_examples.md)
- [Querying Model Properties](./developers_guide/interactive_examples/example_3.md)

### Overview

- [Overview](./developers_guide/overview.md)

### Requirements

- [System Requirements](./developers_guide/requirements.md)

### Scene Api

- [Beyond Position and Normal](./developers_guide/scene_api/beyond-position-and-normal.md)
- [Building a Hierarchy](./developers_guide/scene_api/building-a-hierarchy.md)
- [Concepts](./developers_guide/scene_api/concepts.md)
- [Copy Instances](./developers_guide/scene_api/copy-instances.md)
- [Detach and Reattach](./developers_guide/scene_api/detach-and-reattach.md)
- [Geometry Factory](./developers_guide/scene_api/geometry-factory.md)
- [Hello Triangle](./developers_guide/scene_api/hello-triangle.md)
- [Line Material](./developers_guide/scene_api/line-material.md)
- [Managing Instances](./developers_guide/scene_api/managing-instances.md)
- [Points Material](./developers_guide/scene_api/points-material.md)
- [Render Layers](./developers_guide/scene_api/render-layers.md)
- [Standard Material](./developers_guide/scene_api/standard-material.md)
- [Unlit Material](./developers_guide/scene_api/unlit-material.md)
- [Visibility States](./developers_guide/scene_api/visibility-states.md)
- [Working with Buffers](./developers_guide/scene_api/working-with-buffers.md)
- [Wrapping Loaded Instances](./developers_guide/scene_api/wrapping-loaded-instances.md)

### Viewer Basics

- [Customizing the Toolbar](./developers_guide/viewer_basics/toolbar-button.md)
- [Feature Flags](./developers_guide/viewer_basics/feature-flags.md)
- [Getting Started](./developers_guide/viewer_basics/starting-html.md)
- [Loading glTF 2.0 Models](./developers_guide/viewer_basics/GLTFExtension.md)
- [Reacting to Events](./developers_guide/viewer_basics/events.md)
- [Using DiffTool to Compare Models](./developers_guide/viewer_basics/difftool.md)
- [Writing an Extension](./developers_guide/viewer_basics/extensions.md)

## Change history

- [v2 Changelog](./change_history/changelog_v2.md)
- [v3 Changelog](./change_history/changelog_v3.md)
- [v4 Changelog](./change_history/changelog_v4.md)
- [v5 Changelog](./change_history/changelog_v5.md)
- [v6 Changelog](./change_history/changelog_v6.md)
- [v7 Changelog](./change_history/changelog_v7.md)
- [Migration Guide v6 to v7](./change_history/changelog_v7/migration_guide_v6_to_v7.md)

## Provenance

- [Build metadata](./_meta/build.json)
- [Coverage report](./_meta/coverage.json)
- [Page manifest](./_meta/manifest.json)
- [Stable page IDs](./_meta/pages.json)
- **Source build:** `A360-firefly.js-docs-master-764104`
- **Coverage status:** `complete`

Captured documentation values are preserved as published. Use Git history to inspect snapshot changes.
