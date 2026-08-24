---
title: "Status Enum"
url_path: reference/dot-net-sdk-oss/Autodesk.Oss.Model/Status
product: "Data Management API"
surface: "data-management-v2"
protocol: ".NET SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "dot-net-sdk-oss"
---
# Enum Status

Namespace: [Autodesk.Oss.Model](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-oss/Autodesk.Oss.Model)Assembly: Autodesk.Oss.dll

Indicates whether this particular part uploaded to S3 is valid. Possible values are:
- `Pending` - No such part was uploaded to S3 for this index.
- `Unexpected` - The eTag of the part in S3 does not match the one provided in the request.
- `TooSmall` - A chunk uploaded to S3 is smaller than 5MB. Only the final chunk can be smaller than 5MB.
- `Unexpected+TooSmall` - The chunk is both too small and has an eTag mismatch.
- `Ok` - The chunk has no issues.’

```
[JsonConverter(typeof(StringEnumConverter))]
public enum Status
```

## Fields

`Ok = 4`

Enum Ok for value: Ok

`Pending = 0`

Enum Pending for value: Pending

`TooSmall = 2`

Enum TooSmall for value: TooSmall

`Unexpected = 1`

Enum Unexpected for value: Unexpected

`UnexpectedTooSmall = 3`

Enum UnexpectedTooSmall for value: Unexpected+TooSmall

---
원본 문서: https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-oss/Autodesk.Oss.Model/Status
