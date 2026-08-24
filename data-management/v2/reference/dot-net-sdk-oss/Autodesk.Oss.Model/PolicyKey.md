---
title: "PolicyKey Enum"
url_path: reference/dot-net-sdk-oss/Autodesk.Oss.Model/PolicyKey
product: "Data Management API"
surface: "data-management-v2"
protocol: ".NET SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "dot-net-sdk-oss"
---
# Enum PolicyKey

Namespace: [Autodesk.Oss.Model](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-oss/Autodesk.Oss.Model)Assembly: Autodesk.Oss.dll

Specifies the retention policy for the objects stored in the bucket. Possible values are:
- `transient` - Objects are retained for 24 hours.
- `temporary` - Objects are retained for 30 days.
- `persistent` - Objects are retained until they are deleted.

```
[JsonConverter(typeof(StringEnumConverter))]
public enum PolicyKey
```

## Fields

`Persistent = 2`

Enum Persistent for value: persistent

`Temporary = 1`

Enum Temporary for value: temporary

`Transient = 0`

Enum Transient for value: transient

---
원본 문서: https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-oss/Autodesk.Oss.Model/PolicyKey
