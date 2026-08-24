---
title: "Autodesk.Authentication.Model Namespace"
url_path: reference/dot-net-sdk/Autodesk.Authentication.Model
product: "Authentication API"
surface: "authentication-v2"
protocol: ".NET SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "dot-net-sdk"
---
# Namespace Autodesk.Authentication.Model

## Classes

[IntrospectToken](https://aps.autodesk.com/en/docs/oauth/v2/reference/dot-net-sdk/Autodesk.Authentication.Model/IntrospectToken)

Represents the payload returned for an introspect token request.

[Jwks](https://aps.autodesk.com/en/docs/oauth/v2/reference/dot-net-sdk/Autodesk.Authentication.Model/Jwks)

Represents a successful response to a Get JWKS operation.

[JwksKey](https://aps.autodesk.com/en/docs/oauth/v2/reference/dot-net-sdk/Autodesk.Authentication.Model/JwksKey)

Represents a JSON Web Key Set (JWKS).

[OidcSpec](https://aps.autodesk.com/en/docs/oauth/v2/reference/dot-net-sdk/Autodesk.Authentication.Model/OidcSpec)

Represents a successful response to a Get OIDC Specification operation.

[ThreeLeggedToken](https://aps.autodesk.com/en/docs/oauth/v2/reference/dot-net-sdk/Autodesk.Authentication.Model/ThreeLeggedToken)

Represents the payload returned in response to an authorization code grant request.

[TwoLeggedToken](https://aps.autodesk.com/en/docs/oauth/v2/reference/dot-net-sdk/Autodesk.Authentication.Model/TwoLeggedToken)

Represents the payload returned in response to a client credentials grant request.

[UserInfo](https://aps.autodesk.com/en/docs/oauth/v2/reference/dot-net-sdk/Autodesk.Authentication.Model/UserInfo)

Represents a successful response to a Get User Info operation.

[UserInfoAddress](https://aps.autodesk.com/en/docs/oauth/v2/reference/dot-net-sdk/Autodesk.Authentication.Model/UserInfoAddress)

A JSON object containing information of the postal address of the user.

[UserInfoSocialUserinfoList](https://aps.autodesk.com/en/docs/oauth/v2/reference/dot-net-sdk/Autodesk.Authentication.Model/UserInfoSocialUserinfoList)

UserInfoSocialUserinfoList

## Enums

[GrantType](https://aps.autodesk.com/en/docs/oauth/v2/reference/dot-net-sdk/Autodesk.Authentication.Model/GrantType)

Specifies the grant type you are requesting the code for. Possible values are:
- `client_credentials` - For a 2-legged access token.
- `authorization_code` - For a 3-legged access token.
- `refresh_token` - For a refresh token.

[ResponseType](https://aps.autodesk.com/en/docs/oauth/v2/reference/dot-net-sdk/Autodesk.Authentication.Model/ResponseType)

The type of response you want to receive. Possible values are:
- `code` - Authorization code grant.
- `id_token` - OpenID Connect ID token.

[Scopes](https://aps.autodesk.com/en/docs/oauth/v2/reference/dot-net-sdk/Autodesk.Authentication.Model/Scopes)

Specifies the scope for the token you are requesting. See the [Developer’s Guide documentation on scopes](https://aps.autodesk.com/en/docs/oauth/v2/developers_guide/scopes/) for a complete list of possible values.

[TokenTypeHint](https://aps.autodesk.com/en/docs/oauth/v2/reference/dot-net-sdk/Autodesk.Authentication.Model/TokenTypeHint)

The type of token to revoke. Possible values are: `access_token` and `refresh_token`.

---
원본 문서: https://aps.autodesk.com/en/docs/oauth/v2/reference/dot-net-sdk/Autodesk.Authentication.Model
