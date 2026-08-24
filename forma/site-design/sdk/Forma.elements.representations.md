---
namespace: Forma.elements.representations
class: RepresentationsApi
sdk_version: 0.93.0
surface: sdk
runtime: forma-iframe-only
---

# Forma.elements.representations

```ts
import { Forma } from "forma-embedded-view-sdk/auto";
```

## `volumeMesh`

```ts
Forma.elements.representations.volumeMesh(request: { /** The urn for the element */ urn: string; }): Promise<Representation.VolumeMesh | undefined>;
```

Get the volume mesh for the element, the volume mesh is a triangulated visual model.
The data is returned as a buffer of gltf data.

Refer to the Typescript type of `element.representations.volumeMesh` for a
detailed description of the volume mesh representation.

If the `id` field is set, then the returned volume mesh is a batch where you
need to extract the mesh with the given id. The id is set as a name property
on the mesh inside the gltf file.

@param request urn of the element

@example
const { element } = await Forma.elements.get({ urn })
if (element.representations?.volumeMesh) {
  const volume = await Forma.elements.representations.volumeMesh(element)
}

@returns The volume mesh representation of the element

## `footprint`

```ts
Forma.elements.representations.footprint(request: { /** The urn for the element */ urn: string; }): Promise<Representation.Footprint | undefined>;
```

Get the footprint of the element, the footprint is a 2D representation of
the space the element occupies on the ground plane.

Refer to the Typescript type of `element.representations.footprint` for a
detailed description of the footprint representation.

If the `id` field is set, then the returned footprints is a batch where you
need to extract the feature with the given id. The id is set as the id property
on the Feature inside the FeatureCollection.

@param request urn of the element

@example
const { element } = await Forma.elements.get({ urn })
if (element.representations?.footprint) {
  const {id, data} = await Forma.elements.representations.footprint(element)

  const feature = data.features.find(f => f.id === id)
}

@returns The footprint representation of the element

## `grossFloorAreaPolygons`

```ts
Forma.elements.representations.grossFloorAreaPolygons(request: { /** The urn for the element */ urn: string; }): Promise<Representation.GrossFloorAreaPolygons | undefined>;
```

Get the gross floor area of the element as a set of 3d positined polygons.

Refer to the Typescript type of `element.representations.grossFloorAreaPolygons` for a
detailed description of the gross floor area polygons representation.

@param request urn of the element

@example
const { element } = await Forma.elements.get({ urn })
if (element.representations?.grossFloorAreaPolygons) {
  const grossFloorAreaPolygons = await Forma.elements.representations.grossFloorAreaPolygons(element)
}

@returns The gross floor area polygons representation of the element

## `graphBuilding`

```ts
Forma.elements.representations.graphBuilding(request: { /** The urn for the element */ urn: string; }): Promise<Representation.GraphBuilding | undefined>;
```

The graph building describes the partitioning of space for a building. The representation is composed of an ordered set of vertically-aligned levels and an unordered set of units, which may span multiple levels.

Refer to the Typescript type of `element.representations.graphBuilding` for a
detailed description of the graph building representation.

@param request urn of the element

@example
const { element } = await Forma.elements.get({ urn })
if (element.representations?.graphBuilding) {
  const graphBuilding = await Forma.elements.representations.graphBuilding(element)
}

@returns The graph building representation of the element

---
SDK 문서: https://app.autodeskforma.com/forma-embedded-view-sdk/docs/
