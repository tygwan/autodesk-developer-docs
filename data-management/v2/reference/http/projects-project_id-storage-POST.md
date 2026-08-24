---
title: "POST projects/:project_id/storage"
url_path: reference/http///projects-project_id-storage-POST
product: "Data Management API"
surface: "data-management-v2"
protocol: "REST"
document_kind: "endpoint"
api_version: "v2"
section: "reference"
category: "http"
operation_id: "projects-project_id-storage-POST"
method: "POST"
path: "/data/v1/projects/{project_id}/storage"
auth_context: "user context optional"
scopes: ["data:create"]
verification: "docs-only"
---
# projects/:project_id/storage

Creates a storage location in the OSS where data can be uploaded to.

## Resource Information

| Method and URI | POST https://developer.api.autodesk.com/data/v1/projects/:project_id/storage |
| --- | --- |
| Authentication Context | User context optional |
| Required OAuth Scopes | `data:create` |
| Data Format | JSON |

### Request

## Headers

| Authorization*string | Must be `Bearer <token>`, where `<token>` is a two-legged access token obtained via a [Client Credentials Grant flow](https://aps.autodesk.com/en/docs/oauth/v2/tutorials/get-2-legged-token/), or a three-legged access token obtained via an [Authorization Code flow](https://aps.autodesk.com/en/docs/oauth/v2/tutorials/get-3-legged-token/) or a [Secure Service Account (SSA) flow](https://aps.autodesk.com/en/docs/ssa/v1/tutorials/getting-started-with-ssa/task3-generate-3-legged-access-token/).
The SSA flow is designed for headless server-to-server operations. While it functions like a two-legged flow (no user interaction), it is classified as three-legged because it preserves user context. |
| --- | --- |
| Content-Type*string | Must be `application/vnd.api+json` |
| x-user-idstring | In a two-legged authentication context, the app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act on behalf of only the user specified. |

### Request

## URI Parameters

| project_idstring | The unique identifier of a project.
To convert BIM 360 or Forma Project IDs to Data Management Project IDs, prefix them with `b.` For example, a Project ID of `c8b0c73d-3ae9` becomes `b.c8b0c73d-3ae9`. |
| --- | --- |

### Request

## Body Structure

describe the file the storage is created for.

| jsonapi*object | The JSON API object. |
| --- | --- |
| version*enum:string | The version of JSON API. Will always be: `1.0` |
| data*object | The data object. |
| type*enum:string | The type of this resource. Will always be: `objects` |
| attributes*object | The attributes of the data object. |
| name*string | Displayable name of the resource. |
| relationships*object | The resources that share a relationship with this resource. |
| target*object | Information on the target object. |
| data*object | The data object. |
| type*enum:string | The type of this resource.
Possible values: `folders`, `items` |
| id*string | The id of the resource. |

### Response

## HTTP Status Code Summary

| 201Created | Successful creation of a storage location. |
| --- | --- |
| 400Bad Request | The request could not be understood by the server due to malformed syntax or missing request headers.
The client SHOULD NOT repeat the request without modifications. The response body may give an indication
of what is wrong with the request. |
| 403Forbidden | The request was successfully validated but permission is not granted or the
application has not been white-listed.
Do not try again unless you solve permissions first. |
| 404Not Found | The specified resource was not found. |

### Response

## Body Structure (201)

| jsonapiobject | The JSON API object. |
| --- | --- |
| versionenum:string | The version of JSON API. Will always be: `1.0` |
| linksobject | Information on links to this resource. |
| selfobject | An object containing an API link property. |
| hrefstring | A hyperlink reference to this resource. |
| dataobject | The object containing information on the storage resource. |
| typeenum:string | The type of this resource. Will always be: `objects` |
| idstring | The id of the resource. |
| relationshipsobject | Information on other resources that shares a relationship with this resource. |
| targetobject | Information on the target object. |
| linksobject | The object containing information on links of related resources. |
| relatedobject | An object containing an API link property. |
| hrefstring | A hyperlink reference to this resource. |
| dataobject | The data object of the resource. |
| typeenum:string | The type of this resource. Will always be: `folders` |
| idstring | The id of the resource. |

## Example

Successful creation of a storage location.

### Request

```
curl -v 'https://developer.api.autodesk.com/data/v1/projects/:project_id/storage' \
  -X 'POST' \
  -H 'Authorization: Bearer AuIPTf4KYLTYGVnOHQ0cuolwCW2a' \
  -H 'Content-Type: application/vnd.api+json' \
  -d '{
        "jsonapi": {
          "version": "1.0"
        },
        "data": {
          "type": "objects",
          "attributes": {
            "name": "drawing.dwg"
          },
          "relationships": {
            "target": {
              "data": {
                "type": "folders",
                "id": "urn:adsk.wipprod:fs.folder:co.mgS-lb-BThaTdHnhiN_mbA"
              }
            }
          }
        }
      }'
```

### Response

```
{
  "jsonapi": {
    "version": "1.0"
  },
  "links": {
    "self": {
      "href": "/oss/v2/buckets/wipbucket/objects/830b7ac3-dc75-4e36-aa32-7a1cff7599a1.dwg"
    }
  },
  "data": {
    "type": "objects",
    "id": "urn:adsk.objects:os.object:wip.dm.prod.temp/830b7ac3-dc75-4e36-aa32-7a1cff7599a1.dwg",
    "relationships": {
      "target": {
        "links": {
          "related": {
            "href": "/data/v1/projects/b.6f8813fe-31a7-4440-bc63-d8ca97c856b4/folders/urn%3Aadsk.wipprod%3Adm.folder%3Asdfedf8wefl"
          }
        },
        "data": {
          "type": "folders",
          "id": "urn:adsk.wipprod:dm.folder:sdfedf8wefl"
        }
      }
    }
  }
}
```

---
원본 문서: https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-storage-POST
