---
title: "ItemPayloadDataAttributesExtension"
url_path: reference/typescript-sdk-dm/interfaces/ts-ItemPayloadDataAttributesExtension
product: "Data Management API"
surface: "data-management-v2"
protocol: "TypeScript SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "typescript-sdk-dm"
---
# Interface: ItemPayloadDataAttributesExtension

Defined in: [model/itemPayloadDataAttributesExtension.ts:8](https://github.com/autodesk-platform-services/aps-sdk-node/blob/eeaeb10a079bc82754d05778f6c83dafc47cac8a/datamanagement/source/model/itemPayloadDataAttributesExtension.ts#L8)

The Type ID of the schema that defines the structure of the `extension.data` object

## Export

ItemPayloadDataAttributesExtension

## Properties

### data?

`optional` **data**: `object`

Defined in: [model/itemPayloadDataAttributesExtension.ts:34](https://github.com/autodesk-platform-services/aps-sdk-node/blob/eeaeb10a079bc82754d05778f6c83dafc47cac8a/datamanagement/source/model/itemPayloadDataAttributesExtension.ts#L34)

The container of additional properties.

The additional properties must follow the schema specified by `extensions.type` and `extensions.version`. Properties that don’t follow the schema will be ignored.

#### Index Signature

[`key`: `string`]: `object`

#### Memberof

ItemPayloadDataAttributesExtension

### type?

`optional` **type**: `string`

Defined in: [model/itemPayloadDataAttributesExtension.ts:19](https://github.com/autodesk-platform-services/aps-sdk-node/blob/eeaeb10a079bc82754d05778f6c83dafc47cac8a/datamanagement/source/model/itemPayloadDataAttributesExtension.ts#L19)

The type of the extension.

For BIM 360 Docs files, use `items:autodesk.bim360:File`.

For all other services, use `items:autodesk.core:File`.

#### Memberof

ItemPayloadDataAttributesExtension

### version?

`optional` **version**: `string`

Defined in: [model/itemPayloadDataAttributesExtension.ts:25](https://github.com/autodesk-platform-services/aps-sdk-node/blob/eeaeb10a079bc82754d05778f6c83dafc47cac8a/datamanagement/source/model/itemPayloadDataAttributesExtension.ts#L25)

The version of the schema that applies to the `extension.data` object.

#### Memberof

ItemPayloadDataAttributesExtension

---
원본 문서: https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/interfaces/ts-ItemPayloadDataAttributesExtension
