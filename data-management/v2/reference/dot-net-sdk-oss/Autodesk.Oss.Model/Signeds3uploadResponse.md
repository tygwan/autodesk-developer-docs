---
title: "Signeds3uploadResponse Class"
url_path: reference/dot-net-sdk-oss/Autodesk.Oss.Model/Signeds3uploadResponse
product: "Data Management API"
surface: "data-management-v2"
protocol: ".NET SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "dot-net-sdk-oss"
---
# Class Signeds3uploadResponse

Namespace: [Autodesk.Oss.Model](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-oss/Autodesk.Oss.Model)Assembly: Autodesk.Oss.dll

The response payload to a Generate Signed S3 Upload URL operation.

```
[DataContract]
public class Signeds3uploadResponse
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ←
[Signeds3uploadResponse](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-oss/Autodesk.Oss.Model/Signeds3uploadResponse)

## Inherited Members

[object.Equals(object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)),
[object.Equals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)),
[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode),
[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype),
[object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone),
[object.ReferenceEquals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals),
[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### Signeds3uploadResponse()

Initializes a new instance of the class.

```
public Signeds3uploadResponse()
```

## Properties

### UploadExpiration

The deadline to call [Complete Upload to S3 Signed URL](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-oss/Autodesk.Oss/OssClient#Autodesk_Oss_OssClient_CompleteSignedS3UploadAsync_System_String_System_String_System_String_Autodesk_Oss_Model_Completes3uploadBody_System_String_System_String_System_String_System_String_System_String_System_String_System_Boolean_) for the object. If not completed by this time, all uploaded data for this session will be discarded.

```
[DataMember(Name = "uploadExpiration", EmitDefaultValue = false)]
public string UploadExpiration { get; set; }
```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### UploadKey

An ID that uniquely identifies the upload session. It allows OSS to differentiate between fresh upload attempts from attempts to resume uploading data for an active upload session, in case of network interruptions. You must provide this value when:
- Re-requesting chunk URLs for an active upload session.
- When calling the [Complete Upload to S3 Signed URL](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-oss/Autodesk.Oss/OssClient#Autodesk_Oss_OssClient_CompleteSignedS3UploadAsync_System_String_System_String_System_String_Autodesk_Oss_Model_Completes3uploadBody_System_String_System_String_System_String_System_String_System_String_System_String_System_Boolean_) operation to end an active upload session.

```
[DataMember(Name = "uploadKey", EmitDefaultValue = false)]
public string UploadKey { get; set; }
```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### UrlExpiration

The date and time, in the ISO 8601 format, indicating when the signed URLs will expire.

```
[DataMember(Name = "urlExpiration", EmitDefaultValue = false)]
public string UrlExpiration { get; set; }
```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### Urls

An array of signed URLs. For a single-part upload, this will contain only one URL. For a multipart upload, there will be one for each chunk of a multipart upload; the index of the URL in the array corresponds to the part number of the chunk.

```
[DataMember(Name = "urls", EmitDefaultValue = false)]
public List<string> Urls { get; set; }
```

#### Property Value

[List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)>

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
원본 문서: https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-oss/Autodesk.Oss.Model/Signeds3uploadResponse
