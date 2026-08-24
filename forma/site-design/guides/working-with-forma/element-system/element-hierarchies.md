---
title: "Element hierarchies"
url_path: working-with-forma/element-system/element-hierarchies
surface: guide
---
# Element hierarchies and rendering the final geometry

To render a full element hierarchy using the `volumeMesh` geometry,
the full hierarchy must be traversed. Any transformation must be
applied to the geometry of the element itself and any child elements,
also taking into account any transformation found in the children.

GLB data found in `volumeMesh` must be rotated from Y-up to
Z-up before applying transformations (which are in Z-up).

The final meshes can then be rendered.

To sum up, a consumer of an element must at least be concerned with:
- Following the element hierarchy
- Reading out the geometry data
- Selecting only the geometry data node specified by the `id` property
- Apply transformations

---
원본 문서: https://aps.autodesk.com/en/docs/forma/v1/working-with-forma/element-system/element-hierarchies
