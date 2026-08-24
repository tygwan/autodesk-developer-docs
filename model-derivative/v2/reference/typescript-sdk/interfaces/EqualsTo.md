---
title: "EqualsTo"
url_path: reference/typescript-sdk/interfaces/EqualsTo
product: "Model Derivative API"
surface: "model-derivative-v2"
protocol: "TypeScript SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "typescript-sdk"
---
# Interface: EqualsTo

Use this to retrieve only the properties of objects where a specified property is exactly equal to a specified value.

## Export

EqualsTo

## Properties

### $eq?

`optional` **$eq**: `object`[]

Returns only the objects where the value of the specified attribute (`name` attribute or any numerical property) is exactly equal to the specified value.

The first element of the array contains the name of the attribute. This can be the `name` attribute or the name of a numerical property. The second element of the array must be the value to match. If the first element is `name`, must be a string value. If the first element is a numerical property, must be a numeric. The array can only be two elements long.

For example, if you specify an array as: `"$eq":["name","Rectangular"]`, the request will only return the properties of the object named `Rectangular`. if you specify an array as: `"$eq":["properties.Dimensions.Width1",0.6]`, the request will return the properties of all objects whose `properties.Dimensions.Width1` property is exactly equal to `0.6`.

**Note:** We recommend that you use `$between` instead of `$eq` when testing non-integer numeric values for equality. Using `between` mitigates floating-point errors.

#### Memberof

EqualsTo

#### Defined in

[aps-sdk-node/modelderivative/source/model/equalsTo.ts:20](https://github.com/autodesk-platform-services/aps-sdk-node/blob/05570b8143138d5191b8069a72c0f08c25727474/modelderivative/source/model/equalsTo.ts#L20)

---
원본 문서: https://aps.autodesk.com/en/docs/model-derivative/v2/reference/typescript-sdk/interfaces/EqualsTo
