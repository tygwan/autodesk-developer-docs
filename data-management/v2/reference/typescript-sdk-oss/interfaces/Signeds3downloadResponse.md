---
title: "Signeds3downloadResponse"
url_path: reference/typescript-sdk-oss/interfaces/Signeds3downloadResponse
product: "Data Management API"
surface: "data-management-v2"
protocol: "TypeScript SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "typescript-sdk-oss"
---
# Interface: Signeds3downloadResponse

Defined in: [model/signeds3downloadResponse.ts:9](https://github.com/autodesk-platform-services/aps-sdk-node/blob/e37e37c49eb213844e79f1c7dee5616930755060/oss/source/model/signeds3downloadResponse.ts#L9)

An object representing the response payload on successful execution of a Generate Signed S3 Download URL operation.

## Export

Signeds3downloadResponse

## Properties

### params

**params**: `object`
Defined in: [model/signeds3downloadResponse.ts:38](https://github.com/autodesk-platform-services/aps-sdk-node/blob/e37e37c49eb213844e79f1c7dee5616930755060/oss/source/model/signeds3downloadResponse.ts#L38)

The values that were requested for the following parameters when requesting the S3 signed URL.
- `Content-Type`
- `Content-Disposition`
- `Cache-Control`.

#### Memberof

Signeds3downloadResponse

### sha1?

`optional` **sha1**: `string`
Defined in: [model/signeds3downloadResponse.ts:50](https://github.com/autodesk-platform-services/aps-sdk-node/blob/e37e37c49eb213844e79f1c7dee5616930755060/oss/source/model/signeds3downloadResponse.ts#L50)

A hash value computed from the data of the object, if available.

#### Memberof

Signeds3downloadResponse

### size

**size**: `number`
Defined in: [model/signeds3downloadResponse.ts:44](https://github.com/autodesk-platform-services/aps-sdk-node/blob/e37e37c49eb213844e79f1c7dee5616930755060/oss/source/model/signeds3downloadResponse.ts#L44)

The total amount of storage space occupied by the object, in bytes.

#### Memberof

Signeds3downloadResponse

### status

**status**: [`DownloadStatus`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-oss/enumerations/DownloadStatus)
Defined in: [model/signeds3downloadResponse.ts:15](https://github.com/autodesk-platform-services/aps-sdk-node/blob/e37e37c49eb213844e79f1c7dee5616930755060/oss/source/model/signeds3downloadResponse.ts#L15)

#### Memberof

Signeds3downloadResponse

### url?

`optional` **url**: `string`
Defined in: [model/signeds3downloadResponse.ts:21](https://github.com/autodesk-platform-services/aps-sdk-node/blob/e37e37c49eb213844e79f1c7dee5616930755060/oss/source/model/signeds3downloadResponse.ts#L21)

A S3 signed URL with which to download the object. This attribute is returned when `status` is `complete` or `fallback`; in the latter case, this will return an OSS signed URL, not an S3 signed URL.

#### Memberof

Signeds3downloadResponse

### urls?

`optional` **urls**: `object`
Defined in: [model/signeds3downloadResponse.ts:27](https://github.com/autodesk-platform-services/aps-sdk-node/blob/e37e37c49eb213844e79f1c7dee5616930755060/oss/source/model/signeds3downloadResponse.ts#L27)

A map of S3 signed URLs, one for each chunk of an unmerged resumable upload. This attribute is returned when `status` is `chunked`. The key of each entry is the byte range of the total file which the chunk comprises.

#### Memberof

Signeds3downloadResponse

---
원본 문서: https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-oss/interfaces/Signeds3downloadResponse
