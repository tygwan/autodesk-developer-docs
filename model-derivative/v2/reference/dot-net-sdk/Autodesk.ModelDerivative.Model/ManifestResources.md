---
title: "ManifestResources Class"
url_path: reference/dot-net-sdk/Autodesk.ModelDerivative.Model/ManifestResources
product: "Model Derivative API"
surface: "model-derivative-v2"
protocol: ".NET SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "dot-net-sdk"
---
# Class ManifestResources

Namespace: [Autodesk.ModelDerivative.Model](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative.Model)Assembly: Autodesk.ModelDerivative.dll

Represents a resource generated for a derivative.

```
[DataContract]
public class ManifestResources
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ←
[ManifestResources](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative.Model/ManifestResources)

## Inherited Members

[object.Equals(object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)),
[object.Equals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)),
[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode),
[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype),
[object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone),
[object.ReferenceEquals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals),
[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### ManifestResources()

Initializes a new instance of the class.

```
public ManifestResources()
```

## Properties

### Camera

The default viewpoint of a viewable 3D resource.

```
[DataMember(Name = "camera", EmitDefaultValue = false)]
public List<decimal?> Camera { get; set; }
```

#### Property Value

[List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list-1)<[decimal](https://learn.microsoft.com/dotnet/api/system.decimal)?>

### Children

An optional array of objects, where each object (of type `children`) represents another resource generated for this resource.

```
[DataMember(Name = "children", EmitDefaultValue = false)]
public List<ManifestResources> Children { get; set; }
```

#### Property Value

[List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list-1)<[ManifestResources](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative.Model/ManifestResources)>

### Guid

An ID that uniquely identifies the resource.

```
[DataMember(Name = "guid", EmitDefaultValue = false)]
public string Guid { get; set; }
```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### HasThumbnail
- `true`: There is a thumbnail for the resource.
- `false`: There is no thumbnail for the resource.

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

### Mime

MIME type of the content of the resource.

```
[DataMember(Name = "mime", EmitDefaultValue = false)]
public string Mime { get; set; }
```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### Name

The name of the resource.

```
[DataMember(Name = "name", EmitDefaultValue = false)]
public string Name { get; set; }
```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### PhaseIds

The unique ID of the phase the resource file was generated from. This attribute is present only on Model Views (Viewables) generated from a Revit source design. This attribute can be a string (for Revit non-sheet 2D or 3D views) or an array of strings (for Revit sheet views).

```
[DataMember(Name = "phaseIds", EmitDefaultValue = false)]
public object PhaseIds { get; set; }
```

#### Property Value

[object](https://learn.microsoft.com/dotnet/api/system.object)

### PhaseNames

The name of the phase the resource file was generated from. This attribute is present only on Model Views (Viewables) generated from a Revit source design. This attribute can be a string (for Revit non-sheet 2D or 3D views) or an array of strings (for Revit sheet views).

```
[DataMember(Name = "phaseNames", EmitDefaultValue = false)]
public object PhaseNames { get; set; }
```

#### Property Value

[object](https://learn.microsoft.com/dotnet/api/system.object)

### Progress

Indicates the progress of the process generating this resource, as a percentage. Once complete, the value changes to `complete`.

```
[DataMember(Name = "progress", EmitDefaultValue = false)]
public string Progress { get; set; }
```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### Resolution

An array of two integers where the first number represents the width of a thumbnail in pixels, and the second the height. Available only for thumbnail resources.

```
[DataMember(Name = "resolution", EmitDefaultValue = false)]
public List<int?> Resolution { get; set; }
```

#### Property Value

[List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)?>

### Role

File type of the resource.

```
[DataMember(Name = "role", EmitDefaultValue = false)]
public string Role { get; set; }
```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### Status

Status of the task generating this resource; Possible values are: `pending`, `inprogress`, `success`, `failed`, `timeout`

```
[DataMember(Name = "status", EmitDefaultValue = false)]
public string Status { get; set; }
```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### Type

Type of resource this JSON object represents.

```
[DataMember(Name = "type", EmitDefaultValue = false)]
public string Type { get; set; }
```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### Urn

The URN that you can use to access the resource.

```
[DataMember(Name = "urn", EmitDefaultValue = false)]
public string Urn { get; set; }
```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### ViewableID

An ID assigned to a resource that can be displayed in a viewer.

```
[DataMember(Name = "viewableID", EmitDefaultValue = false)]
public string ViewableID { get; set; }
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
원본 문서: https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative.Model/ManifestResources
