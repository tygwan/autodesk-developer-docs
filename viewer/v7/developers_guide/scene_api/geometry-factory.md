---
title: "Geometry Factory"
url_path: developers_guide/scene_api//geometry-factory
surface: viewer-sdk
document_kind: guide
category: "scene_api"
---
# Geometry Factory

Writing raw typed-array buffers by hand — as [Hello Triangle](https://aps.autodesk.com/en/docs/viewer/v7/developers_guide/scene_api/hello-triangle/) and [Beyond Position and Normal](https://aps.autodesk.com/en/docs/viewer/v7/developers_guide/scene_api/beyond-position-and-normal/) do — gives you
complete control over every vertex, but it is tedious for common shapes. [GeometryFactory](https://aps.autodesk.com/en/docs/viewer/v7/reference/Scene/)
provides pre-built constructors for the most frequently needed primitives: spheres, boxes,
cylinders, and planes. Each factory method returns a fully formed [BufferGeometry](https://aps.autodesk.com/en/docs/viewer/v7/reference/Scene/) with correct
positions, normals, and (optionally) edge indices, ready to pass straight into
[InstanceCollection3D.add](https://aps.autodesk.com/en/docs/viewer/v7/reference/Scene/InstanceCollection3D/#add/).

This example places one of each primitive in a row so you can compare their geometry visually. The
factory methods accept parameters to control resolution (segment counts for spheres and cylinders)
and whether to include edge indices for wireframe rendering. For any shape not covered by the
factory — arbitrary meshes, imported OBJ data, procedural surfaces — you fall back to the manual
`setAttribute()` approach from the earlier examples. [GeometryFactory](https://aps.autodesk.com/en/docs/viewer/v7/reference/Scene/) is a productivity
shortcut, not a replacement for the lower-level API.

Edge visualization is enabled for all four primitives with `viewer.setDisplayEdges(true)` so
the tessellation structure is clearly visible. The `generateEdges` flag on the factory
methods controls whether the returned geometry includes edge index data. Omit it (or pass
`false`) when you do not need wireframe rendering to keep the geometry smaller.

## Source

**Factory calls and instance creation**

Each call returns a new [BufferGeometry](https://aps.autodesk.com/en/docs/viewer/v7/reference/Scene/). The optional final boolean argument enables edge
indices in the returned geometry.

```
// Sphere: radius 1, 32 width segments,
// 16 height segments
const sphere = avs.GeometryFactory.createSphere(
    1, 32, 16
);
const matSphere = new avs.StandardMaterial({
    color: 0x4488ff
});
instances.add(
    sphere,
    matSphere,
    new avm.Matrix4().makeTranslation(-3, 0, 0)
);

// Box: width 1, height 1, depth 1
const box = avs.GeometryFactory.createBox(
    1, 1, 1, true
);
const matBox = new avs.StandardMaterial({
    color: 0x44bb44
});
instances.add(
    box,
    matBox,
    new avm.Matrix4().makeTranslation(-1, 0, 0)
);

// Cylinder: radius 0.5, height 2, 32 segments
const cylinder = avs.GeometryFactory.createCylinder(
    0.5, 2, 32, true
);
const matCylinder = new avs.StandardMaterial({
    color: 0xff8844
});
instances.add(
    cylinder,
    matCylinder,
    new avm.Matrix4().makeTranslation(1, 0, 0)
);

// Plane: width 2, height 2
const plane = avs.GeometryFactory.createPlane(
    2, 2, 1, 1, true
);
const matPlane = new avs.StandardMaterial({
    color: 0xcc44cc,
    side: avs.Side.Double
});
instances.add(
    plane,
    matPlane,
    new avm.Matrix4().makeTranslation(3, 0, 0)
);

viewer.refresh(true);
```

---
원본 문서: https://aps.autodesk.com/en/docs/viewer/v7/developers_guide/scene_api/geometry-factory
