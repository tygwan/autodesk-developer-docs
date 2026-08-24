---
title: "ExtractorVersion Enum"
url_path: reference/dot-net-sdk/Autodesk.ModelDerivative.Model/ExtractorVersion
product: "Model Derivative API"
surface: "model-derivative-v2"
protocol: ".NET SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "dot-net-sdk"
---
# Enum ExtractorVersion

Namespace: [Autodesk.ModelDerivative.Model](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative.Model)Assembly: Autodesk.ModelDerivative.dll

Specifies what version of the Revit translator/extractor to use. Applicable only when the source design is of type RVT. Possible values are:
- `next` - Makes the translation job use the newest available version of the translator/extractor. This option is meant to be used by beta testers who wish to test a pre-release version of the translator. If no pre-release version is available, the system uses the current official release version.
- `previous` - Makes the translation job use the previous official release version of the translator/extractor. This option is meant to be used as a workaround in case of regressions caused by a new official release of the translator/extractor. If this attribute is not specified, the system uses the current official release version.

```
[JsonConverter(typeof(StringEnumConverter))]
public enum ExtractorVersion
```

## Fields

`Next = 0`

Enum Next for value: next

`Previous = 1`

Enum Previous for value: previous

---
원본 문서: https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative.Model/ExtractorVersion
