---
title: "TopFolderAttributesWithExtensions"
url_path: reference/typescript-sdk-dm/interfaces/ts-TopFolderAttributesWithExtensions
product: "Data Management API"
surface: "data-management-v2"
protocol: "TypeScript SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "typescript-sdk-dm"
---
# Interface: TopFolderAttributesWithExtensions

Defined in: [model/topFolderAttributesWithExtensions.ts:9](https://github.com/autodesk-platform-services/aps-sdk-node/blob/eeaeb10a079bc82754d05778f6c83dafc47cac8a/datamanagement/source/model/topFolderAttributesWithExtensions.ts#L9)

The properties of a folder.

## Export

TopFolderAttributesWithExtensions

## Properties

### createTime

**createTime**: `string`

Defined in: [model/topFolderAttributesWithExtensions.ts:33](https://github.com/autodesk-platform-services/aps-sdk-node/blob/eeaeb10a079bc82754d05778f6c83dafc47cac8a/datamanagement/source/model/topFolderAttributesWithExtensions.ts#L33)

The time the folder was created, in the following format: `YYYY-MM-DDThh:mm:ss.sz`.

#### Memberof

TopFolderAttributesWithExtensions

### createUserId

**createUserId**: `string`

Defined in: [model/topFolderAttributesWithExtensions.ts:39](https://github.com/autodesk-platform-services/aps-sdk-node/blob/eeaeb10a079bc82754d05778f6c83dafc47cac8a/datamanagement/source/model/topFolderAttributesWithExtensions.ts#L39)

The unique identifier of the user who created the folder.

#### Memberof

TopFolderAttributesWithExtensions

### createUserName

**createUserName**: `string`

Defined in: [model/topFolderAttributesWithExtensions.ts:45](https://github.com/autodesk-platform-services/aps-sdk-node/blob/eeaeb10a079bc82754d05778f6c83dafc47cac8a/datamanagement/source/model/topFolderAttributesWithExtensions.ts#L45)

The name of the user who created the folder.

#### Memberof

TopFolderAttributesWithExtensions

### displayName

**displayName**: `string`

Defined in: [model/topFolderAttributesWithExtensions.ts:21](https://github.com/autodesk-platform-services/aps-sdk-node/blob/eeaeb10a079bc82754d05778f6c83dafc47cac8a/datamanagement/source/model/topFolderAttributesWithExtensions.ts#L21)

Reserved for future Use. Do not use. Use `attributes.name` for the folder name.

#### Memberof

TopFolderAttributesWithExtensions

### extensions?

`optional` **extensions**: [`TopFolderExtensionWithSchemaLink`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/interfaces/ts-TopFolderExtensionWithSchemaLink)

Defined in: [model/topFolderAttributesWithExtensions.ts:81](https://github.com/autodesk-platform-services/aps-sdk-node/blob/eeaeb10a079bc82754d05778f6c83dafc47cac8a/datamanagement/source/model/topFolderAttributesWithExtensions.ts#L81)

#### Memberof

TopFolderAttributesWithExtensions

### hidden

**hidden**: `boolean`

Defined in: [model/topFolderAttributesWithExtensions.ts:75](https://github.com/autodesk-platform-services/aps-sdk-node/blob/eeaeb10a079bc82754d05778f6c83dafc47cac8a/datamanagement/source/model/topFolderAttributesWithExtensions.ts#L75)

The folder’s current visibility state.

#### Memberof

TopFolderAttributesWithExtensions

### lastModifiedTime

**lastModifiedTime**: `string`

Defined in: [model/topFolderAttributesWithExtensions.ts:51](https://github.com/autodesk-platform-services/aps-sdk-node/blob/eeaeb10a079bc82754d05778f6c83dafc47cac8a/datamanagement/source/model/topFolderAttributesWithExtensions.ts#L51)

The last time the folder was modified, in the following format: `YYYY-MM-DDThh:mm:ss.sz`.

#### Memberof

TopFolderAttributesWithExtensions

### lastModifiedTimeRollup?

`optional` **lastModifiedTimeRollup**: `string`

Defined in: [model/topFolderAttributesWithExtensions.ts:69](https://github.com/autodesk-platform-services/aps-sdk-node/blob/eeaeb10a079bc82754d05778f6c83dafc47cac8a/datamanagement/source/model/topFolderAttributesWithExtensions.ts#L69)

The date and time the folder or any of its children were last updated.

#### Memberof

TopFolderAttributesWithExtensions

### lastModifiedUserId

**lastModifiedUserId**: `string`

Defined in: [model/topFolderAttributesWithExtensions.ts:57](https://github.com/autodesk-platform-services/aps-sdk-node/blob/eeaeb10a079bc82754d05778f6c83dafc47cac8a/datamanagement/source/model/topFolderAttributesWithExtensions.ts#L57)

The last time the folder was modified, in the following format: `YYYY-MM-DDThh:mm:ss.sz`.

#### Memberof

TopFolderAttributesWithExtensions

### lastModifiedUserName

**lastModifiedUserName**: `string`

Defined in: [model/topFolderAttributesWithExtensions.ts:63](https://github.com/autodesk-platform-services/aps-sdk-node/blob/eeaeb10a079bc82754d05778f6c83dafc47cac8a/datamanagement/source/model/topFolderAttributesWithExtensions.ts#L63)

The name of the user who last modified the folder.

#### Memberof

TopFolderAttributesWithExtensions

### name

**name**: `string`

Defined in: [model/topFolderAttributesWithExtensions.ts:15](https://github.com/autodesk-platform-services/aps-sdk-node/blob/eeaeb10a079bc82754d05778f6c83dafc47cac8a/datamanagement/source/model/topFolderAttributesWithExtensions.ts#L15)

The name of the folder.

#### Memberof

TopFolderAttributesWithExtensions

### objectCount

**objectCount**: `number`

Defined in: [model/topFolderAttributesWithExtensions.ts:27](https://github.com/autodesk-platform-services/aps-sdk-node/blob/eeaeb10a079bc82754d05778f6c83dafc47cac8a/datamanagement/source/model/topFolderAttributesWithExtensions.ts#L27)

The number of objects inside the folder.

#### Memberof

TopFolderAttributesWithExtensions

---
원본 문서: https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/interfaces/ts-TopFolderAttributesWithExtensions
