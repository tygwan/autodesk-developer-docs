---
title: "DownloadFormatsDataAttributesFormats Class"
url_path: reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/DownloadFormatsDataAttributesFormats
product: "Data Management API"
surface: "data-management-v2"
protocol: ".NET SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "dot-net-sdk-dm"
---
# Class DownloadFormatsDataAttributesFormats

Namespace: [Autodesk.DataManagement.Model](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model)Assembly: Autodesk.DataManagement.dll

DownloadFormatsDataAttributesFormats

```
[DataContract]
public class DownloadFormatsDataAttributesFormats
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ←
[DownloadFormatsDataAttributesFormats](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/DownloadFormatsDataAttributesFormats)

## Inherited Members

[object.Equals(object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)),
[object.Equals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)),
[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode),
[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype),
[object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone),
[object.ReferenceEquals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals),
[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### DownloadFormatsDataAttributesFormats()

Initializes a new instance of the class.

```
public DownloadFormatsDataAttributesFormats()
```

## Properties

### FileType

The file name extension of the supported file format.

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
원본 문서: https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/DownloadFormatsDataAttributesFormats
