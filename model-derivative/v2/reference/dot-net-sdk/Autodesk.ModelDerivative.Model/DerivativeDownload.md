---
title: "DerivativeDownload Class"
url_path: reference/dot-net-sdk/Autodesk.ModelDerivative.Model/DerivativeDownload
product: "Model Derivative API"
surface: "model-derivative-v2"
protocol: ".NET SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "dot-net-sdk"
---
# Class DerivativeDownload

Namespace: [Autodesk.ModelDerivative.Model](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative.Model)Assembly: Autodesk.ModelDerivative.dll

Represents the successful response of a Fetch Derivative Download operation.

```
[DataContract]
public class DerivativeDownload
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ←
[DerivativeDownload](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative.Model/DerivativeDownload)

## Inherited Members

[object.Equals(object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)),
[object.Equals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)),
[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode),
[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype),
[object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone),
[object.ReferenceEquals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals),
[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### DerivativeDownload()

Initializes a new instance of the class.

```
public DerivativeDownload()
```

## Properties

### ContentType

The content type of the derivative/file.

```
[DataMember(Name = "content-type", EmitDefaultValue = false)]
public string ContentType { get; set; }
```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### Etag

The calculated ETag hash of the derivative/file, if available.

```
[DataMember(Name = "etag", EmitDefaultValue = false)]
public string Etag { get; set; }
```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### Expiration

The 13-digit epoch time stamp indicating the time the signed cookies expire.

```
[DataMember(Name = "expiration", EmitDefaultValue = false)]
public decimal? Expiration { get; set; }
```

#### Property Value

[decimal](https://learn.microsoft.com/dotnet/api/system.decimal)?

### Size

The size of the derivative/file, in bytes.

```
[DataMember(Name = "size", EmitDefaultValue = false)]
public decimal? Size { get; set; }
```

#### Property Value

[decimal](https://learn.microsoft.com/dotnet/api/system.decimal)?

### Url

The download URL.

```
[DataMember(Name = "url", EmitDefaultValue = false)]
public string Url { get; set; }
```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### ToString()

Returns the string presentation of the object

```
public override string ToString()
```

#### Returns

[string](https://learn.microsoft.com/dotnet/api/system.string)

String presentation of the object

---
원본 문서: https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative.Model/DerivativeDownload
