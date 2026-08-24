---
title: "NestedXref Enum"
url_path: reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/NestedXref
product: "Data Management API"
surface: "data-management-v2"
protocol: ".NET SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "dot-net-sdk-dm"
---
# Enum NestedXref

Namespace: [Autodesk.DataManagement.Model](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model)Assembly: Autodesk.DataManagement.dll

The type of the xref, which defines how nested xrefs are handled. Possible values are:
- `attachment`: Nested xrefs are not ignored.
- `overlay` : Nested xrefs are ignored.

```
[JsonConverter(typeof(StringEnumConverter))]
public enum NestedXref
```

## Fields

`Attachment = 0`

Enum Attachment for value: attachment

`Overlay = 1`

Enum Overlay for value: overlay

---
원본 문서: https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/NestedXref
