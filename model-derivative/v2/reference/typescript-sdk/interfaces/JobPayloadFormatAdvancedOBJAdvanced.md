---
title: "JobPayloadFormatAdvancedOBJAdvanced"
url_path: reference/typescript-sdk/interfaces/JobPayloadFormatAdvancedOBJAdvanced
product: "Model Derivative API"
surface: "model-derivative-v2"
protocol: "TypeScript SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "typescript-sdk"
---
# Interface: JobPayloadFormatAdvancedOBJAdvanced

Advanced options for OBJ output type.

## Export

JobPayloadFormatAdvancedOBJAdvanced

## Properties

### exportFileStructure?

`optional` **exportFileStructure**: [`ExportFileStructure`](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/typescript-sdk/enumerations/ExportFileStructure)

#### Memberof

JobPayloadFormatAdvancedOBJAdvanced

#### Defined in

[aps-sdk-node/modelderivative/source/model/jobPayloadFormatAdvancedOBJAdvanced.ts:16](https://github.com/autodesk-platform-services/aps-sdk-node/blob/05570b8143138d5191b8069a72c0f08c25727474/modelderivative/source/model/jobPayloadFormatAdvancedOBJAdvanced.ts#L16)

### modelGuid?

`optional` **modelGuid**: `string`

Required for geometry extractions. Specifies the ID of the Model View that contains the geometry to extract.

#### Memberof

JobPayloadFormatAdvancedOBJAdvanced

#### Defined in

[aps-sdk-node/modelderivative/source/model/jobPayloadFormatAdvancedOBJAdvanced.ts:28](https://github.com/autodesk-platform-services/aps-sdk-node/blob/05570b8143138d5191b8069a72c0f08c25727474/modelderivative/source/model/jobPayloadFormatAdvancedOBJAdvanced.ts#L28)

### objectIds?

`optional` **objectIds**: `number`[]

Required for geometry extractions. Specifies the IDs of the objects (``objectID) to extract. -1 will extract the entire model.

#### Memberof

JobPayloadFormatAdvancedOBJAdvanced

#### Defined in

[aps-sdk-node/modelderivative/source/model/jobPayloadFormatAdvancedOBJAdvanced.ts:35](https://github.com/autodesk-platform-services/aps-sdk-node/blob/05570b8143138d5191b8069a72c0f08c25727474/modelderivative/source/model/jobPayloadFormatAdvancedOBJAdvanced.ts#L35)

### unit?

`optional` **unit**: [`Unit`](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/typescript-sdk/enumerations/Unit)

#### Memberof

JobPayloadFormatAdvancedOBJAdvanced

#### Defined in

[aps-sdk-node/modelderivative/source/model/jobPayloadFormatAdvancedOBJAdvanced.ts:22](https://github.com/autodesk-platform-services/aps-sdk-node/blob/05570b8143138d5191b8069a72c0f08c25727474/modelderivative/source/model/jobPayloadFormatAdvancedOBJAdvanced.ts#L22)

---
원본 문서: https://aps.autodesk.com/en/docs/model-derivative/v2/reference/typescript-sdk/interfaces/JobPayloadFormatAdvancedOBJAdvanced
