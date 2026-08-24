---
title: "CreateBucketsPayloadAllow Class"
url_path: reference/dot-net-sdk-oss/Autodesk.Oss.Model/CreateBucketsPayloadAllow
product: "Data Management API"
surface: "data-management-v2"
protocol: ".NET SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "dot-net-sdk-oss"
---
# Class CreateBucketsPayloadAllow

Namespace: [Autodesk.Oss.Model](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-oss/Autodesk.Oss.Model)Assembly: Autodesk.Oss.dll

An object that represents the permissions allowed for a bucket.

```
[DataContract]
public class CreateBucketsPayloadAllow
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ←
[CreateBucketsPayloadAllow](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-oss/Autodesk.Oss.Model/CreateBucketsPayloadAllow)

## Inherited Members

[object.Equals(object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)),
[object.Equals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)),
[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode),
[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype),
[object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone),
[object.ReferenceEquals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals),
[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### CreateBucketsPayloadAllow()

Initializes a new instance of the class.

```
public CreateBucketsPayloadAllow()
```

## Properties

### Access

Specifies the level of permission the application has. Required when `allow` is specified. Possible values are:
- `full` - Unrestricted access to objects within the bucket.
- `read_only` - Read only access to the objects within the bucket. Modification or deletion of objects is not allowed.

```
[DataMember(Name = "access", EmitDefaultValue = true)]
public string Access { get; set; }
```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### AuthId

The Client ID of the application.

```
[DataMember(Name = "authId", EmitDefaultValue = false)]
public string AuthId { get; set; }
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
원본 문서: https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-oss/Autodesk.Oss.Model/CreateBucketsPayloadAllow
