---
title: "SolidType Enum"
url_path: reference/dot-net-sdk/Autodesk.ModelDerivative.Model/SolidType
product: "Model Derivative API"
surface: "model-derivative-v2"
protocol: ".NET SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "dot-net-sdk"
---
# Enum SolidType

Namespace: [Autodesk.ModelDerivative.Model](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative.Model)Assembly: Autodesk.ModelDerivative.dll

The solid body type to export as, when the output is IGES. Possible values are:
- `solid` - (Default)
- `surface`
- `wireframe`

```
[JsonConverter(typeof(StringEnumConverter))]
public enum SolidType
```

## Fields

`Solid = 0`

Enum Solid for value: solid

`Surface = 1`

Enum Surface for value: surface

`Wireframe = 2`

Enum Wireframe for value: wireframe

---
원본 문서: https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative.Model/SolidType
