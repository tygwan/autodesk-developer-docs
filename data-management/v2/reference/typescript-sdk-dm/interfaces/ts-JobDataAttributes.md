---
title: "JobDataAttributes"
url_path: reference/typescript-sdk-dm/interfaces/ts-JobDataAttributes
product: "Data Management API"
surface: "data-management-v2"
protocol: "TypeScript SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "typescript-sdk-dm"
---
# Interface: JobDataAttributes

Defined in: [model/jobDataAttributes.ts:8](https://github.com/autodesk-platform-services/aps-sdk-node/blob/eeaeb10a079bc82754d05778f6c83dafc47cac8a/datamanagement/source/model/jobDataAttributes.ts#L8)

Contains the properties that indicate the current status of the job.

## Export

JobDataAttributes

## Properties

### status?

`optional` **status**: `string`

Defined in: [model/jobDataAttributes.ts:14](https://github.com/autodesk-platform-services/aps-sdk-node/blob/eeaeb10a079bc82754d05778f6c83dafc47cac8a/datamanagement/source/model/jobDataAttributes.ts#L14)

Indicates the current status of the job, while the job is `queued`, `processing`, or `failed`. If the job is finished, the server returns a HTTP 303 status with the `location` parameter set to the URI to use to fetch the details of the download.

#### Memberof

JobDataAttributes

---
원본 문서: https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/interfaces/ts-JobDataAttributes
