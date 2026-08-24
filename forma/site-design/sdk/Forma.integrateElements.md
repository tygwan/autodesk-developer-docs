---
namespace: Forma.integrateElements
class: IntegrateApi
sdk_version: 0.93.0
surface: sdk
runtime: forma-iframe-only
---

# Forma.integrateElements

```ts
import { Forma } from "forma-embedded-view-sdk/auto";
```

## `createElementHierarchy` ⚠️ DEPRECATED

```ts
Forma.integrateElements.createElementHierarchy(request: { /** * Authcontext to use with the request. * * As of now, the currently open project id is both default * and only allowed value. */ authcontext?: string | undefined; /** * Element hierarchy to add, consisting of a * root element and its children. */ data: CreateElementHierarchy; }): Promise<{ id: string; urn: string; revision: string; }>;
```

Create a hierarchy of elements in the integrate element system.

More information about the integrate element system can be seen
at https://aps.autodesk.com/en/docs/forma/v1/http-specification/integrate-api/

Requires edit access. See getCanEdit for more info.

@deprecated Prefer using IntegrateApi.createElementV2 or IntegrateApi.batchIngestElementsV2 instead.

@returns ID, URN, and revision of the root element created.

@example
const upload = await Forma.integrateElements.uploadFile({
  data: "glb data here...",
})

const { urn } = await Forma.integrateElements.createElementHierarchy({
  data: {
    rootElement: "root",
    elements: {
      root: {
        id: "root",
        properties: {
          geometry: {
            type: "File",
            format: "glb",
            s3Id: upload.fileId,
          },
        },
      },
    },
  },
})

console.log(`Created element: ${urn}`)

## `createElementV2`

```ts
Forma.integrateElements.createElementV2(request: CreateElementV2): Promise<{ urn: Urn; }>;
```

Create a new element.

Requires edit access. See getCanEdit for more info.

@example
const upload = await Forma.integrateElements.uploadFile({
  data: "glb data here...",
})

const { urn } = await Forma.integrateElements.createElementV2({
  representations: {
    volumeMesh: {
      blobId: upload.blobId,
    },
  },
})

@returns URN of the created element.

## `updateElementV2`

```ts
Forma.integrateElements.updateElementV2(request: UpdateElementV2): Promise<{ urn: Urn; }>;
```

Create a new element based on the existing element. The element must
belong to integrate system.

The update will be merged onto the existing element. The merge happens
for each individual property and representation, but not deeper.
If you want to remove a field you must set it to \`null\`.

Requires edit access. See getCanEdit for more info.

@example
const { urn } = await Forma.integrateElements.updateElementV2({
  urn: existingUrn,
  properties: {
    foo: "bar",
  },
})

@returns URN of the created element.

## `batchIngestElementsV2`

```ts
Forma.integrateElements.batchIngestElementsV2(request: { /** * A list of operations to create or update elements. A maximum of 1000 items can be specified. */ items: (BatchIngestElementsV2.CreateElement | BatchIngestElementsV2.UpdateElement)[]; }): Promise<{ /** * Each item in the response corresponds to the item with the same index * in the request. */ items: (BatchIngestElementsV2.ResultOk | BatchIngestElementsV2.ResultFailed)[]; }>;
```

Create and/or update multiple elements in a batch.

As part of the same batch elements can reference each other to form
a hierarchy in a single request. You need to specify the element URN
that should be used to store the new element for this.

The response can be partial including failed items.

Requires edit access. See getCanEdit for more info.

@example
const upload = await Forma.integrateElements.uploadFile({
  data: "glb data here...",
})

const { items } = await Forma.integrateElements.batchIngestElementsV2({
  items: [
    {
      operation: "create",
      representations: {
        volumeMesh: {
          blobId: upload.blobId,
        },
      },
    },
    {
      operation: "update",
      urn: existingUrn,
      properties: {
        foo: "bar",
      },
    },
  ],
})
// Handle failures.

## `uploadFile`

```ts
Forma.integrateElements.uploadFile(request: { /** * Authcontext to use with the request. * * As of now, the currently open project id is both default * and only allowed value. */ authcontext?: string | undefined; /** * File data to upload. */ data: string | ArrayBuffer; }): Promise<{ fileId: string; blobId: string; }>;
```

Upload a file to the integrate file storage. Files stored here are can only
be retrieved in relation to an element. An example of this is uploading a
geometric file - e.g. GLB or GeoJSON files.

Requires edit access. See getCanEdit for more info.

@returns Unique identifier for the uploaded file.

## `createUrn`

```ts
Forma.integrateElements.createUrn(authcontext: string): Urn;
```

Create a new URN to be used for an element in Integrate API.

@example
const urn = createUrn("pro_japoqu38nx")

---
SDK 문서: https://app.autodeskforma.com/forma-embedded-view-sdk/docs/
