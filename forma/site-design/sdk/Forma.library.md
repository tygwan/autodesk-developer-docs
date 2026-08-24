---
namespace: Forma.library
class: LibraryApi
sdk_version: 0.93.0
surface: sdk
runtime: forma-iframe-only
---

# Forma.library

```ts
import { Forma } from "forma-embedded-view-sdk/auto";
```

## `createItem`

```ts
Forma.library.createItem(request: { /** * Authcontext to use with the request. * * As of now, the currently open project id is both default * and only allowed value. */ authcontext?: string | undefined; /** Content of the item to create. */ data: LibraryItemData; }): Promise<LibraryItem>;
```

Add data to Library as a new item.

Requires edit access. See getCanEdit for more info.

@returns The newly created item.

@example
const urn = mockRegisterElementInSystem() // See e.g. integrate-elements module
const item = await Forma.library.createItem({
 data: { name: "My new item", status: "success", urn: urn }
})

## `updateItem`

```ts
Forma.library.updateItem(request: { /** * Authcontext to use with the request. * * As of now, the currently open project id is both default * and only allowed value. */ authcontext?: string | undefined; /** ID of the item to update. */ id: string; /** Updated content for the relevant item. */ data: LibraryItemData; }): Promise<LibraryItem>;
```

Update an existing library item.

Requires edit access. See getCanEdit for more info.

@returns The updated item.

## `deleteItem`

```ts
Forma.library.deleteItem(request: { /** * Authcontext to use with the request. * * As of now, the currently open project id is both default * and only allowed value. */ authcontext?: string | undefined; /** ID of the item to delete. */ id: string; }): Promise<void>;
```

Delete an existing library item.

Requires edit access. See getCanEdit for more info.

---
SDK 문서: https://app.autodeskforma.com/forma-embedded-view-sdk/docs/
