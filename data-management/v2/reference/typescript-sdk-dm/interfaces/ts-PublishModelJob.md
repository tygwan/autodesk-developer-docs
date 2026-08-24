---
title: "PublishModelJob"
url_path: reference/typescript-sdk-dm/interfaces/ts-PublishModelJob
product: "Data Management API"
surface: "data-management-v2"
protocol: "TypeScript SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "typescript-sdk-dm"
---
# Interface: PublishModelJob

Defined in: [model/publishModelJob.ts:10](https://github.com/autodesk-platform-services/aps-sdk-node/blob/eeaeb10a079bc82754d05778f6c83dafc47cac8a/datamanagement/source/model/publishModelJob.ts#L10)

The `data` object returned by the GetPublishModelJob command, if the model needs publishing. If the model is already published, the `data` object will bed `null`.

## Export

PublishModelJob

## Properties

### attributes?

`optional` **attributes**: [`PublishModelJobAttributes`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/interfaces/ts-PublishModelJobAttributes)

Defined in: [model/publishModelJob.ts:28](https://github.com/autodesk-platform-services/aps-sdk-node/blob/eeaeb10a079bc82754d05778f6c83dafc47cac8a/datamanagement/source/model/publishModelJob.ts#L28)

#### Memberof

PublishModelJob

### id?

`optional` **id**: `string`

Defined in: [model/publishModelJob.ts:22](https://github.com/autodesk-platform-services/aps-sdk-node/blob/eeaeb10a079bc82754d05778f6c83dafc47cac8a/datamanagement/source/model/publishModelJob.ts#L22)

A unique ID assigned to the process executing the command.

#### Memberof

PublishModelJob

### type?

`optional` **type**: `"commands"`

Defined in: [model/publishModelJob.ts:16](https://github.com/autodesk-platform-services/aps-sdk-node/blob/eeaeb10a079bc82754d05778f6c83dafc47cac8a/datamanagement/source/model/publishModelJob.ts#L16)

#### Memberof

PublishModelJob

---
원본 문서: https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/interfaces/ts-PublishModelJob
