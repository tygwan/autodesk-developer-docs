---
title: "JobPayloadFormatSVF2AdvancedNWD"
url_path: reference/typescript-sdk/interfaces/JobPayloadFormatSVF2AdvancedNWD
product: "Model Derivative API"
surface: "model-derivative-v2"
protocol: "TypeScript SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "typescript-sdk"
---
# Interface: JobPayloadFormatSVF2AdvancedNWD

Advanced options for NWD inputs.

## Export

JobPayloadFormatSVF2AdvancedNWD

## Properties

### autodeskMaterialProperties?

`optional` **autodeskMaterialProperties**: `boolean`

Specifies how to handle Autodesk material properties. Applicable only when the source design type is Navisworks.
- `true`: Extract properties for Autodesk materials.
- `false`: (Default) Do not extract properties for Autodesk materials.

#### Memberof

JobPayloadFormatSVF2AdvancedNWD

#### Defined in

[aps-sdk-node/modelderivative/source/model/jobPayloadFormatSVF2AdvancedNWD.ts:38](https://github.com/autodesk-platform-services/aps-sdk-node/blob/05570b8143138d5191b8069a72c0f08c25727474/modelderivative/source/model/jobPayloadFormatSVF2AdvancedNWD.ts#L38)

### basicMaterialProperties?

`optional` **basicMaterialProperties**: `boolean`

Specifies whether basic material properties must be extracted or not. Applicable only when the source design type is Navisworks.
- `true`: Extract properties for basic materials.
- `false`: (Default) Do not extract properties for basic materials.

#### Memberof

JobPayloadFormatSVF2AdvancedNWD

#### Defined in

[aps-sdk-node/modelderivative/source/model/jobPayloadFormatSVF2AdvancedNWD.ts:28](https://github.com/autodesk-platform-services/aps-sdk-node/blob/05570b8143138d5191b8069a72c0f08c25727474/modelderivative/source/model/jobPayloadFormatSVF2AdvancedNWD.ts#L28)

### hiddenObjects?

`optional` **hiddenObjects**: `boolean`

Specifies whether hidden objects must be extracted or not. Applicable only when the source design type is Navisworks.
- `true`: Extract hidden objects from the input file.
- `false`: (Default) Do not extract hidden objects from the input file.

#### Memberof

JobPayloadFormatSVF2AdvancedNWD

#### Defined in

[aps-sdk-node/modelderivative/source/model/jobPayloadFormatSVF2AdvancedNWD.ts:18](https://github.com/autodesk-platform-services/aps-sdk-node/blob/05570b8143138d5191b8069a72c0f08c25727474/modelderivative/source/model/jobPayloadFormatSVF2AdvancedNWD.ts#L18)

### timelinerProperties?

`optional` **timelinerProperties**: `boolean`

Specifies whether timeliner properties must be extracted or not. Applicable only when the source design type is Navisworks.
- `true`: Extract timeliner properties.
- `false`: (Default) Do not extract timeliner properties.

#### Memberof

JobPayloadFormatSVF2AdvancedNWD

#### Defined in

[aps-sdk-node/modelderivative/source/model/jobPayloadFormatSVF2AdvancedNWD.ts:48](https://github.com/autodesk-platform-services/aps-sdk-node/blob/05570b8143138d5191b8069a72c0f08c25727474/modelderivative/source/model/jobPayloadFormatSVF2AdvancedNWD.ts#L48)

---
원본 문서: https://aps.autodesk.com/en/docs/model-derivative/v2/reference/typescript-sdk/interfaces/JobPayloadFormatSVF2AdvancedNWD
