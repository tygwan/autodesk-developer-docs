---
title: "ExtractorVersion"
url_path: reference/typescript-sdk/enumerations/ExtractorVersion
product: "Model Derivative API"
surface: "model-derivative-v2"
protocol: "TypeScript SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "typescript-sdk"
---
# Enumeration: ExtractorVersion

Specifies what version of the Revit translator/extractor to use. Applicable only when the source design is of type RVT. Possible values are:
- `next` - Makes the translation job use the newest available version of the translator/extractor. This option is meant to be used by beta testers who wish to test a pre-release version of the translator. If no pre-release version is available, the system uses the current official release version.
- `previous` - Makes the translation job use the previous official release version of the translator/extractor. This option is meant to be used as a workaround in case of regressions caused by a new official release of the translator/extractor. If this attribute is not specified, the system uses the current official release version.

## Enumeration Members

### Next

**Next**: `"next"`

#### Defined in

[aps-sdk-node/modelderivative/source/model/extractorVersion.ts:13](https://github.com/autodesk-platform-services/aps-sdk-node/blob/05570b8143138d5191b8069a72c0f08c25727474/modelderivative/source/model/extractorVersion.ts#L13)

### Previous

**Previous**: `"previous"`

#### Defined in

[aps-sdk-node/modelderivative/source/model/extractorVersion.ts:14](https://github.com/autodesk-platform-services/aps-sdk-node/blob/05570b8143138d5191b8069a72c0f08c25727474/modelderivative/source/model/extractorVersion.ts#L14)

---
원본 문서: https://aps.autodesk.com/en/docs/model-derivative/v2/reference/typescript-sdk/enumerations/ExtractorVersion
