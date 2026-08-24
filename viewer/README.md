# Viewer SDK developer documentation

[한국어](./README.ko.md) · [Complete product index](./INDEX.md) · [Repository catalog](../README.md)

This directory contains a versioned snapshot of the official Autodesk Platform Services Viewer SDK documentation.

> [!NOTE]
> This is an unofficial archive. Captured SDK names, signatures, types, descriptions, examples, and change-log statements are preserved as Autodesk published them. Use the official source when you need current service status or commercial availability.

## What you can build

| Capability | What is available | Start here | SDK reference |
| --- | --- | --- | --- |
| Model loading and viewing | Load 2D and 3D documents, models, and aggregated views | [Getting Started](./v7/developers_guide/viewer_basics/starting-html.md) | [`Viewer3D`](./v7/reference/Viewing/Viewer3D.md), [`Document`](./v7/reference/Viewing/Document.md), [`Model`](./v7/reference/Viewing/Model.md) |
| Navigation and interaction | Camera navigation, selection, hotkeys, events, tools, and screen modes | [Reacting to Events](./v7/developers_guide/viewer_basics/events.md) | [`Navigation`](./v7/reference/Viewing/Navigation.md), [`ToolController`](./v7/reference/Viewing/ToolController.md), [`EventUtils`](./v7/reference/Viewing/EventUtils.md) |
| UI customization | Toolbar controls, docking panels, property panels, trees, context menus, and settings | [Customizing the Toolbar](./v7/developers_guide/viewer_basics/toolbar-button.md) | [UI reference](./v7/reference/UI/INDEX.md) |
| Model data and properties | Object trees, model properties, metadata, and property database queries | [Querying the Property Database](./v7/developers_guide/advanced_options/propdb-queries.md) | [`ObjectTree`](./v7/reference/Viewing/ObjectTree.md), [`PropertySet`](./v7/reference/Viewing/PropertySet.md) |
| Extensions | Load custom extensions and use built-in Viewer capabilities | [Writing an Extension](./v7/developers_guide/viewer_basics/extensions.md) | [Extensions reference](./v7/reference/Extensions/INDEX.md) |
| Measurement and review | Measurement, markups, sectioning, snapping, and model comparison | [Using DiffTool](./v7/developers_guide/viewer_basics/difftool.md) | [`MeasureExtension`](./v7/reference/Extensions/MeasureExtension.md), [`MarkupsCore`](./v7/reference/Extensions/MarkupsCore.md), [`SectionExtension`](./v7/reference/Extensions/SectionExtension.md) |
| Scene and rendering | Custom geometry, materials, render layers, overlays, and scene building | [Scene API concepts](./v7/developers_guide/scene_api/concepts.md) | [Scene reference](./v7/reference/Scene/INDEX.md) |
| 2D editing | Create and customize Edit2D geometry and tools | [Setting Up Edit2D](./v7/developers_guide/advanced_options/edit2d-setup.md) | [`Edit2DExtension`](./v7/reference/Extensions/Edit2DExtension.md) |
| Profiles and settings | Viewer preferences, feature flags, profiles, and settings UI | [Using Profile APIs](./v7/developers_guide/advanced_options/profiles.md) | [`Profile`](./v7/reference/Viewing/Profile.md), [`ProfileManager`](./v7/reference/Viewing/ProfileManager.md) |
| File and display formats | glTF and PDF loading, wireframes, and split-screen viewing | [Loading glTF](./v7/developers_guide/viewer_basics/GLTFExtension.md) | [`glTF`](./v7/reference/Extensions/glTF.md), [`PDFExtension`](./v7/reference/Extensions/PDFExtension.md) |

## Related captured documentation

The generated [relationship index](./RELATED.md) routes to Authentication, Data Management, Model Derivative, and Forma only when those names or links occur in captured Viewer pages. Use the linked evidence to decide which upstream API is relevant; this archive does not synthesize a separate integration recipe.

## Repository map

```text
viewer/v7/
├─ developers_guide/   Task-oriented guides and examples
├─ reference/
│  ├─ Viewing/         Viewer lifecycle, models, navigation, events, and tools
│  ├─ UI/              Buttons, toolbars, panels, trees, and menus
│  ├─ Extensions/      Built-in and custom Viewer capabilities
│  ├─ Scene/           Geometry, materials, and rendering
│  ├─ Math/            Vectors, matrices, boxes, and transformations
│  └─ globals/         Global functions, properties, classes, and typedefs
└─ change_history/     Version changes and migration guides
```

## Documentation routes

| Need | Documentation |
| --- | --- |
| Learn Viewer concepts and workflows | [Viewer SDK v7](./v7/INDEX.md) |
| Find a class, function, property, typedef, or extension | [Complete SDK reference](./v7/reference/INDEX.md) |
| Review migration notes and published changes | [Change history](./v7/INDEX.md#change-history) |

## Product index

The [complete Viewer SDK documentation index](./INDEX.md) provides a standalone capability summary and routes to each captured SDK surface.

## Source fidelity

- SDK symbols, signatures, parameter and return types, descriptions, examples, and published change history are retained from the captured source.
- Build metadata, page manifests, stable page IDs, and content hashes are stored with the SDK surface.
- Exact changes between snapshots are tracked through Git history.
