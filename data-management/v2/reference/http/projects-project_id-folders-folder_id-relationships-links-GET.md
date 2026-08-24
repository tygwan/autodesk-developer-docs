---
title: "GET projects/:project_id/folders/:folder_id/relationships/links"
url_path: reference/http///projects-project_id-folders-folder_id-relationships-links-GET
product: "Data Management API"
surface: "data-management-v2"
protocol: "REST"
document_kind: "endpoint"
api_version: "v2"
section: "reference"
category: "http"
operation_id: "projects-project_id-folders-folder_id-relationships-links-GET"
method: "GET"
path: "/data/v1/projects/{project_id}/folders/{folder_id}/relationships/links"
auth_context: "user context optional"
scopes: ["data:read"]
verification: "docs-only"
---
# projects/:project_id/folders/:folder_id/relationships/links

Returns a collection of `links` for the given `folder_id`.
Custom relationships can be established between a folder and
other external resources residing outside the `data` domain service.
A link’s `href` defines the target URI to access a resource.

## Resource Information

| Method and URI | GET https://developer.api.autodesk.com/data/v1/projects/:project_id/folders/:folder_id/relationships/links |
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
| folder_idstring | The unique identifier of a folder. |

### Response

## HTTP Status Code Summary

| 200OK | Successful retrieval of the links collection associated with a specific resource. |
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
| dataarray: object | The array of link objects. |
| typeenum:string | The type of this resource. Will always be: `links` |
| idstring | The id of the resource. |
| metaobject | The meta-information of the links of this resource. |
| extensionobject | The extension object of the data. |
| typestring | The type of the schema that the resource’s data object adheres to. |
| versionstring | The version of the schema that the data is adhering to. |
| schemaobject | An object containing an API link property. |
| hrefstring | A hyperlink reference to this resource. |
| dataobject | Additional properties that the resource’s data possesses. |
| linkobject | An object containing an API link property. |
| hrefstring | A hyperlink reference to this resource. |
| mimeTypestring | Mimetype of the link’s content. |
| dataobject | The object containing meta-information on the data of the links of this resource. |
| typestring | The type of the resource data. |
| idstring | The id of the resource. |

## Example

Successful retrieval of the links collection associated with a specific resource.

### Request

```
curl -v 'https://developer.api.autodesk.com/data/v1/projects/:project_id/folders/:folder_id/relationships/links' \
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
      "href": "/data/v1/projects/{some_project_id}/folders/{some_folder_id}/relationships/links"
    }
  },
  "data": [
    {
      "type": "links",
      "id": "96af4f60-53b8-4efe-b890-1eaa9ea5cb08",
      "meta": {
        "link": {
          "href": "/oss/v2/buckets/wipbucket/objects/myfolder.zip"
        },
        "data": {
          "type": "objects",
          "id": "urn:adsk.objects:os.object:wipbucket/myfolder.zip"
        },
        "mimeType": "application/x-zip-compressed",
        "extension": {
          "type": "links:A360:DownloadArchiveFolder",
          "version": "1.0",
          "schema": {
            "href": "/schema/v1/versions/links%3AA360%3ADownloadArchiveFolder-1.0"
          },
          "data": {
            "createdTime": "2015-05-22T14:56:28.000Z"
          }
        }
      }
    },
    {
      "type": "links",
      "id": "cf755d5e-7876-41c2-a58e-2175f9b0cd4b",
      "meta": {
        "link": {
          "href": "/a360/v2/items/{a360folder_id}/create_archive"
        },
        "extension": {
          "type": "links:A360:CreateFolderArchive",
          "version": "1.0",
          "schema": {
            "href": "/schema/v1/versions/links%3AA360%3ACreateFolderArchive-1.0"
          }
        }
      }
    }
  ]
}
```

---
원본 문서: https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-folders-folder_id-relationships-links-GET
