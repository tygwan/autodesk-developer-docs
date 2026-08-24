---
title: "ConversionMethod"
url_path: reference/typescript-sdk/enumerations/ConversionMethod
product: "Model Derivative API"
surface: "model-derivative-v2"
protocol: "TypeScript SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "typescript-sdk"
---
# Enumeration: ConversionMethod

Specifies what IFC loader to use during translation. Applicable only when the source design is of type IFC. Possible values are:
- `legacy` - Use IFC loader version 1, which is based on the Navisworks IFC loader.
- `modern` - Use IFC loader version 2, which is based on the Revit IFC loader.
- `v3` - Use IFC loader version 3, which is based on the Revit IFC loader.
- `v4` - **(Recommended)** Use IFC loader version 4, which is a native solution specifically designed for Autodesk Platform Services (APS). It does not depend on Navisworks or Revit.

## Enumeration Members

### Legacy

**Legacy**: `"legacy"`

#### Defined in

[aps-sdk-node/modelderivative/source/model/conversionMethod.ts:15](https://github.com/autodesk-platform-services/aps-sdk-node/blob/05570b8143138d5191b8069a72c0f08c25727474/modelderivative/source/model/conversionMethod.ts#L15)

### Modern

**Modern**: `"modern"`

#### Defined in

[aps-sdk-node/modelderivative/source/model/conversionMethod.ts:16](https://github.com/autodesk-platform-services/aps-sdk-node/blob/05570b8143138d5191b8069a72c0f08c25727474/modelderivative/source/model/conversionMethod.ts#L16)

### V3

**V3**: `"v3"`

#### Defined in

[aps-sdk-node/modelderivative/source/model/conversionMethod.ts:17](https://github.com/autodesk-platform-services/aps-sdk-node/blob/05570b8143138d5191b8069a72c0f08c25727474/modelderivative/source/model/conversionMethod.ts#L17)

### V4

**V4**: `"v4"`

#### Defined in

[aps-sdk-node/modelderivative/source/model/conversionMethod.ts:18](https://github.com/autodesk-platform-services/aps-sdk-node/blob/05570b8143138d5191b8069a72c0f08c25727474/modelderivative/source/model/conversionMethod.ts#L18)

---
원본 문서: https://aps.autodesk.com/en/docs/model-derivative/v2/reference/typescript-sdk/enumerations/ConversionMethod
