---
title: "JobPayloadFormatSVFAdvancedRVT Class"
url_path: reference/dot-net-sdk/Autodesk.ModelDerivative.Model/JobPayloadFormatSVFAdvancedRVT
product: "Model Derivative API"
surface: "model-derivative-v2"
protocol: ".NET SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "dot-net-sdk"
---
# Class JobPayloadFormatSVFAdvancedRVT

Namespace: [Autodesk.ModelDerivative.Model](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative.Model)Assembly: Autodesk.ModelDerivative.dll

Contains advanced configuration settings for translation jobs processing Revit inputs.

```
[DataContract]
public class JobPayloadFormatSVFAdvancedRVT : IJobPayloadFormatSVFAdvanced
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ←
[JobPayloadFormatSVFAdvancedRVT](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative.Model/JobPayloadFormatSVFAdvancedRVT)

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

### JobPayloadFormatSVFAdvancedRVT()

Initializes a new instance of the class.

```
public JobPayloadFormatSVFAdvancedRVT()
```

## Properties

### ExtractorVersion

Gets or Sets ExtractorVersion

```
[DataMember(Name = "extractorVersion", EmitDefaultValue = true)]
public ExtractorVersion ExtractorVersion { get; set; }
```

#### Property Value

[ExtractorVersion](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative.Model/ExtractorVersion)

### GenerateMasterViews

Generates master views when translating from the Revit input format to SVF. This option is ignored for all other input formats. This attribute defaults to false.

Master views are 3D views that are generated for each phase of the Revit model. A master view contains all elements (including “room” elements) present in the host model for that phase. The display name of a master view defaults to the name of the phase it is generated from. However, if a view with that name already exists, the Model Derivative service appends a suffix to the default display name.

**Notes:**
- Master views do not contain elements from linked models.
- Enabling this option can increase the time it takes to translate the model.

```
[DataMember(Name = "generateMasterViews", EmitDefaultValue = false)]
public bool? GenerateMasterViews { get; set; }
```

#### Property Value

[bool](https://learn.microsoft.com/dotnet/api/system.boolean)?

### MaterialMode

Gets or Sets MaterialMode

```
[DataMember(Name = "materialMode", EmitDefaultValue = true)]
public MaterialMode MaterialMode { get; set; }
```

#### Property Value

[MaterialMode](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative.Model/MaterialMode)

### _2dviews

Gets or Sets _2dviews

```
[DataMember(Name = "2dviews", EmitDefaultValue = true)]
public Model2dView _2dviews { get; set; }
```

#### Property Value

[Model2dView](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative.Model/Model2dView)

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
원본 문서: https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative.Model/JobPayloadFormatSVFAdvancedRVT
