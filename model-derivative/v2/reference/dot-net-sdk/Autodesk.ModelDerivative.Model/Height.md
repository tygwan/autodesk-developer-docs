---
title: "Height Enum"
url_path: reference/dot-net-sdk/Autodesk.ModelDerivative.Model/Height
product: "Model Derivative API"
surface: "model-derivative-v2"
protocol: ".NET SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "dot-net-sdk"
---
# Enum Height

Namespace: [Autodesk.ModelDerivative.Model](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative.Model)Assembly: Autodesk.ModelDerivative.dll

Height of thumbnails. Possible values are: `100`, `200`, `400`.If `height` is omitted, but `width` is specified, `height` defaults to `width`. If both `width` and `height` are omitted, the server will return a thumbnail closest to `200`, if such a thumbnail is available

```
public enum Height
```

## Fields

`NUMBER_100 = 100`

Enum NUMBER_100 for value: 100

`NUMBER_200 = 200`

Enum NUMBER_200 for value: 200

`NUMBER_400 = 400`

Enum NUMBER_400 for value: 400

---
원본 문서: https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative.Model/Height
