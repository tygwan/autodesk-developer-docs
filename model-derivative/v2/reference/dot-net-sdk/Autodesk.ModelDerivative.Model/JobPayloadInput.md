---
title: "JobPayloadInput Class"
url_path: reference/dot-net-sdk/Autodesk.ModelDerivative.Model/JobPayloadInput
product: "Model Derivative API"
surface: "model-derivative-v2"
protocol: ".NET SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "dot-net-sdk"
---
# Class JobPayloadInput

Namespace: [Autodesk.ModelDerivative.Model](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative.Model)Assembly: Autodesk.ModelDerivative.dll

Describes the attributes of the source design.

```
[DataContract]
public class JobPayloadInput
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ←
[JobPayloadInput](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative.Model/JobPayloadInput)

## Inherited Members

[object.Equals(object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)),
[object.Equals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)),
[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode),
[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype),
[object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone),
[object.ReferenceEquals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals),
[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### JobPayloadInput()

Initializes a new instance of the class.

```
public JobPayloadInput()
```

## Properties

### CheckReferences
- `true` - Instructs the system to check for references, and if any exist, download all referenced files. Setting this parameter to `true` is mandatory when translating source designs consisting of multiple files. For example, Autodesk Inventor assemblies.
- `false` - (Default) Instructs the system not to check for references.

```
[DataMember(Name = "checkReferences", EmitDefaultValue = false)]
public bool? CheckReferences { get; set; }
```

#### Property Value

[bool](https://learn.microsoft.com/dotnet/api/system.boolean)?

### CompressedUrn
- `true`: The source design is compressed as a zip file. If set to `true`, you need to define the `rootFilename`.’
- `false`: (Default) The source design is not compressed.

```
[DataMember(Name = "compressedUrn", EmitDefaultValue = false)]
public bool? CompressedUrn { get; set; }
```

#### Property Value

[bool](https://learn.microsoft.com/dotnet/api/system.boolean)?

### RootFilename

The file name of the top-level component of the source design. Mandatory if `compressedUrn` is set to `true`.

```
[DataMember(Name = "rootFilename", EmitDefaultValue = false)]
public string RootFilename { get; set; }
```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### Urn

The URL safe Base64 encoded URN of the source design.

**Note:** The URN is returned as the [objectID`once you complete uploading the source design to APS. This value must be converted to a`Base64 (URL Safe) encoded](http://www.freeformatter.com/base64-encoder.html) string before you can specify it for this attribute.

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
원본 문서: https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative.Model/JobPayloadInput
