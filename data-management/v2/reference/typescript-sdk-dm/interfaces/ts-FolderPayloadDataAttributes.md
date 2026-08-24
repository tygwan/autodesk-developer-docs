---
title: "FolderPayloadDataAttributes"
url_path: reference/typescript-sdk-dm/interfaces/ts-FolderPayloadDataAttributes
product: "Data Management API"
surface: "data-management-v2"
protocol: "TypeScript SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "typescript-sdk-dm"
---
# Interface: FolderPayloadDataAttributes

Defined in: [model/folderPayloadDataAttributes.ts:9](https://github.com/autodesk-platform-services/aps-sdk-node/blob/eeaeb10a079bc82754d05778f6c83dafc47cac8a/datamanagement/source/model/folderPayloadDataAttributes.ts#L9)

The properties of the folder to be created.

## Export

FolderPayloadDataAttributes

## Properties

### extension

**extension**: [`FolderPayloadDataAttributesExtension`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/interfaces/ts-FolderPayloadDataAttributesExtension)

Defined in: [model/folderPayloadDataAttributes.ts:26](https://github.com/autodesk-platform-services/aps-sdk-node/blob/eeaeb10a079bc82754d05778f6c83dafc47cac8a/datamanagement/source/model/folderPayloadDataAttributes.ts#L26)

#### Memberof

FolderPayloadDataAttributes

### name

**name**: `string`

Defined in: [model/folderPayloadDataAttributes.ts:20](https://github.com/autodesk-platform-services/aps-sdk-node/blob/eeaeb10a079bc82754d05778f6c83dafc47cac8a/datamanagement/source/model/folderPayloadDataAttributes.ts#L20)

The name of the new folder (1-255 characters).

Avoid using the following reserved characters in the name: `<`, `>`, `:`, `"`, `/`, `\`, `|`, `?`, `*`, `'`, `\n`, `\r`, `\t`, `\0`, `\f`, `¢`, `™`, `$`, `®`.

If you assign the name of a deleted folder to this folder, and later you decide to restore the deleted folder, you will have to rename the deleted folder.

#### Memberof

FolderPayloadDataAttributes

---
원본 문서: https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/interfaces/ts-FolderPayloadDataAttributes
