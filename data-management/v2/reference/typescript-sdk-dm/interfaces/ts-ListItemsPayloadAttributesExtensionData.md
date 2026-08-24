---
title: "ListItemsPayloadAttributesExtensionData"
url_path: reference/typescript-sdk-dm/interfaces/ts-ListItemsPayloadAttributesExtensionData
product: "Data Management API"
surface: "data-management-v2"
protocol: "TypeScript SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "typescript-sdk-dm"
---
# Interface: ListItemsPayloadAttributesExtensionData

Defined in: [model/listItemsPayloadAttributesExtensionData.ts:9](https://github.com/autodesk-platform-services/aps-sdk-node/blob/eeaeb10a079bc82754d05778f6c83dafc47cac8a/datamanagement/source/model/listItemsPayloadAttributesExtensionData.ts#L9)

Contains the custom properties specific to the
* ListItems command.

## Export

ListItemsPayloadAttributesExtensionData

## Properties

### includePathInProject?

`optional` **includePathInProject**: `boolean`

Defined in: [model/listItemsPayloadAttributesExtensionData.ts:25](https://github.com/autodesk-platform-services/aps-sdk-node/blob/eeaeb10a079bc82754d05778f6c83dafc47cac8a/datamanagement/source/model/listItemsPayloadAttributesExtensionData.ts#L25)

Specify whether to return the
`pathInProject` attribute in response
for BIM 360 Docs projects.
`pathInProject` is the path to
the item relative to the project’s root folder.
- `true`: Response will contain the `pathInProject` attribute for BIM 360 Docs projects.
- `false`: (Default) response will not contain the `pathInProject` attribute for BIM 360 Docs projects.

Setting this parameter to `true` on a
non-BIM 360 Docs project results in an error.

#### Memberof

ListItemsPayloadAttributesExtensionData

---
원본 문서: https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/interfaces/ts-ListItemsPayloadAttributesExtensionData
