---
title: "JwksKey Class"
url_path: reference/dot-net-sdk/Autodesk.Authentication.Model/JwksKey
product: "Authentication API"
surface: "authentication-v2"
protocol: ".NET SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "dot-net-sdk"
---
# Class JwksKey

Namespace: [Autodesk.Authentication.Model](https://aps.autodesk.com/en/docs/oauth/v2/reference/dot-net-sdk/Autodesk.Authentication.Model)Assembly: Autodesk.Authentication.dll

Represents a JSON Web Key Set (JWKS).

```
[DataContract]
public class JwksKey
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ←
[JwksKey](https://aps.autodesk.com/en/docs/oauth/v2/reference/dot-net-sdk/Autodesk.Authentication.Model/JwksKey)

## Inherited Members

[object.Equals(object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)),
[object.Equals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)),
[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode),
[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype),
[object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone),
[object.ReferenceEquals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals),
[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### JwksKey()

Initializes a new instance of the class.

```
public JwksKey()
```

## Properties

### E

The RSA exponent value.

```
[DataMember(Name = "e", EmitDefaultValue = false)]
public string E { get; set; }
```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### Kid

The ID of the key. Acts as a unique identifier for a specific key within the JWKS.

```
[DataMember(Name = "kid", EmitDefaultValue = false)]
public string Kid { get; set; }
```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### Kty

The cryptographic algorithm family used with the key. Currently, always `RSA`.

```
[DataMember(Name = "kty", EmitDefaultValue = false)]
public string Kty { get; set; }
```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### N

The RSA modulus value.

```
[DataMember(Name = "n", EmitDefaultValue = false)]
public string N { get; set; }
```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### Use

The intended use of the public key. Possible values:
- `sig` - Verify the signature on data.

```
[DataMember(Name = "use", EmitDefaultValue = false)]
public string Use { get; set; }
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
원본 문서: https://aps.autodesk.com/en/docs/oauth/v2/reference/dot-net-sdk/Autodesk.Authentication.Model/JwksKey
