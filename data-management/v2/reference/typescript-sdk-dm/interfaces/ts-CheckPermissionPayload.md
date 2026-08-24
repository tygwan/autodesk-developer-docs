---
title: "CheckPermissionPayload"
url_path: reference/typescript-sdk-dm/interfaces/ts-CheckPermissionPayload
product: "Data Management API"
surface: "data-management-v2"
protocol: "TypeScript SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "typescript-sdk-dm"
---
# Interface: CheckPermissionPayload

Defined in: [model/checkPermissionPayload.ts:17](https://github.com/autodesk-platform-services/aps-sdk-node/blob/eeaeb10a079bc82754d05778f6c83dafc47cac8a/datamanagement/source/model/checkPermissionPayload.ts#L17)

An object that contains the input data required to execute the CheckPermission command.
*
* The CheckPermission command checks if a user has permission to perform specified actions on specified resources.
* The user’s identity is derived from the `x-user-id` parameter (in a 2-Legged call), or from the access token (in a 3-Legged call).
*
* See the [Developer’s Guide topic on the CheckPermission command](https://aps.autodesk.com/en/docs/data/v2/developers_guide/commands/checkpermission/) for more information.
*

## Export

CheckPermissionPayload

## Properties

### attributes?

`optional` **attributes**: [`CheckPermissionPayloadAttributes`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/interfaces/ts-CheckPermissionPayloadAttributes)

Defined in: [model/checkPermissionPayload.ts:29](https://github.com/autodesk-platform-services/aps-sdk-node/blob/eeaeb10a079bc82754d05778f6c83dafc47cac8a/datamanagement/source/model/checkPermissionPayload.ts#L29)

#### Memberof

CheckPermissionPayload

### relationships?

`optional` **relationships**: [`CheckPermissionPayloadRelationships`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/interfaces/ts-CheckPermissionPayloadRelationships)

Defined in: [model/checkPermissionPayload.ts:35](https://github.com/autodesk-platform-services/aps-sdk-node/blob/eeaeb10a079bc82754d05778f6c83dafc47cac8a/datamanagement/source/model/checkPermissionPayload.ts#L35)

#### Memberof

CheckPermissionPayload

### type?

`optional` **type**: `"commands"`

Defined in: [model/checkPermissionPayload.ts:23](https://github.com/autodesk-platform-services/aps-sdk-node/blob/eeaeb10a079bc82754d05778f6c83dafc47cac8a/datamanagement/source/model/checkPermissionPayload.ts#L23)

#### Memberof

CheckPermissionPayload

---
원본 문서: https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/interfaces/ts-CheckPermissionPayload
