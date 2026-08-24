---
title: "GET projects/:project_id/items/:item_id/tip"
url_path: reference/http///projects-project_id-items-item_id-tip-GET
product: "Data Management API"
surface: "data-management-v2"
protocol: "REST"
document_kind: "endpoint"
api_version: "v2"
section: "reference"
category: "http"
operation_id: "projects-project_id-items-item_id-tip-GET"
method: "GET"
path: "/data/v1/projects/{project_id}/items/{item_id}/tip"
auth_context: "user context optional"
scopes: ["data:read"]
verification: "docs-only"
---
# projects/:project_id/items/:item_id/tip

Returns the “tip” version for the given item. Multiple versions of a resource item can be uploaded in a project. The tip version is the most recent one.

## Resource Information

| Method and URI | GET https://developer.api.autodesk.com/data/v1/projects/:project_id/items/:item_id/tip |
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

| 200OK | Successful retrieval of a specific version. |
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

## Example

Successful retrieval of a specific version.

### Request

```
curl -v 'https://developer.api.autodesk.com/data/v1/projects/:project_id/items/:item_id/tip' \
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
      "href": "/data/v1/projects/b.c2960674-2d1e-4cc8-a5f0-4b9026fd3f5d/versions/urn%3Aadsk.wipprod%3Afs.file%3Avf.b909RzMKR4mhc3O7UBY_8g%3Fversion%3D2"
    }
  },
  "data": {
    "type": "versions",
    "id": "urn:adsk.wipprod:fs.file:vf.b909RzMKR4mhc3O7UBY_8g?version=2",
    "attributes": {
      "name": "version-test.pdf",
      "displayName": "version-test.pdf",
      "createTime": "2016-04-01T11:12:35.000Z",
      "createUserId": "BW9RM76WZBGL",
      "createUserName": "John Doe",
      "lastModifiedTime": "2016-04-01T11:15:22.000Z",
      "lastModifiedUserId": "BW9RM76WZBGL",
      "lastModifiedUserName": "John Doe",
      "versionNumber": 2,
      "mimeType": "application/pdf",
      "extension": {
        "type": "versions:autodesk.bim360:File",
        "version": "1.0",
        "schema": {
          "href": "https://developer.api.autodesk.com/schema/v1/versions/versions%3Aautodesk.bim360%3AFile-1.0"
        },
        "data": {
          "tempUrn": null,
          "properties": {},
          "storageUrn": "urn:adsk.objects:os.object:wip.dm.prod/9f8bdc3f-e29c-4ada-ab7b-bb8dfa821163.pdf",
          "storageType": "OSS",
          "conformingStatus": "NONE"
        }
      }
    },
    "links": {
      "self": {
        "href": "/data/v1/projects/b.c2960674-2d1e-4cc8-a5f0-4b9026fd3f5d/versions/urn%3Aadsk.wipprod%3Afs.file%3Avf.b909RzMKR4mhc3O7UBY_8g%3Fversion%3D2"
      },
      "webView": {
        "href": "https://docs.b360.autodesk.com/projects/c2960674-2d1e-4cc8-a5f0-4b9026fd3f5d/folders/urn%3Aadsk.wipprod%3Afs.folder%3Aco.0J4paz_FQgWPX2QRsaBkiw/detail/viewer/items/urn%3Aadsk.wipprod%3Afs.file%3Avf.b909RzMKR4mhc3O7UBY_8g%3Fversion%3D2"
      }
    },
    "relationships": {
      "item": {
        "links": {
          "related": {
            "href": "/data/v1/projects/b.c2960674-2d1e-4cc8-a5f0-4b9026fd3f5d/items/urn%3Aadsk.wipprod%3Adm.lineage%3Ab909RzMKR4mhc3O7UBY_8g"
          }
        },
        "data": {
          "type": "items",
          "id": "urn:adsk.wipprod:dm.lineage:b909RzMKR4mhc3O7UBY_8g"
        }
      },
      "refs": {
        "links": {
          "self": {
            "href": "/data/v1/projects/b.c2960674-2d1e-4cc8-a5f0-4b9026fd3f5d/versions/urn%3Aadsk.wipprod%3Afs.file%3Avf.b909RzMKR4mhc3O7UBY_8g%3Fversion%3D2/relationships/refs"
          },
          "related": {
            "href": "/data/v1/projects/b.c2960674-2d1e-4cc8-a5f0-4b9026fd3f5d/versions/urn%3Aadsk.wipprod%3Afs.file%3Avf.b909RzMKR4mhc3O7UBY_8g%3Fversion%3D2/refs"
          }
        }
      },
      "links": {
        "links": {
          "self": {
            "href": "/data/v1/projects/b.c2960674-2d1e-4cc8-a5f0-4b9026fd3f5d/versions/urn%3Aadsk.wipprod%3Afs.file%3Avf.b909RzMKR4mhc3O7UBY_8g%3Fversion%3D2/relationships/links"
          }
        }
      },
      "storage": {
        "meta": {
          "link": {
            "href": "/oss/v2/buckets/wipbucket/objects/9f8bdc3f-e29c-4ada-ab7b-bb8dfa821163.pdf?scopes=b360project.6f8813fe-31a7-4440-bc63-d8ca97c856b4,global,O2tenant.tenantId"
          }
        },
        "data": {
          "type": "objects",
          "id": "urn:adsk.objects:os.object:wip.dm.prod/9f8bdc3f-e29c-4ada-ab7b-bb8dfa821163.pdf"
        }
      },
      "derivatives": {
        "data": {
          "type": "derivatives",
          "id": "dXJuOmFkc2sud2lwcWE6ZnMuZmlsZTp2Zi50X3hodWwwYVFkbWhhN2FBaVBuXzlnP3ZlcnNpb249MQ"
        },
        "meta": {
          "link": {
            "href": "/modelderivative/v2/designdata/dXJuOmFkc2sud2lwcWE6ZnMuZmlsZTp2Zi50X3hodWwwYVFkbWhhN2FBaVBuXzlnP3ZlcnNpb249MQ/manifest?scopes=b360project.6f8813fe-31a7-4440-bc63-d8ca97c856b4,global,O2tenant.tenantId"
          }
        }
      },
      "thumbnails": {
        "data": {
          "type": "thumbnails",
          "id": "dXJuOmFkc2sud2lwcWE6ZnMuZmlsZTp2Zi50X3hodWwwYVFkbWhhN2FBaVBuXzlnP3ZlcnNpb249MQ"
        },
        "meta": {
          "link": {
            "href": "/modelderivative/v2/designdata/dXJuOmFkc2sud2lwcWE6ZnMuZmlsZTp2Zi50X3hodWwwYVFkbWhhN2FBaVBuXzlnP3ZlcnNpb249MQ/thumbnail?scopes=b360project.295285be-9cac-44d6-b365-625ebd327483,global,O2tenant.tenantId"
          }
        }
      },
      "downloadFormats": {
        "links": {
          "related": {
            "href": "/data/v1/projects/b.c2960674-2d1e-4cc8-a5f0-4b9026fd3f5d/versions/urn%3Aadsk.wipprod%3Afs.file%3Avf.b909RzMKR4mhc3O7UBY_8g%3Fversion%3D2/downloadFormats"
          }
        }
      }
    }
  }
}
```

---
원본 문서: https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-items-item_id-tip-GET
