# Autodesk Forma developer documentation

[한국어](./README.ko.md) · [Complete product index](./INDEX.md) · [Repository catalog](../README.md)

This directory contains versioned snapshots of the official API and SDK documentation associated with Autodesk Forma.

> [!NOTE]
> This is an unofficial archive. Captured API and SDK values are preserved as Autodesk published them. Use the linked official sources when you need the current service status or commercial availability.

## What you can build

| Capability | What is available | Interface | Start here |
| --- | --- | --- | --- |
| Construction workflows | Assets, forms, issues, reviews, RFIs, sheets, submittals, takeoff, and transmittals | Forma APIs (REST) | [Forma APIs](./acc/INDEX.md) |
| Cost and project administration | Cost management, hubs, projects, companies, users, locations, and classifications | Forma APIs (REST) | [Cost Management](./acc/groups/cost-management/INDEX.md), [Hub Admin](./acc/groups/hub-admin/INDEX.md) |
| Model coordination and project data | Model sets, clash results, model properties, files, and relationships | Forma APIs (REST) | [Model Coordination](./acc/groups/model-coordination/INDEX.md), [Model Properties](./acc/groups/model-properties/INDEX.md) |
| Structured AEC data | Hubs, projects, folders, element groups, elements, properties, geometry, versions, and differences | AEC Data Model API (GraphQL) | [AEC Data Model](./aec-data-model/INDEX.md) |
| Site and proposal workflows | Projects, sites, proposals, libraries, elements, and integrations | Forma Site Design API (REST) | [Site Design API](./site-design/INDEX.md) |
| Terrain and analysis | Terrain data, sun analysis, area metrics, predictive analysis, and analysis results | REST and Embedded SDK | [Terrain API](./site-design/groups/terrain/INDEX.md), [Embedded SDK](./site-design/sdk/INDEX.md) |
| Embedded interaction and rendering | Selection, camera, geometry, GeoJSON/GLB rendering, colors, design tools, and UI panels | Forma Embedded View SDK (TypeScript) | [Embedded SDK](./site-design/sdk/INDEX.md) |
| Extension data and automation | Extension storage, custom element properties, generators, and element integration | GraphQL and Embedded SDK | [Extension properties](./aec-data-model/reference/mutations/INDEX.md), [Extension SDK](./site-design/sdk/INDEX.md#extension-data-and-automation) |

> [!IMPORTANT]
> Runtime determines the correct interface. Use REST or GraphQL from a server, CLI, or batch process. Use the Embedded View SDK only inside a Forma embedded-view iframe. Authentication and region requirements remain surface-specific and must not be normalized across APIs.

## Related captured documentation

The generated [relationship index](./RELATED.md) exposes Authentication, Data Management, Model Derivative, and Viewer routes only where captured Forma pages link or explicitly refer to them. These are source-backed navigation hints, not a separately authored “Forma files in Viewer” workflow.

## Repository map

```text
forma/
├─ acc/              Construction and project-management REST APIs
├─ aec-data-model/   Structured AEC data GraphQL API
└─ site-design/
   ├─ groups/        Site Design REST API groups
   ├─ sdk/           Embedded View SDK capability and namespace reference
   └─ guides/        Extension, embedded-view, and Site Design guides
```

## Product index

The [complete Autodesk Forma documentation index](./INDEX.md) provides a standalone capability summary and routes to every captured API and SDK surface.

## Source fidelity

- API paths, methods, identifiers, scopes, types, descriptions, examples, and SDK signatures are preserved from the captured source.
- Build metadata, page manifests, stable page IDs, and content hashes are stored with each surface when available.
- Exact changes between snapshots are tracked through Git history.

See the [Autodesk-published change-log index](./CHANGELOG.md) for release-oriented navigation.
