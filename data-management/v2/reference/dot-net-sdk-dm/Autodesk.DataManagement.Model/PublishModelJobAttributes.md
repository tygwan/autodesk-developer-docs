---
title: "PublishModelJobAttributes Class"
url_path: reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/PublishModelJobAttributes
product: "Data Management API"
surface: "data-management-v2"
protocol: ".NET SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "dot-net-sdk-dm"
---
# Class PublishModelJobAttributes

Namespace: [Autodesk.DataManagement.Model](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model)Assembly: Autodesk.DataManagement.dll

Contains the properties of the response to the GetPublishModelJob command.

```
[DataContract]
public class PublishModelJobAttributes
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ←
[PublishModelJobAttributes](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/PublishModelJobAttributes)

## Inherited Members

[object.Equals(object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)),
[object.Equals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)),
[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode),
[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype),
[object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone),
[object.ReferenceEquals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals),
[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### PublishModelJobAttributes()

Initializes a new instance of the class.

```
public PublishModelJobAttributes()
```

## Properties

### Extension

Gets or Sets Extension

```
[DataMember(Name = "extension", EmitDefaultValue = false)]
public PublishModelJobAttributesExtension Extension { get; set; }
```

#### Property Value

[PublishModelJobAttributesExtension](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/PublishModelJobAttributesExtension)

### Status

Gets or Sets Status

```
[DataMember(Name = "status", EmitDefaultValue = true)]
public CommandExecutionStatus Status { get; set; }
```

#### Property Value

[CommandExecutionStatus](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/CommandExecutionStatus)

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
원본 문서: https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/PublishModelJobAttributes
