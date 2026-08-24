---
title: "CreateSignedResource"
url_path: reference/typescript-sdk-oss/interfaces/CreateSignedResource
product: "Data Management API"
surface: "data-management-v2"
protocol: "TypeScript SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "typescript-sdk-oss"
---
# Interface: CreateSignedResource

Defined in: [model/createSignedResource.ts:8](https://github.com/autodesk-platform-services/aps-sdk-node/blob/e37e37c49eb213844e79f1c7dee5616930755060/oss/source/model/createSignedResource.ts#L8)

The request payload for a Generate OSS Signed URL operation.

## Export

CreateSignedResource

## Properties

### allowedIpAddresses?

`optional` **allowedIpAddresses**: `string`
Defined in: [model/createSignedResource.ts:44](https://github.com/autodesk-platform-services/aps-sdk-node/blob/e37e37c49eb213844e79f1c7dee5616930755060/oss/source/model/createSignedResource.ts#L44)

Restricts the signed URL to the specified IP addresses. Downloads and uploads will be allowed only for the list of the IP addresses in the `X-Forwarded-For` parameter received from Apigee. If not specified, use of the signed URL is not restricted.

#### Memberof

CreateSignedResource

### contentDisposition?

`optional` **contentDisposition**: `string`
Defined in: [model/createSignedResource.ts:38](https://github.com/autodesk-platform-services/aps-sdk-node/blob/e37e37c49eb213844e79f1c7dee5616930755060/oss/source/model/createSignedResource.ts#L38)

The value to use as the Content-Disposition when downloading the object using the signed URL. If this attribute is not provided, it defaults to the value corresponding to the object.

#### Memberof

CreateSignedResource

### contentType?

`optional` **contentType**: `string`
Defined in: [model/createSignedResource.ts:32](https://github.com/autodesk-platform-services/aps-sdk-node/blob/e37e37c49eb213844e79f1c7dee5616930755060/oss/source/model/createSignedResource.ts#L32)

The value to use as the Content-Type when downloading the object using the signed URL. If this attribute is not provided, it defaults to the value corresponding to the object.

#### Memberof

CreateSignedResource

### minutesExpiration?

`optional` **minutesExpiration**: `number`
Defined in: [model/createSignedResource.ts:17](https://github.com/autodesk-platform-services/aps-sdk-node/blob/e37e37c49eb213844e79f1c7dee5616930755060/oss/source/model/createSignedResource.ts#L17)

The time window (in minutes) the signed URL will remain usable. Acceptable values = 1-60 minutes. Default = 2 minutes.

**Tip:** Use the smallest possible time window to minimize exposure of the signed URL.

#### Memberof

CreateSignedResource

### singleUse?

`optional` **singleUse**: `boolean`
Defined in: [model/createSignedResource.ts:26](https://github.com/autodesk-platform-services/aps-sdk-node/blob/e37e37c49eb213844e79f1c7dee5616930755060/oss/source/model/createSignedResource.ts#L26)

`true` : The signed URL will expire immediately after use. For example, when downloading an object, URL will expire once the download is complete.

`false` : (Default) The signed URL will remain usable for the entire time window specified by `minutesExpiration`.

#### Memberof

CreateSignedResource

---
원본 문서: https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-oss/interfaces/CreateSignedResource
