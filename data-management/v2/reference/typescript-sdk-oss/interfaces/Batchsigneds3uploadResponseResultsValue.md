---
title: "Batchsigneds3uploadResponseResultsValue"
url_path: reference/typescript-sdk-oss/interfaces/Batchsigneds3uploadResponseResultsValue
product: "Data Management API"
surface: "data-management-v2"
protocol: "TypeScript SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "typescript-sdk-oss"
---
# Interface: Batchsigneds3uploadResponseResultsValue

Defined in: [model/batchsigneds3uploadResponseResultsValue.ts:8](https://github.com/autodesk-platform-services/aps-sdk-node/blob/e37e37c49eb213844e79f1c7dee5616930755060/oss/source/model/batchsigneds3uploadResponseResultsValue.ts#L8)

## Export

Batchsigneds3uploadResponseResultsValue

## Properties

### reason?

`optional` **reason**: `string`
Defined in: [model/batchsigneds3uploadResponseResultsValue.ts:14](https://github.com/autodesk-platform-services/aps-sdk-node/blob/e37e37c49eb213844e79f1c7dee5616930755060/oss/source/model/batchsigneds3uploadResponseResultsValue.ts#L14)

Describes an error that was encountered. Returned only if the signed URL request for that object failed.

#### Memberof

Batchsigneds3uploadResponseResultsValue

### status?

`optional` **status**: `string`
Defined in: [model/batchsigneds3uploadResponseResultsValue.ts:20](https://github.com/autodesk-platform-services/aps-sdk-node/blob/e37e37c49eb213844e79f1c7dee5616930755060/oss/source/model/batchsigneds3uploadResponseResultsValue.ts#L20)

Returned only if the signed URL request for that object failed.

#### Memberof

Batchsigneds3uploadResponseResultsValue

### uploadExpiration?

`optional` **uploadExpiration**: `string`
Defined in: [model/batchsigneds3uploadResponseResultsValue.ts:26](https://github.com/autodesk-platform-services/aps-sdk-node/blob/e37e37c49eb213844e79f1c7dee5616930755060/oss/source/model/batchsigneds3uploadResponseResultsValue.ts#L26)

The deadline to call [Complete Batch Upload to S3 Signed URL](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-oss/classes/OssClient/#completesigneds3upload) for the object. If not completed by this time, all uploaded data for this session will be discarded.

#### Memberof

Batchsigneds3uploadResponseResultsValue

### uploadKey

**uploadKey**: `string`
Defined in: [model/batchsigneds3uploadResponseResultsValue.ts:36](https://github.com/autodesk-platform-services/aps-sdk-node/blob/e37e37c49eb213844e79f1c7dee5616930755060/oss/source/model/batchsigneds3uploadResponseResultsValue.ts#L36)

An ID that uniquely identifies the upload session. It allows OSS to differentiate between fresh upload attempts from attempts to resume uploading data for an active upload session, in case of network interruptions. You must provide this value when:
- Re-requesting chunk URLs for an active upload session.
- When calling the [Complete Batch Upload to S3 Signed URL](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-oss/classes/OssClient/#completesigneds3upload) operation to end an active upload session.

#### Memberof

Batchsigneds3uploadResponseResultsValue

### urlExpiration?

`optional` **urlExpiration**: `string`
Defined in: [model/batchsigneds3uploadResponseResultsValue.ts:42](https://github.com/autodesk-platform-services/aps-sdk-node/blob/e37e37c49eb213844e79f1c7dee5616930755060/oss/source/model/batchsigneds3uploadResponseResultsValue.ts#L42)

The date and time, in the ISO 8601 format, indicating when the signed URLs will expire.

#### Memberof

Batchsigneds3uploadResponseResultsValue

### urls

**urls**: `string`[]
Defined in: [model/batchsigneds3uploadResponseResultsValue.ts:48](https://github.com/autodesk-platform-services/aps-sdk-node/blob/e37e37c49eb213844e79f1c7dee5616930755060/oss/source/model/batchsigneds3uploadResponseResultsValue.ts#L48)

An array of signed URLs. For a single-part upload, this will only include a single URL. For a multipart upload, there will be one for each chunk of a multipart upload; the index of the URL in the array corresponds to the part number of the chunk.

#### Memberof

Batchsigneds3uploadResponseResultsValue

---
원본 문서: https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-oss/interfaces/Batchsigneds3uploadResponseResultsValue
