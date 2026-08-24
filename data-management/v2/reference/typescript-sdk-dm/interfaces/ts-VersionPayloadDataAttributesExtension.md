---
title: "VersionPayloadDataAttributesExtension"
url_path: reference/typescript-sdk-dm/interfaces/ts-VersionPayloadDataAttributesExtension
product: "Data Management API"
surface: "data-management-v2"
protocol: "TypeScript SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "typescript-sdk-dm"
---
# Interface: VersionPayloadDataAttributesExtension

Defined in: [model/versionPayloadDataAttributesExtension.ts:8](https://github.com/autodesk-platform-services/aps-sdk-node/blob/eeaeb10a079bc82754d05778f6c83dafc47cac8a/datamanagement/source/model/versionPayloadDataAttributesExtension.ts#L8)

A container of additional properties that extends the default properties of the version to be created.

## Export

VersionPayloadDataAttributesExtension

## Properties

### data?

`optional` **data**: `object`

Defined in: [model/versionPayloadDataAttributesExtension.ts:29](https://github.com/autodesk-platform-services/aps-sdk-node/blob/eeaeb10a079bc82754d05778f6c83dafc47cac8a/datamanagement/source/model/versionPayloadDataAttributesExtension.ts#L29)

The container of additional properties.

The additional properties must follow the schema specified by `extensions.type` and `extensions.version`. Properties that don’t follow the schema will be ignored.

#### Memberof

VersionPayloadDataAttributesExtension

### type

**type**: `string`

Defined in: [model/versionPayloadDataAttributesExtension.ts:14](https://github.com/autodesk-platform-services/aps-sdk-node/blob/eeaeb10a079bc82754d05778f6c83dafc47cac8a/datamanagement/source/model/versionPayloadDataAttributesExtension.ts#L14)

The Type ID of the schema that defines the structure of the `extension.data` object.

#### Memberof

VersionPayloadDataAttributesExtension

### version

**version**: `string`

Defined in: [model/versionPayloadDataAttributesExtension.ts:20](https://github.com/autodesk-platform-services/aps-sdk-node/blob/eeaeb10a079bc82754d05778f6c83dafc47cac8a/datamanagement/source/model/versionPayloadDataAttributesExtension.ts#L20)

The version of the schema that applies to the `extension.data` object.

#### Memberof

VersionPayloadDataAttributesExtension

---
원본 문서: https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/interfaces/ts-VersionPayloadDataAttributesExtension
