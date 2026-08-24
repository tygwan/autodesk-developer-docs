---
title: "GET projects/:project_id/folders/:folder_id/search"
url_path: reference/http///projects-project_id-folders-folder_id-search-GET
product: "Data Management API"
surface: "data-management-v2"
protocol: "REST"
document_kind: "endpoint"
api_version: "v2"
section: "reference"
category: "http"
operation_id: "projects-project_id-folders-folder_id-search-GET"
method: "GET"
path: "/data/v1/projects/{project_id}/folders/{folder_id}/search"
auth_context: "user context optional"
scopes: ["data:search","data:read"]
verification: "docs-only"
---
# projects/:project_id/folders/:folder_id/search

Filters the data of a folder and recursively in the subfolders of any project accessible to you,
using the `filter` query string parameter. You can filter the following properties from the `version` payload:
the `type` property, the `id` property, and any of the `attributes` object properties. For example,
you can filter `createTime`, `mimeType`. It returns tip versions (latest versions) of properties where the filter conditions are satisfied.
To verify the properties of the `attributes` object for a specific version,
see the [GET projects/:project_id/versions/:version_id](https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-versions-version_id-GET/).

To filter a folder's data without recursively filtering its subfolders, see the [GET projects/:project_id/folders/:folder_id/contents](https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-folders-folder_id-contents-GET/) endpoint.

## Resource Information

| Method and URI | GET https://developer.api.autodesk.com/data/v1/projects/:project_id/folders/:folder_id/search |
| --- | --- |
| Authentication Context | User context optional |
| Required OAuth Scopes | `data:search` `data:read` |
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

### Request

## Query String Parameters

| filter[*]array: string | Filter the data. See the [Filtering](https://aps.autodesk.com/en/docs/data/v2/overview/filtering/) section for details. |
| --- | --- |
| page[number]int | Specifies what page to return. Page numbers start at 0, so the first page is page 0. The minimum value to specify is 0 and the maximum is 49. For fewer results to page through, consider searching an inner folder. |

### Response

## HTTP Status Code Summary

| 200OK | Successful retrieval of the search results. |
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
| linksobject | The object containing information on links to this resource. |
| selfobject | An object containing an API link property. |
| hrefstring | A hyperlink reference to this resource. |
| firstobject | An object containing an API link property. |
| hrefstring | A hyperlink reference to this resource. |
| prevobject | An object containing an API link property. |
| hrefstring | A hyperlink reference to this resource. |
| nextobject | An object containing an API link property. |
| hrefstring | A hyperlink reference to this resource. |
| dataarray: object | The object containing information on this resource. |
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
| includedarray: object | Information on the latest versions of the items in this resource. |
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
| metaobject | The object containing metadata about the search results. |
| approximateNumberOfPagesint | The approximate number of pages of search results matching the search criteria. |

## Example

Successful retrieval of the search results.

### Request

```
curl -v 'https://developer.api.autodesk.com/data/v1/projects/:project_id/folders/:folder_id/search' \
  -H 'Authorization: Bearer AuIPTf4KYLTYGVnOHQ0cuolwCW2a'
```

### Response

```
{
  "jsonapi": {
    "version": "1.0"
  },
  "data": [
    {
      "type": "versions",
      "id": "urn:adsk.wipprod:fs.file:vf.4cW918j8QsynzG0oZ6_Nbg?version=1",
      "attributes": {
        "name": "sample.txt",
        "displayName": "sample.txt",
        "createTime": "2016-11-09T13:11:27+00:00",
        "createUserId": "BW9RM76WZBGL",
        "createUserName": "John Doe",
        "lastModifiedTime": "2016-11-09T13:11:36+00:00",
        "lastModifiedUserId": "BW9RM76WZBGL",
        "lastModifiedUserName": "John Doe",
        "versionNumber": 1,
        "fileType": "txt",
        "extension": {
          "type": "versions:autodesk.bim360:File",
          "version": "1.0",
          "schema": {
            "href": "/schema/v1/versions/versions%3Aautodesk.bim360%3AFile-1.0"
          },
          "data": {
            "processState": "PROCESSING_COMPLETE",
            "extractionState": "UNSUPPORTED",
            "splittingState": "NOT_SPLIT",
            "conformingStatus": "NONE"
          }
        }
      },
      "links": {
        "self": {
          "href": "/data/v1/projects/b.c2960674-2d1e-4cc8-a5f0-4b9026fd3f5d/versions/urn%3Aadsk.wipprod%3Afs.file%3Avf.4cW918j8QsynzG0oZ6_Nbg%3Fversion%3D1"
        },
        "webView": {
          "href": "https://docs.b360.autodesk.com/projects/c2960674-2d1e-4cc8-a5f0-4b9026fd3f5d/folders/urn%3Aadsk.wipprod%3Afs.folder%3Aco.0J4paz_FQgWPX2QRsaBkiw/detail/viewer/items/urn%3Aadsk.wipprod%3Afs.file%3Avf.4cW918j8QsynzG0oZ6_Nbg%3Fversion%3D1"
        }
      },
      "relationships": {
        "item": {
          "data": {
            "type": "items",
            "id": "urn:adsk.wipprod:dm.lineage:4cW918j8QsynzG0oZ6_Nbg"
          },
          "links": {
            "related": {
              "href": "/data/v1/projects/b.c2960674-2d1e-4cc8-a5f0-4b9026fd3f5d/versions/urn%3Aadsk.wipprod%3Afs.file%3Avf.4cW918j8QsynzG0oZ6_Nbg%3Fversion%3D1/item"
            }
          }
        },
        "links": {
          "links": {
            "self": {
              "href": "/data/v1/projects/b.c2960674-2d1e-4cc8-a5f0-4b9026fd3f5d/versions/urn%3Aadsk.wipprod%3Afs.file%3Avf.4cW918j8QsynzG0oZ6_Nbg%3Fversion%3D1/relationships/links"
            }
          }
        },
        "refs": {
          "links": {
            "self": {
              "href": "/data/v1/projects/b.c2960674-2d1e-4cc8-a5f0-4b9026fd3f5d/versions/urn%3Aadsk.wipprod%3Afs.file%3Avf.4cW918j8QsynzG0oZ6_Nbg%3Fversion%3D1/relationships/refs"
            },
            "related": {
              "href": "/data/v1/projects/b.c2960674-2d1e-4cc8-a5f0-4b9026fd3f5d/versions/urn%3Aadsk.wipprod%3Afs.file%3Avf.4cW918j8QsynzG0oZ6_Nbg%3Fversion%3D1/refs"
            }
          }
        },
        "downloadFormats": {
          "links": {
            "related": {
              "href": "/data/v1/projects/b.c2960674-2d1e-4cc8-a5f0-4b9026fd3f5d/versions/urn%3Aadsk.wipprod%3Afs.file%3Avf.4cW918j8QsynzG0oZ6_Nbg%3Fversion%3D1/downloadFormats"
            }
          }
        },
        "derivatives": {
          "data": {
            "type": "derivatives",
            "id": "dXJuOmFkc2sud2lwc3RnOmZzLmZpbGU6dmYuNGNXOTE4ajhRc3luekcwb1o2X05iZz92ZXJzaW9uPTE"
          },
          "meta": {
            "link": {
              "href": "/modelderivative/v2/designdata/dXJuOmFkc2sud2lwc3RnOmZzLmZpbGU6dmYuNGNXOTE4ajhRc3luekcwb1o2X05iZz92ZXJzaW9uPTE/manifest?scopes=b360project.c2960674-2d1e-4cc8-a5f0-4b9026fd3f5d,global,O2tenant.tenantId"
            }
          }
        },
        "thumbnails": {
          "data": {
            "type": "thumbnails",
            "id": "dXJuOmFkc2sud2lwc3RnOmZzLmZpbGU6dmYuNGNXOTE4ajhRc3luekcwb1o2X05iZz92ZXJzaW9uPTE"
          },
          "meta": {
            "link": {
              "href": "/modelderivative/v2/designdata/dXJuOmFkc2sud2lwc3RnOmZzLmZpbGU6dmYuNGNXOTE4ajhRc3luekcwb1o2X05iZz92ZXJzaW9uPTE/thumbnail?scopes=b360project.c2960674-2d1e-4cc8-a5f0-4b9026fd3f5d,global,O2tenant.tenantId"
            }
          }
        },
        "storage": {
          "data": {
            "type": "objects",
            "id": "urn:adsk.objects:os.object:wip.dm.prod/095f7c56-2373-4831-9485-e3546dd501ba.txt"
          },
          "meta": {
            "link": {
              "href": "/oss/v2/buckets/wip.dm.prod/objects/095f7c56-2373-4831-9485-e3546dd501ba.txt?scopes=b360project.c2960674-2d1e-4cc8-a5f0-4b9026fd3f5d,global,O2tenant.tenantId"
            }
          }
        }
      }
    },
    {
      "type": "versions",
      "id": "urn:adsk.wipprod:fs.file:vf.jts1sOfCS6mdwCV38lKpGQ?version=1",
      "attributes": {
        "name": "sample.pdf",
        "displayName": "sample.pdf",
        "createTime": "2016-11-09T13:13:09+00:00",
        "createUserId": "BW9RM76WZBGL",
        "createUserName": "John Doe",
        "lastModifiedTime": "2016-11-09T13:13:42+00:00",
        "lastModifiedUserId": "BW9RM76WZBGL",
        "lastModifiedUserName": "John Doe",
        "versionNumber": 1,
        "fileType": "pdf",
        "extension": {
          "type": "versions:autodesk.bim360:File",
          "version": "1.0",
          "schema": {
            "href": "/schema/v1/versions/versions%3Aautodesk.bim360%3AFile-1.0"
          },
          "data": {
            "processState": "PROCESSING_COMPLETE",
            "extractionState": "SUCCESS",
            "splittingState": "NOT_SPLIT",
            "reviewState": "NOT_IN_REVIEW",
            "conformingStatus": "NONE"
          }
        }
      },
      "links": {
        "self": {
          "href": "/data/v1/projects/b.c2960674-2d1e-4cc8-a5f0-4b9026fd3f5d/versions/urn%3Aadsk.wipprod%3Afs.file%3Avf.jts1sOfCS6mdwCV38lKpGQ%3Fversion%3D1"
        },
        "webView": {
          "href": "https://docs.b360.autodesk.com/projects/c2960674-2d1e-4cc8-a5f0-4b9026fd3f5d/folders/urn%3Aadsk.wipprod%3Afs.folder%3Aco.0J4paz_FQgWPX2QRsaBkiw/detail/viewer/items/urn%3Aadsk.wipprod%3Afs.file%3Avf.jts1sOfCS6mdwCV38lKpGQ%3Fversion%3D1"
        }
      },
      "relationships": {
        "item": {
          "data": {
            "type": "items",
            "id": "urn:adsk.wipprod:dm.lineage:jts1sOfCS6mdwCV38lKpGQ"
          },
          "links": {
            "related": {
              "href": "/data/v1/projects/b.c2960674-2d1e-4cc8-a5f0-4b9026fd3f5d/versions/urn%3Aadsk.wipprod%3Afs.file%3Avf.jts1sOfCS6mdwCV38lKpGQ%3Fversion%3D1/item"
            }
          }
        },
        "links": {
          "links": {
            "self": {
              "href": "/data/v1/projects/b.c2960674-2d1e-4cc8-a5f0-4b9026fd3f5d/versions/urn%3Aadsk.wipprod%3Afs.file%3Avf.jts1sOfCS6mdwCV38lKpGQ%3Fversion%3D1/relationships/links"
            }
          }
        },
        "refs": {
          "links": {
            "self": {
              "href": "/data/v1/projects/b.c2960674-2d1e-4cc8-a5f0-4b9026fd3f5d/versions/urn%3Aadsk.wipprod%3Afs.file%3Avf.jts1sOfCS6mdwCV38lKpGQ%3Fversion%3D1/relationships/refs"
            },
            "related": {
              "href": "/data/v1/projects/b.c2960674-2d1e-4cc8-a5f0-4b9026fd3f5d/versions/urn%3Aadsk.wipprod%3Afs.file%3Avf.jts1sOfCS6mdwCV38lKpGQ%3Fversion%3D1/refs"
            }
          }
        },
        "downloadFormats": {
          "links": {
            "related": {
              "href": "/data/v1/projects/b.c2960674-2d1e-4cc8-a5f0-4b9026fd3f5d/versions/urn%3Aadsk.wipprod%3Afs.file%3Avf.jts1sOfCS6mdwCV38lKpGQ%3Fversion%3D1/downloadFormats"
            }
          }
        },
        "derivatives": {
          "data": {
            "type": "derivatives",
            "id": "dXJuOmFkc2sud2lwc3RnOmZzLmZpbGU6dmYuanRzMXNPZkNTNm1kd0NWMzhsS3BHUT92ZXJzaW9uPTE"
          },
          "meta": {
            "link": {
              "href": "/modelderivative/v2/designdata/dXJuOmFkc2sud2lwc3RnOmZzLmZpbGU6dmYuanRzMXNPZkNTNm1kd0NWMzhsS3BHUT92ZXJzaW9uPTE/manifest?scopes=b360project.c2960674-2d1e-4cc8-a5f0-4b9026fd3f5d,global,O2tenant.tenantId"
            }
          }
        },
        "thumbnails": {
          "data": {
            "type": "thumbnails",
            "id": "dXJuOmFkc2sud2lwc3RnOmZzLmZpbGU6dmYuanRzMXNPZkNTNm1kd0NWMzhsS3BHUT92ZXJzaW9uPTE"
          },
          "meta": {
            "link": {
              "href": "/modelderivative/v2/designdata/dXJuOmFkc2sud2lwc3RnOmZzLmZpbGU6dmYuanRzMXNPZkNTNm1kd0NWMzhsS3BHUT92ZXJzaW9uPTE/thumbnail?scopes=b360project.c2960674-2d1e-4cc8-a5f0-4b9026fd3f5d,global,O2tenant.tenantId"
            }
          }
        },
        "storage": {
          "data": {
            "type": "objects",
            "id": "urn:adsk.objects:os.object:wip.dm.prod/f5a8a8e8-9bbc-46cf-bce9-9cc34508c2d4.pdf"
          },
          "meta": {
            "link": {
              "href": "/oss/v2/buckets/wip.dm.prod/objects/f5a8a8e8-9bbc-46cf-bce9-9cc34508c2d4.pdf?scopes=b360project.c2960674-2d1e-4cc8-a5f0-4b9026fd3f5d,global,O2tenant.tenantId"
            }
          }
        }
      }
    }
  ],
  "included": [
    {
      "type": "items",
      "id": "urn:adsk.wipprod:dm.lineage:4cW918j8QsynzG0oZ6_Nbg",
      "attributes": {
        "displayName": "sample",
        "createTime": "2016-11-09T13:11:27+00:00",
        "createUserId": "BW9RM76WZBGL",
        "createUserName": "John Doe",
        "lastModifiedTime": "2016-11-09T13:11:36+00:00",
        "lastModifiedUserId": "BW9RM76WZBGL",
        "lastModifiedUserName": "John Doe",
        "hidden": false,
        "reserved": true,
        "reservedTime": "2016-11-09T13:11:30.000Z",
        "reservedUserId": "BW9RM76WZBGL",
        "reservedUserName": "John Doe",
        "extension": {
          "type": "items:autodesk.bim360:File",
          "version": "1.0",
          "schema": {
            "href": "/schema/v1/versions/items%3Aautodesk.bim360%3AFile-1.0"
          },
          "data": {}
        }
      },
      "links": {
        "self": {
          "href": "/data/v1/projects/b.c2960674-2d1e-4cc8-a5f0-4b9026fd3f5d/items/urn%3Aadsk.wipprod%3Adm.lineage%3A4cW918j8QsynzG0oZ6_Nbg"
        },
        "webView": {
          "href": "https://docs.b360.autodesk.com/projects/c2960674-2d1e-4cc8-a5f0-4b9026fd3f5d/folders/urn%3Aadsk.wipprod%3Afs.folder%3Aco.0J4paz_FQgWPX2QRsaBkiw/detail/viewer/items/urn%3Aadsk.wipprod%3Adm.lineage%3A4cW918j8QsynzG0oZ6_Nbg"
        }
      },
      "relationships": {
        "tip": {
          "data": {
            "type": "versions",
            "id": "urn:adsk.wipprod:fs.file:vf.4cW918j8QsynzG0oZ6_Nbg?version=1"
          },
          "links": {
            "related": {
              "href": "/data/v1/projects/b.c2960674-2d1e-4cc8-a5f0-4b9026fd3f5d/items/urn%3Aadsk.wipprod%3Adm.lineage%3A4cW918j8QsynzG0oZ6_Nbg/tip"
            }
          }
        },
        "versions": {
          "links": {
            "related": {
              "href": "/data/v1/projects/b.c2960674-2d1e-4cc8-a5f0-4b9026fd3f5d/items/urn%3Aadsk.wipprod%3Adm.lineage%3A4cW918j8QsynzG0oZ6_Nbg/versions"
            }
          }
        },
        "parent": {
          "data": {
            "type": "folders",
            "id": "urn:adsk.wipprod:fs.folder:co.KJRpLpSXRm66X2HB2Q7AQw"
          },
          "links": {
            "related": {
              "href": "/data/v1/projects/b.c2960674-2d1e-4cc8-a5f0-4b9026fd3f5d/items/urn%3Aadsk.wipprod%3Adm.lineage%3A4cW918j8QsynzG0oZ6_Nbg/parent"
            }
          }
        },
        "refs": {
          "links": {
            "self": {
              "href": "/data/v1/projects/b.c2960674-2d1e-4cc8-a5f0-4b9026fd3f5d/items/urn%3Aadsk.wipprod%3Adm.lineage%3A4cW918j8QsynzG0oZ6_Nbg/relationships/refs"
            },
            "related": {
              "href": "/data/v1/projects/b.c2960674-2d1e-4cc8-a5f0-4b9026fd3f5d/items/urn%3Aadsk.wipprod%3Adm.lineage%3A4cW918j8QsynzG0oZ6_Nbg/refs"
            }
          }
        },
        "links": {
          "links": {
            "self": {
              "href": "/data/v1/projects/b.c2960674-2d1e-4cc8-a5f0-4b9026fd3f5d/items/urn%3Aadsk.wipprod%3Adm.lineage%3A4cW918j8QsynzG0oZ6_Nbg/relationships/links"
            }
          }
        }
      }
    },
    {
      "type": "items",
      "id": "urn:adsk.wipprod:dm.lineage:jts1sOfCS6mdwCV38lKpGQ",
      "attributes": {
        "displayName": "sample",
        "createTime": "2016-11-09T13:13:09+00:00",
        "createUserId": "BW9RM76WZBGL",
        "createUserName": "John Doe",
        "lastModifiedTime": "2016-11-09T13:13:41+00:00",
        "lastModifiedUserId": "BW9RM76WZBGL",
        "lastModifiedUserName": "John Doe",
        "hidden": false,
        "reserved": true,
        "reservedTime": "2016-11-09T13:13:24.000Z",
        "reservedUserId": "BW9RM76WZBGL",
        "reservedUserName": "John Doe",
        "extension": {
          "type": "items:autodesk.bim360:File",
          "version": "1.0",
          "schema": {
            "href": "/schema/v1/versions/items%3Aautodesk.bim360%3AFile-1.0"
          },
          "data": {}
        }
      },
      "links": {
        "self": {
          "href": "/data/v1/projects/b.c2960674-2d1e-4cc8-a5f0-4b9026fd3f5d/items/urn%3Aadsk.wipprod%3Adm.lineage%3Ajts1sOfCS6mdwCV38lKpGQ"
        },
        "webView": {
          "href": "https://docs.b360.autodesk.com/projects/c2960674-2d1e-4cc8-a5f0-4b9026fd3f5d/folders/urn%3Aadsk.wipprod%3Afs.folder%3Aco.0J4paz_FQgWPX2QRsaBkiw/detail/viewer/items/urn%3Aadsk.wipprod%3Adm.lineage%3Ajts1sOfCS6mdwCV38lKpGQ"
        }
      },
      "relationships": {
        "tip": {
          "data": {
            "type": "versions",
            "id": "urn:adsk.wipprod:fs.file:vf.jts1sOfCS6mdwCV38lKpGQ?version=1"
          },
          "links": {
            "related": {
              "href": "/data/v1/projects/b.c2960674-2d1e-4cc8-a5f0-4b9026fd3f5d/items/urn%3Aadsk.wipprod%3Adm.lineage%3Ajts1sOfCS6mdwCV38lKpGQ/tip"
            }
          }
        },
        "versions": {
          "links": {
            "related": {
              "href": "/data/v1/projects/b.c2960674-2d1e-4cc8-a5f0-4b9026fd3f5d/items/urn%3Aadsk.wipprod%3Adm.lineage%3Ajts1sOfCS6mdwCV38lKpGQ/versions"
            }
          }
        },
        "parent": {
          "data": {
            "type": "folders",
            "id": "urn:adsk.wipprod:fs.folder:co.KJRpLpSXRm66X2HB2Q7AQw"
          },
          "links": {
            "related": {
              "href": "/data/v1/projects/b.c2960674-2d1e-4cc8-a5f0-4b9026fd3f5d/items/urn%3Aadsk.wipprod%3Adm.lineage%3Ajts1sOfCS6mdwCV38lKpGQ/parent"
            }
          }
        },
        "refs": {
          "links": {
            "self": {
              "href": "/data/v1/projects/b.c2960674-2d1e-4cc8-a5f0-4b9026fd3f5d/items/urn%3Aadsk.wipprod%3Adm.lineage%3Ajts1sOfCS6mdwCV38lKpGQ/relationships/refs"
            },
            "related": {
              "href": "/data/v1/projects/b.c2960674-2d1e-4cc8-a5f0-4b9026fd3f5d/items/urn%3Aadsk.wipprod%3Adm.lineage%3Ajts1sOfCS6mdwCV38lKpGQ/refs"
            }
          }
        },
        "links": {
          "links": {
            "self": {
              "href": "/data/v1/projects/b.c2960674-2d1e-4cc8-a5f0-4b9026fd3f5d/items/urn%3Aadsk.wipprod%3Adm.lineage%3Ajts1sOfCS6mdwCV38lKpGQ/relationships/links"
            }
          }
        }
      }
    }
  ]
}
```

---
원본 문서: https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-folders-folder_id-search-GET
