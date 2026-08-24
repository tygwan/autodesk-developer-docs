---
title: "PublishModelJobPayload"
url_path: reference/typescript-sdk-dm/interfaces/ts-PublishModelJobPayload
product: "Data Management API"
surface: "data-management-v2"
protocol: "TypeScript SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "typescript-sdk-dm"
---
# Interface: PublishModelJobPayload

Defined in: [model/publishModelJobPayload.ts:13](https://github.com/autodesk-platform-services/aps-sdk-node/blob/eeaeb10a079bc82754d05778f6c83dafc47cac8a/datamanagement/source/model/publishModelJobPayload.ts#L13)

An object that contains the input data required to execute the GetPublishModelJob command.
*
* The ListRefs verifies whether a Collaboration for Revit (C4R) model needs to be published to BIM 360 Docs. For more information, see the [GetPublishModelJob topic in the overview section](https://aps.autodesk.com/en/docs/data/v2/developers_guide/commands/getpublishmodeljob).

## Export

PublishModelJobPayload

## Properties

### attributes?

`optional` **attributes**: [`PublishModelJobPayloadAttributes`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/interfaces/ts-PublishModelJobPayloadAttributes)

Defined in: [model/publishModelJobPayload.ts:31](https://github.com/autodesk-platform-services/aps-sdk-node/blob/eeaeb10a079bc82754d05778f6c83dafc47cac8a/datamanagement/source/model/publishModelJobPayload.ts#L31)

#### Memberof

PublishModelJobPayload

### id?

`optional` **id**: `string`

Defined in: [model/publishModelJobPayload.ts:25](https://github.com/autodesk-platform-services/aps-sdk-node/blob/eeaeb10a079bc82754d05778f6c83dafc47cac8a/datamanagement/source/model/publishModelJobPayload.ts#L25)

A unique ID assigned to the process executing the command.

#### Memberof

PublishModelJobPayload

### relationships?

`optional` **relationships**: [`PublishModelJobPayloadRelationships`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/interfaces/ts-PublishModelJobPayloadRelationships)

Defined in: [model/publishModelJobPayload.ts:37](https://github.com/autodesk-platform-services/aps-sdk-node/blob/eeaeb10a079bc82754d05778f6c83dafc47cac8a/datamanagement/source/model/publishModelJobPayload.ts#L37)

#### Memberof

PublishModelJobPayload

### type?

`optional` **type**: `"commands"`

Defined in: [model/publishModelJobPayload.ts:19](https://github.com/autodesk-platform-services/aps-sdk-node/blob/eeaeb10a079bc82754d05778f6c83dafc47cac8a/datamanagement/source/model/publishModelJobPayload.ts#L19)

#### Memberof

PublishModelJobPayload

---
원본 문서: https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/interfaces/ts-PublishModelJobPayload
