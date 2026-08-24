---
title: "JobPayloadFormatSVFAdvancedNWD"
url_path: reference/typescript-sdk/interfaces/JobPayloadFormatSVFAdvancedNWD
product: "Model Derivative API"
surface: "model-derivative-v2"
protocol: "TypeScript SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "typescript-sdk"
---
# Interface: JobPayloadFormatSVFAdvancedNWD

Advanced options for NWD inputs.

## Export

JobPayloadFormatSVFAdvancedNWD

## Properties

### autodeskMaterialProperties?

`optional` **autodeskMaterialProperties**: `boolean`

Specifies how to handle Autodesk material properties. Applicable only when the source design type is Navisworks.
- `true`: Extract properties for Autodesk materials.
- `false`: (Default) Do not extract properties for Autodesk materials.

#### Memberof

JobPayloadFormatSVFAdvancedNWD

#### Defined in

[aps-sdk-node/modelderivative/source/model/jobPayloadFormatSVFAdvancedNWD.ts:38](https://github.com/autodesk-platform-services/aps-sdk-node/blob/05570b8143138d5191b8069a72c0f08c25727474/modelderivative/source/model/jobPayloadFormatSVFAdvancedNWD.ts#L38)

### basicMaterialProperties?

`optional` **basicMaterialProperties**: `boolean`

Specifies whether basic material properties must be extracted or not. Applicable only when the source design type is Navisworks.
- `true`: Extract properties for basic materials.
- `false`: (Default) Do not extract properties for basic materials.

#### Memberof

JobPayloadFormatSVFAdvancedNWD

#### Defined in

[aps-sdk-node/modelderivative/source/model/jobPayloadFormatSVFAdvancedNWD.ts:28](https://github.com/autodesk-platform-services/aps-sdk-node/blob/05570b8143138d5191b8069a72c0f08c25727474/modelderivative/source/model/jobPayloadFormatSVFAdvancedNWD.ts#L28)

### hiddenObjects?

`optional` **hiddenObjects**: `boolean`

Specifies whether hidden objects must be extracted or not. Applicable only when the source design type is Navisworks.
- `true`: Extract hidden objects from the input file.
- `false`: (Default) Do not extract hidden objects from the input file.

#### Memberof

JobPayloadFormatSVFAdvancedNWD

#### Defined in

[aps-sdk-node/modelderivative/source/model/jobPayloadFormatSVFAdvancedNWD.ts:18](https://github.com/autodesk-platform-services/aps-sdk-node/blob/05570b8143138d5191b8069a72c0f08c25727474/modelderivative/source/model/jobPayloadFormatSVFAdvancedNWD.ts#L18)

### timelinerProperties?

`optional` **timelinerProperties**: `boolean`

Specifies whether timeliner properties must be extracted or not. Applicable only when the source design type is Navisworks.
- `true`: Extract timeliner properties.
- `false`: (Default) Do not extract timeliner properties.

#### Memberof

JobPayloadFormatSVFAdvancedNWD

#### Defined in

[aps-sdk-node/modelderivative/source/model/jobPayloadFormatSVFAdvancedNWD.ts:48](https://github.com/autodesk-platform-services/aps-sdk-node/blob/05570b8143138d5191b8069a72c0f08c25727474/modelderivative/source/model/jobPayloadFormatSVFAdvancedNWD.ts#L48)

---
원본 문서: https://aps.autodesk.com/en/docs/model-derivative/v2/reference/typescript-sdk/interfaces/JobPayloadFormatSVFAdvancedNWD
