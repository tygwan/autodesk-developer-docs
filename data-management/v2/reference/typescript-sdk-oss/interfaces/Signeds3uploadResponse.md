---
title: "Signeds3uploadResponse"
url_path: reference/typescript-sdk-oss/interfaces/Signeds3uploadResponse
product: "Data Management API"
surface: "data-management-v2"
protocol: "TypeScript SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "typescript-sdk-oss"
---
# Interface: Signeds3uploadResponse

Defined in: [model/signeds3uploadResponse.ts:8](https://github.com/autodesk-platform-services/aps-sdk-node/blob/e37e37c49eb213844e79f1c7dee5616930755060/oss/source/model/signeds3uploadResponse.ts#L8)

The response payload to a Generate Signed S3 Upload URL operation.

## Export

Signeds3uploadResponse

## Properties

### uploadExpiration?

`optional` **uploadExpiration**: `string`
Defined in: [model/signeds3uploadResponse.ts:36](https://github.com/autodesk-platform-services/aps-sdk-node/blob/e37e37c49eb213844e79f1c7dee5616930755060/oss/source/model/signeds3uploadResponse.ts#L36)

The deadline to call [Complete Upload to S3 Signed URL](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-oss/classes/OssClient/#completesigneds3upload) for the object. If not completed by this time, all uploaded data for this session will be discarded.

#### Memberof

Signeds3uploadResponse

### uploadKey

**uploadKey**: `string`
Defined in: [model/signeds3uploadResponse.ts:18](https://github.com/autodesk-platform-services/aps-sdk-node/blob/e37e37c49eb213844e79f1c7dee5616930755060/oss/source/model/signeds3uploadResponse.ts#L18)

An ID that uniquely identifies the upload session. It allows OSS to differentiate between fresh upload attempts from attempts to resume uploading data for an active upload session, in case of network interruptions. You must provide this value when:
- Re-requesting chunk URLs for an active upload session.
- When calling the [Complete Upload to S3 Signed URL](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-oss/classes/OssClient/#completesigneds3upload) operation to end an active upload session.

#### Memberof

Signeds3uploadResponse

### urlExpiration?

`optional` **urlExpiration**: `string`
Defined in: [model/signeds3uploadResponse.ts:30](https://github.com/autodesk-platform-services/aps-sdk-node/blob/e37e37c49eb213844e79f1c7dee5616930755060/oss/source/model/signeds3uploadResponse.ts#L30)

The date and time, in the ISO 8601 format, indicating when the signed URLs will expire.

#### Memberof

Signeds3uploadResponse

### urls

**urls**: `string`[]
Defined in: [model/signeds3uploadResponse.ts:24](https://github.com/autodesk-platform-services/aps-sdk-node/blob/e37e37c49eb213844e79f1c7dee5616930755060/oss/source/model/signeds3uploadResponse.ts#L24)

An array of signed URLs. For a single-part upload, this will contain only one URL. For a multipart upload, there will be one for each chunk of a multipart upload; the index of the URL in the array corresponds to the part number of the chunk.

#### Memberof

Signeds3uploadResponse

---
원본 문서: https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-oss/interfaces/Signeds3uploadResponse
