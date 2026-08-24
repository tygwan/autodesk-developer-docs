---
title: "PUT Copy Object"
url_path: reference/http///buckets-:bucketKey-objects-:objectKey-copyto-:newObjectKey-PUT
product: "Data Management API"
surface: "data-management-v2"
protocol: "REST"
document_kind: "endpoint"
api_version: "v2"
section: "reference"
category: "http"
operation_id: "buckets-:bucketKey-objects-:objectKey-copyto-:newObjectKey-PUT"
method: "PUT"
path: "/oss/v2/buckets/{bucketKey}/objects/{objectKey}/copyto/{newObjName}"
auth_context: "app only"
scopes: ["data:write","data:create"]
verification: "docs-only"
---
# oss/v2/buckets/{bucketKey}/objects/{objectKey}/copyto/{newObjName}

Creates a copy of the specified object within the bucket.

## Resource Information

| Method and URI | PUT https://developer.api.autodesk.com/oss/v2/buckets/{bucketKey}/objects/{objectKey}/copyto/{newObjName} |
| --- | --- |
| Authentication Context | App only |
| Required OAuth Scopes | `data:write` `data:create` |
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
| newObjNamestring | A URL-encoded human friendly name to identify the copied object. |

### Response

## HTTP Status Code Summary

| 200OK | The object was successfully copied. |
| --- | --- |
| 400Bad Request | OSS was unable to process the request. The syntax of the request is malformed or the request is missing a required header. Do not repeat the request without fixing the issue. The response body may indicate what is wrong with the request |
| 401Unauthorized | The supplied authorization header was not valid or the supplied token scope was not acceptable. Verify authentication and try again. |
| 403Forbidden | The request was successfully validated but lacking the required permissions. Verify your credentials and permissions before you send this request again. |
| 404Not Found | The requested resource could not be found. Verify the IDs of the resources you requested before you send this request again. |
| 500Internal Server Error | An unexpected error occurred on the server, preventing it from completing your request. Please try again later. If the issue persists, contact the support team for assistance. |

### Response

## Body Structure (200)

| bucketKeystring | The bucket key of the bucket that contains the object. |
| --- | --- |
| objectIdstring | An identifier (URN) that uniquely and persistently identifies the object. |
| objectKeystring | A URL-encoded human-friendly name that identifies the object. |
| sha1string | A hash value computed from the data of the object. |
| sizeint | The total amount of storage space occupied by the object, in bytes. |
| contentTypestring | The format of the data stored within the object, expressed as a MIME type. |
| locationstring | A URL that points to the actual location of the object. |

## Example

Successful Copy Object (200)

### Request

```
curl -v "https://developer.api.autodesk.com/oss/v2/buckets/bucketexamplekey/objects/testobject/copyto/copyoftestobject"
  -X PUT
  -H "Authorization=Bearer 1B6FU8z9S2x1PrjADDfPCzSGrXmI"
```

### Response

```
HTTP/1.1 200 OK
Access-Control-Allow-Credentials: true
Access-Control-Allow-Headers: Authorization, Accept-Encoding, Range, Content-Type
Access-Control-Allow-Methods: GET
Access-Control-Allow-Origin: *
Date: Tue, 24 May 2016 20:57:40 GMT
Server: Apigee Router
Content-Length: 0
Connection: keep-alive

{
  "bucketKey" : "bucketexamplekey",
  "objectId" : "urn:adsk.objects:os.object:bucketexamplekey/copyoftestobject",
  "objectKey" : "copyoftestobject",
  "sha1" : "cdbf71bfc07cbc18372a5dd4b6e161463cb7fd35",
  "size" : 7,
  "contentType" : "text/plain; charset=UTF-8",
  "location" : "https://developer.api.autodesk.com/oss/v2/buckets/bucketexamplekey/objects/copyoftestobject"
}
```

---
원본 문서: https://aps.autodesk.com/en/docs/data/v2/reference/http/buckets-:bucketKey-objects-:objectKey-copyto-:newObjectKey-PUT
