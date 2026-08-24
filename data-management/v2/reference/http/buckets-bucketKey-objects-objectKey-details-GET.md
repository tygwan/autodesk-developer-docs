---
title: "GET Get Object Details"
url_path: reference/http///buckets-:bucketKey-objects-:objectKey-details-GET
product: "Data Management API"
surface: "data-management-v2"
protocol: "REST"
document_kind: "endpoint"
api_version: "v2"
section: "reference"
category: "http"
operation_id: "buckets-:bucketKey-objects-:objectKey-details-GET"
method: "GET"
path: "/oss/v2/buckets/{bucketKey}/objects/{objectKey}/details"
auth_context: "app only"
scopes: ["data:read"]
verification: "docs-only"
---
# oss/v2/buckets/{bucketKey}/objects/{objectKey}/details

Retrieves detailed information about the specified object.

## Resource Information

| Method and URI | GET https://developer.api.autodesk.com/oss/v2/buckets/{bucketKey}/objects/{objectKey}/details |
| --- | --- |
| Authentication Context | App only |
| Required OAuth Scopes | `data:read` |
| Data Format | JSON |

### Request

## Headers

| Authorization*string | Must be `Bearer <token>`, where `<token>` is a two-legged access token obtained via a [Client Credentials Grant flow](https://aps.autodesk.com/en/docs/oauth/v2/tutorials/get-2-legged-token/). |
| --- | --- |
| If-Modified-Sincestring | A timestamp in the HTTP date format (Mon, DD Month YYYY HH:MM:SS GMT). The requested data is returned only if the object has been modified since the specified timestamp. If not, a 304 (Not Modified) HTTP status is returned. |

### Request

## URI Parameters

| bucketKeystring | The unique ID of the bucket that contains the objects you are operating on. `bucketKey` must be URL-encoded. |
| --- | --- |
| objectKeystring | The URL-encoded human friendly name of the object. |

### Request

## Query String Parameters

| withenum:string | Possible values: `createdDate`, `lastAccessedDate`, `lastModifiedDate`, `userDefinedMetadata` |
| --- | --- |

### Response

## HTTP Status Code Summary

| 200OK | The object details were successfully retrieved. |
| --- | --- |
| 304Not Modified | The object has not been modified since the specified date. |
| 400Bad Request | OSS was unable to process the request. The syntax of the request is malformed or the request is missing a required header. Do not repeat the request without fixing the issue. The response body may indicate what is wrong with the request |
| 401Unauthorized | The supplied authorization header was not valid or the supplied token scope was not acceptable. Verify authentication and try again. |
| 403Forbidden | The request was successfully validated but lacking the required permissions. Verify your credentials and permissions before you send this request again. |
| 404Not Found | The specified `bucketKey` or `objectKey` does not exist. |
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
| createdDateint | The time the object was created, represented as a Unix timestamp. Only returned if explicitly requested using the `with` query string parameter. |
| lastAccessedDateint | The time the object was last accessed, represented as a Unix timestamp. Only returned if explicitly requested using the `with` query string parameter. |
| lastModifiedDateint | The time the object was most recently modified, represented as a Unix timestamp. Only returned if explicitly requested using the `with` query string parameter. |
| userDefinedMetadatastring | Any custom metadata, if available. Only returned if explicitly requested using the `with` query string parameter. |

## Example

Get Object Details - Success (200)

### Request

```
curl -v "https://developer.api.autodesk.com/oss/v2/buckets/apptestbucket/objects/test.txt/details"
  -X GET
  -H "Authorization: Bearer ShiAeQ67rdNSfmyEmtGW8Lnrcqto"
  -H "Content-Type: application/json"
```

### Response

```
HTTP/1.1 200 OK
Access-Control-Allow-Credentials: true
Access-Control-Allow-Headers: Authorization, Accept-Encoding, Range, Content-Type
Access-Control-Allow-Methods: GET
Access-Control-Allow-Origin: *
Content-Type: application/json; charset=utf-8
Date: Sat, 21 May 2016 00:23:28 GMT
Server: Apigee Router
Content-Length: 401
Connection: keep-alive

{
  "bucketKey" : "apptestbucket",
  "objectId" : "urn:adsk.objects:os.object:apptestbucket/test.txt",
  "objectKey" : "test.txt",
  "sha1" : "33a16388013ce310564af70b0ef5320d8fd85444",
  "size" : 618,
  "contentType" : "application/x-www-form-urlencoded",
  "location" : "https://developer.api.autodesk.com/oss/v2/buckets/apptestbucket/objects/test.txt",
  "blockSizes" : [ 2048 ]
}
```

---
원본 문서: https://aps.autodesk.com/en/docs/data/v2/reference/http/buckets-:bucketKey-objects-:objectKey-details-GET
