---
title: "CreateSignedResource Class"
url_path: reference/dot-net-sdk-oss/Autodesk.Oss.Model/CreateSignedResource
product: "Data Management API"
surface: "data-management-v2"
protocol: ".NET SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "dot-net-sdk-oss"
---
# Class CreateSignedResource

Namespace: [Autodesk.Oss.Model](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-oss/Autodesk.Oss.Model)Assembly: Autodesk.Oss.dll

The request payload for a Generate OSS Signed URL operation.

```
[DataContract]
public class CreateSignedResource
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ←
[CreateSignedResource](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-oss/Autodesk.Oss.Model/CreateSignedResource)

## Inherited Members

[object.Equals(object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)),
[object.Equals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)),
[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode),
[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype),
[object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone),
[object.ReferenceEquals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals),
[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### CreateSignedResource()

Initializes a new instance of the class.

```
public CreateSignedResource()
```

## Properties

### MinutesExpiration

The time window (in minutes) the signed URL will remain usable. Acceptable values = 1-60 minutes. Default = 2 minutes.

**Tip:** Use the smallest possible time window to minimize exposure of the signed URL.

```
[DataMember(Name = "minutesExpiration", EmitDefaultValue = false)]
public int? MinutesExpiration { get; set; }
```

#### Property Value

[int](https://learn.microsoft.com/dotnet/api/system.int32)?

### SingleUse

`true` : The signed URL will expire immediately after use. For example, when downloading an object, URL will expire once the download is complete.

`false` : (Default) The signed URL will remain usable for the entire time window specified by `minutesExpiration`.

```
[DataMember(Name = "singleUse", EmitDefaultValue = false)]
public bool? SingleUse { get; set; }
```

#### Property Value

[bool](https://learn.microsoft.com/dotnet/api/system.boolean)?

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
원본 문서: https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-oss/Autodesk.Oss.Model/CreateSignedResource
