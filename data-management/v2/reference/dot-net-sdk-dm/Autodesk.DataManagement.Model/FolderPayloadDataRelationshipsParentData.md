---
title: "FolderPayloadDataRelationshipsParentData Class"
url_path: reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/FolderPayloadDataRelationshipsParentData
product: "Data Management API"
surface: "data-management-v2"
protocol: ".NET SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "dot-net-sdk-dm"
---
# Class FolderPayloadDataRelationshipsParentData

Namespace: [Autodesk.DataManagement.Model](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model)Assembly: Autodesk.DataManagement.dll

The data about the parent of the folder to be created.

```
[DataContract]
public class FolderPayloadDataRelationshipsParentData
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ←
[FolderPayloadDataRelationshipsParentData](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/FolderPayloadDataRelationshipsParentData)

## Inherited Members

[object.Equals(object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)),
[object.Equals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)),
[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode),
[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype),
[object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone),
[object.ReferenceEquals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals),
[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### FolderPayloadDataRelationshipsParentData()

Initializes a new instance of the class.

```
public FolderPayloadDataRelationshipsParentData()
```

## Properties

### Id

The URN of the parent folder. For information on how to find the URN, see the initial steps of the [Download a File](https://aps.autodesk.com/en/docs/data/v2/tutorials/download-file/) tutorial.

Note that for BIM 360 Docs, new folders must be created within an existing folder (e.g., the Plans or Project Files folders),
and not directly within the root folder. Permissions, visibility (e.g., `items:autodesk.bim360:Document` or `items:autodesk.bim360:File`),
and actions (e.g., OCR) are inherited from the existing parent folder. New folders also inherit subscriptions such as the
notifications sent when files are added to a folder.

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
원본 문서: https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/FolderPayloadDataRelationshipsParentData
