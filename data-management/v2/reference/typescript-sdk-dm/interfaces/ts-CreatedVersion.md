---
title: "CreatedVersion"
url_path: reference/typescript-sdk-dm/interfaces/ts-CreatedVersion
product: "Data Management API"
surface: "data-management-v2"
protocol: "TypeScript SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "typescript-sdk-dm"
---
# Interface: CreatedVersion

Defined in: [model/createdVersion.ts:12](https://github.com/autodesk-platform-services/aps-sdk-node/blob/eeaeb10a079bc82754d05778f6c83dafc47cac8a/datamanagement/source/model/createdVersion.ts#L12)

The payload returned upon successful creation of a new version.

## Export

CreatedVersion

## Properties

### data?

`optional` **data**: [`CreatedVersionData`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/interfaces/ts-CreatedVersionData)

Defined in: [model/createdVersion.ts:30](https://github.com/autodesk-platform-services/aps-sdk-node/blob/eeaeb10a079bc82754d05778f6c83dafc47cac8a/datamanagement/source/model/createdVersion.ts#L30)

#### Memberof

CreatedVersion

### included?

`optional` **included**: [`CreatedVersionIncluded`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/interfaces/ts-CreatedVersionIncluded)[]

Defined in: [model/createdVersion.ts:36](https://github.com/autodesk-platform-services/aps-sdk-node/blob/eeaeb10a079bc82754d05778f6c83dafc47cac8a/datamanagement/source/model/createdVersion.ts#L36)

An array of objects, where each object represents a resource included with the object. For example, the item corresponding to the new version.

#### Memberof

CreatedVersion

### jsonapi?

`optional` **jsonapi**: [`JsonApiVersion`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/interfaces/ts-JsonApiVersion)

Defined in: [model/createdVersion.ts:18](https://github.com/autodesk-platform-services/aps-sdk-node/blob/eeaeb10a079bc82754d05778f6c83dafc47cac8a/datamanagement/source/model/createdVersion.ts#L18)

#### Memberof

CreatedVersion

### links?

`optional` **links**: [`JsonApiLinksSelf`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/interfaces/ts-JsonApiLinksSelf)

Defined in: [model/createdVersion.ts:24](https://github.com/autodesk-platform-services/aps-sdk-node/blob/eeaeb10a079bc82754d05778f6c83dafc47cac8a/datamanagement/source/model/createdVersion.ts#L24)

#### Memberof

CreatedVersion

---
원본 문서: https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/interfaces/ts-CreatedVersion
