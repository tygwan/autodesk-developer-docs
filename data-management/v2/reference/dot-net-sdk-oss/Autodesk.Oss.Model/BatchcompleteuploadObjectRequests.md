---
title: "BatchcompleteuploadObjectRequests Class"
url_path: reference/dot-net-sdk-oss/Autodesk.Oss.Model/BatchcompleteuploadObjectRequests
product: "Data Management API"
surface: "data-management-v2"
protocol: ".NET SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "dot-net-sdk-oss"
---
# Class BatchcompleteuploadObjectRequests

Namespace: [Autodesk.Oss.Model](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-oss/Autodesk.Oss.Model)Assembly: Autodesk.Oss.dll

BatchcompleteuploadObjectRequests

```
[DataContract]
public class BatchcompleteuploadObjectRequests
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ←
[BatchcompleteuploadObjectRequests](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-oss/Autodesk.Oss.Model/BatchcompleteuploadObjectRequests)

## Inherited Members

[object.Equals(object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)),
[object.Equals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)),
[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode),
[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype),
[object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone),
[object.ReferenceEquals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals),
[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### BatchcompleteuploadObjectRequests()

Initializes a new instance of the class.

```
public BatchcompleteuploadObjectRequests()
```

## Properties

### ETags

An array of eTags. S3 returns an eTag to each upload request, be it for a chunk or an entire file. For a single-part upload, this array contains the expected eTag of the entire object. For a multipart upload, this array contains the expected eTag of each part of the upload; the index of an eTag in the array corresponds to its part number in the upload. If provided, OSS will validate these eTags against the content in S3, and return an error if the eTags do not match.

```
[DataMember(Name = "eTags", EmitDefaultValue = false)]
public List<string> ETags { get; set; }
```

#### Property Value

[List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)>

### ObjectKey

The URL-encoded human friendly name of the object for which to complete an upload.

```
[DataMember(Name = "objectKey", EmitDefaultValue = false)]
public string ObjectKey { get; set; }
```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### Size

The expected size of the object. If provided, OSS will check this against the object in S3 and return an error if the size does not match.

```
[DataMember(Name = "size", EmitDefaultValue = false)]
public int? Size { get; set; }
```

#### Property Value

[int](https://learn.microsoft.com/dotnet/api/system.int32)?

### UploadKey

The ID uniquely identifying the upload session that was returned when you obtained the signed upload URL.

```
[DataMember(Name = "uploadKey", EmitDefaultValue = false)]
public string UploadKey { get; set; }
```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### XAdsMetaCacheControl

The Cache-Control value for the uploaded object to record within OSS.

```
[DataMember(Name = "x-ads-meta-Cache-Control", EmitDefaultValue = false)]
public string XAdsMetaCacheControl { get; set; }
```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### XAdsMetaContentDisposition

The Content-Disposition value for the uploaded object to record within OSS.

```
[DataMember(Name = "x-ads-meta-Content-Disposition", EmitDefaultValue = false)]
public string XAdsMetaContentDisposition { get; set; }
```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### XAdsMetaContentEncoding

The Content-Encoding value for the uploaded object to record within OSS.

```
[DataMember(Name = "x-ads-meta-Content-Encoding", EmitDefaultValue = false)]
public string XAdsMetaContentEncoding { get; set; }
```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### XAdsMetaContentType

The Content-Type value for the uploaded object to record within OSS.

```
[DataMember(Name = "x-ads-meta-Content-Type", EmitDefaultValue = false)]
public string XAdsMetaContentType { get; set; }
```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### XAdsUserDefinedMetadata

Custom metadata to be stored with the object, which can be retrieved later on download or when retrieving object details. Must be a JSON object that is less than 100 bytes.

```
[DataMember(Name = "x-ads-user-defined-metadata", EmitDefaultValue = false)]
public string XAdsUserDefinedMetadata { get; set; }
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
원본 문서: https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-oss/Autodesk.Oss.Model/BatchcompleteuploadObjectRequests
