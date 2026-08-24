---
title: "elementsByHub"
url_path: reference/queries/elementsbyhub
surface: graphql
reference_kind: query
graphql_name: "elementsByHub"
---
# elementsByHub

![query](https://developer.doc.autodesk.com/bPlouYTd/forge-aim-graphql-docs-main-695451/_images/badge_query.png)

Retrieves elements from given hub, using additional RSQL filters if provided.

**Template for Query:**

```
query GetElementsByHub($hubId: ID!, $filter: ElementFilterInput, $pagination: PaginationInput) {
  elementsByHub(hubId: $hubId, filter: $filter, pagination: $pagination) {
    # ElementsByHub Fields
  }
}
```

**Template for Query Variables:**

```
{
  "hubId" : "<SOME-ID-TYPE-SCALAR-VALUE>",
  "filter" : "<SOME-ELEMENTFILTER-INPUT-TYPE-VALUE>",
  "pagination" : "<SOME-PAGINATION-INPUT-TYPE-VALUE>"
}
```

## Arguments

| hubId*[ID!](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/scalars) `non-null` | Hub to retrieve elements from. |
| --- | --- |
| filter[ElementFilterInput](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/inputs/elementfilterinput) | RSQL filter to use for searching elements. |
| pagination[PaginationInput](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/inputs/paginationinput) | Specifies how to split the response into multiple pages. |

## Possible Returns

| Value Type | Description |
| --- | --- |
| [Elements](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/elements) | Contains a list of Elements returned in response to a query. |

## Examples

### Example 1

Retrieves elements of category ‘Windows’ across elementgroups under a hub by hub ID.

**Query:**

```
query GetElementsByHub($hubId: ID!, $filter: ElementFilterInput, $pagination: PaginationInput) {
  elementsByHub(hubId: $hubId, filter: $filter, pagination: $pagination) {
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
  "hubId": "b.e4fbd315-2dc5-4026-8ca3-80f09d24ff42",
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
    "elementsByHub": {
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
원본 문서: https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/queries/elementsbyhub
