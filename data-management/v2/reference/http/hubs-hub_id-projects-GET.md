---
title: "GET hubs/:hub_id/projects"
url_path: reference/http///hubs-hub_id-projects-GET
product: "Data Management API"
surface: "data-management-v2"
protocol: "REST"
document_kind: "endpoint"
api_version: "v2"
section: "reference"
category: "http"
operation_id: "hubs-hub_id-projects-GET"
method: "GET"
path: "/project/v1/hubs/{hub_id}/projects"
auth_context: "user context optional"
scopes: ["data:read"]
verification: "docs-only"
---
# hubs/:hub_id/projects

Returns a collection of projects for a given `hub_id`. A project represents a BIM 360 Team project, a Fusion Team project, a BIM 360 Docs project, a Forma project, or an A360 Personal project. Multiple projects can be created within a single hub. Only active projects are listed.

For BIM 360 Docs, a Data Management Hub ID corresponds to an Account ID. For Forma, a Data Management Hub ID corresponds to a Forma Hub ID. To convert either to a Data Management Hub ID, prefix the ID with `b.` For example, a BIM 360 Account ID or Forma Hub ID of `c8b0c73d-3ae9` translates to a Data Management Hub ID of `b.c8b0c73d-3ae9`.

Similarly, to convert BIM 360 or Forma Project IDs to Data Management Project IDs, prefix them with `b.` For example, a Project ID of `c8b0c73d-3ae9` becomes `b.c8b0c73d-3ae9`.

## Resource Information

| Method and URI | GET https://developer.api.autodesk.com/project/v1/hubs/:hub_id/projects |
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

| hub_idstring | The unique identifier of a hub. |
| --- | --- |

### Request

## Query String Parameters

| filter[id]array: string | Filter by the `id` of the `ref` target. |
| --- | --- |
| filter[extension.type]array: string | Filter by the extension type. |
| page[number]int | Specifies what page to return. Page numbers start at 0, so the first page is page 0. |
| page[limit]int | Specifies the maximum number of elements to return in the page. The default value is 200. The min value is 1. The max value is 200. |

### Response

## HTTP Status Code Summary

| 200OK | Successful retrieval of the projects collection associated with a specific hub. |
| --- | --- |
| 400Bad Request | The request could not be understood by the server due to malformed syntax or missing request headers.
The client SHOULD NOT repeat the request without modifications. The response body may give an indication
of what is wrong with the request. |
| 401Unauthorized | The supplied Authorization header was not valid or the supplied token scope was not acceptable.
Verify Authentication and try again. |
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
| firstobject | An object containing an API link property. |
| hrefstring | A hyperlink reference to this resource. |
| prevobject | An object containing an API link property. |
| hrefstring | A hyperlink reference to this resource. |
| nextobject | An object containing an API link property. |
| hrefstring | A hyperlink reference to this resource. |
| dataarray: object | The array of project objects. |
| typeenum:string | The type of this resource. Will always be: `projects` |
| idstring | The id of the resource. |
| attributesobject | The attributes of the project. |
| namestring | Displayable name of the project. |
| scopesarray: string | The array of scopes applicable to this project. |
| extensionobject | The extension object of the data. |
| typestring | The type of the schema that the resource’s data object adheres to. |
| versionstring | The version of the schema that the data is adhering to. |
| schemaobject | An object containing an API link property. |
| hrefstring | A hyperlink reference to this resource. |
| dataobject | Additional properties that the resource’s data possesses. Note that the types of properties in the `data` object changes according to the resource type. |
| projectTypestring | The type of project. Only relevant for BIM 360 and Forma projects. Possible values: `BIM360` (for BIM 360 projects), `ACC` (for Forma projects). |
| relationshipsobject | The resources that share a relationship with this project. |
| hubobject | Information on resources that are found above this resource. |
| linksobject | The object containing information on links of related resources. |
| relatedobject | An object containing an API link property. |
| hrefstring | A hyperlink reference to this resource. |
| dataobject | An object containing the id and type properties of a resource. |
| idstring | The id of the resource. |
| typestring | The type of this resource. |
| rootFolderobject | Information on resources that are indirectly related to this resource. |
| metaobject | Meta-information on links to this resource. |
| linkobject | An object containing an API link property. |
| hrefstring | A hyperlink reference to this resource. |
| dataobject | An object containing the id and type properties of a resource. |
| idstring | The id of the resource. |
| typestring | The type of this resource. |
| topFoldersobject | Information on resources that are found under this resource. |
| linksobject | The object containing information on links of related resources. |
| relatedobject | An object containing an API link property. |
| hrefstring | A hyperlink reference to this resource. |
| issuesobject | Information on resources that are indirectly related to this resource. This is available only with BIM360. |
| metaobject | Meta-information on links to this resource. |
| linkobject | An object containing an API link property. |
| hrefstring | A hyperlink reference to this resource. |
| dataobject | An object containing the id and type properties of a resource. |
| idstring | The id of the resource. |
| typestring | The type of this resource. |
| submittalsobject | Information on resources that are indirectly related to this resource. This is available only with BIM360. |
| metaobject | Meta-information on links to this resource. |
| linkobject | An object containing an API link property. |
| hrefstring | A hyperlink reference to this resource. |
| dataobject | An object containing the id and type properties of a resource. |
| idstring | The id of the resource. |
| typestring | The type of this resource. |
| rfisobject | Information on resources that are indirectly related to this resource. This is available only with BIM360. |
| metaobject | Meta-information on links to this resource. |
| linkobject | An object containing an API link property. |
| hrefstring | A hyperlink reference to this resource. |
| dataobject | An object containing the id and type properties of a resource. |
| idstring | The id of the resource. |
| typestring | The type of this resource. |
| markupsobject | Information on resources that are indirectly related to this resource. This is available only with BIM360. |
| metaobject | Meta-information on links to this resource. |
| linkobject | An object containing an API link property. |
| hrefstring | A hyperlink reference to this resource. |
| dataobject | An object containing the id and type properties of a resource. |
| idstring | The id of the resource. |
| typestring | The type of this resource. |
| checklistsobject | Information on resources that are indirectly related to this resource. This is available only with BIM360. |
| metaobject | Meta-information on links to this resource. |
| linkobject | An object containing an API link property. |
| hrefstring | A hyperlink reference to this resource. |
| dataobject | An object containing the id and type properties of a resource. |
| idstring | The id of the resource. |
| typestring | The type of this resource. |
| costobject | Information on resources that are indirectly related to this resource. This is available only with BIM360. |
| metaobject | Meta-information on links to this resource. |
| linkobject | An object containing an API link property. |
| hrefstring | A hyperlink reference to this resource. |
| dataobject | An object containing the id and type properties of a resource. |
| idstring | The id of the resource. |
| typestring | The type of this resource. |
| locationsobject | Information on resources that are indirectly related to this resource. This is available only with BIM360. |
| metaobject | Meta-information on links to this resource. |
| linkobject | An object containing an API link property. |
| hrefstring | A hyperlink reference to this resource. |
| dataobject | An object containing the id and type properties of a resource. |
| idstring | The id of the resource. |
| typestring | The type of this resource. |
| linksobject | Information on links to this resource. |
| selfobject | An object containing an API link property. |
| hrefstring | A hyperlink reference to this resource. |
| webViewobject | An object containing a link that opens the resource in a browser. |
| hrefstring | The location (URL) of the resource the link goes to. |

## Example

Successful retrieval of the projects collection associated with a specific hub.

### Request

```
curl -v 'https://developer.api.autodesk.com/project/v1/hubs/:hub_id/projects' \
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
      "href": "https://developer.api.autodesk.com/project/v1/hubs/b.622cb5d1-581b-4a46-a6d9-4ebc68ea4051/projects"
    }
  },
  "data": [
    {
      "type": "projects",
      "id": "b.c2960674-2d1e-4cc8-a5f0-4b9026fd3f5d",
      "attributes": {
        "name": "my project",
        "scopes": [
          "global"
        ],
        "extension": {
          "type": "projects:autodesk.bim360:Project",
          "version": "1.0",
          "schema": {
            "href": "https://developer.api.autodesk.com/schema/v1/versions/projects:autodesk.bim360:Project-1.0"
          },
          "data": {
            "projectType": "BIM360"
          }
        }
      },
      "links": {
        "self": {
          "href": "https://developer.api.autodesk.com/project/v1/hubs/b.622cb5d1-581b-4a46-a6d9-4ebc68ea4051/projects/b.c2960674-2d1e-4cc8-a5f0-4b9026fd3f5d"
        },
        "webView": {
          "href": "https://docs.b360.autodesk.com/projects/c2960674-2d1e-4cc8-a5f0-4b9026fd3f5d"
        }
      },
      "relationships": {
        "hub": {
          "data": {
            "type": "hubs",
            "id": "b.622cb5d1-581b-4a46-a6d9-4ebc68ea4051"
          },
          "links": {
            "related": {
              "href": "https://developer.api.autodesk.com/project/v1/hubs/b.622cb5d1-581b-4a46-a6d9-4ebc68ea4051"
            }
          }
        },
        "rootFolder": {
          "data": {
            "type": "folders",
            "id": "urn:adsk.wipprod:fs.folder:co.lw7b0sXUQ-6hWRgf34hBuw"
          },
          "meta": {
            "link": {
              "href": "https://developer.api.autodesk.com/data/v1/projects/b.c2960674-2d1e-4cc8-a5f0-4b9026fd3f5d/folders/urn:adsk.wipprod:fs.folder:co.lw7b0sXUQ-6hWRgf34hBuw"
            }
          }
        },
        "topFolders": {
          "links": {
            "related": {
              "href": "https://developer.api.autodesk.com/project/v1/hubs/b.622cb5d1-581b-4a46-a6d9-4ebc68ea4051/projects/b.c2960674-2d1e-4cc8-a5f0-4b9026fd3f5d/topFolders"
            }
          }
        },
        "issues": {
          "data": {
            "type": "issueContainerId",
            "id": "93f8bd6a-2222-415c-8d58-c8fa7c292044"
          },
          "meta": {
            "link": {
              "href": "https://developer.api.autodesk.com/issues/v1/containers/93f8bd6a-2222-415c-8d58-c8fa7c292044/issues"
            }
          }
        },
        "submittals": {
          "data": {
            "type": "submittalContainerId",
            "id": "c2960674-2d1e-4cc8-a5f0-4b9026fd3f5d"
          },
          "meta": {
            "link": {
              "href": "https://developer.api.autodesk.com/submittals/v1/containers/c2960674-2d1e-4cc8-a5f0-4b9026fd3f5d/items"
            }
          }
        },
        "rfis": {
          "data": {
            "type": "rfisContainerId",
            "id": "93f8bd6a-2222-415c-8d58-c8fa7c292044"
          },
          "meta": {
            "link": {
              "href": "https://developer.api.autodesk.com/bim360/rfis/v1/containers/93f8bd6a-2222-415c-8d58-c8fa7c292044/rfis"
            }
          }
        },
        "markups": {
          "data": {
            "type": "markupsContainerId",
            "id": "93f8bd6a-2222-415c-8d58-c8fa7c292044"
          },
          "meta": {
            "link": {
              "href": "https://developer.api.autodesk.com/issues/v1/containers/93f8bd6a-2222-415c-8d58-c8fa7c292044/markups"
            }
          }
        },
        "checklists": {
          "data": {
            "type": "checklistsContainerId",
            "id": "93f8bd6a-2222-415c-8d58-c8fa7c292044"
          },
          "meta": {
            "link": {
              "href": "https://developer.api.autodesk.com/bim360/checklists/v1/containers/93f8bd6a-2222-415c-8d58-c8fa7c292044/instances"
            }
          }
        },
        "cost": {
          "data": {
            "type": "costContainerId",
            "id": "c2960674-2d1e-4cc8-a5f0-4b9026fd3f5d"
          },
          "meta": {
            "link": {
              "href": "https://developer.api.autodesk.com/cost/v1/containers/c2960674-2d1e-4cc8-a5f0-4b9026fd3f5d/budgets"
            }
          }
        },
        "locations": {
          "data": {
            "type": "locationsContainerId",
            "id": "5010258a-a341-4d95-8046-3905e1a983a6"
          },
          "meta": {
            "link": {
              "href": "https://developer.api.autodesk.com/bim360/locations/v2/containers/5010258a-a341-4d95-8046-3905e1a983a6/trees/default/nodes"
            }
          }
        }
      }
    }
  ]
}
```

## Example

Successful retrieval of the projects collection associated with a specific hub with pagination.

### Request

```
curl -v 'https://developer.api.autodesk.com/project/v1/hubs/:hub_id/projects?page[number]=1&page[limit]=2' \
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
      "href": "/project/v1/hubs/a.ZXhhbXBsZTp3aXAxZnFhYXV0b2Rlc2sxNjE/projects"
    },
    "first": {
        "href": "project/v1/hubs/a.ZXhhbXBsZTp3aXAxZnFhYXV0b2Rlc2sxNjE/projects?page%5Bnumber%5D=0&page%5Blimit%5D=2"
    },
    "prev": {
        "href": "/project/v1/hubs/a.ZXhhbXBsZTp3aXAxZnFhYXV0b2Rlc2sxNjE/projects?page%5Bnumber%5D=0&page%5Blimit%5D=2"
    },
    "next": {
        "href": "/project/v1/hubs/a.ZXhhbXBsZTp3aXAxZnFhYXV0b2Rlc2sxNjE/projects?page%5Bnumber%5D=2&page%5Blimit%5D=2"
    }
  },
  "data": [
    {
      "type": "projects",
      "id": "a.ZXhhbXBsZTp3aXAxZnFhYXV0b2Rlc2sxNjEjMjAyMzAzMTcwMDAwMDAx",
      "attributes": {
        "name": "my project",
        "scopes": [
          "global"
        ],
        "extension": {
          "type": "projects:autodesk.core:Project",
          "version": "1.0",
          "schema": {
            "href": "/schema/v1/versions/projects%3Aautodesk.core%3AProject-1.0"
          },
          "data": {
              "projectType": "ACC"
          }
        }
      },
      "links": {
        "self": {
          "href": "/project/v1/hubs/a.ZXhhbXBsZTp3aXAxZnFhYXV0b2Rlc2sxNjE/projects/a.ZXhhbXBsZTp3aXAxZnFhYXV0b2Rlc2sxNjEjMjAyMzAzMTcwMDAwMDAx"
        }
      },
      "relationships": {
        "hub": {
          "data": {
            "type": "hubs",
            "id": "a.ZXhhbXBsZTp3aXAxZnFhYXV0b2Rlc2sxNjE"
          },
          "links": {
            "related": {
              "href": "/project/v1/hubs/a.ZXhhbXBsZTp3aXAxZnFhYXV0b2Rlc2sxNjE"
            }
          }
        },
        "rootFolder": {
          "data": {
            "type": "folders",
            "id": "urn:adsk.wipprod:dm.folder:hC6k4hndRWaeIVhIjvHu8w"
          },
          "meta": {
            "link": {
              "href": "/data/v1/projects/a.ZXhhbXBsZTp3aXAxZnFhYXV0b2Rlc2sxNjEjMjAyMzAzMTcwMDAwMDAx/folders/urn%3Aadsk.wipprod%3Adm.folder%3AhC6k4hndRWaeIVhIjvHu8w"
            }
          }
        },
        "topFolders": {
          "links": {
            "related": {
              "href": "/project/v1/hubs/a.ZXhhbXBsZTp3aXAxZnFhYXV0b2Rlc2sxNjE/projects/a.ZXhhbXBsZTp3aXAxZnFhYXV0b2Rlc2sxNjEjMjAyMzAzMTcwMDAwMDAx/topFolders"
            }
          }
        }
      }
    },
    {
      "type": "projects",
      "id": "a.ZXhhbXBsZTp3aXAxZnFhYXV0b2Rlc2sxNjEjMjAyMzAzMTcwMDAwMDAx",
      "attributes": {
        "name": "my project",
        "scopes": [
          "global"
        ],
        "extension": {
          "type": "projects:autodesk.core:Project",
          "version": "1.0",
          "schema": {
            "href": "/schema/v1/versions/projects%3Aautodesk.core%3AProject-1.0"
          },
          "data": {}
        }
      },
      "links": {
        "self": {
          "href": "/project/v1/hubs/a.ZXhhbXBsZTp3aXAxZnFhYXV0b2Rlc2sxNjE/projects/a.ZXhhbXBsZTp3aXAxZnFhYXV0b2Rlc2sxNjEjMjAyMzAzMTcwMDAwMDAx"
        }
      },
      "relationships": {
        "hub": {
          "data": {
            "type": "hubs",
            "id": "a.ZXhhbXBsZTp3aXAxZnFhYXV0b2Rlc2sxNjE"
          },
          "links": {
            "related": {
              "href": "/project/v1/hubs/a.ZXhhbXBsZTp3aXAxZnFhYXV0b2Rlc2sxNjE"
            }
          }
        },
        "rootFolder": {
          "data": {
            "type": "folders",
            "id": "urn:adsk.wipprod:dm.folder:hC6k4hndRWaeIVhIjvHu8w"
          },
          "meta": {
            "link": {
              "href": "/data/v1/projects/a.ZXhhbXBsZTp3aXAxZnFhYXV0b2Rlc2sxNjEjMjAyMzAzMTcwMDAwMDAx/folders/urn%3Aadsk.wipprod%3Adm.folder%3AhC6k4hndRWaeIVhIjvHu8w"
            }
          }
        },
        "topFolders": {
          "links": {
            "related": {
              "href": "/project/v1/hubs/a.ZXhhbXBsZTp3aXAxZnFhYXV0b2Rlc2sxNjE/projects/a.ZXhhbXBsZTp3aXAxZnFhYXV0b2Rlc2sxNjEjMjAyMzAzMTcwMDAwMDAx/topFolders"
            }
          }
        }
      }
    }
  ]
}
```

---
원본 문서: https://aps.autodesk.com/en/docs/data/v2/reference/http/hubs-hub_id-projects-GET
