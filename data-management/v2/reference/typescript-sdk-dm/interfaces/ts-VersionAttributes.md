---
title: "VersionAttributes"
url_path: reference/typescript-sdk-dm/interfaces/ts-VersionAttributes
product: "Data Management API"
surface: "data-management-v2"
protocol: "TypeScript SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "typescript-sdk-dm"
---
# Interface: VersionAttributes

Defined in: [model/versionAttributes.ts:9](https://github.com/autodesk-platform-services/aps-sdk-node/blob/eeaeb10a079bc82754d05778f6c83dafc47cac8a/datamanagement/source/model/versionAttributes.ts#L9)

The properties of a version.

## Export

VersionAttributes

## Properties

### createTime

**createTime**: `string`

Defined in: [model/versionAttributes.ts:51](https://github.com/autodesk-platform-services/aps-sdk-node/blob/eeaeb10a079bc82754d05778f6c83dafc47cac8a/datamanagement/source/model/versionAttributes.ts#L51)

The time that the resource was created at.

#### Memberof

VersionAttributes

### createUserId

**createUserId**: `string`

Defined in: [model/versionAttributes.ts:57](https://github.com/autodesk-platform-services/aps-sdk-node/blob/eeaeb10a079bc82754d05778f6c83dafc47cac8a/datamanagement/source/model/versionAttributes.ts#L57)

The ID of the user that created the version.

#### Memberof

VersionAttributes

### createUserName

**createUserName**: `string`

Defined in: [model/versionAttributes.ts:63](https://github.com/autodesk-platform-services/aps-sdk-node/blob/eeaeb10a079bc82754d05778f6c83dafc47cac8a/datamanagement/source/model/versionAttributes.ts#L63)

The user name of the user that created the version.

#### Memberof

VersionAttributes

### displayName

**displayName**: `string`

Defined in: [model/versionAttributes.ts:21](https://github.com/autodesk-platform-services/aps-sdk-node/blob/eeaeb10a079bc82754d05778f6c83dafc47cac8a/datamanagement/source/model/versionAttributes.ts#L21)

A human friendly name to identify the version. Note that for BIM 360 projects, this field is reserved for future releases and should not be used. Use a version’s `attributes.name` for the file name.

#### Memberof

VersionAttributes

### extension

**extension**: [`VersionExtensionWithSchemaLink`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/interfaces/ts-VersionExtensionWithSchemaLink)

Defined in: [model/versionAttributes.ts:87](https://github.com/autodesk-platform-services/aps-sdk-node/blob/eeaeb10a079bc82754d05778f6c83dafc47cac8a/datamanagement/source/model/versionAttributes.ts#L87)

#### Memberof

VersionAttributes

### fileType?

`optional` **fileType**: `string`

Defined in: [model/versionAttributes.ts:39](https://github.com/autodesk-platform-services/aps-sdk-node/blob/eeaeb10a079bc82754d05778f6c83dafc47cac8a/datamanagement/source/model/versionAttributes.ts#L39)

File type, only present if this version represents a file.

#### Memberof

VersionAttributes

### lastModifiedTime

**lastModifiedTime**: `string`

Defined in: [model/versionAttributes.ts:69](https://github.com/autodesk-platform-services/aps-sdk-node/blob/eeaeb10a079bc82754d05778f6c83dafc47cac8a/datamanagement/source/model/versionAttributes.ts#L69)

The time that the version was last modified.

#### Memberof

VersionAttributes

### lastModifiedUserId

**lastModifiedUserId**: `string`

Defined in: [model/versionAttributes.ts:75](https://github.com/autodesk-platform-services/aps-sdk-node/blob/eeaeb10a079bc82754d05778f6c83dafc47cac8a/datamanagement/source/model/versionAttributes.ts#L75)

The ID of the user that last modified the version.

#### Memberof

VersionAttributes

### lastModifiedUserName

**lastModifiedUserName**: `string`

Defined in: [model/versionAttributes.ts:81](https://github.com/autodesk-platform-services/aps-sdk-node/blob/eeaeb10a079bc82754d05778f6c83dafc47cac8a/datamanagement/source/model/versionAttributes.ts#L81)

The user name of the user that last modified the version.

#### Memberof

VersionAttributes

### mimeType?

`optional` **mimeType**: `string`

Defined in: [model/versionAttributes.ts:27](https://github.com/autodesk-platform-services/aps-sdk-node/blob/eeaeb10a079bc82754d05778f6c83dafc47cac8a/datamanagement/source/model/versionAttributes.ts#L27)

The MIME type of the content of the version.

#### Memberof

VersionAttributes

### name

**name**: `string`

Defined in: [model/versionAttributes.ts:15](https://github.com/autodesk-platform-services/aps-sdk-node/blob/eeaeb10a079bc82754d05778f6c83dafc47cac8a/datamanagement/source/model/versionAttributes.ts#L15)

The file name to be used when synced to local disk.

#### Memberof

VersionAttributes

### storageSize?

`optional` **storageSize**: `number`

Defined in: [model/versionAttributes.ts:45](https://github.com/autodesk-platform-services/aps-sdk-node/blob/eeaeb10a079bc82754d05778f6c83dafc47cac8a/datamanagement/source/model/versionAttributes.ts#L45)

File size in bytes, only present if this version represents a file.

#### Memberof

VersionAttributes

### versionNumber

**versionNumber**: `number`

Defined in: [model/versionAttributes.ts:33](https://github.com/autodesk-platform-services/aps-sdk-node/blob/eeaeb10a079bc82754d05778f6c83dafc47cac8a/datamanagement/source/model/versionAttributes.ts#L33)

Version number of this versioned file.

#### Memberof

VersionAttributes

---
원본 문서: https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/interfaces/ts-VersionAttributes
