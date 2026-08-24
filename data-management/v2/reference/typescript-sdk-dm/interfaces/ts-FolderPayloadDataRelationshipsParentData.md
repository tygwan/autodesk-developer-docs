---
title: "FolderPayloadDataRelationshipsParentData"
url_path: reference/typescript-sdk-dm/interfaces/ts-FolderPayloadDataRelationshipsParentData
product: "Data Management API"
surface: "data-management-v2"
protocol: "TypeScript SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "typescript-sdk-dm"
---
# Interface: FolderPayloadDataRelationshipsParentData

Defined in: [model/folderPayloadDataRelationshipsParentData.ts:9](https://github.com/autodesk-platform-services/aps-sdk-node/blob/eeaeb10a079bc82754d05778f6c83dafc47cac8a/datamanagement/source/model/folderPayloadDataRelationshipsParentData.ts#L9)

The data about the parent of the folder to be created.

## Export

FolderPayloadDataRelationshipsParentData

## Properties

### id

**id**: `string`

Defined in: [model/folderPayloadDataRelationshipsParentData.ts:27](https://github.com/autodesk-platform-services/aps-sdk-node/blob/eeaeb10a079bc82754d05778f6c83dafc47cac8a/datamanagement/source/model/folderPayloadDataRelationshipsParentData.ts#L27)

The URN of the parent folder. For information on how to find the URN, see the initial steps of the [Download a File](https://aps.autodesk.com/en/docs/data/v2/tutorials/download-file/) tutorial.

Note that for BIM 360 Docs, new folders must be created within an existing folder (e.g., the Plans or Project Files folders),
and not directly within the root folder. Permissions, visibility (e.g., `items:autodesk.bim360:Document` or `items:autodesk.bim360:File`),
and actions (e.g., OCR) are inherited from the existing parent folder. New folders also inherit subscriptions such as the
notifications sent when files are added to a folder.

#### Memberof

FolderPayloadDataRelationshipsParentData

### type

**type**: `"folders"`

Defined in: [model/folderPayloadDataRelationshipsParentData.ts:15](https://github.com/autodesk-platform-services/aps-sdk-node/blob/eeaeb10a079bc82754d05778f6c83dafc47cac8a/datamanagement/source/model/folderPayloadDataRelationshipsParentData.ts#L15)

#### Memberof

FolderPayloadDataRelationshipsParentData

---
원본 문서: https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/interfaces/ts-FolderPayloadDataRelationshipsParentData
