---
title: "FolderPayloadDataAttributesExtension"
url_path: reference/typescript-sdk-dm/interfaces/ts-FolderPayloadDataAttributesExtension
product: "Data Management API"
surface: "data-management-v2"
protocol: "TypeScript SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "typescript-sdk-dm"
---
# Interface: FolderPayloadDataAttributesExtension

Defined in: [model/folderPayloadDataAttributesExtension.ts:8](https://github.com/autodesk-platform-services/aps-sdk-node/blob/eeaeb10a079bc82754d05778f6c83dafc47cac8a/datamanagement/source/model/folderPayloadDataAttributesExtension.ts#L8)

A container of additional properties that extends the default properties of this resource.

## Export

FolderPayloadDataAttributesExtension

## Properties

### data?

`optional` **data**: `object`

Defined in: [model/folderPayloadDataAttributesExtension.ts:32](https://github.com/autodesk-platform-services/aps-sdk-node/blob/eeaeb10a079bc82754d05778f6c83dafc47cac8a/datamanagement/source/model/folderPayloadDataAttributesExtension.ts#L32)

The container of additional properties.

The additional properties must follow the schema specified by `type` and `version`. Properties that don’t follow the schema will be ignored.

#### Memberof

FolderPayloadDataAttributesExtension

### type

**type**: `string`

Defined in: [model/folderPayloadDataAttributesExtension.ts:18](https://github.com/autodesk-platform-services/aps-sdk-node/blob/eeaeb10a079bc82754d05778f6c83dafc47cac8a/datamanagement/source/model/folderPayloadDataAttributesExtension.ts#L18)

The type of the extension.

For BIM 360 Docs folders, use `folders:autodesk.bim360:Folder`.

For all other services, use `folders:auto`

#### Memberof

FolderPayloadDataAttributesExtension

### version

**version**: `string`

Defined in: [model/folderPayloadDataAttributesExtension.ts:24](https://github.com/autodesk-platform-services/aps-sdk-node/blob/eeaeb10a079bc82754d05778f6c83dafc47cac8a/datamanagement/source/model/folderPayloadDataAttributesExtension.ts#L24)

The version of the type. The current version is `1.0`.

#### Memberof

FolderPayloadDataAttributesExtension

---
원본 문서: https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/interfaces/ts-FolderPayloadDataAttributesExtension
