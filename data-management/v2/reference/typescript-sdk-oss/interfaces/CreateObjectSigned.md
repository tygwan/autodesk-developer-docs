---
title: "CreateObjectSigned"
url_path: reference/typescript-sdk-oss/interfaces/CreateObjectSigned
product: "Data Management API"
surface: "data-management-v2"
protocol: "TypeScript SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "typescript-sdk-oss"
---
# Interface: CreateObjectSigned

Defined in: [model/createObjectSigned.ts:8](https://github.com/autodesk-platform-services/aps-sdk-node/blob/e37e37c49eb213844e79f1c7dee5616930755060/oss/source/model/createObjectSigned.ts#L8)

The request payload for a Generate OSS Signed URL operation.

## Export

CreateObjectSigned

## Properties

### allowedIpAddresses?

`optional` **allowedIpAddresses**: `string`[]
Defined in: [model/createObjectSigned.ts:26](https://github.com/autodesk-platform-services/aps-sdk-node/blob/e37e37c49eb213844e79f1c7dee5616930755060/oss/source/model/createObjectSigned.ts#L26)

IP addresses that can make a request to this URL.

#### Memberof

CreateObjectSigned

### expiration

**expiration**: `number`
Defined in: [model/createObjectSigned.ts:20](https://github.com/autodesk-platform-services/aps-sdk-node/blob/e37e37c49eb213844e79f1c7dee5616930755060/oss/source/model/createObjectSigned.ts#L20)

Value for expiration in minutes

#### Memberof

CreateObjectSigned

### signedUrl

**signedUrl**: `string`
Defined in: [model/createObjectSigned.ts:14](https://github.com/autodesk-platform-services/aps-sdk-node/blob/e37e37c49eb213844e79f1c7dee5616930755060/oss/source/model/createObjectSigned.ts#L14)

URL created for downloading the object

#### Memberof

CreateObjectSigned

---
원본 문서: https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-oss/interfaces/CreateObjectSigned
