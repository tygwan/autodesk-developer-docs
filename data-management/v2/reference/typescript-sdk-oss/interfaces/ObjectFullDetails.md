---
title: "ObjectFullDetails"
url_path: reference/typescript-sdk-oss/interfaces/ObjectFullDetails
product: "Data Management API"
surface: "data-management-v2"
protocol: "TypeScript SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "typescript-sdk-oss"
---
# Interface: ObjectFullDetails

Defined in: [model/objectFullDetails.ts:8](https://github.com/autodesk-platform-services/aps-sdk-node/blob/e37e37c49eb213844e79f1c7dee5616930755060/oss/source/model/objectFullDetails.ts#L8)

Represents detailed information about an object within a bucket.

## Export

ObjectFullDetails

## Properties

### bucketKey?

`optional` **bucketKey**: `string`
Defined in: [model/objectFullDetails.ts:14](https://github.com/autodesk-platform-services/aps-sdk-node/blob/e37e37c49eb213844e79f1c7dee5616930755060/oss/source/model/objectFullDetails.ts#L14)

The bucket key of the bucket that contains the object.

#### Memberof

ObjectFullDetails

### contentType?

`optional` **contentType**: `string`
Defined in: [model/objectFullDetails.ts:44](https://github.com/autodesk-platform-services/aps-sdk-node/blob/e37e37c49eb213844e79f1c7dee5616930755060/oss/source/model/objectFullDetails.ts#L44)

The format of the data stored within the object, expressed as a MIME type.

#### Memberof

ObjectFullDetails

### createdDate?

`optional` **createdDate**: `number`
Defined in: [model/objectFullDetails.ts:56](https://github.com/autodesk-platform-services/aps-sdk-node/blob/e37e37c49eb213844e79f1c7dee5616930755060/oss/source/model/objectFullDetails.ts#L56)

The time the object was created, represented as a Unix timestamp. Only returned if explicitly requested using the `with` query string parameter.

#### Memberof

ObjectFullDetails

### lastAccessedDate?

`optional` **lastAccessedDate**: `number`
Defined in: [model/objectFullDetails.ts:62](https://github.com/autodesk-platform-services/aps-sdk-node/blob/e37e37c49eb213844e79f1c7dee5616930755060/oss/source/model/objectFullDetails.ts#L62)

The time the object was last accessed, represented as a Unix timestamp. Only returned if explicitly requested using the `with` query string parameter.

#### Memberof

ObjectFullDetails

### lastModifiedDate?

`optional` **lastModifiedDate**: `number`
Defined in: [model/objectFullDetails.ts:68](https://github.com/autodesk-platform-services/aps-sdk-node/blob/e37e37c49eb213844e79f1c7dee5616930755060/oss/source/model/objectFullDetails.ts#L68)

The time the object was most recently modified, represented as a Unix timestamp. Only returned if explicitly requested using the `with` query string parameter.

#### Memberof

ObjectFullDetails

### location?

`optional` **location**: `string`
Defined in: [model/objectFullDetails.ts:50](https://github.com/autodesk-platform-services/aps-sdk-node/blob/e37e37c49eb213844e79f1c7dee5616930755060/oss/source/model/objectFullDetails.ts#L50)

A URL that points to the actual location of the object.

#### Memberof

ObjectFullDetails

### objectId?

`optional` **objectId**: `string`
Defined in: [model/objectFullDetails.ts:20](https://github.com/autodesk-platform-services/aps-sdk-node/blob/e37e37c49eb213844e79f1c7dee5616930755060/oss/source/model/objectFullDetails.ts#L20)

An identifier (URN) that uniquely and persistently identifies the object.

#### Memberof

ObjectFullDetails

### objectKey?

`optional` **objectKey**: `string`
Defined in: [model/objectFullDetails.ts:26](https://github.com/autodesk-platform-services/aps-sdk-node/blob/e37e37c49eb213844e79f1c7dee5616930755060/oss/source/model/objectFullDetails.ts#L26)

A URL-encoded human friendly name to identify the object.

#### Memberof

ObjectFullDetails

### sha1?

`optional` **sha1**: `string`
Defined in: [model/objectFullDetails.ts:32](https://github.com/autodesk-platform-services/aps-sdk-node/blob/e37e37c49eb213844e79f1c7dee5616930755060/oss/source/model/objectFullDetails.ts#L32)

A hash value computed from the data of the object.

#### Memberof

ObjectFullDetails

### size?

`optional` **size**: `number`
Defined in: [model/objectFullDetails.ts:38](https://github.com/autodesk-platform-services/aps-sdk-node/blob/e37e37c49eb213844e79f1c7dee5616930755060/oss/source/model/objectFullDetails.ts#L38)

The total amount of storage space occupied by the object, in bytes.

#### Memberof

ObjectFullDetails

### userDefinedMetadata?

`optional` **userDefinedMetadata**: `string`
Defined in: [model/objectFullDetails.ts:74](https://github.com/autodesk-platform-services/aps-sdk-node/blob/e37e37c49eb213844e79f1c7dee5616930755060/oss/source/model/objectFullDetails.ts#L74)

Any custom metadata, if available. Only returned if explicitly requested for using the `with` query string parameter.

#### Memberof

ObjectFullDetails

---
원본 문서: https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-oss/interfaces/ObjectFullDetails
