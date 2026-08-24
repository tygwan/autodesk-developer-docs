---
title: "BinaryData"
url_path: reference/objects/binarydata
surface: graphql
reference_kind: object
graphql_name: "BinaryData"
---
# BinaryData

![object](https://developer.doc.autodesk.com/bPlouYTd/forge-aim-graphql-docs-main-695451/_images/badge_object.png)

Represents binary geometry data.

## Fields

| format*[String!](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/scalars) `non-null` | The format of the binary data. |
| --- | --- |
| objectId*[ID!](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/scalars) `non-null` | The ID of the binary object. |
| firstByteAddress*[Int!](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/scalars) `non-null` | The address of the first byte in the binary data. |
| lastByteAddress*[Int!](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/scalars) `non-null` | The address of the last byte in the binary data. |

---
원본 문서: https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/binarydata
