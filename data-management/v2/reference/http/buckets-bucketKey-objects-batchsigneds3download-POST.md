---
title: "POST Generate Signed S3 Download URLs (Batch)"
url_path: reference/http///buckets-:bucketKey-objects-batchsigneds3download-POST
product: "Data Management API"
surface: "data-management-v2"
protocol: "REST"
document_kind: "endpoint"
api_version: "v2"
section: "reference"
category: "http"
operation_id: "buckets-:bucketKey-objects-batchsigneds3download-POST"
method: "POST"
path: "/oss/v2/buckets/{bucketKey}/objects/batchsigneds3download"
auth_context: "app only"
scopes: ["data:read"]
verification: "docs-only"
---
# oss/v2/buckets/{bucketKey}/objects/batchsigneds3download

Generates signed URLs to download a set of objects directly from S3. These signed URLs expire in 2 minutes by default, but you can change this duration if needed. You must start downloading the objects before the signed URLs expire. The download itself can take longer.

Additionally:
- **Failed downloads**: If a download fails after the signed URL expires, you can call this operation again to obtain fresh signed URLs.

**Important**: Only the application that owns the bucket can call this operation. All other applications will receive a “403 Forbidden” error.

## Resource Information

| Method and URI | POST https://developer.api.autodesk.com/oss/v2/buckets/{bucketKey}/objects/batchsigneds3download |
| --- | --- |
| Authentication Context | App only |
| Required OAuth Scopes | `data:read` |
| Data Format | JSON |

### Request

## Headers

| Authorization*string | Must be `Bearer <token>`, where `<token>` is a two-legged access token obtained via a [Client Credentials Grant flow](https://aps.autodesk.com/en/docs/oauth/v2/tutorials/get-2-legged-token/). |
| --- | --- |
| Content-Type*string | Must be `application/json` |

### Request

## URI Parameters

| bucketKeystring | The unique ID of the bucket that contains the objects you are operating on. `bucketKey` must be URL-encoded. |
| --- | --- |

### Request

## Query String Parameters

| public-resource-fallbackboolean | Determines how OSS returns the signed URLs when chunk assembly is not yet complete. Possible values:

`true` : Returns a single signed OSS URL.
`false` : (Default) Returns multiple signed S3 URLs, where each URL points to a chunk. |
| --- | --- |
| minutesExpirationint | The time window (in minutes) the signed URL will remain usable. Acceptable values = 1-60 minutes. Default = 2 minutes.
**Tip:** Use the smallest possible time window to minimize exposure of the signed URL. |

### Request

## Body Structure

An array of objects representing each request for a signed download URL.

| requests*array: object | An array where each element is an object containing information needed to generate a signed S3 download URL. |
| --- | --- |
| objectKeystring | The URL-encoded human friendly name of the object to download. |
| response-content-typestring | The value of the Content-Type header you want to receive when you download the object using the signed URL. If you do not specify a value, the Content-Type header defaults to the value stored with OSS. |
| response-content-dispositionstring | The value of the Content-Disposition header you want to receive when you download the object using the signed URL. If you do not specify a value, the Content-Disposition header defaults to the value stored with OSS. |
| response-cache-controlstring | The value of the Cache-Control header you want to receive when you download the object using the signed URL. If you do not specify a value, the Cache-Control header defaults to the value stored with OSS. |
| If-None-Matchstring | The last known `sha1` value of the object. OSS returns the signed URL only if the `If-None-Match` header differs from the `sha1` value of the object on S3. If not, it returns a 304 “Not Modified” HTTP status. |
| If-Modified-Sincestring | A timestamp in the HTTP date format (Mon, DD Month YYYY HH:MM:SS GMT). A signed URL is returned only if the object has been modified since the specified timestamp. If not, a 304 (Not Modified) HTTP status is returned. |

### Response

## HTTP Status Code Summary

| 200OK | The request was successfully processed. The response body will contain objects that indicate the outcome for each object signed URLs were requested for. Objects corresponding to successful request will contain signed URLs. Objects corresponding to failed requests will contain details of the failure. |
| --- | --- |
| 400Bad Request | The request could not be processed due to missing or malformed parameters. |
| 401Unauthorized | The supplied authorization header was not valid or the supplied token scope was not acceptable. Verify authentication and try again. |
| 403Forbidden | The request was successfully validated but lacking the required permissions. Verify your credentials and permissions before you send this request again. |
| 404Not Found | The specified object or bucket does not exist. |
| 500Internal Server Error | An unexpected error occurred on the server, preventing it from completing your request. Please try again later. If the issue persists, contact the support team for assistance. |

### Response

## Body Structure (200)

| resultsobject | A map of the returned results; each key in the map corresponds to an object key in the batch, and the value includes the results for that object. |
| --- | --- |
| *object | An object that represents the response to a Batch Generate Signed S3 Download URLs operation.
**Note**: `objectKeyN` is a placeholder for the first object key for which the client requested a download signed URL. The attributes within contain the success data / error information for the request for that object. results will contain one such attribute for each requested object in the batch. |
| statusenum:string | Indicates the current state of the object requested for download. Possible values are:

`complete` - The object is ready to be downloaded.
`chunked` - The object was uploaded in chunks, but assembly of chunks into the final object is still pending. Returned when `public-resource-fallback` = `false` in the request.
`fallback` - The object was uploaded in chunks, but assembly of chunks into the final object is still pending. Will return an OSS Signed URL instead of a S3 signed URL because `public-resource-fallback` was set to `true` in the request.
`skipped` - The server has evaluated an `If-None-Match` or `If-Modified-Since` parameter in the request and determined that the cached version of the object is still up-to-date.
`error` - There was an error in the request. Review and verify the requested `bucketKey`, `content-type`, and `content-disposition` before you try again. |
| urlstring | A S3 signed URL with which to download the object. This attribute is returned when `status` is `complete` or `fallback`; in the latter case, this will return an OSS signed URL, not an S3 signed URL. |
| urlsobject | A map of S3 signed URLs, one for each chunk of an unmerged resumable upload. This attribute is returned when `status` is `chunked`. The key of each entry is the byte range of the total file which the chunk comprises. |
| paramsobject | The values that were requested for the following parameters when requesting the S3 signed URL.

`Content-Type`
`Content-Disposition`
`Cache-Control`. |
| sizeint | The total amount of storage space occupied by the object, in bytes. |
| sha1string | A hash value computed from the data of the object, if available. |

## Example 1

Demonstrates the obtaining of a mix of successful and unsuccessful signed URLs, without falling back to OSS signed URLs (200).

### Request

```
curl
  -X POST
  -H "Authorization=Bearer eYeL5gYxAT2j3u9TEerxoJoToNbi"
  -H "Content-Type=application/json;charset=UTF-8";
  --data '{
    "requests": [{
      "objectKey": "someObject.dat",
      "If-Modified-Since": "Wed, 15 Jan 2021 00:00:00 GMT"
    },{
      "objectKey": "someOtherObject.pdf",
      "If-None-Match": "5ca0855e5758a92dd9ffdaba5fc974c1ae6a0267"
    },{
      "objectKey": "some-invalid-content-object.html",
      "response-content-type": "text/html",
      "response-content-disposition": "inline"
    },{
      "objectKey": "some-valid-object.text",
      "response-content-type": "text"
    },{
      "objectKey": "unmerged-object.json"
    }]
  }'
  https://developer.api.autodesk.com/oss/v2/buckets/apptestbucket/objects/batchsigneds3download
```

### Response

```
{
    "results": {
        "someObject.dat": {
            "status": "skipped",
            "reason": "Not modified"
        },
        "someOtherObject.pdf": {
            "status": "skipped",
            "reason": "Not modified"
        },
        "some-invalid-content-object.html": {
            "status": "error",
            "reason": "Inline executable content not allowed",
            "params": {
                "content-type": "text/html",
                "content-disposition": "inline"
            }
        },
        "some-valid-object.text": {
            "status": "complete",
            "url": "https://oss-bucket.s3.amazonaws.com/07ce8529-a8e6-4dac-98c3-95e2d10f19cd/bucket/apptestbucket/object/some-valid-object.text?response-content-disposition=attachment%3B%20filename%3D%22some-valid-object.text%22&response-content-type=text&X-Amz-Security-Token=AWS_TOKEN&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20210120T152914Z&X-Amz-SignedHeaders=host&X-Amz-Expires=120&X-Amz-Credential=[AMZ CREDENTIAL]&X-Amz-Signature=6c1abf52e7849asignature",
            "params": {
                "content-type": "text",
                "content-disposition": "attachment; filename=\"some-valid-object.text\""
            },
            "size": 1024334,
            "sha1": "2ae00660a78c643453fac826f288c774c789de64"
        },
        "unmerged-object.json": {
            "status": "chunked",
            "urls": {
                "0-10747471": "https://oss-bucket.s3.amazonaws.com/ead4b508f5a502b9251d16b640128ad83af7e4ba/bucket/apptestbucket/chunk-uuid/uuid-fcdf6275-8789-472f-b811-5472c9262ffc?response-content-disposition=attachment%3B%20filename%3D%22unmerged-object.json%22&response-content-type=application%2Fjson&X-Amz-Security-Token=AWS_TOKEN&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20210120T152914Z&X-Amz-SignedHeaders=host&X-Amz-Expires=120&X-Amz-Credential=[AMZ CREDENTIAL]&X-Amz-Signature=6c1abf52e7849asignature",
                "10747472-19715186": "https://oss-bucket.s3.amazonaws.com/ead4b508f5a502b9251d16b640128ad83af7e4ba/bucket/apptestbucket/chunk-uuid/uuid-cc685997-7afa-4dd3-ada3-71390a973bc5?response-content-disposition=attachment%3B%20filename%3D%22unmerged-object.json%22&response-content-type=application%2Fjson&X-Amz-Security-Token=AWS_TOKEN&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20210120T152914Z&X-Amz-SignedHeaders=host&X-Amz-Expires=120&X-Amz-Credential=[AMZ CREDENTIAL]&X-Amz-Signature=6c1abf52e7849asignature"
            },
            "params": {
                "content-type": "application/json",
                "content-disposition": "attachment; filename=\"unmerged-object.json\""
            },
            "size": 19715187
        }
    }
}
```

## Example 2

Demonstrates the obtaining of a batch of successful and unsuccessful signed URLs, falling back to OSS signed URLs (200).

### Request

```
curl
  -X POST
  -H "Authorization=Bearer eYeL5gYxAT2j3u9TEerxoJoToNbi"
  -H "Content-Type=application/json;charset=UTF-8";
  --data '{
    "requests": [{
      "objectKey": "someObject.dat",
      "If-Modified-Since": "Wed, 15 Jan 2021 00:00:00 GMT"
    },{
      "objectKey": "someOtherObject.pdf",
      "If-None-Match": "5ca0855e5758a92dd9ffdaba5fc974c1ae6a0267"
    },{
      "objectKey": "some-invalid-content-object.html",
      "response-content-type": "text/html",
      "response-content-disposition": "inline"
    },{
      "objectKey": "some-valid-object.text",
      "response-content-type": "text"
    },{
      "objectKey": "unmerged-object.json"
    }]
  }'
  https://developer.api.autodesk.com/oss/v2/buckets/apptestbucket/objects/batchsigneds3download?public-resource-fallback=true
```

### Response

```
{
    "results": {
        "someObject.dat": {
            "status": "skipped",
            "reason": "Not modified"
        },
        "someOtherObject.pdf": {
            "status": "skipped",
            "reason": "Not modified"
        },
        "some-invalid-content-object.html": {
            "status": "error",
            "reason": "Inline executable content not allowed",
            "params": {
                "content-type": "text/html",
                "content-disposition": "inline"
            }
        },
        "some-valid-object.text": {
            "status": "complete",
            "url": "https://oss-bucket.s3.amazonaws.com/07ce8529-a8e6-4dac-98c3-95e2d10f19cd/bucket/apptestbucket/object/some-valid-object.text?response-content-disposition=attachment%3B%20filename%3D%22some-valid-object.text%22&response-content-type=text&X-Amz-Security-Token=AWS_TOKEN&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20210120T152914Z&X-Amz-SignedHeaders=host&X-Amz-Expires=120&X-Amz-Credential=[AMZ CREDENTIAL]&X-Amz-Signature=6c1abf52e7849asignature",
            "params": {
                "content-type": "text",
                "content-disposition": "attachment; filename=\"some-valid-object.text\""
            },
            "size": 1024334,
            "sha1": "2ae00660a78c643453fac826f288c774c789de64"
        },
        "unmerged-object.json": {
            "status": "fallback",
            "url": "http://developer.api.autodesk.com/oss/v2/signedresources/09e24d80-f7ef-4535-8ce7-f08f5c6916f9?region=US",
            "params": {
                "content-type": "application/json",
                "content-disposition": "attachment; filename=\"unmerged-object.json\""
            },
            "size": 19715187
        }
    }
}
```

## Example 3

Demonstrates the obtaining of a mix of successful and unsuccessful signed URLs using the minutesExpiration parameter (200).

### Request

```
curl
  -X POST
  -H "Authorization=Bearer eYeL5gYxAT2j3u9TEerxoJoToNbi"
  -H "Content-Type=application/json;charset=UTF-8";
  --data '{
    "requests": [{
      "objectKey": "someObject.dat",
      "If-Modified-Since": "Wed, 15 Jan 2021 00:00:00 GMT"
    },{
      "objectKey": "someOtherObject.pdf",
      "If-None-Match": "5ca0855e5758a92dd9ffdaba5fc974c1ae6a0267"
    },{
      "objectKey": "some-invalid-content-object.html",
      "response-content-type": "text/html",
      "response-content-disposition": "inline"
    },{
      "objectKey": "some-valid-object.text",
      "response-content-type": "text"
    },{
      "objectKey": "unmerged-object.json"
    }]
  }'
  https://developer.api.autodesk.com/oss/v2/buckets/apptestbucket/objects/batchsigneds3download?minutesExpiration=60
```

### Response

```
{
    "results": {
        "someObject.dat": {
            "status": "skipped",
            "reason": "Not modified"
        },
        "someOtherObject.pdf": {
            "status": "skipped",
            "reason": "Not modified"
        },
        "some-invalid-content-object.html": {
            "status": "error",
            "reason": "Inline executable content not allowed",
            "params": {
                "content-type": "text/html",
                "content-disposition": "inline"
            }
        },
        "some-valid-object.text": {
            "status": "complete",
            "url": "https://oss-bucket.s3.amazonaws.com/07ce8529-a8e6-4dac-98c3-95e2d10f19cd/bucket/apptestbucket/object/some-valid-object.text?response-content-disposition=attachment%3B%20filename%3D%22some-valid-object.text%22&response-content-type=text&X-Amz-Security-Token=AWS_TOKEN&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20210120T152914Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=[AMZ CREDENTIAL]&X-Amz-Signature=6c1abf52e7849asignature",
            "params": {
                "content-type": "text",
                "content-disposition": "attachment; filename=\"some-valid-object.text\""
            },
            "size": 1024334,
            "sha1": "2ae00660a78c643453fac826f288c774c789de64"
        },
        "unmerged-object.json": {
            "status": "chunked",
            "urls": {
                "0-10747471": "https://oss-bucket.s3.amazonaws.com/ead4b508f5a502b9251d16b640128ad83af7e4ba/bucket/apptestbucket/chunk-uuid/uuid-fcdf6275-8789-472f-b811-5472c9262ffc?response-content-disposition=attachment%3B%20filename%3D%22unmerged-object.json%22&response-content-type=application%2Fjson&X-Amz-Security-Token=AWS_TOKEN&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20210120T152914Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=[AMZ CREDENTIAL]&X-Amz-Signature=6c1abf52e7849asignature",
                "10747472-19715186": "https://oss-bucket.s3.amazonaws.com/ead4b508f5a502b9251d16b640128ad83af7e4ba/bucket/apptestbucket/chunk-uuid/uuid-cc685997-7afa-4dd3-ada3-71390a973bc5?response-content-disposition=attachment%3B%20filename%3D%22unmerged-object.json%22&response-content-type=application%2Fjson&X-Amz-Security-Token=AWS_TOKEN&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20210120T152914Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=[AMZ CREDENTIAL]&X-Amz-Signature=6c1abf52e7849asignature"
            },
            "params": {
                "content-type": "application/json",
                "content-disposition": "attachment; filename=\"unmerged-object.json\""
            },
            "size": 19715187
        }
    }
}
```

---
원본 문서: https://aps.autodesk.com/en/docs/data/v2/reference/http/buckets-:bucketKey-objects-batchsigneds3download-POST
