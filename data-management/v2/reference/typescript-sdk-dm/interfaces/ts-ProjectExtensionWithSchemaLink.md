---
title: "ProjectExtensionWithSchemaLink"
url_path: reference/typescript-sdk-dm/interfaces/ts-ProjectExtensionWithSchemaLink
product: "Data Management API"
surface: "data-management-v2"
protocol: "TypeScript SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "typescript-sdk-dm"
---
# Interface: ProjectExtensionWithSchemaLink

Defined in: [model/projectExtensionWithSchemaLink.ts:9](https://github.com/autodesk-platform-services/aps-sdk-node/blob/eeaeb10a079bc82754d05778f6c83dafc47cac8a/datamanagement/source/model/projectExtensionWithSchemaLink.ts#L9)

A container of additional properties that extends the default properties of this resource.

## Export

ProjectExtensionWithSchemaLink

## Properties

### data?

`optional` **data**: `object`

Defined in: [model/projectExtensionWithSchemaLink.ts:33](https://github.com/autodesk-platform-services/aps-sdk-node/blob/eeaeb10a079bc82754d05778f6c83dafc47cac8a/datamanagement/source/model/projectExtensionWithSchemaLink.ts#L33)

The object that contains the additional properties, which makes this resource extensible.

#### Index Signature

[`key`: `string`]: `object`

#### Memberof

ProjectExtensionWithSchemaLink

### schema

**schema**: [`JsonApiLink`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/interfaces/ts-JsonApiLink)

Defined in: [model/projectExtensionWithSchemaLink.ts:27](https://github.com/autodesk-platform-services/aps-sdk-node/blob/eeaeb10a079bc82754d05778f6c83dafc47cac8a/datamanagement/source/model/projectExtensionWithSchemaLink.ts#L27)

#### Memberof

ProjectExtensionWithSchemaLink

### type

**type**: `string`

Defined in: [model/projectExtensionWithSchemaLink.ts:15](https://github.com/autodesk-platform-services/aps-sdk-node/blob/eeaeb10a079bc82754d05778f6c83dafc47cac8a/datamanagement/source/model/projectExtensionWithSchemaLink.ts#L15)

The Type ID of the schema that defines the structure of the `extension.data` object.

#### Memberof

ProjectExtensionWithSchemaLink

### version

**version**: `string`

Defined in: [model/projectExtensionWithSchemaLink.ts:21](https://github.com/autodesk-platform-services/aps-sdk-node/blob/eeaeb10a079bc82754d05778f6c83dafc47cac8a/datamanagement/source/model/projectExtensionWithSchemaLink.ts#L21)

The version of the schema that applies to the `extension.data` object.

#### Memberof

ProjectExtensionWithSchemaLink

---
원본 문서: https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/interfaces/ts-ProjectExtensionWithSchemaLink
