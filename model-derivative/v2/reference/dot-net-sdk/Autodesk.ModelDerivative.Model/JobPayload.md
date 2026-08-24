---
title: "JobPayload Class"
url_path: reference/dot-net-sdk/Autodesk.ModelDerivative.Model/JobPayload
product: "Model Derivative API"
surface: "model-derivative-v2"
protocol: ".NET SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "dot-net-sdk"
---
# Class JobPayload

Namespace: [Autodesk.ModelDerivative.Model](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative.Model)Assembly: Autodesk.ModelDerivative.dll

Represents the request body of a Create Translation Job operation.

```
[DataContract]
public class JobPayload
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ←
[JobPayload](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative.Model/JobPayload)

## Inherited Members

[object.Equals(object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)),
[object.Equals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)),
[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode),
[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype),
[object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone),
[object.ReferenceEquals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals),
[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### JobPayload()

Initializes a new instance of the class.

```
public JobPayload()
```

## Properties

### Input

Gets or Sets Input

```
[DataMember(Name = "input", EmitDefaultValue = false)]
public JobPayloadInput Input { get; set; }
```

#### Property Value

[JobPayloadInput](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative.Model/JobPayloadInput)

### Misc

Gets or Sets Misc

```
[DataMember(Name = "misc", EmitDefaultValue = false)]
public JobPayloadMisc Misc { get; set; }
```

#### Property Value

[JobPayloadMisc](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative.Model/JobPayloadMisc)

### Output

Gets or Sets Output

```
[DataMember(Name = "output", EmitDefaultValue = false)]
public JobPayloadOutput Output { get; set; }
```

#### Property Value

[JobPayloadOutput](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative.Model/JobPayloadOutput)

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
원본 문서: https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative.Model/JobPayload
