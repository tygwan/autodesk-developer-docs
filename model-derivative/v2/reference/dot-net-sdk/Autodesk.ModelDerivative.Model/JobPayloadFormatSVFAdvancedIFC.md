---
title: "JobPayloadFormatSVFAdvancedIFC Class"
url_path: reference/dot-net-sdk/Autodesk.ModelDerivative.Model/JobPayloadFormatSVFAdvancedIFC
product: "Model Derivative API"
surface: "model-derivative-v2"
protocol: ".NET SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "dot-net-sdk"
---
# Class JobPayloadFormatSVFAdvancedIFC

Namespace: [Autodesk.ModelDerivative.Model](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative.Model)Assembly: Autodesk.ModelDerivative.dll

Contains advanced configuration settings for translation jobs processing IFC inputs.

```
[DataContract]
public class JobPayloadFormatSVFAdvancedIFC : IJobPayloadFormatSVFAdvanced
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ←
[JobPayloadFormatSVFAdvancedIFC](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative.Model/JobPayloadFormatSVFAdvancedIFC)

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

### JobPayloadFormatSVFAdvancedIFC()

Initializes a new instance of the class.

```
public JobPayloadFormatSVFAdvancedIFC()
```

## Properties

### BuildingStoreys

Gets or Sets BuildingStoreys

```
[DataMember(Name = "buildingStoreys", EmitDefaultValue = true)]
public BuildingStoreys BuildingStoreys { get; set; }
```

#### Property Value

[BuildingStoreys](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative.Model/BuildingStoreys)

### ConversionMethod

Gets or Sets ConversionMethod

```
[DataMember(Name = "conversionMethod", EmitDefaultValue = true)]
public ConversionMethod ConversionMethod { get; set; }
```

#### Property Value

[ConversionMethod](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative.Model/ConversionMethod)

### OpeningElements

Gets or Sets OpeningElements

```
[DataMember(Name = "openingElements", EmitDefaultValue = true)]
public OpeningElements OpeningElements { get; set; }
```

#### Property Value

[OpeningElements](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative.Model/OpeningElements)

### Spaces

Gets or Sets Spaces

```
[DataMember(Name = "spaces", EmitDefaultValue = true)]
public Spaces Spaces { get; set; }
```

#### Property Value

[Spaces](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative.Model/Spaces)

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
원본 문서: https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative.Model/JobPayloadFormatSVFAdvancedIFC
