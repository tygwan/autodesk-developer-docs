---
title: "GrantType"
url_path: reference/typescript-sdk/enumerations/GrantType
product: "Authentication API"
surface: "authentication-v2"
protocol: "TypeScript SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "typescript-sdk"
---
# Enumeration: GrantType

Specifies the grant type you are requesting the code for. Possible values are:
- `client_credentials` - For a 2-legged access token.
- `authorization_code` - For a 3-legged access token.
- `refresh_token` - For a refresh token.

## Enumeration Members

### AuthorizationCode

**AuthorizationCode**: `"authorization_code"`

#### Defined in

[model/grantType.ts:16](https://github.com/autodesk-platform-services/aps-sdk-node/blob/d074cae5f8b3a7bd83e612e0654922b885545121/authentication/source/model/grantType.ts#L16)

### ClientCredentials

**ClientCredentials**: `"client_credentials"`

#### Defined in

[model/grantType.ts:15](https://github.com/autodesk-platform-services/aps-sdk-node/blob/d074cae5f8b3a7bd83e612e0654922b885545121/authentication/source/model/grantType.ts#L15)

### RefreshToken

**RefreshToken**: `"refresh_token"`

#### Defined in

[model/grantType.ts:17](https://github.com/autodesk-platform-services/aps-sdk-node/blob/d074cae5f8b3a7bd83e612e0654922b885545121/authentication/source/model/grantType.ts#L17)

---
원본 문서: https://aps.autodesk.com/en/docs/oauth/v2/reference/typescript-sdk/enumerations/GrantType
