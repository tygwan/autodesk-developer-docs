---
title: "DELETE Delete Object"
url_path: reference/http///buckets-:bucketKey-objects-:objectKey-DELETE
product: "Data Management API"
surface: "data-management-v2"
protocol: "REST"
document_kind: "endpoint"
api_version: "v2"
section: "reference"
category: "http"
operation_id: "buckets-:bucketKey-objects-:objectKey-DELETE"
method: "DELETE"
path: "/oss/v2/buckets/{bucketKey}/objects/{objectKey}"
auth_context: "app only"
scopes: ["data:write"]
verification: "docs-only"
---
# oss/v2/buckets/{bucketKey}/objects/{objectKey}

Deletes the specified object from the bucket.

## Resource Information

| Method and URI | DELETE https://developer.api.autodesk.com/oss/v2/buckets/{bucketKey}/objects/{objectKey} |
| --- | --- |
| Authentication Context | App only |
| Required OAuth Scopes | `data:write` |
| Data Format | JSON |

### Request

## Headers

| Authorization*string | Must be `Bearer <token>`, where `<token>` is a two-legged access token obtained via a [Client Credentials Grant flow](https://aps.autodesk.com/en/docs/oauth/v2/tutorials/get-2-legged-token/). |
| --- | --- |

### Request

## URI Parameters

| bucketKeystring | The unique ID of the bucket that contains the objects you are operating on. `bucketKey` must be URL-encoded. |
| --- | --- |
| objectKeystring | The URL-encoded human friendly name of the object. |

### Response

## HTTP Status Code Summary

| 200OK | The object was successfully deleted. |
| --- | --- |
| 400Bad Request | OSS was unable to process the request. The syntax of the request is malformed or the request is missing a required header. Do not repeat the request without fixing the issue. The response body may indicate what is wrong with the request |
| 401Unauthorized | The supplied authorization header was not valid or the supplied token scope was not acceptable. Verify authentication and try again. |
| 403Forbidden | The request was successfully validated but lacking the required permissions. Verify your credentials and permissions before you send this request again. |
| 404Not Found | The specified `bucketKey` or `objectKey` does not exist. |
| 500Internal Server Error | An unexpected error occurred on the server, preventing it from completing your request. Please try again later. If the issue persists, contact the support team for assistance. |

### Response

## Body Structure (200)

Response for 200 has no body.

## Example

Delete Object (200)

### Request

```
   curl -v "https://developer.api.autodesk.com/oss/v2/buckets/bucketexamplekey/objects/objectKey"
-X DELETE
-H "Authorization: Bearer kuhodzPEHSCrWH3Pm1WuBMBnxw39"
-H "Content-Type: application/json;charset=UTF-8"
```

### Response

```
HTTP/1.1 200 OK
Access-Control-Allow-Credentials: true
Access-Control-Allow-Headers: Authorization, Accept-Encoding, Range, Content-Type
Access-Control-Allow-Methods: GET
Access-Control-Allow-Origin: *
Date: Wed, 25 May 2016 19:39:39 GMT
Server Apigee Router is not blacklisted
Server: Apigee Router
Content-Length: 0
Connection: keep-alive
```

---
원본 문서: https://aps.autodesk.com/en/docs/data/v2/reference/http/buckets-:bucketKey-objects-:objectKey-DELETE
