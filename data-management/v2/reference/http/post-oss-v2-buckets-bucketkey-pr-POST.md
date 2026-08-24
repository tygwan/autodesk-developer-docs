---
title: "POST Protect Bucket"
url_path: reference/http///post-oss-v2-buckets-bucketkey-pr-POST
product: "Data Management API"
surface: "data-management-v2"
protocol: "REST"
document_kind: "endpoint"
api_version: "v2"
section: "reference"
category: "http"
operation_id: "post-oss-v2-buckets-bucketkey-pr-POST"
method: "POST"
path: "/oss/v2/buckets/{bucketKey}/protect"
auth_context: "app only"
scopes: ["bucket:update"]
verification: "docs-only"
---
# oss/v2/buckets/{bucketKey}/protect

Modifies the protection status of the specified bucket. When you protect a bucket, it cannot be deleted until you explicitly unprotect it. When you unprotect a bucket, it becomes eligible for deletion again.

You must be the owner of the bucket or have appropriate permissions to modify bucket protection settings.

This operation is idempotent. Protecting an already protected bucket or unprotecting an already unprotected bucket will not result in an error.

The protection status change takes effect immediately upon successful completion of the operation.

## Resource Information

| Method and URI | POST https://developer.api.autodesk.com/oss/v2/buckets/{bucketKey}/protect |
| --- | --- |
| Authentication Context | App only |
| Required OAuth Scopes | `bucket:update` |
| Data Format | JSON |

### Request

## Headers

| Authorization*string | Must be `Bearer <token>`, where `<token>` is a two-legged access token obtained via a [Client Credentials Grant flow](https://aps.autodesk.com/en/docs/oauth/v2/tutorials/get-2-legged-token/). |
| --- | --- |
| Content-Type*string | Must be `application/json` |

### Request

## URI Parameters

| bucketKeystring | The unique identifier of the bucket whose protection status is being modified. The bucket key must be URL-encoded. |
| --- | --- |

### Request

## Body Structure

| protectionboolean | Sets the protection status of the bucket. Possible values:

`true` : Protects the bucket from accidental deletion.
`false` : Leaves the bucket unprotected or removes protection from a previously protected bucket. |
| --- | --- |

### Response

## HTTP Status Code Summary

| 200OK | The bucket protection status was successfully updated. If `protection` was set to `true`, bucket protection is now enabled; if set to `false`, it is now disabled. |
| --- | --- |
| 400Bad Request | OSS was unable to process the request. The syntax of the request is malformed or the request is missing a required header. Do not repeat the request without fixing the issue. The response body may indicate what is wrong with the request |
| 401Unauthorized | The supplied authorization header was not valid or the supplied token scope was not acceptable. Verify authentication and try again. |
| 403Forbidden | The request was successfully validated but lacking the required permissions. Verify your credentials and permissions before you send this request again. |
| 404Not Found | The requested resource could not be found. Verify the IDs of the resources you requested before you send this request again. |
| 500Internal Server Error | An unexpected error occurred on the server, preventing it from completing your request. Please try again later. If the issue persists, contact the support team for assistance. |

Returns a string indicating protection status.

## Example 1

Basic Successful Protect Bucket (200)

### Request

```
curl --location 'https://developer.api.autodesk.com/oss/v2/buckets/prodbucket_03/protect' \
  --header 'Authorization: Bearer eyJh...' \
  --header 'Content-Type: application/json' \
  --header 'x-ads-region: US' \
  --data '{
      "protection": true
  }'
```

### Response

```
HTTP/1.1 200 OK
Access-Control-Allow-Credentials: true
Access-Control-Allow-Headers: Authorization, Accept-Encoding, Range, Content-Type
Access-Control-Allow-Methods: GET, POST, PUT, DELETE
Access-Control-Allow-Origin: *
Content-Type: text/plain; charset=utf-8
Date: Tue, 26 Aug 2025 10:30:15 GMT
Server: Apigee Router
Content-Length: 43
Connection: keep-alive

Bucket prodbucket_03 protection set to true
```

## Example 2

Basic Successful Unprotect Bucket (200)

### Request

```
curl --location 'https://developer.api.autodesk.com/oss/v2/buckets/prodbucket_03/protect' \
  --header 'Authorization: Bearer eyJhb...' \
  --header 'Content-Type: application/json' \
  --header 'x-ads-region: US' \
  --data '{
      "protection": false
  }'
```

### Response

```
HTTP/1.1 200 OK
Access-Control-Allow-Credentials: true
Access-Control-Allow-Headers: Authorization, Accept-Encoding, Range, Content-Type
Access-Control-Allow-Methods: GET, POST, PUT, DELETE
Access-Control-Allow-Origin: *
Content-Type: text/plain; charset=utf-8
Date: Tue, 26 Aug 2025 10:35:20 GMT
Server: Apigee Router
Content-Length: 44
Connection: keep-alive

Bucket prodbucket_03 protection set to false
```

---
원본 문서: https://aps.autodesk.com/en/docs/data/v2/reference/http/post-oss-v2-buckets-bucketkey-pr-POST
