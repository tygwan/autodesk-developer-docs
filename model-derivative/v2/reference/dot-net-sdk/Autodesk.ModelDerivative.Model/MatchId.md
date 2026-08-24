---
title: "MatchId Class"
url_path: reference/dot-net-sdk/Autodesk.ModelDerivative.Model/MatchId
product: "Model Derivative API"
surface: "model-derivative-v2"
protocol: ".NET SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "dot-net-sdk"
---
# Class MatchId

Namespace: [Autodesk.ModelDerivative.Model](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative.Model)Assembly: Autodesk.ModelDerivative.dll

Describes a query for retrieving objects having the specified Object IDs or External IDs.

```
[DataContract]
public class MatchId : ISpecificPropertiesPayloadQuery
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ←
[MatchId](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative.Model/MatchId)

## Implements

[ISpecificPropertiesPayloadQuery](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative.Model/ISpecificPropertiesPayloadQuery)

## Inherited Members

[object.Equals(object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)),
[object.Equals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)),
[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode),
[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype),
[object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone),
[object.ReferenceEquals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals),
[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### MatchId()

Initializes a new instance of the class.

```
public MatchId()
```

## Properties

### In

Returns only the objects with their `objectid` or `externalId` attribute exactly matching one of the values specified in the array.

The first element of the array contains the name of the attribute to match (`objectid` or `externalId`). Use the `MatchIdType` enum to pick the value for the first element. Subsequent elements contain the values to match.

For example, if you specify an array as: `"$in":["objectid",1,2]`, the request will only return the properties of the objects with `objectid` = `1` and `2`. If you specify an array as `"$in":["externalId","doc_982afc8a","doc_afd75233" ]` the request will only return the properties of the objects with `externalId` = `doc_982afc8a` and `doc_afd75233`.

```
[DataMember(Name = "$in", EmitDefaultValue = false)]
public List<object> In { get; set; }
```

#### Property Value

[List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list-1)<[object](https://learn.microsoft.com/dotnet/api/system.object)>

## Methods

### ToString()

Returns the string presentation of the object

```
public override string ToString()
```

#### Returns

[string](https://learn.microsoft.com/dotnet/api/system.string)

String presentation of the object

---
원본 문서: https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative.Model/MatchId
