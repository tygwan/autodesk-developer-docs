---
title: "CheckPermissionPayloadAttributesExtensionData"
url_path: reference/typescript-sdk-dm/interfaces/ts-CheckPermissionPayloadAttributesExtensionData
product: "Data Management API"
surface: "data-management-v2"
protocol: "TypeScript SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "typescript-sdk-dm"
---
# Interface: CheckPermissionPayloadAttributesExtensionData

Defined in: [model/checkPermissionPayloadAttributesExtensionData.ts:9](https://github.com/autodesk-platform-services/aps-sdk-node/blob/eeaeb10a079bc82754d05778f6c83dafc47cac8a/datamanagement/source/model/checkPermissionPayloadAttributesExtensionData.ts#L9)

Contains the properties specific to the
* CheckPermission command.

## Export

CheckPermissionPayloadAttributesExtensionData

## Properties

### requiredActions?

`optional` **requiredActions**: `string`[]

Defined in: [model/checkPermissionPayloadAttributesExtensionData.ts:29](https://github.com/autodesk-platform-services/aps-sdk-node/blob/eeaeb10a079bc82754d05778f6c83dafc47cac8a/datamanagement/source/model/checkPermissionPayloadAttributesExtensionData.ts#L29)

An array of keywords where each keyword
is an action that permission must be checked
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

CheckPermissionPayloadAttributesExtensionData

---
원본 문서: https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/interfaces/ts-CheckPermissionPayloadAttributesExtensionData
