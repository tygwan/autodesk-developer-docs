---
title: "GET hubs/:hub_id"
url_path: reference/http///hubs-hub_id-GET
product: "Data Management API"
surface: "data-management-v2"
protocol: "REST"
document_kind: "endpoint"
api_version: "v2"
section: "reference"
category: "http"
operation_id: "hubs-hub_id-GET"
method: "GET"
path: "/project/v1/hubs/{hub_id}"
auth_context: "user context optional"
scopes: ["data:read"]
verification: "docs-only"
---
# hubs/:hub_id

Returns data on a specific `hub_id`.

For BIM 360 Docs, a Data Management Hub ID corresponds to an Account ID. For Forma, a Data Management Hub ID corresponds to a Forma Hub ID. To convert either to a Data Management Hub ID, prefix the ID with `b.` For example, a BIM 360 Account ID or Forma Hub ID of `c8b0c73d-3ae9` translates to a Data Management Hub ID of `b.c8b0c73d-3ae9`.

## Resource Information

| Method and URI | GET https://developer.api.autodesk.com/project/v1/hubs/:hub_id |
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

### Response

## HTTP Status Code Summary

| 200OK | Successful retrieval of a specific hub. |
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
| dataobject | The object containing information on the hub. |
| typeenum:string | The type of this resource. Will always be: `hubs` |
| idstring | The id of the resource. |
| attributesobject | The attributes of the hub. |
| namestring | Displayable name of the hub. |
| extensionobject | The extension object of the data. |
| typestring | The type of the schema that the resource’s data object adheres to. |
| versionstring | The version of the schema that the data is adhering to. |
| schemaobject | An object containing an API link property. |
| hrefstring | A hyperlink reference to this resource. |
| dataobject | Additional properties that the resource’s data possesses. |
| regionenum:string | Specifies where the hub is stored. Possible values are:

`US` - Data center for the US region.
`EMEA` - Data center for the European Union, Middle East, and Africa.
`AUS` - Data center for the Australia region.
`CAN` - Data center for the Canada region.
`DEU` - Data centre for the Germany region.
`IND` - Data centre for the India region.
`JPN` - Data centre for the Japan region.
`GBR` - Data centre for the United Kingdom region. |
| relationshipsobject | The resources that share a relationship with this hub. |
| projectsobject | Information on resources that are found under this resource. |
| linksobject | The object containing information on links of related resources. |
| relatedobject | An object containing an API link property. |
| hrefstring | A hyperlink reference to this resource. |
| pimCollectionobject | Information on the id and type properties of a resource. This is available only for Fusion Team hubs and A360 Personal hubs. |
| dataobject | An object containing the id and type properties of a resource. |
| idstring | The id of the resource. |
| typestring | The type of this resource. |
| linksobject | Information on links to this resource. |
| selfobject | An object containing an API link property. |
| hrefstring | A hyperlink reference to this resource. |

## Example

Successful retrieval of a specific hub.

### Request

```
curl -v 'https://developer.api.autodesk.com/project/v1/hubs/:hub_id' \
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
      "href": "/project/v1/hubs/a.ZXhhbXBsZTp3aXAxZnFhYXV0b2Rlc2sxNjE"
    }
  },
  "data": {
    "type": "hubs",
    "id": "a.ZXhhbXBsZTp3aXAxZnFhYXV0b2Rlc2sxNjE",
    "attributes": {
      "name": "my hub",
      "extension": {
        "data": {},
        "version": "1.0",
        "type": "hubs:autodesk.core:Hub",
        "schema": {
          "href": "/schema/v1/versions/hubs%3Aautodesk.core%3AHub-1.0"
        }
      },
      "region": "US"
    },
    "relationships": {
      "projects": {
        "links": {
          "related": {
            "href": "/project/v1/hubs/a.ZXhhbXBsZTp3aXAxZnFhYXV0b2Rlc2sxNjE/projects"
          }
        }
      },
      "pimCollection": {
        "data": {
          "type": "collection",
          "id": "co.d41d8cd00998ecf8427e"
        }
      }
    },
    "links": {
      "self": {
        "href": "/project/v1/hubs/a.ZXhhbXBsZTp3aXAxZnFhYXV0b2Rlc2sxNjE"
      }
    }
  }
}
```

---
원본 문서: https://aps.autodesk.com/en/docs/data/v2/reference/http/hubs-hub_id-GET
