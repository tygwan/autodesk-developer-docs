---
title: "OutputType Enum"
url_path: reference/dot-net-sdk/Autodesk.ModelDerivative.Model/OutputType
product: "Model Derivative API"
surface: "model-derivative-v2"
protocol: ".NET SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "dot-net-sdk"
---
# Enum OutputType

Namespace: [Autodesk.ModelDerivative.Model](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative.Model)Assembly: Autodesk.ModelDerivative.dll

The requested output types. Possible values include `svf`, `svf2`, `thumbnail`, `stl`, `step`, `iges`, `obj`, `ifc` or `dwg`. For a list of supported types, call the [GET formats](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/http/formats-GET) endpoint.

```
[JsonConverter(typeof(StringEnumConverter))]
public enum OutputType
```

## Fields

`Dwg = 8`

Enum Dwg for value: dwg

`Fbx = 9`

Enum Fbx for value: fbx

`Ifc = 7`

Enum Ifc for value: ifc

`Iges = 5`

Enum Iges for value: iges

`Obj = 6`

Enum Obj for value: obj

`Step = 4`

Enum Step for value: step

`Stl = 3`

Enum Stl for value: stl

`Svf = 0`

Enum Svf for value: svf

`Svf2 = 1`

Enum Svf2 for value: svf2

`Thumbnail = 2`

Enum Thumbnail for value: thumbnail

---
원본 문서: https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative.Model/OutputType
