---
title: "JobPayloadFormatSVFAdvancedRVT"
url_path: reference/typescript-sdk/interfaces/JobPayloadFormatSVFAdvancedRVT
product: "Model Derivative API"
surface: "model-derivative-v2"
protocol: "TypeScript SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "typescript-sdk"
---
# Interface: JobPayloadFormatSVFAdvancedRVT

Advanced options for Revit inputs.

## Export

JobPayloadFormatSVFAdvancedRVT

## Properties

### 2dviews?

`optional` **2dviews**: [`Model2dView`](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/typescript-sdk/enumerations/Model2dView)

#### Memberof

JobPayloadFormatSVFAdvancedRVT

#### Defined in

[aps-sdk-node/modelderivative/source/model/jobPayloadFormatSVFAdvancedRVT.ts:17](https://github.com/autodesk-platform-services/aps-sdk-node/blob/05570b8143138d5191b8069a72c0f08c25727474/modelderivative/source/model/jobPayloadFormatSVFAdvancedRVT.ts#L17)

### extractorVersion?

`optional` **extractorVersion**: [`ExtractorVersion`](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/typescript-sdk/enumerations/ExtractorVersion)

#### Memberof

JobPayloadFormatSVFAdvancedRVT

#### Defined in

[aps-sdk-node/modelderivative/source/model/jobPayloadFormatSVFAdvancedRVT.ts:23](https://github.com/autodesk-platform-services/aps-sdk-node/blob/05570b8143138d5191b8069a72c0f08c25727474/modelderivative/source/model/jobPayloadFormatSVFAdvancedRVT.ts#L23)

### generateMasterViews?

`optional` **generateMasterViews**: `boolean`

Generates master views when translating from the Revit input format to SVF. This option is ignored for all other input formats. This attribute defaults to false.

Master views are 3D views that are generated for each phase of the Revit model. A master view contains all elements (including “room” elements) present in the host model for that phase. The display name of a master view defaults to the name of the phase it is generated from. However, if a view with that name already exists, the Model Derivative service appends a suffix to the default display name.

**Notes:**
- Master views do not contain elements from linked models.
- Enabling this option can increase the time it takes to translate the model.

#### Memberof

JobPayloadFormatSVFAdvancedRVT

#### Defined in

[aps-sdk-node/modelderivative/source/model/jobPayloadFormatSVFAdvancedRVT.ts:36](https://github.com/autodesk-platform-services/aps-sdk-node/blob/05570b8143138d5191b8069a72c0f08c25727474/modelderivative/source/model/jobPayloadFormatSVFAdvancedRVT.ts#L36)

### materialMode?

`optional` **materialMode**: [`MaterialMode`](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/typescript-sdk/enumerations/MaterialMode)

#### Memberof

JobPayloadFormatSVFAdvancedRVT

#### Defined in

[aps-sdk-node/modelderivative/source/model/jobPayloadFormatSVFAdvancedRVT.ts:42](https://github.com/autodesk-platform-services/aps-sdk-node/blob/05570b8143138d5191b8069a72c0f08c25727474/modelderivative/source/model/jobPayloadFormatSVFAdvancedRVT.ts#L42)

---
원본 문서: https://aps.autodesk.com/en/docs/model-derivative/v2/reference/typescript-sdk/interfaces/JobPayloadFormatSVFAdvancedRVT
