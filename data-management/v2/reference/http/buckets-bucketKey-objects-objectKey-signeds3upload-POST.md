---
title: "POST Complete Upload to S3 Signed URL"
url_path: reference/http///buckets-:bucketKey-objects-:objectKey-signeds3upload-POST
product: "Data Management API"
surface: "data-management-v2"
protocol: "REST"
document_kind: "endpoint"
api_version: "v2"
section: "reference"
category: "http"
operation_id: "buckets-:bucketKey-objects-:objectKey-signeds3upload-POST"
method: "POST"
path: "/oss/v2/buckets/{bucketKey}/objects/{objectKey}/signeds3upload"
auth_context: "app only"
scopes: ["data:write","data:create"]
verification: "docs-only"
---
# oss/v2/buckets/{bucketKey}/objects/{objectKey}/signeds3upload

Completes the upload to the S3 signed URL by assembling and reconstituting the object from uploaded chunks. You must call this operation only after all parts/chunks of the object have been uploaded. This operation must be performed even if only 1 chunk was uploaded.

## Resource Information

| Method and URI | POST https://developer.api.autodesk.com/oss/v2/buckets/{bucketKey}/objects/{objectKey}/signeds3upload |
| --- | --- |
| Authentication Context | App only |
| Required OAuth Scopes | `data:write` `data:create` |
| Data Format | JSON |

### Request

## Headers

| Authorization*string | Must be `Bearer <token>`, where `<token>` is a two-legged access token obtained via a [Client Credentials Grant flow](https://aps.autodesk.com/en/docs/oauth/v2/tutorials/get-2-legged-token/). |
| --- | --- |
| x-ads-meta-Content-Typestring | The Content-Type value for the uploaded object to record within OSS. |
| x-ads-meta-Content-Dispositionstring | The Content-Disposition value for the uploaded object to record within OSS. |
| x-ads-meta-Content-Encodingstring | The Content-Encoding value for the uploaded object to record within OSS. |
| x-ads-meta-Cache-Controlstring | The Cache-Control value for the uploaded object to record within OSS. |
| x-ads-user-defined-metadatastring | Custom metadata to be stored with the object, which can be retrieved later on download or when retrieving object details. Must be a JSON object that is less than 100 bytes. |
| Content-Type*string | Must be `application/json` |

### Request

## URI Parameters

| bucketKeystring | The unique ID of the bucket that contains the objects you are operating on. `bucketKey` must be URL-encoded. |
| --- | --- |
| objectKeystring | The URL-encoded human friendly name of the object. |

### Request

## Body Structure

| uploadKey*string | The ID uniquely identifying the upload session that was returned when you called [Get S3 Signed Upload URL](https://aps.autodesk.com/en/docs/data/v2/reference/http/buckets-:bucketKey-objects-:objectKey-signeds3upload-GET/). |
| --- | --- |
| sizeint | The expected size of the object, in bytes. If specified, OSS compares this value against the actual size of the object in S3. |
| eTagsarray: string | An array of eTags. S3 returns an eTag to each upload request, be it for a chunk or an entire file. For a single-part upload, this array contains the expected eTag of the entire object. For a multipart upload, this array contains the expected eTag of each part of the upload; the index of an eTag in the array corresponds to its part number in the upload. If specified, OSS validates these eTags against the content in S3. |

### Response

## HTTP Status Code Summary

| 200OK | The upload operation completed.
The response body depends on whether the request includes the size and/or eTags properties. If these properties are omitted, the response contains the completed object’s details. If either property is specified, the response contains the results of validating the uploaded object. |
| --- | --- |
| 400Bad Request | OSS was unable to process the request. The syntax of the request is malformed or the request is missing a required header. Do not repeat the request without fixing the issue. The response body may indicate what is wrong with the request |
| 401Unauthorized | The supplied authorization header was not valid or the supplied token scope was not acceptable. Verify authentication and try again. |
| 403Forbidden | The request was successfully validated but lacking the required permissions. Verify your credentials and permissions before you send this request again. |
| 404Not Found | The specified object or bucket does not exist. |
| 500Internal Server Error | An unexpected error occurred on the server, preventing it from completing your request. Please try again later. If the issue persists, contact the support team for assistance. |

### Response

## Body Structure (200)

| oneOfone of |   |
| --- | --- |
| 0object | The response body returned when the request does not include `size` or `eTags`. |
| bucketKeystring | The bucket key of the bucket the object was uploaded to. |
| objectIdstring | An identifier (URN) that uniquely and persistently identifies the object. |
| objectKeystring | A URL-encoded human-friendly name that identifies the object. |
| sizeint | The total amount of storage space occupied by the object, in bytes. |
| contentTypestring | The format of the data stored within the object, expressed as a MIME type. |
| locationstring | A URL that points to the actual location of the object. |
| 1object | The response body returned when the request includes `size` and/or `eTags` to validate the uploaded object. |
| uploadKeystring | The ID uniquely identifying the upload session that was returned when you called [Get S3 Signed Upload URL](https://aps.autodesk.com/en/docs/data/v2/reference/http/buckets-:bucketKey-objects-:objectKey-signeds3upload-GET/). |
| statusstring | The overall validation outcome for the upload. If this attribute is not returned, validation succeeded. |
| reasonstring | The reason for the failure, when validation fails. |
| bucketKeystring | The bucket key of the bucket the object was uploaded to. Returned when validation succeeds. |
| objectIdstring | An identifier (URN) that uniquely and persistently identifies the object. Returned when validation succeeds. |
| objectKeystring | A URL-encoded human-friendly name that identifies the object. Returned when validation succeeds. |
| contentTypestring | The format of the data stored within the object, expressed as a MIME type. Returned when validation succeeds. |
| locationstring | A URL that points to the actual location of the object. Returned when validation succeeds. |
| sizeone of | The object size, in bytes. Returned as an integer when validation succeeds or when only `eTags` was specified in the request. Returned as the requested and detected object sizes when `size` was specified in the request and size validation fails. |
| 0int | The total amount of storage space occupied by the object, in bytes. Returned when validation succeeds or when only `eTags` was specified in the request. |
| 1object | Contains the object size specified in the request compared with the size detected in S3. Returned when validation fails. |
| expectedint | The object size specified in the request, in bytes. |
| detectedint | The object size detected in S3, in bytes. |
| partsarray: object | An array of objects where each object represents the validation status of an uploaded part. |
| partint | The part number in the multipart upload. |
| sizeint | The size of the part detected in S3, in bytes. |
| eTagstring | The eTag of the part detected in S3. |
| statusenum:string | Indicates whether this particular part uploaded to S3 is valid. Possible values are:

`Pending` - No such part was uploaded to S3 for this index.
`Unexpected` - The eTag of the part in S3 does not match the one provided in the request.
`TooSmall` - A chunk uploaded to S3 is smaller than 5MB. Only the final chunk can be smaller than 5MB.
`Unexpected+TooSmall` - The chunk is both too small and has an eTag mismatch.
`Ok` - The chunk has no issues.’ |

## Example 1

Request to complete the object creation process after the bytes have been uploaded directly to S3. (200).

### Request

```
curl -X POST
  -H 'Authorization: Bearer eYeL5gYxAT2j3u9TEerxoJoToNbi'
  -H 'Content-Type: application/json'
  -H 'x-ads-meta-Content-Type: application/octet-stream'
  --data-raw '{
    "uploadKey": "{UPLOAD_KEY_PROVIDED_FROM_GET_UPLOAD_URLS_RESPONSE}"
  }'
  'https://developer.api.autodesk.com/oss/v2/buckets/apptestbucket/objects/random_file.bin/signeds3upload'
```

### Response

```
{
  "bucketKey": "apptestbucket",
  "objectId": "urn:adsk.objects:os.object:apptestbucket/random_file.bin",
  "objectKey": "random_file.bin",
  "size": 12582912,
  "contentType": "application/octet-stream",
  "location": "https://developer.api.autodesk.com/oss/v2/buckets/apptestbucket/objects/random_file.bin"
}
```

## Example 2

Request to complete the object creation process after the bytes have been uploaded directly to S3 with Size and ETag validation (200).

### Request

```
curl -XPOST
  -H'Authorization: Bearer {YOUR_TOKEN}'
  -H 'Content-Type: application/json'
  -H 'x-ads-meta-Content-Type: application/octet-stream'
  --data-raw '{
    "uploadKey": "{UPLOAD_KEY_PROVIDED_FROM_GET_UPLOAD_URLS_RESPONSE}",
    "size": 1,
    "eTags": [
        "c4ca4238a0b923820dcc509a6f75849b",
        "68ed4d53c0c933b7bf7debbd640386b1",
        "12ee9a859b60e71df4ef727f41c6b6d8"
    ]
  }'
  'https://developer.api.autodesk.com/oss/v2/buckets/apptestbucket/objects/random_file.bin/signeds3upload'
```

### Response

```
{
  "uploadKey": "{UPLOAD_KEY}",
  "status": "error",
  "reason": "MissingOrInvalidParts",
  "size": {
      "expected": 1,
      "detected": 12582912
  },
  "parts": [
      {
        "part": 1,
        "size": 5242880,
        "eTag": "9aec28c3d07e2978e6502f6427c515da",
        "status": "Unexpected"
      },
      {
        "part": 2,
        "size": 5242880,
        "eTag": "68ed4d53c0c933b7bf7debbd640386b1",
        "status": "Ok"
      },
      {
        "part": 3,
        "size": 2097152,
        "eTag": "12ee9a859b60e71df4ef727f41c6b6d8",
        "status": "Ok"
      }
  ]
}
```

---
원본 문서: https://aps.autodesk.com/en/docs/data/v2/reference/http/buckets-:bucketKey-objects-:objectKey-signeds3upload-POST
