---
title: "DownloadResults"
url_path: reference/typescript-sdk-oss/interfaces/DownloadResults
product: "Data Management API"
surface: "data-management-v2"
protocol: "TypeScript SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "typescript-sdk-oss"
---
# Interface: DownloadResults

Defined in: [model/downloadResults.ts:12](https://github.com/autodesk-platform-services/aps-sdk-node/blob/e37e37c49eb213844e79f1c7dee5616930755060/oss/source/model/downloadResults.ts#L12)

An object that represents the response to a Batch Generate Signed S3 Download URLs operation.

**Note**: `objectKeyN` is a placeholder for the first object key for which the client requested a download signed URL. The attributes within contain the success data / error information for the request for that object. `results` will contain one such attribute for each requested object in the batch.

## Export

DownloadResults

## Properties

### params?

`optional` **params**: `object`
Defined in: [model/downloadResults.ts:41](https://github.com/autodesk-platform-services/aps-sdk-node/blob/e37e37c49eb213844e79f1c7dee5616930755060/oss/source/model/downloadResults.ts#L41)

The values that were requested for the following parameters when requesting the S3 signed URL.
- `Content-Type`
- `Content-Disposition`
- `Cache-Control`.

#### Memberof

DownloadResults

### sha1?

`optional` **sha1**: `string`
Defined in: [model/downloadResults.ts:53](https://github.com/autodesk-platform-services/aps-sdk-node/blob/e37e37c49eb213844e79f1c7dee5616930755060/oss/source/model/downloadResults.ts#L53)

A hash value computed from the data of the object, if available.

#### Memberof

DownloadResults

### size?

`optional` **size**: `number`
Defined in: [model/downloadResults.ts:47](https://github.com/autodesk-platform-services/aps-sdk-node/blob/e37e37c49eb213844e79f1c7dee5616930755060/oss/source/model/downloadResults.ts#L47)

The total amount of storage space occupied by the object, in bytes.

#### Memberof

DownloadResults

### status?

`optional` **status**: [`DownloadStatus`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-oss/enumerations/DownloadStatus)
Defined in: [model/downloadResults.ts:18](https://github.com/autodesk-platform-services/aps-sdk-node/blob/e37e37c49eb213844e79f1c7dee5616930755060/oss/source/model/downloadResults.ts#L18)

#### Memberof

DownloadResults

### url?

`optional` **url**: `string`
Defined in: [model/downloadResults.ts:24](https://github.com/autodesk-platform-services/aps-sdk-node/blob/e37e37c49eb213844e79f1c7dee5616930755060/oss/source/model/downloadResults.ts#L24)

A S3 signed URL with which to download the object. This attribute is returned when `status` is `complete` or `fallback`; in the latter case, this will return an OSS signed URL, not an S3 signed URL.

#### Memberof

DownloadResults

### urls?

`optional` **urls**: `object`
Defined in: [model/downloadResults.ts:30](https://github.com/autodesk-platform-services/aps-sdk-node/blob/e37e37c49eb213844e79f1c7dee5616930755060/oss/source/model/downloadResults.ts#L30)

A map of S3 signed URLs, one for each chunk of an unmerged resumable upload. This attribute is returned when `status` is `chunked`. The key of each entry is the byte range of the total file which the chunk comprises.

#### Memberof

DownloadResults

---
원본 문서: https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-oss/interfaces/DownloadResults
