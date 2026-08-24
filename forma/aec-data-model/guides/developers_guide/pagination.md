---
title: "Pagination"
url_path: developers_guide/pagination
surface: guide
---
# Pagination

Pagination is a technique used to manage and display large datasets by dividing them into smaller and manageable pages. It allows users or applications to navigate through data incrementally, preventing information overload.

In this task, you will learn how to set up pagination, which allows you to efficiently navigate and work with large datasets. Pagination is a critical feature for user-friendly data navigation and essential for retrieving the right information.

**Cursor pagination:** The AEC Data Model API supports data retrieval through cursor-based pagination. It uses a unique identifier (the cursor) associated with each page to fetch the next set of results. This approach provides precise navigation through large datasets, ensuring efficient and responsive data retrieval.

## Step 1: Retrieving the first page

To access the initial page, you simply need to specify a page limit, and a cursor is not necessary. The cursor, embedded in the first response, aligns with your specified response limit. The cursor facilitates easy navigation to subsequent data pages beyond the first one until all available results have been displayed.

This activity demonstrates how to use the [AEC Data Model Explorer](https://aecdatamodel-explorer.autodesk.io/) to fetch the initial page of projects in a hub by setting a specific page limit:
- Enter the following query in the query pane.  **Note:** To limit the response to only three results, the pagination limit is set to three as follows: pagination: {limit: 3}. If you do not set a page limit, the query will return responses based on the default page limit. **Query** # Task 2 – Get Projects 

```
query GetProjects($hubId: ID!) {
  projects(hubId: $hubId, pagination:{limit:3}) {
    pagination {
      cursor
      }
    results {
      id
      name
      alternativeIdentifiers{
        externalProjectId
        }
      }
    }
  }
```

- In the **Query Variables** pane, enter the `hubId` to retrieve the projects from.  **Query variables** 

```
{
  "hubId":"b.03f98b13-ec95-461b-b945-765f496165c1"
}
```

- Click **Play**. The response will display a list of three projects, including an initial cursor value of `"cursor": "Y3Vyc34xfjM"`  **Query response** 

```
{
  "data": {
    "projects": {
      "pagination": {
        "cursor": "Y3Vyc34xfjM"
      },
      "results": [
        {
          "id": "YWltcHJvan5iLjAzZjk4YjEzLWVjOTUtNDYxYi1iOTQ1LTc2NWY0OTYxNjVjMX5iLjI1MTg2MzE1LWIyNWMtNDkxMC05MzkxLTllMGE4ZjhmNzA5Zg",
          "name": "JM AEC Data Model Samples",
          "alternativeIdentifiers": {
            "externalProjectId": "b.25186315-b25c-4910-9391-9e0a8f8f709f"
          }
        },
        {
          "id": "YWltcHJvan5iLjAzZjk4YjEzLWVjOTUtNDYxYi1iOTQ1LTc2NWY0OTYxNjVjMX5iLjg3OGIzMTkxLWRkNmEtNGUxOS04MzQ0LTYzNDU4NjUwNWQ5YQ",
          "name": "DAS AEC DM TEST PROJECT",
          "alternativeIdentifiers": {
            "externalProjectId": "b.878b3191-dd6a-4e19-8344-634586505d9a"
          }
        },
        {
          "id": "YWltcHJvan5iLjAzZjk4YjEzLWVjOTUtNDYxYi1iOTQ1LTc2NWY0OTYxNjVjMX5iLjkyY2Y1ZDMwLTYxZjYtNGE3Yi1iM2JmLWMyZDk0YjZmYjJkYg",
          "name": "AECDM API Project",
          "alternativeIdentifiers": {
            "externalProjectId": "b.92cf5d30-61f6-4a7b-b3bf-c2d94b6fb2db"
          }
        }
      ]
    }
  }
}
```

## Step 2: Navigate to the next page using a cursor

This step demonstrates how to use the acquired cursor to browse through the data on the remaining pages that contain the search results. To navigate to the next page, we will use the previously generated encoded cursor value as `"cursor": "Y3Vyc34xfjM"` in our query to fetch data set. To establish the search index, the obtained encoded cursor must be passed in the query pane like this: `pagination: {cursor: "Y3Vyc34xfjM"}`.
- Enter the following query in the query pane.  **Query**  # Task 2 – Get Projects  

```
query GetProjects($hubId: ID!) {
  projects(hubId: $hubId, pagination:{cursor:"dXJuOmFkc2sud29ya3NwYWNlOnByb2QucHJvamVjdDo1NjZkOWNiNi0yOTA3LTRhOWQtYWU4OC0zYmI3Y2YyZjE4Yjd-Mw"}) {
    pagination {
      cursor
      }
    results {
      id
      name
      alternativeIdentifiers{
        dataManagementAPIProjectId
        }
      }
    }
  }
```

- In the Query Variables Pane, enter the `hubId` to retrieve the projects from.  **Query variables** 

```
{
  "hubId":"urn:adsk.ace:prod.scope:dccde3e3-c20c-40d3-a27c-7ac53b051b6e"
}
```

- Click **Play**. You will see one of the following cases:   In case your hub still has enough projects to fill additional pages, you’ll receive a list with the next three projects and another cursor.
- If there aren’t enough projects to display an additional page, your response will display the remaining projects and the value `"cursor":null` under pagination.

**Query response**

```
{
  "data": {
    "projects": {
      "pagination": {
        "cursor": "dXJuOmFkc2sud29ya3NwYWNlOnByb2QucHJvamVjdDo2NDllNzQ2My0wZTc1LTRjMDMtOWM5Zi0zNDUwNzMzMzc4ZWN-Mw"
      },
      "results": [
        {
          "id": "urn:adsk.workspace:prod.project:566d9cb6-2907-4a9d-ae88-3bb7cf2f18b7",
          "name": "Construction : Sample Project - Seaport Civic Center",
          "alternativeIdentifiers": {
            "dataManagementAPIProjectId": "b.9177ea8c-efb4-4612-8ef1-6e4ce114658c"
          }
        },
        {
          "id": "urn:adsk.workspace:prod.project:336b2f25-ceba-4375-bd9e-75dd03bb1ee9",
          "name": "DAS Project",
          "alternativeIdentifiers": {
            "dataManagementAPIProjectId": "b.2def426a-c49a-4c35-9d9a-0290e254fc1d"
          }
        },
        {
          "id": "urn:adsk.workspace:prod.project:24dc6d5e-7ea1-4858-8b52-9c72abc2a592",
          "name": "JM tests",
          "alternativeIdentifiers": {
            "dataManagementAPIProjectId": "b.b5936885-90cd-40a7-aae5-89059ebbd557"
          }
        }
      ]
    }
  }
}
```

## Usage

Refer to the following table for the reference values:

| Used by query | Description | Default limit | Maximum limit |
| --- | --- | --- | --- |
| [Hubs](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/hubs) | Contains a list of hubs returned in response to a query. A hub is a container of projects, shared resources, and users with a common context. | 100 | 200 |
| [Projects](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/projects) | Contains a list of projects returned in response to a query. | 100 | 200 |
| [Folders](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/folders) | Contains a list of hubs returned in response to a query. A hub is a container of projects, shared resources, and users with a common context. | 100 | 200 |
| [Elementgroups](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/elementgroups) | Contains a list of object representing versions of drawings, typically returned in response to a query. | 50 | 100 |
| [Versions](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/elementgroupversions) | Contains a list of object representing versions of drawings, typically returned in response to a query. | 50 | 100 |
| [Elements](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/elements) | Contains a list of object representing elements of a specific Elementgroups. | 50 | 500 |
| [Properties](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/properties) | Contains a list of object representing properties of a specific element. | 100 | 500 |

## Page limit

You may specify the `limit` attribute for each field, defining the number of items to be retrieved per page. The `limit` attribute is adjustable within the range of 1 to a maximum value based on the queried object. If not specified, it will default to the appropriate value based on the queried object.

---
원본 문서: https://aps.autodesk.com/en/docs/aecdatamodel/v1/developers_guide/pagination
