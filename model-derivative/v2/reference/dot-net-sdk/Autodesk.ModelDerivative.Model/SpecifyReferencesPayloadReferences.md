---
title: "SpecifyReferencesPayloadReferences Class"
url_path: reference/dot-net-sdk/Autodesk.ModelDerivative.Model/SpecifyReferencesPayloadReferences
product: "Model Derivative API"
surface: "model-derivative-v2"
protocol: ".NET SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "dot-net-sdk"
---
# Class SpecifyReferencesPayloadReferences

Namespace: [Autodesk.ModelDerivative.Model](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative.Model)Assembly: Autodesk.ModelDerivative.dll

SpecifyReferencesPayloadReferences

```
[DataContract]
public class SpecifyReferencesPayloadReferences
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ←
[SpecifyReferencesPayloadReferences](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative.Model/SpecifyReferencesPayloadReferences)

## Inherited Members

[object.Equals(object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)),
[object.Equals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)),
[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode),
[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype),
[object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone),
[object.ReferenceEquals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals),
[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### SpecifyReferencesPayloadReferences()

Initializes a new instance of the class.

```
public SpecifyReferencesPayloadReferences()
```

## Properties

### Filename

The file name of the referenced file. By default, it is set to `""` and the referenced file will be downloaded by its `urn` and placed relative to the top-level component using `relativePath`.

```
[DataMember(Name = "filename", EmitDefaultValue = false)]
public string Filename { get; set; }
```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### Metadata

An object to hold custom metadata.

```
[DataMember(Name = "metadata", EmitDefaultValue = false)]
public Dictionary<string, object> Metadata { get; set; }
```

#### Property Value

[Dictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [object](https://learn.microsoft.com/dotnet/api/system.object)>

### RelativePath

The path to the referenced file, relative to the top level component. By default, it is set to `""`, which means that the referenced file and top level component are in the same folder.

```
[DataMember(Name = "relativePath", EmitDefaultValue = false)]
public string RelativePath { get; set; }
```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### Urn

The URN of the referenced file.

```
[DataMember(Name = "urn", EmitDefaultValue = false)]
public string Urn { get; set; }
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
원본 문서: https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative.Model/SpecifyReferencesPayloadReferences
