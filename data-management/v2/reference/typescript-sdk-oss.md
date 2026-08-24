---
title: "TypeScript SDK Reference (OSS)"
url_path: reference/typescript-sdk-oss
product: "Data Management API"
surface: "data-management-v2"
protocol: "TypeScript SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "typescript-sdk-oss"
---
# TypeScript SDK Reference for OSS

## Resource Information

| **Package Name:** | @aps_sdk/oss |
| --- | --- |
| **Version:** | 1.0.0 |

## Installing this Library

```
npm i @aps_sdk/oss
```

## Learning Resources

### Source Code

The source code for this library is available at [https://github.com/autodesk-platform-services/aps-sdk-node](https://github.com/autodesk-platform-services/aps-sdk-node).

### Tutorials

The Simple Viewer tutorial on the [https://tutorials.autodesk.io/](https://tutorials.autodesk.io/tutorials/simple-viewer/) site illustrates how to use this library to store a model in a bucket. It also illustrates how to access the model for translation to the SVF2 format, so that the model can be displayed in a browser.

### Code Sample

```
import { ObjectDetails, OssClient } from "@aps_sdk/oss";

// Access token for authentication
const ACCESS_TOKEN = "...";
// Key for the bucket where the object will be stored
const BUCKET_KEY = "...";
// Key for the object to be uploaded
const OBJECT_KEY = "...";
// Source path or data of the object to be uploaded
const FILEPATH_OR_BUFFER ="...";

// Initialize the OSS Client
const ossClient = new OssClient();

// Upload the object to the specified bucket with the given object key and source
const ObjectDetails = await ossClient.uploadObject(BUCKET_KEY, OBJECT_KEY, FILEPATH_OR_BUFFER, { accessToken: ACCESS_TOKEN});

// Log the details of the uploaded object to the console
console.log(objectDetails);
```

See [https://github.com/autodesk-platform-services/aps-sdk-node/blob/main/samples/oss.ts](https://github.com/autodesk-platform-services/aps-sdk-node/blob/main/samples/oss.ts) for a complete code sample.

## SDK to REST API Cross Reference

| Operation Category | Operation | Method | HTTP Request |
| --- | --- | --- | --- |
| Buckets | Create Bucket | [createBucket](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-oss/classes/OssClient/#createbucket) | [POST /buckets](https://aps.autodesk.com/en/docs/data/v2/reference/http/buckets-POST/) |
| List Buckets | [getBuckets](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-oss/classes/OssClient/#getbuckets) | [GET /buckets](https://aps.autodesk.com/en/docs/data/v2/reference/http/buckets-GET/) |   |
| Get Bucket Details | [getBucketDetails](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-oss/classes/OssClient/#getbucketdetails) | [GET /buckets/{bucketKey}/details](https://aps.autodesk.com/en/docs/data/v2/reference/http/buckets-:bucketKey-details-GET/) |   |
| Delete Bucket | [deleteBucket](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-oss/classes/OssClient/#deletebucket) | [DELETE /buckets/{bucketKey}](https://aps.autodesk.com/en/docs/oauth/v2/reference/http/logout-GET/) |   |
| Objects | Delete Object | [deleteObject](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-oss/classes/OssClient/#deleteobject) | [DELETE /buckets/{bucketKey}/objects/{objectKey}](https://aps.autodesk.com/en/docs/data/v2/reference/http/buckets-:bucketKey-objects-:objectKey-DELETE/) |
| List Objects | [getObjects](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-oss/classes/OssClient/#getobjects) | [GET /buckets/{bucketKey}/objects](https://aps.autodesk.com/en/docs/data/v2/reference/http/buckets-:bucketKey-objects-GET/) |   |
| Get Object Details | [getObjectDetails](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-oss/classes/OssClient/#getobjectdetails) | [GET /buckets/{bucketKey}/objects/{objectKey}/details](https://aps.autodesk.com/en/docs/data/v2/reference/http/buckets-:bucketKey-objects-:objectKey-details-GET/) |   |
| Generate OSS Signed URL | [createSignedResource](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-oss/classes/OssClient/#createsignedresource) | [POST /buckets/{bucketKey}/objects/{objectKey}/signed](https://aps.autodesk.com/en/docs/data/v2/reference/http/buckets-:bucketKey-objects-:objectKey-signed-POST/) |   |
| Download Object Using Signed URL | [getSignedResource](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-oss/classes/OssClient/#getsignedresource) | [GET /signedresources/hash](https://aps.autodesk.com/en/docs/data/v2/reference/http/signedresources-:id-GET/) |   |
| Replace Object Using Signed URL | [uploadSignedResource](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-oss/classes/OssClient/#uploadsignedresource) | [PUT /signedresources/{hash}](https://aps.autodesk.com/en/docs/data/v2/reference/http/signedresources-:id-PUT/) |   |
| Delete Object Using Signed URL | [deleteSignedResource](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-oss/classes/OssClient/#deletesignedresource) | [DELETE /signedresources/{hash}](https://aps.autodesk.com/en/docs/data/v2/reference/http/signedresources-:id-DELETE/) |   |
| Upload Object Using Signed URL | [uploadSignedResourcesChunk](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-oss/classes/OssClient/#uploadsignedresourceschunk) | [PUT /signedresources/{hash}/resumable](https://aps.autodesk.com/en/docs/data/v2/reference/http/signedresources-:id-resumable-PUT/) |   |
| Copy Object | [copyTo](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-oss/classes/OssClient/#copyto) | [PUT /buckets/{bucketKey}/objects/{objectKey}/copyto/{newObjName}](https://aps.autodesk.com/en/docs/data/v2/reference/http/buckets-:bucketKey-objects-:objectKey-copyto-:newObjectKey-PUT/) |   |
| Generate Signed S3 Download URL | [signedS3Download](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-oss/classes/OssClient/#signeds3download) | [GET /buckets/{bucketKey}/objects/{objectKey}/signeds3download](https://aps.autodesk.com/en/docs/data/v2/reference/http/buckets-:bucketKey-objects-:objectKey-signeds3download-GET/) |   |
| Generate Signed S3 Upload URL | [signedS3Upload](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-oss/classes/OssClient/#signeds3upload) | [GET /buckets/{bucketKey}/objects/{objectKey}/signeds3upload](https://aps.autodesk.com/en/docs/data/v2/reference/http/buckets-:bucketKey-objects-:objectKey-signeds3upload-GET/) |   |
| Complete Upload to S3 Signed URL | [completeSignedS3Upload](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-oss/classes/OssClient/#completesigneds3upload) | [POST /buckets/{bucketKey}/objects/{objectKey}/signeds3upload](https://aps.autodesk.com/en/docs/data/v2/reference/http/buckets-:bucketKey-objects-:objectKey-signeds3upload-POST/) |   |
| Batch Generate Signed S3 Download URLs | [batchSignedS3Download](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-oss/classes/OssClient/#batchsigneds3download) | [POST/buckets/{bucketKey}/objects/batchsigneds3download](https://aps.autodesk.com/en/docs/data/v2/reference/http/buckets-:bucketKey-objects-batchsigneds3download-POST/) |   |
| Batch Generate Signed S3 Upload URLs | [batchSignedS3Upload](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-oss/classes/OssClient/#batchsigneds3upload) | [POST /buckets/{bucketKey}/objects/batchsigneds3upload](https://aps.autodesk.com/en/docs/data/v2/reference/http/buckets-:bucketKey-objects-:objectKey-batchsigneds3upload-POST/) |   |
| Complete Batch Upload to S3 Signed URLs | [batchCompleteUpload](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-oss/classes/OssClient/#batchcompleteupload) | [POST buckets/{bucketKey}/objects/batchcompleteupload](https://aps.autodesk.com/en/docs/data/v2/reference/http/buckets-:bucketKey-objects-:objectKey-batchcompleteupload-POST/) |   |

## SDK-Only Operations

| Operation Category | Operation | Method | Description |
| --- | --- | --- | --- |
| Objects | Upload an Object | [uploadObject](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-oss/classes/OssClient/#uploadobject) | Uploads a file or stream by transparently handling operations
like obtaining signed URLs, chunking large files for optimal
transfer, and notifying OSS to assemble the uploaded parts. |
| Download an Object | [downloadObject](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-oss/classes/OssClient/#downloadobject) | Downloads a file by transparently handling operations
like obtaining signed download URLs. |   |

---
원본 문서: https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-oss
