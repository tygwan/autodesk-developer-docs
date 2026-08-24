---
title: "TypeFolderItemsForStorage Enum"
url_path: reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/TypeFolderItemsForStorage
product: "Data Management API"
surface: "data-management-v2"
protocol: ".NET SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "dot-net-sdk-dm"
---
# Enum TypeFolderItemsForStorage

Namespace: [Autodesk.DataManagement.Model](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model)Assembly: Autodesk.DataManagement.dll

The type of resource the storage location is related to. Possible values are:
- `folders` - The storage location is for a new item.
- `items` - The storage location is for a new version of an existing item.

```
[JsonConverter(typeof(StringEnumConverter))]
public enum TypeFolderItemsForStorage
```

## Fields

`Folders = 0`

Enum Folders for value: folders

`Items = 1`

Enum Items for value: items

---
원본 문서: https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/TypeFolderItemsForStorage
