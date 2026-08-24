---
title: "SheetType Enum"
url_path: reference/dot-net-sdk/Autodesk.ModelDerivative.Model/SheetType
product: "Model Derivative API"
surface: "model-derivative-v2"
protocol: ".NET SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "dot-net-sdk"
---
# Enum SheetType

Namespace: [Autodesk.ModelDerivative.Model](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative.Model)Assembly: Autodesk.ModelDerivative.dll

The sheet body type to export as, when the output is IGES. Possible values are:
- `open`
- `shell`
- `surface` - (Default)
- `wireframe`

```
[JsonConverter(typeof(StringEnumConverter))]
public enum SheetType
```

## Fields

`Open = 0`

Enum Open for value: open

`Shell = 2`

Enum Shell for value: shell

`Surface = 1`

Enum Surface for value: surface

`Wireframe = 3`

Enum Wireframe for value: wireframe

---
원본 문서: https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative.Model/SheetType
