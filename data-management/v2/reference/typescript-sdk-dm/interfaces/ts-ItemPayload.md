---
title: "ItemPayload"
url_path: reference/typescript-sdk-dm/interfaces/ts-ItemPayload
product: "Data Management API"
surface: "data-management-v2"
protocol: "TypeScript SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "typescript-sdk-dm"
---
# Interface: ItemPayload

Defined in: [model/itemPayload.ts:12](https://github.com/autodesk-platform-services/aps-sdk-node/blob/eeaeb10a079bc82754d05778f6c83dafc47cac8a/datamanagement/source/model/itemPayload.ts#L12)

Describe the item to be created.

## Export

ItemPayload

## Properties

### data

**data**: [`ItemPayloadData`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/interfaces/ts-ItemPayloadData)

Defined in: [model/itemPayload.ts:24](https://github.com/autodesk-platform-services/aps-sdk-node/blob/eeaeb10a079bc82754d05778f6c83dafc47cac8a/datamanagement/source/model/itemPayload.ts#L24)

#### Memberof

ItemPayload

### included

**included**: `Set`<[`ItemPayloadIncluded`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/interfaces/ts-ItemPayloadIncluded)>

Defined in: [model/itemPayload.ts:30](https://github.com/autodesk-platform-services/aps-sdk-node/blob/eeaeb10a079bc82754d05778f6c83dafc47cac8a/datamanagement/source/model/itemPayload.ts#L30)

An array of objects, where each object represents a version of the item to be created. In this case there will only be one element in the array.

#### Memberof

ItemPayload

### jsonapi

**jsonapi**: [`JsonApiVersion`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/interfaces/ts-JsonApiVersion)

Defined in: [model/itemPayload.ts:18](https://github.com/autodesk-platform-services/aps-sdk-node/blob/eeaeb10a079bc82754d05778f6c83dafc47cac8a/datamanagement/source/model/itemPayload.ts#L18)

#### Memberof

ItemPayload

### meta?

`optional` **meta**: [`MetaForWebhooks`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/interfaces/ts-MetaForWebhooks)

Defined in: [model/itemPayload.ts:36](https://github.com/autodesk-platform-services/aps-sdk-node/blob/eeaeb10a079bc82754d05778f6c83dafc47cac8a/datamanagement/source/model/itemPayload.ts#L36)

#### Memberof

ItemPayload

---
원본 문서: https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/interfaces/ts-ItemPayload
