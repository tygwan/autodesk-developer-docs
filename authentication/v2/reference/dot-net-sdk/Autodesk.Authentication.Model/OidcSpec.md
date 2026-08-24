---
title: "OidcSpec Class"
url_path: reference/dot-net-sdk/Autodesk.Authentication.Model/OidcSpec
product: "Authentication API"
surface: "authentication-v2"
protocol: ".NET SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "dot-net-sdk"
---
# Class OidcSpec

Namespace: [Autodesk.Authentication.Model](https://aps.autodesk.com/en/docs/oauth/v2/reference/dot-net-sdk/Autodesk.Authentication.Model)Assembly: Autodesk.Authentication.dll

Represents a successful response to a Get OIDC Specification operation.

```
[DataContract]
public class OidcSpec
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ←
[OidcSpec](https://aps.autodesk.com/en/docs/oauth/v2/reference/dot-net-sdk/Autodesk.Authentication.Model/OidcSpec)

## Inherited Members

[object.Equals(object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)),
[object.Equals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)),
[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode),
[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype),
[object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone),
[object.ReferenceEquals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals),
[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### OidcSpec()

Initializes a new instance of the class.

```
public OidcSpec()
```

## Properties

### AuthorizationEndpoint

The endpoint for authorizing users. It initiates the user authentication process in obtaining an authorization code grant.

```
[DataMember(Name = "authorization_endpoint", EmitDefaultValue = false)]
public string AuthorizationEndpoint { get; set; }
```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### GrantTypesSupported

A list of grant types supported by APS. Each grant type represents a different way an application can obtain an access token.

```
[DataMember(Name = "grant_types_supported", EmitDefaultValue = false)]
public List<string> GrantTypesSupported { get; set; }
```

#### Property Value

[List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)>

### IdTokenSigningAlgValuesSupported

A list of all the token signing algorithms supported by APS.

```
[DataMember(Name = "id_token_signing_alg_values_supported", EmitDefaultValue = false)]
public List<string> IdTokenSigningAlgValuesSupported { get; set; }
```

#### Property Value

[List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)>

### IntrospectionEndpoint

The endpoint for obtaining metadata about an access token or refresh token.

```
[DataMember(Name = "introspection_endpoint", EmitDefaultValue = false)]
public string IntrospectionEndpoint { get; set; }
```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### Issuer

The base URL of the openID Provider. Always `https://developer.api.autodesk.com` for APS.

```
[DataMember(Name = "issuer", EmitDefaultValue = false)]
public string Issuer { get; set; }
```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### JwksUri

The endpoint for retrieving public keys used by APS, in the JWKS format.

```
[DataMember(Name = "jwks_uri", EmitDefaultValue = false)]
public string JwksUri { get; set; }
```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### ResponseModesSupported

A list of response modes supported by APS. Each response mode defines a different way of delivering an authorization response.

```
[DataMember(Name = "response_modes_supported", EmitDefaultValue = false)]
public List<string> ResponseModesSupported { get; set; }
```

#### Property Value

[List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)>

### ResponseTypesSupported

A list of the response types supported by APS. Each response type represent a different flow.

```
[DataMember(Name = "response_types_supported", EmitDefaultValue = false)]
public List<string> ResponseTypesSupported { get; set; }
```

#### Property Value

[List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)>

### RevokeEndpoint

The endpoint for revoking an access token or refresh token.

```
[DataMember(Name = "revoke_endpoint", EmitDefaultValue = false)]
public string RevokeEndpoint { get; set; }
```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### ScopesSupported

A list of supported scopes.

```
[DataMember(Name = "scopes_supported", EmitDefaultValue = false)]
public List<string> ScopesSupported { get; set; }
```

#### Property Value

[List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)>

### SubjectTypesSupported

A list of subject identifier types supported by APS.

```
[DataMember(Name = "subject_types_supported", EmitDefaultValue = false)]
public List<string> SubjectTypesSupported { get; set; }
```

#### Property Value

[List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)>

### TokenEndpoint

The endpoint for acquiring access tokens and refresh tokens.

```
[DataMember(Name = "token_endpoint", EmitDefaultValue = false)]
public string TokenEndpoint { get; set; }
```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### UserInfoEndpoint

The endpoint for querying information about the authenticated user.

```
[DataMember(Name = "userinfo_endpoint", EmitDefaultValue = false)]
public string UserInfoEndpoint { get; set; }
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
원본 문서: https://aps.autodesk.com/en/docs/oauth/v2/reference/dot-net-sdk/Autodesk.Authentication.Model/OidcSpec
