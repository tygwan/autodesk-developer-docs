---
title: "Batchsigneds3uploadObjectRequests"
url_path: reference/typescript-sdk-oss/interfaces/Batchsigneds3uploadObjectRequests
product: "Data Management API"
surface: "data-management-v2"
protocol: "TypeScript SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "typescript-sdk-oss"
---
# Interface: Batchsigneds3uploadObjectRequests

Defined in: [model/batchsigneds3uploadObjectRequests.ts:8](https://github.com/autodesk-platform-services/aps-sdk-node/blob/e37e37c49eb213844e79f1c7dee5616930755060/oss/source/model/batchsigneds3uploadObjectRequests.ts#L8)

## Export

Batchsigneds3uploadObjectRequests

## Properties

### firstPart?

`optional` **firstPart**: `number`
Defined in: [model/batchsigneds3uploadObjectRequests.ts:20](https://github.com/autodesk-platform-services/aps-sdk-node/blob/e37e37c49eb213844e79f1c7dee5616930755060/oss/source/model/batchsigneds3uploadObjectRequests.ts#L20)

The index of first chunk to be uploaded.

#### Memberof

Batchsigneds3uploadObjectRequests

### objectKey

**objectKey**: `string`
Defined in: [model/batchsigneds3uploadObjectRequests.ts:14](https://github.com/autodesk-platform-services/aps-sdk-node/blob/e37e37c49eb213844e79f1c7dee5616930755060/oss/source/model/batchsigneds3uploadObjectRequests.ts#L14)

A URL-encoded human friendly name of the object to upload.

#### Memberof

Batchsigneds3uploadObjectRequests

### parts?

`optional` **parts**: `number`
Defined in: [model/batchsigneds3uploadObjectRequests.ts:26](https://github.com/autodesk-platform-services/aps-sdk-node/blob/e37e37c49eb213844e79f1c7dee5616930755060/oss/source/model/batchsigneds3uploadObjectRequests.ts#L26)

The number of parts you intend to chunk the object for uploading. OSS will return that many signed URLs, one URL for each chunk. If you do not specify a value you’ll get only one URL to upload the entire object.

#### Memberof

Batchsigneds3uploadObjectRequests

### uploadKey?

`optional` **uploadKey**: `string`
Defined in: [model/batchsigneds3uploadObjectRequests.ts:32](https://github.com/autodesk-platform-services/aps-sdk-node/blob/e37e37c49eb213844e79f1c7dee5616930755060/oss/source/model/batchsigneds3uploadObjectRequests.ts#L32)

The `uploadKey` of a previously-initiated upload, in order to request more chunk upload URLs for the same upload. If you do not specify a value, OSS will initiate a new upload entirely.

#### Memberof

Batchsigneds3uploadObjectRequests

---
원본 문서: https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-oss/interfaces/Batchsigneds3uploadObjectRequests
