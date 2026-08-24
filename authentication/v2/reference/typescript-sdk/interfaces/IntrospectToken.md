---
title: "IntrospectToken"
url_path: reference/typescript-sdk/interfaces/IntrospectToken
product: "Authentication API"
surface: "authentication-v2"
protocol: "TypeScript SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "typescript-sdk"
---
# Interface: IntrospectToken

Represents the payload returned for an introspect token request.

## Export

IntrospectToken

## Properties

### active

**active**: `boolean`

`true`: The token is active.

`false`: The token is expired, invalid, or revoked.

#### Memberof

IntrospectToken

#### Defined in

[model/introspectToken.ts:17](https://github.com/autodesk-platform-services/aps-sdk-node/blob/d074cae5f8b3a7bd83e612e0654922b885545121/authentication/source/model/introspectToken.ts#L17)

### client_id

**client_id**: `string`

The Client ID of the application associated with the token.

#### Memberof

IntrospectToken

#### Defined in

[model/introspectToken.ts:29](https://github.com/autodesk-platform-services/aps-sdk-node/blob/d074cae5f8b3a7bd83e612e0654922b885545121/authentication/source/model/introspectToken.ts#L29)

### exp

**exp**: `number`

The expiration time of the token, represented as a Unix timestamp.

#### Memberof

IntrospectToken

#### Defined in

[model/introspectToken.ts:35](https://github.com/autodesk-platform-services/aps-sdk-node/blob/d074cae5f8b3a7bd83e612e0654922b885545121/authentication/source/model/introspectToken.ts#L35)

### scope

**scope**: `string`

A URL-encoded, space separated list of scopes associated with the token.

#### Memberof

IntrospectToken

#### Defined in

[model/introspectToken.ts:23](https://github.com/autodesk-platform-services/aps-sdk-node/blob/d074cae5f8b3a7bd83e612e0654922b885545121/authentication/source/model/introspectToken.ts#L23)

### userid?

`optional` **userid**: `string`

The ID of the user who authorized the token.

#### Memberof

IntrospectToken

#### Defined in

[model/introspectToken.ts:41](https://github.com/autodesk-platform-services/aps-sdk-node/blob/d074cae5f8b3a7bd83e612e0654922b885545121/authentication/source/model/introspectToken.ts#L41)

---
원본 문서: https://aps.autodesk.com/en/docs/oauth/v2/reference/typescript-sdk/interfaces/IntrospectToken
