---
title: "BeginsWith Class"
url_path: reference/dot-net-sdk/Autodesk.ModelDerivative.Model/BeginsWith
product: "Model Derivative API"
surface: "model-derivative-v2"
protocol: ".NET SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "dot-net-sdk"
---
# Class BeginsWith

Namespace: [Autodesk.ModelDerivative.Model](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative.Model)Assembly: Autodesk.ModelDerivative.dll

Describes a query for retrieving objects whose names start with a specified text.

```
[DataContract]
public class BeginsWith : ISpecificPropertiesPayloadQuery
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ←
[BeginsWith](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative.Model/BeginsWith)

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

### BeginsWith()

Initializes a new instance of the class.

```
public BeginsWith()
```

## Properties

### Prefix

Returns only the objects with their `name` attribute beginning with the specified string.

The first element of the array contains the name of the attribute to match (`name`). The second element contains the string to match. The array can have only two elements. Only the objects whose name begin with the specified string are returned.

```
[DataMember(Name = "$prefix", EmitDefaultValue = false)]
public List<string> Prefix { get; set; }
```

#### Property Value

[List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)>

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
원본 문서: https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative.Model/BeginsWith
