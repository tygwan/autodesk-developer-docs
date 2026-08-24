---
title: "ListItems"
url_path: reference/typescript-sdk-dm/interfaces/ts-ListItems
product: "Data Management API"
surface: "data-management-v2"
protocol: "TypeScript SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "typescript-sdk-dm"
---
# Interface: ListItems

Defined in: [model/listItems.ts:12](https://github.com/autodesk-platform-services/aps-sdk-node/blob/eeaeb10a079bc82754d05778f6c83dafc47cac8a/datamanagement/source/model/listItems.ts#L12)

The `data` object returned by the ListItems command.

## Export

ListItems

## Properties

### attributes?

`optional` **attributes**: [`ListItemsAttributes`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/interfaces/ts-ListItemsAttributes)

Defined in: [model/listItems.ts:30](https://github.com/autodesk-platform-services/aps-sdk-node/blob/eeaeb10a079bc82754d05778f6c83dafc47cac8a/datamanagement/source/model/listItems.ts#L30)

#### Memberof

ListItems

### id?

`optional` **id**: `string`

Defined in: [model/listItems.ts:24](https://github.com/autodesk-platform-services/aps-sdk-node/blob/eeaeb10a079bc82754d05778f6c83dafc47cac8a/datamanagement/source/model/listItems.ts#L24)

A unique ID assigned to the process executing the command.

#### Memberof

ListItems

### included?

`optional` **included**: [`VersionData`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/interfaces/ts-VersionData)[]

Defined in: [model/listItems.ts:44](https://github.com/autodesk-platform-services/aps-sdk-node/blob/eeaeb10a079bc82754d05778f6c83dafc47cac8a/datamanagement/source/model/listItems.ts#L44)

An array of objects, which contains a single
object. The object represents the tip version
of the item.

#### Memberof

ListItems

### relationships?

`optional` **relationships**: [`ListItemsRelationships`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/interfaces/ts-ListItemsRelationships)

Defined in: [model/listItems.ts:36](https://github.com/autodesk-platform-services/aps-sdk-node/blob/eeaeb10a079bc82754d05778f6c83dafc47cac8a/datamanagement/source/model/listItems.ts#L36)

#### Memberof

ListItems

### type?

`optional` **type**: `"commands"`

Defined in: [model/listItems.ts:18](https://github.com/autodesk-platform-services/aps-sdk-node/blob/eeaeb10a079bc82754d05778f6c83dafc47cac8a/datamanagement/source/model/listItems.ts#L18)

#### Memberof

ListItems

---
원본 문서: https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/interfaces/ts-ListItems
