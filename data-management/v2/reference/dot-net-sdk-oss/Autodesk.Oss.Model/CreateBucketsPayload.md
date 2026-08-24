---
title: "CreateBucketsPayload Class"
url_path: reference/dot-net-sdk-oss/Autodesk.Oss.Model/CreateBucketsPayload
product: "Data Management API"
surface: "data-management-v2"
protocol: ".NET SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "dot-net-sdk-oss"
---
# Class CreateBucketsPayload

Namespace: [Autodesk.Oss.Model](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-oss/Autodesk.Oss.Model)Assembly: Autodesk.Oss.dll

The request payload for the Create Bucket operation.

```
[DataContract]
public class CreateBucketsPayload
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ←
[CreateBucketsPayload](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-oss/Autodesk.Oss.Model/CreateBucketsPayload)

## Inherited Members

[object.Equals(object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)),
[object.Equals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)),
[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode),
[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype),
[object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone),
[object.ReferenceEquals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals),
[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### CreateBucketsPayload()

Initializes a new instance of the class.

```
public CreateBucketsPayload()
```

## Properties

### Allow

An array of objects, where each object represents an application that can access the bucket.

```
[DataMember(Name = "allow", EmitDefaultValue = false)]
public List<CreateBucketsPayloadAllow> Allow { get; set; }
```

#### Property Value

[List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list-1)<[CreateBucketsPayloadAllow](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-oss/Autodesk.Oss.Model/CreateBucketsPayloadAllow)>

### BucketKey

Bucket key: A unique name you assign to a bucket. Bucket keys must be globally unique across all applications and regions. They must consist of only lower case characters, numbers 0-9, and underscores (_).

**Note:** You cannot change a bucket key once the bucket is created.

```
[DataMember(Name = "bucketKey", EmitDefaultValue = false)]
public string BucketKey { get; set; }
```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

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
원본 문서: https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-oss/Autodesk.Oss.Model/CreateBucketsPayload
