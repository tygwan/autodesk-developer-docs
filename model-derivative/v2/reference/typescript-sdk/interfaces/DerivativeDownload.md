---
title: "DerivativeDownload"
url_path: reference/typescript-sdk/interfaces/DerivativeDownload
product: "Model Derivative API"
surface: "model-derivative-v2"
protocol: "TypeScript SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "typescript-sdk"
---
# Interface: DerivativeDownload

An object that represents the successful response of a Fetch Derivative Download operation.

## Export

DerivativeDownload

## Properties

### content-type?

`optional` **content-type**: `string`

The content type of the derivative/file.

#### Memberof

DerivativeDownload

#### Defined in

[aps-sdk-node/modelderivative/source/model/derivativeDownload.ts:32](https://github.com/autodesk-platform-services/aps-sdk-node/blob/05570b8143138d5191b8069a72c0f08c25727474/modelderivative/source/model/derivativeDownload.ts#L32)

### etag?

`optional` **etag**: `string`

The calculated ETag hash of the derivative/file, if available.

#### Memberof

DerivativeDownload

#### Defined in

[aps-sdk-node/modelderivative/source/model/derivativeDownload.ts:14](https://github.com/autodesk-platform-services/aps-sdk-node/blob/05570b8143138d5191b8069a72c0f08c25727474/modelderivative/source/model/derivativeDownload.ts#L14)

### expiration?

`optional` **expiration**: `number`

The 13-digit epoch time stamp indicating the time the signed cookies expire.

#### Memberof

DerivativeDownload

#### Defined in

[aps-sdk-node/modelderivative/source/model/derivativeDownload.ts:38](https://github.com/autodesk-platform-services/aps-sdk-node/blob/05570b8143138d5191b8069a72c0f08c25727474/modelderivative/source/model/derivativeDownload.ts#L38)

### size?

`optional` **size**: `number`

The size of the derivative/file, in bytes.

#### Memberof

DerivativeDownload

#### Defined in

[aps-sdk-node/modelderivative/source/model/derivativeDownload.ts:20](https://github.com/autodesk-platform-services/aps-sdk-node/blob/05570b8143138d5191b8069a72c0f08c25727474/modelderivative/source/model/derivativeDownload.ts#L20)

### url?

`optional` **url**: `string`

The download URL.

#### Memberof

DerivativeDownload

#### Defined in

[aps-sdk-node/modelderivative/source/model/derivativeDownload.ts:26](https://github.com/autodesk-platform-services/aps-sdk-node/blob/05570b8143138d5191b8069a72c0f08c25727474/modelderivative/source/model/derivativeDownload.ts#L26)

---
원본 문서: https://aps.autodesk.com/en/docs/model-derivative/v2/reference/typescript-sdk/interfaces/DerivativeDownload
