---
title: "GreaterThan"
url_path: reference/typescript-sdk/interfaces/GreaterThan
product: "Model Derivative API"
surface: "model-derivative-v2"
protocol: "TypeScript SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "typescript-sdk"
---
# Interface: GreaterThan

Use this to retrieve only the properties of objects where a specified property is greater than a specified value.

## Export

GreaterThan

## Properties

### $ge?

`optional` **$ge**: `object`[]

Returns only the objects where the value of the specified numerical property is greater than or equal to the specified value.

The first element of the array contains the name of the property. The next element specifies the values that the property must be greater than or equal to. The array can only be two elements long.

For example, if you specify an array as: `"$ge":["properties.Dimensions.Width1",0.1]`, the request returns the properties of all objects whose `properties.Dimensions.Width1` property is greater than or equal to `0.1`.

**Note:** The Model Derivative service converts numeric values from their native units to metric base units for comparison. So, the value to compare with must be specified in metric base units. For example, if the property you are comparing is a length measurement, you must specify the value in `m`. Not in `cm`, `mm`, or `ft`.

#### Memberof

GreaterThan

#### Defined in

[aps-sdk-node/modelderivative/source/model/greaterThan.ts:21](https://github.com/autodesk-platform-services/aps-sdk-node/blob/05570b8143138d5191b8069a72c0f08c25727474/modelderivative/source/model/greaterThan.ts#L21)

---
원본 문서: https://aps.autodesk.com/en/docs/model-derivative/v2/reference/typescript-sdk/interfaces/GreaterThan
