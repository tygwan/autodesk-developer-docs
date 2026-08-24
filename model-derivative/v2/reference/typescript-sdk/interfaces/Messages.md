---
title: "Messages"
url_path: reference/typescript-sdk/interfaces/Messages
product: "Model Derivative API"
surface: "model-derivative-v2"
protocol: "TypeScript SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "typescript-sdk"
---
# Interface: Messages

An array of objects where each object represents a message logged to the manifest during translation. For example, error messages and warning messages.

## Export

Messages

## Properties

### code?

`optional` **code**: `string`

The ID of the message. For example, the error code reported by an error message.

#### Memberof

Messages

#### Defined in

[aps-sdk-node/modelderivative/source/model/messages.ts:20](https://github.com/autodesk-platform-services/aps-sdk-node/blob/05570b8143138d5191b8069a72c0f08c25727474/modelderivative/source/model/messages.ts#L20)

### message?

`optional` **message**: `object`

A human-readable explanation of the event being reported. Can be a string or an array of string.

#### Memberof

Messages

#### Defined in

[aps-sdk-node/modelderivative/source/model/messages.ts:26](https://github.com/autodesk-platform-services/aps-sdk-node/blob/05570b8143138d5191b8069a72c0f08c25727474/modelderivative/source/model/messages.ts#L26)

### type?

`optional` **type**: `string`

Indicates the type of the message. For example, warning indicates a warning message and error indicates an error message.

#### Memberof

Messages

#### Defined in

[aps-sdk-node/modelderivative/source/model/messages.ts:14](https://github.com/autodesk-platform-services/aps-sdk-node/blob/05570b8143138d5191b8069a72c0f08c25727474/modelderivative/source/model/messages.ts#L14)

---
원본 문서: https://aps.autodesk.com/en/docs/model-derivative/v2/reference/typescript-sdk/interfaces/Messages
