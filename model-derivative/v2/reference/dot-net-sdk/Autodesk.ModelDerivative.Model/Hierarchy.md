---
title: "Hierarchy Enum"
url_path: reference/dot-net-sdk/Autodesk.ModelDerivative.Model/Hierarchy
product: "Model Derivative API"
surface: "model-derivative-v2"
protocol: ".NET SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "dot-net-sdk"
---
# Enum Hierarchy

Namespace: [Autodesk.ModelDerivative.Model](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative.Model)Assembly: Autodesk.ModelDerivative.dll

Specifies how the hierarchy of items are determined. Applicable only when the source design is of type VUE.
- `Classic` - (Default) Uses hardcoded rules to set the hierarchy of items.
- `SystemPath` - Uses a linked XML or MDB2 properties file to set hierarchy of items. You can use this option to make the organization of items consistent with SmartPlant 3D.

**Notes:**
- The functioning of the SystemPath depends on the default setting of the property SP3D_SystemPath or System Path.
- The pathing delimiter must be .
- If you want to customize further, import the VUE file to Navisworks. After that, use POST job on the resulting Navisworks (nwc/nwd) file.

```
[JsonConverter(typeof(StringEnumConverter))]
public enum Hierarchy
```

## Fields

`Classic = 0`

Enum Classic for value: Classic

`SystemPath = 1`

Enum SystemPath for value: SystemPath

---
원본 문서: https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative.Model/Hierarchy
