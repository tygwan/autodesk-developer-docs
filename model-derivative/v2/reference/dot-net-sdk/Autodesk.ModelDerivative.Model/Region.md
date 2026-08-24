---
title: "Region Enum"
url_path: reference/dot-net-sdk/Autodesk.ModelDerivative.Model/Region
product: "Model Derivative API"
surface: "model-derivative-v2"
protocol: ".NET SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "dot-net-sdk"
---
# Enum Region

Namespace: [Autodesk.ModelDerivative.Model](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative.Model)Assembly: Autodesk.ModelDerivative.dll

Specifies where the referenced files are stored. Possible values are:
- `US` - Data center for the US region.
- `EMEA` - Data center for the European Union, Middle East, and Africa.
- `AUS` - Data center for the Australia region.
- `CAN` - Data center for the Canada region.
- `DEU` - Data center for the Germany region.
- `IND` - Data center for the India region.
- `JPN` - Data center for the Japan region.
- `GBR` - Data center for the United Kingdom region. **Note**: Beta features are subject to change. Please avoid using them in production environments.

```
[JsonConverter(typeof(StringEnumConverter))]
public enum Region
```

## Fields

`APAC = 2`

Enum APAC for value: APAC

`AUS = 3`

Enum AUS for value: AUS

`CAN = 4`

Enum CAN for value: CAN

`DEU = 5`

Enum DEU for value: DEU

`EMEA = 1`

Enum EMEA for value: EMEA

`GBR = 8`

Enum GBR for value: GBR

`IND = 6`

Enum IND for value: IND

`JPN = 7`

Enum JPN for value: JPN

`US = 0`

Enum US for value: US

---
원본 문서: https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative.Model/Region
