---
title: "ConversionMethod Enum"
url_path: reference/dot-net-sdk/Autodesk.ModelDerivative.Model/ConversionMethod
product: "Model Derivative API"
surface: "model-derivative-v2"
protocol: ".NET SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "dot-net-sdk"
---
# Enum ConversionMethod

Namespace: [Autodesk.ModelDerivative.Model](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative.Model)Assembly: Autodesk.ModelDerivative.dll

Specifies what IFC loader to use during translation. Applicable only when the source design is of type IFC. Possible values are:
- `legacy` - Use IFC loader version 1, which is based on the Navisworks IFC loader.
- `modern` - Use IFC loader version 2, which is based on the Revit IFC loader.
- `v3` - Use IFC loader version 3, which is based on the Revit IFC loader.
- `v4` - **(Recommended)** Use IFC loader version 4, which is a native solution specifically designed for Autodesk Platform Services (APS). It does not depend on Navisworks or Revit.

```
[JsonConverter(typeof(StringEnumConverter))]
public enum ConversionMethod
```

## Fields

`Legacy = 0`

Enum Legacy for value: legacy

`Modern = 1`

Enum Modern for value: modern

`V3 = 2`

Enum V3 for value: v3

`V4 = 3`

Enum V4 for value: v4

---
원본 문서: https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative.Model/ConversionMethod
