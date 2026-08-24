---
title: "POST Transfer Bucket Ownership"
url_path: reference/http///transferbucketownership-POST
product: "Data Management API"
surface: "data-management-v2"
protocol: "REST"
document_kind: "endpoint"
api_version: "v2"
section: "reference"
category: "http"
operation_id: "transferbucketownership-POST"
method: "POST"
path: "/oss/v2/buckets/{bucketKey}/transfer"
auth_context: "app only"
scopes: ["bucket:update"]
verification: "docs-only"
---
# oss/v2/buckets/{bucketKey}/transfer

Transfers ownership of a bucket from one application to another.

Ownership transfer is a two-step process:
- The current owner initiates the transfer.
- The target application accepts the transfer.

Once a transfer is initiated, the bucket enters a transitional state in which both the current owner and the target application have full ownership privileges and can perform the same bucket operations. The only exception is the List Buckets operation, which lists the bucket only for the target application.

The transfer is completed when the target application accepts the transfer. At that point, the target application becomes the sole owner of the bucket.

**Note:**
- Transferring a bucket changes only the bucket owner. Ownership of existing objects within the bucket is not changed.
- Existing objects retain the ownership metadata of the application that originally uploaded them.
- After the transfer is completed, the new bucket owner has full access to all objects in the bucket, regardless of the original object owner.
- Transfer requests do not currently expire. A transfer may remain in the transitional state indefinitely until it is accepted by the target application. However, long-term reliance on this transitional state is not recommended.

## Resource Information

| Method and URI | POST https://developer.api.autodesk.com/oss/v2/buckets/{bucketKey}/transfer |
| --- | --- |
| Authentication Context | App only |
| Required OAuth Scopes | `bucket:update` |
| Data Format | JSON |

### Request

## Headers

| Authorization*string | Must be `Bearer <token>`, where `<token>` is a two-legged access token obtained via a [Client Credentials Grant flow](https://aps.autodesk.com/en/docs/oauth/v2/tutorials/get-2-legged-token/). |
| --- | --- |
| Content-Type*string | Must be `application/json` |

### Request

## URI Parameters

| bucketKeystring | The unique identifier of the bucket whose ownership is being transferred. The bucket key must be URL-encoded. |
| --- | --- |

### Request

## Body Structure

| operation*enum:string | The transfer operation to perform. Possible values:

`initiate`: Initiates a bucket ownership transfer by specifying the target application that will become the new owner. This operation can only be performed by the current bucket owner.
`complete`: Accepts and completes a pending bucket ownership transfer. This operation can only be performed by the target application specified when the transfer was initiated.
`cancel`: Cancels a pending bucket ownership transfer before it is completed. This operation can be performed by either the current bucket owner or the target application. |
| --- | --- |
| keystring | The client ID of the application that will become the new bucket owner.
`key` must be specified only when `operation` is set to `initiate`. It must not be specified when `operation` is `complete` or `cancel`.
**Important:** The service does not validate `key`. If you specify an invalid client ID, the request still returns HTTP status `200`. After a successful `initiate` request, the bucket enters a transitional state even when `key` is invalid. |

### Response

## HTTP Status Code Summary

| 200OK | The transfer request was successfully accepted by the service. |
| --- | --- |
| 400Bad Request | OSS was unable to process the request. The syntax of the request is malformed or the request is missing a required header. Do not repeat the request without fixing the issue. The response body may indicate what is wrong with the request |
| 401Unauthorized | The supplied authorization header was not valid or the supplied token scope was not acceptable. Verify authentication and try again. |
| 403Forbidden | The request was successfully validated but lacking the required permissions. Verify your credentials and permissions before you send this request again. |
| 404Not Found | The requested resource could not be found. Verify the IDs of the resources you requested before you send this request again. |
| 500Internal Server Error | An unexpected error occurred on the server, preventing it from completing your request. Please try again later. If the issue persists, contact the support team for assistance. |

### Response

## Body Structure (200)

Response for 200 has no body.

## Example 1

Transfer Bucket Ownership - Initiate Transfer (200). This example demonstrates successfully initiating the transfer of ownership of a bucket named `bucket-to-transfer` from one application to another application with the client ID `RCLoDyASA82T41wpqYv5b2QrgHrcofVY`.

### Request

```
curl -v 'https://developer.api.autodesk.com/oss/v2/buckets/bucket-to-transfer/transfer' \
 -X POST \
 -H "Authorization: Bearer eyJh..." \
 -H 'Content-Type: application/json' \
 --data '{
    "operation": "initiate",
    "key": "RCLoDyASA82T41wpqYv5b2QrgHrcofVY"
  }'
```

### Response

```
HTTP/1.1 200 OK
Server: nginx
Date: Thu, 18 Jun 2026 06:27:42 GMT
Content-Length: 0
Connection: keep-alive
x-ads-region: US
strict-transport-security: max-age=31536000; includeSubDomains; preload
x-frame-options: SAMEORIGIN
x-request-id: 78c58744-40bd-4bb0-a1b9-58a9f12a8a4b
```

## Example 2

Transfer Bucket Ownership - Cancel Transfer (200). This example demonstrates successfully canceling the transfer of ownership of the bucket named `bucket-to-transfer`.

### Request

```
curl -v 'https://developer.api.autodesk.com/oss/v2/buckets/bucket-to-transfer/transfer' \
 -X POST \
 -H "Authorization: Bearer eyJh..." \
 -H 'Content-Type: application/json' \
 --data '{
    "operation": "cancel"
  }'
```

### Response

```
HTTP/1.1 200 OK
Server: nginx
Date: Thu, 18 Jun 2026 06:27:33 GMT
Content-Length: 0
Connection: keep-alive
x-ads-region: US
strict-transport-security: max-age=31536000; includeSubDomains; preload
x-frame-options: SAMEORIGIN
x-request-id: 3e23fba5-1ea0-4969-b865-43b979ed6a72
```

## Example 3

Transfer Bucket Ownership - Complete Transfer (200). This example demonstrates successfully accepting the transfer of ownership of the bucket named `bucket-to-transfer`.

### Request

```
curl -v 'https://developer.api.autodesk.com/oss/v2/buckets/bucket-to-transfer/transfer' \
 -X POST \
 -H "Authorization: Bearer eyJh..." \
 -H 'Content-Type: application/json' \
 --data '{
    "operation": "complete"
  }'
```

### Response

```
HTTP/1.1 200 OK
Server: nginx
Date: Thu, 18 Jun 2026 06:25:57 GMT
Content-Length: 0
Connection: keep-alive
x-ads-region: US
strict-transport-security: max-age=31536000; includeSubDomains; preload
x-frame-options: SAMEORIGIN
x-request-id: 464b89d1-7b99-492c-9601-ea93b858d814
```

---
원본 문서: https://aps.autodesk.com/en/docs/data/v2/reference/http/transferbucketownership-POST
