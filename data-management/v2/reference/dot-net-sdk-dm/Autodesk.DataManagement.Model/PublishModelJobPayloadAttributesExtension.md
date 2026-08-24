---
title: "PublishModelJobPayloadAttributesExtension Class"
url_path: reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/PublishModelJobPayloadAttributesExtension
product: "Data Management API"
surface: "data-management-v2"
protocol: ".NET SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "dot-net-sdk-dm"
---
# Class PublishModelJobPayloadAttributesExtension

Namespace: [Autodesk.DataManagement.Model](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model)Assembly: Autodesk.DataManagement.dll

An object that contains properties specific to the GetPublishModelJob command, extending the default properties of a command.

```
[DataContract]
public class PublishModelJobPayloadAttributesExtension
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ←
[PublishModelJobPayloadAttributesExtension](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/PublishModelJobPayloadAttributesExtension)

## Inherited Members

[object.Equals(object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)),
[object.Equals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)),
[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode),
[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype),
[object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone),
[object.ReferenceEquals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals),
[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### PublishModelJobPayloadAttributesExtension()

Initializes a new instance of the class.

```
public PublishModelJobPayloadAttributesExtension()
```

## Properties

### Type

Gets or Sets Type

```
[DataMember(Name = "type", EmitDefaultValue = true)]
public TypeCommandtypeGetPublishModelJob Type { get; set; }
```

#### Property Value

[TypeCommandtypeGetPublishModelJob](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/TypeCommandtypeGetPublishModelJob)

### VarVersion

The version of the schema. Must be `1.0.0`
for the GetPublishModelJob command.

```
[DataMember(Name = "version", EmitDefaultValue = false)]
public string VarVersion { get; set; }
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
원본 문서: https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/PublishModelJobPayloadAttributesExtension
