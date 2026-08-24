---
title: "ListRefs"
url_path: reference/http//ListRefs
product: "Data Management API"
surface: "data-management-v2"
protocol: "REST"
document_kind: "endpoint"
api_version: "v2"
section: "reference"
category: "http"
operation_id: "ListRefs"
method: "POST"
path: "/data/v1/projects/{project_id}/commands"
auth_context: "user context optional"
scopes: ["data:read"]
verification: "docs-only"
---
# ListRefs

Retrieves the custom relationships between specified versions of items and other resources in the `data` domain service (folders, items, and versions). You can retrieve the relationships of up to 50 versions.

Note that ListRefs is a Data Management command. Commands enable you to perform complex operations on multiple resources
rather than standard CRUD operations. For more details about commands, see the
[Commands](https://aps.autodesk.com/en/docs/data/v2/overview/commands) overview section.

## Resource Information

| Method and URI | POST https://developer.api.autodesk.com/data/v1/projects/:project_id/commands |
| --- | --- |
| Authentication Context | user context optional |
| Required OAuth Scopes | `data:read` |
| Data Format | JSON |

### Request

## Headers

| Authorization*string | Must be `Bearer <token>`, where `<token>` is obtained via either a [two-legged](https://aps.autodesk.com/en/docs/oauth/v2/tutorials/get-2-legged-token) or [three-legged](https://aps.autodesk.com/en/docs/oauth/v2/tutorials/get-3-legged-token) OAuth flow. |
| --- | --- |
| x-user-idstring | In a two-legged authentication context, the app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act on behalf of only the user specified. |
| Content-Type*string | Must be `application/vnd.api+json`. |

### Request

## URI Parameters

| project_idstring | The unique identifier of a project.
For BIM 360 Docs, the project ID in the Data Management API corresponds to the project ID in the BIM 360 API. To convert a project ID in the BIM 360 API into a project ID in the Data Management API you need to add a “**b.**" prefix. For example, a project ID of c8b0c73d-3ae9 translates to a project ID of **b.**c8b0c73d-3ae9. |
| --- | --- |

### Request

## Body Structure

The POST body is a JSON object with the following attributes.

| _jsonapi_*object | The JSON API object. |
| --- | --- |
| version*enum:string | The version of JSON API. Must always be: `1.0` |
| _data_*object | The data object. |
| type*enum:string | The type of this resource. Must always be: `commands` |
| attributes*object | The attributes of the data object. |
| extension*object | The extension object of the data. |
| type*enum:string | The type of command. Must always be: `commands:autodesk.core:ListRefs` |
| version*string | The version of the command. |
| relationships*object | An object that represents related resources.
In this case, it is used to list the resource’s metadata which should be retrieved. |
| resources*object | An object that represents related resources.
In this case, it is used to list the resource’s metadata which should be retrieved. |
| data*array:object | The list of versions you want to retrieve the relationships for. |
| type*enum:string | The type of resource. Must always be: `versions` |
| id*string | The URN of the version; to verify the URN, see the [GET projects/:project_id/items/:item_id/versions](https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-items-item_id-versions-GET) endpoint. |

### Response

## HTTP Status Code Summary

| 200OK | Successful execution of a command. |
| --- | --- |
| 400Bad Input | The request could not be understood by the server due to malformed syntax or missing request headers. The client SHOULD NOT repeat the request without modifications. The response body may give an indication of what is wrong with the request. |
| 403Forbidden | The request was successfully validated but permission is not granted or the application has not been white-listed. Do not try again unless you solve permissions first. |
| 404Not Found | The specified resource was not found. |

### Response

## Body Structure (200)

A successful response returns a JSON object with the following attributes.

| _jsonapi_object | The JSON API object. |
| --- | --- |
| versionenum:string | The version of JSON API. Will always be: `1.0` |
| _data_object | The data object. |
| idstring | Unique identifier of the command. |
| typeenum:string | The type of entity. Will always be: `commands` |
| attributesobject | The attributes of the data object. |
| statusenum:string | The status of the requested command. Possible values: `accepted`, `committed`, `completed`, `failed` |
| extensionobject | The extension object of the data. |
| typeenum:string | The type of command. Will always be: `commands:autodesk.core:ListRefs` |
| versionstring | The version of the command. |
| schemaobject | An object containing an API link property. |
| hrefstring | A hyperlink reference to this resource. |
| relationshipsobject | An object that represents related resources.
In this case, it is used to list the resource’s metadata. |
| resourcesobject | An object that represents related resources.
In this case, it is used to list the resource’s metadata. |
| dataarray: object | List of the relationships between the specified versions and other versions, items and folders. Each relationship returns a `type`, an `id`, and a `meta` object. |
| typeenum:string | The type of resource. Must always be: `versions` |
| idstring | The URN of the version. |
| metaobject | Includes metadata about the type and direction of the relationships. For information about the metadata, see the Custom Relationships and Extension Types sections in the [API Basics](https://aps.autodesk.com/en/docs/model-derivative/v2/overview/basics) section. |
| _included_array: object | List of relationships for each version that was passed in data.relationships.resources.data. |
| idstring | The URN of the resource. |
| typeenum:string | The type of the resource. Possible values: `items`, `versions` |
| attributesobject | The attributes of the resource. |
| displayNamestring | Displayable name of the version. |
| hiddenboolean | `true` if the file has been deleted. `false` if the file has not been deleted. |
| reservedboolean | Indicates the availability of the file. A reserved file can only be modified by the user that reserved it. |
| reservedTimedatetime: ISO 8601 | The time the item was reserved. |
| reservedUserIdstring | The unique identifier of the user who reserved the item. |
| reservedUserNamestring | The name of the user who reserved the item. |
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
| extensionobject | The extension object of the resource. |
| typestring | The type of the schema that the resource’s data object adheres to. |
| versionstring | The version of the schema that the data is adhering to. |
| schemaobject | An object containing an API link property. |
| hrefstring | A hyperlink reference to this resource. |
| dataobject | Additional properties that the resource’s data possesses. |
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

Successful Execution of a Command (200)

### Request

```
curl -X POST -H "Authorization: Bearer kEnG562yz5bhE9igXf2YTcZ2bu0z" -H "Content-Type: application/vnd.api+json" -d '
{
    "jsonapi": {
        "version": "1.0"
    },
    "data": {
        "type": "commands",
        "attributes": {
            "extension": {
                "type": "commands:autodesk.core:ListRefs",
                "version": "1.0.0"
            }
        },
        "relationships": {
            "resources": {
                "data": [
                    {
                        "type": "versions",
                        "id": "urn:adsk.wipqa:fs.file:vf.3pGffROYQx6efm0eR26DEg?version=1"
                    }
                ]
            }
        }
    }
}' "https://developer.api.autodesk.com/data/v1/projects/b.c2960674-2d1e-4cc8-a5f0-4b9026fd3f5d/commands/"
```

### Response

```
{
    "jsonapi": {
        "version": "1.0"
    },
    "data": {
        "type": "commands",
        "id": "61f0f2fe-a71f-4004-a5e4-de0ce2cd968c",
        "attributes": {
            "status": "complete",
            "extension": {
                "type": "commands:autodesk.core:ListRefs",
                "version": "1.0.0"
            }
        },
        "relationships": {
            "resources": {
                "data": [
                    {
                        "type": "versions",
                        "id": "urn:adsk.wipqa:fs.file:vf.3fcaI3iqS56R8OHUMdDSdg?version=1",
                        "meta": {
                            "refType": "derived",
                            "fromId": "urn:adsk.wipqa:fs.file:vf.3fcaI3iqS56R8OHUMdDSdg?version=1",
                            "fromType": "versions",
                            "toId": "urn:adsk.wipqa:fs.file:vf.3pGffROYQx6efm0eR26DEg?version=1",
                            "toType": "versions",
                            "direction": "to",
                            "extension": {
                                "type": "derived:autodesk.bim360:FileToDocument",
                                "version": "1.0",
                                "schema": {
                                    "href": "https://developer.api.autodesk.com/schema/v1/versions/derived:autodesk.bim360:FileToDocument-1.0"
                                },
                                "data": {}
                            }
                        }
                    }
                ]
            }
        }
    },
    "included": [
        {
            "type": "items",
            "id": "urn:adsk.wipqa:dm.lineage:3pGffROYQx6efm0eR26DEg",
            "attributes": {
                "displayName": "",
                "hidden": false,
                "reserved": false,
                "extension": {
                    "type": "items:autodesk.bim360:Document",
                    "version": "1.0",
                    "schema": {
                        "href": "https://developer.api.autodesk.com/schema/v1/versions/items:autodesk.bim360:Document-1.0"
                    },
                    "data": {}
                }
            },
            "links": {
                "self": {
                    "href": "https://developer.api.autodesk.com/data/v1/projects/b.c2960674-2d1e-4cc8-a5f0-4b9026fd3f5d/items/urn:adsk.wipqa:dm.lineage:3pGffROYQx6efm0eR26DEg"
                },
                "webView": {
                    "href": "https://docs.b360.autodesk.com/projects/c2960674-2d1e-4cc8-a5f0-4b9026fd3f5d/folders/urn%3Aadsk.wipprod%3Afs.folder%3Aco.0J4paz_FQgWPX2QRsaBkiw/detail/viewer/items/urn:adsk.wipqa:dm.lineage:3pGffROYQx6efm0eR26DEg"
                }
            }
        },
        {
            "type": "items",
            "id": "urn:adsk.wipqa:dm.lineage:3fcaI3iqS56R8OHUMdDSdg",
            "attributes": {
                "displayName": "BD4359-A-SK035-009_WC_Mock-up_Plan.pdf",
                "hidden": false,
                "reserved": false,
                "extension": {
                    "type": "items:autodesk.bim360:File",
                    "version": "1.0",
                    "schema": {
                        "href": "https://developer.api.autodesk.com/schema/v1/versions/items:autodesk.bim360:File-1.0"
                    },
                    "data": {}
                }
            },
            "links": {
                "self": {
                    "href": "https://developer.api.autodesk.com/data/v1/projects/b.c2960674-2d1e-4cc8-a5f0-4b9026fd3f5d/items/urn:adsk.wipqa:dm.lineage:3fcaI3iqS56R8OHUMdDSdg"
                }
            }
        },
        {
            "type": "versions",
            "id": "urn:adsk.wipqa:fs.file:vf.3pGffROYQx6efm0eR26DEg?version=1",
            "attributes": {
                "name": "SK035 INFORMATION",
                "displayName": "SK035 INFORMATION",
                "versionNumber": 1,
                "extension": {
                    "type": "versions:autodesk.bim360:Document",
                    "version": "1.0",
                    "schema": {
                        "href": "https://developer.api.autodesk.com/schema/v1/versions/versions:autodesk.bim360:Document-1.0"
                    },
                    "data": {
                        "processState": "PROCESSING_COMPLETE",
                        "viewableId": "1",
                        "viewableGuid": "bcd84049-3c9a-469f-b053-40cd535fe883",
                        "viewableName": "1",
                        "viewableOrder": 1
                    }
                }
            },
            "links": {
                "self": {
                    "href": "https://developer.api.autodesk.com/data/v1/projects/b.c2960674-2d1e-4cc8-a5f0-4b9026fd3f5d/versions/urn:adsk.wipqa:fs.file:vf.3pGffROYQx6efm0eR26DEg%3Fversion=1"
                }
            }
        },
        {
            "type": "versions",
            "id": "urn:adsk.wipqa:fs.file:vf.3fcaI3iqS56R8OHUMdDSdg?version=1",
            "attributes": {
                "name": "BD4359-A-SK035-009_WC_Mock-up_Plan.pdf",
                "displayName": "BD4359-A-SK035-009_WC_Mock-up_Plan.pdf",
                "versionNumber": 1,
                "storageSize": 46197,
                "fileType": "pdf",
                "extension": {
                    "type": "versions:autodesk.bim360:File",
                    "version": "1.0",
                    "schema": {
                        "href": "https://developer.api.autodesk.com/schema/v1/versions/versions:autodesk.bim360:File-1.0"
                    },
                    "data": {
                        "processState": "PROCESSING_COMPLETE",
                        "extractionState": "SUCCESS",
                        "splittingState": "SPLIT",
                        "reviewState": "ACCEPTED",
                        "revisionDisplayLabel": "1"
                    }
                }
            },
            "links": {
                "self": {
                    "href": "https://developer.api.autodesk.com/data/v1/projects/b.c2960674-2d1e-4cc8-a5f0-4b9026fd3f5d/versions/urn:adsk.wipqa:fs.file:vf.3fcaI3iqS56R8OHUMdDSdg%3Fversion=1"
                }
            }
        }
    ]
}
```

---
원본 문서: https://aps.autodesk.com/en/docs/data/v2/reference/http/ListRefs
