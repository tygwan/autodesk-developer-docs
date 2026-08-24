---
title: "BucketObjects"
url_path: reference/typescript-sdk-oss/interfaces/BucketObjects
product: "Data Management API"
surface: "data-management-v2"
protocol: "TypeScript SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "typescript-sdk-oss"
---
# Interface: BucketObjects

Defined in: [model/bucketObjects.ts:9](https://github.com/autodesk-platform-services/aps-sdk-node/blob/e37e37c49eb213844e79f1c7dee5616930755060/oss/source/model/bucketObjects.ts#L9)

An array where each element represents an object in the bucket.

## Export

BucketObjects

## Properties

### items?

`optional` **items**: [`ObjectDetails`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-oss/interfaces/ObjectDetails)[]
Defined in: [model/bucketObjects.ts:15](https://github.com/autodesk-platform-services/aps-sdk-node/blob/e37e37c49eb213844e79f1c7dee5616930755060/oss/source/model/bucketObjects.ts#L15)

#### Memberof

BucketObjects

### next?

`optional` **next**: `string`
Defined in: [model/bucketObjects.ts:21](https://github.com/autodesk-platform-services/aps-sdk-node/blob/e37e37c49eb213844e79f1c7dee5616930755060/oss/source/model/bucketObjects.ts#L21)

The URL to be used to retrieve the next page of results, if available. It will be present only when there are more items to be retrieved after the current set.

#### Memberof

BucketObjects

---
원본 문서: https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-oss/interfaces/BucketObjects
