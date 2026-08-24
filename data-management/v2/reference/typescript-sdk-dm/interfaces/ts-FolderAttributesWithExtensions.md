---
title: "FolderAttributesWithExtensions"
url_path: reference/typescript-sdk-dm/interfaces/ts-FolderAttributesWithExtensions
product: "Data Management API"
surface: "data-management-v2"
protocol: "TypeScript SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "typescript-sdk-dm"
---
# Interface: FolderAttributesWithExtensions

Defined in: [model/folderAttributesWithExtensions.ts:9](https://github.com/autodesk-platform-services/aps-sdk-node/blob/eeaeb10a079bc82754d05778f6c83dafc47cac8a/datamanagement/source/model/folderAttributesWithExtensions.ts#L9)

The properties of a folder.

## Export

FolderAttributesWithExtensions

## Properties

### createTime

**createTime**: `string`

Defined in: [model/folderAttributesWithExtensions.ts:33](https://github.com/autodesk-platform-services/aps-sdk-node/blob/eeaeb10a079bc82754d05778f6c83dafc47cac8a/datamanagement/source/model/folderAttributesWithExtensions.ts#L33)

The time the folder was created, in the following format: `YYYY-MM-DDThh:mm:ss.sz`.

#### Memberof

FolderAttributesWithExtensions

### createUserId

**createUserId**: `string`

Defined in: [model/folderAttributesWithExtensions.ts:39](https://github.com/autodesk-platform-services/aps-sdk-node/blob/eeaeb10a079bc82754d05778f6c83dafc47cac8a/datamanagement/source/model/folderAttributesWithExtensions.ts#L39)

The unique identifier of the user who created the folder.

#### Memberof

FolderAttributesWithExtensions

### createUserName

**createUserName**: `string`

Defined in: [model/folderAttributesWithExtensions.ts:45](https://github.com/autodesk-platform-services/aps-sdk-node/blob/eeaeb10a079bc82754d05778f6c83dafc47cac8a/datamanagement/source/model/folderAttributesWithExtensions.ts#L45)

The name of the user who created the folder.

#### Memberof

FolderAttributesWithExtensions

### displayName

**displayName**: `string`

Defined in: [model/folderAttributesWithExtensions.ts:21](https://github.com/autodesk-platform-services/aps-sdk-node/blob/eeaeb10a079bc82754d05778f6c83dafc47cac8a/datamanagement/source/model/folderAttributesWithExtensions.ts#L21)

Reserved for future Use. Do not use. Use `attributes.name` for the folder name.

#### Memberof

FolderAttributesWithExtensions

### extension?

`optional` **extension**: [`FolderExtensionWithSchemaLink`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/interfaces/ts-FolderExtensionWithSchemaLink)

Defined in: [model/folderAttributesWithExtensions.ts:81](https://github.com/autodesk-platform-services/aps-sdk-node/blob/eeaeb10a079bc82754d05778f6c83dafc47cac8a/datamanagement/source/model/folderAttributesWithExtensions.ts#L81)

#### Memberof

FolderAttributesWithExtensions

### hidden

**hidden**: `boolean`

Defined in: [model/folderAttributesWithExtensions.ts:75](https://github.com/autodesk-platform-services/aps-sdk-node/blob/eeaeb10a079bc82754d05778f6c83dafc47cac8a/datamanagement/source/model/folderAttributesWithExtensions.ts#L75)

The folder’s current visibility state.

#### Memberof

FolderAttributesWithExtensions

### lastModifiedTime

**lastModifiedTime**: `string`

Defined in: [model/folderAttributesWithExtensions.ts:51](https://github.com/autodesk-platform-services/aps-sdk-node/blob/eeaeb10a079bc82754d05778f6c83dafc47cac8a/datamanagement/source/model/folderAttributesWithExtensions.ts#L51)

The last time the folder was modified, in the following format: `YYYY-MM-DDThh:mm:ss.sz`.

#### Memberof

FolderAttributesWithExtensions

### lastModifiedTimeRollup?

`optional` **lastModifiedTimeRollup**: `string`

Defined in: [model/folderAttributesWithExtensions.ts:69](https://github.com/autodesk-platform-services/aps-sdk-node/blob/eeaeb10a079bc82754d05778f6c83dafc47cac8a/datamanagement/source/model/folderAttributesWithExtensions.ts#L69)

The date and time the folder or any of its children were last updated.

#### Memberof

FolderAttributesWithExtensions

### lastModifiedUserId

**lastModifiedUserId**: `string`

Defined in: [model/folderAttributesWithExtensions.ts:57](https://github.com/autodesk-platform-services/aps-sdk-node/blob/eeaeb10a079bc82754d05778f6c83dafc47cac8a/datamanagement/source/model/folderAttributesWithExtensions.ts#L57)

The last time the folder was modified, in the following format: `YYYY-MM-DDThh:mm:ss.sz`.

#### Memberof

FolderAttributesWithExtensions

### lastModifiedUserName

**lastModifiedUserName**: `string`

Defined in: [model/folderAttributesWithExtensions.ts:63](https://github.com/autodesk-platform-services/aps-sdk-node/blob/eeaeb10a079bc82754d05778f6c83dafc47cac8a/datamanagement/source/model/folderAttributesWithExtensions.ts#L63)

The name of the user who last modified the folder.

#### Memberof

FolderAttributesWithExtensions

### name

**name**: `string`

Defined in: [model/folderAttributesWithExtensions.ts:15](https://github.com/autodesk-platform-services/aps-sdk-node/blob/eeaeb10a079bc82754d05778f6c83dafc47cac8a/datamanagement/source/model/folderAttributesWithExtensions.ts#L15)

The name of the folder.

#### Memberof

FolderAttributesWithExtensions

### objectCount

**objectCount**: `number`

Defined in: [model/folderAttributesWithExtensions.ts:27](https://github.com/autodesk-platform-services/aps-sdk-node/blob/eeaeb10a079bc82754d05778f6c83dafc47cac8a/datamanagement/source/model/folderAttributesWithExtensions.ts#L27)

The number of objects inside the folder.

#### Memberof

FolderAttributesWithExtensions

---
원본 문서: https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/interfaces/ts-FolderAttributesWithExtensions
