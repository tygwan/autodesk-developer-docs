---
title: "BatchcompleteuploadObject Class"
url_path: reference/dot-net-sdk-oss/Autodesk.Oss.Model/BatchcompleteuploadObject
product: "Data Management API"
surface: "data-management-v2"
protocol: ".NET SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "dot-net-sdk-oss"
---
# Class BatchcompleteuploadObject

Namespace: [Autodesk.Oss.Model](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-oss/Autodesk.Oss.Model)Assembly: Autodesk.Oss.dll

The request payload for the Complete Batch Upload to S3 Signed URLs operation.

```
[DataContract]
public class BatchcompleteuploadObject
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ←
[BatchcompleteuploadObject](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-oss/Autodesk.Oss.Model/BatchcompleteuploadObject)

## Inherited Members

[object.Equals(object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)),
[object.Equals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)),
[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode),
[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype),
[object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone),
[object.ReferenceEquals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals),
[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### BatchcompleteuploadObject()

Initializes a new instance of the class.

```
public BatchcompleteuploadObject()
```

## Properties

### Requests

An array of objects, each of which represents an upload to complete.

```
[DataMember(Name = "requests", EmitDefaultValue = false)]
public List<BatchcompleteuploadObjectRequests> Requests { get; set; }
```

#### Property Value

[List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list-1)<[BatchcompleteuploadObjectRequests](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-oss/Autodesk.Oss.Model/BatchcompleteuploadObjectRequests)>

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
원본 문서: https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-oss/Autodesk.Oss.Model/BatchcompleteuploadObject
