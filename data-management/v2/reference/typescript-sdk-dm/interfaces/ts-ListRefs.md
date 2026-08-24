---
title: "ListRefs"
url_path: reference/typescript-sdk-dm/interfaces/ts-ListRefs
product: "Data Management API"
surface: "data-management-v2"
protocol: "TypeScript SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "typescript-sdk-dm"
---
# Interface: ListRefs

Defined in: [model/listRefs.ts:12](https://github.com/autodesk-platform-services/aps-sdk-node/blob/eeaeb10a079bc82754d05778f6c83dafc47cac8a/datamanagement/source/model/listRefs.ts#L12)

The `data` object returned by the ListRefs command.

## Export

ListRefs

## Properties

### attributes?

`optional` **attributes**: [`ListRefsAttributes`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/interfaces/ts-ListRefsAttributes)

Defined in: [model/listRefs.ts:30](https://github.com/autodesk-platform-services/aps-sdk-node/blob/eeaeb10a079bc82754d05778f6c83dafc47cac8a/datamanagement/source/model/listRefs.ts#L30)

#### Memberof

ListRefs

### id?

`optional` **id**: `string`

Defined in: [model/listRefs.ts:24](https://github.com/autodesk-platform-services/aps-sdk-node/blob/eeaeb10a079bc82754d05778f6c83dafc47cac8a/datamanagement/source/model/listRefs.ts#L24)

A unique ID assigned to the process executing the command.

#### Memberof

ListRefs

### included?

`optional` **included**: [`ListRefsIncluded`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/type-aliases/ts-ListRefsIncluded)[]

Defined in: [model/listRefs.ts:43](https://github.com/autodesk-platform-services/aps-sdk-node/blob/eeaeb10a079bc82754d05778f6c83dafc47cac8a/datamanagement/source/model/listRefs.ts#L43)

An array of objects, where each object
represents a referenced resource.

#### Memberof

ListRefs

### relationships?

`optional` **relationships**: [`ListRefsRelationships`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/interfaces/ts-ListRefsRelationships)

Defined in: [model/listRefs.ts:36](https://github.com/autodesk-platform-services/aps-sdk-node/blob/eeaeb10a079bc82754d05778f6c83dafc47cac8a/datamanagement/source/model/listRefs.ts#L36)

#### Memberof

ListRefs

### type?

`optional` **type**: `"commands"`

Defined in: [model/listRefs.ts:18](https://github.com/autodesk-platform-services/aps-sdk-node/blob/eeaeb10a079bc82754d05778f6c83dafc47cac8a/datamanagement/source/model/listRefs.ts#L18)

#### Memberof

ListRefs

---
원본 문서: https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/interfaces/ts-ListRefs
