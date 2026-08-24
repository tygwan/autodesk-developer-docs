---
title: "Buckets"
url_path: reference/typescript-sdk-oss/interfaces/Buckets
product: "Data Management API"
surface: "data-management-v2"
protocol: "TypeScript SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "typescript-sdk-oss"
---
# Interface: Buckets

Defined in: [model/buckets.ts:9](https://github.com/autodesk-platform-services/aps-sdk-node/blob/e37e37c49eb213844e79f1c7dee5616930755060/oss/source/model/buckets.ts#L9)

An object that represents a collection of buckets.

## Export

Buckets

## Properties

### items

**items**: [`BucketsItems`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-oss/interfaces/BucketsItems)[]
Defined in: [model/buckets.ts:15](https://github.com/autodesk-platform-services/aps-sdk-node/blob/e37e37c49eb213844e79f1c7dee5616930755060/oss/source/model/buckets.ts#L15)

Array of objects, where each object represents a bucket.

#### Memberof

Buckets

### next?

`optional` **next**: `string`
Defined in: [model/buckets.ts:21](https://github.com/autodesk-platform-services/aps-sdk-node/blob/e37e37c49eb213844e79f1c7dee5616930755060/oss/source/model/buckets.ts#L21)

The URL to be used to retrieve the next page of results, if available. It will be present only when there are more items to be retrieved after the current set.

#### Memberof

Buckets

---
원본 문서: https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-oss/interfaces/Buckets
