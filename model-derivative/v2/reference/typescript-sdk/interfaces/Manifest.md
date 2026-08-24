---
title: "Manifest"
url_path: reference/typescript-sdk/interfaces/Manifest
product: "Model Derivative API"
surface: "model-derivative-v2"
protocol: "TypeScript SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "typescript-sdk"
---
# Interface: Manifest

An object that represents the successful response of a Fetch Manifest operation.

## Export

Manifest

## Properties

### derivatives

**derivatives**: [`ManifestDerivative`](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/typescript-sdk/interfaces/ManifestDerivative)[]

An array of objects, where each object represents a derivative of the source design.

#### Memberof

Manifest

#### Defined in

[aps-sdk-node/modelderivative/source/model/manifest.ts:21](https://github.com/autodesk-platform-services/aps-sdk-node/blob/05570b8143138d5191b8069a72c0f08c25727474/modelderivative/source/model/manifest.ts#L21)

### hasThumbnail

**hasThumbnail**: `string`
- `true`: There is a thumbnail for the source design.
- `false`: There is no thumbnail for the source design.

#### Memberof

Manifest

#### Defined in

[aps-sdk-node/modelderivative/source/model/manifest.ts:29](https://github.com/autodesk-platform-services/aps-sdk-node/blob/05570b8143138d5191b8069a72c0f08c25727474/modelderivative/source/model/manifest.ts#L29)

### progress

**progress**: `string`

Indicates the overall progress of all translation jobs, as a percentage. Once all requested derivatives are generated, the value changes to `complete`.

#### Memberof

Manifest

#### Defined in

[aps-sdk-node/modelderivative/source/model/manifest.ts:35](https://github.com/autodesk-platform-services/aps-sdk-node/blob/05570b8143138d5191b8069a72c0f08c25727474/modelderivative/source/model/manifest.ts#L35)

### region

**region**: `string`

Specifies the data center where the manifest, derivatives, and references are stored. Possible values are:
- `US` - Data center for the US region.
- `EMEA` - Data center for European Union, Middle East, and Africa.
- `APAC` - Data center for the Australia region.

#### Memberof

Manifest

#### Defined in

[aps-sdk-node/modelderivative/source/model/manifest.ts:52](https://github.com/autodesk-platform-services/aps-sdk-node/blob/05570b8143138d5191b8069a72c0f08c25727474/modelderivative/source/model/manifest.ts#L52)

### status

**status**: `string`

Overall status of all translation jobs for the source design. Possible values are: `pending`, `success`, `inprogress`, `failed`, `timeout`.

#### Memberof

Manifest

#### Defined in

[aps-sdk-node/modelderivative/source/model/manifest.ts:64](https://github.com/autodesk-platform-services/aps-sdk-node/blob/05570b8143138d5191b8069a72c0f08c25727474/modelderivative/source/model/manifest.ts#L64)

### type

**type**: `string`

The type of data that is returned. Always `manifest`.

#### Memberof

Manifest

#### Defined in

[aps-sdk-node/modelderivative/source/model/manifest.ts:41](https://github.com/autodesk-platform-services/aps-sdk-node/blob/05570b8143138d5191b8069a72c0f08c25727474/modelderivative/source/model/manifest.ts#L41)

### urn

**urn**: `string`

The URL-safe Base64 encoded URN of the source design.

#### Memberof

Manifest

#### Defined in

[aps-sdk-node/modelderivative/source/model/manifest.ts:15](https://github.com/autodesk-platform-services/aps-sdk-node/blob/05570b8143138d5191b8069a72c0f08c25727474/modelderivative/source/model/manifest.ts#L15)

### version

**version**: `string`

Indicates the version of the schema that the manifest is based on.

#### Memberof

Manifest

#### Defined in

[aps-sdk-node/modelderivative/source/model/manifest.ts:58](https://github.com/autodesk-platform-services/aps-sdk-node/blob/05570b8143138d5191b8069a72c0f08c25727474/modelderivative/source/model/manifest.ts#L58)

---
원본 문서: https://aps.autodesk.com/en/docs/model-derivative/v2/reference/typescript-sdk/interfaces/Manifest
