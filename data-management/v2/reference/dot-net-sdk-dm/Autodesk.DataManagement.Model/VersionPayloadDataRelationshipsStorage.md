---
title: "VersionPayloadDataRelationshipsStorage Class"
url_path: reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/VersionPayloadDataRelationshipsStorage
product: "Data Management API"
surface: "data-management-v2"
protocol: ".NET SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "dot-net-sdk-dm"
---
# Class VersionPayloadDataRelationshipsStorage

Namespace: [Autodesk.DataManagement.Model](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model)Assembly: Autodesk.DataManagement.dll

Contains the information about the storage location that contains the binary data of this version.

```
[DataContract]
public class VersionPayloadDataRelationshipsStorage
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ←
[VersionPayloadDataRelationshipsStorage](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/VersionPayloadDataRelationshipsStorage)

## Inherited Members

[object.Equals(object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)),
[object.Equals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)),
[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode),
[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype),
[object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone),
[object.ReferenceEquals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals),
[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### VersionPayloadDataRelationshipsStorage()

Initializes a new instance of the class.

```
public VersionPayloadDataRelationshipsStorage()
```

## Properties

### Data

Gets or Sets Data

```
[DataMember(Name = "data", EmitDefaultValue = false)]
public VersionPayloadDataRelationshipsStorageData Data { get; set; }
```

#### Property Value

[VersionPayloadDataRelationshipsStorageData](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/VersionPayloadDataRelationshipsStorageData)

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
원본 문서: https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/VersionPayloadDataRelationshipsStorage
