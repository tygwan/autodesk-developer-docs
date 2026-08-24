---
title: "Contains"
url_path: reference/typescript-sdk/interfaces/Contains
product: "Model Derivative API"
surface: "model-derivative-v2"
protocol: "TypeScript SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "typescript-sdk"
---
# Interface: Contains

Use this to retrieve only the properties of objects where a specified property contains a specified value.

## Export

Contains

## Properties

### $contains?

`optional` **$contains**: `string`[]

Returns only the objects where the value of the specified property contains the words specified in a string.

The first element of the array contains the name of the property. The second element contains a string containing the words to match. The array can only be two elements long.

For example, if you specify an array as: `"$contains":["properties.Materials and Finishes.Structural Material","Concrete Situ"]`, the request returns the properties of all objects whose `properties.Materials and Finishes.Structural Material` property contains the words `Concrete` and `Situ`. You can specify up to 50 words.

#### Memberof

Contains

#### Defined in

[aps-sdk-node/modelderivative/source/model/contains.ts:18](https://github.com/autodesk-platform-services/aps-sdk-node/blob/05570b8143138d5191b8069a72c0f08c25727474/modelderivative/source/model/contains.ts#L18)

---
원본 문서: https://aps.autodesk.com/en/docs/model-derivative/v2/reference/typescript-sdk/interfaces/Contains
