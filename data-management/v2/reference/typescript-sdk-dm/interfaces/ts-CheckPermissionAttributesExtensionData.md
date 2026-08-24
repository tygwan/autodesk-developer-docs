---
title: "CheckPermissionAttributesExtensionData"
url_path: reference/typescript-sdk-dm/interfaces/ts-CheckPermissionAttributesExtensionData
product: "Data Management API"
surface: "data-management-v2"
protocol: "TypeScript SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "typescript-sdk-dm"
---
# Interface: CheckPermissionAttributesExtensionData

Defined in: [model/checkPermissionAttributesExtensionData.ts:10](https://github.com/autodesk-platform-services/aps-sdk-node/blob/eeaeb10a079bc82754d05778f6c83dafc47cac8a/datamanagement/source/model/checkPermissionAttributesExtensionData.ts#L10)

A container of the results of the resources
* that were checked for permission.

## Export

CheckPermissionAttributesExtensionData

## Properties

### permissions?

`optional` **permissions**: [`CheckPermissionAttributesExtensionDataPermissions`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/interfaces/ts-CheckPermissionAttributesExtensionDataPermissions)[]

Defined in: [model/checkPermissionAttributesExtensionData.ts:18](https://github.com/autodesk-platform-services/aps-sdk-node/blob/eeaeb10a079bc82754d05778f6c83dafc47cac8a/datamanagement/source/model/checkPermissionAttributesExtensionData.ts#L18)

An array of objects, where each object
represents a folder, item, or version that
permission was checked for.

#### Memberof

CheckPermissionAttributesExtensionData

### requiredActions?

`optional` **requiredActions**: `string`[]

Defined in: [model/checkPermissionAttributesExtensionData.ts:38](https://github.com/autodesk-platform-services/aps-sdk-node/blob/eeaeb10a079bc82754d05778f6c83dafc47cac8a/datamanagement/source/model/checkPermissionAttributesExtensionData.ts#L38)

An array of keywords where each keyword
is an action that permission was checked
for. Possible values:
- `read` - Download and view specified resource.
- `view` - View specified resource without downloading.
- `download` - Download and view specified resource.
- `collaborate` - Add comments for the specified resource.
- `write` - Write to the specified resource.
- `upload` - Upload to the specified resource.
- `updateMetaData` - Update metadata of the specified resource.
- `create` - Write and upload to the specified resource.
- `delete` - Delete the specified resource.
- `admin` - Perform administrative operations on specified resource.
- `share`- Share the specified resource.

#### Memberof

CheckPermissionAttributesExtensionData

---
원본 문서: https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/interfaces/ts-CheckPermissionAttributesExtensionData
