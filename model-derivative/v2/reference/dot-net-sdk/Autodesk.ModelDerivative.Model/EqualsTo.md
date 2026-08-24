---
title: "EqualsTo Class"
url_path: reference/dot-net-sdk/Autodesk.ModelDerivative.Model/EqualsTo
product: "Model Derivative API"
surface: "model-derivative-v2"
protocol: ".NET SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "dot-net-sdk"
---
# Class EqualsTo

Namespace: [Autodesk.ModelDerivative.Model](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative.Model)Assembly: Autodesk.ModelDerivative.dll

Describes a query for retrieving objects where a specified attribute exactly matches a specified value.

```
[DataContract]
public class EqualsTo : ISpecificPropertiesPayloadQuery
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ←
[EqualsTo](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative.Model/EqualsTo)

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

### EqualsTo()

Initializes a new instance of the class.

```
public EqualsTo()
```

## Properties

### Eq

Returns only the objects where the value of the specified attribute (`name` attribute or any numerical property) is exactly equal to the specified value.

The first element of the array contains the name of the attribute. This can be the `name` attribute or the name of a numerical property. The second element of the array must be the value to match. If the first element is `name`, must be a string value. If the first element is a numerical property, must be a numeric. The array can only be two elements long.

For example, if you specify an array as: `"$eq":["name","Rectangular"]`, the request will only return the properties of the object named `Rectangular`. if you specify an array as: `"$eq":["properties.Dimensions.Width1",0.6]`, the request will return the properties of all objects whose `properties.Dimensions.Width1` property is exactly equal to `0.6`.

**Note:** We recommend that you use `$between` instead of `$eq` when testing non-integer numeric values for equality. Using `between` mitigates floating-point errors.

```
[DataMember(Name = "$eq", EmitDefaultValue = false)]
public List<object> Eq { get; set; }
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
원본 문서: https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative.Model/EqualsTo
