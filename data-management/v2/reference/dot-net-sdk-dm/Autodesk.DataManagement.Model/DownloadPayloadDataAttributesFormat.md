---
title: "DownloadPayloadDataAttributesFormat Class"
url_path: reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/DownloadPayloadDataAttributesFormat
product: "Data Management API"
surface: "data-management-v2"
protocol: ".NET SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "dot-net-sdk-dm"
---
# Class DownloadPayloadDataAttributesFormat

Namespace: [Autodesk.DataManagement.Model](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model)Assembly: Autodesk.DataManagement.dll

Specifies the desired download format.

```
[DataContract]
public class DownloadPayloadDataAttributesFormat
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ←
[DownloadPayloadDataAttributesFormat](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/DownloadPayloadDataAttributesFormat)

## Inherited Members

[object.Equals(object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)),
[object.Equals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)),
[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode),
[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype),
[object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone),
[object.ReferenceEquals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals),
[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### DownloadPayloadDataAttributesFormat()

Initializes a new instance of the class.

```
public DownloadPayloadDataAttributesFormat()
```

## Properties

### FileType

The file name extension of the desired download format. Must be one of the supported file name extensions returned by the [List Supported Download Formats](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement/DataManagementClient#Autodesk_DataManagement_DataManagementClient_GetVersionDownloadFormatsAsync_System_String_System_String_System_String_System_String_System_Boolean_) operation for the specified version.

```
[DataMember(Name = "fileType", EmitDefaultValue = false)]
public string FileType { get; set; }
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
원본 문서: https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/DownloadPayloadDataAttributesFormat
