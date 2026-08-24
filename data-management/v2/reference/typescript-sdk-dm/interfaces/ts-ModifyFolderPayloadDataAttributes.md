---
title: "ModifyFolderPayloadDataAttributes"
url_path: reference/typescript-sdk-dm/interfaces/ts-ModifyFolderPayloadDataAttributes
product: "Data Management API"
surface: "data-management-v2"
protocol: "TypeScript SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "typescript-sdk-dm"
---
# Interface: ModifyFolderPayloadDataAttributes

Defined in: [model/modifyFolderPayloadDataAttributes.ts:8](https://github.com/autodesk-platform-services/aps-sdk-node/blob/eeaeb10a079bc82754d05778f6c83dafc47cac8a/datamanagement/source/model/modifyFolderPayloadDataAttributes.ts#L8)

The properties of the folder that can be modified.

## Export

ModifyFolderPayloadDataAttributes

## Properties

### hidden?

`optional` **hidden**: `boolean`

Defined in: [model/modifyFolderPayloadDataAttributes.ts:26](https://github.com/autodesk-platform-services/aps-sdk-node/blob/eeaeb10a079bc82754d05778f6c83dafc47cac8a/datamanagement/source/model/modifyFolderPayloadDataAttributes.ts#L26)

`true` : Delete a BIM 360 Docs folder.

`false` : Restore a BIM 360 Docs folder.

#### Memberof

ModifyFolderPayloadDataAttributes

### name?

`optional` **name**: `string`

Defined in: [model/modifyFolderPayloadDataAttributes.ts:18](https://github.com/autodesk-platform-services/aps-sdk-node/blob/eeaeb10a079bc82754d05778f6c83dafc47cac8a/datamanagement/source/model/modifyFolderPayloadDataAttributes.ts#L18)

The new folder name (1-255 characters).

Avoid using the following reserved characters in the name: `<`, `>`, `:`, `"`, `/`, `\`, `|`, `?`, `*`, `'`, `\n`, `\r`, `\t`, `\0`, `\f`, `¢`, `™`, `$`, `®`.

When a deleted folder is restored, it keeps its original name. However, if a name conflict occurs, you must provide a new unique name for it.

#### Memberof

ModifyFolderPayloadDataAttributes

---
원본 문서: https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/interfaces/ts-ModifyFolderPayloadDataAttributes
