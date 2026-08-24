---
title: "GET projects/:project_id/downloads/:download_id"
url_path: reference/http///projects-project_id-downloads-download_id-GET
product: "Data Management API"
surface: "data-management-v2"
protocol: "REST"
document_kind: "endpoint"
api_version: "v2"
section: "reference"
category: "http"
operation_id: "projects-project_id-downloads-download_id-GET"
method: "GET"
path: "/data/v1/projects/{project_id}/downloads/{download_id}"
auth_context: "user context optional"
scopes: ["data:read"]
verification: "docs-only"
---
# projects/:project_id/downloads/:download_id

Returns the details for a specific `download`.

## Resource Information

| Method and URI | GET https://developer.api.autodesk.com/data/v1/projects/:project_id/downloads/:download_id |
| --- | --- |
| Authentication Context | User context optional |
| Required OAuth Scopes | `data:read` |
| Data Format | JSON |

### Request

## Headers

| Authorization*string | Must be `Bearer <token>`, where `<token>` is a two-legged access token obtained via a [Client Credentials Grant flow](https://aps.autodesk.com/en/docs/oauth/v2/tutorials/get-2-legged-token/), or a three-legged access token obtained via an [Authorization Code flow](https://aps.autodesk.com/en/docs/oauth/v2/tutorials/get-3-legged-token/) or a [Secure Service Account (SSA) flow](https://aps.autodesk.com/en/docs/ssa/v1/tutorials/getting-started-with-ssa/task3-generate-3-legged-access-token/).
The SSA flow is designed for headless server-to-server operations. While it functions like a two-legged flow (no user interaction), it is classified as three-legged because it preserves user context. |
| --- | --- |
| x-user-idstring | In a two-legged authentication context, the app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act on behalf of only the user specified. |

### Request

## URI Parameters

| project_idstring | The unique identifier of a project.
To convert BIM 360 or Forma Project IDs to Data Management Project IDs, prefix them with `b.` For example, a Project ID of `c8b0c73d-3ae9` becomes `b.c8b0c73d-3ae9`. |
| --- | --- |
| download_idstring | The unique identifier of a download job. |

### Response

## HTTP Status Code Summary

| 200OK | Successful retrieval of the details for a specific download object. |
| --- | --- |
| 400Bad Request | The request could not be understood by the server due to malformed syntax or missing request headers.
The client SHOULD NOT repeat the request without modifications. The response body may give an indication
of what is wrong with the request. |
| 403Forbidden | The request was successfully validated but permission is not granted or the
application has not been white-listed.
Do not try again unless you solve permissions first. |
| 404Not Found | The specified resource was not found. |

### Response

## Body Structure (200)

| jsonapiobject | The JSON API object. |
| --- | --- |
| versionenum:string | The version of JSON API. Will always be: `1.0` |
| linksobject | Information on links to this resource. |
| selfobject | An object containing an API link property. |
| hrefstring | A hyperlink reference to this resource. |
| dataobject | The object containing information on the download resource. |
| typeenum:string | The type of this resource. Will always be: `downloads` |
| idstring | The id of the resource. |
| attributesobject | The attributes of the download object. |
| formatobject | The object containing information on the format of the download. |
| fileTypestring | The file type of the resource. |
| relationshipsobject | Information on other resources that shares a relationship with this resource. |
| storageobject | Information on resources that are indirectly related to this resource. |
| metaobject | Meta-information on links to this resource. |
| linkobject | An object containing an API link property. |
| hrefstring | A hyperlink reference to this resource. |
| dataobject | An object containing the id and type properties of a resource. |
| idstring | The id of the resource. |
| typestring | The type of this resource. |
| linksobject | Information on links to this resource. |
| selfobject | An object containing an API link property. |
| hrefstring | A hyperlink reference to this resource. |

## Example

Successful retrieval of the details for a specific download object.

### Request

```
curl -v 'https://developer.api.autodesk.com/data/v1/projects/:project_id/downloads/:download_id' \
  -H 'Authorization: Bearer AuIPTf4KYLTYGVnOHQ0cuolwCW2a'
```

### Response

```
{
  "jsonapi": {
    "version": "1.0"
  },
  "links": {
    "self": {
      "href": "/data/v1/projects/{project_id}/downloads/{download_id}"
    }
  },
  "data": {
    "type": "downloads",
    "id": "{download_id}",
    "attributes": {
      "format": {
        "fileType": "pdf"
      }
    },
    "relationships": {
      "source": {
        "links": {
          "related": {
            "href": "/data/v1/projects/{project_id}/downloads/{download_id}/source"
          }
        },
        "data": {
          "type": "versions",
          "id": "{version_id}"
        }
      },
      "storage": {
        "data": {
          "type": "objects",
          "id": "urn:adsk.objects:os.object:{wip_bucket}/{guid}.pdf"
        },
        "meta": {
          "link": {
            "href": "/oss/v2/buckets/{wip_bucket}/objects/{guid}.pdf?scopes={list_of_scopes}"
          }
        }
      }
    },
    "links": {
      "self": {
        "href": "/data/v1/projects/{project_id}/downloads/{download_id}"
      }
    }
  }
}
```

---
원본 문서: https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-downloads-download_id-GET
