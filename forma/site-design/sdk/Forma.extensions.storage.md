---
namespace: Forma.extensions.storage
class: ExtensionsStorageApi
sdk_version: 0.93.0
surface: sdk
runtime: forma-iframe-only
---

# Forma.extensions.storage

```ts
import { Forma } from "forma-embedded-view-sdk/auto";
```

## `setObject`

```ts
Forma.extensions.storage.setObject(request: { /** The key of the object. Max length: 200. Allowed characters: [a-zA-Z0-9!-_.*'()] */ key: string; /** Data to be stored. */ data: ArrayBuffer | string; /** * The authcontext you want to read the data under. * Only the current project or the project's hub are valid authcontext */ authcontext?: string; /** Optional metadata to be stored on the object. See {@link StorageObjectMetadata} for more information. */ metadata?: StorageObjectMetadata | undefined; }): Promise<void>;
```

Add or replace a storage object.

Requires edit access. See getCanEdit for more info.
If you wish to store an object to the hub of the current project, the user needs
edit access to the hub See getCanEditHub

@example
// STORE JSON
const myObject = {
 someData: "someValue"
}

await Forma.extensions.storage.setObject({key: "some-key", data: JSON.stringify(myObject)})

@example
// STORE Float32Array

function arrayToBuffer(array: Float32Array): ArrayBuffer {
  const buffer = new ArrayBuffer(array.length * Float32Array.BYTES_PER_ELEMENT);
  const arr = new Float32Array(buffer);
  arr.set(array);
  return arr;
}

const arr = new Float32Array(100).fill(Math.random())
await Forma.extensions.storage.setObject({key: "someKey", data: arrayToBuffer(arr)})

## `getTextObject`

```ts
Forma.extensions.storage.getTextObject(request: { /** The key of the object. */ key: string; /** * The authcontext of the data you want to read. * Only the current project Id or the project's hub ID are valid values. */ authcontext?: string; }): Promise<StorageObjectAsText | undefined>;
```

Utility function to fetch string objects without needing to decode an array buffer.

If you wish to get an object on the current project's hub, the user needs
view access to the hub See getCanViewHub

@returns The data parsed as UTF-8, including metadata if present.

@example
// READING JSON
const res = await Forma.extensions.storage.getTextObject({
  key: "some-key",
})
if (!res) {
   return
}
const metadata = JSON.parse(data.metadata ?? "{}")
const data = res.data

@example
function loadImageFromEncodedPng(
  url: string,
): Promise<HtmlImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = () => {
      resolve(img)
    }
    img.onerror = () => {
      reject(new Error("Failed to load image"))
    }
    img.src = url
  })
}

async function createCanvasFromDataUrl(
  url: string,
): Promise<HtmlCanvasElement | void> {
 const canvas = document.createElement("canvas")
 const ctx = canvas.getContext("2d")
 const img = await loadImage(url)
 canvas.height = img.height
 canvas.width = img.width
 ctx.drawImage(ctx, img, 0, 0)
 return canvas
}

const res = await Forma.extensions.storage.getTextObject({
  key: "some-png-key",
})
if (!res) {
   return
}
const canvas = createCanvasFromDataUrl(res.data)

## `getBinaryObject`

```ts
Forma.extensions.storage.getBinaryObject(request: { /** The key of the object. */ key: string; /** * The authcontext you want to read the data under. * Only the current project or the project's hub are valid authcontext */ authcontext?: string; }): Promise<StorageObject | undefined>;
```

Fetch the data for the specified key.

Use this function when you're **not** fetching text data, such as geometry
or analysis results.

If you wish to get an object on the current project's hub, the user needs
view access to the hub See getCanViewHub

@returns The data as an ArrayBuffer, including metadata if present.

@example
const res = await Forma.extensions.storage.getBinaryObject({
  key: "my-float32-array",
})
if (!res) {
 return
}
const terrainSlope: Float32Array = new Float32Array(res.data)
const metadata = JSON.parse(res.metadata ?? "{}")

## `listObjects`

```ts
Forma.extensions.storage.listObjects(request?: { /** Limit the response to only objects that starts with the key. */ prefix?: string | undefined; /** * The authcontext you want to read the data under. * Only the current project or the project's hub are valid authcontext */ authcontext?: string; }): Promise<{ results: StorageListObject[]; }>;
```

List all storage objects for the extension in the current authcontext.

@returns List of filtered objects with relevant information.

@example
const availableObjects = await Forma.extensions.storage.listObjects().results

## `deleteObject`

```ts
Forma.extensions.storage.deleteObject(request: { /** The key of the object. */ key: string; /** * The authcontext you want to read the data under. * Only the current project or the project's hub are valid authcontext */ authcontext?: string; }): Promise<void>;
```

Delete object corresponding to the specified key.

Requires edit access. See getCanEdit for more info.
If you wish to delete an object to the hub of the current project, the user needs
edit access to the hub See getCanEditHub

@example
// Store a JSON object and delete it afterwards
const myObject = {
 someData: "someValue"
}
await Forma.extensions.storage.setObject({key: "some-key", data: JSON.stringify(myObject)})
await Forma.extensions.storage.deleteObject({key: "some-key"}})

---
SDK 문서: https://app.autodeskforma.com/forma-embedded-view-sdk/docs/
