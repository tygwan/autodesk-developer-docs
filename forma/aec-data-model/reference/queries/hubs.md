---
title: "hubs"
url_path: reference/queries/hubs
surface: graphql
reference_kind: query
graphql_name: "hubs"
---
# hubs

![query](https://developer.doc.autodesk.com/bPlouYTd/forge-aim-graphql-docs-main-695451/_images/badge_query.png)

Retrieves all hubs that match the specified criteria.

A Hub is a container of projects, shared resources, and users with a common context.

**Template for Query:**

```
query GetHubs($filter: HubFilterInput, $pagination: PaginationInput) {
  hubs(filter: $filter, pagination: $pagination) {
    # Hubs Fields
  }
}
```

**Template for Query Variables:**

```
{
  "filter" : "<SOME-HUBFILTER-INPUT-TYPE-VALUE>",
  "pagination" : "<SOME-PAGINATION-INPUT-TYPE-VALUE>"
}
```

## Arguments

| filter[HubFilterInput](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/inputs/hubfilterinput) | Specifies how to filter a list of hubs. You can filter by name. |
| --- | --- |
| pagination[PaginationInput](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/inputs/paginationinput) | Specifies how to split the response into multiple pages. |

## Possible Returns

| Value Type | Description |
| --- | --- |
| [Hubs](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/hubs) | Contains a list of hubs returned in response to a query. A hub is a container of projects, shared resources, and users with a common context. |

## Examples

### Example 1

Retrieves all hubs you have access to.

**Query:**

```
query GetHubs {
  hubs {
    results {
      id
      name
    }
  }
}
```

**Query Variables:**

```
{
}
```

**Response:**

```
{
  "data": {
    "hubs": {
      "results": [
        {
          "name": "Revit Nexus",
          "id": "b.e4fbd315-2dc5-4026-8ca3-80f09d24ff42"
        },
        {
          "name": "Golden Gate",
          "id": "b.5c07c84c-bbd9-476e-8712-547f74c5b76b"
        }
      ]
    }
  }
}
```

---
원본 문서: https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/queries/hubs
