---
title: "AuthenticationClient Class"
url_path: reference/dot-net-sdk/Autodesk.Authentication/AuthenticationClient
product: "Authentication API"
surface: "authentication-v2"
protocol: ".NET SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "dot-net-sdk"
---
# Class AuthenticationClient

Namespace: [Autodesk.Authentication](https://aps.autodesk.com/en/docs/oauth/v2/reference/dot-net-sdk/Autodesk.Authentication)Assembly: Autodesk.Authentication.dll

Represents a collection of functions to interact with the API endpoints

```
public class AuthenticationClient
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ←
[AuthenticationClient](https://aps.autodesk.com/en/docs/oauth/v2/reference/dot-net-sdk/Autodesk.Authentication/AuthenticationClient)

## Inherited Members

[object.Equals(object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)),
[object.Equals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)),
[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode),
[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype),
[object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone),
[object.ReferenceEquals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals),
[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

# Constructors

## AuthenticationClient(SDKManager)

```
public AuthenticationClient(SDKManager sDKManager)
```

### Parameters

`sDKManager` SDKManager

# Methods

## Authorize(string, ResponseType, string, string, string, List<Scopes>, string, string, string, string, string)

**Operation:** Authorize User

```
public string Authorize(string clientId, ResponseType responseType, string redirectUri, List<Scopes> scopes, string nonce = default(string), string state = default(string), string responseMode = default(string), string prompt = default(string), string authoptions = default(string), string codeChallenge = default(string), string codeChallengeMethod = default(string))
```

### Parameters

`clientId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The Client ID of the calling application, as registered with APS.

`responseType` [ResponseType](https://aps.autodesk.com/en/docs/oauth/v2/reference/dot-net-sdk/Autodesk.Authentication.Model/ResponseType)

The type of response you want to receive. Possible values are:
- `code` - Authorization code grant.
- `id_token` - OpenID Connect ID token.

`redirectUri` [string](https://learn.microsoft.com/dotnet/api/system.string)

The URI that APS redirects users to after they grant or deny access permission to the application. Must match the Callback URL for the application as registered with APS.

Must be specified as a URL-safe string. It can include parameters or any other valid URL construct.

`nonce` [string](https://learn.microsoft.com/dotnet/api/system.string)

A random string that is sent with the request. APS passes back the same string to you so that you can verify whether you received the same string that you sent. This check mitigates token replay attacks (optional)

`state` [string](https://learn.microsoft.com/dotnet/api/system.string)

A URL-encoded random string. The authorization flow will pass the same string back to the Callback URL using the `state` query string parameter. This process helps ensure that the callback you receive is a response to what you originally requested. It prevents malicious actors from forging requests.

The string can only contain alphanumeric characters, commas, periods, underscores, and hyphens. (optional)

`scopes` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list-1)<[Scopes](https://aps.autodesk.com/en/docs/oauth/v2/reference/dot-net-sdk/Autodesk.Authentication.Model/Scopes)>

A URL-encoded space-delimited list of requested scopes. See the [Developer’s Guide documentation on scopes](https://aps.autodesk.com/en/docs/oauth/v2/developers_guide/scopes/) for a list of valid values you can provide.

`responseMode` [string](https://learn.microsoft.com/dotnet/api/system.string)

Specifies how the authorization response should be returned. Valid values are:
- `fragment` - Encode the response parameters in the fragment of the redirect URI. A fragment in a URI is the optional part of the URI that appears after a `#` symbol, which refers to a specific section within a resource. For example, `section` in `https://www.mysite.org/myresource#section`.
- `form_post` - Embed the authorization response parameter in an HTML form.
- `query` - Embed the authorization response as a query string parameter of the redirect URI.

If `id_token` is stated as `response_type`, only `form_post` is allowed as `response_mode`.’ (optional)

`prompt` [string](https://learn.microsoft.com/dotnet/api/system.string)

Specifies how to prompt users for authentication. Possible values are:
- `login` : Always prompt the user for authentication, regardless of the state of the login session.

**Note:** If you do not specify this parameter, the system will not prompt the user for authentication as long as a login session is active. If a login session is not active, the system will prompt the user for authentication. (optional)

`authoptions` [string](https://learn.microsoft.com/dotnet/api/system.string)

A JSON object containing options that specify how to display the sign-in page. Refer the [Developer’s Guide documentation on AuthOptions](https://aps.autodesk.com/en/docs/oauth/v2/developers_guide/authoptions/) for supported values. (optional)

`codeChallenge` [string](https://learn.microsoft.com/dotnet/api/system.string)

A URL-encoded string derived from the code verifier sent in the authorization request with the Proof Key for Code Exchange (PKCE) grant flow. (optional)

`codeChallengeMethod` [string](https://learn.microsoft.com/dotnet/api/system.string)

The method used to derive the code challenge for the PKCE grant flow. Possible value is:
- `S256`- Hashes the code verifier using the SHA-256 algorithm and then applies Base64 URL encoding. (optional)

### Returns

[string](https://learn.microsoft.com/dotnet/api/system.string)

### Remarks

Returns a browser URL to redirect an end user in order to acquire the user’s consent to authorize the application to access resources on their behalf.

Invoking this operation is the first step in authenticating users and retrieving an authorization code grant. The authorization code that is generated remains valid for 5 minutes, while the ID token stays valid for 60 minutes. Any access tokens you obtain are valid for 60 minutes, and refresh tokens remain valid for 15 days.

This operation has a rate limit of 500 calls per minute.

**Note:** This operation is intended for use with client-side applications only. It is not suitable for server-side applications.

## GetKeysAsync(bool)

**Operation:** Get JWKS

```
public Task<Jwks> GetKeysAsync(bool throwOnError = true)
```

### Parameters

`throwOnError` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Returns

[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Jwks](https://aps.autodesk.com/en/docs/oauth/v2/reference/dot-net-sdk/Autodesk.Authentication.Model/Jwks)>

### Remarks

Returns a set of public keys in the JSON Web Key Set (JWKS) format.

Public keys returned by this operation can be used to validate the asymmetric JWT signature of an access token without making network calls. It can be used to validate both two-legged access tokens and three-legged access tokens.

See the Developer’s Guide topic on [Asymmetric Signing](https://aps.autodesk.com/en/docs/oauth/v2/developers_guide/asymmetric-encryption/) for more information.

### Exceptions

[AuthenticationApiException](https://aps.autodesk.com/en/docs/oauth/v2/reference/dot-net-sdk/Autodesk.Authentication/AuthenticationApiException)

Thrown when fails to make API call

## GetOidcSpecAsync(bool)

**Operation:** Get OIDC Specification

```
public Task<OidcSpec> GetOidcSpecAsync(bool throwOnError = true)
```

### Parameters

`throwOnError` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Returns

[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[OidcSpec](https://aps.autodesk.com/en/docs/oauth/v2/reference/dot-net-sdk/Autodesk.Authentication.Model/OidcSpec)>

### Remarks

Returns an OpenID Connect Discovery Specification compliant JSON document. It contains a list of the OpenID/OAuth endpoints, supported scopes, claims, public keys used to sign the tokens, and other details.

### Exceptions

[AuthenticationApiException](https://aps.autodesk.com/en/docs/oauth/v2/reference/dot-net-sdk/Autodesk.Authentication/AuthenticationApiException)

Thrown when fails to make API call

## GetThreeLeggedTokenAsync(string, string, string, string, string, bool)

**Operation:** Acquire Three Legged Token

```
public Task<ThreeLeggedToken> GetThreeLeggedTokenAsync(string clientId, string code, string redirectUri, string clientSecret = null, string codeVerifier = null, bool throwOnError = true)
```

### Parameters

`clientId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The Client ID of the calling application, as registered with APS.

`code` [string](https://learn.microsoft.com/dotnet/api/system.string)

The authorization code that was passed to your application when the user granted access permission to your application. It was passed as the `code` parameter to the redirect URI when you called [Authorize User](https://aps.autodesk.com/en/docs/oauth/v2/reference/dot-net-sdk/Autodesk.Authentication/AuthenticationClient#Autodesk_Authentication_AuthenticationClient_Authorize_System_String_Autodesk_Authentication_Model_ResponseType_System_String_System_String_System_String_System_Collections_Generic_List_Autodesk_Authentication_Model_Scopes__System_String_System_String_System_String_System_String_System_String_).

`redirectUri` [string](https://learn.microsoft.com/dotnet/api/system.string)

The URI that APS redirects users to after they grant or deny access permission to the application. Must match the Callback URL for the application registered with APS.

`clientSecret` [string](https://learn.microsoft.com/dotnet/api/system.string)

The Client secret of the calling application, as registered with APS.
**Note** The clientSecret is required only for Traditional Web Apps and Server-to-Server Apps. It is not required for Desktop, Mobile, and Single-Page Apps. (optional)

`codeVerifier` [string](https://learn.microsoft.com/dotnet/api/system.string)

A random URL-encoded string between 43 characters and 128 characters. In a PKCE grant flow, the authentication server uses this string to verify the code challenge that was passed when you called [Authorize User](https://aps.autodesk.com/en/docs/oauth/v2/reference/dot-net-sdk/Autodesk.Authentication/AuthenticationClient#Autodesk_Authentication_AuthenticationClient_Authorize_System_String_Autodesk_Authentication_Model_ResponseType_System_String_System_String_System_String_System_Collections_Generic_List_Autodesk_Authentication_Model_Scopes__System_String_System_String_System_String_System_String_System_String_). Required if `code_challenge` was specified when you called [Authorize User](https://aps.autodesk.com/en/docs/oauth/v2/reference/dot-net-sdk/Autodesk.Authentication/AuthenticationClient#Autodesk_Authentication_AuthenticationClient_Authorize_System_String_Autodesk_Authentication_Model_ResponseType_System_String_System_String_System_String_System_Collections_Generic_List_Autodesk_Authentication_Model_Scopes__System_String_System_String_System_String_System_String_System_String_). (optional)

`throwOnError` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Returns

[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[ThreeLeggedToken](https://aps.autodesk.com/en/docs/oauth/v2/reference/dot-net-sdk/Autodesk.Authentication.Model/ThreeLeggedToken)>

### Remarks

Returns a 3-legged access token.
This operation has a rate limit of 500 calls per minute.

### Exceptions

[AuthenticationApiException](https://aps.autodesk.com/en/docs/oauth/v2/reference/dot-net-sdk/Autodesk.Authentication/AuthenticationApiException)

Thrown when fails to make API call

## GetTwoLeggedTokenAsync(string, string, List<Scopes>, bool)

**Operation:** Acquire Two Legged Token

```
public Task<TwoLeggedToken> GetTwoLeggedTokenAsync(string clientId, string clientSecret, List<Scopes> scopes, bool throwOnError = true)
```

### Parameters

`clientId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The Client ID of the calling application, as registered with APS.

`clientSecret` [string](https://learn.microsoft.com/dotnet/api/system.string)

The Client secret of the calling application, as registered with APS.

`scopes` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list-1)<[Scopes](https://aps.autodesk.com/en/docs/oauth/v2/reference/dot-net-sdk/Autodesk.Authentication.Model/Scopes)>

A list of requested scopes. See the [Developer’s Guide documentation on scopes](https://aps.autodesk.com/en/docs/oauth/v2/developers_guide/scopes/) for a list of valid values you can provide.

`throwOnError` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Returns

[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[TwoLeggedToken](https://aps.autodesk.com/en/docs/oauth/v2/reference/dot-net-sdk/Autodesk.Authentication.Model/TwoLeggedToken)>

### Remarks

Returns a 2-legged access token.
This operation has a rate limit of 500 calls per minute.

### Exceptions

[AuthenticationApiException](https://aps.autodesk.com/en/docs/oauth/v2/reference/dot-net-sdk/Autodesk.Authentication/AuthenticationApiException)

Thrown when fails to make API call

## GetUserInfoAsync(string, bool)

**Operation:** Get User Info

```
public Task<UserInfo> GetUserInfoAsync(string authorization, bool throwOnError = true)
```

### Parameters

`authorization` [string](https://learn.microsoft.com/dotnet/api/system.string)

The 3-legged access token of the currently logged in user.

`throwOnError` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Returns

[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[UserInfo](https://aps.autodesk.com/en/docs/oauth/v2/reference/dot-net-sdk/Autodesk.Authentication.Model/UserInfo)>

Task of ApiResponse<UserInfo>

### Remarks

Retrieves information about the authenticated user.

### Exceptions

[AuthenticationApiException](https://aps.autodesk.com/en/docs/oauth/v2/reference/dot-net-sdk/Autodesk.Authentication/AuthenticationApiException)

Thrown when fails to make API call

## IntrospectTokenAsync(string, string, string, bool)

**Operation:** Introspect Token

```
public Task<IntrospectToken> IntrospectTokenAsync(string token, string clientId, string clientSecret = null, bool throwOnError = true)
```

### Parameters

`token` [string](https://learn.microsoft.com/dotnet/api/system.string)

The token to be introspected. (optional)

`clientId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The Client ID of the calling application, as registered with APS.

`clientSecret` [string](https://learn.microsoft.com/dotnet/api/system.string)

The Client secret of the calling application, as registered with APS.
**Note** The clientSecret is required only for Traditional Web Apps and Server-to-Server Apps. It is not required for Desktop, Mobile, and Single-Page Apps. (optional)

`throwOnError` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Returns

[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[IntrospectToken](https://aps.autodesk.com/en/docs/oauth/v2/reference/dot-net-sdk/Autodesk.Authentication.Model/IntrospectToken)>

### Remarks

Returns metadata about the specified access token or reference token.

An application can only introspect its own tokens.

This operation has a rate limit of 500 calls per minute.

### Exceptions

[AuthenticationApiException](https://aps.autodesk.com/en/docs/oauth/v2/reference/dot-net-sdk/Autodesk.Authentication/AuthenticationApiException)

Thrown when fails to make API call

## Logout(string)

**Operation:** Logout

```
public string Logout(string postLogoutRedirectUri = null)
```

### Parameters

`postLogoutRedirectUri` [string](https://learn.microsoft.com/dotnet/api/system.string)

The URI to redirect your users to once logout is performed. If you do not specify this parameter your users are redirected to the Autodesk Sign-in page.

**Note:** You must provide a redirect URI that is pre-registered with APS. This precaution is taken to prevent unauthorized applications from hijacking the logout process. (optional)

### Returns

[string](https://learn.microsoft.com/dotnet/api/system.string)

### Remarks

Signs out the currently authenticated user from the APS authorization server. Thereafter, this operation redirects the user to the `postLogoutRedirectUri`, or to the Autodesk Sign-in page when no `postLogoutRedirectUri` is provided.

This operation has a rate limit of 500 calls per minute.

### Exceptions

[AuthenticationApiException](https://aps.autodesk.com/en/docs/oauth/v2/reference/dot-net-sdk/Autodesk.Authentication/AuthenticationApiException)

Thrown when fails to make API call

## RefreshTokenAsync(string, string, string, List<Scopes>, bool)

**Operation:** Acquire Refresh Token

```
public Task<ThreeLeggedToken> RefreshTokenAsync(string clientId, string clientSecret, string refreshToken, List<Scopes> scopes = null, bool throwOnError = true)
```

### Parameters

`clientId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The Client ID of the calling application, as registered with APS.

`clientSecret` [string](https://learn.microsoft.com/dotnet/api/system.string)

The Client secret of the calling application, as registered with APS.
**Note** The clientSecret is required only for Traditional Web Apps and Server-to-Server Apps. It is not required for Desktop, Mobile, and Single-Page Apps. (optional)

`refreshToken` [string](https://learn.microsoft.com/dotnet/api/system.string)

`scopes` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list-1)<[Scopes](https://aps.autodesk.com/en/docs/oauth/v2/reference/dot-net-sdk/Autodesk.Authentication.Model/Scopes)>

A URL-encoded space-delimited list of requested scopes. See the [Developer’s Guide documentation on scopes](https://aps.autodesk.com/en/docs/oauth/v2/developers_guide/scopes/) for a list of valid values you can provide.
If specified, scopes have to be primarily same with or a subset of the scopes used to generate the refresh_token.(optional)

`throwOnError` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Returns

[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[ThreeLeggedToken](https://aps.autodesk.com/en/docs/oauth/v2/reference/dot-net-sdk/Autodesk.Authentication.Model/ThreeLeggedToken)>

Task of <ThreeLeggedToken>

### Remarks

Returns a new 3-legged access token using the refresh token provided in the request.
This operation has a rate limit of 500 calls per minute.

### Exceptions

[AuthenticationApiException](https://aps.autodesk.com/en/docs/oauth/v2/reference/dot-net-sdk/Autodesk.Authentication/AuthenticationApiException)

Thrown when fails to make API call

## RevokeAsync(string, string, string, TokenTypeHint, bool)

**Operation:** Revoke Token

```
public Task<HttpResponseMessage> RevokeAsync(string token, string clientId, string clientSecret = null, TokenTypeHint tokenTypeHint = TokenTypeHint.AccessToken, bool throwOnError = true)
```

### Parameters

`token` [string](https://learn.microsoft.com/dotnet/api/system.string)

The token to be revoked.

`clientId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The Client ID of the calling application, as registered with APS.

`clientSecret` [string](https://learn.microsoft.com/dotnet/api/system.string)

The Client secret of the calling application, as registered with APS.
**Note** The clientSecret is required only for Traditional Web Apps and Server-to-Server Apps. It is not required for Desktop, Mobile, and Single-Page Apps. (optional)

`tokenTypeHint` [TokenTypeHint](https://aps.autodesk.com/en/docs/oauth/v2/reference/dot-net-sdk/Autodesk.Authentication.Model/TokenTypeHint)

A refresh token or access token.

`throwOnError` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Returns

[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[HttpResponseMessage](https://learn.microsoft.com/dotnet/api/system.net.http.httpresponsemessage)>

### Remarks

Revokes an active access token or refresh token.

An application can only revoke its own tokens.

This operation has a rate limit of 100 calls per minute.

### Exceptions

[AuthenticationApiException](https://aps.autodesk.com/en/docs/oauth/v2/reference/dot-net-sdk/Autodesk.Authentication/AuthenticationApiException)

Thrown when fails to make API call

---
원본 문서: https://aps.autodesk.com/en/docs/oauth/v2/reference/dot-net-sdk/Autodesk.Authentication/AuthenticationClient
