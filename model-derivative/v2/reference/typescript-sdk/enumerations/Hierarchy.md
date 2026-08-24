---
title: "Hierarchy"
url_path: reference/typescript-sdk/enumerations/Hierarchy
product: "Model Derivative API"
surface: "model-derivative-v2"
protocol: "TypeScript SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "typescript-sdk"
---
# Enumeration: Hierarchy

Specifies how the hierarchy of items are determined. Applicable only when the source design is of type VUE.
- `Classic` - (Default) Uses hardcoded rules to set the hierarchy of items.
- `SystemPath` - Uses a linked XML or MDB2 properties file to set hierarchy of items. You can use this option to make the organization of items consistent with SmartPlant 3D.

**Notes:**
- The functioning of the SystemPath depends on the default setting of the property SP3D_SystemPath or System Path.
- The pathing delimiter must be .
- If you want to customize further, import the VUE file to Navisworks. After that, use POST job on the resulting Navisworks (nwc/nwd) file.

## Enumeration Members

### Classic

**Classic**: `"Classic"`

#### Defined in

[aps-sdk-node/modelderivative/source/model/hierarchy.ts:19](https://github.com/autodesk-platform-services/aps-sdk-node/blob/05570b8143138d5191b8069a72c0f08c25727474/modelderivative/source/model/hierarchy.ts#L19)

### SystemPath

**SystemPath**: `"SystemPath"`

#### Defined in

[aps-sdk-node/modelderivative/source/model/hierarchy.ts:20](https://github.com/autodesk-platform-services/aps-sdk-node/blob/05570b8143138d5191b8069a72c0f08c25727474/modelderivative/source/model/hierarchy.ts#L20)

---
원본 문서: https://aps.autodesk.com/en/docs/model-derivative/v2/reference/typescript-sdk/enumerations/Hierarchy
