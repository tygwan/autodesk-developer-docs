---
title: "JobPayloadMisc"
url_path: reference/typescript-sdk/interfaces/JobPayloadMisc
product: "Model Derivative API"
surface: "model-derivative-v2"
protocol: "TypeScript SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "typescript-sdk"
---
# Interface: JobPayloadMisc

A collection of miscellaneous parameters.

## Export

JobPayloadMisc

## Properties

### workflow?

`optional` **workflow**: `string`

The workflow ID of the webhook that listens to Model Derivative events. It must be 36 characters or less and can only contain alphanumeric characters (A-Z, 0-9) and hyphens (-).

#### Memberof

JobPayloadMisc

#### Defined in

[aps-sdk-node/modelderivative/source/model/jobPayloadMisc.ts:14](https://github.com/autodesk-platform-services/aps-sdk-node/blob/05570b8143138d5191b8069a72c0f08c25727474/modelderivative/source/model/jobPayloadMisc.ts#L14)

### workflowAttribute?

`optional` **workflowAttribute**: `object`

A user-defined JSON object, which you can use to set some custom workflow information. It must be less than 1KB and is ignored if `misc.workflow` is not specified.

#### Memberof

JobPayloadMisc

#### Defined in

[aps-sdk-node/modelderivative/source/model/jobPayloadMisc.ts:20](https://github.com/autodesk-platform-services/aps-sdk-node/blob/05570b8143138d5191b8069a72c0f08c25727474/modelderivative/source/model/jobPayloadMisc.ts#L20)

---
원본 문서: https://aps.autodesk.com/en/docs/model-derivative/v2/reference/typescript-sdk/interfaces/JobPayloadMisc
