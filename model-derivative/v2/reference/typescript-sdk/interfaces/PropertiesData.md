---
title: "PropertiesData"
url_path: reference/typescript-sdk/interfaces/PropertiesData
product: "Model Derivative API"
surface: "model-derivative-v2"
protocol: "TypeScript SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "typescript-sdk"
---
# Interface: PropertiesData

An envelope that encapsulates the return data.

## Export

PropertiesData

## Properties

### collection

**collection**: `Set`<[`PropertiesDataCollection`](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/typescript-sdk/interfaces/PropertiesDataCollection)>

A non-hierarchical list of objects contained in
the specified Model View. Each object has a
`properties` attribute, which contains the
properties of that object.

#### Memberof

PropertiesData

#### Defined in

[aps-sdk-node/modelderivative/source/model/propertiesData.ts:24](https://github.com/autodesk-platform-services/aps-sdk-node/blob/05570b8143138d5191b8069a72c0f08c25727474/modelderivative/source/model/propertiesData.ts#L24)

### type

**type**: `string`

The type of data that is returned. Always `properties`.

#### Memberof

PropertiesData

#### Defined in

[aps-sdk-node/modelderivative/source/model/propertiesData.ts:15](https://github.com/autodesk-platform-services/aps-sdk-node/blob/05570b8143138d5191b8069a72c0f08c25727474/modelderivative/source/model/propertiesData.ts#L15)

---
원본 문서: https://aps.autodesk.com/en/docs/model-derivative/v2/reference/typescript-sdk/interfaces/PropertiesData
