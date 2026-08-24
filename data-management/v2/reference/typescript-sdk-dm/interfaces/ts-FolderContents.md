---
title: "FolderContents"
url_path: reference/typescript-sdk-dm/interfaces/ts-FolderContents
product: "Data Management API"
surface: "data-management-v2"
protocol: "TypeScript SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "typescript-sdk-dm"
---
# Interface: FolderContents

Defined in: [model/folderContents.ts:12](https://github.com/autodesk-platform-services/aps-sdk-node/blob/eeaeb10a079bc82754d05778f6c83dafc47cac8a/datamanagement/source/model/folderContents.ts#L12)

Successful retrieval of the folder contents collection associated with a specific folder.

## Export

FolderContents

## Properties

### data?

`optional` **data**: `Set`<[`FolderContentsData`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/type-aliases/ts-FolderContentsData)>

Defined in: [model/folderContents.ts:30](https://github.com/autodesk-platform-services/aps-sdk-node/blob/eeaeb10a079bc82754d05778f6c83dafc47cac8a/datamanagement/source/model/folderContents.ts#L30)

The properties of an item or folder, as the case may be.

#### Memberof

FolderContents

### included?

`optional` **included**: [`VersionData`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/interfaces/ts-VersionData)[]

Defined in: [model/folderContents.ts:36](https://github.com/autodesk-platform-services/aps-sdk-node/blob/eeaeb10a079bc82754d05778f6c83dafc47cac8a/datamanagement/source/model/folderContents.ts#L36)

An array of objects, where each element represents a resource included within this resource.

#### Memberof

FolderContents

### jsonapi

**jsonapi**: [`JsonApiVersion`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/interfaces/ts-JsonApiVersion)

Defined in: [model/folderContents.ts:18](https://github.com/autodesk-platform-services/aps-sdk-node/blob/eeaeb10a079bc82754d05778f6c83dafc47cac8a/datamanagement/source/model/folderContents.ts#L18)

#### Memberof

FolderContents

### links

**links**: [`FolderContentsLinks`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/interfaces/ts-FolderContentsLinks)

Defined in: [model/folderContents.ts:24](https://github.com/autodesk-platform-services/aps-sdk-node/blob/eeaeb10a079bc82754d05778f6c83dafc47cac8a/datamanagement/source/model/folderContents.ts#L24)

#### Memberof

FolderContents

---
원본 문서: https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/interfaces/ts-FolderContents
