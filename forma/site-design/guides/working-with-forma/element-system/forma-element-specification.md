---
title: "FormaElement specification"
url_path: working-with-forma/element-system/forma-element-specification
surface: guide
---
# FormaElement specification

All elements follow the same underlying JSON schema, with a Unique Resource Name
(URN) under the `urn` key, plus any additional data under each of the following optional keys:
- `metadata`
- `properties`
- `representations`
- `children`

In this section, the meaning of each of these is described.

For full details on the data structure, please have a look at the
[FormaElement documentation](https://app.autodeskforma.com/forma-embedded-view-sdk/docs/interfaces/elements_types.FormaElement.html)
in the SDK reference.

## URN

Unique resource name for an element, used to identify a specific revision.

The element URN scheme is
`urn:adsk-forma-elements:{system}:{authcontext}:{id}:{revision}`.

## Metadata

Metadata about an element. Does not describe the element itself, but rather the
context in which it has been created/updated and potential licensing
information.

# Properties

Properties of an element are inherent attributes which are independent of the
representation used to interpret its geometry.

For example, setting an element’s `virtual` property to `true` will indicate that
the element should not be included as a physical object which e.g. blocks sun
rays – regardless of which representation you are looking at.

## category

The category is used to indicate the user intent of the element. It can be used
to group and filter top-level elements in the UI.

The category is a string, and can be any value.

## virtual

This field can be used to identify something that isn’t real, like a constraint
or an illustrative boy with balloon. If this is set, analyses and possibly other
modes will ignore the element.

Default value: `false`

## analysisFigures

In some cases it is benefifical for the producer of geometry to provide simple
analysis results directly, such as the amount of parking spots available.

Setting the `analysisFigures` property allows the analysis platform to pick up
your stats and show them to the user.

Produces of the geometry MUST not provide the same stat at multiple levels in an
element hierarchy. If you have one grouping element with many children, the same
statistic must never be both present in the group and the child.

For parking in particular, we allow defining two separate stats:
`numberOfParkingSpots`, which is the total amount of parking spots in your
element, and `totalParkingArea`, which is the total area of your parking lot.

```
type ParkingStatsElementProperties = {
  analysisFigures: {
    parking: {
      numberOfParkingSpots: number
      totalParkingArea: number
    }
  }
}
```

# Representations

Representations offer different ways to interpret an element. An element may have zero, one, or multiple representations, each enabling distinct functionalities. For example, the `volumeMesh` representation defines how the element is visualized in a 3D scene, while the `semanticMesh` is a subset of the volume mesh featuring non-overlapping geometry. Additionally, `grossFloorAreaPolygons` represent the division of gross floor areas contained within the element.

When using representations to obtain insights or perform analysis of an element,
it is imperative to understand the _semantics_ of the representation in addition
to its _data structure_. By semantics, we mean the underlying assumptions baked
into the representations and how they relate to intended use cases. Failure to
take both of these concepts into account can lead to unintended behaviour and
erroneous results.

## volumeMesh

The volume mesh is a visual representation of the element based on a
triangulated polygon mesh consisting of vertices, edges and faces. All elements
which represent visible 3d objects are expected to support this representation.

The representation is widely used for visualisation, but also by analyses to
provide user insights. It is, however, worth pointing out that there are no
requirements for the mesh in terms of quality (e.g. watertightness), and it does
not need to be a single connected component. Features which make use of the rep
should take this into consideration.

The link should point to a GLB file, containing the binary version of
[GLTF](https://registry.khronos.org/glTF/specs/2.0/glTF-2.0.html).
Multiple elements can point to the same, or separate meshes within the same GLB
file.

The GLB file is assumed to be Y-up as per the GLTF specification. Since Forma is
Z-up, clients need to do the following to get the correct placement of the volumeMesh:
- Apply transformations (Y-up) in the GLTF hierarchy
- Rotate the GLTF-scene from Y-up to Z-up
- Apply all transformations (Z-up) in the element hierarchy

Aggregation: The correct way to represent the sum of volume meshes from many
elements is to include all polygons from all the different meshes.

## semanticMesh

Like `volumeMesh`, semantic mesh is a triangulated mesh representation in the form of a GLB file without any overlapping geometry. But for the semantic mesh, only nodes with a known geometry type (see below) should contain a mesh. Other nodes can be included without mesh. In other words, it can be a subset of the volume mesh even though the node hierarchy has identical structure.

The GLB nodes with mesh should be tagged with additional metadata under [extras on a GLB node](https://registry.khronos.org/glTF/specs/2.0/glTF-2.0.html#_node_extras).

The primary goal of the representation is to allow producers to attach metadata which enables detailed stats and filtering in analyses.

Currently supported fields of GLB node [extras](https://registry.khronos.org/glTF/specs/2.0/glTF-2.0.html#_node_extras):

`geometryType` (string, required)

It should be one of the following values: `roof`, `wall`, or `slab`. If present, analyses can use the tag to aggregate statistics across surface types and enable selection in the 3D scene to apply detailed filtering.

There is no inheritance of `geometryType` from parent to children. Every node with a mesh should define this property.

`unitId` (string, optional)

If a node has `unitId` defined, any geometry on that node or any child node should be considered part of the same unit. Analyses will aggregate statistics and allow for selection on units. A unit is meant to represent something like a single apartment, a row house, a store area, or another area you want to be grouped when calculating statistics.

Unit identifiers do not need to be unique. If two nodes have the same `unitId`, all their children should be considered part of the same unit when calculating statistics.

Each path down the node-tree should encounter at most one `unitId`. In other words, you cannot have a unit within a unit.

## grossFloorAreaPolygons

The complete gross floor area of an element, consisting of a set of polygons
with correct 3D positioning in the building model.

Polygons on the same floor (i.e. which have the same elevation) should be a
partition of the gross area of that floor. In other words, they should not
overlap or leave any contributing area uncovered.

Aggregation: Since gross floor area polygons should never overlap in the first
place, the correct way to represent the sum of polygons from many elements is to
simply count them all independently.

## terrainShape

This representation is used for visualizing 2d vector shapes on the terrain,
useful for visualizing roads, parking, zoning, etc..

The data format follows the GeoJSON FeatureCollection object according to
[RFC7946](https://datatracker.ietf.org/doc/html/rfc7946). The `format` property
of the
[Link](https://app.autodeskforma.com/forma-embedded-view-sdk/docs/interfaces/elements_types.Link.html)
object should be set to `geojson`.

The GeoJSON object uses the same coordinate system as the project it is used in,
instead of WGS 84.

The styling of a
[Feature object](https://datatracker.ietf.org/doc/html/rfc7946#section-3.2) can
optionally be set via `properties` on the Feature object which supports the
format specified in the
[`TerrainShapeFeatureProperties`](https://app.autodeskforma.com/forma-embedded-view-sdk/docs/interfaces/elements_types.TerrainShapeFeatureProperties.html)
schema.

If the `id` property is set on the Link object, features within the
FeatureCollection should be filtered by checking if the feature id _starts with_
the specified id.

## footprint

A representation of the area on the ground that the element ‘occupies’ or
overlaps with. Technically this is the projection of the element’s 3D shape onto
the 2D plane, meaning that it will include any overhang in the footprint even
though the ground may be clear.

Aggregation: The correct way to represent the sum of footprint from many
elements is to take the geometric union of the footprints for each element.

## volume25DCollection

This representation gives you a 2.5D geojson representation of the element. An
element can point to several features in the geojson, so to correctly get all
the features for the element, you need to find all features that _start with_
the id.

The reason for this is that some elements are composed of several parts that
themselves can be described as extruded polygons, but for different reasons are
not elements themselves.

Like with the `volumeMesh`, consumers must apply the transforms from the element
tree on the geojson coordinates.

A building element containing floor elements as children, where one or more
floor element are again composed of several parts (units, rooms, cores, parking
areas, etc) that are not elements can use this representation to model the
“floor parts” as geometry without them needing to be their own elements.

## graphBuilding

The graph building describes the partitioning of space for a building. The representation
is composed of an ordered set of vertically-aligned levels and an unordered set of units,
which may span multiple levels. Both levels and units are comprised of spaces, which provide
an explicit partitioning of space within the building.

Beyond a partitioning of space, this representation includes topological information which allows adjacencies between spaces to be derived.

This representation enables the calculation of gross floor areas for each level.

Aggregation: Since the entities composing the graph building - spaces - should never overlap, any aggregation of a single graph building should be the sum of its parts.

# Children

An element can include other elements as children, which results in a tree
structure. Elements may be referenced multiple times, with different transforms
and under different parents.

For example, an element representing a building floor may be used many times
with differing transforms by a building element to construct a building.

Since element URNs cannot be used to identify instances of elements, children
have unique keys under their parent which are used to build up a path in context
of the root of an element tree.

## Transformation matrix

Child elements can be used in conjunction with a _transform_, which applies to
any geometry held by the element itself and all children. This changes how this
element is positioned.

The transform is a flat array of 16 numbers representing a column-major 4x4
affine matrix. Translation values use metres as unit.

The matrix is applied to the element’s geometry, and the resulting geometry is
then transformed by the parent’s matrix.

Denoting the transformation matrix as `A=[a_i]` and the un-transformed position of the child as `p`, the transformed position of the child is given by:

```
        [ a0   a4  a8   a12 ]   [ x ]

A * p = [ a1   a5  a9   a13 ] * [ y ]

        [ a2   a6  a10  a14 ]   [ z ]

        [ a3   a7  a11  a15 ]   [ 1 ]

        [ a0 * x + a4 * y +  a8 * z + a12 ]

      = [ a1 * x + a5 * y +  a9 * z + a13 ]

        [ a2 * x + a6 * y + a10 * z + a14 ]

        [ a3 * x + a7 * y + a11 * z + a15 ]
```

Common transformations are translation, rotation and scaling.

Translation matrix with translation vector (tx, ty, tz) using metres as unit:

```
    [ 1  0  0  tx ]
A = [ 0  1  0  ty ]
    [ 0  0  1  tz ]
    [ 0  0  0  1  ]
```

Rotation matrix about z-axis with angle a (in radians):

```
    [ cos(a)  -sin(a)  0  0 ]
A = [ sin(a)   cos(a)  0  0 ]
    [ 0            0   1  0 ]
    [ 0            0   0  1 ]
```

Scaling matrix to scale by sx, sy and sz in x, y and z direction respectively:

```
    [ sx  0   0   0 ]
A = [ 0   sy  0   0 ]
    [ 0   0   sz  0 ]
    [ 0   0   0   1 ]
```

---
원본 문서: https://aps.autodesk.com/en/docs/forma/v1/working-with-forma/element-system/forma-element-specification
