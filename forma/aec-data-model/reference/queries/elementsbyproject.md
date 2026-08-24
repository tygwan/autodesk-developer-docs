---
title: "elementsByProject"
url_path: reference/queries/elementsbyproject
surface: graphql
reference_kind: query
graphql_name: "elementsByProject"
---
# elementsByProject

![query](https://developer.doc.autodesk.com/bPlouYTd/forge-aim-graphql-docs-main-695451/_images/badge_query.png)

Retrieves elements from given project, using additional RSQL filters if provided.

**Template for Query:**

```
query GetElementsByProject($projectId: ID!, $filter: ElementFilterInput, $pagination: PaginationInput) {
  elementsByProject(projectId: $projectId, filter: $filter, pagination: $pagination) {
    # ElementsByProject Fields
  }
}
```

**Template for Query Variables:**

```
{
  "projectId" : "<SOME-ID-TYPE-SCALAR-VALUE>",
  "filter" : "<SOME-ELEMENTFILTER-INPUT-TYPE-VALUE>",
  "pagination" : "<SOME-PAGINATION-INPUT-TYPE-VALUE>"
}
```

## Arguments

| projectId*[ID!](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/scalars) `non-null` | Project to retrieve elements from. |
| --- | --- |
| filter[ElementFilterInput](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/inputs/elementfilterinput) | RSQL filter to use for searching elements. |
| pagination[PaginationInput](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/inputs/paginationinput) | Specifies how to split the response into multiple pages. |

## Possible Returns

| Value Type | Description |
| --- | --- |
| [Elements](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/elements) | Contains a list of Elements returned in response to a query. |

## Examples

### Example 1

Retrieves elements of category ‘Windows’ across elementgroups under a project by project ID.

**Query:**

```
query GetElementsByProject($projectId: ID!, $filter: ElementFilterInput, $pagination: PaginationInput) {
  elementsByProject(projectId: $projectId, filter: $filter, pagination: $pagination) {
    pagination {
      pageSize
      cursor
    }
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
  "projectId": "YWltcHJvan5iLmU0ZmJkMzE1LTJkYzUtNDAyNi04Y2EzLTgwZjA5ZDI0ZmY0Mn5iLjdhZGJmOWZkLWRlYmItNDI5Yy1iZmU1LTMyYTNjMjJjMDY5NQ",
  "filter": {
    "query": "property.name.category==Windows and 'property.name.Element Context'==Instance"
  },
  "pagination": {
    "limit": 5
  }
}
```

**Response:**

```
{
  "data": {
    "elementsByProject": {
      "pagination": {
        "pageSize": 5,
        "cursor": "YWRjdXJzfk5VTEx-QlE9PX41"
      },
      "results": [
        {
          "id": "YWVjZX5FMnRqOFJFOXRsSlRQNU9WVzBiaDZ4X0wyQ35QQllLNWlOb1NsQ283QVpEOVdUM0V3XzEyM2ViN2M",
          "name": "32.10-sparing tbv installaties_1400x600"
        },
        {
          "id": "YWVjZX5FMnRqOFJFOXRsSlRQNU9WVzBiaDZ4X0wyQ35QQllLNWlOb1NsQ283QVpEOVdUM0V3XzEyM2ViN2Q",
          "name": "32.10-sparing tbv installaties_1100x650"
        },
        {
          "id": "YWVjZX5FMnRqOFJFOXRsSlRQNU9WVzBiaDZ4X0wyQ35QQllLNWlOb1NsQ283QVpEOVdUM0V3XzEyM2ViODY",
          "name": "32.10-sparing tbv installaties_500x300"
        },
        {
          "id": "YWVjZX5FMnRqOFJFOXRsSlRQNU9WVzBiaDZ4X0wyQ35QQllLNWlOb1NsQ283QVpEOVdUM0V3XzEyM2ViOGE",
          "name": "32.10-sparing tbv installaties_625x150"
        },
        {
          "id": "YWVjZX5FMnRqOFJFOXRsSlRQNU9WVzBiaDZ4X0wyQ35QQllLNWlOb1NsQ283QVpEOVdUM0V3XzEyM2ViOGM",
          "name": "32.10-sparing tbv installaties_400x150"
        }
      ]
    }
  }
}
```

---
원본 문서: https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/queries/elementsbyproject
