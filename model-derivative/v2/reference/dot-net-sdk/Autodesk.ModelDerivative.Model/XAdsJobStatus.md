---
title: "XAdsJobStatus Enum"
url_path: reference/dot-net-sdk/Autodesk.ModelDerivative.Model/XAdsJobStatus
product: "Model Derivative API"
surface: "model-derivative-v2"
protocol: ".NET SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "dot-net-sdk"
---
# Enum XAdsJobStatus

Namespace: [Autodesk.ModelDerivative.Model](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative.Model)Assembly: Autodesk.ModelDerivative.dll

The execution status of the translation job. Possible values are: `inprogress`, `success`, `failed`, `timedout`

```
[JsonConverter(typeof(StringEnumConverter))]
public enum XAdsJobStatus
```

## Fields

`Failed = 2`

Enum Failed for value: failed

`Inprogress = 0`

Enum Inprogress for value: inprogress

`Success = 1`

Enum Success for value: success

`Timedout = 3`

Enum Timedout for value: timedout

---
원본 문서: https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative.Model/XAdsJobStatus
