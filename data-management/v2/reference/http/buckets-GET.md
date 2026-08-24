---
title: "GET List Buckets"
url_path: reference/http///buckets-GET
product: "Data Management API"
surface: "data-management-v2"
protocol: "REST"
document_kind: "endpoint"
api_version: "v2"
section: "reference"
category: "http"
operation_id: "buckets-GET"
method: "GET"
path: "/oss/v2/buckets"
auth_context: "app only"
scopes: ["bucket:read"]
verification: "docs-only"
---
# oss/v2/buckets

Retrieves a list of buckets owned by the calling application.

## Resource Information

| Method and URI | GET https://developer.api.autodesk.com/oss/v2/buckets |
| --- | --- |
| Authentication Context | App only |
| Required OAuth Scopes | `bucket:read` |
| Data Format | JSON |

### Request

## Headers

| Authorization*string | Must be `Bearer <token>`, where `<token>` is a two-legged access token obtained via a [Client Credentials Grant flow](https://aps.autodesk.com/en/docs/oauth/v2/tutorials/get-2-legged-token/). |
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
| limitint | The maximum number of items to return per page. This parameter controls pagination by limiting the size of each response.
Acceptable values: 1-100. Default value: 10. |
| startAtstring | The ID of the last item from the previous result set. Use this parameter to retrieve the next page of results by starting from the item immediately following the specified ID. |

### Response

## HTTP Status Code Summary

| 200OK | The list of buckets was successfully retrieved. |
| --- | --- |
| 400Bad Request | OSS was unable to process the request. The syntax of the request is malformed or the request is missing a required header. Do not repeat the request without fixing the issue. The response body may indicate what is wrong with the request |
| 401Unauthorized | The supplied authorization header was not valid or the supplied token scope was not acceptable. Verify authentication and try again. |
| 403Forbidden | The request was successfully validated but lacking the required permissions. Verify your credentials and permissions before you send this request again. |
| 404Not Found | The requested resource could not be found. Verify the IDs of the resources you requested before you send this request again. |
| 500Internal Server Error | An unexpected error occurred on the server, preventing it from completing your request. Please try again later. If the issue persists, contact the support team for assistance. |

### Response

## Body Structure (200)

| itemsarray: object | Array of objects, where each object represents a bucket. |
| --- | --- |
| bucketKeystring | Bucket key: An ID that uniquely identifies the bucket. |
| createdDateint | The time the bucket was created, represented as a Unix timestamp. |
| policyKeyenum:string | Specifies the retention policy for the objects stored in the bucket. Possible values are:

`transient` - Objects are retained for 24 hours.
`temporary` - Objects are retained for 30 days.
`persistent` - Objects are retained until they are deleted. |
| nextstring | The URL to be used to retrieve the next page of results, if available. It will be present only when there are more items to be retrieved after the current set. |

## Example 1

Basic Successful List Bucket (200)

### Request

```
curl -v "https://developer.api.autodesk.com/oss/v2/buckets"
  -X GET
  -H "Authorization: Bearer RhS6iEVMnEfl77MBSK3l2je06UHj"
```

### Response

```
HTTP/1.1 200 OK
Access-Control-Allow-Credentials: true
Access-Control-Allow-Headers: Authorization, Accept-Encoding, Range, Content-Type
Access-Control-Allow-Methods: GET
Access-Control-Allow-Origin: *
Content-Type: application/json; charset=utf-8
Date: Wed, 25 May 2016 15:40:37 GMT
Server: Apigee Router
Content-Length: 1273
Connection: keep-alive
{
  "items" : [ {
    "bucketKey" : "00001fbf-8505-49ab-8a42-44c6a96adbd0",
    "createdDate" : 1441329298362,
    "policyKey" : "transient"
  }, {
    "bucketKey" : "0003114d",
    "createdDate" : 1440119769765,
    "policyKey" : "transient"
  }, {
    "bucketKey" : "0003fbc1-389a-4194-915a-38313797d753",
    "createdDate" : 1453886285506,
    "policyKey" : "transient"
  }, {
    "bucketKey" : "00048aa5",
    "createdDate" : 1436255268102,
    "policyKey" : "transient"
  }, {
    "bucketKey" : "000524bf",
    "createdDate" : 1453197455111,
    "policyKey" : "transient"
  }, {
    "bucketKey" : "0006db6d",
    "createdDate" : 1461978883040,
    "policyKey" : "transient"
  }, {
    "bucketKey" : "00074953-5d83-4aeb-b598-8f727703c94e",
    "createdDate" : 1447934893704,
    "policyKey" : "transient"
  }, {
    "bucketKey" : "00085601-78b2-44e4-82f3-a252fde022d2",
    "createdDate" : 1441504885576,
    "policyKey" : "transient"
  }, {
    "bucketKey" : "000b1e61-216e-4480-bcd3-9ec5ca56364f",
    "createdDate" : 1448268266859,
    "policyKey" : "transient"
  }, {
    "bucketKey" : "000e37cc",
    "createdDate" : 1437441338604,
    "policyKey" : "transient"
  } ],
  "next" : "https://developer.api.autodesk.com/oss/v2/buckets?region=US&startAt=000e37cc"
}
```

## Example 2

List Bucket - Invalid Limit (400)

### Request

```
curl -v "https://developer.api.autodesk.com/oss/v2/buckets?limit=300"
  -X GET
  -H "Authorization: Bearer R4wQlRMQJgAtRG3IeD0IQ2Wwyk8C"
```

### Response

```
HTTP/1.1 400 Bad Request
Access-Control-Allow-Credentials: true
Access-Control-Allow-Headers: Authorization, Accept-Encoding, Range, Content-Type
Access-Control-Allow-Methods: GET
Access-Control-Allow-Origin: *
Content-Type: application/json; charset=utf-8
Date: Wed, 25 May 2016 15:44:43 GMT
Server: Apigee Router
Content-Length: 26
Connection: keep-alive

{"reason":"Invalid limit"}
```

---
원본 문서: https://aps.autodesk.com/en/docs/data/v2/reference/http/buckets-GET
