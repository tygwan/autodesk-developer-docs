---
title: "Batchsigneds3uploadObjectRequests Class"
url_path: reference/dot-net-sdk-oss/Autodesk.Oss.Model/Batchsigneds3uploadObjectRequests
product: "Data Management API"
surface: "data-management-v2"
protocol: ".NET SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "dot-net-sdk-oss"
---
# Class Batchsigneds3uploadObjectRequests

Namespace: [Autodesk.Oss.Model](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-oss/Autodesk.Oss.Model)Assembly: Autodesk.Oss.dll

Batchsigneds3uploadObjectRequests

```
[DataContract]
public class Batchsigneds3uploadObjectRequests
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ←
[Batchsigneds3uploadObjectRequests](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-oss/Autodesk.Oss.Model/Batchsigneds3uploadObjectRequests)

## Inherited Members

[object.Equals(object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)),
[object.Equals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)),
[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode),
[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype),
[object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone),
[object.ReferenceEquals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals),
[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### Batchsigneds3uploadObjectRequests()

Initializes a new instance of the class.

```
public Batchsigneds3uploadObjectRequests()
```

## Properties

### FirstPart

The index of first chunk to be uploaded.

```
[DataMember(Name = "firstPart", EmitDefaultValue = false)]
public int? FirstPart { get; set; }
```

#### Property Value

[int](https://learn.microsoft.com/dotnet/api/system.int32)?

### ObjectKey

A URL-encoded human friendly name of the object to upload.

```
[DataMember(Name = "objectKey", EmitDefaultValue = false)]
public string ObjectKey { get; set; }
```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### Parts

The number of parts you intend to chunk the object for uploading. OSS will return that many signed URLs, one URL for each chunk. If you do not specify a value you’ll get only one URL to upload the entire object.

```
[DataMember(Name = "parts", EmitDefaultValue = false)]
public int? Parts { get; set; }
```

#### Property Value

[int](https://learn.microsoft.com/dotnet/api/system.int32)?

### UploadKey

The `uploadKey` of a previously-initiated upload, in order to request more chunk upload URLs for the same upload. If you do not specify a value, OSS will initiate a new upload entirely.

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
원본 문서: https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-oss/Autodesk.Oss.Model/Batchsigneds3uploadObjectRequests
