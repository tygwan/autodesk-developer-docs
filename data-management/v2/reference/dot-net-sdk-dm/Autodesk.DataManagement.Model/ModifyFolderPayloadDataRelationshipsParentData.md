---
title: "ModifyFolderPayloadDataRelationshipsParentData Class"
url_path: reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/ModifyFolderPayloadDataRelationshipsParentData
product: "Data Management API"
surface: "data-management-v2"
protocol: ".NET SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "dot-net-sdk-dm"
---
# Class ModifyFolderPayloadDataRelationshipsParentData

Namespace: [Autodesk.DataManagement.Model](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model)Assembly: Autodesk.DataManagement.dll

A container for the data that defines the parent of this folder.

```
[DataContract]
public class ModifyFolderPayloadDataRelationshipsParentData
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ←
[ModifyFolderPayloadDataRelationshipsParentData](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/ModifyFolderPayloadDataRelationshipsParentData)

## Inherited Members

[object.Equals(object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)),
[object.Equals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)),
[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode),
[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype),
[object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone),
[object.ReferenceEquals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals),
[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### ModifyFolderPayloadDataRelationshipsParentData()

Initializes a new instance of the class.

```
public ModifyFolderPayloadDataRelationshipsParentData()
```

## Properties

### Id

The URN of the parent folder to which you want to move a folder to.

```
[DataMember(Name = "id", EmitDefaultValue = false)]
public string Id { get; set; }
```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### Type

Gets or Sets Type

```
[DataMember(Name = "type", EmitDefaultValue = true)]
public TypeFolder Type { get; set; }
```

#### Property Value

[TypeFolder](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/TypeFolder)

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
원본 문서: https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/ModifyFolderPayloadDataRelationshipsParentData
