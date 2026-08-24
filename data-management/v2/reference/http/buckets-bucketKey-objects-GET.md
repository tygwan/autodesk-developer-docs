---
title: "GET List Objects"
url_path: reference/http///buckets-:bucketKey-objects-GET
product: "Data Management API"
surface: "data-management-v2"
protocol: "REST"
document_kind: "endpoint"
api_version: "v2"
section: "reference"
category: "http"
operation_id: "buckets-:bucketKey-objects-GET"
method: "GET"
path: "/oss/v2/buckets/{bucketKey}/objects"
auth_context: "app only"
scopes: ["data:read"]
verification: "docs-only"
---
# oss/v2/buckets/{bucketKey}/objects

Retrieves a list of objects in the specified bucket.

Only the application that owns the bucket can call this operation. All other applications that call this operation will receive a “403 Forbidden” error.

## Resource Information

| Method and URI | GET https://developer.api.autodesk.com/oss/v2/buckets/{bucketKey}/objects |
| --- | --- |
| Authentication Context | App only |
| Required OAuth Scopes | `data:read` |
| Data Format | JSON |

### Request

## Headers

| Authorization*string | Must be `Bearer <token>`, where `<token>` is a two-legged access token obtained via a [Client Credentials Grant flow](https://aps.autodesk.com/en/docs/oauth/v2/tutorials/get-2-legged-token/). |
| --- | --- |

### Request

## URI Parameters

| bucketKeystring | The unique ID of the bucket that contains the objects you are operating on. `bucketKey` must be URL-encoded. |
| --- | --- |

### Request

## Query String Parameters

| limitint | The maximum number of items to return per page. This parameter controls pagination by limiting the size of each response.
Acceptable values: 1-100. Default value: 10. |
| --- | --- |
| beginsWithstring | Filters the results by the value you specify. Only the objects with their `objectKey` beginning with the specified string are returned. |
| startAtstring | The ID of the last item from the previous result set. Use this parameter to retrieve the next page of results by starting from the item immediately following the specified ID. |

### Response

## HTTP Status Code Summary

| 200OK | The requested objects were successfully retrieved. |
| --- | --- |
| 400Bad Request | OSS was unable to process the request. The syntax of the request is malformed or the request is missing a required header. Do not repeat the request without fixing the issue. The response body may indicate what is wrong with the request |
| 401Unauthorized | The supplied authorization header was not valid or the supplied token scope was not acceptable. Verify authentication and try again. |
| 403Forbidden | The request was successfully validated but lacking the required permissions. Verify your credentials and permissions before you send this request again. |
| 500Internal Server Error | An unexpected error occurred on the server, preventing it from completing your request. Please try again later. If the issue persists, contact the support team for assistance. |

### Response

## Body Structure (200)

| itemsarray: object |   |
| --- | --- |
| bucketKeystring | The bucket key of the bucket that contains the object. |
| objectIdstring | An identifier (URN) that uniquely and persistently identifies the object. |
| objectKeystring | A URL-encoded human-friendly name that identifies the object. |
| sha1string | A hash value computed from the data of the object. |
| sizeint | The total amount of storage space occupied by the object, in bytes. |
| contentTypestring | The format of the data stored within the object, expressed as a MIME type. |
| locationstring | A URL that points to the actual location of the object. |
| nextstring | The URL to be used to retrieve the next page of results, if available. It will be present only when there are more items to be retrieved after the current set. |

## Example

Successful object list (200)

### Request

```
curl -v "https://developer.api.autodesk.com/oss/v2/buckets/apptestbucket/objects?limit=1"
  -X GET
  -H "Authorization: Bearer ShiAeQ67rdNSfmyEmtGW8Lnrcqto"
  -H "Content-Type: application/json"
```

### Response

```
HTTP/1.1 200 OK
Access-Control-Allow-Credentials: true
Access-Control-Allow-Headers: Authorization
Access-Control-Allow-Methods: GET
Access-Control-Allow-Origin: *
Content-Type: application/json; charset=utf-8
Date: Sat, 21 May 2016 00:05:30 GMT
Server: Apigee Router
Connection: keep-alive

      {
  "items" : [
    {
      "bucketKey" : "apptestbucket",
      "objectKey" : "objectKeyFoo",
      "objectId" : "urn:adsk.objects:os.object:apptestbucket/objectKeyFoo",
      "sha1" : "cdbf71bfc07cbc18372a5dd4b6e161463cb7fd35",
      "size" : 7,
      "location" : "https://developer.api.autodesk.com/oss/v2/buckets/apptestbucket/objects/objectKeyFoo"
    }
  ],
  "next" : "https://developer.api.autodesk.com/oss/v2/buckets/apptestbucket/objects?startAt=objectKeyFoo&limit=1"
}
```

---
원본 문서: https://aps.autodesk.com/en/docs/data/v2/reference/http/buckets-:bucketKey-objects-GET
