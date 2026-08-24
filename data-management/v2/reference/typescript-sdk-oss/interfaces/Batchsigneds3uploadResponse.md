---
title: "Batchsigneds3uploadResponse"
url_path: reference/typescript-sdk-oss/interfaces/Batchsigneds3uploadResponse
product: "Data Management API"
surface: "data-management-v2"
protocol: "TypeScript SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "typescript-sdk-oss"
---
# Interface: Batchsigneds3uploadResponse

Defined in: [model/batchsigneds3uploadResponse.ts:9](https://github.com/autodesk-platform-services/aps-sdk-node/blob/e37e37c49eb213844e79f1c7dee5616930755060/oss/source/model/batchsigneds3uploadResponse.ts#L9)

The response to a Batch Generate Signed S3 Upload URLs operation.

## Export

Batchsigneds3uploadResponse

## Properties

### results

**results**: `object`
Defined in: [model/batchsigneds3uploadResponse.ts:15](https://github.com/autodesk-platform-services/aps-sdk-node/blob/e37e37c49eb213844e79f1c7dee5616930755060/oss/source/model/batchsigneds3uploadResponse.ts#L15)

A map of the returned results; each key in the map corresponds to an object key in the batch, and the value includes the results for that object.

#### Index Signature

[`key`: `string`]: [`Batchsigneds3uploadResponseResultsValue`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-oss/interfaces/Batchsigneds3uploadResponseResultsValue)

#### Memberof

Batchsigneds3uploadResponse

---
원본 문서: https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-oss/interfaces/Batchsigneds3uploadResponse
