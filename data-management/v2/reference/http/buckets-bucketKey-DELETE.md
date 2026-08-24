---
title: "DELETE Delete Bucket"
url_path: reference/http///buckets-:bucketKey-DELETE
product: "Data Management API"
surface: "data-management-v2"
protocol: "REST"
document_kind: "endpoint"
api_version: "v2"
section: "reference"
category: "http"
operation_id: "buckets-:bucketKey-DELETE"
method: "DELETE"
path: "/oss/v2/buckets/{bucketKey}"
auth_context: "app only"
scopes: ["bucket:delete"]
verification: "docs-only"
---
# oss/v2/buckets/{bucketKey}

Deletes the specified bucket. Only the application that owns the bucket can call this operation. All other applications that call this operation will receive a “403 Forbidden” error.

The initial processing of a bucket deletion request can be time-consuming. So, we recommend only deleting buckets containing a few objects, like those typically used for acceptance testing and prototyping.

**Note:** Bucket keys of deleted buckets will not be immediately available for reuse.

**Tip:** You can use the [Protect Bucket](https://aps.autodesk.com/en/docs/data/v2/reference/http/post-oss-v2-buckets-bucketkey-pr-POST/) operation to prevent accidental deletion.

## Resource Information

| Method and URI | DELETE https://developer.api.autodesk.com/oss/v2/buckets/{bucketKey} |
| --- | --- |
| Authentication Context | App only |
| Required OAuth Scopes | `bucket:delete` |
| Data Format | JSON |

### Request

## Headers

| Authorization*string | Must be `Bearer <token>`, where `<token>` is a two-legged access token obtained via a [Client Credentials Grant flow](https://aps.autodesk.com/en/docs/oauth/v2/tutorials/get-2-legged-token/). |
| --- | --- |

### Request

## URI Parameters

| bucketKeystring | The unique identifier of the bucket to delete. |
| --- | --- |

### Response

## HTTP Status Code Summary

| 200OK | The bucket deletion request was accepted. |
| --- | --- |
| 400Bad Request | The request could not be processed due to malformed syntax or missing headers. |
| 401Unauthorized | The supplied authorization header was not valid or the supplied token scope was not acceptable. Verify authentication and try again. |
| 403Forbidden | The request was successfully validated but lacking the required permissions. Verify your credentials and permissions before you send this request again. |
| 404Not Found | The specified `bucketKey` does not exist. |
| 409Conflict | The specified bucket is already marked for deletion. |
| 500Internal Server Error | An unexpected error occurred on the server, preventing it from completing your request. Please try again later. If the issue persists, contact the support team for assistance. |

### Response

## Body Structure (200)

Response for 200 has no body.

## Example

Delete Bucket (200)

### Request

```
   curl -v "https://developer.api.autodesk.com/oss/v2/buckets/bucketexamplekey"
-X DELETE
-H "Authorization: Bearer kuhodzPEHSCrWH3Pm1WuBMBnxw39"
```

### Response

```
HTTP/1.1 200 OK
Access-Control-Allow-Credentials: true
Access-Control-Allow-Headers: Authorization, Accept-Encoding, Range, Content-Type
Access-Control-Allow-Methods: GET
Access-Control-Allow-Origin: *
Date: Wed, 25 May 2016 19:39:39 GMT
Server: Apigee Router
Content-Length: 0
Connection: keep-alive
```

---
원본 문서: https://aps.autodesk.com/en/docs/data/v2/reference/http/buckets-:bucketKey-DELETE
