---
title: "DELETE Delete Object Using Signed URL"
url_path: reference/http///signedresources-:id-DELETE
product: "Data Management API"
surface: "data-management-v2"
protocol: "REST"
document_kind: "endpoint"
api_version: "v2"
section: "reference"
category: "http"
operation_id: "signedresources-:id-DELETE"
method: "DELETE"
path: "/oss/v2/signedresources/{hash}"
auth_context: "app only"
scopes: ["data:write"]
verification: "docs-only"
---
# oss/v2/signedresources/{hash}

Deletes an object using an OSS signed URL.

Only applications that own the bucket containing the object can call this operation.

## Resource Information

| Method and URI | DELETE https://developer.api.autodesk.com/oss/v2/signedresources/{hash} |
| --- | --- |
| Authentication Context | App only |
| Required OAuth Scopes | `data:write` |
| Data Format | JSON |

### Request

## Headers

| Authorization*string | Must be `Bearer <token>`, where `<token>` is a two-legged access token obtained via a [Client Credentials Grant flow](https://aps.autodesk.com/en/docs/oauth/v2/tutorials/get-2-legged-token/). |
| --- | --- |
| x-ads-regionstring | Specifies where the bucket containing the object is stored. Possible values are:

`US` - (Default) Data center for the US region.
`EMEA` - Data center for the European Union, Middle East, and Africa.
`AUS` - Data center for Australia.
`CAN` - Data center for the Canada region.
`DEU` - Data center for the Germany region.
`IND` - Data center for the India region.
`JPN` - Data center for the Japan region.
`GBR` - Data center for the United Kingdom region. |

### Request

## URI Parameters

| hashstring | The ID component of the signed URL.
**Note:** The signed URL returned by [Generate Signed OSS URL](https://aps.autodesk.com/en/docs/data/v2/reference/http/signedresources-:id-GET/) contains `hash` as a URI parameter. |
| --- | --- |

### Response

## HTTP Status Code Summary

| 200OK | The object was deleted successfully. |
| --- | --- |
| 400Bad Request | OSS was unable to process the request. The syntax of the request is malformed or the request is missing a required header. Do not repeat the request without fixing the issue. The response body may indicate what is wrong with the request |
| 401Unauthorized | The supplied authorization header was not valid or the supplied token scope was not acceptable. Verify authentication and try again. |
| 403Forbidden | The request was successfully validated but lacking the required permissions. Verify your credentials and permissions before you send this request again. |
| 404Not Found | The requested resource could not be found. Verify the IDs of the resources you requested before you send this request again. |
| 500Internal Server Error | An unexpected error occurred on the server, preventing it from completing your request. Please try again later. If the issue persists, contact the support team for assistance. |

### Response

## Body Structure (200)

Response for 200 has no body.

## Example

Delete Signed Resource - Success (200)

### Request

```
    curl -v "https://developer.api.autodesk.com/oss/v2/signedresources/322cca8f-4cbf-448f-b70b-55df2597b0d2"
-X DELETE
-H "Authorization: Bearer tQrZGiR0L1rYRAtEAsGyvA9ZF9Nj"
```

### Response

```
HTTP/1.1 200 OK
Access-Control-Allow-Credentials: true
Access-Control-Allow-Headers: Authorization, Accept-Encoding, Range, Content-Type
Access-Control-Allow-Methods: GET
Access-Control-Allow-Origin: *
Content-Type: text/plain; charset=utf-8
Date: Mon, 23 May 2016 18:15:15 GMT
Server: Apigee Router
Content-Length: 74
Connection: keep-alive

Signed resource deleted successfully: 7ffc5eef-1407-4c24-b3f3-3cbfe32a9232
```

---
원본 문서: https://aps.autodesk.com/en/docs/data/v2/reference/http/signedresources-:id-DELETE
