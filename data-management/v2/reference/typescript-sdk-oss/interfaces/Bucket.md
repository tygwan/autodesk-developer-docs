---
title: "Bucket"
url_path: reference/typescript-sdk-oss/interfaces/Bucket
product: "Data Management API"
surface: "data-management-v2"
protocol: "TypeScript SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "typescript-sdk-oss"
---
# Interface: Bucket

Defined in: [model/bucket.ts:10](https://github.com/autodesk-platform-services/aps-sdk-node/blob/e37e37c49eb213844e79f1c7dee5616930755060/oss/source/model/bucket.ts#L10)

An object representing a bucket.

## Export

Bucket

## Properties

### bucketKey?

`optional` **bucketKey**: `string`
Defined in: [model/bucket.ts:16](https://github.com/autodesk-platform-services/aps-sdk-node/blob/e37e37c49eb213844e79f1c7dee5616930755060/oss/source/model/bucket.ts#L16)

Bucket key: An ID that uniquely identifies the bucket.

#### Memberof

Bucket

### bucketOwner?

`optional` **bucketOwner**: `string`
Defined in: [model/bucket.ts:22](https://github.com/autodesk-platform-services/aps-sdk-node/blob/e37e37c49eb213844e79f1c7dee5616930755060/oss/source/model/bucket.ts#L22)

The Client ID of the application that owns the bucket.

#### Memberof

Bucket

### createdDate?

`optional` **createdDate**: `string`
Defined in: [model/bucket.ts:28](https://github.com/autodesk-platform-services/aps-sdk-node/blob/e37e37c49eb213844e79f1c7dee5616930755060/oss/source/model/bucket.ts#L28)

The time the bucket was created, represented as a Unix timestamp.

#### Memberof

Bucket

### permissions?

`optional` **permissions**: [`Permission`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-oss/interfaces/Permission)[]
Defined in: [model/bucket.ts:34](https://github.com/autodesk-platform-services/aps-sdk-node/blob/e37e37c49eb213844e79f1c7dee5616930755060/oss/source/model/bucket.ts#L34)

An array of objects, where each object represents an application that can access the bucket.

#### Memberof

Bucket

### policyKey?

`optional` **policyKey**: [`PolicyKey`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-oss/enumerations/PolicyKey)
Defined in: [model/bucket.ts:40](https://github.com/autodesk-platform-services/aps-sdk-node/blob/e37e37c49eb213844e79f1c7dee5616930755060/oss/source/model/bucket.ts#L40)

#### Memberof

Bucket

---
원본 문서: https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-oss/interfaces/Bucket
