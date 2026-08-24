---
title: "VersionPayloadDataRelationships Class"
url_path: reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/VersionPayloadDataRelationships
product: "Data Management API"
surface: "data-management-v2"
protocol: ".NET SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "dot-net-sdk-dm"
---
# Class VersionPayloadDataRelationships

Namespace: [Autodesk.DataManagement.Model](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model)Assembly: Autodesk.DataManagement.dll

A container of links to resources that are related to the version to be created.

```
[DataContract]
public class VersionPayloadDataRelationships
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ←
[VersionPayloadDataRelationships](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/VersionPayloadDataRelationships)

## Inherited Members

[object.Equals(object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)),
[object.Equals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)),
[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode),
[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype),
[object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone),
[object.ReferenceEquals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals),
[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### VersionPayloadDataRelationships()

Initializes a new instance of the class.

```
public VersionPayloadDataRelationships()
```

## Properties

### Item

Gets or Sets Item

```
[DataMember(Name = "item", EmitDefaultValue = false)]
public VersionPayloadDataRelationshipsItem Item { get; set; }
```

#### Property Value

[VersionPayloadDataRelationshipsItem](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/VersionPayloadDataRelationshipsItem)

### Refs

Gets or Sets Refs

```
[DataMember(Name = "refs", EmitDefaultValue = false)]
public VersionPayloadDataRelationshipsRefs Refs { get; set; }
```

#### Property Value

[VersionPayloadDataRelationshipsRefs](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/VersionPayloadDataRelationshipsRefs)

### Storage

Gets or Sets Storage

```
[DataMember(Name = "storage", EmitDefaultValue = false)]
public VersionPayloadDataRelationshipsStorage Storage { get; set; }
```

#### Property Value

[VersionPayloadDataRelationshipsStorage](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/VersionPayloadDataRelationshipsStorage)

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
원본 문서: https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/VersionPayloadDataRelationships
