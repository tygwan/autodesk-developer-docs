---
title: "POST Create Bucket"
url_path: reference/http///buckets-POST
product: "Data Management API"
surface: "data-management-v2"
protocol: "REST"
document_kind: "endpoint"
api_version: "v2"
section: "reference"
category: "http"
operation_id: "buckets-POST"
method: "POST"
path: "/oss/v2/buckets"
auth_context: "app only"
scopes: ["bucket:create"]
verification: "docs-only"
---
# oss/v2/buckets

Creates a new bucket.

Buckets are virtual containers within the Object Storage Service (OSS), which you can use to store and manage objects (files) in the cloud. The application creating the bucket is the owner of the bucket.

**Note:** Do not use this operation to create buckets for BIM360 Document Management. Use [POST projects/{project_id}/storage](https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-storage-POST) instead. For details, see [Upload Files to BIM 360 Document Management](https://aps.autodesk.com/en/docs/bim360/v1/tutorials/document-management/upload-document).

## Resource Information

| Method and URI | POST https://developer.api.autodesk.com/oss/v2/buckets |
| --- | --- |
| Authentication Context | App only |
| Required OAuth Scopes | `bucket:create` |
| Data Format | JSON |

### Request

## Headers

| Authorization*string | Must be `Bearer <token>`, where `<token>` is a two-legged access token obtained via a [Client Credentials Grant flow](https://aps.autodesk.com/en/docs/oauth/v2/tutorials/get-2-legged-token/). |
| --- | --- |
| x-ads-regionstring | Specifies where the bucket must be stored. Possible values are:

`US` - (Default) Data center for the US region.
`EMEA` - Data center for the European Union, Middle East, and Africa.
`AUS` - Data center for Australia.
`CAN` - Data center for the Canada region.
`DEU` - Data center for the Germany region.
`IND` - Data center for the India region.
`JPN` - Data center for the Japan region.
`GBR` - Data center for the United Kingdom region. |
| Content-Type*string | Must be `application/json` |

### Request

## Body Structure

| bucketKey*string | Bucket key: A unique name you assign to a bucket. Bucket keys must be globally unique across all applications and regions. They must consist of only lower case characters, numbers 0-9, and underscores (_).
**Note:** You cannot change a bucket key once the bucket is created. |
| --- | --- |
| allowarray: object | An array of objects, where each object represents an application that can access the bucket. A bucket can be accessed by 60 applications in total, including the owner. Because the creating application already counts as one, you can specify up to 59 additional applications. |
| authId*string | The Client ID of the application. |
| access*enum:string | Specifies the level of permission the specified application will have. Required when `allow` is specified. Regardless of the permission level, an application can only read, modify, or delete objects it has created. Possible values are:

`read` - Permission to download objects from the bucket.
`write` - Permission to upload and replace objects in the bucket.
`full` - Permission to download, upload, replace, and delete objects in the bucket. |
| policyKey*enum:string | Specifies the retention policy for the objects stored in the bucket. Possible values are:

`transient` - Objects are retained for 24 hours.
`temporary` - Objects are retained for 30 days.
`persistent` - Objects are retained until they are deleted. |

### Response

## HTTP Status Code Summary

| 200OK | The bucket was successfully created. |
| --- | --- |
| 400Bad Request | OSS was unable to process the request. The syntax of the request is malformed or the request is missing a required header. Do not repeat the request without fixing the issue. The response body may indicate what is wrong with the request |
| 401Unauthorized | The supplied authorization header was not valid or the supplied token scope was not acceptable. Verify authentication and try again. |
| 403Forbidden | The request was successfully validated but lacking the required permissions. Verify your credentials and permissions before you send this request again. |
| 409Conflict | The specified bucket key already exists. |
| 500Internal Server Error | An unexpected error occurred on the server, preventing it from completing your request. Please try again later. If the issue persists, contact the support team for assistance. |

### Response

## Body Structure (200)

| bucketKeystring | Bucket key: An ID that uniquely identifies the bucket. |
| --- | --- |
| bucketOwnerstring | The Client ID of the application that owns the bucket. |
| createdDatestring | The time the bucket was created, represented as a Unix timestamp. |
| permissionsarray: object | An array of objects, where each object represents an application that can access the bucket. |
| authIdstring | The Client ID of the application. |
| accessenum:string | Specifies the level of permission the application has. Regardless of the permission level, an application can only read, modify, or delete objects it has created. Possible values are:

`read` - Permission to download objects from the bucket.
`write` - Permission to upload and replace objects in the bucket.
`full` - Permission to download, upload, replace, and delete objects in the bucket. |
| policyKeyenum:string | Specifies the retention policy for the objects stored in the bucket. Possible values are:

`transient` - Objects are retained for 24 hours.
`temporary` - Objects are retained for 30 days.
`persistent` - Objects are retained until they are deleted. |

## Example 1

Create bucket - Success (200)

### Request

```
curl -v "https://developer.api.autodesk.com/oss/v2/buckets"
  -X POST
  -H "Content-Type: application/json"
  -H "Authorization: Bearer kgEJWMJitdYbhfxghap8SbZqXMoS"
  -d '
  {
    "bucketKey":"apptestbucket",
    "policyKey":"transient"
  }
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
Date: Sat, 21 May 2016 00:05:30 GMT
Server: Apigee Router
Content-Length: 209
Connection: keep-alive

{
  "bucketKey":"apptestbucket",
  "bucketOwner":"RlKfGlAbb7N8VJwLllOvpfonB1Ex52qG",
  "createdDate":1463785698600,
  "permissions":[
    {
      "authId":"RlKffonB1Ex52GlAbb7N8VJwLllOvpqG",
      "access":"full"
    }
  ],
  "policyKey":"transient"
}
```

Note

Application key is automatically added in the “permissions” array, even if not explicitly included in the POST request.

## Example 2

Create Bucket - Invalid Format (400)

### Request

```
curl -v "https://developer.api.autodesk.com/oss/v2/buckets"
  -X POST
  -H "Content-Type: application/json"
  -H "Authorization: Bearer kgEJWMJitdYbhfxghap8SbZqXMoS"
  -d '
  {
    "bucketKey":"bucketExamplekey",
    "policyKey":"transient"
  }
  '
```

### Response

```
HTTP/1.1 400 Bad Request
Access-Control-Allow-Credentials: true
Access-Control-Allow-Headers: Authorization, Accept-Encoding, Range, Content-Type
Access-Control-Allow-Methods: GET
Access-Control-Allow-Origin: *
Content-Type: application/json; charset=utf-8
Date: Tue, 24 May 2016 20:53:09 GMT
Server: Apigee Router
Content-Length: 76
Connection: keep-alive

{
  "reason":"Valid field 'bucketKey' must be of the form  [-_.a-z0-9]{3,128}"
}
```

## Example 3

Create Bucket - Conflict (409)

Note

Let’s suppose bucket apptestbucket already exists.

### Request

```
curl -v "https://developer.api.autodesk.com/oss/v2/buckets"
  -X POST
  -H "Content-Type: application/json"
  -H "Authorization: Bearer kgEJWMJitdYbhfxghap8SbZqXMoS"
  -d '
  {
    "bucketKey":"apptestbucket",
    "policyKey":"transient"
  }
  '
```

### Response

```
HTTP/1.1 409 Conflict
Access-Control-Allow-Credentials: true
Access-Control-Allow-Headers: Authorization, Accept-Encoding, Range, Content-Type
Access-Control-Allow-Methods: GET
Access-Control-Allow-Origin: *
Content-Type: application/json; charset=utf-8
Date: Tue, 24 May 2016 20:54:19 GMT
Server: Apigee Router
Content-Length: 34
Connection: keep-alive

{
  "reason":"Bucket already exists"
}
```

---
원본 문서: https://aps.autodesk.com/en/docs/data/v2/reference/http/buckets-POST
