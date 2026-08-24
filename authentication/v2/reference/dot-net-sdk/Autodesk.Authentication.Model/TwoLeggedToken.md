---
title: "TwoLeggedToken Class"
url_path: reference/dot-net-sdk/Autodesk.Authentication.Model/TwoLeggedToken
product: "Authentication API"
surface: "authentication-v2"
protocol: ".NET SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "dot-net-sdk"
---
# Class TwoLeggedToken

Namespace: [Autodesk.Authentication.Model](https://aps.autodesk.com/en/docs/oauth/v2/reference/dot-net-sdk/Autodesk.Authentication.Model)Assembly: Autodesk.Authentication.dll

Represents the payload returned in response to a client credentials grant request.

```
[DataContract]
public class TwoLeggedToken
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ←
[TwoLeggedToken](https://aps.autodesk.com/en/docs/oauth/v2/reference/dot-net-sdk/Autodesk.Authentication.Model/TwoLeggedToken)

## Inherited Members

[object.Equals(object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)),
[object.Equals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)),
[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode),
[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype),
[object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone),
[object.ReferenceEquals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals),
[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### TwoLeggedToken()

Initializes a new instance of the class.

```
public TwoLeggedToken()
```

## Properties

### AccessToken

The access token.

```
[DataMember(Name = "access_token", EmitDefaultValue = false)]
public string AccessToken { get; set; }
```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### ExpiresAt

Access token expiration time, in Unix seconds.

```
[DataMember(Name = "expires_at", EmitDefaultValue = false)]
public long? ExpiresAt { get; }
```

#### Property Value

[long](https://learn.microsoft.com/dotnet/api/system.int64)?

### ExpiresIn

Access token expiration time (in seconds).

```
[DataMember(Name = "expires_in", EmitDefaultValue = false)]
public int? ExpiresIn { get; set; }
```

#### Property Value

[int](https://learn.microsoft.com/dotnet/api/system.int32)?

### TokenType

Will always be Bearer.

```
[DataMember(Name = "token_type", EmitDefaultValue = false)]
public string TokenType { get; set; }
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
원본 문서: https://aps.autodesk.com/en/docs/oauth/v2/reference/dot-net-sdk/Autodesk.Authentication.Model/TwoLeggedToken
