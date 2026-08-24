---
title: "ObjectFullDetails Class"
url_path: reference/dot-net-sdk-oss/Autodesk.Oss.Model/ObjectFullDetails
product: "Data Management API"
surface: "data-management-v2"
protocol: ".NET SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "dot-net-sdk-oss"
---
# Class ObjectFullDetails

Namespace: [Autodesk.Oss.Model](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-oss/Autodesk.Oss.Model)Assembly: Autodesk.Oss.dll

Represents detailed information about an object within a bucket.

```
[DataContract]
public class ObjectFullDetails
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ←
[ObjectFullDetails](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-oss/Autodesk.Oss.Model/ObjectFullDetails)

## Inherited Members

[object.Equals(object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)),
[object.Equals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)),
[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode),
[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype),
[object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone),
[object.ReferenceEquals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals),
[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### ObjectFullDetails()

Initializes a new instance of the class.

```
public ObjectFullDetails()
```

## Properties

### BucketKey

The bucket key of the bucket that contains the object.

```
[DataMember(Name = "bucketKey", EmitDefaultValue = false)]
public string BucketKey { get; set; }
```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### ContentType

The format of the data stored within the object, expressed as a MIME type.

```
[DataMember(Name = "contentType", EmitDefaultValue = false)]
public string ContentType { get; set; }
```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### CreatedDate

The time the object was created, represented as a Unix timestamp. Only returned if explicitly requested using the `with` query string parameter.

```
[DataMember(Name = "createdDate", EmitDefaultValue = false)]
public long? CreatedDate { get; set; }
```

#### Property Value

[long](https://learn.microsoft.com/dotnet/api/system.int64)?

### LastAccessedDate

The time the object was last accessed, represented as a Unix timestamp. Only returned if explicitly requested using the `with` query string parameter.

```
[DataMember(Name = "lastAccessedDate", EmitDefaultValue = false)]
public long? LastAccessedDate { get; set; }
```

#### Property Value

[long](https://learn.microsoft.com/dotnet/api/system.int64)?

### LastModifiedDate

The time the object was most recently modified, represented as a Unix timestamp. Only returned if explicitly requested using the `with` query string parameter.

```
[DataMember(Name = "lastModifiedDate", EmitDefaultValue = false)]
public long? LastModifiedDate { get; set; }
```

#### Property Value

[long](https://learn.microsoft.com/dotnet/api/system.int64)?

### Location

A URL that points to the actual location of the object.

```
[DataMember(Name = "location", EmitDefaultValue = false)]
public string Location { get; set; }
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

A URL-encoded human friendly name to identify the object.

```
[DataMember(Name = "objectKey", EmitDefaultValue = false)]
public string ObjectKey { get; set; }
```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### Sha1

A hash value computed from the data of the object.

```
[DataMember(Name = "sha1", EmitDefaultValue = false)]
public byte[] Sha1 { get; set; }
```

#### Property Value

[byte](https://learn.microsoft.com/dotnet/api/system.byte)[]

### Size

The total amount of storage space occupied by the object, in bytes.

```
[DataMember(Name = "size", EmitDefaultValue = false)]
public int? Size { get; set; }
```

#### Property Value

[int](https://learn.microsoft.com/dotnet/api/system.int32)?

### UserDefinedMetadata

Any custom metadata, if available. Only returned if explicitly requested for using the `with` query string parameter.

```
[DataMember(Name = "userDefinedMetadata", EmitDefaultValue = false)]
public string UserDefinedMetadata { get; set; }
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
원본 문서: https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-oss/Autodesk.Oss.Model/ObjectFullDetails
