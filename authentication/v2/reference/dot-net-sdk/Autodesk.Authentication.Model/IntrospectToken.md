---
title: "IntrospectToken Class"
url_path: reference/dot-net-sdk/Autodesk.Authentication.Model/IntrospectToken
product: "Authentication API"
surface: "authentication-v2"
protocol: ".NET SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "dot-net-sdk"
---
# Class IntrospectToken

Namespace: [Autodesk.Authentication.Model](https://aps.autodesk.com/en/docs/oauth/v2/reference/dot-net-sdk/Autodesk.Authentication.Model)Assembly: Autodesk.Authentication.dll

Represents the payload returned for an introspect token request.

```
[DataContract]
public class IntrospectToken
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ←
[IntrospectToken](https://aps.autodesk.com/en/docs/oauth/v2/reference/dot-net-sdk/Autodesk.Authentication.Model/IntrospectToken)

## Inherited Members

[object.Equals(object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)),
[object.Equals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)),
[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode),
[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype),
[object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone),
[object.ReferenceEquals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals),
[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### IntrospectToken()

Initializes a new instance of the class.

```
public IntrospectToken()
```

## Properties

### Active

`true`: The token is active.

`false`: The token is expired, invalid, or revoked.

```
[DataMember(Name = "active", EmitDefaultValue = false)]
public bool? Active { get; set; }
```

#### Property Value

[bool](https://learn.microsoft.com/dotnet/api/system.boolean)?

### ClientId

The Client ID of the application associated with the token.

```
[DataMember(Name = "client_id", EmitDefaultValue = false)]
public string ClientId { get; set; }
```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### Exp

The expiration time of the token, represented as a Unix timestamp.

```
[DataMember(Name = "exp", EmitDefaultValue = false)]
public int? Exp { get; set; }
```

#### Property Value

[int](https://learn.microsoft.com/dotnet/api/system.int32)?

### Scope

A URL-encoded, space separated list of scopes associated with the token.

```
[DataMember(Name = "scope", EmitDefaultValue = false)]
public string Scope { get; set; }
```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### UserId

The ID of the user who authorized the token.

```
[DataMember(Name = "userid", EmitDefaultValue = false)]
public string UserId { get; set; }
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
원본 문서: https://aps.autodesk.com/en/docs/oauth/v2/reference/dot-net-sdk/Autodesk.Authentication.Model/IntrospectToken
