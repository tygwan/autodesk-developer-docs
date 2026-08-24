---
title: "AuthenticationClient"
url_path: reference/typescript-sdk/classes/AuthenticationClient
product: "Authentication API"
surface: "authentication-v2"
protocol: "TypeScript SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "typescript-sdk"
---
# Class: AuthenticationClient

## Remarks

Represents a collection of functions to interact with the Authentication API endpoints.

## Constructors

### new AuthenticationClient()

**new AuthenticationClient**(`optionalArgs`?): [`AuthenticationClient`](https://aps.autodesk.com/en/docs/oauth/v2/reference/typescript-sdk/classes/AuthenticationClient)

### optionalArgs?

#### sdkManager

`SdkManager`

#### Returns

[`AuthenticationClient`](https://aps.autodesk.com/en/docs/oauth/v2/reference/typescript-sdk/classes/AuthenticationClient)

#### Defined in

[custom-code/authenticationClient.ts:15](https://github.com/autodesk-platform-services/aps-sdk-node/blob/e37e37c49eb213844e79f1c7dee5616930755060/authentication/source/custom-code/authenticationClient.ts#L15)

# Methods

## authorize()

**Operation**: Authorize User

**authorize**(`clientId`, `responseType`, `redirectUri`, `scopes`, `optionalArgs`?): `string`

Returns a browser URL to redirect an end user in order to acquire the user’s consent to authorize the application to access resources on their behalf.

Invoking this operation is the first step in authenticating users and retrieving an authorization code grant. The authorization code that is generated remains valid for 5 minutes, while the ID token stays valid for 60 minutes. Any access tokens you obtain are valid for 60 minutes, and refresh tokens remain valid for 15 days.

This operation has a rate limit of 500 calls per minute.

**Note:** This operation is intended for use with client-side applications only. It is not suitable for server-side applications.

### Parameters

#### clientId

`string`

The Client ID of the calling application, as registered with APS.

#### responseType

[`ResponseType`](https://aps.autodesk.com/en/docs/oauth/v2/reference/typescript-sdk/enumerations/ResponseType)

The type of response you want to receive. Possible values are:
- `code` - Authorization code grant.
- `id_token` - OpenID Connect ID token.

#### redirectUri

`string`

The URI that APS redirects users to after they grant or deny access permission to the application. Must match the Callback URL for the application as registered with APS.

Must be specified as a URL-safe string. It can include parameters or any other valid URL construct.

#### scopes

[`Scopes`](https://aps.autodesk.com/en/docs/oauth/v2/reference/typescript-sdk/enumerations/Scopes)[]

### optionalArgs?

#### authoptions

`string`

#### codeChallenge

`string`

#### codeChallengeMethod

`string`

#### nonce

`string`

#### prompt

`string`

#### responseMode

`string`

#### state

`string`

#### Returns

`string`

#### Throws

[AuthenticationApiError](https://aps.autodesk.com/en/docs/oauth/v2/reference/typescript-sdk/classes/AuthenticationApiError)

#### Defined in

[custom-code/authenticationClient.ts:109](https://github.com/autodesk-platform-services/aps-sdk-node/blob/e37e37c49eb213844e79f1c7dee5616930755060/authentication/source/custom-code/authenticationClient.ts#L109)

## getKeys()

**Operation**: Get JWKS

**getKeys**(`optionalArgs`?): `Promise`<[`Jwks`](https://aps.autodesk.com/en/docs/oauth/v2/reference/typescript-sdk/interfaces/Jwks)>

Returns a set of public keys in the JSON Web Key Set (JWKS) format.

Public keys returned by this operation can be used to validate the asymmetric JWT signature of an access token without making network calls. It can be used to validate both two-legged access tokens and three-legged access tokens.

See the Developer’s Guide topic on [Asymmetric Signing](https://aps.autodesk.com/en/docs/oauth/v2/developers_guide/asymmetric-encryption/) for more information.

### optionalArgs?

#### options

`ApsServiceRequestConfig`

Override http request option.

#### Returns

`Promise`<[`Jwks`](https://aps.autodesk.com/en/docs/oauth/v2/reference/typescript-sdk/interfaces/Jwks)>

#### Throws

[AuthenticationApiError](https://aps.autodesk.com/en/docs/oauth/v2/reference/typescript-sdk/classes/AuthenticationApiError)

#### Defined in

[custom-code/authenticationClient.ts:179](https://github.com/autodesk-platform-services/aps-sdk-node/blob/e37e37c49eb213844e79f1c7dee5616930755060/authentication/source/custom-code/authenticationClient.ts#L179)

## getOidcSpec()

**Operation**: Get OIDC Specification

**getOidcSpec**(`optionalArgs`?): `Promise`<[`OidcSpec`](https://aps.autodesk.com/en/docs/oauth/v2/reference/typescript-sdk/interfaces/OidcSpec)>

Returns an OpenID Connect Discovery Specification compliant JSON document. It contains a list of the OpenID/OAuth endpoints, supported scopes, claims, public keys used to sign the tokens, and other details.

### optionalArgs?

#### options

`ApsServiceRequestConfig`

Override http request option.

#### Returns

`Promise`<[`OidcSpec`](https://aps.autodesk.com/en/docs/oauth/v2/reference/typescript-sdk/interfaces/OidcSpec)>

#### Throws

[AuthenticationApiError](https://aps.autodesk.com/en/docs/oauth/v2/reference/typescript-sdk/classes/AuthenticationApiError)

#### Defined in

[custom-code/authenticationClient.ts:193](https://github.com/autodesk-platform-services/aps-sdk-node/blob/e37e37c49eb213844e79f1c7dee5616930755060/authentication/source/custom-code/authenticationClient.ts#L193)

## getThreeLeggedToken()

**Operation**: Get Three Legged Token

**getThreeLeggedToken**(`clientId`, `code`, `redirect_uri`, `optionalArgs`?): `Promise`<[`ThreeLeggedToken`](https://aps.autodesk.com/en/docs/oauth/v2/reference/typescript-sdk/classes/ThreeLeggedToken)>

Returns a 3-legged access token.
This operation has a rate limit of 500 calls per minute.

### Parameters

#### clientId

`string`

The Client ID of the calling application, as registered with APS.

#### code

`string`

The authorization code that was passed to your application when the user granted access permission to your application. It was passed as the `code` parameter to the redirect URI when you called [Authorize User](https://aps.autodesk.com/en/docs/oauth/v2/reference/typescript-sdk/classes/AuthenticationClient/#authorize).

#### redirect_uri

`string`

The URI that APS redirects users to after they grant or deny access permission to the application. Must match the Callback URL for the application registered with APS.

### optionalArgs?

#### clientSecret

`string`

The Client secret of the calling application, as registered with APS.**Note** The clientSecret is required only for Traditional Web Apps and Server-to-Server Apps. It is not required for Desktop, Mobile, and Single-Page Apps.

#### code_verifier

`string`

A random URL-encoded string between 43 characters and 128 characters. In a PKCE grant flow, the authentication server uses this string to verify the code challenge that was passed when you called [Authorize User](https://aps.autodesk.com/en/docs/oauth/v2/reference/typescript-sdk/classes/AuthenticationClient/#authorize). Required if [`code_challenge` was specified when you called [Authorize User](https://aps.autodesk.com/en/docs/oauth/v2/reference/typescript-sdk/classes/AuthenticationClient/#authorize).

#### options

`ApsServiceRequestConfig`

Override http request option.

#### Returns

`Promise`<[`ThreeLeggedToken`](https://aps.autodesk.com/en/docs/oauth/v2/reference/typescript-sdk/classes/ThreeLeggedToken)>

#### Throws

[AuthenticationApiError](https://aps.autodesk.com/en/docs/oauth/v2/reference/typescript-sdk/classes/AuthenticationApiError)

#### Defined in

[custom-code/authenticationClient.ts:128](https://github.com/autodesk-platform-services/aps-sdk-node/blob/e37e37c49eb213844e79f1c7dee5616930755060/authentication/source/custom-code/authenticationClient.ts#L128)

## getTwoLeggedToken()

**Operation**: Get Two Legged Token

**getTwoLeggedToken**(`clientId`, `clientSecret`, `scopes`, `optionalArgs`?): `Promise`<[`TwoLeggedToken`](https://aps.autodesk.com/en/docs/oauth/v2/reference/typescript-sdk/classes/TwoLeggedToken)>

Returns a 2-legged access token.
This operation has a rate limit of 500 calls per minute.

### Parameters

#### clientId

`string`

The Client ID of the calling application, as registered with APS.

#### clientSecret

`string`

The Client secret of the calling application, as registered with APS.

#### scopes

[`Scopes`](https://aps.autodesk.com/en/docs/oauth/v2/reference/typescript-sdk/enumerations/Scopes)[]

A list of requested scopes. See the [Developer’s Guide documentation on scopes](https://aps.autodesk.com/en/docs/oauth/v2/developers_guide/scopes/) for a list of valid values you can provide.

### optionalArgs?

#### options

`ApsServiceRequestConfig`

Override http request option.

#### Returns

`Promise`<[`TwoLeggedToken`](https://aps.autodesk.com/en/docs/oauth/v2/reference/typescript-sdk/classes/TwoLeggedToken)>

#### Throws

[AuthenticationApiError](https://aps.autodesk.com/en/docs/oauth/v2/reference/typescript-sdk/classes/AuthenticationApiError)

#### Defined in

[custom-code/authenticationClient.ts:50](https://github.com/autodesk-platform-services/aps-sdk-node/blob/e37e37c49eb213844e79f1c7dee5616930755060/authentication/source/custom-code/authenticationClient.ts#L50)

## getUserInfo()

**Operation**: > **getUserInfo**(`authorization`, `optionalArgs`?): `Promise`<[`UserInfo`](https://aps.autodesk.com/en/docs/oauth/v2/reference/typescript-sdk/interfaces/UserInfo)>

Retrieves information about the authenticated user.

### Parameters

#### authorization

`string`

The 3-legged access token of the currently logged in user.

### optionalArgs?

#### options

`ApsServiceRequestConfig`

Override http request option.

#### Returns

`Promise`<[`UserInfo`](https://aps.autodesk.com/en/docs/oauth/v2/reference/typescript-sdk/interfaces/UserInfo)>

#### Defined in

[custom-code/authenticationClient.ts:31](https://github.com/autodesk-platform-services/aps-sdk-node/blob/e37e37c49eb213844e79f1c7dee5616930755060/authentication/source/custom-code/authenticationClient.ts#L31)

## introspectToken()

**Operation**: Introspect Token

**introspectToken**(`token`?, `clientId`?, `optionalArgs`?): `Promise`<[`IntrospectToken`](https://aps.autodesk.com/en/docs/oauth/v2/reference/typescript-sdk/interfaces/IntrospectToken)>

Returns metadata about the specified access token or reference token.

An application can only introspect its own tokens.

This operation has a rate limit of 500 calls per minute.

### Parameters

#### token?

`string`

The token to be introspected.

#### clientId?

`string`

The Client ID of the application making the request. **Note** This is required only for Traditional Web Apps and Server-to-Server Apps. It is not required for Desktop, Mobile, and Single-Page Apps.

### optionalArgs?

#### clientSecret

`string`

#### options

`ApsServiceRequestConfig`

Override http request option.

#### Returns

`Promise`<[`IntrospectToken`](https://aps.autodesk.com/en/docs/oauth/v2/reference/typescript-sdk/interfaces/IntrospectToken)>

#### Throws

[AuthenticationApiError](https://aps.autodesk.com/en/docs/oauth/v2/reference/typescript-sdk/classes/AuthenticationApiError)

#### Defined in

[custom-code/authenticationClient.ts:216](https://github.com/autodesk-platform-services/aps-sdk-node/blob/e37e37c49eb213844e79f1c7dee5616930755060/authentication/source/custom-code/authenticationClient.ts#L216)

## logout()

**Operation**: Logout

**logout**(`optionalArgs`?): `string`

Signs out the currently authenticated user from the APS authorization server. Thereafter, this operation redirects the user to the `post_logout_redirect_uri`, or to the Autodesk Sign-in page when no `post_logout_redirect_uri` is provided.

This operation has a rate limit of 500 calls per minute.

### optionalArgs?

#### postLogoutRedirectUri

`string`

#### Returns

`string`

#### Throws

[AuthenticationApiError](https://aps.autodesk.com/en/docs/oauth/v2/reference/typescript-sdk/classes/AuthenticationApiError)

#### Defined in

[custom-code/authenticationClient.ts:245](https://github.com/autodesk-platform-services/aps-sdk-node/blob/e37e37c49eb213844e79f1c7dee5616930755060/authentication/source/custom-code/authenticationClient.ts#L245)

## refreshToken()

**Operation**: Get Refresh Token

**refreshToken**(`refreshToken`, `clientId`, `optionalArgs`?): `Promise`<[`ThreeLeggedToken`](https://aps.autodesk.com/en/docs/oauth/v2/reference/typescript-sdk/classes/ThreeLeggedToken)>

Returns a new 3-legged access token using the refresh token provided in the request.
This operation has a rate limit of 500 calls per minute.

### Parameters

#### refreshToken

`string`

The refresh token used to acquire a new access token and a refresh token.

#### clientId

`string`

The authorization code that was passed to your application when the user granted access permission to your application. It was passed as the `code` parameter to the redirect URI when you called [Authorize User](https://aps.autodesk.com/en/docs/oauth/v2/reference/typescript-sdk/classes/AuthenticationClient/#authorize).

### optionalArgs?

#### clientSecret

`string`

The Client secret of the calling application, as registered with APS.**Note** The clientSecret is required only for Traditional Web Apps and Server-to-Server Apps. It is not required for Desktop, Mobile, and Single-Page Apps.

#### options

`ApsServiceRequestConfig`

Override http request option.

#### scopes

[`Scopes`](https://aps.autodesk.com/en/docs/oauth/v2/reference/typescript-sdk/enumerations/Scopes)[]

A list of requested scopes. See the [Developer’s Guide documentation on scopes](https://aps.autodesk.com/en/docs/oauth/v2/developers_guide/scopes/) for a list of valid values you can provide.

#### Returns

`Promise`<[`ThreeLeggedToken`](https://aps.autodesk.com/en/docs/oauth/v2/reference/typescript-sdk/classes/ThreeLeggedToken)>

#### Throws

[AuthenticationApiError](https://aps.autodesk.com/en/docs/oauth/v2/reference/typescript-sdk/classes/AuthenticationApiError)

#### Defined in

[custom-code/authenticationClient.ts:154](https://github.com/autodesk-platform-services/aps-sdk-node/blob/e37e37c49eb213844e79f1c7dee5616930755060/authentication/source/custom-code/authenticationClient.ts#L154)

## revoke()

**Operation**: Revoke Token

**revoke**(`token`, `clientId`?, `tokenTypeHint`?, `optionalArgs`?): `Promise`<`ApiResponse`>

Revokes an active access token or refresh token.

An application can only revoke its own tokens.

This operation has a rate limit of 100 calls per minute.

### Parameters

#### token

`string`

The token to be revoked.

#### clientId?

`string`

The Client ID of the application making the request. **Note** This is required only for Traditional Web Apps and Server-to-Server Apps. It is not required for Desktop, Mobile, and Single-Page Apps.

#### tokenTypeHint?

[`TokenTypeHint`](https://aps.autodesk.com/en/docs/oauth/v2/reference/typescript-sdk/enumerations/TokenTypeHint)

### optionalArgs?

#### clientSecret

`string`

#### options

`ApsServiceRequestConfig`

Override http request option.

#### Returns

`Promise`<`ApiResponse`>

#### Throws

[AuthenticationApiError](https://aps.autodesk.com/en/docs/oauth/v2/reference/typescript-sdk/classes/AuthenticationApiError)

#### Defined in

[custom-code/authenticationClient.ts:271](https://github.com/autodesk-platform-services/aps-sdk-node/blob/e37e37c49eb213844e79f1c7dee5616930755060/authentication/source/custom-code/authenticationClient.ts#L271)

---
원본 문서: https://aps.autodesk.com/en/docs/oauth/v2/reference/typescript-sdk/classes/AuthenticationClient
