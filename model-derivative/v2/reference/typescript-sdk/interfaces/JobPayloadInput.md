---
title: "JobPayloadInput"
url_path: reference/typescript-sdk/interfaces/JobPayloadInput
product: "Model Derivative API"
surface: "model-derivative-v2"
protocol: "TypeScript SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "typescript-sdk"
---
# Interface: JobPayloadInput

An object describing the attributes of the source design.

## Export

JobPayloadInput

## Properties

### checkReferences?

`optional` **checkReferences**: `boolean`
- `true` - Instructs the system to check for references, and if any exist, download all referenced files. Setting this parameter to `true` is mandatory when translating source designs consisting of multiple files. For example, Autodesk Inventor assemblies.
- `false` - (Default) Instructs the system not to check for references.

#### Memberof

JobPayloadInput

#### Defined in

[aps-sdk-node/modelderivative/source/model/jobPayloadInput.ts:38](https://github.com/autodesk-platform-services/aps-sdk-node/blob/05570b8143138d5191b8069a72c0f08c25727474/modelderivative/source/model/jobPayloadInput.ts#L38)

### compressedUrn?

`optional` **compressedUrn**: `boolean`
- `true`: The source design is compressed as a zip file. If set to `true`, you need to define the `rootFilename`.’
- `false`: (Default) The source design is not compressed.

#### Memberof

JobPayloadInput

#### Defined in

[aps-sdk-node/modelderivative/source/model/jobPayloadInput.ts:25](https://github.com/autodesk-platform-services/aps-sdk-node/blob/05570b8143138d5191b8069a72c0f08c25727474/modelderivative/source/model/jobPayloadInput.ts#L25)

### rootFilename?

`optional` **rootFilename**: `string`

The file name of the top-level component of the source design. Mandatory if `compressedUrn` is set to `true`.

#### Memberof

JobPayloadInput

#### Defined in

[aps-sdk-node/modelderivative/source/model/jobPayloadInput.ts:31](https://github.com/autodesk-platform-services/aps-sdk-node/blob/05570b8143138d5191b8069a72c0f08c25727474/modelderivative/source/model/jobPayloadInput.ts#L31)

### urn

**urn**: `string`

The URL safe Base64 encoded URN of the source design.

**Note:** The URN is returned as the `objectID` once you complete uploading the source design to APS. This value must be converted to a `Base64 (URL Safe) encoded <http://www.freeformatter.com/base64-encoder.html>`_ string before you can specify it for this attribute.

#### Memberof

JobPayloadInput

#### Defined in

[aps-sdk-node/modelderivative/source/model/jobPayloadInput.ts:17](https://github.com/autodesk-platform-services/aps-sdk-node/blob/05570b8143138d5191b8069a72c0f08c25727474/modelderivative/source/model/jobPayloadInput.ts#L17)

---
원본 문서: https://aps.autodesk.com/en/docs/model-derivative/v2/reference/typescript-sdk/interfaces/JobPayloadInput
