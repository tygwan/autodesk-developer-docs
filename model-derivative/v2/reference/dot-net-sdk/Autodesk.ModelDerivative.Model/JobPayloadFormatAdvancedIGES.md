---
title: "JobPayloadFormatAdvancedIGES Class"
url_path: reference/dot-net-sdk/Autodesk.ModelDerivative.Model/JobPayloadFormatAdvancedIGES
product: "Model Derivative API"
surface: "model-derivative-v2"
protocol: ".NET SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "dot-net-sdk"
---
# Class JobPayloadFormatAdvancedIGES

Namespace: [Autodesk.ModelDerivative.Model](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative.Model)Assembly: Autodesk.ModelDerivative.dll

Contains advanced configuration settings for translation jobs producing IGES outputs.

```
[DataContract]
public class JobPayloadFormatAdvancedIGES
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ←
[JobPayloadFormatAdvancedIGES](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative.Model/JobPayloadFormatAdvancedIGES)

## Inherited Members

[object.Equals(object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)),
[object.Equals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)),
[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode),
[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype),
[object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone),
[object.ReferenceEquals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals),
[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### JobPayloadFormatAdvancedIGES()

Initializes a new instance of the class.

```
public JobPayloadFormatAdvancedIGES()
```

## Properties

### SheetType

Gets or Sets SheetType

```
[DataMember(Name = "sheetType", EmitDefaultValue = true)]
public SheetType SheetType { get; set; }
```

#### Property Value

[SheetType](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative.Model/SheetType)

### SolidType

Gets or Sets SolidType

```
[DataMember(Name = "solidType", EmitDefaultValue = true)]
public SolidType SolidType { get; set; }
```

#### Property Value

[SolidType](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative.Model/SolidType)

### SurfaceType

Gets or Sets SurfaceType

```
[DataMember(Name = "surfaceType", EmitDefaultValue = true)]
public SurfaceType SurfaceType { get; set; }
```

#### Property Value

[SurfaceType](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative.Model/SurfaceType)

### Tolerance

Possible values are between `0` and `1`. By default it is set at 0.001.

```
[DataMember(Name = "tolerance", EmitDefaultValue = false)]
public float? Tolerance { get; set; }
```

#### Property Value

[float](https://learn.microsoft.com/dotnet/api/system.single)?

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
원본 문서: https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative.Model/JobPayloadFormatAdvancedIGES
