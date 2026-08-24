---
title: "Batchsigneds3downloadObject Class"
url_path: reference/dot-net-sdk-oss/Autodesk.Oss.Model/Batchsigneds3downloadObject
product: "Data Management API"
surface: "data-management-v2"
protocol: ".NET SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "dot-net-sdk-oss"
---
# Class Batchsigneds3downloadObject

Namespace: [Autodesk.Oss.Model](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-oss/Autodesk.Oss.Model)Assembly: Autodesk.Oss.dll

The response to a Batch Generate Signed S3 Download URLs operation.

```
[DataContract]
public class Batchsigneds3downloadObject
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ←
[Batchsigneds3downloadObject](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-oss/Autodesk.Oss.Model/Batchsigneds3downloadObject)

## Inherited Members

[object.Equals(object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)),
[object.Equals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)),
[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode),
[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype),
[object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone),
[object.ReferenceEquals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals),
[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### Batchsigneds3downloadObject()

Initializes a new instance of the class.

```
public Batchsigneds3downloadObject()
```

## Properties

### Requests

An array where each element is an object containing information needed to generate a signed S3 download URL.

```
[DataMember(Name = "requests", EmitDefaultValue = false)]
public List<Batchsigneds3downloadObjectRequests> Requests { get; set; }
```

#### Property Value

[List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list-1)<[Batchsigneds3downloadObjectRequests](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-oss/Autodesk.Oss.Model/Batchsigneds3downloadObjectRequests)>

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
원본 문서: https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-oss/Autodesk.Oss.Model/Batchsigneds3downloadObject
