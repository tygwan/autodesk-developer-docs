---
title: "JobPayloadFormatSVF2Advanced"
url_path: reference/typescript-sdk/interfaces/JobPayloadFormatSVF2Advanced
product: "Model Derivative API"
surface: "model-derivative-v2"
protocol: "TypeScript SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "typescript-sdk"
---
# Interface: JobPayloadFormatSVF2Advanced

Advanced options for `svf2` output types. The available options depend on the input type.

## Export

JobPayloadFormatSVF2Advanced

## Properties

### 2dviews?

`optional` **2dviews**: [`Model2dView`](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/typescript-sdk/enumerations/Model2dView)

#### Memberof

JobPayloadFormatSVF2Advanced

#### Defined in

[aps-sdk-node/modelderivative/source/model/jobPayloadFormatSVF2Advanced.ts:28](https://github.com/autodesk-platform-services/aps-sdk-node/blob/05570b8143138d5191b8069a72c0f08c25727474/modelderivative/source/model/jobPayloadFormatSVF2Advanced.ts#L28)

### autodeskMaterialProperties?

`optional` **autodeskMaterialProperties**: `boolean`

Specifies how to handle Autodesk material properties. Applicable only when the source design type is Navisworks.
- `true`: Extract properties for Autodesk materials.
- `false`: (Default) Do not extract properties for Autodesk materials.

#### Memberof

JobPayloadFormatSVF2Advanced

#### Defined in

[aps-sdk-node/modelderivative/source/model/jobPayloadFormatSVF2Advanced.ts:113](https://github.com/autodesk-platform-services/aps-sdk-node/blob/05570b8143138d5191b8069a72c0f08c25727474/modelderivative/source/model/jobPayloadFormatSVF2Advanced.ts#L113)

### basicMaterialProperties?

`optional` **basicMaterialProperties**: `boolean`

Specifies whether basic material properties must be extracted or not. Applicable only when the source design type is Navisworks.
- `true`: Extract properties for basic materials.
- `false`: (Default) Do not extract properties for basic materials.

#### Memberof

JobPayloadFormatSVF2Advanced

#### Defined in

[aps-sdk-node/modelderivative/source/model/jobPayloadFormatSVF2Advanced.ts:103](https://github.com/autodesk-platform-services/aps-sdk-node/blob/05570b8143138d5191b8069a72c0f08c25727474/modelderivative/source/model/jobPayloadFormatSVF2Advanced.ts#L103)

### buildingStoreys?

`optional` **buildingStoreys**: [`BuildingStoreys`](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/typescript-sdk/enumerations/BuildingStoreys)

#### Memberof

JobPayloadFormatSVF2Advanced

#### Defined in

[aps-sdk-node/modelderivative/source/model/jobPayloadFormatSVF2Advanced.ts:71](https://github.com/autodesk-platform-services/aps-sdk-node/blob/05570b8143138d5191b8069a72c0f08c25727474/modelderivative/source/model/jobPayloadFormatSVF2Advanced.ts#L71)

### conversionMethod?

`optional` **conversionMethod**: [`ConversionMethod`](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/typescript-sdk/enumerations/ConversionMethod)

#### Memberof

JobPayloadFormatSVF2Advanced

#### Defined in

[aps-sdk-node/modelderivative/source/model/jobPayloadFormatSVF2Advanced.ts:65](https://github.com/autodesk-platform-services/aps-sdk-node/blob/05570b8143138d5191b8069a72c0f08c25727474/modelderivative/source/model/jobPayloadFormatSVF2Advanced.ts#L65)

### extractorVersion?

`optional` **extractorVersion**: [`ExtractorVersion`](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/typescript-sdk/enumerations/ExtractorVersion)

#### Memberof

JobPayloadFormatSVF2Advanced

#### Defined in

[aps-sdk-node/modelderivative/source/model/jobPayloadFormatSVF2Advanced.ts:34](https://github.com/autodesk-platform-services/aps-sdk-node/blob/05570b8143138d5191b8069a72c0f08c25727474/modelderivative/source/model/jobPayloadFormatSVF2Advanced.ts#L34)

### generateMasterViews?

`optional` **generateMasterViews**: `boolean`

Generates master views when translating from the Revit input format to SVF. This option is ignored for all other input formats. This attribute defaults to false.

Master views are 3D views that are generated for each phase of the Revit model. A master view contains all elements (including “room” elements) present in the host model for that phase. The display name of a master view defaults to the name of the phase it is generated from. However, if a view with that name already exists, the Model Derivative service appends a suffix to the default display name.

**Notes:**
- Master views do not contain elements from linked models.
- Enabling this option can increase the time it takes to translate the model.

#### Memberof

JobPayloadFormatSVF2Advanced

#### Defined in

[aps-sdk-node/modelderivative/source/model/jobPayloadFormatSVF2Advanced.ts:47](https://github.com/autodesk-platform-services/aps-sdk-node/blob/05570b8143138d5191b8069a72c0f08c25727474/modelderivative/source/model/jobPayloadFormatSVF2Advanced.ts#L47)

### hiddenObjects?

`optional` **hiddenObjects**: `boolean`

Specifies whether hidden objects must be extracted or not. Applicable only when the source design type is Navisworks.
- `true`: Extract hidden objects from the input file.
- `false`: (Default) Do not extract hidden objects from the input file.

#### Memberof

JobPayloadFormatSVF2Advanced

#### Defined in

[aps-sdk-node/modelderivative/source/model/jobPayloadFormatSVF2Advanced.ts:93](https://github.com/autodesk-platform-services/aps-sdk-node/blob/05570b8143138d5191b8069a72c0f08c25727474/modelderivative/source/model/jobPayloadFormatSVF2Advanced.ts#L93)

### hierarchy?

`optional` **hierarchy**: [`Hierarchy`](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/typescript-sdk/enumerations/Hierarchy)

#### Memberof

JobPayloadFormatSVF2Advanced

#### Defined in

[aps-sdk-node/modelderivative/source/model/jobPayloadFormatSVF2Advanced.ts:129](https://github.com/autodesk-platform-services/aps-sdk-node/blob/05570b8143138d5191b8069a72c0f08c25727474/modelderivative/source/model/jobPayloadFormatSVF2Advanced.ts#L129)

### materialMode?

`optional` **materialMode**: [`MaterialMode`](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/typescript-sdk/enumerations/MaterialMode)

#### Memberof

JobPayloadFormatSVF2Advanced

#### Defined in

[aps-sdk-node/modelderivative/source/model/jobPayloadFormatSVF2Advanced.ts:53](https://github.com/autodesk-platform-services/aps-sdk-node/blob/05570b8143138d5191b8069a72c0f08c25727474/modelderivative/source/model/jobPayloadFormatSVF2Advanced.ts#L53)

### openingElements?

`optional` **openingElements**: [`OpeningElements`](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/typescript-sdk/enumerations/OpeningElements)

#### Memberof

JobPayloadFormatSVF2Advanced

#### Defined in

[aps-sdk-node/modelderivative/source/model/jobPayloadFormatSVF2Advanced.ts:83](https://github.com/autodesk-platform-services/aps-sdk-node/blob/05570b8143138d5191b8069a72c0f08c25727474/modelderivative/source/model/jobPayloadFormatSVF2Advanced.ts#L83)

### requestedLinkageIDs?

`optional` **requestedLinkageIDs**: `number`[]

An array containing user data linkage IDs of the linkage data to be extracted from the DGN file. Linkage data is not extracted if you do not specify this attribute.

#### Memberof

JobPayloadFormatSVF2Advanced

#### Defined in

[aps-sdk-node/modelderivative/source/model/jobPayloadFormatSVF2Advanced.ts:59](https://github.com/autodesk-platform-services/aps-sdk-node/blob/05570b8143138d5191b8069a72c0f08c25727474/modelderivative/source/model/jobPayloadFormatSVF2Advanced.ts#L59)

### spaces?

`optional` **spaces**: [`Spaces`](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/typescript-sdk/enumerations/Spaces)

#### Memberof

JobPayloadFormatSVF2Advanced

#### Defined in

[aps-sdk-node/modelderivative/source/model/jobPayloadFormatSVF2Advanced.ts:77](https://github.com/autodesk-platform-services/aps-sdk-node/blob/05570b8143138d5191b8069a72c0f08c25727474/modelderivative/source/model/jobPayloadFormatSVF2Advanced.ts#L77)

### timelinerProperties?

`optional` **timelinerProperties**: `boolean`

Specifies whether timeliner properties must be extracted or not. Applicable only when the source design type is Navisworks.
- `true`: Extract timeliner properties.
- `false`: (Default) Do not extract timeliner properties.

#### Memberof

JobPayloadFormatSVF2Advanced

#### Defined in

[aps-sdk-node/modelderivative/source/model/jobPayloadFormatSVF2Advanced.ts:123](https://github.com/autodesk-platform-services/aps-sdk-node/blob/05570b8143138d5191b8069a72c0f08c25727474/modelderivative/source/model/jobPayloadFormatSVF2Advanced.ts#L123)

---
원본 문서: https://aps.autodesk.com/en/docs/model-derivative/v2/reference/typescript-sdk/interfaces/JobPayloadFormatSVF2Advanced
