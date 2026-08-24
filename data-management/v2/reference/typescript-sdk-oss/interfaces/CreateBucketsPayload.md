---
title: "CreateBucketsPayload"
url_path: reference/typescript-sdk-oss/interfaces/CreateBucketsPayload
product: "Data Management API"
surface: "data-management-v2"
protocol: "TypeScript SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "typescript-sdk-oss"
---
# Interface: CreateBucketsPayload

Defined in: [model/createBucketsPayload.ts:10](https://github.com/autodesk-platform-services/aps-sdk-node/blob/e37e37c49eb213844e79f1c7dee5616930755060/oss/source/model/createBucketsPayload.ts#L10)

The request payload for the Create Bucket operation.

## Export

CreateBucketsPayload

## Properties

### allow?

`optional` **allow**: [`CreateBucketsPayloadAllow`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-oss/interfaces/CreateBucketsPayloadAllow)[]
Defined in: [model/createBucketsPayload.ts:25](https://github.com/autodesk-platform-services/aps-sdk-node/blob/e37e37c49eb213844e79f1c7dee5616930755060/oss/source/model/createBucketsPayload.ts#L25)

An array of objects, where each object represents an application that can access the bucket.

#### Memberof

CreateBucketsPayload

### bucketKey

**bucketKey**: `string`
Defined in: [model/createBucketsPayload.ts:19](https://github.com/autodesk-platform-services/aps-sdk-node/blob/e37e37c49eb213844e79f1c7dee5616930755060/oss/source/model/createBucketsPayload.ts#L19)

Bucket key: A unique name you assign to a bucket. Bucket keys must be globally unique across all applications and regions. They must consist of only lower case characters, numbers 0-9, and underscores (_).

**Note:** You cannot change a bucket key once the bucket is created.

#### Memberof

CreateBucketsPayload

### policyKey

**policyKey**: [`PolicyKey`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-oss/enumerations/PolicyKey)
Defined in: [model/createBucketsPayload.ts:31](https://github.com/autodesk-platform-services/aps-sdk-node/blob/e37e37c49eb213844e79f1c7dee5616930755060/oss/source/model/createBucketsPayload.ts#L31)

#### Memberof

CreateBucketsPayload

---
원본 문서: https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-oss/interfaces/CreateBucketsPayload
