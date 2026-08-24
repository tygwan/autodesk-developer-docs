---
title: "OidcSpec"
url_path: reference/typescript-sdk/interfaces/OidcSpec
product: "Authentication API"
surface: "authentication-v2"
protocol: "TypeScript SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "typescript-sdk"
---
# Interface: OidcSpec

Represents a successful response to a Get OIDC Specification operation.

## Export

OidcSpec

## Properties

### authorization_endpoint?

`optional` **authorization_endpoint**: `string`

The endpoint for authorizing users. It initiates the user authentication process in obtaining an authorization code grant.

#### Memberof

OidcSpec

#### Defined in

[model/oidcSpec.ts:20](https://github.com/autodesk-platform-services/aps-sdk-node/blob/d074cae5f8b3a7bd83e612e0654922b885545121/authentication/source/model/oidcSpec.ts#L20)

### grant_types_supported?

`optional` **grant_types_supported**: `string`[]

A list of grant types supported by APS. Each grant type represents a different way an application can obtain an access token.

#### Memberof

OidcSpec

#### Defined in

[model/oidcSpec.ts:74](https://github.com/autodesk-platform-services/aps-sdk-node/blob/d074cae5f8b3a7bd83e612e0654922b885545121/authentication/source/model/oidcSpec.ts#L74)

### id_token_signing_alg_values_supported?

`optional` **id_token_signing_alg_values_supported**: `string`[]

A list of all the token signing algorithms supported by APS.

#### Memberof

OidcSpec

#### Defined in

[model/oidcSpec.ts:86](https://github.com/autodesk-platform-services/aps-sdk-node/blob/d074cae5f8b3a7bd83e612e0654922b885545121/authentication/source/model/oidcSpec.ts#L86)

### introspection_endpoint?

`optional` **introspection_endpoint**: `string`

The endpoint for obtaining metadata about an access token or refresh token.

#### Memberof

OidcSpec

#### Defined in

[model/oidcSpec.ts:50](https://github.com/autodesk-platform-services/aps-sdk-node/blob/d074cae5f8b3a7bd83e612e0654922b885545121/authentication/source/model/oidcSpec.ts#L50)

### issuer?

`optional` **issuer**: `string`

The base URL of the openID Provider. Always `https://developer.api.autodesk.com` for APS.

#### Memberof

OidcSpec

#### Defined in

[model/oidcSpec.ts:14](https://github.com/autodesk-platform-services/aps-sdk-node/blob/d074cae5f8b3a7bd83e612e0654922b885545121/authentication/source/model/oidcSpec.ts#L14)

### jwks_uri?

`optional` **jwks_uri**: `string`

The endpoint for retrieving public keys used by APS, in the JWKS format.

#### Memberof

OidcSpec

#### Defined in

[model/oidcSpec.ts:38](https://github.com/autodesk-platform-services/aps-sdk-node/blob/d074cae5f8b3a7bd83e612e0654922b885545121/authentication/source/model/oidcSpec.ts#L38)

### response_modes_supported?

`optional` **response_modes_supported**: `string`[]

A list of response modes supported by APS. Each response mode defines a different way of delivering an authorization response.

#### Memberof

OidcSpec

#### Defined in

[model/oidcSpec.ts:68](https://github.com/autodesk-platform-services/aps-sdk-node/blob/d074cae5f8b3a7bd83e612e0654922b885545121/authentication/source/model/oidcSpec.ts#L68)

### response_types_supported?

`optional` **response_types_supported**: `string`[]

A list of the response types supported by APS. Each response type represent a different flow.

#### Memberof

OidcSpec

#### Defined in

[model/oidcSpec.ts:62](https://github.com/autodesk-platform-services/aps-sdk-node/blob/d074cae5f8b3a7bd83e612e0654922b885545121/authentication/source/model/oidcSpec.ts#L62)

### revoke_endpoint?

`optional` **revoke_endpoint**: `string`

The endpoint for revoking an access token or refresh token.

#### Memberof

OidcSpec

#### Defined in

[model/oidcSpec.ts:44](https://github.com/autodesk-platform-services/aps-sdk-node/blob/d074cae5f8b3a7bd83e612e0654922b885545121/authentication/source/model/oidcSpec.ts#L44)

### scopes_supported?

`optional` **scopes_supported**: `string`[]

A list of supported scopes.

#### Memberof

OidcSpec

#### Defined in

[model/oidcSpec.ts:56](https://github.com/autodesk-platform-services/aps-sdk-node/blob/d074cae5f8b3a7bd83e612e0654922b885545121/authentication/source/model/oidcSpec.ts#L56)

### subject_types_supported?

`optional` **subject_types_supported**: `string`[]

A list of subject identifier types supported by APS.

#### Memberof

OidcSpec

#### Defined in

[model/oidcSpec.ts:80](https://github.com/autodesk-platform-services/aps-sdk-node/blob/d074cae5f8b3a7bd83e612e0654922b885545121/authentication/source/model/oidcSpec.ts#L80)

### token_endpoint?

`optional` **token_endpoint**: `string`

The endpoint for acquiring access tokens and refresh tokens.

#### Memberof

OidcSpec

#### Defined in

[model/oidcSpec.ts:26](https://github.com/autodesk-platform-services/aps-sdk-node/blob/d074cae5f8b3a7bd83e612e0654922b885545121/authentication/source/model/oidcSpec.ts#L26)

### userinfo_endpoint?

`optional` **userinfo_endpoint**: `string`

The endpoint for querying information about the authenticated user.

#### Memberof

OidcSpec

#### Defined in

[model/oidcSpec.ts:32](https://github.com/autodesk-platform-services/aps-sdk-node/blob/d074cae5f8b3a7bd83e612e0654922b885545121/authentication/source/model/oidcSpec.ts#L32)

---
원본 문서: https://aps.autodesk.com/en/docs/oauth/v2/reference/typescript-sdk/interfaces/OidcSpec
