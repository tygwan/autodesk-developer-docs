---
title: "Status"
url_path: reference/typescript-sdk-oss/enumerations/Status
product: "Data Management API"
surface: "data-management-v2"
protocol: "TypeScript SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "typescript-sdk-oss"
---
# Enumeration: Status

Defined in: [model/status.ts:16](https://github.com/autodesk-platform-services/aps-sdk-node/blob/e37e37c49eb213844e79f1c7dee5616930755060/oss/source/model/status.ts#L16)

Indicates whether this particular part uploaded to S3 is valid. Possible values are:
- `Pending` - No such part was uploaded to S3 for this index.
- `Unexpected` - The eTag of the part in S3 does not match the one provided in the request.
- `TooSmall` - A chunk uploaded to S3 is smaller than 5MB. Only the final chunk can be smaller than 5MB.
- `Unexpected+TooSmall` - The chunk is both too small and has an eTag mismatch.
- `Ok` - The chunk has no issues.’

## Enumeration Members

### Ok

**Ok**: `"Ok"`
Defined in: [model/status.ts:21](https://github.com/autodesk-platform-services/aps-sdk-node/blob/e37e37c49eb213844e79f1c7dee5616930755060/oss/source/model/status.ts#L21)

### Pending

**Pending**: `"Pending"`
Defined in: [model/status.ts:17](https://github.com/autodesk-platform-services/aps-sdk-node/blob/e37e37c49eb213844e79f1c7dee5616930755060/oss/source/model/status.ts#L17)

### TooSmall

**TooSmall**: `"TooSmall"`
Defined in: [model/status.ts:19](https://github.com/autodesk-platform-services/aps-sdk-node/blob/e37e37c49eb213844e79f1c7dee5616930755060/oss/source/model/status.ts#L19)

### Unexpected

**Unexpected**: `"Unexpected"`
Defined in: [model/status.ts:18](https://github.com/autodesk-platform-services/aps-sdk-node/blob/e37e37c49eb213844e79f1c7dee5616930755060/oss/source/model/status.ts#L18)

### UnexpectedTooSmall

**UnexpectedTooSmall**: `"Unexpected+TooSmall"`
Defined in: [model/status.ts:20](https://github.com/autodesk-platform-services/aps-sdk-node/blob/e37e37c49eb213844e79f1c7dee5616930755060/oss/source/model/status.ts#L20)

---
원본 문서: https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-oss/enumerations/Status
