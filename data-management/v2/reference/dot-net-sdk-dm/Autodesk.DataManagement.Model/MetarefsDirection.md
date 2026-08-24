---
title: "MetarefsDirection Enum"
url_path: reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/MetarefsDirection
product: "Data Management API"
surface: "data-management-v2"
protocol: ".NET SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "dot-net-sdk-dm"
---
# Enum MetarefsDirection

Namespace: [Autodesk.DataManagement.Model](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model)Assembly: Autodesk.DataManagement.dll

Describes the direction of data flow in the relationship. Possible values are:
- `to` - Data flows from this resource to the related resource.
- `from` - Data flows from the related resource to this resource.

```
[JsonConverter(typeof(StringEnumConverter))]
public enum MetarefsDirection
```

## Fields

`From = 0`

Enum From for value: from

`To = 1`

Enum To for value: to

---
원본 문서: https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/MetarefsDirection
