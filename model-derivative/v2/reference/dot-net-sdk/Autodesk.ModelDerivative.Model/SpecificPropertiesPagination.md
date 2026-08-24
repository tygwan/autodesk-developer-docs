---
title: "SpecificPropertiesPagination Class"
url_path: reference/dot-net-sdk/Autodesk.ModelDerivative.Model/SpecificPropertiesPagination
product: "Model Derivative API"
surface: "model-derivative-v2"
protocol: ".NET SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "dot-net-sdk"
---
# Class SpecificPropertiesPagination

Namespace: [Autodesk.ModelDerivative.Model](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative.Model)Assembly: Autodesk.ModelDerivative.dll

Container for the attributes that define how the response paginated.

```
[DataContract]
public class SpecificPropertiesPagination
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ←
[SpecificPropertiesPagination](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative.Model/SpecificPropertiesPagination)

## Inherited Members

[object.Equals(object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)),
[object.Equals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)),
[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode),
[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype),
[object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone),
[object.ReferenceEquals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals),
[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### SpecificPropertiesPagination()

Initializes a new instance of the class.

```
public SpecificPropertiesPagination()
```

## Properties

### Limit

The maximum number of properties you requested for this page.

```
[DataMember(Name = "limit", EmitDefaultValue = false)]
public decimal? Limit { get; set; }
```

#### Property Value

[decimal](https://learn.microsoft.com/dotnet/api/system.decimal)?

### Offset

The number of items skipped (because they were returned in previous pages) when returning this page.

```
[DataMember(Name = "offset", EmitDefaultValue = false)]
public decimal? Offset { get; set; }
```

#### Property Value

[decimal](https://learn.microsoft.com/dotnet/api/system.decimal)?

### TotalResults

The total number of properties to be returned.

```
[DataMember(Name = "totalResults", EmitDefaultValue = false)]
public decimal? TotalResults { get; set; }
```

#### Property Value

[decimal](https://learn.microsoft.com/dotnet/api/system.decimal)?

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
원본 문서: https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative.Model/SpecificPropertiesPagination
