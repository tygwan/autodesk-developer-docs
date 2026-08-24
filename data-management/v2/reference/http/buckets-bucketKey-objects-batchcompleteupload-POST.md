---
title: "POST Complete Batch Upload to S3 Signed URLs"
url_path: reference/http///buckets-:bucketKey-objects-batchcompleteupload-POST
product: "Data Management API"
surface: "data-management-v2"
protocol: "REST"
document_kind: "endpoint"
api_version: "v2"
section: "reference"
category: "http"
operation_id: "buckets-:bucketKey-objects-batchcompleteupload-POST"
method: "POST"
path: "/oss/v2/buckets/{bucketKey}/objects/batchcompleteupload"
auth_context: "app only"
scopes: ["data:write","data:create"]
verification: "docs-only"
---
# oss/v2/buckets/{bucketKey}/objects/batchcompleteupload

Completes batch upload to S3 signed URLs by reconstituting the set of objects from uploaded chunks. You must call this operation only after all the objects have been uploaded.

You can specify up to 25 objects in this operation.

## Resource Information

| Method and URI | POST https://developer.api.autodesk.com/oss/v2/buckets/{bucketKey}/objects/batchcompleteupload |
| --- | --- |
| Authentication Context | App only |
| Required OAuth Scopes | `data:write` `data:create` |
| Data Format | JSON |

### Request

## Headers

| Authorization*string | Must be `Bearer <token>`, where `<token>` is a two-legged access token obtained via a [Client Credentials Grant flow](https://aps.autodesk.com/en/docs/oauth/v2/tutorials/get-2-legged-token/). |
| --- | --- |
| Content-Type*string | Must be `application/json` |

### Request

## URI Parameters

| bucketKeystring | The unique ID of the bucket that contains the objects you are operating on. `bucketKey` must be URL-encoded. |
| --- | --- |

### Request

## Body Structure

An array of objects, each of which represents an upload to complete.

| requests*array: object | An array of objects, each of which represents an upload to complete. |
| --- | --- |
| objectKey*string | The URL-encoded human friendly name of the object for which to complete an upload. |
| uploadKey*string | The ID uniquely identifying the upload session that was returned when you obtained the signed upload URL. |
| sizeint | The expected size of the object, in bytes. If provided, OSS compares this value against the actual size of the object in S3. |
| eTagsarray: string | An array of eTags. S3 returns an eTag to each upload request, be it for a chunk or an entire file. For a single-part upload, this array contains the expected eTag of the entire object. For a multipart upload, this array contains the expected eTag of each part of the upload; the index of an eTag in the array corresponds to its part number in the upload. If provided, OSS validates these eTags against the content in S3. |
| x-ads-meta-Content-Typestring | The Content-Type value for the uploaded object to record within OSS. |
| x-ads-meta-Content-Dispositionstring | The Content-Disposition value for the uploaded object to record within OSS. |
| x-ads-meta-Content-Encodingstring | The Content-Encoding value for the uploaded object to record within OSS. |
| x-ads-meta-Cache-Controlstring | The Cache-Control value for the uploaded object to record within OSS. |
| x-ads-user-defined-metadatastring | Custom metadata to be stored with the object, which can be retrieved later on download or when retrieving object details. Must be a JSON object that is less than 100 bytes. |

### Response

## HTTP Status Code Summary

| 200OK | The request was successfully processed. The response body will contain objects that indicate the outcome for each uploaded object. |
| --- | --- |
| 400Bad Request | OSS was unable to process the request. The syntax of the request is malformed or the request is missing a required header. Do not repeat the request without fixing the issue. The response body may indicate what is wrong with the request |
| 401Unauthorized | The supplied authorization header was not valid or the supplied token scope was not acceptable. Verify authentication and try again. |
| 403Forbidden | The request was successfully validated but lacking the required permissions. Verify your credentials and permissions before you send this request again. |
| 404Not Found | The specified object or bucket does not exist. |
| 429Too Many Requests | Rate limit exceeded. Please wait for a few moments before retrying. Increase the wait time with each attempt before trying again. |
| 500Internal Server Error | An unexpected error occurred on the server, preventing it from completing your request. Please try again later. If the issue persists, contact the support team for assistance. |

### Response

## Body Structure (200)

| resultsobject | A map of the returned results; each key in the map corresponds to an object key in the batch, and the value includes the results for that object. |
| --- | --- |
| *object | The results returned by the Complete Batch Upload to S3 Signed URLs operation. |
| uploadKeystring | The ID uniquely identifying the upload session that was returned when you obtained the signed upload URL. Returned when completion fails. |
| statusstring | If this attribute is not returned, completion has succeeded. If the value of this attribute is “error”, completion failed.’ |
| bucketKeystring | The bucket key of the bucket the object was uploaded to. |
| objectKeystring | The URL-encoded human friendly name of the object. |
| objectIdstring | An identifier (URN) that uniquely and persistently identifies the object. |
| locationstring | A URL that points to the actual location of the object. Returned when completion succeeds. |
| sizeobject | The size of the object, in bytes. When completion succeeds, this is returned as an integer giving the total amount of storage space occupied by the object. When `size` was specified in the request and size validation fails, this is instead returned as an object with two integer properties, both in bytes: `expected` (the size specified in the request) and `detected` (the size detected in S3). |
| contentTypestring | The format of the data stored within the object, expressed as a MIME type. This attribute is returned only if it was specified when the object was uploaded. |
| contentDispositionstring | The Content-Disposition value for the uploaded object as recorded within OSS. This attribute is returned only if it was specified when the object was uploaded. |
| contentEncodingstring | The Content-Encoding value for the uploaded object as recorded within OSS. This attribute is returned only if it was specified when the object was uploaded. |
| cacheControlstring | The Cache-Control value for the uploaded object as recorded within OSS. This attribute is returned only if it was specified when the object was uploaded. |
| partsarray: object | An array containing the status of each part, indicating any issues with eTag or size mismatch issues. |
| partint | The part number in the multipart upload. |
| statusenum:string | Indicates whether this particular part uploaded to S3 is valid. Possible values are:

`Pending` - No such part was uploaded to S3 for this index.
`Unexpected` - The eTag of the part in S3 does not match the one provided in the request.
`TooSmall` - A chunk uploaded to S3 is smaller than 5MB. Only the final chunk can be smaller than 5MB.
`Unexpected+TooSmall` - The chunk is both too small and has an eTag mismatch.
`Ok` - The chunk has no issues.’ |
| sizeint | The size of the corresponding part detected in S3. |
| eTagstring | The eTag of the detected part in S3. |
| reasonstring | The reason for the failure, if the status is `error`. |

## Example 1

Basic Request to Complete 3 objects (200).

### Request

```
curl -X POST
  'https://developer.api.autodesk.com/oss/v2/buckets/apptestbucket/objects/batchcompleteupload'
  -H 'Authorization: Bearer {YOUR_TOKEN}'
  -H 'Content-Type: application/json'
  --data-raw '{"requests": [
    {
        "objectKey":"testbatch01.txt",
        "uploadKey":"AQICAHjeHUjisASnZxsm7tPGV29MH-UPjJcPt5rO5olTycJejgFVSwCDb2WydWPOh3xEOZGaAAABsDCCAawGCSqGSIb3DQEHBqCCAZ0wggGZAgEAMIIBkgYJKoZIhvcNAQcBMB4GCWCGSAFlAwQBLjARBAzWVTKRP-tGiBA_5gICARCAggFjKfypHjeDTaiKT5HAOsxtB4RUKlNXxZlrDwO4wKB1PK-onJcfTgGVhqSaCgo-Kp4-HQFdckhuApYkHREFLm4_51YBJ-vtBIUYrwd68ttbHJERabFhAZNiyj228JmELup4PpmmVVafJx7-dzwTDJuFZcim31lDmZ2vDJbR86wTyca3klgJYiBapkHMPrLO4GQ65jFKBGdmOTCtT3CkIM3CGcG-8mnuAbLJYdhi8AiiwZMTaeIIkC_QOciVjNOIPsX5urrMgY48Gn6Zq631z1SvfoAXwv2TmXpOoWxcJHZuPD_Hgs1Wi31WsRkNEnyCcQbs3xfRz7bIVPQPrFSrKf0RiULh_6G-lOVula05MaSZBnMG_Zz2m35Xh7OLl8R1qQcN7fCD_zjdnDH5VzsDM-puWCtHEoUR27nGFuVBIwQW32IwJPdY6XDgpKz2ReqPNi4NqDgNWpxc-fO9ZZ4_8K5z5ZgwTQ=="
    },{
        "objectKey":"testbatch02.txt",
        "uploadKey":"AQICAHjeHUjisASnZxsm7tPGV29MH-UPjJcPt5rO5olTycJejgE9BnkwWget1YobK2FPdzGtAAABsTCCAa0GCSqGSIb3DQEHBqCCAZ4wggGaAgEAMIIBkwYJKoZIhvcNAQcBMB4GCWCGSAFlAwQBLjARBAyURzvsziCJZEcFppQCARCAggFk-4g7xBRoyaQ0mmn4bs4p-gRlu4rA-wCVlzMTokJgmUqHwAaUS-YNM9kAKBQDPzHLXr5QevMIIzTqEz_3Jl-ev3MIU-VpiJw9eP30aJQUOcYZlmknfjq2A8CrCLzPBvmzNaoDNIH_OvYzirAIrFEPBFITijVeYrr3mKXOvQS4CSo9mE9Ucg6pex6MH8NHtuQMYk5KViGEo2BgrCWwPkfeisd829TFPzjdRBTbWVjMQ-w9QTiir3pUJTvEx53m8yajPt44KDXjeLai3paxgB6zXvjZ2GXSIBBRutOrZEk4lo3nir3DcZuQqd0xRjJLRBoTi9aYdwTwsfhkPRDguOR3ucUIuUKSSXfcEUJD4HW2JanyvSukoG08I5j-jFVg4WNTDk9d2AiY9ZZbcZAGgA-vUDhJbeBG9OvVzQH7DgYk_BTnx0kNdk3mjlzVvSJ3u0aWM5qoirr6Jqe8Wmw_9ifd6IN7NHo="
    },{
        "objectKey":"testbatch03.txt",
        "uploadKey":"AQICAHjeHUjisASnZxsm7tPGV29MH-UPjJcPt5rO5olTycJejgGJjDZJI4bapoxpw2YZR5ejAAABsDCCAawGCSqGSIb3DQEHBqCCAZ0wggGZAgEAMIIBkgYJKoZIhvcNAQcBMB4GCWCGSAFlAwQBLjARBAwwUrsLZY3L2Rf5LZQCARCAggFjcYQ05_wWDU64JjN4mJKJ0_5Cy6U_-UUpoJRrOzu1c5R8nofaGOsdT3eRr82PNNb5K4-aeVUwxgJBvavSfFLe_uspY5limnmQcyQX9ALh8bUFxc4wAVsQU2cSI0KeQfD5Uh8rZXX6IL5cQvIFGpI_pjFUCCSztp50wVafMGVJSiVqqG23u8eq5BjUl1kDeklXCQTGq_wcbK9AcreerpQEw7n_VbNFlmzVsK74F_LYKPumqwvK5p1Y3VvdeRw1taKc9jD829P7XfrjNaLZVyJpjYRYaOcqA299eXcr95mvrgJAb8I-na4h9TJXmOeLijcB9q29BPnhxUddVrxPcLrFxswUNI_4lh8xk_4XLiIjxhe3RzDaaBagEMfaoHadivGm1TRfxZRh2ed_gWVCcNhdvL7LS1DxSCyGHXzsuwQQxEwShugJvcvh2db-dPodYJQLYuQ-e2Bp7KGZFY8lOfHC-4cSWA=="
    }
  ]}'
```

### Response

```
{
  "results":{
    "testbatch01.txt":{
      "bucketKey":"apptestbucket",
      "objectId":"urn:adsk.objects:os.object:apptestbucket/testbatch01.txt",
      "objectKey":"testbatch01.txt",
      "size":6000000,
      "contentType":"application/octet-stream",
      "location":"https://developer.api.autodesk.com/oss/v2/buckets/apptestbucket/objects/testbatch01.txt"
    },
    "testbatch02.txt":{
      "bucketKey":"apptestbucket",
      "objectId":"urn:adsk.objects:os.object:apptestbucket/testbatch02.txt",
      "objectKey":"testbatch02.txt",
      "size":100,
      "contentType":"application/octet-stream",
      "location":"https://developer.api.autodesk.com/oss/v2/buckets/apptestbucket/objects/testbatch02.txt"
    },
    "testbatch03.txt":{
      "bucketKey":"apptestbucket",
      "objectId":"urn:adsk.objects:os.object:apptestbucket/testbatch03.txt",
      "objectKey":"testbatch03.txt",
      "size":100,
      "contentType":"application/octet-stream",
      "location":"https://developer.api.autodesk.com/oss/v2/buckets/apptestbucket/objects/testbatch03.txt"
    }
  }
}
```

## Example 2

Sample Request with mixed failures - Missing Parts, Invalid Object Keys and a Successful complete with setting of Content-Type, Content-Disposition, etc. (200).

### Request

```
curl -X POST
  'https://developer.api.autodesk.com//oss/v2/buckets/tdomim_test/objects/batchcompleteupload'
   -H 'Content-Type: application/json'
   -H 'Authorization: Bearer {YOUR_TOKEN}'
   --data-raw '{
     "requests":[
       {
         "objectKey":"test.txt",
         "uploadKey":"AQICAHi2MQEvNztHttduUoui5X3zRZIFWbN8fglsja7Dn-mbGAEkKXMLUPPQfHW-pgs_EwlGAAABozCCAZ8GCSqGSIb3DQEHBqCCAZAwggGMAgEAMIIBhQYJKoZIhvcNAQcBMB4GCWCGSAFlAwQBLjARBAzwVOdoYHvGfipKLmUCARCAggFWFEOCBHAe7BWUrmHtmcGiMT3bb5J7yI5Uw6onaPU2zrPdsKXkYpVsMEK2r3cugL-24IyWfx7ov4YSdqWn9SkXqmNzzGcIbFJj84PY7_2EDXn8EOqKs9cyADSIKW_NRXC5yYIk_wT_K-0lJAWUJKuaQ_2Up6-c5IVVILTOugIVzNZQfA-PkX4cSdXtQPopMW8LH3Bu8diUqHq6PbUJQ9Ncj76A7Ng7JfPeyMFdsQlG8JjE4jQK54JGFLpSz-LZQ6xiDti-dCfG9eFna6AZZsTibWUKdf7yywn-URjaclqtwvyV3LZQpPkCyNiqcrsd6KqL7j_xg5pLJ5-LsIgFSuCG4c3cx6tbEhpwyzlXobR0Ux_l5FPWK7aY9GcUaL3vROl2iR5HWIkOtXoFJuPllIheI3ajKJdc4XSUG6XUj8jUvKSZsOywKE_cXxfR5xIZrQN2oONxCk8H"
       },
       {
         "objectKey":"test2.txt",
         "uploadKey":"AQICAHi2MQEvNztHttduUoui5X3zRZIFWbN8fglsja7Dn-mbGAFlUZy7409q9I0aHYz3CwO_AAABpTCCAaEGCSqGSIb3DQEHBqCCAZIwggGOAgEAMIIBhwYJKoZIhvcNAQcBMB4GCWCGSAFlAwQBLjARBAx9kZGRn6DmzGd5Kp0CARCAggFY_VD_0zyU-o6MFFjftfQSJIgegojUvg_8YrIc_mjoClzByS9vu4qbR4SgPb-8w0bWheu_hf7GdjIJsdSbTnsLs0YORzEwIawyL9nYzXe2l9OnIU9TbgJfMSteUaQ8AoOQ_aQN4zzlJORrF0eDvseRmNYsh-fuNcxAQplK0QxYdTXdq5f0Z0xNuPQatsPhDpf-455kBFg7zFKAMXqwA8AZjbhtd5zC9D2X3J-29q3V6pODyZxDyYieKkQtYBIA8pl2mPm0kgDa664jtI8SXfVkSkgzPASVJPBK3juTjCIFvyQSLLYreR20ttk0AnvJUMQMCeDr5yL9CVPzbm9-lhpSQ6M3aFTkR3CCopkYLeLXj_MQnYz0K8jDMBw-nR1REwDOx1dETziNWLCI3muMxBADY7kuQ5__smRV2XlJpS5eGuUZoHmtTpDZsJoejtzY4k86Ge6vdYxyivI=",
         "size":44,
         "x-ads-meta-Content-Type":"text/plain"
       },
       {
         "objectKey":"test3.txt",
         "uploadKey":"AQICAHi2MQEvNztHttduUoui5X3zRZIFWbN8fglsja7Dn-mbGAGCFdKIEEWH3zjP7Tljc_MGAAABoTCCAZ0GCSqGSIb3DQEHBqCCAY4wggGKAgEAMIIBgwYJKoZIhvcNAQcBMB4GCWCGSAFlAwQBLjARBAwIYO1QJjFMVHOiSFECARCAggFUi2ZEwUuEC1wyEYTY6Ueg-5-O8IlXSOBp-NQ2kfdwcumwj2mBBz4dBWyTHfVvX5TabHKELdK_4N7IiNdYzSxdmlmMJcqDcxe7Xk6L6ZatZ9U5UYUNDzubuE0H9N-k2gBqUUoRFHDo67ht-pu8_t_YFYiByR9FBG1Gi-95iJLihQY0QIHovKtIIfVn4UNfq5B7VYrcTQKKOYzGfqkkso_LxuvuS2mAXwhwTArPg7lbmdmYzfiiE0T4atbSPMPIu-qHO5T6hdaKpvESl7j3bbql5myhIjxmQjT5olVl6a-WrS_GbXn2xGtamo1mrFmvJQyGQdQKO7D1wuGVTdCPKX4JveiWVdY7esErahF1wwJjZZ4ReA9lmVRhsgB9YMeYgeZlJvPSRgz-89goItUKuhvCWsaHJC5NY53zIFhOz5yIPLYxy4rXT0GF54TvStGGe5frhJMUmw==",
         "size":359,
         "x-ads-meta-Content-Type":"text/plain",
         "x-ads-meta-Content-Disposition":"inline",
         "x-ads-meta-Content-Encoding":"gzip",
         "x-ads-meta-Cache-Control":"max-age=60"
       }
     ]
   }'
```

### Response

```
{
  "results":{
    "test.txt":{
      "uploadKey":"AQICAHi2MQEvNztHttduUoui5X3zRZIFWbN8fglsja7Dn-mbGAEkKXMLUPPQfHW-pgs_EwlGAAABozCCAZ8GCSqGSIb3DQEHBqCCAZAwggGMAgEAMIIBhQYJKoZIhvcNAQcBMB4GCWCGSAFlAwQBLjARBAzwVOdoYHvGfipKLmUCARCAggFWFEOCBHAe7BWUrmHtmcGiMT3bb5J7yI5Uw6onaPU2zrPdsKXkYpVsMEK2r3cugL-24IyWfx7ov4YSdqWn9SkXqmNzzGcIbFJj84PY7_2EDXn8EOqKs9cyADSIKW_NRXC5yYIk_wT_K-0lJAWUJKuaQ_2Up6-c5IVVILTOugIVzNZQfA-PkX4cSdXtQPopMW8LH3Bu8diUqHq6PbUJQ9Ncj76A7Ng7JfPeyMFdsQlG8JjE4jQK54JGFLpSz-LZQ6xiDti-dCfG9eFna6AZZsTibWUKdf7yywn-URjaclqtwvyV3LZQpPkCyNiqcrsd6KqL7j_xg5pLJ5-LsIgFSuCG4c3cx6tbEhpwyzlXobR0Ux_l5FPWK7aY9GcUaL3vROl2iR5HWIkOtXoFJuPllIheI3ajKJdc4XSUG6XUj8jUvKSZsOywKE_cXxfR5xIZrQN2oONxCk8H",
      "status":"error",
      "reason":"MissingOrInvalidParts",
      "size":{
        "expected":32,
        "detected":44
      },
      "parts":[
        {
          "part":1,
          "size":44,
          "eTag":"f120c8688b905564bbc17b1913a8ea95",
          "status":"Ok"
        }
      ]
    },
    "test2.txt":{
      "uploadKey":"AQICAHi2MQEvNztHttduUoui5X3zRZIFWbN8fglsja7Dn-mbGAFlUZy7409q9I0aHYz3CwO_AAABpTCCAaEGCSqGSIb3DQEHBqCCAZIwggGOAgEAMIIBhwYJKoZIhvcNAQcBMB4GCWCGSAFlAwQBLjARBAx9kZGRn6DmzGd5Kp0CARCAggFY_VD_0zyU-o6MFFjftfQSJIgegojUvg_8YrIc_mjoClzByS9vu4qbR4SgPb-8w0bWheu_hf7GdjIJsdSbTnsLs0YORzEwIawyL9nYzXe2l9OnIU9TbgJfMSteUaQ8AoOQ_aQN4zzlJORrF0eDvseRmNYsh-fuNcxAQplK0QxYdTXdq5f0Z0xNuPQatsPhDpf-455kBFg7zFKAMXqwA8AZjbhtd5zC9D2X3J-29q3V6pODyZxDyYieKkQtYBIA8pl2mPm0kgDa664jtI8SXfVkSkgzPASVJPBK3juTjCIFvyQSLLYreR20ttk0AnvJUMQMCeDr5yL9CVPzbm9-lhpSQ6M3aFTkR3CCopkYLeLXj_MQnYz0K8jDMBw-nR1REwDOx1dETziNWLCI3muMxBADY7kuQ5__smRV2XlJpS5eGuUZoHmtTpDZsJoejtzY4k86Ge6vdYxyivI=",
      "status":"error",
      "reason":"InvalidUploadKey"
    },
    "test3.txt":{
      "bucketKey":"tdomim_test",
      "objectId":"urn:adsk.objects:os.object:tdomim_test/test3.txt",
      "objectKey":"test3.txt",
      "size":359,
      "contentType":"text/plain",
      "location":"https://developer.api.autodesk.com/oss/v2/buckets/tdomim_test/objects/test3.txt"
    }
  }
}
```

---
원본 문서: https://aps.autodesk.com/en/docs/data/v2/reference/http/buckets-:bucketKey-objects-batchcompleteupload-POST
