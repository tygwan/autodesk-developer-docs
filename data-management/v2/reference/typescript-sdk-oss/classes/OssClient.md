---
title: "OssClient"
url_path: reference/typescript-sdk-oss/classes/OssClient
product: "Data Management API"
surface: "data-management-v2"
protocol: "TypeScript SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "typescript-sdk-oss"
---
# Class: OssClient

Defined in: [custom-code/ossClient.ts:12](https://github.com/autodesk-platform-services/aps-sdk-node/blob/e37e37c49eb213844e79f1c7dee5616930755060/oss/source/custom-code/ossClient.ts#L12)

## Remarks

Represents a collection of functions to interact with the Oss API endpoints.

## Extends
- `BaseClient`

## Constructors

### new OssClient()

**new OssClient**(`optionalArgs`?): [`OssClient`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-oss/classes/OssClient)

Defined in: [custom-code/ossClient.ts:18](https://github.com/autodesk-platform-services/aps-sdk-node/blob/e37e37c49eb213844e79f1c7dee5616930755060/oss/source/custom-code/ossClient.ts#L18)

### optionalArgs?

#### authenticationProvider

`IAuthenticationProvider`

#### sdkManager

`SdkManager`

#### Returns

[`OssClient`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-oss/classes/OssClient)

#### Overrides

`BaseClient.constructor`

## Accessors

### authenticationProvider

#### Get Signature

**get** **authenticationProvider**(): `IAuthenticationProvider`

Defined in: node_modules/@aps_sdk/autodesk-sdkmanager/dist/src/baseClient.d.ts:4

#### Returns

`IAuthenticationProvider`

#### Set Signature

**set** **authenticationProvider**(`value`): `void`

Defined in: node_modules/@aps_sdk/autodesk-sdkmanager/dist/src/baseClient.d.ts:5

#### Parameters

#### value

`IAuthenticationProvider`

#### Returns

`void`

#### Inherited from

`BaseClient.authenticationProvider`

# Methods

## batchCompleteUpload()

**Operation**: Complete Batch Upload to S3 Signed URLs

**batchCompleteUpload**(`bucketKey`, `optionalArgs`): `Promise`<[`BatchcompleteuploadResponse`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-oss/interfaces/BatchcompleteuploadResponse)>

Defined in: [custom-code/ossClient.ts:105](https://github.com/autodesk-platform-services/aps-sdk-node/blob/e37e37c49eb213844e79f1c7dee5616930755060/oss/source/custom-code/ossClient.ts#L105)

Requests OSS to start reconstituting the set of objects that were uploaded using signed S3 upload URLs. You must call this operation only after all the objects have been uploaded.

You can specify up to 25 objects in this operation.

### Parameters

#### bucketKey

`string`

The bucket key of the bucket that contains the objects you are operating on.

### optionalArgs

#### accessToken

`string`

An access token obtained by a call to GetThreeLeggedTokenAsync() or GetTwoLeggedTokenAsync().

#### options

`ApsServiceRequestConfig`

Override http request option.

#### requests

[`BatchcompleteuploadObject`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-oss/interfaces/BatchcompleteuploadObject)

#### Returns

`Promise`<[`BatchcompleteuploadResponse`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-oss/interfaces/BatchcompleteuploadResponse)>

#### Throws

[OssApiError](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-oss/classes/OssApiError)

## batchSignedS3Download()

**Operation**: Batch Generate Signed S3 Download URLs

**batchSignedS3Download**(`bucketKey`, `requests`, `optionalArgs`): `Promise`<[`Batchsigneds3downloadResponse`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-oss/interfaces/Batchsigneds3downloadResponse)>

Defined in: [custom-code/ossClient.ts:139](https://github.com/autodesk-platform-services/aps-sdk-node/blob/e37e37c49eb213844e79f1c7dee5616930755060/oss/source/custom-code/ossClient.ts#L139)

Creates and returns signed URLs to download a set of objects directly from S3. These signed URLs expire in 2 minutes by default, but you can change this duration if needed. You must start download the objects before the signed URLs expire. The download itself can take longer.

Only the application that owns the bucket can call this operation. All other applications that call this operation will receive a “403 Forbidden” error.

### Parameters

#### bucketKey

`string`

The bucket key of the bucket that contains the objects you are operating on.

#### requests

[`Batchsigneds3downloadObject`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-oss/interfaces/Batchsigneds3downloadObject)

### optionalArgs

#### accessToken

`string`

An access token obtained by a call to GetThreeLeggedTokenAsync() or GetTwoLeggedTokenAsync().

#### minutesExpiration

`number`

The time window (in minutes) the signed URL will remain usable. Acceptable values = 1-60 minutes. Default = 2 minutes.

**Tip:** Use the smallest possible time window to minimize exposure of the signed URL.

#### options

`ApsServiceRequestConfig`

Override http request option.

#### publicResourceFallback

`boolean`

Specifies how to return the signed URLs, in case the object was uploaded in chunks, and assembling of chunks is not yet complete.
- `true` : Return a single signed OSS URL.
- `false` : (Default) Return multiple signed S3 URLs, where each URL points to a chunk.

#### Returns

`Promise`<[`Batchsigneds3downloadResponse`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-oss/interfaces/Batchsigneds3downloadResponse)>

#### Throws

[OssApiError](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-oss/classes/OssApiError)

## batchSignedS3Upload()

**Operation**: Batch Generate Signed S3 Upload URLs

**batchSignedS3Upload**(`bucketKey`, `optionalArgs`): `Promise`<[`Batchsigneds3uploadResponse`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-oss/interfaces/Batchsigneds3uploadResponse)>

Defined in: [custom-code/ossClient.ts:176](https://github.com/autodesk-platform-services/aps-sdk-node/blob/e37e37c49eb213844e79f1c7dee5616930755060/oss/source/custom-code/ossClient.ts#L176)

Creates and returns signed URLs to upload a set of objects directly to S3. These signed URLs expire in 2 minutes by default, but you can change this duration if needed. You must start uploading the objects before the signed URLs expire. The upload itself can take longer.

Only the application that owns the bucket can call this operation. All other applications that call this operation will receive a “403 Forbidden” error.

If required, you can request an array of signed URLs for each object, which lets you upload the objects in chunks. Once you upload all chunks you must call the [Complete Batch Upload to S3 Signed URL](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-oss/classes/OssClient/#batchcompleteupload) operation to indicate completion. This instructs OSS to assemble the chunks and reconstitute the object on OSS. You must call this operation even if you requested a single signed URL for an object.

If an upload fails after the validity period of a signed URL has elapsed, you can call this operation again to obtain fresh signed URLs. However, you must use the same `uploadKey` that was returned when you originally called this operation.

### Parameters

#### bucketKey

`string`

The bucket key of the bucket that contains the objects you are operating on.

### optionalArgs

#### accessToken

`string`

An access token obtained by a call to GetThreeLeggedTokenAsync() or GetTwoLeggedTokenAsync().

#### minutesExpiration

`number`

The time window (in minutes) the signed URL will remain usable. Acceptable values = 1-60 minutes. Default = 2 minutes.

**Tip:** Use the smallest possible time window to minimize exposure of the signed URL.

#### options

`ApsServiceRequestConfig`

Override http request option.

#### requests

[`Batchsigneds3uploadObject`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-oss/interfaces/Batchsigneds3uploadObject)

#### useAcceleration

`boolean`

`true` : (Default) Generates a faster S3 signed URL using Transfer Acceleration.

`false`: Generates a standard S3 signed URL.

#### Returns

`Promise`<[`Batchsigneds3uploadResponse`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-oss/interfaces/Batchsigneds3uploadResponse)>

#### Throws

[OssApiError](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-oss/classes/OssApiError)

## completeSignedS3Upload()

**Operation**: Complete Upload to S3 Signed URL

**completeSignedS3Upload**(`bucketKey`, `objectKey`, `contentType`, `body`, `optionalArgs`): `Promise`<`void`>

Defined in: [custom-code/ossClient.ts:205](https://github.com/autodesk-platform-services/aps-sdk-node/blob/e37e37c49eb213844e79f1c7dee5616930755060/oss/source/custom-code/ossClient.ts#L205)

Requests OSS to assemble and reconstitute the object that was uploaded using signed S3 upload URL. You must call this operation only after all parts/chunks of the object has been uploaded.

### Parameters

#### bucketKey

`string`

The bucket key of the bucket that contains the objects you are operating on.

#### objectKey

`string`

The URL-encoded human friendly name of the object.

#### contentType

`string`

Must be `application/json`.

#### body

[`Completes3uploadBody`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-oss/interfaces/Completes3uploadBody)

### optionalArgs

#### accessToken

`string`

An access token obtained by a call to GetThreeLeggedTokenAsync() or GetTwoLeggedTokenAsync().

#### options

`ApsServiceRequestConfig`

Override http request option.

#### xAdsMetaCacheControl

`string`

The Cache-Control value for the uploaded object to record within OSS.

#### xAdsMetaContentDisposition

`string`

The Content-Disposition value for the uploaded object to record within OSS.

#### xAdsMetaContentEncoding

`string`

The Content-Encoding value for the uploaded object to record within OSS.

#### xAdsMetaContentType

`string`

The Content-Type value for the uploaded object to record within OSS.

#### xAdsUserDefinedMetadata

`string`

Custom metadata to be stored with the object, which can be retrieved later on download or when retrieving object details. Must be a JSON object that is less than 100 bytes.

#### Returns

`Promise`<`void`>

#### Throws

[OssApiError](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-oss/classes/OssApiError)

## copyTo()

**Operation**: Copy Object

**copyTo**(`bucketKey`, `objectKey`, `newObjName`, `optionalArgs`): `Promise`<[`ObjectDetails`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-oss/interfaces/ObjectDetails)>

Defined in: [custom-code/ossClient.ts:228](https://github.com/autodesk-platform-services/aps-sdk-node/blob/e37e37c49eb213844e79f1c7dee5616930755060/oss/source/custom-code/ossClient.ts#L228)

Creates a copy of an object within the bucket.

### Parameters

#### bucketKey

`string`

The bucket key of the bucket that contains the objects you are operating on.

#### objectKey

`string`

The URL-encoded human friendly name of the object.

#### newObjName

`string`

A URL-encoded human friendly name to identify the copied object.

### optionalArgs

#### accessToken

`string`

An access token obtained by a call to GetThreeLeggedTokenAsync() or GetTwoLeggedTokenAsync().

#### options

`ApsServiceRequestConfig`

Override http request option.

#### Returns

`Promise`<[`ObjectDetails`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-oss/interfaces/ObjectDetails)>

#### Throws

[OssApiError](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-oss/classes/OssApiError)

## createBucket()

**Operation**: Create Bucket

**createBucket**(`policyKey`, `optionalArgs`): `Promise`<[`Bucket`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-oss/interfaces/Bucket)>

Defined in: [custom-code/ossClient.ts:260](https://github.com/autodesk-platform-services/aps-sdk-node/blob/e37e37c49eb213844e79f1c7dee5616930755060/oss/source/custom-code/ossClient.ts#L260)

Creates a bucket.

Buckets are virtual containers within the Object Storage Service (OSS), which you can use to store and manage objects (files) in the cloud. The application creating the bucket is the owner of the bucket.

**Note:** Do not use this operation to create buckets for BIM360 Document Management. Use [POST projects/{project_id}/storage](https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-storage-POST) instead. For details, see [Upload Files to BIM 360 Document Management](https://aps.autodesk.com/en/docs/bim360/v1/tutorials/document-management/upload-document).

### Parameters

#### policyKey

[`CreateBucketsPayload`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-oss/interfaces/CreateBucketsPayload)

### optionalArgs

#### accessToken

`string`

An access token obtained by a call to GetThreeLeggedTokenAsync() or GetTwoLeggedTokenAsync().

#### options

`ApsServiceRequestConfig`

Override http request option.

#### xAdsRegion

[`Region`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-oss/enumerations/Region)

Specifies where the bucket must be stored. Possible values are:
- `US` - (Default) Data center for the US region.
- `EMEA` - Data center for the European Union, Middle East, and Africa.
- `APAC` - (Beta) Data center for Australia. **Note:** Beta features are subject to change. Please do not use in production environments.

#### Returns

`Promise`<[`Bucket`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-oss/interfaces/Bucket)>

#### Throws

[OssApiError](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-oss/classes/OssApiError)

## createSignedResource()

**Operation**: Generate OSS Signed URL

**createSignedResource**(`bucketKey`, `objectKey`, `optionalArgs`): `Promise`<[`CreateObjectSigned`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-oss/interfaces/CreateObjectSigned)>

Defined in: [custom-code/ossClient.ts:293](https://github.com/autodesk-platform-services/aps-sdk-node/blob/e37e37c49eb213844e79f1c7dee5616930755060/oss/source/custom-code/ossClient.ts#L293)

Generates a signed URL that can be used to download or upload an object within the specified expiration time. If the object the signed URL points to is deleted or expires before the signed URL expires, the signed URL will no longer be valid.

In addition to this operation, OSS provides operations to generate S3 signed URLs. S3 signed URLs enable direct upload/download from S3 but are restricted to bucket owners. OSS signed URLs also support upload/download and can be configured for access by other applications, making them ideal for sharing objects across different applications.

Only the application that owns the bucket containing the object can call this operation.

### Parameters

#### bucketKey

`string`

The bucket key of the bucket that contains the objects you are operating on.

#### objectKey

`string`

The URL-encoded human friendly name of the object.

### optionalArgs

#### access

[`Access`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-oss/enumerations/Access)

#### accessToken

`string`

An access token obtained by a call to GetThreeLeggedTokenAsync() or GetTwoLeggedTokenAsync().

#### createSignedResource

[`CreateSignedResource`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-oss/interfaces/CreateSignedResource)

#### options

`ApsServiceRequestConfig`

Override http request option.

#### useCdn

`boolean`

`true` : Returns a Cloudfront URL to the object instead of an Autodesk URL (one that points to a location on https://developer.api.autodesk.com). Applications can interact with the Cloudfront URL exactly like with any classic public resource in OSS. They can use GET requests to download objects or PUT requests to upload objects.

`false` : (Default) Returns an Autodesk URL (one that points to a location on https://developer.api.autodesk.com) to the object.

#### Returns

`Promise`<[`CreateObjectSigned`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-oss/interfaces/CreateObjectSigned)>

#### Throws

[OssApiError](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-oss/classes/OssApiError)

## deleteBucket()

**Operation**: Delete Bucket

**deleteBucket**(`bucketKey`, `optionalArgs`): `Promise`<`void`>

Defined in: [custom-code/ossClient.ts:319](https://github.com/autodesk-platform-services/aps-sdk-node/blob/e37e37c49eb213844e79f1c7dee5616930755060/oss/source/custom-code/ossClient.ts#L319)

Deletes the specified bucket. Only the application that owns the bucket can call this operation. All other applications that call this operation will receive a “403 Forbidden” error.

The initial processing of a bucket deletion request can be time-consuming. So, we recommend only deleting buckets containing a few objects, like those typically used for acceptance testing and prototyping.

**Note:** Bucket keys will not be immediately available for reuse.

### Parameters

#### bucketKey

`string`

The bucket key of the bucket to delete.

### optionalArgs

#### accessToken

`string`

An access token obtained by a call to GetThreeLeggedTokenAsync() or GetTwoLeggedTokenAsync().

#### options

`ApsServiceRequestConfig`

Override http request option.

#### Returns

`Promise`<`void`>

#### Throws

[OssApiError](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-oss/classes/OssApiError)

## deleteObject()

**Operation**: Delete Object

**deleteObject**(`bucketKey`, `objectKey`, `optionalArgs`): `Promise`<`void`>

Defined in: [custom-code/ossClient.ts:341](https://github.com/autodesk-platform-services/aps-sdk-node/blob/e37e37c49eb213844e79f1c7dee5616930755060/oss/source/custom-code/ossClient.ts#L341)

Deletes an object from the bucket.

### Parameters

#### bucketKey

`string`

The bucket key of the bucket that contains the objects you are operating on.

#### objectKey

`string`

The URL-encoded human friendly name of the object.

### optionalArgs

#### accessToken

`string`

An access token obtained by a call to GetThreeLeggedTokenAsync() or GetTwoLeggedTokenAsync().

#### options

`ApsServiceRequestConfig`

Override http request option.

#### Returns

`Promise`<`void`>

#### Throws

[OssApiError](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-oss/classes/OssApiError)

## deleteSignedResource()

**Operation**: Delete Object Using Signed URL

**deleteSignedResource**(`hash`, `optionalArgs`): `Promise`<`void`>

Defined in: [custom-code/ossClient.ts:376](https://github.com/autodesk-platform-services/aps-sdk-node/blob/e37e37c49eb213844e79f1c7dee5616930755060/oss/source/custom-code/ossClient.ts#L376)

Delete an object using an OSS signed URL to access it.

Only applications that own the bucket containing the object can call this operation.

### Parameters

#### hash

`string`

The ID component of the signed URL.

**Note:** The signed URL returned by [Generate OSS Signed URL](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-oss/classes/OssClient/#createsignedresource) contains `hash` as a parameter.

### optionalArgs

#### accessToken

`string`

An access token obtained by a call to GetThreeLeggedTokenAsync() or GetTwoLeggedTokenAsync().

#### options

`ApsServiceRequestConfig`

Override http request option.

#### xAdsRegion

[`Region`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-oss/enumerations/Region)

Specifies where the bucket containing the object is stored. Possible values are:
- `US` - (Default) Data center for the US region.
- `EMEA` - Data center for the European Union, Middle East, and Africa.
- `APAC` - (Beta) Data center for Australia.

**Note:** Beta features are subject to change. Please do not use in production environments.

#### Returns

`Promise`<`void`>

#### Throws

[OssApiError](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-oss/classes/OssApiError)

## downloadObject()

**Operation**: Downloads a file by transparently handling operations like obtaining signed download URLs and chunking large files for optimal transfer.

**downloadObject**(`bucketKey`, `objectKey`, `filePath`, `optionalArgs`?): `Promise`<`void` | `Stream`>

Defined in: [custom-code/ossClient.ts:41](https://github.com/autodesk-platform-services/aps-sdk-node/blob/e37e37c49eb213844e79f1c7dee5616930755060/oss/source/custom-code/ossClient.ts#L41)

### Parameters

#### bucketKey

`string`

The bucket key of the bucket that contains the objects you are operating on.

#### objectKey

`string`

The URL-encoded human friendly name of the object.

#### filePath

`string`

The Path of the file to be downloaded.

### optionalArgs?

#### accessToken

`string`

An access token obtained by a call to GetThreeLeggedTokenAsync() or GetTwoLeggedTokenAsync().

#### cancellationToken

`AbortController`

A token to monitor cancellation requests.

#### onProgress

(`percentCompleted`) => `void`

#### requestIdPrefix

`string`

A prefix to be added to the request ID.

#### Returns

`Promise`<`void` | `Stream`>

#### Throws

[OssApiError](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-oss/classes/OssApiError)

## getBucketDetails()

**Operation**: Get Bucket Details

**getBucketDetails**(`bucketKey`, `optionalArgs`): `Promise`<[`Bucket`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-oss/interfaces/Bucket)>

Defined in: [custom-code/ossClient.ts:400](https://github.com/autodesk-platform-services/aps-sdk-node/blob/e37e37c49eb213844e79f1c7dee5616930755060/oss/source/custom-code/ossClient.ts#L400)

Returns detailed information about the specified bucket.

**Note:** Only the application that owns the bucket can call this operation. All other applications that call this operation will receive a “403 Forbidden” error.

### Parameters

#### bucketKey

`string`

The bucket key of the bucket to query.

### optionalArgs

#### accessToken

`string`

An access token obtained by a call to GetThreeLeggedTokenAsync() or GetTwoLeggedTokenAsync().

#### options

`ApsServiceRequestConfig`

Override http request option.

#### Returns

`Promise`<[`Bucket`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-oss/interfaces/Bucket)>

#### Throws

[OssApiError](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-oss/classes/OssApiError)

## getBuckets()

**Operation**: List Buckets

**getBuckets**(`optionalArgs`): `Promise`<[`Buckets`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-oss/interfaces/Buckets)>

Defined in: [custom-code/ossClient.ts:434](https://github.com/autodesk-platform-services/aps-sdk-node/blob/e37e37c49eb213844e79f1c7dee5616930755060/oss/source/custom-code/ossClient.ts#L434)

Returns a list of buckets owned by the application.

### optionalArgs

#### accessToken

`string`

An access token obtained by a call to GetThreeLeggedTokenAsync() or GetTwoLeggedTokenAsync().

#### limit

`number`

The number of items you want per page.
Acceptable values = 1-100. Default = 10.

#### options

`ApsServiceRequestConfig`

Override http request option.

#### region

[`Region`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-oss/enumerations/Region)

Specifies where the bucket containing the object is stored. Possible values are:
- `US` - (Default) Data center for the US region.
- `EMEA` - Data center for the European Union, Middle East, and Africa.
- `APAC` - (Beta) Data center for Australia.

**Note:** Beta features are subject to change. Please do not use in production environments.

#### startAt

`string`

The ID of the last item that was returned in the previous result set. It enables the system to return subsequent items starting from the next one after the specified ID.

#### Returns

`Promise`<[`Buckets`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-oss/interfaces/Buckets)>

#### Throws

[OssApiError](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-oss/classes/OssApiError)

## getObjectDetails()

**Operation**: Get Object Details

**getObjectDetails**(`bucketKey`, `objectKey`, `optionalArgs`): `Promise`<[`ObjectFullDetails`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-oss/interfaces/ObjectFullDetails)>

Defined in: [custom-code/ossClient.ts:458](https://github.com/autodesk-platform-services/aps-sdk-node/blob/e37e37c49eb213844e79f1c7dee5616930755060/oss/source/custom-code/ossClient.ts#L458)

Returns detailed information about the specified object.

### Parameters

#### bucketKey

`string`

The bucket key of the bucket that contains the objects you are operating on.

#### objectKey

`string`

The URL-encoded human friendly name of the object.

### optionalArgs

#### _with

[`With`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-oss/enumerations/With)

Specifies additional information to include in the response. Possible values: - `createdDate` - `lastAccessedDate` - `lastModifiedDate` - `userDefinedMetadata`

#### accessToken

`string`

An access token obtained by a call to GetThreeLeggedTokenAsync() or GetTwoLeggedTokenAsync().

#### ifModifiedSince

`string`

A timestamp in the HTTP date format (Mon, DD Month YYYY HH:MM:SS GMT). The requested data is returned only if the object has been modified since the specified timestamp. If not, a 304 (Not Modified) HTTP status is returned.
*

#### options

`ApsServiceRequestConfig`

Override http request option.

#### Returns

`Promise`<[`ObjectFullDetails`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-oss/interfaces/ObjectFullDetails)>

#### Throws

[OssApiError](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-oss/classes/OssApiError)

## getObjects()

**Operation**: List Objects

**getObjects**(`bucketKey`, `optionalArgs`): `Promise`<[`BucketObjects`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-oss/interfaces/BucketObjects)>

Defined in: [custom-code/ossClient.ts:488](https://github.com/autodesk-platform-services/aps-sdk-node/blob/e37e37c49eb213844e79f1c7dee5616930755060/oss/source/custom-code/ossClient.ts#L488)

Returns a list objects in the specified bucket.

Only the application that owns the bucket can call this operation. All other applications that call this operation will receive a “403 Forbidden” error.

### Parameters

#### bucketKey

`string`

The bucket key of the bucket that contains the objects you are operating on.

### optionalArgs

#### accessToken

`string`

An access token obtained by a call to GetThreeLeggedTokenAsync() or GetTwoLeggedTokenAsync().

#### beginsWith

`string`

Filters the results by the value you specify. Only the objects with their `objectKey` beginning with the specified string are returned.

#### limit

`number`

The number of items you want per page.
Acceptable values = 1-100. Default = 10.

#### options

`ApsServiceRequestConfig`

Override http request option.

#### startAt

`string`

The ID of the last item that was returned in the previous result set. It enables the system to return subsequent items starting from the next one after the specified ID.

#### Returns

`Promise`<[`BucketObjects`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-oss/interfaces/BucketObjects)>

#### Throws

[OssApiError](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-oss/classes/OssApiError)

## getSignedResource()

**Operation**: Download Object Using Signed URL

**getSignedResource**(`hash`, `optionalArgs`): `Promise`<`File`>

Defined in: [custom-code/ossClient.ts:535](https://github.com/autodesk-platform-services/aps-sdk-node/blob/e37e37c49eb213844e79f1c7dee5616930755060/oss/source/custom-code/ossClient.ts#L535)

Downloads an object using an OSS signed URL.

**Note:** The signed URL returned by [Generate OSS Signed URL](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-oss/classes/OssClient/#createsignedresource) contains the `hash` parameter as well.

### Parameters

#### hash

`string`

The ID component of the signed URL.

**Note:** The signed URL returned by [Generate OSS Signed URL](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-oss/classes/OssClient/#createsignedresource) contains `hash` as a parameter.

### optionalArgs

#### acceptEncoding

`string`

The compression format your prefer to receive the data. Possible values are:
- `gzip` - Use the gzip format

**Note:** You cannot use `Accept-Encoding:gzip` with a Range parameter containing an end byte range. OSS will not honor the End byte range if `Accept-Encoding: gzip` parameter is used.

#### accessToken

`string`

An access token obtained by a call to GetThreeLeggedTokenAsync() or GetTwoLeggedTokenAsync().

#### ifModifiedSince

`string`

A timestamp in the HTTP date format (Mon, DD Month YYYY HH:MM:SS GMT). The requested data is returned only if the object has been modified since the specified timestamp. If not, a 304 (Not Modified) HTTP status is returned.

#### ifNoneMatch

`string`

The last known ETag value of the object. OSS returns the requested data only if the `If-None-Match` parameter differs from the ETag value of the object on OSS, which indicates that the object on OSS is newer. If not, it returns a 304 “Not Modified” HTTP status.

#### options

`ApsServiceRequestConfig`

Override http request option.

#### range

`string`

The byte range to download, specified in the form `bytes=<START_BYTE>-<END_BYTE>`.

#### region

[`Region`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-oss/enumerations/Region)

Specifies where the bucket containing the object is stored. Possible values are:
- `US` - (Default) Data center for the US region.
- `EMEA` - Data center for the European Union, Middle East, and Africa.
- `APAC` - (Beta) Data center for Australia.

**Note:** Beta features are subject to change. Please do not use in production environments.

#### responseContentDisposition

`string`

The value of the Content-Disposition header you want to receive when you download the object using the signed URL. If you do not specify a value, the Content-Disposition header defaults to the value stored with OSS.

#### responseContentType

`string`

The value of the Content-Type header you want to receive when you download the object using the signed URL. If you do not specify a value, the Content-Type header defaults to the value stored with OSS.

#### Returns

`Promise`<`File`>

#### Throws

[OssApiError](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-oss/classes/OssApiError)

## signedS3Download()

**Operation**: Generate Signed S3 Download URL

**signedS3Download**(`bucketKey`, `objectKey`, `optionalArgs`): `Promise`<[`Signeds3downloadResponse`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-oss/interfaces/Signeds3downloadResponse)>

Defined in: [custom-code/ossClient.ts:585](https://github.com/autodesk-platform-services/aps-sdk-node/blob/e37e37c49eb213844e79f1c7dee5616930755060/oss/source/custom-code/ossClient.ts#L585)

Gets a signed URL to download an object directly from S3, bypassing OSS servers. This signed URL expires in 2 minutes by default, but you can change this duration if needed. You must start the download before the signed URL expires. The download itself can take longer. If the download fails after the validity period of the signed URL has elapsed, you can call this operation again to obtain a fresh signed URL.

Only applications that have read access to the object can call this operation.

You can use range parameters with the signed download URL to download the object in chunks. This ability lets you download chunks in parallel, which can result in faster downloads.

If the object you want to download was uploaded in chunks and is still assembling on OSS, you will receive multiple S3 URLs instead of just one. Each URL will point to a chunk. If you prefer to receive a single URL, set the `public-resource-fallback` parameter to `true`. This setting will make OSS fallback to returning a single signed OSS URL, if assembling is still in progress.

In addition to this operation that generates S3 signed URLs, OSS provides an operation to generate OSS signed URLs. S3 signed URLs allow direct upload/download from S3 but are restricted to bucket owners. OSS signed URLs also allow upload/download and can be configured for access by other applications, making them suitable for sharing objects across applications.

### Parameters

#### bucketKey

`string`

The bucket key of the bucket that contains the objects you are operating on.

#### objectKey

`string`

The URL-encoded human friendly name of the object.

### optionalArgs

#### accessToken

`string`

An access token obtained by a call to GetThreeLeggedTokenAsync() or GetTwoLeggedTokenAsync().

#### ifModifiedSince

`string`

A timestamp in the HTTP date format (Mon, DD Month YYYY HH:MM:SS GMT). The signed URL is returned only if the object has been modified since the specified timestamp. If not, a 304 (Not Modified) HTTP status is returned.

#### ifNoneMatch

`string`

The last known ETag value of the object. OSS returns the signed URL only if the `If-None-Match` parameter differs from the ETag value of the object on S3. If not, it returns a 304 “Not Modified” HTTP status.

#### minutesExpiration

`number`

The time window (in minutes) the signed URL will remain usable. Acceptable values = 1-60 minutes. Default = 2 minutes.

**Tip:** Use the smallest possible time window to minimize exposure of the signed URL.

#### options

`ApsServiceRequestConfig`

Override http request option.

#### publicResourceFallback

`boolean`

Specifies how to return the signed URLs, in case the object was uploaded in chunks, and assembling of chunks is not yet complete.
- `true` : Return a single signed OSS URL.
- `false` : (Default) Return multiple signed S3 URLs, where each URL points to a chunk.

#### redirect

`boolean`

Generates a HTTP redirection response (Temporary Redirect 307​) using the generated URL.

#### responseCacheControl

`string`

The value of the Cache-Control header you want to receive when you download the object using the signed URL. If you do not specify a value, the Cache-Control header defaults to the value stored with OSS.

#### responseContentDisposition

`string`

The value of the Content-Disposition header you want to receive when you download the object using the signed URL. If you do not specify a value, the Content-Disposition header defaults to the value stored with OSS.

#### responseContentType

`string`

The value of the Content-Type header you want to receive when you download the object using the signed URL. If you do not specify a value, the Content-Type header defaults to the value stored with OSS.

#### useCdn

`boolean`

`true` : Returns a URL that points to a CloudFront edge location.

`false` : (Default) Returns a URL that points directly to the S3 object.

#### Returns

`Promise`<[`Signeds3downloadResponse`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-oss/interfaces/Signeds3downloadResponse)>

#### Throws

[OssApiError](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-oss/classes/OssApiError)

## signedS3Upload()

**Operation**: Generate Signed S3 Upload URL

**signedS3Upload**(`bucketKey`, `objectKey`, `optionalArgs`): `Promise`<[`Signeds3uploadResponse`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-oss/interfaces/Signeds3uploadResponse)>

Defined in: [custom-code/ossClient.ts:627](https://github.com/autodesk-platform-services/aps-sdk-node/blob/e37e37c49eb213844e79f1c7dee5616930755060/oss/source/custom-code/ossClient.ts#L627)

Gets a signed URL to upload an object directly to S3, bypassing OSS servers. You can also request an array of signed URLs which lets you upload an object in chunks.

This signed URL expires in 2 minutes by default, but you can change this duration if needed. You must start the upload before the signed URL expires. The upload itself can take longer. If the upload fails after the validity period of the signed URL has elapsed, you can call this operation again to obtain a fresh signed URL (or an array of signed URLs as the case may be). However, you must use the same `uploadKey` that was returned when you originally called this operation.

Only applications that own the bucket can call this operation.

**Note:** Once you upload all chunks you must call the [Complete Upload to S3 Signed URL](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-oss/classes/OssClient/#completesigneds3upload) operation to indicate completion. This instructs OSS to assemble the chunks and reconstitute the object on OSS. You must call this operation even when using a single signed URL.

In addition to this operation that generates S3 signed URLs, OSS provides an operation to generate OSS signed URLs. S3 signed URLs allow direct upload/download from S3 but are restricted to bucket owners. OSS signed URLs also allow upload/download and can be configured for access by other applications, making them suitable for sharing objects across applications.

### Parameters

#### bucketKey

`string`

The bucket key of the bucket that contains the objects you are operating on.

#### objectKey

`string`

The URL-encoded human friendly name of the object.

### optionalArgs

#### accessToken

`string`

An access token obtained by a call to GetThreeLeggedTokenAsync() or GetTwoLeggedTokenAsync().

#### firstPart

`number`

The index of the first chunk to be uploaded.

#### minutesExpiration

`number`

The time window (in minutes) the signed URL will remain usable. Acceptable values = 1-60 minutes. Default = 2 minutes.

**Tip:** Use the smallest possible time window to minimize exposure of the signed URL.

#### options

`ApsServiceRequestConfig`

Override http request option.

#### parts

`number`

The number of parts you intend to chunk the object for uploading. OSS will return that many signed URLs, one URL for each chunk. If you do not specify a value you’ll get only one URL to upload the entire object.

#### uploadKey

`string`

The `uploadKey` of a previously-initiated upload, in order to request more chunk upload URLs for the same upload. If you do not specify a value, OSS will initiate a new upload entirely.

#### useAcceleration

`boolean`

`true` : (Default) Generates a faster S3 signed URL using Transfer Acceleration.

`false`: Generates a standard S3 signed URL.

#### Returns

`Promise`<[`Signeds3uploadResponse`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-oss/interfaces/Signeds3uploadResponse)>

#### Throws

[OssApiError](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-oss/classes/OssApiError)

## uploadObject()

**Operation**: Uploads a file by transparently handling operations like obtaining signed upload URLs, chunking large files for optimal transfer, and notifying OSS to assemble the uploaded parts.

**uploadObject**(`bucketKey`, `objectKey`, `sourceToUpload`, `optionalArgs`?): `Promise`<[`ObjectDetails`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-oss/interfaces/ObjectDetails)>

Defined in: [custom-code/ossClient.ts:74](https://github.com/autodesk-platform-services/aps-sdk-node/blob/e37e37c49eb213844e79f1c7dee5616930755060/oss/source/custom-code/ossClient.ts#L74)

### Parameters

#### bucketKey

`string`

The bucket key of the bucket that contains the objects you are operating on.

#### objectKey

`string`

The URL-encoded human friendly name of the object.

#### sourceToUpload

Stream of the of file to be uploded or Path of the file to be uploaded.

`string` | `Buffer`

### optionalArgs?

#### accessToken

`string`

An access token obtained by a call to GetThreeLeggedTokenAsync() or GetTwoLeggedTokenAsync().

#### cancellationToken

`AbortController`

A token to monitor cancellation requests.

#### onProgress

(`percentCompleted`) => `void`

#### requestIdPrefix

`string`

A prefix to be added to the request ID.

#### Returns

`Promise`<[`ObjectDetails`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-oss/interfaces/ObjectDetails)>

#### Throws

[OssApiError](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-oss/classes/OssApiError)

## uploadSignedResource()

**Operation**: Replace Object Using Signed URL

**uploadSignedResource**(`hash`, `contentLength`, `body`, `optionalArgs`): `Promise`<[`ObjectDetails`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-oss/interfaces/ObjectDetails)>

Defined in: [custom-code/ossClient.ts:671](https://github.com/autodesk-platform-services/aps-sdk-node/blob/e37e37c49eb213844e79f1c7dee5616930755060/oss/source/custom-code/ossClient.ts#L671)

Replaces an object that already exists on OSS, using an OSS signed URL.

The signed URL must fulfil the following conditions:
- The signed URL is valid (it has not expired as yet).
- It was generated with `write` or `readwrite` for the `access` parameter.

### Parameters

#### hash

`string`

The ID component of the signed URL.

**Note:** The signed URL returned by [Generate OSS Signed URL](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-oss/classes/OssClient/#createsignedresource) contains `hash` as a parameter.

#### contentLength

`number`

The size of the data contained in the request body, in bytes.

#### body

`File`

The object to upload.

### optionalArgs

#### accessToken

`string`

An access token obtained by a call to GetThreeLeggedTokenAsync() or GetTwoLeggedTokenAsync().

#### contentDisposition

`string`

The suggested file name to use when this object is downloaded as a file.

#### contentType

`string`

The MIME type of the object to upload; can be any type except ‘multipart/form-data’. This can be omitted, but we recommend adding it.

#### ifMatch

`string`

The current value of the `sha1` attribute of the object you want to replace. OSS checks the `If-Match` parameter against the `sha1` attribute of the object in OSS. If they match, OSS allows the object to be overwritten. Otherwise, it means that the object on OSS has been modified since you retrieved the `sha1` and the request fails.

#### options

`ApsServiceRequestConfig`

Override http request option.

#### xAdsRegion

[`Region`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-oss/enumerations/Region)

Specifies where the bucket containing the object is stored. Possible values are:
- `US` - (Default) Data center for the US region.
- `EMEA` - Data center for the European Union, Middle East, and Africa.
- `APAC` - (Beta) Data center for Australia.

**Note:** Beta features are subject to change. Please do not use in production environments.

#### Returns

`Promise`<[`ObjectDetails`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-oss/interfaces/ObjectDetails)>

#### Throws

[OssApiError](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-oss/classes/OssApiError)

## uploadSignedResourcesChunk()

**Operation**: Upload Object Using Signed URL

**uploadSignedResourcesChunk**(`hash`, `contentRange`, `sessionId`, `body`, `optionalArgs`): `Promise`<[`ObjectDetails`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-oss/interfaces/ObjectDetails)>

Defined in: [custom-code/ossClient.ts:711](https://github.com/autodesk-platform-services/aps-sdk-node/blob/e37e37c49eb213844e79f1c7dee5616930755060/oss/source/custom-code/ossClient.ts#L711)

Performs a resumable upload using an OSS signed URL. Use this operation to upload an object in chunks.

**Note:** The signed URL returned by [Generate OSS Signed URL](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-oss/classes/OssClient/#createsignedresource) contains the `hash` as a parameter.

### Parameters

#### hash

`string`

The ID component of the signed URL.

**Note:** The signed URL returned by [Generate OSS Signed URL](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-oss/classes/OssClient/#createsignedresource) contains `hash` as a parameter.

#### contentRange

`string`

The byte range to upload, specified in the form `bytes=<START_BYTE>-<END_BYTE>`.

#### sessionId

`string`

An ID to uniquely identify the file upload session.

#### body

`File`

The chunk to upload.

### optionalArgs

#### accessToken

`string`

An access token obtained by a call to GetThreeLeggedTokenAsync() or GetTwoLeggedTokenAsync().

#### contentDisposition

`string`

The suggested file name to use when this object is downloaded as a file.

#### contentType

`string`

The MIME type of the object to upload; can be any type except ‘multipart/form-data’. This can be omitted, but we recommend adding it.

#### options

`ApsServiceRequestConfig`

Override http request option.

#### xAdsRegion

[`Region`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-oss/enumerations/Region)

Specifies where the bucket containing the object is stored. Possible values are:
- `US` - (Default) Data center for the US region.
- `EMEA` - Data center for the European Union, Middle East, and Africa.
- `APAC` - (Beta) Data center for Australia.

**Note:** Beta features are subject to change. Please do not use in production environments.

#### Returns

`Promise`<[`ObjectDetails`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-oss/interfaces/ObjectDetails)>

#### Throws

[OssApiError](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-oss/classes/OssApiError)

---
원본 문서: https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-oss/classes/OssClient
