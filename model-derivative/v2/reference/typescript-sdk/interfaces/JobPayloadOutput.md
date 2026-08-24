---
title: "JobPayloadOutput"
url_path: reference/typescript-sdk/interfaces/JobPayloadOutput
product: "Model Derivative API"
surface: "model-derivative-v2"
protocol: "TypeScript SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "typescript-sdk"
---
# Interface: JobPayloadOutput

An object describing the attributes of the requested derivatives.

## Export

JobPayloadOutput

## Properties

### destination?

`optional` **destination**: [`JobPayloadOutputDestination`](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/typescript-sdk/interfaces/JobPayloadOutputDestination)

#### Memberof

JobPayloadOutput

#### Defined in

[aps-sdk-node/modelderivative/source/model/jobPayloadOutput.ts:16](https://github.com/autodesk-platform-services/aps-sdk-node/blob/05570b8143138d5191b8069a72c0f08c25727474/modelderivative/source/model/jobPayloadOutput.ts#L16)

### formats

**formats**: [`JobPayloadFormat`](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/typescript-sdk/interfaces/JobPayloadFormat)[]

An array of objects, where each object represents a requested derivative format. You can request multiple derivatives.

#### Memberof

JobPayloadOutput

#### Defined in

[aps-sdk-node/modelderivative/source/model/jobPayloadOutput.ts:22](https://github.com/autodesk-platform-services/aps-sdk-node/blob/05570b8143138d5191b8069a72c0f08c25727474/modelderivative/source/model/jobPayloadOutput.ts#L22)

---
원본 문서: https://aps.autodesk.com/en/docs/model-derivative/v2/reference/typescript-sdk/interfaces/JobPayloadOutput
