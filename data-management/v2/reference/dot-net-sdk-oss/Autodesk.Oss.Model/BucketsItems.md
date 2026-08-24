---
title: "BucketsItems Class"
url_path: reference/dot-net-sdk-oss/Autodesk.Oss.Model/BucketsItems
product: "Data Management API"
surface: "data-management-v2"
protocol: ".NET SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "dot-net-sdk-oss"
---
# Class BucketsItems

Namespace: [Autodesk.Oss.Model](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-oss/Autodesk.Oss.Model)Assembly: Autodesk.Oss.dll

An object containing the properties of a bucket.

```
[DataContract]
public class BucketsItems
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ←
[BucketsItems](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-oss/Autodesk.Oss.Model/BucketsItems)

## Inherited Members

[object.Equals(object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)),
[object.Equals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)),
[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode),
[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype),
[object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone),
[object.ReferenceEquals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals),
[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### BucketsItems()

Initializes a new instance of the class.

```
public BucketsItems()
```

## Properties

### BucketKey

Bucket key: An ID that uniquely identifies the bucket.

```
[DataMember(Name = "bucketKey", EmitDefaultValue = false)]
public string BucketKey { get; set; }
```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### CreatedDate

The time the bucket was created, represented as a Unix timestamp.

```
[DataMember(Name = "createdDate", EmitDefaultValue = false)]
public long? CreatedDate { get; set; }
```

#### Property Value

[long](https://learn.microsoft.com/dotnet/api/system.int64)?

### PolicyKey

Gets or Sets PolicyKey

```
[DataMember(Name = "policyKey", EmitDefaultValue = true)]
public PolicyKey PolicyKey { get; set; }
```

#### Property Value

[PolicyKey](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-oss/Autodesk.Oss.Model/PolicyKey)

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
원본 문서: https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-oss/Autodesk.Oss.Model/BucketsItems
