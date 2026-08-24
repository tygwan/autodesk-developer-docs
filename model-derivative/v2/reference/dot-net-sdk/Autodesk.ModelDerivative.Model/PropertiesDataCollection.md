---
title: "PropertiesDataCollection Class"
url_path: reference/dot-net-sdk/Autodesk.ModelDerivative.Model/PropertiesDataCollection
product: "Model Derivative API"
surface: "model-derivative-v2"
protocol: ".NET SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "dot-net-sdk"
---
# Class PropertiesDataCollection

Namespace: [Autodesk.ModelDerivative.Model](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative.Model)Assembly: Autodesk.ModelDerivative.dll

PropertiesDataCollection

```
[DataContract]
public class PropertiesDataCollection
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ←
[PropertiesDataCollection](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative.Model/PropertiesDataCollection)

## Inherited Members

[object.Equals(object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)),
[object.Equals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)),
[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode),
[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype),
[object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone),
[object.ReferenceEquals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals),
[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### PropertiesDataCollection()

Initializes a new instance of the class.

```
public PropertiesDataCollection()
```

## Properties

### ExternalId

A unique identifier of the object as defined in the source design. For example, `UniqueID` in Revit files.

```
[DataMember(Name = "externalId", EmitDefaultValue = false)]
public string ExternalId { get; set; }
```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### Name

Name of the object.

```
[DataMember(Name = "name", EmitDefaultValue = false)]
public string Name { get; set; }
```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### ObjectId

Unique identifier of the object.

**Note:** The `objectid` is a non-persistent ID assigned to an object when a design file is translated to SVF or SVF2. So:
- The `objectid` of an object can change if the design is translated to SVF or SVF2 again.
- If you require a persistent ID to reference an object, use `externalId`.

```
[DataMember(Name = "objectid", EmitDefaultValue = false)]
public decimal? ObjectId { get; set; }
```

#### Property Value

[decimal](https://learn.microsoft.com/dotnet/api/system.decimal)?

### Properties

A JSON object containing dictionary objects (key value pairs), where the key is the property name and the value is the value of the property.

```
[DataMember(Name = "properties", EmitDefaultValue = false)]
public Dictionary<string, object> Properties { get; set; }
```

#### Property Value

[Dictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [object](https://learn.microsoft.com/dotnet/api/system.object)>

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
원본 문서: https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative.Model/PropertiesDataCollection
