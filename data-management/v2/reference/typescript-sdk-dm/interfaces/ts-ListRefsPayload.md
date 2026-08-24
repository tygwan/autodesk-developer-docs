---
title: "ListRefsPayload"
url_path: reference/typescript-sdk-dm/interfaces/ts-ListRefsPayload
product: "Data Management API"
surface: "data-management-v2"
protocol: "TypeScript SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "typescript-sdk-dm"
---
# Interface: ListRefsPayload

Defined in: [model/listRefsPayload.ts:13](https://github.com/autodesk-platform-services/aps-sdk-node/blob/eeaeb10a079bc82754d05778f6c83dafc47cac8a/datamanagement/source/model/listRefsPayload.ts#L13)

An object that contains the input data required to execute the ListRefs command.
*
* The ListRefs command retrieves the custom relationships between specified versions of items and other resources in the data domain service (folders, items, and versions). You can retrieve the relationships of up to 50 versions.

## Export

ListRefsPayload

## Properties

### attributes?

`optional` **attributes**: [`ListRefsPayloadAttributes`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/interfaces/ts-ListRefsPayloadAttributes)

Defined in: [model/listRefsPayload.ts:25](https://github.com/autodesk-platform-services/aps-sdk-node/blob/eeaeb10a079bc82754d05778f6c83dafc47cac8a/datamanagement/source/model/listRefsPayload.ts#L25)

#### Memberof

ListRefsPayload

### relationships?

`optional` **relationships**: [`ListRefsPayloadRelationships`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/interfaces/ts-ListRefsPayloadRelationships)

Defined in: [model/listRefsPayload.ts:31](https://github.com/autodesk-platform-services/aps-sdk-node/blob/eeaeb10a079bc82754d05778f6c83dafc47cac8a/datamanagement/source/model/listRefsPayload.ts#L31)

#### Memberof

ListRefsPayload

### type?

`optional` **type**: `"commands"`

Defined in: [model/listRefsPayload.ts:19](https://github.com/autodesk-platform-services/aps-sdk-node/blob/eeaeb10a079bc82754d05778f6c83dafc47cac8a/datamanagement/source/model/listRefsPayload.ts#L19)

#### Memberof

ListRefsPayload

---
원본 문서: https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/interfaces/ts-ListRefsPayload
