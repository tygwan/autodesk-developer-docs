---
title: "SpecifyReferencesPayloadReferences"
url_path: reference/typescript-sdk/interfaces/SpecifyReferencesPayloadReferences
product: "Model Derivative API"
surface: "model-derivative-v2"
protocol: "TypeScript SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "typescript-sdk"
---
# Interface: SpecifyReferencesPayloadReferences

## Export

SpecifyReferencesPayloadReferences

## Properties

### filename

**filename**: `string`

The file name of the referenced file. By default, it is set to `""` and the referenced file will be downloaded by its `urn` and placed relative to the top-level component using `relativePath`.

#### Memberof

SpecifyReferencesPayloadReferences

#### Defined in

[aps-sdk-node/modelderivative/source/model/specifyReferencesPayloadReferences.ts:26](https://github.com/autodesk-platform-services/aps-sdk-node/blob/05570b8143138d5191b8069a72c0f08c25727474/modelderivative/source/model/specifyReferencesPayloadReferences.ts#L26)

### metadata?

`optional` **metadata**: `object`

An object to hold custom metadata.

#### Index Signature

[`key`: `string`]: `object`

#### Memberof

SpecifyReferencesPayloadReferences

#### Defined in

[aps-sdk-node/modelderivative/source/model/specifyReferencesPayloadReferences.ts:32](https://github.com/autodesk-platform-services/aps-sdk-node/blob/05570b8143138d5191b8069a72c0f08c25727474/modelderivative/source/model/specifyReferencesPayloadReferences.ts#L32)

### relativePath

**relativePath**: `string`

The path to the referenced file, relative to the top level component. By default, it is set to `""`, which means that the referenced file and top level component are in the same folder.

#### Memberof

SpecifyReferencesPayloadReferences

#### Defined in

[aps-sdk-node/modelderivative/source/model/specifyReferencesPayloadReferences.ts:20](https://github.com/autodesk-platform-services/aps-sdk-node/blob/05570b8143138d5191b8069a72c0f08c25727474/modelderivative/source/model/specifyReferencesPayloadReferences.ts#L20)

### urn

**urn**: `string`

The URN of the referenced file.

#### Memberof

SpecifyReferencesPayloadReferences

#### Defined in

[aps-sdk-node/modelderivative/source/model/specifyReferencesPayloadReferences.ts:14](https://github.com/autodesk-platform-services/aps-sdk-node/blob/05570b8143138d5191b8069a72c0f08c25727474/modelderivative/source/model/specifyReferencesPayloadReferences.ts#L14)

---
원본 문서: https://aps.autodesk.com/en/docs/model-derivative/v2/reference/typescript-sdk/interfaces/SpecifyReferencesPayloadReferences
