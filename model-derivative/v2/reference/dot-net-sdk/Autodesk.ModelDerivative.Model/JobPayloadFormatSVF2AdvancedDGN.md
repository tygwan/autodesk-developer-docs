---
title: "JobPayloadFormatSVF2AdvancedDGN Class"
url_path: reference/dot-net-sdk/Autodesk.ModelDerivative.Model/JobPayloadFormatSVF2AdvancedDGN
product: "Model Derivative API"
surface: "model-derivative-v2"
protocol: ".NET SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "dot-net-sdk"
---
# Class JobPayloadFormatSVF2AdvancedDGN

Namespace: [Autodesk.ModelDerivative.Model](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative.Model)Assembly: Autodesk.ModelDerivative.dll

Contains advanced configuration settings for translation jobs processing DGN inputs.

```
[DataContract]
public class JobPayloadFormatSVF2AdvancedDGN : IJobPayloadFormatSVF2Advanced
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ←
[JobPayloadFormatSVF2AdvancedDGN](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative.Model/JobPayloadFormatSVF2AdvancedDGN)

## Implements

[IJobPayloadFormatSVF2Advanced](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative.Model/IJobPayloadFormatSVF2Advanced)

## Inherited Members

[object.Equals(object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)),
[object.Equals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)),
[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode),
[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype),
[object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone),
[object.ReferenceEquals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals),
[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### JobPayloadFormatSVF2AdvancedDGN()

Initializes a new instance of the class.

```
public JobPayloadFormatSVF2AdvancedDGN()
```

## Properties

### RequestedLinkageIDs

An array containing user data linkage IDs of the linkage data to be extracted from the DGN file. Linkage data is not extracted if you do not specify this attribute.

```
[DataMember(Name = "requestedLinkageIDs", EmitDefaultValue = false)]
public List<int?> RequestedLinkageIDs { get; set; }
```

#### Property Value

[List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)?>

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
원본 문서: https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative.Model/JobPayloadFormatSVF2AdvancedDGN
