---
title: "Manifest Class"
url_path: reference/dot-net-sdk/Autodesk.ModelDerivative.Model/Manifest
product: "Model Derivative API"
surface: "model-derivative-v2"
protocol: ".NET SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "dot-net-sdk"
---
# Class Manifest

Namespace: [Autodesk.ModelDerivative.Model](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative.Model)Assembly: Autodesk.ModelDerivative.dll

Represents the successful response of a Fetch Manifest operation.

```
[DataContract]
public class Manifest
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ←
[Manifest](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative.Model/Manifest)

## Inherited Members

[object.Equals(object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)),
[object.Equals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)),
[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode),
[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype),
[object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone),
[object.ReferenceEquals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals),
[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### Manifest()

Initializes a new instance of the class.

```
public Manifest()
```

## Properties

### Derivatives

An array of objects, where each object represents a derivative of the source design.

```
[DataMember(Name = "derivatives", EmitDefaultValue = false)]
public List<ManifestDerivative> Derivatives { get; set; }
```

#### Property Value

[List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list-1)<[ManifestDerivative](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative.Model/ManifestDerivative)>

### HasThumbnail
- `true`: There is a thumbnail for the source design.
- `false`: There is no thumbnail for the source design.

```
[DataMember(Name = "hasThumbnail", EmitDefaultValue = false)]
public string HasThumbnail { get; set; }
```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### Progress

Indicates the overall progress of all translation jobs, as a percentage. Once all requested derivatives are generated, the value changes to `complete`.

```
[DataMember(Name = "progress", EmitDefaultValue = false)]
public string Progress { get; set; }
```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### Region

Specifies the data center where the manifest, derivatives, and references are stored. Possible values are:
- `US` - Data center for the US region.
- `EMEA` - Data center for European Union, Middle East, and Africa.
- `APAC` - Data center for the Australia region.

```
[DataMember(Name = "region", EmitDefaultValue = false)]
public string Region { get; set; }
```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### Status

Overall status of all translation jobs for the source design. Possible values are: `pending`, `success`, `inprogress`, `failed`, `timeout`.

```
[DataMember(Name = "status", EmitDefaultValue = false)]
public string Status { get; set; }
```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### Type

The type of data that is returned. Always `manifest`.

```
[DataMember(Name = "type", EmitDefaultValue = false)]
public string Type { get; set; }
```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### Urn

The URL-safe Base64 encoded URN of the source design.

```
[DataMember(Name = "urn", EmitDefaultValue = false)]
public string Urn { get; set; }
```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### _Version

Indicates the version of the schema that the manifest is based on.

```
[DataMember(Name = "version", EmitDefaultValue = false)]
public string _Version { get; set; }
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
원본 문서: https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative.Model/Manifest
