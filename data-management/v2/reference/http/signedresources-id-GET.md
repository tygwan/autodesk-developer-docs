---
title: "GET Download Object Using Signed URL"
url_path: reference/http///signedresources-:id-GET
product: "Data Management API"
surface: "data-management-v2"
protocol: "REST"
document_kind: "endpoint"
api_version: "v2"
section: "reference"
category: "http"
operation_id: "signedresources-:id-GET"
method: "GET"
path: "/oss/v2/signedresources/{hash}"
auth_context: "app only"
scopes: ["data:read"]
verification: "docs-only"
---
# oss/v2/signedresources/{hash}

Downloads an object using an OSS signed URL.

**Note:** The signed URL returned by [Generate Signed OSS URL](https://aps.autodesk.com/en/docs/data/v2/reference/http/signedresources-:id-GET/) contains the `hash` URI parameter.

## Resource Information

| Method and URI | GET https://developer.api.autodesk.com/oss/v2/signedresources/{hash} |
| --- | --- |
| Authentication Context | App only |
| Required OAuth Scopes | `data:read` |
| Data Format | JSON |

### Request

## Headers

| Authorization*string | Must be `Bearer <token>`, where `<token>` is a two-legged access token obtained via a [Client Credentials Grant flow](https://aps.autodesk.com/en/docs/oauth/v2/tutorials/get-2-legged-token/). |
| --- | --- |
| Rangestring | The byte range to download, specified in the form `bytes=<START_BYTE>-<END_BYTE>`. |
| If-None-Matchstring | The last known `sha1` value of the object. OSS returns the requested data only if the `If-None-Match` header differs from the `sha1` value of the object on OSS, which indicates that the object on OSS is newer. If not, it returns a 304 “Not Modified” HTTP status. |
| If-Modified-Sincestring | A timestamp in the HTTP date format (Mon, DD Month YYYY HH:MM:SS GMT). The requested data is returned only if the object has been modified since the specified timestamp. If not, a 304 (Not Modified) HTTP status is returned. |
| Accept-Encodingstring | The compression format you prefer to receive the data. Possible values are:

`gzip` - Use the gzip format

**Note:** You cannot use `Accept-Encoding:gzip` with a Range header containing an end byte range. OSS will not honor the End byte range if `Accept-Encoding: gzip` header is used. |

### Request

## URI Parameters

| hashstring | The ID component of the signed URL.
**Note:** The signed URL returned by [Generate Signed OSS URL](https://aps.autodesk.com/en/docs/data/v2/reference/http/signedresources-:id-GET/) contains `hash` as a URI parameter. |
| --- | --- |

### Request

## Query String Parameters

| regionenum:string | Specifies where the bucket containing the object is stored. Possible values are:

`US` - (Default) Data center for the US region.
`EMEA` - Data center for the European Union, Middle East, and Africa.
`AUS` - Data center for Australia.
`CAN` - Data center for the Canada region.
`DEU` - Data center for the Germany region.
`IND` - Data center for the India region.
`JPN` - Data center for the Japan region.
`GBR` - Data center for the United Kingdom region. |
| --- | --- |
| response-content-dispositionstring | The value of the Content-Disposition header you want to receive when you download the object using the signed URL. If you do not specify a value, the Content-Disposition header defaults to the value stored with OSS. |
| response-content-typestring | The value of the Content-Type header you want to receive when you download the object using the signed URL. If you do not specify a value, the Content-Type header defaults to the value stored with OSS. |

### Response

## HTTP Status Code Summary

| 200OK | The object content was successfully downloaded. |
| --- | --- |
| 206 | Partial content of the object was returned as requested. |
| 400Bad Request | OSS was unable to process the request. The syntax of the request is malformed or the request is missing a required header. Do not repeat the request without fixing the issue. The response body may indicate what is wrong with the request |
| 401Unauthorized | The supplied authorization header was not valid or the supplied token scope was not acceptable. Verify authentication and try again. |
| 403Forbidden | The request was successfully validated but lacking the required permissions. Verify your credentials and permissions before you send this request again. |
| 404Not Found | The requested resource could not be found. Verify the IDs of the resources you requested before you send this request again. |
| 416 | The requested range is not valid for this object. |
| 500Internal Server Error | An unexpected error occurred on the server, preventing it from completing your request. Please try again later. If the issue persists, contact the support team for assistance. |

### Response

## Body Structure (200)

Response for 200 has no body.

### Response

## Body Structure (206)

Response for 206 has no body.

## Example

Download Using a Signed URL - Success (200)

### Request

```
curl -v "https://developer.api.autodesk.com/oss/v2/signedresources/7ffc5eef-1407-4c24-b3f3-3cbfe32a9232?region=US"
  -X GET
```

### Response

```
HTTP/1.1 200 OK
Access-Control-Allow-Credentials: true
Access-Control-Allow-Headers: Authorization, Accept-Encoding, Range, Content-Type
Access-Control-Allow-Methods: GET
Access-Control-Allow-Origin: *
Content-Disposition: attachment; filename="test.txt"
Content-Type: application/x-www-form-urlencoded
Date: Mon, 23 May 2016 18:10:35 GMT
ETag: "33a16388013ce310564af70b0ef5320d8fd85444"
Server: Apigee Router
Content-Length: 618
Connection: keep-alive

The quick brown fox jumps over the lazy dog
Pack my box with five dozen liquor jugs
Cozy lummox gives smart squid who asks for job pen
Sphinx of black quartz, judge my vow
Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
```

---
원본 문서: https://aps.autodesk.com/en/docs/data/v2/reference/http/signedresources-:id-GET
