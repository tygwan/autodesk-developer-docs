---
title: "POST projects/:project_id/downloads"
url_path: reference/http///projects-project_id-downloads-POST
product: "Data Management API"
surface: "data-management-v2"
protocol: "REST"
document_kind: "endpoint"
api_version: "v2"
section: "reference"
category: "http"
operation_id: "projects-project_id-downloads-POST"
method: "POST"
path: "/data/v1/projects/{project_id}/downloads"
auth_context: "user context optional"
scopes: ["data:create"]
verification: "docs-only"
---
# projects/:project_id/downloads

Request the creation of a new `download` for a specific and supported `file type`.
The `fileType` specified in the POST body needs to be contained in the list of
supported file types returned by the [GET projects/:project_id/versions/:version_id/downloadFormats](https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-versions-version_id-downloadFormats-GET/) endpoint for the specified
`version_id`.

## Resource Information

| Method and URI | POST https://developer.api.autodesk.com/data/v1/projects/:project_id/downloads |
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

describe the download to be created.

| jsonapi*object | The JSON API object. |
| --- | --- |
| version*enum:string | The version of JSON API. Will always be: `1.0` |
| data*object | The data object. |
| type*enum:string | The type of this resource. Will always be: `downloads` |
| attributes*object | The attributes of the data object. |
| format*object | The object containing information on the format of the download. |
| fileType*string | The given file-type needs to match one of the supported file-types for the given `version` |
| relationships*object | The resources that share a relationship with this resource. |
| source*object | Information on the source where the download is coming from. |
| data*object | The data object. |
| type*enum:string | The type of this resource. Will always be: `versions` |
| id*string | The id of the resource. |

### Response

## HTTP Status Code Summary

| 202Accepted | Successful creation of a job. |
| --- | --- |
| 400Bad Request | The request could not be understood by the server due to malformed syntax or missing request headers.
The client SHOULD NOT repeat the request without modifications. The response body may give an indication
of what is wrong with the request. |
| 403Forbidden | The request was successfully validated but permission is not granted or the
application has not been white-listed.
Do not try again unless you solve permissions first. |
| 404Not Found | The specified resource was not found. |

### Response

## Body Structure (202)

| jsonapiobject | The JSON API object. |
| --- | --- |
| versionenum:string | The version of JSON API. Will always be: `1.0` |
| linksobject | Information on links to this resource. |
| selfobject | An object containing an API link property. |
| hrefstring | A hyperlink reference to this resource. |
| dataobject | The object containing information on the task job. |
| typeenum:string | The type of this resource. Will always be: `jobs` |
| idstring | The id of the resource. |
| attributesobject | The attributes of the task job. |
| statusenum:string | The type of this resource.
Possible values: `queued`, `finished`, `failed`, `processing` |
| linksobject | Information on links to this resource. |
| selfobject | An object containing an API link property. |
| hrefstring | A hyperlink reference to this resource. |

## Example

Successful creation of a job.

### Request

```
curl -v 'https://developer.api.autodesk.com/data/v1/projects/:project_id/downloads' \
  -X 'POST' \
  -H 'Authorization: Bearer AuIPTf4KYLTYGVnOHQ0cuolwCW2a' \
  -H 'Content-Type: application/vnd.api+json' \
  -d '{
        "jsonapi": {
          "version": "1.0"
        },
        "data": {
          "type": "downloads",
          "attributes": {
            "format": {
              "fileType": "dwf"
            }
          },
          "relationships": {
            "source": {
              "data": {
                "type": "versions",
                "id": "{version_id}"
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
      "href": "/data/v1/projects/{project_id}/jobs/{job_id}"
    }
  },
  "data": {
    "type": "jobs",
    "id": "{job_id}",
    "attributes": {
      "status": "queued"
    },
    "links": {
      "self": {
        "href": "/data/v1/projects/{project_id}/jobs/{job_id}"
      }
    }
  }
}
```

---
원본 문서: https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-downloads-POST
