---
title: "Completes3uploadBody"
url_path: reference/typescript-sdk-oss/interfaces/Completes3uploadBody
product: "Data Management API"
surface: "data-management-v2"
protocol: "TypeScript SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "typescript-sdk-oss"
---
# Interface: Completes3uploadBody

Defined in: [model/completes3uploadBody.ts:8](https://github.com/autodesk-platform-services/aps-sdk-node/blob/e37e37c49eb213844e79f1c7dee5616930755060/oss/source/model/completes3uploadBody.ts#L8)

The request payload for a Complete Upload to S3 Signed URL operation.

## Export

Completes3uploadBody

## Properties

### eTags?

`optional` **eTags**: `string`[]
Defined in: [model/completes3uploadBody.ts:26](https://github.com/autodesk-platform-services/aps-sdk-node/blob/e37e37c49eb213844e79f1c7dee5616930755060/oss/source/model/completes3uploadBody.ts#L26)

An array of eTags. S3 returns an eTag to each upload request, be it for a chunk or an entire file. For a single-part upload, this array contains the expected eTag of the entire object. For a multipart upload, this array contains the expected eTag of each part of the upload; the index of an eTag in the array corresponds to its part number in the upload. If provided, OSS will validate these eTags against the content in S3, and return an error if the eTags do not match.

#### Memberof

Completes3uploadBody

### size?

`optional` **size**: `number`
Defined in: [model/completes3uploadBody.ts:20](https://github.com/autodesk-platform-services/aps-sdk-node/blob/e37e37c49eb213844e79f1c7dee5616930755060/oss/source/model/completes3uploadBody.ts#L20)

The expected size of the object. If provided, OSS will check this against the object in S3 and return an error if the size does not match.

#### Memberof

Completes3uploadBody

### uploadKey

**uploadKey**: `string`
Defined in: [model/completes3uploadBody.ts:14](https://github.com/autodesk-platform-services/aps-sdk-node/blob/e37e37c49eb213844e79f1c7dee5616930755060/oss/source/model/completes3uploadBody.ts#L14)

The ID uniquely identifying the upload session that was returned when you called [Get S3 Signed Upload URL](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-oss/classes/OssClient/#completesigneds3upload).

#### Memberof

Completes3uploadBody

---
원본 문서: https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-oss/interfaces/Completes3uploadBody
