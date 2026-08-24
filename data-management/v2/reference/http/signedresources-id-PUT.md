---
title: "PUT Replace Object Using Signed URL"
url_path: reference/http///signedresources-:id-PUT
product: "Data Management API"
surface: "data-management-v2"
protocol: "REST"
document_kind: "endpoint"
api_version: "v2"
section: "reference"
category: "http"
operation_id: "signedresources-:id-PUT"
method: "PUT"
path: "/oss/v2/signedresources/{hash}"
auth_context: "app only"
scopes: ["data:write"]
verification: "docs-only"
---
# oss/v2/signedresources/{hash}

Replaces an object that already exists on OSS, using an OSS signed URL.

The signed URL must fulfil the following conditions:
- The signed URL is valid (it has not expired as yet).
- It was generated with `write` or `readwrite` for the `access` parameter.

## Resource Information

| Method and URI | PUT https://developer.api.autodesk.com/oss/v2/signedresources/{hash} |
| --- | --- |
| Authentication Context | App only |
| Required OAuth Scopes | `data:write` |
| Data Format | JSON |

### Request

## Headers

| Authorization*string | Must be `Bearer <token>`, where `<token>` is a two-legged access token obtained via a [Client Credentials Grant flow](https://aps.autodesk.com/en/docs/oauth/v2/tutorials/get-2-legged-token/). |
| --- | --- |
| Content-Length*integer | The size of the data contained in the request body, in bytes. |
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
| If-Matchstring | The current value of the `sha1` attribute of the object you want to replace. OSS checks the `If-Match` header against the `sha1` attribute of the object in OSS. If they match, OSS allows the object to be overwritten. Otherwise, it means that the object on OSS has been modified since you retrieved the `sha1` and the request fails. |
| Content-Type*string | Must be `application/x-www-form-urlencoded` |

### Request

## URI Parameters

| hashstring | The ID component of the signed URL.
**Note:** The signed URL returned by [Generate Signed OSS URL](https://aps.autodesk.com/en/docs/data/v2/reference/http/signedresources-:id-GET/) contains `hash` as a URI parameter. |
| --- | --- |

### Request

## Body Structure

| body*string | The object to upload. |
| --- | --- |

### Response

## HTTP Status Code Summary

| 200OK | The object was successfully replaced. |
| --- | --- |
| 400Bad Request | OSS was unable to process the request. The syntax of the request is malformed or the request is missing a required header. Do not repeat the request without fixing the issue. The response body may indicate what is wrong with the request |
| 401Unauthorized | The supplied authorization header was not valid or the supplied token scope was not acceptable. Verify authentication and try again. |
| 403Forbidden | The request was successfully validated but lacking the required permissions. Verify your credentials and permissions before you send this request again. |
| 404Not Found | The requested resource could not be found. Verify the IDs of the resources you requested before you send this request again. |
| 412 | The precondition failed. The value sent for the If-Match header does not match the `sha1` value stored in OSS for this object. |
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

## Example 1

Successful Upload with Signed URL (200)

Suppose someone created a signed resource with `write` access previously.

### Request

```
curl -v "https://developer.api.autodesk.com/oss/v2/buckets/bucketexamplekey/objects/testobject/signed?access=write"
  -X POST
  -H "Authorization: Bearer G2KbfMBjPEnU1vYu92JrcYukJEVw"
  -H "Content-Type: application/json;charset=UTF-8"
  --data '
  { }
  '
```

### Request

```
curl -v "https://developer.api.autodesk.com/oss/v2/signedresources/e63f23e2-2486-4f32-a921-bcfe8fade5e3"
  -X PUT
  -H "Content-Type: text/plain; charset=UTF-8"
  --data '
  BODY: new file content bytes...
  '
```

### Response

```
HTTP/1.1 200 OK
Access-Control-Allow-Credentials: true
Access-Control-Allow-Headers: Authorization, Accept-Encoding, Range, Content-Type
Access-Control-Allow-Methods: GET
Access-Control-Allow-Origin: *
Content-Type: application/json; charset=utf-8
Date: Wed, 25 May 2016 16:08:55 GMT
Server: Apigee Router
Content-Length: 372
Connection: keep-alive
      {
  "bucketKey" : "bucketexamplekey",
  "objectId" : "urn:adsk.objects:os.object:bucketexamplekey/testobject",
  "objectKey" : "testobject",
  "sha1" : "4c33cac14fbb94bd467caa97902aa6550992f0b6",
  "size" : 31,
  "contentType" : "text/plain; charset=UTF-8",
  "location" : "https://developer.api.autodesk.com/oss/v2/buckets/bucketexamplekey/objects/testobject"
}
```

## Example 2

Forbidden Upload to Signed URL (403)

If the signed resource did not have `write` access previously, it is not possible to update it.

### Request

```
    curl -v "https://developer.api.autodesk.com/oss/v2/signedresources/e63f23e2-2486-4f32-a921-bcfe8fade5e3"
-X PUT
-H "Content-Type: text/plain; charset=UTF-8"
--data '
BODY: new file content bytes...
'
```

### Response

```
      Access-Control-Allow-Credentials: true
Access-Control-Allow-Headers: Authorization, Accept-Encoding, Range, Content-Type
Access-Control-Allow-Methods: GET
Access-Control-Allow-Origin: *
Content-Type: application/json; charset=utf-8
Date: Wed, 25 May 2016 16:08:55 GMT
Server: Apigee Router
Content-Length: 372
Connection: keep-alive
      HTTP/1.1 403 Forbidden
      {
    "reason" : "Signed Resource does not grant write permissions"
}
```

---
원본 문서: https://aps.autodesk.com/en/docs/data/v2/reference/http/signedresources-:id-PUT
