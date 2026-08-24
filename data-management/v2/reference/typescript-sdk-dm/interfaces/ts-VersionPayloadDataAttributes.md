---
title: "VersionPayloadDataAttributes"
url_path: reference/typescript-sdk-dm/interfaces/ts-VersionPayloadDataAttributes
product: "Data Management API"
surface: "data-management-v2"
protocol: "TypeScript SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "typescript-sdk-dm"
---
# Interface: VersionPayloadDataAttributes

Defined in: [model/versionPayloadDataAttributes.ts:9](https://github.com/autodesk-platform-services/aps-sdk-node/blob/eeaeb10a079bc82754d05778f6c83dafc47cac8a/datamanagement/source/model/versionPayloadDataAttributes.ts#L9)

The properties of the version to be created.

## Export

VersionPayloadDataAttributes

## Properties

### displayName?

`optional` **displayName**: `string`

Defined in: [model/versionPayloadDataAttributes.ts:31](https://github.com/autodesk-platform-services/aps-sdk-node/blob/eeaeb10a079bc82754d05778f6c83dafc47cac8a/datamanagement/source/model/versionPayloadDataAttributes.ts#L31)

Reserved for future use. Use `data.attributes.name` for the name.

#### Memberof

VersionPayloadDataAttributes

### extension

**extension**: [`VersionPayloadDataAttributesExtension`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/interfaces/ts-VersionPayloadDataAttributesExtension)

Defined in: [model/versionPayloadDataAttributes.ts:25](https://github.com/autodesk-platform-services/aps-sdk-node/blob/eeaeb10a079bc82754d05778f6c83dafc47cac8a/datamanagement/source/model/versionPayloadDataAttributes.ts#L25)

#### Memberof

VersionPayloadDataAttributes

### name

**name**: `string`

Defined in: [model/versionPayloadDataAttributes.ts:19](https://github.com/autodesk-platform-services/aps-sdk-node/blob/eeaeb10a079bc82754d05778f6c83dafc47cac8a/datamanagement/source/model/versionPayloadDataAttributes.ts#L19)

The file name to be used when synced to local disk (1-255 characters).

Avoid using the following reserved characters in the name: `<`, `>`, `:`, `"`, `/`, `\`, `|`, `?`, `*`, `'`, `\n`, `\r`, `\t`, `\0`, `\f`, `¢`, `™`, `$`, `®`.

If you are creating the new version by copying an existing version of another item, the system uses the name of the source by default. However, if you specify a name, it will override the default name.

#### Memberof

VersionPayloadDataAttributes

---
원본 문서: https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/interfaces/ts-VersionPayloadDataAttributes
