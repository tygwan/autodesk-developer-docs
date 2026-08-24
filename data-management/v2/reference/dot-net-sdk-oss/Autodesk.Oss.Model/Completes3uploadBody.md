---
title: "Completes3uploadBody Class"
url_path: reference/dot-net-sdk-oss/Autodesk.Oss.Model/Completes3uploadBody
product: "Data Management API"
surface: "data-management-v2"
protocol: ".NET SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "dot-net-sdk-oss"
---
# Class Completes3uploadBody

Namespace: [Autodesk.Oss.Model](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-oss/Autodesk.Oss.Model)Assembly: Autodesk.Oss.dll

The request payload for a Complete Upload to S3 Signed URL operation.

```
[DataContract]
public class Completes3uploadBody
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ←
[Completes3uploadBody](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-oss/Autodesk.Oss.Model/Completes3uploadBody)

## Inherited Members

[object.Equals(object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)),
[object.Equals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)),
[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode),
[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype),
[object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone),
[object.ReferenceEquals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals),
[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### Completes3uploadBody()

Initializes a new instance of the class.

```
public Completes3uploadBody()
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

### Size

The expected size of the object. If provided, OSS will check this against the object in S3 and return an error if the size does not match.

```
[DataMember(Name = "size", EmitDefaultValue = false)]
public int? Size { get; set; }
```

#### Property Value

[int](https://learn.microsoft.com/dotnet/api/system.int32)?

### UploadKey

The ID uniquely identifying the upload session that was returned when you called [Get S3 Signed Upload URL](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-oss/Autodesk.Oss/OssClient#Autodesk_Oss_OssClient_CompleteSignedS3UploadAsync_System_String_System_String_System_String_Autodesk_Oss_Model_Completes3uploadBody_System_String_System_String_System_String_System_String_System_String_System_String_System_Boolean_).

```
[DataMember(Name = "uploadKey", EmitDefaultValue = false)]
public string UploadKey { get; set; }
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
원본 문서: https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-oss/Autodesk.Oss.Model/Completes3uploadBody
