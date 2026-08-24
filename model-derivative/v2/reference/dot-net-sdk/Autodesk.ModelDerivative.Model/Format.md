---
title: "Format Enum"
url_path: reference/dot-net-sdk/Autodesk.ModelDerivative.Model/Format
product: "Model Derivative API"
surface: "model-derivative-v2"
protocol: ".NET SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "dot-net-sdk"
---
# Enum Format

Namespace: [Autodesk.ModelDerivative.Model](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative.Model)Assembly: Autodesk.ModelDerivative.dll

Specifies the format of the file to create, when the specified output is STL. Possible values are:
- `ascii` - Create derivative as an ASCII STL file.
- `binary` - (Default) Create derivative as a binary STL file.

```
[JsonConverter(typeof(StringEnumConverter))]
public enum Format
```

## Fields

`Ascii = 1`

Enum Ascii for value: ascii

`Binary = 0`

Enum Binary for value: binary

---
원본 문서: https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative.Model/Format
