---
title: "Payload Enum"
url_path: reference/dot-net-sdk/Autodesk.ModelDerivative.Model/Payload
product: "Model Derivative API"
surface: "model-derivative-v2"
protocol: ".NET SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "dot-net-sdk"
---
# Enum Payload

Namespace: [Autodesk.ModelDerivative.Model](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative.Model)Assembly: Autodesk.ModelDerivative.dll

Specifies the format for numeric values in the response body. Possible values:
- `text` - (Default) Returns all properties requested in `fields` without applying any special formatting.
- `unit` - Applies a filter and returns only the properties that contain numerical values. Additionally, it formats property values as `##<VALUE_OF_PROPERTY><UNIT_OF_VALUE<>PRECISION><SYSTEM_UNIT>`. For example `##94.172{mm}[3]{m}`, where `94.172` is the value of the property, `{mm}` is the unit of the value, `[3]` is the precision, and `{m}` is the metric base unit for the measurement.

```
[JsonConverter(typeof(StringEnumConverter))]
public enum Payload
```

## Fields

`Text = 0`

Enum Text for value: text

`Unit = 1`

Enum Unit for value: unit

---
원본 문서: https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative.Model/Payload
