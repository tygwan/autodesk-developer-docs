---
title: "Verify Project Type"
url_path: overview/bim-360-compatibility/retrieve-project-id
surface: guide
---
# Verify the Project Type

This tutorial demonstrates how to use the Data Management API to verify whether a project in a BIM 360 account or a Forma hub is from the BIM 360 platform or from the Forma platform. This can be helpful, for example, if you have an app that is using both BIM 360 and Forma projects, and you want to manage users’ folder permissions - BIM 360 folders and Forma folders have slightly different sets of permissions.

The unified Forma platform is Autodesk’s new construction management software. For more information about Forma, see the [Forma](https://construction.autodesk.com/) website.

## Before You Begin
- [Register an app](https://aps.autodesk.com/myapps), and select the Data Management and BIM 360 APIs.
- Acquire a [2-legged](https://aps.autodesk.com/en/docs/oauth/v2/tutorials/get-2-legged-token/) or [3-legged](https://aps.autodesk.com/en/docs/oauth/v2/tutorials/get-3-legged-token/) OAuth token with the `data:read` scope.
- Verify that you have access to the relevant BIM 360 account or Forma hub.

## Step 1: Find the Hub ID for the BIM 360 Account or Forma Hub

Find the hub ID for the BIM 360 account or Forma hub you are interested in, by calling [GET hubs](https://aps.autodesk.com/en/docs/data/v2/reference/http/hubs-GET/).

### Request

```
curl -X GET -H "Authorization: Bearer nFRJxzCD8OOUr7hzBwbr06D76zAT" "https://developer.api.autodesk.com/project/v1/hubs"
```

### Response

```
{
  "jsonapi": {
    "version": "1.0"
  },
  "links": {
    "self": {
      "href": "https://developer.api.autodesk.com/project/v1/hubs"
    }
  },
  "data": [
    {
      "type": "hubs",
      "id": "b.d6cf8c84-c25e-4534-ae5c-62e08480e751",
      "attributes": {
        "name": "Acme Construction Group",
        "extension": {
          "type": "hubs:autodesk.bim360:Account",
          "version": "1.0",
          "schema": {
            "href": "https://developer.api.autodesk.com/schema/v1/versions/hubs:autodesk.bim360:Account-1.0"
          },
          "data": {}
        }
      }
    }
  ]
}
```

In this example, assume that the hub or account you are interested in is called `Acme Construction Group`.

Find the hub (`data.name`), and note the hub ID - `b.d6cf8c84-c25e-4534-ae5c-62e08480e751`.

## Step 2: Find the Project Type

To get a list of all the BIM 360 and Forma projects in the hub, use the hub ID (`b.d6cf8c84-c25e-4534-ae5c-62e08480e751`) to call [GET hubs/:hub_id/projects](https://aps.autodesk.com/en/docs/data/v2/reference/http/hubs-hub_id-projects-GET).

### Request

```
curl -X GET -H "Authorization: Bearer nFRJxzCD8OOUr7hzBwbr06D76zAT" "https://developer.api.autodesk.com/project/v1/hubs/b.d6cf8c84-c25e-4534-ae5c-62e08480e751/projects"
```

### Response

```
{
  "jsonapi": {
    "version": "1.0"
  },
  "links": {
    "self": {
      "href": "https://developer.api.autodesk.com/project/v1/hubs/b.d6cf8c84-c25e-4534-ae5c-62e08480e751/projects"
    }
  },
  "data": [
    {
      "type": "projects",
      "id": "f6a1e3b5-abaa-4b01-b33a-5d55f36ba047",
      "attributes": {
        "name": "PRJ-1024 – Office Tower",
        "extension": {
          "type": "projects:autodesk.core:Project",
          "version": "1.0",
          "data": {
              "projectType": "ACC"
                  }
        }
      }
    }
  ]
}
```

In this example, assume that `PRJ-1024 – Office Tower` is the project you are interested in.

Find the project (`data.attributes.name`) and note whether the project type (`data.attributes.extension.data.projectType`) is Forma (`ACC`) or BIM 360 (`BIM360`).

---
원본 문서: https://aps.autodesk.com/en/docs/acc/v1/overview/bim-360-compatibility/retrieve-project-id
