---
title: "CreateObjectSigned Class"
url_path: reference/dot-net-sdk-oss/Autodesk.Oss.Model/CreateObjectSigned
product: "Data Management API"
surface: "data-management-v2"
protocol: ".NET SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "dot-net-sdk-oss"
---
# Class CreateObjectSigned

Namespace: [Autodesk.Oss.Model](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-oss/Autodesk.Oss.Model)Assembly: Autodesk.Oss.dll

The request payload for a Generate OSS Signed URL operation.

```
[DataContract]
public class CreateObjectSigned
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ←
[CreateObjectSigned](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-oss/Autodesk.Oss.Model/CreateObjectSigned)

## Inherited Members

[object.Equals(object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)),
[object.Equals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)),
[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode),
[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype),
[object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone),
[object.ReferenceEquals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals),
[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### CreateObjectSigned()

Initializes a new instance of the class.

```
public CreateObjectSigned()
```

## Properties

### AllowedIpAddresses

IP addresses that can make a request to this URL.

```
[DataMember(Name = "allowedIpAddresses", EmitDefaultValue = false)]
public List<string> AllowedIpAddresses { get; set; }
```

#### Property Value

[List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)>

### Expiration

Value for expiration in minutes

```
[DataMember(Name = "expiration", EmitDefaultValue = false)]
public long? Expiration { get; set; }
```

#### Property Value

[long](https://learn.microsoft.com/dotnet/api/system.int64)?

### SignedUrl

URL created for downloading the object

```
[DataMember(Name = "signedUrl", EmitDefaultValue = false)]
public string SignedUrl { get; set; }
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
원본 문서: https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-oss/Autodesk.Oss.Model/CreateObjectSigned
