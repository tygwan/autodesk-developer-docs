---
title: "SurfaceType Enum"
url_path: reference/dot-net-sdk/Autodesk.ModelDerivative.Model/SurfaceType
product: "Model Derivative API"
surface: "model-derivative-v2"
protocol: ".NET SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "dot-net-sdk"
---
# Enum SurfaceType

Namespace: [Autodesk.ModelDerivative.Model](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative.Model)Assembly: Autodesk.ModelDerivative.dll

Specifies the surface type to export as, when the output is IGES. Possible values are
- `bounded` - (Default) Bounded surface
- `trimmed` - Trimmed surface
- `wireframe`. Wireframe surface.’

```
[JsonConverter(typeof(StringEnumConverter))]
public enum SurfaceType
```

## Fields

`Bounded = 0`

Enum Bounded for value: bounded

`Trimmed = 1`

Enum Trimmed for value: trimmed

`Wireframe = 2`

Enum Wireframe for value: wireframe

---
원본 문서: https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative.Model/SurfaceType
