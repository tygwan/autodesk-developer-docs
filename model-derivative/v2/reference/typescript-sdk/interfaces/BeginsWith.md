---
title: "BeginsWith"
url_path: reference/typescript-sdk/interfaces/BeginsWith
product: "Model Derivative API"
surface: "model-derivative-v2"
protocol: "TypeScript SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "typescript-sdk"
---
# Interface: BeginsWith

Use this to retrieve only the properties of objects with names beginning with a specified string.

## Export

BeginsWith

## Properties

### $prefix?

`optional` **$prefix**: `string`[]

Returns only the objects with their `name` attribute beginning with the specified string.

The first element of the array contains the name of the attribute to match (`name`). The second element contains the string to match. The array can have only two elements. Only the objects whose name begin with the specified string are returned.

#### Memberof

BeginsWith

#### Defined in

[aps-sdk-node/modelderivative/source/model/beginsWith.ts:17](https://github.com/autodesk-platform-services/aps-sdk-node/blob/05570b8143138d5191b8069a72c0f08c25727474/modelderivative/source/model/beginsWith.ts#L17)

---
원본 문서: https://aps.autodesk.com/en/docs/model-derivative/v2/reference/typescript-sdk/interfaces/BeginsWith
