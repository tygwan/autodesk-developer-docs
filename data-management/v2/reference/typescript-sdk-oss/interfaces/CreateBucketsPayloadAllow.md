---
title: "CreateBucketsPayloadAllow"
url_path: reference/typescript-sdk-oss/interfaces/CreateBucketsPayloadAllow
product: "Data Management API"
surface: "data-management-v2"
protocol: "TypeScript SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "typescript-sdk-oss"
---
# Interface: CreateBucketsPayloadAllow

Defined in: [model/createBucketsPayloadAllow.ts:8](https://github.com/autodesk-platform-services/aps-sdk-node/blob/e37e37c49eb213844e79f1c7dee5616930755060/oss/source/model/createBucketsPayloadAllow.ts#L8)

An object that represents the permissions allowed for a bucket.

## Export

CreateBucketsPayloadAllow

## Properties

### access

**access**: [`CreateBucketsPayloadAllowAccessEnum`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-oss/type-aliases/CreateBucketsPayloadAllowAccessEnum)
Defined in: [model/createBucketsPayloadAllow.ts:24](https://github.com/autodesk-platform-services/aps-sdk-node/blob/e37e37c49eb213844e79f1c7dee5616930755060/oss/source/model/createBucketsPayloadAllow.ts#L24)

Specifies the level of permission the application has. Required when `allow` is specified. Possible values are:
- `full` - Unrestricted access to objects within the bucket.
- `read_only` - Read only access to the objects within the bucket. Modification or deletion of objects is not allowed.

#### Memberof

CreateBucketsPayloadAllow

### authId

**authId**: `string`
Defined in: [model/createBucketsPayloadAllow.ts:14](https://github.com/autodesk-platform-services/aps-sdk-node/blob/e37e37c49eb213844e79f1c7dee5616930755060/oss/source/model/createBucketsPayloadAllow.ts#L14)

The Client ID of the application.

#### Memberof

CreateBucketsPayloadAllow

---
원본 문서: https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-oss/interfaces/CreateBucketsPayloadAllow
