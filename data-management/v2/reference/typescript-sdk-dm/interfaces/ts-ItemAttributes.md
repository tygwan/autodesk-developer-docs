---
title: "ItemAttributes"
url_path: reference/typescript-sdk-dm/interfaces/ts-ItemAttributes
product: "Data Management API"
surface: "data-management-v2"
protocol: "TypeScript SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "typescript-sdk-dm"
---
# Interface: ItemAttributes

Defined in: [model/itemAttributes.ts:9](https://github.com/autodesk-platform-services/aps-sdk-node/blob/eeaeb10a079bc82754d05778f6c83dafc47cac8a/datamanagement/source/model/itemAttributes.ts#L9)

Properties of an item.

## Export

ItemAttributes

## Properties

### createTime

**createTime**: `string`

Defined in: [model/itemAttributes.ts:22](https://github.com/autodesk-platform-services/aps-sdk-node/blob/eeaeb10a079bc82754d05778f6c83dafc47cac8a/datamanagement/source/model/itemAttributes.ts#L22)

The time that the resource was created at.

#### Memberof

ItemAttributes

### createUserId

**createUserId**: `string`

Defined in: [model/itemAttributes.ts:28](https://github.com/autodesk-platform-services/aps-sdk-node/blob/eeaeb10a079bc82754d05778f6c83dafc47cac8a/datamanagement/source/model/itemAttributes.ts#L28)

The ID of the user that created the version.

#### Memberof

ItemAttributes

### createUserName

**createUserName**: `string`

Defined in: [model/itemAttributes.ts:34](https://github.com/autodesk-platform-services/aps-sdk-node/blob/eeaeb10a079bc82754d05778f6c83dafc47cac8a/datamanagement/source/model/itemAttributes.ts#L34)

The user name of the user that created the version.

#### Memberof

ItemAttributes

### displayName

**displayName**: `string`

Defined in: [model/itemAttributes.ts:16](https://github.com/autodesk-platform-services/aps-sdk-node/blob/eeaeb10a079bc82754d05778f6c83dafc47cac8a/datamanagement/source/model/itemAttributes.ts#L16)

A human friendly name to identify the item.
Note that for BIM 360 projects, this attribute is reserved for future releases and should not be used. Use a version’s `attributes.name` for the file name.

#### Memberof

ItemAttributes

### extension

**extension**: [`ItemExtensionWithSchemaLink`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/interfaces/ts-ItemExtensionWithSchemaLink)

Defined in: [model/itemAttributes.ts:96](https://github.com/autodesk-platform-services/aps-sdk-node/blob/eeaeb10a079bc82754d05778f6c83dafc47cac8a/datamanagement/source/model/itemAttributes.ts#L96)

#### Memberof

ItemAttributes

### hidden?

`optional` **hidden**: `boolean`

Defined in: [model/itemAttributes.ts:61](https://github.com/autodesk-platform-services/aps-sdk-node/blob/eeaeb10a079bc82754d05778f6c83dafc47cac8a/datamanagement/source/model/itemAttributes.ts#L61)

`true`: The file has been deleted.

`false`: The file has not been deleted.

#### Memberof

ItemAttributes

### lastModifiedTime

**lastModifiedTime**: `string`

Defined in: [model/itemAttributes.ts:40](https://github.com/autodesk-platform-services/aps-sdk-node/blob/eeaeb10a079bc82754d05778f6c83dafc47cac8a/datamanagement/source/model/itemAttributes.ts#L40)

The time that the version was last modified.

#### Memberof

ItemAttributes

### lastModifiedUserId

**lastModifiedUserId**: `string`

Defined in: [model/itemAttributes.ts:46](https://github.com/autodesk-platform-services/aps-sdk-node/blob/eeaeb10a079bc82754d05778f6c83dafc47cac8a/datamanagement/source/model/itemAttributes.ts#L46)

The ID of the user that last modified the version.

#### Memberof

ItemAttributes

### lastModifiedUserName

**lastModifiedUserName**: `string`

Defined in: [model/itemAttributes.ts:52](https://github.com/autodesk-platform-services/aps-sdk-node/blob/eeaeb10a079bc82754d05778f6c83dafc47cac8a/datamanagement/source/model/itemAttributes.ts#L52)

The user name of the user that last modified the version.

#### Memberof

ItemAttributes

### reserved?

`optional` **reserved**: `boolean`

Defined in: [model/itemAttributes.ts:72](https://github.com/autodesk-platform-services/aps-sdk-node/blob/eeaeb10a079bc82754d05778f6c83dafc47cac8a/datamanagement/source/model/itemAttributes.ts#L72)

`true`: The file is locked.

`false` The file is not locked.

**Note:** You can lock BIM 360 Project Files folder files and A360 files, but you cannot lock BIM 360 Plans Folder files.

#### Memberof

ItemAttributes

### reservedTime?

`optional` **reservedTime**: `string`

Defined in: [model/itemAttributes.ts:78](https://github.com/autodesk-platform-services/aps-sdk-node/blob/eeaeb10a079bc82754d05778f6c83dafc47cac8a/datamanagement/source/model/itemAttributes.ts#L78)

The time the item was reserved in the following format: `YYYY-MM-DDThh:mm:ss.sz`.

#### Memberof

ItemAttributes

### reservedUserId?

`optional` **reservedUserId**: `string`

Defined in: [model/itemAttributes.ts:84](https://github.com/autodesk-platform-services/aps-sdk-node/blob/eeaeb10a079bc82754d05778f6c83dafc47cac8a/datamanagement/source/model/itemAttributes.ts#L84)

The unique identifier of the user who reserved the item.

#### Memberof

ItemAttributes

### reservedUserName?

`optional` **reservedUserName**: `string`

Defined in: [model/itemAttributes.ts:90](https://github.com/autodesk-platform-services/aps-sdk-node/blob/eeaeb10a079bc82754d05778f6c83dafc47cac8a/datamanagement/source/model/itemAttributes.ts#L90)

The name of the user who reserved the item.

#### Memberof

ItemAttributes

---
원본 문서: https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/interfaces/ts-ItemAttributes
