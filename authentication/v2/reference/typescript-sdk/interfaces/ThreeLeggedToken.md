---
title: "ThreeLeggedToken"
url_path: reference/typescript-sdk/interfaces/ThreeLeggedToken
product: "Authentication API"
surface: "authentication-v2"
protocol: "TypeScript SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "typescript-sdk"
---
# Interface: ThreeLeggedToken

Represents the payload returned in response to an authorization code grant request.

## Export

ThreeLeggedToken

## Properties

### access_token

**access_token**: `string`

The access token.

#### Memberof

ThreeLeggedToken

#### Defined in

[model/threeLeggedToken.ts:32](https://github.com/autodesk-platform-services/aps-sdk-node/blob/d074cae5f8b3a7bd83e612e0654922b885545121/authentication/source/model/threeLeggedToken.ts#L32)

### expires_at?

`optional` **expires_at**: `number`

Access token expiration time (in seconds).

#### Memberof

ThreeLeggedToken

#### Defined in

[model/threeLeggedToken.ts:44](https://github.com/autodesk-platform-services/aps-sdk-node/blob/d074cae5f8b3a7bd83e612e0654922b885545121/authentication/source/model/threeLeggedToken.ts#L44)

### expires_in?

`optional` **expires_in**: `number`

Access token expiration time (in seconds).

#### Memberof

ThreeLeggedToken

#### Defined in

[model/threeLeggedToken.ts:20](https://github.com/autodesk-platform-services/aps-sdk-node/blob/d074cae5f8b3a7bd83e612e0654922b885545121/authentication/source/model/threeLeggedToken.ts#L20)

### id_token?

`optional` **id_token**: `string`

The ID token, if openid scope was specified in /authorize request.

#### Memberof

ThreeLeggedToken

#### Defined in

[model/threeLeggedToken.ts:38](https://github.com/autodesk-platform-services/aps-sdk-node/blob/d074cae5f8b3a7bd83e612e0654922b885545121/authentication/source/model/threeLeggedToken.ts#L38)

### refresh_token

**refresh_token**: `string`

The refresh token.

#### Memberof

ThreeLeggedToken

#### Defined in

[model/threeLeggedToken.ts:26](https://github.com/autodesk-platform-services/aps-sdk-node/blob/d074cae5f8b3a7bd83e612e0654922b885545121/authentication/source/model/threeLeggedToken.ts#L26)

### token_type?

`optional` **token_type**: `string`

Will always be Bearer.

#### Memberof

ThreeLeggedToken

#### Defined in

[model/threeLeggedToken.ts:14](https://github.com/autodesk-platform-services/aps-sdk-node/blob/d074cae5f8b3a7bd83e612e0654922b885545121/authentication/source/model/threeLeggedToken.ts#L14)

---
원본 문서: https://aps.autodesk.com/en/docs/oauth/v2/reference/typescript-sdk/interfaces/ThreeLeggedToken
