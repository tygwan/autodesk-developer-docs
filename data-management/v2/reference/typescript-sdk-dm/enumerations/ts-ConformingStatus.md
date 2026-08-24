---
title: "ConformingStatus"
url_path: reference/typescript-sdk-dm/enumerations/ts-ConformingStatus
product: "Data Management API"
surface: "data-management-v2"
protocol: "TypeScript SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "typescript-sdk-dm"
---
# Enumeration: ConformingStatus

Defined in: [model/conformingStatus.ts:22](https://github.com/autodesk-platform-services/aps-sdk-node/blob/eeaeb10a079bc82754d05778f6c83dafc47cac8a/datamanagement/source/model/conformingStatus.ts#L22)

A status indicating whether this version conforms to its parent folder’s file naming standard.
*
* Possible values:
*
* - `NONE`: The conforming status is not applicable for the version.
* - `CONFORMING`: The version conforms to its parent folder’s file naming standard.
* - `NON_CONFORMING`: The version does not conform to its parent folder’s file naming standard.
*
* In the event of a `NON_CONFORMING` status, use the [Get a Folder](https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-folders-folder_id-GET) operation to get the file naming standards IDs that have been applied to the version’s parent folder. Then use the ID to call [GET naming-standards](https://aps.autodesk.com/en/docs/bim360/v1/reference/http/document-management-naming-standards-id-GET/) to get the details of the file naming standard.
*
* Note that this feature is only available for BIM 360 projects.*
* To learn more about the file naming standard feature, see the [BIM 360 File Naming Standard](https://help.autodesk.com/view/BIM360D/ENU/?guid=Common_Data_Environment) help documentation.
*

## Enumeration Members

### Conforming

**Conforming**: `"CONFORMING"`

Defined in: [model/conformingStatus.ts:24](https://github.com/autodesk-platform-services/aps-sdk-node/blob/eeaeb10a079bc82754d05778f6c83dafc47cac8a/datamanagement/source/model/conformingStatus.ts#L24)

### NonConforming

**NonConforming**: `"NON_CONFORMING"`

Defined in: [model/conformingStatus.ts:25](https://github.com/autodesk-platform-services/aps-sdk-node/blob/eeaeb10a079bc82754d05778f6c83dafc47cac8a/datamanagement/source/model/conformingStatus.ts#L25)

### None

**None**: `"NONE"`

Defined in: [model/conformingStatus.ts:23](https://github.com/autodesk-platform-services/aps-sdk-node/blob/eeaeb10a079bc82754d05778f6c83dafc47cac8a/datamanagement/source/model/conformingStatus.ts#L23)

---
원본 문서: https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/enumerations/ts-ConformingStatus
