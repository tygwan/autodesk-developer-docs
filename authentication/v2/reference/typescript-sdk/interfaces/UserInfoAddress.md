---
title: "UserInfoAddress"
url_path: reference/typescript-sdk/interfaces/UserInfoAddress
product: "Authentication API"
surface: "authentication-v2"
protocol: "TypeScript SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "typescript-sdk"
---
# Interface: UserInfoAddress

A JSON object containing information of the postal address of the user.

## Export

UserInfoAddress

## Properties

### country?

`optional` **country**: `string`

The country name part of the address.

#### Memberof

UserInfoAddress

#### Defined in

[model/userInfoAddress.ts:38](https://github.com/autodesk-platform-services/aps-sdk-node/blob/d074cae5f8b3a7bd83e612e0654922b885545121/authentication/source/model/userInfoAddress.ts#L38)

### locality?

`optional` **locality**: `string`

The city or locality part of the address.

#### Memberof

UserInfoAddress

#### Defined in

[model/userInfoAddress.ts:20](https://github.com/autodesk-platform-services/aps-sdk-node/blob/d074cae5f8b3a7bd83e612e0654922b885545121/authentication/source/model/userInfoAddress.ts#L20)

### postal_code?

`optional` **postal_code**: `string`

The zip code or postal code part of the address.

#### Memberof

UserInfoAddress

#### Defined in

[model/userInfoAddress.ts:32](https://github.com/autodesk-platform-services/aps-sdk-node/blob/d074cae5f8b3a7bd83e612e0654922b885545121/authentication/source/model/userInfoAddress.ts#L32)

### region?

`optional` **region**: `string`

The state, province, prefecture, or region part of the address.

#### Memberof

UserInfoAddress

#### Defined in

[model/userInfoAddress.ts:26](https://github.com/autodesk-platform-services/aps-sdk-node/blob/d074cae5f8b3a7bd83e612e0654922b885545121/authentication/source/model/userInfoAddress.ts#L26)

### street_address?

`optional` **street_address**: `string`

The street address part of the address. Can contain the house number, street name, postal code, and so on. New lines are represented as `\n`.

#### Memberof

UserInfoAddress

#### Defined in

[model/userInfoAddress.ts:14](https://github.com/autodesk-platform-services/aps-sdk-node/blob/d074cae5f8b3a7bd83e612e0654922b885545121/authentication/source/model/userInfoAddress.ts#L14)

---
원본 문서: https://aps.autodesk.com/en/docs/oauth/v2/reference/typescript-sdk/interfaces/UserInfoAddress
