---
title: "BatchcompleteuploadObjectRequests"
url_path: reference/typescript-sdk-oss/interfaces/BatchcompleteuploadObjectRequests
product: "Data Management API"
surface: "data-management-v2"
protocol: "TypeScript SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "typescript-sdk-oss"
---
# Interface: BatchcompleteuploadObjectRequests

Defined in: [model/batchcompleteuploadObjectRequests.ts:8](https://github.com/autodesk-platform-services/aps-sdk-node/blob/e37e37c49eb213844e79f1c7dee5616930755060/oss/source/model/batchcompleteuploadObjectRequests.ts#L8)

## Export

BatchcompleteuploadObjectRequests

## Properties

### eTags?

`optional` **eTags**: `string`[]
Defined in: [model/batchcompleteuploadObjectRequests.ts:32](https://github.com/autodesk-platform-services/aps-sdk-node/blob/e37e37c49eb213844e79f1c7dee5616930755060/oss/source/model/batchcompleteuploadObjectRequests.ts#L32)

An array of eTags. S3 returns an eTag to each upload request, be it for a chunk or an entire file. For a single-part upload, this array contains the expected eTag of the entire object. For a multipart upload, this array contains the expected eTag of each part of the upload; the index of an eTag in the array corresponds to its part number in the upload. If provided, OSS will validate these eTags against the content in S3, and return an error if the eTags do not match.

#### Memberof

BatchcompleteuploadObjectRequests

### objectKey

**objectKey**: `string`
Defined in: [model/batchcompleteuploadObjectRequests.ts:14](https://github.com/autodesk-platform-services/aps-sdk-node/blob/e37e37c49eb213844e79f1c7dee5616930755060/oss/source/model/batchcompleteuploadObjectRequests.ts#L14)

The URL-encoded human friendly name of the object for which to complete an upload.

#### Memberof

BatchcompleteuploadObjectRequests

### size?

`optional` **size**: `number`
Defined in: [model/batchcompleteuploadObjectRequests.ts:26](https://github.com/autodesk-platform-services/aps-sdk-node/blob/e37e37c49eb213844e79f1c7dee5616930755060/oss/source/model/batchcompleteuploadObjectRequests.ts#L26)

The expected size of the object. If provided, OSS will check this against the object in S3 and return an error if the size does not match.

#### Memberof

BatchcompleteuploadObjectRequests

### uploadKey

**uploadKey**: `string`
Defined in: [model/batchcompleteuploadObjectRequests.ts:20](https://github.com/autodesk-platform-services/aps-sdk-node/blob/e37e37c49eb213844e79f1c7dee5616930755060/oss/source/model/batchcompleteuploadObjectRequests.ts#L20)

The ID uniquely identifying the upload session that was returned when you obtained the signed upload URL.

#### Memberof

BatchcompleteuploadObjectRequests

### x-ads-meta-Cache-Control?

`optional` **x-ads-meta-Cache-Control**: `string`
Defined in: [model/batchcompleteuploadObjectRequests.ts:56](https://github.com/autodesk-platform-services/aps-sdk-node/blob/e37e37c49eb213844e79f1c7dee5616930755060/oss/source/model/batchcompleteuploadObjectRequests.ts#L56)

The Cache-Control value for the uploaded object to record within OSS.

#### Memberof

BatchcompleteuploadObjectRequests

### x-ads-meta-Content-Disposition?

`optional` **x-ads-meta-Content-Disposition**: `string`
Defined in: [model/batchcompleteuploadObjectRequests.ts:44](https://github.com/autodesk-platform-services/aps-sdk-node/blob/e37e37c49eb213844e79f1c7dee5616930755060/oss/source/model/batchcompleteuploadObjectRequests.ts#L44)

The Content-Disposition value for the uploaded object to record within OSS.

#### Memberof

BatchcompleteuploadObjectRequests

### x-ads-meta-Content-Encoding?

`optional` **x-ads-meta-Content-Encoding**: `string`
Defined in: [model/batchcompleteuploadObjectRequests.ts:50](https://github.com/autodesk-platform-services/aps-sdk-node/blob/e37e37c49eb213844e79f1c7dee5616930755060/oss/source/model/batchcompleteuploadObjectRequests.ts#L50)

The Content-Encoding value for the uploaded object to record within OSS.

#### Memberof

BatchcompleteuploadObjectRequests

### x-ads-meta-Content-Type?

`optional` **x-ads-meta-Content-Type**: `string`
Defined in: [model/batchcompleteuploadObjectRequests.ts:38](https://github.com/autodesk-platform-services/aps-sdk-node/blob/e37e37c49eb213844e79f1c7dee5616930755060/oss/source/model/batchcompleteuploadObjectRequests.ts#L38)

The Content-Type value for the uploaded object to record within OSS.

#### Memberof

BatchcompleteuploadObjectRequests

### x-ads-user-defined-metadata?

`optional` **x-ads-user-defined-metadata**: `string`
Defined in: [model/batchcompleteuploadObjectRequests.ts:63](https://github.com/autodesk-platform-services/aps-sdk-node/blob/e37e37c49eb213844e79f1c7dee5616930755060/oss/source/model/batchcompleteuploadObjectRequests.ts#L63)

Custom metadata to be stored with the object, which can be retrieved later on download or when retrieving object details. Must be a JSON object that is less than 100 bytes.

#### Memberof

BatchcompleteuploadObjectRequests

---
원본 문서: https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-oss/interfaces/BatchcompleteuploadObjectRequests
