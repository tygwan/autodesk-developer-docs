---
title: "ModelViewsDataMetadata Class"
url_path: reference/dot-net-sdk/Autodesk.ModelDerivative.Model/ModelViewsDataMetadata
product: "Model Derivative API"
surface: "model-derivative-v2"
protocol: ".NET SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "dot-net-sdk"
---
# Class ModelViewsDataMetadata

Namespace: [Autodesk.ModelDerivative.Model](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative.Model)Assembly: Autodesk.ModelDerivative.dll

An array of flat JSON objects representing metadata.

```
[DataContract]
public class ModelViewsDataMetadata
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ←
[ModelViewsDataMetadata](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative.Model/ModelViewsDataMetadata)

## Inherited Members

[object.Equals(object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)),
[object.Equals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)),
[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode),
[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype),
[object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone),
[object.ReferenceEquals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals),
[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### ModelViewsDataMetadata()

Initializes a new instance of the class.

```
public ModelViewsDataMetadata()
```

## Properties

### Guid

Unique ID of the Model View.

```
[DataMember(Name = "guid", EmitDefaultValue = false)]
public string Guid { get; set; }
```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### IsMasterView

`true`: Model View is a Master View derived from a Revit source design.

`false`: Model View is not a Master View.

```
[DataMember(Name = "isMasterView", EmitDefaultValue = false)]
public bool? IsMasterView { get; set; }
```

#### Property Value

[bool](https://learn.microsoft.com/dotnet/api/system.boolean)?

### Name

Name of the Model View.

```
[DataMember(Name = "name", EmitDefaultValue = false)]
public string Name { get; set; }
```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### Role

Gets or Sets Role

```
[DataMember(Name = "role", EmitDefaultValue = true)]
public Role Role { get; set; }
```

#### Property Value

[Role](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative.Model/Role)

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
원본 문서: https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative.Model/ModelViewsDataMetadata
