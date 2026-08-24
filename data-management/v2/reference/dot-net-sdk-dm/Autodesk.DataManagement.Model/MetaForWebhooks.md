---
title: "MetaForWebhooks Class"
url_path: reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/MetaForWebhooks
product: "Data Management API"
surface: "data-management-v2"
protocol: ".NET SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "dot-net-sdk-dm"
---
# Class MetaForWebhooks

Namespace: [Autodesk.DataManagement.Model](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model)Assembly: Autodesk.DataManagement.dll

Meta information required for webhooks.

```
[DataContract]
public class MetaForWebhooks
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ←
[MetaForWebhooks](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/MetaForWebhooks)

## Inherited Members

[object.Equals(object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)),
[object.Equals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)),
[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode),
[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype),
[object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone),
[object.ReferenceEquals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals),
[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### MetaForWebhooks()

Initializes a new instance of the class.

```
public MetaForWebhooks()
```

## Properties

### Workflow

The Workflow ID of a webhook that listens to Model Derivative events. Must be less than 36 characters.
Only ASCII characters (a-z, A-Z, 0-9), periods (.), and hyphens (-) are accepted.
See the [Creating a Webhook and Listening to Events](https://aps.autodesk.com/en/docs/webhooks/v1/tutorials/create-a-hook-model-derivative) tutorial for more information.

**Note**: This attribute applies to BIM 360 Docs only.

```
[DataMember(Name = "workflow", EmitDefaultValue = false)]
public string Workflow { get; set; }
```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### WorkflowAttribute

A user defined JSON object containing custom workflow information for the specified webhook event. Must be less than 1KB.

**Note**: Applicable only if a valid value has been specified for `meta.workflow`.

```
[DataMember(Name = "workflowAttribute", EmitDefaultValue = false)]
public string WorkflowAttribute { get; set; }
```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### ToString()

Returns the string presentation of the object.

```
public override string ToString()
```

#### Returns

[string](https://learn.microsoft.com/dotnet/api/system.string)

String presentation of the object.

---
원본 문서: https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/MetaForWebhooks
