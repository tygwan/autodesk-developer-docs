---
title: "ObjectDetails"
url_path: reference/typescript-sdk-oss/interfaces/ObjectDetails
product: "Data Management API"
surface: "data-management-v2"
protocol: "TypeScript SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "typescript-sdk-oss"
---
# Interface: ObjectDetails

Defined in: [model/objectDetails.ts:8](https://github.com/autodesk-platform-services/aps-sdk-node/blob/e37e37c49eb213844e79f1c7dee5616930755060/oss/source/model/objectDetails.ts#L8)

Represents an object within a bucket.

## Export

ObjectDetails

## Properties

### bucketKey?

`optional` **bucketKey**: `string`
Defined in: [model/objectDetails.ts:14](https://github.com/autodesk-platform-services/aps-sdk-node/blob/e37e37c49eb213844e79f1c7dee5616930755060/oss/source/model/objectDetails.ts#L14)

The bucket key of the bucket that contains the object.

#### Memberof

ObjectDetails

### contentType?

`optional` **contentType**: `string`
Defined in: [model/objectDetails.ts:44](https://github.com/autodesk-platform-services/aps-sdk-node/blob/e37e37c49eb213844e79f1c7dee5616930755060/oss/source/model/objectDetails.ts#L44)

The format of the data stored within the object, expressed as a MIME type.

#### Memberof

ObjectDetails

### location?

`optional` **location**: `string`
Defined in: [model/objectDetails.ts:50](https://github.com/autodesk-platform-services/aps-sdk-node/blob/e37e37c49eb213844e79f1c7dee5616930755060/oss/source/model/objectDetails.ts#L50)

A URL that points to the actual location of the object.

#### Memberof

ObjectDetails

### objectId?

`optional` **objectId**: `string`
Defined in: [model/objectDetails.ts:20](https://github.com/autodesk-platform-services/aps-sdk-node/blob/e37e37c49eb213844e79f1c7dee5616930755060/oss/source/model/objectDetails.ts#L20)

An identifier (URN) that uniquely and persistently identifies the object.

#### Memberof

ObjectDetails

### objectKey?

`optional` **objectKey**: `string`
Defined in: [model/objectDetails.ts:26](https://github.com/autodesk-platform-services/aps-sdk-node/blob/e37e37c49eb213844e79f1c7dee5616930755060/oss/source/model/objectDetails.ts#L26)

A URL-encoded human friendly name to identify the object.

#### Memberof

ObjectDetails

### sha1?

`optional` **sha1**: `string`
Defined in: [model/objectDetails.ts:32](https://github.com/autodesk-platform-services/aps-sdk-node/blob/e37e37c49eb213844e79f1c7dee5616930755060/oss/source/model/objectDetails.ts#L32)

A hash value computed from the data of the object.

#### Memberof

ObjectDetails

### size?

`optional` **size**: `number`
Defined in: [model/objectDetails.ts:38](https://github.com/autodesk-platform-services/aps-sdk-node/blob/e37e37c49eb213844e79f1c7dee5616930755060/oss/source/model/objectDetails.ts#L38)

The total amount of storage space occupied by the object, in bytes.

#### Memberof

ObjectDetails

---
원본 문서: https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-oss/interfaces/ObjectDetails
