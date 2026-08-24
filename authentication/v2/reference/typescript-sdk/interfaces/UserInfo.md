---
title: "UserInfo"
url_path: reference/typescript-sdk/interfaces/UserInfo
product: "Authentication API"
surface: "authentication-v2"
protocol: "TypeScript SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "typescript-sdk"
---
# Interface: UserInfo

Represents a successful response to a Get User Info operation.

## Export

UserInfo

## Properties

### about_me?

`optional` **about_me**: `string`

A short description written by the user to introduce themselves, as specified in the user’s profile.

#### Memberof

UserInfo

#### Defined in

[model/userInfo.ts:154](https://github.com/autodesk-platform-services/aps-sdk-node/blob/d074cae5f8b3a7bd83e612e0654922b885545121/authentication/source/model/userInfo.ts#L154)

### address?

`optional` **address**: [`UserInfoAddress`](https://aps.autodesk.com/en/docs/oauth/v2/reference/typescript-sdk/interfaces/UserInfoAddress)

#### Memberof

UserInfo

#### Defined in

[model/userInfo.ts:100](https://github.com/autodesk-platform-services/aps-sdk-node/blob/d074cae5f8b3a7bd83e612e0654922b885545121/authentication/source/model/userInfo.ts#L100)

### company?

`optional` **company**: `string`

The company that the user works for, as specified in the user’s profile.

#### Memberof

UserInfo

#### Defined in

[model/userInfo.ts:166](https://github.com/autodesk-platform-services/aps-sdk-node/blob/d074cae5f8b3a7bd83e612e0654922b885545121/authentication/source/model/userInfo.ts#L166)

### country_code?

`optional` **country_code**: `string`

The ISO 3166 country code that was assigned to the user when their profile was created.

#### Memberof

UserInfo

#### Defined in

[model/userInfo.ts:94](https://github.com/autodesk-platform-services/aps-sdk-node/blob/d074cae5f8b3a7bd83e612e0654922b885545121/authentication/source/model/userInfo.ts#L94)

### created_date?

`optional` **created_date**: `string`

The time the user profile was created, represented as a Unix timestamp.

#### Memberof

UserInfo

#### Defined in

[model/userInfo.ts:172](https://github.com/autodesk-platform-services/aps-sdk-node/blob/d074cae5f8b3a7bd83e612e0654922b885545121/authentication/source/model/userInfo.ts#L172)

### eidm_guid?

`optional` **eidm_guid**: `string`

An ID to uniquely identify the user. For most users this will be the same as `sub`. However, for users profiles created on the now retired EIDM system `eidm_guid` will be different from `sub`.

#### Memberof

UserInfo

#### Defined in

[model/userInfo.ts:184](https://github.com/autodesk-platform-services/aps-sdk-node/blob/d074cae5f8b3a7bd83e612e0654922b885545121/authentication/source/model/userInfo.ts#L184)

### email?

`optional` **email**: `string`

The email address by which the user prefers to be contacted.

#### Memberof

UserInfo

#### Defined in

[model/userInfo.ts:46](https://github.com/autodesk-platform-services/aps-sdk-node/blob/d074cae5f8b3a7bd83e612e0654922b885545121/authentication/source/model/userInfo.ts#L46)

### email_verified?

`optional` **email_verified**: `boolean`

`true` : The user’s preferred email address is verified.

`false`: The user’s preferred email address is not verified.

#### Memberof

UserInfo

#### Defined in

[model/userInfo.ts:55](https://github.com/autodesk-platform-services/aps-sdk-node/blob/d074cae5f8b3a7bd83e612e0654922b885545121/authentication/source/model/userInfo.ts#L55)

### family_name?

`optional` **family_name**: `string`

The surname or last name of the user.

#### Memberof

UserInfo

#### Defined in

[model/userInfo.ts:34](https://github.com/autodesk-platform-services/aps-sdk-node/blob/d074cae5f8b3a7bd83e612e0654922b885545121/authentication/source/model/userInfo.ts#L34)

### given_name?

`optional` **given_name**: `string`

The given name or first name of the user.

#### Memberof

UserInfo

#### Defined in

[model/userInfo.ts:28](https://github.com/autodesk-platform-services/aps-sdk-node/blob/d074cae5f8b3a7bd83e612e0654922b885545121/authentication/source/model/userInfo.ts#L28)

### industry?

`optional` **industry**: `string`

The industry the user works in, as specified in the user’s profile.

#### Memberof

UserInfo

#### Defined in

[model/userInfo.ts:142](https://github.com/autodesk-platform-services/aps-sdk-node/blob/d074cae5f8b3a7bd83e612e0654922b885545121/authentication/source/model/userInfo.ts#L142)

### industry_code?

`optional` **industry_code**: `string`

A code that corresponds to the industry.

#### Memberof

UserInfo

#### Defined in

[model/userInfo.ts:148](https://github.com/autodesk-platform-services/aps-sdk-node/blob/d074cae5f8b3a7bd83e612e0654922b885545121/authentication/source/model/userInfo.ts#L148)

### is_2fa_enabled?

`optional` **is_2fa_enabled**: `boolean`

`true`: Two-factor authentication is enabled for this user.

`false`: Two-factor authentication is not enabled for this user.

#### Memberof

UserInfo

#### Defined in

[model/userInfo.ts:88](https://github.com/autodesk-platform-services/aps-sdk-node/blob/d074cae5f8b3a7bd83e612e0654922b885545121/authentication/source/model/userInfo.ts#L88)

### job_title?

`optional` **job_title**: `string`

The job title of the user as specified in the user’s profile.

#### Memberof

UserInfo

#### Defined in

[model/userInfo.ts:136](https://github.com/autodesk-platform-services/aps-sdk-node/blob/d074cae5f8b3a7bd83e612e0654922b885545121/authentication/source/model/userInfo.ts#L136)

### language?

`optional` **language**: `string`

The ISO 639 language code of the preferred language of the user.

#### Memberof

UserInfo

#### Defined in

[model/userInfo.ts:160](https://github.com/autodesk-platform-services/aps-sdk-node/blob/d074cae5f8b3a7bd83e612e0654922b885545121/authentication/source/model/userInfo.ts#L160)

### last_login_date?

`optional` **last_login_date**: `string`

The time the user most recently signed-in to APS successfully, represented as a Unix timestamp.

#### Memberof

UserInfo

#### Defined in

[model/userInfo.ts:178](https://github.com/autodesk-platform-services/aps-sdk-node/blob/d074cae5f8b3a7bd83e612e0654922b885545121/authentication/source/model/userInfo.ts#L178)

### ldap_domain?

`optional` **ldap_domain**: `string`

The domain name used by the LDAP server for user authentication. `null`, if `ldap_enabled` is `false`.

#### Memberof

UserInfo

#### Defined in

[model/userInfo.ts:130](https://github.com/autodesk-platform-services/aps-sdk-node/blob/d074cae5f8b3a7bd83e612e0654922b885545121/authentication/source/model/userInfo.ts#L130)

### ldap_enabled?

`optional` **ldap_enabled**: `boolean`

`true` : Single sign-on using Lightweight Directory Access Protocol (LDAP) is enabled for this user.

`false` : LDAP is not enabled for this user.

#### Memberof

UserInfo

#### Defined in

[model/userInfo.ts:124](https://github.com/autodesk-platform-services/aps-sdk-node/blob/d074cae5f8b3a7bd83e612e0654922b885545121/authentication/source/model/userInfo.ts#L124)

### locale?

`optional` **locale**: `string`

The preferred language settings of the user. This setting is typically specified as a combination of the ISO 639 language code in lower case, and the ISO 3166 country code in upper case, separated by a dash character. For example `en-US`.

#### Memberof

UserInfo

#### Defined in

[model/userInfo.ts:73](https://github.com/autodesk-platform-services/aps-sdk-node/blob/d074cae5f8b3a7bd83e612e0654922b885545121/authentication/source/model/userInfo.ts#L73)

### name?

`optional` **name**: `string`

The full name of the user.

#### Memberof

UserInfo

#### Defined in

[model/userInfo.ts:22](https://github.com/autodesk-platform-services/aps-sdk-node/blob/d074cae5f8b3a7bd83e612e0654922b885545121/authentication/source/model/userInfo.ts#L22)

### opt_in?

`optional` **opt_in**: `boolean`

`true` : The user has agreed to receive marketing information.

`false`: The user does not want to receive marketing information.

#### Memberof

UserInfo

#### Defined in

[model/userInfo.ts:193](https://github.com/autodesk-platform-services/aps-sdk-node/blob/d074cae5f8b3a7bd83e612e0654922b885545121/authentication/source/model/userInfo.ts#L193)

### phone_number?

`optional` **phone_number**: `string`

The phone number by which the user prefers to be contacted.

#### Memberof

UserInfo

#### Defined in

[model/userInfo.ts:106](https://github.com/autodesk-platform-services/aps-sdk-node/blob/d074cae5f8b3a7bd83e612e0654922b885545121/authentication/source/model/userInfo.ts#L106)

### phone_number_verified?

`optional` **phone_number_verified**: `boolean`

`true` : The phone number is verified.

`false` : The phone number is not verified.

#### Memberof

UserInfo

#### Defined in

[model/userInfo.ts:115](https://github.com/autodesk-platform-services/aps-sdk-node/blob/d074cae5f8b3a7bd83e612e0654922b885545121/authentication/source/model/userInfo.ts#L115)

### picture?

`optional` **picture**: `string`

The URL of the profile picture of the user.

#### Memberof

UserInfo

#### Defined in

[model/userInfo.ts:67](https://github.com/autodesk-platform-services/aps-sdk-node/blob/d074cae5f8b3a7bd83e612e0654922b885545121/authentication/source/model/userInfo.ts#L67)

### preferred_username?

`optional` **preferred_username**: `string`

The username by which the user prefers to be addressed.

#### Memberof

UserInfo

#### Defined in

[model/userInfo.ts:40](https://github.com/autodesk-platform-services/aps-sdk-node/blob/d074cae5f8b3a7bd83e612e0654922b885545121/authentication/source/model/userInfo.ts#L40)

### profile?

`optional` **profile**: `string`

The URL of the profile page of the user.

#### Memberof

UserInfo

#### Defined in

[model/userInfo.ts:61](https://github.com/autodesk-platform-services/aps-sdk-node/blob/d074cae5f8b3a7bd83e612e0654922b885545121/authentication/source/model/userInfo.ts#L61)

### social_userinfo_list?

`optional` **social_userinfo_list**: [`UserInfoSocialUserinfoList`](https://aps.autodesk.com/en/docs/oauth/v2/reference/typescript-sdk/interfaces/UserInfoSocialUserinfoList)[]

An array of objects, where each object represents a social media account that can be used to verify the user’s identity.

#### Memberof

UserInfo

#### Defined in

[model/userInfo.ts:199](https://github.com/autodesk-platform-services/aps-sdk-node/blob/d074cae5f8b3a7bd83e612e0654922b885545121/authentication/source/model/userInfo.ts#L199)

### sub?

`optional` **sub**: `string`

The ID by which APS uniquely identifies the user.

#### Memberof

UserInfo

#### Defined in

[model/userInfo.ts:16](https://github.com/autodesk-platform-services/aps-sdk-node/blob/d074cae5f8b3a7bd83e612e0654922b885545121/authentication/source/model/userInfo.ts#L16)

### thumbnails?

`optional` **thumbnails**: `object`

An array of key-value pairs containing image URLs for various thumbnail sizes of the user’s profile picture. The key is named `sizeX<NUMBER>` where `<NUMBER>` is the width and height of the thumbnail, in pixels. The corresponding value is the URL pointing to the thumbnail. For example, `sizeX200` would contain the URL for the 200x200 pixel thumbnail.

#### Index Signature

[`key`: `string`]: `string`

#### Memberof

UserInfo

#### Defined in

[model/userInfo.ts:205](https://github.com/autodesk-platform-services/aps-sdk-node/blob/d074cae5f8b3a7bd83e612e0654922b885545121/authentication/source/model/userInfo.ts#L205)

### updated_at?

`optional` **updated_at**: `number`

The time the user’s information was most recently updated, represented as a Unix timestamp.

#### Memberof

UserInfo

#### Defined in

[model/userInfo.ts:79](https://github.com/autodesk-platform-services/aps-sdk-node/blob/d074cae5f8b3a7bd83e612e0654922b885545121/authentication/source/model/userInfo.ts#L79)

---
원본 문서: https://aps.autodesk.com/en/docs/oauth/v2/reference/typescript-sdk/interfaces/UserInfo
