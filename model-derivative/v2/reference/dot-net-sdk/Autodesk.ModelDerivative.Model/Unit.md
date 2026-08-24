---
title: "Unit Enum"
url_path: reference/dot-net-sdk/Autodesk.ModelDerivative.Model/Unit
product: "Model Derivative API"
surface: "model-derivative-v2"
protocol: ".NET SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "dot-net-sdk"
---
# Enum Unit

Namespace: [Autodesk.ModelDerivative.Model](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative.Model)Assembly: Autodesk.ModelDerivative.dll

The units the models must be translated to, when the output type is OBJ. For example, from millimeters (10, 123, 31) to centimeters (1.0, 12.3, 3.1). If the source unit or the unit you are translating to is not supported, the values remain unchanged.
Possible values are:
- `meter`
- `decimeter`
- `centimeter`
- `millimeter`
- `micrometer`
- `nanometer`
- `yard`
- `foot`
- `inch`
- `mil`
- `microinch`

**Note:** Not supported when the source design is F3D.

```
[JsonConverter(typeof(StringEnumConverter))]
public enum Unit
```

## Fields

`Centimeter = 2`

Enum Centimeter for value: centimeter

`Decimeter = 1`

Enum Decimeter for value: decimeter

`Foot = 7`

Enum Foot for value: foot

`Inch = 8`

Enum Inch for value: inch

`Meter = 0`

Enum Meter for value: meter

`Microinch = 10`

Enum Microinch for value: microinch

`Micrometer = 4`

Enum Micrometer for value: micrometer

`Mil = 9`

Enum Mil for value: mil

`Millimeter = 3`

Enum Millimeter for value: millimeter

`Nanometer = 5`

Enum Nanometer for value: nanometer

`Yard = 6`

Enum Yard for value: yard

---
원본 문서: https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative.Model/Unit
