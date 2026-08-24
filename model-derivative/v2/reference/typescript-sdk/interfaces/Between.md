---
title: "Between"
url_path: reference/typescript-sdk/interfaces/Between
product: "Model Derivative API"
surface: "model-derivative-v2"
protocol: "TypeScript SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "typescript-sdk"
---
# Interface: Between

Use this to retrieve only the properties of objects where a specified attribute is between two specified values.

## Export

Between

## Properties

### $between?

`optional` **$between**: `object`[]

Returns only the objects where the value of the specified numerical property lies between the specified values.

The first element of the array contains the name of the property. The next two elements specify the values that the property must lie between. The array can only be three elements long.

For example, if you specify an array as: `"$between":["properties.Dimensions.Width1",1,10]`, the request returns the properties of all objects whose `properties.Dimensions.Width1` property is between `1` and `10`.

**Note:** The Model Derivative service converts numeric values from their native units to metric base units for comparison. So, you must specify the values to compare with in metric base units. For example, if the property you are comparing is a length measurement, you must specify the values in `m`. Not in `cm`, `mm`, or `ft`.

#### Memberof

Between

#### Defined in

[aps-sdk-node/modelderivative/source/model/between.ts:21](https://github.com/autodesk-platform-services/aps-sdk-node/blob/05570b8143138d5191b8069a72c0f08c25727474/modelderivative/source/model/between.ts#L21)

---
원본 문서: https://aps.autodesk.com/en/docs/model-derivative/v2/reference/typescript-sdk/interfaces/Between
