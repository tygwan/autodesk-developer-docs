---
title: "elementsByElementGroupParallel"
url_path: reference/queries/elementsbyelementgroupparallel
surface: graphql
reference_kind: query
graphql_name: "elementsByElementGroupParallel"
---
# elementsByElementGroupParallel

![query](https://developer.doc.autodesk.com/bPlouYTd/forge-aim-graphql-docs-main-695451/_images/badge_query.png)

Retrieves elements from given elementGroup, use elementsByElementGroupParallelCursors to generate the innitial cursors.

**Template for Query:**

```
query GetElementsByElementGroupParallel($elementGroupId: ID!, $pagination: PaginationInput!) {
  elementsByElementGroupParallel(elementGroupId: $elementGroupId, pagination: $pagination) {
    # ElementsByElementGroupParallel Fields
  }
}
```

**Template for Query Variables:**

```
{
  "elementGroupId" : "<SOME-ID-TYPE-SCALAR-VALUE>",
  "pagination" : "<SOME-PAGINATION-INPUT>"
}
```

## Arguments

| elementGroupId*[ID!](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/scalars) `non-null` | ElementGroup to retrieve elements from. |
| --- | --- |
| pagination*[PaginationInput!](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/inputs/paginationinput) `non-null` | Specifies how to split the response into multiple pages. |

## Possible Returns

| Value Type | Description |
| --- | --- |
| [Elements](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/elements) | Contains a list of Elements returned in response to a query. |

## Examples

---
원본 문서: https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/queries/elementsbyelementgroupparallel
