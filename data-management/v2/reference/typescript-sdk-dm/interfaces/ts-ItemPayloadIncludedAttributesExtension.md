---
title: "ItemPayloadIncludedAttributesExtension"
url_path: reference/typescript-sdk-dm/interfaces/ts-ItemPayloadIncludedAttributesExtension
product: "Data Management API"
surface: "data-management-v2"
protocol: "TypeScript SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "typescript-sdk-dm"
---
# Interface: ItemPayloadIncludedAttributesExtension

Defined in: [model/itemPayloadIncludedAttributesExtension.ts:8](https://github.com/autodesk-platform-services/aps-sdk-node/blob/eeaeb10a079bc82754d05778f6c83dafc47cac8a/datamanagement/source/model/itemPayloadIncludedAttributesExtension.ts#L8)

A container of additional properties that extends the default properties of this resource.

## Export

ItemPayloadIncludedAttributesExtension

## Properties

### data?

`optional` **data**: `object`

Defined in: [model/itemPayloadIncludedAttributesExtension.ts:35](https://github.com/autodesk-platform-services/aps-sdk-node/blob/eeaeb10a079bc82754d05778f6c83dafc47cac8a/datamanagement/source/model/itemPayloadIncludedAttributesExtension.ts#L35)

The container of the additional properties.

The additional properties must follow the schema specified by `extensions.type` and `extensions.version`. Properties that don’t follow the schema will be ignored.

#### Index Signature

[`key`: `string`]: `object`

#### Memberof

ItemPayloadIncludedAttributesExtension

### type?

`optional` **type**: `string`

Defined in: [model/itemPayloadIncludedAttributesExtension.ts:21](https://github.com/autodesk-platform-services/aps-sdk-node/blob/eeaeb10a079bc82754d05778f6c83dafc47cac8a/datamanagement/source/model/itemPayloadIncludedAttributesExtension.ts#L21)

The type of the extension.

For BIM 360 Docs files, use `versions:autodesk.bim360:File`.

For A360 composite design files, use `versions:autodesk.a360:CompositeDesign`.

For A360 Personal, Fusion Team, or BIM 360 Team files, use `versions:autodesk.core:File`.

#### Memberof

ItemPayloadIncludedAttributesExtension

### version?

`optional` **version**: `string`

Defined in: [model/itemPayloadIncludedAttributesExtension.ts:27](https://github.com/autodesk-platform-services/aps-sdk-node/blob/eeaeb10a079bc82754d05778f6c83dafc47cac8a/datamanagement/source/model/itemPayloadIncludedAttributesExtension.ts#L27)

The version of the extension type (`included[i].attributes.extension.type`). The current version is `1.0`.

#### Memberof

ItemPayloadIncludedAttributesExtension

---
원본 문서: https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/interfaces/ts-ItemPayloadIncludedAttributesExtension
