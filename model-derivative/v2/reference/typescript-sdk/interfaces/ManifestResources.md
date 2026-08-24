---
title: "ManifestResources"
url_path: reference/typescript-sdk/interfaces/ManifestResources
product: "Model Derivative API"
surface: "model-derivative-v2"
protocol: "TypeScript SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "typescript-sdk"
---
# Interface: ManifestResources

Represents a resource generated for a derivative.

## Export

ManifestResources

## Properties

### camera?

`optional` **camera**: `number`[]

The default viewpoint of a viewable 3D resource.

#### Memberof

ManifestResources

#### Defined in

[aps-sdk-node/modelderivative/source/model/manifestResources.ts:89](https://github.com/autodesk-platform-services/aps-sdk-node/blob/05570b8143138d5191b8069a72c0f08c25727474/modelderivative/source/model/manifestResources.ts#L89)

### children?

`optional` **children**: [`ManifestResources`](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/typescript-sdk/interfaces/ManifestResources)[]

An optional array of objects, where each object (of type `children`) represents another resource generated for this resource.

#### Memberof

ManifestResources

#### Defined in

[aps-sdk-node/modelderivative/source/model/manifestResources.ts:107](https://github.com/autodesk-platform-services/aps-sdk-node/blob/05570b8143138d5191b8069a72c0f08c25727474/modelderivative/source/model/manifestResources.ts#L107)

### guid

**guid**: `string`

An ID that uniquely identifies the resource.

#### Memberof

ManifestResources

#### Defined in

[aps-sdk-node/modelderivative/source/model/manifestResources.ts:15](https://github.com/autodesk-platform-services/aps-sdk-node/blob/05570b8143138d5191b8069a72c0f08c25727474/modelderivative/source/model/manifestResources.ts#L15)

### hasThumbnail?

`optional` **hasThumbnail**: `string`
- `true`: There is a thumbnail for the resource.
- `false`: There is no thumbnail for the resource.

#### Memberof

ManifestResources

#### Defined in

[aps-sdk-node/modelderivative/source/model/manifestResources.ts:65](https://github.com/autodesk-platform-services/aps-sdk-node/blob/05570b8143138d5191b8069a72c0f08c25727474/modelderivative/source/model/manifestResources.ts#L65)

### messages?

`optional` **messages**: [`Messages`](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/typescript-sdk/interfaces/Messages)[]

#### Memberof

ManifestResources

#### Defined in

[aps-sdk-node/modelderivative/source/model/manifestResources.ts:101](https://github.com/autodesk-platform-services/aps-sdk-node/blob/05570b8143138d5191b8069a72c0f08c25727474/modelderivative/source/model/manifestResources.ts#L101)

### mime?

`optional` **mime**: `string`

MIME type of the content of the resource.

#### Memberof

ManifestResources

#### Defined in

[aps-sdk-node/modelderivative/source/model/manifestResources.ts:39](https://github.com/autodesk-platform-services/aps-sdk-node/blob/05570b8143138d5191b8069a72c0f08c25727474/modelderivative/source/model/manifestResources.ts#L39)

### name?

`optional` **name**: `string`

The name of the resource.

#### Memberof

ManifestResources

#### Defined in

[aps-sdk-node/modelderivative/source/model/manifestResources.ts:51](https://github.com/autodesk-platform-services/aps-sdk-node/blob/05570b8143138d5191b8069a72c0f08c25727474/modelderivative/source/model/manifestResources.ts#L51)

### phaseIds?

`optional` **phaseIds**: `object`

The unique ID of the phase the resource file was generated from. This attribute is present only on Model Views (Viewables) generated from a Revit source design. This attribute can be a string (for Revit non-sheet 2D or 3D views) or an array of strings (for Revit sheet views).

#### Memberof

ManifestResources

#### Defined in

[aps-sdk-node/modelderivative/source/model/manifestResources.ts:83](https://github.com/autodesk-platform-services/aps-sdk-node/blob/05570b8143138d5191b8069a72c0f08c25727474/modelderivative/source/model/manifestResources.ts#L83)

### phaseNames?

`optional` **phaseNames**: `object`

The name of the phase the resource file was generated from. This attribute is present only on Model Views (Viewables) generated from a Revit source design. This attribute can be a string (for Revit non-sheet 2D or 3D views) or an array of strings (for Revit sheet views).

#### Memberof

ManifestResources

#### Defined in

[aps-sdk-node/modelderivative/source/model/manifestResources.ts:77](https://github.com/autodesk-platform-services/aps-sdk-node/blob/05570b8143138d5191b8069a72c0f08c25727474/modelderivative/source/model/manifestResources.ts#L77)

### progress?

`optional` **progress**: `string`

Indicates the progress of the process generating this resource, as a percentage. Once complete, the value changes to `complete`.

#### Memberof

ManifestResources

#### Defined in

[aps-sdk-node/modelderivative/source/model/manifestResources.ts:71](https://github.com/autodesk-platform-services/aps-sdk-node/blob/05570b8143138d5191b8069a72c0f08c25727474/modelderivative/source/model/manifestResources.ts#L71)

### resolution?

`optional` **resolution**: `number`[]

An array of two integers where the first number represents the width of a thumbnail in pixels, and the second the height. Available only for thumbnail resources.

#### Memberof

ManifestResources

#### Defined in

[aps-sdk-node/modelderivative/source/model/manifestResources.ts:95](https://github.com/autodesk-platform-services/aps-sdk-node/blob/05570b8143138d5191b8069a72c0f08c25727474/modelderivative/source/model/manifestResources.ts#L95)

### role

**role**: `string`

File type of the resource.

#### Memberof

ManifestResources

#### Defined in

[aps-sdk-node/modelderivative/source/model/manifestResources.ts:33](https://github.com/autodesk-platform-services/aps-sdk-node/blob/05570b8143138d5191b8069a72c0f08c25727474/modelderivative/source/model/manifestResources.ts#L33)

### status

**status**: `string`

Status of the task generating this resource; Possible values are: `pending`, `inprogress`, `success`, `failed`, `timeout`

#### Memberof

ManifestResources

#### Defined in

[aps-sdk-node/modelderivative/source/model/manifestResources.ts:57](https://github.com/autodesk-platform-services/aps-sdk-node/blob/05570b8143138d5191b8069a72c0f08c25727474/modelderivative/source/model/manifestResources.ts#L57)

### type

**type**: `string`

Type of resource this JSON object represents.

#### Memberof

ManifestResources

#### Defined in

[aps-sdk-node/modelderivative/source/model/manifestResources.ts:21](https://github.com/autodesk-platform-services/aps-sdk-node/blob/05570b8143138d5191b8069a72c0f08c25727474/modelderivative/source/model/manifestResources.ts#L21)

### urn?

`optional` **urn**: `string`

The URN that you can use to access the resource.

#### Memberof

ManifestResources

#### Defined in

[aps-sdk-node/modelderivative/source/model/manifestResources.ts:27](https://github.com/autodesk-platform-services/aps-sdk-node/blob/05570b8143138d5191b8069a72c0f08c25727474/modelderivative/source/model/manifestResources.ts#L27)

### viewableID?

`optional` **viewableID**: `string`

An ID assigned to a resource that can be displayed in a viewer.

#### Memberof

ManifestResources

#### Defined in

[aps-sdk-node/modelderivative/source/model/manifestResources.ts:45](https://github.com/autodesk-platform-services/aps-sdk-node/blob/05570b8143138d5191b8069a72c0f08c25727474/modelderivative/source/model/manifestResources.ts#L45)

---
원본 문서: https://aps.autodesk.com/en/docs/model-derivative/v2/reference/typescript-sdk/interfaces/ManifestResources
