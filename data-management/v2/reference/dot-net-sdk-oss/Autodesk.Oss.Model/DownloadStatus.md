---
title: "DownloadStatus Enum"
url_path: reference/dot-net-sdk-oss/Autodesk.Oss.Model/DownloadStatus
product: "Data Management API"
surface: "data-management-v2"
protocol: ".NET SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "dot-net-sdk-oss"
---
# Enum DownloadStatus

Namespace: [Autodesk.Oss.Model](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-oss/Autodesk.Oss.Model)Assembly: Autodesk.Oss.dll

Indicates the upload status of the requested object. Possible values are:
- `complete` - The upload process is finished. If the object was uploaded in chunks, assembly of chunks into the final object is also complete.
- `chunked` - The object was uploaded in chunks, but assembly of chunks into the final object is still pending. `public-resource-fallback` = `false`
- `fallback`` - The object was uploaded in chunks, but assembly of chunks into the final object is still pending. `public-resource-fallback`=`true``

```
[JsonConverter(typeof(StringEnumConverter))]
public enum DownloadStatus
```

## Fields

`Chunked = 1`

Enum Chunked for value: chunked

`Complete = 0`

Enum Complete for value: complete

`Fallback = 2`

Enum Fallback for value: fallback

---
원본 문서: https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-oss/Autodesk.Oss.Model/DownloadStatus
