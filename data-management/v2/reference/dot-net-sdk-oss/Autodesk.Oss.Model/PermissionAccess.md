---
title: "PermissionAccess Enum"
url_path: reference/dot-net-sdk-oss/Autodesk.Oss.Model/PermissionAccess
product: "Data Management API"
surface: "data-management-v2"
protocol: ".NET SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "dot-net-sdk-oss"
---
# Enum PermissionAccess

Namespace: [Autodesk.Oss.Model](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-oss/Autodesk.Oss.Model)Assembly: Autodesk.Oss.dll

Specifies the level of permission the application has. Possible values are:
- `full` - Unrestricted access to objects within the bucket.
- `read_only` - Read only access to the objects within the bucket. Modification and deletion of objects is not allowed.

```
[JsonConverter(typeof(StringEnumConverter))]
public enum PermissionAccess
```

## Fields

`Full = 0`

Enum Full for value: full

`Read = 1`

Enum Read for value: read

---
원본 문서: https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-oss/Autodesk.Oss.Model/PermissionAccess
