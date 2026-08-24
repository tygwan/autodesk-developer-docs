---
title: "PATCH projects/:project_id/items/:item_id"
url_path: reference/http///projects-project_id-items-item_id-PATCH
product: "Data Management API"
surface: "data-management-v2"
protocol: "REST"
document_kind: "endpoint"
api_version: "v2"
section: "reference"
category: "http"
operation_id: "projects-project_id-items-item_id-PATCH"
method: "PATCH"
path: "/data/v1/projects/{project_id}/items/{item_id}"
auth_context: "user context optional"
scopes: ["data:write"]
verification: "docs-only"
---
# projects/:project_id/items/:item_id

Updates the properties of the given `item_id` object. Note that updating the displayName of an item is not supported for BIM 360 Docs or Forma items. Instead, use the [POST projects/:project_id/versions](https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-versions-POST) endpoint.

## Resource Information

| Method and URI | PATCH https://developer.api.autodesk.com/data/v1/projects/:project_id/items/:item_id |
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
| item_idstring | The unique identifier of an item. |

### Request

## Body Structure

describe the item to be patched.

| jsonapi*object | The JSON API object. |
| --- | --- |
| version*enum:string | The version of JSON API. Will always be: `1.0` |
| data*object | The data object. |
| type*enum:string | The type of this resource. Will always be: `items` |
| id*string | The id of the resource. |
| attributesobject | Attributes of the item. |
| extensionobject | Extended information on the resource. |
| dataobject | Additional properties to modify.
Contains extended properties for this resource based on the extension schema type and version. The ability to modify these properties depends on whether the schema type and version allow it. |
| descriptionstring | The new description of the item (0-255 characters). This property is only available for items BIM 360 Docs or Forma projects. |

### Response

## HTTP Status Code Summary

| 200OK | Successful update of a specific item’s properties. |
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
| dataobject | The object containing information on the item. |
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
| includedarray: object | The other resources included within this item. |
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

## Example

Successful update of a specific item’s properties.

### Request

```
curl -v 'https://developer.api.autodesk.com/data/v1/projects/:project_id/items/:item_id' \
  -X 'PATCH' \
  -H 'Authorization: Bearer AuIPTf4KYLTYGVnOHQ0cuolwCW2a' \
  -H 'Content-Type: application/vnd.api+json' \
  -d '{
        "jsonapi": {
          "version": "1.0"
        },
        "data": {
          "type": "items",
          "id": "urn:adsk.wipprod:dm.lineage:AeYgDtcTSuqYoyMweWFhhQ",
          "attributes": {
            "displayName": "new name for drawing.dwg"
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
      "href": "https://developer.api.autodesk.com/data/v1/projects/a.YnVzaW5lc3M6YXV0b2Rlc2swMDEjMjAyNDA0MTEwMTAxMDEw/items/urn:adsk.wipprod:dm.lineage:AeYgDtcTSuqYoyMweWFhhQ"
    }
  },
  "data": {
    "type": "items",
    "id": "urn:adsk.wipprod:dm.lineage:AeYgDtcTSuqYoyMweWFhhQ",
    "attributes": {
      "displayName": "new name for drawing.dwg",
      "extension": {
        "data": {},
        "version": "1.0",
        "type": "items:autodesk.core:File",
        "schema": {
          "href": "https://developer.api.autodesk.com/schema/v1/versions/items:autodesk.core:File-1.0"
        }
      },
      "createUserId": "BW9RM76WZBGL",
      "createUserName": "John Doe",
      "lastModifiedUserId": "BW9RM76WZBGL",
      "lastModifiedUserName": "John Doe",
      "lastModifiedTime": "2015-11-27T11:11:27.000Z",
      "createTime": "2015-11-27T11:11:23.000Z",
      "hidden": false,
      "reserved": true,
      "reservedTime": "2015-11-27T11:11:25.000Z",
      "reservedUserId": "BW9RM76WZBGL",
      "reservedUserName": "John Doe"
    },
    "relationships": {
      "tip": {
        "data": {
          "type": "versions",
          "id": "urn:adsk.wipprod:fs.file:vf.AeYgDtcTSuqYoyMweWFhhQ?version=1"
        },
        "links": {
          "related": {
            "href": "https://developer.api.autodesk.com/data/v1/projects/a.YnVzaW5lc3M6YXV0b2Rlc2swMDEjMjAyNDA0MTEwMTAxMDEw/items/urn:adsk.wipprod:dm.lineage:AeYgDtcTSuqYoyMweWFhhQ/tip"
          }
        }
      },
      "parent": {
        "data": {
          "type": "folders",
          "id": "urn:adsk.wipprod:fs.folder:co.sdfedf8wefl"
        },
        "links": {
          "related": {
            "href": "https://developer.api.autodesk.com/data/v1/projects/a.YnVzaW5lc3M6YXV0b2Rlc2swMDEjMjAyNDA0MTEwMTAxMDEw/items/urn:adsk.wipprod:dm.lineage:AeYgDtcTSuqYoyMweWFhhQ/parent"
          }
        }
      },
      "versions": {
        "links": {
          "related": {
            "href": "https://developer.api.autodesk.com/data/v1/projects/a.YnVzaW5lc3M6YXV0b2Rlc2swMDEjMjAyNDA0MTEwMTAxMDEw/items/urn:adsk.wipprod:dm.lineage:AeYgDtcTSuqYoyMweWFhhQ/versions"
          }
        }
      },
      "refs": {
        "links": {
          "self": {
            "href": "https://developer.api.autodesk.com/data/v1/projects/a.YnVzaW5lc3M6YXV0b2Rlc2swMDEjMjAyNDA0MTEwMTAxMDEw/items/urn:adsk.wipprod:dm.lineage:AeYgDtcTSuqYoyMweWFhhQ/relationships/refs"
          },
          "related": {
            "href": "https://developer.api.autodesk.com/data/v1/projects/a.YnVzaW5lc3M6YXV0b2Rlc2swMDEjMjAyNDA0MTEwMTAxMDEw/items/urn:adsk.wipprod:dm.lineage:AeYgDtcTSuqYoyMweWFhhQ/refs"
          }
        }
      },
      "links": {
        "links": {
          "self": {
            "href": "https://developer.api.autodesk.com/data/v1/projects/a.YnVzaW5lc3M6YXV0b2Rlc2swMDEjMjAyNDA0MTEwMTAxMDEw/items/urn:adsk.wipprod:dm.lineage:AeYgDtcTSuqYoyMweWFhhQ/relationships/links"
          }
        }
      }
    },
    "links": {
      "self": {
        "href": "https://developer.api.autodesk.com/data/v1/projects/a.YnVzaW5lc3M6YXV0b2Rlc2swMDEjMjAyNDA0MTEwMTAxMDEw/items/urn:adsk.wipprod:dm.lineage:AeYgDtcTSuqYoyMweWFhhQ"
      }
    }
  },
  "included": [
    {
      "type": "versions",
      "id": "urn:adsk.wipprod:fs.file:vf.AeYgDtcTSuqYoyMweWFhhQ?version=1",
      "attributes": {
        "name": "testFile.dwg",
        "displayName": "testFile.dwg",
        "createTime": "2016-04-01T11:09:03.000Z",
        "createUserId": "BW9RM76WZBGL",
        "createUserName": "John Doe",
        "lastModifiedTime": "2016-04-01T11:11:18.000Z",
        "lastModifiedUserId": "BW9RM76WZBGL",
        "lastModifiedUserName": "John Doe",
        "versionNumber": 1,
        "mimeType": "application/vnd.autodesk.autocad.dwg",
        "storageSize": 35696,
        "fileType": "dwg",
        "extension": {
          "type": "versions:autodesk.core:File",
          "version": "1.0",
          "schema": {
            "href": "https://developer.api.autodesk.com/schema/v1/versions/versions:autodesk.core:File-1.0"
          },
          "data": {}
        }
      },
      "links": {
        "self": {
          "href": "https://developer.api.autodesk.com/data/v1/projects/a.YnVzaW5lc3M6YXV0b2Rlc2swMDEjMjAyNDA0MTEwMTAxMDEw/versions/urn:adsk.wipprod:fs.file:vf.AeYgDtcTSuqYoyMweWFhhQ%3Fversion=1"
        }
      },
      "relationships": {
        "item": {
          "links": {
            "related": {
              "href": "https://developer.api.autodesk.com/data/v1/projects/a.YnVzaW5lc3M6YXV0b2Rlc2swMDEjMjAyNDA0MTEwMTAxMDEw/versions/urn:adsk.wipprod:fs.file:vf.AeYgDtcTSuqYoyMweWFhhQ%3Fversion=1/item"
            }
          },
          "data": {
            "type": "items",
            "id": "urn:adsk.wipprod:dm.lineage:AeYgDtcTSuqYoyMweWFhhQ"
          }
        },
        "refs": {
          "links": {
            "self": {
              "href": "https://developer.api.autodesk.com/data/v1/projects/a.YnVzaW5lc3M6YXV0b2Rlc2swMDEjMjAyNDA0MTEwMTAxMDEw/versions/urn:adsk.wipprod:fs.file:vf.AeYgDtcTSuqYoyMweWFhhQ%3Fversion=1/relationships/refs"
            },
            "related": {
              "href": "https://developer.api.autodesk.com/data/v1/projects/a.YnVzaW5lc3M6YXV0b2Rlc2swMDEjMjAyNDA0MTEwMTAxMDEw/versions/urn:adsk.wipprod:fs.file:vf.AeYgDtcTSuqYoyMweWFhhQ%3Fversion=1/refs"
            }
          }
        },
        "links": {
          "links": {
            "self": {
              "href": "https://developer.api.autodesk.com/data/v1/projects/a.YnVzaW5lc3M6YXV0b2Rlc2swMDEjMjAyNDA0MTEwMTAxMDEw/versions/urn:adsk.wipprod:fs.file:vf.AeYgDtcTSuqYoyMweWFhhQ%3Fversion=1/relationships/links"
            }
          },
          "storage": {
            "meta": {
              "link": {
                "href": "https://developer.api.autodesk.com/oss/v2/buckets/wip.dm.prod/objects/44f771a1-3b11-4ff1-b6d7-5b4719481c93.dwg?scopes=global"
              }
            },
            "data": {
              "type": "objects",
              "id": "urn:adsk.objects:os.object:wip.dm.prod/44f771a1-3b11-4ff1-b6d7-5b4719481c93.dwg"
            }
          }
        }
      }
    }
  ]
}
```

---
원본 문서: https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-items-item_id-PATCH
