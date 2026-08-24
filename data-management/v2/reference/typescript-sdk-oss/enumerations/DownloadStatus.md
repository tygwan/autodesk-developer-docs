---
title: "DownloadStatus"
url_path: reference/typescript-sdk-oss/enumerations/DownloadStatus
product: "Data Management API"
surface: "data-management-v2"
protocol: "TypeScript SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "typescript-sdk-oss"
---
# Enumeration: DownloadStatus

Defined in: [model/downloadStatus.ts:14](https://github.com/autodesk-platform-services/aps-sdk-node/blob/e37e37c49eb213844e79f1c7dee5616930755060/oss/source/model/downloadStatus.ts#L14)

Indicates the current state of the object requested for download. Possible values are:
- `complete` - The object is ready to be downloaded.
- `chunked` - The object was uploaded in chunks, but assembly of chunks into the final object is still pending.
- `fallback` - The object was uploaded in chunks, but assembly of chunks into the final object is still pending. Will fallback to an OSS Signed URL because `public-resource-fallback` = `true` in the request.

## Enumeration Members

### Chunked

**Chunked**: `"chunked"`
Defined in: [model/downloadStatus.ts:16](https://github.com/autodesk-platform-services/aps-sdk-node/blob/e37e37c49eb213844e79f1c7dee5616930755060/oss/source/model/downloadStatus.ts#L16)

### Complete

**Complete**: `"complete"`
Defined in: [model/downloadStatus.ts:15](https://github.com/autodesk-platform-services/aps-sdk-node/blob/e37e37c49eb213844e79f1c7dee5616930755060/oss/source/model/downloadStatus.ts#L15)

### Fallback

**Fallback**: `"fallback"`
Defined in: [model/downloadStatus.ts:17](https://github.com/autodesk-platform-services/aps-sdk-node/blob/e37e37c49eb213844e79f1c7dee5616930755060/oss/source/model/downloadStatus.ts#L17)

---
원본 문서: https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-oss/enumerations/DownloadStatus
