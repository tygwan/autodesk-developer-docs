---
title: "BatchCompletedResultsParts Class"
url_path: reference/dot-net-sdk-oss/Autodesk.Oss.Model/BatchCompletedResultsParts
product: "Data Management API"
surface: "data-management-v2"
protocol: ".NET SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "dot-net-sdk-oss"
---
# Class BatchCompletedResultsParts

Namespace: [Autodesk.Oss.Model](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-oss/Autodesk.Oss.Model)Assembly: Autodesk.Oss.dll

BatchCompletedResultsParts

```
[DataContract]
public class BatchCompletedResultsParts
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ←
[BatchCompletedResultsParts](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-oss/Autodesk.Oss.Model/BatchCompletedResultsParts)

## Inherited Members

[object.Equals(object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)),
[object.Equals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)),
[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode),
[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype),
[object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone),
[object.ReferenceEquals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals),
[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### BatchCompletedResultsParts()

Initializes a new instance of the class.

```
public BatchCompletedResultsParts()
```

## Properties

### ETag

The eTag of the detected part in S3.

```
[DataMember(Name = "eTag", EmitDefaultValue = false)]
public string ETag { get; set; }
```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### FirstPart

The index of the first part in the multipart upload.

```
[DataMember(Name = "firstPart", EmitDefaultValue = false)]
public int? FirstPart { get; set; }
```

#### Property Value

[int](https://learn.microsoft.com/dotnet/api/system.int32)?

### Size

The size of the corresponding part detected in S3.

```
[DataMember(Name = "size", EmitDefaultValue = false)]
public int? Size { get; set; }
```

#### Property Value

[int](https://learn.microsoft.com/dotnet/api/system.int32)?

### Status

Gets or Sets Status

```
[DataMember(Name = "status", EmitDefaultValue = true)]
public Status Status { get; set; }
```

#### Property Value

[Status](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-oss/Autodesk.Oss.Model/Status)

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
원본 문서: https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-oss/Autodesk.Oss.Model/BatchCompletedResultsParts
