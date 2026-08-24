---
title: "MaterialMode Enum"
url_path: reference/dot-net-sdk/Autodesk.ModelDerivative.Model/MaterialMode
product: "Model Derivative API"
surface: "model-derivative-v2"
protocol: ".NET SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "dot-net-sdk"
---
# Enum MaterialMode

Namespace: [Autodesk.ModelDerivative.Model](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative.Model)Assembly: Autodesk.ModelDerivative.dll

Specifies the materials to apply to the generated SVF derivatives. Applicable only when the source design is of type RVT. Possible values are:
- `auto` - (Default) Use the current setting of the default view of the input file.
- `basic` - Use basic materials.
- `autodesk` - Use Autodesk materials.

```
[JsonConverter(typeof(StringEnumConverter))]
public enum MaterialMode
```

## Fields

`Auto = 0`

Enum Auto for value: auto

`Autodesk = 2`

Enum Autodesk for value: autodesk

`Basic = 1`

Enum Basic for value: basic

---
원본 문서: https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative.Model/MaterialMode
