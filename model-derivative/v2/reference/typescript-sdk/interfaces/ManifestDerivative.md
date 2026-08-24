---
title: "ManifestDerivative"
url_path: reference/typescript-sdk/interfaces/ManifestDerivative
product: "Model Derivative API"
surface: "model-derivative-v2"
protocol: "TypeScript SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "typescript-sdk"
---
# Interface: ManifestDerivative

Represents a derivative generated for the source design.

## Export

ManifestDerivative

## Properties

### children?

`optional` **children**: [`ManifestResources`](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/typescript-sdk/interfaces/ManifestResources)[]

An array of objects, where each object represents a resource generated for the derivative. For example, a Model View (Viewable) of the source design.

#### Memberof

ManifestDerivative

#### Defined in

[aps-sdk-node/modelderivative/source/model/manifestDerivative.ts:54](https://github.com/autodesk-platform-services/aps-sdk-node/blob/05570b8143138d5191b8069a72c0f08c25727474/modelderivative/source/model/manifestDerivative.ts#L54)

### hasThumbnail

**hasThumbnail**: `string`
- `true`: The derivative has a thumbnail.
- `false`: The derivative does not have a thumbnail.

#### Memberof

ManifestDerivative

#### Defined in

[aps-sdk-node/modelderivative/source/model/manifestDerivative.ts:24](https://github.com/autodesk-platform-services/aps-sdk-node/blob/05570b8143138d5191b8069a72c0f08c25727474/modelderivative/source/model/manifestDerivative.ts#L24)

### messages?

`optional` **messages**: [`Messages`](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/typescript-sdk/interfaces/Messages)[]

#### Memberof

ManifestDerivative

#### Defined in

[aps-sdk-node/modelderivative/source/model/manifestDerivative.ts:48](https://github.com/autodesk-platform-services/aps-sdk-node/blob/05570b8143138d5191b8069a72c0f08c25727474/modelderivative/source/model/manifestDerivative.ts#L48)

### name

**name**: `string`

The name of the resource.

#### Memberof

ManifestDerivative

#### Defined in

[aps-sdk-node/modelderivative/source/model/manifestDerivative.ts:16](https://github.com/autodesk-platform-services/aps-sdk-node/blob/05570b8143138d5191b8069a72c0f08c25727474/modelderivative/source/model/manifestDerivative.ts#L16)

### outputType

**outputType**: `string`

The file type/format of the derivative. Possible values are: `dwg`, `fbx`, `ifc`, `iges`, `obj` , `step`, `stl`, `svf`, `svf2`, `thumbnail`.

#### Memberof

ManifestDerivative

#### Defined in

[aps-sdk-node/modelderivative/source/model/manifestDerivative.ts:36](https://github.com/autodesk-platform-services/aps-sdk-node/blob/05570b8143138d5191b8069a72c0f08c25727474/modelderivative/source/model/manifestDerivative.ts#L36)

### progress

**progress**: `string`

Indicates the progress of the process generating this derivative, as a percentage. Once complete, the value changes to `complete`.

#### Memberof

ManifestDerivative

#### Defined in

[aps-sdk-node/modelderivative/source/model/manifestDerivative.ts:30](https://github.com/autodesk-platform-services/aps-sdk-node/blob/05570b8143138d5191b8069a72c0f08c25727474/modelderivative/source/model/manifestDerivative.ts#L30)

### status

**status**: `string`

Status of the task generating this derivative. Possible values are: `pending`, `inprogress`, `success`, `failed`, `timeout`.

#### Memberof

ManifestDerivative

#### Defined in

[aps-sdk-node/modelderivative/source/model/manifestDerivative.ts:42](https://github.com/autodesk-platform-services/aps-sdk-node/blob/05570b8143138d5191b8069a72c0f08c25727474/modelderivative/source/model/manifestDerivative.ts#L42)

---
원본 문서: https://aps.autodesk.com/en/docs/model-derivative/v2/reference/typescript-sdk/interfaces/ManifestDerivative
