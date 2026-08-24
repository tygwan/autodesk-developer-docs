---
title: "GreaterThan Class"
url_path: reference/dot-net-sdk/Autodesk.ModelDerivative.Model/GreaterThan
product: "Model Derivative API"
surface: "model-derivative-v2"
protocol: ".NET SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "dot-net-sdk"
---
# Class GreaterThan

Namespace: [Autodesk.ModelDerivative.Model](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative.Model)Assembly: Autodesk.ModelDerivative.dll

Describes a query for retrieving objects where a specified numeric property is greater than or equal to a specified value.

```
[DataContract]
public class GreaterThan : ISpecificPropertiesPayloadQuery
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ←
[GreaterThan](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative.Model/GreaterThan)

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

### GreaterThan()

Initializes a new instance of the class.

```
public GreaterThan()
```

## Properties

### Ge

Returns only the objects where the value of the specified numerical property is greater than or equal to the specified value.

The first element of the array contains the name of the property. The next element specifies the values that the property must be greater than or equal to. The array can only be two elements long.

For example, if you specify an array as: `"$ge":["properties.Dimensions.Width1",0.1]`, the request returns the properties of all objects whose `properties.Dimensions.Width1` property is greater than or equal to `0.1`.

**Note:** The Model Derivative service converts numeric values from their native units to metric base units for comparison. So, the value to compare with must be specified in metric base units. For example, if the property you are comparing is a length measurement, you must specify the value in `m`. Not in `cm`, `mm`, or `ft`.

```
[DataMember(Name = "$ge", EmitDefaultValue = false)]
public List<object> Ge { get; set; }
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
원본 문서: https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative.Model/GreaterThan
