---
title: "SpecifyReferencesPayload"
url_path: reference/typescript-sdk/interfaces/SpecifyReferencesPayload
product: "Model Derivative API"
surface: "model-derivative-v2"
protocol: "TypeScript SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "typescript-sdk"
---
# Interface: SpecifyReferencesPayload

An object that represents the successful response of a Specify References operation.

## Export

SpecifyReferencesPayload

## Properties

### filename

**filename**: `string`

The file name of the top level component. By default, it is set to `""` and the file will be download with its `urn`.

#### Memberof

SpecifyReferencesPayload

#### Defined in

[aps-sdk-node/modelderivative/source/model/specifyReferencesPayload.ts:28](https://github.com/autodesk-platform-services/aps-sdk-node/blob/05570b8143138d5191b8069a72c0f08c25727474/modelderivative/source/model/specifyReferencesPayload.ts#L28)

### references

**references**: `Set`<[`SpecifyReferencesPayloadReferences`](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/typescript-sdk/interfaces/SpecifyReferencesPayloadReferences)>

An array of objects, where each object represents a referenced file.

#### Memberof

SpecifyReferencesPayload

#### Defined in

[aps-sdk-node/modelderivative/source/model/specifyReferencesPayload.ts:34](https://github.com/autodesk-platform-services/aps-sdk-node/blob/05570b8143138d5191b8069a72c0f08c25727474/modelderivative/source/model/specifyReferencesPayload.ts#L34)

### region?

`optional` **region**: [`Region`](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/typescript-sdk/enumerations/Region)

#### Memberof

SpecifyReferencesPayload

#### Defined in

[aps-sdk-node/modelderivative/source/model/specifyReferencesPayload.ts:22](https://github.com/autodesk-platform-services/aps-sdk-node/blob/05570b8143138d5191b8069a72c0f08c25727474/modelderivative/source/model/specifyReferencesPayload.ts#L22)

### urn

**urn**: `string`

The URL safe Base64 encoded URN of the source design. Mandatory if the Base64 encoded urn in the request URL is a logical URN.

#### Memberof

SpecifyReferencesPayload

#### Defined in

[aps-sdk-node/modelderivative/source/model/specifyReferencesPayload.ts:16](https://github.com/autodesk-platform-services/aps-sdk-node/blob/05570b8143138d5191b8069a72c0f08c25727474/modelderivative/source/model/specifyReferencesPayload.ts#L16)

---
원본 문서: https://aps.autodesk.com/en/docs/model-derivative/v2/reference/typescript-sdk/interfaces/SpecifyReferencesPayload
