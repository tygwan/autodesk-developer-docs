---
title: "BatchCompletedResults"
url_path: reference/typescript-sdk-oss/interfaces/BatchCompletedResults
product: "Data Management API"
surface: "data-management-v2"
protocol: "TypeScript SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "typescript-sdk-oss"
---
# Interface: BatchCompletedResults

Defined in: [model/batchCompletedResults.ts:9](https://github.com/autodesk-platform-services/aps-sdk-node/blob/e37e37c49eb213844e79f1c7dee5616930755060/oss/source/model/batchCompletedResults.ts#L9)

The results returned by the Complete Batch Upload to S3 Signed URLs operation.

## Export

BatchCompletedResults

## Properties

### bucketKey?

`optional` **bucketKey**: `string`
Defined in: [model/batchCompletedResults.ts:22](https://github.com/autodesk-platform-services/aps-sdk-node/blob/e37e37c49eb213844e79f1c7dee5616930755060/oss/source/model/batchCompletedResults.ts#L22)

The bucket key of the bucket the object was uploaded to.

#### Memberof

BatchCompletedResults

### cacheControl?

`optional` **cacheControl**: `string`
Defined in: [model/batchCompletedResults.ts:64](https://github.com/autodesk-platform-services/aps-sdk-node/blob/e37e37c49eb213844e79f1c7dee5616930755060/oss/source/model/batchCompletedResults.ts#L64)

The Cache-Control value for the uploaded object as recorded within OSS. This attribute is returned only if it was specified when the object was uploaded.

#### Memberof

BatchCompletedResults

### contentDisposition?

`optional` **contentDisposition**: `string`
Defined in: [model/batchCompletedResults.ts:52](https://github.com/autodesk-platform-services/aps-sdk-node/blob/e37e37c49eb213844e79f1c7dee5616930755060/oss/source/model/batchCompletedResults.ts#L52)

The Content-Disposition value for the uploaded object as recorded within OSS. This attribute is returned only if it was specified when the object was uploaded.

#### Memberof

BatchCompletedResults

### contentEncoding?

`optional` **contentEncoding**: `string`
Defined in: [model/batchCompletedResults.ts:58](https://github.com/autodesk-platform-services/aps-sdk-node/blob/e37e37c49eb213844e79f1c7dee5616930755060/oss/source/model/batchCompletedResults.ts#L58)

The Content-Encoding value for the uploaded object as recorded within OSS. This attribute is returned only if it was specified when the object was uploaded.

#### Memberof

BatchCompletedResults

### contentType?

`optional` **contentType**: `string`
Defined in: [model/batchCompletedResults.ts:46](https://github.com/autodesk-platform-services/aps-sdk-node/blob/e37e37c49eb213844e79f1c7dee5616930755060/oss/source/model/batchCompletedResults.ts#L46)

The format of the data stored within the object, expressed as a MIME type. This attribute is returned only if it was specified when the object was uploaded.

#### Memberof

BatchCompletedResults

### objectId?

`optional` **objectId**: `string`
Defined in: [model/batchCompletedResults.ts:34](https://github.com/autodesk-platform-services/aps-sdk-node/blob/e37e37c49eb213844e79f1c7dee5616930755060/oss/source/model/batchCompletedResults.ts#L34)

An identifier (URN) that uniquely and persistently identifies the object.

#### Memberof

BatchCompletedResults

### objectKey?

`optional` **objectKey**: `string`
Defined in: [model/batchCompletedResults.ts:28](https://github.com/autodesk-platform-services/aps-sdk-node/blob/e37e37c49eb213844e79f1c7dee5616930755060/oss/source/model/batchCompletedResults.ts#L28)

The URL-encoded human friendly name of the object.

#### Memberof

BatchCompletedResults

### parts?

`optional` **parts**: [`BatchCompletedResultsParts`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-oss/interfaces/BatchCompletedResultsParts)[]
Defined in: [model/batchCompletedResults.ts:70](https://github.com/autodesk-platform-services/aps-sdk-node/blob/e37e37c49eb213844e79f1c7dee5616930755060/oss/source/model/batchCompletedResults.ts#L70)

An array containing the status of each part, indicating any issues with eTag or size mismatch issues.

#### Memberof

BatchCompletedResults

### reason?

`optional` **reason**: `string`
Defined in: [model/batchCompletedResults.ts:76](https://github.com/autodesk-platform-services/aps-sdk-node/blob/e37e37c49eb213844e79f1c7dee5616930755060/oss/source/model/batchCompletedResults.ts#L76)

The reason for the failure, if the status is `error`.

#### Memberof

BatchCompletedResults

### size?

`optional` **size**: `number`
Defined in: [model/batchCompletedResults.ts:40](https://github.com/autodesk-platform-services/aps-sdk-node/blob/e37e37c49eb213844e79f1c7dee5616930755060/oss/source/model/batchCompletedResults.ts#L40)

The total amount of storage space occupied by the object, in bytes.

#### Memberof

BatchCompletedResults

### status?

`optional` **status**: `string`
Defined in: [model/batchCompletedResults.ts:16](https://github.com/autodesk-platform-services/aps-sdk-node/blob/e37e37c49eb213844e79f1c7dee5616930755060/oss/source/model/batchCompletedResults.ts#L16)

If this attribute is not returned, completion has succeeded. If the value of this attribute is “error”, completion failed.’

#### Memberof

BatchCompletedResults

---
원본 문서: https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-oss/interfaces/BatchCompletedResults
