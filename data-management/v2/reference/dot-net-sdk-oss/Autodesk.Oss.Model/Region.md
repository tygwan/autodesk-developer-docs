---
title: "Region Enum"
url_path: reference/dot-net-sdk-oss/Autodesk.Oss.Model/Region
product: "Data Management API"
surface: "data-management-v2"
protocol: ".NET SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "dot-net-sdk-oss"
---
# Enum Region

Namespace: [Autodesk.Oss.Model](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-oss/Autodesk.Oss.Model)Assembly: Autodesk.Oss.dll

Specifies where the bucket containing the object is stored. Possible values are:

```
   - `US` - (Default) Data center for the US region.
   - `EMEA` - Data center for the European Union, Middle East, and Africa.
   - `APAC` -  (Beta) Data center for Australia.

   **Note:** Beta features are subject to change. Please do not use in production environments.
```

```
[JsonConverter(typeof(StringEnumConverter))]
public enum Region
```

## Fields

`APAC = 2`

Enum APAC for value: APAC

`EMEA = 1`

Enum EMEA for value: EMEA

`US = 0`

Enum US for value: US

---
원본 문서: https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-oss/Autodesk.Oss.Model/Region
