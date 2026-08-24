---
title: "PUT Upload Object Using Signed URL"
url_path: reference/http///signedresources-:id-resumable-PUT
product: "Data Management API"
surface: "data-management-v2"
protocol: "REST"
document_kind: "endpoint"
api_version: "v2"
section: "reference"
category: "http"
operation_id: "signedresources-:id-resumable-PUT"
method: "PUT"
path: "/oss/v2/signedresources/{hash}/resumable"
auth_context: "app only"
scopes: ["data:write"]
verification: "docs-only"
---
# oss/v2/signedresources/{hash}/resumable

Uploads an object using an OSS signed URL with resumable upload capability. Use this operation to upload an object in chunks.

**Note:** The signed URL returned by [Generate Signed OSS URL](https://aps.autodesk.com/en/docs/data/v2/reference/http/signedresources-:id-GET/) contains the `hash` as a URI parameter.

## Resource Information

| Method and URI | PUT https://developer.api.autodesk.com/oss/v2/signedresources/{hash}/resumable |
| --- | --- |
| Authentication Context | App only |
| Required OAuth Scopes | `data:write` |
| Data Format | JSON |

### Request

## Headers

| Authorization*string | Must be `Bearer <token>`, where `<token>` is a two-legged access token obtained via a [Client Credentials Grant flow](https://aps.autodesk.com/en/docs/oauth/v2/tutorials/get-2-legged-token/). |
| --- | --- |
| Content-Range*string | The byte range to upload, specified in the form `bytes=<START_BYTE>-<END_BYTE>`. |
| Content-Dispositionstring | The suggested file name to use when this object is downloaded as a file. |
| x-ads-regionstring | Specifies where the bucket containing the object is stored. Possible values are:

`US` - (Default) Data center for the US region.
`EMEA` - Data center for the European Union, Middle East, and Africa.
`AUS` - Data center for Australia.
`CAN` - Data center for the Canada region.
`DEU` - Data center for the Germany region.
`IND` - Data center for the India region.
`JPN` - Data center for the Japan region.
`GBR` - Data center for the United Kingdom region. |
| Session-Id*string | An ID to uniquely identify the file upload session. |
| Content-Type*string | Must be `application/x-www-form-urlencoded` |

### Request

## URI Parameters

| hashstring | The ID component of the signed URL.
**Note:** The signed URL returned by [Generate Signed OSS URL](https://aps.autodesk.com/en/docs/data/v2/reference/http/signedresources-:id-GET/) contains `hash` as a URI parameter. |
| --- | --- |

### Request

## Body Structure

| body*string | The chunk to upload. |
| --- | --- |

### Response

## HTTP Status Code Summary

| 200OK | The object was successfully uploaded. |
| --- | --- |
| 202Accepted | The upload request was accepted but processing is not yet complete. Call this operation iteratively until a 200 is returned. |
| 400Bad Request | OSS was unable to process the request. The syntax of the request is malformed or the request is missing a required header. Do not repeat the request without fixing the issue. The response body may indicate what is wrong with the request |
| 401Unauthorized | The supplied authorization header was not valid or the supplied token scope was not acceptable. Verify authentication and try again. |
| 403Forbidden | The request was successfully validated but lacking the required permissions. Verify your credentials and permissions before you send this request again. |
| 404Not Found | The requested resource could not be found. Verify the IDs of the resources you requested before you send this request again. |
| 409Conflict | CONFLICT, The specified bucket key already exists. |
| 416 | REQUEST RANGE NOT SATISFIABLE, Missing Content-Range header. |
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

### Response

## Body Structure (202)

| resultstring | A human friendly description of the state of processing. |
| --- | --- |

## Example 1

Range Accepted (202)

### Request

```
curl -v "https://developer.api.autodesk.com/oss/v2/signedresources/4ff88e65-e7c0-4b10-bac8-750f48b37cf2/resumable"
  -X PUT
  -H "Content-Type:text/plain; charset=UTF-8"
  -H "Content-Range:bytes 0-0/10" -H "Session-Id:1661831201"
  --data '
  X
  '
```

### Response

```
HTTP/1.1 202 Accepted
Access-Control-Allow-Credentials: true
Access-Control-Allow-Headers: Authorization, Accept-Encoding, Range, Content-Type
Access-Control-Allow-Methods: GET
Access-Control-Allow-Origin: *
Date: Tue, 24 May 2016 20:57:40 GMT
Server: Apigee Router
Content-Length: 0
Connection: keep-alive
```

## Example 2

Upload Complete (200)

### Request

```
curl -v "https://developer.api.autodesk.com/oss/v2/signedresources/4ff88e65-e7c0-4b10-bac8-750f48b37cf2/resumable"
  -X PUT
  -H "Content-Type:text/plain; charset=UTF-8"
  -H "Content-Range:bytes 1-9/10"
  -H "Session-Id:1661831201"
  --data '
  bcdefghij
  '
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
 "objectId" : "urn:adsk.objects:os.object:bucketexamplekey/testobject",
 "objectKey" : "testobject",
 "size" : 10,
 "contentType" : "text/plain; charset=UTF-8",
 "location" : "https://developer.api.autodesk.com/oss/v2/buckets/bucketexamplekey/objects/testobject"
}
```

## Example 3

Missing Session-ID Header (400)

### Request

```
curl -v "https://developer.api.autodesk.com/oss/v2/signedresources/4ff88e65-e7c0-4b10-bac8-750f48b37cf2/resumable"
  -X PUT
  -H "Content-Type:text/plain; charset=UTF-8"
  -H "Content-Range:bytes 1-9/10"
  --data '
  bcdefghij
  '
```

### Response

```
HTTP/1.1 400 Bad Request
Access-Control-Allow-Credentials: true
Access-Control-Allow-Headers: Authorization, Accept-Encoding, Range, Content-Type
Access-Control-Allow-Methods: GET
Access-Control-Allow-Origin: *
Date: Tue, 24 May 2016 20:57:40 GMT
Server: Apigee Router
Content-Length: 0
Connection: keep-alive

Session-Id header is missed
```

#### .

#### Example 4

### Missing Content-Range Header (416)

```
curl -v "https://developer.api.autodesk.com/oss/v2/signedresources/4ff88e65-e7c0-4b10-bac8-750f48b37cf2/resumable"
  -X PUT
  -H "Content-Type:text/plain; charset=UTF-8"
  -H "Session-Id:1661831201"
  --data '
  bcdefghij
  '
```

### Response

```
HTTP/1.1 416 Requested Range Not Satisfiable
Access-Control-Allow-Credentials: true
Access-Control-Allow-Headers: Authorization, Accept-Encoding, Range, Content-Type
Access-Control-Allow-Methods: GET
Access-Control-Allow-Origin: *
Date: Tue, 24 May 2016 20:57:40 GMT
Server: Apigee Router
Content-Length: 0
Connection: keep-alive

Missing Content-Range header
```

#### .

#### Example 5

Overlapping Range (416)

Suppose a range of bytes (positions 1-9) was uploaded previously.

### Request

```
curl -v "https://developer.api.autodesk.com/oss/v2/signedresources/4ff88e65-e7c0-4b10-bac8-750f48b37cf2/resumable"
  -X PUT
  -H "Content-Type:text/plain; charset=UTF-8"
  -H "Content-Range:bytes 1-9/10"
  -H "Session-Id:1661831201"
  --data '
  bcdefghij
  '
```

### Response

```
HTTP/1.1 416 Requested Range Not Satisfiable
Access-Control-Allow-Credentials: true
Access-Control-Allow-Headers: Authorization, Accept-Encoding, Range, Content-Type
Access-Control-Allow-Methods: GET
Access-Control-Allow-Origin: *
Date: Tue, 24 May 2016 20:57:40 GMT
Server: Apigee Router
Content-Length: 0
Connection: keep-alive

{
   "reason" : "Overlapping Ranges"
}
```

---
원본 문서: https://aps.autodesk.com/en/docs/data/v2/reference/http/signedresources-:id-resumable-PUT
