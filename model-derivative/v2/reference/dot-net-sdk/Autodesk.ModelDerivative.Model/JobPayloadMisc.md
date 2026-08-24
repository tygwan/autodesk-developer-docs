---
title: "JobPayloadMisc Class"
url_path: reference/dot-net-sdk/Autodesk.ModelDerivative.Model/JobPayloadMisc
product: "Model Derivative API"
surface: "model-derivative-v2"
protocol: ".NET SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "dot-net-sdk"
---
# Class JobPayloadMisc

Namespace: [Autodesk.ModelDerivative.Model](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative.Model)Assembly: Autodesk.ModelDerivative.dll

Contains webhook configuration settings for notifying external systems about translation job events.

```
[DataContract]
public class JobPayloadMisc
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ←
[JobPayloadMisc](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative.Model/JobPayloadMisc)

## Inherited Members

[object.Equals(object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)),
[object.Equals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)),
[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode),
[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype),
[object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone),
[object.ReferenceEquals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals),
[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### JobPayloadMisc()

Initializes a new instance of the class.

```
public JobPayloadMisc()
```

## Properties

### Workflow

The workflow ID of the webhook that listens to Model Derivative events. It must be 36 characters or less and can only contain alphanumeric characters (A-Z, 0-9) and hyphens (-).

```
[DataMember(Name = "workflow", EmitDefaultValue = false)]
public string Workflow { get; set; }
```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### WorkflowAttribute

A user-defined JSON object, which you can use to set some custom workflow information. It must be less than 1KB and is ignored if `misc.workflow` is not specified.

```
[DataMember(Name = "workflowAttribute", EmitDefaultValue = false)]
public object WorkflowAttribute { get; set; }
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
원본 문서: https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative.Model/JobPayloadMisc
