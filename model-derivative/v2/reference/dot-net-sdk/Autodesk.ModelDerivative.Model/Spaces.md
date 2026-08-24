---
title: "Spaces Enum"
url_path: reference/dot-net-sdk/Autodesk.ModelDerivative.Model/Spaces
product: "Model Derivative API"
surface: "model-derivative-v2"
protocol: ".NET SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "dot-net-sdk"
---
# Enum Spaces

Namespace: [Autodesk.ModelDerivative.Model](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative.Model)Assembly: Autodesk.ModelDerivative.dll

Specifies how spaces are translated. Applicable only when the source design is of type IFC. Possible values are:
- `hide` - (Default) spaces are translated but are not visible by default.
- `show` - Spaces are translated and are visible by default.
- `skip` - Spaces are not translated.

**Note:** These options are applicable only when `conversionMethod` is set to `modern` or `v3`.

```
[JsonConverter(typeof(StringEnumConverter))]
public enum Spaces
```

## Fields

`Hide = 0`

Enum Hide for value: hide

`Show = 1`

Enum Show for value: show

`Skip = 2`

Enum Skip for value: skip

---
원본 문서: https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative.Model/Spaces
