---
title: "MatchIdType Enum"
url_path: reference/dot-net-sdk/Autodesk.ModelDerivative.Model/MatchIdType
product: "Model Derivative API"
surface: "model-derivative-v2"
protocol: ".NET SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "dot-net-sdk"
---
# Enum MatchIdType

Namespace: [Autodesk.ModelDerivative.Model](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative.Model)Assembly: Autodesk.ModelDerivative.dll

The first element of the array contains the name of the attribute to match (`objectid` or `externalId`). Use the `MatchIdType` enum to pick the value for the first element. Subsequent elements contain the values to match.

For example, if you specify an array as: `"$in":["objectid",1,2]`, the request will only return the properties of the objects with `objectid` = `1` and `2`. If you specify an array as `"$in":["externalId","doc_982afc8a","doc_afd75233" ]` the request will only return the properties of the objects with `externalId` = `doc_982afc8a` and `doc_afd75233`.

```
[JsonConverter(typeof(StringEnumConverter))]
public enum MatchIdType
```

## Fields

`ExternalId = 1`

Enum ExternalId for value: externalId

`ObjectId = 0`

Enum Objectid for value: objectid

---
원본 문서: https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative.Model/MatchIdType
