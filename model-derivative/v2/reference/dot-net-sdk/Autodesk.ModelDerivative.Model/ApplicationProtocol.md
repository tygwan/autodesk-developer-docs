---
title: "ApplicationProtocol Enum"
url_path: reference/dot-net-sdk/Autodesk.ModelDerivative.Model/ApplicationProtocol
product: "Model Derivative API"
surface: "model-derivative-v2"
protocol: ".NET SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "dot-net-sdk"
---
# Enum ApplicationProtocol

Namespace: [Autodesk.ModelDerivative.Model](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative.Model)Assembly: Autodesk.ModelDerivative.dll

Specifies the application protocol to use when the output type is STEP. Possible values are:
- `203` - Configuration controlled design.
- `214` - (Default) Core data for automotive mechanical design processes.
- `242` - Managed model based 3D engineering.

```
[JsonConverter(typeof(StringEnumConverter))]
public enum ApplicationProtocol
```

## Fields

`_203 = 0`

Enum _203 for value: 203

`_214 = 1`

Enum _214 for value: 214

`_242 = 2`

Enum _242 for value: 242

---
원본 문서: https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative.Model/ApplicationProtocol
