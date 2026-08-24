---
title: "JobPayloadFormatAdvancedSTLAdvanced Class"
url_path: reference/dot-net-sdk/Autodesk.ModelDerivative.Model/JobPayloadFormatAdvancedSTLAdvanced
product: "Model Derivative API"
surface: "model-derivative-v2"
protocol: ".NET SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "dot-net-sdk"
---
# Class JobPayloadFormatAdvancedSTLAdvanced

Namespace: [Autodesk.ModelDerivative.Model](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative.Model)Assembly: Autodesk.ModelDerivative.dll

Advanced options for `stl` type.

```
[DataContract]
public class JobPayloadFormatAdvancedSTLAdvanced
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ←
[JobPayloadFormatAdvancedSTLAdvanced](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative.Model/JobPayloadFormatAdvancedSTLAdvanced)

## Inherited Members

[object.Equals(object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)),
[object.Equals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)),
[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode),
[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype),
[object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone),
[object.ReferenceEquals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals),
[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### JobPayloadFormatAdvancedSTLAdvanced()

Initializes a new instance of the class.

```
public JobPayloadFormatAdvancedSTLAdvanced()
```

## Properties

### ExportColor

Color is exported by default. If set to `true`, color is exported. If set to `false`, color is not exported.

```
[DataMember(Name = "exportColor", EmitDefaultValue = false)]
public bool? ExportColor { get; set; }
```

#### Property Value

[bool](https://learn.microsoft.com/dotnet/api/system.boolean)?

### ExportFileStructure

Gets or Sets ExportFileStructure

```
[DataMember(Name = "exportFileStructure", EmitDefaultValue = true)]
public ExportFileStructure ExportFileStructure { get; set; }
```

#### Property Value

[ExportFileStructure](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative.Model/ExportFileStructure)

### Format

Gets or Sets Format

```
[DataMember(Name = "format", EmitDefaultValue = true)]
public Format Format { get; set; }
```

#### Property Value

[Format](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative.Model/Format)

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
원본 문서: https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative.Model/JobPayloadFormatAdvancedSTLAdvanced
