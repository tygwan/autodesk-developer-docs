---
title: "SpecificPropertiesPayload"
url_path: reference/typescript-sdk/interfaces/SpecificPropertiesPayload
product: "Model Derivative API"
surface: "model-derivative-v2"
protocol: "TypeScript SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "typescript-sdk"
---
# Interface: SpecificPropertiesPayload

An object that represents the request body of a Fetch Specific Properties operation.

## Export

SpecificPropertiesPayload

## Properties

### fields

**fields**: `object`

Specifies what properties of the objects to return. If you do not specify this attribute, the response returns all properties.

Possible values are:
- `properties` - Return all properties.
- `properties.something`- Return the property named `something` and all its children.
- `properties.some*` - Return all properties with names that begin with `some` and all their children.
- `properties.category.*` - Return the property named `category` and all its children.
- `properties.*.property` - Return any property named `property` regardless of its parent.

#### Memberof

SpecificPropertiesPayload

#### Defined in

[aps-sdk-node/modelderivative/source/model/specificPropertiesPayload.ts:38](https://github.com/autodesk-platform-services/aps-sdk-node/blob/05570b8143138d5191b8069a72c0f08c25727474/modelderivative/source/model/specificPropertiesPayload.ts#L38)

### pagination

**pagination**: [`SpecificPropertiesPayloadPagination`](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/typescript-sdk/interfaces/SpecificPropertiesPayloadPagination)

#### Memberof

SpecificPropertiesPayload

#### Defined in

[aps-sdk-node/modelderivative/source/model/specificPropertiesPayload.ts:17](https://github.com/autodesk-platform-services/aps-sdk-node/blob/05570b8143138d5191b8069a72c0f08c25727474/modelderivative/source/model/specificPropertiesPayload.ts#L17)

### payload?

`optional` **payload**: [`Payload`](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/typescript-sdk/enumerations/Payload)

#### Memberof

SpecificPropertiesPayload

#### Defined in

[aps-sdk-node/modelderivative/source/model/specificPropertiesPayload.ts:44](https://github.com/autodesk-platform-services/aps-sdk-node/blob/05570b8143138d5191b8069a72c0f08c25727474/modelderivative/source/model/specificPropertiesPayload.ts#L44)

### query

**query**: [`SpecificPropertiesPayloadQuery`](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/typescript-sdk/type-aliases/SpecificPropertiesPayloadQuery)

#### Memberof

SpecificPropertiesPayload

#### Defined in

[aps-sdk-node/modelderivative/source/model/specificPropertiesPayload.ts:23](https://github.com/autodesk-platform-services/aps-sdk-node/blob/05570b8143138d5191b8069a72c0f08c25727474/modelderivative/source/model/specificPropertiesPayload.ts#L23)

---
원본 문서: https://aps.autodesk.com/en/docs/model-derivative/v2/reference/typescript-sdk/interfaces/SpecificPropertiesPayload
