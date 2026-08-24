---
title: "MatchId"
url_path: reference/typescript-sdk/interfaces/MatchId
product: "Model Derivative API"
surface: "model-derivative-v2"
protocol: "TypeScript SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "typescript-sdk"
---
# Interface: MatchId

Use this to retrieve only the properties of objects with Object IDs or External IDs matching the specified values.

Use the `MatchIdType` Enum to pick between Object IDs and External IDs.

## Export

MatchId

## Properties

### $in?

`optional` **$in**: `object`[]

Returns only the objects with their `objectid` or `externalId` attribute exactly matching one of the values specified in the array.

The first element of the array contains the name of the attribute to match (`objectid` or `externalId`). Subsequent elements contain the values to match.

For example, if you specify an array as: `"$in":["objectid",1,2]`, the request will only return the properties of the objects with `objectid` = `1` and `2`. If you specify an array as `"$in":["externalId","doc_982afc8a","doc_afd75233" ]` the request will only return the properties of the objects with `externalId` = `doc_982afc8a` and `doc_afd75233`.

#### Memberof

MatchId

#### Defined in

[aps-sdk-node/modelderivative/source/model/matchId.ts:21](https://github.com/autodesk-platform-services/aps-sdk-node/blob/05570b8143138d5191b8069a72c0f08c25727474/modelderivative/source/model/matchId.ts#L21)

---
원본 문서: https://aps.autodesk.com/en/docs/model-derivative/v2/reference/typescript-sdk/interfaces/MatchId
