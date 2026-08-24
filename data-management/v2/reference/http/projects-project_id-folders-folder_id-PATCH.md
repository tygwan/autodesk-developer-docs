---
title: "PATCH projects/:project_id/folders/:folder_id"
url_path: reference/http///projects-project_id-folders-folder_id-PATCH
product: "Data Management API"
surface: "data-management-v2"
protocol: "REST"
document_kind: "endpoint"
api_version: "v2"
section: "reference"
category: "http"
operation_id: "projects-project_id-folders-folder_id-PATCH"
method: "PATCH"
path: "/data/v1/projects/{project_id}/folders/{folder_id}"
auth_context: "user context optional"
scopes: ["data:write"]
verification: "docs-only"
---
# projects/:project_id/folders/:folder_id

Modifies folder names. You can also use this endpoint to delete and restore BIM 360 Docs folders by using the `hidden` attribute, or move BIM 360 Docs folders by using `parent` relationships.

Note that you cannot permanently delete BIM 360 Docs folders.
They are tagged as `hidden` folders and are removed from the BIM 360 Docs UI and from regular Data Management API responses until you restore them.
You can use the `hidden` filter (`filter[hidden]=true`) to get a list of deleted folders with
the [GET projects/:project_id/folders/:folder_id/contents](https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-folders-folder_id-contents-GET/) endpoint.

Note that to access BIM 360 Docs folders using the Data Management API you need to provision your app in the BIM 360
Account Administrator portal. For more details, see the [Manage Access to Docs](https://aps.autodesk.com/en/docs/bim360/v1/tutorials/manage-access-to-docs) tutorial.

## Resource Information

| Method and URI | PATCH https://developer.api.autodesk.com/data/v1/projects/:project_id/folders/:folder_id |
| --- | --- |
| Authentication Context | User context optional |
| Required OAuth Scopes | `data:write` |
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
| folder_idstring | The unique identifier of a folder. |

### Request

## Body Structure

describe the folder to be patched.

| jsonapi*object | The JSON API object. |
| --- | --- |
| version*enum:string | The version of JSON API. Will always be: `1.0` |
| data*object | The data object. |
| type*enum:string | The type of this resource. Will always be: `folders` |
| id*string | The URN of the folder.
For details about how to find the URN, follow the initial steps in the [Download a File](https://aps.autodesk.com/en/docs/data/v2/tutorials/download-file/) tutorial.
Note that this should NOT be URL-encoded.
Note that you also need to specify the URN of the folder in the URI (`folder_id`). |
| attributesobject | The attributes of the data object |
| hiddenboolean | `true` if you want to delete a BIM 360 Docs folder.
`false` if you want to restore a BIM 360 Docs folder. |
| namestring | The new folder name (1-255 characters).
Reserved characters: `<`, `>`, `:`, `"`, `/`, `\`, `\|`, `?`, `*`, ```, `\n`, `\r`, `\t`, `\0`, `\f`, `¢`, `™`, `# projects/:project_id/folders/:folder_id

Modifies folder names. You can also use this endpoint to delete and restore BIM 360 Docs folders by using the `hidden` attribute, or move BIM 360 Docs folders by using `parent` relationships.

Note that you cannot permanently delete BIM 360 Docs folders.
They are tagged as `hidden` folders and are removed from the BIM 360 Docs UI and from regular Data Management API responses until you restore them.
You can use the `hidden` filter (`filter[hidden]=true`) to get a list of deleted folders with
the [GET projects/:project_id/folders/:folder_id/contents](https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-folders-folder_id-contents-GET/) endpoint.

Note that to access BIM 360 Docs folders using the Data Management API you need to provision your app in the BIM 360
Account Administrator portal. For more details, see the [Manage Access to Docs](https://aps.autodesk.com/en/docs/bim360/v1/tutorials/manage-access-to-docs) tutorial.

## Resource Information

| Method and URI | PATCH https://developer.api.autodesk.com/data/v1/projects/:project_id/folders/:folder_id |
| --- | --- |
| Authentication Context | User context optional |
| Required OAuth Scopes | `data:write` |
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
| folder_idstring | The unique identifier of a folder. |

### Request

## Body Structure

describe the folder to be patched.

, `®`.
Restored folders are assigned the original folder name by default, unless you specify a different name.
Note that if you assign a deleted folder name to a different folder, you will need to assign a new name to the deleted folder when you restore it. |
| extensionobject | Extended information on the resource. |
| dataobject | Additional properties to modify.
Contains extended properties for this resource based on the extension schema type and version. The ability to modify these properties depends on whether the schema type and version allow it. |
| descriptionstring | The description of the folder (0-255 characters). This property is only available for folders in Forma projects. |
| relationshipsobject | The resources that share a relationship with this resource. |
| parentobject | Information on the parent resource of this resource. |
| data*object | The data object. |
| type*enum:string | The type of this resource. Will always be: `folders` |
| id*string | The URN of the parent folder in which you want to move a folder to. |

### Response

## HTTP Status Code Summary

| 200OK | Folder successfully renamed. |
| --- | --- |
| 400Bad Request | The request could not be understood by the server due to malformed syntax or missing request headers.
The client SHOULD NOT repeat the request without modifications. The response body may give an indication
of what is wrong with the request. |
| 403Forbidden | The request was successfully validated but permission is not granted or the
application has not been white-listed.
Do not try again unless you solve permissions first. |
| 404Not Found | The specified resource was not found. |
| 423Locked | The source or destination resource is locked or being modifed. |

### Response

## Body Structure (200)

| jsonapiobject | The JSON API object. |
| --- | --- |
| versionenum:string | The version of JSON API. Will always be: `1.0` |
| linksobject | Information on links to this resource. |
| selfobject | An object containing an API link property. |
| hrefstring | A hyperlink reference to this resource. |
| dataobject | The object containing information on the folder. |
| typeenum:string | The type of this resource. Will always be: `folders` |
| idstring | The unique identifier of the folder. |
| attributesobject | The attributes of the folder. |
| namestring | The new name of the folder.
When you delete a folder a unique identifier is generated for the folder name until it is restored.
Note that if you assign a deleted folder name to a different folder,
you will need to assign a new name to the deleted folder when you restore it. |
| displayNamestring | Note that this field is reserved for future releases and should not be used. Use `attributes.name` for the new name of the folder. |
| objectCountint | The number of objects inside the folder. |
| createTimedatetime: ISO 8601 | The time the folder was created, in the following format: `YYYY-MM-DDThh:mm:ss.sz`. |
| createUserIdstring | The unique identifier of the user who created the folder. |
| createUserNamestring | The name of the user who created the folder. |
| lastModifiedTimedatetime: ISO 8601 | The last time the folder was modified, in the following format: `YYYY-MM-DDThh:mm:ss.sz`. |
| lastModifiedUserIdstring | The unique identifier of the user who last modified the folder. |
| lastModifiedUserNamestring | The name of the user who last modified the folder. |
| lastModifiedTimeRollupdatetime: ISO 8601 | The date and time the folder or any of its children were last updated. |
| hiddenboolean | The folder’s current visibility state. |
| extensionobject | The extension object of the data. |
| typestring | The type of the schema that the resource’s data object adheres to. |
| versionstring | The version of the schema that the data is adhering to. |
| schemaobject | An object containing an API link property. |
| hrefstring | A hyperlink reference to this resource. |
| dataobject | A collection of properties applied to the folder. |
| descriptionstring | The description of the folder (0-255 characters). This property is only available for folders in Forma projects. |
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

Folder successfully renamed.

### Request

```
curl -v 'https://developer.api.autodesk.com/data/v1/projects/:project_id/folders/:folder_id' \
  -X 'PATCH' \
  -H 'Authorization: Bearer AuIPTf4KYLTYGVnOHQ0cuolwCW2a' \
  -H 'Content-Type: application/vnd.api+json' \
  -d '{
        "jsonapi": {
          "version": "1.0"
        },
        "data": {
          "type": "folders",
          "id": "urn:adsk.wipprod:fs.folder:co.mgS-lb-BThaTdHnhiN_mbA",
          "attributes": {
            "name": "Drawings"
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
      "href": "/data/v1/projects/b.c2960674-2d1e-4cc8-a5f0-4b9026fd3f5d/folders/urn%3Aadsk.wipprod%3Adm.folder%3AhC6k4hndRWaeIVhIjvHu8w"
    }
  },
  "data": {
    "type": "folders",
    "id": "urn:adsk.wipprod:dm.folder:hC6k4hndRWaeIVhIjvHu8w",
    "attributes": {
      "name": "Drawings",
      "displayName": "Drawings",
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
원본 문서: https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-folders-folder_id-PATCH
