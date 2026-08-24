---
title: "GET projects/:project_id/items/:item_id/relationships/refs"
url_path: reference/http///projects-project_id-items-item_id-relationships-refs-GET
product: "Data Management API"
surface: "data-management-v2"
protocol: "REST"
document_kind: "endpoint"
api_version: "v2"
section: "reference"
category: "http"
operation_id: "projects-project_id-items-item_id-relationships-refs-GET"
method: "GET"
path: "/data/v1/projects/{project_id}/items/{item_id}/relationships/refs"
auth_context: "user context optional"
scopes: ["data:read"]
verification: "docs-only"
---
# projects/:project_id/items/:item_id/relationships/refs

Returns the custom relationships that are associated with the given `item_id`.
Custom relationships can be established between an item and other resources within the `data` domain service (folders, items, and versions).

**Notes:**
- Each relationship is defined by the `id` of the object at the other end of the relationship, together with `type`, specific reference `meta` including `extension` data.
- Callers will typically use a `filter` parameter to restrict the response to the custom relationship types (`filter[meta.refType]`) they are interested in.
- The response body will have an `included` array which contains the resources that are involved in the relationship, which is essentially the `GET projects/:project_id/items/:item_id/refs` endpoint.

## Resource Information

| Method and URI | GET https://developer.api.autodesk.com/data/v1/projects/:project_id/items/:item_id/relationships/refs |
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

### Request

## Query String Parameters

| filter[type]array: string | Filter by the `type` of the `ref` target. Supported values include `folders`, `items`, and `versions`. |
| --- | --- |
| filter[id]array: string | Filter by the `id` of the `ref` target. |
| filter[refType]enum:string | Filter by `refType`.
Possible values: `derived`, `dependencies`, `auxiliary`, `xrefs`, `includes` |
| filter[direction]enum:string | Filter by the direction of the reference.
Possible values: `from`, `to` |
| filter[extension.type]array: string | Filter by the extension type. |

### Response

## HTTP Status Code Summary

| 200OK | Successful retrieval of the refs collection associated with a specific resource. |
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
| relatedobject | An object containing an API link property. |
| hrefstring | A hyperlink reference to this resource. |
| dataarray: object | The array of ref objects. |
| typeenum:string | The type of this resource.
Possible values: `folders`, `items`, `versions` |
| idstring | The id of the resource. |
| metaobject | The meta-information of the refs of this resource. |
| refTypeenum:string | The type of this resource.
Possible values: `derived`, `dependencies`, `auxiliary`, `xrefs`, `includes` |
| directionenum:string | Describes the direction of the reference relative to the resource the refs are queried for
Possible values: `from`, `to` |
| fromIdstring | The id of the resource. |
| fromTypeenum:string | The type of this resource.
Possible values: `folders`, `items`, `versions` |
| toIdstring | The id of the resource. |
| toTypeenum:string | The type of this resource.
Possible values: `folders`, `items`, `versions` |
| extensionobject | The extension object of the data. |
| typestring | The type of the schema that the resource’s data object adheres to. |
| versionstring | The version of the schema that the data is adhering to. |
| schemaobject | An object containing an API link property. |
| hrefstring | A hyperlink reference to this resource. |
| dataobject | Additional properties that the resource’s data possesses. |
| includedarray: object | The array of resources included within this resource. |
| typeenum:string | The type of this resource.
Possible values: `folders`, `items`, `versions` |
| idstring | The id of the resource. |

## Example

Successful retrieval of the refs collection associated with a specific resource.

### Request

```
curl -v 'https://developer.api.autodesk.com/data/v1/projects/:project_id/items/:item_id/relationships/refs' \
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
      "href": "/data/v1/projects/b.5ae9543e-abd5-45c5-8718-33d26652267f/items/urn:adsk.wipprod:dm.lineage:b909RzMKR4mhc3O7UBY_8g/relationships/refs"
    },
    "related": {
      "href": "/data/v1/projects/b.5ae9543e-abd5-45c5-8718-33d26652267f/items/urn:adsk.wipprod:dm.lineage:b909RzMKR4mhc3O7UBY_8g/refs"
    }
  },
  "data": [
    {
      "type": "items",
      "id": "urn:adsk.wipprod:fs.file:vf.b909RzMKR4mhc3O7UBY_8g?version=2",
      "meta": {
        "refType": "xrefs",
        "fromId": "urn:adsk.wipprod:fs.file:vf.b909RzMKR4mhc3O7UBY_8g?version=2",
        "fromType": "versions",
        "toId": "urn:adsk.wipprod:dm.lineage:b909RzMKR4mhc3O7UBY_8g",
        "toType": "items",
        "direction": "from",
        "extension": {
          "type": "xrefs:my.custom:Xref",
          "version": "1.0",
          "schema": {
            "href": "/schema/v1/versions/xrefs:my.custom:Xref-1.0"
          },
          "data": {}
        }
      }
    }
  ],
  "included": [
    {
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
            "href": "/schema/v1/versions/versions%3Aautodesk.bim360%3AFile-1.0"
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
        }
      }
    },
    {
      "type": "versions",
      "id": "urn:adsk.wipprod:fs.file:vf.b909RzMKR4mhc3O7UBY_8g?version=1",
      "attributes": {
        "name": "version-test.pdf",
        "displayName": "version-test.pdf",
        "createTime": "2016-04-01T11:09:03.000Z",
        "createUserId": "BW9RM76WZBGL",
        "createUserName": "John Doe",
        "lastModifiedTime": "2016-04-01T11:11:18.000Z",
        "lastModifiedUserId": "BW9RM76WZBGL",
        "lastModifiedUserName": "John Doe",
        "versionNumber": 1,
        "mimeType": "application/pdf",
        "extension": {
          "type": "versions:autodesk.bim360:File",
          "version": "1.0",
          "schema": {
            "href": "/schema/v1/versions/versions%3Aautodesk.bim360%3AFile-1.0"
          },
          "data": {
            "tempUrn": null,
            "properties": {},
            "storageUrn": "urn:adsk.objects:os.object:wip.dm.prod/3c8f6bbc-fe5c-4815-a92e-8b8635e7b1cb.pdf",
            "storageType": "OSS",
            "conformingStatus": "NONE"
          }
        }
      },
      "links": {
        "self": {
          "href": "/data/v1/projects/b.c2960674-2d1e-4cc8-a5f0-4b9026fd3f5d/versions/urn%3Aadsk.wipprod%3Afs.file%3Avf.b909RzMKR4mhc3O7UBY_8g%3Fversion%3D1"
        },
        "webView": {
          "href": "https://docs.b360.autodesk.com/projects/c2960674-2d1e-4cc8-a5f0-4b9026fd3f5d/folders/urn%3Aadsk.wipprod%3Afs.folder%3Aco.0J4paz_FQgWPX2QRsaBkiw/detail/viewer/items/urn%3Aadsk.wipprod%3Afs.file%3Avf.b909RzMKR4mhc3O7UBY_8g%3Fversion%3D1"
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
              "href": "/data/v1/projects/b.c2960674-2d1e-4cc8-a5f0-4b9026fd3f5d/versions/urn%3Aadsk.wipprod%3Afs.file%3Avf.b909RzMKR4mhc3O7UBY_8g%3Fversion%3D1/relationships/refs"
            },
            "related": {
              "href": "/data/v1/projects/b.c2960674-2d1e-4cc8-a5f0-4b9026fd3f5d/versions/urn%3Aadsk.wipprod%3Afs.file%3Avf.b909RzMKR4mhc3O7UBY_8g%3Fversion%3D1/refs"
            }
          }
        },
        "links": {
          "links": {
            "self": {
              "href": "/data/v1/projects/b.c2960674-2d1e-4cc8-a5f0-4b9026fd3f5d/versions/urn%3Aadsk.wipprod%3Afs.file%3Avf.b909RzMKR4mhc3O7UBY_8g%3Fversion%3D1/relationships/links"
            }
          }
        },
        "storage": {
          "meta": {
            "link": {
              "href": "/oss/v2/buckets/wipbucket/objects/3c8f6bbc-fe5c-4815-a92e-8b8635e7b1cb.pdf?scopes=b360project.6f8813fe-31a7-4440-bc63-d8ca97c856b4,global,O2tenant.tenantId"
            }
          },
          "data": {
            "type": "objects",
            "id": "urn:adsk.objects:os.object:wip.dm.prod/3c8f6bbc-fe5c-4815-a92e-8b8635e7b1cb.pdf"
          }
        }
      }
    },
    {
      "type": "items",
      "id": "urn:adsk.wipprod:dm.lineage:b909RzMKR4mhc3O7UBY_8g",
      "attributes": {
        "displayName": "version-test.pdf",
        "createTime": "2016-04-01T11:09:03.000Z",
        "createUserId": "BW9RM76WZBGL",
        "createUserName": "John Doe",
        "lastModifiedTime": "2016-04-01T11:11:18.000Z",
        "lastModifiedUserId": "BW9RM76WZBGL",
        "lastModifiedUserName": "John Doe",
        "hidden": false,
        "reserved": true,
        "reservedTime": "2016-04-01T11:10:00.000Z",
        "reservedUserId": "BW9RM76WZBGL",
        "reservedUserName": "John Doe",
        "extension": {
          "data": {},
          "version": "1.0",
          "type": "items:autodesk.bim360:File",
          "schema": {
            "href": "https://developer.api.autodesk.com/schema/v1/versions/items%3Aautodesk.bim360%3AFile-1.0"
          }
        }
      },
      "relationships": {
        "tip": {
          "data": {
            "type": "versions",
            "id": "urn:adsk.wipprod:fs.file:vf.b909RzMKR4mhc3O7UBY_8g?version=2"
          },
          "links": {
            "related": {
              "href": "/data/v1/projects/b.c2960674-2d1e-4cc8-a5f0-4b9026fd3f5d/items/urn%3Aadsk.wipprod%3Adm.lineage%3AhC6k4hndRWaeIVhIjvHu8w/tip"
            }
          }
        },
        "parent": {
          "data": {
            "type": "folders",
            "id": "urn:adsk.wipprod:dm.folder:sdfedf8wefl"
          },
          "links": {
            "related": {
              "href": "/data/v1/projects/b.c2960674-2d1e-4cc8-a5f0-4b9026fd3f5d/items/urn:adsk.wipprod:dm.lineage:b909RzMKR4mhc3O7UBY_8g/parent"
            }
          }
        },
        "versions": {
          "links": {
            "related": {
              "href": "/data/v1/projects/b.c2960674-2d1e-4cc8-a5f0-4b9026fd3f5d/items/urn:adsk.wipprod:dm.lineage:b909RzMKR4mhc3O7UBY_8g/versions"
            }
          }
        },
        "refs": {
          "links": {
            "self": {
              "href": "/data/v1/projects/b.c2960674-2d1e-4cc8-a5f0-4b9026fd3f5d/items/urn:adsk.wipprod:dm.lineage:b909RzMKR4mhc3O7UBY_8g/relationships/refs"
            },
            "related": {
              "href": "/data/v1/projects/b.c2960674-2d1e-4cc8-a5f0-4b9026fd3f5d/items/urn:adsk.wipprod:dm.lineage:b909RzMKR4mhc3O7UBY_8g/refs"
            }
          }
        },
        "links": {
          "links": {
            "self": {
              "href": "/data/v1/projects/b.c2960674-2d1e-4cc8-a5f0-4b9026fd3f5d/items/urn:adsk.wipprod:dm.lineage:b909RzMKR4mhc3O7UBY_8g/relationships/links"
            }
          }
        }
      },
      "links": {
        "self": {
          "href": "/data/v1/projects/b.c2960674-2d1e-4cc8-a5f0-4b9026fd3f5d/items/urn:adsk.wipprod:dm.lineage:b909RzMKR4mhc3O7UBY_8g"
        },
        "webView": {
          "href": "https://docs.b360.autodesk.com/projects/c2960674-2d1e-4cc8-a5f0-4b9026fd3f5d/folders/urn%3Aadsk.wipprod%3Afs.folder%3Aco.0J4paz_FQgWPX2QRsaBkiw/detail/viewer/items/urn:adsk.wipprod:dm.lineage:b909RzMKR4mhc3O7UBY_8g"
        }
      }
    }
  ]
}
```

---
원본 문서: https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-items-item_id-relationships-refs-GET
