---
title: "DownloadResults Class"
url_path: reference/dot-net-sdk-oss/Autodesk.Oss.Model/DownloadResults
product: "Data Management API"
surface: "data-management-v2"
protocol: ".NET SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "dot-net-sdk-oss"
---
# Class DownloadResults

Namespace: [Autodesk.Oss.Model](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-oss/Autodesk.Oss.Model)Assembly: Autodesk.Oss.dll

An object that represents the response to a Batch Generate Signed S3 Download URLs operation. **Note**: `objectKeyN` is a placeholder for the first object key for which the client requested a download signed URL. The attributes within contain the success data / error information for the request for that object. `results` will contain one such attribute for each requested object in the batch.

```
[DataContract]
public class DownloadResults
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ←
[DownloadResults](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-oss/Autodesk.Oss.Model/DownloadResults)

## Inherited Members

[object.Equals(object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)),
[object.Equals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)),
[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode),
[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype),
[object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone),
[object.ReferenceEquals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals),
[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### DownloadResults()

Initializes a new instance of the class.

```
public DownloadResults()
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
원본 문서: https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-oss/Autodesk.Oss.Model/DownloadResults
