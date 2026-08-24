---
title: "GetPublishModelJob"
url_path: reference/http//GetPublishModelJob
product: "Data Management API"
surface: "data-management-v2"
protocol: "REST"
document_kind: "endpoint"
api_version: "v2"
section: "reference"
category: "http"
operation_id: "GetPublishModelJob"
method: "POST"
path: "/data/v1/projects/{project_id}/commands"
auth_context: "user context required"
scopes: ["data:read"]
verification: "docs-only"
---
# GetPublishModelJob

Verifies whether a Collaboration for Revit (C4R) model needs to be published to BIM 360 Docs.

Before using this command you need to:
- [Initiate collaboration through Revit](https://knowledge.autodesk.com/support/collaboration-for-revit), and select BIM 360 Docs. This creates the first version in BIM 360 Docs.
- Modify the model locally, and [synchronize the changes with the central model](https://knowledge.autodesk.com/support/collaboration-for-revit/learn-explore/caas/video/youtube/watch-v-RMlxaygDaU8.html).

Every time you synchronize the current model with the central model, it sets the `data` attribute to `null`. When you publish the latest version to BIM 360 Docs (using the [PublishModel](https://aps.autodesk.com/en/docs/data/v2/reference/http/PublishModel) command), it sets the status to `processing` or `complete`.

To publish the model to BIM 360 Docs, use the the [PublishModel](https://aps.autodesk.com/en/docs/data/v2/reference/http/PublishModel) command.

For more details about the workflow for using the GetPublishModelJob command, see the [Publish a C4R Model to BIM 360 Docs](https://aps.autodesk.com/en/docs/data/v2/tutorials/publish-model) tutorial.

Note that GetPublishModelJob is a Data Management command. Commands enable you to perform complex operations on multiple resources rather than standard CRUD operations. For more details about commands, see the
[Commands](https://aps.autodesk.com/en/docs/data/v2/overview/commands) overview section.

## Resource Information

| Method and URI | POST https://developer.api.autodesk.com/data/v1/projects/:project_id/commands |
| --- | --- |
| Authentication Context | user context required |
| Required OAuth Scopes | `data:read` |
| Data Format | JSON |

### Request

## Headers

| Authorization*string | Must be `Bearer <token>`, where `<token>` is obtained via either a [two-legged](https://aps.autodesk.com/en/docs/oauth/v2/tutorials/get-2-legged-token) or [three-legged](https://aps.autodesk.com/en/docs/oauth/v2/tutorials/get-3-legged-token) OAuth flow. Note that it will not accept a two-legged token, unless you add the `x-user-id` header. |
| --- | --- |
| x-user-idstring | In a two-legged authentication context, the app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act on behalf of only the user specified. |
| Content-Type*string | Must be `application/vnd.api+json`. |

Note that for a three-legged OAuth flow or for a two-legged OAuth flow with user impersonation (`x-user-id`), the user must have at least view permission for the BIM 360 Docs folder you publish the model to.

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
| type*enum:string | The type of entity. Will always be: `commands` |
| attributes*object | The attributes of the data object. |
| extension*object | The extension object. |
| type*enum:string | The type of command. Will always be: `commands:autodesk.bim360:C4RModelGetPublishJob` |
| version*string | The version of the command. The current version is 1.0.0. |
| relationships*object | An object that represents related resources.
In this case, it is used for listing the resources to be published. |
| resources*object | An object that represents related resources.
In this case, it is used for listing the resources to be published. |
| data*array:object | The list of resources you want to get the publish status for. |
| id*string | The URN of the resource; for details about finding the URN, follow the initial steps in the [Publish a C4R Model to BIM 360 Docs](https://aps.autodesk.com/en/docs/data/v2/tutorials/publish-model) tutorial. |
| type*string | The type of resource. Will always be: `items` |

### Response

## HTTP Status Code Summary

| 200OK | Successful execution of a command. |
| --- | --- |
| 400Bad Input | The request could not be understood by the server due to malformed syntax or missing request headers. The client SHOULD NOT repeat the request without modifications. The response body may give an indication of what is wrong with the request. |
| 403Forbidden | The request was successfully validated but permission is not granted or the application has not been white-listed. Do not try again unless you solve permissions first. |
| 404Not Found | The specified resource was not found. |

### Response

## Body Structure (200)

Note that if you have updated the central model, the `data` attribute is set to `null` until you publish it. See the Examples below.

A successful response returns a JSON object with the following attributes.

| _jsonapi_object | The JSON API object. |
| --- | --- |
| versionenum:string | The version of JSON API. Will always be: `1.0` |
| _data_object | The data object. |
| idstring | Unique identifier of the command. |
| typeenum:string | The type of entity. Will always be: `commands` |
| attributesobject | The attributes of the data object. |
| statusenum:string | The status of the command. Possible values: `committed`, `complete` |
| extensionobject | The extension object of the data. |
| typeenum:string | The type of command. Will always be: `commands:autodesk.bim360:C4RModelGetPublishJob` |
| versionstring | The version of the command. |

## Example 1

Successful Retrieval of C4R Model Publish Status (200)

### Request

```
  curl -X POST -v "https://developer.api.autodesk.com/data/v1/projects/b.c2960674-2d1e-4cc8-a5f0-4b9026fd3f5d/commands/" -H "Authorization: Bearer kEnG562yz5bhE9igXf2YTcZ2bu0z" -H "Content-Type: application/vnd.api+json" -d '
  {
    "jsonapi": {
      "version": "1.0"
    },
    "data": {
      "type": "commands",
      "attributes": {
        "extension": {
          "type": "commands:autodesk.bim360:C4RModelGetPublishJob",
          "version": "1.0.0"
      }
    },
    "relationships": {
      "resources": {
        "data": [ { "type": "items", "id": "urn:adsk.wip:dm.file:hC6k4hndRWaeIVhIjvHu8w" } ]
      }
    }
  }
}'
```

### Response

```
{
  "data": {
    "type": "commands",
    "id": "d3bbe753-ae0a-450d-bbe3-cfd4648f0437",
    "attributes": {
      "status" : "complete",
      "extension": {
        "type": "commands:autodesk.bim360:C4RModelGetPublishJob",
        "version": "1.0.0"
      }
    }
  },
  "jsonapi": {
    "version": "1.0"
  }
}
```

## Example 2

Successful Retrieval of C4R Publish Status - Model Needs Publishing (200)

Note that if you have updated the central model, the `data` attribute is set to `null` until you publish it.

### Request

```
  curl -X POST -v "https://developer.api.autodesk.com/data/v1/projects/b.c2960674-2d1e-4cc8-a5f0-4b9026fd3f5d/commands/" -H "Authorization: Bearer kEnG562yz5bhE9igXf2YTcZ2bu0z" -H "Content-Type: application/vnd.api+json" -d '
  {
    "jsonapi": {
      "version": "1.0"
    },
    "data": {
      "type": "commands",
      "attributes": {
        "extension": {
          "type": "commands:autodesk.bim360:C4RModelGetPublishJob",
          "version": "1.0.0"
      }
    },
    "relationships": {
      "resources": {
        "data": [ { "type": "items", "id": "urn:adsk.wip:dm.file:hC6k4hndRWaeIVhIjvHu8w" } ]
      }
    }
  }
}'
```

### Response

```
{
  "data": null
  "jsonapi": {
    "version": "1.0"
  }
}
```

---
원본 문서: https://aps.autodesk.com/en/docs/data/v2/reference/http/GetPublishModelJob
