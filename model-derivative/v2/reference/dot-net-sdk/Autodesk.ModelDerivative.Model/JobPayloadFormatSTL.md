---
title: "JobPayloadFormatSTL Class"
url_path: reference/dot-net-sdk/Autodesk.ModelDerivative.Model/JobPayloadFormatSTL
product: "Model Derivative API"
surface: "model-derivative-v2"
protocol: ".NET SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "dot-net-sdk"
---
# Class JobPayloadFormatSTL

Namespace: [Autodesk.ModelDerivative.Model](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative.Model)Assembly: Autodesk.ModelDerivative.dll

Describes the options for translation jobs producing STL outputs.

```
[DataContract]
public class JobPayloadFormatSTL : IJobPayloadFormat
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ←
[JobPayloadFormatSTL](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative.Model/JobPayloadFormatSTL)

## Implements

[IJobPayloadFormat](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative.Model/IJobPayloadFormat)

## Inherited Members

[object.Equals(object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)),
[object.Equals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)),
[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode),
[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype),
[object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone),
[object.ReferenceEquals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals),
[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### JobPayloadFormatSTL()

Initializes a new instance of the class.

```
public JobPayloadFormatSTL()
```

## Properties

### Advanced

Gets or Sets Advanced

```
[DataMember(Name = "advanced", EmitDefaultValue = false)]
public JobPayloadFormatAdvancedSTL Advanced { get; set; }
```

#### Property Value

[JobPayloadFormatAdvancedSTL](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative.Model/JobPayloadFormatAdvancedSTL)

### Type

The requested output type. `stl` in this case.

```
[DataMember(Name = "type", EmitDefaultValue = true)]
public OutputType Type { get; set; }
```

#### Property Value

[OutputType](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative.Model/OutputType)

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
원본 문서: https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative.Model/JobPayloadFormatSTL
