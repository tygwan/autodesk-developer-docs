---
title: "JobPayloadOutputDestination"
url_path: reference/typescript-sdk/interfaces/JobPayloadOutputDestination
product: "Model Derivative API"
surface: "model-derivative-v2"
protocol: "TypeScript SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "typescript-sdk"
---
# Interface: JobPayloadOutputDestination

Specifies where to store generated derivatives.

## Export

JobPayloadOutputDestination

## Properties

### region?

`optional` **region**: `string`

Specifies where to store generated derivatives. Possible values are:
- `US`: (Default) Store derivatives at a data center for the United States of America.
- `EMEA`: Store derivatives at a data center for the European Union.
- `APAC`: (Beta) Store derivatives at a data center for the Australia region.

**Note**: Beta features are subject to change. Please avoid using them in production environments.

#### Memberof

JobPayloadOutputDestination

#### Defined in

[aps-sdk-node/modelderivative/source/model/jobPayloadOutputDestination.ts:21](https://github.com/autodesk-platform-services/aps-sdk-node/blob/05570b8143138d5191b8069a72c0f08c25727474/modelderivative/source/model/jobPayloadOutputDestination.ts#L21)

---
원본 문서: https://aps.autodesk.com/en/docs/model-derivative/v2/reference/typescript-sdk/interfaces/JobPayloadOutputDestination
