---
document_type: "sdk-reference-index"
product: "Viewer SDK"
surface: "viewer-v7"
category: "Scene"
protocol: "JavaScript SDK"
language: "en"
generated: "true"
---

# Scene

[SDK reference index](../INDEX.md) · [Viewer SDK v7 index](../../INDEX.md)

## Overview

Geometry, materials, textures, scene nodes, and instance collections.

## SDK reference

| Symbol | Purpose | Documentation |
| --- | --- | --- |
| BufferAttribute | Stores typed-array data for a single vertex attribute (for example `position`, `normal`, or `color`) used by `BufferGeometry`. | [Open reference](./BufferAttribute.md) |
| BufferGeometry | Constructs a new BufferGeometry. | [Open reference](./BufferGeometry.md) |
| Color | Represents an RGB color. Each component (`r`, `g`, `b`) is a number in the range `0.0` to `1.0`. | [Open reference](./Color.md) |
| GeometryFactory | Factory helpers for creating standard geometry primitives as BufferGeometry. Each method returns a mutable BufferGeometry with positions, normals, UVs, indices and optional edge indices pre-filled. | [Open reference](./GeometryFactory.md) |
| InstanceCollection3D | Represents the full list of all instances of a model, and provides functions to access and manipulate them. | [Open reference](./InstanceCollection3D.md) |
| InstanceNode3D | Scene graph node that represents a single geometry instance. | [Open reference](./InstanceNode3D.md) |
| LineMaterial | Unlit material for 3D line geometry. | [Open reference](./LineMaterial.md) |
| Node3D | Basic node type for the scene graph. Use [Autodesk.Viewing.Scene.Node3D](https://aps.autodesk.com/en/docs/viewer/v7/reference/Scene/Node3D/) as a transform-only parent (e.g. a joint or pivot) and [Autodesk.Viewing.Scene.InstanceNode3D](https://aps.autodesk.com/en/docs/viewer/v7/reference/Scene/InstanceNode3D/) for nodes that represent rendered geometry instances. | [Open reference](./Node3D.md) |
| PointsMaterial | Unlit material for 3D point geometry. | [Open reference](./PointsMaterial.md) |
| Scene | Classes related to scene management and rendering. This includes materials, geometries, and scene graph nodes. | [Open reference](../Scene.md) |
| StandardMaterial | Lit surface material for opaque and transparent 3D geometry. | [Open reference](./StandardMaterial.md) |
| Texture | Represents a texture: image data together with the sampling, wrapping and mapping parameters used when it is applied to a material. | [Open reference](./Texture.md) |
| UnlitMaterial | A simple, unlit material for 3D surfaces. | [Open reference](./UnlitMaterial.md) |
