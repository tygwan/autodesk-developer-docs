---
title: "JobAcceptedJobs Class"
url_path: reference/dot-net-sdk/Autodesk.ModelDerivative.Model/JobAcceptedJobs
product: "Model Derivative API"
surface: "model-derivative-v2"
protocol: ".NET SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "dot-net-sdk"
---
# Class JobAcceptedJobs

Namespace: [Autodesk.ModelDerivative.Model](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative.Model)Assembly: Autodesk.ModelDerivative.dll

List of the requested outputs.

```
[DataContract]
public class JobAcceptedJobs
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ←
[JobAcceptedJobs](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative.Model/JobAcceptedJobs)

## Inherited Members

[object.Equals(object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)),
[object.Equals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)),
[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode),
[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype),
[object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone),
[object.ReferenceEquals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals),
[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### JobAcceptedJobs()

Initializes a new instance of the class.

```
public JobAcceptedJobs()
```

## Properties

### Output

Identical to the `output` object of the request body. For information on each attribute, see the request body structure description.

```
[DataMember(Name = "output", EmitDefaultValue = false)]
public object Output { get; set; }
```

#### Property Value

[object](https://learn.microsoft.com/dotnet/api/system.object)

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
원본 문서: https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative.Model/JobAcceptedJobs
