---
title: "PropertiesDataCollection"
url_path: reference/typescript-sdk/interfaces/PropertiesDataCollection
product: "Model Derivative API"
surface: "model-derivative-v2"
protocol: "TypeScript SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "typescript-sdk"
---
# Interface: PropertiesDataCollection

## Export

PropertiesDataCollection

## Properties

### externalId

**externalId**: `string`

A unique identifier of the object as defined in the source design. For example, `UniqueID` in Revit files.

#### Memberof

PropertiesDataCollection

#### Defined in

[aps-sdk-node/modelderivative/source/model/propertiesDataCollection.ts:32](https://github.com/autodesk-platform-services/aps-sdk-node/blob/05570b8143138d5191b8069a72c0f08c25727474/modelderivative/source/model/propertiesDataCollection.ts#L32)

### name

**name**: `string`

Name of the object.

#### Memberof

PropertiesDataCollection

#### Defined in

[aps-sdk-node/modelderivative/source/model/propertiesDataCollection.ts:26](https://github.com/autodesk-platform-services/aps-sdk-node/blob/05570b8143138d5191b8069a72c0f08c25727474/modelderivative/source/model/propertiesDataCollection.ts#L26)

### objectid

**objectid**: `number`

Unique identifier of the object.

**Note:** The `objectid` is a non-persistent ID assigned to an object when a design file is translated to SVF or SVF2. So:
- The `objectid` of an object can change if the design is translated to SVF or SVF2 again.
- If you require a persistent ID to reference an object, use `externalId`.

#### Memberof

PropertiesDataCollection

#### Defined in

[aps-sdk-node/modelderivative/source/model/propertiesDataCollection.ts:20](https://github.com/autodesk-platform-services/aps-sdk-node/blob/05570b8143138d5191b8069a72c0f08c25727474/modelderivative/source/model/propertiesDataCollection.ts#L20)

### properties?

`optional` **properties**: `object`

A JSON object containing dictionary objects (key value pairs), where the key is the property name and the value is the value of the property.

#### Index Signature

[`key`: `string`]: `object`

#### Memberof

PropertiesDataCollection

#### Defined in

[aps-sdk-node/modelderivative/source/model/propertiesDataCollection.ts:38](https://github.com/autodesk-platform-services/aps-sdk-node/blob/05570b8143138d5191b8069a72c0f08c25727474/modelderivative/source/model/propertiesDataCollection.ts#L38)

---
원본 문서: https://aps.autodesk.com/en/docs/model-derivative/v2/reference/typescript-sdk/interfaces/PropertiesDataCollection
