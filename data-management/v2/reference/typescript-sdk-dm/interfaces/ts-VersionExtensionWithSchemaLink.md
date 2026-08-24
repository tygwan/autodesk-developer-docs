---
title: "VersionExtensionWithSchemaLink"
url_path: reference/typescript-sdk-dm/interfaces/ts-VersionExtensionWithSchemaLink
product: "Data Management API"
surface: "data-management-v2"
protocol: "TypeScript SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "typescript-sdk-dm"
---
# Interface: VersionExtensionWithSchemaLink

Defined in: [model/versionExtensionWithSchemaLink.ts:9](https://github.com/autodesk-platform-services/aps-sdk-node/blob/eeaeb10a079bc82754d05778f6c83dafc47cac8a/datamanagement/source/model/versionExtensionWithSchemaLink.ts#L9)

A container of additional properties that extends the default properties of a version.

## Export

VersionExtensionWithSchemaLink

## Properties

### data?

`optional` **data**: `object`

Defined in: [model/versionExtensionWithSchemaLink.ts:33](https://github.com/autodesk-platform-services/aps-sdk-node/blob/eeaeb10a079bc82754d05778f6c83dafc47cac8a/datamanagement/source/model/versionExtensionWithSchemaLink.ts#L33)

The object that contains the additional properties, which makes this resource extensible.

#### Index Signature

[`key`: `string`]: `object`

#### Memberof

VersionExtensionWithSchemaLink

### schema

**schema**: [`JsonApiLink`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/interfaces/ts-JsonApiLink)

Defined in: [model/versionExtensionWithSchemaLink.ts:27](https://github.com/autodesk-platform-services/aps-sdk-node/blob/eeaeb10a079bc82754d05778f6c83dafc47cac8a/datamanagement/source/model/versionExtensionWithSchemaLink.ts#L27)

#### Memberof

VersionExtensionWithSchemaLink

### type

**type**: `string`

Defined in: [model/versionExtensionWithSchemaLink.ts:15](https://github.com/autodesk-platform-services/aps-sdk-node/blob/eeaeb10a079bc82754d05778f6c83dafc47cac8a/datamanagement/source/model/versionExtensionWithSchemaLink.ts#L15)

The Type ID of the schema that defines the structure of the `extension.data` object.

#### Memberof

VersionExtensionWithSchemaLink

### version

**version**: `string`

Defined in: [model/versionExtensionWithSchemaLink.ts:21](https://github.com/autodesk-platform-services/aps-sdk-node/blob/eeaeb10a079bc82754d05778f6c83dafc47cac8a/datamanagement/source/model/versionExtensionWithSchemaLink.ts#L21)

The version of the schema that applies to the `extension.data` object.

#### Memberof

VersionExtensionWithSchemaLink

---
원본 문서: https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/interfaces/ts-VersionExtensionWithSchemaLink
