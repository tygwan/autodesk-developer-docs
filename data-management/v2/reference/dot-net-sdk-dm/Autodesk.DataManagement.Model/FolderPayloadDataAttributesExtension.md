---
title: "FolderPayloadDataAttributesExtension Class"
url_path: reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/FolderPayloadDataAttributesExtension
product: "Data Management API"
surface: "data-management-v2"
protocol: ".NET SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "dot-net-sdk-dm"
---
# Class FolderPayloadDataAttributesExtension

Namespace: [Autodesk.DataManagement.Model](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model)Assembly: Autodesk.DataManagement.dll

A container of additional properties that extends the default properties of this resource.

```
[DataContract]
public class FolderPayloadDataAttributesExtension
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ←
[FolderPayloadDataAttributesExtension](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/FolderPayloadDataAttributesExtension)

## Inherited Members

[object.Equals(object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)),
[object.Equals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)),
[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode),
[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype),
[object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone),
[object.ReferenceEquals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals),
[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### FolderPayloadDataAttributesExtension()

Initializes a new instance of the class.

```
public FolderPayloadDataAttributesExtension()
```

## Properties

### Data

The container of additional properties.

The additional properties must follow the schema specified by `type` and `version`. Properties that don’t follow the schema will be ignored.

```
[DataMember(Name = "data", EmitDefaultValue = false)]
public object Data { get; set; }
```

#### Property Value

[object](https://learn.microsoft.com/dotnet/api/system.object)

### Type

The type of the extension.

For BIM 360 Docs folders, use `folders:autodesk.bim360:Folder`.

For all other services, use `folders:auto`

```
[DataMember(Name = "type", EmitDefaultValue = false)]
public string Type { get; set; }
```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### VarVersion

The version of the type. The current version is `1.0`.

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
원본 문서: https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/FolderPayloadDataAttributesExtension
