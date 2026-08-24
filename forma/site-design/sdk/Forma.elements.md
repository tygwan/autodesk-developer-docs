---
namespace: Forma.elements
class: ElementsApi
sdk_version: 0.93.0
surface: sdk
runtime: forma-iframe-only
---

# Forma.elements

```ts
import { Forma } from "forma-embedded-view-sdk/auto";
```

## `get`

```ts
Forma.elements.get(request: { urn: Urn; recursive?: boolean; }): Promise<{ element: FormaElement; elements: ElementResponse; }>;
```

Get an element by urn.

The method can return multiple elements. This can happen
if the element has children that are bundled with it.

This method can also be used to include all the transitive children of the element
by setting the recursive parameter to true.

@example
// Get the root element of the current proposal
const urn = await Forma.proposal.getRootUrn()
const { element, elements } = await Forma.elements.get({ urn })

@returns
A map from identifiers to elements.
A single element for the requested element

## `getByPath`

```ts
Forma.elements.getByPath(request: { rootUrn?: Urn; path: string; recursive?: boolean; }): Promise<{ element: FormaElement; elements: ElementResponse; }>;
```

Get an element hierarchy located at the path relative to the current
root. You default to current proposal by omitting the urn parameter.

@example
// Get all the building elements of the current proposal
Forma.selection.subscribe(({ paths }) => {
  const { element, elements } = await Forma.elements.getByPath({ path: paths[0] })
});

@returns
A map from identifiers to elements.

## `getWorldTransform`

```ts
Forma.elements.getWorldTransform(request: { path: string; }): Promise<{ transform: Transform; }>;
```

Get the world transform of an element relative to the root element.

The world transform is the affine transformation matrix that transforms
the element from its local coordinate system to the root coordinate system.

@example
const { transform } = await Forma.elements.getWorldTransform({ path })
const { element } = await Forma.elements.getByPath({ path })

if (element.representations?.footprint) {
  const footprint = await Forma.elements.representations.footprint(element)

  const { data: geojson } = footprint

  void Forma.render.geojson.add({ geojson, transform })
}

@param request the path to element from root
@returns The affine transformation matrix of the element

## `editProperties`

```ts
Forma.elements.editProperties(request: { urn: Urn; propertiesJsonMergePatch: Record<string, Record<string, any> | null>; }): Promise<{ urn: Urn; }>;
```

Allows adding, editing and removing custom properties attached directly to elements.
All properties must live under a namespace which follows `\w{1,20}:\w{1,50}` pattern (e.g.`my:namespace`).
The properties are managed by [JSON Merge Patch](https://datatracker.ietf.org/doc/html/rfc7386) specification.

Requires edit access to the project. See getCanEdit for more info.

@example
// Add two properties within a namespace to an element and replace its previous urn with the updated urn in a proposal
const addTwoProperties = {
 "my:namespace": {
   "myFirstProperty": "myFirstValue"
   "mySecondProperty": "mySecondValue"
  }
}
const result = await Forma.elements.editProperties({urn, propertiesJsonMergePatch: myProperties});
await Forma.proposal.replaceElement({path, urn: result.urn})

@example
// Change value of the first property and remove the second property at the same time
const changeFirstRemoveSecondProperty = {
  "my:namespace": {
    "myFirstProperty": "veryDifferentValue"
    "mySecondProperty": null
  }
}
const result = await Forma.elements.editProperties({urn, propertiesJsonMergePatch: changeFirstRemoveSecondProperty});
await Forma.proposal.replaceElement({path, urn: result.urn})

@example
// Remove the whole namespace from the element
const removeWholeNamespace = {
  "my:namespace": null
}
const result = await Forma.elements.editProperties({urn, propertiesJsonMergePatch: removeWholeNamespace});
await Forma.proposal.replaceElement({path, urn: result.urn})

---
SDK 문서: https://app.autodeskforma.com/forma-embedded-view-sdk/docs/
