---
title: "Between Class"
url_path: reference/dot-net-sdk/Autodesk.ModelDerivative.Model/Between
product: "Model Derivative API"
surface: "model-derivative-v2"
protocol: ".NET SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "dot-net-sdk"
---
# Class Between

Namespace: [Autodesk.ModelDerivative.Model](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative.Model)Assembly: Autodesk.ModelDerivative.dll

Describes a query for retrieving objects where a specified numeric property falls within a specified range.

```
[DataContract]
public class Between : ISpecificPropertiesPayloadQuery
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ←
[Between](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative.Model/Between)

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

### Between()

Initializes a new instance of the class.

```
public Between()
```

## Properties

### _Between

Returns only the objects where the value of the specified numerical property lies between the specified values.

The first element of the array contains the name of the property. The next two elements specify the values that the property must lie between. The array can only be three elements long.

For example, if you specify an array as: `"$between":["properties.Dimensions.Width1",1,10]`, the request returns the properties of all objects whose `properties.Dimensions.Width1` property is between `1` and `10`.

**Note:** The Model Derivative service converts numeric values from their native units to metric base units for comparison. So, you must specify the values to compare with in metric base units. For example, if the property you are comparing is a length measurement, you must specify the values in `m`. Not in `cm`, `mm`, or `ft`.

```
[DataMember(Name = "$between", EmitDefaultValue = false)]
public List<object> _Between { get; set; }
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
원본 문서: https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative.Model/Between
