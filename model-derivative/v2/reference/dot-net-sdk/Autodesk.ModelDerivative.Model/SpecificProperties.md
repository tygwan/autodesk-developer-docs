---
title: "SpecificProperties Class"
url_path: reference/dot-net-sdk/Autodesk.ModelDerivative.Model/SpecificProperties
product: "Model Derivative API"
surface: "model-derivative-v2"
protocol: ".NET SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "dot-net-sdk"
---
# Class SpecificProperties

Namespace: [Autodesk.ModelDerivative.Model](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative.Model)Assembly: Autodesk.ModelDerivative.dll

Represents the successful response of a Fetch Specific Properties operation.

```
[DataContract]
public class SpecificProperties
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ←
[SpecificProperties](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative.Model/SpecificProperties)

## Inherited Members

[object.Equals(object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)),
[object.Equals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)),
[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode),
[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype),
[object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone),
[object.ReferenceEquals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals),
[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### SpecificProperties()

Initializes a new instance of the class.

```
public SpecificProperties()
```

## Properties

### Data

Gets or Sets Data

```
[DataMember(Name = "data", EmitDefaultValue = false)]
public PropertiesData Data { get; set; }
```

#### Property Value

[PropertiesData](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative.Model/PropertiesData)

### IsProcessing

Returns true if the response is 202 - Accepted

```
public bool IsProcessing { get; }
```

#### Property Value

[bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Pagination

Gets or Sets Pagination

```
[DataMember(Name = "pagination", EmitDefaultValue = false)]
public SpecificPropertiesPagination Pagination { get; set; }
```

#### Property Value

[SpecificPropertiesPagination](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative.Model/SpecificPropertiesPagination)

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
원본 문서: https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative.Model/SpecificProperties
