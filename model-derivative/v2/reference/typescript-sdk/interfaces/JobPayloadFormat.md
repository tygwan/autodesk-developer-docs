---
title: "JobPayloadFormat"
url_path: reference/typescript-sdk/interfaces/JobPayloadFormat
product: "Model Derivative API"
surface: "model-derivative-v2"
protocol: "TypeScript SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "typescript-sdk"
---
# Interface: JobPayloadFormat

Options for the output. The available options depend on the output type.

## Export

JobPayloadFormat

## Properties

### advanced?

`optional` **advanced**: [`JobPayloadFormatAdvancedIFC`](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/typescript-sdk/interfaces/JobPayloadFormatAdvancedIFC)

#### Memberof

JobPayloadFormat

#### Defined in

[aps-sdk-node/modelderivative/source/model/jobPayloadFormat.ts:38](https://github.com/autodesk-platform-services/aps-sdk-node/blob/05570b8143138d5191b8069a72c0f08c25727474/modelderivative/source/model/jobPayloadFormat.ts#L38)

### type?

`optional` **type**: [`OutputType`](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/typescript-sdk/enumerations/OutputType)

#### Memberof

JobPayloadFormat

#### Defined in

[aps-sdk-node/modelderivative/source/model/jobPayloadFormat.ts:32](https://github.com/autodesk-platform-services/aps-sdk-node/blob/05570b8143138d5191b8069a72c0f08c25727474/modelderivative/source/model/jobPayloadFormat.ts#L32)

### views?

`optional` **views**: [`View`](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/typescript-sdk/enumerations/View)[]

Specifies the type of view to generate. Possible values are `2d` and `3d`.

#### Memberof

JobPayloadFormat

#### Defined in

[aps-sdk-node/modelderivative/source/model/jobPayloadFormat.ts:26](https://github.com/autodesk-platform-services/aps-sdk-node/blob/05570b8143138d5191b8069a72c0f08c25727474/modelderivative/source/model/jobPayloadFormat.ts#L26)

---
원본 문서: https://aps.autodesk.com/en/docs/model-derivative/v2/reference/typescript-sdk/interfaces/JobPayloadFormat
