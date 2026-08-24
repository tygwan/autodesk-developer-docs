---
title: "Batchsigneds3downloadObjectRequests"
url_path: reference/typescript-sdk-oss/interfaces/Batchsigneds3downloadObjectRequests
product: "Data Management API"
surface: "data-management-v2"
protocol: "TypeScript SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "typescript-sdk-oss"
---
# Interface: Batchsigneds3downloadObjectRequests

Defined in: [model/batchsigneds3downloadObjectRequests.ts:8](https://github.com/autodesk-platform-services/aps-sdk-node/blob/e37e37c49eb213844e79f1c7dee5616930755060/oss/source/model/batchsigneds3downloadObjectRequests.ts#L8)

## Export

Batchsigneds3downloadObjectRequests

## Properties

### If-Modified-Since?

`optional` **If-Modified-Since**: `string`
Defined in: [model/batchsigneds3downloadObjectRequests.ts:44](https://github.com/autodesk-platform-services/aps-sdk-node/blob/e37e37c49eb213844e79f1c7dee5616930755060/oss/source/model/batchsigneds3downloadObjectRequests.ts#L44)

A timestamp in the HTTP date format (Mon, DD Month YYYY HH:MM:SS GMT). A signed URL is returned only if the object has been modified since the specified timestamp. If not, a 304 (Not Modified) HTTP status is returned.

#### Memberof

Batchsigneds3downloadObjectRequests

### If-None-Match?

`optional` **If-None-Match**: `string`
Defined in: [model/batchsigneds3downloadObjectRequests.ts:38](https://github.com/autodesk-platform-services/aps-sdk-node/blob/e37e37c49eb213844e79f1c7dee5616930755060/oss/source/model/batchsigneds3downloadObjectRequests.ts#L38)

The last known ETag value of the object. OSS returns the signed URL only if the `If-None-Match` parameter differs from the ETag value of the object on S3. If not, it returns a 304 “Not Modified” HTTP status.

#### Memberof

Batchsigneds3downloadObjectRequests

### objectKey?

`optional` **objectKey**: `string`
Defined in: [model/batchsigneds3downloadObjectRequests.ts:14](https://github.com/autodesk-platform-services/aps-sdk-node/blob/e37e37c49eb213844e79f1c7dee5616930755060/oss/source/model/batchsigneds3downloadObjectRequests.ts#L14)

The URL-encoded human friendly name of the object to download.

#### Memberof

Batchsigneds3downloadObjectRequests

### response-cache-control?

`optional` **response-cache-control**: `string`
Defined in: [model/batchsigneds3downloadObjectRequests.ts:32](https://github.com/autodesk-platform-services/aps-sdk-node/blob/e37e37c49eb213844e79f1c7dee5616930755060/oss/source/model/batchsigneds3downloadObjectRequests.ts#L32)

The value of the Cache-Control header you want to receive when you download the object using the signed URL. If you do not specify a value, the Cache-Control header defaults to the value stored with OSS.

#### Memberof

Batchsigneds3downloadObjectRequests

### response-content-disposition?

`optional` **response-content-disposition**: `string`
Defined in: [model/batchsigneds3downloadObjectRequests.ts:26](https://github.com/autodesk-platform-services/aps-sdk-node/blob/e37e37c49eb213844e79f1c7dee5616930755060/oss/source/model/batchsigneds3downloadObjectRequests.ts#L26)

The value of the Content-Disposition header you want to receive when you download the object using the signed URL. If you do not specify a value, the Content-Disposition header defaults to the value stored with OSS.

#### Memberof

Batchsigneds3downloadObjectRequests

### response-content-type?

`optional` **response-content-type**: `string`
Defined in: [model/batchsigneds3downloadObjectRequests.ts:20](https://github.com/autodesk-platform-services/aps-sdk-node/blob/e37e37c49eb213844e79f1c7dee5616930755060/oss/source/model/batchsigneds3downloadObjectRequests.ts#L20)

The value of the Content-Type header you want to receive when you download the object using the signed URL. If you do not specify a value, the Content-Type header defaults to the value stored with OSS.

#### Memberof

Batchsigneds3downloadObjectRequests

---
원본 문서: https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-oss/interfaces/Batchsigneds3downloadObjectRequests
