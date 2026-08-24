---
title: "JwksKey"
url_path: reference/typescript-sdk/interfaces/JwksKey
product: "Authentication API"
surface: "authentication-v2"
protocol: "TypeScript SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "typescript-sdk"
---
# Interface: JwksKey

Represents a JSON Web Key Set (JWKS).

## Export

JwksKey

## Properties

### e?

`optional` **e**: `string`

The RSA exponent value.

#### Memberof

JwksKey

#### Defined in

[model/jwksKey.ts:41](https://github.com/autodesk-platform-services/aps-sdk-node/blob/d074cae5f8b3a7bd83e612e0654922b885545121/authentication/source/model/jwksKey.ts#L41)

### kid?

`optional` **kid**: `string`

The ID of the key. Acts as a unique identifier for a specific key within the JWKS.

#### Memberof

JwksKey

#### Defined in

[model/jwksKey.ts:14](https://github.com/autodesk-platform-services/aps-sdk-node/blob/d074cae5f8b3a7bd83e612e0654922b885545121/authentication/source/model/jwksKey.ts#L14)

### kty?

`optional` **kty**: `string`

The cryptographic algorithm family used with the key. Currently, always `RSA`.

#### Memberof

JwksKey

#### Defined in

[model/jwksKey.ts:20](https://github.com/autodesk-platform-services/aps-sdk-node/blob/d074cae5f8b3a7bd83e612e0654922b885545121/authentication/source/model/jwksKey.ts#L20)

### n?

`optional` **n**: `string`

The RSA modulus value.

#### Memberof

JwksKey

#### Defined in

[model/jwksKey.ts:35](https://github.com/autodesk-platform-services/aps-sdk-node/blob/d074cae5f8b3a7bd83e612e0654922b885545121/authentication/source/model/jwksKey.ts#L35)

### use?

`optional` **use**: `string`

The intended use of the public key. Possible values:
- `sig` - Verify the signature on data.

#### Memberof

JwksKey

#### Defined in

[model/jwksKey.ts:29](https://github.com/autodesk-platform-services/aps-sdk-node/blob/d074cae5f8b3a7bd83e612e0654922b885545121/authentication/source/model/jwksKey.ts#L29)

---
원본 문서: https://aps.autodesk.com/en/docs/oauth/v2/reference/typescript-sdk/interfaces/JwksKey
