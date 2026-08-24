---
title: "ManifestDerivative Class"
url_path: reference/dot-net-sdk/Autodesk.ModelDerivative.Model/ManifestDerivative
product: "Model Derivative API"
surface: "model-derivative-v2"
protocol: ".NET SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "dot-net-sdk"
---
# Class ManifestDerivative

Namespace: [Autodesk.ModelDerivative.Model](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative.Model)Assembly: Autodesk.ModelDerivative.dll

Represents a derivative generated for the source design.

```
[DataContract]
public class ManifestDerivative
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ←
[ManifestDerivative](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative.Model/ManifestDerivative)

## Inherited Members

[object.Equals(object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)),
[object.Equals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)),
[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode),
[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype),
[object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone),
[object.ReferenceEquals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals),
[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### ManifestDerivative()

Initializes a new instance of the class.

```
public ManifestDerivative()
```

## Properties

### Children

An array of objects, where each object represents a resource generated for the derivative. For example, a Model View (Viewable) of the source design.

```
[DataMember(Name = "children", EmitDefaultValue = false)]
public List<ManifestResources> Children { get; set; }
```

#### Property Value

[List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list-1)<[ManifestResources](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative.Model/ManifestResources)>

### HasThumbnail
- `true`: The derivative has a thumbnail.
- `false`: The derivative does not have a thumbnail.

```
[DataMember(Name = "hasThumbnail", EmitDefaultValue = false)]
public string HasThumbnail { get; set; }
```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### Messages

Gets or Sets Messages

```
[DataMember(Name = "messages", EmitDefaultValue = false)]
public List<Messages> Messages { get; set; }
```

#### Property Value

[List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list-1)<[Messages](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative.Model/Messages)>

### Name

The name of the resource.

```
[DataMember(Name = "name", EmitDefaultValue = false)]
public string Name { get; set; }
```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### OutputType

The file type/format of the derivative. Possible values are: `dwg`, `fbx`, `ifc`, `iges`, `obj` , `step`, `stl`, `svf`, `svf2`, `thumbnail`.

```
[DataMember(Name = "outputType", EmitDefaultValue = false)]
public string OutputType { get; set; }
```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### Progress

Indicates the progress of the process generating this derivative, as a percentage. Once complete, the value changes to `complete`.

```
[DataMember(Name = "progress", EmitDefaultValue = false)]
public string Progress { get; set; }
```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### Status

Status of the task generating this derivative. Possible values are: `pending`, `inprogress`, `success`, `failed`, `timeout`.

```
[DataMember(Name = "status", EmitDefaultValue = false)]
public string Status { get; set; }
```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

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
원본 문서: https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative.Model/ManifestDerivative
