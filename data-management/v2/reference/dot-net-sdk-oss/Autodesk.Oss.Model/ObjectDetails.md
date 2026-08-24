---
title: "ObjectDetails Class"
url_path: reference/dot-net-sdk-oss/Autodesk.Oss.Model/ObjectDetails
product: "Data Management API"
surface: "data-management-v2"
protocol: ".NET SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "dot-net-sdk-oss"
---
# Class ObjectDetails

Namespace: [Autodesk.Oss.Model](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-oss/Autodesk.Oss.Model)Assembly: Autodesk.Oss.dll

Represents an object within a bucket.

```
[DataContract]
public class ObjectDetails
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ←
[ObjectDetails](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-oss/Autodesk.Oss.Model/ObjectDetails)

## Inherited Members

[object.Equals(object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)),
[object.Equals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)),
[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode),
[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype),
[object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone),
[object.ReferenceEquals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals),
[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### ObjectDetails()

Initializes a new instance of the class.

```
public ObjectDetails()
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
원본 문서: https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-oss/Autodesk.Oss.Model/ObjectDetails
