---
title: "OssClient Class"
url_path: reference/dot-net-sdk-oss/Autodesk.Oss/OssClient
product: "Data Management API"
surface: "data-management-v2"
protocol: ".NET SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "dot-net-sdk-oss"
---
# Class OssClient

Namespace: [Autodesk.Oss](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-oss/Autodesk.Oss)Assembly: Autodesk.Oss.dll

Represents the OSS client.

```
public class OssClient
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ←
[OssClient](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-oss/Autodesk.Oss/OssClient)

## Inherited Members

[object.Equals(object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)),
[object.Equals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)),
[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode),
[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype),
[object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone),
[object.ReferenceEquals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals),
[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

# Constructors

## OssClient(SDKManager)

**Operation:** Initializes a new instance of the class.

```
public OssClient(SDKManager sdkManager)
```

### Parameters

`sdkManager` SDKManager

The SDK manager.

# Properties

## oSSFileTransfer

**Operation:** The OSS file transfer object.

```
public OSSFileTransfer oSSFileTransfer { get; set; }
```

### Property Value

[OSSFileTransfer](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-oss/Autodesk.Oss/OssClient/Autodesk.Oss.OSSFileTransfer)

# Methods

## BatchCompleteUploadAsync(string, string, BatchcompleteuploadObject, bool)

**Operation:** Complete Batch Upload to S3 Signed URLs

```
public Task<BatchcompleteuploadResponse> BatchCompleteUploadAsync(string accessToken, string bucketKey, BatchcompleteuploadObject requests, bool throwOnError = true)
```

Requests OSS to start reconstituting the set of objects that were uploaded using signed S3 upload URLs. You must call this operation only after all the objects have been uploaded.

You can specify up to 25 objects in this operation.

### Parameters

`accessToken` [string](https://learn.microsoft.com/dotnet/api/system.string)

An access token obtained by a call to GetThreeLeggedTokenAsync() or GetTwoLeggedTokenAsync().

`bucketKey` [string](https://learn.microsoft.com/dotnet/api/system.string)

The bucket key of the bucket that contains the objects you are operating on.

`requests` [BatchcompleteuploadObject](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-oss/Autodesk.Oss.Model/BatchcompleteuploadObject)

The request payload for the Complete Batch Upload to S3 Signed URLs operation.
(optional)

`throwOnError` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Specifies whether to throw an error if the API call fails.
(optional)

### Returns

[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[BatchcompleteuploadResponse](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-oss/Autodesk.Oss.Model/BatchcompleteuploadResponse)>

### Exceptions

[OssApiException](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-oss/Autodesk.Oss/OssApiException)

Thrown when the SDK fails to make an API call.

## BatchSignedS3DownloadAsync(string, string, Batchsigneds3downloadObject, bool?, int?, bool)

**Operation:** Batch Generate Signed S3 Download URLs

```
public Task<Batchsigneds3downloadResponse> BatchSignedS3DownloadAsync(string accessToken, string bucketKey, Batchsigneds3downloadObject requests, bool? publicResourceFallback = null, int? minutesExpiration = null, bool throwOnError = true)
```

Creates and returns signed URLs to download a set of objects directly from S3. These signed URLs expire in 2 minutes by default, but you can change this duration if needed. You must start download the objects before the signed URLs expire. The download itself can take longer.

Only the application that owns the bucket can call this operation. All other applications that call this operation will receive a “403 Forbidden” error.

### Parameters

`accessToken` [string](https://learn.microsoft.com/dotnet/api/system.string)

An access token obtained by a call to GetThreeLeggedTokenAsync() or GetTwoLeggedTokenAsync().

`bucketKey` [string](https://learn.microsoft.com/dotnet/api/system.string)

The bucket key of the bucket that contains the objects you are operating on.

`requests` [Batchsigneds3downloadObject](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-oss/Autodesk.Oss.Model/Batchsigneds3downloadObject)

The request payload for the Complete Batch S3 download operation.

`publicResourceFallback` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)?

Specifies how to return the signed URLs, in case the object was uploaded in chunks, and assembling of chunks is not yet complete.
- `true` : Return a single signed OSS URL.
- `false` : (Default) Return multiple signed S3 URLs, where each URL points to a chunk. (optional)

`minutesExpiration` [int](https://learn.microsoft.com/dotnet/api/system.int32)?

The time window (in minutes) the signed URL will remain usable. Acceptable values = 1-60 minutes. Default = 2 minutes.

**Tip:** Use the smallest possible time window to minimize exposure of the signed URL. (optional)

`throwOnError` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Specifies whether to throw an error if the API call fails.
(optional)

### Returns

[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Batchsigneds3downloadResponse](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-oss/Autodesk.Oss.Model/Batchsigneds3downloadResponse)>

### Exceptions

[OssApiException](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-oss/Autodesk.Oss/OssApiException)

Thrown when the SDK fails to make an API call.

## BatchSignedS3UploadAsync(string, string, Batchsigneds3uploadObject, bool?, int?, bool)

**Operation:** Batch Generate Signed S3 Upload URLs

```
public Task<Batchsigneds3uploadResponse> BatchSignedS3UploadAsync(string accessToken, string bucketKey, Batchsigneds3uploadObject requests, bool? useAcceleration = null, int? minutesExpiration = null, bool throwOnError = true)
```

Creates and returns signed URLs to upload a set of objects directly to S3. These signed URLs expire in 2 minutes by default, but you can change this duration if needed. You must start uploading the objects before the signed URLs expire. The upload itself can take longer.

Only the application that owns the bucket can call this operation. All other applications that call this operation will receive a “403 Forbidden” error.

If required, you can request an array of signed URLs for each object, which lets you upload the objects in chunks. Once you upload all chunks you must call the [Complete Batch Upload to S3 Signed URL](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-oss/Autodesk.Oss/OssClient#Autodesk_Oss_OssClient_BatchCompleteUploadAsync_System_String_System_String_Autodesk_Oss_Model_BatchcompleteuploadObject_System_Boolean_) operation to indicate completion. This instructs OSS to assemble the chunks and reconstitute the object on OSS. You must call this operation even if you requested a single signed URL for an object.

If an upload fails after the validity period of a signed URL has elapsed, you can call this operation again to obtain fresh signed URLs. However, you must use the same `uploadKey` that was returned when you originally called this operation.

### Parameters

`accessToken` [string](https://learn.microsoft.com/dotnet/api/system.string)

An access token obtained by a call to GetThreeLeggedTokenAsync() or GetTwoLeggedTokenAsync().

`bucketKey` [string](https://learn.microsoft.com/dotnet/api/system.string)

The bucket key of the bucket that contains the objects you are operating on.

`requests` [Batchsigneds3uploadObject](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-oss/Autodesk.Oss.Model/Batchsigneds3uploadObject)

The request payload for a Batch Generate Signed S3 Upload URLs operation.

`useAcceleration` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)?

`true` : (Default) Generates a faster S3 signed URL using Transfer Acceleration.

`false`: Generates a standard S3 signed URL. (optional)

`minutesExpiration` [int](https://learn.microsoft.com/dotnet/api/system.int32)?

The time window (in minutes) the signed URL will remain usable. Acceptable values = 1-60 minutes. Default = 2 minutes.

**Tip:** Use the smallest possible time window to minimize exposure of the signed URL. (optional)

`throwOnError` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Specifies whether to throw an error if the API call fails.
(optional)

### Returns

[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Batchsigneds3uploadResponse](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-oss/Autodesk.Oss.Model/Batchsigneds3uploadResponse)>

### Exceptions

[OssApiException](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-oss/Autodesk.Oss/OssApiException)

Thrown when the SDK fails to make an API call.

## CompleteSignedS3UploadAsync(string, string, string, string, Completes3uploadBody, string, string, string, string, string, bool)

**Operation:** Complete Upload to S3 Signed URL

```
public Task<HttpResponseMessage> CompleteSignedS3UploadAsync(string accessToken, string bucketKey, string objectKey, string contentType, Completes3uploadBody body, string xAdsMetaContentType = null, string xAdsMetaContentDisposition = null, string xAdsMetaContentEncoding = null, string xAdsMetaCacheControl = null, string xAdsUserDefinedMetadata = null, bool throwOnError = true)
```

Requests OSS to assemble and reconstitute the object that was uploaded using signed S3 upload URL. You must call this operation only after all parts/chunks of the object has been uploaded.

### Parameters

`accessToken` [string](https://learn.microsoft.com/dotnet/api/system.string)

An access token obtained by a call to GetThreeLeggedTokenAsync() or GetTwoLeggedTokenAsync().

`bucketKey` [string](https://learn.microsoft.com/dotnet/api/system.string)

The bucket key of the bucket that contains the objects you are operating on.

`objectKey` [string](https://learn.microsoft.com/dotnet/api/system.string)

The URL-encoded human friendly name of the object.

`contentType` [string](https://learn.microsoft.com/dotnet/api/system.string)

Must be `application/json`.

`body` [Completes3uploadBody](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-oss/Autodesk.Oss.Model/Completes3uploadBody)

The request payload for a Complete Upload to S3 Signed URL operation.

`xAdsMetaContentType` [string](https://learn.microsoft.com/dotnet/api/system.string)

The Content-Type value for the uploaded object to record within OSS. (optional)

`xAdsMetaContentDisposition` [string](https://learn.microsoft.com/dotnet/api/system.string)

The Content-Disposition value for the uploaded object to record within OSS. (optional)

`xAdsMetaContentEncoding` [string](https://learn.microsoft.com/dotnet/api/system.string)

The Content-Encoding value for the uploaded object to record within OSS. (optional)

`xAdsMetaCacheControl` [string](https://learn.microsoft.com/dotnet/api/system.string)

The Cache-Control value for the uploaded object to record within OSS. (optional)

`xAdsUserDefinedMetadata` [string](https://learn.microsoft.com/dotnet/api/system.string)

Custom metadata to be stored with the object, which can be retrieved later on download or when retrieving object details. Must be a JSON object that is less than 100 bytes. (optional)

`throwOnError` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Specifies whether to throw an error if the API call fails.
(optional)

### Returns

[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[HttpResponseMessage](https://learn.microsoft.com/dotnet/api/system.net.http.httpresponsemessage)>

### Exceptions

[OssApiException](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-oss/Autodesk.Oss/OssApiException)

Thrown when the SDK fails to make an API call.

## CopyToAsync(string, string, string, string, bool)

**Operation:** Copy Object

```
public Task<ObjectDetails> CopyToAsync(string accessToken, string bucketKey, string objectKey, string newObjName, bool throwOnError = true)
```

Creates a copy of an object within the bucket.

### Parameters

`accessToken` [string](https://learn.microsoft.com/dotnet/api/system.string)

An access token obtained by a call to GetThreeLeggedTokenAsync() or GetTwoLeggedTokenAsync().

`bucketKey` [string](https://learn.microsoft.com/dotnet/api/system.string)

The bucket key of the bucket that contains the objects you are operating on.

`objectKey` [string](https://learn.microsoft.com/dotnet/api/system.string)

The URL-encoded human friendly name of the object.

`newObjName` [string](https://learn.microsoft.com/dotnet/api/system.string)

A URL-encoded human friendly name to identify the copied object.

`throwOnError` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Specifies whether to throw an error if the API call fails.
(optional)

### Returns

[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[ObjectDetails](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-oss/Autodesk.Oss.Model/ObjectDetails)>

### Exceptions

[OssApiException](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-oss/Autodesk.Oss/OssApiException)

Thrown when the SDK fails to make an API call.

## CreateBucketAsync(string, Region, CreateBucketsPayload, bool)

**Operation:** Create Bucket

```
public Task<Bucket> CreateBucketAsync(string accessToken, Region xAdsRegion, CreateBucketsPayload bucketsPayload, bool throwOnError = true)
```

Creates a bucket.

Buckets are virtual container within the Object Storage Service (OSS), which you can use to store and manage objects (files) in the cloud. The application creating the bucket is the owner of the bucket.

**Note:** Do not use this operation to create buckets for BIM360 Document Management. Use [CreateStorageAsync](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement/DataManagementClient#Autodesk_DataManagement_DataManagementClient_CreateStorageAsync_System_String_Autodesk_DataManagement_Model_StoragePayload_System_String_System_String_System_Boolean_) instead. For details, see [Upload Files to BIM 360 Document Management](https://aps.autodesk.com/en/docs/bim360/v1/tutorials/document-management/upload-document).

### Parameters

`accessToken` [string](https://learn.microsoft.com/dotnet/api/system.string)

An access token obtained by a call to GetThreeLeggedTokenAsync() or GetTwoLeggedTokenAsync().

`xAdsRegion` [Region](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-oss/Autodesk.Oss.Model/Region)

Specifies where the bucket must be stored. Possible values are:
- `US` - (Default) Data center for the US region.
- `EMEA` - Data center for the European Union, Middle East, and Africa.
- `APAC` - (Beta) Data center for Australia. **Note:** Beta features are subject to change. Please do not use in production environments. (optional)

`bucketsPayload` [CreateBucketsPayload](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-oss/Autodesk.Oss.Model/CreateBucketsPayload)

The payload containing bucket creation details.

`throwOnError` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Specifies whether to throw an error if the API call fails.
(optional)

### Returns

[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Bucket](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-oss/Autodesk.Oss.Model/Bucket)>

### Exceptions

[OssApiException](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-oss/Autodesk.Oss/OssApiException)

Thrown when the SDK fails to make an API call.

## CreateSignedResourceAsync(string, string, string, CreateSignedResource, Access?, bool?, bool)

**Operation:** Generate OSS Signed URL

```
public Task<CreateObjectSigned> CreateSignedResourceAsync(string accessToken, string bucketKey, string objectKey, CreateSignedResource createSignedResource, Access? access = null, bool? useCdn = null, bool throwOnError = true)
```

Generates a signed URL that can be used to download or upload an object within the specified expiration time. If the object the signed URL points to is deleted or expires before the signed URL expires, the signed URL will no longer be valid.

In addition to this operation that generates OSS signed URLs, OSS provides operations to generate S3 signed URLs. S3 signed URLs allow direct upload/download from S3 but are restricted to bucket owners. OSS signed URLs also allow upload/download and can be configured for access by other applications, making them suitable for sharing objects across applications.

Only the application that owns the bucket containing the object can call this operation.

### Parameters

`accessToken` [string](https://learn.microsoft.com/dotnet/api/system.string)

An access token obtained by a call to GetThreeLeggedTokenAsync() or GetTwoLeggedTokenAsync().

`bucketKey` [string](https://learn.microsoft.com/dotnet/api/system.string)

The bucket key of the bucket that contains the objects you are operating on.

`objectKey` [string](https://learn.microsoft.com/dotnet/api/system.string)

The URL-encoded human friendly name of the object.

`createSignedResource` [CreateSignedResource](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-oss/Autodesk.Oss.Model/CreateSignedResource)

The request payload for the Generate OSS Signed URL operation.

`access` [Access](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-oss/Autodesk.Oss.Model/Access)?

Specifies the type of access for signed resource Possible values: read, write, readwrite Default value: read
(optional)

`useCdn` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)?

`true` : Returns a Cloudfront URL to the object instead of an Autodesk URL (one that points to a location on https://developer.api.autodesk.com). Applications can interact with the Cloudfront URL exactly like with any classic public resource in OSS. They can use GET requests to download objects or PUT requests to upload objects.

`false` : (Default) Returns an Autodesk URL (one that points to a location on https://developer.api.autodesk.com) to the object. (optional)

`throwOnError` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Specifies whether to throw an error if the API call fails.
(optional)

### Returns

[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[CreateObjectSigned](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-oss/Autodesk.Oss.Model/CreateObjectSigned)>

### Exceptions

[OssApiException](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-oss/Autodesk.Oss/OssApiException)

Thrown when the SDK fails to make an API call.

## DeleteBucketAsync(string, string, bool)

**Operation:** Delete Bucket

```
public Task<HttpResponseMessage> DeleteBucketAsync(string accessToken, string bucketKey, bool throwOnError = true)
```

Deletes the specified bucket. Only the application that owns the bucket can call this operation. All other applications that call this operation will receive a “403 Forbidden” error.

The initial processing of a bucket deletion request can be time-consuming. So, we recommend only deleting buckets containing a few objects, like those typically used for acceptance testing and prototyping.

**Note:** Bucket keys will not be immediately available for reuse.

### Parameters

`accessToken` [string](https://learn.microsoft.com/dotnet/api/system.string)

An access token obtained by a call to GetThreeLeggedTokenAsync() or GetTwoLeggedTokenAsync().

`bucketKey` [string](https://learn.microsoft.com/dotnet/api/system.string)

The bucket key of the bucket to delete.

`throwOnError` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Specifies whether to throw an error if the API call fails.
(optional)

### Returns

[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[HttpResponseMessage](https://learn.microsoft.com/dotnet/api/system.net.http.httpresponsemessage)>

### Exceptions

[OssApiException](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-oss/Autodesk.Oss/OssApiException)

Thrown when the SDK fails to make an API call.

## DeleteObjectAsync(string, string, string, bool)

**Operation:** Delete Object

```
public Task<HttpResponseMessage> DeleteObjectAsync(string accessToken, string bucketKey, string objectKey, bool throwOnError = true)
```

Deletes an object from the bucket.

### Parameters

`accessToken` [string](https://learn.microsoft.com/dotnet/api/system.string)

An access token obtained by a call to GetThreeLeggedTokenAsync() or GetTwoLeggedTokenAsync().

`bucketKey` [string](https://learn.microsoft.com/dotnet/api/system.string)

The bucket key of the bucket that contains the objects you are operating on.

`objectKey` [string](https://learn.microsoft.com/dotnet/api/system.string)

The URL-encoded human friendly name of the object.

`throwOnError` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Specifies whether to throw an error if the API call fails.
(optional)

### Returns

[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[HttpResponseMessage](https://learn.microsoft.com/dotnet/api/system.net.http.httpresponsemessage)>

### Exceptions

[OssApiException](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-oss/Autodesk.Oss/OssApiException)

Thrown when the SDK fails to make an API call.

## DeleteSignedResourceAsync(string, string, Region?, bool)

**Operation:** Delete Object Using Signed URL

```
public Task<HttpResponseMessage> DeleteSignedResourceAsync(string accessToken, string hash, Region? region = null, bool throwOnError = true)
```

Delete an object using an OSS signed URL to access it.

Only applications that own the bucket containing the object can call this operation.

### Parameters

`accessToken` [string](https://learn.microsoft.com/dotnet/api/system.string)

An access token obtained by a call to GetThreeLeggedTokenAsync() or GetTwoLeggedTokenAsync().

`hash` [string](https://learn.microsoft.com/dotnet/api/system.string)

The ID component of the signed URL.

**Note:** The signed URL returned by [Generate OSS Signed URL](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-oss/Autodesk.Oss/OssClient#Autodesk_Oss_OssClient_CreateSignedResourceAsync_System_String_System_String_System_Nullable_Autodesk_Oss_Model_Access__System_Nullable_System_Boolean__Autodesk_Oss_Model_CreateSignedResource_System_String_System_Boolean_) contains `hash` as a URI parameter.

`region` [Region](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-oss/Autodesk.Oss.Model/Region)?

Specifies where the bucket containing the object stored. Possible values are:
- `US` - (Default) Data center for the US region.
- `EMEA` - Data center for the European Union, Middle East, and Africa.
- `APAC` - (Beta) Data center for Australia.

**Note:** Beta features are subject to change. Please do not use in production environments. (optional)

`throwOnError` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Specifies whether to throw an error if the API call fails.
(optional)

### Returns

[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[HttpResponseMessage](https://learn.microsoft.com/dotnet/api/system.net.http.httpresponsemessage)>

### Exceptions

[OssApiException](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-oss/Autodesk.Oss/OssApiException)

Thrown when the SDK fails to make an API call.

## Download(string, string, string, string, CancellationToken, string, string, IProgress<int>)

**Operation:** Dwonload a File

```
public Task Download(string bucketKey, string objectKey, string filePath, string accessToken, CancellationToken cancellationToken, string projectScope = "", string requestIdPrefix = "", IProgress<int> progress = null)
```

Downloads a file by transparently handling operations like obtaining signed download URLs and chunking large files for optimal transfer.

### Parameters

`bucketKey` [string](https://learn.microsoft.com/dotnet/api/system.string)

The bucket key of the bucket that contains the objects you are operating on.

`objectKey` [string](https://learn.microsoft.com/dotnet/api/system.string)

The URL-encoded human friendly name of the object.

`filePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The Path of the file to be downloaded.

`accessToken` [string](https://learn.microsoft.com/dotnet/api/system.string)

An access token obtained by a call to GetThreeLeggedTokenAsync() or GetTwoLeggedTokenAsync().

`cancellationToken` [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)

A token to monitor cancellation requests.
(optional)

`projectScope` [string](https://learn.microsoft.com/dotnet/api/system.string)

A project scope to which the upload should be limited.
(optional)

`requestIdPrefix` [string](https://learn.microsoft.com/dotnet/api/system.string)

A prefix to be added to the request ID.
(optional)

`progress` [IProgress](https://learn.microsoft.com/dotnet/api/system.iprogress-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)>

An IProgress object to report upload progress.
(optional)

### Returns

[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task)

### Exceptions

[OssApiException](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-oss/Autodesk.Oss/OssApiException)

Thrown when the SDK fails to make an API call.

## GetBucketDetailsAsync(string, string, bool)

**Operation:** Get Bucket Details

```
public Task<Bucket> GetBucketDetailsAsync(string accessToken, string bucketKey, bool throwOnError = true)
```

Returns detailed information about the specified bucket.

**Note:** Only the application that owns the bucket can call this operation. All other applications that call this operation will receive a “403 Forbidden” error.

### Parameters

`accessToken` [string](https://learn.microsoft.com/dotnet/api/system.string)

An access token obtained by a call to GetThreeLeggedTokenAsync() or GetTwoLeggedTokenAsync().

`bucketKey` [string](https://learn.microsoft.com/dotnet/api/system.string)

The bucket key of the bucket to query.

`throwOnError` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Specifies whether to throw an error if the API call fails.

### Returns

[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Bucket](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-oss/Autodesk.Oss.Model/Bucket)>

### Exceptions

[OssApiException](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-oss/Autodesk.Oss/OssApiException)

Thrown when the SDK fails to make an API call.

## GetBucketsAsync(string, Region?, int?, string, bool)

**Operation:** List Buckets

```
public Task<Buckets> GetBucketsAsync(string accessToken, Region? region = null, int? limit = null, string startAt = null, bool throwOnError = true)
```

Returns a list of buckets owned by the application.

### Parameters

`accessToken` [string](https://learn.microsoft.com/dotnet/api/system.string)

An access token obtained by a call to GetThreeLeggedTokenAsync() or GetTwoLeggedTokenAsync().

`region` [Region](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-oss/Autodesk.Oss.Model/Region)?

Specifies where the bucket containing the object stored. Possible values are:
- `US` - (Default) Data center for the US region.
- `EMEA` - Data center for the European Union, Middle East, and Africa.
- `APAC` - (Beta) Data center for Australia.

**Note:** Beta features are subject to change. Please do not use in production environments. (optional)

`limit` [int](https://learn.microsoft.com/dotnet/api/system.int32)?

The number of items you want per page.
Acceptable values = 1-100. Default = 10. (optional, default to 10)

`startAt` [string](https://learn.microsoft.com/dotnet/api/system.string)

The ID of the last item that was returned in the previous result set. It enables the system to return subsequent items starting from the next one after the specified ID. (optional)

`throwOnError` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Specifies whether to throw an error if the API call fails.
(optional)

### Returns

[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Buckets](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-oss/Autodesk.Oss.Model/Buckets)>

Task of <Buckets>

### Exceptions

[OssApiException](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-oss/Autodesk.Oss/OssApiException)

Thrown when the SDK fails to make an API call.

## GetObjectDetailsAsync(string, string, string, DateTime?, With?, bool)

**Operation:** Get Object Details

```
public Task<ObjectFullDetails> GetObjectDetailsAsync(string accessToken, string bucketKey, string objectKey, DateTime? ifModifiedSince = null, With? with = null, bool throwOnError = true)
```

Returns detailed information about the specified object.

### Parameters

`accessToken` [string](https://learn.microsoft.com/dotnet/api/system.string)

An access token obtained by a call to GetThreeLeggedTokenAsync() or GetTwoLeggedTokenAsync().

`bucketKey` [string](https://learn.microsoft.com/dotnet/api/system.string)

The bucket key of the bucket that contains the objects you are operating on.

`objectKey` [string](https://learn.microsoft.com/dotnet/api/system.string)

The URL-encoded human friendly name of the object.

`ifModifiedSince` [DateTime](https://learn.microsoft.com/dotnet/api/system.datetime)?

A timestamp in the HTTP date format (Mon, DD Month YYYY HH:MM:SS GMT). The requested data is returned only if the object has been modified since the specified timestamp. If not, a 304 (Not Modified) HTTP status is returned. (optional)

`with` [With](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-oss/Autodesk.Oss.Model/With)?

Specifies additional information to include in the response. Possible values: - `createdDate` - `lastAccessedDate` - `lastModifiedDate` - `userDefinedMetadata`
(optional)

`throwOnError` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Specifies whether to throw an error if the API call fails.
(optional)

### Returns

[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[ObjectFullDetails](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-oss/Autodesk.Oss.Model/ObjectFullDetails)>

### Exceptions

[OssApiException](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-oss/Autodesk.Oss/OssApiException)

Thrown when the SDK fails to make an API call.

## GetObjectsAsync(string, string, int?, string, string, bool)

**Operation:** List Objects

```
public Task<BucketObjects> GetObjectsAsync(string accessToken, string bucketKey, int? limit = null, string beginsWith = null, string startAt = null, bool throwOnError = true)
```

Returns a list objects in the specified bucket.

Only the application that owns the bucket can call this operation. All other applications that call this operation will receive a “403 Forbidden” error.

### Parameters

`accessToken` [string](https://learn.microsoft.com/dotnet/api/system.string)

An access token obtained by a call to GetThreeLeggedTokenAsync() or GetTwoLeggedTokenAsync().

`bucketKey` [string](https://learn.microsoft.com/dotnet/api/system.string)

The bucket key of the bucket that contains the objects you are operating on.

`limit` [int](https://learn.microsoft.com/dotnet/api/system.int32)?

The number of items you want per page.
Acceptable values = 1-100. Default = 10. (optional, default to 10)

`beginsWith` [string](https://learn.microsoft.com/dotnet/api/system.string)

Filters the results by the value you specify. Only the objects with their `objectKey` beginning with the specified string are returned. (optional)

`startAt` [string](https://learn.microsoft.com/dotnet/api/system.string)

The ID of the last item that was returned in the previous result set. It enables the system to return subsequent items starting from the next one after the specified ID. (optional)

`throwOnError` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Specifies whether to throw an error if the API call fails.
(optional)

### Returns

[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[BucketObjects](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-oss/Autodesk.Oss.Model/BucketObjects)>

### Exceptions

[OssApiException](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-oss/Autodesk.Oss/OssApiException)

Thrown when the SDK fails to make an API call.

## GetSignedResourceAsync(string, string, string, string, DateTime?, string, Region?, string, string, bool)

**Operation:** Download Object Using Signed URL

```
public Task<Stream> GetSignedResourceAsync(string accessToken, string hash, string range = null, string ifNoneMatch = null, DateTime? ifModifiedSince = null, string acceptEncoding = null, Region? region = null, string responseContentDisposition = null, string responseContentType = null, bool throwOnError = true)
```

Downloads an object using an OSS signed URL.

**Note:** The signed URL returned by [Generate OSS Signed URL](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-oss/Autodesk.Oss/OssClient#Autodesk_Oss_OssClient_CreateSignedResourceAsync_System_String_System_String_System_Nullable_Autodesk_Oss_Model_Access__System_Nullable_System_Boolean__Autodesk_Oss_Model_CreateSignedResource_System_String_System_Boolean_) contains the `hash` parameter as well.

### Parameters

`accessToken` [string](https://learn.microsoft.com/dotnet/api/system.string)

An access token obtained by a call to GetThreeLeggedTokenAsync() or GetTwoLeggedTokenAsync().

`hash` [string](https://learn.microsoft.com/dotnet/api/system.string)

The ID component of the signed URL.

**Note:** The signed URL returned by [Generate OSS Signed URL](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-oss/Autodesk.Oss/OssClient#Autodesk_Oss_OssClient_CreateSignedResourceAsync_System_String_System_String_System_Nullable_Autodesk_Oss_Model_Access__System_Nullable_System_Boolean__Autodesk_Oss_Model_CreateSignedResource_System_String_System_Boolean_) contains `hash` as a URI parameter.

`range` [string](https://learn.microsoft.com/dotnet/api/system.string)

The byte range to download, specified in the form `bytes=<START_BYTE>-<END_BYTE>`. (optional)

`ifNoneMatch` [string](https://learn.microsoft.com/dotnet/api/system.string)

The last known ETag value of the object. OSS returns the requested data only if the `If-None-Match` parameter differs from the ETag value of the object on OSS, which indicates that the object on OSS is newer. If not, it returns a 304 “Not Modified” HTTP status. (optional)

`ifModifiedSince` [DateTime](https://learn.microsoft.com/dotnet/api/system.datetime)?

A timestamp in the HTTP date format (Mon, DD Month YYYY HH:MM:SS GMT). The requested data is returned only if the object has been modified since the specified timestamp. If not, a 304 (Not Modified) HTTP status is returned. (optional)

`acceptEncoding` [string](https://learn.microsoft.com/dotnet/api/system.string)

The compression format your prefer to receive the data. Possible values are:
- `gzip` - Use the gzip format

**Note:** You cannot use `Accept-Encoding:gzip` with a Range parameter containing an end byte range. OSS will not honor the End byte range if `Accept-Encoding: gzip` parameter is used. (optional)

`region` [Region](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-oss/Autodesk.Oss.Model/Region)?

Specifies where the bucket containing the object stored. Possible values are:
- `US` - (Default) Data center for the US region.
- `EMEA` - Data center for the European Union, Middle East, and Africa.
- `APAC` - (Beta) Data center for Australia.

**Note:** Beta features are subject to change. Please do not use in production environments. (optional)

`responseContentDisposition` [string](https://learn.microsoft.com/dotnet/api/system.string)

The value of the Content-Disposition header you want to receive when you download the object using the signed URL. If you do not specify a value, the Content-Disposition header defaults to the value stored with OSS. (optional)

`responseContentType` [string](https://learn.microsoft.com/dotnet/api/system.string)

The value of the Content-Type header you want to receive when you download the object using the signed URL. If you do not specify a value, the Content-Type header defaults to the value stored with OSS. (optional)

`throwOnError` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Specifies whether to throw an error if the API call fails.
(optional)

### Returns

[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Stream](https://learn.microsoft.com/dotnet/api/system.io.stream)>

### Exceptions

[OssApiException](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-oss/Autodesk.Oss/OssApiException)

Thrown when the SDK fails to make an API call.

## SignedS3DownloadAsync(string, string, string, string, DateTime?, string, string, string, string, bool?, int?, bool?, bool)

**Operation:** Generate Signed S3 Download URL

```
public Task<Signeds3downloadResponse> SignedS3DownloadAsync(string accessToken, string bucketKey, string objectKey, string ifNoneMatch = null, DateTime? ifModifiedSince = null, string xAdsAcmScopes = null, string responseContentType = null, string responseContentDisposition = null, string responseCacheControl = null, bool? publicResourceFallback = null, int? minutesExpiration = null, bool? useCdn = null, bool throwOnError = true)
```

Gets a signed URL to download an object directly from S3, bypassing OSS servers. This signed URL expires in 2 minutes by default, but you can change this duration if needed. You must start the download before the signed URL expires. The download itself can take longer. If the download fails after the validity period of the signed URL has elapsed, you can call this operation again to obtain a fresh signed URL.

Only applications that have read access to the object can call this operation.

You can use range parameters with the signed download URL to download the object in chunks. This ability lets you download chunks in parallel, which can result in faster downloads.

If the object you want to download was uploaded in chunks and is still assembling on OSS, you will receive multiple S3 URLs instead of just one. Each URL will point to a chunk. If you prefer to receive a single URL, set the `public-resource-fallback` parameter to `true`. This setting will make OSS fallback to returning a single signed OSS URL, if assembling is still in progress.

In addition to this operation that generates S3 signed URLs, OSS provides an operation to generate OSS signed URLs. S3 signed URLs allow direct upload/download from S3 but are restricted to bucket owners. OSS signed URLs also allow upload/download and can be configured for access by other applications, making them suitable for sharing objects across applications.

### Parameters

`accessToken` [string](https://learn.microsoft.com/dotnet/api/system.string)

An access token obtained by a call to GetThreeLeggedTokenAsync() or GetTwoLeggedTokenAsync().

`bucketKey` [string](https://learn.microsoft.com/dotnet/api/system.string)

The bucket key of the bucket that contains the objects you are operating on.

`objectKey` [string](https://learn.microsoft.com/dotnet/api/system.string)

The URL-encoded human friendly name of the object.

`ifNoneMatch` [string](https://learn.microsoft.com/dotnet/api/system.string)

The last known ETag value of the object. OSS returns the signed URL only if the `If-None-Match` parameter differs from the ETag value of the object on S3. If not, it returns a 304 “Not Modified” HTTP status. (optional)

`ifModifiedSince` [DateTime](https://learn.microsoft.com/dotnet/api/system.datetime)?

A timestamp in the HTTP date format (Mon, DD Month YYYY HH:MM:SS GMT). The signed URL is returned only if the object has been modified since the specified timestamp. If not, a 304 (Not Modified) HTTP status is returned. (optional)

`xAdsAcmScopes` [string](https://learn.microsoft.com/dotnet/api/system.string)

Optional OSS-compliant scope reference to increase bucket search performance (optional)

`responseContentType` [string](https://learn.microsoft.com/dotnet/api/system.string)

The value of the Content-Type header you want to receive when you download the object using the signed URL. If you do not specify a value, the Content-Type header defaults to the value stored with OSS. (optional)

`responseContentDisposition` [string](https://learn.microsoft.com/dotnet/api/system.string)

The value of the Content-Disposition header you want to receive when you download the object using the signed URL. If you do not specify a value, the Content-Disposition header defaults to the value stored with OSS. (optional)

`responseCacheControl` [string](https://learn.microsoft.com/dotnet/api/system.string)

The value of the Cache-Control header you want to receive when you download the object using the signed URL. If you do not specify a value, the Cache-Control header defaults to the value stored with OSS. (optional)

`publicResourceFallback` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)?

Specifies how to return the signed URLs, in case the object was uploaded in chunks, and assembling of chunks is not yet complete.
- `true` : Return a single signed OSS URL.
- `false` : (Default) Return multiple signed S3 URLs, where each URL points to a chunk. (optional)

`minutesExpiration` [int](https://learn.microsoft.com/dotnet/api/system.int32)?

The time window (in minutes) the signed URL will remain usable. Acceptable values = 1-60 minutes. Default = 2 minutes.

**Tip:** Use the smallest possible time window to minimize exposure of the signed URL. (optional)

`useCdn` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)?

`true` : Returns a URL that points to a CloudFront edge location.

`false` : (Default) Returns a URL that points directly to the S3 object. (optional)

`throwOnError` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Specifies whether to throw an error if the API call fails.
(optional)

### Returns

[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Signeds3downloadResponse](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-oss/Autodesk.Oss.Model/Signeds3downloadResponse)>

Task of <Signeds3downloadResponse>

### Exceptions

[OssApiException](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-oss/Autodesk.Oss/OssApiException)

Thrown when the SDK fails to make an API call.

## SignedS3UploadAsync(string, string, string, int?, int?, string, int?, bool?, bool)

**Operation:** Generate Signed S3 Upload URL

```
public Task<Signeds3uploadResponse> SignedS3UploadAsync(string accessToken, string bucketKey, string objectKey, int? parts = null, int? firstPart = null, string uploadKey = null, int? minutesExpiration = null, bool? useAcceleration = null, bool throwOnError = true)
```

Gets a signed URL to upload an object directly to S3, bypassing OSS servers. You can also request an array of signed URLs which lets you upload an object in chunks.

This signed URL expires in 2 minutes by default, but you can change this duration if needed. You must start the upload before the signed URL expires. The upload itself can take longer. If the upload fails after the validity period of the signed URL has elapsed, you can call this operation again to obtain a fresh signed URL (or an array of signed URLs as the case may be). However, you must use the same `uploadKey` that was returned when you originally called this operation.

Only applications that own the bucket can call this operation.

**Note:** Once you upload all chunks you must call the [Complete Upload to S3 Signed URL](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-oss/Autodesk.Oss/OssClient#Autodesk_Oss_OssClient_CompleteSignedS3UploadAsync_System_String_System_String_System_String_Autodesk_Oss_Model_Completes3uploadBody_System_String_System_String_System_String_System_String_System_String_System_String_System_Boolean_) operation to indicate completion. This instructs OSS to assemble the chunks and reconstitute the object on OSS. You must call this operation even when using a single signed URL.

In addition to this operation that generates S3 signed URLs, OSS provides an operation to generate OSS signed URLs. S3 signed URLs allow direct upload/download from S3 but are restricted to bucket owners. OSS signed URLs also allow upload/download and can be configured for access by other applications, making them suitable for sharing objects across applications.

### Parameters

`accessToken` [string](https://learn.microsoft.com/dotnet/api/system.string)

An access token obtained by a call to GetThreeLeggedTokenAsync() or GetTwoLeggedTokenAsync().

`bucketKey` [string](https://learn.microsoft.com/dotnet/api/system.string)

The bucket key of the bucket that contains the objects you are operating on.

`objectKey` [string](https://learn.microsoft.com/dotnet/api/system.string)

The URL-encoded human friendly name of the object.

`parts` [int](https://learn.microsoft.com/dotnet/api/system.int32)?

The number of parts you intend to chunk the object for uploading. OSS will return that many signed URLs, one URL for each chunk. If you do not specify a value you’ll get only one URL to upload the entire object. (optional)

`firstPart` [int](https://learn.microsoft.com/dotnet/api/system.int32)?

The index of the first chunk to be uploaded. (optional)

`uploadKey` [string](https://learn.microsoft.com/dotnet/api/system.string)

The `uploadKey` of a previously-initiated upload, in order to request more chunk upload URLs for the same upload. If you do not specify a value, OSS will initiate a new upload entirely. (optional)

`minutesExpiration` [int](https://learn.microsoft.com/dotnet/api/system.int32)?

The time window (in minutes) the signed URL will remain usable. Acceptable values = 1-60 minutes. Default = 2 minutes.

**Tip:** Use the smallest possible time window to minimize exposure of the signed URL. (optional)

`useAcceleration` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)?

`true` : (Default) Generates a faster S3 signed URL using Transfer Acceleration.

`false`: Generates a standard S3 signed URL. (optional)

`throwOnError` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Specifies whether to throw an error if the API call fails.
(optional)

### Returns

[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Signeds3uploadResponse](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-oss/Autodesk.Oss.Model/Signeds3uploadResponse)>

### Exceptions

[OssApiException](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-oss/Autodesk.Oss/OssApiException)

Thrown when the SDK fails to make an API call.

## Upload(string, string, Stream, string, CancellationToken, string, string, IProgress<int>)

**Operation:** Upload a File

```
public Task<ObjectDetails> Upload(string bucketKey, string objectKey, Stream sourceToUpload, string accessToken, CancellationToken cancellationToken, string projectScope = "", string requestIdPrefix = "", IProgress<int> progress = null)
```

Uploads a file by transparently handling operations like obtaining signed upload URLs, chunking large files for optimal transfer, and notifying OSS to assemble the uploaded parts.

### Parameters

`bucketKey` [string](https://learn.microsoft.com/dotnet/api/system.string)

The bucket key of the bucket that contains the objects you are operating on.

`objectKey` [string](https://learn.microsoft.com/dotnet/api/system.string)

The URL-encoded human friendly name of the object.

`sourceToUpload` [Stream](https://learn.microsoft.com/dotnet/api/system.io.stream)

Stream of the of file to be uploded or
Path of the file to be uploaded

`accessToken` [string](https://learn.microsoft.com/dotnet/api/system.string)

An access token obtained by a call to GetThreeLeggedTokenAsync() or GetTwoLeggedTokenAsync().

`cancellationToken` [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)

A token to monitor cancellation requests.
(optional)

`projectScope` [string](https://learn.microsoft.com/dotnet/api/system.string)

A project scope to which the upload should be limited.(optional)

`requestIdPrefix` [string](https://learn.microsoft.com/dotnet/api/system.string)

(optional)
A prefix to be added to the request ID.

`progress` [IProgress](https://learn.microsoft.com/dotnet/api/system.iprogress-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)>

An IProgress object to report upload progress.
(optional)

### Returns

[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[ObjectDetails](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-oss/Autodesk.Oss.Model/ObjectDetails)>

### Exceptions

[OssApiException](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-oss/Autodesk.Oss/OssApiException)

Thrown when the SDK fails to make an API call.

## Upload(string, string, string, string, CancellationToken, string, string, IProgress<int>)

**Operation:** Upload a File

```
public Task<ObjectDetails> Upload(string bucketKey, string objectKey, string sourceToUpload, string accessToken, CancellationToken cancellationToken, string projectScope = "", string requestIdPrefix = "", IProgress<int> progress = null)
```

Uploads a file by transparently handling operations like obtaining signed upload URLs, chunking large files for optimal transfer, and notifying OSS to assemble the uploaded parts.

### Parameters

`bucketKey` [string](https://learn.microsoft.com/dotnet/api/system.string)

The bucket key of the bucket that contains the objects you are operating on.

`objectKey` [string](https://learn.microsoft.com/dotnet/api/system.string)

The URL-encoded human friendly name of the object.

`sourceToUpload` [string](https://learn.microsoft.com/dotnet/api/system.string)

Stream of the of file to be uploaded or
Path of the file to be uploaded

`accessToken` [string](https://learn.microsoft.com/dotnet/api/system.string)

An access token obtained by a call to GetThreeLeggedTokenAsync() or GetTwoLeggedTokenAsync().

`cancellationToken` [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)

A token to monitor cancellation requests.
(optional)

`projectScope` [string](https://learn.microsoft.com/dotnet/api/system.string)

A project scope to which the upload should be limited.
(optional)

`requestIdPrefix` [string](https://learn.microsoft.com/dotnet/api/system.string)

A prefix to be added to the request ID.
(optional)

`progress` [IProgress](https://learn.microsoft.com/dotnet/api/system.iprogress-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)>

An IProgress object to report upload progress.
(optional)

### Returns

[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[ObjectDetails](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-oss/Autodesk.Oss.Model/ObjectDetails)>

### Exceptions

[OssApiException](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-oss/Autodesk.Oss/OssApiException)

Thrown when the SDK fails to make an API call.

## UploadSignedResourceAsync(string, string, int?, Stream, string, string, Region?, string, bool)

**Operation:** Replace Object Using Signed URL

```
public Task<ObjectDetails> UploadSignedResourceAsync(string accessToken, string hash, int? contentLength, Stream body, string contentType = null, string contentDisposition = null, Region? xAdsRegion = null, string ifMatch = null, bool throwOnError = true)
```

Replaces an object that already exists on OSS, using an OSS signed URL.

The signed URL must fulfil the following conditions:
- The signed URL is valid (it has not expired as yet).
- It was generated with `write` or `readwrite` for the `access` parameter.

### Parameters

`accessToken` [string](https://learn.microsoft.com/dotnet/api/system.string)

An access token obtained by a call to GetThreeLeggedTokenAsync() or GetTwoLeggedTokenAsync().

`hash` [string](https://learn.microsoft.com/dotnet/api/system.string)

The ID component of the signed URL.

**Note:** The signed URL returned by [Generate OSS Signed URL](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-oss/Autodesk.Oss/OssClient#Autodesk_Oss_OssClient_CreateSignedResourceAsync_System_String_System_String_System_Nullable_Autodesk_Oss_Model_Access__System_Nullable_System_Boolean__Autodesk_Oss_Model_CreateSignedResource_System_String_System_Boolean_) contains `hash` as a URI parameter.

`contentLength` [int](https://learn.microsoft.com/dotnet/api/system.int32)?

The size of the data contained in the request body, in bytes.

`body` [Stream](https://learn.microsoft.com/dotnet/api/system.io.stream)

The object to upload.

`contentType` [string](https://learn.microsoft.com/dotnet/api/system.string)

The MIME type of the object to upload; can be any type except ‘multipart/form-data’. This can be omitted, but we recommend adding it. (optional)

`contentDisposition` [string](https://learn.microsoft.com/dotnet/api/system.string)

The suggested file name to use when this object is downloaded as a file. (optional)

`xAdsRegion` [Region](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-oss/Autodesk.Oss.Model/Region)?

Specifies where the bucket containing the object stored. Possible values are:
- `US` - (Default) Data center for the US region.
- `EMEA` - Data center for the European Union, Middle East, and Africa.
- `APAC` - (Beta) Data center for Australia.

**Note:** Beta features are subject to change. Please do not use in production environments. (optional)

`ifMatch` [string](https://learn.microsoft.com/dotnet/api/system.string)

The current value of the `sha1` attribute of the object you want to replace. OSS checks the `If-Match` parameter against the `sha1` attribute of the object in OSS. If they match, OSS allows the object to be overwritten. Otherwise, it means that the object on OSS has been modified since you retrieved the `sha1` and the request fails. (optional)

`throwOnError` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Specifies whether to throw an error if the API call fails.
(optional)

### Returns

[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[ObjectDetails](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-oss/Autodesk.Oss.Model/ObjectDetails)>

### Exceptions

[OssApiException](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-oss/Autodesk.Oss/OssApiException)

Thrown when the SDK fails to make an API call.

## UploadSignedResourcesChunkAsync(string, string, string, string, Stream, string, string, Region?, bool)

**Operation:** Upload Object Using Signed URL

```
public Task<ObjectDetails> UploadSignedResourcesChunkAsync(string accessToken, string hash, string contentRange, string sessionId, Stream body, string contentType = null, string contentDisposition = null, Region? xAdsRegion = null, bool throwOnError = true)
```

Performs a resumable upload using an OSS signed URL. Use this operation to upload an object in chunks.

**Note:** The signed URL returned by [Generate OSS Signed URL](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-oss/Autodesk.Oss/OssClient#Autodesk_Oss_OssClient_CreateSignedResourceAsync_System_String_System_String_System_Nullable_Autodesk_Oss_Model_Access__System_Nullable_System_Boolean__Autodesk_Oss_Model_CreateSignedResource_System_String_System_Boolean_) contains the `hash` as a parameter.

### Parameters

`accessToken` [string](https://learn.microsoft.com/dotnet/api/system.string)

An access token obtained by a call to GetThreeLeggedTokenAsync() or GetTwoLeggedTokenAsync().

`hash` [string](https://learn.microsoft.com/dotnet/api/system.string)

The ID component of the signed URL.

**Note:** The signed URL returned by [Generate OSS Signed URL](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-oss/Autodesk.Oss/OssClient#Autodesk_Oss_OssClient_CreateSignedResourceAsync_System_String_System_String_System_Nullable_Autodesk_Oss_Model_Access__System_Nullable_System_Boolean__Autodesk_Oss_Model_CreateSignedResource_System_String_System_Boolean_) contains `hash` as a URI parameter.

`contentRange` [string](https://learn.microsoft.com/dotnet/api/system.string)

The byte range to upload, specified in the form `bytes=<START_BYTE>-<END_BYTE>`.

`sessionId` [string](https://learn.microsoft.com/dotnet/api/system.string)

An ID to uniquely identify the file upload session.

`body` [Stream](https://learn.microsoft.com/dotnet/api/system.io.stream)

The chunk to upload.

`contentType` [string](https://learn.microsoft.com/dotnet/api/system.string)

The MIME type of the object to upload; can be any type except ‘multipart/form-data’. This can be omitted, but we recommend adding it. (optional)

`contentDisposition` [string](https://learn.microsoft.com/dotnet/api/system.string)

The suggested file name to use when this object is downloaded as a file. (optional)

`xAdsRegion` [Region](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-oss/Autodesk.Oss.Model/Region)?

Specifies where the bucket containing the object stored. Possible values are:
- `US` - (Default) Data center for the US region.
- `EMEA` - Data center for the European Union, Middle East, and Africa.
- `APAC` - (Beta) Data center for Australia.

**Note:** Beta features are subject to change. Please do not use in production environments. (optional)

`throwOnError` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Specifies whether to throw an error if the API call fails.
(optional)

### Returns

[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[ObjectDetails](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-oss/Autodesk.Oss.Model/ObjectDetails)>

### Exceptions

[OssApiException](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-oss/Autodesk.Oss/OssApiException)

Thrown when the SDK fails to make an API call.

---
원본 문서: https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-oss/Autodesk.Oss/OssClient
