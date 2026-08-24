---
title: ".NET SDK Reference (OSS)"
url_path: reference/dot-net-sdk-oss
product: "Data Management API"
surface: "data-management-v2"
protocol: ".NET SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "dot-net-sdk-oss"
---
# .NET SDK Reference for OSS

## Resource Information

| **Namespace:** | Autodesk.Oss |
| --- | --- |
| **Assembly:** | Autodesk.Oss.dll |
| **Version:** | 1.0.0 |

## Installing this Library

The recommended way of installing this library to your .NET project is to use the NuGet Package Manager.
- Within the NuGet Package Manager locate the [Autodesk.Oss library](https://www.nuget.org/packages/Autodesk.OSS).
- Follow the instructions on the [NuGet documentation site](https://learn.microsoft.com/en-us/nuget/consume-packages/install-use-packages-visual-studio#find-and-install-a-package) to install the library.

Alternatively, from Visual Studio IDE or CLI tools:

```
dotnet add package Autodesk.Oss
```

## Learning Resources

### Source Code

The source code for this library is available at [https://github.com/autodesk-platform-services/aps-sdk-net](https://github.com/autodesk-platform-services/aps-sdk-net).

### Tutorials

The Simple Viewer tutorial on the [https://tutorials.autodesk.io/](https://tutorials.autodesk.io/tutorials/simple-viewer/) site illustrates how to use this library to store a model in a bucket. It also illustrates how to access the model for translation to the SVF format, so that the model can be displayed in a browser.

### Code Sample

```
string token = "<token>";

string bucketKey = "<bucket key>";

string objectName = "<object name>";

string sourceToUpload = "<path to source file>";

OssClient ossClient = null!;

public void Initialise()

{

// Instantiate SDK manager as below.

// You can also optionally pass configurations, logger, etc.

SDKManager sdkManager = SdkManagerBuilder

.Create() // Creates SDK Manager Builder itself.

.Build();

// Instantiate OssClient using the created SDK manager

ossClient = new OssClient(sdkManager);

}

public async Task Upload()

{

//The below helper method takes care of the complete upload process, i.e.

// the steps 2 to 4 in this link (https://aps.autodesk.com/en/docs/data/v2/tutorials/app-managed-bucket/)

ObjectDetails objectDetails = await ossClient.Upload(bucketKey, objectName, sourceToUpload, accessToken: token, CancellationToken.None);

// query for required properties

string objectId = objectDetails.ObjectId;

string objectKey = objectDetails.ObjectKey;

}
```

## REST API to SDK Cross Reference

| Operation Category | Operation | HTTP Request | Method |
| --- | --- | --- | --- |
| Buckets | Create Bucket | [POST /buckets](https://aps.autodesk.com/en/docs/data/v2/reference/http/buckets-POST/) | [CreateBucketAsync](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-oss/Autodesk.Oss/OssClient#Autodesk_Oss_OssClient_CreateBucketAsync_System_String_Autodesk_Oss_Model_Region_Autodesk_Oss_Model_CreateBucketsPayload_System_Boolean_) |
| List Buckets | [GET /buckets](https://aps.autodesk.com/en/docs/data/v2/reference/http/buckets-GET/) | [GetBucketsAsync](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-oss/Autodesk.Oss/OssClient#Autodesk_Oss_OssClient_GetBucketsAsync_System_String_System_Nullable_Autodesk_Oss_Model_Region__System_Nullable_System_Int32__System_String_System_Boolean_) |   |
| Get Bucket Details | [GET /buckets/{bucketKey}/details](https://aps.autodesk.com/en/docs/data/v2/reference/http/buckets-:bucketKey-details-GET/) | [GetBucketDetailsAsync](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-oss/Autodesk.Oss/OssClient#Autodesk_Oss_OssClient_GetBucketDetailsAsync_System_String_System_String_System_Boolean_) |   |
| Delete Bucket | [DELETE /buckets/{bucketKey}](https://aps.autodesk.com/en/docs/oauth/v2/reference/http/logout-GET/) | [DeleteBucketAsync](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-oss/Autodesk.Oss/OssClient#Autodesk_Oss_OssClient_DeleteBucketAsync_System_String_System_String_System_Boolean_) |   |
| Objects | Delete Object | [DELETE /buckets/{bucketKey}/objects/{objectKey}](https://aps.autodesk.com/en/docs/data/v2/reference/http/buckets-:bucketKey-objects-:objectKey-DELETE/) | [DeleteObjectAsync](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-oss/Autodesk.Oss/OssClient#Autodesk_Oss_OssClient_DeleteObjectAsync_System_String_System_String_System_String_System_Boolean_) |
| List Objects | [GET /buckets/{bucketKey}/objects](https://aps.autodesk.com/en/docs/data/v2/reference/http/buckets-:bucketKey-objects-GET/) | [GetObjectsAsync](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-oss/Autodesk.Oss/OssClient#Autodesk_Oss_OssClient_GetObjectsAsync_System_String_System_String_System_Nullable_System_Int32__System_String_System_String_System_Boolean_) |   |
| Get Object Details | [GET /buckets/{bucketKey}/objects/{objectKey}/details](https://aps.autodesk.com/en/docs/data/v2/reference/http/buckets-:bucketKey-objects-:objectKey-details-GET/) | [GetObjectDetailsAsync](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-oss/Autodesk.Oss/OssClient#Autodesk_Oss_OssClient_GetObjectDetailsAsync_System_String_System_String_System_String_System_Nullable_System_DateTime__System_Nullable_Autodesk_Oss_Model_With__System_Boolean_) |   |
| Generate OSS Signed URL | [POST /buckets/{bucketKey}/objects/{objectKey}/signed](https://aps.autodesk.com/en/docs/data/v2/reference/http/buckets-:bucketKey-objects-:objectKey-signed-POST/) | [CreateSignedResourceAsync](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-oss/Autodesk.Oss/OssClient#Autodesk_Oss_OssClient_CreateSignedResourceAsync_System_String_System_String_System_String_Autodesk_Oss_Model_CreateSignedResource_System_Nullable_Autodesk_Oss_Model_Access__System_Nullable_System_Boolean__System_Boolean_) |   |
| Download Object Using Signed URL | [GET /signedresources/hash](https://aps.autodesk.com/en/docs/data/v2/reference/http/signedresources-:id-GET/) | [GetSignedResourceAsync](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-oss/Autodesk.Oss/OssClient#Autodesk_Oss_OssClient_GetSignedResourceAsync_System_String_System_String_System_String_System_String_System_Nullable_System_DateTime__System_String_System_Nullable_Autodesk_Oss_Model_Region__System_String_System_String_System_Boolean_) |   |
| Replace Object Using Signed URL | [PUT /signedresources/{hash}](https://aps.autodesk.com/en/docs/data/v2/reference/http/signedresources-:id-PUT/) | [UploadSignedResourceAsync](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-oss/Autodesk.Oss/OssClient#Autodesk_Oss_OssClient_UploadSignedResourceAsync_System_String_System_String_System_Nullable_System_Int32__System_IO_Stream_System_String_System_String_System_Nullable_Autodesk_Oss_Model_Region__System_String_System_Boolean_) |   |
| Delete Object Using Signed URL | [DELETE /signedresources/{hash}](https://aps.autodesk.com/en/docs/data/v2/reference/http/signedresources-:id-DELETE/) | [DeleteSignedResourceAsync](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-oss/Autodesk.Oss/OssClient#Autodesk_Oss_OssClient_DeleteSignedResourceAsync_System_String_System_String_System_Nullable_Autodesk_Oss_Model_Region__System_Boolean_) |   |
| Upload Object Using Signed URL | [PUT /signedresources/{hash}/resumable](https://aps.autodesk.com/en/docs/data/v2/reference/http/signedresources-:id-resumable-PUT/) | [UploadSignedResourcesChunkAsync](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-oss/Autodesk.Oss/OssClient#Autodesk_Oss_OssClient_UploadSignedResourcesChunkAsync_System_String_System_String_System_String_System_String_System_IO_Stream_System_String_System_String_System_Nullable_Autodesk_Oss_Model_Region__System_Boolean_) |   |
| Copy Object | [PUT /buckets/{bucketKey}/objects/{objectKey}/copyto/{newObjName}](https://aps.autodesk.com/en/docs/data/v2/reference/http/buckets-:bucketKey-objects-:objectKey-copyto-:newObjectKey-PUT/) | [CopyToAsync](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-oss/Autodesk.Oss/OssClient#Autodesk_Oss_OssClient_CopyToAsync_System_String_System_String_System_String_System_String_System_Boolean_) |   |
| Generate Signed S3 Download URL | [GET /buckets/{bucketKey}/objects/{objectKey}/signeds3download](https://aps.autodesk.com/en/docs/data/v2/reference/http/buckets-:bucketKey-objects-:objectKey-signeds3download-GET/) | [SignedS3DownloadAsync](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-oss/Autodesk.Oss/OssClient#Autodesk_Oss_OssClient_SignedS3DownloadAsync_System_String_System_String_System_String_System_String_System_Nullable_System_DateTime__System_String_System_String_System_String_System_String_System_Nullable_System_Boolean__System_Nullable_System_Int32__System_Nullable_System_Boolean__System_Boolean_) |   |
| Generate Signed S3 Upload URL | [GET /buckets/{bucketKey}/objects/{objectKey}/signeds3upload](https://aps.autodesk.com/en/docs/data/v2/reference/http/buckets-:bucketKey-objects-:objectKey-signeds3upload-GET/) | [SignedS3UploadAsync](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-oss/Autodesk.Oss/OssClient#Autodesk_Oss_OssClient_SignedS3UploadAsync_System_String_System_String_System_String_System_Nullable_System_Int32__System_Nullable_System_Int32__System_String_System_Nullable_System_Int32__System_Nullable_System_Boolean__System_Boolean_) |   |
| Complete Upload to S3 Signed URL | [POST /buckets/{bucketKey}/objects/{objectKey}/signeds3upload](https://aps.autodesk.com/en/docs/data/v2/reference/http/buckets-:bucketKey-objects-:objectKey-signeds3upload-POST/) | [CompleteSignedS3UploadAsync](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-oss/Autodesk.Oss/OssClient#Autodesk_Oss_OssClient_CompleteSignedS3UploadAsync_System_String_System_String_System_String_System_String_Autodesk_Oss_Model_Completes3uploadBody_System_String_System_String_System_String_System_String_System_String_System_Boolean_) |   |
| Batch Generate Signed S3 Download URLs | [POST/buckets/{bucketKey}/objects/batchsigneds3download](https://aps.autodesk.com/en/docs/data/v2/reference/http/buckets-:bucketKey-objects-batchsigneds3download-POST/) | [BatchSignedS3DownloadAsync](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-oss/Autodesk.Oss/OssClient#Autodesk_Oss_OssClient_BatchSignedS3DownloadAsync_System_String_System_String_Autodesk_Oss_Model_Batchsigneds3downloadObject_System_Nullable_System_Boolean__System_Nullable_System_Int32__System_Boolean_) |   |
| Batch Generate Signed S3 Upload URLs | [POST /buckets/{bucketKey}/objects/batchsigneds3upload](https://aps.autodesk.com/en/docs/data/v2/reference/http/buckets-:bucketKey-objects-:objectKey-batchsigneds3upload-POST/) | [BatchSignedS3UploadAsync](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-oss/Autodesk.Oss/OssClient#Autodesk_Oss_OssClient_BatchSignedS3UploadAsync_System_String_System_String_Autodesk_Oss_Model_Batchsigneds3uploadObject_System_Nullable_System_Boolean__System_Nullable_System_Int32__System_Boolean_) |   |
| Complete Batch Upload to S3 Signed URLs | [POST buckets/{bucketKey}/objects/batchcompleteupload](https://aps.autodesk.com/en/docs/data/v2/reference/http/buckets-:bucketKey-objects-:objectKey-batchcompleteupload-POST/) | [BatchCompleteUploadAsync](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-oss/Autodesk.Oss/OssClient#Autodesk_Oss_OssClient_BatchCompleteUploadAsync_System_String_System_String_Autodesk_Oss_Model_BatchcompleteuploadObject_System_Boolean_) |   |

## SDK-Only Operations

| Operation Category | Operation | Method | Description |
| --- | --- | --- | --- |
| Objects | Upload a Stream | [Upload (Upload a stream)](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-oss/Autodesk.Oss/OssClient#Autodesk_Oss_OssClient_Upload_System_String_System_String_System_IO_Stream_System_String_System_Threading_CancellationToken_System_String_System_String_System_IProgress_System_Int32__) | Uploads a stream by transparently handling operations like
obtaining signed URLs, chunking large files for optimal transfer,
and notifying OSS to assemble the uploaded parts. |
| Upload a File | [Upload (Upload a file)](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-oss/Autodesk.Oss/OssClient#Autodesk_Oss_OssClient_Upload_System_String_System_String_System_String_System_String_System_Threading_CancellationToken_System_String_System_String_System_IProgress_System_Int32__) | Uploads a file by transparently handling operations like
obtaining signed URLs, chunking large files for optimal transfer,
and notifying OSS to assemble the uploaded parts. |   |
| Download a File | [Download](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-oss/Autodesk.Oss/OssClient#Autodesk_Oss_OssClient_Download_System_String_System_String_System_String_System_String_System_Threading_CancellationToken_System_String_System_String_System_IProgress_System_Int32__) | Downloads a file by transparently handling operations
like obtaining signed download URLs. |   |

---
원본 문서: https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-oss
