---
title: "BatchcompleteuploadResponse"
url_path: reference/typescript-sdk-oss/interfaces/BatchcompleteuploadResponse
product: "Data Management API"
surface: "data-management-v2"
protocol: "TypeScript SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "typescript-sdk-oss"
---
# Interface: BatchcompleteuploadResponse

Defined in: [model/batchcompleteuploadResponse.ts:9](https://github.com/autodesk-platform-services/aps-sdk-node/blob/e37e37c49eb213844e79f1c7dee5616930755060/oss/source/model/batchcompleteuploadResponse.ts#L9)

The response to a Complete Batch Upload to S3 Signed URLs operation.

## Export

BatchcompleteuploadResponse

## Properties

### results

**results**: `object`
Defined in: [model/batchcompleteuploadResponse.ts:15](https://github.com/autodesk-platform-services/aps-sdk-node/blob/e37e37c49eb213844e79f1c7dee5616930755060/oss/source/model/batchcompleteuploadResponse.ts#L15)

A map of the returned results; each key in the map corresponds to an object key in the batch, and the value includes the results for that object.

#### Index Signature

[`key`: `string`]: [`BatchCompletedResults`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-oss/interfaces/BatchCompletedResults)

#### Memberof

BatchcompleteuploadResponse

---
원본 문서: https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-oss/interfaces/BatchcompleteuploadResponse
