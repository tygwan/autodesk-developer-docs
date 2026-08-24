---
title: "Signeds3downloadResponse Class"
url_path: reference/dot-net-sdk-oss/Autodesk.Oss.Model/Signeds3downloadResponse
product: "Data Management API"
surface: "data-management-v2"
protocol: ".NET SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "dot-net-sdk-oss"
---
# Class Signeds3downloadResponse

Namespace: [Autodesk.Oss.Model](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-oss/Autodesk.Oss.Model)Assembly: Autodesk.Oss.dll

An object representing the response payload on successful execution of a Generate Signed S3 Download URL operation.

```
[DataContract]
public class Signeds3downloadResponse
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ←
[Signeds3downloadResponse](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-oss/Autodesk.Oss.Model/Signeds3downloadResponse)

## Inherited Members

[object.Equals(object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)),
[object.Equals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)),
[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode),
[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype),
[object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone),
[object.ReferenceEquals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals),
[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### Signeds3downloadResponse()

Initializes a new instance of the class.

```
public Signeds3downloadResponse()
```

## Properties

### Params

The values that were requested for the following parameters when requesting the S3 signed URL.
- `Content-Type`
- `Content-Disposition`
- `Cache-Control`.

```
[DataMember(Name = "params", EmitDefaultValue = false)]
public object Params { get; set; }
```

#### Property Value

[object](https://learn.microsoft.com/dotnet/api/system.object)

### Sha1

A hash value computed from the data of the object, if available.

```
[DataMember(Name = "sha1", EmitDefaultValue = false)]
public string Sha1 { get; set; }
```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### Size

The total amount of storage space occupied by the object, in bytes.

```
[DataMember(Name = "size", EmitDefaultValue = false)]
public long? Size { get; set; }
```

#### Property Value

[long](https://learn.microsoft.com/dotnet/api/system.int64)?

### Status

Gets or Sets Status

```
[DataMember(Name = "status", EmitDefaultValue = true)]
public DownloadStatus Status { get; set; }
```

#### Property Value

[DownloadStatus](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-oss/Autodesk.Oss.Model/DownloadStatus)

### Url

A S3 signed URL with which to download the object. This attribute is returned when `status` is `complete` or `fallback`; in the latter case, this will return an OSS signed URL, not an S3 signed URL.

```
[DataMember(Name = "url", EmitDefaultValue = false)]
public string Url { get; set; }
```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### Urls

A map of S3 signed URLs, one for each chunk of an unmerged resumable upload. This attribute is returned when `status` is `chunked`. The key of each entry is the byte range of the total file which the chunk comprises.

```
[DataMember(Name = "urls", EmitDefaultValue = false)]
public object Urls { get; set; }
```

#### Property Value

[object](https://learn.microsoft.com/dotnet/api/system.object)

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
원본 문서: https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-oss/Autodesk.Oss.Model/Signeds3downloadResponse
