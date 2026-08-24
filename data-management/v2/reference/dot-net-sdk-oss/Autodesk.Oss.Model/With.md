---
title: "With Enum"
url_path: reference/dot-net-sdk-oss/Autodesk.Oss.Model/With
product: "Data Management API"
surface: "data-management-v2"
protocol: ".NET SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "dot-net-sdk-oss"
---
# Enum With

Namespace: [Autodesk.Oss.Model](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-oss/Autodesk.Oss.Model)Assembly: Autodesk.Oss.dll

**Not applicable for Head operation**
The optional information you can request for. To request more than one of the following, specify this parameter multiple times in the request. Possible values:
- `createdDate`
- `lastAccessedDate`
- `lastModifiedDate`
- `userDefinedMetadata`

```
[JsonConverter(typeof(StringEnumConverter))]
public enum With
```

## Fields

`CreatedDate = 0`

Enum CreatedDate for value: createdDate

`LastAccessedDate = 1`

Enum LastAccessedDate for value: lastAccessedDate

`LastModifiedDate = 2`

Enum LastModifiedDate for value: lastModifiedDate

`UserDefinedMetadata = 3`

Enum UserDefinedMetadata for value: userDefinedMetadata

---
원본 문서: https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-oss/Autodesk.Oss.Model/With
