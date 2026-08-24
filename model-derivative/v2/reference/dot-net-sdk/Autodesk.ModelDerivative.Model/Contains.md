---
title: "Contains Class"
url_path: reference/dot-net-sdk/Autodesk.ModelDerivative.Model/Contains
product: "Model Derivative API"
surface: "model-derivative-v2"
protocol: ".NET SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "dot-net-sdk"
---
# Class Contains

Namespace: [Autodesk.ModelDerivative.Model](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative.Model)Assembly: Autodesk.ModelDerivative.dll

Describes a query for retrieving objects where a specified property contains one or more words in a specified string.

```
[DataContract]
public class Contains : ISpecificPropertiesPayloadQuery
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ←
[Contains](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative.Model/Contains)

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

### Contains()

Initializes a new instance of the class.

```
public Contains()
```

## Properties

### _Contains

Returns only the objects where the value of the specified property contains the words specified in a string.

The first element of the array contains the name of the property. The second element contains a string containing the words to match. The array can only be two elements long.

For example, if you specify an array as: `"$contains":["properties.Materials and Finishes.Structural Material","Concrete Situ"]`, the request returns the properties of all objects whose `properties.Materials and Finishes.Structural Material` property contains the words `Concrete` and `Situ`. You can specify up to 50 words.

```
[DataMember(Name = "$contains", EmitDefaultValue = false)]
public List<string> _Contains { get; set; }
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
원본 문서: https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative.Model/Contains
