---
title: "DownloadPayloadDataRelationshipsSource Class"
url_path: reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/DownloadPayloadDataRelationshipsSource
product: "Data Management API"
surface: "data-management-v2"
protocol: ".NET SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "dot-net-sdk-dm"
---
# Class DownloadPayloadDataRelationshipsSource

Namespace: [Autodesk.DataManagement.Model](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model)Assembly: Autodesk.DataManagement.dll

Contains information about the version the download format is being created for.

```
[DataContract]
public class DownloadPayloadDataRelationshipsSource
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ←
[DownloadPayloadDataRelationshipsSource](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/DownloadPayloadDataRelationshipsSource)

## Inherited Members

[object.Equals(object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)),
[object.Equals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)),
[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode),
[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype),
[object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone),
[object.ReferenceEquals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals),
[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### DownloadPayloadDataRelationshipsSource()

Initializes a new instance of the class.

```
public DownloadPayloadDataRelationshipsSource()
```

## Properties

### Data

Gets or Sets Data

```
[DataMember(Name = "data", EmitDefaultValue = false)]
public DownloadPayloadDataRelationshipsSourceData Data { get; set; }
```

#### Property Value

[DownloadPayloadDataRelationshipsSourceData](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/DownloadPayloadDataRelationshipsSourceData)

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
원본 문서: https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/DownloadPayloadDataRelationshipsSource
