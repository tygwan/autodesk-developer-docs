---
title: "ItemPayloadIncludedAttributes"
url_path: reference/typescript-sdk-dm/interfaces/ts-ItemPayloadIncludedAttributes
product: "Data Management API"
surface: "data-management-v2"
protocol: "TypeScript SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "typescript-sdk-dm"
---
# Interface: ItemPayloadIncludedAttributes

Defined in: [model/itemPayloadIncludedAttributes.ts:9](https://github.com/autodesk-platform-services/aps-sdk-node/blob/eeaeb10a079bc82754d05778f6c83dafc47cac8a/datamanagement/source/model/itemPayloadIncludedAttributes.ts#L9)

The properties of the first version of the item to be created.

## Export

ItemPayloadIncludedAttributes

## Properties

### extension

**extension**: [`ItemPayloadIncludedAttributesExtension`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/interfaces/ts-ItemPayloadIncludedAttributesExtension)

Defined in: [model/itemPayloadIncludedAttributes.ts:25](https://github.com/autodesk-platform-services/aps-sdk-node/blob/eeaeb10a079bc82754d05778f6c83dafc47cac8a/datamanagement/source/model/itemPayloadIncludedAttributes.ts#L25)

#### Memberof

ItemPayloadIncludedAttributes

### name

**name**: `string`

Defined in: [model/itemPayloadIncludedAttributes.ts:19](https://github.com/autodesk-platform-services/aps-sdk-node/blob/eeaeb10a079bc82754d05778f6c83dafc47cac8a/datamanagement/source/model/itemPayloadIncludedAttributes.ts#L19)

The name of the version (1-255 characters).

Avoid using the following reserved characters in the name: `<`, `>`, `:`, `"`, `/`, `\`, `|`, `?`, `*`, `'`, `\n`, `\r`, `\t`, `\0`, `\f`, `¢`, `™`, ``$

If you are creating a new item by copying a version of an existing item, the name defaults to the name of the source version.

#### Memberof

ItemPayloadIncludedAttributes

---
원본 문서: https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/interfaces/ts-ItemPayloadIncludedAttributes
