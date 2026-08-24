---
title: "Model2dView Enum"
url_path: reference/dot-net-sdk/Autodesk.ModelDerivative.Model/Model2dView
product: "Model Derivative API"
surface: "model-derivative-v2"
protocol: ".NET SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "dot-net-sdk"
---
# Enum Model2dView

Namespace: [Autodesk.ModelDerivative.Model](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative.Model)Assembly: Autodesk.ModelDerivative.dll

The format that 2D views must be rendered to. Possible values are:
- `legacy` - (Default) Render to a model derivative specific file format.
- `pdf` - Render to the PDF file format. When the source design is of type Revit, applies only to Revit 2022 files and newer. If the source design is of type DWG, only properties with semantic values are extracted.

```
[JsonConverter(typeof(StringEnumConverter))]
public enum Model2dView
```

## Fields

`Legacy = 0`

Enum Legacy for value: legacy

`Pdf = 1`

Enum Pdf for value: pdf

---
원본 문서: https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative.Model/Model2dView
