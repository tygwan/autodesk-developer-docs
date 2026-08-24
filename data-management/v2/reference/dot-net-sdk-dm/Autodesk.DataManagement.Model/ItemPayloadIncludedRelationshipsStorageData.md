---
title: "ItemPayloadIncludedRelationshipsStorageData Class"
url_path: reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/ItemPayloadIncludedRelationshipsStorageData
product: "Data Management API"
surface: "data-management-v2"
protocol: ".NET SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "dot-net-sdk-dm"
---
# Class ItemPayloadIncludedRelationshipsStorageData

Namespace: [Autodesk.DataManagement.Model](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model)Assembly: Autodesk.DataManagement.dll

The data about the location of binary data.

```
[DataContract]
public class ItemPayloadIncludedRelationshipsStorageData
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ←
[ItemPayloadIncludedRelationshipsStorageData](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/ItemPayloadIncludedRelationshipsStorageData)

## Inherited Members

[object.Equals(object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)),
[object.Equals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)),
[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode),
[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype),
[object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone),
[object.ReferenceEquals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals),
[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### ItemPayloadIncludedRelationshipsStorageData()

Initializes a new instance of the class.

```
public ItemPayloadIncludedRelationshipsStorageData()
```

## Properties

### Id

The URN indicating the location of the binary data. This is represented by the `objectId` returned when [uploading the file](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-oss/Autodesk.Oss/OssClient#Autodesk_Oss_OssClient_Upload_System_String_System_String_System_String_System_String_System_Threading_CancellationToken_System_String_System_String_System_IProgress_System_Int32__).

```
[DataMember(Name = "id", EmitDefaultValue = false)]
public string Id { get; set; }
```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### Type

The type of the resource. Will always be `objects`.

```
[DataMember(Name = "type", EmitDefaultValue = false)]
public string Type { get; set; }
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
원본 문서: https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/ItemPayloadIncludedRelationshipsStorageData
