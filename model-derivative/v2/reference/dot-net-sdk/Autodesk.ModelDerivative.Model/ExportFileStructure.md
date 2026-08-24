---
title: "ExportFileStructure Enum"
url_path: reference/dot-net-sdk/Autodesk.ModelDerivative.Model/ExportFileStructure
product: "Model Derivative API"
surface: "model-derivative-v2"
protocol: ".NET SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "dot-net-sdk"
---
# Enum ExportFileStructure

Namespace: [Autodesk.ModelDerivative.Model](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative.Model)Assembly: Autodesk.ModelDerivative.dll

Specifies the structure of the derivative, when the specified output is STL. Possible values are:
- `single` (Default) Create one STL file for all the input files (assembly file).
- `multiple`: Create a separate STL file for each object

```
[JsonConverter(typeof(StringEnumConverter))]
public enum ExportFileStructure
```

## Fields

`Multiple = 1`

Enum Multiple for value: multiple

`Single = 0`

Enum Single for value: single

---
원본 문서: https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative.Model/ExportFileStructure
