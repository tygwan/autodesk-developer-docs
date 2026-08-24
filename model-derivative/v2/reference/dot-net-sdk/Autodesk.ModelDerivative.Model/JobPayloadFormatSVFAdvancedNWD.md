---
title: "JobPayloadFormatSVFAdvancedNWD Class"
url_path: reference/dot-net-sdk/Autodesk.ModelDerivative.Model/JobPayloadFormatSVFAdvancedNWD
product: "Model Derivative API"
surface: "model-derivative-v2"
protocol: ".NET SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "dot-net-sdk"
---
# Class JobPayloadFormatSVFAdvancedNWD

Namespace: [Autodesk.ModelDerivative.Model](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative.Model)Assembly: Autodesk.ModelDerivative.dll

Contains advanced configuration settings for translation jobs processing NWD inputs.

```
[DataContract]
public class JobPayloadFormatSVFAdvancedNWD : IJobPayloadFormatSVFAdvanced
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ←
[JobPayloadFormatSVFAdvancedNWD](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative.Model/JobPayloadFormatSVFAdvancedNWD)

## Implements

[IJobPayloadFormatSVFAdvanced](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative.Model/IJobPayloadFormatSVFAdvanced)

## Inherited Members

[object.Equals(object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)),
[object.Equals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)),
[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode),
[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype),
[object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone),
[object.ReferenceEquals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals),
[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### JobPayloadFormatSVFAdvancedNWD()

Initializes a new instance of the class.

```
public JobPayloadFormatSVFAdvancedNWD()
```

## Properties

### AutodeskMaterialProperties

Specifies how to handle Autodesk material properties. Applicable only when the source design type is Navisworks.
- `true`: Extract properties for Autodesk materials.
- `false`: (Default) Do not extract properties for Autodesk materials.

```
[DataMember(Name = "autodeskMaterialProperties", EmitDefaultValue = false)]
public bool? AutodeskMaterialProperties { get; set; }
```

#### Property Value

[bool](https://learn.microsoft.com/dotnet/api/system.boolean)?

### BasicMaterialProperties

Specifies whether basic material properties must be extracted or not. Applicable only when the source design type is Navisworks.
- `true`: Extract properties for basic materials.
- `false`: (Default) Do not extract properties for basic materials.

```
[DataMember(Name = "basicMaterialProperties", EmitDefaultValue = false)]
public bool? BasicMaterialProperties { get; set; }
```

#### Property Value

[bool](https://learn.microsoft.com/dotnet/api/system.boolean)?

### HiddenObjects

Specifies whether hidden objects must be extracted or not. Applicable only when the source design type is Navisworks.
- `true`: Extract hidden objects from the input file.
- `false`: (Default) Do not extract hidden objects from the input file.

```
[DataMember(Name = "hiddenObjects", EmitDefaultValue = false)]
public bool? HiddenObjects { get; set; }
```

#### Property Value

[bool](https://learn.microsoft.com/dotnet/api/system.boolean)?

### TimelinerProperties

Specifies whether timeliner properties must be extracted or not. Applicable only when the source design type is Navisworks.
- `true`: Extract timeliner properties.
- `false`: (Default) Do not extract timeliner properties.

```
[DataMember(Name = "timelinerProperties", EmitDefaultValue = false)]
public bool? TimelinerProperties { get; set; }
```

#### Property Value

[bool](https://learn.microsoft.com/dotnet/api/system.boolean)?

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
원본 문서: https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative.Model/JobPayloadFormatSVFAdvancedNWD
