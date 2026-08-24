---
namespace: Forma.elements.blobs
class: BlobsApi
sdk_version: 0.93.0
surface: sdk
runtime: forma-iframe-only
---

# Forma.elements.blobs

```ts
import { Forma } from "forma-embedded-view-sdk/auto";
```

## `get`

```ts
Forma.elements.blobs.get(request: { /** BlobId of the blob you want. For example found through a linked representation */ blobId: string; }): Promise<{ data: ArrayBuffer; }>;
```

Retrieve a blob by its id.

Blobs are binary data that can be used for various purposes.
A common use case is together with linked representations

@example
```typescript
const { element } = await Forma.elements.get({
  urn: "urn:adsk-forma-elements:terrain:pro_cnusxrl4s1:c418dafe-1963-4160-9df5-239a49eef10b:1716818829774",
})

if (element.representations?.volumeMesh?.type === "linked") {
  const blobResponse = await Forma.elements.blobs.get({
    blobId: element.representations.volumeMesh.blobId,
  })
  const arrayBuffer: ArrayBuffer = blobResponse.data
}
```

@returns an object containing the ArrayBuffer of the blob as data

---
SDK 문서: https://app.autodeskforma.com/forma-embedded-view-sdk/docs/
