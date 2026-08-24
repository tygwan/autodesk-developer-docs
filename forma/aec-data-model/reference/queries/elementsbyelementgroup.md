---
title: "elementsByElementGroup"
url_path: reference/queries/elementsbyelementgroup
surface: graphql
reference_kind: query
graphql_name: "elementsByElementGroup"
---
# elementsByElementGroup

![query](https://developer.doc.autodesk.com/bPlouYTd/forge-aim-graphql-docs-main-695451/_images/badge_query.png)

Retrieves elements from given elementGroup, using additional RSQL filters if provided.

**Template for Query:**

```
query GetElementsByElementGroup($elementGroupId: ID!, $filter: ElementFilterInput, $pagination: PaginationInput) {
  elementsByElementGroup(elementGroupId: $elementGroupId, filter: $filter, pagination: $pagination) {
    # ElementsByElementGroup Fields
  }
}
```

**Template for Query Variables:**

```
{
  "elementGroupId" : "<SOME-ID-TYPE-SCALAR-VALUE>",
  "filter" : "<SOME-ELEMENTFILTER-INPUT-TYPE-VALUE>",
  "pagination" : "<SOME-PAGINATION-INPUT-TYPE-VALUE>"
}
```

## Arguments

| elementGroupId*[ID!](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/scalars) `non-null` | ElementGroup to retrieve elements from. |
| --- | --- |
| filter[ElementFilterInput](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/inputs/elementfilterinput) | RSQL filter to use for searching elements. |
| pagination[PaginationInput](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/inputs/paginationinput) | Specifies how to split the response into multiple pages. |

## Possible Returns

| Value Type | Description |
| --- | --- |
| [Elements](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/elements) | Contains a list of Elements returned in response to a query. |

## Examples

---
원본 문서: https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/queries/elementsbyelementgroup
