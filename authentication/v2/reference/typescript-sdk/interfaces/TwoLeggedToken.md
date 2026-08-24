---
title: "TwoLeggedToken"
url_path: reference/typescript-sdk/interfaces/TwoLeggedToken
product: "Authentication API"
surface: "authentication-v2"
protocol: "TypeScript SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "typescript-sdk"
---
# Interface: TwoLeggedToken

Represents the payload returned in response to a client credentials grant request.

## Export

TwoLeggedToken

## Properties

### access_token

**access_token**: `string`

The access token.

#### Memberof

TwoLeggedToken

#### Defined in

[model/twoLeggedToken.ts:15](https://github.com/autodesk-platform-services/aps-sdk-node/blob/d074cae5f8b3a7bd83e612e0654922b885545121/authentication/source/model/twoLeggedToken.ts#L15)

### expires_at?

`optional` **expires_at**: `number`

Access token expiration time (in seconds).

#### Memberof

TwoLeggedToken

#### Defined in

[model/twoLeggedToken.ts:34](https://github.com/autodesk-platform-services/aps-sdk-node/blob/d074cae5f8b3a7bd83e612e0654922b885545121/authentication/source/model/twoLeggedToken.ts#L34)

### expires_in

**expires_in**: `number`

Access token expiration time (in seconds).

#### Memberof

TwoLeggedToken

#### Defined in

[model/twoLeggedToken.ts:28](https://github.com/autodesk-platform-services/aps-sdk-node/blob/d074cae5f8b3a7bd83e612e0654922b885545121/authentication/source/model/twoLeggedToken.ts#L28)

### token_type?

`optional` **token_type**: `string`

Will always be Bearer.

#### Memberof

TwoLeggedToken

#### Defined in

[model/twoLeggedToken.ts:22](https://github.com/autodesk-platform-services/aps-sdk-node/blob/d074cae5f8b3a7bd83e612e0654922b885545121/authentication/source/model/twoLeggedToken.ts#L22)

---
원본 문서: https://aps.autodesk.com/en/docs/oauth/v2/reference/typescript-sdk/interfaces/TwoLeggedToken
