---
title: "BatchCompletedResults Class"
url_path: reference/dot-net-sdk-oss/Autodesk.Oss.Model/BatchCompletedResults
product: "Data Management API"
surface: "data-management-v2"
protocol: ".NET SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "dot-net-sdk-oss"
---
# Class BatchCompletedResults

Namespace: [Autodesk.Oss.Model](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-oss/Autodesk.Oss.Model)Assembly: Autodesk.Oss.dll

The results returned by the Complete Batch Upload to S3 Signed URLs operation.

```
[DataContract]
public class BatchCompletedResults
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ←
[BatchCompletedResults](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-oss/Autodesk.Oss.Model/BatchCompletedResults)

## Inherited Members

[object.Equals(object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)),
[object.Equals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)),
[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode),
[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype),
[object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone),
[object.ReferenceEquals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals),
[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### BatchCompletedResults()

Initializes a new instance of the class.

```
public BatchCompletedResults()
```

## Properties

### BucketKey

The bucket key of the bucket the object was uploaded to.

```
[DataMember(Name = "bucketKey", EmitDefaultValue = false)]
public string BucketKey { get; set; }
```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### CacheControl

The Cache-Control value for the uploaded object as recorded within OSS. This attribute is returned only if it was specified when the object was uploaded.

```
[DataMember(Name = "cacheControl", EmitDefaultValue = false)]
public string CacheControl { get; set; }
```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### ContentDisposition

The Content-Disposition value for the uploaded object as recorded within OSS. This attribute is returned only if it was specified when the object was uploaded.

```
[DataMember(Name = "contentDisposition", EmitDefaultValue = false)]
public string ContentDisposition { get; set; }
```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### ContentEncoding

The Content-Encoding value for the uploaded object as recorded within OSS. This attribute is returned only if it was specified when the object was uploaded.

```
[DataMember(Name = "contentEncoding", EmitDefaultValue = false)]
public string ContentEncoding { get; set; }
```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### ContentType

The format of the data stored within the object, expressed as a MIME type. This attribute is returned only if it was specified when the object was uploaded.

```
[DataMember(Name = "contentType", EmitDefaultValue = false)]
public string ContentType { get; set; }
```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### ObjectId

An identifier (URN) that uniquely and persistently identifies the object.

```
[DataMember(Name = "objectId", EmitDefaultValue = false)]
public string ObjectId { get; set; }
```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### ObjectKey

The URL-encoded human friendly name of the object.

```
[DataMember(Name = "objectKey", EmitDefaultValue = false)]
public string ObjectKey { get; set; }
```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### Parts

An array containing the status of each part, indicating any issues with eTag or size mismatch issues.

```
[DataMember(Name = "parts", EmitDefaultValue = false)]
public List<BatchCompletedResultsParts> Parts { get; set; }
```

#### Property Value

[List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list-1)<[BatchCompletedResultsParts](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-oss/Autodesk.Oss.Model/BatchCompletedResultsParts)>

### Reason

The reason for the failure, if the status is `error`.

```
[DataMember(Name = "reason", EmitDefaultValue = false)]
public string Reason { get; set; }
```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### Size

The total amount of storage space occupied by the object, in bytes.

```
[DataMember(Name = "size", EmitDefaultValue = false)]
public int? Size { get; set; }
```

#### Property Value

[int](https://learn.microsoft.com/dotnet/api/system.int32)?

### Status

If this attribute is not returned, completion has succeeded. If the value of this attribute is “error”, completion failed.’

```
[DataMember(Name = "status", EmitDefaultValue = false)]
public string Status { get; set; }
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
원본 문서: https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-oss/Autodesk.Oss.Model/BatchCompletedResults
