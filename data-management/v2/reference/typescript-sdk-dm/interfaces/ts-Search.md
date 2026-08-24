---
title: "Search"
url_path: reference/typescript-sdk-dm/interfaces/ts-Search
product: "Data Management API"
surface: "data-management-v2"
protocol: "TypeScript SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "typescript-sdk-dm"
---
# Interface: Search

Defined in: [model/search.ts:12](https://github.com/autodesk-platform-services/aps-sdk-node/blob/eeaeb10a079bc82754d05778f6c83dafc47cac8a/datamanagement/source/model/search.ts#L12)

Successful retrieval of the search results.

## Export

Search

## Properties

### data

**data**: `Set`<[`VersionData`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/interfaces/ts-VersionData)>

Defined in: [model/search.ts:30](https://github.com/autodesk-platform-services/aps-sdk-node/blob/eeaeb10a079bc82754d05778f6c83dafc47cac8a/datamanagement/source/model/search.ts#L30)

The object containing information on this resource.

#### Memberof

Search

### included?

`optional` **included**: `Set`<[`ItemData`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/interfaces/ts-ItemData)>

Defined in: [model/search.ts:36](https://github.com/autodesk-platform-services/aps-sdk-node/blob/eeaeb10a079bc82754d05778f6c83dafc47cac8a/datamanagement/source/model/search.ts#L36)

Information on the latest versions of the items in this resource.

#### Memberof

Search

### jsonapi

**jsonapi**: [`JsonApiVersion`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/interfaces/ts-JsonApiVersion)

Defined in: [model/search.ts:18](https://github.com/autodesk-platform-services/aps-sdk-node/blob/eeaeb10a079bc82754d05778f6c83dafc47cac8a/datamanagement/source/model/search.ts#L18)

#### Memberof

Search

### links

**links**: [`PaginationInfo`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/interfaces/ts-PaginationInfo)

Defined in: [model/search.ts:24](https://github.com/autodesk-platform-services/aps-sdk-node/blob/eeaeb10a079bc82754d05778f6c83dafc47cac8a/datamanagement/source/model/search.ts#L24)

#### Memberof

Search

---
원본 문서: https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/interfaces/ts-Search
