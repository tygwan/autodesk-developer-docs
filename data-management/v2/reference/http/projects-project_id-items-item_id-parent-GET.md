---
title: "GET projects/:project_id/items/:item_id/parent"
url_path: reference/http///projects-project_id-items-item_id-parent-GET
product: "Data Management API"
surface: "data-management-v2"
protocol: "REST"
document_kind: "endpoint"
api_version: "v2"
section: "reference"
category: "http"
operation_id: "projects-project_id-items-item_id-parent-GET"
method: "GET"
path: "/data/v1/projects/{project_id}/items/{item_id}/parent"
auth_context: "user context optional"
scopes: ["data:read"]
verification: "docs-only"
---
# projects/:project_id/items/:item_id/parent

Returns the "parent" folder for the given item.

## Resource Information

| Method and URI | GET https://developer.api.autodesk.com/data/v1/projects/:project_id/items/:item_id/parent |
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
| item_idstring | The unique identifier of an item. |

### Response

## HTTP Status Code Summary

| 200OK | Successful retrieval of a specific folder. |
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
| dataobject | The object containing information on the folder. |
| attributesobject | The attributes of the folder. |
| extensionobject | The extension object of the data. |
| dataobject | A collection of properties applied to the folder. |
| descriptionstring | The description of the folder (0-255 characters). This property is only available for folders in Forma projects. |
| namingStandardIdsarray: string | A list of file naming standard IDs that have been applied to the folder.
Note that we currently support one file naming standard per project.
Note that this feature is only available for BIM 360 projects.
To get the details of a file naming standard, call [GET naming-standards](https://aps.autodesk.com/en/docs/bim360/v1/reference/http/document-management-naming-standards-id-GET).
To learn more about the file naming standard feature, see the [BIM 360 File Naming Standard](https://help.autodesk.com/view/BIM360D/ENU/?guid=Common_Data_Environment) help documentation. |
| typestring | The type of resource. |
| versionstring | The version of the folder’s type. |
| schemaobject | An object containing an API link property. |
| hrefstring | A hyperlink reference to this resource. |
| namestring | The name of the folder. |
| displayNamestring | Note that this field is reserved for future releases and should not be used. Use `attributes.name` for the folder name. |
| objectCountint | The number of objects inside the folder. |
| createTimedatetime: ISO 8601 | The time the folder was created, in the following format: `YYYY-MM-DDThh:mm:ss.sz`. |
| createUserIdstring | The unique identifier of the user who created the folder. |
| createUserNamestring | The name of the user who created the folder. |
| lastModifiedTimedatetime: ISO 8601 | The last time the folder was modified, in the following format: `YYYY-MM-DDThh:mm:ss.sz`. |
| lastModifiedUserIdstring | The unique identifier of the user who last modified the folder. |
| lastModifiedUserNamestring | The name of the user who last modified the folder. |
| lastModifiedTimeRollupdatetime: ISO 8601 | The date and time the folder or any of its children were last updated. |
| hiddenboolean | The folder’s current visibility state. |
| typeenum:string | The type of this resource. Will always be: `folders` |
| idstring | The unique identifier of the folder. |
| relationshipsobject | The relationship links associated with the folder, including `refs`, `links`, `parent`, and `contents.` |
| parentobject | Information on resources that are found above this resource. |
| linksobject | The object containing information on links of related resources. |
| relatedobject | An object containing an API link property. |
| hrefstring | A hyperlink reference to this resource. |
| dataobject | An object containing the id and type properties of a resource. |
| idstring | The id of the resource. |
| typestring | The type of this resource. |
| contentsobject | Information on resources that are found under this resource. |
| linksobject | The object containing information on links of related resources. |
| relatedobject | An object containing an API link property. |
| hrefstring | A hyperlink reference to this resource. |
| refsobject | Information on other resources that shares a custom relationship with this resource. |
| linksobject | The object containing information on links of related resources that shares a custom relationship with this resource. |
| selfobject | An object containing an API link property. |
| hrefstring | A hyperlink reference to this resource. |
| relatedobject | An object containing an API link property. |
| hrefstring | A hyperlink reference to this resource. |
| linksobject | Information on the link resources found in this resource. |
| linksobject | The object containing information on links to this resource. |
| selfobject | An object containing an API link property. |
| hrefstring | A hyperlink reference to this resource. |
| linksobject | Information on links to this resource. |
| selfobject | An object containing an API link property. |
| hrefstring | A hyperlink reference to this resource. |
| webViewobject | An object containing a link that opens the resource in a browser. |
| hrefstring | The location (URL) of the resource the link goes to. |

## Example

Successful retrieval of a specific folder.

### Request

```
curl -v 'https://developer.api.autodesk.com/data/v1/projects/:project_id/items/:item_id/parent' \
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
      "href": "/data/v1/projects/b.c2960674-2d1e-4cc8-a5f0-4b9026fd3f5d/folders/urn%3Aadsk.wipprod%3Adm.folder%3AhC6k4hndRWaeIVhIjvHu8w"
    }
  },
  "data": {
    "type": "folders",
    "id": "urn:adsk.wipprod:dm.folder:hC6k4hndRWaeIVhIjvHu8w",
    "attributes": {
      "name": "Plans",
      "displayName": "Plans",
      "createTime": "2015-11-27T11:11:23.000Z",
      "createUserId": "BW9RM76WZBGL",
      "createUserName": "John Doe",
      "lastModifiedTime": "2015-11-27T11:11:27.000Z",
      "lastModifiedUserId": "BW9RM76WZBGL",
      "lastModifiedUserName": "John Doe",
      "lastModifiedTimeRollup": "2015-11-27T11:11:27.000Z",
      "objectCount": 4,
      "hidden": false,
      "extension": {
        "type": "folders:autodesk.bim360:Folder",
        "version": "1.0",
        "schema": {
          "href": "https://developer.api.autodesk.com/schema/v1/versions/folders%3Aautodesk.bim360%3AFolder-1.0"
        },
        "data": {
          "allowedTypes": [
            "folders",
            "items:autodesk.bim360:File",
            "items:autodesk.bim360:Document",
            "items:autodesk.bim360:TitleBlock"
          ],
          "visibleTypes": [
            "folders",
            "items:autodesk.bim360:Document"
          ],
          "namingStandardIds": []
        }
      }
    },
    "links": {
      "self": {
        "href": "/data/v1/projects/b.c2960674-2d1e-4cc8-a5f0-4b9026fd3f5d/folders/urn%3Aadsk.wipprod%3Adm.folder%3AhC6k4hndRWaeIVhIjvHu8w"
      },
      "webView": {
        "href": "https://docs.b360.autodesk.com/projects/c2960674-2d1e-4cc8-a5f0-4b9026fd3f5d/folders/urn%3Aadsk.wipprod%3Adm.folder%3AhC6k4hndRWaeIVhIjvHu8w"
      }
    },
    "relationships": {
      "parent": {
        "links": {
          "related": {
            "href": "/data/v1/projects/b.c2960674-2d1e-4cc8-a5f0-4b9026fd3f5d/folders/urn%3Aadsk.wipprod%3Adm.folder%3AhC6k4hndRWaeIVhIjvHu8w/parent"
          }
        },
        "data": {
          "type": "folders",
          "id": "urn:adsk.wipprod:dm.folder:sdfedf8wefl"
        }
      },
      "refs": {
        "links": {
          "self": {
            "href": "/data/v1/projects/b.c2960674-2d1e-4cc8-a5f0-4b9026fd3f5d/folders/urn%3Aadsk.wipprod%3Adm.folder%3AhC6k4hndRWaeIVhIjvHu8w/relationships/refs"
          },
          "related": {
            "href": "/data/v1/projects/b.c2960674-2d1e-4cc8-a5f0-4b9026fd3f5d/folders/urn%3Aadsk.wipprod%3Adm.folder%3AhC6k4hndRWaeIVhIjvHu8w/refs"
          }
        }
      },
      "links": {
        "links": {
          "self": {
            "href": "/data/v1/projects/b.c2960674-2d1e-4cc8-a5f0-4b9026fd3f5d/folders/urn%3Aadsk.wipprod%3Adm.folder%3AhC6k4hndRWaeIVhIjvHu8w/relationships/links"
          }
        }
      },
      "contents": {
        "links": {
          "related": {
            "href": "/data/v1/projects/b.c2960674-2d1e-4cc8-a5f0-4b9026fd3f5d/folders/urn%3Aadsk.wipprod%3Adm.folder%3AhC6k4hndRWaeIVhIjvHu8w/contents"
          }
        }
      }
    }
  }
}
```

---
원본 문서: https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-items-item_id-parent-GET
