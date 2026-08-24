---
title: "SpecificPropertiesPayload Class"
url_path: reference/dot-net-sdk/Autodesk.ModelDerivative.Model/SpecificPropertiesPayload
product: "Model Derivative API"
surface: "model-derivative-v2"
protocol: ".NET SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "dot-net-sdk"
---
# Class SpecificPropertiesPayload

Namespace: [Autodesk.ModelDerivative.Model](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative.Model)Assembly: Autodesk.ModelDerivative.dll

Represents the request body of a Fetch Specific Properties operation.

```
[DataContract]
public class SpecificPropertiesPayload
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ←
[SpecificPropertiesPayload](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative.Model/SpecificPropertiesPayload)

## Inherited Members

[object.Equals(object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)),
[object.Equals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)),
[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode),
[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype),
[object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone),
[object.ReferenceEquals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals),
[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### SpecificPropertiesPayload()

Initializes a new instance of the class.

```
public SpecificPropertiesPayload()
```

## Properties

### Fields

Specifies what properties of the objects to return. If you do not specify this attribute, the response returns all properties.

Possible values are:
- `properties` - Return all properties.
- `properties.something`- Return the property named `something` and all its children.
- `properties.some*` - Return all properties with names that begin with `some` and all their children.
- `properties.category.*` - Return the property named `category` and all its children.
- `properties.*.property` - Return any property named `property` regardless of its parent.

```
[DataMember(Name = "fields", EmitDefaultValue = false)]
public object Fields { get; set; }
```

#### Property Value

[object](https://learn.microsoft.com/dotnet/api/system.object)

### Pagination

Gets or Sets Pagination

```
[DataMember(Name = "pagination", EmitDefaultValue = false)]
public SpecificPropertiesPayloadPagination Pagination { get; set; }
```

#### Property Value

[SpecificPropertiesPayloadPagination](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative.Model/SpecificPropertiesPayloadPagination)

### Payload

Gets or Sets Payload

```
[DataMember(Name = "payload", EmitDefaultValue = true)]
public Payload Payload { get; set; }
```

#### Property Value

[Payload](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative.Model/Payload)

### Query

Gets or Sets Query

```
[DataMember(Name = "query", EmitDefaultValue = false)]
public ISpecificPropertiesPayloadQuery Query { get; set; }
```

#### Property Value

[ISpecificPropertiesPayloadQuery](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative.Model/ISpecificPropertiesPayloadQuery)

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
원본 문서: https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative.Model/SpecificPropertiesPayload
