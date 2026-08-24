---
title: "POST projects/:project_id/versions"
url_path: reference/http///projects-project_id-versions-POST
product: "Data Management API"
surface: "data-management-v2"
protocol: "REST"
document_kind: "endpoint"
api_version: "v2"
section: "reference"
category: "http"
operation_id: "projects-project_id-versions-POST"
method: "POST"
path: "/data/v1/projects/{project_id}/versions"
auth_context: "user context optional"
scopes: ["data:create"]
verification: "docs-only"
---
# projects/:project_id/versions

Creates new versions of a file (item), except for the first version of the item. To create the first version of the item, use [POST items](https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-items-POST).

Before creating each version you need to [create a new storage location](https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-storage-POST) for the version, and [upload the file to the storage object](https://aps.autodesk.com/en/docs/data/v2/reference/http/buckets-:bucketKey-objects-:objectKey-PUT). For more details about the workflow, see the tutorial on [uploading a file](https://aps.autodesk.com/en/docs/data/v2/tutorials/upload-file).

This endpoint also copies versions of items to exisitng items in other folders. The endpoint creates a new version of the existing item in the target folder. You cannot copy versions of items across different projects and accounts.

To copy versions of items to other folders and create a new item and a first version of the item in the target folder, use [POST versions](https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-items-POST).

This endpoint can also be used to delete files on BIM360 Document Management. For more information, please refer to the [delete and restore a file turorial](https://aps.autodesk.com/en/docs/data/v2/tutorials/delete-and-restore-file).

Note that to access BIM 360 Docs files using the Data Management API you need to provision your app in the BIM 360 Account Administrator portal. For more details, see the [Manage Access to Docs](https://aps.autodesk.com/en/docs/bim360/v1/tutorials/manage-access-to-docs) tutorial.

## Resource Information

| Method and URI | POST https://developer.api.autodesk.com/data/v1/projects/:project_id/versions |
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

## Query String Parameters

| copyFromstring | Only relevant for copying files to BIM 360 Docs - the version ID (URN) of the file to copy.
For details about finding the URN, follow the initial steps in the [Download a File](https://aps.autodesk.com/en/docs/data/v2/tutorials/download-file/) tutorial.
You can only copy files to the Plans folder or to subfolders of the Plans folder with an `item:autodesk.bim360:Document` item extension type, and you can only copy files to the Project Files folder or to subfolders of the Project Files folder with an `item:autodesk.bim360:File` item extension type.
To verify an item’s extension type, use [GET item](https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-items-item_id-GET), and check the `attributes.extension.type` attribute.
Note that if you copy a file to the Plans folder or to a subfolder of the Plans folder, the copied file inherits the permissions of the source file. For example, if the end user did not have permission to download files in the source folder, but does have permission to download files in the target folder, he/she will not be able to download the copied file.
Note that you cannot copy a file if it is in the middle of being uploaded, updated, or copied. To verify the current process state of a file, call [GET item](https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-items-item_id-GET), and check the `attributes.extension.data.processState` attribute. |
| --- | --- |

### Request

## Body Structure

describe the version to be created.

| jsonapi*object | The JSON API object. |
| --- | --- |
| version*enum:string | The version of JSON API. Will always be: `1.0` |
| data*object | The data object. |
| type*enum:string | The type of this resource. Will always be: `versions` |
| attributes*object | The attributes of the data object. |
| name*string | When copying, copied version uses name of source version by default. This is not required for copy but if present, the value will be used for the copied version. |
| extension*object | The object containing information on the base attributes of the extension of an object. |
| type*string | The type of this resource. |
| version*string | The version of the resource. |
| dataobject | The data object. |
| displayNamestring | Note that this field is reserved for future releases and should not be used. Use `data.attributes.name` for the file name. |
| relationships*object | The resources that share a relationship with this resource. |
| item*object | The object containing information on the item. |
| data*object | The data object. |
| type*enum:string | The type of this resource. Will always be: `items` |
| id*string | The id of the resource. |
| storageobject | The object containing information on the storage resource. |
| data*object | The data object. |
| type*enum:string | The type of this resource. Will always be: `objects` |
| id*string | The id of the resource. |
| refsobject | Only relevant for creating files. |
| data*array: object | The array of ref objects. |
| type*enum:string | Will always be: `versions` |
| id*string | The URN of Version. |
| meta*object | The meta-information of this resource. |
| refType*enum:string | Will always be: `xrefs` |
| direction*enum:string | Possible values: `from`, `to` |
| extension*object | Extended information on the resource. |
| type*enum:string | The type of the resource. Will always be: `xrefs:autodesk.core:Xref` |
| version*string | The version of xref type. The current version is 1.1.0. |
| dataobject | The data object. |
| nestedType*enum:string | The type of the resource.
Possible values: `attachment`, `overlay` |
| metaobject | Meta-information for the resource creation. |
| workflow*string | Only relevant for BIM 360 Docs. The workflow id created for a webhook, used to listen to Model Derivative events. It needs to be no more than 36 chars, and only ASCII, decimal and hyphen are accepted. See the [Creating a Webhook and Listening to Events](https://aps.autodesk.com/en/docs/webhooks/v1/tutorials/create-a-hook-model-derivative) tutorial for details. |
| workflowAttributeobject | Only relevant for BIM 360 Docs. A user-defined JSON object, which you can use to set some custom workflow information. It needs to be less than 1KB and will be ignored if meta.workflow parameter is not set. |

### Response

## HTTP Status Code Summary

| 201Created | Successful creation of a version. |
| --- | --- |
| 400Bad Request | The request could not be understood by the server due to malformed syntax or missing request headers.
The client SHOULD NOT repeat the request without modifications. The response body may give an indication
of what is wrong with the request. |
| 403Forbidden | The request was successfully validated but permission is not granted or the
application has not been white-listed.
Do not try again unless you solve permissions first. |
| 404Not Found | The specified resource was not found. |
| 409Conflict | The specified resource already exists or has been modified. |
| 423Locked | The source or destination resource is locked or being modifed. |

### Response

## Body Structure (201)

| jsonapiobject | The JSON API object. |
| --- | --- |
| versionenum:string | The version of JSON API. Will always be: `1.0` |
| linksobject | Information on links to this resource. |
| selfobject | An object containing an API link property. |
| hrefstring | A hyperlink reference to this resource. |
| dataobject | The object containing information on the version of the resource. |
| typeenum:string | The type of this resource. Will always be: `versions` |
| idstring | The id of the resource. |
| attributesobject | The attributes of the resource. |
| namestring | The filename used when synced to local disk. |
| displayNamestring | Displayable name of the version. Note that for BIM 360 projects, this field is reserved for future releases and should not be used. Use version’s `attributes.name` for the file name. |
| versionNumberint | Version number of this versioned file. |
| mimeTypestring | Mimetype of the version’s content. |
| fileTypestring | File type, only present if this version represents a file. |
| storageSizeint | File size in bytes, only present if this version represents a file. |
| createTimedatetime: ISO 8601 | The time that the resource was created at. |
| createUserIdstring | The userId that created the resource. |
| createUserNamestring | The username that created the resource. |
| lastModifiedTimedatetime: ISO 8601 | The time that the resource was last modifed. |
| lastModifiedUserIdstring | The userId that last modified the resource. |
| lastModifiedUserNamestring | The username that last modified the resource. |
| extensionobject | The extension object of the data. |
| typestring | The type of the schema that the resource’s data object adheres to. |
| versionstring | The version of the schema that the data is adhering to. |
| schemaobject | An object containing an API link property. |
| hrefstring | A hyperlink reference to this resource. |
| dataobject | Additional properties that the resource’s data possesses. |
| conformingStatusenum:string | A status indicating whether or not this version conforms to its parent folder’s file naming standard.
Possible values:

`NONE`: The conforming status is not applicable for the version.
`CONFORMING`: The version conforms to its parent folder’s file naming standard.
`NON_CONFORMING`: The version does not conform to its parent folder’s file naming standard.

In the event of a `NON_CONFORMING` status, call [GET folders/folder_id](https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-folders-folder_id-GET) to get the file naming standards IDs that have been applied to the version’s parent folder, and then use the ID to call [GET naming-standards](https://aps.autodesk.com/en/docs/bim360/v1/reference/http/document-management-naming-standards-id-GET/) to get the details of the file naming standard.
Note that this feature is only available for BIM 360 projects.
To learn more about the file naming standard feature, see the [BIM 360 File Naming Standard](https://help.autodesk.com/view/BIM360D/ENU/?guid=Common_Data_Environment) help documentation. |
| relationshipsobject | Information on other resources that shares a relationship with this resource. |
| itemobject | Information on resources that are found above this resource. |
| linksobject | The object containing information on links of related resources. |
| relatedobject | An object containing an API link property. |
| hrefstring | A hyperlink reference to this resource. |
| dataobject | An object containing the id and type properties of a resource. |
| idstring | The id of the resource. |
| typestring | The type of this resource. |
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
| storageobject | Information on resources that are indirectly related to this resource. |
| metaobject | Meta-information on links to this resource. |
| linkobject | An object containing an API link property. |
| hrefstring | A hyperlink reference to this resource. |
| dataobject | An object containing the id and type properties of a resource. |
| idstring | The id of the resource. |
| typestring | The type of this resource. |
| derivativesobject | Information on resources that are indirectly related to this resource. |
| metaobject | Meta-information on links to this resource. |
| linkobject | An object containing an API link property. |
| hrefstring | A hyperlink reference to this resource. |
| dataobject | An object containing the id and type properties of a resource. |
| idstring | The id of the resource. |
| typestring | The type of this resource. |
| thumbnailsobject | Information on resources that are indirectly related to this resource. |
| metaobject | Meta-information on links to this resource. |
| linkobject | An object containing an API link property. |
| hrefstring | A hyperlink reference to this resource. |
| dataobject | An object containing the id and type properties of a resource. |
| idstring | The id of the resource. |
| typestring | The type of this resource. |
| downloadFormatsobject | Information on resources that are found under this resource. |
| linksobject | The object containing information on links of related resources. |
| relatedobject | An object containing an API link property. |
| hrefstring | A hyperlink reference to this resource. |
| linksobject | Information on links to this resource. |
| selfobject | An object containing an API link property. |
| hrefstring | A hyperlink reference to this resource. |
| webViewobject | An object containing a link that opens the resource in a browser. |
| hrefstring | The location (URL) of the resource the link goes to. |
| includedarray: object | The array of resources included within this resource. |
| typeenum:string | The type of this resource. Will always be: `items` |
| idstring | The unique identifier of the item. |
| attributesobject | Attributes of the latest version of an item. |
| displayNamestring | Displayable name of an item. Note that for BIM 360 projects, this field is reserved for future releases and should not be used. Use version’s `attributes.name` for the file name. |
| createTimedatetime: ISO 8601 | The time the item was created, in the following format: `YYYY-MM-DDThh:mm:ss.sz`. |
| createUserIdstring | The unique identifier of the user who created the item. |
| createUserNamestring | The name of the user who created the item. |
| lastModifiedTimedatetime: ISO 8601 | The last time the item was modified, in the following format: `YYYY-MM-DDThh:mm:ss.sz`. |
| lastModifiedUserIdstring | The unique identifier of the user who last modified the item. |
| lastModifiedUserNamestring | The name of the user who last modified the item. |
| hiddenboolean | `true` if the file has been deleted. `false` if the file has not been deleted. |
| reservedboolean | `true` if the file has been locked.``false`` if the file has not been locked. Note that you can lock BIM 360 Project Files folder files and A360 files, but you cannot lock BIM 360 Plans Folder files. |
| reservedTimedatetime: ISO 8601 | The time the item was reserved. |
| reservedUserIdstring | The unique identifier of the user who reserved the item. |
| reservedUserNamestring | The name of the user who reserved the item. |
| extensionobject | The extension object of the item. |
| typestring | The type of the schema that the resource’s data object adheres to. |
| versionstring | The version of the schema that the data is adhering to. |
| schemaobject | An object containing an API link property. |
| hrefstring | A hyperlink reference to this resource. |
| dataobject | Additional properties that the resource data possesses.
Contains extended properties for this resource based on the extension schema type and version. The properties documented under this object may not always be present. |
| descriptionstring | The item’s description property.
**Note:**
This attribute is available only for items in BIM 360 Docs or Forma projects. |
| reviewStatestring | Indicates the current status of items/lineages.
This parameter denotes the state of extracted document sheets, showing if they are awaiting publication. It applies to PDFs, IFCs, and DWFs in the [BIM360 Plans folder](https://help.autodesk.com/view/BIM360D/ENU/?guid=GUID-1B49B17A-12C3-47A1-9AAC-EFC46AF9D7AD) It tracks the progression through review and publication stages. Key states are `NEEDS_REVIEW` and `ACCEPTED`.
**Note:**

This attribute is available only for items in BIM 360 Docs or Forma projects.
It does not indicate the status of BIM360 project files or Forma Data Management files in the review process

To check review status of BIM360 project files, use [BIM360 Batch GET](https://aps.autodesk.com/en/docs/bim360/v1/reference/http/document-management-versionsbatch-get-POST/) instead
To check the review status of Forma Data Management files, use [Forma Batch GET](https://aps.autodesk.com/en/docs/acc/v1/reference/http/document-management-versionsbatch-get-POST/) instead

It does not track Forma Sheets extraction status from Revit/DWG files. Use [Review Sheets](https://aps.autodesk.com/en/docs/acc/v1/reference/http/sheets-review-sheets-GET/) for that purpose. |
| pathInProjectstring | The relative path of the item starting from project’s root folder.
Note: this attribute is not available in search results. |
| relationshipsobject | Information on other resources that shares a relationship with this item. |
| parentobject | Information on resources that are found above this resource. |
| linksobject | The object containing information on links of related resources. |
| relatedobject | An object containing an API link property. |
| hrefstring | A hyperlink reference to this resource. |
| dataobject | An object containing the id and type properties of a resource. |
| idstring | The id of the resource. |
| typestring | The type of this resource. |
| tipobject | Information on resources that are found above this resource. |
| linksobject | The object containing information on links of related resources. |
| relatedobject | An object containing an API link property. |
| hrefstring | A hyperlink reference to this resource. |
| dataobject | An object containing the id and type properties of a resource. |
| idstring | The id of the resource. |
| typestring | The type of this resource. |
| versionsobject | Information on resources that are found under this resource. |
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
| metaobject | The object containing information on the command id of the command processor. |
| bim360DmCommandIdstring | The command id of command processor. Can be used to check the status of processing. |

## Example

Successful creation of a version.

### Request

```
curl -v 'https://developer.api.autodesk.com/data/v1/projects/:project_id/versions' \
  -X 'POST' \
  -H 'Authorization: Bearer AuIPTf4KYLTYGVnOHQ0cuolwCW2a' \
  -H 'Content-Type: application/vnd.api+json' \
  -d '{
        "jsonapi": {
          "version": "1.0"
        },
        "data": {
          "type": "versions",
          "attributes": {
            "name": "drawing.dwg",
            "extension": {
              "type": "versions:autodesk.core:File",
              "version": "1.0"
            }
          },
          "relationships": {
            "item": {
              "data": {
                "type": "items",
                "id": "urn:adsk.wipprod:dm.lineage:AeYgDtcTSuqYoyMweWFhhQ"
              }
            },
            "storage": {
              "data": {
                "type": "objects",
                "id": "urn:adsk.objects:os.object:wip.dm.prod/980cff2c-f0f8-43d9-a151-4a2d916b91a2.dwg"
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
      "href": "/data/v1/projects/b.c2960674-2d1e-4cc8-a5f0-4b9026fd3f5d/versions/urn%3Aadsk.wipprod%3Afs.file%3Avf.d34fdsg3g%3Fversion%3D2"
    }
  },
  "data": {
    "type": "versions",
    "id": "urn:adsk.wipprod:fs.file:vf.d34fdsg3g?version=2",
    "attributes": {
      "extension": {}
    },
    "relationships": {},
    "links": {
      "self": {
        "href": "/data/v1/projects/b.c2960674-2d1e-4cc8-a5f0-4b9026fd3f5d/versions/urn:adsk.wipprod:fs.file:vf.d34fdsg3g%3Fversion=2"
      },
      "webView": {
        "href": "https://docs.b360.autodesk.com/projects/c2960674-2d1e-4cc8-a5f0-4b9026fd3f5d/folders/urn%3Aadsk.wipprod%3Afs.folder%3Aco.akd2j_B3Tsu7v6v7Kxf2oQ/detail/viewer/items/urn:adsk.wipprod:fs.file:vf.d34fdsg3g%3Fversion%3D2"
      }
    }
  },
  "included": [
    {
      "type": "items",
      "id": "urn:adsk.wipprod:dm.lineage:d34fdsg3g",
      "attributes": {
        "extension": {}
      },
      "relationships": {
        "tip": {
          "data": {
            "type": "versions",
            "id": "urn:adsk.wipprod:fs.file:vf.d34fdsg3g?version=2"
          }
        }
      },
      "links": {
        "self": {
          "href": "/data/v1/projects/b.c2960674-2d1e-4cc8-a5f0-4b9026fd3f5d/versions/urn:adsk.wipprod:fs.file:vf.d34fdsg3g%3Fversion=2"
        },
        "webView": {
          "href": "https://docs.b360.autodesk.com/projects/c2960674-2d1e-4cc8-a5f0-4b9026fd3f5d/folders/urn%3Aadsk.wipprod%3Afs.folder%3Aco.akd2j_B3Tsu7v6v7Kxf2oQ/detail/viewer/items/urn:adsk.wipprod:fs.file:vf.d34fdsg3g%3Fversion%3D2"
        }
      }
    }
  ]
}
```

## Example 2

Successful creation of a version with workflow.

**Note:** This is only supported for BIM 360 Docs and ACC.

### Request

```
curl -v 'https://developer.api.autodesk.com/data/v1/projects/b.c2960674-2d1e-4cc8-a5f0-4b9026fd3f5d/versions?copyFrom=urn%3Aadsk%3Awipprod%3Afs.file%3ASOME.SOURCE%3Fversion%3D1' \
  -X POST \
  -H "Authorization: Bearer kEnG562yz5bhE9igXf2YTcZ2bu0z" \
  -H "Content-Type: application/vnd.api+json" \
  -d '{
        "jsonapi": {
          "version": "1.0"
        },
        "data": {
          "type": "versions",
          "attributes": {
            "name": "newname",
            "extension": {
              "version": "1.0"
            }
          },
          "relationships": {
            "item": {
              "data": {
                "type": "items",
                "id": "urn:adsk.wipprod:dm.lineage:2344sdfd"
              }
            },
            "storage": {
              "data": {
                "type": "objects",
                "id": "urn:adsk.objects:os.object:wip.dm.prod/980cff2c-f0f8-43d9-a151-4a2d916b91a2.dwg"
              }
            }
          }
        },
        "meta": {
          "workflow": "my-workflow-id",
          "workflowAttribute": {
            "myfoo": 33,
            "projectId": "someURN",
            "myobject": {
              "nested": true
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
      "href": "/data/v1/projects/b.c2960674-2d1e-4cc8-a5f0-4b9026fd3f5d/versions/urn%3Aadsk.wipprod%3Afs.file%3Avf.AABBCCDD%3Fversion%3D2"
    }
  },
  "data": {
    "type": "versions",
    "id": "urn:adsk:wipprod:fs.file:vf.AABBCCDD?version=2",
    "attributes": {
      "name": "newname",
      "displayName": "drawing",
      "createTime": "2018-03-26T09:40:16.0000000Z",
      "createUserId": "CGT5PFDIZMAS",
      "createUserName": "Owen",
      "lastModifiedTime": "2018-03-26T09:41:16.0000000Z",
      "lastModifiedUserId": "CGT5PFDIZMAS",
      "lastModifiedUserName": "Owen",
      "versionNumber": 1,
      "extension": {
        "type": "versions:autodesk.core:File",
        "version": "1.0",
        "data": {
          "processState": "NEEDS_PROCESSING"
        }
      }
    },
    "links": {
      "self": {
        "href": "/data/v1/projects/b.c2960674-2d1e-4cc8-a5f0-4b9026fd3f5d/versions/urn%3Aadsk.wipprod%3Afs.file%3Avf.AABBCCDD%3Fversion%3D2"
      },
      "webView": {
        "href": "https://docs.b360.autodesk.com/projects/c2960674-2d1e-4cc8-a5f0-4b9026fd3f5d/folders/urn%3Aadsk.wipprod%3Afs.folder%3Aco.akd2j_B3Tsu7v6v7Kxf2oQ/detail/viewer/items/urn%3Aadsk.wipprod%3Afs.file%3Avf.AABBCCDD%3Fversion%3D2"
      }
    }
  },
  "included": [
    {
      "type": "items",
      "id": "urn:adsk.wipprod:dm.lineage:2344sdfd",
      "attributes": {
        "displayName": "drawing",
        "createTime": "2018-03-26T09:40:16.0000000Z",
        "createUserId": "CGT5PFDIZMAS",
        "createUserName": "Owen",
        "lastModifiedTime": "2018-03-26T09:41:16.0000000Z",
        "lastModifiedUserId": "CGT5PFDIZMAS",
        "lastModifiedUserName": "Owen",
        "hidden": false,
        "reserved": false,
        "extension": {
          "type": "items:autodesk.core:File",
          "version": "1.0"
        }
      },
      "links": {
      "self": {
        "href": "/data/v1/projects/b.c2960674-2d1e-4cc8-a5f0-4b9026fd3f5d/versions/urn%3Aadsk.wipprod%3Afs.file%3Avf.AABBCCDD%3Fversion%3D2"
      },
      "webView": {
        "href": "https://docs.b360.autodesk.com/projects/c2960674-2d1e-4cc8-a5f0-4b9026fd3f5d/folders/urn%3Aadsk.wipprod%3Afs.folder%3Aco.akd2j_B3Tsu7v6v7Kxf2oQ/detail/viewer/items/urn%3Aadsk.wipprod%3Afs.file%3Avf.AABBCCDD%3Fversion%3D2"
      }
    }
    }
  ]
}
```

## Example 3

Successful Copy of a Version.

**Note:** This is only supported for BIM 360 Docs and ACC.

### Request

```
curl -v 'https://developer.api.autodesk.com/data/v1/projects/b.c2960674-2d1e-4cc8-a5f0-4b9026fd3f5d/versions?copyFrom=urn%3Aadsk%3Awipprod%3Afs.file%3ASOME.SOURCE%3Fversion%3D1'
  -X POST \
  -H "Authorization: Bearer kEnG562yz5bhE9igXf2YTcZ2bu0z" \
  -H "Content-Type: application/vnd.api+json"
  -d '{
        "jsonapi": {
          "version": "1.0"
        },
        "data": {
          "type": "versions",
          "attributes": {
            "name": "drawing_copy",
            "extension": {
              "version": "1.0"
            }
          },
          "relationships": {
            "item": {
              "data": {
                "type": "items",
                "id": "urn:adsk.wipprod:dm.lineage:2344sdfd"
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
      "href": "/data/v1/projects/b.c2960674-2d1e-4cc8-a5f0-4b9026fd3f5d/versions/urn%3Aadsk.wipprod%3Afs.file%3Avf.AABBCCDD%3Fversion%3D2"
    }
  },
  "data": {
    "type": "versions",
    "id": "urn:adsk:wipprod:fs.file:vf.AABBCCDD?version=2",
    "attributes": {
      "name": "drawing_copy",
      "displayName": "drawing_copy",
      "createTime": "2018-03-26T09:40:16.0000000Z",
      "createUserId": "CGT5PFDIZMAS",
      "createUserName": "Owen",
      "lastModifiedTime": "2018-03-26T09:41:16.0000000Z",
      "lastModifiedUserId": "CGT5PFDIZMAS",
      "lastModifiedUserName": "Owen",
      "versionNumber": 1,
      "extension": {
        "type": "versions:autodesk.core:File",
        "version": "1.0",
        "data": {
          "processState": "NEEDS_PROCESSING"
        }
      }
    },
    "links": {
      "self": {
        "href": "/data/v1/projects/b.c2960674-2d1e-4cc8-a5f0-4b9026fd3f5d/versions/urn%3Aadsk.wipprod%3Afs.file%3Avf.AABBCCDD%3Fversion%3D2"
      },
      "webView": {
        "href": "https://docs.b360.autodesk.com/projects/c2960674-2d1e-4cc8-a5f0-4b9026fd3f5d/folders/urn%3Aadsk.wipprod%3Afs.folder%3Aco.akd2j_B3Tsu7v6v7Kxf2oQ/detail/viewer/items/urn%3Aadsk.wipprod%3Afs.file%3Avf.AABBCCDD%3Fversion%3D2"
      }
    }
  },
  "included": [
    {
      "type": "items",
      "id": "urn:adsk.wipprod:dm.lineage:2344sdfd",
      "attributes": {
        "displayName": "drawing_copy",
        "createTime": "2018-03-26T09:40:16.0000000Z",
        "createUserId": "CGT5PFDIZMAS",
        "createUserName": "Owen",
        "lastModifiedTime": "2018-03-26T09:41:16.0000000Z",
        "lastModifiedUserId": "CGT5PFDIZMAS",
        "lastModifiedUserName": "Owen",
        "hidden": false,
        "reserved": false,
        "extension": {
          "type": "items:autodesk.core:File",
          "version": "1.0"
        }
      },
      "links": {
      "self": {
        "href": "/data/v1/projects/b.c2960674-2d1e-4cc8-a5f0-4b9026fd3f5d/versions/urn%3Aadsk.wipprod%3Afs.file%3Avf.AABBCCDD%3Fversion%3D2"
      },
      "webView": {
        "href": "https://docs.b360.autodesk.com/projects/c2960674-2d1e-4cc8-a5f0-4b9026fd3f5d/folders/urn%3Aadsk.wipprod%3Afs.folder%3Aco.akd2j_B3Tsu7v6v7Kxf2oQ/detail/viewer/items/urn%3Aadsk.wipprod%3Afs.file%3Avf.AABBCCDD%3Fversion%3D2"
      }
    }
    }
  ]
}
```

## Example 4

Successfully rename an item by copying the source version.

**Note:** This is only supported for BIM 360 Docs and ACC.

### Request

```
curl -v 'https://developer.api.autodesk.com/data/v1/projects/b.c2960674-2d1e-4cc8-a5f0-4b9026fd3f5d/versions?copyFrom=urn%3Aadsk%3Awipprod%3Afs.file%3ASOME.SOURCE%3Fversion%3D1'
  -X POST \
  -H "Authorization: Bearer kEnG562yz5bhE9igXf2YTcZ2bu0z" \
  -H "Content-Type: application/vnd.api+json"
  -d '{
        "jsonapi": {
          "version": "1.0"
        },
        "data": {
          "type": "versions",
          "attributes": {
            "name": "newname.dwg"
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
      "href": "/data/v1/projects/b.c2960674-2d1e-4cc8-a5f0-4b9026fd3f5d/versions/urn%3Aadsk%3Awipprod%3Afs.file%3ASOME.SOURCE%3Fversion%3D2"
    }
  },
  "data": {
    "type": "versions",
    "id": "urn:adsk:wipprod:fs.file:SOME.SOURCE?version=2",
    "attributes": {
      "name": "newname.dwg",
      "displayName": "newname.dwg",
      "createTime": "2018-03-26T09:40:16.0000000Z",
      "createUserId": "CGT5PFDIZMAS",
      "createUserName": "Owen",
      "lastModifiedTime": "2018-03-26T09:41:16.0000000Z",
      "lastModifiedUserId": "CGT5PFDIZMAS",
      "lastModifiedUserName": "Owen",
      "versionNumber": 2,
      "storageSize": 35696,
      "fileType": "dwg",
      "extension": {
        "type": "versions:autodesk.bim360:File",
        "version": "1.0",
        "schema": {
          "href": "https://developer.api.autodesk.com/schema/v1/versions/versions:autodesk.bim360:File-1.0"
        },
        "data": {
          "processState": "PROCESSING_PROMOTING",
          "revisionDisplayLabel": "1",
          "sourceFileName": "drawing.dwg",
          "conformingStatus": "NONE"
        }
      }
    },
    "links": {
      "self": {
        "href": "/data/v1/projects/b.c2960674-2d1e-4cc8-a5f0-4b9026fd3f5d/versions/urn%3Aadsk%3Awipprod%3Afs.file%3ASOME.SOURCE%3Fversion%3D2"
      },
      "webView": {
        "href": "https://docs.b360.autodesk.com/projects/c2960674-2d1e-4cc8-a5f0-4b9026fd3f5d/folders/urn%3Aadsk.wipprod%3Afs.folder%3Aco.akd2j_B3Tsu7v6v7Kxf2oQ/detail/viewer/items/urn%3Aadsk%3Awipprod%3Afs.file%3ASOME.SOURCE%3Fversion%3D2"
      }
    }
  },
  "included": [
    {
      "type": "items",
      "id": "urn:adsk.wipprod:dm.lineage:2344sdfd",
      "attributes": {
        "name": "newname.dwg",
        "createTime": "2018-03-26T09:40:16.0000000Z",
        "createUserId": "CGT5PFDIZMAS",
        "createUserName": "Owen",
        "lastModifiedTime": "2018-03-26T09:41:16.0000000Z",
        "lastModifiedUserId": "CGT5PFDIZMAS",
        "lastModifiedUserName": "Owen",
        "hidden": false,
        "reserved": false,
        "extension": {
          "type": "items:autodesk.bim360:File",
          "version": "1.0",
          "schema": {
            "href": "https://developer.api.autodesk.com/schema/v1/versions/items:autodesk.bim360:File-1.0"
          },
          "data": {
            "sourceFileName": "drawing.dwg"
          }
        }
      },
      "links": {
        "self": {
          "href": "/data/v1/projects/b.c2960674-2d1e-4cc8-a5f0-4b9026fd3f5d/versions/urn%3Aadsk%3Awipprod%3Afs.file%3ASOME.SOURCE%3Fversion%3D2"
        },
        "webView": {
          "href": "https://docs.b360.autodesk.com/projects/c2960674-2d1e-4cc8-a5f0-4b9026fd3f5d/folders/urn%3Aadsk.wipprod%3Afs.folder%3Aco.akd2j_B3Tsu7v6v7Kxf2oQ/detail/viewer/items/urn%3Aadsk%3Awipprod%3Afs.file%3ASOME.SOURCE%3Fversion%3D2"
        }
      }
    }
  ]
}
```

---
원본 문서: https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-versions-POST
